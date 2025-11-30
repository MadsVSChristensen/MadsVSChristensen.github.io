"use client";

import React from "react";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-20 glass-panel border-b border-[var(--glass-border)]">
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          <div className="text-xl font-mono font-bold text-white tracking-wider glow-text">
            MADS.DEV
          </div>
        </div>

        <div className="hidden md:flex space-x-10">
          {["About", "Experience", "Projects", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-xs font-medium text-emerald-100/60 hover:text-emerald-400 transition-colors uppercase tracking-[0.2em] group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-emerald-400 transition-all group-hover:w-full" />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
