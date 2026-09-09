import { preview } from 'vite';
import { mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';
import { openChrome } from './lib/chrome.mjs';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const output=path.join(root,'output/studio');mkdirSync(output,{recursive:true});
// Test the built application, without development-only DOM inspection plugins.
const server=await preview({root,preview:{host:'127.0.0.1',port:0},logLevel:'error'});
let browser;
const evidence={};
try{
 const base=server.resolvedUrls.local[0].replace(/\/$/,'');
 browser=await openChrome();
 const waitFor=async expression=>{const deadline=Date.now()+15000;while(Date.now()<deadline){if(await browser.evaluate(expression).catch(()=>false))return;await new Promise(r=>setTimeout(r,50));}throw new Error('Studio did not reach expected state: '+expression);};
 const framesReady=count=>waitFor(`document.querySelectorAll('iframe.demo-viewport-frame').length===${count} && [...document.querySelectorAll('iframe.demo-viewport-frame')].every(f=>f.contentDocument?.readyState==='complete' && f.contentDocument.querySelector('h1'))`);
 const dimensions=()=>browser.evaluate(`(()=>{const f=document.querySelector('iframe.demo-viewport-frame');return {width:f.clientWidth,height:f.clientHeight,displayWidth:f.getBoundingClientRect().width,displayBottom:f.getBoundingClientRect().bottom,screenHeight:innerHeight,outerOverflow:document.documentElement.scrollWidth>innerWidth}})()`);
 await browser.viewport(1280,900);
 await browser.navigate(base+'/style/material');await framesReady(1);
 evidence.desktop=await dimensions();assert.equal(evidence.desktop.width,1280);assert.equal(evidence.desktop.height,800);
 await browser.screenshot(path.join(output,'desktop.png'));
 await browser.evaluate(`document.querySelector('[aria-label="收起说明"]').click()`);
 await waitFor(`document.querySelector('.details-collapsed') !== null && document.querySelector('iframe.demo-viewport-frame').getBoundingClientRect().width > ${evidence.desktop.displayWidth + 1}`);
 evidence.collapsed=await dimensions();assert.equal(evidence.collapsed.width,1280);assert.ok(evidence.collapsed.displayWidth>evidence.desktop.displayWidth);
 await browser.evaluate(`document.querySelector('[aria-label="全屏预览"]').click()`);
 await waitFor(`document.querySelector('.preview-fullscreen iframe')?.getBoundingClientRect().bottom < innerHeight`);
 await browser.evaluate(`new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)))`);
 evidence.fullscreen=await dimensions();assert.ok(evidence.fullscreen.displayBottom<=900);assert.equal(evidence.fullscreen.width,1280);
 await browser.screenshot(path.join(output,'fullscreen.png'));
 evidence.embeddedTask=await browser.evaluate(`(()=>{const doc=document.querySelector('iframe.demo-viewport-frame').contentDocument;doc.querySelector('.fab').click();const opened=doc.querySelector('dialog').open;doc.querySelector('#task-name').value='Review embedded preview';doc.querySelector('#task-form').requestSubmit();const task=[...doc.querySelectorAll('.task')].at(-1);task.querySelector('.task-toggle').click();return {opened,closed:!doc.querySelector('dialog').open,count:doc.querySelectorAll('.task').length,title:task.textContent,checked:task.querySelector('.task-toggle').getAttribute('aria-checked')}})()`);
 assert.ok(evidence.embeddedTask.opened&&evidence.embeddedTask.closed);assert.equal(evidence.embeddedTask.count,5);assert.ok(evidence.embeddedTask.title.includes('Review embedded preview'));assert.equal(evidence.embeddedTask.checked,'true');
 await browser.evaluate(`{const win=document.querySelector('iframe.demo-viewport-frame').contentWindow;win.dispatchEvent(new win.KeyboardEvent('keydown',{key:'Escape'}));}`);
 await waitFor(`!document.querySelector('.preview-fullscreen')`);
 await browser.viewport(375,812);await waitFor(`document.querySelector('iframe.demo-viewport-frame')?.clientWidth===390`);
 evidence.mobile=await dimensions();assert.equal(evidence.mobile.width,390);assert.equal(evidence.mobile.height,844);assert.equal(evidence.mobile.outerOverflow,false);
 await browser.screenshot(path.join(output,'mobile.png'));
 await browser.viewport(1280,900);await browser.navigate(base+'/compare/glassmorphism/liquid-glass');await framesReady(2);
 evidence.compareWidths=await browser.evaluate(`[...document.querySelectorAll('iframe.demo-viewport-frame')].map(f=>f.clientWidth)`);assert.deepEqual(evidence.compareWidths,[1280,1280]);
 await browser.evaluate(`document.querySelector('iframe.demo-viewport-frame').contentWindow.scrollTo({top:350,behavior:'instant'})`);
 await waitFor(`document.querySelectorAll('iframe.demo-viewport-frame')[1].contentWindow.scrollY>0`);
 evidence.scrollProgress=await browser.evaluate(`[...document.querySelectorAll('iframe.demo-viewport-frame')].map(f=>{const w=f.contentWindow;return w.scrollY/(w.document.documentElement.scrollHeight-w.innerHeight)})`);
 assert.ok(Math.abs(evidence.scrollProgress[0]-evidence.scrollProgress[1])<.01);
 await browser.screenshot(path.join(output,'compare.png'));
 console.log('Studio gates passed: fixed viewports, panel resizing, fullscreen fit and Escape, mobile canvas, embedded form, synchronized comparison.');
}finally{
 writeFileSync(path.join(output,'report.json'),JSON.stringify(evidence,null,2)+'\n');
 if(browser)await browser.close();await new Promise(resolve=>server.httpServer.close(resolve));
}
