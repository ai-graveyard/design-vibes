# Bento Grid `bento`

**Chinese name:** Bento 网格

**Type:** Layout pattern

**Study version:** 2026.09

**Difficulty:** 2 (Medium)

**Tags:** Minimal · Hot · Modern

**Fits:** SaaS / Tech, E-commerce / Retail

Arrange different amounts of information in a hierarchical modular grid; spanning cells carry the main story. This study uses 24px desktop card corners, white-gray surfaces and selective blue-violet accents, reordered for mobile.

## Study boundaries and references

An original web interpretation. Palette, assets and dimensions describe this example, not a universal definition of the style.

The composition below is an authored study; historical inspiration names are not certified reproductions.

## Prompt

Hand this to any AI coding tool, or use it as your own build brief.

**English**

> Bento Grid. Arrange different amounts of information in a hierarchical modular grid; spanning cells carry the main story. This study uses 24px desktop card corners, white-gray surfaces and selective blue-violet accents, reordered for mobile. Bento is a composable layout, not a fixed palette. Avoid giving every tile equal visual weight. Adapt palette and dimensions to the content; use the current demo reference brief for an exact reproduction.

**中文**

> Bento 网格。把不同体量的信息放入有主次的模块网格，跨列卡片承担重点内容。本例桌面卡片采用 24px 圆角、白灰表面和少量蓝紫强调，手机按内容顺序重排。不要把它理解成固定配色的独立风格；它可以与设计语言组合，避免每张卡片同等抢眼。配色与尺寸可根据内容调整；精确复现请使用当前演示的参考包。

**Short form** — when you only need one line:

- EN: Bento Grid: Arrange different amounts of information in a hierarchical modular grid; spanning cells carry the main story.
- 中文: Bento 网格：把不同体量的信息放入有主次的模块网格，跨列卡片承担重点内容。

## Design tokens

Parsed from this reference implementation. Preserve these values when matching this demo; adapt them deliberately when applying the broader style.

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

- Composition - Arrange different amounts of information in a hierarchical modular grid; spanning cells carry the main story.
- Signature - This study uses 24px desktop card corners, white-gray surfaces and selective blue-violet accents, reordered for mobile.

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

1. Bento is a composable layout, not a fixed palette. Avoid giving every tile equal visual weight.
   不要把它理解成固定配色的独立风格；它可以与设计语言组合，避免每张卡片同等抢眼。

## Seen in the wild

Apple Product Pages · Linear Features · Notion.so · Raycast · Arc Browser

## Reference implementation

`assets/demos/bento.html` — a complete single-file page (342 lines, no scripts, no external requests). Read it for layout and composition patterns, or copy it as a starting point.

Live preview: https://design-vibes.v2ai.org/style/bento
