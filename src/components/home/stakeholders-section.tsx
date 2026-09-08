"use client";

import { stakeholders } from "@/data/stakeholders";
import { useScrollReveal } from "@/components/ui/scroll-reveal";
import type { Stakeholder } from "@/data/stakeholders";

type StakeholderIconProps = {
  stakeholder: Stakeholder;
};

function StakeholderIcon({ stakeholder }: StakeholderIconProps) {
  const icon = (() => {
    switch (stakeholder) {
      case "Clientes":
      case "Empleados":
      case "Directivos":
        return (
          <>
            <circle cx="12" cy="8" r="3" />
            <path d="M5 20c.7-3.3 3.1-5 7-5s6.3 1.7 7 5" />
            <path d="M4.5 10.5a2.2 2.2 0 0 0 0 4.4M19.5 10.5a2.2 2.2 0 0 1 0 4.4" />
          </>
        );
      case "Bancos":
      case "Sociedades agentes de bolsa":
        return (
          <>
            <path d="M3 9l9-5 9 5" />
            <path d="M5 10v7M9.5 10v7M14.5 10v7M19 10v7M3 20h18" />
          </>
        );
      case "Reguladores":
      case "Compañías de seguros":
        return (
          <>
            <path d="M12 3l7 3v5c0 4.6-3 7.9-7 10-4-2.1-7-5.4-7-10V6l7-3Z" />
            <path d="m9 12 2 2 4-4" />
          </>
        );
      case "Fiduciarios":
      case "Factoring":
        return (
          <>
            <path d="M7 8H5a3 3 0 0 0 0 6h2M17 8h2a3 3 0 0 1 0 6h-2M8 11h8v2H8z" />
          </>
        );
      case "Sociedades titulizadoras":
        return (
          <>
            <path d="M7 3h7l4 4v14H7z" />
            <path d="M14 3v5h5M10 12h5M10 16h5" />
          </>
        );
      case "Custodios":
        return (
          <>
            <rect x="5" y="10" width="14" height="10" rx="2" />
            <path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v2" />
          </>
        );
      case "Brokers":
      case "Agentes de bolsa":
        return (
          <>
            <path d="M4 18 10 12l4 3 6-7" />
            <path d="M15 8h5v5" />
            <path d="M4 21h16" />
          </>
        );
      case "Estudios de abogados":
        return (
          <>
            <path d="M12 4v16M7 7h10M6 7 3.5 13h5L6 7ZM18 7l-2.5 6h5L18 7ZM5 20h14" />
          </>
        );
      case "Clasificadoras de riesgo":
        return (
          <>
            <path d="M5 20V11M10 20V7M15 20v-4M20 20V4M3 20h18" />
          </>
        );
      case "Gestores de inversión":
        return (
          <>
            <circle cx="12" cy="12" r="8" />
            <path d="m15.5 8.5-2.1 4.9-4.8 2.1 2.1-4.9 4.8-2.1Z" />
          </>
        );
    }
  })();

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {icon}
    </svg>
  );
}

export function StakeholdersSection() {
  const { isRevealed, revealRef: sectionRef } = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      aria-labelledby="stakeholders-title"
      data-revealed={isRevealed}
      data-visible={isRevealed}
      className="stakeholders-reveal scroll-reveal scroll-reveal--fade-left overflow-hidden bg-surface"
    >
      <div className="mx-auto flex w-full max-w-[88rem] flex-col gap-8 px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start lg:gap-14">
          <div className="flex flex-col">
            <h2
              id="stakeholders-title"
              className="text-4xl leading-[1.05] text-foreground sm:text-[3.25rem]"
            >
              Nuestros stakeholders
            </h2>
          </div>

          <p className="max-w-3xl text-lg leading-8 text-muted sm:text-xl sm:leading-9">
            En Afinitive preservamos la transparencia, ética profesional,
            integridad y lealtad en cada relación. Trabajamos con proveedores
            regulados y especialistas que aportan soluciones sofisticadas y
            eficientes.
          </p>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stakeholders.map((stakeholder) => (
            <li key={stakeholder} className="scroll-reveal-stagger list-none">
              <article
                tabIndex={0}
                className="stakeholder-card group flex min-h-[8.5rem] items-center gap-4 rounded-[1rem] border border-border-soft/80 bg-background px-5 py-5 focus-visible:outline-none"
              >
                <span className="stakeholder-icon inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full">
                  <StakeholderIcon stakeholder={stakeholder} />
                </span>
                <div className="flex min-h-full flex-1 items-center">
                  <h3 className="text-[1.02rem] leading-7 text-foreground">
                    {stakeholder}
                  </h3>
                </div>
                <span className="stakeholder-arrow" aria-hidden="true">
                  →
                </span>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
