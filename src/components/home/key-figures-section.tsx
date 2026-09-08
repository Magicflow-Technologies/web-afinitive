"use client";

import { useEffect, useState } from "react";
import { useScrollReveal } from "@/components/ui/scroll-reveal";

type KeyFigure = {
  value: string;
  numericValue: number;
  prefix?: string;
  suffix?: string;
  unit: string;
  description: string;
};

const keyFigures: KeyFigure[] = [
  {
    value: "+8",
    numericValue: 8,
    prefix: "+",
    unit: "Años",
    description: "Desde su fundación",
  },
  {
    value: "+25",
    numericValue: 25,
    prefix: "+",
    unit: "Años",
    description: "Experiencia de sus socios",
  },
  {
    value: "#1",
    numericValue: 1,
    prefix: "#",
    unit: "Boutique",
    description: "Asesoría objetiva e inversiones",
  },
  {
    value: "+100M",
    numericValue: 100,
    prefix: "+",
    suffix: "M",
    unit: "USD",
    description: "Montos colocados",
  },
  {
    value: "+100",
    numericValue: 100,
    prefix: "+",
    unit: "Operaciones",
    description: "Transacciones con éxito",
  },
  {
    value: "3",
    numericValue: 3,
    unit: "Oficinas",
    description: "Estratégicamente ubicadas",
  },
];

export function KeyFiguresSection() {
  const { isRevealed, revealRef: sectionRef } = useScrollReveal<HTMLElement>();
  const [isInViewport, setIsInViewport] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [displayValues, setDisplayValues] = useState<number[]>(() =>
    keyFigures.map(() => 0),
  );
  const [isPulsing, setIsPulsing] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;

    if (!node) {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateMotionPreference = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) {
          return;
        }

        setIsInViewport(entry.isIntersecting);
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      mediaQuery.removeEventListener("change", updateMotionPreference);
    };
  }, [sectionRef]);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    if (!isInViewport) {
      return;
    }

    let animationFrame = 0;
    let timer: ReturnType<typeof setTimeout> | undefined;
    let isCancelled = false;

    const startCycle = () => {
      if (isCancelled) {
        return;
      }

      const duration = 720;
      const startTime = performance.now();

      setDisplayValues(keyFigures.map(() => 0));
      setIsPulsing(false);

      const animate = (now: number) => {
        if (isCancelled) {
          return;
        }

        const progress = Math.min((now - startTime) / duration, 1);
        const easedProgress = 1 - (1 - progress) ** 3;

        setDisplayValues(
          keyFigures.map((figure) =>
            Math.round(figure.numericValue * easedProgress),
          ),
        );

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
            timer = setTimeout(startCycle, 120);
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
  }, [isInViewport, prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="key-figures-title"
      data-revealed={isRevealed}
      data-visible={isRevealed}
      className="key-figures-reveal scroll-reveal border-t border-border-soft/70 bg-background"
    >
      <div className="mx-auto flex w-full max-w-[88rem] flex-col gap-12 px-5 py-18 sm:px-8 sm:py-22 lg:px-12 lg:py-26">
        <div className="flex flex-col gap-6">
          <span className="h-px w-16 bg-accent-muted/55" aria-hidden="true" />
          <h2
            id="key-figures-title"
            className="text-3xl leading-tight text-foreground sm:text-[2.45rem]"
          >
            Cifras Clave
          </h2>
        </div>

        <dl className="grid gap-x-8 gap-y-0 sm:grid-cols-2 lg:grid-cols-3">
          {keyFigures.map((figure, index) => (
            <div
              key={`${figure.value}-${figure.unit}`}
              className="scroll-reveal-stagger border-t border-border-soft/80 py-7"
            >
              <div className="flex items-end gap-3">
                <dt
                  className="key-figure-value font-serif text-5xl leading-none text-background-dark sm:text-[4rem]"
                  data-pulsing={isPulsing && !prefersReducedMotion}
                >
                  {`${figure.prefix ?? ""}${prefersReducedMotion ? figure.numericValue : (displayValues[index] ?? 0)}${figure.suffix ?? ""}`}
                </dt>
                <dd className="pb-1 text-sm tracking-[0.08em] text-muted sm:text-[0.95rem]">
                  {figure.unit}
                </dd>
              </div>
              <dd className="mt-4 max-w-[22rem] text-sm leading-6 text-muted">
                {figure.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
