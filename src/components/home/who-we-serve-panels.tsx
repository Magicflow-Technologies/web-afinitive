"use client";

import { useScrollReveal } from "@/components/ui/scroll-reveal";
import type { ClientGroup } from "@/data/client-groups";

type WhoWeServePanelsProps = {
  groups: (ClientGroup & { hasImage?: boolean })[];
};

function MetaphoricalArt({ id }: { id: string }) {
  if (id === "personas-y-familias") {
    // Personas y familias: Piedra angular, pilar duradero y luz cenital de legado
    return (
      <svg
        className="h-full w-full text-[#8b5149] opacity-85 transition-transform duration-700 ease-out group-hover:scale-105"
        viewBox="0 0 400 500"
        fill="none"
      >
        <defs>
          <linearGradient id="bg-familias" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbf9f8" />
            <stop offset="100%" stopColor="#ede6e2" />
          </linearGradient>
          <linearGradient id="beam-familias" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8b5149" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#8b5149" stopOpacity="0.02" />
          </linearGradient>
        </defs>

        <rect width="400" height="500" fill="url(#bg-familias)" />
        
        {/* Architectural zenith rays */}
        <polygon points="120,0 280,0 360,500 40,500" fill="url(#beam-familias)" />

        {/* Minimalist Monumental Pillar / Legacy Pedestal */}
        <rect x="150" y="140" width="100" height="260" rx="3" fill="#8b5149" opacity="0.12" />
        <rect x="160" y="120" width="80" height="280" rx="2" fill="#8b5149" opacity="0.2" />
        <rect x="175" y="90" width="50" height="310" rx="1" fill="#8b5149" opacity="0.35" />

        {/* Concentric Horizon Rings of Endurance */}
        <circle cx="200" cy="220" r="110" stroke="#8b5149" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
        <circle cx="200" cy="220" r="75" stroke="#8b5149" strokeWidth="1.2" opacity="0.5" />
        <circle cx="200" cy="220" r="14" fill="#8b5149" opacity="0.85" />

        {/* Clean Ground Line */}
        <line x1="40" y1="400" x2="360" y2="400" stroke="#8b5149" strokeWidth="1.5" opacity="0.6" />
        <line x1="70" y1="412" x2="330" y2="412" stroke="#8b5149" strokeWidth="1" opacity="0.3" />

        <text x="200" y="445" textAnchor="middle" fontSize="11" letterSpacing="0.25em" fontWeight="bold" fill="#8b5149" opacity="0.8">LEGADO Y PRESERVACIÓN</text>
      </svg>
    );
  }

  if (id === "empresas-e-instituciones") {
    // Empresas e instituciones: Estructuras geométricas entrelazadas de solidez corporativa
    return (
      <svg
        className="h-full w-full text-[#4a4643] opacity-85 transition-transform duration-700 ease-out group-hover:scale-105"
        viewBox="0 0 400 500"
        fill="none"
      >
        <defs>
          <linearGradient id="bg-inst" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f7f7f7" />
            <stop offset="100%" stopColor="#e5e2df" />
          </linearGradient>
        </defs>

        <rect width="400" height="500" fill="url(#bg-inst)" />

        {/* Interlocking Monolithic Blocks */}
        <polygon points="60,380 200,450 200,210 60,140" fill="#4a4643" opacity="0.15" />
        <polygon points="200,450 340,380 340,140 200,210" fill="#4a4643" opacity="0.28" />
        <polygon points="60,140 200,70 340,140 200,210" fill="#4a4643" opacity="0.45" />

        {/* Inner High Rise Precision Grid */}
        <line x1="200" y1="70" x2="200" y2="450" stroke="#4a4643" strokeWidth="1.5" opacity="0.7" />
        <line x1="130" y1="105" x2="130" y2="415" stroke="#4a4643" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
        <line x1="270" y1="105" x2="270" y2="415" stroke="#4a4643" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />

        {/* Clean Corporate Horizon */}
        <line x1="30" y1="450" x2="370" y2="450" stroke="#4a4643" strokeWidth="1.5" opacity="0.6" />

        <text x="200" y="475" textAnchor="middle" fontSize="11" letterSpacing="0.25em" fontWeight="bold" fill="#4a4643" opacity="0.8">DISCIPLINA INSTITUCIONAL</text>
      </svg>
    );
  }

  // Family Office y gestores: Órbita global, equilibrio y visión estratégica
  return (
    <svg
      className="h-full w-full text-[#8b5149] opacity-85 transition-transform duration-700 ease-out group-hover:scale-105"
      viewBox="0 0 400 500"
      fill="none"
    >
      <defs>
        <linearGradient id="bg-fo" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fcfaf8" />
          <stop offset="100%" stopColor="#eae1dc" />
        </linearGradient>
      </defs>

      <rect width="400" height="500" fill="url(#bg-fo)" />

      {/* Global Spherical Asset Grid */}
      <circle cx="200" cy="210" r="120" stroke="#8b5149" strokeWidth="1" opacity="0.2" />
      <ellipse cx="200" cy="210" rx="120" ry="45" stroke="#8b5149" strokeWidth="1.2" opacity="0.4" />
      <ellipse cx="200" cy="210" rx="45" ry="120" stroke="#8b5149" strokeWidth="1.2" opacity="0.4" />
      <line x1="80" y1="210" x2="320" y2="210" stroke="#8b5149" strokeWidth="1" opacity="0.3" />

      {/* Balance Sphere & Foundation Fulcrum */}
      <polygon points="200,320 160,390 240,390" fill="#8b5149" opacity="0.3" />
      <line x1="120" y1="320" x2="280" y2="320" stroke="#8b5149" strokeWidth="2" opacity="0.7" />
      <circle cx="200" cy="210" r="28" fill="#8b5149" opacity="0.8" />
      <circle cx="200" cy="210" r="12" fill="#ffffff" opacity="0.9" />

      {/* Clean Horizon */}
      <line x1="40" y1="410" x2="360" y2="410" stroke="#8b5149" strokeWidth="1.5" opacity="0.6" />

      <text x="200" y="445" textAnchor="middle" fontSize="11" letterSpacing="0.25em" fontWeight="bold" fill="#8b5149" opacity="0.8">VISIÓN GLOBAL Y GOBERNANZA</text>
    </svg>
  );
}

export function WhoWeServePanels({ groups }: WhoWeServePanelsProps) {
  const { isRevealed, revealRef: sectionRef } = useScrollReveal<HTMLElement>();

  return (
    <section
      id="a-quienes-servimos"
      ref={sectionRef}
      aria-labelledby="who-we-serve-title"
      data-revealed={isRevealed}
      data-visible={isRevealed}
      className="who-we-serve-reveal scroll-reveal scroll-reveal--fade-left overflow-hidden bg-background scroll-mt-28 sm:scroll-mt-32"
    >
      <div className="mx-auto flex w-full max-w-[88rem] flex-col gap-8 px-5 py-10 sm:px-8 sm:py-12 lg:gap-10 lg:px-12 lg:py-14">
        <div className="scroll-reveal-stagger flex max-w-3xl flex-col gap-6">
          <span className="h-px w-16 bg-accent-muted/55" aria-hidden="true" />
          <h2
            id="who-we-serve-title"
            className="text-4xl leading-tight text-foreground sm:text-[2.7rem] lg:text-[3rem]"
          >
            A quiénes servimos
          </h2>
          <p className="max-w-3xl text-base leading-8 text-muted sm:text-[1.12rem] sm:leading-9">
            Afinitive atiende a patrimonios que requieren más que una oferta
            masiva; análisis profesional, proveedores de primer nivel,
            transparencia y estructuras que generen valor.
          </p>
          <p className="max-w-3xl text-base leading-8 text-muted sm:text-[1.12rem] sm:leading-9">
            Inversión eficiente y alineada con las necesidades, objetivos de
            vida y legado de nuestros clientes.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3 lg:gap-6">
          {groups.map((group) => (
            <article
              key={group.id}
              className="scroll-reveal-stagger group relative flex min-h-[25rem] flex-col justify-between overflow-hidden rounded-[2rem] border border-border-soft/80 bg-surface shadow-sm transition-all duration-300 hover:shadow-md sm:min-h-[29rem]"
            >
              {/* Artwork Container */}
              <div className="relative h-[18rem] w-full overflow-hidden sm:h-[21rem]">
                <MetaphoricalArt id={group.id} />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-90" />
              </div>

              {/* Title & Action Container */}
              <div className="relative z-10 flex w-full flex-col justify-end p-7 sm:p-8">
                <div className="flex min-h-[3.5rem] items-end justify-between gap-4">
                  <h3 className="who-we-serve-panel-title max-w-[16rem] text-[1.6rem] leading-[1.25] text-foreground transition-transform duration-500 group-hover:translate-x-1 sm:text-[1.85rem]">
                    {group.title}
                  </h3>
                  <span
                    aria-hidden="true"
                    className="who-we-serve-panel-arrow shrink-0 text-xl text-[#8b5149] transition-all duration-500 group-hover:translate-x-1.5"
                  >
                    →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
