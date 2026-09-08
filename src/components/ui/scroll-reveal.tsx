"use client";

import { useEffect, useRef, useState } from "react";

export type ScrollRevealVariant = "fade-up" | "fade-left" | "fade-right" | "stagger";

type ScrollRevealOptions = {
  rootMargin?: string;
  threshold?: number;
  variant?: ScrollRevealVariant;
};

/** Reveals an element once, the first time it reaches the viewport. */
export function useScrollReveal<T extends HTMLElement>({
  rootMargin = "0px 0px -10% 0px",
  threshold = 0.18,
  variant = "fade-up",
}: ScrollRevealOptions = {}) {
  const revealRef = useRef<T | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const element = revealRef.current;

    if (!element || isRevealed) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return;
        }

        setIsRevealed(true);
        observer.disconnect();
      },
      { rootMargin, threshold },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [isRevealed, rootMargin, threshold]);

  return {
    isRevealed,
    revealClassName: `scroll-reveal scroll-reveal--${variant}`,
    revealRef,
  };
}
