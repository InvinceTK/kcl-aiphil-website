# AIΦ Website — Design Specification

Sep 25, 2026 · @Elliot

## 1. Purpose, audience and goals

The site is the public home of the King's Artificial Intelligence and Philosophy Society (AIΦ): it must convert curious students into members and give the society's journal and fellowship a credible place to live.

**Primary audiences**

- **Prospective members** — KCL students from any discipline (law, politics, economics, arts, history, CS) deciding whether to join. They arrive from a QR code, Instagram or a freshers' fair on a phone.
- **Current members** — checking upcoming events, reading the journal, applying to the fellowship.
- **Speakers, researchers and partners** — judging whether the society is serious enough to engage with.

**Goals, in priority order**

1. Make joining one tap away from every page (membership link / QR equivalent).
2. Explain in under 10 seconds what AIΦ is: a student-led forum at the intersection of AI and philosophy, with two objectives — provoking critical discussion on how AI enters society, and building a pathway into AI safety.
3. Show proof of seriousness: KCL's 2026 "Initiative of the Year", average attendance above 100, a journal and a fellowship.
4. Give the journal, *Unprompted* \[UP\], a reading experience worthy of print.
5. Be easy for a non-technical committee to update each year (events, committee, essays) without touching layout code.

**Tone of voice:** intellectually serious but not academic-stuffy; confident, concise, slightly provocative. Copy should read like a good magazine standfirst, not a brochure.

## 2. Brand analysis: two registers, one voice

The existing designs run on a deliberate tension between **the classical** (philosophy) and **the industrial** (the machine). The website should use both registers and let them collide, never blend them into something generic.

| Reference | What it shows | What to carry into the web |
| --- | --- | --- |
| Social post (oxblood gear) | Deep oxblood field, off-white cropped gear, a single line of heavy wide sans reading PROMPTEDUNPROMPTED… bleeding off both edges, paper-grain texture | The oxblood accent colour; the giant cropped gear as a hero device; text that runs edge to edge like a ticker |
| Journal cover (*Unprompted* Vol. 1) | Black photocopied/xerox texture, `[UP]` masthead in a classical serif, VOLUME1 11.26 in bold grotesque, five stacked rows of UNPROMPTED with one row picked out in white (light PROMPTED + bold UNPROMPTED), a huge white gear rising from the bottom with rough, noisy edges | The stacked-type band with one highlighted row; the xerox grain; the bracketed \[UP\] mark; gear cropped at the viewport edge |
| Membership poster | Greyscale classical engraving of a seated thinker under a dark overlay, thin white vertical frame rules, AIΦ in a high-contrast display serif, thin horizontal rule, bold serif headline, italic serif tagline, QR code on white | The classical register: engraving imagery, AIΦ wordmark, hairline rules and frames, serif headlines and italic standfirsts |
| Journal spread | White page, Swiss layout: ESSAY TITLE in heavy wide caps, tracked small-caps byline, ABSTRACT block, hairline divider, two-column body, running head SECTION III — CULTURE & AESTHETICS in tracked caps, \[UP\] top right, black bar on the page edge, folio number | The reading template for journal essays: tracked running heads, hairline rules, generous margins, the black edge bar, page-number-style labels |

**Design principles derived from this**

1. **Print first, screen second.** Every page should feel like it could have been photocopied and pinned to a noticeboard: grain, hard edges, strong crops, no glossy gradients, no rounded "SaaS" cards, no drop shadows.
2. **Classical meets mechanical.** Serif + engraving for the society's identity and ideas; heavy grotesque + gear for energy, events and the journal.
3. **Monochrome with one blood-red accent.** Colour is scarce, so oxblood always means something (a call to action, a highlight, a section flip).
4. **Type as image.** Repeated words, huge crops and edge-bleeding lines do the decorative work instead of stock illustrations or AI-generated imagery.
5. **Hairlines and grids.** Thin rules, visible column structure and tracked uppercase labels signal editorial rigour.

## 3. Design tokens

All values live as CSS custom properties in one tokens file; hex values are sampled approximations from the references and should be checked against the committee's source files.

### Colour

| Token | Hex | Use |
| --- | --- | --- |
| `--ink` | #0E0E0E | Primary dark background, body text on paper |
| `--ink-soft` | #1C1C1C | Raised dark surfaces, stacked "ghost" type rows |
| `--paper` | #F1EFEA | Primary light background (warm off-white, never pure #FFF) |
| `--paper-dim` | #D9D6CF | Secondary text on dark, hairlines on dark |
| `--oxblood` | #5E1515 | Accent fields, CTAs, section flips |
| `--oxblood-deep` | #3F0D0D | Hover/pressed state of oxblood |
| `--grey-500` | #8A8781 | Captions, metadata, running heads |
| `--rule` | currentColor at 1px | All hairlines |

Contrast: paper on ink, ink on paper and paper on oxblood all pass WCAG AA for body text; grey-500 is for 14px+ metadata only.

### Typography

Three families, all free on Google Fonts and self-hosted:

| Role | Family | Settings | Seen in |
| --- | --- | --- | --- |
| Classical display (AIΦ wordmark, big serif headlines, italic standfirsts) | **Playfair Display** | 400 / 700 / 900, italic 400 | Membership poster |
| Journal masthead and pull quotes (\[UP\], essay quotes) | **EB Garamond** | 400, italic 400 | Journal cover and spread |
| Machine voice: headings, tickers, labels, UI and body copy | **Archivo** (variable, width axis) | Headlines: wdth 125, wght 800–900, uppercase, tight tracking (-0.02em). Labels: wdth 100, wght 600, uppercase, tracking +0.18em, 11–12px. Body: wdth 100, wght 400, 17–18px, line-height 1.6 | Social post, journal titles and body |

**Type scale** (fluid with `clamp()`): label 12px · body 18px · h4 22px · h3 clamp(26–34px) · h2 clamp(36–64px) · h1 clamp(56–140px) · display clamp(80–240px) for tickers and hero words.

Rules: serif headlines are sentence case; grotesque headlines are UPPERCASE; never set body copy in Playfair; never use more than two families in one component.

### Texture

- **Paper grain:** a tiny tiling noise (SVG `feTurbulence` baked to a small PNG/WebP, under 30 KB) overlaid at 6–10% opacity with `mix-blend-mode: multiply` on paper and `screen` on ink/oxblood.
- **Xerox edge:** hero shapes (the gear, big type) get a slightly roughened edge via an SVG displacement filter, applied only to large decorative elements and disabled on low-power devices if it costs performance.
- **Engraving treatment:** classical images are greyscale, contrast-boosted, under a 55–70% ink overlay, as in the membership poster.

### Motifs

- **The gear:** a 9–12 tooth cog with a thick ring and concentric inner circles, always cropped by the viewport or container edge, never shown whole and centred. Off-white on oxblood or ink, or ink on paper.
- **AIΦ wordmark:** Playfair Display, with a hairline rule beneath, as on the poster.
- **\[UP\] mark:** EB Garamond with square brackets, used only for the journal.
- **Stacked word band:** 5 rows of a repeated word (UNPROMPTED, or DEBATE / THINK etc. for other sections) in ghosted ink, with one row picked out.
- **Frame rules:** thin vertical hairlines inset from the page edges (poster), and a solid black bar on one edge for journal pages (spread).

### Layout

12-column grid, max content width 1280px, gutters 24px (mobile 16px), outer margin clamp(16–64px). Generous vertical rhythm on an 8px base. Corners are square everywhere (border-radius: 0).

## 4a. Wireframes from the paper sketches

The two hand-drawn sketches set the **layout and section order** for Home and Journal; sections 2–3 set the **look**. Where the sketches and section 4 disagree, the sketches win.

### Home (sketch labelled Home.tsx)

&#91;image: Home page sketch\]

| # | Section | What the sketch shows | How to style it |
| --- | --- | --- | --- |
| 0 | Header | "Logo" left; Home / Journal / other links right; a rule under the bar | AIΦ wordmark, Archivo tracked-caps links, hairline rule, oxblood Join button |
| 1 | Hero | A Bush House photo framed in the centre columns, with the hero text overlapping its top edge | Photo in greyscale with grain (engraving treatment), Playfair headline breaking over the frame, frame rules on either side |
| 2 | Who are we | Two alternating rows: image left + large text right, then text left + image right | Zig-zag on the 12-column grid; first line in large Playfair, the rest in body Archivo |
| 3 | What do we do | A row of square cards with the third cut off at the edge | Horizontal scroll-snap carousel (Debates, Workshops, Panels, Socials, Fellowship, Journal); the cropped card signals scrolling, with arrow buttons for keyboard users |
| 4 | The team | Five headshots in a 3 + 2 layout: President, Vice-President, Head of \[unclear, possibly Operations\], Head of \[unclear, possibly Marketing\], Head of Events | Greyscale square photos, role in tracked caps above, name below; driven by the committee data file |

### Journal (sketch labelled Journal.tsx)

&#91;image: Journal page sketch\]

| # | Section | What the sketch shows | How to style it |
| --- | --- | --- | --- |
| 1 | Current issue | "Issue 1: The Beginning" above the journal cover image, which is clickable and opens the PDF | Ink + grain background, \[UP\] masthead, cover image linking to the PDF (opens in a new tab, with file size shown) |
| 2 | What is Unprompted? | Image left and image right, joined by a vertical line with dot markers | A vertical timeline: alternating image/text blocks hung off a hairline with dots (e.g. idea → call for submissions → editing → Issue 1) |
| 3 | Thanks to our editors | "Big thanks to our editors, reviewers and team" with Editor-in-Chief and Managing Editor cards | Same card style as The team on Home, from a journal-team data file |
| 4 | More issues coming! | Square cards: Issue 1, Issue 2, a third cut off | Carousel of issue covers; unreleased issues show a stacked-type "COMING" placeholder |

### What changes because of the sketches

- The journal is **issue-based**: each issue is a cover plus a PDF. The per-essay web template from section 4 becomes a later, optional phase.
- The sketches name pages `Home.tsx` and `Journal.tsx`. The site is built in Next.js, so these map to \`app/page.tsx\` (Home) and \`app/journal/page.tsx\` (Journal); see section 6.
- Nav labels follow the sketch (Home, Journal, then the remaining pages) rather than the longer list in section 4.
- Save the sketches in the repo as `brand-assets/sketches/sketch-home.jpg` and `brand-assets/sketches/sketch-journal.jpg` so Claude Code can see them.

## 4. Sitemap and page content

Six top-level pages plus journal and event detail pages. Primary nav: About · Events · Fellowship · Journal · **Join** (Join is always an oxblood button).

| Route | Page | Register |
| --- | --- | --- |
| `/` | Home | Both, colliding |
| `/about` | About the society | Classical |
| `/events` and `/events/[slug]` | Events | Machine |
| `/fellowship` | AI Safety Fellowship | Machine on paper |
| `/journal`, `/journal/[slug]` | *Unprompted* \[UP\] | Journal (cover + spread) |
| `/join` | Membership | Classical (poster) |
| `/404` | Not found | Machine ("UNPROMPTED" joke welcome) |

### Home `/`

> **Sketch takes priority:** build Hero → Who are we → What do we do → The team as in 4a. The list below is the fuller version; keep the ticker, proof strip, upcoming events and Join CTA as extra bands between or after the sketched sections.

1. **Hero (ink, full viewport).** Giant cropped gear rising from the bottom edge. AIΦ wordmark top left. Headline in Playfair: "Thinking about the machines we'll live with." (placeholder, committee to approve). Sub-line in Archivo: King's Artificial Intelligence and Philosophy Society. Join button + "See events" text link.
2. **Ticker band (oxblood).** One line of heavy wide type scrolling horizontally: DEBATE · WORKSHOPS · PANELS · FELLOWSHIP · UNPROMPTED · …
3. **Why it matters (paper).** Short intro ("As the new generation, we're the ones who will have to live alongside AI…") then the five fields as a numbered editorial list: Law, Politics, Economics, Art & Culture, History, each with its one-line question from the brief. Layout: large index numbers (01–05) in Archivo, question in Playfair.
4. **Proof strip (ink).** Three big stats in the stacked-type style: "Initiative of the Year 2026" (KCL), "100+ average attendance", "2 new programmes: journal + fellowship".
5. **What we do (paper).** Four activity tiles in a hairline grid: Debates, Workshops, Panel Discussions, Social Events, each with a one-sentence description from the brief.
6. **Two pathways (split, oxblood | ink).** Left: Fellowship. Right: *Unprompted* journal, with its cover. Each links to its page.
7. **Upcoming events (paper).** Next 3 events from the events collection.
8. **Join CTA (engraving background).** Poster treatment: frame rules, "Membership is now open", Join button, QR code on desktop only.
9. **Footer (ink).** AIΦ wordmark, nav, Instagram / LinkedIn / email, KCLSU affiliation line, small print.

### About `/about`

Classical register. Engraving hero with frame rules. Sections: Who we are (welcome text), What makes us unique, Where we see AI (the five fields, expanded with 2–3 sentences each), Our two objectives, Committee grid (photo in greyscale, name, role, degree; data-driven), Achievements (Initiative of the Year 2026).

### Events `/events`

Machine register. Stacked-word header (EVENTS rows, one highlighted). Filter chips by type: Debate · Workshop · Panel · Social. Upcoming list first, then an archive of past events. Each event row: date block (large day number, tracked month), type label, title, speaker(s), location, short description, sign-up link (external, e.g. KCLSU or Eventbrite). Event detail pages optional; default is an expandable row with the external link.

### Fellowship `/fellowship`

Paper background, gear accent. Sections: what it is ("a programme for members looking to go further into AI safety…"), who it's for, what fellows get (guidance, opportunities, real experience), structure/timeline (placeholder until confirmed), how to apply with a status banner that can read "In development — register interest" and later "Applications open". Register-interest link or embedded form (external service; no backend).

### Journal `/journal` — *Unprompted* \[UP\]

> **Sketch takes priority:** build Current issue → What is Unprompted? → Thanks to our editors → More issues coming, as in 4a. The per-essay pages below are a later, optional phase.

- **Index:** styled like the cover. Ink, grain, \[UP\] masthead, stacked UNPROMPTED band, current volume and issue date (VOLUME 1 · 11.26). Below: essays grouped by section (e.g. Section III — Culture & Aesthetics) as a table of contents with author, title and page-style numbers. Call for submissions block.
- **Essay page:** styled like the spread. Paper, running head (SECTION — NAME) in tracked caps, \[UP\] top right, black bar on the right edge on desktop, ESSAY TITLE in heavy wide caps, NAME OF AUTHOR small tracked caps, ABSTRACT block, hairline divider, body. Body is a single comfortable column (65–72 characters) on screen; two columns only as a print stylesheet. Footnotes, pull quotes in EB Garamond italic, reading-progress hairline at the top, estimated reading time.
- **Submit:** guidelines and a submission link.
- Until essays exist, the index shows the cover, a "Volume 1 arriving 11.26" line and the call for submissions.

### Join `/join`

A web version of the membership poster: engraving, frame rules, AIΦ, "Membership is now open", the italic line "Become part of an award-winning King's College society focused on exploring the ethical development of AI", the Join button (KCLSU membership URL), and the QR code for sharing on screens. Beneath: what membership gets you, FAQ (cost, who can join, how to get involved), social links.

## 5. Components and interactions

### Core components

| Component | Description |
| --- | --- |
| `SiteHeader` | AIΦ wordmark left, nav right, oxblood Join button. Transparent over heroes, solid ink after scrolling 80px. Mobile: full-screen ink menu with huge Archivo links and frame rules. |
| `Gear` | Inline SVG cog, props for colour, size, crop position (bottom / right / top-left) and teeth count. Single source of truth for the motif. |
| `Ticker` | Edge-to-edge line of heavy wide type that loops horizontally (CSS animation, duplicated content for seamless loop). Props: words, speed, direction, colour scheme. |
| `StackedBand` | N rows of a repeated word, ghosted, with one highlighted row (light + bold word pair, as on the cover). |
| `EngravingHero` | Greyscale image, ink overlay, inset vertical frame rules, centred serif content. |
| `SectionLabel` | Tracked uppercase Archivo label with a hairline, e.g. SECTION III — CULTURE & AESTHETICS. |
| `StatBlock` | Huge number or phrase, small label beneath. |
| `EventRow` | Date block, type label, title, meta, expandable description, external sign-up link. |
| `EssayCard` / `EssayLayout` | Journal table-of-contents entry and full essay template. |
| `Button` | Two variants only: solid oxblood with paper text, and outline hairline. Square corners, uppercase Archivo 600, tracking +0.12em. Hover: fills invert. |
| `Grain` | Fixed full-page texture overlay, `pointer-events: none`. |
| `QRCode` | Generated at build time from the membership URL (no hand-made images). |

### Signature interactions

1. **Rotating gear:** the hero gear rotates slowly with scroll position (roughly 0.1° per px, capped), like the machine turning as you read.
2. **Ticker:** continuous horizontal scroll; pauses on hover and on focus.
3. **Stacked band reveal:** on entering the viewport, the highlighted row switches from ghosted to white, one word at a time.
4. **Prompted → Unprompted:** on the journal index, the highlighted row's light "PROMPTED" and bold "UNPROMPTED" swap weight on hover.
5. **Page transitions:** a fast (200ms) ink wipe between pages, if the framework supports view transitions natively; otherwise none.

All motion respects `prefers-reduced-motion: reduce` (tickers become static lines, gear stops, reveals are instant). No scroll-jacking, no cursor followers, no parallax on text.

## 6. Technical requirements

### Stack

- **Framework:** Next.js (latest stable) with the App Router and TypeScript. Pages are pre-rendered at build time (static generation), so search engines and link previews see real HTML. Use Server Components by default and add `'use client'` only to the interactive pieces (carousels, rotating gear, ticker, event filters, mobile menu). Chosen because the committee thinks in React (`Home.tsx`, `Journal.tsx`), and it leaves room for logins or a submissions system later.
- **Styling:** plain CSS with custom properties (a global `tokens.css` plus CSS Modules per component). No Tailwind or UI kits, because the look depends on precise, unusual typography.
- **Content:** Markdown and YAML files in a top-level `content/` folder (`events/`, `issues/`, `committee.yaml`, `journal-team.yaml`), read at build time by a small typed loader (`gray-matter` + `zod`) in `lib/content.ts`. Site settings (membership URL, socials, stats, fellowship status) live in `site.config.ts`. Future committees edit these files, never components.
- **Fonts:** `next/font/google` for Playfair Display, EB Garamond and Archivo (variable, with the width axis), which self-hosts them automatically; subsets Latin + Greek (for Φ), `display: swap`.
- **Images:** `next/image` for AVIF/WebP, responsive sizes and lazy loading below the fold.
- **Metadata:** Next's Metadata API for titles and descriptions, `app/sitemap.ts`, `app/robots.ts`, and `next/og` for per-page Open Graph images.
- **Hosting:** Vercel (free Hobby tier). Deploy on push to `main`, preview deploys on pull requests.
- **No backend.** Forms (fellowship interest, journal submissions) link out to external services (e.g. Google Forms, Tally).

### Content management

- A `CONTENT_GUIDE.md` at the repo root explaining, for non-developers, how to add an event, an essay and a committee member, with copy-paste templates.
- Every piece of copy lives in content files or `site.config`, never hard-coded inside components.
- Events auto-sort into Upcoming and Past by date at build time.

### Accessibility (WCAG 2.2 AA)

- Semantic landmarks and heading order on every page; skip-to-content link.
- All decorative type (tickers, stacked bands, the gear) hidden from screen readers with `aria-hidden`, with the real text provided once in accessible markup.
- Visible focus states (2px paper or oxblood outline, offset 3px).
- Engraving images with meaningful alt text; purely decorative ones with empty alt.
- Minimum tap target 44×44px; body text never below 16px.

### Performance and quality targets

- Lighthouse 95+ on Performance, Accessibility, Best Practices and SEO (mobile).
- Under 150 KB of JavaScript on any page; grain texture under 30 KB.
- Open Graph images per page (built from the brand system), sitemap.xml, robots.txt, favicon from the gear or Φ.
- Responsive from 320px to 1920px; tested in Chrome, Safari (iOS) and Firefox.
- Print stylesheet for journal essays (two columns, running heads, folio numbers).

## 7. Assets and open questions

### Assets to supply (put in `/brand-assets` before building)

- [ ] The gear as a vector (SVG/AI/PDF) from whoever designed the journal cover; otherwise Claude Code draws a matching SVG.
- [ ] AIΦ wordmark and \[UP\] mark as vectors, if they exist.
- [ ] The four reference images (social post, journal cover, poster, spread) for Claude Code to look at.
- [ ] Classical engravings, confirmed public domain (e.g. from the Met Open Access, Rijksmuseum or Wellcome Collection), including the source of the seated-thinker engraving on the poster.
- [ ] Committee photos and roles.
- [ ] Event photos from past sessions (with consent).

### Open questions for the committee

- [ ] What is the exact KCLSU membership URL behind the QR code?
- [ ] Is a domain already registered, and which host will you use?
- [ ] Is the journal name *Unprompted* confirmed, and is Volume 1's date 11.26 (November 2026)?
- [ ] What are the journal's sections (Section III is Culture & Aesthetics; what are I, II and the rest)?
- [ ] Fellowship: timeline, eligibility and whether to show "register interest" now.
- [ ] Where do events currently live (KCLSU, Instagram, Eventbrite, Luma)? Should the site link out or mirror them?
- [ ] Social handles and contact email.
- [ ] Who on the committee will maintain the site next year?

* [ ] From the Home sketch: what are the two unclear "Head of" roles, and the five committee names and headshots?
* [ ] Who took the Bush House photo, and do we have the rights to use it?
* [ ] From the Journal sketch: names for Editor-in-Chief and Managing Editor, the Issue 1 cover image and PDF, and the milestones for the "What is Unprompted?" timeline.
