# Aurora Gradients `aurora`

**Chinese name:** 极光渐变  
**Difficulty:** 3 (Hard)  
**Tags:** Modern · Trendy · Hot  
**Fits:** SaaS / Tech

The dominant aesthetic of modern SaaS marketing: over a clean white canvas and restrained typography, one slowly flowing aurora gradient serves as the sole emotional outlet. Born from Stripe's iconic hero animation, it's now shorthand for 'professional but not boring'.

## Prompt

Hand this to any AI coding tool, or use it as your own build brief.

**English**

> Aurora gradient style (Stripe-school SaaS aesthetic). Near-white base (#FAFAFC), near-black text (#0A0A14), generous whitespace. Build a flowing aurora in the hero: layered radial-gradients of blurple (#635BFF), cyan (#00D4FF), and pink (#FF80BF) blurred ~100px, drifting slowly via CSS animation and dissolving into the white base. Apply aurora gradient text to key headline words with background-clip: text. Everything else stays restrained: 1px hairline gray cards (#E6E6EE) and small uppercase kicker labels. Let gradients bloom only in the hero and CTA bands — keep the rest clean.

**中文**

> 极光渐变风格（Stripe 式 SaaS 美学）。近白底色（#FAFAFC）配近黑文字（#0A0A14），大量留白。hero 区做一片流动极光：蓝紫（#635BFF）、青（#00D4FF）、粉（#FF80BF）多层 radial-gradient 色块经 blur(100px) 交叠，用 CSS 动画缓慢位移，边缘自然消散进白底。标题关键词用 background-clip: text 的极光渐变文字。其余部分极度克制：1px 细灰边框卡片（#E6E6EE）、小号 uppercase kicker 标签。渐变只在 hero 和 CTA 区绽放，别处保持干净。

**Short form** — when you only need one line:

- EN: Aurora gradients, white base with near-black text, diffused hero aurora and gradient headlines, hairline cards
- 中文: 极光渐变，白底近黑字，hero 弥散极光+渐变标题字，细灰边框卡片

## Design tokens

Lifted verbatim from the reference implementation. Use these exact values.

```css
:root {
  --bg: #FAFAFC;
  --surface: #FFFFFF;
  --ink: #0A0A14;
  --ink-soft: #55556B;
  --ink-faint: #8B8BA3;
  --edge: #E6E6EE;
  --edge-soft: #F0F0F6;
  --aurora-iris: #635BFF;
  --aurora-indigo: #7A73FF;
  --aurora-cyan: #00D4FF;
  --aurora-pink: #FF80BF;
  --gradient-aurora: linear-gradient(95deg,var(--aurora-iris) 0%,var(--aurora-cyan) 52%,var(--aurora-pink) 104%);
  --dark: #0A0A14;
  --dark-raised: #111126;
  --on-dark: #F1F1FA;
  --on-dark-soft: #9C9CBC;
  --ok: #16B87A;
  --syntax-comment: #5E5E84;
  --syntax-keyword: #FF88C6;
  --syntax-string: #74E4FF;
  --syntax-ident: #BDB9FF;
  --syntax-plain: #E9E9F6;
  --radius-lg: 20px;
  --radius-md: 12px;
  --sans: -apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Roboto,Arial,"PingFang SC","Microsoft YaHei",sans-serif;
  --mono: ui-monospace,"SF Mono",SFMono-Regular,Menlo,Consolas,"Courier New",monospace;
}
```

## Signature traits

- Diffused aurora gradients - layered blurred color fields
- Clean white base - gradients bloom only at key moments
- Gradient text - background-clip: text
- Hairline gray cards - 1px borders
- Slow drifting animation - 8s+ loops

## Where it works

- SaaS product sites
- AI product launch pages
- Developer tool marketing
- Fintech brands
- Tech conference pages

## Strengths

- Professional yet emotive
- Easy to adapt to brand colors
- Mature technique - pure CSS
- Market-proven conversion

## Costs

- Heavily saturated - it's everywhere
- Gradient color control takes skill
- Overuse reads as flashy

## Pitfalls

The specific ways AI-generated pages in this style go wrong. Check each one before delivering.

1. Gradients everywhere — the aurora blooms only in hero and CTA bands; keep the rest plain
   渐变铺满全页——极光只在 hero 与 CTA 绽放，其余保持素净
2. Muddy hue transitions — blends must stay clean and luminous or it cheapens fast
   相邻色相脏了——过渡必须干净通透，混浊立刻显得廉价
3. No motion — a static aurora is just colored blur
   忘了动起来——静止的极光只是一团彩色模糊

## Seen in the wild

Stripe.com · Linear.app · Raycast.com · Resend.com · Clerk.com

## Reference implementation

`assets/demos/aurora.html` — a complete single-file page (417 lines, no scripts, no external requests). Read it for layout and composition patterns, or copy it as a starting point.

Live preview: https://design-vibes.v2ai.org/style/aurora
