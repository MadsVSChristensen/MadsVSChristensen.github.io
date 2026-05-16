import Section from "@/components/ui/Section";
import { achievements } from "@/lib/content";

export default function Achievements() {
  return (
    <Section
      id="achievements"
      index="06"
      eyebrow="Recognition"
      title="Achievements"
    >
      <div className="flex flex-col gap-4">
        {achievements.map((a) => (
          <article
            key={a.title}
            className="panel ticked relative flex flex-col gap-6 overflow-hidden p-8 sm:flex-row sm:items-center sm:p-12"
          >
            <div
              className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-[var(--color-emerald)] opacity-10 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="grid h-20 w-20 shrink-0 place-items-center rounded-2xl border border-[var(--color-emerald)]/40 bg-[var(--color-abyss-soft)]"
              aria-hidden="true"
            >
              <svg viewBox="0 0 24 24" className="h-9 w-9" fill="none">
                <circle
                  cx="12"
                  cy="9"
                  r="6"
                  stroke="var(--color-emerald-bright)"
                  strokeWidth="1.6"
                />
                <path
                  d="M9 14l-2 7 5-3 5 3-2-7"
                  stroke="var(--color-emerald)"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="9" r="2.4" fill="var(--color-emerald)" />
              </svg>
            </div>
            <div>
              <div className="flex flex-wrap items-baseline gap-x-3">
                <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--color-fg)] glow-text">
                  {a.title}
                </h3>
                <span className="font-[family-name:var(--font-mono)] text-sm text-[var(--color-fg-faint)]">
                  {a.year}
                </span>
              </div>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-[var(--color-fg-muted)]">
                {a.detail}
              </p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
