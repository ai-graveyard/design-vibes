#!/usr/bin/env node
// 用系统 Chrome headless 为每个 demo 截 1280×800 卡片缩略图（16:10，与首页卡片 aspect 完全一致），
// 经 sips 压成 jpg 后存入 public/thumbs/（随 vite build 自动进入 dist/thumbs/）。
// 首页卡片默认显示这张静态图，hover 后才挂载实况 iframe（见 DemoPreview.tsx 的 thumbnail 模式）。
// demo 有增改时手动运行：pnpm thumbs （仅 macOS + 安装了 Chrome 的环境需要；社交分享图见 generate-og.mjs）。
import { execFileSync } from 'node:child_process';
import { readdirSync, mkdirSync, rmSync, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const demosDir = path.join(root, 'public/demos');
const thumbsDir = path.join(root, 'public/thumbs');

if (!existsSync(CHROME)) {
  console.error('✗ 未找到 Chrome，跳过缩略图生成（首页卡片将缺静态预览图）');
  process.exit(1);
}
mkdirSync(thumbsDir, { recursive: true });

function shoot(htmlPath, outId) {
  const png = path.join(thumbsDir, `${outId}.png`);
  const jpg = path.join(thumbsDir, `${outId}.jpg`);
  execFileSync(
    CHROME,
    [
      '--headless=new',
      `--screenshot=${png}`,
      '--window-size=1280,800',
      '--hide-scrollbars',
      '--disable-gpu',
      '--virtual-time-budget=3000',
      `file://${htmlPath}`,
    ],
    { stdio: 'pipe' }
  );
  execFileSync('sips', ['-s', 'format', 'jpeg', '-s', 'formatOptions', '75', png, '--out', jpg], {
    stdio: 'pipe',
  });
  rmSync(png);
}

const demos = readdirSync(demosDir).filter((f) => f.endsWith('.html'));
for (const f of demos) {
  const id = f.replace(/\.html$/, '');
  shoot(path.join(demosDir, f), id);
  console.log(`  thumbs/${id}.jpg`);
}
console.log(`✓ 已生成 ${demos.length} 张卡片缩略图至 public/thumbs/`);
