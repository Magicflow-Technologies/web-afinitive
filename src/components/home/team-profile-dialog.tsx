"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import type { TeamMember } from "@/data/team-members";

type TeamProfileDialogProps = {
  member: TeamMember | null;
  onClose: () => void;
  returnFocusTo: HTMLElement | null;
};

function getInitials(firstName: string, lastName: string) {
  return `${firstName.trim().charAt(0)}${lastName.trim().charAt(0)}`;
}

export function TeamProfileDialog({
  member,
  onClose,
  returnFocusTo,
}: TeamProfileDialogProps) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const titleId = useId();
  const [imageAvailable, setImageAvailable] = useState(true);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) {
      return;
    }

    if (!member) {
      if (dialog.open) {
        dialog.close();
      }

      return;
    }

    if (!dialog.open) {
      dialog.showModal();
    }

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = "";
    };
  }, [member]);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) {
      return;
    }

    const handleCancel = (event: Event) => {
      event.preventDefault();
      onClose();
    };

    dialog.addEventListener("cancel", handleCancel);

    return () => {
      dialog.removeEventListener("cancel", handleCancel);
    };
  }, [onClose]);

  useEffect(() => {
    if (member) {
      return;
    }

    returnFocusTo?.focus();
  }, [member, returnFocusTo]);

  const handleBackdropClick = (event: React.MouseEvent<HTMLDialogElement>) => {
    if (event.target !== event.currentTarget) {
      return;
    }

    onClose();
  };

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      className="team-profile-dialog m-auto h-auto max-h-[min(88vh,54rem)] w-[min(92vw,72rem)] overflow-hidden rounded-[2rem] border border-border-soft/80 bg-background-dark p-0 text-foreground shadow-[0_32px_80px_rgba(4,35,53,0.35)] backdrop:bg-[rgba(4,35,53,0.74)] [--text-charcoal:#f7fbfd] [--text-muted:#d4e5ee]"
      onClick={handleBackdropClick}
    >
      {member ? (
        <div className="grid max-h-[min(88vh,54rem)] grid-cols-1 overflow-hidden lg:grid-cols-[minmax(18rem,0.82fr)_minmax(0,1.18fr)]">
          <div className="relative min-h-[18rem] border-b border-border-soft/80 bg-surface lg:min-h-[44rem] lg:border-r lg:border-b-0">
            {imageAvailable ? (
              <Image
                src={member.imageSrc}
                alt={`${member.firstName} ${member.lastName}`}
                fill
                sizes="(min-width: 1024px) 30vw, 100vw"
                className="object-cover object-center"
                onError={() => setImageAvailable(false)}
              />
            ) : (
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(143,203,217,0.18),transparent_32%),linear-gradient(135deg,rgba(247,251,253,0.22)_0%,rgba(247,251,253,0.05)_44%,rgba(247,251,253,0)_100%),repeating-linear-gradient(180deg,rgba(4,35,53,0.14)_0,rgba(4,35,53,0.14)_1px,transparent_1px,transparent_14px)]" />
            )}

            {!imageAvailable ? (
              <div className="relative z-10 flex h-full flex-col justify-between px-6 py-6 sm:px-8 sm:py-8">
                <span className="font-serif text-[4.5rem] leading-none tracking-[-0.05em] text-foreground/42 sm:text-[6rem]">
                  {getInitials(member.firstName, member.lastName)}
                </span>
                <span className="max-w-[10rem] text-[0.72rem] tracking-[0.1em] text-muted">
                  Fotografía oficial pendiente
                </span>
              </div>
            ) : (
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,82,120,0.08)_0%,rgba(17,82,120,0.38)_100%)]" />
            )}
          </div>

          <div className="flex min-h-0 flex-col">
            <div className="flex items-start justify-between gap-4 border-b border-border-soft/80 px-6 py-5 sm:px-8">
              <div className="space-y-2">
                <h3
                  id={titleId}
                  className="text-[1.7rem] leading-tight text-foreground sm:text-[2rem]"
                >
                  {member.firstName} {member.lastName}
                </h3>
                <p className="text-sm tracking-[0.14em] text-muted uppercase">
                  {member.profileTitle}
                </p>
                <p className="text-sm text-muted">{member.locations}</p>
              </div>

              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border-soft bg-background text-foreground transition-colors duration-200 hover:border-accent-muted/70 hover:text-accent-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-muted"
                aria-label="Cerrar perfil"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                >
                  <path d="M6 6L18 18" />
                  <path d="M18 6L6 18" />
                </svg>
              </button>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto px-6 py-6 sm:px-8 sm:py-8">
              <div className="space-y-8">
                <div className="space-y-4">
                  {member.biography.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-sm leading-7 text-muted sm:text-[0.98rem]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {member.education.length > 0 ? (
                  <section className="space-y-4">
                    <h4 className="text-[0.78rem] tracking-[0.18em] text-muted uppercase">
                      FORMACIÓN ACADÉMICA
                    </h4>
                    <ul className="space-y-3">
                      {member.education.map((item) => (
                        <li
                          key={item}
                          className="border-t border-border-soft/70 pt-3 text-sm leading-7 text-muted sm:text-[0.98rem]"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </section>
                ) : null}

                {member.leadership.length > 0 ? (
                  <section className="space-y-4">
                    <h4 className="text-[0.78rem] tracking-[0.18em] text-muted uppercase">
                      LIDERAZGO ACADÉMICO Y PROFESIONAL
                    </h4>
                    <ul className="space-y-3">
                      {member.leadership.map((item) => (
                        <li
                          key={item}
                          className="border-t border-border-soft/70 pt-3 text-sm leading-7 text-muted sm:text-[0.98rem]"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </section>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </dialog>
  );
}
