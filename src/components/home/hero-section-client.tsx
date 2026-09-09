"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type HeroSectionClientProps = {
  hasVideo?: boolean;
};

const SHOW_HERO_MEDIA_OVERLAY = true;

export function HeroSectionClient({ hasVideo = true }: HeroSectionClientProps) {
  return <VideoHero />;
}

function HeroOrbitDecoration() {
  return (
    <div
      aria-hidden="true"
      className="hero-orbits pointer-events-none absolute z-[5] hidden size-[34rem] -translate-x-1/4 -translate-y-1/4 lg:block"
    >
      <svg className="size-full" fill="none" viewBox="0 0 544 544">
        <circle cx="272" cy="272" r="102" className="hero-orbit-line" />
        <circle cx="272" cy="272" r="168" className="hero-orbit-line" />
        <circle cx="272" cy="272" r="232" className="hero-orbit-line" />
        <g className="hero-orbit-spin hero-orbit-spin-slow">
          <circle cx="272" cy="40" r="4" className="hero-orbit-point" />
          <circle cx="440" cy="272" r="3" className="hero-orbit-point" />
        </g>
        <g className="hero-orbit-spin hero-orbit-spin-reverse">
          <circle cx="104" cy="272" r="4" className="hero-orbit-point" />
          <circle cx="272" cy="170" r="3" className="hero-orbit-point" />
        </g>
      </svg>
    </div>
  );
}

function HeroKeyFigureBadge() {
  const [displayValue, setDisplayValue] = useState(0);
  const [isPulsing, setIsPulsing] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);

    return () => mediaQuery.removeEventListener("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    let animationFrame = 0;
    let timer: ReturnType<typeof setTimeout> | undefined;
    let isCancelled = false;

    const startCycle = () => {
      const startTime = performance.now();
      setDisplayValue(0);
      setIsPulsing(false);

      const animate = (now: number) => {
        if (isCancelled) {
          return;
        }

        const progress = Math.min((now - startTime) / 720, 1);
        setDisplayValue(Math.round(100 * (1 - (1 - progress) ** 3)));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
          return;
        }

        timer = setTimeout(() => {
          if (isCancelled) {
            return;
          }

          setIsPulsing(true);
          timer = setTimeout(() => {
            if (isCancelled) {
              return;
            }

            setIsPulsing(false);
            timer = setTimeout(startCycle, 160);
          }, 360);
        }, 2_000);
      };

      animationFrame = requestAnimationFrame(animate);
    };

    startCycle();

    return () => {
      isCancelled = true;
      cancelAnimationFrame(animationFrame);

      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [prefersReducedMotion]);

  const visibleValue = prefersReducedMotion ? 100 : displayValue;

  return (
    <aside
      className="hero-key-figure"
      aria-label="Más de 100 millones de dólares: montos colocados"
    >
      <span className="hero-key-figure-icon" aria-hidden="true">
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
          <path d="m6.5 12 3.4 3.4L17.5 8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <strong data-pulsing={isPulsing}>{`+${visibleValue}`}</strong>
      <span>Millones USD</span>
      <small>Montos colocados</small>
    </aside>
  );
}

function VideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (el) {
      el.muted = true;
      const playPromise = el.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Fallback autoplay retry
        });
      }
    }
  }, []);

  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate min-h-[75vh] lg:min-h-[82vh] w-full overflow-hidden bg-black"
    >
      <video
        ref={videoRef}
        aria-hidden="true"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/hero/hero-ocean-sunset.jpg"
        className="absolute inset-0 h-full w-full object-cover object-center brightness-[0.96] contrast-[1.03]"
        tabIndex={-1}
      >
        <source src="/videos/Afinitive-web01-Final.mp4" type="video/mp4" />
        <source src="/videos/Afinitive-web01.mp4" type="video/mp4" />
      </video>

      {SHOW_HERO_MEDIA_OVERLAY ? (
        <div aria-hidden="true" className="hero-media-overlay absolute inset-0 z-[2]" />
      ) : null}
      <HeroOrbitDecoration />

      <div className="relative z-10 mx-auto flex min-h-[75vh] lg:min-h-[82vh] w-full max-w-[88rem] flex-col justify-center px-5 pt-12 pb-8 sm:px-8 lg:px-12">
        <div className="video-hero-brand max-w-3xl text-left">
          <h1
            className="max-w-3xl font-serif text-[clamp(4rem,6.4vw,6.25rem)] leading-[0.96] !text-white [text-shadow:0_3px_24px_rgba(0,0,0,0.6),0_1px_4px_rgba(0,0,0,0.8)]"
            id="hero-title"
          >
            Preservando tu patrimonio
          </h1>
          <div className="video-hero-details mt-7 max-w-2xl text-left text-foreground-inverse">
            <p className="text-xl leading-8 !text-white [text-shadow:0_2px_14px_rgba(0,0,0,0.6)] sm:text-[1.35rem] sm:leading-9 font-normal">
              Transformamos la complejidad financiera en decisiones eficientes
              para tu patrimonio mediante una arquitectura abierta, a medida de
              tus necesidades y objetivos de vida.
            </p>
            <a
              className="mt-7 inline-flex min-h-11 items-center justify-center rounded-md border border-white/90 bg-white/10 px-6 py-2.5 text-sm font-semibold tracking-[0.08em] !text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:!text-gray-900 focus-visible:bg-white focus-visible:!text-gray-900 shadow-lg"
              href="#conversemos"
            >
              Contáctanos
            </a>
          </div>
        </div>
      </div>
      <HeroKeyFigureBadge />
    </section>
  );
}
