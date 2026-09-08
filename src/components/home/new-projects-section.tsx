"use client";

import { useScrollReveal } from "@/components/ui/scroll-reveal";
import { newProjects } from "@/data/new-projects";

function ProjectIcon({ index }: { index: number }) {
  const commonProps = {
    "aria-hidden": true,
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.55,
    viewBox: "0 0 24 24",
  };

  switch (index) {
    case 1:
      return (
        <svg {...commonProps}>
          <path d="m6 7 12 10M18 7 6 17M5 12h14" />
          <path d="m15 4 3 3-3 3M9 14l-3 3 3 3" />
        </svg>
      );
    case 2:
      return (
        <svg {...commonProps}>
          <path d="M5 20V8l7-4 7 4v12" />
          <path d="M9 20v-5h6v5M8 10h1M15 10h1" />
        </svg>
      );
    case 3:
      return (
        <svg {...commonProps}>
          <path d="M7 4h8l2 2v14H7z" />
          <path d="M10 10h4M10 14h2M17 4v3h3" />
          <path d="M15 17.5a2.5 2.5 0 1 0-3.8 2.1" />
        </svg>
      );
    case 4:
      return (
        <svg {...commonProps}>
          <path d="M7 3.5h7l3 3V20.5H7z" />
          <path d="M14 3.5v3h3M10 11h4M10 15h4" />
          <path d="m18.5 14.5 1 1 2-2" />
        </svg>
      );
    case 5:
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="8" />
          <path d="M4.5 12h15M12 4c2 2.1 3 4.8 3 8s-1 5.9-3 8c-2-2.1-3-4.8-3-8s1-5.9 3-8Z" />
        </svg>
      );
    default:
      return (
        <svg {...commonProps}>
          <path d="M5 18.5V6M5 18.5h14" />
          <path d="m8 14 3-3 2.5 1.8L19 7.5" />
          <path d="M15.5 7.5H19V11" />
        </svg>
      );
  }
}

export function NewProjectsSection() {
  const { isRevealed, revealRef: sectionRef } = useScrollReveal<HTMLElement>();

  return (
    <section
      id="nuevos-proyectos"
      ref={sectionRef}
      aria-labelledby="new-projects-title"
      data-revealed={isRevealed}
      data-visible={isRevealed}
      className="new-projects-reveal scroll-reveal overflow-hidden bg-surface scroll-mt-28 sm:scroll-mt-32"
    >
      <div className="mx-auto flex w-full max-w-[88rem] flex-col gap-8 px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex max-w-3xl flex-col gap-6">
            <span className="h-px w-16 bg-accent-muted/55" aria-hidden="true" />
            <h2
              id="new-projects-title"
              className="text-3xl leading-tight text-foreground sm:text-[2.45rem]"
            >
              Nuevos Proyectos
            </h2>
          </div>
          <span className="text-[0.72rem] tracking-[0.28em] text-muted uppercase">
            06 soluciones
          </span>
        </div>

        <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {newProjects.map((project, index) => (
            <li key={project.title} className="scroll-reveal-stagger list-none">
              <article className="new-project-card">
                <div className="new-project-card-header">
                  <span className="new-project-icon">
                    <ProjectIcon index={index} />
                  </span>
                  <span className="new-project-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="new-project-card-content">
                  <h3 className="new-project-title">{project.title}</h3>
                  <p className="new-project-description">{project.description}</p>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
