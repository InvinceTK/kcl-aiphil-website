# AIΦ website: project instructions

Website for the King's Artificial Intelligence and Philosophy Society (KCL).
Next.js (App Router) + TypeScript, plain CSS (tokens.css + CSS Modules), deployed on Vercel.

## Key files
- `docs/DESIGN_SPEC.md`: brand, tokens, pages, components, tech requirements. Read only the sections relevant to the current task, not the whole file every time.
- `brand-assets/reference/`: the society's existing designs (look).
- `brand-assets/sketches/`: committee wireframes for Home and Journal (layout). Layout follows the sketch; colour, type and texture follow the spec.
- `tasks.md`: the build checklist and the single source of progress.
- `content/` + `site.config.ts`: all copy. Never hard-code copy in components.

## How we work (important)
1. **One task at a time.** Only do what the current prompt asks: one page, one section or one phase. Never start the next page or phase on your own.
2. **Plan before editing** anything bigger than a small fix: list files to create/change, then wait for "go".
3. **Stop and report** when the task is done: what changed, which route to open, remaining TODOs. Then wait.
4. **tasks.md:** tick `- [x]` only after it builds and you have checked it in the browser. Add discovered tasks under the right phase, marked `(added)`.
5. **Placeholders:** anything not in the spec (names, URLs, dates, photos) gets `TODO:` in content files. Never invent facts about the society.
6. **Ask, don't guess,** when the spec and sketches don't cover something that affects layout or content.

## Saving tokens
- Don't re-read files you have already read this session unless they changed.
- Screenshot and compare against the references once per finished section, not after every edit.
- Run the full checks (lint, typecheck, build) at the end of a task, not after every edit.
- Run Lighthouse only in Phase 5 or when asked.
- Keep reports short: bullets, no restating the spec.

## Commands
- `npm run dev`: dev server
- `npm run lint`, `npx tsc --noEmit`, `npm run build`: all must pass with zero errors before a task is done

## Design non-negotiables
- Colours: ink #0E0E0E, paper #F1EFEA, oxblood #5E1515 (accent only), greys per spec.
- Fonts: Playfair Display (classical), EB Garamond ([UP] only), Archivo variable (headings, UI, body).
- Square corners, hairline rules, grain texture. No shadows, no gradients (except engraving overlay), no emoji, no stock or AI-generated images.
- Server Components by default; `'use client'` only for carousels, gear, ticker, filters, mobile menu.
- WCAG 2.2 AA. All motion off under `prefers-reduced-motion`.

## When compacting
Keep: the current task and phase, files changed and why, open TODOs, decisions made with the user, and the results of the last lint/build.
