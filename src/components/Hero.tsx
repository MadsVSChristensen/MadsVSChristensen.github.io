"use client";

import React from "react";
import { CyberTree } from "@/components/ui/CyberTree";
import { HexagonContainer } from "@/components/ui/HexagonContainer";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden">
      {/* Background Elements specific to Hero */}
      <CyberTree />

      <div className="relative z-10 text-center space-y-8 max-w-5xl px-4">
        <div className="flex flex-col items-center animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/30 border border-emerald-500/30 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400 font-mono text-xs tracking-[0.2em] uppercase">
              System Online
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white glow-text mb-2">
            MADS CHRISTENSEN
          </h1>
          <p className="text-emerald-400 font-mono text-sm md:text-base tracking-[0.5em] uppercase opacity-80">
            Software Engineer & Digital Architect
          </p>
        </div>

        <p className="text-lg md:text-xl text-emerald-100/70 max-w-2xl mx-auto font-light leading-relaxed">
          Building high-fidelity digital experiences at the intersection of
          <span className="text-emerald-300 font-medium"> design</span> and
          <span className="text-emerald-300 font-medium"> engineering</span>.
        </p>

        <div className="pt-8 flex flex-col md:flex-row justify-center gap-6 items-center">
          <button className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
            <div className="relative px-8 py-4 bg-emerald-950/50 ring-1 ring-emerald-500/50 rounded-lg leading-none flex items-center space-x-2">
              <span className="text-emerald-100 font-mono text-sm tracking-wider group-hover:text-white transition-colors">
                INITIALIZE_CONTACT
              </span>
            </div>
          </button>

          <button className="px-8 py-4 rounded-lg border border-emerald-500/20 hover:border-emerald-500/50 hover:bg-emerald-900/20 text-emerald-400/80 hover:text-emerald-300 font-mono text-sm tracking-wider transition-all duration-300">
            VIEW_LOGS
          </button>
        </div>

        {/* Tech Decorators */}
        <div className="absolute top-1/2 left-10 hidden lg:block">
          <HexagonContainer className="w-16 h-16" glow>
            <span className="text-xs font-mono text-emerald-500">JS</span>
          </HexagonContainer>
        </div>
        <div className="absolute top-2/3 right-10 hidden lg:block">
          <HexagonContainer className="w-16 h-16" glow>
            <span className="text-xs font-mono text-emerald-500">TS</span>
          </HexagonContainer>
        </div>
      </div>
    </section>
  );
};
