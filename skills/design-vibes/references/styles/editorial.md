# Editorial `editorial`

**Chinese name:** 报刊编辑风  
**Difficulty:** 2 (Medium)  
**Tags:** Classic · Distinctive · Art  
**Fits:** Creative / Design, Art / Culture, Personal / Blog

A century of newspaper typographic craft brought to the browser: serif mastheads, hairline rules, multi-column text flows, drop caps and pull quotes. Design serves reading rhythm entirely — ink, rules, and whitespace are the only ornaments. The most enduring information aesthetic of the digital age.

## Prompt

Hand this to any AI coding tool, or use it as your own build brief.

**English**

> Editorial newspaper typography style. Paper cream base (#FAF7F0), ink black text (#141414), one newspaper red accent (#C8102E). Oversized serif masthead (Georgia/Didone flavor), 1px hairline rules dividing the layout, body copy flowing in three CSS columns, ::first-letter drop caps on lead paragraphs, red uppercase kickers, italic bylines and datelines, and a large pull quote spanning columns. Zero radius, zero shadows — nothing but ink, rules, and whitespace on paper.

**中文**

> 报刊编辑排版风格。纸感米白底（#FAF7F0）、墨黑文字（#141414）、一处报刊红强调（#C8102E）。超大衬线报头（Georgia/Didone 气质），1px 细规则线纵横分割版面，正文用 CSS columns 排成三栏，首段用 ::first-letter 首字下沉，红色 uppercase kicker 小标签，byline 与 dateline 用斜体小字，跨栏 pull quote 大号引文。零圆角零阴影——纸面上只有墨、线与留白。

**Short form** — when you only need one line:

- EN: Editorial style, cream and ink with newspaper red, serif masthead, hairline rules, columns and drop caps
- 中文: 报刊编辑风，米白底墨黑字+报刊红，衬线报头+细规则线+三栏首字下沉

## Design tokens

Lifted verbatim from the reference implementation. Use these exact values.

```css
:root {
  --paper: #FAF7F0;
  --ink: #141414;
  --ink-soft: #3E3A33;
  --accent: #C8102E;
  --grey: #8A857C;
  --hairline: #DCD5C6;
  --serif: Georgia,"Iowan Old Style","Times New Roman",Times,serif;
  --display: Didot,"Bodoni 72","Didot LT STD",Georgia,serif;
  --sans: -apple-system,BlinkMacSystemFont,"Helvetica Neue",Arial,sans-serif;
}
```

## Signature traits

- Oversized serif masthead - Didone flavor
- Hairline column rules - 1px
- Multi-column text flow - CSS columns
- Drop caps - ::first-letter
- Full editorial kit - kickers/bylines/pull quotes

## Where it works

- Digital magazines and newsletters
- Long-form feature stories
- Content-first personal blogs
- Publishers and book review sites
- Brand content hubs

## Strengths

- Excellent reading experience
- Timeless elegance
- Strong editorial authority
- Low dependency on imagery

## Costs

- Demands high-quality writing
- Modest visual impact
- Column layouts are fussy responsively

## Pitfalls

The specific ways AI-generated pages in this style go wrong. Check each one before delivering.

1. Heavy rules — editorial lines are 0.5-1px hairlines; thicker reads as spreadsheet
   规则线太粗——报刊的线是 0.5-1px 的 hairline，粗了就成了表格
2. Runaway measure — 45-75 characters per column is the iron law
   栏宽失控——每栏 45-75 字符是可读性铁律
3. Missing editorial furniture — without kickers, bylines, and drop caps it's just a blog in columns
   编辑元素缺席——没有 kicker、byline、首字下沉，就只是分了栏的博客

## Seen in the wild

NYTimes.com · The New Yorker · Monocle · The Economist

## Reference implementation

`assets/demos/editorial.html` — a complete single-file page (385 lines, no scripts, no external requests). Read it for layout and composition patterns, or copy it as a starting point.

Live preview: https://design-vibes.v2ai.org/style/editorial
