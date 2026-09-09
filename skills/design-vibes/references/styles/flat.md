# Flat Design `flat`

**Chinese name:** 扁平化

**Type:** Design language

**Study version:** 2026.09

**Difficulty:** 1 (Easy)

**Tags:** Minimal · Modern · Classic

**Fits:** Enterprise / B2B

Organize tasks with solid color regions, clear typography and simple icons. Solid fills, clear boundaries and consistent icon strokes; hierarchy comes from contrast and position.

## Study boundaries and references

An original web interpretation. Palette, assets and dimensions describe this example, not a universal definition of the style.

The composition below is an authored study; historical inspiration names are not certified reproductions.

## Prompt

Hand this to any AI coding tool, or use it as your own build brief.

**English**

> Flat Design. Organize tasks with solid color regions, clear typography and simple icons. Solid fills, clear boundaries and consistent icon strokes; hierarchy comes from contrast and position. Avoid bevels, material reflections and decorative gradients; preserve interaction states. Adapt palette and dimensions to the content; use the current demo reference brief for an exact reproduction.

**中文**

> 扁平化。用纯色分区、明确字号和简单图标组织任务。平面色块、清晰边界与一致的图标笔画，靠对比和位置形成层级。避免立体斜面、材质反光和装饰性渐变；保留操作状态。配色与尺寸可根据内容调整；精确复现请使用当前演示的参考包。

**Short form** — when you only need one line:

- EN: Flat Design: Organize tasks with solid color regions, clear typography and simple icons.
- 中文: 扁平化：用纯色分区、明确字号和简单图标组织任务。

## Design tokens

Parsed from this reference implementation. Preserve these values when matching this demo; adapt them deliberately when applying the broader style.

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

- Composition - Organize tasks with solid color regions, clear typography and simple icons.
- Signature - Solid fills, clear boundaries and consistent icon strokes; hierarchy comes from contrast and position.

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

1. Avoid bevels, material reflections and decorative gradients; preserve interaction states.
   避免立体斜面、材质反光和装饰性渐变；保留操作状态。

## Seen in the wild

Windows 8/10 UI · Early iOS 7-12 · Google Material Design · Spotify

## Reference implementation

`assets/demos/flat.html` — a complete single-file page (372 lines, no scripts, no external requests). Read it for layout and composition patterns, or copy it as a starting point.

Live preview: https://design-vibes.v2ai.org/style/flat
