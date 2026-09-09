---
name: design-vibes
description: {{DESCRIPTION}}
license: MIT
---

# Design Vibes

A curated catalog of {{COUNT}} web design styles. Each one ships a style brief (English + Chinese), the exact design tokens, the mistakes that make AI-generated pages of that style look wrong, and a complete self-contained HTML reference implementation.

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
Each demo is a complete single-file page (self-contained with embedded assets and optional local interactions, zero external requests) in that style. Read it when:
- the user wants a full page rather than a section;
- you need real layout/spacing/composition patterns, not just colors;
- the style is Difficulty 3–4, where the look lives in the technique (blur stacks, gradients, mesh, clay shadows) rather than in the palette.

You may copy a demo wholesale as a starting point and rewrite its content. Say so when you do.

**4. Build it.**
- For a close reproduction of the demo, preserve its tokens, composition, typography and assets. For a broader style application, preserve the defining principles and document deliberate adaptations.
- Work through the pitfalls list explicitly. Those are the specific ways this style gets botched.
- Match the user's stack. The demos are plain HTML/CSS; translate the tokens and techniques into React/Tailwind/Vue as needed rather than pasting HTML into a React project.

**5. Self-check against `references/checklist.md` before you hand anything over.**
Compare actual screenshots at 390, 768, 1280 and 1440px after fonts and images load. Check key interaction states and reduced motion separately. A passing build does not prove fidelity.

## Hard rules

- **Separate principles from examples.** A demo palette or radius is one authored choice, not a universal rule. Use its exact values when reproducing that example.
- **Commit to the style.** These styles are opinionated on purpose. Half-applied brutalism just looks broken; half-applied maximalism just looks cluttered. If the user wants restraint, pick a restrained style — don't dilute a loud one.
- **Keep the composition coherent.** Layout patterns (such as Bento) can be combined with a design language. Explain intentional combinations rather than mixing unrelated decoration.
- **Be honest about coverage.** This catalog is not exhaustive. If a request falls outside it, say so and use appropriate primary references.

## Style index

Difficulty is the cost of reproducing the style in pure CSS: 1 Easy → 4 Expert.

{{STYLE_INDEX}}

## Files

```
references/styles/<id>.md   Per-style: prompt (EN + 中文), design tokens, traits, pitfalls
references/picker.md        Choose by project type or by implementation difficulty
references/checklist.md     Pre-delivery self-check
assets/demos/<id>.html      Complete single-file reference page, zero external requests
```

Source and live previews: {{HOMEPAGE}}
