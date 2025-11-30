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
- `.github/workflows/`: GitHub Actions for deployment and releases

## Key Configuration

- **Static export**: `output: 'export'` in `next.config.ts` for GitHub Pages deployment
- **Conventional commits**: Used for semantic versioning (`feat:`, `fix:`, `chore:`, etc.)
- **Theme**: Emerald/teal color palette with custom CSS variables in `src/app/globals.css`
