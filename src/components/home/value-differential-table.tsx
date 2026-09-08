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

  if (aspect === "Conflicto de interés") {
    return (
      <svg {...commonProps}>
        <path d="M12 4v16M6 7.5h12M6.5 7.5 4 17h5l-2.5-9.5ZM17.5 7.5 15 17h5l-2.5-9.5Z" />
      </svg>
    );
  }

  if (aspect === "Diseño de solución") {
    return (
      <svg {...commonProps}>
        <path d="M5 5.5h9.5v9.5H5zM14.5 14.5H19V19h-4.5zM14.5 10.25H19M10.25 14.5V19" />
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
    <span className="value-differential-brand-heading">
      <svg
        aria-hidden="true"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
      >
        <path d="m5 12 4.2 4.2L19 6.5" />
      </svg>
      {hasLogo ? (
        <Image
          src="/images/logo-afinitive-transparent.png"
          alt="Afinitive"
          width={76}
          height={31}
          className="h-auto w-[76px] brightness-0"
        />
      ) : (
        <span>Afinitive</span>
      )}
    </span>
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
      <div className="mx-auto flex w-full max-w-[88rem] flex-col gap-10 px-5 py-20 sm:px-8 sm:py-24 lg:gap-12 lg:px-12 lg:py-28">
        <div className="flex flex-col gap-6">
          <span className="h-px w-16 bg-accent-muted/55" aria-hidden="true" />
          <h2
            id="value-differential-title"
            className="text-4xl leading-tight text-foreground sm:text-[2.7rem] lg:text-[3rem]"
          >
            El valor diferencial
          </h2>
        </div>

        <div className="hidden overflow-hidden rounded-[1.65rem] border border-border-soft/80 bg-surface-soft lg:block">
          <table className="value-differential-comparison w-full border-collapse">
            <thead>
              <tr>
                <th scope="col" className="value-differential-aspect-header">
                  Aspecto
                </th>
                <th scope="col" className="value-differential-brand-header">
                  <AfinitiveHeading hasLogo={hasLogo} />
                </th>
                <th scope="col" className="value-differential-traditional-header">
                  Oferta masiva y tradicional
                </th>
              </tr>
            </thead>
            <tbody>
              {valueDifferentiators.map((item, index) => (
                <tr
                  key={item.aspect}
                  className="value-differential-row value-differential-comparison-row"
                  style={
                    {
                      "--value-row-delay": `${index * 100}ms`,
                    } as CSSProperties
                  }
                >
                  <th scope="row" className="value-differential-aspect-cell">
                    <span className="value-differential-aspect-label">
                      <AspectIcon aspect={item.aspect} />
                      <span>{item.aspect}</span>
                    </span>
                  </th>
                  <td className="value-differential-brand-cell">
                    <span className="value-differential-brand-response">
                      <svg
                        aria-hidden="true"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.7"
                        viewBox="0 0 24 24"
                      >
                        <path d="m5 12 4.2 4.2L19 6.5" />
                      </svg>
                      <span>{item.afinitive}</span>
                    </span>
                  </td>
                  <td className="value-differential-traditional-cell">
                    {item.traditional}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid gap-5 lg:hidden">
          {valueDifferentiators.map((item, index) => (
            <article
              key={item.aspect}
              className="value-differential-row value-differential-mobile-card overflow-hidden rounded-[1.35rem] border border-border-soft/80 bg-surface"
              style={
                {
                  "--value-row-delay": `${index * 100}ms`,
                } as CSSProperties
              }
            >
              <header className="value-differential-mobile-aspect">
                <AspectIcon aspect={item.aspect} />
                <h3>{item.aspect}</h3>
              </header>
              <div className="value-differential-mobile-brand">
                <p>Afinitive</p>
                <div className="value-differential-brand-response">
                  <svg
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.7"
                    viewBox="0 0 24 24"
                  >
                    <path d="m5 12 4.2 4.2L19 6.5" />
                  </svg>
                  <span>{item.afinitive}</span>
                </div>
              </div>
              <div className="value-differential-mobile-traditional">
                <p>Oferta masiva y tradicional</p>
                <span>{item.traditional}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
