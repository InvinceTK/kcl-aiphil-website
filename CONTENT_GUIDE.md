# Content Guide

How to update the AIΦ website without touching any code.

Every piece of content lives in the `content/` folder or in `site.config.ts`.
After editing, run `npm run build` to check for errors, then push to `main` to redeploy.

---

## Adding an event

1. Create a new file in `content/events/` named `your-event-slug.md`.
   Use lowercase letters and hyphens only — this becomes the event's identifier.

2. Copy this template:

```markdown
---
title: "Philosophy of AI: Panel Discussion"
type: panel
date: "2026-11-15"
location: "K2.31, King's Building, KCL"
speakers:
  - "Dr Jane Smith, KCL Philosophy"
  - "Prof. John Doe, KCL Informatics"
signupUrl: "https://kclsu.org/events/your-event-link"
---

A short description of the event goes here. Keep it to 2–3 sentences.
```

**Field notes:**
- `type` must be one of: `debate` · `workshop` · `panel` · `social`
- `date` format is `YYYY-MM-DD` — the site splits events into Upcoming / Past automatically
- `speakers` is a list; leave it empty (`speakers: []`) if there are none
- `signupUrl` must be a full URL starting with `https://`

3. Push to `main`. The event appears on `/events` immediately after the next build.

---

## Adding a committee member

Open `content/committee.yaml` and add a new entry to the list:

```yaml
- name: "Jane Smith"
  role: "President"
  degree: "Philosophy & Computer Science, Year 3"
  photo: "/images/committee/jane-smith.jpg"
```

**For the photo:**
1. Save the photo as a square JPEG or PNG, at least 400×400px.
2. Name it `firstname-lastname.jpg` (all lowercase, hyphens).
3. Put it in `public/images/committee/`.
4. Set `photo` to `/images/committee/firstname-lastname.jpg`.

If you don't have a photo yet, set `photo: ""` — the site shows a placeholder initial.

**Role order matters.** The home page and any committee grids display members in the order they appear in the file. Put President first, Vice-President second, and so on.

---

## Updating the journal team

Open `content/journal-team.yaml`. It works the same as the committee file:

```yaml
- name: "Alex Johnson"
  role: "Editor-in-Chief"
  photo: "/images/journal-team/alex-johnson.jpg"

- name: "Sam Williams"
  role: "Managing Editor"
  photo: "/images/journal-team/sam-williams.jpg"
```

Photos go in `public/images/journal-team/` using the same naming convention.

---

## Publishing a journal issue

Open `content/issues/issue-01.md` (or create `issue-02.md` etc. for future issues):

```markdown
---
number: 1
title: "The Beginning"
date: "11.26"
cover: "/journal/issue-01-cover.jpg"
pdf: "/journal/issue-01.pdf"
released: true
---
```

**To publish:**
1. Put the cover image in `public/journal/` (JPEG, portrait ratio 2:3, at least 880×1320px).
2. Put the PDF in `public/journal/`.
3. Set `cover` and `pdf` to the correct paths.
4. Set `released: true`.

While `released: false`, the journal page shows a styled "COMING" placeholder instead of the cover.

---

## Updating site-wide settings

Open `site.config.ts`. Each field has a comment explaining what it does:

```ts
membershipUrl: 'https://kclsu.org/organisations/aiphi'   // Join button on every page
socials.instagram: 'https://instagram.com/kcl.aiphi'     // Footer + mobile menu
fellowship.status: 'open'   // Change from 'development' to 'open' to open applications
```

Save the file and push. No rebuild needed — Next.js picks up config changes automatically on the next build.

---

## After editing

Always run these before pushing to make sure nothing is broken:

```bash
npm run lint
npx tsc --noEmit
npm run build
```

If all three pass, push to `main` and Vercel redeploys automatically.
