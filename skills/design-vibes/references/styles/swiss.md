# Swiss Style / International Typographic `swiss`

**Chinese name:** 瑞士风格  
**Rating:** ★★★★☆ 4/5  
**Difficulty:** 2 (Medium)  
**Tags:** Minimal · Classic  
**Fits:** E-commerce / Retail, Creative / Design, Enterprise / B2B

A design revolution born in 1950s Zurich, advocating 'objectivity' and 'universality'. Breaking monotony through asymmetric layouts, building visual order with Helvetica, using typography itself as the primary graphic element — pure typographic art.

## Prompt

Hand this to any AI coding tool, or use it as your own build brief.

**English**

> Swiss International Style with a strict asymmetric grid. Palette is black and white with sparing primary-color blocks (red #FF0000, yellow #FFD700, blue #0000FF) used only as accents, never decoration. Use a wide-tracked monospace for kicker labels and a Helvetica-like sans-serif for oversized numerals and body copy. Keep every corner square — no border-radius — and let column alignment and whitespace carry the objective, neutral tone.

**中文**

> 瑞士国际主义风格，严格的非对称网格布局。配色以黑白为主，红（#FF0000）、黄（#FFD700）、蓝（#0000FF）三原色只作为局部强调块出现，不做装饰。等宽字体、宽字距用于小标签，Helvetica 风格无衬线体用于超大号数字和正文。所有元素都不设圆角，靠栏线对齐和大量留白传达客观中立的气质。

**Short form** — when you only need one line:

- EN: Swiss Style, black-white with primary color accents, square-cornered grid layout
- 中文: 瑞士风格，黑白+三原色点缀，无圆角网格排版

## Design tokens

Lifted verbatim from the reference implementation. Use these exact values.

```css
:root {
  --bg: #FFFFFF;
  --fg: #000000;
  --accent: #FF0000;
  --gold: #FFD700;
  --blue: #0000FF;
  --hair: #000000;
  --sans: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"PingFang SC","Microsoft YaHei",sans-serif;
  --mono: ui-monospace,"SF Mono",Menlo,Consolas,monospace;
}
```

## Signature traits

- Asymmetric dynamic layouts - breaking visual inertia
- Helvetica/Neue Haas Grotesk typography
- High-contrast black & white - primary color accents
- Mathematical whitespace ratios - golden ratio
- Type as image - typographic sculpture

## Where it works

- International art biennial sites
- Avant-garde publisher brands
- Museums and cultural institutions
- Design education platforms
- Premium magazine digital editions

## Strengths

- Timeless classic - 70 years strong
- Highest expression of typographic art
- Crystal clear information architecture
- Strong cultural symbol value

## Costs

- Steep learning curve - hard for non-designers
- High font licensing costs
- Requires specific content lengths

## Pitfalls

The specific ways AI-generated pages in this style go wrong. Check each one before delivering.

1. Primary colors as decoration — red/yellow/blue are small functional accents; large fields turn it into poster paint
   三原色当装饰铺满——红黄蓝只做小面积功能强调，大面积使用就成了海报涂鸦
2. Rounded corners — border-radius does not exist in Swiss style
   用了圆角——瑞士风的世界里没有 border-radius
3. Centered symmetric layouts — the asymmetric grid is the soul; centering makes it generic
   居中对称布局——非对称网格才是灵魂，居中就平庸了

## Seen in the wild

Josef Müller-Brockmann works · Emil Ruder works · Neue Haas Grotesk site · Type Directors Club

## Reference implementation

`assets/demos/swiss.html` — a complete single-file page (324 lines, no scripts, no external requests). Read it for layout and composition patterns, or copy it as a starting point.

Live preview: https://design-vibes.v2ai.org/style/swiss
