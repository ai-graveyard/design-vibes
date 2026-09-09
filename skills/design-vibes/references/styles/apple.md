# Apple Minimalism `apple`

**Chinese name:** Apple 风

**Type:** Design language

**Study version:** 2026.09

**Difficulty:** 3 (Hard)

**Tags:** Minimal · Modern · Hot

**Fits:** SaaS / Tech, Enterprise / B2B

Center the product: short headlines, large product imagery, clear benefits and restrained sections. System sans-serif, tight display tracking and consistent spacing; reserve blue for links and primary actions. Let material and whitespace establish hierarchy.

## Study boundaries and references

An original product-page study, not an official Apple template. The demo brand and specifications are fictional.

- [Apple · Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/)

## Prompt

Hand this to any AI coding tool, or use it as your own build brief.

**English**

> Apple Minimalism. Center the product: short headlines, large product imagery, clear benefits and restrained sections. System sans-serif, tight display tracking and consistent spacing; reserve blue for links and primary actions. Let material and whitespace establish hierarchy. Whitespace must support content. Oversized corners, no accent color or a single shadow size are not universal rules. Adapt palette and dimensions to the content; use the current demo reference brief for an exact reproduction.

**中文**

> Apple 风。以产品为中心：短标题、大幅产品画面、清楚的卖点与克制的分区。系统无衬线字体，紧凑标题字距，统一间距；蓝色用于链接和主操作，材质与留白共同建立层级。不要把大留白变成内容缺失，也不要把大圆角、无强调色或某个阴影尺寸当作通用规则。配色与尺寸可根据内容调整；精确复现请使用当前演示的参考包。

**Short form** — when you only need one line:

- EN: Apple Minimalism: Center the product: short headlines, large product imagery, clear benefits and restrained sections.
- 中文: Apple 风：以产品为中心：短标题、大幅产品画面、清楚的卖点与克制的分区。

## Design tokens

Parsed from this reference implementation. Preserve these values when matching this demo; adapt them deliberately when applying the broader style.

```css
:root {
  --bg: #ffffff;
  --bg-alt: #f5f5f7;
  --fg: #1d1d1f;
  --fg-soft: #6e6e73;
  --accent: #0071e3;
  --accent-hover: #0077ed;
  --dark: #000000;
  --hairline: rgba(0,0,0,.08);
  --sans: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"PingFang SC","Microsoft YaHei",sans-serif;
}
```

## Signature traits

- Composition - Center the product: short headlines, large product imagery, clear benefits and restrained sections.
- Signature - System sans-serif, tight display tracking and consistent spacing; reserve blue for links and primary actions. Let material and whitespace establish hierarchy.

## Where it works

- Premium consumer electronics sites
- SaaS product landing pages
- Tech startup brand sites
- Designer portfolios
- Curated minimal e-commerce

## Strengths

- Ultimate professionalism - instant trust
- Timeless - elegant after 10 years
- Excellent performance - FCP < 1.5s
- High conversion - reduces decision fatigue

## Costs

- Demands excellent content - mediocrity exposed
- Can feel cold and distant - lacks warmth
- High dev cost - every detail needs polish

## Pitfalls

The specific ways AI-generated pages in this style go wrong. Check each one before delivering.

1. Whitespace must support content. Oversized corners, no accent color or a single shadow size are not universal rules.
   不要把大留白变成内容缺失，也不要把大圆角、无强调色或某个阴影尺寸当作通用规则。

## Seen in the wild

Apple.com · Linear.app · Notion.so · Stripe.com · Vercel.com

## Reference implementation

`assets/demos/apple.html` — a complete single-file page (349 lines, no scripts, no external requests). Read it for layout and composition patterns, or copy it as a starting point.

Live preview: https://design-vibes.v2ai.org/style/apple
