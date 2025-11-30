"use client";

import React from "react";

interface HexagonContainerProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}

export const HexagonContainer = ({ children, className = "", glow = false }: HexagonContainerProps) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Hexagon Background SVG */}
      <svg
        className="absolute inset-0 w-full h-full text-emerald-900/40"
        viewBox="0 0 100 100"
        fill="currentColor"
        preserveAspectRatio="none"
      >
        <path d="M50 0 L95 25 L95 75 L50 100 L5 75 L5 25 Z" />
      </svg>

      {/* Hexagon Border SVG */}
      <svg
        className={`absolute inset-0 w-full h-full ${glow ? "text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.6)]" : "text-emerald-500/30"}`}
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        preserveAspectRatio="none"
      >
        <path d="M50 0 L95 25 L95 75 L50 100 L5 75 L5 25 Z" vectorEffect="non-scaling-stroke" />
      </svg>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
