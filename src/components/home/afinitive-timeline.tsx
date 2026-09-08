"use client";

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type MouseEvent,
  type TouchEvent,
} from "react";
import { afinitiveTimeline } from "@/data/afinitive-timeline";

const AUTO_SCROLL_SPEED = 140;
const timelineLength = afinitiveTimeline.length;
const loopGroupCount = 5;
const accessibleGroupIndex = Math.floor(loopGroupCount / 2);
const initialTrackIndex = timelineLength * accessibleGroupIndex;
const loopedTimeline = Array.from(
  { length: loopGroupCount },
  () => afinitiveTimeline,
).flat();

function getMilestoneSilhouette(year: string) {
  if (year.includes("2002")) {
    // Banking / Corporate Pillars silhouette
    return (
      <svg
        className="h-11 w-11 text-[#8b5149] transition-transform duration-300 group-hover:scale-110"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.3"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M3 10h18M5 10v11M9 10v11M13 10v11M17 10v11M12 3L2 10h20L12 3z" />
      </svg>
    );
  }
  if (year === "2018") {
    // Afinitive Tree / Sprout silhouette
    return (
      <svg
        className="h-11 w-11 text-[#8b5149] transition-transform duration-300 group-hover:scale-110"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.3"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-5m0 0a4 4 0 10-4-4 4 4 0 004 4zm0 0a4 4 0 104-4 4 4 0 00-4 4zm-7-2a7 7 0 1114 0H5z" />
      </svg>
    );
  }
  if (year === "2021") {
    // Growth Chart & Shield / Securitization
    return (
      <svg
        className="h-11 w-11 text-[#8b5149] transition-transform duration-300 group-hover:scale-110"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.3"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    );
  }
  if (year === "2025") {
    // Global Investment / Internationalization
    return (
      <svg
        className="h-11 w-11 text-[#8b5149] transition-transform duration-300 group-hover:scale-110"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.3"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    );
  }
  // "Hoy" - Excellence Award / Star Emblem
  return (
    <svg
      className="h-11 w-11 text-[#8b5149] transition-transform duration-300 group-hover:scale-110"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.3"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  );
}

export function AfinitiveTimeline() {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Array<HTMLLIElement | null>>([]);
  const trackIndexRef = useRef(initialTrackIndex);
  const [trackIndex, setTrackIndex] = useState(initialTrackIndex);
  const [isInViewport, setIsInViewport] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const hasMovedRef = useRef(false);

  const updateTrackIndex = (nextIndex: number) => {
    trackIndexRef.current = nextIndex;
    setTrackIndex(nextIndex);
  };

  const findClosestTrackIndex = (viewport: HTMLDivElement) => {
    const viewportCenter = viewport.scrollLeft + viewport.clientWidth / 2;
    let nearestIndex = trackIndexRef.current;
    let nearestDistance = Number.POSITIVE_INFINITY;

    itemRefs.current.forEach((item, index) => {
      if (!item) {
        return;
      }

      const itemCenter = item.offsetLeft + item.offsetWidth / 2;
      const distance = Math.abs(itemCenter - viewportCenter);

      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });

    return nearestIndex;
  };

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    setIsDragging(true);
    setIsPaused(true);
    startXRef.current = e.pageX - viewport.offsetLeft;
    scrollLeftRef.current = viewport.scrollLeft;
    hasMovedRef.current = false;
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const viewport = viewportRef.current;
    if (!viewport) return;
    e.preventDefault();
    const x = e.pageX - viewport.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;
    viewport.scrollLeft = scrollLeftRef.current - walk;
    if (Math.abs(walk) > 5) {
      hasMovedRef.current = true;
    }
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    setIsDragging(true);
    setIsPaused(true);
    startXRef.current = e.touches[0].pageX - viewport.offsetLeft;
    scrollLeftRef.current = viewport.scrollLeft;
    hasMovedRef.current = false;
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const viewport = viewportRef.current;
    if (!viewport) return;
    const x = e.touches[0].pageX - viewport.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;
    viewport.scrollLeft = scrollLeftRef.current - walk;
    if (Math.abs(walk) > 5) {
      hasMovedRef.current = true;
    }
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const initializationTimer = setTimeout(() => {
      setPrefersReducedMotion(mediaQuery.matches);
    }, 120);
    const handleChange = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      clearTimeout(initializationTimer);
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  useLayoutEffect(() => {
    const viewport = viewportRef.current;

    if (!viewport) {
      return;
    }

    const frame = requestAnimationFrame(() => {
      const initialItem = viewport.querySelectorAll<HTMLLIElement>(
        ".timeline-item",
      )[initialTrackIndex];

      if (initialItem) {
        const initialScrollBehavior = viewport.style.scrollBehavior;

        viewport.style.scrollBehavior = "auto";
        viewport.scrollLeft =
          initialItem.offsetLeft +
          initialItem.offsetWidth / 2 -
          viewport.clientWidth / 2;
        viewport.style.scrollBehavior = initialScrollBehavior;
      }

      setIsInitialized(true);
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInViewport(entry?.isIntersecting ?? false);
      },
      { threshold: 0.22 },
    );

    observer.observe(viewport);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (
      prefersReducedMotion ||
      !isInViewport ||
      !isInitialized ||
      isPaused ||
      isDragging
    ) {
      return;
    }

    const viewport = viewportRef.current;

    if (!viewport) {
      return;
    }

    let animationFrame = 0;
    let previousTimestamp: number | undefined;

    const advance = (timestamp: number) => {
      if (previousTimestamp === undefined) {
        previousTimestamp = timestamp;
      }

      const elapsed = timestamp - previousTimestamp;
      previousTimestamp = timestamp;
      viewport.scrollLeft += (AUTO_SCROLL_SPEED * elapsed) / 1000;

      const sequenceStart = itemRefs.current[timelineLength]?.offsetLeft;
      const firstItemStart = itemRefs.current[0]?.offsetLeft;

      if (
        sequenceStart !== undefined &&
        firstItemStart !== undefined &&
        viewport.scrollLeft >= sequenceStart * 3
      ) {
        viewport.scrollLeft -= sequenceStart - firstItemStart;
      }

      const nearestIndex = findClosestTrackIndex(viewport);

      if (nearestIndex !== trackIndexRef.current) {
        updateTrackIndex(nearestIndex);
      }

      animationFrame = requestAnimationFrame(advance);
    };

    animationFrame = requestAnimationFrame(advance);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [isInViewport, isInitialized, prefersReducedMotion, isPaused, isDragging]);

  return (
    <div className="timeline-shell relative overflow-hidden">
      <div className="mx-auto flex max-w-[88rem] items-center justify-between px-5 py-3 sm:px-8 lg:px-12">
        <div className="flex items-center gap-2 text-xs text-muted">
          <span className={`inline-block h-2 w-2 rounded-full ${isPaused ? "bg-amber-600" : "bg-[#8b5149] animate-pulse"}`} />
          <span>
            {isPaused
              ? "Modo manual: arrastra para navegar"
              : "Desplazamiento automático: haz clic o arrastra para pausar"}
          </span>
        </div>

        <button
          type="button"
          onClick={() => setIsPaused((prev) => !prev)}
          className="inline-flex items-center gap-2 rounded-full border border-border-soft/80 bg-white/90 px-3.5 py-1.5 text-xs font-medium text-foreground shadow-sm transition-colors hover:bg-surface-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-muted"
        >
          {isPaused ? (
            <>
              <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              <span>Reanudar</span>
            </>
          ) : (
            <>
              <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
              <span>Pausar</span>
            </>
          )}
        </button>
      </div>

      <div
        ref={viewportRef}
        aria-label="Línea de tiempo Afinitive. Arrastra con el mouse para navegar."
        className={`timeline-viewport select-none ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
        role="region"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUpOrLeave}
      >
        <div className="timeline-line" aria-hidden="true" />
        <ol className="timeline-track" role="list">
          {loopedTimeline.map((milestone, trackItemIndex) => {
            const groupIndex = Math.floor(trackItemIndex / timelineLength);
            const isActive = trackItemIndex === trackIndex;

            return (
              <li
                key={groupIndex + "-" + milestone.year}
                ref={(node) => {
                  itemRefs.current[trackItemIndex] = node;
                }}
                aria-current={isActive ? "step" : undefined}
                aria-hidden={groupIndex !== accessibleGroupIndex}
                className={"timeline-item group " + (isActive ? "is-active" : "")}
              >
                <p className="timeline-year">{milestone.year}</p>
                <span className="timeline-node" aria-hidden="true" />
                <h3 className="timeline-title">{milestone.title}</h3>
                <p className="timeline-description">{milestone.description}</p>
                <div className="timeline-silhouette mt-4 flex items-center justify-start">
                  {getMilestoneSilhouette(milestone.year)}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
