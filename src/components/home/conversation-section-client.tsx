"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollReveal } from "@/components/ui/scroll-reveal";
import {
  contactActions,
  contactNetworks,
  type ContactAction,
  type ContactNetwork,
} from "@/data/contact-links";

type ConversationSectionClientProps = {
  hasImage: boolean;
};

function ContactActionItem({
  action,
}: {
  action: ContactAction;
}) {
  if (!action.href) {
    return (
      <span
        aria-disabled="true"
        className="conversation-action inline-flex min-h-12 items-center rounded-[0.65rem] px-5 py-3 text-sm"
      >
        {action.label}
      </span>
    );
  }

  return (
    <Link
      href={action.href}
      className="conversation-action inline-flex min-h-12 items-center rounded-[0.65rem] px-5 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-muted"
    >
      {action.label}
    </Link>
  );
}

function ContactNetworkItem({
  network,
}: {
  network: ContactNetwork;
}) {
  const icon =
    network.label === "LinkedIn" ? (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 10v6" />
        <path d="M8 7.5v0" />
        <path d="M12 16v-3.5a2.5 2.5 0 1 1 5 0V16" />
        <path d="M3.5 5.5h17v13h-17z" />
      </svg>
    ) : (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19.2 4.8A9 9 0 0 0 5.3 16L4 20l4.2-1.2A9 9 0 1 0 19.2 4.8Z" />
        <path d="M9.6 8.9c.2-.5.4-.6.7-.6h.6c.2 0 .5 0 .7.5l.3.8c.1.3.1.5-.1.8l-.3.4c-.1.1-.2.3 0 .6.4.8 1.1 1.5 1.9 1.9.2.1.4.1.6 0l.4-.3c.2-.2.5-.2.8-.1l.8.3c.5.2.5.5.5.7v.6c0 .3-.1.5-.6.7-.5.2-1.7.2-3.1-.6-1.4-.8-2.8-2.1-3.6-3.6-.8-1.5-.8-2.6-.6-3.1Z" />
      </svg>
    );

  if (!network.href) {
    return (
      <span
        aria-disabled="true"
        className="inline-flex items-center gap-2 text-sm text-muted"
      >
        {icon}
        <span>{network.label}</span>
      </span>
    );
  }

  return (
    <Link
      href={network.href}
      className="inline-flex items-center gap-2 text-sm text-foreground transition-colors duration-200 hover:text-accent-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-muted"
    >
      {icon}
      <span>{network.label}</span>
    </Link>
  );
}

export function ConversationSectionClient({
  hasImage,
}: ConversationSectionClientProps) {
  const { isRevealed, revealRef: sectionRef } = useScrollReveal<HTMLElement>();

  return (
    <section
      id="conversemos"
      ref={sectionRef}
      aria-labelledby="conversation-title"
      data-revealed={isRevealed}
      data-visible={isRevealed}
      className="conversation-reveal scroll-reveal scroll-reveal--fade-left overflow-hidden bg-surface scroll-mt-28 sm:scroll-mt-32"
    >
      <div className="mx-auto grid w-full max-w-[92rem] gap-10 px-5 py-10 sm:px-8 sm:py-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(26rem,1.08fr)] lg:items-center lg:gap-10 lg:px-12 lg:py-14">
        <div className="scroll-reveal-stagger flex max-w-2xl flex-col gap-7">
          <span className="h-px w-16 bg-accent-muted/55" aria-hidden="true" />
          <h2
            id="conversation-title"
          className="text-4xl leading-tight text-foreground sm:text-[3.15rem]"
          >
            Conversemos
          </h2>
          <p className="text-lg leading-8 text-muted sm:text-xl sm:leading-9">
            Conversemos sobre tus objetivos patrimoniales. Te ayudamos a ordenar
            alternativas, riesgos, plazos, monedas y proveedores para tomar
            decisiones mejor informadas.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            {contactActions.map((action) => (
              <ContactActionItem key={action.label} action={action} />
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2">
            {contactNetworks.map((network) => (
              <ContactNetworkItem key={network.label} network={network} />
            ))}
          </div>
        </div>

        <div className="scroll-reveal-stagger relative min-h-[22rem] overflow-hidden rounded-[1.5rem] border border-border-soft/80 bg-surface-soft sm:min-h-[28rem] lg:min-h-[36rem]">
          {hasImage ? (
            <>
              <Image
                src="/images/contact/conversemos.png"
                alt="Profesionales conversando en una sala de asesoría patrimonial"
                fill
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,82,120,0.03)_0%,rgba(17,82,120,0.14)_100%)]" />
            </>
          ) : (
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(143,203,217,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(74,131,162,0.42),transparent_28%),linear-gradient(135deg,rgba(247,251,253,0.18)_0%,rgba(247,251,253,0.04)_44%,rgba(247,251,253,0)_100%),repeating-linear-gradient(180deg,rgba(4,35,53,0.13)_0,rgba(4,35,53,0.13)_1px,transparent_1px,transparent_14px)]" />
          )}

          {!hasImage ? (
            <div className="relative z-10 flex h-full items-end px-6 py-6 sm:px-8 sm:py-8">
              <span className="text-[0.72rem] tracking-[0.1em] text-muted">
                Imagen corporativa pendiente
              </span>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
