# Neumorphism / Soft UI `neumorphism`

**Chinese name:** 新拟态

**Type:** Material treatment

**Study version:** 2026.09

**Difficulty:** 2 (Medium)

**Tags:** Modern · Minimal

**Fits:** Creative / Design

Organize a small number of controls through raised and inset forms on one base material. Paired light and dark shadows share a lighting direction; labels and selection need explicit clarity.

## Study boundaries and references

An original web interpretation. Palette, assets and dimensions describe this example, not a universal definition of the style.

The composition below is an authored study; historical inspiration names are not certified reproductions.

## Prompt

Hand this to any AI coding tool, or use it as your own build brief.

**English**

> Neumorphism / Soft UI. Organize a small number of controls through raised and inset forms on one base material. Paired light and dark shadows share a lighting direction; labels and selection need explicit clarity. Do not rely solely on low-contrast shadows for state; retain keyboard focus and usable touch targets. Adapt palette and dimensions to the content; use the current demo reference brief for an exact reproduction.

**中文**

> 新拟态。用同一基底上的凸起与凹陷组织少量控件。成对明暗阴影共享光照方向；选中状态与标签需要额外清楚。不要仅靠低对比阴影区分状态，保持键盘焦点和触控可用。配色与尺寸可根据内容调整；精确复现请使用当前演示的参考包。

**Short form** — when you only need one line:

- EN: Neumorphism / Soft UI: Organize a small number of controls through raised and inset forms on one base material.
- 中文: 新拟态：用同一基底上的凸起与凹陷组织少量控件。

## Design tokens

Parsed from this reference implementation. Preserve these values when matching this demo; adapt them deliberately when applying the broader style.

```css
:root {
  --bg: #E0E5EC;
  --bg-hi: #EAEFF6;
  --bg-lo: #D6DCE5;
  --light: #FFFFFF;
  --dark: #A3B1C6;
  --dark-deep: #93A1B8;
  --ink: #3E4A5F;
  --muted: #7A8CA5;
  --soft: #C8D0D8;
  --accent: #8296C4;
  --accent-deep: #6F84B5;
  --r-lg: 28px;
  --r-md: 18px;
  --raise: 9px 9px 18px var(--dark), -9px -9px 18px var(--light);
  --raise-sm: 6px 6px 12px var(--dark), -6px -6px 12px var(--light);
  --raise-lg: 14px 14px 30px var(--dark), -14px -14px 30px var(--light);
  --sink: inset 5px 5px 10px var(--dark), inset -5px -5px 10px var(--light);
  --sink-sm: inset 3px 3px 7px var(--dark), inset -3px -3px 7px var(--light);
  --sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "PingFang SC", "Microsoft YaHei", sans-serif;
}
```

## Signature traits

- Composition - Organize a small number of controls through raised and inset forms on one base material.
- Signature - Paired light and dark shadows share a lighting direction; labels and selection need explicit clarity.

## Where it works

- Concept design and Dribbble showcases
- Meditation and relaxation apps
- Smart home control panels
- Minimal music players
- Personal projects and experiments

## Strengths

- Unique tactile and physical feel
- Visually soft and comfortable
- Relatively simple CSS implementation
- Acceptable in dark mode

## Costs

- Severe accessibility issues - WCAG non-compliant
- Buttons/inputs hard to identify
- Gradually phased out by industry
- Rare in production environments

## Pitfalls

The specific ways AI-generated pages in this style go wrong. Check each one before delivering.

1. Do not rely solely on low-contrast shadows for state; retain keyboard focus and usable touch targets.
   不要仅靠低对比阴影区分状态，保持键盘焦点和触控可用。

## Seen in the wild

Dribbble concepts · Smart home UI · Tesla car UI references

## Reference implementation

`assets/demos/neumorphism.html` — a complete single-file page (448 lines, no scripts, no external requests). Read it for layout and composition patterns, or copy it as a starting point.

Live preview: https://design-vibes.v2ai.org/style/neumorphism
