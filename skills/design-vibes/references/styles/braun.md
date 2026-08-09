# Braun / Dieter Rams `braun`

**Chinese name:** 迪特·拉姆斯风  
**Difficulty:** 2 (Medium)  
**Tags:** Minimal · Classic  
**Fits:** Creative / Design, Enterprise / B2B

Following 'Ten Principles for Good Design', with grid as skeleton and function as soul. Eliminating all decorative elements, every pixel serves a purpose. A digital interpretation of industrial design father Dieter Rams — honest, enduring, less but better.

## Prompt

Hand this to any AI coding tool, or use it as your own build brief.

**English**

> Braun / Dieter Rams style with a strict grid system. Palette is light warm grays (#F7F7F7, #EFEFEF, #ECECEC) with a single burnt-orange accent (#E8500A) reserved for functional controls like dials or switches. Pair a monospace font for technical labels with a clean sans-serif for body text. Keep corners nearly square (2-4px radius) and let every element earn its place — as little design as possible.

**中文**

> 迪特·拉姆斯 / Braun 风格，严格网格系统。配色以浅暖灰为主（#F7F7F7、#EFEFEF、#ECECEC），只留一处焦橙色强调（#E8500A），用在拨盘、开关等功能性控件上。等宽字体用于技术标签，无衬线字体用于正文。圆角几乎为直角（2-4px），每个元素都要有存在的理由——少即是多。

**Short form** — when you only need one line:

- EN: Dieter Rams style, warm gray palette with burnt-orange accent, grid-aligned functional controls
- 中文: 拉姆斯风格，暖灰配色+焦橙强调色，网格化功能按钮

## Design tokens

Lifted verbatim from the reference implementation. Use these exact values.

```css
:root {
  --u: 8px;
  --panel: #ffffff;
  --ink: #1a1a1a;
  --gray: #808080;
  --line: #c9c9c9;
  --metal-hi: #f6f6f6;
  --metal-lo: #dcdcdc;
  --accent: #e8500a;
  --mono: ui-monospace,"SF Mono",Menlo,Consolas,monospace;
}
```

## Signature traits

- Strict 8pt grid system
- Neutral grayscale - only functional colors
- Clear visual hierarchy - controlled density
- No decorative elements - zero meaningless pixels
- Function-first interaction design

## Where it works

- Industrial design company sites
- Architecture firm portfolios
- Premium furniture brands
- Professional photography gear stores
- Minimalist lifestyle brands

## Strengths

- Ultimate professionalism - cross-cultural
- Extremely efficient information delivery
- Brand consistency easy to maintain
- Clear and controllable dev specs

## Costs

- Requires deep typography expertise
- Not for brands needing emotional resonance
- Can be mistaken for 'no design'

## Pitfalls

The specific ways AI-generated pages in this style go wrong. Check each one before delivering.

1. A second accent — the burnt orange goes on exactly one functional control; more becomes decoration
   强调色出现第二处——焦橙只给一个功能控件，多了就成了装饰
2. Decorative graphics — every pixel needs a functional reason here
   加了装饰性图形——拉姆斯风里每个像素都要有功能理由
3. Broken grid alignment — the 8pt grid is the skeleton; one misalignment ruins it all
   网格对不齐——8pt 网格是骨架，一处错位全盘皆输

## Seen in the wild

Braun.com · Vitsoe.com · Teenage Engineering · Leica · Bang & Olufsen

## Reference implementation

`assets/demos/braun.html` — a complete single-file page (403 lines, no scripts, no external requests). Read it for layout and composition patterns, or copy it as a starting point.

Live preview: https://design-vibes.v2ai.org/style/braun
