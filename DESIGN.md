# DESIGN — dongzhecheng.com

World: **the printed annual**. A scholarly annual, not a portfolio: an ink cover, a fixed 34 %
axis, sections as pages of a report, one red page in the middle, a colophon at the end. Warm but
plain — the warmth comes from paper, ink and the size of the type, never from decoration.

Direction dealt by tasteskill v2 (`editorial-report`, seed 646778557), then settled against the
house rules.

## The argument

1. Cover — who he is, and the sentence the research exists to prove.
2. About — the same claim at reading size, with the portrait as a drop cap.
3. The dissertation — title, method, and the two fieldwork plates.
4. The red page — Madrid 1975 / Beijing 1978, the comparison the thesis is built on.
5. News — a dated record, pushed right.
6. Work — Kinoscholar, shown as the product's own interface.
7. Contact — one sentence, two addresses.
8. Colophon — image credits, type, date.

## Colour

Three values only. No tints, no gradients, no borders.

| Role | Light | Notes |
|---|---|---|
| Paper | `#e2dccf` | warm bone, not cream-yellow |
| Ink | `#2a1110` | warm near-black; the cover and the colophon |
| Red | `#952625` | one page of it (the comparison), one band at the close |

Secondary text: `#5a3a35` (soft, 7.35:1), `#6b524c` (mute, 5.23:1). On ink: `#e7e1d4` (13.6:1)
and `#c3b8a9` (9.1:1). On red: `#f1e9da` (6.7:1) and `#e4d3c2` (5.6:1).

## Type

- **Latin — Schibsted Grotesk**, self-hosted variable woff2 (SIL OFL). Display 700, text 400/600.
- **Chinese display — Songti SC** (system), so 董哲诚 and every 标题 sit like a Chinese book page.
- **Chinese text — PingFang SC** (system) at 17–19 px.
- Five steps: 107 / 45 / 34 / 19 / 14 px at 1440 (`clamp()` scales them).
- Headline: two lines, tracking −0.045em, leading 0.95. Statements ≤ 36 px. Body 58 ch.

## Layout

One axis at **34 %** of the content width, used by every section: headings start on it, body hangs
to its right, the left column holds two-line notes (place, funding, method). The axis collapses to
the left margin under 900 px, and the notes move above their paragraph.

Margins `clamp(20px, 5vw, 76px)`. Section padding `clamp(72px, 10vh, 124px)`. No section is a card
grid; the red page is the only full-bleed colour field inside the body.

## Pictures

Four, all documentary: the portrait (drop cap), Madrid and Barcelona (fieldwork plates, grayscale,
credited under the caption), and the Kinoscholar interface (the product's own screenshot, in
colour — the one screen on a printed page). No stock skies, no decorative images.

## Motion

One move, used twice: a line-mask reveal on the cover headline, and an 18 px rise + fade for each
block as it enters (`--i` staggers 55 ms). Every control has a hover/focus state. Under
`prefers-reduced-motion` nothing moves and everything is visible.

## Known limits

- The comparison page and the contact band are the only red surfaces; more would tip the page
  from "annual" into "poster".
- Figure captions carry the licence, so they are longer than a museum caption would be.
- The page is JS-rendered (i18n lives in `data.js`); `<noscript>` carries a short static summary
  for crawlers that do not execute scripts.
