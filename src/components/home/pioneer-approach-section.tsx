"use client";

import { useEffect, useRef } from "react";

import { useScrollReveal } from "@/components/ui/scroll-reveal";

export function PioneerApproachSection() {
  const { isRevealed, revealRef: sectionRef } = useScrollReveal<HTMLElement>();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const video = videoRef.current;

    if (!video) {
      return;
    }

    const syncPlayback = () => {
      if (motionPreference.matches) {
        video.pause();
        return;
      }

      void video.play().catch(() => undefined);
    };

    syncPlayback();
    motionPreference.addEventListener("change", syncPlayback);

    return () => motionPreference.removeEventListener("change", syncPlayback);
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="pioneer-approach-title"
      data-revealed={isRevealed}
      data-visible={isRevealed}
      className="pioneer-approach-reveal scroll-reveal relative isolate overflow-hidden bg-background"
    >
      <div className="relative mx-auto w-full max-w-[88rem] px-5 py-22 sm:px-8 sm:py-26 lg:px-12 lg:py-32">
        <div className="pioneer-layout">
          <div className="pioneer-content">
            <span className="h-px w-20 bg-background-dark/55" aria-hidden="true" />
            <p className="pioneer-eyebrow">Nuestro enfoque</p>
            <h2
              id="pioneer-approach-title"
              className="max-w-3xl text-4xl leading-[1.05] text-foreground sm:text-5xl lg:text-[3.45rem]"
            >
              Un enfoque pionero
            </h2>
            <p className="max-w-[51rem] text-lg leading-9 text-muted sm:text-[1.35rem] sm:leading-10">
              Nuestra esencia es educar, empoderar y preservar los intereses de
              nuestros clientes, garantizando una relación basada en la
              transparencia, ética y alineación de objetivos.
            </p>
            <p className="pioneer-concepts">
              Educación · Transparencia · Alineación
            </p>
          </div>

          <figure className="pioneer-media">
            <video
              ref={videoRef}
              className="pioneer-fish-video"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              aria-label="Animación de un pez que deja una pecera y avanza hacia el mar."
            >
              <source
                src="/videos/afinitive-pioneer.mp4"
                type="video/mp4"
              />
              Tu navegador no puede reproducir este video.
            </video>
          </figure>
        </div>
      </div>
    </section>
  );
}
