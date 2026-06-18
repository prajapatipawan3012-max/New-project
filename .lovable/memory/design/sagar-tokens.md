---
name: Sagar Aluminium brand tokens
description: Architectural Noir design tokens for Sagar Aluminium Works — hex/oklch palette, type pairing, custom utilities
type: design
---

## Palette (hex → oklch in src/styles.css)
- `--ink` #0F1B3D oklch(0.215 0.058 265) — navy ink, primary dark surface
- `--panel` #1E3A5F oklch(0.335 0.062 252) — deep blue panel
- `--silver` #C0C0C0 oklch(0.79 0.001 240) — brushed silver
- `--silver-dark` oklch(0.62 0.003 240)
- `--royal` #0056B3 oklch(0.48 0.17 258) — royal blue CTA
- `--royal-soft` oklch(0.94 0.04 258)
- `--surface` #F8F9FA oklch(0.985 0.002 240) — off-white background

## Tailwind classes available
`bg-ink bg-panel bg-silver bg-royal bg-surface text-ink text-panel text-silver text-royal border-silver` etc.

## Type
- `--font-serif` / `font-serif` → DM Serif Display (headings, weight 400)
- `--font-sans` / `font-sans` → Fira Sans (body 300/400/500/600/700)

## Custom utilities (src/styles.css)
- `ink-panel` — navy bg + white text
- `hairline-silver` — silver border-color at 60% opacity
- `brushed-bg` — diagonal silver gradient
- `aluminum-surface`, `brushed-metal` — legacy silver textures
- `animate-fade-up`, `animate-ken-burns`, `hover-lift`

## Conventions
- Square radius: 0.25rem (--radius). Buttons are rectangular.
- Eyebrows: text-[10px] font-semibold uppercase tracking-[0.22em–0.28em]
- Section dividers: border + hairline-silver (never bg-border)
- CTA primary: bg-royal hover:bg-white hover:text-ink, uppercase tracked label
- CTA secondary: border border-silver/70 text-silver hover:bg-panel
