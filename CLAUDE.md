# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Tech Stack

- Next.js 16 (App Router) with static export
- TypeScript
- Tailwind CSS v4
- Framer Motion

## Commands

```bash
npm install      # Install dependencies
npm run dev      # Start dev server (http://localhost:3000)
npm run build    # Build for production (outputs to ./out)
npm run lint     # Lint code
```

## Folder Structure

- `src/app/`: Next.js app router pages and layout
- `src/components/`: React components (Hero, Navbar, etc.)
- `src/components/ui/`: Reusable UI components
- `src/lib/`: Utility functions
- `.github/workflows/`: GitHub Actions for GitHub Pages deployment

## Key Configuration

- **Static export**: `output: 'export'` in `next.config.ts` for GitHub Pages deployment.
  Repo is a GitHub *user* site → served at domain root, **no `basePath`**.
- **Tailwind v4**: CSS-first config — theme tokens via `@theme` in `src/app/globals.css`
  (no `tailwind.config.ts`).
- **Theme**: "Bioluminescent data-grove" — deep teal/emerald palette, glowing inline-SVG
  tree mark, subtle circuit grid; CSS variables in `src/app/globals.css`. Fonts:
  Chakra Petch (display), Sora (body), JetBrains Mono (mono) via `next/font`.
- **Conventional commits**: Optional convention for readable history. No automated
  release/versioning pipeline (semantic-release intentionally not used).
