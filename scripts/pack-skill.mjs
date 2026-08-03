#!/usr/bin/env node
// 把 skills/design-vibes/ 打包成 dist/design-vibes-skill.tar.gz，随站点部署，
// 供 <站点>/skill.md 里的一行命令直接 curl | tar 解压（自建源，不依赖 GitHub 可达性）。
// 归档根部就是 SKILL.md / references / assets，所以解压端不需要 --strip-components。
// 产物只进 dist/ 不进 git —— 二进制不该随每次数据改动在仓库里翻滚。
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const src = path.join(root, 'skills/design-vibes');
const distDir = path.join(root, 'dist');
const out = path.join(distDir, 'design-vibes-skill.tar.gz');

if (!existsSync(src)) {
  console.error('✗ 缺少 skills/design-vibes/，先运行 pnpm skill');
  process.exit(1);
}
mkdirSync(distDir, { recursive: true });

execFileSync('tar', ['-czf', out, '-C', src, '.'], {
  // 避免 macOS 的 BSD tar 把扩展属性打成 ._* AppleDouble 文件混进归档
  env: { ...process.env, COPYFILE_DISABLE: '1' },
});

const kb = Math.round(statSync(out).size / 1024);
console.log(`✓ dist/design-vibes-skill.tar.gz 已打包（${kb} KB）`);
