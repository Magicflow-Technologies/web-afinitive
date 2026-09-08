"use client";

import Image from "next/image";
import {
  useEffect,
  useState,
  type SyntheticEvent,
} from "react";

const heroSlides = [
  {
    src: "/images/hero/hero-office-city.png",
    alt: "Oficina contemporánea con vista a la ciudad al atardecer",
  },
] as const;

type HeroSectionClientProps = {
  hasVideo: boolean;
};

const SHOW_HERO_VIDEO = false;
const SHOW_HERO_MEDIA_OVERLAY = true;

export function HeroSectionClient({ hasVideo }: HeroSectionClientProps) {
  const [useVideo, setUseVideo] = useState(hasVideo && SHOW_HERO_VIDEO);

  if (!SHOW_HERO_VIDEO) {
    return <HeroCarousel />;
  }

  if (useVideo) {
    return (
      <VideoHero onPlaybackFailure={() => setUseVideo(false)} />
    );
  }

  return <HeroCarousel />;
}

type VideoHeroProps = {
  onPlaybackFailure: () => void;
  showVideo?: boolean;
};

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

function HeroKeyFigureBadge({ carousel = false }: { carousel?: boolean }) {
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
      className={`hero-key-figure${carousel ? " hero-key-figure--carousel" : ""}`}
      aria-label="Más de 100 millones de dólares: montos colocados"
    >
      <span className="hero-key-figure-icon" aria-hidden="true">
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
          <path d="m6.5 12 3.4 3.4L17.5 8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <strong data-pulsing={isPulsing}>{`+${visibleValue}M`}</strong>
      <span>USD</span>
      <small>Montos colocados</small>
    </aside>
  );
}

function VideoHero({ onPlaybackFailure, showVideo = true }: VideoHeroProps) {
  function handleCanPlay(event: SyntheticEvent<HTMLVideoElement>) {
    void event.currentTarget.play().catch(onPlaybackFailure);
  }

  return (
    <section
      aria-labelledby="hero-title"
      className={`relative isolate min-h-[80svh] overflow-hidden ${showVideo ? "bg-background" : "hero-blackout bg-black"} lg:min-h-[max(80svh,40rem)]`}
    >
      {showVideo ? (
        <video
          aria-hidden="true"
          autoPlay
          className="absolute inset-0 size-full object-cover object-center brightness-[0.95] contrast-[1.04] saturate-[1.05]"
          loop
          muted
          onCanPlay={handleCanPlay}
          onError={onPlaybackFailure}
          playsInline
          poster="/images/hero/hero-legado-familiar.png"
          preload="metadata"
          tabIndex={-1}
        >
          <source src="/videos/afinitive-hero-contrast.mp4" type="video/mp4" />
          <source src="/videos/afinitive-hero.mp4" type="video/mp4" />
        </video>
      ) : null}
      {showVideo && SHOW_HERO_MEDIA_OVERLAY ? (
        <div aria-hidden="true" className="hero-media-overlay absolute inset-0 z-[2]" />
      ) : null}
      <HeroOrbitDecoration />

      <div className="relative z-10 mx-auto flex min-h-[80svh] w-full max-w-[88rem] flex-col px-5 pt-12 pb-8 sm:px-8 sm:pt-16 sm:pb-10 lg:min-h-[max(80svh,40rem)] lg:px-12 lg:pt-20 lg:pb-12">
        <div className="video-hero-brand mx-auto flex max-w-3xl flex-col items-center text-center text-foreground-inverse lg:mx-0 lg:items-start lg:text-left">
          <h1
            className="max-w-3xl font-serif text-[clamp(4rem,6.4vw,6.25rem)] leading-[0.96] !text-white [text-shadow:0_3px_24px_rgba(0,0,0,0.6),0_1px_4px_rgba(0,0,0,0.8)]"
            id="hero-title"
          >
            Preservando tu patrimonio
          </h1>
          <span className="mt-5 h-px w-20 bg-white/80 lg:mt-4" aria-hidden="true" />
          <p className="mt-4 text-lg leading-7 tracking-[0.08em] !text-white [text-shadow:0_2px_14px_rgba(0,0,0,0.6)] sm:text-xl font-medium">
            Servicio de asesoría objetiva e integral | Tailor – Made
          </p>
          <div className="video-hero-details mt-7 max-w-2xl self-start text-left text-foreground-inverse">
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

function HeroCarousel() {
  return (
    <section
      aria-labelledby="hero-title"
      aria-label="Portada de Afinitive"
      className="relative isolate flex min-h-[calc(100svh-5rem)] overflow-hidden bg-background"
    >
      {heroSlides.map((slide) => (
        <div
          key={slide.src}
          className="absolute inset-0"
        >
          <Image
            alt={slide.alt}
            className="object-cover object-center"
            fill
            preload
            sizes="100vw"
            src={slide.src}
          />
        </div>
      ))}
      {SHOW_HERO_MEDIA_OVERLAY ? (
        <div aria-hidden="true" className="hero-media-overlay absolute inset-0" />
      ) : null}
      <HeroOrbitDecoration />

      <div className="relative z-10 mx-auto flex w-full max-w-[88rem] items-start px-5 pt-16 pb-28 sm:px-8 sm:pt-20 sm:pb-32 lg:min-h-[640px] lg:px-12 lg:pt-24 lg:pb-36">
        <div className="hero-reveal flex max-w-3xl flex-col text-white">
          <h1
            id="hero-title"
            className="max-w-3xl font-serif text-[clamp(4rem,6.4vw,6.25rem)] leading-[0.96] !text-white [text-shadow:0_2px_18px_rgba(0,0,0,0.2)]"
          >
            Preservando tu patrimonio
          </h1>
          <span className="mt-5 h-px w-20 bg-white/70" aria-hidden="true" />
          <p className="mt-4 text-lg leading-7 tracking-[0.08em] !text-white sm:text-xl">
            Servicio de asesoría objetiva e integral | Tailor – Made
          </p>
          <div className="mt-7 max-w-2xl">
            <p className="text-xl leading-8 !text-white/95 sm:text-[1.35rem] sm:leading-9">
              Transformamos la complejidad financiera en decisiones eficientes
              para tu patrimonio mediante una arquitectura abierta, a medida de
              tus necesidades y objetivos de vida.
            </p>
            <a
              className="mt-7 inline-flex min-h-11 items-center justify-center rounded-md border border-white/90 bg-white/5 px-5 py-2.5 text-sm font-medium tracking-[0.08em] !text-white transition-colors duration-300 hover:bg-background-dark/70 hover:text-white focus-visible:bg-background-dark/70 focus-visible:text-white"
              href="#conversemos"
            >
              Contáctanos
            </a>
          </div>
        </div>
      </div>

      <HeroKeyFigureBadge carousel />
    </section>
  );
}
