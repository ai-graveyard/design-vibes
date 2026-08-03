# Organic Design `organic`

**Chinese name:** 有机形态  
**Rating:** ★★★★☆ 3.8/5  
**Difficulty:** 4 (Expert)  
**Tags:** Modern · Playful  
**Fits:** Kids / Education

Farewell to rigid right angles and grids, embracing nature's flowing curves. Irregular blob shapes, soft gradient color transitions, breathing-like dynamic effects. The humanized expression design language of tech companies like Stripe and Dropbox.

## Prompt

Hand this to any AI coding tool, or use it as your own build brief.

**English**

> Organic Design style, nature-inspired and flowing. Palette: deep forest green (#33544A), sage (#A9C7B9), and mid green (#63A375) over a soft off-white (#F3F7E9, #FFF9F0). Mix a serif for warmth with a plain sans-serif. The signature technique: give cards and shapes heavily asymmetric blob border-radius (e.g. 42% 58% 37% 63% / 60% 41% 59% 40%) instead of rectangles, so every container looks hand-drawn and flowing rather than geometric.

**中文**

> 有机形态风格，自然流动的气质。配色：深森林绿（#33544A）、鼠尾草绿（#A9C7B9）、中绿（#63A375），底色柔和米白（#F3F7E9、#FFF9F0）。衬线体增加温度，搭配简洁无衬线体。标志性技法：卡片和形状用高度不对称的“水滴形”圆角（例如 42% 58% 37% 63% / 60% 41% 59% 40%）代替矩形，让每个容器看起来像手绘流动的形状，而不是几何直角。

**Short form** — when you only need one line:

- EN: Organic Design, forest green on off-white, asymmetric blob-shaped containers
- 中文: 有机形态，森林绿+米白底，不对称水滴形圆角容器

## Design tokens

Lifted verbatim from the reference implementation. Use these exact values.

```css
:root {
  --mint: #A8E6CF;
  --leaf: #DCEDC1;
  --peach: #FFD3B6;
  --coral: #FFAAA5;
  --coral-deep: #F08A84;
  --sea: #98D8C8;
  --ink: #33544A;
  --ink-soft: #5F7A70;
  --bg: #FFF9F0;
  --deep: #2E5347;
  --serif: Georgia, serif;
  --sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "PingFang SC", "Microsoft YaHei", sans-serif;
}
```

## Signature traits

- SVG blob organic shapes
- Soft CSS gradient transitions
- Nature-inspired color combinations
- Soft edges and rounded corners
- Micro-animation breathing effects

## Where it works

- Tech company rebranding
- Creative agency sites
- Health and wellness products
- Education and learning platforms
- Fintech brand humanization

## Strengths

- Friendly and approachable brand perception
- Fresh visuals that break the grid
- Highly adaptable - blends with many styles
- Relatively simple animation implementation

## Costs

- Responsive design challenges
- Overuse can become messy
- SVG complexity affects performance

## Pitfalls

The specific ways AI-generated pages in this style go wrong. Check each one before delivering.

1. Blobs too regular — organic shapes must feel grown; near-circles defeat the purpose
   blob 形状太规则——有机形态要像自然生长，接近正圆或椭圆就失去了意义
2. Hard corners sneaking in — one sharp rectangle interrupts the entire flow
   曲线里混进直角——一处生硬的矩形会打断整个流动感
3. Fast animations — organic motion should breathe; speed makes it anxious
   动画太快——有机风的动效要像呼吸，快了就焦躁

## Seen in the wild

Stripe.com · Dropbox · Spotify · Mailchimp · Slack

## Reference implementation

`assets/demos/organic.html` — a complete single-file page (309 lines, no scripts, no external requests). Read it for layout and composition patterns, or copy it as a starting point.

Live preview: https://design-vibes.v2ai.org/style/organic
