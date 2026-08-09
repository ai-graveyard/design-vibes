# Bento Grid `bento`

**Chinese name:** Bento 网格  
**Difficulty:** 2 (Medium)  
**Tags:** Minimal · Hot · Modern  
**Fits:** SaaS / Tech, E-commerce / Retail

A modular layout system inspired by Japanese bento boxes, popularized by Apple product pages. Different-sized card units like carefully arranged ingredients create rich visual rhythm. A perfect combination of information organization and visual aesthetics.

## Prompt

Hand this to any AI coding tool, or use it as your own build brief.

**English**

> Bento Grid layout, like a compartmentalized lunchbox. Palette: neutral card surfaces (#F5F5F7, warm beige #E8DCC8) accented with a purple-to-blue gradient (#7D4CFF, #B48CFF, #6EC1FF, #3A6FF7). Use a clean sans-serif. Arrange content into a modular grid of rounded cards (20px radius) in varying sizes — 1x1, 2x1, 2x2 — each zoned for one piece of information, with an occasional backdrop-filter blur(12px) accent card.

**中文**

> Bento 网格布局，像便当盒一样分格。配色：中性卡片底色（#F5F5F7、暖米 #E8DCC8），搭配紫到蓝的渐变强调色（#7D4CFF、#B48CFF、#6EC1FF、#3A6FF7）。字体用简洁无衬线体。内容排布成模块化圆角卡片网格（圆角 20px），大小不一（1x1、2x1、2x2），每格只装一类信息，偶尔用毛玻璃 blur(12px) 卡片作点缀。

**Short form** — when you only need one line:

- EN: Bento Grid, neutral cards with purple-blue gradient accents, varied-size rounded modules
- 中文: Bento网格，中性卡片+紫蓝渐变，大小不一的圆角模块

## Design tokens

Lifted verbatim from the reference implementation. Use these exact values.

```css
:root {
  --bg: #F0F0F0;
  --card: #FFFFFF;
  --dark: #1E1E1E;
  --ink: #000000;
  --ink-soft: #515154;
  --on-dark: #F5F5F7;
  --on-dark-soft: #A1A1A6;
  --accent: #007AFF;
  --violet: #7D4CFF;
  --edge: rgba(0,0,0,.07);
  --edge-dark: rgba(255,255,255,.10);
  --radius: 24px;
  --sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "PingFang SC", "Microsoft YaHei", sans-serif;
}
```

## Signature traits

- Modular card system - 1:1, 2:1, 1:2 ratios
- Varying cell size combinations
- Unified 16-24px border radius
- Clear functional sections
- Responsive grid reflow

## Where it works

- Product feature showcases
- Personal homepage and About pages
- Dashboard data overviews
- Portfolio project displays
- App download feature introductions

## Strengths

- Clear information organization
- Excellent mobile responsiveness
- Rich visual hierarchy with rhythm
- Strong content capacity

## Costs

- Content needs careful planning
- Over-popularity can be templated
- Space allocation requires design skills

## Pitfalls

The specific ways AI-generated pages in this style go wrong. Check each one before delivering.

1. No size rhythm — bento charm lives in varied cell sizes; uniform cells are just a grid
   格子大小没有节奏——bento 的魅力在大小格的韵律，全部等大就成了普通网格
2. Overstuffed cells — each box tells exactly one thing
   单个格子信息过载——每格只讲一件事
3. Freestyle radius and gaps — every cell must share one radius and gap to read as one box
   圆角与间距各自为政——所有格子共享同一套 radius 和 gap 才像一个便当盒

## Seen in the wild

Apple Product Pages · Linear Features · Notion.so · Raycast · Arc Browser

## Reference implementation

`assets/demos/bento.html` — a complete single-file page (342 lines, no scripts, no external requests). Read it for layout and composition patterns, or copy it as a starting point.

Live preview: https://design-vibes.v2ai.org/style/bento
