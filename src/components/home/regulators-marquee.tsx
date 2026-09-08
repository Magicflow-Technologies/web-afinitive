"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type RegulatorLogo = {
  name: string;
  imageSrc: string;
  hasImage: boolean;
  accessibleName?: string;
};

type RegulatorsMarqueeProps = {
  regulators: RegulatorLogo[];
  hasSecSeal: boolean;
};

type DragState = {
  pointerId: number;
  startX: number;
  startScrollLeft: number;
};

const SCROLL_SPEED = 0.105;

function getLoopPosition(position: number, loopWidth: number) {
  return ((position % loopWidth) + loopWidth) % loopWidth;
}

export function RegulatorsMarquee({
  regulators,
  hasSecSeal,
}: RegulatorsMarqueeProps) {
  const [smv, sbs, uifSbs, sec] = regulators;
  const marqueeRegulators =
    smv && sbs && uifSbs && sec
      ? [
          {
            ...smv,
            accessibleName: "Superintendencia del Mercado de Valores — SMV",
          },
          {
            ...sbs,
            accessibleName: "Superintendencia de Banca, Seguros y AFP — SBS",
          },
          {
            ...uifSbs,
            imageSrc: sbs.imageSrc,
            hasImage: sbs.hasImage,
            accessibleName: "Supervisión LAFT UIF–SBS",
          },
          {
            ...sec,
            imageSrc: "/images/regulators/sec.ico",
            hasImage: hasSecSeal,
            accessibleName: "U.S. Securities and Exchange Commission — SEC",
          },
        ]
      : [];
  const visibleRegulators = marqueeRegulators.filter(
    (regulator) => regulator.hasImage,
  );
  const viewportRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<DragState | null>(null);
  const pausedRef = useRef(false);
  const reducedMotionRef = useRef(false);
  const loopPositionRef = useRef(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const viewport = viewportRef.current;

    if (!viewport) {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => {
      reducedMotionRef.current = mediaQuery.matches;
    };

    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);

    let frameId = 0;
    let previousTime = performance.now();

    const move = (time: number) => {
      const elapsed = time - previousTime;
      previousTime = time;

      if (!reducedMotionRef.current && !pausedRef.current && !dragRef.current) {
        const loopWidth = viewport.scrollWidth / 2;

        if (loopWidth > 0) {
          loopPositionRef.current = getLoopPosition(
            loopPositionRef.current + elapsed * SCROLL_SPEED,
            loopWidth,
          );
          viewport.scrollLeft = loopPositionRef.current;
        }
      }

      frameId = window.requestAnimationFrame(move);
    };

    frameId = window.requestAnimationFrame(move);

    return () => {
      window.cancelAnimationFrame(frameId);
      mediaQuery.removeEventListener("change", updateMotionPreference);
    };
  }, []);

  if (visibleRegulators.length === 0) {
    return null;
  }

  const pause = () => {
    pausedRef.current = true;
  };

  const resume = () => {
    if (!dragRef.current) {
      pausedRef.current = false;
    }
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    const viewport = viewportRef.current;

    if (!viewport) {
      return;
    }

    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startScrollLeft: viewport.scrollLeft,
    };
    pausedRef.current = true;
    setIsDragging(true);
    viewport.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const viewport = viewportRef.current;
    const dragState = dragRef.current;

    if (!viewport || !dragState || dragState.pointerId !== event.pointerId) {
      return;
    }

    const loopWidth = viewport.scrollWidth / 2;

    if (loopWidth > 0) {
      loopPositionRef.current = getLoopPosition(
        dragState.startScrollLeft - (event.clientX - dragState.startX),
        loopWidth,
      );
      viewport.scrollLeft = loopPositionRef.current;
    }
  };

  const finishDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    const viewport = viewportRef.current;
    const dragState = dragRef.current;

    if (!viewport || !dragState || dragState.pointerId !== event.pointerId) {
      return;
    }

    if (viewport.hasPointerCapture(event.pointerId)) {
      viewport.releasePointerCapture(event.pointerId);
    }

    dragRef.current = null;
    pausedRef.current = false;
    setIsDragging(false);
  };

  const renderLogoSet = (isDuplicate: boolean) => (
    <ul className="regulators-marquee-set" aria-hidden={isDuplicate || undefined}>
      {visibleRegulators.map((regulator) => (
        <li className="regulators-marquee-item" key={`${regulator.name}-${isDuplicate}`}>
          <div className="regulators-marquee-logo">
            <Image
              src={regulator.imageSrc}
              alt={isDuplicate ? "" : (regulator.accessibleName ?? regulator.name)}
              fill
              unoptimized={regulator.imageSrc.endsWith(".ico")}
              sizes="(max-width: 639px) 140px, 200px"
              className="object-contain"
            />
          </div>
        </li>
      ))}
    </ul>
  );

  return (
    <div
      ref={viewportRef}
      className={`regulators-marquee${isDragging ? " is-dragging" : ""}`}
      role="region"
      aria-label="Entidades reguladoras"
      tabIndex={0}
      onMouseEnter={pause}
      onMouseLeave={resume}
      onFocusCapture={pause}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          resume();
        }
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={finishDrag}
      onPointerCancel={finishDrag}
    >
      <div className="regulators-marquee-track">
        {renderLogoSet(false)}
        {renderLogoSet(true)}
      </div>
    </div>
  );
}
