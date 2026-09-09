"use client";

import Image from "next/image";
import { useScrollReveal } from "@/components/ui/scroll-reveal";
import type { Regulator } from "@/data/regulators";

type RegulatorWithAsset = Regulator & {
  hasImage: boolean;
};

type RegulatorsSectionClientProps = {
  regulators: RegulatorWithAsset[];
};

export function RegulatorsSectionClient({
  regulators,
}: RegulatorsSectionClientProps) {
  const { isRevealed, revealRef: sectionRef } = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      aria-labelledby="regulators-title"
      data-revealed={isRevealed}
      data-visible={isRevealed}
      className="regulators-reveal scroll-reveal overflow-hidden bg-background"
    >
      <div className="mx-auto flex w-full max-w-[88rem] flex-col gap-8 px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
        <div className="scroll-reveal-stagger flex max-w-4xl flex-col gap-6">
          <span className="h-px w-16 bg-accent-muted/55" aria-hidden="true" />
          <h2
            id="regulators-title"
            className="text-3xl leading-tight text-foreground sm:text-[2.45rem]"
          >
            Empresas reguladoras
          </h2>
          <p className="max-w-3xl text-base leading-8 text-muted sm:text-[1.05rem]">
            Trabajamos dentro de un ecosistema regulado, con entidades que
            fortalecen la transparencia, supervisión y seguridad de las
            operaciones.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {regulators.map((regulator) => (
            <article
              key={regulator.name}
              className="scroll-reveal-stagger flex flex-col items-center justify-between gap-6 rounded-xl border border-border-soft/80 bg-surface p-6 sm:p-8 text-center shadow-sm"
            >
              {regulator.hasImage ? (
                <div className="relative h-24 w-full max-w-[16rem] flex items-center justify-center">
                  <Image
                    src={regulator.imageSrc}
                    alt={regulator.name}
                    fill
                    unoptimized={regulator.imageSrc.endsWith(".ico")}
                    sizes="320px"
                    className="object-contain grayscale contrast-125 brightness-95"
                  />
                </div>
              ) : null}

              <div className="flex flex-col items-center gap-4">
                <h3 className="text-xs sm:text-sm font-bold tracking-wider text-foreground uppercase">
                  {regulator.name}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-muted text-center max-w-xl">
                  {regulator.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
