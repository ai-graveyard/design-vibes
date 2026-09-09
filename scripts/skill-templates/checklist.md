# Pre-delivery checklist

Run through this before handing a styled page back to the user. Most items come from real breakage found while building and testing the {{COUNT}} reference demos across two browser engines.

## Style fidelity

- [ ] When reproducing the demo, tokens match the reference. When adapting the style, retain the defining principles and explain deliberate token changes.
- [ ] Every pitfall listed for this style has been explicitly addressed.
- [ ] The style's signature move is actually present. A Bauhaus page without thick-outlined geometric shapes doing structural work is not a Bauhaus page.
- [ ] The composition is coherent; a layout pattern can complement a design language.

## Layout

- [ ] **No horizontal scroll at 375px.** `document.documentElement.scrollWidth === clientWidth`. This is the single most common failure.
- [ ] Grid columns are `minmax(0, 1fr)`, not `1fr`. A `1fr` column has a `min-content` floor, so any `white-space: nowrap` descendant (including ellipsis truncation) blows the grid past the viewport. Flex children need `min-width: 0` for the same reason.
- [ ] **No `padding` shorthand on an element carrying two classes.** The `<section class="hero wrap">` pattern is everywhere in these demos: `.wrap { padding: 0 32px }` and `.hero { padding: 84px 0 }` have equal specificity, so whichever loses source order gets fully erased — either the content hits the screen edge on mobile or the vertical rhythm vanishes. Write `padding-left/right` on the container class and `padding-top/bottom` on the section class, longhand, inside media queries too.
- [ ] Ambient background blobs sized in `vw` have a floor: `max(40vw, 320px)`. Otherwise they shrink to dots on narrow screens and glass/translucent materials lose the layers they were meant to refract.

## Motion

- [ ] Entrance animation `delay + duration` totals ≤ 2.5s. Anything slower and the page reads as broken on first paint.
- [ ] Entrance animation fill must not override interactive transforms. An explicit end frame is valid when needed, particularly for continuous motion; separate animation and hover transforms when they conflict.
- [ ] Scroll-driven reveals are declared in this exact order: `animation: <name> 1s linear` (**no fill**) → `animation-timeline: view()` → `animation-range`. The `animation` shorthand resets `animation-timeline`, so order matters.
- [ ] No `both`/`backwards` fill on `view()` animations. In a short viewport or an embedded container that never scrolls, backwards fill pins below-the-fold elements at the `from` frame — `opacity: 0`, permanently invisible.
- [ ] Stagger by shifting only the *end* of `animation-range` (`0% 50%`, `0% 64%`, `0% 78%`). `animation-delay` does nothing under a scroll timeline, and a non-zero start leaves an un-animated sliver visible at the viewport edge.
- [ ] No `view()` reveal inside an `overflow: hidden` ancestor — that ancestor becomes the nearest scroll container, and the animation sits frozen at its completion state forever. Dead code that looks fine and never runs.
- [ ] No `blur()` in an entrance animation on gradient text (`background-clip: text`). The combination can drop the entire layer in headless rendering.
- [ ] Elements with a base `transform` (rotated stickers, tilted cards) repeat that base value in every keyframe, or the animation snaps them straight.
- [ ] Animate only `opacity` / `transform` / `filter`.
- [ ] A global `@media (prefers-reduced-motion: reduce)` kill rule is present.

## Interaction

- [ ] `:hover` rules that move things (card lift, button float) are wrapped in `@media (hover: hover)`. Without it, a tap on touch devices leaves the hover state stuck. Keep `:active` press feedback unconditional.
- [ ] Interactive targets are at least 44×44px on touch.

## Delivery

- [ ] If the deliverable is a single-file HTML page: no external requests, no CDN fonts or remote images. Embed assets and their license notices. Local interaction scripts are allowed, with no service calls or persistence. Every reference demo holds to this and it is why they open instantly and work offline.
- [ ] Text contrast is legible. Several of these styles (vaporwave, cyberpunk, dark academia) trend toward low contrast — keep body copy readable even when the style pushes the other way.
- [ ] Dark mode either genuinely works or is deliberately out of scope and you said so.
