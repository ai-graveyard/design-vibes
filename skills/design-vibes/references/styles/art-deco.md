# Art Deco `art-deco`

**Chinese name:** 装饰艺术  
**Rating:** ★★★★☆ 3.5/5  
**Difficulty:** unrated  
**Tags:** Classic · Vintage  
**Fits:** Art / Culture

Golden age aesthetics born in 1920s Paris, a perfect fusion of 'modern' and 'luxury'. Geometric decorative patterns, gold-silver metallic sheen, symmetric monumental compositions. The visual language of the Chrysler Building and Gatsby parties.

## Prompt

Hand this to any AI coding tool, or use it as your own build brief.

**English**

> Art Deco style, glamorous and symmetric. Palette: gold (#D4AF37) and silver (#C0C0C0) metallics against parchment (#EFE6CF) and a near-black charcoal (#101713, #0B0E0C). Use an elegant display serif for headlines. Frame key sections with thin gold hairline borders (1px), build symmetric fan or sunburst geometric motifs, and give headline text a metallic gold gradient fill for that glamorous 1920s sheen.

**中文**

> 装饰艺术风格，华丽而对称。配色：金色（#D4AF37）和银色（#C0C0C0）金属质感，配羊皮纸底色（#EFE6CF）和近黑炭色（#101713、#0B0E0C）。标题用优雅的展示型衬线字体。关键区域用金色细线描边（1px）做画框，构建对称的扇形或放射状几何图案，标题文字用金色渐变填充，呈现 1920 年代那种华丽光泽。

**Short form** — when you only need one line:

- EN: Art Deco, gold-silver on parchment and charcoal, thin gold frames with sunburst motifs
- 中文: 装饰艺术，金银配羊皮纸炭黑，细金边+扇形放射图案

## Design tokens

Lifted verbatim from the reference implementation. Use these exact values.

```css
:root {
  --bg: #0B0E0C;
  --panel: #101713;
  --gold: #D4AF37;
  --gold-dim: #8C7325;
  --gold-soft: rgba(212,175,55,.45);
  --silver: #C0C0C0;
  --cream: #EFE6CF;
  --serif: Georgia,"Palatino Linotype","Songti SC",serif;
}
```

## Signature traits

- Geometric decorative patterns - fans/steps
- Gold + silver metallic textures
- Strictly symmetric monumental compositions
- Fine lines and borders
- Elegant serif typography use

## Where it works

- Luxury jewelry brands
- High-end hotels and resorts
- Boutique wedding planning
- Vintage cocktail bars
- Classical music and theaters

## Strengths

- Ultimate premium and luxury feel
- Timeless classic - 100 years strong
- Strong era feel and storytelling
- Suitable for high-end brand positioning

## Costs

- Can appear 'old-fashioned'
- High detail implementation requirements
- May not appeal to young users
- High material production cost

## Pitfalls

The specific ways AI-generated pages in this style go wrong. Check each one before delivering.

1. Gold as bulk fill — Deco gold lives in fine metallic linework, not large fills
   金色用成土豪金——Deco 的金是细线条的金属光泽，不是大面积填充
2. Asymmetric ornament — symmetry and radiating structure are the skeleton
   图案不对称——对称与放射结构是装饰艺术的骨架
3. Soft rounded sans-serifs — it wants geometric serifs or decorative capitals
   字体用了圆润无衬线——它需要几何感衬线或装饰性大写字母

## Seen in the wild

The Great Gatsby · Chrysler Building · The Savoy London · Tiffany & Co.

## Reference implementation

`assets/demos/art-deco.html` — a complete single-file page (345 lines, no scripts, no external requests). Read it for layout and composition patterns, or copy it as a starting point.

Live preview: https://design-vibes.v2ai.org/style/art-deco
