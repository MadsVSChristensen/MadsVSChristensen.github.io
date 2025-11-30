"use client";

import React from "react";
import { Shield, Gem, Mail, Cpu, Globe, Zap } from "lucide-react";

export const CyberTree = () => {
  return (
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[1200px] h-[900px] pointer-events-none z-0">
      <svg
        viewBox="0 0 1200 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full"
      >
        <defs>
          <linearGradient id="tree-glow" x1="0.5" y1="1" x2="0.5" y2="0">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#34d399" />
          </linearGradient>
          <filter id="neon-bloom" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* --- MANUAL TREE CONSTRUCTION --- */}

        {/* 1. Thick Trunk Base */}
        <path
          d="M600 900 
             Q 550 850 580 750 
             Q 590 700 600 600 
             Q 610 700 620 750 
             Q 650 850 600 900 Z"
          fill="url(#tree-glow)"
          filter="url(#neon-bloom)"
          opacity="0.9"
        />

        {/* 2. Symmetrical Branches */}
        <g stroke="url(#tree-glow)" strokeWidth="8" strokeLinecap="round" filter="url(#neon-bloom)" opacity="0.9">
          {/* Center Up */}
          <path d="M600 600 Q 600 500 600 350" />

          {/* Inner Pair */}
          <path d="M600 550 Q 550 450 500 350" />
          <path d="M600 550 Q 650 450 700 350" />

          {/* Mid Pair */}
          <path d="M600 600 Q 500 500 400 400" />
          <path d="M600 600 Q 700 500 800 400" />

          {/* Outer Pair */}
          <path d="M600 650 Q 450 550 350 450" />
          <path d="M600 650 Q 750 550 850 450" />
        </g>

        {/* 3. Leaf-Like Nodes (The "Fan" Pattern) */}
        <g fill="#ecfdf5" filter="url(#neon-bloom)">
          {/* Define a Leaf Shape to reuse via <use> if we were using symbols, but direct paths for now for control */}

          {/* Top Cluster */}
          <path d="M600 350 Q 590 330 600 310 Q 610 330 600 350" />
          <path d="M580 360 Q 560 340 550 320 Q 570 330 580 360" />
          <path d="M620 360 Q 640 340 650 320 Q 630 330 620 360" />

          {/* Left Branch Clusters */}
          <g transform="translate(500, 350) rotate(-20)">
            <path d="M0 0 Q -10 -20 0 -40 Q 10 -20 0 0" />
            <path d="M-20 10 Q -40 -10 -50 -30 Q -30 -10 -20 10" />
            <path d="M20 10 Q 40 -10 50 -30 Q 30 -10 20 10" />
          </g>
          <g transform="translate(400, 400) rotate(-40)">
            <path d="M0 0 Q -10 -20 0 -40 Q 10 -20 0 0" />
            <path d="M-20 10 Q -40 -10 -50 -30 Q -30 -10 -20 10" />
            <path d="M20 10 Q 40 -10 50 -30 Q 30 -10 20 10" />
          </g>
          <g transform="translate(350, 450) rotate(-60)">
            <path d="M0 0 Q -10 -20 0 -40 Q 10 -20 0 0" />
            <path d="M-20 10 Q -40 -10 -50 -30 Q -30 -10 -20 10" />
            <path d="M20 10 Q 40 -10 50 -30 Q 30 -10 20 10" />
          </g>

          {/* Right Branch Clusters (Mirrored) */}
          <g transform="translate(700, 350) rotate(20)">
            <path d="M0 0 Q -10 -20 0 -40 Q 10 -20 0 0" />
            <path d="M-20 10 Q -40 -10 -50 -30 Q -30 -10 -20 10" />
            <path d="M20 10 Q 40 -10 50 -30 Q 30 -10 20 10" />
          </g>
          <g transform="translate(800, 400) rotate(40)">
            <path d="M0 0 Q -10 -20 0 -40 Q 10 -20 0 0" />
            <path d="M-20 10 Q -40 -10 -50 -30 Q -30 -10 -20 10" />
            <path d="M20 10 Q 40 -10 50 -30 Q 30 -10 20 10" />
          </g>
          <g transform="translate(850, 450) rotate(60)">
            <path d="M0 0 Q -10 -20 0 -40 Q 10 -20 0 0" />
            <path d="M-20 10 Q -40 -10 -50 -30 Q -30 -10 -20 10" />
            <path d="M20 10 Q 40 -10 50 -30 Q 30 -10 20 10" />
          </g>
        </g>

        {/* --- CONNECTORS & ICONS (Adjusted to fit new tree) --- */}

        <defs>
          <filter id="glow-connector" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Left Side Connectors */}
        <g stroke="#10b981" strokeWidth="1.5" opacity="0.7">
          {/* Far Left Node (Mail) */}
          <path d="M300 620 L350 620 L450 700" />
          <circle cx="300" cy="620" r="3" fill="#10b981" />

          {/* Mid Left Node (Globe) */}
          <path d="M350 520 L420 520 L480 580" />
          <circle cx="350" cy="520" r="3" fill="#10b981" />

          {/* Top Left Node (Cpu) */}
          <path d="M300 420 L380 420 L450 480" />
          <circle cx="300" cy="420" r="3" fill="#10b981" />
        </g>

        {/* Right Side Connectors */}
        <g stroke="#10b981" strokeWidth="1.5" opacity="0.7">
          {/* Far Right Node (Gem) */}
          <path d="M900 620 L850 620 L750 700" />
          <circle cx="900" cy="620" r="3" fill="#10b981" />

          {/* Mid Right Node (Zap) */}
          <path d="M850 520 L780 520 L720 580" />
          <circle cx="850" cy="520" r="3" fill="#10b981" />

          {/* Top Right Node (Shield) */}
          <path d="M900 420 L820 420 L750 480" />
          <circle cx="900" cy="420" r="3" fill="#10b981" />
        </g>

        {/* Data Lines under the tree */}
        <path d="M450 850 L750 850" stroke="#34d399" strokeWidth="1" strokeDasharray="20 10" opacity="0.5" />
        <path d="M500 870 L700 870" stroke="#34d399" strokeWidth="1" strokeDasharray="10 5" opacity="0.3" />

      </svg>

      {/* 3. HTML/React Icons Overlay (Positioned absolutely to match SVG nodes) */}
      {/* Left Icons */}
      <div className="absolute top-[390px] left-[270px] p-3 border border-emerald-500/30 bg-emerald-950/40 rounded-lg backdrop-blur-sm animate-pulse-slow">
        <Cpu className="w-6 h-6 text-emerald-400" />
      </div>
      <div className="absolute top-[490px] left-[320px] p-3 border border-emerald-500/30 bg-emerald-950/40 rounded-full backdrop-blur-sm">
        <Globe className="w-6 h-6 text-emerald-400" />
      </div>
      <div className="absolute top-[590px] left-[270px] p-3 border border-emerald-500/30 bg-emerald-950/40 rounded-lg backdrop-blur-sm">
        <Mail className="w-6 h-6 text-emerald-400" />
      </div>

      {/* Right Icons */}
      <div className="absolute top-[390px] right-[270px] p-3 border border-emerald-500/30 bg-emerald-950/40 rounded-lg backdrop-blur-sm animate-pulse-slow">
        <Shield className="w-6 h-6 text-emerald-400" />
      </div>
      <div className="absolute top-[490px] right-[320px] p-3 border border-emerald-500/30 bg-emerald-950/40 rounded-full backdrop-blur-sm">
        <Zap className="w-6 h-6 text-emerald-400" />
      </div>
      <div className="absolute top-[590px] right-[270px] p-3 border border-emerald-500/30 bg-emerald-950/40 rounded-lg backdrop-blur-sm">
        <Gem className="w-6 h-6 text-emerald-400" />
      </div>

    </div>
  );
};
