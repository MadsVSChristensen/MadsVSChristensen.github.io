import Section from "@/components/ui/Section";
import { education } from "@/lib/content";

export default function Education() {
  return (
    <Section
      id="education"
      index="03"
      eyebrow="What I studied"
      title="Education"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {education.map((ed) => (
          <article
            key={`${ed.school}-${ed.period}`}
            className="panel ticked flex flex-col gap-4 p-7 sm:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-fg)]">
                {ed.degree}
              </h3>
              <span className="shrink-0 font-[family-name:var(--font-mono)] text-xs tracking-wider text-[var(--color-fg-faint)]">
                {ed.period}
              </span>
            </div>
            <p className="text-sm text-[var(--color-emerald)]">
              {ed.school} · {ed.location}
            </p>
            {ed.detail ? (
              <p className="text-sm text-[var(--color-fg-muted)]">{ed.detail}</p>
            ) : null}
            <div className="mt-auto border-t border-[var(--color-line)] pt-4">
              <span className="eyebrow text-[0.62rem]">Thesis</span>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-fg-muted)] italic">
                “{ed.thesis}”
              </p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
