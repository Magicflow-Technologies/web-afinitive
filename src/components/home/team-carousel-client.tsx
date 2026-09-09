"use client";

import Image from "next/image";
import { useState } from "react";
import type { TeamMember } from "@/data/team-members";

type TeamCarouselClientProps = {
  members: TeamMember[];
  onOpenProfile: (memberId: string, trigger: HTMLButtonElement) => void;
};

function getInitials(member: TeamMember) {
  return `${member.firstName[0] ?? ""}${member.lastName[0] ?? ""}`;
}

export function TeamCarouselClient({ members, onOpenProfile }: TeamCarouselClientProps) {
  const [brokenImages, setBrokenImages] = useState<Record<string, boolean>>({});

  if (members.length === 0) {
    return null;
  }

  return (
    <ul className="scroll-reveal-stagger team-profile-grid" aria-label="Equipo Afinitive">
      {members.map((member) => {
        const fullName = `${member.firstName} ${member.lastName}`;
        const hasImage = !brokenImages[member.id];

        return (
          <li className="team-profile-grid-item" key={member.id}>
            <button
              aria-label={`Abrir perfil de ${fullName}`}
              className="team-profile-trigger"
              onClick={(event) => onOpenProfile(member.id, event.currentTarget)}
              type="button"
            >
              {hasImage ? (
                <Image
                  alt={`Retrato de ${fullName}`}
                  className={`object-cover object-center ${member.imageClassName ?? ""}`}
                  fill
                  onError={() =>
                    setBrokenImages((currentImages) => ({
                      ...currentImages,
                      [member.id]: true,
                    }))
                  }
                  sizes="(max-width: 639px) 42vw, (max-width: 1023px) 25vw, 14rem"
                  src={member.imageSrc}
                />
              ) : (
                <span aria-hidden="true" className="team-profile-fallback">
                  {getInitials(member)}
                </span>
              )}

              <span aria-hidden="true" className="team-profile-overlay">
                <span>LEER MÁS</span>
                <span>→</span>
              </span>
            </button>

            <div className="team-profile-copy">
              <h3>{fullName}</h3>
              <p>{member.role}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
