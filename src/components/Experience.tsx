import Section from "@/components/ui/Section";
import { experience } from "@/lib/content";

export default function Experience() {
  return (
    <Section
      id="experience"
      index="02"
      eyebrow="Where I've worked"
      title="Experience"
    >
      <ol className="relative flex flex-col gap-6 border-l border-[var(--color-line)] pl-6 sm:pl-10">
        {experience.map((job) => (
          <li key={`${job.company}-${job.period}`} className="relative">
            <span className="absolute -left-[1.6rem] top-2 h-3 w-3 -translate-x-1/2 rounded-full bg-[var(--color-emerald)] shadow-[0_0_14px_var(--color-emerald)] sm:-left-[2.6rem]" />
            <div className="panel p-6 sm:p-8">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-fg)]">
                  {job.role}
                  <span className="text-[var(--color-emerald)]"> · {job.company}</span>
                </h3>
                <span className="font-[family-name:var(--font-mono)] text-xs tracking-wider text-[var(--color-fg-faint)]">
                  {job.period}
                </span>
              </div>
              <p className="mt-1 font-[family-name:var(--font-mono)] text-xs text-[var(--color-fg-faint)]">
                {job.location}
              </p>
              <ul className="mt-4 flex flex-col gap-3">
                {job.points.map((p, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-sm leading-relaxed text-[var(--color-fg-muted)]"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-emerald)]/60" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
