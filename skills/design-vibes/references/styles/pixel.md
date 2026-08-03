# Pixel Art `pixel`

**Chinese name:** 像素风  
**Rating:** ★★★☆☆ 3.4/5  
**Difficulty:** 2 (Medium)  
**Tags:** Vintage · Playful · Distinctive  
**Fits:** Gaming / Entertainment

The limited palettes and mosaic-block aesthetic of 8-bit consoles. Every graphic is built from visible pixel cells, animations jump frame-by-frame instead of easing, and the interface feels like an old console boot screen. Roughness is the charm; nostalgia is the language.

## Prompt

Hand this to any AI coding tool, or use it as your own build brief.

**English**

> Pixel art 8-bit game aesthetic. Limited palette: midnight blue base (#1A1C2C) with tomato red (#B13E53), orange (#EF7D57), sun yellow (#FFCD75), neon green (#A7F070), sky blue (#41A6F6). Zero radius, zero blur, zero easing: build pixel borders with stacked box-shadow stair-step corners; give buttons 4px hard offset shadows that translate on press; draw tiny icons (hearts, stars, coins) cell by cell with multi box-shadow on single divs; animate everything with steps() frame jumps. Headlines in bold uppercase monospace with 4px hard text-shadows, plus HUD elements (SCORE counter, ♥♥♥ lives, blinking PRESS START).

**中文**

> 像素风 8-bit 游戏美学。限定色盘：深夜蓝底（#1A1C2C）配番茄红（#B13E53）、橙（#EF7D57）、日光黄（#FFCD75）、荧光绿（#A7F070）、天蓝（#41A6F6）。零圆角零模糊零平滑：像素边框用多层 box-shadow 做阶梯锯齿角；按钮用 4px 硬位移阴影、按下时 translate 位移；小图标（心、星、金币）用单个 div 的多重 box-shadow 逐格画出；动画一律 steps() 跳帧。标题用等宽粗体全大写+4px 硬 text-shadow，配 HUD 元素（SCORE 计数、♥♥♥ 生命、闪烁的 PRESS START）。

**Short form** — when you only need one line:

- EN: Pixel art, limited palette with box-shadow sprites, hard-shadow buttons and steps() animations
- 中文: 像素风，限定色盘+box-shadow 像素画，硬阴影按钮+steps() 跳帧动画

## Design tokens

Lifted verbatim from the reference implementation. Use these exact values.

```css
:root {
  --night: #1A1C2C;
}
```

## Signature traits

- Limited palettes - NES/PICO-8 style 8-16 colors
- Box-shadow pixel art - icons drawn cell by cell
- Zero radius, zero blur - hard edges everywhere
- Frame-stepped animations - steps()
- HUD elements - SCORE/hearts/PRESS START

## Where it works

- Indie game studios
- Game launch event pages
- Retro-themed e-commerce
- Digital collectible platforms
- Playful developer sites

## Strengths

- Maximum recognizability
- Strong gamer resonance
- Tiny graphic assets
- Forgiving - roughness is the style

## Costs

- Good pixel art is laborious
- Limited body-text readability
- Unusable in serious contexts

## Pitfalls

The specific ways AI-generated pages in this style go wrong. Check each one before delivering.

1. Smooth easing curves — all motion must jump via steps()
   用了平滑缓动曲线——一切运动必须 steps() 跳帧
2. Rounded corners or blur creeping in — the pixel world has no anti-aliasing
   圆角和模糊混进来——像素世界里没有抗锯齿
3. Palette sprawl — beyond 16 colors the 8-bit flavor is gone
   色盘失控——超过 16 色就没有 8-bit 的味道了

## Seen in the wild

Celeste · Stardew Valley · itch.io · Poolsuite.net

## Reference implementation

`assets/demos/pixel.html` — a complete single-file page (400 lines, no scripts, no external requests). Read it for layout and composition patterns, or copy it as a starting point.

Live preview: https://design-vibes.v2ai.org/style/pixel
