# AIΦ Website — Tasks

Build checklist for the King's Artificial Intelligence and Philosophy Society website.
Source of truth: `docs/DESIGN_SPEC.md` (look and behaviour) and `brand-assets/sketches/` (layout of Home and Journal).

**Rules for Claude Code**
- Work phase by phase. Stop for review at the end of each phase.
- Tick a task (`- [x]`) only after it builds with no errors and you have checked it in the browser at 375px, 768px and 1440px.
- Add new tasks you discover under the right phase, marked `(added)`.
- Anything waiting on the committee goes in **Blocked: needs committee** at the bottom, not in a phase.

---

## Phase 0 — Plan (no code)
- [x] Read `docs/DESIGN_SPEC.md` in full, including section 4a (wireframes)
- [x] Look at the 4 references in `brand-assets/reference/` and the 2 sketches in `brand-assets/sketches/`
- [x] Summarise the references and sketches back in 5–8 bullets
- [x] Propose folder structure, content file formats + zod schemas, which components are client components, and build order
- [x] List conflicts or gaps between spec and sketches, plus questions
- [x] Wait for approval

## Phase 1 — Foundation
- [x] Scaffold with create-next-app: App Router, TypeScript, ESLint, no Tailwind, no `src/` dir
- [x] `tokens.css`: colours, type scale, spacing, grid, rules
- [x] Fonts via `next/font/google`: Playfair Display, EB Garamond, Archivo variable with width axis (Latin + Latin-ext subsets)
- [x] `lib/content.ts`: typed loader for `content/` (gray-matter + zod)
- [x] Grain texture overlay (SVG feTurbulence data URI, < 30 KB) and `Grain` component
- [x] `app/layout.tsx`: skip link, landmarks, grain overlay, fonts
- [x] `SiteHeader`: logo left, nav right, hairline rule, oxblood Join button, mobile full-screen overlay menu
- [x] Footer: wordmark, nav, socials, KCLSU line
- [x] `Button` (solid oxblood, outline hairline)
- [x] `Gear` SVG component (drawn from scratch, 11-tooth cog, scroll-rotate prop)
- [x] `Ticker` client component (CSS loop, pauses on hover/focus, prefers-reduced-motion)
- [x] `StackedBand` client component (IntersectionObserver reveal, CSS fallback for reduced-motion)
- [x] `SectionLabel`, `StatBlock` utility components
- [x] `site.config.ts`: membership URL, socials, stats, fellowship status (all `TODO:`)
- [x] `content/` stubs: committee.yaml, journal-team.yaml, events/, issues/
- [x] `app/styleguide/page.tsx` showing every token and component (robots: noindex)
- [x] lint + tsc + build: zero errors ✓
- [x] Commit: "Phase 1: foundation" ✓

## Phase 2 — Home: `app/page.tsx` (follows sketch-home.jpg)
- [x] **Hero:** Bush House photo (greyscale + dark overlay), Playfair headline, vertical frame rules, scroll-driven Gear rising bottom-right, Join button + "See events" link
- [x] **Ticker band (oxblood):** DEBATE · WORKSHOPS · PANELS · FELLOWSHIP · UNPROMPTED scrolling strip
- [x] **Who are we:** two zig-zag rows (image placeholder left / Playfair+Archivo text right, then fields list / image placeholder); 5-field hairline-ruled table
- [x] **What do we do:** `Carousel` client component, 6 square activity cards (last cropped at edge), ← → arrow buttons, keyboard accessible
- [x] **The team:** 3 + 2 CSS grid (6-column, nth-child centred bottom row), placeholder headshots from `committee.yaml`
- [x] **Proof strip (ink):** three `StatBlock`s — Initiative of the Year, 100+, 2 programmes
- [x] **Join CTA:** italic Playfair headline, vertical frame rules, oxblood Join button
- [x] Gear scroll-rotate, Ticker CSS loop (pauses on hover/focus), all motion off under `prefers-reduced-motion`
- [x] `Carousel` client component (added)
- [x] lint + tsc + build: zero errors ✓
- [x] Commit: "Phase 2: home" ✓

## Phase 3 — Journal: `app/journal/page.tsx` (follows sketch-journal.jpg)
- [x] **Current issue:** [UP] masthead (inverted white), VOLUME 1 · 11.26, issue title, cover placeholder echoing real cover design (stacked word band); auto-upgrades to real cover + PDF link when `released: true`
- [x] **What is Unprompted?:** vertical hairline timeline, square dot markers, 4 alternating text/image entries (all `TODO:` milestones pending committee)
- [x] **Thanks to our editors:** Editor-in-Chief + Managing Editor cards from `journal-team.yaml`
- [x] **More issues coming!:** Carousel; unreleased issues show "COMING" stacked-type placeholder; `content/issues/issue-02.md` added
- [x] `content/issues/` + zod schema; `public/journal/` directory created
- [x] Call for submissions (oxblood band) with link from `siteConfig.journal.submissionsUrl`
- [x] lint + tsc + build: zero errors ✓
- [x] Commit: "Phase 3: journal" ✓

## Phase 4 — Other pages
- [x] About: engraving hero, who we are, where we see AI (5 fields), two objectives, achievements
- [x] Events: `content/events/` Markdown files, type filter, upcoming / past split by date, external sign-up links
- [x] Fellowship: description, who it's for, status banner driven by config, register-interest link
- [x] Join: poster-style page (no QR for now), FAQ
- [x] 404 page
- [x] `EventFilter` client component (added)
- [x] `content/events/past-placeholder-event.md` placeholder past event (added)
- [x] lint + tsc + build: zero errors ✓
- [x] Commit: "Phase 4: other pages" ✓

## Phase 5 — Polish and handover
- [ ] Metadata API titles/descriptions, `next/og` Open Graph images, favicon, `app/sitemap.ts`, `app/robots.ts`
- [ ] Accessibility pass: keyboard-only, screen reader labels, contrast, focus states, alt text
- [ ] Lighthouse mobile 95+ on every route
- [ ] Broken-link check; confirm no `TODO:` left (or list the rest)
- [ ] `README.md`: run, build, deploy to Vercel
- [ ] `CONTENT_GUIDE.md`: how to add an event, a committee member, a journal issue
- [ ] Deploy to Vercel with preview deploys on pull requests
- [ ] lint + tsc + build: zero errors
- [ ] Commit: "Phase 5: polish and handover"

## Later (optional)
- [ ] Per-essay web pages using the journal-spread template (MDX, footnotes, pull quotes, print stylesheet)
- [ ] QR code on Join page (once KCLSU membership URL is confirmed)

---

## Blocked: needs committee
- [x] Bush House hero photo ✓ (received)
- [ ] Committee names, headshots, and the two "Head of" role titles
- [ ] Editor-in-Chief and Managing Editor names and photos
- [ ] Issue 1 cover image and PDF
- [ ] Milestones for the "What is Unprompted?" timeline
- [ ] KCLSU membership URL
- [ ] Social handles and contact email
- [ ] Fellowship details and timeline
- [ ] Domain (hosting is Vercel)
