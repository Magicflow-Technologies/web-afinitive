"use client";

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
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

export function AfinitiveTimeline() {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Array<HTMLLIElement | null>>([]);
  const trackIndexRef = useRef(initialTrackIndex);
  const [trackIndex, setTrackIndex] = useState(initialTrackIndex);
  const [isInViewport, setIsInViewport] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

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
      !isInitialized
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
  }, [isInViewport, isInitialized, prefersReducedMotion]);

  return (
    <div className="timeline-shell relative overflow-hidden">
      <div
        ref={viewportRef}
        aria-label="Línea de tiempo Afinitive"
        className="timeline-viewport"
        role="region"
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
                className={"timeline-item " + (isActive ? "is-active" : "")}
              >
                <p className="timeline-year">{milestone.year}</p>
                <span className="timeline-node" aria-hidden="true" />
                <h3 className="timeline-title">{milestone.title}</h3>
                <p className="timeline-description">{milestone.description}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
