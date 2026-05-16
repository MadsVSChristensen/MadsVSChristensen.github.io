"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { profile } from "@/lib/content";
import TreeMark from "@/components/ui/TreeMark";

export default function Hero() {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-dvh max-w-6xl flex-col justify-center px-6 pt-28 pb-16"
    >
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div
            variants={item}
            className="mb-6 flex items-center gap-3"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-emerald)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-emerald)]" />
            </span>
            <span className="font-[family-name:var(--font-mono)] text-xs tracking-[0.28em] text-[var(--color-fg-muted)] uppercase">
              {profile.location} · Open to collaboration
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="headline text-5xl text-[var(--color-fg)] sm:text-7xl"
          >
            <span className="block">{profile.name.split(" ")[0]}</span>
            <span className="block text-[var(--color-emerald)] glow-text">
              {profile.name.split(" ").slice(1).join(" ")}
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 font-[family-name:var(--font-mono)] text-lg text-[var(--color-fg-muted)]"
          >
            {profile.role}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-4 max-w-md text-lg leading-relaxed text-[var(--color-fg-muted)]"
          >
            {profile.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group rounded-full bg-[var(--color-emerald)] px-7 py-3 text-sm font-semibold text-[var(--color-abyss)] transition-shadow hover:shadow-[0_0_30px_-4px_var(--color-emerald)]"
            >
              View Work
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href={profile.cvPath}
              download
              className="rounded-full border border-[var(--color-emerald)]/40 px-7 py-3 text-sm font-semibold text-[var(--color-fg)] transition-colors hover:border-[var(--color-emerald)] hover:bg-[var(--color-emerald)]/10"
            >
              Download CV
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md"
        >
          <TreeMark className="h-auto w-full" />
        </motion.div>
      </div>

      <motion.div
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
      >
        <span className="font-[family-name:var(--font-mono)] text-[0.65rem] tracking-[0.3em] text-[var(--color-fg-faint)] uppercase">
          Scroll
        </span>
        <span className="h-10 w-px bg-gradient-to-b from-[var(--color-emerald)] to-transparent" />
      </motion.div>
    </section>
  );
}
