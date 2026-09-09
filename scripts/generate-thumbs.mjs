import { readFileSync, readdirSync, mkdirSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { openChrome } from './lib/chrome.mjs';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const output=path.join(root,'public/thumbs');mkdirSync(output,{recursive:true});
const browser=await openChrome();
const sources={};
try{
 await browser.viewport(1280,800);
 for(const file of readdirSync(path.join(root,'public/demos')).filter(f=>f.endsWith('.html')).sort()){
  const id=file.replace('.html','');const source=path.join(root,'public/demos',file);
  await browser.navigate(pathToFileURL(source).href);
  const {data}=await browser.send('Page.captureScreenshot',{format:'jpeg',quality:82,captureBeyondViewport:false});
  writeFileSync(path.join(output,id+'.jpg'),Buffer.from(data,'base64'));
  sources[id]=createHash('sha256').update(readFileSync(source)).digest('hex');
 }
 const environment=await browser.send('Browser.getVersion');
 writeFileSync(path.join(output,'manifest.json'),JSON.stringify({width:1280,height:800,reducedMotion:true,environment,sources},null,2)+'\n');
 console.log(`Generated ${Object.keys(sources).length} previews and their source fingerprints.`);
}finally{await browser.close();}
