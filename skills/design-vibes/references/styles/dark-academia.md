# Dark Academia `dark-academia`

**Chinese name:** 暗黑学院  
**Rating:** ★★★☆☆ 3.4/5  
**Difficulty:** unrated  
**Tags:** Classic · Vintage  
**Fits:** Art / Culture

An aesthetic subculture from Tumblr and TikTok, a romanticized imagination of classical education and knowledge pursuit. Dark leather and wood tones, classical literature imagery, mysterious academic atmosphere. Like entering Hogwarts or Oxford's ancient libraries.

## Prompt

Hand this to any AI coding tool, or use it as your own build brief.

**English**

> Dark Academia style, moody and literary. Palette: aged parchment (#FFF3C4, #F7ECC9, #F0E3BD) grounded by deep espresso brown (#3A2A17), warm gold (#F5C85C), and tan (#C9B489) — like candlelight on old leather and paper. Use a classic literary serif throughout, headlines and body alike. Give frames and cards slightly irregular, worn-edge border-radius (asymmetric values, not a clean rectangle) to suggest an aged book cover, and use warm candlelight-toned shadows instead of cool gray ones.

**中文**

> 暗黑学院风格，忧郁又书卷气。配色：陈旧羊皮纸色（#FFF3C4、#F7ECC9、#F0E3BD），配深咖啡棕（#3A2A17）、暖金（#F5C85C）、茶褐（#C9B489）——像烛光打在旧皮革和纸张上。标题和正文统一用经典文学感衬线字体。画框和卡片用略不规则的“磨损边缘”圆角（数值不对称，不是干净的矩形），暗示旧书封面的质感，阴影用暖烛光色调而不是冷灰色。

**Short form** — when you only need one line:

- EN: Dark Academia, parchment with espresso-brown and gold, worn-edge radius with candlelight shadows
- 中文: 暗黑学院，羊皮纸+咖啡棕暖金，磨损边缘圆角+烛光暖阴影

## Design tokens

Lifted verbatim from the reference implementation. Use these exact values.

```css
:root {
  --bg: #1A130C;
  --panel: #241A11;
  --green: #26382F;
  --green-deep: #1C2A23;
  --parchment: #EADCBE;
  --ink: #CDBD9C;
  --wine: #722F37;
  --wine-deep: #59242B;
  --brass: #B08D57;
  --candle: #EFA94A;
  --serif: Georgia,"Palatino Linotype","Songti SC",serif;
}
```

## Signature traits

- Dark tones - brown/forest green/burgundy/black
- Vintage textures - leather/old paper/wax seals
- Serif fonts - Garamond/Baskerville
- Classical decorative elements - quills/books
- Moody atmospheric lighting

## Where it works

- Independent publishers and bookstores
- Classical literature digital editions
- Academic research institutions
- Vintage stationery brands
- Vintage shops and collection galleries

## Strengths

- Unique mysterious atmosphere
- Strong cultural depth
- Suitable for deep reading contexts
- Niche but loyal audience

## Costs

- Relatively niche audience
- Seasonal bias toward fall/winter
- Can feel heavy and oppressive
- Special image material requirements

## Pitfalls

The specific ways AI-generated pages in this style go wrong. Check each one before delivering.

1. Cold blackness — dark academia is warm candlelit brown-black; cool grays turn it cyber-goth
   黑得没有暖光——暗黑学院是烛光下的暖棕黑，冷灰黑就成了赛博哥特
2. No texture — parchment, leather, and wood grain carry half the mood
   材质缺席——羊皮纸、皮革、木纹的质感是氛围的一半
3. Modern serifs — it needs old-print flavor (the Garamond family)
   衬线字体太现代——要有旧印刷的味道（Garamond 一系）

## Seen in the wild

Oxford University Press · Penguin Classics · The School of Life · Hogwarts Legacy

## Reference implementation

`assets/demos/dark-academia.html` — a complete single-file page (376 lines, no scripts, no external requests). Read it for layout and composition patterns, or copy it as a starting point.

Live preview: https://design-vibes.v2ai.org/style/dark-academia
