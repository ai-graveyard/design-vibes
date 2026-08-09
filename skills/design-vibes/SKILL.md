---
name: design-vibes
description: Pick and faithfully implement a web page visual style. 30 curated styles (Apple Minimalism, Swiss Style / International Typographic, Bauhaus, Glassmorphism, Liquid Glass, Neo-Brutalism, Cyberpunk, Vaporwave, Pixel Art, Terminal, Bento Grid, Aurora Gradients, and more), each with a ready-to-use prompt in English and Chinese, exact design tokens, known pitfalls, and a complete zero-dependency HTML reference implementation. Use when the user wants a landing page, hero section, portfolio, or marketing site "in X style", asks which look suits their project, or says a design feels generic or AI-generated. Also triggers on 网页设计风格, 落地页风格, 视觉风格选型, 极简风, 玻璃拟态, 液态玻璃, 新拟态, 赛博朋克, 蒸汽波, 包豪斯, 瑞士风格, 粗野主义, 像素风, 终端风.
license: MIT
---

# Design Vibes

A curated catalog of 30 web design styles. Each one ships a battle-tested prompt (English + Chinese), the exact design tokens, the mistakes that make AI-generated pages of that style look wrong, and a complete zero-dependency HTML reference implementation.

## When to use this

- The user names a style: "make it cyberpunk", "Apple-style landing page", "包豪斯风格首页", "glassmorphism dashboard".
- The user wants help choosing: "what style suits a SaaS landing page?", "这个博客用什么风格好".
- The user says a page looks generic, bland, or AI-generated and wants it to have a point of view.
- The user is building any hero section, landing page, marketing site, or portfolio and hasn't pinned down the visual direction.

Not for: application UI behavior, component library selection, or accessibility audits that have nothing to do with visual style.

## Workflow

**1. Settle on a style.**
If the user named one, map it to an `id` in the index below. If they didn't, read `references/picker.md` and recommend 2–3 candidates with a one-line reason each — do not silently pick one for them unless they asked you to just go.

**2. Read `references/styles/<id>.md`. Always.**
This is mandatory even for styles you think you know. The file holds the exact hex values, the prompt, and the pitfalls. Reproducing a style from memory is the single biggest cause of output that is "sort of" the style but reads as generic.

**3. Read `assets/demos/<id>.html` when you need structure, not just surface.**
Each demo is a complete single-file page (roughly 250–500 lines, zero external requests) in that style. Read it when:
- the user wants a full page rather than a section;
- you need real layout/spacing/composition patterns, not just colors;
- the style is Difficulty 3–4, where the look lives in the technique (blur stacks, gradients, mesh, clay shadows) rather than in the palette.

You may copy a demo wholesale as a starting point and rewrite its content. Say so when you do.

**4. Build it.**
- Copy the `:root` token block verbatim. Do not "improve" the hex values — they are what makes the style recognizable.
- Work through the pitfalls list explicitly. Those are the specific ways this style gets botched.
- Match the user's stack. The demos are plain HTML/CSS; translate the tokens and techniques into React/Tailwind/Vue as needed rather than pasting HTML into a React project.

**5. Self-check against `references/checklist.md` before you hand anything over.**

## Hard rules

- **Tokens are literal.** Same hex values, same radii, same font stacks. A palette drifted 10% toward "tasteful" is how every style collapses back into the same beige SaaS page.
- **Commit to the style.** These styles are opinionated on purpose. Half-applied brutalism just looks broken; half-applied maximalism just looks cluttered. If the user wants restraint, pick a restrained style — don't dilute a loud one.
- **One style per page.** Mixing two is a request the user has to make explicitly.
- **Don't invent a 31st style.** If nothing in the catalog fits, say so and work from the closest match.

## Style index

Difficulty is the cost of reproducing the style in pure CSS: 1 Easy → 4 Expert.

| id | Style | Vibe | Typical use | Difficulty |
| :-- | :-- | :-- | :-- | :-- |
| `apple` | Apple Minimalism · Apple 风 | Minimal, Modern, Hot | Premium consumer electronics sites | 3 Hard |
| `braun` | Braun / Dieter Rams · 迪特·拉姆斯风 | Minimal, Classic | Industrial design company sites | 2 Medium |
| `flat` | Flat Design · 扁平化 | Minimal, Modern, Classic | Mobile app UI design | 1 Easy |
| `material` | Material Design | Modern, Classic | Android native app development | 2 Medium |
| `swiss` | Swiss Style / International Typographic · 瑞士风格 | Minimal, Classic | International art biennial sites | 2 Medium |
| `bento` | Bento Grid · Bento 网格 | Minimal, Hot, Modern | Product feature showcases | 2 Medium |
| `aurora` | Aurora Gradients · 极光渐变 | Modern, Trendy, Hot | SaaS product sites | 3 Hard |
| `bauhaus` | Bauhaus · 包豪斯 | Art, Vintage, Classic | Contemporary art gallery sites | 2 Medium |
| `scandinavian` | Scandinavian · 斯堪的纳维亚 | Minimal, Warm | Home furniture brand sites | 1 Easy |
| `neo-brutalism` | Neo-Brutalism · 新粗野主义 | Avant-garde, Trendy, Hot | Developer tools and CLI products | 1 Easy |
| `duotone` | Duotone · 双色调 | Art, Vintage | Music streaming platforms | 1 Easy |
| `japanese` | Japanese Minimalism · 日式极简 | Minimal, Classic, Warm | Japanese restaurant websites | 2 Medium |
| `organic` | Organic Design · 有机形态 | Modern, Playful | Tech company rebranding | 4 Expert |
| `liquid-glass` | Liquid Glass · 液态玻璃 | Modern, Hot, Avant-garde | Operating systems and system-level apps | 3 Hard |
| `editorial` | Editorial · 报刊编辑风 | Classic, Distinctive, Art | Digital magazines and newsletters | 2 Medium |
| `brutalism` | Brutalism · 粗野主义 | Avant-garde, Distinctive | Avant-garde artist personal sites | 1 Easy |
| `terminal` | Terminal · 终端黑客风 | Vintage, Distinctive | CLI tools and dev products | 1 Easy |
| `memphis` | Memphis · 孟菲斯 | Art, Playful, Vintage | Kids brands and educational products | 2 Medium |
| `art-deco` | Art Deco · 装饰艺术 | Classic, Vintage | Luxury jewelry brands | 3 Hard |
| `glassmorphism` | Glassmorphism · 玻璃拟态 | Modern, Trendy, Hot | SaaS dashboards and consoles | 3 Hard |
| `dark-academia` | Dark Academia · 暗黑学院 | Classic, Vintage | Independent publishers and bookstores | 2 Medium |
| `pixel` | Pixel Art · 像素风 | Vintage, Playful, Distinctive | Indie game studios | 2 Medium |
| `cyberpunk` | Cyberpunk · 赛博朋克 | Avant-garde, Distinctive | Game websites and esports brands | 3 Hard |
| `frutiger-aero` | Frutiger Aero | Vintage, Playful, Trendy | Weather and eco apps | 4 Expert |
| `claymorphism` | Claymorphism · 粘土拟态 | Modern, Playful | Kids education apps | 4 Expert |
| `vaporwave` | Vaporwave · 蒸汽波 | Art, Vintage | Retro electronic music projects | 3 Hard |
| `maximalism` | Maximalism · 极繁主义 | Art, Distinctive | Luxury brand flagships | 4 Expert |
| `kinetic` | Kinetic Typography · 动态字体 | Art, Avant-garde | Creative agency websites | 3 Hard |
| `anti-design` | Anti-Design · 反设计 | Avant-garde, Distinctive, Trendy | Gen Z streetwear brands | 2 Medium |
| `neumorphism` | Neumorphism / Soft UI · 新拟态 | Modern, Minimal | Concept design and Dribbble showcases | 2 Medium |

## Files

```
references/styles/<id>.md   Per-style: prompt (EN + 中文), design tokens, traits, pitfalls
references/picker.md        Choose by project type or by implementation difficulty
references/checklist.md     Pre-delivery self-check
assets/demos/<id>.html      Complete single-file reference page, zero external requests
```

Source and live previews: https://design-vibes.v2ai.org
