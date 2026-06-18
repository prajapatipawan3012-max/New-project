# Project Memory

## Core
Architectural Noir palette: ink #0F1B3D, panel #1E3A5F, silver #C0C0C0, royal #0056B3, surface #F8F9FA. Use tokens (text-ink, bg-royal, text-silver) — never hardcode hex in components.
Typography: DM Serif Display headings (font-serif), Fira Sans body (font-sans). Headings use serif weight 400 with tight tracking.
Square corners: --radius is 0.25rem. No rounded-full pills, no glassmorphism, no purple/pink gradients, no emoji icons (use lucide-react line icons only).
Hairlines: use `hairline-silver` utility for thin dividers. Use `ink-panel` for navy surfaces, `brushed-bg` for subtle silver gradient.
Uppercase eyebrows tracked at 0.22–0.28em, 10–11px, font-semibold.
Respect prefers-reduced-motion (handled in styles.css).

## Memories
- [Brand tokens](mem://design/sagar-tokens) — Hex/oklch values and utility class names for Sagar Aluminium Works
