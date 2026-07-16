#!/usr/bin/env node
// 校验 styles / prompts / demos 三处数据一致性，以及 demo 的零依赖约定。
// 约定：每种风格必须在 src/data/styles.ts、src/data/prompts.ts、public/demos/<id>.html 三处同时存在；
//       demo 为单文件 HTML —— 无 <script>、无外部 URL、有 :root CSS 变量（design tokens 来源）。
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = (p) => readFileSync(path.join(root, p), 'utf8');

const extractIds = (src) => [...src.matchAll(/^\s+id: "([^"]+)",$/gm)].map((m) => m[1]);

const styleIds = extractIds(read('src/data/styles.ts'));
const promptIds = extractIds(read('src/data/prompts.ts'));
const demoFiles = readdirSync(path.join(root, 'public/demos')).filter((f) => f.endsWith('.html'));
const demoIds = demoFiles.map((f) => f.replace(/\.html$/, ''));
const thumbsDir = path.join(root, 'public/thumbs');
const thumbIds = existsSync(thumbsDir)
  ? readdirSync(thumbsDir).filter((f) => f.endsWith('.jpg')).map((f) => f.replace(/\.jpg$/, ''))
  : [];

const errors = [];
const missingIn = (a, b) => a.filter((x) => !b.includes(x));

if (new Set(styleIds).size !== styleIds.length) errors.push('styles.ts 存在重复 id');
if (new Set(promptIds).size !== promptIds.length) errors.push('prompts.ts 存在重复 id');
for (const id of missingIn(styleIds, promptIds)) errors.push(`styles.ts 的 "${id}" 在 prompts.ts 中缺失`);
for (const id of missingIn(promptIds, styleIds)) errors.push(`prompts.ts 的 "${id}" 在 styles.ts 中缺失`);
for (const id of missingIn(styleIds, demoIds)) errors.push(`缺少 demo：public/demos/${id}.html`);
for (const id of missingIn(demoIds, styleIds)) errors.push(`孤儿 demo（styles.ts 无此 id）：public/demos/${id}.html`);
for (const id of missingIn(styleIds, thumbIds))
  errors.push(`缺少卡片缩略图：public/thumbs/${id}.jpg（运行 pnpm thumbs 生成）`);

for (const f of demoFiles) {
  const where = `public/demos/${f}`;
  // 内联 SVG 的 xmlns 命名空间不算外部引用
  const html = read(where).replace(/xmlns(:[\w-]+)?="[^"]*"/g, '');
  if (/<script[\s>]/i.test(html)) errors.push(`${where} 含 <script>，违反零 JS 约定`);
  if (/https?:\/\//i.test(html)) errors.push(`${where} 含外部 URL，违反零依赖约定`);
  if (!/:root\s*\{/.test(html)) errors.push(`${where} 缺少 :root CSS 变量（design tokens 来源）`);
  if (!/<title>[^<]+<\/title>/i.test(html)) errors.push(`${where} 缺少 <title>`);
}

// scenes.ts（选型指南）的 styleIds 引用校验
const scenesSrc = read('src/data/scenes.ts');
const referenced = [...scenesSrc.matchAll(/styleIds: \[([^\]]*)\]/g)].flatMap((m) =>
  [...m[1].matchAll(/'([^']+)'/g)].map((mm) => mm[1])
);
for (const id of [...new Set(referenced)]) {
  if (!styleIds.includes(id)) errors.push(`scenes.ts 引用了不存在的风格 id："${id}"`);
}

if (errors.length) {
  console.error(`✗ 数据一致性校验失败（${errors.length} 个问题）：`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}
console.log(`✓ 校验通过：${styleIds.length} 种风格在 styles/prompts/demos 三处对齐，demo 零依赖约定满足`);
