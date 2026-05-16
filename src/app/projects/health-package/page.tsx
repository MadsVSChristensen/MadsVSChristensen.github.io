import type { Metadata } from "next";
import ProjectPageShell from "@/components/ui/ProjectPageShell";
import { projects } from "@/lib/content";

/**
 * Example opt-in project sub-page (hand-written TSX). This is the
 * pattern: copy this folder, change the slug + content, and add a
 * matching `slug` to the project in src/lib/content.ts.
 *
 * TODO (Mads): flesh out the write-up below with real specifics,
 * links to the pub.dev package, screenshots, and outcomes.
 */

const project = projects.find((p) => p.slug === "health-package")!;

export const metadata: Metadata = {
  title: project.title,
  description: project.summary,
};

export default function HealthPackagePage() {
  return (
    <ProjectPageShell
      title={project.title}
      period={project.period}
      stack={project.stack}
      summary={project.summary}
    >
      <section className="flex flex-col gap-4">
        <h2 className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-fg)]">
          Overview
        </h2>
        <p>
          A cross-platform health-data package that gives Flutter apps a single,
          consistent API over the three major mobile health stores — Apple
          HealthKit, Google Fit, and Android Health Connect — while abstracting
          away their very different permission models and data schemas.
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-fg)]">
          The challenge
        </h2>
        <p>
          Each platform exposes health data differently: HealthKit and Health
          Connect have distinct permission flows, unit conventions, and record
          types. App developers normally have to write and maintain three
          separate native integrations. The goal was to collapse that into one
          well-typed, reliable Dart interface.
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-fg)]">
          What I built &amp; maintained
        </h2>
        <ul className="flex flex-col gap-3">
          {[
            "A unified read/write API across HealthKit, Google Fit and Health Connect, with platform-channel bridges to native Kotlin and Swift.",
            "A consistent permission and data-type model so consumers reason about health data once, not three times.",
            "Long-term maintenance and releases as a widely-adopted open-source package — a top-3% used package in the Flutter community.",
          ].map((line) => (
            <li key={line} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-emerald)]" />
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-fg)]">
          Impact
        </h2>
        <p>
          The package became one of the most-used health integrations in the
          Flutter ecosystem (top 3%), relied on by health and research apps to
          ship multi-platform health features without bespoke native work.
        </p>
      </section>
    </ProjectPageShell>
  );
}
