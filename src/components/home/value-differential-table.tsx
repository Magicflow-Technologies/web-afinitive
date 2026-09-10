"use client";

import Image from "next/image";
import { type CSSProperties } from "react";

import { useScrollReveal } from "@/components/ui/scroll-reveal";
import { valueDifferentiators } from "@/data/value-differentiators";

type ValueDifferentialTableProps = {
  hasLogo: boolean;
};

function AspectIcon({ aspect }: { aspect: string }) {
  const commonProps = {
    "aria-hidden": true,
    className: "value-differential-aspect-icon",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.6,
    viewBox: "0 0 24 24",
  };

  if (aspect === "Transparencia") {
    return (
      <svg {...commonProps}>
        <path d="M3.5 12s3.1-5 8.5-5 8.5 5 8.5 5-3.1 5-8.5 5-8.5-5-8.5-5Z" />
        <circle cx="12" cy="12" r="2.25" />
      </svg>
    );
  }

  if (aspect === "Conflicto de Interés" || aspect === "Conflicto de interés") {
    return (
      <svg {...commonProps}>
        <path d="M12 4v16M6 7.5h12M6.5 7.5 4 17h5l-2.5-9.5ZM17.5 7.5 15 17h5l-2.5-9.5Z" />
      </svg>
    );
  }

  if (aspect === "Diseño de Solución" || aspect === "Diseño de solución") {
    return (
      <svg {...commonProps}>
        <path d="M5 5.5h9.5v9.5H5zM14.5 14.5H19V19h-4.5zM14.5 10.25H19M10.25 14.5V19" />
      </svg>
    );
  }

  if (aspect === "Acompañamiento") {
    return (
      <svg {...commonProps}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <path d="M7 4.5h7l3 3v12H7z" />
      <path d="M14 4.5v3h3M9.5 12l1.5 1.5 3.5-3.5" />
    </svg>
  );
}

function AfinitiveHeading({ hasLogo }: ValueDifferentialTableProps) {
  return (
    <div className="flex items-center justify-center gap-3">
      {hasLogo ? (
        <Image
          src="/images/logo-afinitive-transparent.png"
          alt="Afinitive"
          width={84}
          height={34}
          className="h-auto w-[84px] brightness-0 invert"
        />
      ) : (
        <span className="font-serif text-xl font-bold tracking-tight text-white">
          Afinitive
        </span>
      )}
      <span className="rounded-full bg-white/20 px-2.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-widest text-white backdrop-blur-xs">
        Nuestra Propuesta
      </span>
    </div>
  );
}

export function ValueDifferentialTable({
  hasLogo,
}: ValueDifferentialTableProps) {
  const { isRevealed, revealRef: sectionRef } = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      aria-labelledby="value-differential-title"
      data-revealed={isRevealed}
      data-visible={isRevealed}
      className="value-differential-reveal scroll-reveal scroll-reveal--fade-right overflow-hidden bg-background"
    >
      <div className="mx-auto flex w-full max-w-[88rem] flex-col gap-6 px-5 py-10 sm:px-8 sm:py-12 lg:gap-8 lg:px-12 lg:py-14">
        <div className="flex max-w-4xl flex-col gap-4">
          <span className="h-px w-16 bg-accent-muted/55" aria-hidden="true" />
          <h2
            id="value-differential-title"
            className="text-4xl leading-tight text-foreground sm:text-[2.7rem] lg:text-[3rem]"
          >
            El valor diferencial
          </h2>
          <p className="text-base leading-relaxed text-muted sm:text-[1.05rem]">
            Una comparación objetiva entre el modelo independiente y a medida de
            Afinitive frente a las soluciones estandarizadas de la banca y el
            mercado tradicional.
          </p>
        </div>

        {/* Desktop Comparison Table */}
        <div className="hidden overflow-hidden rounded-[1.65rem] border border-border-soft/80 bg-surface shadow-md lg:block">
          <table className="value-differential-comparison w-full border-collapse">
            <thead>
              <tr>
                <th scope="col" className="value-differential-aspect-header w-[26%] bg-surface-soft/80 p-5 text-left text-xs font-bold uppercase tracking-wider text-muted">
                  Aspecto Evaluado
                </th>
                <th scope="col" className="value-differential-brand-header relative w-[42%] bg-brand p-5 text-center text-white shadow-inner">
                  <AfinitiveHeading hasLogo={hasLogo} />
                </th>
                <th scope="col" className="value-differential-traditional-header w-[32%] bg-surface-soft/80 p-5 text-left text-xs font-bold uppercase tracking-wider text-muted">
                  Oferta Masiva & Mercado Tradicional
                </th>
              </tr>
            </thead>
            <tbody>
              {valueDifferentiators.map((item, index) => (
                <tr
                  key={item.aspect}
                  className="value-differential-row value-differential-comparison-row group border-b border-border-soft/60 last:border-b-0"
                  style={
                    {
                      "--value-row-delay": `${index * 90}ms`,
                    } as CSSProperties
                  }
                >
                  <th scope="row" className="value-differential-aspect-cell bg-surface-soft/40 p-6 text-left font-serif text-base font-semibold text-foreground">
                    <span className="flex items-center gap-3">
                      <AspectIcon aspect={item.aspect} />
                      <span>{item.aspect}</span>
                    </span>
                  </th>
                  {/* Dominant Hero Column for Afinitive */}
                  <td className="value-differential-brand-cell relative bg-brand/5 p-6 border-x-2 border-brand/30 shadow-xs">
                    <span className="flex items-start gap-3.5 text-foreground font-semibold text-[1.02rem] leading-relaxed">
                      <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-brand text-white text-xs font-bold shadow-xs">
                        ✓
                      </span>
                      <span>{item.afinitive}</span>
                    </span>
                  </td>
                  {/* Muted Column for Traditional */}
                  <td className="value-differential-traditional-cell bg-surface/30 p-6 text-muted text-sm leading-relaxed">
                    <span className="flex items-start gap-3.5 text-stone-600">
                      <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-stone-200 text-stone-500 text-xs font-bold">
                        ✕
                      </span>
                      <span>{item.traditional}</span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View Cards with VS Badge */}
        <div className="grid gap-6 lg:hidden">
          {valueDifferentiators.map((item, index) => (
            <article
              key={item.aspect}
              className="value-differential-row value-differential-mobile-card overflow-hidden rounded-2xl border border-border-soft bg-surface shadow-sm"
              style={
                {
                  "--value-row-delay": `${index * 90}ms`,
                } as CSSProperties
              }
            >
              <header className="flex items-center gap-3 border-b border-border-soft/80 bg-surface-soft p-4">
                <AspectIcon aspect={item.aspect} />
                <h3 className="font-serif text-lg font-bold text-foreground">
                  {item.aspect}
                </h3>
              </header>

              <div className="flex flex-col gap-4 p-5">
                {/* Afinitive Featured Block */}
                <div className="rounded-xl border border-brand/40 bg-brand/5 p-4 shadow-xs">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="font-serif text-sm font-bold text-brand uppercase tracking-wider">
                      Afinitive
                    </span>
                    <span className="rounded-full bg-brand text-white px-2 py-0.5 text-[0.65rem] font-bold uppercase">
                      ✓ Ventaja
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-foreground leading-relaxed">
                    {item.afinitive}
                  </p>
                </div>

                {/* VS Badge */}
                <div className="flex items-center justify-center -my-2 z-10">
                  <span className="rounded-full border border-border-soft bg-surface px-3 py-0.5 text-[0.7rem] font-black uppercase text-muted shadow-xs">
                    VS
                  </span>
                </div>

                {/* Traditional Block */}
                <div className="rounded-xl border border-border-soft/60 bg-surface-soft/50 p-4">
                  <span className="mb-2 block text-xs font-semibold text-stone-500 uppercase tracking-wider">
                    Mercado Tradicional
                  </span>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {item.traditional}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

