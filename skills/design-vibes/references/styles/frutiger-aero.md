# Frutiger Aero `frutiger-aero`

**Difficulty:** 4 (Expert)  
**Tags:** Vintage · Playful · Trendy  
**Fits:** Kids / Education

The optimistic tech aesthetic that ruled 2004-2013 — Windows Vista's glossy buttons, sky-and-grass wallpapers, floating bubbles and koi fish. It believed technology would bring a greener, brighter future. Now roaring back across social platforms as millennial nostalgia.

## Prompt

Hand this to any AI coding tool, or use it as your own build brief.

**English**

> Frutiger Aero style, the optimistic 2000s tech aesthetic. Sky blue gradient base (#BDE8FF to #E8F7FF to white) with grass green (#8FD400, #7ABF2E) and aqua blue (#4CA6E8). The key is gloss, not frost: overlay the top half of buttons and cards with a white highlight gradient (40% white fading out) to fake plastic and water reflections; scatter floating bubbles (radial-gradient circles with white specular dots); divide sections with SVG waves. Use a humanist sans-serif (Segoe UI family) with deep blue-gray body text (#1B4A6B). Plump radii (16-28px) — everything bright, dewy, hopeful.

**中文**

> Frutiger Aero 风格，2000 年代的乐观科技美学。天空蓝渐变底（#BDE8FF 到 #E8F7FF 到白），配草绿（#8FD400、#7ABF2E）和水蓝（#4CA6E8）。核心是光泽而非磨砂：按钮和卡片上半部叠加白色高光渐变（白色 40% 透明度渐隐）模拟塑料与水面反光；散布漂浮气泡（径向渐变圆+白色镜面光斑）；区块间用 SVG 波浪线分隔。字体用 humanist 无衬线（Segoe UI 系），正文深蓝灰（#1B4A6B）。圆角饱满（16-28px），整体明亮、湿润、充满希望。

**Short form** — when you only need one line:

- EN: Frutiger Aero, sky blue and grass green with glossy highlights, floating bubbles and waves, plump radii
- 中文: Frutiger Aero，天蓝草绿+光泽高光按钮，漂浮气泡与波浪分隔，饱满圆角

## Design tokens

Lifted verbatim from the reference implementation. Use these exact values.

```css
:root {
  --bg: #BDE8FF;
  --bg-soft: #E8F7FF;
  --bg-card: #FFFFFF;
  --fg: #1B4A6B;
  --fg-soft: #48759B;
  --accent: #8FD400;
  --accent-deep: #69A917;
  --accent-soft: #A8E04E;
  --aqua: #4CA6E8;
  --aqua-deep: #2E86C9;
  --sun: #FFC93C;
  --glow: #4CA6E847;
  --hi: #FFFe;
  --sans: "Segoe UI","Frutiger","Frutiger Linotype",Verdana,Tahoma,-apple-system,"Helvetica Neue",Arial,sans-serif;
}
```

## Signature traits

- Glossy surfaces - white top-half highlight gradients
- Nature imagery - sky/grass/water/bubbles
- Sky blue and grass green - bright and saturated
- Plump radii - 16-28px dewy softness
- Glows and lens flare accents

## Where it works

- Weather and eco apps
- Nostalgia-driven personal sites
- Beverage and personal care brands
- Kids' tech products
- Y2K revival campaign pages

## Strengths

- Powerful nostalgia resonance
- Uniquely optimistic, healing mood
- Stands out in a flat-design world
- Built-in social virality

## Costs

- Hard to balance - can look cheap or dated
- Gloss details are labor-intensive
- Poor fit for serious business

## Pitfalls

The specific ways AI-generated pages in this style go wrong. Check each one before delivering.

1. Frosting instead of gloss — Aero is shiny plastic and water; highlights must be crisp
   做成了磨砂玻璃——Aero 的质感是光泽塑料与水面，高光要锐利清晰
2. No nature — without sky, grass, and bubbles it's just a dated gradient button
   自然元素缺席——没有天空、草地、气泡，就只剩一个过时的渐变按钮
3. Grayish tints — its blues and greens must stay clean and bright, like a washed sky
   配色发灰——它的蓝与绿必须干净明亮，像洗过的晴天
4. Inconsistent light source — white highlights always come from above: bright top half, darker bottom. Scrambled lighting reads as plastic stickers
   光源方向不统一——白色高光永远来自上方：渐变亮部在元素上半，下半收暗，光一乱就是塑料贴纸
5. Modern flat icons sneaking in — Aero-era icons are dimensional and glossy; one line icon breaks the period illusion
   混入现代扁平图标——Aero 时代的图标立体带光泽，一个线性 icon 就能让年代感穿帮
6. Bubbles and flares over body copy — decorative layers sit beneath content and clear of text columns, or healing turns into interference
   气泡光斑压住正文——装饰浮层要沉到内容之下并避开文本列，盖住文字就从治愈变成干扰

## Seen in the wild

Windows Vista · Wii Menu · iTunes 7 · Frutiger Aero Archive

## Reference implementation

`assets/demos/frutiger-aero.html` — a complete single-file page (371 lines, no scripts, no external requests). Read it for layout and composition patterns, or copy it as a starting point.

Live preview: https://design-vibes.v2ai.org/style/frutiger-aero
