# Terminal `terminal`

**Chinese name:** 终端黑客风  
**Difficulty:** 1 (Easy)  
**Tags:** Vintage · Distinctive  
**Fits:** Personal / Blog

The green phosphor glow, scanlines, and command-line grammar of CRT screens brought to the web. Monospace is the only typeface; commands and output are the only narrative. Native tongue for developers, hacker-movie mystique for everyone else.

## Prompt

Hand this to any AI coding tool, or use it as your own build brief.

**English**

> Terminal hacker style. Near-black green base (#0A0F0B), phosphor green text (#33FF66) with a subtle text-shadow glow, amber (#FFB000) for warnings, monospace only (ui-monospace stack) everywhere. Overlay full-screen CRT scanlines (3px repeating-linear-gradient stripes) plus a corner vignette. Narrate in terminal grammar: $ prompt command lines, output logs with [ok]/[warn] prefixes, box-drawing characters (┌─┐) as borders, and a blinking block cursor (step animation). Man-page section titles in wide-tracked uppercase. Radii never exceed 4px.

**中文**

> 终端黑客风格。近黑绿底（#0A0F0B），磷光绿主文字（#33FF66）带轻微 text-shadow 辉光，琥珀色（#FFB000）做警示强调，全站只用等宽字体（ui-monospace 栈）。全屏叠加 CRT 扫描线（repeating-linear-gradient 3px 半透明横纹）和四角暗角。内容用终端语法叙事：$ 提示符命令行、[ok]/[warn] 前缀的输出日志、box-drawing 字符（┌─┐）画边框、闪烁块状光标（step 动画）。man page 式区块标题全大写宽字距。圆角不超过 4px。

**Short form** — when you only need one line:

- EN: Terminal style, phosphor green on near-black with amber, monospace with scanlines and blinking cursor
- 中文: 终端黑客风，黑绿底磷光绿+琥珀，等宽字体+扫描线+闪烁光标

## Design tokens

Lifted verbatim from the reference implementation. Use these exact values.

```css
:root {
  --bg: #060907;
  --bg-panel: #0A0F0B;
  --fg: #33FF66;
  --fg-bright: #E8FFE8;
  --fg-dim: #1E9E4A;
  --fg-faint: #0F5F2E;
  --warn: #FFB000;
  --line: #12331E;
  --glow: rgba(51,255,102,.35);
  --mono: ui-monospace,"SF Mono",Menlo,Consolas,"Liberation Mono",monospace;
}
```

## Signature traits

- Monospace everywhere - ui-monospace stack
- Phosphor green glow - text-shadow halos
- CRT scanlines - repeating-gradient overlay
- Blinking block cursor - step animation
- Terminal chrome with $ prompts

## Where it works

- CLI tools and dev products
- Developer portfolios
- Tech blogs
- Cybersecurity companies
- Coding education platforms

## Strengths

- Instant developer credibility
- Cheap to build - nearly zero images
- Excellent performance
- Powerful atmospheric coherence

## Costs

- Steep readability for general users
- Fatiguing for long reads
- Monochrome green limits emotional range

## Pitfalls

The specific ways AI-generated pages in this style go wrong. Check each one before delivering.

1. A non-monospace font sneaks in — one sans-serif breaks character
   混进了非等宽字体——一处 sans-serif 就足以出戏
2. Single-shade green — phosphor needs bright, dim, and glow tiers
   绿色只有一档——磷光绿需要亮、暗、辉光多档层次
3. Scanlines too heavy — overlay opacity beyond ~10% kills readability
   扫描线太重——叠加层透明度超过 10% 会杀死可读性

## Seen in the wild

Warp.dev · Charm.sh · asciinema.org · cool-retro-term

## Reference implementation

`assets/demos/terminal.html` — a complete single-file page (439 lines, no scripts, no external requests). Read it for layout and composition patterns, or copy it as a starting point.

Live preview: https://design-vibes.v2ai.org/style/terminal
