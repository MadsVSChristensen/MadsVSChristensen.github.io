'use client';

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-20">
      {/* Circuit board pattern background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path
              d="M10 10h20M30 10v20M30 30h20M50 30v20M50 50h20"
              stroke="currentColor"
              strokeWidth="0.5"
              fill="none"
              className="text-emerald-500"
            />
            <circle cx="10" cy="10" r="2" fill="currentColor" className="text-emerald-400" />
            <circle cx="30" cy="30" r="2" fill="currentColor" className="text-emerald-400" />
            <circle cx="50" cy="50" r="2" fill="currentColor" className="text-emerald-400" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-start lg:justify-between">
          {/* Left side - Title and tagline */}
          <div className="max-w-2xl space-y-8">
            <h1 className="text-5xl font-bold tracking-tight text-emerald-400 glow-text sm:text-6xl lg:text-7xl">
              EMERALD CITY DEV
            </h1>

            <p className="text-lg font-medium text-emerald-100/90 sm:text-xl">
              BUILDING DIGITAL FUTURES,
              <br />
              ROOTED IN INNOVATION.
            </p>
          </div>

          {/* Center - Tree illustration placeholder */}
          <div className="relative flex items-center justify-center">
            <div className="relative h-64 w-64">
              {/* Glow effect */}
              <div className="absolute inset-0 animate-pulse rounded-full bg-emerald-500/20 blur-3xl" />

              {/* Simple tree icon */}
              <div className="relative flex h-full w-full items-center justify-center">
                <svg
                  viewBox="0 0 200 200"
                  className="h-full w-full text-emerald-400"
                  style={{ filter: 'drop-shadow(0 0 20px rgba(16, 185, 129, 0.6))' }}
                >
                  {/* Tree trunk */}
                  <rect x="90" y="120" width="20" height="60" fill="currentColor" />

                  {/* Tree foliage - layered triangles */}
                  <path d="M100 30 L140 90 L60 90 Z" fill="currentColor" />
                  <path d="M100 60 L150 120 L50 120 Z" fill="currentColor" />

                  {/* Decorative circles (tech nodes) */}
                  <circle cx="70" cy="100" r="4" fill="currentColor" className="animate-pulse" />
                  <circle cx="130" cy="100" r="4" fill="currentColor" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <circle cx="100" cy="50" r="4" fill="currentColor" className="animate-pulse" style={{ animationDelay: '1s' }} />
                </svg>
              </div>

              {/* Floating tech icons */}
              <div className="absolute -left-8 top-1/4 h-8 w-8 rounded-lg bg-emerald-500/20 p-1.5 backdrop-blur-sm">
                <div className="h-full w-full rounded bg-emerald-400/30" />
              </div>
              <div className="absolute -right-8 top-1/3 h-8 w-8 rounded-lg bg-emerald-500/20 p-1.5 backdrop-blur-sm">
                <div className="h-full w-full rounded bg-emerald-400/30" />
              </div>
              <div className="absolute bottom-8 left-1/4 h-8 w-8 rounded-lg bg-emerald-500/20 p-1.5 backdrop-blur-sm">
                <div className="h-full w-full rounded bg-emerald-400/30" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
