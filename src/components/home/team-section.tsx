"use client";

import { useMemo, useState } from "react";

import { TeamCarouselClient } from "@/components/home/team-carousel-client";
import { TeamProfileDialog } from "@/components/home/team-profile-dialog";
import { useScrollReveal } from "@/components/ui/scroll-reveal";
import { teamMembers } from "@/data/team-members";

export function TeamSection() {
  const { isRevealed, revealRef: sectionRef } = useScrollReveal<HTMLElement>();
  const [selectedMemberId, setSelectedMemberId] = useState<string | null>(null);
  const [returnFocusEl, setReturnFocusEl] = useState<HTMLElement | null>(null);

  const selectedMember = useMemo(
    () => teamMembers.find((member) => member.id === selectedMemberId) ?? null,
    [selectedMemberId],
  );

  const openProfile = (memberId: string, trigger: HTMLButtonElement) => {
    setReturnFocusEl(trigger);
    setSelectedMemberId(memberId);
  };

  return (
    <>
      <section
        aria-labelledby="team-section-title"
        className="team-section-reveal scroll-reveal overflow-hidden bg-surface scroll-mt-28 sm:scroll-mt-32"
        data-revealed={isRevealed}
        data-visible={isRevealed}
        id="equipo"
        ref={sectionRef}
      >
        <div className="mx-auto flex w-full max-w-[88rem] flex-col gap-12 px-5 py-18 sm:px-8 sm:py-22 lg:gap-14 lg:px-12 lg:py-28">
          <div className="scroll-reveal-stagger flex max-w-3xl flex-col gap-6">
            <span className="h-px w-16 bg-accent-muted/55" aria-hidden="true" />
            <h2
              className="text-3xl leading-tight text-foreground sm:text-[2.7rem] lg:text-[3.2rem]"
              id="team-section-title"
            >
              Global experience. Local execution.
            </h2>
            <p className="max-w-[47rem] text-base leading-8 text-muted sm:text-[1.12rem]">
              Nuestro equipo combina experiencia global con ejecución interna
              para entregar resultados con claridad, precisión e integridad.
            </p>
          </div>

          <TeamCarouselClient members={teamMembers} onOpenProfile={openProfile} />
        </div>
      </section>

      <TeamProfileDialog
        key={selectedMember?.id ?? "team-profile-dialog"}
        member={selectedMember}
        onClose={() => setSelectedMemberId(null)}
        returnFocusTo={returnFocusEl}
      />
    </>
  );
}
