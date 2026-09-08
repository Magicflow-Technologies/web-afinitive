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
      <div className="mx-auto flex w-full max-w-[88rem] flex-col gap-12 px-5 py-18 sm:px-8 sm:py-22 lg:gap-14 lg:px-12 lg:py-28">
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
        <div className="regulators-grid grid gap-6 lg:grid-cols-2 lg:gap-8">
          {regulators.map((regulator) => (
            <article
              key={regulator.name}
              tabIndex={0}
              className="regulator-card scroll-reveal-stagger group"
            >
              {regulator.hasImage ? (
                <div className="regulator-card-face regulator-card-logo">
                  <div className="regulator-card-image">
                    <Image
                      src={regulator.imageSrc}
                      alt={regulator.name}
                      fill
                      unoptimized={regulator.imageSrc.endsWith(".ico")}
                      sizes="(max-width: 639px) 280px, 400px"
                      className="object-contain p-1.5"
                    />
                  </div>
                </div>
              ) : null}

              <div className="regulator-card-face regulator-card-copy">
                <h3 className="text-[1.35rem] leading-tight text-foreground sm:text-[1.5rem]">
                  {regulator.name}
                </h3>
                <p className="text-sm leading-7 text-muted sm:text-[0.98rem]">
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
