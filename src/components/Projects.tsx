import Link from "next/link";
import Section from "@/components/ui/Section";
import { projects } from "@/lib/content";

export default function Projects() {
  return (
    <Section
      id="projects"
      index="04"
      eyebrow="Things I've built"
      title="Selected Projects"
      description="A few packages and systems I led or built. Larger write-ups link through to a dedicated page."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => {
          const Card = (
            <article className="panel ticked group flex h-full flex-col gap-5 p-7 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-fg)] transition-colors group-hover:text-[var(--color-emerald)]">
                  {project.title}
                </h3>
                <span className="shrink-0 font-[family-name:var(--font-mono)] text-xs tracking-wider text-[var(--color-fg-faint)]">
                  {project.period}
                </span>
              </div>

              <p className="text-sm leading-relaxed text-[var(--color-fg-muted)]">
                {project.summary}
              </p>

              <ul className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-[var(--color-line)] px-3 py-1 font-[family-name:var(--font-mono)] text-[0.7rem] text-[var(--color-emerald)]"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              {project.slug ? (
                <span className="mt-auto inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-sm text-[var(--color-emerald)]">
                  Read more
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              ) : null}
            </article>
          );

          return project.slug ? (
            <Link
              key={project.title}
              href={`/projects/${project.slug}/`}
              className="block focus-visible:outline-none"
            >
              {Card}
            </Link>
          ) : (
            <div key={project.title}>{Card}</div>
          );
        })}
      </div>
    </Section>
  );
}
