# Glassmorphism `glassmorphism`

**Chinese name:** 玻璃拟态  
**Difficulty:** 3 (Hard)  
**Tags:** Modern · Trendy · Hot  
**Fits:** SaaS / Tech

A design language pioneered by macOS Big Sur, using CSS backdrop-filter for frosted glass effects creating crystalline interface layers. Semi-transparent haziness interweaving with gradient backgrounds — the most tech-forward expression in modern UI design.

## Prompt

Hand this to any AI coding tool, or use it as your own build brief.

**English**

> Glassmorphism style over a dark canvas. Background is deep navy (#101233 to #171A3D) lit by vivid glow accents — pink (#FF6B9D), teal (#4ECDC4), purple (#9B6BFF), indigo (#667EEA). Use a clean sans-serif. The core technique: frosted panels with backdrop-filter blur(18-24px) plus saturate(150%), a thin semi-transparent border, and layered translucency so glowing shapes behind the glass stay visible.

**中文**

> 玻璃拟态风格，深色画布上的通透感。背景是深藏青（#101233 到 #171A3D），被亮粉（#FF6B9D）、青绿（#4ECDC4）、紫（#9B6BFF）、靛蓝（#667EEA）等发光色点亮。字体用简洁无衬线体。核心技法：毛玻璃面板用 backdrop-filter blur(18-24px) 加 saturate(150%)，配细半透明边框，让玻璃后面的发光色块层叠透出来。

**Short form** — when you only need one line:

- EN: Glassmorphism, deep navy with glow accents, frosted blur(18-24px) panels with translucent border
- 中文: 玻璃拟态，深藏青底+荧光色晕，毛玻璃blur+半透明边框

## Design tokens

Lifted verbatim from the reference implementation. Use these exact values.

```css
:root {
  --bg0: #0d0f26;
  --bg1: #171a3d;
  --fg: #f4f5ff;
  --muted: rgba(230,233,255,.68);
  --faint: rgba(230,233,255,.42);
  --pink: #FF6B9D;
  --teal: #4ECDC4;
  --indigo: #667EEA;
  --violet: #9b6bff;
  --glass: rgba(255,255,255,.10);
  --glass-strong: rgba(255,255,255,.16);
  --stroke: rgba(255,255,255,.22);
  --stroke-soft: rgba(255,255,255,.12);
  --shadow: 0 24px 60px rgba(4,7,28,.5);
  --sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "PingFang SC", "Microsoft YaHei", sans-serif;
}
```

## Signature traits

- backdrop-filter: blur(10-40px)
- rgba semi-transparent bg - 10-30% opacity
- 1px subtle borders + inner glow
- Multi-layer stacking depth
- Gradient/mesh gradient backgrounds

## Where it works

- SaaS dashboards and consoles
- Fintech application interfaces
- Operating system UI design
- Tech-forward homepage designs
- Music player interfaces

## Strengths

- Strong modern and tech feel
- Rich and dimensional visual layers
- Excellent dark mode performance
- High user recognition

## Costs

- backdrop-filter performance cost
- Contrast and readability need tuning
- Laggy on low-end devices
- Safari compatibility issues

## Pitfalls

The specific ways AI-generated pages in this style go wrong. Check each one before delivering.

1. Nothing behind the glass — without colorful shapes to blur, frosted panels are just gray filters
   玻璃后面没有东西——没有彩色光斑可透，毛玻璃就只是一层灰色滤镜
2. Blur too weak — under 15px it looks like a smudged screen, not glass
   模糊值太小——blur 低于 15px 看起来像没擦干净的屏幕而不是玻璃
3. Missing the hairline border — the 1px translucent white edge is what sells the pane
   忘了细边框——1px 半透明白边是玻璃边缘的关键暗示

## Seen in the wild

macOS Big Sur · iOS Control Center · Windows 11 · Linear.app · Figma

## Reference implementation

`assets/demos/glassmorphism.html` — a complete single-file page (425 lines, no scripts, no external requests). Read it for layout and composition patterns, or copy it as a starting point.

Live preview: https://design-vibes.v2ai.org/style/glassmorphism
