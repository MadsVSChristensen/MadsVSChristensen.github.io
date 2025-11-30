# Mads Christensen - Professional Profile

This is the source code for my professional profile website, hosted on GitHub Pages.
It serves as a portfolio, CV, and a hub for my personal projects.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Deployment:** GitHub Pages (via GitHub Actions)
- **Release Management:** Semantic Release

## Project Structure

- `src/app`: Main application routes and layout.
- `src/components`: Reusable UI components (Hero, About, Experience, etc.).
- `src/lib`: Utility functions.
- `.github/workflows`: GitHub Actions for deployment and release.

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/MadsVSChristensen/personal-website.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser.

## Adding New Projects

To add a new project to the portfolio:
1. Add the project details to the `projects` array in `src/components/Projects.tsx`.
2. If the project is hosted within this site, create a new route in `src/app/projects/[project-name]/page.tsx`.

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.
Semantic Release handles versioning and changelog generation based on conventional commits.
