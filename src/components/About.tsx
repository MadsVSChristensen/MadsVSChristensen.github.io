import Section from "@/components/ui/Section";
import { profile } from "@/lib/content";

const facts = [
  { k: "Based in", v: "Copenhagen, DK" },
  { k: "Focus", v: "Cloud · Backend · DevOps" },
  { k: "Clouds", v: "Azure · GCP" },
  { k: "Languages", v: "Python · Go · Dart" },
];

export default function About() {
  return (
    <Section
      id="about"
      index="01"
      eyebrow="Who I am"
      title={
        <>
          Engineering, <span className="text-[var(--color-emerald)]">rooted</span>{" "}
          in curiosity
        </>
      }
    >
      <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <div className="panel ticked p-8 sm:p-10">
          <p className="text-lg leading-relaxed text-[var(--color-fg-muted)]">
            {profile.about}
          </p>
        </div>

        <ul className="grid grid-cols-2 gap-4">
          {facts.map((f) => (
            <li
              key={f.k}
              className="panel flex flex-col gap-2 p-5"
            >
              <span className="eyebrow text-[0.65rem]">{f.k}</span>
              <span className="font-[family-name:var(--font-display)] text-lg text-[var(--color-fg)]">
                {f.v}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
