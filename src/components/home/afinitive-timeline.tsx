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
    // 2002-2010: Formación del Equipo Fundador - Banca & Finanzas Corporativas (Scotiabank, BBVA, Interbank, Santander, Citi)
    return (
      <svg
        className="h-40 w-full text-[#8b5149] opacity-80 transition-all duration-300 group-hover:scale-[1.02] group-hover:opacity-100"
        viewBox="0 0 320 160"
        fill="currentColor"
      >
        {/* Base Ground */}
        <rect x="10" y="146" width="300" height="6" rx="2" opacity="0.9" />
        <rect x="20" y="140" width="280" height="6" rx="1" opacity="0.7" />

        {/* Bank Temple Facade */}
        <polygon points="20,55 95,22 170,55" opacity="0.85" />
        <rect x="25" y="55" width="140" height="7" opacity="0.9" />
        
        {/* Bank Columns */}
        <rect x="32" y="62" width="14" height="78" rx="1" opacity="0.8" />
        <rect x="54" y="62" width="14" height="78" rx="1" opacity="0.8" />
        <rect x="76" y="62" width="14" height="78" rx="1" opacity="0.8" />
        <rect x="98" y="62" width="14" height="78" rx="1" opacity="0.8" />
        <rect x="120" y="62" width="14" height="78" rx="1" opacity="0.8" />
        <rect x="142" y="62" width="14" height="78" rx="1" opacity="0.8" />

        {/* Banking Crest inside pediment */}
        <circle cx="95" cy="42" r="7" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.9" />

        {/* Corporate Banking Executive Silhouettes */}
        {/* Executive 1 (Left) */}
        <circle cx="195" cy="95" r="5.5" opacity="0.95" />
        <path d="M185 140 L187 115 C187 107 203 107 203 115 L205 140 Z" opacity="0.95" />

        {/* Executive 2 (Center Chief) */}
        <circle cx="220" cy="88" r="6.5" opacity="0.95" />
        <path d="M208 140 L211 110 C211 100 229 100 229 110 L232 140 Z" opacity="0.95" />
        {/* Briefcase */}
        <rect x="233" y="118" width="10" height="7" rx="1" opacity="0.9" />

        {/* Executive 3 (Right) */}
        <circle cx="248" cy="95" r="5.5" opacity="0.95" />
        <path d="M238 140 L240 115 C240 107 256 107 256 115 L258 140 Z" opacity="0.95" />

        {/* Growth Bar Chart Background */}
        <rect x="268" y="110" width="10" height="30" rx="1" opacity="0.4" />
        <rect x="281" y="95" width="10" height="45" rx="1" opacity="0.5" />
        <rect x="294" y="75" width="10" height="65" rx="1" opacity="0.6" />
        <path d="M265 112 L286 92 L299 72 L310 55" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.8" />
        <polygon points="310,55 303,60 308,66" opacity="0.9" />

        {/* Caption */}
        <text x="95" y="132" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#ffffff" stroke="none" opacity="0.9">SCOTIA • BBVA • INTERBANK • CITI</text>
      </svg>
    );
  }

  if (year === "2018") {
    // 2018: Nace Afinitive - Universidad del Pacífico & Boutique Financiera
    return (
      <svg
        className="h-40 w-full text-[#8b5149] opacity-80 transition-all duration-300 group-hover:scale-[1.02] group-hover:opacity-100"
        viewBox="0 0 320 160"
        fill="currentColor"
      >
        {/* Base Ground */}
        <rect x="10" y="146" width="300" height="6" rx="2" opacity="0.9" />

        {/* Universidad del Pacífico Main Facade & Arches */}
        <rect x="20" y="65" width="130" height="81" rx="2" opacity="0.4" />
        <polygon points="15,65 85,35 155,65" opacity="0.6" />
        
        {/* Historic UP Arch Entrance */}
        <path d="M55 146 V95 Q85 70 115 95 V146 Z" opacity="0.85" />
        <path d="M68 146 V105 Q85 85 102 105 V146 Z" fill="#ffffff" opacity="0.9" />

        {/* Central Clock Tower */}
        <rect x="73" y="18" width="24" height="45" opacity="0.75" />
        <polygon points="70,18 85,5 100,18" opacity="0.85" />
        <circle cx="85" cy="32" r="5" fill="#ffffff" opacity="0.9" />

        {/* Graduation Cap & Economics Scroll Silhouette */}
        <path d="M165 90 L185 82 L205 90 L185 98 Z" opacity="0.9" />
        <rect x="183" y="96" width="4" height="12" opacity="0.9" />
        <path d="M185 98 C195 100 200 108 200 115" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.9" />

        {/* Flourishing Tree of Tailor-Made Wealth / Boutique Growth */}
        <path d="M250 146 V95 Q250 90 245 85 M250 120 Q260 105 270 95 M250 110 Q235 100 230 88" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.9" />
        <circle cx="250" cy="70" r="28" opacity="0.6" />
        <circle cx="230" cy="78" r="18" opacity="0.5" />
        <circle cx="270" cy="78" r="18" opacity="0.5" />
        <circle cx="250" cy="55" r="18" opacity="0.7" />

        {/* Rays of Innovation */}
        <line x1="250" y1="20" x2="250" y2="30" stroke="currentColor" strokeWidth="2" opacity="0.6" />
        <line x1="220" y1="30" x2="228" y2="38" stroke="currentColor" strokeWidth="2" opacity="0.6" />
        <line x1="280" y1="30" x2="272" y2="38" stroke="currentColor" strokeWidth="2" opacity="0.6" />

        <text x="85" y="138" textAnchor="middle" fontSize="7.5" fontWeight="bold" fill="#ffffff" stroke="none" opacity="0.95">UNIV. DEL PACÍFICO</text>
        <text x="250" y="138" textAnchor="middle" fontSize="7.5" fontWeight="bold" fill="#ffffff" stroke="none" opacity="0.95">BOUTIQUE AFINITIVE</text>
      </svg>
    );
  }

  if (year === "2021") {
    // 2021: Ampliación de Soluciones - Fiduciarios SMV / SBS & Vehículos de Titulización
    return (
      <svg
        className="h-40 w-full text-[#8b5149] opacity-80 transition-all duration-300 group-hover:scale-[1.02] group-hover:opacity-100"
        viewBox="0 0 320 160"
        fill="currentColor"
      >
        {/* Base Ground */}
        <rect x="10" y="146" width="300" height="6" rx="2" opacity="0.9" />

        {/* Bank Safe Vault Door (Left/Center) */}
        <circle cx="85" cy="82" r="52" opacity="0.4" />
        <circle cx="85" cy="82" r="42" fill="none" stroke="currentColor" strokeWidth="4" opacity="0.8" />
        <circle cx="85" cy="82" r="30" opacity="0.6" />
        <circle cx="85" cy="82" r="12" fill="#ffffff" opacity="0.9" />
        {/* Vault Spokes */}
        <line x1="85" y1="35" x2="85" y2="129" stroke="currentColor" strokeWidth="3" opacity="0.8" />
        <line x1="38" y1="82" x2="132" y2="82" stroke="currentColor" strokeWidth="3" opacity="0.8" />
        <line x1="52" y1="49" x2="118" y2="115" stroke="currentColor" strokeWidth="3" opacity="0.8" />
        <line x1="52" y1="115" x2="118" y2="49" stroke="currentColor" strokeWidth="3" opacity="0.8" />

        {/* Regulatory Shield (SMV & SBS) */}
        <path d="M175 40 L215 24 L255 40 V82 C255 118 215 138 215 138 C215 138 175 118 175 82 Z" opacity="0.75" />
        <path d="M185 47 L215 34 L245 47 V80 C245 110 215 126 215 126 C215 126 185 110 185 80 Z" fill="#ffffff" opacity="0.9" />
        {/* Checkmark inside shield */}
        <path d="M198 78 L210 90 L234 62" stroke="#8b5149" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.95" />

        {/* Securitization High Yield Badge (+2 Digits) */}
        <rect x="262" y="55" width="48" height="65" rx="4" opacity="0.8" />
        <rect x="267" y="60" width="38" height="55" rx="2" fill="#ffffff" opacity="0.9" />
        <text x="286" y="86" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#8b5149" stroke="none">%</text>
        <text x="286" y="103" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#8b5149" stroke="none">+12%</text>

        <text x="85" y="86" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#8b5149" stroke="none">VAULT</text>
        <text x="215" y="152" textAnchor="middle" fontSize="8" fontWeight="bold" fill="currentColor" stroke="none" opacity="0.9">SMV & SBS</text>
      </svg>
    );
  }

  if (year === "2025") {
    // 2025: Internacionalización - Inversión Global & Skylines
    return (
      <svg
        className="h-40 w-full text-[#8b5149] opacity-80 transition-all duration-300 group-hover:scale-[1.02] group-hover:opacity-100"
        viewBox="0 0 320 160"
        fill="currentColor"
      >
        {/* Base Ground */}
        <rect x="10" y="146" width="300" height="6" rx="2" opacity="0.9" />

        {/* Detailed 3D Globe with Continents & Grid Lines */}
        <circle cx="85" cy="80" r="54" opacity="0.4" />
        <ellipse cx="85" cy="80" rx="54" ry="22" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
        <ellipse cx="85" cy="80" rx="22" ry="54" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
        <line x1="31" y1="80" x2="139" y2="80" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
        {/* Continents Silhouettes */}
        <path d="M55 58 Q65 50 80 52 Q95 45 105 55 Q115 70 100 80 Q85 85 70 75 Z" opacity="0.7" />
        <path d="M75 95 Q85 90 95 100 Q90 120 80 122 Q70 115 75 95 Z" opacity="0.7" />

        {/* Flight Arc from Globe to Global Skyline */}
        <path d="M85 30 C130 10 190 20 230 45" stroke="currentColor" strokeWidth="2.5" strokeDasharray="5 3" fill="none" opacity="0.9" />
        <polygon points="234,48 222,44 227,37" opacity="0.95" />

        {/* Global Financial Skylines (New York / London / Tokyo) */}
        {/* Empire State Tower */}
        <rect x="180" y="60" width="22" height="86" opacity="0.6" />
        <rect x="186" y="35" width="10" height="25" opacity="0.7" />
        <line x1="191" y1="15" x2="191" y2="35" stroke="currentColor" strokeWidth="2" opacity="0.9" />

        {/* World Trade / Modern Skyscraper */}
        <polygon points="210,40 226,50 226,146 210,146" opacity="0.8" />
        <polygon points="226,50 238,58 238,146 226,146" opacity="0.6" />

        {/* International Bank Tower */}
        <rect x="245" y="70" width="28" height="76" opacity="0.75" />
        <polygon points="240,70 259,50 278,70" opacity="0.85" />

        {/* High Rise 4 */}
        <rect x="278" y="85" width="26" height="61" opacity="0.65" />
        <line x1="278" y1="100" x2="304" y2="100" stroke="#ffffff" strokeWidth="1" opacity="0.6" />
        <line x1="278" y1="115" x2="304" y2="115" stroke="#ffffff" strokeWidth="1" opacity="0.6" />

        <text x="85" y="142" textAnchor="middle" fontSize="7.5" fontWeight="bold" fill="#ffffff" stroke="none" opacity="0.95">GLOBAL ASSETS</text>
        <text x="245" y="142" textAnchor="middle" fontSize="7.5" fontWeight="bold" fill="#ffffff" stroke="none" opacity="0.95">WORLDWIDE</text>
      </svg>
    );
  }

  // Hoy: Excelencia y Compromiso - Sede Camino Real (San Isidro) & Sello de Calidad
  return (
    <svg
      className="h-40 w-full text-[#8b5149] opacity-80 transition-all duration-300 group-hover:scale-[1.02] group-hover:opacity-100"
      viewBox="0 0 320 160"
      fill="currentColor"
    >
      {/* Base Ground */}
      <rect x="10" y="146" width="300" height="6" rx="2" opacity="0.9" />

      {/* Sede Av. Camino Real 456, San Isidro - Modern Luxury Tower */}
      <rect x="25" y="25" width="85" height="121" rx="2" opacity="0.8" />
      {/* Glass Curtain Panels */}
      <rect x="32" y="32" width="71" height="107" fill="#ffffff" opacity="0.25" />
      <line x1="49" y1="25" x2="49" y2="146" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
      <line x1="67" y1="25" x2="67" y2="146" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
      <line x1="85" y1="25" x2="85" y2="146" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
      <line x1="25" y1="50" x2="110" y2="50" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <line x1="25" y1="72" x2="110" y2="72" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <line x1="25" y1="94" x2="110" y2="94" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <line x1="25" y1="116" x2="110" y2="116" stroke="currentColor" strokeWidth="1" opacity="0.5" />

      {/* San Isidro Financial Center Adjacent Building */}
      <rect x="115" y="55" width="70" height="91" rx="2" opacity="0.5" />
      <line x1="138" y1="55" x2="138" y2="146" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      <line x1="161" y1="55" x2="161" y2="146" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />

      {/* Premium Seal of Excellence & Trust (Right) */}
      <circle cx="245" cy="68" r="38" opacity="0.85" />
      <circle cx="245" cy="68" r="32" fill="#ffffff" opacity="0.9" />
      <circle cx="245" cy="68" r="28" fill="none" stroke="#8b5149" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.9" />
      
      {/* 5 Stars of Quality */}
      <polygon points="245,46 247,52 253,52 248,56 250,62 245,58 240,62 242,56 237,52 243,52" fill="#8b5149" opacity="0.95" />
      
      {/* Excellence Seal Ribbon Tails */}
      <path d="M228 95 L245 84 L262 95 V138 L245 128 L228 138 Z" opacity="0.9" />
      <path d="M234 100 L245 92 L256 100 V130 L245 122 L234 130 Z" fill="#ffffff" opacity="0.9" />

      <text x="245" y="75" textAnchor="middle" fontSize="7.5" fontWeight="bold" fill="#8b5149" stroke="none">AFINITIVE</text>
      <text x="245" y="83" textAnchor="middle" fontSize="6.5" fontWeight="bold" fill="#8b5149" stroke="none">EXCELENCIA</text>

      <text x="67" y="142" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#ffffff" stroke="none" opacity="0.95">CAMINO REAL 456</text>
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
