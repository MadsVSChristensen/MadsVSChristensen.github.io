'use client';

export default function Navbar() {
  const navItems = [
    { label: 'PROJECTS', href: '#projects', active: false },
    { label: 'ABOUT', href: '#about', active: true },
    { label: '$BOLE', href: '#bole', active: false },
    { label: 'SKILLS', href: '#skills', active: false },
    { label: 'CONTACT', href: '#contact', active: false },
  ];

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-emerald-900 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <ul className="flex list-none items-center justify-center gap-12">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={
                  item.active
                    ? 'block border-b-2 border-emerald-400 pb-1 text-sm font-semibold uppercase tracking-widest text-emerald-400 no-underline'
                    : 'block text-sm font-semibold uppercase tracking-widest text-emerald-100 no-underline transition-colors hover:text-emerald-400'
                }
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
