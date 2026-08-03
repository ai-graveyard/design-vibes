# Cyberpunk `cyberpunk`

**Chinese name:** 赛博朋克  
**Rating:** ★★★☆☆ 3.3/5  
**Difficulty:** unrated  
**Tags:** Avant-garde · Distinctive  
**Fits:** Gaming / Entertainment

'High tech, low life' digital aesthetics — neon lights pierce through night rain, glitch art flickers on abandoned screens. Neon magenta, cyan, yellow combination against deep black, constructing a dystopian future world.

## Prompt

Hand this to any AI coding tool, or use it as your own build brief.

**English**

> Cyberpunk style, neon-soaked and glitchy. Background is black (#000), lit by neon cyan (around #00CCCC), magenta (#FF00FF), hot pink (#FF1493), and yellow (#FFFF00) glow accents. Use a monospace font for HUD-style status labels and a sans-serif for headlines. Give panels a backdrop-filter blur(6px) glass effect with a thin 1px neon-cyan glowing border, and layer glitch-style overlapping or misaligned text on key headlines for a broken-signal feel.

**中文**

> 赛博朋克风格，霓虹感和故障感并存。背景纯黑（#000），用青色霓虹（约 #00CCCC）、品红（#FF00FF）、亮粉（#FF1493）、黄（#FFFF00）做发光点缀。等宽体做 HUD 风格状态标签，无衬线体做标题。面板做毛玻璃效果（backdrop-filter blur(6px)），配细青色霓虹描边（1px）加发光效果，关键标题用故障风格的重叠/错位文字制造信号损坏感。

**Short form** — when you only need one line:

- EN: Cyberpunk, black background with neon cyan-magenta glow, glass panels with glitch text
- 中文: 赛博朋克，纯黑底+青品红霓虹，毛玻璃面板+故障错位文字

## Design tokens

Lifted verbatim from the reference implementation. Use these exact values.

```css
:root {
  --bg: #050508;
  --bg-panel: #0a0a12;
  --bg-card: #0c0c16;
  --cyan: #00ffff;
  --magenta: #ff00ff;
  --yellow: #ffff00;
  --pink: #ff1493;
  --fg: #c9d6e2;
  --fg-dim: #5f6e80;
  --line: rgba(0,255,255,.22);
  --sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "PingFang SC", "Microsoft YaHei", sans-serif;
  --mono: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
}
```

## Signature traits

- Neon glow effects - text-shadow/box-shadow
- Deep black #0a0a0a backgrounds
- Glitch art effects
- Sci-fi sans-serif typography
- Scanlines and CRT textures

## Where it works

- Game websites and esports brands
- Sci-fi movie promotional sites
- Electronic music and DJs
- Nightclubs and entertainment venues
- VR/AR technology showcases

## Strengths

- Extremely immersive - perfect atmosphere
- High resonance with young users
- Strong topic appeal and shareability
- First-class visual impact

## Costs

- Readability challenges - glowing dark text
- Not for serious business contexts
- Easy to over-design
- Higher performance consumption

## Pitfalls

The specific ways AI-generated pages in this style go wrong. Check each one before delivering.

1. Every neon at max — glow needs hierarchy; all-bright reads as flat gray
   霓虹全都开到最亮——霓虹要有主次层级，全亮等于全灰
2. Constant glitching — glitch is punctuation, not prose
   故障效果太频繁——glitch 是标点符号不是正文
3. Text straight on noise — even cyberpunk needs readable backing
   文字直接压在噪点上——赛博朋克也需要可读性的底垫

## Seen in the wild

Cyberpunk 2077 · Blade Runner 2049 · Cyberpunk: Edgerunners · AKIRA

## Reference implementation

`assets/demos/cyberpunk.html` — a complete single-file page (353 lines, no scripts, no external requests). Read it for layout and composition patterns, or copy it as a starting point.

Live preview: https://design-vibes.v2ai.org/style/cyberpunk
