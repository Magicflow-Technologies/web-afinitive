"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollReveal } from "@/components/ui/scroll-reveal";
import { sectionNavigation } from "@/data/section-navigation";

const aboutActions = [
  {
    label: "Nuestro Equipo",
    href: sectionNavigation.equipo,
  },
  {
    label: "Con quién trabajamos",
    href: sectionNavigation.aQuienesServimos,
  },
  {
    label: "Presentación Corporativa",
    href: null,
  },
] as const;

export function AboutSection() {
  const { isRevealed, revealRef: sectionRef } = useScrollReveal<HTMLElement>({
    threshold: 0.2,
  });

  return (
    <section
      id="afinitive"
      ref={sectionRef}
      aria-labelledby="about-afinitive-title"
      data-revealed={isRevealed}
      data-visible={isRevealed}
      className="about-reveal scroll-reveal scroll-reveal--fade-left relative overflow-hidden bg-surface scroll-mt-28 sm:scroll-mt-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-12 -left-24 hidden h-[38rem] w-[38rem] opacity-[0.055] lg:block"
      >
        <Image
          src="/images/logo-afinitive-transparent.png"
          alt=""
          fill
          sizes="608px"
          className="object-contain"
        />
      </div>

      <div className="relative mx-auto grid w-full max-w-[88rem] gap-14 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.2fr)] lg:gap-20 lg:px-12 lg:py-32">
        <div className="scroll-reveal-stagger flex flex-col gap-8 lg:justify-between lg:py-5 lg:pr-8">
          <div className="flex flex-col gap-7">
            <span
              className="h-px w-20 bg-background-dark/55"
              aria-hidden="true"
            />
            <h2
              id="about-afinitive-title"
              className="max-w-md text-4xl leading-[1.02] text-foreground sm:text-5xl lg:text-[4.35rem]"
            >
              Acerca de Afinitive
            </h2>
          </div>

          <nav
            aria-label="Acciones de Acerca de Afinitive"
            className="flex flex-col gap-5 border-l border-background-dark/35 py-1 pl-5 sm:pl-6"
          >
            {/* TODO: Reemplazar estos href temporales por las rutas o URLs oficiales cuando estén definidas. */}
            {aboutActions.map((action) => (
              action.href ? (
                <Link
                  key={action.label}
                  href={action.href}
                  className="group relative inline-flex w-fit items-center gap-3 text-sm tracking-[0.08em] text-foreground focus-visible:outline-none"
                >
                  <span
                    className="absolute top-1/2 -left-6 h-px w-4 bg-border-soft transition-all duration-300 group-hover:w-6 group-hover:bg-background-dark group-focus-visible:w-6 group-focus-visible:bg-background-dark sm:-left-7"
                    aria-hidden="true"
                  />
                  <span className="transition-colors duration-300 group-hover:text-background-dark group-focus-visible:text-background-dark">
                    {action.label}
                  </span>
                  <span
                    className="translate-x-0 text-background-dark opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100 group-focus-visible:translate-x-1 group-focus-visible:opacity-100"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>
              ) : (
                <span
                  key={action.label}
                  aria-disabled="true"
                  className="relative inline-flex w-fit items-center gap-3 text-sm tracking-[0.08em] text-muted"
                >
                  <span
                    className="absolute top-1/2 -left-6 h-px w-4 bg-border-soft sm:-left-7"
                    aria-hidden="true"
                  />
                  <span>{action.label}</span>
                </span>
              )
            ))}
          </nav>
        </div>

        <div className="scroll-reveal-stagger border border-background-dark/40 bg-surface p-7 sm:p-10 lg:p-14">
          <div className="flex max-w-3xl flex-col gap-8 text-[1.05rem] leading-9 text-muted sm:text-[1.18rem] sm:leading-10">
            <p>
              Afinitive es un grupo de economistas con especializaci&oacute;n,
              formaci&oacute;n y experiencia en finanzas e inversiones.
              Brindamos asesor&iacute;a patrimonial, gesti&oacute;n de activos y
              otros servicios financieros relacionados.
            </p>
            <span className="h-px w-12 bg-border-soft" aria-hidden="true" />
            <p>
              No realizamos actividades de comercializaci&oacute;n ni trabajamos
              con productos de oferta masiva. Nuestro enfoque es ofrecer
              soluciones objetivas, independientes y alineadas con las
              necesidades de cada cliente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
