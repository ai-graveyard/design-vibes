# Claymorphism `claymorphism`

**Chinese name:** 粘土拟态  
**Rating:** ★★★☆☆ 3/5  
**Difficulty:** 4 (Expert)  
**Tags:** Modern · Playful  
**Fits:** Gaming / Entertainment, Kids / Education

A frontier trend of 3D rendering entering UI design. Rounded fluffy clay textures, soft inner shadows, pastel candy colors. Like molding a cute cartoon world on screen, full of touchable appeal.

## Prompt

Hand this to any AI coding tool, or use it as your own build brief.

**English**

> Claymorphism style — soft 3D clay toys. Palette: candy-pastel mango (#F7B94F), pink (#F79CAC), mint (#C9FDC9), orchid (#C98BD1), and green (#7FE39C) over cream (#FFF9F4). Use a rounded, friendly sans-serif. Push border-radius very large (30-38px, some elements fully pill-shaped at 999px) and layer a puffy dual-tone soft shadow (light highlight plus soft colored shadow) so every element looks inflated and squeezable, like modeling clay.

**中文**

> 粘土拟态风格——像柔软的 3D 粘土玩具。配色：糖果色芒果黄（#F7B94F）、粉（#F79CAC）、薄荷绿（#C9FDC9）、兰紫（#C98BD1）、绿（#7FE39C），底色奶油白（#FFF9F4）。字体用圆润友好的无衬线体。圆角要非常大（30-38px，部分元素做成完全胶囊形 999px），叠加蓬松的双色柔和阴影（亮部高光+柔和彩色阴影），让每个元素看起来鼓鼓的、像可以捏一下的粘土。

**Short form** — when you only need one line:

- EN: Claymorphism, candy pastel on cream, very large radius with puffy dual-tone shadow
- 中文: 粘土拟态，糖果色+奶油底，超大圆角+蓬松双色阴影

## Design tokens

Lifted verbatim from the reference implementation. Use these exact values.

```css
:root {
  --pink: #FFB6C1;
  --pink-deep: #F79CAC;
  --sky: #87CEEB;
  --sky-deep: #6FBBDD;
  --mint: #98FB98;
  --mint-deep: #7FE39C;
  --plum: #DDA0DD;
  --plum-deep: #C98BD1;
  --peach: #FFDAB9;
  --peach-deep: #FFC69B;
  --cream: #FFF9F4;
  --ink: #5F4B78;
  --muted: #94819F;
  --bg1: #FFF2F6;
  --bg2: #F3EDFC;
  --bg3: #EAF7F4;
  --shadow-plum: rgba(201,139,209,.32);
  --hi: rgba(255,255,255,.9);
  --lo: rgba(122,82,140,.16);
  --sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "PingFang SC", "Microsoft YaHei", sans-serif;
}
```

## Signature traits

- 3D clay texture simulation
- Rounded blob shapes - border-radius: 50%
- Soft inner shadows + ambient light
- Pastel low-saturation candy colors
- Subtle highlights and reflections

## Where it works

- Kids education apps
- Social entertainment platforms
- Gamification interface design
- NFT and digital art showcase
- Brand mascot merchandise

## Strengths

- Extremely high affinity and cuteness
- Unique 3D visual effects
- Suitable for young and playful brands
- High social share rate

## Costs

- High implementation cost - needs 3D tools
- Large performance overhead
- Unsuitable for serious business contexts

## Pitfalls

The specific ways AI-generated pages in this style go wrong. Check each one before delivering.

1. Missing the inner shadow — clay's puffiness needs the outer drop and inner highlight together
   内阴影丢了——黏土的膨胀感靠外投影与内高光同时存在
2. Radii too small — under ~20px it stops looking hand-molded
   圆角不够大——低于 20px 就不像捏出来的
3. Grown-up palettes — clay lives in high-key candy colors
   配色太成人——粘土拟态天生属于高明度的糖果色

## Seen in the wild

Android 12 Logo · Reddit Snoo · Windows 11 Emoji · Notion AI

## Reference implementation

`assets/demos/claymorphism.html` — a complete single-file page (441 lines, no scripts, no external requests). Read it for layout and composition patterns, or copy it as a starting point.

Live preview: https://design-vibes.v2ai.org/style/claymorphism
