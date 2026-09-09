import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = p => readFileSync(path.join(root, p), 'utf8');
const fonts = JSON.parse(read('assets/fonts/manifest.json'));
const fontMap = { swiss: ['Inter'], material: ['Roboto'], editorial: ['Source Serif 4', 'Inter'], glassmorphism: ['Inter'], 'liquid-glass': ['Inter'] };
for (const [id, families] of Object.entries(fontMap)) {
  let html = read(`public/demos/${id}.html`);
  const blocks = fonts.filter(f => families.includes(f.family)).map(f => {
    const data = readFileSync(path.join(root, 'assets/fonts', f.file)).toString('base64');
    return `/* ${f.family}: ${read(`assets/fonts/${f.license}`).replaceAll('*/', '* /').replace(/[ \t]+$/gm, '')} */\n${f.css.replace(/url\([^)]+\)/, `url(data:font/woff2;base64,${data})`)}`;
  }).join('\n');
  const content = `/* embedded-fonts:start */\n${blocks}\n/* embedded-fonts:end */`;
  html = html.includes('/* embedded-fonts:start */') ? html.replace(/\/\* embedded-fonts:start \*\/[\s\S]*?\/\* embedded-fonts:end \*\//, content) : html.replace('<style>', `<style>\n${content}`);
  writeFileSync(path.join(root, 'public/demos', `${id}.html`), html);
}
const media = [
  { id: 'liquid-glass', name: 'night-train', alt: 'AI-created illustration of a night train at dawn', className: 'landscape' },
  { id: 'apple', name: 'headphones', alt: 'Original silver and ivory headphone concept with woven cushions', className: 'product-render' },
  { id: 'editorial', name: 'night-train', alt: 'AI-created illustration of a sleeper train at a misty station before sunrise', className: 'lead-image' },
];
for (const item of media) {
  let html = read(`public/demos/${item.id}.html`);
  const data = readFileSync(path.join(root, 'assets/demo-media', `${item.name}.webp`)).toString('base64');
  const image = `<img class="${item.className}" src="data:image/webp;base64,${data}" width="1536" height="1024" alt="${item.alt}" decoding="async">`;
  const start = `<!-- media:${item.name}:start -->`, end = `<!-- media:${item.name}:end -->`;
  const a = html.indexOf(start), b = html.indexOf(end);
  if (a < 0 || b < 0) throw new Error(`Missing media marker: ${item.id}`);
  html = html.slice(0, a + start.length) + '\n' + image + '\n' + html.slice(b);
  writeFileSync(path.join(root, 'public/demos', `${item.id}.html`), html);
}
console.log('Embedded licensed fonts and original images into the standalone demos.');
