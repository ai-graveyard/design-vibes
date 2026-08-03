# Kinetic Typography `kinetic`

**Chinese name:** 动态字体  
**Rating:** ★★★☆☆ 2.9/5  
**Difficulty:** 3 (Hard)  
**Tags:** Art · Avant-garde  
**Fits:** Creative / Design

Transforming text from static reading objects to dynamic visual experiences. Scroll-triggered typography animations, text deconstruction and reassembly, font movement in 3D space. The favorite digital expression of creative agencies and directors.

## Prompt

Hand this to any AI coding tool, or use it as your own build brief.

**English**

> Kinetic Typography style — text as the animation, not decoration on top of it. Keep color almost grayscale (#0A0A0A, #2B2B2B, #8A8A8A) with a single red accent (#FF0000) used sparingly, so motion — not color — carries the energy. Pair a wide-tracked monospace for small kicker labels with a heavy sans-serif for oversized headlines. Implementation: smooth scroll-behavior plus scroll-triggered keyframe animations that make letters wave, spin, slide, or jump as the user scrolls — describe the specific motion per section (e.g. letters wave in on scroll, or slide horizontally) rather than leaving it generic.

**中文**

> 动态字体风格——文字本身就是动画，而不是给文字加装饰动画。配色几乎只用灰阶（#0A0A0A、#2B2B2B、#8A8A8A），只留一处红色强调（#FF0000）少量使用，让动效而不是色彩来承载张力。宽字距等宽体用于小标签，加粗无衬线体用于超大号标题。实现上：用平滑滚动（scroll-behavior: smooth）配合滚动触发的关键帧动画，让文字随滚动产生波动、旋转、滑动或跳动——需要具体描述每一段的动效方式（比如某段文字滚动进入时逐字波动，某段整体横向滑出），不要只写“滚动触发动效”这种笼统说法。

**Short form** — when you only need one line:

- EN: Kinetic Typography, grayscale with red accent, scroll-triggered letter wave/slide animation
- 中文: 动态字体，灰阶+红色点缀，滚动触发的逐字波动/滑动动效

## Design tokens

Lifted verbatim from the reference implementation. Use these exact values.

```css
:root {
  --bg: #000000;
  --fg: #FFFFFF;
  --accent: #FF0000;
  --gray: #8a8a8a;
  --line: #2b2b2b;
  --sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "PingFang SC", "Microsoft YaHei", sans-serif;
  --mono: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
}
```

## Signature traits

- GSAP/Framer Motion typography animation
- Scroll-triggered progressive reveals
- Text particle dissolution and reassembly
- 3D CSS transform effects
- Variable fonts animation

## Where it works

- Creative agency websites
- Film/MV promotional sites
- Designer personal portfolios
- Brand campaign microsites
- Art installation interactive sites

## Strengths

- Extremely strong visual appeal and memorability
- Strong narrative ability - storytelling tool
- Unique brand expression method
- Regular award winner

## Costs

- Large performance overhead - needs optimization
- Accessibility challenges - motion-sensitive users
- Content may be overwhelmed by animation
- Not SEO-friendly

## Pitfalls

The specific ways AI-generated pages in this style go wrong. Check each one before delivering.

1. Everything animating at once — kinetic type needs choreography; simultaneous motion means no focus
   所有文字同时在动——动态字体需要编排节奏，全部一起动等于没有焦点
2. Relentless loops — keep cycles slow with resting beats, or it's nauseating
   循环不停不歇——动画要慢、要留静止段，否则让人头晕
3. Ignoring prefers-reduced-motion — the accessibility red line of motion-heavy styles
   忽略 prefers-reduced-motion——动效风格的可访问性红线

## Seen in the wild

Apple keynotes · Active Theory works · Awwwards winners · KIKK Festival

## Reference implementation

`assets/demos/kinetic.html` — a complete single-file page (258 lines, no scripts, no external requests). Read it for layout and composition patterns, or copy it as a starting point.

Live preview: https://design-vibes.v2ai.org/style/kinetic
