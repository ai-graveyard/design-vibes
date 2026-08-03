# Scandinavian `scandinavian`

**Chinese name:** 斯堪的纳维亚  
**Rating:** ★★★★☆ 3.9/5  
**Difficulty:** unrated  
**Tags:** Minimal · Warm  
**Fits:** E-commerce / Retail

Digital continuation of Nordic design, centered on 'Hygge' — comfort, warmth, intimacy. Perfect balance of functionality and aesthetics, soft quality of natural light, warm earth-tone palette. Design that makes you want to curl up on the sofa.

## Prompt

Hand this to any AI coding tool, or use it as your own build brief.

**English**

> Scandinavian style with a cozy, natural mood. Palette: muted tan (#8F7350), sage green (#7E8D6F), and warm cream (#F0E6CF, #F0E2C4) — like light through a window onto raw wood. Mix a plain sans-serif with a light serif for warmth. Give corners a soft, slightly irregular radius (roughly 12-16px, feels hand-cut rather than machine-perfect) and let wood-toned textures or accents carry the hygge comfort.

**中文**

> 斯堪的纳维亚风格，温暖自然的氛围。配色：低饱和茶褐（#8F7350）、鼠尾草绿（#7E8D6F）、暖米色（#F0E6CF、#F0E2C4）——像阳光透过窗户洒在原木上。无衬线体搭配轻衬线体，增加一点温度。圆角要柔和且略带手工感（约 12-16px，不追求机械式精确），用木质色调的纹理或点缀传递 Hygge 式的舒适感。

**Short form** — when you only need one line:

- EN: Scandinavian, muted tan-sage-cream palette, soft hand-cut radius with wood-toned accents
- 中文: 斯堪的纳维亚，茶褐鼠尾草绿暖米色，手工感柔角+木质点缀

## Design tokens

Lifted verbatim from the reference implementation. Use these exact values.

```css
:root {
  --cream: #f6f3ed;
  --card: #ffffff;
  --linen: #e8dcc4;
  --wood: #d4c4b7;
  --wood-deep: #b3987d;
  --sage: #8b9a7c;
  --sage-soft: #a9b5a3;
  --ink: #3e3a33;
  --ink-soft: #7d766a;
  --glow: rgba(255,222,160,.55);
  --sans: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"PingFang SC","Microsoft YaHei",sans-serif;
  --serif: Georgia,"Palatino Linotype","Songti SC",serif;
  --r: 28px;
}
```

## Signature traits

- Hygge cozy atmosphere creation
- Soft natural light rendering
- Earth tones + muted green palette
- Natural material textures - linen/wool/wood
- Rounded soft geometric forms

## Where it works

- Home furniture brand sites
- Sustainable lifestyle brands
- Organic food and coffee brands
- Nordic travel and experiences
- Family and parenting apps

## Strengths

- Warm and friendly emotional connection
- Natural vehicle for sustainability
- Extremely high mass acceptance
- Good cross-cultural adaptability

## Costs

- Over-popularity leads to homogeneity
- May lack visual impact
- Not for high-tech contexts

## Pitfalls

The specific ways AI-generated pages in this style go wrong. Check each one before delivering.

1. Cold sterile white — Nordic white is warm, paired with wood tones and textile texture for hygge
   白得发冷——北欧的白是暖白，要配原木色与织物质感才有 hygge
2. Cramming product shots — the relaxed spacing and large imagery are the whole point
   版面塞满产品图——留白与大图的松弛感正是核心卖点
3. High-saturation accents — desaturated natural hues are the register
   用了高饱和强调色——低饱和的自然色系才是这个味

## Seen in the wild

IKEA · HAY · Muuto · Arket · COS

## Reference implementation

`assets/demos/scandinavian.html` — a complete single-file page (502 lines, no scripts, no external requests). Read it for layout and composition patterns, or copy it as a starting point.

Live preview: https://design-vibes.v2ai.org/style/scandinavian
