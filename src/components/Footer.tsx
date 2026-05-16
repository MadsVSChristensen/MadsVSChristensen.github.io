import { profile } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-6xl px-6 pb-12">
      <div className="flex flex-col gap-4 border-t border-[var(--color-line)] pt-8 font-[family-name:var(--font-mono)] text-xs text-[var(--color-fg-faint)] sm:flex-row sm:items-center sm:justify-between">
        <span>
          © {new Date().getFullYear()} {profile.name}. Built with Next.js &amp;
          Tailwind.
        </span>
        <div className="flex gap-5">
          <a
            href={`mailto:${profile.email}`}
            className="transition-colors hover:text-[var(--color-emerald)]"
          >
            Email
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[var(--color-emerald)]"
          >
            LinkedIn
          </a>
          <a
            href="#top"
            className="transition-colors hover:text-[var(--color-emerald)]"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
