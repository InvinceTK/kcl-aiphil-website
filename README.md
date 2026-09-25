# AIΦ Website

Website for the King's Artificial Intelligence and Philosophy Society (KCL).

Built with Next.js 16 (App Router) · TypeScript · Plain CSS · Deployed on Vercel.

---

## Running locally

```bash
npm install
npm run dev        # http://localhost:3000
```

### Checks (must all pass before committing)

```bash
npm run lint       # ESLint
npx tsc --noEmit   # TypeScript
npm run build      # Production build
```

---

## Deploying to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
2. Click **Add New → Project** and import the `kcl-aiphil-website` repository.
3. Leave all build settings as defaults (Vercel detects Next.js automatically).
4. Click **Deploy**.

After the first deploy, every push to `main` redeploys automatically. Pull requests get their own preview URL.

**Custom domain:** once the committee has a domain, go to Project → Settings → Domains and add it. Then update `metadataBase` in `app/layout.tsx` and the URLs in `app/sitemap.ts` and `app/robots.ts` to match.

---

## Before going live — things that need the committee

All placeholders are marked `TODO:` in `site.config.ts` and in `content/` files.

| Item | File | What to change |
|---|---|---|
| KCLSU membership URL | `site.config.ts` → `membershipUrl` | Replace `TODO:https://...` with real URL |
| Instagram handle | `site.config.ts` → `socials.instagram` | Replace placeholder |
| LinkedIn handle | `site.config.ts` → `socials.linkedin` | Replace placeholder |
| Contact email | `site.config.ts` → `socials.email` | Replace placeholder |
| Fellowship interest form | `site.config.ts` → `fellowship.interestUrl` | Replace placeholder |
| Journal submissions form | `site.config.ts` → `journal.submissionsUrl` | Replace placeholder |
| Fellowship status | `site.config.ts` → `fellowship.status` | Change `'development'` to `'open'` when applications open |
| Committee names & photos | `content/committee.yaml` | Fill in name, role, degree, photo path |
| Journal team | `content/journal-team.yaml` | Fill in Editor-in-Chief and Managing Editor |
| Issue 1 cover & PDF | `content/issues/issue-01.md` | Add cover image path and PDF path; set `released: true` |
| Timeline milestones | `app/journal/page.tsx` → `timelineMilestones` | Replace `TODO:` body text |
| Domain | Vercel dashboard | Add custom domain under Project → Settings → Domains |
| Site URL | `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts` | Replace `https://kcl-aiphi.com` with real domain |

> See `CONTENT_GUIDE.md` for step-by-step instructions on adding events, committee members and journal issues.

---

## Project structure

```
app/                 # Next.js App Router pages and layouts
  layout.tsx         # Root layout (header, footer, grain, fonts)
  page.tsx           # Home
  events/            # Events list page
  fellowship/        # Fellowship page
  journal/           # Unprompted journal page
  join/              # Membership / join page
  not-found.tsx      # 404

components/          # Reusable UI components
  Button/
  Carousel/
  EventFilter/       # Client: filter chips + event rows
  Footer/
  Gear/              # SVG gear motif (scroll-rotate)
  Grain/             # Fixed noise texture overlay
  SectionLabel/
  SiteHeader/        # Header + MobileMenu (mobile nav)
  StackedBand/       # Stacked word rows with reveal animation
  StatBlock/
  Ticker/            # Scrolling text loop

content/             # All site copy — edit these, never touch components
  committee.yaml
  journal-team.yaml
  events/            # One .md file per event
  issues/            # One .md file per journal issue

lib/
  content.ts         # Typed loaders (gray-matter + zod)
  fonts.ts           # next/font/google setup

styles/
  tokens.css         # All CSS custom properties

site.config.ts       # Site-wide settings (URLs, stats, fellowship status)
```

---

## Tech notes

- **No Tailwind.** Styles are in `styles/tokens.css` and CSS Modules per component.
- **Server Components by default.** Only interactive pieces use `'use client'`: `Carousel`, `EventFilter`, `Gear`, `MobileMenu`, `StackedBand`, `Ticker`.
- **Static generation.** All pages prerender at build time (`○` in the build output). No server required.
- **Images via `next/image`.** Handles AVIF/WebP conversion, lazy loading and responsive sizes automatically.
