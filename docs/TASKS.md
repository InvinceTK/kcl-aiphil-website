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
- [ ] Read `docs/DESIGN_SPEC.md` in full, including section 4a (wireframes)
- [ ] Look at the 4 references in `brand-assets/reference/` and the 2 sketches in `brand-assets/sketches/`
- [ ] Summarise the references and sketches back in 5–8 bullets
- [ ] Propose folder structure, content file formats + zod schemas, which components are client components, and build order
- [ ] List conflicts or gaps between spec and sketches, plus questions
- [ ] Wait for approval

## Phase 1 — Foundation
- [ ] Scaffold with create-next-app: App Router, TypeScript, ESLint, no Tailwind, no `src/` dir
- [ ] `tokens.css`: colours, type scale, spacing, grid, rules
- [ ] Fonts via `next/font/google`: Playfair Display, EB Garamond, Archivo variable with width axis (Latin + Greek subsets for Φ)
- [ ] `lib/content.ts`: typed loader for `content/` (gray-matter + zod)
- [ ] Grain texture overlay (< 30 KB) and `Grain` component
- [ ] `app/layout.tsx`: skip link, landmarks, 12-column grid, square corners
- [ ] `SiteHeader`: logo left, Home / Journal / other links right, hairline under the bar, oxblood Join button, mobile menu
- [ ] Footer: wordmark, nav, socials, KCLSU line
- [ ] `Button` (solid oxblood, outline hairline)
- [ ] `Gear` SVG component (use vector from `brand-assets/` if present, else draw one)
- [ ] `site.config.ts`: membership URL, socials, stats, fellowship status (all `TODO:`)
- [ ] `app/styleguide/page.tsx` showing every token and component (exclude from sitemap)
- [ ] Commit: "Phase 1: foundation"

## Phase 2 — Home: `app/page.tsx` (follows sketch-home.jpg)
- [ ] **Hero:** Bush House photo framed in the centre columns, greyscale + grain; Playfair headline overlapping the top edge of the photo; frame rules
- [ ] **Who are we:** two zig-zag rows (image left / text right, then text left / image right); welcome copy from spec
- [ ] **What do we do:** horizontal scroll-snap carousel of square cards (Debates, Workshops, Panels, Socials, Fellowship, Journal); last visible card cropped at the edge; arrow buttons; keyboard accessible
- [ ] **The team:** 3 + 2 grid of greyscale headshots with role and name, from `committee` data (President, Vice-President, Head of TODO, Head of TODO, Head of Events)
- [ ] `content/committee.yaml` + zod schema
- [ ] Extra bands from spec, placed after the sketched sections: ticker, proof strip (Initiative of the Year 2026, 100+ attendance), Join CTA
- [ ] Rotating gear on scroll, ticker loop, stacked-band reveal
- [ ] All motion off under `prefers-reduced-motion`
- [ ] Only the carousel, gear and ticker are client components; everything else stays a Server Component
- [ ] Commit: "Phase 2: home"

## Phase 3 — Journal: `app/journal/page.tsx` (follows sketch-journal.jpg)
- [ ] **Current issue:** "Issue 1: The Beginning" title, [UP] masthead, cover image linking to the Issue 1 PDF (new tab, file size shown)
- [ ] **What is Unprompted?:** vertical hairline timeline with dot markers and alternating image/text blocks
- [ ] **Thanks to our editors:** cards for Editor-in-Chief, Managing Editor and reviewers, from `journalTeam` data
- [ ] **More issues coming!:** carousel of issue covers; unreleased issues show a "COMING" stacked-type placeholder
- [ ] `content/issues/` files + zod schema (number, title, date, cover, pdf, released flag); PDFs and covers in `public/journal/`
- [ ] Call for submissions block with external link
- [ ] Commit: "Phase 3: journal"

## Phase 4 — Other pages
- [ ] About: engraving hero, who we are, where we see AI (5 fields), two objectives, achievements
- [ ] Events: `content/events/` Markdown files, type filter, upcoming / past split by date, external sign-up links
- [ ] Fellowship: description, who it's for, status banner driven by config, register-interest link
- [ ] Join: poster-style page, build-time QR code from membership URL, FAQ
- [ ] 404 page
- [ ] Commit: "Phase 4: other pages"

## Phase 5 — Polish and handover
- [ ] Metadata API titles/descriptions, `next/og` Open Graph images, favicon, `app/sitemap.ts`, `app/robots.ts`
- [ ] Accessibility pass: keyboard-only, screen reader labels, contrast, focus states, alt text
- [ ] Lighthouse mobile 95+ on every route
- [ ] Broken-link check; confirm no `TODO:` left (or list the rest)
- [ ] `README.md`: run, build, deploy to Vercel
- [ ] `CONTENT_GUIDE.md`: how to add an event, a committee member, a journal issue
- [ ] Deploy to Vercel with preview deploys on pull requests
- [ ] Commit: "Phase 5: polish and handover"

## Later (optional)
- [ ] Per-essay web pages using the journal-spread template (MDX, footnotes, pull quotes, print stylesheet)

---

## Blocked: needs committee
- [ ] Bush House hero photo + permission to use it
- [ ] Committee names, headshots and the two unclear "Head of" roles
- [ ] Editor-in-Chief and Managing Editor names and photos
- [ ] Issue 1 cover image and PDF
- [ ] Milestones for the "What is Unprompted?" timeline
- [ ] KCLSU membership URL
- [ ] Social handles and contact email
- [ ] Fellowship details and timeline
- [ ] Domain (hosting is Vercel)
