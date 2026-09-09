import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {parseDemoTokens,demoTokenCss} from '../../src/lib/demoSource.ts';
import {designStyles} from '../../src/data/styles.ts';
import {stylePrompts,getReproductionPrompt} from '../../src/data/prompts.ts';
import {styleSpecs} from '../../src/data/styleSpecs.ts';

test('comments between declarations do not discard subsequent tokens',()=>{
 const source=':root { --u: 8px; /* base unit */ --accent: #e8500a; /* active */ --font: "Example Sans", sans-serif; }';
 assert.deepEqual(parseDemoTokens(source).map(t=>t.name),['--u','--accent','--font']);
 assert.equal(parseDemoTokens(source)[2].value,'"Example Sans", sans-serif');
});
test('all exported reference briefs contain every actual demo token and both viewport and source guidance',()=>{
 for(const style of designStyles){
  const source=readFileSync(new URL(`../../public/demos/${style.id}.html`,import.meta.url),'utf8');
  const prompt=stylePrompts.find(p=>p.id===style.id);
  assert.ok(styleSpecs[style.id]);assert.ok(prompt);
  for(const language of ['zh','en']){
   const brief=getReproductionPrompt(prompt,language,source);
   assert.ok(brief.includes(demoTokenCss(source)),`${style.id}: complete tokens`);
   assert.ok(brief.includes(`/demos/${style.id}.html`));
   for(const size of ['390×844','768×1024','1280×800','1440×900']) assert.ok(brief.includes(size));
  }
 }
});
test('canonical descriptions and generated style briefs share their design principles',()=>{
 for(const style of designStyles){const spec=styleSpecs[style.id];const prompt=stylePrompts.find(p=>p.id===style.id);assert.ok(style.description.includes(spec.composition.zh));assert.ok(prompt.prompt.includes(spec.signature.zh));assert.ok(prompt.promptEn.includes(spec.signature.en));}
});

test('preview and custom deployments link to their own reference HTML',()=>{
 const prompt=stylePrompts.find(p=>p.id==='apple');
 const source=readFileSync(new URL('../../public/demos/apple.html',import.meta.url),'utf8');
 const brief=getReproductionPrompt(prompt,'zh',source,'http://127.0.0.1:4176');
 assert.ok(brief.includes('http://127.0.0.1:4176/demos/apple.html'));
 assert.ok(!brief.includes('https://design-vibes.v2ai.org/demos/apple.html'));
});
