"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * The signature mark: a bioluminescent "data-tree" — canopy as a node
 * graph, roots as circuit traces. Pure inline SVG, theme-driven, no
 * binary asset. Decorative (aria-hidden); gentle pulse honours
 * prefers-reduced-motion.
 */

type Node = { cx: number; cy: number; r: number };

const canopy: Node[] = [
  { cx: 200, cy: 70, r: 13 },
  { cx: 140, cy: 110, r: 9 },
  { cx: 262, cy: 104, r: 10 },
  { cx: 104, cy: 158, r: 7 },
  { cx: 300, cy: 150, r: 8 },
  { cx: 168, cy: 150, r: 6 },
  { cx: 236, cy: 156, r: 7 },
  { cx: 200, cy: 124, r: 6 },
];

const branches: [number, number][] = [
  [0, 1],
  [0, 2],
  [0, 7],
  [1, 3],
  [1, 5],
  [2, 4],
  [2, 6],
  [7, 5],
  [7, 6],
];

const roots =
  "M200 196 L200 300 M200 240 L150 290 L150 320 M200 240 L252 288 L252 322 " +
  "M200 300 L168 340 M200 300 L236 340";

const rootPads: [number, number][] = [
  [150, 320],
  [252, 322],
  [168, 340],
  [236, 340],
  [200, 300],
];

export default function TreeMark({ className }: { className?: string }) {
  const reduce = useReducedMotion();

  return (
    <svg
      viewBox="0 0 400 360"
      className={className}
      role="img"
      aria-hidden="true"
      fill="none"
    >
      <defs>
        <linearGradient id="trunk" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-emerald-bright)" />
          <stop offset="100%" stopColor="var(--color-emerald)" />
        </linearGradient>
        <filter id="glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="6" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Ambient halo */}
      <motion.ellipse
        cx="200"
        cy="150"
        rx="150"
        ry="130"
        fill="var(--color-emerald)"
        opacity={0.06}
        animate={reduce ? undefined : { opacity: [0.05, 0.11, 0.05] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Trunk + roots */}
      <path
        d="M200 196 C 196 170 196 150 200 124"
        stroke="url(#trunk)"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d={roots}
        stroke="var(--color-emerald)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.65"
      />
      {rootPads.map(([x, y], i) => (
        <rect
          key={`pad-${i}`}
          x={x - 3.5}
          y={y - 3.5}
          width="7"
          height="7"
          rx="1"
          fill="var(--color-emerald)"
          opacity="0.7"
        />
      ))}

      {/* Branches */}
      <g stroke="var(--color-emerald)" strokeWidth="2" opacity="0.55">
        {branches.map(([a, b], i) => (
          <line
            key={`br-${i}`}
            x1={canopy[a].cx}
            y1={canopy[a].cy}
            x2={canopy[b].cx}
            y2={canopy[b].cy}
          />
        ))}
      </g>

      {/* Canopy nodes — staggered twinkle */}
      <g filter="url(#glow)">
        {canopy.map((n, i) => (
          <motion.circle
            key={`node-${i}`}
            cx={n.cx}
            cy={n.cy}
            r={n.r}
            fill="var(--color-emerald-bright)"
            initial={false}
            animate={
              reduce
                ? undefined
                : { opacity: [0.55, 1, 0.55], scale: [0.94, 1, 0.94] }
            }
            style={{ transformOrigin: `${n.cx}px ${n.cy}px` }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          />
        ))}
      </g>
    </svg>
  );
}
