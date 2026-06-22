# Apply UI/UX Pro Max Polish — "Architectural Noir"

Adopt the selected direction across the site, tighten the design system to the locked tokens, and remove any "AI-default" residue from earlier scaffolding.

## Locked design tokens

- Palette: `#0F1B3D` (navy/ink), `#1E3A5F` (deep blue panel), `#C0C0C0` (brushed silver), `#0056B3` (royal blue CTA), `#F8F9FA` (off-white surface), `#FFFFFF` (card)
- Type: DM Serif Display (headings), Fira Sans 300/400/600 (body)
- Layout: split-screen hero, 12-col grid, 0.5–1px hairline silver dividers, square corners (radius ≤ 4px), no glassmorphism, no purple/pink, no emoji icons

## Changes

### 1. Design system — `src/styles.css`
- Replace existing tokens with oklch equivalents of the locked palette under `:root`, mapped via `@theme inline` to `--color-ink`, `--color-panel`, `--color-silver`, `--color-royal`, `--color-surface`, `--color-card`.
- Set `--font-serif: "DM Serif Display"`, `--font-sans: "Fira Sans"`; remove Space Grotesk/Inter references.
- Replace previous accent/shadow utilities; add `@utility hairline-silver`, `@utility ink-panel`, `@utility brushed-bg` (subtle linear-gradient on `--color-silver` at low opacity).
- Square radius: set `--radius` to `0.25rem`.

### 2. Fonts — `src/routes/__root.tsx`
- Swap the existing Google Fonts `<link>` set to DM Serif Display + Fira Sans (300;400;600). Keep preconnects.

### 3. Homepage — `src/routes/index.tsx`
Rebuild to mirror the chosen prototype structure:
- Hero: 5/12 navy text panel + 7/12 visual panel with framed inner image + floating "Signature Finish — Brushed Silver Anodized" card.
- Eyebrow "Mumbai • Since 2014", serif H1 with silver accent word, supporting paragraph, dual CTA (Get Free Quote → `/quote`, WhatsApp → `waLink`), stat trio with hairline top divider.
- Services strip: 4 cards with `01–04` numerals, serif title, single-line desc, silver→royal hover on numeral chip.
- Trust band: 8 reasons restyled as 2×4 grid with numerals and silver hairlines (no filled icons).
- Featured projects: 3-up editorial cards with overline meta + serif title (kept).
- Testimonials: quote-mark serif glyph, hairline divider, name/role uppercase tracked.
- CTA band: navy with italic serif H2 + uppercase silver subline + underlined royal-blue link CTA (matches prototype).

### 4. Global components
- `Navbar.tsx`: replace pill button with square royal-blue CTA, switch nav links to Fira Sans uppercase tracked, add hairline bottom border, blur on scroll.
- `Footer.tsx`: navy bg `#0F1B3D`, silver hairlines between columns, serif brand mark.
- `WhatsAppButton.tsx`: keep, but restyle to square w/ silver ring (no green-bubble default).
- `BackToTop.tsx`: square, navy bg, silver chevron.
- `ImagePlaceholder.tsx`: switch to navy-on-silver with a small uppercase tag and a thin frame stroke (matches prototype's framed image).

### 5. Other routes
Apply the same primitives (serif H1, eyebrow, hairline dividers, square CTAs, navy CTA bands) to:
- `about.tsx`, `services.tsx`, `gallery.tsx`, `quote.tsx`, `contact.tsx`, `faq.tsx`
No structural changes — typography, color, spacing, and CTA-style updates only.

### 6. Pro Max pre-delivery checklist
- No emojis as icons (Lucide line icons only)
- `cursor-pointer` on all clickable elements
- Hover states 150–300ms transitions
- Text contrast ≥ 4.5:1 on every surface (navy/silver pair verified)
- Visible focus rings (royal-blue 2px outline offset 2px)
- `prefers-reduced-motion` respected on hero stagger + image ken-burns
- Responsive at 375 / 768 / 1024 / 1440

### 7. Memory
Save `mem://index.md` Core rules: locked palette, DM Serif Display + Fira Sans, square radius, no purple/pink/glassmorphism, no emoji icons. Save `mem://design/sagar-tokens` with the hex values and utility names.

## Out of scope
- No backend, no Lovable Cloud, no new routes.
- No new dependencies — fonts via `<link>`, icons via existing `lucide-react`.
- No real photography swap — keep `ImagePlaceholder` (restyled).
