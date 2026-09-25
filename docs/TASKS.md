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
- [ ] **Hero:** Bush House photo framed in centre columns, greyscale + grain + dark overlay; Playfair headline overlapping the top edge; vertical frame rules either side; Join button + "See events" link
- [ ] **Ticker band (oxblood):** DEBATE · WORKSHOPS · PANELS · FELLOWSHIP · UNPROMPTED scrolling strip
- [ ] **Who are we:** two zig-zag rows (image left / text right, then text left / image right); first line large Playfair, rest body Archivo
- [ ] **What do we do:** horizontal scroll-snap carousel of square cards (Debates, Workshops, Panels, Socials, Fellowship, Journal); last card cropped; arrow buttons; keyboard accessible (`Carousel` client component)
- [ ] **The team:** 3 + 2 grid of greyscale headshots with role and name, from `committee.yaml`
- [ ] **Proof strip (ink):** three `StatBlock`s — Initiative of the Year 2026, 100+ attendance, Journal + Fellowship
- [ ] **Join CTA:** engraving-style background, frame rules, "Membership is now open", Join button
- [ ] Rotating gear on scroll (Hero), ticker loop, stacked-band reveal
- [ ] All motion off under `prefers-reduced-motion`
- [ ] `Carousel` client component (added)
- [ ] lint + tsc + build: zero errors
- [ ] Commit: "Phase 2: home"

## Phase 3 — Journal: `app/journal/page.tsx` (follows sketch-journal.jpg)
- [ ] **Current issue:** "Issue 1: The Beginning" title, [UP] masthead, cover image linking to the Issue 1 PDF (new tab, file size shown)
- [ ] **What is Unprompted?:** vertical hairline timeline with dot markers and alternating image/text blocks
- [ ] **Thanks to our editors:** cards for Editor-in-Chief, Managing Editor and reviewers, from `journalTeam` data
- [ ] **More issues coming!:** carousel of issue covers; unreleased issues show a "COMING" stacked-type placeholder
- [ ] `content/issues/` files + zod schema (number, title, date, cover, pdf, released flag); PDFs and covers in `public/journal/`
- [ ] Call for submissions block with external link
- [ ] lint + tsc + build: zero errors
- [ ] Commit: "Phase 3: journal"

## Phase 4 — Other pages
- [ ] About: engraving hero, who we are, where we see AI (5 fields), two objectives, achievements
- [ ] Events: `content/events/` Markdown files, type filter, upcoming / past split by date, external sign-up links
- [ ] Fellowship: description, who it's for, status banner driven by config, register-interest link
- [ ] Join: poster-style page (no QR for now), FAQ
- [ ] 404 page
- [ ] lint + tsc + build: zero errors
- [ ] Commit: "Phase 4: other pages"

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
