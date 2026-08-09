# Flat Design `flat`

**Chinese name:** 扁平化  
**Difficulty:** 1 (Easy)  
**Tags:** Minimal · Modern · Classic  
**Fits:** Enterprise / B2B

A design revolution pioneered by Microsoft Metro UI in 2012 and popularized by iOS 7. Farewell to skeuomorphic shadows and textures, embracing solid colors, simple icons, and 2D representation. A milestone of digital interfaces returning to essence, still the most widely used design language.

## Prompt

Hand this to any AI coding tool, or use it as your own build brief.

**English**

> Flat Design style — solid color, zero depth. Palette: bright orange (#FF9800), soft lavender (#F3E5F5), and cream (#FFF3E0) blocks on a white base. Use a clean sans-serif. Every shape is a flat solid fill — no shadows, no gradients, no bevels — with a consistent small radius (4-16px) and simple two-tone line icons.

**中文**

> 扁平化风格——纯色，零深度。配色：明橙（#FF9800）、淡紫（#F3E5F5）、米黄（#FFF3E0）色块，底色白色。字体用简洁无衬线体。所有形状都是纯色平涂——不用阴影、不用渐变、不做立体斜面——统一用小圆角（4-16px），配简单的双色线性图标。

**Short form** — when you only need one line:

- EN: Flat Design, orange-lavender-cream solid blocks, no shadow/gradient, small-radius line icons
- 中文: 扁平化，橙紫米黄纯色块，无阴影渐变，小圆角线性图标

## Design tokens

Lifted verbatim from the reference implementation. Use these exact values.

```css
:root {
  --blue: #2196F3;
  --blue-dark: #1976D2;
  --blue-tint: #E3F2FD;
  --green: #4CAF50;
  --green-dark: #388E3C;
  --orange: #FF9800;
  --orange-dark: #EF6C00;
  --orange-tint: #FFF3E0;
  --purple: #9C27B0;
  --purple-dark: #7B1FA2;
  --purple-tint: #F3E5F5;
  --cyan: #00BCD4;
  --cyan-tint: #E0F7FA;
  --ink: #263238;
  --muted: #607D8B;
  --bg: #FFFFFF;
  --bg-soft: #ECEFF1;
  --line: #CFD8DC;
  --sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "PingFang SC", "Microsoft YaHei", sans-serif;
}
```

## Signature traits

- Zero shadows, gradients, textures
- Solid color blocks with clear boundaries
- Simple geometric icons - line/fill
- 2D flat representation
- Generous whitespace and breathing room

## Where it works

- Mobile app UI design
- Icon libraries and systems
- Infographics and data visualization
- Enterprise internal tool interfaces
- Minimal brand websites

## Strengths

- High dev efficiency - simple CSS
- Excellent loading performance
- Good cross-platform consistency
- Low user learning curve

## Costs

- Lack of depth may seem monotonous
- Interaction affordances not intuitive enough
- Over-popularity leads to lack of personality

## Pitfalls

The specific ways AI-generated pages in this style go wrong. Check each one before delivering.

1. Unrecognizable click targets — with all texture gone, buttons must prove themselves via color and shape
   可点击元素认不出来——去掉一切质感后，按钮必须靠色块与形状自证身份
2. No hierarchy between blocks — flat style still needs visual priority
   色块平得没有层级——扁平不等于所有区块同等重要
3. Mixed icon styles — combining outline and filled icons instantly breaks the system
   图标风格混搭——线性图标和面性图标混用立刻露馅

## Seen in the wild

Windows 8/10 UI · Early iOS 7-12 · Google Material Design · Spotify

## Reference implementation

`assets/demos/flat.html` — a complete single-file page (372 lines, no scripts, no external requests). Read it for layout and composition patterns, or copy it as a starting point.

Live preview: https://design-vibes.v2ai.org/style/flat
