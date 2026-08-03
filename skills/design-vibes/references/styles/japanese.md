# Japanese Minimalism `japanese`

**Chinese name:** 日式极简  
**Rating:** ★★★★☆ 3.8/5  
**Difficulty:** unrated  
**Tags:** Minimal · Classic · Warm  
**Fits:** Personal / Blog

A design philosophy rooted in Zen aesthetics, centered on 'Ma' (間) — the art of space where emptiness is not void but meaningful existence. Natural material textures, asymmetric karesansui balance, seasonal color use — this is Eastern wisdom in digital form.

## Prompt

Hand this to any AI coding tool, or use it as your own build brief.

**English**

> Japanese Minimalism style. Palette: washi-paper cream (#F6F2E6, #EFE9D8) grounded by tan (#C4A77D), ochre (#B08D3F), vermillion red (#A63A2B), and walnut brown (#8B7355). Pair a mincho-like serif for headings with a light sans-serif for body text. Keep borders hairline-thin (1px), corners barely rounded (2px), and use a soft vermillion-tinted shadow instead of a gray one — restraint and warmth over minimal-cold whitespace.

**中文**

> 日式极简风格。配色：和纸米白底（#F6F2E6、#EFE9D8），搭配茶褐（#C4A77D）、赭石（#B08D3F）、朱红（#A63A2B）、胡桃棕（#8B7355）。标题用明朝体风格衬线字，正文用轻盈无衬线体。边框要细如发丝（1px），圆角极小（2px），阴影用带朱红色调的暖阴影而不是灰色阴影——克制中带着温度，而不是冷淡的极简。

**Short form** — when you only need one line:

- EN: Japanese Minimalism, washi cream with tan-vermillion accents, hairline borders and warm-tinted shadow
- 中文: 日式极简，和纸米白+茶褐朱红，细边框朱红暖阴影

## Design tokens

Lifted verbatim from the reference implementation. Use these exact values.

```css
:root {
  --paper: #f6f2e6;
  --paper-deep: #efe9d8;
  --ink: #2f3b38;
  --ink-soft: #6f6a5b;
  --clay: #8b7355;
  --sand: #c4a77d;
  --gold: #b08d3f;
  --seal: #a63a2b;
  --hair: rgba(139,115,85,.35);
  --serif: Georgia,"Palatino Linotype","Songti SC",serif;
  --sans: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"PingFang SC","Microsoft YaHei",sans-serif;
}
```

## Signature traits

- 'Ma' whitespace art - 60%+ empty space
- Natural material textures - washi/wood/stone
- Asymmetric dynamic balance
- Handwritten calligraphy accents
- Seasonal color transitions

## Where it works

- Japanese restaurant websites
- Tea/flower ceremony cultural institutions
- Japanese lifestyle brands
- Traditional Japanese craft stores
- Meditation and wellness apps

## Strengths

- Unique Eastern Zen aesthetics
- Ultimate premium feel and tranquility
- Strong emotional resonance
- Natural fit with sustainability

## Costs

- Cultural understanding has barriers
- Excessive whitespace may seem empty
- Requires high-quality content support

## Pitfalls

The specific ways AI-generated pages in this style go wrong. Check each one before delivering.

1. Whitespace as mere emptiness — Japanese ma is compositional, distributed with asymmetric intent
   把留白当成空白——日式的「间」是构图的一部分，要有意图地不对称分布
2. Western-loud typography — restraint via small sizes and wide tracking carries the mood; shouting headlines break it
   排印西式化——小字号、宽字距的克制才是气质来源，大标题一喊就破功
3. More than three colors — ink, paper, and one touch of vermilion or indigo suffice
   颜色超过三种——墨、纸，加一点朱或蓝就足够

## Seen in the wild

Muji · Kinfolk Magazine · Nakagawa Masashichi Shoten · Shiroiya

## Reference implementation

`assets/demos/japanese.html` — a complete single-file page (354 lines, no scripts, no external requests). Read it for layout and composition patterns, or copy it as a starting point.

Live preview: https://design-vibes.v2ai.org/style/japanese
