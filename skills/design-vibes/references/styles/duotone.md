# Duotone `duotone`

**Chinese name:** 双色调  
**Difficulty:** 1 (Easy)  
**Tags:** Art · Vintage  
**Fits:** Personal / Blog

Simplifying complex images to stark contrast of two colors, creating silkscreen-like artistic effects. Spotify Wrapped made this style universally known. Bold color choices are a weapon for brand recognition.

## Prompt

Hand this to any AI coding tool, or use it as your own build brief.

**English**

> Duotone style built from two color families, not two flat hex values. Cool family: deep navy (#1A1A2E, #2A2A4A). Warm family: burnt orange (#FF6B35, #FF8F66, #C9481A) with a cream highlight (#FFE1D2). Use a monospace for labels and sans-serif for body. Alternate full-bleed sections between the two families, and where there is imagery, tint it through a duotone filter (navy shadows, orange highlights) rather than using full color.

**中文**

> 双色调风格，用两个色系构建，而不是字面意义上的“只有两个色值”。冷色系：深藏青（#1A1A2E、#2A2A4A）。暖色系：焦橙（#FF6B35、#FF8F66、#C9481A）配奶橙高光（#FFE1D2）。等宽体做标签，无衬线体做正文。整屏分区块交替使用这两个色系，如果有图片素材，用双色调滤镜处理（暗部藏青、亮部橙色）而不是保留原色。

**Short form** — when you only need one line:

- EN: Duotone, navy-cool vs orange-warm sections, imagery tinted through a duotone filter
- 中文: 双色调，藏青冷调+焦橙暖调交替分区，图片走双色滤镜

## Design tokens

Lifted verbatim from the reference implementation. Use these exact values.

```css
:root {
  --navy: #1A1A2E;
  --navy-dark: #10101F;
  --navy-light: #2A2A4A;
  --orange: #FF6B35;
  --orange-light: #FF8F66;
  --orange-pale: #FFE1D2;
  --orange-dark: #C9481A;
  --sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "PingFang SC", "Microsoft YaHei", sans-serif;
  --mono: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
}
```

## Signature traits

- Only two colors used
- Duotone image treatment
- Strong visual contrast
- CSS filter/blend mode implementation
- Fusion of retro and modern

## Where it works

- Music streaming platforms
- Sports and fitness brands
- Creative agency portfolios
- Event posters and marketing materials
- Social media visual content

## Strengths

- Extremely strong visual impact
- Very high brand recognition
- Low technical implementation barrier
- Suitable for large-scale visual systems

## Costs

- Limited color combination choices
- Causes fatigue with prolonged viewing
- Original image quality affects results

## Pitfalls

The specific ways AI-generated pages in this style go wrong. Check each one before delivering.

1. A third hue sneaks in — the discipline is two hues plus their tints
   第三种颜色混进来——双色调的纪律就是两个色相（加各自深浅）
2. Weak contrast between the two — pick hues far apart on the wheel
   两色对比不足——要选色相环上距离足够远的对撞色
3. Full-color photos — imagery must be duotone-mapped or the spell breaks
   照片保持全彩——图片必须做双色映射，否则立刻出戏

## Seen in the wild

Spotify Wrapped · Adidas Originals · NPR · Twitch branding · Nike ACG

## Reference implementation

`assets/demos/duotone.html` — a complete single-file page (344 lines, no scripts, no external requests). Read it for layout and composition patterns, or copy it as a starting point.

Live preview: https://design-vibes.v2ai.org/style/duotone
