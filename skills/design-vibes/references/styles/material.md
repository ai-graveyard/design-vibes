# Material Design `material`

**Type:** Design language

**Study version:** 2026.09

**Difficulty:** 2 (Medium)

**Tags:** Modern · Classic

**Fits:** Enterprise / B2B

Organize UI around Material 3 color roles, type scale, shape and state. This study uses a purple primary, tonal surfaces and Roboto; its 56px FAB has 16px corners with clear hover and pressed feedback.

## Study boundaries and references

A Material 3 web study. Task interactions are local to this page, without services or saved data.

- [Material 3 · Theme, type & shape](https://developer.android.com/codelabs/m3-design-theming?hl=en)
- [Material 3 · Floating action button](https://developer.android.com/develop/ui/compose/components/fab)

## Prompt

Hand this to any AI coding tool, or use it as your own build brief.

**English**

> Material Design. Organize UI around Material 3 color roles, type scale, shape and state. This study uses a purple primary, tonal surfaces and Roboto; its 56px FAB has 16px corners with clear hover and pressed feedback. Google brand colors are not a required Material palette, and circular FABs are not a rule for every version. Adapt palette and dimensions to the content; use the current demo reference brief for an exact reproduction.

**中文**

> Material Design。按 Material 3 的色彩角色、字号层级、形状与状态组织界面。本例采用紫色主色、调性表面与 Roboto；56px FAB 使用 16px 圆角，悬浮与按下状态有明确反馈。不要把 Google 品牌四色当成 Material 的必选配色，或把圆形 FAB 当作所有版本的规范。配色与尺寸可根据内容调整；精确复现请使用当前演示的参考包。

**Short form** — when you only need one line:

- EN: Material Design: Organize UI around Material 3 color roles, type scale, shape and state.
- 中文: Material Design：按 Material 3 的色彩角色、字号层级、形状与状态组织界面。

## Design tokens

Parsed from this reference implementation. Preserve these values when matching this demo; adapt them deliberately when applying the broader style.

```css
:root {
  --primary: #6750A4;
  --on-primary: #FFFFFF;
  --primary-container: #EADDFF;
  --on-primary-container: #21005D;
  --secondary-container: #E8DEF8;
  --on-secondary-container: #1D192B;
  --tertiary-container: #FFD8E4;
  --on-tertiary-container: #31111D;
  --surface: #FEF7FF;
  --surface-dim: #F8F1FA;
  --surface-c-low: #F7F2FA;
  --surface-c: #F3EDF7;
  --surface-c-high: #ECE6F0;
  --on-surface: #1C1B1F;
  --on-surface-var: #49454F;
  --outline: #79747E;
  --outline-var: #CAC4D0;
  --blue: #4285F4;
  --green: #34A853;
  --yellow: #FBBC05;
  --red: #EA4335;
  --grey: #5F6368;
  --e1: 0 1px 2px rgba(0,0,0,.3), 0 1px 3px 1px rgba(0,0,0,.15);
  --e2: 0 1px 2px rgba(0,0,0,.3), 0 2px 6px 2px rgba(0,0,0,.15);
  --e3: 0 1px 3px rgba(0,0,0,.3), 0 4px 8px 3px rgba(0,0,0,.15);
  --e4: 0 2px 3px rgba(0,0,0,.3), 0 6px 10px 4px rgba(0,0,0,.15);
  --sans: "Roboto",-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "PingFang SC", "Microsoft YaHei", sans-serif;
}
```

## Signature traits

- Composition - Organize UI around Material 3 color roles, type scale, shape and state.
- Signature - This study uses a purple primary, tonal surfaces and Roboto; its 56px FAB has 16px corners with clear hover and pressed feedback.

## Where it works

- Android native app development
- Enterprise B2B products
- Cross-platform web applications
- Google ecosystem products
- Education and learning platforms

## Strengths

- Extremely complete design system - ready to use
- Thorough documentation - rich learning resources
- High user familiarity - reduced learning cost
- Mature component library ecosystem

## Costs

- Lacks brand personality - can be generic
- Too 'Google-like'
- Motion transitions may affect performance

## Pitfalls

The specific ways AI-generated pages in this style go wrong. Check each one before delivering.

1. Google brand colors are not a required Material palette, and circular FABs are not a rule for every version.
   不要把 Google 品牌四色当成 Material 的必选配色，或把圆形 FAB 当作所有版本的规范。

## Seen in the wild

All Google products · Android system UI · Flutter apps · YouTube

## Reference implementation

`assets/demos/material.html` — a complete single-file page (626 lines, no scripts, no external requests). Read it for layout and composition patterns, or copy it as a starting point.

Live preview: https://design-vibes.v2ai.org/style/material
