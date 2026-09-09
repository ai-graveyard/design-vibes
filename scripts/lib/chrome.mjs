import { spawn, execFileSync } from 'node:child_process';
import { mkdtempSync, rmSync, existsSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';

export async function openChrome() {
  let executable = process.env.CHROME_PATH;
  if (!executable && existsSync('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome')) executable = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
  if (!executable) for (const name of ['google-chrome', 'google-chrome-stable', 'chromium', 'chromium-browser']) {
    try { executable = execFileSync('which', [name], { encoding: 'utf8' }).trim(); break; } catch { /* Try the next executable. */ }
  }
  if (!executable) throw new Error('Chrome not found. Set CHROME_PATH.');
  const profile = mkdtempSync(path.join(tmpdir(), 'design-vibes-visual-'));
  const proc = spawn(executable, ['--headless=new', '--remote-debugging-port=0', `--user-data-dir=${profile}`, '--force-color-profile=srgb', '--hide-scrollbars', 'about:blank']);
  let socket;
  const close = async () => {
    socket?.close();
    const exited = new Promise(resolve => proc.once('exit', resolve));
    proc.kill();
    await Promise.race([exited, new Promise(resolve => setTimeout(resolve, 1000))]);
    rmSync(profile, { recursive: true, force: true });
  };
  try {
    const port = await new Promise((resolve, reject) => {
      const timer = setTimeout(() => reject(new Error('Chrome startup timed out')), 15000);
      let buffer = '';
      proc.stderr.on('data', data => { buffer += data; const match = /DevTools listening on ws:\/\/127\.0\.0\.1:(\d+)\//.exec(buffer); if (match) { clearTimeout(timer); resolve(match[1]); } });
      proc.once('exit', () => { clearTimeout(timer); reject(new Error('Chrome exited before startup')); });
    });
    const targets = await (await fetch(`http://127.0.0.1:${port}/json`)).json();
    socket = new WebSocket(targets.find(target => target.type === 'page').webSocketDebuggerUrl);
    await new Promise((resolve, reject) => { socket.onopen = resolve; socket.onerror = reject; });
    let id = 0;
    const pending = new Map();
    const errors = [];
    socket.onmessage = ({ data }) => {
      const message = JSON.parse(data);
      if (message.method === 'Runtime.exceptionThrown') errors.push(message.params.exceptionDetails.exception?.description ?? message.params.exceptionDetails.text);
      if (pending.has(message.id)) { const { resolve, reject, timer } = pending.get(message.id); clearTimeout(timer); pending.delete(message.id); if (message.error) reject(new Error(message.error.message)); else resolve(message.result); }
    };
    const send = (method, params = {}) => new Promise((resolve, reject) => {
      const requestId = ++id;
      const timer = setTimeout(() => { pending.delete(requestId); reject(new Error(`${method} timed out`)); }, 15000);
      pending.set(requestId, { resolve, reject, timer }); socket.send(JSON.stringify({ id: requestId, method, params }));
    });
    await send('Page.enable'); await send('Runtime.enable');
    const evaluate = async expression => {
      const response = await send('Runtime.evaluate', { expression, awaitPromise: true, returnByValue: true });
      if (response.exceptionDetails) throw new Error(response.exceptionDetails.exception?.description ?? response.exceptionDetails.text);
      return response.result.value;
    };
    return {
      close, send, evaluate, errors,
      async viewport(width, height, reduced = true) {
        await send('Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor: 1, mobile: false });
        await send('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-reduced-motion', value: reduced ? 'reduce' : 'no-preference' }] });
      },
      async navigate(url) {
        errors.length = 0;
        await send('Page.navigate', { url });
        const deadline = Date.now() + 12000;
        while (Date.now() < deadline) {
          const ready = await evaluate(`location.href === ${JSON.stringify(url)} && document.readyState === 'complete'`).catch(() => false);
          if (ready) break;
          await new Promise(resolve => setTimeout(resolve, 40));
        }
        await evaluate(`(async () => { await document.fonts.ready; await Promise.all([...document.images].map(i => i.decode().catch(() => {}))); await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r))); })()`);
      },
      async screenshot(file) { const { data } = await send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false }); writeFileSync(file, Buffer.from(data, 'base64')); },
    };
  } catch (error) { await close(); throw error; }
}
