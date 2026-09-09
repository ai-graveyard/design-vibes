# Liquid Glass `liquid-glass`

**Chinese name:** 液态玻璃

**Type:** Material treatment

**Study version:** 2026.09

**Difficulty:** 3 (Hard)

**Tags:** Modern · Hot · Avant-garde

**Fits:** SaaS / Tech

Place floating navigation and controls above a clear content layer; avoid turning all content into glass. Focus on lensing, edge highlights, adaptive shadows and legibility over changing content; both light and dark contexts are valid.

## Study boundaries and references

A web material study of content/control separation, edge highlights and light/dark switching. CSS is an approximation of native real-time refraction, material merging and automatic legibility.

- [Apple · Meet Liquid Glass](https://developer.apple.com/videos/play/wwdc2025/219/)

## Prompt

Hand this to any AI coding tool, or use it as your own build brief.

**English**

> Liquid Glass. Place floating navigation and controls above a clear content layer; avoid turning all content into glass. Focus on lensing, edge highlights, adaptive shadows and legibility over changing content; both light and dark contexts are valid. Do not equate it with more blur or treat dark glowing orbs and shadow removal as official requirements. Adapt palette and dimensions to the content; use the current demo reference brief for an exact reproduction.

**中文**

> 液态玻璃。将浮动导航与控件放在清晰的内容层之上，避免整页内容都变成玻璃。关注透镜感、边缘高光、动态阴影和背景变化后的可读性；浅色与深色环境均可使用。不要等同于增加 blur，也不要把深色光晕和禁用阴影当作官方规则。配色与尺寸可根据内容调整；精确复现请使用当前演示的参考包。

**Short form** — when you only need one line:

- EN: Liquid Glass: Place floating navigation and controls above a clear content layer; avoid turning all content into glass.
- 中文: 液态玻璃：将浮动导航与控件放在清晰的内容层之上，避免整页内容都变成玻璃。

## Design tokens

Parsed from this reference implementation. Preserve these values when matching this demo; adapt them deliberately when applying the broader style.

```css
:root {
  --bg: #f7f8fa;
  --ink: #19202b;
  --muted: #647084;
  --line: #dce1e8;
  --accent: #126be4;
  --glass: rgba(255,255,255,.52);
  --edge: rgba(255,255,255,.8);
  --shadow: 0 8px 28px rgba(10,22,41,.16);
  --sans: "Inter",-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif;
  --radius: 28px;
  --blur: 12px;
}
```

## Signature traits

- Composition - Place floating navigation and controls above a clear content layer; avoid turning all content into glass.
- Signature - Focus on lensing, edge highlights, adaptive shadows and legibility over changing content; both light and dark contexts are valid.

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

1. Do not equate it with more blur or treat dark glowing orbs and shadow removal as official requirements.
   不要等同于增加 blur，也不要把深色光晕和禁用阴影当作官方规则。

## Seen in the wild

iOS 26 · macOS Tahoe · visionOS · Apple.com

## Reference implementation

`assets/demos/liquid-glass.html` — a complete single-file page (158 lines, no scripts, no external requests). Read it for layout and composition patterns, or copy it as a starting point.

Live preview: https://design-vibes.v2ai.org/style/liquid-glass
