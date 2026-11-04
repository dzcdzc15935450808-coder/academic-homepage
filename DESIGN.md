# DESIGN — Academic Homepage

World: 「program note」— a repertory-cinema program note with Anthropic-grade editorial warmth. Brief-pinned by the user ("Anthropic 一点，电影一点"). Read mode; static site; i18n zh/en/es.

## Color

Light — the reading room, daylight through a high window:
`--paper #f6f1e8` · `--paper-elev #fdfaf3` · `--ink #201c15` · `--ink-soft #57503f` · `--ink-faint #8d8470` · `--line #ddd4c2` · `--accent #b04a17` · `--accent-soft rgba(176,74,23,.09)`

Dark — the screening room:
`--paper #17140f` · `--paper-elev #211d16` · `--ink #ede6d6` · `--ink-soft #b3a891` · `--ink-faint #7e7460` · `--line #3a342a` · `--accent #d97757` · `--accent-soft rgba(217,119,87,.13)`

Color strategy: Restrained — warm neutrals tinted from paper + one clay accent that appears as text links, active language pill, hover states. Theme choice is scene-driven (reading room vs screening room), persisted in localStorage; `?theme=dark|light` deep-links.

## Type

- Display/serif: **Newsreader** (self-hosted woff2, weights 400/500/600/700 + 400-italic) — headings, name, research/project titles, venue italics, interest tags.
- Body: system sans (`-apple-system…PingFang SC`) at 16px/1.7, measure capped 65–75ch.
- Mono (metadata only, never decoration): system `ui-monospace…` — photo caption, dates, affiliation, footer, language switcher, interest heading.

## Layout

Max width 1120px. Desktop: two-column editorial spread — 300px sticky sidebar + main column, gap 60px. Mobile ≤880px: single centered column, sidebar stacks (photo, name, links centered). Hairline rules separate, never cards-within-cards; research/projects are single authored blocks on `--paper-elev` with a 1px `--line` border.

## Signature components

- **Portrait**: CV-photo scale (160px, 3:4, 4px radius, no frame), mono caption `NAME · BARCELONA · 2026`. One authored motion: slow Ken-Burns drift on hover (6s, scale→1.045) — the page's only non-entrance motion.
- **Entrance**: one staggered fade-up on load (7 steps, 0.7s, cubic-bezier(0.16,1,0.3,1)), disabled under `prefers-reduced-motion`.
- **Language switch**: pill control, active language = solid ink chip. Language: `?lang=` > localStorage > browser (zh→zh, es→es, else en). Chinese UI shows 董哲诚 as primary name; others show Zhecheng Dong.
- **News ledger**: dashed hairline rows, mono tabular dates.
- **Pills** (links/badges): 1px border, 999px radius, hover → accent.
- Empty sections auto-hide (publications, teaching currently hidden).

## Browser chrome ships themed

Selection = accent on paper-elev; focus ring 2px accent; smooth scroll with 76px sticky-top offset.

## Provenance

- `fonts/newsreader-*.woff2` — Newsreader via Fontsource CDN (jsdelivr), self-hosted, OFL license.
- `photo.jpg` — user-supplied portrait.
- Review captures: `.impeccable/review/*.png` (headless Chrome, 1440×2600 desktop / 390 mobile).
