"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { navLinks, profile } from "@/lib/content";

export default function Navbar() {
  const reduce = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={reduce ? false : { y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between px-6 transition-all duration-500 ${
          scrolled
            ? "my-3 rounded-full border border-[var(--color-line)] bg-[var(--color-abyss)]/80 py-3 backdrop-blur-md"
            : "py-6"
        }`}
      >
        <a
          href="#top"
          className="group flex items-center gap-2 font-[family-name:var(--font-display)] text-base font-bold tracking-wide text-[var(--color-fg)]"
        >
          <span className="grid h-7 w-7 place-items-center rounded-md border border-[var(--color-emerald)]/50 font-[family-name:var(--font-mono)] text-xs text-[var(--color-emerald)] transition-colors group-hover:bg-[var(--color-emerald)]/10">
            MC
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`relative rounded-full px-4 py-2 text-sm transition-colors ${
                  active === link.id
                    ? "text-[var(--color-emerald)]"
                    : "text-[var(--color-fg-muted)] hover:text-[var(--color-fg)]"
                }`}
              >
                {active === link.id ? (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-full bg-[var(--color-emerald)]/10 ring-1 ring-[var(--color-emerald)]/30"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                ) : null}
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={profile.cvPath}
              download
              className="ml-2 rounded-full bg-[var(--color-emerald)] px-4 py-2 text-sm font-semibold text-[var(--color-abyss)] transition-shadow hover:shadow-[0_0_24px_-2px_var(--color-emerald)]"
            >
              CV
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          className="flex h-10 w-10 items-center justify-center rounded-md border border-[var(--color-line)] text-[var(--color-emerald)] md:hidden"
        >
          <span className="relative block h-3 w-5">
            <span
              className={`absolute left-0 block h-0.5 w-5 bg-current transition-all ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 block h-0.5 w-5 bg-current transition-opacity ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-0.5 w-5 bg-current transition-all ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="mx-4 mb-2 overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-abyss)]/95 backdrop-blur-md md:hidden"
          >
            <ul className="flex flex-col p-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-4 py-3 text-sm text-[var(--color-fg-muted)] transition-colors hover:bg-[var(--color-emerald)]/10 hover:text-[var(--color-emerald)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={profile.cvPath}
                  download
                  onClick={() => setOpen(false)}
                  className="mt-2 block rounded-lg bg-[var(--color-emerald)] px-4 py-3 text-center text-sm font-semibold text-[var(--color-abyss)]"
                >
                  Download CV
                </a>
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
