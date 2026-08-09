#!/usr/bin/env node
// 375px 渲染校验：用 headless Chrome + CDP 打开每个 demo，断言无横向滚动
// （document.documentElement.scrollWidth === clientWidth）—— checklist.md「Layout」第一条，
// 也是历史上 demo 最常见的失败方式。测量前注入 animation:none，测的是静态布局终态。
// 零依赖：CDP 走 Node ≥22 内置的 WebSocket；Chrome 路径按 CHROME_PATH → macOS → PATH 顺序探测。
import { execFileSync, spawn } from 'node:child_process';
import { readdirSync, existsSync, mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const demosDir = path.join(root, 'public/demos');
const WIDTH = 375;
const HEIGHT = 812;

function findChrome() {
  if (process.env.CHROME_PATH) return process.env.CHROME_PATH;
  const mac = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
  if (existsSync(mac)) return mac;
  for (const bin of ['google-chrome', 'google-chrome-stable', 'chromium', 'chromium-browser']) {
    try {
      return execFileSync('which', [bin], { encoding: 'utf8' }).trim();
    } catch {
      /* 继续探测下一个 */
    }
  }
  return null;
}

const chrome = findChrome();
if (!chrome) {
  console.error('✗ 未找到 Chrome/Chromium（可用 CHROME_PATH 指定），跳过 375px 渲染校验');
  process.exit(1);
}

const profile = mkdtempSync(path.join(tmpdir(), 'dv-render-'));
const proc = spawn(chrome, [
  '--headless=new',
  '--remote-debugging-port=0',
  `--user-data-dir=${profile}`,
  `--window-size=${WIDTH},${HEIGHT}`,
  '--hide-scrollbars',
  '--disable-gpu',
  'about:blank',
]);

const cleanup = async () => {
  const exited = new Promise((r) => proc.on('exit', r));
  proc.kill();
  await Promise.race([exited, new Promise((r) => setTimeout(r, 3000))]);
  try {
    rmSync(profile, { recursive: true, force: true });
  } catch {
    /* 临时 profile 删不掉就留给系统清理 */
  }
};

// DevTools listening on ws://127.0.0.1:PORT/... 会打到 stderr
const port = await new Promise((resolve, reject) => {
  let buf = '';
  const timer = setTimeout(() => reject(new Error('等待 Chrome DevTools 端口超时')), 15000);
  proc.stderr.on('data', (d) => {
    buf += d;
    const m = /DevTools listening on ws:\/\/127\.0\.0\.1:(\d+)\//.exec(buf);
    if (m) {
      clearTimeout(timer);
      resolve(Number(m[1]));
    }
  });
  proc.on('exit', () => reject(new Error('Chrome 提前退出')));
}).catch(async (e) => {
  await cleanup();
  console.error(`✗ ${e.message}`);
  process.exit(1);
});

const targets = await (await fetch(`http://127.0.0.1:${port}/json`)).json();
const page = targets.find((t) => t.type === 'page');
const ws = new WebSocket(page.webSocketDebuggerUrl);
await new Promise((resolve, reject) => {
  ws.onopen = resolve;
  ws.onerror = () => reject(new Error('CDP WebSocket 连接失败'));
});

let msgId = 0;
const pending = new Map();
const waiters = [];
ws.onmessage = (ev) => {
  const msg = JSON.parse(ev.data);
  if (msg.id && pending.has(msg.id)) {
    pending.get(msg.id)(msg);
    pending.delete(msg.id);
  } else if (msg.method === 'Page.loadEventFired') {
    waiters.splice(0).forEach((r) => r());
  }
};
const send = (method, params = {}) =>
  new Promise((resolve) => {
    const id = ++msgId;
    pending.set(id, resolve);
    ws.send(JSON.stringify({ id, method, params }));
  });
const nextLoad = () => new Promise((r) => waiters.push(r));

await send('Page.enable');
// 桌面 Chrome 窗口宽度有 ~500px 下限，--window-size=375 会被钳制；
// 用 CDP 视口覆盖才能拿到真正的 375px 布局
await send('Emulation.setDeviceMetricsOverride', {
  width: WIDTH,
  height: HEIGHT,
  deviceScaleFactor: 1,
  mobile: true,
});

// 关掉动画后读静态布局终态；transform 动画的瞬态溢出不在本校验范围
const MEASURE = `(async () => {
  const s = document.createElement('style');
  s.textContent = '*,*::before,*::after{animation:none!important;transition:none!important}';
  document.head.appendChild(s);
  await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
  const d = document.documentElement;
  return JSON.stringify({ scrollWidth: d.scrollWidth, clientWidth: d.clientWidth });
})()`;

const demos = readdirSync(demosDir).filter((f) => f.endsWith('.html')).sort();
const errors = [];
for (const f of demos) {
  const loaded = nextLoad();
  await send('Page.navigate', { url: `file://${path.join(demosDir, f)}` });
  await loaded;
  const res = await send('Runtime.evaluate', {
    expression: MEASURE,
    awaitPromise: true,
    returnByValue: true,
  });
  const { scrollWidth, clientWidth } = JSON.parse(res.result.result.value);
  if (scrollWidth > clientWidth) {
    errors.push(`public/demos/${f} 在 ${WIDTH}px 下出现横向滚动（scrollWidth ${scrollWidth} > clientWidth ${clientWidth}）`);
  }
}

ws.close();
await cleanup();

if (errors.length) {
  console.error(`✗ 375px 渲染校验失败（${errors.length} 个问题）：`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}
console.log(`✓ 375px 渲染校验通过：${demos.length} 个 demo 均无横向滚动`);
