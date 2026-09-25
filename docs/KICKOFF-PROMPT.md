# AIΦ Website — Claude Code Kickoff Prompt

Sep 25, 2026 · @Elliot

## Before you paste: set up the folder

Claude Code works best when the spec and references are sitting in the repo, so do this first (5 minutes):

1. Create an empty folder, e.g. `kcl-aiphi-website`, and open it in your terminal.
2. Export the **Design Specification** doc as Markdown and save it as `docs/DESIGN_SPEC.md`.
3. Create `brand-assets/reference/` and put your four images in it with clear names: `social-post-gear.png`, `journal-cover.png`, `membership-poster.png`, `journal-spread.png`.
4. Create `brand-assets/sketches/` and add your two paper sketches as `sketch-home.jpg` and `sketch-journal.jpg`. Convert them from HEIC to JPG first; Claude Code can't reliably read HEIC files.
5. Save the task list as `tasks.md` in the repo root.
6. Add any vectors you have (gear, AIΦ wordmark, \[UP\]) to `brand-assets/`.
7. Run `claude` in that folder and paste the prompt below.

The prompt asks Claude Code to plan and wait for your approval before building, then to work in phases with a check-in at the end of each.

## The kickoff prompt

Copy everything inside the block.

```markdown
# Role and goal

You are a senior front-end engineer with a strong editorial/print design sensibility. You are building the website for the King's Artificial Intelligence and Philosophy Society (AIΦ), a student society at King's College London. The site must convert students into members and host the society's journal, *Unprompted* [UP], and its AI Safety Fellowship.

# Source of truth

1. Read `docs/DESIGN_SPEC.md` in full before doing anything else. It defines the brand, tokens, sitemap, components, interactions and technical requirements. Follow it exactly; where it is silent, choose what best fits its design principles.
2. Look at every image in `brand-assets/reference/`. These are the society's existing designs (social post, journal cover, membership poster, journal spread). The website must look like it belongs to the same family. Describe back to me, in 5–8 bullets, what you see in them and how you will translate it to the web.
3. Look at both sketches in `brand-assets/sketches/`. They are the committee's own wireframes for Home and Journal and set the section order and layout for those pages (spec section 4a). Where a sketch and the spec disagree on layout, follow the sketch; for colour, type and texture, follow the spec.
4. Read `tasks.md`. It is the build checklist. Tick items (`- [x]`) as you finish them, add any new tasks you discover under the right phase, and never mark a task done until it builds and you have checked it in the browser.
5. Check `brand-assets/` for vector files (gear, AIΦ wordmark, [UP]). Use them if present. If the gear is missing, draw an original SVG cog that matches the references (thick ring, 9–12 blocky teeth, concentric inner circles).

# Society facts (use these; do not invent others)

- Student-led forum contributing to the fields at the intersection of AI and Philosophy.
- Why it's unique: our generation will live alongside AI as it becomes embedded in every field and career, so we aim to prepare students to engage with how AI is implemented in society and understand the fundamentals needed to tackle it.
- Where we see AI: Law (moral questions raised by AI systems capable of independent decision-making); Politics (whether regulation can keep pace with a technology that develops faster than legislation); Economics (effects on labour markets and inequality as intelligence becomes an automatable resource); Art & Culture (whether AI output can be creative, and implications for authorship); History (how this period compares to previous technological transformations).
- Activities: Debates (engaging thought and discussion on any dilemma in AI); Workshops (hands-on learning with AI tools); Panel Discussions (expertise of researchers and practitioners); Social Events (community beyond academic discussion).
- Entering AI safety: Fellowship (a programme pairing members with guidance and opportunities to build real experience in AI safety, in development); Mag-Journal *Unprompted* (open to all who want to write about AI and Philosophy, Volume 1 dated 11.26).
- Proof: named KCL's 2026 "Initiative of the Year"; average attendance exceeding 100; journal and fellowship in development.
- Two core objectives: (1) raise awareness and provoke critical discussion on how AI should be integrated into society; (2) build a community and pathway for students seeking to enter AI safety.
- Poster tagline: "Become part of an award-winning King's College society focused on exploring the ethical development of AI."

Anything not listed (URLs, dates, names, events, essays, prices) is a placeholder. Mark every placeholder with `TODO:` in the content files and list them all at the end of each phase.

# Constraints

- Next.js (latest stable), App Router, TypeScript, statically generated pages. Server Components by default; `'use client'` only on interactive pieces (carousels, gear, ticker, filters, mobile menu).
- Plain CSS: a global `tokens.css` with custom properties plus CSS Modules. No Tailwind, no component libraries, no CSS-in-JS.
- All copy lives in Markdown/YAML files under `content/` (loaded by a typed `lib/content.ts` using gray-matter + zod) or in `site.config.ts`, never hard-coded in components.
- Fonts via `next/font/google` (Playfair Display, EB Garamond, Archivo variable with width axis), subsets Latin + Greek for Φ. Images via `next/image`. Metadata API, `app/sitemap.ts`, `app/robots.ts`, `next/og` for Open Graph images.
- Deploy target: Vercel.
- Square corners, no drop shadows, no gradients except the engraving overlay, no emoji, no stock or AI-generated illustrations.
- WCAG 2.2 AA, `prefers-reduced-motion` respected everywhere, Lighthouse mobile 95+ on all four categories.
- Keep dependencies minimal; justify each one you add.

# How to work

**Step 1 — Plan, then stop.** After reading the spec and references, reply with: your read of the references; the proposed file/folder structure; the content file formats and zod schemas; which components need to be client components; the build order; any conflicts or gaps you found in the spec; and questions for me. Do not write code until I approve the plan.

**Then build in phases, stopping for my review after each:**

1. **Foundation:** Next.js scaffold (create-next-app, App Router, TypeScript, ESLint, no Tailwind), `tokens.css`, fonts, grain texture, base layout, `SiteHeader`, footer, `Button`, `Gear`, and a `/styleguide` page showing every token, type style and component.
2. **Home page:** the sketched sections first (Hero with Bush House photo, Who are we, What do we do carousel, The team), then the extra bands from the spec, all with placeholder content and the signature interactions (rotating gear, ticker, stacked band reveal).
3. **About, Join, Events:** content files for committee and events, filtering, upcoming/past split, the poster-style Join page with a build-time QR code.
4. **Journal and Fellowship:** issue-based journal page following the Journal sketch (current issue cover linking to its PDF, What is Unprompted? timeline, editor cards, More issues carousel), submissions block, fellowship page with a status banner driven by config.
5. **Polish and handover:** 404, Open Graph images, sitemap, robots, favicon, accessibility and Lighthouse audit with fixes, `README.md` (dev + deploy), and `CONTENT_GUIDE.md` for non-technical committee members.

# Checking your own work

- Run the dev server and check each page at 375px, 768px and 1440px. If Playwright is available, take screenshots and compare them against the reference images; iterate until the resemblance is clear.
- Run `npm run lint`, `npx tsc --noEmit` and `npm run build` with zero errors and warnings before ending a phase.
- At the end of each phase report: what you built, screenshots or routes to look at, the full TODO/placeholder list, and anything you deviated from in the spec and why.
- Commit at the end of each phase with a clear message.

Start with Step 1.
```

## canFollow-up prompts

Use these as the build goes on.

| When | Paste this |
| --- | --- |
| Approving the plan | "Plan approved with these changes: \[changes\]. Answers to your questions: \[answers\]. Start Phase 1." |
| After each phase | "Reviewed Phase N. Fix: \[list\]. Then continue to Phase N+1." |
| It looks too generic | "This looks like a template, not our brand. Open the reference images again, list 5 specific differences between them and the current page, and fix each one." |
| Adding real content | "Here is the real content for \[page/collection\]: \[paste\]. Replace the matching TODO placeholders and show me the remaining TODO list." |
| Before launch | "Run a full pre-launch audit: broken links, Lighthouse on every route at mobile, keyboard-only navigation, reduced-motion mode, and a check that no TODO placeholders remain. Fix what you can and list the rest." |
| Deploying | "Set up deployment to Vercel with preview deploys on pull requests, and add the steps to the README." |
