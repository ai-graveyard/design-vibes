# Anti-Design `anti-design`

**Chinese name:** 反设计  
**Rating:** ★★★☆☆ 2.8/5  
**Difficulty:** unrated  
**Tags:** Avant-garde · Distinctive · Trendy  
**Fits:** —

'Rules are made to be broken' — Anti-Design is a total subversion of traditional design principles. Chaotic layouts, clashing colors, distorted typography — every seemingly 'wrong' choice is intentional. This is Gen Z digital natives' visual mother tongue.

## Prompt

Hand this to any AI coding tool, or use it as your own build brief.

**English**

> Anti-Design style, deliberately breaking every convention. Palette clashes on purpose: pure blue (#0000FF), magenta (#FF00FF), yellow (#FFFF00) against stark white and black. Mix monospace, sans-serif, and serif fonts inconsistently within the same page — no single typographic system. Give different elements mismatched thick borders (2-5px, different colors and widths), scatter circular badges, and misalign the grid on purpose, while keeping text still legible.

**中文**

> 反设计风格，故意打破常规。配色刻意冲突：纯蓝（#0000FF）、品红（#FF00FF）、黄（#FFFF00），底色是硬朗的黑白。同一页面里混用等宽体、无衬线体、衬线体，不统一字体系统。不同元素配不匹配的粗边框（2-5px，颜色宽度都不同），散布圆形徽标，网格故意错位——但文字仍要保持可读。

**Short form** — when you only need one line:

- EN: Anti-Design, clashing primary colors with mixed fonts, mismatched misaligned borders
- 中文: 反设计，冲突原色+混搭字体，粗细不一的错位边框

## Design tokens

Lifted verbatim from the reference implementation. Use these exact values.

```css
:root {
  --green: #89FC00;
  --magenta: #FF00FF;
  --red: #FF0000;
  --blue: #0000FF;
  --yellow: #FFFF00;
  --ink: #000000;
  --paper: #FFFFFF;
  --sans: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"PingFang SC","Microsoft YaHei",sans-serif;
  --serif: Georgia,"Times New Roman",serif;
  --mono: ui-monospace,"SF Mono",Menlo,Consolas,monospace;
}
```

## Signature traits

- Intentionally breaking alignment and spacing
- Clashing color combos - green-red, pink-orange
- Distorted and stretched typography
- Randomized element positions
- Low-quality/glitch aesthetic elements

## Where it works

- Gen Z streetwear brands
- Independent musicians and bands
- Streetwear fashion brands
- Creative events and pop-ups
- Social media viral marketing

## Strengths

- Extremely high topic appeal and shareability
- Precisely reaches young audiences
- Ultimate brand personality expression
- High social media share rate

## Costs

- Near-zero usability
- Easily outdated - short lifecycle
- Extremely high brand risk
- Low mass acceptance

## Pitfalls

The specific ways AI-generated pages in this style go wrong. Check each one before delivering.

1. Chaos without curation — anti-design is engineered loss of control; random mess is just mess
   乱得没有秩序——反设计是精心策划的失控，随机堆砌只是真的乱
2. Breaking usability too — buttons must still be findable and clickable
   把可用性也一起反掉——按钮仍要能找到、能点击
3. Half-hearted rebellion — mild clashes read as mistakes, not statements
   叛逆得不够彻底——半吊子的冲突看起来像失误而不是宣言

## Seen in the wild

Charli XCX - Brat · Balenciaga campaigns · MSCHF · Yaeji

## Reference implementation

`assets/demos/anti-design.html` — a complete single-file page (341 lines, no scripts, no external requests). Read it for layout and composition patterns, or copy it as a starting point.

Live preview: https://design-vibes.v2ai.org/style/anti-design
