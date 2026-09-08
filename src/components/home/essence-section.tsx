"use client";

import { useScrollReveal } from "@/components/ui/scroll-reveal";

type Principle = {
  number: string;
  title: string;
  text: string;
};

const principles: Principle[] = [
  {
    number: "01",
    title: "Independencia",
    text: "Fundamentada en nuestro objetivo de generar mayores ingresos a partir de la optimización de patrimonios y ausencia de productos con marca propia. Esto refuerza la independencia de criterio fundamental.",
  },
  {
    number: "02",
    title: "Pensamiento de largo plazo",
    text: "Pensar a largo plazo, sobre la base de una relación duradera y el cumplimiento de las necesidades y objetivos de largo plazo de nuestros clientes y su legado.",
  },
  {
    number: "03",
    title: "Responsabilidad",
    text: "Nuestra formación académica y especialización nos permite brindar un servicio objetivo, profesional e integral, diseñado para acompañar los objetivos de nuestros clientes.",
  },
];

export function EssenceSection() {
  const { isRevealed, revealRef: sectionRef } = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      aria-labelledby="essence-title"
      data-revealed={isRevealed}
      data-visible={isRevealed}
      className="essence-reveal scroll-reveal overflow-hidden bg-background"
    >
      <div className="mx-auto flex w-full max-w-[88rem] flex-col gap-8 px-5 py-10 sm:px-8 sm:py-12 lg:gap-10 lg:px-12 lg:py-14">
        <div className="scroll-reveal-stagger flex max-w-3xl flex-col gap-6">
          <span className="h-px w-16 bg-accent-muted/55" aria-hidden="true" />
          <h2
            id="essence-title"
            className="text-3xl leading-tight text-foreground sm:text-[2.45rem]"
          >
            Nuestra Esencia
          </h2>
          <p className="text-base leading-8 text-muted sm:text-[1.05rem]">
            Brindar un servicio profesional y de calidad, eligiendo los mejores
            proveedores del mercado, con soluciones a medida, altamente
            eficientes, bajo una disciplina institucional y con la flexibilidad
            de una boutique de inversiones.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 lg:gap-10">
          {principles.map((principle) => (
            <article
              key={principle.number}
              className="scroll-reveal-stagger flex flex-col gap-5 border-t border-border-soft/80 pt-6"
            >
              <span className="text-[0.72rem] tracking-[0.28em] text-muted">
                {principle.number}
              </span>
              <h3 className="max-w-xs text-[1.65rem] leading-tight text-foreground">
                {principle.title}
              </h3>
              <p className="text-sm leading-7 text-muted sm:text-[0.98rem]">
                {principle.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
