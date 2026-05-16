"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Consistent section frame: anchor id, mono index, eyebrow label,
 * display headline, and a scroll-reveal that respects reduced motion.
 * Reused by every block on the single page.
 */

export default function Section({
  id,
  index,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string;
  index: string;
  eyebrow: string;
  title: ReactNode;
  description?: string;
  children: ReactNode;
}) {
  const reduce = useReducedMotion();

  const reveal: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id={id}
      className="relative mx-auto w-full max-w-6xl scroll-mt-24 px-6 py-24 sm:py-28"
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ show: { transition: { staggerChildren: 0.12 } } }}
      >
        <motion.div
          variants={reveal}
          className="mb-12 flex flex-col gap-4 sm:mb-16"
        >
          <div className="flex items-center gap-4">
            <span className="font-[family-name:var(--font-mono)] text-sm text-[var(--color-fg-faint)]">
              {index}
            </span>
            <span className="h-px w-10 bg-[var(--color-line)]" />
            <span className="eyebrow">{eyebrow}</span>
          </div>
          <h2 className="headline text-4xl text-[var(--color-fg)] sm:text-5xl">
            {title}
          </h2>
          {description ? (
            <p className="max-w-2xl text-base leading-relaxed text-[var(--color-fg-muted)]">
              {description}
            </p>
          ) : null}
        </motion.div>

        <motion.div variants={reveal}>{children}</motion.div>
      </motion.div>
    </section>
  );
}
