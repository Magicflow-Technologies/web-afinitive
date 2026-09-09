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
              className="scroll-reveal-stagger group relative flex min-h-[26rem] overflow-hidden rounded-[2rem] border border-border-soft/80 bg-surface shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-muted sm:min-h-[30rem]"
            >
              <Image
                src={group.imageSrc}
                alt={group.alt}
                fill
                sizes="(min-width: 1024px) 30vw, 100vw"
                className="object-cover object-center grayscale contrast-125 transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Dark Gradient Overlay for Crisp Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10 transition-opacity duration-500 group-hover:from-black/90 group-hover:via-black/50" />

              <div className="relative z-10 flex w-full flex-col justify-end p-7 sm:p-8">
                <div className="flex min-h-[5.25rem] items-end justify-between gap-4 sm:min-h-[5.7rem]">
                  <h3 className="who-we-serve-panel-title max-w-[15rem] text-[1.7rem] leading-[1.2] text-white transition-transform duration-500 group-hover:translate-x-1 sm:text-[1.9rem]">
                    {group.title}
                  </h3>
                  <span
                    aria-hidden="true"
                    className="who-we-serve-panel-arrow shrink-0 text-xl text-white opacity-80 transition-all duration-500 group-hover:translate-x-1.5 group-hover:opacity-100"
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
