# Memphis `memphis`

**Chinese name:** 孟菲斯  
**Difficulty:** 2 (Medium)  
**Tags:** Art · Playful · Vintage  
**Fits:** Art / Culture, Kids / Education

The 1981 design rebellion storm from Milan, led by Ettore Sottsass declaring war on 'good taste'. Vibrant clashing colors, absurd geometric patterns, rough black outlines — this is postmodernism's wildest visual feast.

## Prompt

Hand this to any AI coding tool, or use it as your own build brief.

**English**

> Memphis style, playful and loud. Palette: cream base (#FFF8EC) with hot pink (#FF69B4), gold (#FFD700), tomato red (#FF6347), and turquoise (#00CED1), all outlined in solid black (#000, ~3px). Mix monospace and sans-serif for a scrapbook feel. Scatter squiggle lines, confetti dots, and pill/circle badges (border-radius 999px or 50%) across the layout like stickers.

**中文**

> 孟菲斯风格，热闹又俏皮。配色：米白底（#FFF8EC）配亮粉（#FF69B4）、金黄（#FFD700）、番茄红（#FF6347）、绿松石（#00CED1），全部用实心黑色（#000，约 3px）描边。等宽体和无衬线体混搭出剪贴画感。版面上散落波浪曲线、彩色圆点和胶囊/圆形徽标（圆角 999px 或 50%），像贴纸一样。

**Short form** — when you only need one line:

- EN: Memphis, cream base with bold colors and black outlines, squiggle-and-dot sticker motifs
- 中文: 孟菲斯，米白底撞亮色+黑色描边，波浪线圆点贴纸感

## Design tokens

Lifted verbatim from the reference implementation. Use these exact values.

```css
:root {
  --cream: #FFF8EC;
  --pink: #FF69B4;
  --teal: #00CED1;
  --gold: #FFD700;
  --tomato: #FF6347;
  --ink: #000000;
  --paper: #FFFFFF;
  --sans: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"PingFang SC","Microsoft YaHei",sans-serif;
  --mono: ui-monospace,"SF Mono",Menlo,Consolas,monospace;
}
```

## Signature traits

- High-saturation contrasting color clashes
- Polka dots, stripes, zigzag geometric patterns
- 3-5px thick black outlines
- Plastic and artificial textures
- Intentionally 'ugly' rebellious aesthetics

## Where it works

- Kids brands and educational products
- Y2K retro fashion brands
- Music festivals and creative events
- Designer toys and collectibles
- Social media marketing assets

## Strengths

- Extremely distinctive and memorable
- Full of vitality and youthfulness
- Strong topic appeal and social shareability
- Aligns with current Y2K retro trends

## Costs

- Visual impact too strong - causes fatigue
- Completely unsuitable for serious contexts
- Extreme style - high brand risk

## Pitfalls

The specific ways AI-generated pages in this style go wrong. Check each one before delivering.

1. Overcrowding — the sticker charm needs breathing room; cramming turns it into noise
   元素散得太满——贴纸感需要呼吸空间，塞满就成了视觉噪音
2. Mixed outline weights — a uniform ~3px black stroke is what makes elements feel like one set
   描边有粗有细——所有元素统一 3px 左右的黑描边才有成套感
3. Muted palettes — Memphis colors must clash at high saturation and brightness
   配色用了低饱和莫兰迪——孟菲斯的颜色必须高饱和高明度地对撞

## Seen in the wild

Ettore Sottsass works · Memphis Milano · Camper shoes · Moschino collections

## Reference implementation

`assets/demos/memphis.html` — a complete single-file page (392 lines, no scripts, no external requests). Read it for layout and composition patterns, or copy it as a starting point.

Live preview: https://design-vibes.v2ai.org/style/memphis
