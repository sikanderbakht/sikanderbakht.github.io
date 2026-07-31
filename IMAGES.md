# Screenshot replacement checklist

Every project renders its screenshots from `src/assets/projects/<slug>/`.
Projects marked **temp** use generated placeholders — swap them for real
Play Store / App Store captures when ready.

### How to replace (per project)

1. Drop your real screenshots into `src/assets/projects/<slug>/`.
   Any format works (`.png`, `.jpg`, `.webp`). Portrait phone screenshots look
   best — the site frames them automatically in a phone mockup.
2. In `src/data/projects.ts`, update that project's `images` array: point each
   `file` at your new filename, set `temp: false` (or remove it), fix the `alt`
   text, and delete the `// TODO(IMAGE-REPLACE)` comment.
3. Run `npm run build`. The site is **final when zero `TODO(IMAGE-REPLACE)`
   markers remain** (`grep -rn "TODO(IMAGE-REPLACE)" src/`).

Aim for a cover + at least 2–3 shots per project, ≥720px wide.

### Status

| Project | Slug | Source | Replaced? |
|---|---|---|---|
| ENBD X | `enbdx` | ✅ real captures | ☑ done |
| Emirates Islamic | `emirates-islamic` | generated | ☐ |
| Liv | `liv` | generated | ☐ |
| MB.io | `mbio` | generated | ☐ |
| MultiBank Plus | `mbfx` | generated | ☐ |
| MEX | `mex` | generated | ☐ |
| Edara | `edara` | generated | ☐ |
| STC Pay | `stc-pay` | generated | ☐ |
| Sadad | `sadad` | generated | ☐ |
| Hello | `hello-demo` | generated | ☐ |

### Regenerate placeholders

If you add a project or tweak tints, re-run:

```
node scripts/gen-placeholders.mjs
```
