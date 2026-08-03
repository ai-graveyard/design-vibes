# Vaporwave `vaporwave`

**Chinese name:** 蒸汽波  
**Rating:** ★★★☆☆ 3/5  
**Difficulty:** unrated  
**Tags:** Art · Vintage  
**Fits:** Gaming / Entertainment

A subculture aesthetic born from 2010s internet, a satirical nostalgia for 80s/90s consumerism. Pink-purple gradients, classical sculptures, Japanese katakana, Windows 95 interface elements mixed into an eerie dreamlike feeling.

## Prompt

Hand this to any AI coding tool, or use it as your own build brief.

**English**

> Vaporwave style, 80s/90s retro-futurist nostalgia. Palette: deep indigo (#12032B) fading into purple (#7E5FAE, #8A6BB8) on black, with crisp white 1-2px outlines for contrast. Use a monospace for retro computer-style labels and a sans-serif for headlines. Layer backdrop-filter blur(8px) glass panels over a gradient sky, and include a white-outlined grid or sun-silhouette motif to nail the classic vaporwave horizon look.

**中文**

> 蒸汽波风格，80/90 年代复古未来主义的怀旧感。配色：深靛紫（#12032B）过渡到紫色（#7E5FAE、#8A6BB8），底色黑，用白色细描边（1-2px）做清晰对比。等宽体做复古电脑感标签，无衬线体做标题。渐变天空之上叠加毛玻璃面板（backdrop-filter blur(8px)），加入白色描边的网格线或落日剪影，还原经典蒸汽波地平线画面。

**Short form** — when you only need one line:

- EN: Vaporwave, indigo-purple gradient with white outlines, glass panels with grid/sun silhouette
- 中文: 蒸汽波，靛紫渐变+白色描边，毛玻璃面板+网格落日剪影

## Design tokens

Lifted verbatim from the reference implementation. Use these exact values.

```css
:root {
  --pink: #FF69B4;
  --cyan: #00CED1;
  --purple: #9400D3;
  --gold: #FFD700;
  --blue: #1E90FF;
  --deep: #17022e;
  --deep-2: #2a0a4e;
  --win-bg: #ece6f7;
  --win-ink: #2a1246;
  --sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "PingFang SC", "Microsoft YaHei", sans-serif;
  --mono: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
}
```

## Signature traits

- Pink-purple-cyan gradient palette
- Classical marble sculpture collages
- Japanese katakana/Chinese decorations
- Checkerboard and 3D grid floors
- Pixelation and lo-fi processing

## Where it works

- Retro electronic music projects
- Streetwear limited editions
- Internet art projects
- Nostalgia-themed events
- NFTs and digital collectibles

## Strengths

- Unique subculture identity
- Strong nostalgic resonance
- Strong community identification
- Rich visual elements for mixing

## Costs

- Extremely niche - limited audience
- Easily appears dated
- Few commercial applications
- Copyright material risks

## Pitfalls

The specific ways AI-generated pages in this style go wrong. Check each one before delivering.

1. Gradient without iconography — vaporwave narrates through statues, palms, grid horizons
   只有粉紫渐变没有符号——蒸汽波靠雕像、棕榈、网格地平线这些符号叙事
2. Too-modern typefaces — it wants italic serifs or wide-tracked retro faces (plus katakana accents)
   字体太现代——需要衬线斜体或全角宽字距的复古味（还有日文假名点缀）
3. Full saturation — vaporwave is a faded dream; keep a hazy wash over it
   饱和度拉满——蒸汽波是褪色的梦，要带一层雾感

## Seen in the wild

Macintosh Plus - Floral Shoppe · Saint Pepsi · Arizona Iced Tea x Adidas

## Reference implementation

`assets/demos/vaporwave.html` — a complete single-file page (352 lines, no scripts, no external requests). Read it for layout and composition patterns, or copy it as a starting point.

Live preview: https://design-vibes.v2ai.org/style/vaporwave
