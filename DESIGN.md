# DESIGN — Academic Homepage

World: 「program note」— a repertory-cinema program note with Anthropic-grade editorial warmth. Brief-pinned by the user ("Anthropic 一点，电影一点"). Read mode; static site; i18n zh/en/es.

## Color

Light — the reading room, daylight through a high window:
`--paper #f6f1e8` · `--paper-elev #fdfaf3` · `--ink #201c15` · `--ink-soft #57503f` · `--ink-faint #726957` · `--line #ddd4c2` · `--accent #b04a17` · `--accent-soft rgba(176,74,23,.09)`

Dark — the screening room:
`--paper #17140f` · `--paper-elev #211d16` · `--ink #ede6d6` · `--ink-soft #b3a891` · `--ink-faint #948a78` · `--line #3a342a` · `--accent #d97757` · `--accent-soft rgba(217,119,87,.13)`

Color strategy: Restrained — warm neutrals tinted from paper + one clay accent that appears as text links, active language pill, hover states. Theme choice is scene-driven (reading room vs screening room), persisted in localStorage; `?theme=dark|light` deep-links.

## Type

- Display/serif: **Source Serif 4** (self-hosted woff2, 400–700 + italic) — headings, name, project titles, the dissertation title in italic, interest tags.
- Body and UI: **Instrument Sans** (self-hosted woff2, 400–700), CJK to PingFang SC / Songti; 16px/1.7, measure capped 65–75ch.
- Metadata runs in the text face: no third family. Photo caption, dates, affiliation, footer, language switcher and interest heading use Instrument Sans at 11–13px with 0.02–0.12em tracking.

## Layout

Max width 1120px. Desktop: two-column editorial spread — 300px sticky sidebar + main column, gap 60px. The rail stays pinned for the whole read; on windows under ~800px tall it scrolls inside itself so the portrait never leaves the frame. Mobile ≤880px: single centered column, sidebar stacks (photo, name, links centered). No rules: no section-title hairlines, no cards, no boxes, no dashed list separators — research, projects and news sit on the page like the rest of the prose, separated by space.

## Signature components

- **Portrait**: CV-photo scale (160px, 3:4, 4px radius, no frame), mono caption: `NAME` / `ORCID` / iD, the iD linked. Slow Ken-Burns drift on hover (6s, scale→1.045).
- **City study**: 240px-wide abstract street plan below research interests, ink-faint street blocks and a terracotta viewfinder. It represents city/image/memory, not a geographical map. Lines draw once on first visibility (760–840ms); the viewfinder shifts 3px/−2px on hover or keyboard focus. A native, localized replay button supports touch and keyboard. Static, fully visible by default and with reduced motion; no loops, animation stops when offscreen or the tab is hidden. Short desktop windows let the taller sidebar scroll naturally.
- **Entrance**: one staggered fade-up on load (7 steps, 0.7s, cubic-bezier(0.16,1,0.3,1)), disabled under `prefers-reduced-motion`.
- **Language switch**: pill control, active language = solid ink chip. Language: `?lang=` > localStorage > browser (zh→zh, es→es, else en). Chinese UI shows 董哲诚 as primary name; others show Zhecheng Dong.
- **News ledger**: one row per item, no rules between rows, mono tabular dates.
- **Pills** (links/badges): 1px border, 999px radius, hover → accent.
- Empty sections auto-hide (publications, teaching currently hidden).

## Browser chrome ships themed

Selection = accent on paper-elev; focus ring 2px accent; smooth scroll with 76px sticky-top offset. On desktop the top bar's solid hairline is gone, replaced by a gradient rule that dissolves into the paper at both ends; phones keep the plain hairline.

## Provenance

- `fonts/source-serif-*.woff2` — Source Serif 4, latin + latin-ext, upright and italic, self-hosted, OFL.
- `fonts/instrument-sans-*.woff2` — Instrument Sans, latin + latin-ext, self-hosted, OFL.
- `fonts/newsreader-*.woff2` — previous display face, now unreferenced.
- `photo.jpg` — user-supplied portrait.
- Review captures: `.impeccable/review/*.png` (headless Chrome, 1440×2600 desktop / 390 mobile).
