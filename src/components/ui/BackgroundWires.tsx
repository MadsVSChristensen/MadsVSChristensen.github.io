"use client";

import React from "react";

export const BackgroundWires = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <svg
        className="absolute w-full h-full opacity-60"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="wire-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(16, 185, 129, 0)" />
            <stop offset="50%" stopColor="rgba(16, 185, 129, 0.5)" />
            <stop offset="100%" stopColor="rgba(16, 185, 129, 0)" />
          </linearGradient>
          <linearGradient id="grid-fade" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(6, 78, 59, 0)" />
            <stop offset="50%" stopColor="rgba(6, 78, 59, 0.2)" />
            <stop offset="100%" stopColor="rgba(6, 78, 59, 0)" />
          </linearGradient>
          <filter id="glow-wire" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Perspective Grid (Floor/Ceiling hint) */}
        <path d="M0 900 L600 450 M1440 900 L840 450" stroke="url(#grid-fade)" strokeWidth="1" />
        <path d="M0 0 L600 450 M1440 0 L840 450" stroke="url(#grid-fade)" strokeWidth="1" />

        {/* Complex Circuit Traces - Background Layer (Dense) */}
        <g stroke="rgba(52, 211, 153, 0.05)" strokeWidth="0.5">
          {/* Left Cluster */}
          <path d="M0 800 C200 800 300 700 400 600 S600 400 800 400" />
          <path d="M0 750 C150 750 250 650 350 550 S550 350 750 350" />
          <path d="M0 700 C100 700 200 600 300 500 S500 300 700 300" />
          <path d="M0 650 C50 650 150 550 250 450 S450 250 650 250" />

          {/* Right Cluster */}
          <path d="M1440 800 C1240 800 1140 700 1040 600 S840 400 640 400" />
          <path d="M1440 750 C1290 750 1190 650 1090 550 S890 350 690 350" />
          <path d="M1440 700 C1340 700 1240 600 1140 500 S940 300 740 300" />
          <path d="M1440 650 C1390 650 1290 550 1190 450 S990 250 790 250" />
        </g>

        {/* Mid-Ground Connections (Brighter) */}
        <g stroke="rgba(16, 185, 129, 0.15)" strokeWidth="1">
          <path d="M-100 850 C300 850 500 600 720 450" />
          <path d="M1540 850 C1140 850 940 600 720 450" />
          <path d="M720 450 L720 0" strokeDasharray="10 10" opacity="0.5" />
        </g>

        {/* Hero Wires - Foreground (Glowing) */}
        <g filter="url(#glow-wire)">
          <path
            d="M-200 600 Q 400 600 720 450 T 1640 300"
            stroke="url(#wire-gradient)"
            strokeWidth="2"
            fill="none"
            opacity="0.8"
          >
            <animate attributeName="stroke-dashoffset" from="1000" to="0" dur="20s" repeatCount="indefinite" />
          </path>
          <path
            d="M1640 600 Q 1040 600 720 450 T -200 300"
            stroke="url(#wire-gradient)"
            strokeWidth="2"
            fill="none"
            opacity="0.6"
          />
        </g>

        {/* Floating Data Nodes */}
        <circle cx="10%" cy="70%" r="2" fill="#10b981" opacity="0.4">
          <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="90%" cy="30%" r="2" fill="#10b981" opacity="0.4">
          <animate attributeName="opacity" values="0.4;0.8;0.4" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="20%" cy="20%" r="1.5" fill="#34d399" opacity="0.3" />
        <circle cx="80%" cy="80%" r="1.5" fill="#34d399" opacity="0.3" />

      </svg>
    </div>
  );
};
