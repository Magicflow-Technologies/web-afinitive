"use client";

import Link from "next/link";
import { AfinitiveTimeline } from "@/components/home/afinitive-timeline";
import { useScrollReveal } from "@/components/ui/scroll-reveal";

export function HistoryIntroSection() {
  const { isRevealed, revealRef: sectionRef } = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      aria-labelledby="history-intro-title"
      data-revealed={isRevealed}
      data-visible={isRevealed}
      className="history-intro-reveal scroll-reveal scroll-reveal--fade-right overflow-hidden bg-surface"
    >
      <div className="mx-auto flex w-full max-w-[88rem] flex-col gap-6 px-5 pt-8 sm:px-8 sm:pt-10 lg:gap-8 lg:px-12 lg:pt-12">
        <div className="grid gap-9 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1fr)_auto] lg:items-start lg:gap-12">
          <div className="scroll-reveal-stagger flex flex-col gap-6">
            <span
              className="h-px w-20 bg-background-dark/55"
              aria-hidden="true"
            />
            <h2
              id="history-intro-title"
              className="text-4xl leading-[1.05] text-foreground sm:text-5xl lg:text-[3.45rem]"
            >
              Los 25 años de Afinitive
            </h2>
          </div>

          <p className="scroll-reveal-stagger max-w-[34rem] text-base leading-8 text-muted sm:text-[1.12rem] sm:leading-9 lg:pt-10">
            Un viaje a lo largo de los 25 años de Afinitive y sus socios
            fundadores.
          </p>

          <div className="scroll-reveal-stagger flex flex-col gap-4 lg:min-w-[13rem] lg:pt-10">
            <Link
              className="history-story-link group inline-flex w-fit items-center gap-3 text-sm tracking-[0.08em] text-muted"
              href="/nuestra-historia"
            >
              <span>Descubra nuestra historia</span>
              <span
                aria-hidden="true"
                className="transition-transform duration-200"
              >
                →
              </span>
            </Link>

            <span
              aria-disabled="true"
              className="inline-flex w-fit items-center gap-3 text-sm text-muted"
            >
              Línea de Tiempo Afinitive
            </span>
          </div>
        </div>
      </div>

      <AfinitiveTimeline />
    </section>
  );
}
