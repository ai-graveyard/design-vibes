# Editorial `editorial`

**Chinese name:** 报刊编辑风

**Type:** Layout pattern

**Study version:** 2026.09

**Difficulty:** 2 (Medium)

**Tags:** Classic · Distinctive · Art

**Fits:** Creative / Design, Art / Culture, Personal / Blog

Masthead, article hierarchy, column measure, captions and fine rules establish reading order. Serif headlines, compact body copy, a drop cap and a lead image set the reading rhythm in this study.

## Study boundaries and references

An original web interpretation. Palette, assets and dimensions describe this example, not a universal definition of the style.

- [The Guardian · Digital design guide](https://design.theguardian.com/)

## Prompt

Hand this to any AI coding tool, or use it as your own build brief.

**English**

> Editorial. Masthead, article hierarchy, column measure, captions and fine rules establish reading order. Serif headlines, compact body copy, a drop cap and a lead image set the reading rhythm in this study. Avoid making every sentence a display headline; retain paragraphs, attribution and captions. Adapt palette and dimensions to the content; use the current demo reference brief for an exact reproduction.

**中文**

> 报刊编辑风。报头、文章层级、正文栏宽、图片说明和细栏线共同建立阅读顺序。本例用衬线标题、紧凑正文、首字下沉和一幅主图；重点是长文阅读的节奏。避免所有文案都变成超大标题，保留完整段落、出处和图片说明。配色与尺寸可根据内容调整；精确复现请使用当前演示的参考包。

**Short form** — when you only need one line:

- EN: Editorial: Masthead, article hierarchy, column measure, captions and fine rules establish reading order.
- 中文: 报刊编辑风：报头、文章层级、正文栏宽、图片说明和细栏线共同建立阅读顺序。

## Design tokens

Parsed from this reference implementation. Preserve these values when matching this demo; adapt them deliberately when applying the broader style.

```css
:root {
  --paper: #FAF7F0;
  --ink: #141414;
  --ink-soft: #3E3A33;
  --accent: #C8102E;
  --grey: #8A857C;
  --hairline: #DCD5C6;
  --serif: "Source Serif 4",Georgia,"Iowan Old Style","Times New Roman",Times,serif;
  --display: Didot,"Bodoni 72","Didot LT STD",Georgia,serif;
  --sans: "Inter",-apple-system,BlinkMacSystemFont,"Helvetica Neue",Arial,sans-serif;
}
```

## Signature traits

- Composition - Masthead, article hierarchy, column measure, captions and fine rules establish reading order.
- Signature - Serif headlines, compact body copy, a drop cap and a lead image set the reading rhythm in this study.

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

1. Avoid making every sentence a display headline; retain paragraphs, attribution and captions.
   避免所有文案都变成超大标题，保留完整段落、出处和图片说明。

## Seen in the wild

NYTimes.com · The New Yorker · Monocle · The Economist

## Reference implementation

`assets/demos/editorial.html` — a complete single-file page (595 lines, no scripts, no external requests). Read it for layout and composition patterns, or copy it as a starting point.

Live preview: https://design-vibes.v2ai.org/style/editorial
