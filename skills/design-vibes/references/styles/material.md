# Material Design `material`

**Rating:** ★★★★☆ 4.1/5  
**Difficulty:** 2 (Medium)  
**Tags:** Modern · Classic  
**Fits:** Enterprise / B2B

Google's design system released in 2014, built on the 'digital paper' metaphor. Expressing Z-axis depth through shadow hierarchy, conveying interaction feedback with meaningful motion. The most complete and thoroughly documented design specification system.

## Prompt

Hand this to any AI coding tool, or use it as your own build brief.

**English**

> Material Design (Material You era) with a pastel tonal palette — blush pink (#FFD8E4), lavender (#EADDFF, #E8DEF8), near-white (#FEF7FF), accented with Google yellow (#FBBC05) and red (#EA4335). Use a Roboto-like grotesque sans-serif. Stack layered elevation shadows to imply a paper-like z-axis, keep corners generously rounded (16-28px), and give primary actions a filled circular FAB (border-radius 50%).

**中文**

> Material Design（Material You 时代）风格，柔和色调层次配色——浅粉（#FFD8E4）、薰衣草紫（#EADDFF、#E8DEF8）、近白（#FEF7FF），点缀 Google 黄（#FBBC05）和红（#EA4335）。字体用类 Roboto 无衬线体。用层叠的高度阴影模拟纸张的 z 轴层级，圆角要大方（16-28px），主操作按钮用实心圆形 FAB（圆角 50%）。

**Short form** — when you only need one line:

- EN: Material Design, pastel pink-lavender with Google yellow/red accents, large radius with elevation shadows
- 中文: Material Design，粉紫柔色调+Google黄红点缀，大圆角+层级阴影

## Design tokens

Lifted verbatim from the reference implementation. Use these exact values.

```css
:root {
  --primary: #6750A4;
  --on-primary: #FFFFFF;
  --primary-container: #EADDFF;
  --on-primary-container: #21005D;
  --secondary-container: #E8DEF8;
  --on-secondary-container: #1D192B;
  --tertiary-container: #FFD8E4;
  --on-tertiary-container: #31111D;
  --surface: #FEF7FF;
  --surface-dim: #F8F1FA;
  --surface-c-low: #F7F2FA;
  --surface-c: #F3EDF7;
  --surface-c-high: #ECE6F0;
  --on-surface: #1C1B1F;
  --on-surface-var: #49454F;
  --outline: #79747E;
  --outline-var: #CAC4D0;
  --blue: #4285F4;
  --green: #34A853;
  --yellow: #FBBC05;
  --red: #EA4335;
  --grey: #5F6368;
  --e1: 0 1px 2px rgba(0,0,0,.3), 0 1px 3px 1px rgba(0,0,0,.15);
  --e2: 0 1px 2px rgba(0,0,0,.3), 0 2px 6px 2px rgba(0,0,0,.15);
  --e3: 0 1px 3px rgba(0,0,0,.3), 0 4px 8px 3px rgba(0,0,0,.15);
  --e4: 0 2px 3px rgba(0,0,0,.3), 0 6px 10px 4px rgba(0,0,0,.15);
  --sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "PingFang SC", "Microsoft YaHei", sans-serif;
}
```

## Signature traits

- Paper metaphor - card-based UI
- Shadow hierarchy - 1dp to 24dp
- Meaningful motion transitions - 300-500ms
- Bold and vibrant brand color use
- Responsive touch feedback - ripple effects

## Where it works

- Android native app development
- Enterprise B2B products
- Cross-platform web applications
- Google ecosystem products
- Education and learning platforms

## Strengths

- Extremely complete design system - ready to use
- Thorough documentation - rich learning resources
- High user familiarity - reduced learning cost
- Mature component library ecosystem

## Costs

- Lacks brand personality - can be generic
- Too 'Google-like'
- Motion transitions may affect performance

## Pitfalls

The specific ways AI-generated pages in this style go wrong. Check each one before delivering.

1. Random elevation — shadow depth encodes hierarchy in Material; it's not ad-hoc decoration
   海拔乱用——Material 的阴影深度对应层级语义，不是随手的装饰
2. Freestyle corner radii — radii follow tokens; don't invent per card
   圆角刻度各自为政——圆角有 token 体系，别每张卡片自创一套
3. No motion — ripples and transitions are the soul; without them it's just colored cards
   动效缺席——涟漪反馈与转场是 Material 的灵魂，静态的只是彩色卡片

## Seen in the wild

All Google products · Android system UI · Flutter apps · YouTube

## Reference implementation

`assets/demos/material.html` — a complete single-file page (474 lines, no scripts, no external requests). Read it for layout and composition patterns, or copy it as a starting point.

Live preview: https://design-vibes.v2ai.org/style/material
