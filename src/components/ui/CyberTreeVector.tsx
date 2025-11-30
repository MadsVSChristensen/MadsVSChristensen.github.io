"use client";

import React from "react";

export const CyberTreeVector = () => {
  return (
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[1200px] h-[900px] pointer-events-none z-0">
      <svg
        viewBox="0 0 1200 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full opacity-80"
      >
        <defs>
          <linearGradient id="trunk-gradient" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#022c22" />
            <stop offset="40%" stopColor="#064e3b" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
          <filter id="bloom-strong" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <filter id="bloom-soft" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Central Core (Trunk) - Massive & Geometric */}
        <path
          d="M600 900 L600 600 L580 550 L620 550 L600 500 L600 400"
          stroke="url(#trunk-gradient)"
          strokeWidth="6"
          fill="none"
          filter="url(#bloom-soft)"
        />

        {/* Primary Branches - Fractal Structure */}
        <g stroke="#10b981" strokeWidth="2" opacity="0.7">
          {/* Left Main */}
          <path d="M600 600 L400 500 L300 350" />
          <path d="M400 500 L350 550 L250 550" />

          {/* Right Main */}
          <path d="M600 600 L800 500 L900 350" />
          <path d="M800 500 L850 550 L950 550" />

          {/* Center Top */}
          <path d="M600 400 L500 300 L500 200" />
          <path d="M600 400 L700 300 L700 200" />
        </g>

        {/* Secondary Circuitry (Fine Details) */}
        <g stroke="#34d399" strokeWidth="0.5" opacity="0.4">
          <path d="M300 350 L250 300 L200 300" />
          <path d="M300 350 L350 300 L350 250" />

          <path d="M900 350 L950 300 L1000 300" />
          <path d="M900 350 L850 300 L850 250" />

          <path d="M500 200 L450 150" />
          <path d="M700 200 L750 150" />
        </g>

        {/* Glowing Nodes (The "Fruits" of the tree) */}
        <g fill="#ecfdf5" filter="url(#bloom-strong)">
          <circle cx="300" cy="350" r="3" opacity="0.8" />
          <circle cx="900" cy="350" r="3" opacity="0.8" />
          <circle cx="600" cy="400" r="4" opacity="0.9" />
          <circle cx="500" cy="200" r="2" opacity="0.6" />
          <circle cx="700" cy="200" r="2" opacity="0.6" />
        </g>

        {/* Hexagonal Leaves */}
        <g stroke="#10b981" strokeWidth="1" fill="rgba(2, 44, 34, 0.8)">
          <path d="M250 550 L260 545 L260 535 L250 530 L240 535 L240 545 Z" transform="translate(-10,-10)" />
          <path d="M950 550 L960 545 L960 535 L950 530 L940 535 L940 545 Z" transform="translate(-10,-10)" />
          <path d="M600 300 L615 290 L615 270 L600 260 L585 270 L585 290 Z" transform="translate(-15,-15)" opacity="0.5" />
        </g>

      </svg>
    </div>
  );
};
