import Section from "@/components/ui/Section";
import { profile } from "@/lib/content";

export default function Contact() {
  return (
    <Section
      id="contact"
      index="07"
      eyebrow="Say hello"
      title={
        <>
          Let&apos;s build something{" "}
          <span className="text-[var(--color-emerald)] glow-text">together</span>
        </>
      }
      description="Open to collaboration, interesting problems, and good conversations. The fastest way to reach me is email or LinkedIn."
    >
      <div className="panel ticked flex flex-col gap-8 p-8 sm:p-12">
        <a
          href={`mailto:${profile.email}`}
          className="link-underline group inline-flex w-fit items-center gap-3 font-[family-name:var(--font-display)] text-2xl text-[var(--color-fg)] transition-colors hover:text-[var(--color-emerald)] sm:text-4xl"
        >
          {profile.email}
          <span className="text-[var(--color-emerald)] transition-transform group-hover:translate-x-1">
            →
          </span>
        </a>

        <div className="flex flex-wrap gap-4">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[var(--color-emerald)] px-7 py-3 text-sm font-semibold text-[var(--color-abyss)] transition-shadow hover:shadow-[0_0_28px_-4px_var(--color-emerald)]"
          >
            LinkedIn
          </a>
          <a
            href={profile.cvPath}
            download
            className="rounded-full border border-[var(--color-emerald)]/40 px-7 py-3 text-sm font-semibold text-[var(--color-fg)] transition-colors hover:border-[var(--color-emerald)] hover:bg-[var(--color-emerald)]/10"
          >
            Download CV
          </a>
        </div>
      </div>
    </Section>
  );
}
