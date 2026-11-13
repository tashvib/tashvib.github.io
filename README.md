# tashvib.github.io

Personal site built with **React + TypeScript**, bundled by **Vite**.

## Editing content

All text lives in `src/data.tsx`. The shapes are defined in `src/types.ts`,
so a typo or a missing field fails `npm run build` instead of breaking the page.
Images and the resume go in `public/assets/`.

## Commands

```bash
npm install      # once
npm run dev      # local dev server with hot reload
npm run build    # typecheck + production build into dist/
npm run preview  # serve the production build locally
```

## Deploying

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and
publishes `dist/` to GitHub Pages. One-time setup: repo **Settings → Pages →
Build and deployment → Source: GitHub Actions**.
