#!/usr/bin/env node
// 用系统 Chrome headless 为每个 demo 截 1200×630 社交分享图（og:image），
// 经 sips 压成 jpg 后存入 public/og/（随 vite build 自动进入 dist/og/）。
// demo 有增改时手动运行：pnpm og （仅 macOS + 安装了 Chrome 的环境需要）。
import { execFileSync } from 'node:child_process';
import { readdirSync, mkdirSync, rmSync, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const demosDir = path.join(root, 'public/demos');
const ogDir = path.join(root, 'public/og');

if (!existsSync(CHROME)) {
  console.error('✗ 未找到 Chrome，跳过 og:image 生成（不影响构建，只是分享无预览图）');
  process.exit(1);
}
mkdirSync(ogDir, { recursive: true });

function shoot(htmlPath, outId) {
  const png = path.join(ogDir, `${outId}.png`);
  const jpg = path.join(ogDir, `${outId}.jpg`);
  execFileSync(
    CHROME,
    [
      '--headless=new',
      `--screenshot=${png}`,
      '--window-size=1200,630',
      '--hide-scrollbars',
      '--disable-gpu',
      '--virtual-time-budget=3000',
      `file://${htmlPath}`,
    ],
    { stdio: 'pipe' }
  );
  execFileSync('sips', ['-s', 'format', 'jpeg', '-s', 'formatOptions', '80', png, '--out', jpg], {
    stdio: 'pipe',
  });
  rmSync(png);
}

const demos = readdirSync(demosDir).filter((f) => f.endsWith('.html'));
for (const f of demos) {
  const id = f.replace(/\.html$/, '');
  shoot(path.join(demosDir, f), id);
  console.log(`  og/${id}.jpg`);
}

// 首页分享图：用专门的品牌卡模板
const homeTpl = path.join(root, 'scripts/og-home.html');
if (existsSync(homeTpl)) {
  shoot(homeTpl, 'home');
  console.log('  og/home.jpg');
}

console.log(`✓ 已生成 ${demos.length + 1} 张 og:image 至 public/og/`);
