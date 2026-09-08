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
    // Banking & Institutional Columns Architectural Line Art
    return (
      <svg
        className="h-36 w-full text-[#8b5149] opacity-35 transition-opacity duration-300 group-hover:opacity-85"
        fill="none"
        viewBox="0 0 320 160"
        stroke="currentColor"
        strokeWidth="0.8"
      >
        <line x1="10" y1="150" x2="310" y2="150" />
        <rect x="30" y="40" width="120" height="110" />
        <line x1="30" y1="60" x2="150" y2="60" />
        <line x1="30" y1="80" x2="150" y2="80" />
        <line x1="30" y1="100" x2="150" y2="100" />
        <line x1="30" y1="120" x2="150" y2="120" />
        <line x1="50" y1="40" x2="50" y2="150" />
        <line x1="70" y1="40" x2="70" y2="150" />
        <line x1="90" y1="40" x2="90" y2="150" />
        <line x1="110" y1="40" x2="110" y2="150" />
        <line x1="130" y1="40" x2="130" y2="150" />
        <polygon points="30,40 90,15 150,40" />
        <rect x="170" y="20" width="100" height="130" />
        <line x1="170" y1="45" x2="270" y2="45" />
        <line x1="170" y1="70" x2="270" y2="70" />
        <line x1="170" y1="95" x2="270" y2="95" />
        <line x1="170" y1="120" x2="270" y2="120" />
        <line x1="195" y1="20" x2="195" y2="150" />
        <line x1="220" y1="20" x2="220" y2="150" />
        <line x1="245" y1="20" x2="245" y2="150" />
      </svg>
    );
  }
  if (year === "2018") {
    // Boutique Headquarters & Tree Line Architectural Drawing
    return (
      <svg
        className="h-36 w-full text-[#8b5149] opacity-35 transition-opacity duration-300 group-hover:opacity-85"
        fill="none"
        viewBox="0 0 320 160"
        stroke="currentColor"
        strokeWidth="0.8"
      >
        <line x1="10" y1="150" x2="310" y2="150" />
        <rect x="40" y="30" width="130" height="120" />
        <line x1="40" y1="55" x2="170" y2="55" />
        <line x1="40" y1="80" x2="170" y2="80" />
        <line x1="40" y1="105" x2="170" y2="105" />
        <line x1="40" y1="130" x2="170" y2="130" />
        <line x1="72" y1="30" x2="72" y2="150" />
        <line x1="105" y1="30" x2="105" y2="150" />
        <line x1="138" y1="30" x2="138" y2="150" />
        <path d="M240 150 V90 M240 110 L210 80 M240 100 L265 75 M240 85 L225 65 M240 80 L250 65" />
        <circle cx="240" cy="55" r="28" strokeDasharray="3 3" />
        <circle cx="215" cy="75" r="18" strokeDasharray="3 3" />
        <circle cx="265" cy="70" r="16" strokeDasharray="3 3" />
      </svg>
    );
  }
  if (year === "2021") {
    // Step-Down Skyscraper & Structuring Campus Drawing
    return (
      <svg
        className="h-36 w-full text-[#8b5149] opacity-35 transition-opacity duration-300 group-hover:opacity-85"
        fill="none"
        viewBox="0 0 320 160"
        stroke="currentColor"
        strokeWidth="0.8"
      >
        <line x1="10" y1="150" x2="310" y2="150" />
        <rect x="60" y="10" width="110" height="140" />
        <rect x="170" y="70" width="100" height="80" />
        <line x1="82" y1="10" x2="82" y2="150" />
        <line x1="104" y1="10" x2="104" y2="150" />
        <line x1="126" y1="10" x2="126" y2="150" />
        <line x1="148" y1="10" x2="148" y2="150" />
        <line x1="60" y1="30" x2="170" y2="30" />
        <line x1="60" y1="50" x2="170" y2="50" />
        <line x1="60" y1="70" x2="170" y2="70" />
        <line x1="60" y1="90" x2="170" y2="90" />
        <line x1="60" y1="110" x2="170" y2="110" />
        <line x1="60" y1="130" x2="170" y2="130" />
        <line x1="195" y1="70" x2="195" y2="150" />
        <line x1="220" y1="70" x2="220" y2="150" />
        <line x1="245" y1="70" x2="245" y2="150" />
        <line x1="170" y1="90" x2="270" y2="90" />
        <line x1="170" y1="110" x2="270" y2="110" />
        <line x1="170" y1="130" x2="270" y2="130" />
      </svg>
    );
  }
  if (year === "2025") {
    // Global Financial Skyline & Orbital Grid Line Art
    return (
      <svg
        className="h-36 w-full text-[#8b5149] opacity-35 transition-opacity duration-300 group-hover:opacity-85"
        fill="none"
        viewBox="0 0 320 160"
        stroke="currentColor"
        strokeWidth="0.8"
      >
        <line x1="10" y1="150" x2="310" y2="150" />
        <rect x="30" y="40" width="60" height="110" />
        <line x1="30" y1="65" x2="90" y2="65" />
        <line x1="30" y1="90" x2="90" y2="90" />
        <line x1="30" y1="115" x2="90" y2="115" />
        <line x1="60" y1="40" x2="60" y2="150" />
        <rect x="100" y="15" width="70" height="135" />
        <line x1="100" y1="40" x2="170" y2="40" />
        <line x1="100" y1="65" x2="170" y2="65" />
        <line x1="100" y1="90" x2="170" y2="90" />
        <line x1="100" y1="115" x2="170" y2="115" />
        <line x1="123" y1="15" x2="123" y2="150" />
        <line x1="147" y1="15" x2="147" y2="150" />
        <circle cx="235" cy="80" r="45" />
        <ellipse cx="235" cy="80" rx="45" ry="18" />
        <ellipse cx="235" cy="80" rx="18" ry="45" />
      </svg>
    );
  }
  // "Hoy" - Flagship Corporate Campus Building Elevation (Exact match to reference photo)
  return (
    <svg
      className="h-36 w-full text-[#8b5149] opacity-35 transition-opacity duration-300 group-hover:opacity-85"
      fill="none"
      viewBox="0 0 320 160"
      stroke="currentColor"
      strokeWidth="0.8"
    >
      <line x1="10" y1="150" x2="310" y2="150" />
      <rect x="50" y="10" width="100" height="140" />
      <rect x="150" y="60" width="120" height="90" />
      <line x1="70" y1="10" x2="70" y2="150" />
      <line x1="90" y1="10" x2="90" y2="150" />
      <line x1="110" y1="10" x2="110" y2="150" />
      <line x1="130" y1="10" x2="130" y2="150" />
      <line x1="50" y1="28" x2="150" y2="28" />
      <line x1="50" y1="46" x2="150" y2="46" />
      <line x1="50" y1="64" x2="150" y2="64" />
      <line x1="50" y1="82" x2="150" y2="82" />
      <line x1="50" y1="100" x2="150" y2="100" />
      <line x1="50" y1="118" x2="150" y2="118" />
      <line x1="50" y1="136" x2="150" y2="136" />
      <line x1="150" y1="80" x2="270" y2="80" />
      <line x1="150" y1="100" x2="270" y2="100" />
      <line x1="150" y1="120" x2="270" y2="120" />
      <line x1="150" y1="138" x2="270" y2="138" />
      <line x1="174" y1="60" x2="174" y2="150" />
      <line x1="198" y1="60" x2="198" y2="150" />
      <line x1="222" y1="60" x2="222" y2="150" />
      <line x1="246" y1="60" x2="246" y2="150" />
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
