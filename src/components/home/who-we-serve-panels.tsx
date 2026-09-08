"use client";

import Image from "next/image";
import { useScrollReveal } from "@/components/ui/scroll-reveal";
import type { ClientGroup } from "@/data/client-groups";

type ClientGroupWithAsset = ClientGroup & {
  hasImage: boolean;
};

type WhoWeServePanelsProps = {
  groups: ClientGroupWithAsset[];
};

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
      <div className="mx-auto flex w-full max-w-[88rem] flex-col gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:gap-14 lg:px-12 lg:py-28">
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
              className="scroll-reveal-stagger group relative flex min-h-[25rem] overflow-hidden rounded-[2rem] border border-border-soft/70 bg-surface [--text-charcoal:#f7fbfd] [--text-muted:#d4e5ee] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-muted sm:min-h-[29rem]"
            >
              {group.hasImage ? (
                <Image
                  src={group.imageSrc}
                  alt={group.alt}
                  fill
                  sizes="(min-width: 1024px) 30vw, 100vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03] group-focus-visible:scale-[1.03]"
                />
              ) : (
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(143,203,217,0.18),transparent_34%),linear-gradient(135deg,rgba(247,251,253,0.2)_0%,rgba(247,251,253,0.06)_44%,rgba(247,251,253,0)_100%),repeating-linear-gradient(180deg,rgba(4,35,53,0.14)_0,rgba(4,35,53,0.14)_1px,transparent_1px,transparent_14px)]" />
              )}

              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,82,120,0.08)_0%,rgba(17,82,120,0.18)_42%,rgba(11,61,89,0.56)_100%)] transition-colors duration-500 group-hover:bg-[linear-gradient(180deg,rgba(17,82,120,0.14)_0%,rgba(17,82,120,0.28)_42%,rgba(11,61,89,0.7)_100%)] group-focus-visible:bg-[linear-gradient(180deg,rgba(17,82,120,0.14)_0%,rgba(17,82,120,0.28)_42%,rgba(11,61,89,0.7)_100%)]" />

              <div className="relative z-10 flex w-full flex-col justify-end p-7 sm:p-8">
                {!group.hasImage ? (
                  <span className="mb-4 text-[0.72rem] tracking-[0.08em] text-muted">
                    Imagen corporativa pendiente
                  </span>
                ) : null}

                <div className="flex min-h-[5.25rem] items-end justify-between gap-4 sm:min-h-[5.7rem]">
                  <h3 className="who-we-serve-panel-title max-w-[15rem] text-[1.7rem] leading-[1.2] text-foreground transition-transform duration-500 group-hover:translate-x-1 group-focus-visible:translate-x-1 sm:text-[1.9rem]">
                    {group.title}
                  </h3>
                  <span
                    aria-hidden="true"
                    className="who-we-serve-panel-arrow shrink-0 text-lg text-foreground opacity-70 transition-all duration-500 group-hover:translate-x-1 group-hover:opacity-100 group-focus-visible:translate-x-1 group-focus-visible:opacity-100"
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
