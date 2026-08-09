# Neumorphism / Soft UI `neumorphism`

**Chinese name:** 新拟态  
**Difficulty:** 2 (Medium)  
**Tags:** Modern · Minimal  
**Fits:** Creative / Design

A briefly viral 2020 design trend, simulating real-world embossed textures through dual soft shadows (one light, one dark). Soft monochrome palettes create unique tactile experiences, but severe accessibility issues caused its rapid fade from mainstream.

## Prompt

Hand this to any AI coding tool, or use it as your own build brief.

**English**

> Neumorphism style — everything carved from one material. Palette stays almost monochrome: a soft blue-gray base (#E0E5EC) with matching light and dark shadow tones (#8296C4, #7A8CA5). Use a plain sans-serif. The defining technique: pair a light shadow (top-left, near-white) with a dark shadow (bottom-right, around #8296C4) on the same background color to fake embossed or pressed extrusion — never use a border. Corners stay large and soft (13-36px, up to a full 999px pill).

**中文**

> 新拟态风格——所有元素像从同一块材质上雕出来的。配色几乎单色：柔和蓝灰底色（#E0E5EC），配同色系的亮阴影和暗阴影（#8296C4、#7A8CA5）。字体用普通无衬线体。核心技法：在同一底色上同时叠加左上方亮阴影（近白）和右下方暗阴影（#8296C4 附近），做出浮雕或凹陷的挤压感——不要用描边。圆角要大而柔和（13-36px，甚至到 999px 的完全胶囊形）。

**Short form** — when you only need one line:

- EN: Neumorphism, monochrome blue-gray with dual soft shadows, large-radius embossed look
- 中文: 新拟态，单色蓝灰+双向柔和阴影，大圆角浮雕感

## Design tokens

Lifted verbatim from the reference implementation. Use these exact values.

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

- Dual soft shadows - highlight + drop
- Monochrome/low-saturation color schemes
- 8-16px blur radius rounded elements
- Pressed/inset interaction states
- Extremely low visual contrast

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

1. Elements a different color than the background — everything must be carved from one material
   元素和背景不同色——新拟态的一切必须从同一块底色里长出来
2. Adding borders — the extrusion illusion lives in the dual shadows; a border breaks the spell
   加了描边——挤压感全靠双向阴影，一条 border 就穿帮
3. Tiny low-contrast text — in an inherently soft style, body text needs extra size and darkness
   弱对比还堆小字——本就低对比的风格，正文要更大更深才能读

## Seen in the wild

Dribbble concepts · Smart home UI · Tesla car UI references

## Reference implementation

`assets/demos/neumorphism.html` — a complete single-file page (448 lines, no scripts, no external requests). Read it for layout and composition patterns, or copy it as a starting point.

Live preview: https://design-vibes.v2ai.org/style/neumorphism
