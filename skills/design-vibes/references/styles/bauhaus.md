# Bauhaus `bauhaus`

**Chinese name:** 包豪斯  
**Rating:** ★★★★☆ 3.9/5  
**Difficulty:** unrated  
**Tags:** Art · Vintage · Classic  
**Fits:** Creative / Design

The 1919 art revolution in Weimar, advocating 'unity of art and technology'. Primary colors red-yellow-blue, basic shapes circle-square-triangle — these elements still radiate avant-garde energy a century later. Bauhaus isn't just a style, it's a way of thinking about design.

## Prompt

Hand this to any AI coding tool, or use it as your own build brief.

**English**

> Bauhaus style built from pure geometry. Palette: cream background (#F4F1EA), navy blue (#1F3BB3), red (#E2261C), yellow (#F2BE0F), and near-black ink (#131313). Use monospace for small labels and a geometric sans-serif for headlines. The signature move: compose circles, triangles, and squares with thick black outlines (3-13px) as literal layout elements, not decoration — form follows function.

**中文**

> 包豪斯风格，用纯粹的几何形状构建版面。配色：米白底色（#F4F1EA）、藏青（#1F3BB3）、红（#E2261C）、黄（#F2BE0F）、近黑墨色（#131313）。小标签用等宽字体，标题用几何感无衬线体。标志性手法：用粗黑描边（3-13px）的圆形、三角形、正方形直接构成版面结构，而不是当装饰——形式追随功能。

**Short form** — when you only need one line:

- EN: Bauhaus, cream base with navy/red/yellow, thick-outlined geometric shapes
- 中文: 包豪斯，米白底+藏青红黄，粗黑描边几何图形

## Design tokens

Lifted verbatim from the reference implementation. Use these exact values.

```css
:root {
  --red: #E2261C;
  --yellow: #F2BE0F;
  --blue: #1F3BB3;
  --black: #131313;
  --paper: #F4F1EA;
  --white: #FFFFFF;
  --sans: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"PingFang SC","Microsoft YaHei",sans-serif;
  --mono: ui-monospace,"SF Mono",Menlo,Consolas,monospace;
}
```

## Signature traits

- Geometric shapes - circle, square, triangle
- Primary colors red-yellow-blue + black-white-gray
- Strict form follows function logic
- Asymmetric visual balance
- Perfect fusion of craft and art

## Where it works

- Contemporary art gallery sites
- Design schools and institutions
- Furniture brand flagships
- Architecture design firms
- Creative cultural event pages

## Strengths

- Extremely strong artistic expression
- Deep cultural heritage - design history classic
- Bold yet harmonious color use
- Elements infinitely combinable

## Costs

- Requires professional color expertise
- Overuse can appear dated
- Limited commercial applications

## Pitfalls

The specific ways AI-generated pages in this style go wrong. Check each one before delivering.

1. Shapes as floating stickers — circles, triangles, squares must structure the layout, not decorate it
   几何图形只当背景贴纸——圆、三角、方要参与版面结构，而不是漂浮装饰
2. Inconsistent stroke widths — the thick black outlines need one scale; mixed weights kill the order
   描边粗细不一致——粗黑描边要统一刻度，杂乱线宽毁掉秩序感
3. Extra hues — red, yellow, blue plus black/cream is the whole palette; one more and it's not Bauhaus
   配色加了粉紫青——红黄蓝三原色加黑白米就是全部，多一色都不是包豪斯

## Seen in the wild

Bauhaus-Archiv Berlin · Vitra Design Museum · MoMA Design Store · Alessi

## Reference implementation

`assets/demos/bauhaus.html` — a complete single-file page (316 lines, no scripts, no external requests). Read it for layout and composition patterns, or copy it as a starting point.

Live preview: https://design-vibes.v2ai.org/style/bauhaus
