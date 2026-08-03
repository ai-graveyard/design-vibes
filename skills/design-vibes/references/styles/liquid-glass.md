# Liquid Glass `liquid-glass`

**Chinese name:** 液态玻璃  
**Rating:** ★★★★☆ 3.8/5  
**Difficulty:** 3 (Hard)  
**Tags:** Modern · Hot · Avant-garde  
**Fits:** SaaS / Tech

Apple's next-generation design language unveiled at WWDC 2025 — glassmorphism evolved. UI elements behave like real liquid glass: refraction, specular highlights, and dynamic blur flow with content, while hierarchy comes from material thickness rather than shadows. On a restrained dark canvas, light itself is the only ornament.

## Prompt

Hand this to any AI coding tool, or use it as your own build brief.

**English**

> Liquid Glass style (Apple's 2025 design language). A deep navy-black gradient canvas (#05070F to #101830) with large glowing orbs — ice blue (#5AC8FA), amber (#FF9F0A), purple (#BF5AF2) — drifting slowly behind. Glass panels use backdrop-filter: blur(32px) saturate(180%) with an 8% white fill, a 1px white inner top highlight (inset 0 1px 0 rgba(255,255,255,.35)) for specular reflection, and a thin translucent border. Every radius is generous: 28px+ panels and full 999px capsule buttons. System sans-serif, mostly white text. Express hierarchy through glass thickness (opacity differences), never drop shadows.

**中文**

> 液态玻璃风格（Apple 2025 设计语言）。深邃蓝黑渐变画布（#05070F 到 #101830），背后漂浮冰蓝（#5AC8FA）、琥珀（#FF9F0A）、紫（#BF5AF2）的大光晕缓慢漂移。玻璃面板用 backdrop-filter: blur(32px) saturate(180%)，白色 8% 透明度填充，顶部一条 1px 白色内高光（inset 0 1px 0 rgba(255,255,255,.35)）模拟镜面反射，外圈细半透明描边。一切圆角都大而饱满：面板 28px 起步，按钮一律 999px 胶囊形。系统无衬线字体，白字为主。层级靠玻璃厚度（透明度差异）而非投影表达。

**Short form** — when you only need one line:

- EN: Liquid Glass, deep navy with glowing orbs, heavy-blur glass with specular top edge, capsule radii
- 中文: 液态玻璃，深蓝黑底+彩色光晕，重模糊玻璃+顶边镜面高光，全胶囊圆角

## Design tokens

Lifted verbatim from the reference implementation. Use these exact values.

```css
:root {
  --bg: #05070f;
  --bg1: #0a1022;
  --fg: #ffffff;
  --muted: #ffffffa6;
  --faint: #ffffff6b;
  --accent: #5ac8fa;
  --accent-deep: #2f7cf6;
  --amber: #ff9f0a;
  --violet: #bf5af2;
  --glass: #ffffff17;
  --glass-soft: #ffffff0d;
  --stroke: #ffffff2e;
  --stroke-soft: #ffffff1a;
  --edge: #ffffff59;
  --shadow: 0 24px 70px #0206148c;
  --sans: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  --mono: ui-monospace,"SF Mono",Menlo,monospace;
}
```

## Signature traits

- Specular edge highlight - 1px white inner top glow
- Deep backdrop blur - 28-40px with saturation boost
- Full capsule radii - 28px+ panels, 999px buttons
- Glowing orb backdrops - colored light behind glass
- Material-depth layering - opacity over shadows

## Where it works

- Operating systems and system-level apps
- Premium tech product launch pages
- Music/video player interfaces
- Smart home control panels
- AR/VR spatial interfaces

## Strengths

- Aligned with Apple's latest design direction
- Translucent, premium, futuristic
- Clear hierarchy without heavy shadows
- Deeply immersive in dark contexts

## Costs

- High browser requirements - backdrop-filter
- Readability risk in low contrast
- Performance cost of layered blur

## Pitfalls

The specific ways AI-generated pages in this style go wrong. Check each one before delivering.

1. Recycling plain glassmorphism — Liquid Glass hinges on the specular top edge and thickness hierarchy, not just blur
   拿玻璃拟态旧配方交差——液态玻璃的关键是顶边镜面高光与「厚度」层级，不只是模糊
2. Static orbs — the light must drift slowly; frozen glow looks pasted on
   背景光晕静止不动——光要缓慢漂移，静止的光晕像贴图
3. Forcing it onto light backgrounds — it only convinces on a dark canvas
   硬套在浅色底上——它只在深色画布上成立

## Seen in the wild

iOS 26 · macOS Tahoe · visionOS · Apple.com

## Reference implementation

`assets/demos/liquid-glass.html` — a complete single-file page (385 lines, no scripts, no external requests). Read it for layout and composition patterns, or copy it as a starting point.

Live preview: https://design-vibes.v2ai.org/style/liquid-glass
