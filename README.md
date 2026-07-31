# sikanderbakht.github.io

Personal portfolio for **Sikander Bakht — Mobile Lead**. Dark, editorial,
light↔dark alternating design (Trionn-inspired). Built with **Astro 5** +
**Tailwind v4**, with Lenis smooth-scroll and GSAP scroll motion. Deploys to
GitHub Pages via GitHub Actions.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output -> dist/
npm run preview  # preview the production build
```

Node 20+ required.

## Project structure

```
src/
  data/
    projects.ts     # all case studies (the single source of truth)
    profile.ts      # metrics, experience, skills, approach, contact
  components/        # Header, Footer, PhoneFrame, ProjectCard, sections/*
  layouts/BaseLayout.astro
  pages/
    index.astro           # home
    projects/[slug].astro # one template -> all case-study pages
    404.astro
  scripts/app.ts     # Lenis + GSAP reveals/count-ups/magnetic + cursor
  styles/global.css  # design tokens (light + dark themes) & components
  assets/projects/<slug>/  # screenshots (see IMAGES.md)
scripts/
  gen-placeholders.mjs  # regenerate branded placeholder screenshots
  gen-og.mjs            # regenerate the 1200x630 OG share card
```

## Common edits

### Add a project
1. Add an entry to `src/data/projects.ts` (slug, name, client, category,
   stack, tech, role, tint, tagline, overview, facts, contributions, impact).
2. Create `src/assets/projects/<slug>/` with a `cover` + a few shots, or run
   `node scripts/gen-placeholders.mjs` after adding it to that script's list.
3. `npm run build`. The card, detail page, filters and prev/next update
   automatically.

### Replace placeholder screenshots
See **IMAGES.md**. In short: drop real captures into
`src/assets/projects/<slug>/`, point the `images` entries in `projects.ts` at
them, set `temp: false`, and delete the `// TODO(IMAGE-REPLACE)` marker. The
site is final when `grep -rn "TODO(IMAGE-REPLACE)" src/` is empty.

### Edit copy / numbers
All prose and metrics live in `src/data/projects.ts` and
`src/data/profile.ts` — no markup changes needed.

### Change the accent or theme
Edit the tokens at the top of `src/styles/global.css` (`--color-accent`, the
`[data-theme="light"]` / `[data-theme="dark"]` palettes). Each section chooses
its theme via `data-theme="light|dark"`.

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`
(`withastro/action` → `actions/deploy-pages`). One-time setup: in the repo,
**Settings → Pages → Build and deployment → Source = GitHub Actions**.
