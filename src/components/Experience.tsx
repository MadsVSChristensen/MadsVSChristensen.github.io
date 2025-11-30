'use client';

export default function Experience() {
  const projects = [
    {
      title: 'ECO-SYNTH ANLAYZER',
      description:
        "You've ip dplbin rhaeruposruipes. Tretat sri apevem cimst luuic sidicis dekm strieruim coine dislamst Qos disalumnger par quia enu praesipio.",
      buttonText: 'Research More',
    },
    {
      title: 'NEURAL HARVEST PLATFORM',
      description:
        'Vir tirust que fam loi depuly aiust Tov seveni clusiat vi cama lonain hare difenist is istro manezianure iesipo asvhoaram cuvvidula.',
      buttonText: 'Install Hardware',
    },
    {
      title: "FOREST'S EDGE FORGE AI",
      description:
        'Vir limur poriutas si corpingat Tov seveni clusiat vi lorempsum qnecesariat laed iment euna expius quis cani escium nuevni pristquis.',
      buttonText: 'Activate Fusion',
    },
  ];

  return (
    <section id="projects" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg border border-emerald-500/30 bg-gradient-to-br from-emerald-950/40 to-emerald-900/20 p-6 backdrop-blur-sm transition-all hover:border-emerald-400/50 hover:shadow-lg hover:shadow-emerald-500/20"
            >
              {/* Icon placeholder */}
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/20">
                <div className="h-6 w-6 rounded-full bg-emerald-400/50" />
              </div>

              {/* Expand icon (top right) */}
              <div className="absolute right-4 top-4 text-emerald-400/50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                  />
                </svg>
              </div>

              {/* Title */}
              <h3 className="mb-3 text-lg font-bold text-emerald-400">{project.title}</h3>

              {/* Description */}
              <p className="mb-6 text-sm leading-relaxed text-emerald-100/70">
                {project.description}
              </p>

              {/* Button */}
              <button className="rounded border border-emerald-500/50 bg-emerald-500/10 px-4 py-2 text-xs font-medium text-emerald-400 transition-all hover:bg-emerald-500/20 hover:border-emerald-400">
                {project.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
