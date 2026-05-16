import Section from "@/components/ui/Section";
import { skills } from "@/lib/content";

const fill: Record<string, string> = {
  Expert: "w-full",
  Proficient: "w-2/3",
  Familiar: "w-1/3",
};

export default function Skills() {
  return (
    <Section id="skills" index="05" eyebrow="My toolkit" title="Skills">
      <div className="grid gap-6 md:grid-cols-3">
        {skills.map((tier) => (
          <div key={tier.level} className="panel flex flex-col gap-5 p-7">
            <div className="flex items-baseline justify-between">
              <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--color-fg)]">
                {tier.level}
              </h3>
              <span className="font-[family-name:var(--font-mono)] text-[0.65rem] tracking-wider text-[var(--color-fg-faint)] uppercase">
                {tier.note}
              </span>
            </div>

            <div className="h-1 w-full overflow-hidden rounded-full bg-[var(--color-line)]">
              <div
                className={`h-full rounded-full bg-gradient-to-r from-[var(--color-emerald)] to-[var(--color-emerald-bright)] ${
                  fill[tier.level] ?? "w-1/2"
                }`}
              />
            </div>

            <ul className="flex flex-wrap gap-2">
              {tier.skills.map((s) => (
                <li
                  key={s}
                  className="rounded-lg border border-[var(--color-line)] bg-[var(--color-abyss-soft)] px-3 py-1.5 font-[family-name:var(--font-mono)] text-sm text-[var(--color-fg)]"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
