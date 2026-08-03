# Apple Minimalism `apple`

**Chinese name:** Apple 风  
**Rating:** ★★★★★ 4.5/5  
**Difficulty:** 3 (Hard)  
**Tags:** Minimal · Modern · Hot  
**Fits:** SaaS / Tech, Enterprise / B2B

Centered on 'simplicity is the ultimate sophistication', featuring pixel-perfect whitespace control, refined SF Pro typography system, subtle Gaussian blur and shadows to create elegant digital artworks. Every element is deliberate, rejecting all redundancy.

## Prompt

Hand this to any AI coding tool, or use it as your own build brief.

**English**

> Apple Minimalism style website. Palette stays almost monochrome — off-white background (#FBFBFD to #F5F5F7) with muted gray text (#86868B) and no bold accent color; restraint itself is the accent. Use a system sans-serif with tight tracking on oversized display headlines and light small body text. Add a frosted translucent nav bar (backdrop-filter blur + saturate) and generous pill-rounded corners (up to 130px) surrounded by huge whitespace.

**中文**

> Apple 极简主义风格网站。配色几乎是单色调：背景用米白到浅灰（#FBFBFD 到 #F5F5F7），文字用低饱和灰（#86868B），不设强调色，克制本身就是设计语言。字体用系统无衬线体，大号标题字距收紧、正文小而浅淡。加一条毛玻璃导航栏（backdrop-filter 模糊+饱和度提升），大胆使用超大圆角（最高可到 130px），四周留白要充足。

**Short form** — when you only need one line:

- EN: Apple Minimalism, off-white gray palette, frosted glass nav bar, oversized rounded corners
- 中文: Apple 极简风格，米白灰阶配色，毛玻璃导航栏，超大圆角

## Design tokens

Lifted verbatim from the reference implementation. Use these exact values.

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

- Generous breathing space - ultra-low content density
- SF Pro font family - 9 weights for precise control
- Subtle gradient shadows - 0.5-2px ultra-thin drops
- 4K product imagery - HDR color reproduction
- 60fps Bézier curve animations

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

1. Scattered, unsystematic whitespace — Apple spacing follows an 8pt scale; random large margins just look empty
   留白给得零散不成系统——Apple 的间距是 8 的倍数刻度，随手的大 margin 只会显得空
2. Accent color everywhere — blue belongs only to links and the primary CTA
   强调色到处用——蓝色只属于链接与主 CTA，满屏蓝按钮就不是 Apple 了
3. Heavy shadows — anything beyond 2px reads cheap; keep them hairline-thin
   阴影下手太重——超过 2px 的实体投影立刻廉价，要用发丝级的超薄阴影
4. Bold everywhere — hierarchy comes from size and gray value, not weight
   字重全用 Bold——层级靠字号与灰度区分，不靠加粗

## Seen in the wild

Apple.com · Linear.app · Notion.so · Stripe.com · Vercel.com

## Reference implementation

`assets/demos/apple.html` — a complete single-file page (400 lines, no scripts, no external requests). Read it for layout and composition patterns, or copy it as a starting point.

Live preview: https://design-vibes.v2ai.org/style/apple
