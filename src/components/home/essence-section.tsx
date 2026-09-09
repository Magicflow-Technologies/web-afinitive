"use client";

import { useScrollReveal } from "@/components/ui/scroll-reveal";

type Principle = {
  id: string;
  title: string;
  text: string;
};

const principles: Principle[] = [
  {
    id: "independencia",
    title: "Independencia",
    text: "Fundamentada en nuestro objetivo de generar mayores ingresos a partir de la optimización de patrimonios y ausencia de productos con marca propia. Esto refuerza la independencia de criterio fundamental.",
  },
  {
    id: "largo-plazo",
    title: "Pensamiento de largo plazo",
    text: "Pensar a largo plazo, sobre la base de una relación duradera y el cumplimiento de las necesidades y objetivos de largo plazo de nuestros clientes y su legado.",
  },
  {
    id: "responsabilidad",
    title: "Responsabilidad",
    text: "Nuestra formación académica y especialización nos permite brindar un servicio objetivo, profesional e integral, diseñado para acompañar los objetivos de nuestros clientes.",
  },
];

function PrincipleIcon({ id }: { id: string }) {
  if (id === "independencia") {
    return (
      <svg
        aria-hidden="true"
        className="h-8 w-8 text-[#8b5149] transition-transform duration-300 group-hover:scale-110"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Balanza de independencia y objetividad patrimonial */}
        <path d="M12 3v17M6 7.5h12M6.5 7.5 4 15h5l-2.5-7.5ZM17.5 7.5 15 15h5l-2.5-7.5ZM9 20h6" />
        <circle cx="12" cy="4.5" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (id === "largo-plazo") {
    return (
      <svg
        aria-hidden="true"
        className="h-8 w-8 text-[#8b5149] transition-transform duration-300 group-hover:scale-110"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Reloj de arena y horizonte de tiempo duradero */}
        <path d="M6 3h12M6 21h12M7 3v3a5 5 0 0 0 3 4.5 5 5 0 0 0-3 4.5v3M17 3v3a5 5 0 0 1-3 4.5 5 5 0 0 1 3 4.5v3" />
        <path d="M10 17.5h4" strokeWidth="1.8" />
      </svg>
    );
  }

  // Responsabilidad (Formación académica y especialización profesional)
  return (
    <svg
      aria-hidden="true"
      className="h-8 w-8 text-[#8b5149] transition-transform duration-300 group-hover:scale-110"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Birrete académico y respaldo profesional */}
      <path d="M12 3L2 8l10 5 10-5-10-5z" />
      <path d="M6 10v6c0 2 3 3.5 6 3.5s6-1.5 6-3.5v-6" />
      <path d="M22 8v7.5" />
      <circle cx="22" cy="16" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

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
              key={principle.id}
              className="scroll-reveal-stagger group flex flex-col gap-5 border-t border-border-soft/80 pt-6"
            >
              <div className="flex items-center">
                <PrincipleIcon id={principle.id} />
              </div>
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
