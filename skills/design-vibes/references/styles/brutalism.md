# Brutalism `brutalism`

**Chinese name:** 粗野主义  
**Difficulty:** 1 (Easy)  
**Tags:** Avant-garde · Distinctive  
**Fits:** Art / Culture

An extreme expression of architectural 'New Brutalism' in web design — refusing beautification, exposing structure, returning to raw. System fonts, default link styles, undecorated tables — a powerful rebellion against over-design.

## Prompt

Hand this to any AI coding tool, or use it as your own build brief.

**English**

> Brutalism style — looks like raw, unstyled HTML on purpose. Palette is web-safe primaries: classic hyperlink blue (#0000EE), red (#FF0000), yellow (#FFFF00), purple (#551A8B), on plain white. Use browser-default typefaces — Times-like serif for body, monospace for code-ish bits. Keep borders thin (1-3px solid, zero radius), leave links underlined in default blue, and pack text into dense, deliberately un-designed blocks.

**中文**

> 粗野主义风格——刻意做出未经样式化的原始 HTML 观感。配色用浏览器安全色：经典超链接蓝（#0000EE）、红（#FF0000）、黄（#FFFF00）、紫（#551A8B），底色纯白。字体用浏览器默认字体——衬线体（类 Times）做正文，等宽体做代码感区块。边框保持细窄（1-3px 实线，零圆角），链接保留默认蓝色下划线，文字密集堆叠，刻意不做排版设计。

**Short form** — when you only need one line:

- EN: Brutalism, web-safe colors with default blue links, zero-radius raw-HTML look
- 中文: 粗野主义，浏览器安全色+默认蓝链接，零圆角原始HTML感

## Design tokens

Lifted verbatim from the reference implementation. Use these exact values.

```css
:root {
  --bg: #FFFFFF;
  --fg: #000000;
  --link: #0000EE;
  --visited: #551A8B;
  --hl: #FFFF00;
  --red: #FF0000;
  --green: #00FF00;
  --serif: Georgia,"Times New Roman",serif;
  --mono: ui-monospace,"SF Mono",Menlo,Consolas,monospace;
}
```

## Signature traits

- Unstyled HTML default styles
- Oversized bold headings - 72px+
- High-contrast black-white/neon colors
- Exposed code structure and grid
- System default fonts - Times/Arial

## Where it works

- Avant-garde artist personal sites
- Underground music labels
- Experimental digital art projects
- Counter-culture brands
- Academic research websites

## Strengths

- Ultimate performance - near zero dependencies
- Strong visual impact and memorability
- Perfect vehicle for rebellious spirit
- Extremely low development cost

## Costs

- User experience can be terrible
- Hard for commercial clients to accept
- Accessibility needs special attention
- Often mistaken for 'unfinished'

## Pitfalls

The specific ways AI-generated pages in this style go wrong. Check each one before delivering.

1. Sneaking in polish — rounded corners, shadows, gradients all betray the point
   偷偷做了美化——加圆角、加阴影、加渐变，那就不再是粗野主义
2. Swapping in refined sans-serifs — default Times and monospace carry the rawness
   字体换成精致无衬线——浏览器默认的 Times 与等宽体才有生猛感
3. Layouts too tidy — deliberate density and misalignment are the attitude
   排版太规整——刻意的密集堆叠与错位才是态度本身

## Seen in the wild

brutalistwebsites.com · Craigslist · Bloomberg.com (partially) · Hacker News

## Reference implementation

`assets/demos/brutalism.html` — a complete single-file page (313 lines, no scripts, no external requests). Read it for layout and composition patterns, or copy it as a starting point.

Live preview: https://design-vibes.v2ai.org/style/brutalism
