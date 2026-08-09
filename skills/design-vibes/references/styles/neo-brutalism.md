# Neo-Brutalism `neo-brutalism`

**Chinese name:** 新粗野主义  
**Difficulty:** 1 (Easy)  
**Tags:** Avant-garde · Trendy · Hot  
**Fits:** Creative / Design, Personal / Blog

A modern evolution of traditional brutalism, keeping raw visual impact while adding usability considerations. Thick black borders, vibrant color blocks, hard-edge shadows — like interfaces sketched with markers. Favorite of Figma community and indie developers.

## Prompt

Hand this to any AI coding tool, or use it as your own build brief.

**English**

> Neo-Brutalism style — loud, flat, and confident. Palette: hot pink (#FF8FD4) and mustard yellow (#F7C548) blocks against black (#000) on a cream base. Mix a bold monospace with a heavy sans-serif. The core technique: thick solid black borders (2-3px) paired with a hard offset drop shadow (no blur, just an opaque shape offset 4-8px) — and contrast sharp square corners on some elements against a big 40px radius on others.

**中文**

> 新粗野主义风格——张扬、扁平、态度鲜明。配色：亮粉（#FF8FD4）和芥末黄（#F7C548）色块，配黑色（#000），底色米白。等宽体加粗体无衬线体混搭。核心技法：粗实心黑边框（2-3px）配硬边偏移投影（不做模糊，就是一个实色形状偏移 4-8px）——部分元素用尖锐直角，部分用大圆角（40px）形成对比。

**Short form** — when you only need one line:

- EN: Neo-Brutalism, hot pink and mustard with black borders, hard offset shadow with mixed corner styles
- 中文: 新粗野主义，亮粉芥末黄+黑边，硬边偏移投影+直角圆角对比

## Design tokens

Lifted verbatim from the reference implementation. Use these exact values.

```css
:root {
  --paper: #FFF6EA;
  --ink: #000000;
  --white: #FFFFFF;
  --orange: #FF6B35;
  --blue: #004E89;
  --yellow: #F7C548;
  --pink: #FF8FD4;
  --green: #3ECF8E;
  --bw: 4px;
  --sans: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"PingFang SC","Microsoft YaHei",sans-serif;
  --mono: ui-monospace,"SF Mono",Menlo,Consolas,monospace;
}
```

## Signature traits

- 3-5px thick black borders
- Solid color fills - no gradients
- Hard-edge offset shadows - 4-8px
- System fonts + bold weights
- High-contrast color schemes

## Where it works

- Developer tools and CLI products
- Indie developer projects
- Creative tools and design platforms
- Tech blogs and documentation sites
- Hackathon projects

## Strengths

- Distinctive personality - highly recognizable
- Dev-friendly - simple and direct CSS
- Currently very trendy - cutting edge
- Good dark mode adaptation

## Costs

- May appear rough and unfinished
- Visual impact too strong - not eye-friendly
- Limited enterprise client acceptance

## Pitfalls

The specific ways AI-generated pages in this style go wrong. Check each one before delivering.

1. Blurred shadows — they must be hard, zero-blur solid offsets of 4-8px
   阴影做了模糊——必须是 0 模糊的硬实体投影，位移 4-8px
2. Borders thinner than 2px — the thick black outline is the ID card
   描边细于 2px——粗黑描边就是它的身份证
3. No press displacement — on :active the card should physically slam into its shadow
   按下去没有位移——active 时卡片要真的「怼」进阴影的位置

## Seen in the wild

Figma Community · Gumroad · Poolside.fm · Pitch.com · Notion templates

## Reference implementation

`assets/demos/neo-brutalism.html` — a complete single-file page (414 lines, no scripts, no external requests). Read it for layout and composition patterns, or copy it as a starting point.

Live preview: https://design-vibes.v2ai.org/style/neo-brutalism
