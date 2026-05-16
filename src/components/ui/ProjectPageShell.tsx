import Link from "next/link";
import type { ReactNode } from "react";
import { profile } from "@/lib/content";

/**
 * Shared chrome for hand-written project sub-pages. Keeps every
 * /projects/<slug>/ page visually consistent while the body stays
 * free-form. Server component — no client JS needed.
 */

export default function ProjectPageShell({
  title,
  period,
  stack,
  summary,
  children,
}: {
  title: string;
  period: string;
  stack: string[];
  summary: string;
  children: ReactNode;
}) {
  return (
    <div className="relative mx-auto flex min-h-dvh w-full max-w-4xl flex-col px-6">
      <header className="flex items-center justify-between py-8">
        <Link
          href="/#projects"
          className="link-underline font-[family-name:var(--font-mono)] text-sm text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-emerald)]"
        >
          ← Back to portfolio
        </Link>
        <Link
          href="/"
          className="font-[family-name:var(--font-display)] text-sm font-semibold tracking-wide text-[var(--color-fg)]"
        >
          {profile.name}
        </Link>
      </header>

      <main className="flex-1 py-10">
        <div className="eyebrow mb-5">Project · {period}</div>
        <h1 className="headline text-4xl text-[var(--color-fg)] glow-text sm:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-fg-muted)]">
          {summary}
        </p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-[var(--color-line)] bg-[var(--color-abyss-soft)] px-3 py-1 font-[family-name:var(--font-mono)] text-xs text-[var(--color-emerald)]"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-14 h-px w-full bg-gradient-to-r from-[var(--color-emerald)]/40 via-[var(--color-line)] to-transparent" />

        <article className="prose-grove mt-12 flex flex-col gap-6 text-base leading-relaxed text-[var(--color-fg-muted)]">
          {children}
        </article>
      </main>

      <footer className="flex flex-col gap-2 border-t border-[var(--color-line)] py-10 font-[family-name:var(--font-mono)] text-xs text-[var(--color-fg-faint)] sm:flex-row sm:items-center sm:justify-between">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <Link
          href="/#projects"
          className="transition-colors hover:text-[var(--color-emerald)]"
        >
          ← All projects
        </Link>
      </footer>
    </div>
  );
}
