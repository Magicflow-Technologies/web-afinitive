"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useScrollReveal } from "@/components/ui/scroll-reveal";

type FounderSpotlightSectionClientProps = {
  hasImage: boolean;
};

export function FounderSpotlightSectionClient({
  hasImage,
}: FounderSpotlightSectionClientProps) {
  const { isRevealed, revealRef: sectionRef } = useScrollReveal<HTMLElement>();
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateLayout = () => {
      const section = sectionRef.current;

      if (!section || mediaQuery.matches || window.innerWidth < 1024) {
        setIsExpanded(false);
        return;
      }

      setIsExpanded(section.getBoundingClientRect().top <= window.innerHeight * 0.18);
    };

    updateLayout();
    window.addEventListener("scroll", updateLayout, { passive: true });
    window.addEventListener("resize", updateLayout);
    mediaQuery.addEventListener("change", updateLayout);

    return () => {
      window.removeEventListener("scroll", updateLayout);
      window.removeEventListener("resize", updateLayout);
      mediaQuery.removeEventListener("change", updateLayout);
    };
  }, [sectionRef]);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="founder-quote"
      data-revealed={isRevealed}
      data-visible={isRevealed}
      className="founder-spotlight-reveal scroll-reveal scroll-reveal--fade-right overflow-hidden bg-surface"
    >
      <div className="mx-auto w-full max-w-[92rem] px-5 py-18 sm:px-8 sm:py-22 lg:px-12 lg:py-28">
        <figure
          className={`founder-spotlight-figure scroll-reveal-stagger ${isExpanded ? "is-expanded" : ""}`}
        >
          <div className="founder-portrait-panel relative order-1 min-h-[26rem] overflow-hidden rounded-[1.5rem] border border-border-soft/80 bg-surface-soft sm:min-h-[31rem] lg:min-h-[43rem]">
            {hasImage ? (
              <>
                <Image
                  src="/images/team/ricardo-bertalmio.png"
                  alt="Ricardo Bertalmio"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover object-[center_20%]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,82,120,0.02)_0%,rgba(17,82,120,0.16)_100%)]" />
              </>
            ) : (
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(143,203,217,0.18),transparent_32%),linear-gradient(135deg,rgba(247,251,253,0.2)_0%,rgba(247,251,253,0.05)_44%,rgba(247,251,253,0)_100%),repeating-linear-gradient(180deg,rgba(4,35,53,0.14)_0,rgba(4,35,53,0.14)_1px,transparent_1px,transparent_14px)]" />
            )}

            {!hasImage ? (
              <div className="relative z-10 flex h-full flex-col justify-between px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
                <span className="font-serif text-[4.25rem] leading-none tracking-[-0.05em] text-foreground/42 sm:text-[5.5rem] lg:text-[7rem]">
                  RB
                </span>
                <span className="max-w-[10rem] text-[0.72rem] tracking-[0.1em] text-muted">
                  Fotografía oficial pendiente
                </span>
              </div>
            ) : null}
          </div>

          <div className="founder-spotlight-copy order-2 flex flex-col gap-6 rounded-[1.5rem] border border-border-soft/80 bg-background px-6 py-9 sm:gap-7 sm:px-8 sm:py-11 lg:justify-center lg:gap-8 lg:px-14 lg:py-16">
            <figcaption className="border-l-2 border-accent-muted/65 pl-5 space-y-2">
              <p className="text-[1.08rem] leading-7 text-foreground">
                Ricardo Bertalmio
              </p>
              <p className="text-sm tracking-[0.14em] text-muted uppercase">
                CEO &amp; Socio Fundador
              </p>
            </figcaption>

            <blockquote
              id="founder-quote"
              className="founder-quote max-w-3xl font-sans text-[1.2rem] leading-[1.45] text-foreground sm:text-[1.45rem] lg:text-[1.75rem] lg:leading-[1.42]"
            >
              «Nuestra formación académica y especialización en finanzas nos
              permite brindar un servicio objetivo, profesional e integral,
              diseñado para acompañar las necesidades y objetivos de nuestros
              clientes.»
            </blockquote>
          </div>
        </figure>

      </div>
    </section>
  );
}
