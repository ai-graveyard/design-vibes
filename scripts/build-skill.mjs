#!/usr/bin/env node
// 从 src/data 生成 skills/design-vibes/（SKILL.md + 参考文档 + demo 附件）。
// 产物是通用 skill 目录：只有 SKILL.md 的 name/description frontmatter + 相对路径引用，
// 不含任何单一工具的专有清单，copy 到 Claude Code / Codex 等任意 skills 目录即可用。
// 唯一数据源是 src/data/*.ts 与 public/demos/*.html —— 产物全部可重建，请勿手改 skills/ 下的文件。
// 依赖 Node ≥ 22.6（直接 import .ts，靠类型擦除；本仓库在 v22.18 验证通过），无需额外依赖。
import { readFileSync, writeFileSync, mkdirSync, rmSync, cpSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const out = path.join(root, 'skills/design-vibes');
const tpl = (name) => readFileSync(path.join(root, 'scripts/skill-templates', name), 'utf8');

const { designStyles } = await import(path.join(root, 'src/data/styles.ts'));
const { stylePrompts } = await import(path.join(root, 'src/data/prompts.ts'));
const { scenes, difficultyTiers } = await import(path.join(root, 'src/data/scenes.ts'));

const HOMEPAGE = 'https://design-vibes.v2ai.org';
const REPO = 'https://github.com/ai-graveyard/design-vibes';
const TARBALL = 'design-vibes-skill.tar.gz';

const promptById = new Map(stylePrompts.map((p) => [p.id, p]));
const DIFFICULTY_LABEL = { 1: 'Easy', 2: 'Medium', 3: 'Hard', 4: 'Expert' };
const difficultyById = new Map(
  difficultyTiers.flatMap((t) => t.styleIds.map((id) => [id, t.level]))
);
const scenesByStyle = new Map();
for (const s of scenes) {
  for (const id of s.styleIds) {
    if (!scenesByStyle.has(id)) scenesByStyle.set(id, []);
    scenesByStyle.get(id).push(s.nameEn);
  }
}

/** 解析 demo 的 :root 变量块 —— 与 DesignTokens.tsx 同一套规则，保证文档与实况预览一致 */
function readDemo(id) {
  const file = path.join(root, 'public/demos', `${id}.html`);
  const source = readFileSync(file, 'utf8');
  const m = /:root\s*\{([^}]*)\}/.exec(source);
  const tokens = m
    ? m[1]
        .split(';')
        .map((line) => line.trim())
        .filter((line) => line.startsWith('--'))
        .map((line) => {
          const i = line.indexOf(':');
          return { name: line.slice(0, i).trim(), value: line.slice(i + 1).trim() };
        })
    : [];
  return { source, tokens, lines: source.split('\n').length };
}

const list = (items) => items.map((x) => `- ${x}`).join('\n');
const stars = (n) => '★'.repeat(Math.round(n)) + '☆'.repeat(5 - Math.round(n));

function difficultyCell(id) {
  const level = difficultyById.get(id);
  return level ? `${level} ${DIFFICULTY_LABEL[level]}` : '—';
}

// ---------- references/styles/<id>.md ----------
function styleDoc(style) {
  const p = promptById.get(style.id);
  const { tokens, lines } = readDemo(style.id);
  const level = difficultyById.get(style.id);
  const meta = [
    ...(style.name === style.nameEn ? [] : [`**Chinese name:** ${style.name}`]),
    `**Rating:** ${stars(style.rating)} ${style.rating}/5`,
    `**Difficulty:** ${level ? `${level} (${DIFFICULTY_LABEL[level]})` : 'unrated'}`,
    `**Tags:** ${style.tagsEn.join(' · ')}`,
    `**Fits:** ${(scenesByStyle.get(style.id) ?? ['—']).join(', ')}`,
  ].join('  \n');

  return `# ${style.nameEn} \`${style.id}\`

${meta}

${style.descriptionEn}

## Prompt

Hand this to any AI coding tool, or use it as your own build brief.

**English**

> ${p.promptEn}

**中文**

> ${p.prompt}

**Short form** — when you only need one line:

- EN: ${p.shortPromptEn}
- 中文: ${p.shortPrompt}

## Design tokens

Lifted verbatim from the reference implementation. Use these exact values.

\`\`\`css
:root {
${tokens.map((t) => `  ${t.name}: ${t.value};`).join('\n')}
}
\`\`\`

## Signature traits

${list(style.featuresEn)}

## Where it works

${list(style.useCasesEn)}

## Strengths

${list(style.prosEn)}

## Costs

${list(style.consEn)}

## Pitfalls

The specific ways AI-generated pages in this style go wrong. Check each one before delivering.

${style.pitfallsEn.map((x, i) => `${i + 1}. ${x}\n   ${style.pitfalls[i] ?? ''}`).join('\n')}

## Seen in the wild

${style.examplesEn.join(' · ')}

## Reference implementation

\`assets/demos/${style.id}.html\` — a complete single-file page (${lines} lines, no scripts, no external requests). Read it for layout and composition patterns, or copy it as a starting point.

Live preview: ${HOMEPAGE}/style/${style.id}
`;
}

// ---------- references/picker.md ----------
function pickerDoc() {
  const byId = new Map(designStyles.map((s) => [s.id, s]));
  const line = (id) => {
    const s = byId.get(id);
    return `- \`${id}\` **${s.nameEn}** (${s.name}) — ${s.tagsEn.join(', ')}`;
  };

  return `# Choosing a style

Two ways in: by what the user is building, or by how much implementation budget there is. Cross-reference both, then read the candidates' own files before recommending.

## By project type

${scenes
  .map((s) => `### ${s.icon} ${s.nameEn} / ${s.name}\n\n${s.styleIds.map(line).join('\n')}`)
  .join('\n\n')}

## By implementation difficulty

Cost of faithful reproduction in pure CSS.

${difficultyTiers
  .map(
    (t) =>
      `### ${t.level} · ${t.nameEn} / ${t.name}\n\n${t.styleIds.map(line).join('\n')}`
  )
  .join('\n\n')}

Styles not listed above are unrated for difficulty — assume medium and read the reference implementation before promising a timeline.

## How to recommend

Offer 2–3 candidates, each with one line on why it fits *this* project, and name the tradeoff. "Neo-brutalism reads as confident and ships in an afternoon, but it will alienate an enterprise buyer" is useful. "Here are five great options!" is not.

If the user's brief contains a constraint the style can't hold — dense data tables under maximalism, a compliance-heavy form under vaporwave — say so before building, not after.
`;
}

// ---------- SKILL.md ----------
function skillDoc() {
  const rows = designStyles.map((s) => {
    const useCase = s.useCasesEn[0] ?? '';
    const name = s.name === s.nameEn ? s.nameEn : `${s.nameEn} · ${s.name}`;
    return `| \`${s.id}\` | ${name} | ${s.tagsEn.join(', ')} | ${useCase} | ${difficultyCell(s.id)} |`;
  });
  const index = [
    '| id | Style | Vibe | Typical use | Difficulty |',
    '| :-- | :-- | :-- | :-- | :-- |',
    ...rows,
  ].join('\n');

  const named = ['apple', 'swiss', 'bauhaus', 'glassmorphism', 'liquid-glass', 'neo-brutalism', 'cyberpunk', 'vaporwave', 'pixel', 'terminal', 'bento', 'aurora']
    .map((id) => designStyles.find((s) => s.id === id).nameEn)
    .join(', ');

  const description =
    `Pick and faithfully implement a web page visual style. ${designStyles.length} curated styles (${named}, and more), each with a ready-to-use prompt in English and Chinese, exact design tokens, known pitfalls, and a complete zero-dependency HTML reference implementation. ` +
    `Use when the user wants a landing page, hero section, portfolio, or marketing site "in X style", asks which look suits their project, or says a design feels generic or AI-generated. ` +
    `Also triggers on 网页设计风格, 落地页风格, 视觉风格选型, 极简风, 玻璃拟态, 液态玻璃, 新拟态, 赛博朋克, 蒸汽波, 包豪斯, 瑞士风格, 粗野主义, 像素风, 终端风.`;

  return tpl('SKILL.md.tpl')
    .replaceAll('{{DESCRIPTION}}', description)
    .replaceAll('{{STYLE_INDEX}}', index)
    .replaceAll('{{COUNT}}', String(designStyles.length))
    .replaceAll('{{HOMEPAGE}}', HOMEPAGE);
}

// ---------- 写出 ----------
rmSync(out, { recursive: true, force: true });
mkdirSync(path.join(out, 'references/styles'), { recursive: true });

const write = (rel, content) => writeFileSync(path.join(out, rel), content);

write('SKILL.md', skillDoc());
write('references/picker.md', pickerDoc());
write('references/checklist.md', tpl('checklist.md').replaceAll('{{COUNT}}', String(designStyles.length)));
for (const style of designStyles) {
  const p = promptById.get(style.id);
  if (!p) throw new Error(`prompts.ts 缺少 "${style.id}"，先跑 pnpm validate`);
  write(`references/styles/${style.id}.md`, styleDoc(style));
}

cpSync(path.join(root, 'public/demos'), path.join(out, 'assets/demos'), { recursive: true });

// public/skill.md：给 AI agent 在线读取的安装说明，随站点部署到 <站点>/skill.md
writeFileSync(
  path.join(root, 'public/skill.md'),
  tpl('install.md.tpl')
    .replaceAll('{{COUNT}}', String(designStyles.length))
    .replaceAll('{{HOMEPAGE}}', HOMEPAGE)
    .replaceAll('{{REPO}}', REPO)
    .replaceAll('{{TARBALL}}', TARBALL)
);

console.log(
  `✅ skills/design-vibes/ 已生成：${designStyles.length} 个风格文档 + ${designStyles.length} 个 demo 附件；public/skill.md 已更新`
);
