# Glassmorphism `glassmorphism`

**Chinese name:** 玻璃拟态

**Type:** Material treatment

**Study version:** 2026.09

**Difficulty:** 3 (Hard)

**Tags:** Modern · Trendy · Hot

**Fits:** SaaS / Tech

Place a small number of translucent panels over a background with visible color and form. Backdrop blur, transparent fills, fine light borders and moderate shadows express frosted glass; the background must remain perceptible.

## Study boundaries and references

An original web interpretation. Palette, assets and dimensions describe this example, not a universal definition of the style.

- [Microsoft Fluent · Acrylic material](https://learn.microsoft.com/en-us/windows/apps/design/style/acrylic)

## Prompt

Hand this to any AI coding tool, or use it as your own build brief.

**English**

> Glassmorphism. Place a small number of translucent panels over a background with visible color and form. Backdrop blur, transparent fills, fine light borders and moderate shadows express frosted glass; the background must remain perceptible. Avoid opaque cards and indiscriminate blur stacks; prioritize text contrast. Adapt palette and dimensions to the content; use the current demo reference brief for an exact reproduction.

**中文**

> 玻璃拟态。把少量半透明面板放在具有颜色与轮廓的背景之前。背景模糊、透明填充、细亮边与适量阴影共同表达磨砂玻璃；背景必须能被感知。避免不透明卡片或多层无差别模糊；先保证文字对比。配色与尺寸可根据内容调整；精确复现请使用当前演示的参考包。

**Short form** — when you only need one line:

- EN: Glassmorphism: Place a small number of translucent panels over a background with visible color and form.
- 中文: 玻璃拟态：把少量半透明面板放在具有颜色与轮廓的背景之前。

## Design tokens

Parsed from this reference implementation. Preserve these values when matching this demo; adapt them deliberately when applying the broader style.

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
  --sans: "Inter",-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "PingFang SC", "Microsoft YaHei", sans-serif;
}
```

## Signature traits

- Composition - Place a small number of translucent panels over a background with visible color and form.
- Signature - Backdrop blur, transparent fills, fine light borders and moderate shadows express frosted glass; the background must remain perceptible.

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

1. Avoid opaque cards and indiscriminate blur stacks; prioritize text contrast.
   避免不透明卡片或多层无差别模糊；先保证文字对比。

## Seen in the wild

macOS Big Sur · iOS Control Center · Windows 11 · Linear.app · Figma

## Reference implementation

`assets/demos/glassmorphism.html` — a complete single-file page (536 lines, no scripts, no external requests). Read it for layout and composition patterns, or copy it as a starting point.

Live preview: https://design-vibes.v2ai.org/style/glassmorphism
