#!/usr/bin/env node
// 构建后 SEO 处理：为每个 /style/:id 生成带独立 title/description/og/canonical 的静态 HTML 壳
// （同时让 nginx 直接访问详情页 URL 时有真实文件可回，不再依赖 SPA fallback），
// 并生成 sitemap.xml 与 robots.txt。通过 vite ssrLoadModule 读取 TS 风格数据，无需额外依赖。
import { createServer } from 'vite';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SITE = 'https://design-vibes.v2ai.org';

const distIndex = path.join(root, 'dist/index.html');
if (!existsSync(distIndex)) {
  console.error('✗ dist/index.html 不存在，请先执行 vite build');
  process.exit(1);
}

const server = await createServer({
  root,
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'error',
});
const { designStyles } = await server.ssrLoadModule('/src/data/styles.ts');
await server.close();

const template = readFileSync(distIndex, 'utf8');
const esc = (s) =>
  s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function pageHtml({ title, description, url, image }) {
  let html = template;
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`);
  html = html.replace(/(<meta name="description" content=")[^"]*(")/, `$1${esc(description)}$2`);
  html = html.replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${esc(title)}$2`);
  html = html.replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${esc(description)}$2`);
  const extra = [
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:url" content="${url}" />`,
    image ? `<meta property="og:image" content="${image}" />` : '',
    `<meta name="twitter:card" content="${image ? 'summary_large_image' : 'summary'}" />`,
  ]
    .filter(Boolean)
    .join('\n    ');
  return html.replace('</head>', `  ${extra}\n  </head>`);
}

const ogPath = (id) =>
  existsSync(path.join(root, `dist/og/${id}.jpg`)) ? `${SITE}/og/${id}.jpg` : undefined;

// 首页（覆写 dist/index.html，标题与描述保持原值，补 canonical/og:url/og:image）
const homeTitle = /<title>([^<]*)<\/title>/.exec(template)[1];
const homeDesc = /<meta name="description" content="([^"]*)"/.exec(template)[1];
writeFileSync(
  distIndex,
  pageHtml({ title: homeTitle, description: homeDesc, url: `${SITE}/`, image: ogPath('home') })
);

// 各风格详情页静态壳
for (const s of designStyles) {
  const dir = path.join(root, 'dist/style', s.id);
  mkdirSync(dir, { recursive: true });
  const title =
    s.name === s.nameEn ? `${s.nameEn} · Design Vibes` : `${s.name} ${s.nameEn} · Design Vibes`;
  writeFileSync(
    path.join(dir, 'index.html'),
    pageHtml({
      title,
      description: s.description.slice(0, 155),
      url: `${SITE}/style/${s.id}`,
      image: ogPath(s.id),
    })
  );
}

// sitemap.xml + robots.txt
const urls = [`${SITE}/`, ...designStyles.map((s) => `${SITE}/style/${s.id}`)];
writeFileSync(
  path.join(root, 'dist/sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map((u) => `  <url><loc>${u}</loc></url>`)
    .join('\n')}\n</urlset>\n`
);
writeFileSync(path.join(root, 'dist/robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);

console.log(`✓ SEO 产物已生成：${designStyles.length} 个风格页静态壳 + sitemap.xml + robots.txt`);
