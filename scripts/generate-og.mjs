import { readdirSync, mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { openChrome } from './lib/chrome.mjs';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const output=path.join(root,'public/og');mkdirSync(output,{recursive:true});
const browser=await openChrome();
try{
 await browser.viewport(1200,630);
 const files=readdirSync(path.join(root,'public/demos')).filter(f=>f.endsWith('.html')).map(file=>({id:file.replace('.html',''),file:path.join(root,'public/demos',file)}));
 files.push({id:'home',file:path.join(root,'scripts/og-home.html')});
 for(const item of files){
  await browser.navigate(pathToFileURL(item.file).href);
  const {data}=await browser.send('Page.captureScreenshot',{format:'jpeg',quality:84,captureBeyondViewport:false});
  writeFileSync(path.join(output,item.id+'.jpg'),Buffer.from(data,'base64'));
 }
 console.log(`Generated ${files.length} social previews.`);
}finally{await browser.close();}
