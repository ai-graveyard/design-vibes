import { readdirSync, mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';
import { openChrome } from './lib/chrome.mjs';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const output = path.join(root, 'output/visual');
mkdirSync(output, { recursive: true });
const sizes = [[390,844],[768,1024],[1280,800],[1440,900]];
const pages = readdirSync(path.join(root, 'public/demos')).filter(file => file.endsWith('.html')).sort();
const capture = process.argv.includes('--capture');
const browser = await openChrome();
const failures = [], rows = [];
try {
  for (const [width,height] of sizes) {
    await browser.viewport(width,height);
    for (const file of pages) {
      await browser.navigate(pathToFileURL(path.join(root,'public/demos',file)).href);
      const metrics = await browser.evaluate(`(() => {
        const root = document.documentElement;
        const headings = [...document.querySelectorAll('h1')].filter(h => h.textContent.trim());
        const visible = headings.some(h => { const rect=h.getBoundingClientRect(); const css=getComputedStyle(h); return rect.width>0 && rect.height>0 && css.visibility!=='hidden' && Number(css.opacity)>.1; });
        const brokenImages = [...document.images].filter(image => !image.complete || !image.naturalWidth).length;
        const fonts = [...document.fonts].map(font => ({ family:font.family, status:font.status }));
        const clippedHeadings = headings.filter(h=> h.scrollWidth>h.clientWidth+2 && getComputedStyle(h).overflowX!=='visible' && !h.closest('[aria-hidden=true]')).map(h=>h.textContent.trim().slice(0,60));
        return { width:root.clientWidth, scrollWidth:root.scrollWidth, headingVisible:visible, brokenImages, fonts, clippedHeadings };
      })()`);
      const id=file.replace('.html','');
      const issues=[];
      if(metrics.width!==width || metrics.scrollWidth>width) issues.push('horizontal overflow or incorrect viewport');
      if(!metrics.headingVisible) issues.push('missing or invisible main heading');
      if(metrics.brokenImages) issues.push('broken image');
      if(metrics.fonts.some(font=>font.status==='error')) issues.push('font load error');
      if(metrics.clippedHeadings.length) issues.push('clipped main heading');
      if(browser.errors.length) issues.push(...browser.errors);
      if(issues.length) failures.push({id,width,issues});
      const screenshot=`${id}-${width}.png`;
      if(capture) await browser.screenshot(path.join(output,screenshot));
      rows.push({id,width,height,...metrics,issues,screenshot:capture?screenshot:null});
    }
    console.log(`Checked ${pages.length} studies at ${width} × ${height}`);
  }
  // Exercise the local state transitions that visual styling alone cannot prove.
  await browser.viewport(1280,800);
  await browser.navigate(pathToFileURL(path.join(root,'public/demos/material.html')).href);
  const material = await browser.evaluate(`(() => {
    document.querySelector('.fab').click(); const dialogOpen=document.querySelector('dialog').open;
    document.querySelector('#task-name').value='Review the visual baseline'; document.querySelector('#task-form').requestSubmit();
    const tasks=[...document.querySelectorAll('.task')]; const last=tasks.at(-1); last.querySelector('.task-toggle').click();
    return {dialogOpen,closed:!document.querySelector('dialog').open,count:tasks.length,created:last.textContent.includes('Review the visual baseline'),checked:last.querySelector('.task-toggle').getAttribute('aria-checked')};
  })()`);
  if(!material.dialogOpen || !material.closed || material.count!==5 || !material.created || material.checked!=='true') failures.push({id:'material',issues:['create/complete task failed'],material});
  await browser.navigate(pathToFileURL(path.join(root,'public/demos/liquid-glass.html')).href);
  const liquid=await browser.evaluate(`(() => {document.querySelector('.appearance').click();document.querySelector('.play').click();document.querySelector('#tab-places').click();return {appearance:document.querySelector('.scene').dataset.appearance,playing:document.querySelector('.scene').dataset.playing,places:!document.querySelector('#view-places').hidden,listen:document.querySelector('#view-listen').hidden}})()`);
  if(liquid.appearance!=='light'||liquid.playing!=='true'||!liquid.places||!liquid.listen) failures.push({id:'liquid-glass',issues:['appearance/playback/tab transition failed'],liquid});
  await browser.navigate(pathToFileURL(path.join(root,'public/demos/glassmorphism.html')).href);
  const glass=await browser.evaluate(`(() => {const slider=document.querySelector('[aria-label="Glass blur"]');slider.value=34;slider.dispatchEvent(new Event('input',{bubbles:true}));return getComputedStyle(document.querySelector('.glass')).backdropFilter})()`);
  if(!glass.includes('34px')) failures.push({id:'glassmorphism',issues:['material slider did not change backdrop blur'],glass});
  const report={capturedAt:new Date().toISOString(),browser:await browser.send('Browser.getVersion'),reducedMotion:true,rows,interactions:{material,liquid,glass},failures};
  writeFileSync(path.join(output,'report.json'),JSON.stringify(report,null,2)+'\n');
  if(capture) writeFileSync(path.join(output,'index.html'),`<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>Design Vibes visual review</title><style>body{font:14px system-ui;margin:32px;background:#f1f2f4;color:#17191c}main{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px}figure{margin:0;padding:12px;background:white;border:1px solid #ddd}img{display:block;width:100%;height:300px;object-fit:contain;object-position:top}figcaption{padding:12px 0}h1{font-size:28px}p{max-width:70ch;line-height:1.6}</style><h1>Design Vibes — visual review</h1><p>30 studies × 4 viewports. Captured after fonts and embedded images load, with reduced motion. Review typography, composition, materials and clipping; these captures require human judgment and are not an automatic fidelity score.</p><main>${rows.map(row=>`<figure><a href="${row.screenshot}"><img src="${row.screenshot}" loading="lazy" alt="${row.id} at ${row.width}px"></a><figcaption>${row.id} / ${row.width} × ${row.height}${row.issues.length?' / CHECK':''}</figcaption></figure>`).join('')}</main></html>`);
} finally {await browser.close();}
if(failures.length){console.error(JSON.stringify(failures,null,2));process.exitCode=1;}else console.log(`Visual gates passed: ${rows.length} layouts and 3 interaction flows. ${capture?'Screenshots: output/visual/index.html':''}`);
