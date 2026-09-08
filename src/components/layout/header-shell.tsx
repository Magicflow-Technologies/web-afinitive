"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  clientAccessHref,
  footerNavigation,
  type FooterNavigationLink,
} from "@/data/footer-navigation";
import { sectionNavigation } from "@/data/section-navigation";
import { defaultLocale, locales } from "@/lib/locales";
import { contactActions, contactNetworks } from "@/data/contact-links";

type HeaderShellProps = {
  hasLogo: boolean;
};

const pendingTranslationTitle =
  "Versión en inglés pendiente de traducción oficial";

function HeaderUtilityLink({
  label,
  href,
}: {
  label: string;
  href: string | null;
}) {
  if (!href) {
    return (
      <span aria-disabled="true" className="header-utility-link">
        {label}
      </span>
    );
  }

  return (
    <Link href={href} className="header-utility-link">
      {label}
    </Link>
  );
}

function HeaderSubmenuLink({
  item,
  onNavigate,
}: {
  item: FooterNavigationLink;
  onNavigate: (href: string) => void;
}) {
  if (!item.href) {
    return (
      <span
        aria-disabled="true"
        className="site-header-submenu-link block rounded-xl px-3 py-2 text-sm"
      >
        {item.label}
      </span>
    );
  }

  const href = item.href;

  return (
    <Link
      href={href}
      className="site-header-submenu-link block rounded-xl px-3 py-2 text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-surface"
      onClick={(event) => {
        if (href.startsWith("#")) {
          event.preventDefault();
        }

        onNavigate(href);
      }}
    >
      {item.label}
    </Link>
  );
}

function DisabledPill({ label }: { label: string }) {
  return (
    <span
      aria-disabled="true"
      className="site-header-disabled-pill rounded-full border border-border-soft/90 px-4 py-2 text-sm"
    >
      {label}
    </span>
  );
}

export function HeaderShell({ hasLogo }: HeaderShellProps) {
  const headerRef = useRef<HTMLElement | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDesktopGroup, setOpenDesktopGroup] = useState<string | null>(null);
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenDesktopGroup(null);
        setIsMenuOpen(false);
        setOpenMobileGroup(null);
      }
    };

    const handlePointerDown = (event: MouseEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        setOpenDesktopGroup(null);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("mousedown", handlePointerDown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("mousedown", handlePointerDown);
    };
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isMenuOpen]);

  const headerClassName = isScrolled
    ? "border-border-soft/90 bg-white/92 shadow-[0_10px_30px_rgba(23,33,43,0.1)] backdrop-blur-sm"
    : "border-transparent bg-white";

  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenMobileGroup(null);
  };

  const closeDesktopMenus = () => {
    setOpenDesktopGroup(null);
  };

  const navigateToHref = (href: string) => {
    closeMenu();
    closeDesktopMenus();

    if (!href.startsWith("#")) {
      return;
    }

    const targetId = href.slice(1);
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const delay = isMenuOpen ? 220 : 0;

    window.setTimeout(() => {
      const target = document.getElementById(targetId);

      if (!target) {
        window.location.hash = href;
        return;
      }

      window.history.pushState(null, "", href);
      target.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "start",
      });
    }, delay);
  };

  const localeButtons = locales.map((locale) => {
    const isActive = locale.code === defaultLocale;
    const isDisabled = !locale.enabled;
    const className = isActive
      ? "rounded-full bg-foreground px-3 py-1.5 text-[0.7rem] font-semibold tracking-[0.24em] text-surface"
      : "rounded-full px-3 py-1.5 text-[0.7rem] font-semibold tracking-[0.24em] text-muted";

    return (
      <button
        key={locale.code}
        type="button"
        className={className}
        aria-pressed={isActive}
        aria-current={isActive ? "true" : undefined}
        aria-disabled={isDisabled}
        title={isDisabled ? pendingTranslationTitle : undefined}
      >
        <span>{locale.label}</span>
        {isDisabled ? (
          <span className="sr-only"> {pendingTranslationTitle}</span>
        ) : null}
      </button>
    );
  });

  const desktopGroups = useMemo(
    () =>
      footerNavigation.map((category) => ({
        ...category,
        menuId: `desktop-menu-${category.title
          .toLowerCase()
          .replaceAll(" ", "-")
          .replaceAll("¿", "")
          .replaceAll("é", "e")
          .replaceAll("ó", "o")}`,
      })),
    [],
  );

  const mobileGroups = useMemo(
    () =>
      footerNavigation.map((category) => ({
        ...category,
        panelId: `mobile-group-${category.title
          .toLowerCase()
          .replaceAll(" ", "-")
          .replaceAll("¿", "")
          .replaceAll("é", "e")
          .replaceAll("ó", "o")}`,
      })),
    [],
  );

  return (
    <header
      ref={headerRef}
      className={`site-header sticky top-0 z-50 border-b [--surface-warm:var(--color-brand)] [--text-charcoal:var(--color-on-brand)] [--text-muted:var(--color-on-brand-muted)] transition-all duration-200 ${headerClassName}`}
    >
      {!isScrolled ? (
        <div className="header-utility-bar border-b border-border-soft/70 bg-surface-soft">
          <div className="mx-auto flex min-h-10 w-full max-w-[88rem] flex-wrap items-center justify-between gap-x-6 gap-y-1 px-5 py-2 text-xs sm:px-8 lg:px-12">
            <div className="flex items-center gap-2">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-3.5 w-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m4 7 8 6 8-6" />
              </svg>
              <HeaderUtilityLink
                label={contactActions[0].label}
                href={contactActions[0].href}
              />

              <span aria-hidden="true" className="mx-1 text-border-soft">
                /
              </span>

              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-3.5 w-3.5 shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              <address className="not-italic">
                Camino Real 1236 · San Isidro, Lima · Perú
              </address>
            </div>

            <div className="flex items-center gap-4">
              {contactNetworks.map((network) => (
                <HeaderUtilityLink
                  key={network.label}
                  label={network.label}
                  href={network.href}
                />
              ))}
            </div>
          </div>
        </div>
      ) : null}

      <div className="mx-auto flex min-h-20 w-full max-w-[88rem] items-center gap-4 px-5 sm:px-8 lg:px-12">
        <Link
          href={sectionNavigation.afinitive}
          className="flex shrink-0 items-center"
          aria-label="Afinitive"
          onClick={(event) => {
            event.preventDefault();
            navigateToHref(sectionNavigation.afinitive);
          }}
        >
          {hasLogo ? (
            <Image
              src="/images/logo-afinitive-transparent.png"
              alt="Afinitive"
              width={168}
              height={34}
              preload
              className="h-auto w-[132px] sm:w-[150px] lg:w-[168px]"
            />
          ) : (
            <span className="font-serif text-[1.55rem] tracking-[0.18em] text-foreground sm:text-[1.7rem]">
              Afinitive
            </span>
          )}
        </Link>

        <nav
          aria-label="Navegación principal"
          className="ml-auto hidden items-center gap-3 lg:flex"
        >
          {desktopGroups.map((group) => {
            if (group.title === "Contacto") {
              return (
                <div key={group.title} className="relative">
                  <Link
                    href={sectionNavigation.conversemos}
                    className="rounded-full px-3 py-2 text-sm text-muted transition-colors duration-200 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-muted"
                    onClick={(event) => {
                      event.preventDefault();
                      navigateToHref(sectionNavigation.conversemos);
                    }}
                  >
                    {group.title}
                  </Link>
                </div>
              );
            }

            if (group.title === "Quiénes somos") {
              return (
                <div key={group.title} className="relative">
                  <Link
                    href={sectionNavigation.oficinas!}
                    className="rounded-full px-3 py-2 text-sm text-muted transition-colors duration-200 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-muted"
                    onClick={(event) => {
                      event.preventDefault();
                      navigateToHref(sectionNavigation.oficinas!);
                    }}
                  >
                    {group.title}
                  </Link>
                </div>
              );
            }

            const isOpen = openDesktopGroup === group.title;

            return (
              <div key={group.title} className="relative">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={group.menuId}
                  className="rounded-full px-3 py-2 text-sm text-muted transition-colors duration-200 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-muted"
                  onClick={() =>
                    setOpenDesktopGroup((current) =>
                      current === group.title ? null : group.title,
                    )
                  }
                >
                  {group.title}
                </button>

                {isOpen ? (
                  <div
                    id={group.menuId}
                    className="absolute top-full left-0 mt-3 min-w-[16rem] rounded-[1.4rem] border border-border-soft/70 bg-white p-3 shadow-[0_18px_42px_rgba(23,33,43,0.14)]"
                  >
                    <ul className="space-y-1">
                      {group.links.map((item) => (
                        <li key={item.label}>
                          <HeaderSubmenuLink
                            item={item}
                            onNavigate={navigateToHref}
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>

        <div className="ml-auto hidden items-center gap-4 lg:flex">
          <div
            className="inline-flex items-center rounded-full border border-border-soft/90 bg-white/10 p-1"
            aria-label="Selector visual de idioma"
          >
            {localeButtons}
          </div>

          {clientAccessHref ? (
            <Link
              href={clientAccessHref}
              className="rounded-full border border-border-soft/90 px-4 py-2 text-sm text-foreground hover:border-surface hover:text-surface"
            >
              Acceso cliente
            </Link>
          ) : (
            <DisabledPill label="Acceso cliente" />
          )}
        </div>

        <button
          type="button"
          className="ml-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-border-soft/90 bg-white/10 text-foreground lg:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={() => {
            setIsMenuOpen((open) => !open);
            setOpenDesktopGroup(null);
          }}
        >
          <span className="sr-only">
            {isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          </span>
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          >
            {isMenuOpen ? (
              <>
                <path d="M6 6L18 18" />
                <path d="M18 6L6 18" />
              </>
            ) : (
              <>
                <path d="M4 7H20" />
                <path d="M4 12H20" />
                <path d="M4 17H20" />
              </>
            )}
          </svg>
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-border-soft/70 bg-white transition-[max-height,opacity] duration-200 lg:hidden ${
          isMenuOpen ? "max-h-[48rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          aria-label="Navegación móvil"
          className="mx-auto flex max-w-[88rem] flex-col px-5 py-4 sm:px-8"
        >
          {mobileGroups.map((group) => {
            if (group.title === "Contacto") {
              return (
                <div key={group.title} className="border-b border-border-soft/80">
                  <Link
                    href={sectionNavigation.conversemos}
                    className="flex w-full items-center justify-between py-3 text-left text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-muted"
                    onClick={(event) => {
                      event.preventDefault();
                      navigateToHref(sectionNavigation.conversemos);
                    }}
                  >
                    <span>{group.title}</span>
                  </Link>
                </div>
              );
            }

            if (group.title === "Quiénes somos") {
              return (
                <div key={group.title} className="border-b border-border-soft/80">
                  <Link
                    href={sectionNavigation.oficinas!}
                    className="flex w-full items-center justify-between py-3 text-left text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-muted"
                    onClick={(event) => {
                      event.preventDefault();
                      navigateToHref(sectionNavigation.oficinas!);
                    }}
                  >
                    <span>{group.title}</span>
                  </Link>
                </div>
              );
            }

            const isOpen = openMobileGroup === group.title;

            return (
              <div key={group.title} className="border-b border-border-soft/80">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={group.panelId}
                  className="flex w-full items-center justify-between py-3 text-left text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-muted"
                  onClick={() =>
                    setOpenMobileGroup((current) =>
                      current === group.title ? null : group.title,
                    )
                  }
                >
                  <span>{group.title}</span>
                  <span aria-hidden="true" className="text-muted">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div
                  id={group.panelId}
                  className={`${isOpen ? "pb-3" : "hidden"}`}
                >
                  <ul className="space-y-1">
                    {group.links.map((item) => (
                      <li key={item.label}>
                        <HeaderSubmenuLink
                          item={item}
                          onNavigate={navigateToHref}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}

          <div className="mt-5 flex items-center justify-between gap-4">
            <div
              className="inline-flex items-center rounded-full border border-border-soft/90 bg-white/10 p-1"
              aria-label="Selector visual de idioma"
            >
              {localeButtons}
            </div>

            {clientAccessHref ? (
              <Link
                href={clientAccessHref}
                className="rounded-full border border-border-soft/90 px-4 py-2 text-sm text-foreground hover:border-surface hover:text-surface"
                onClick={closeMenu}
              >
                Acceso cliente
              </Link>
            ) : (
              <DisabledPill label="Acceso cliente" />
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
