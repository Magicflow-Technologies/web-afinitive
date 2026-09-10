import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import Link from "next/link";
import {
  clientAccessHref,
  footerNavigation,
  privacyPolicyHref,
  type FooterNavigationLink,
} from "@/data/footer-navigation";

function FooterLink({ item }: { item: FooterNavigationLink }) {
  if (!item.href) {
    return (
      <span aria-disabled="true" className="site-footer-link text-sm leading-7 text-left block">
        {item.label}
      </span>
    );
  }

  return (
    <Link
      href={item.href}
      className="site-footer-link text-sm leading-7 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-muted text-left block"
    >
      {item.label}
    </Link>
  );
}

function FooterUtilityLink({
  label,
  href,
}: {
  label: string;
  href: string | null;
}) {
  if (!href) {
    return (
      <span aria-disabled="true" className="site-footer-link text-sm">
        {label}
      </span>
    );
  }

  return (
    <Link
      href={href}
      className="site-footer-link text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-muted"
    >
      {label}
    </Link>
  );
}

export function SiteFooter() {
  const logoPath = path.join(
    process.cwd(),
    "public",
    "images",
    "logo-afinitive-transparent.png",
  );
  const hasLogo = existsSync(logoPath);

  return (
    <footer className="site-footer [--text-charcoal:var(--color-heading)] [--text-muted:var(--color-body)]">
      <div className="site-footer-inner mx-auto grid w-full max-w-[98rem] gap-10 px-5 py-14 sm:px-8 xl:grid-cols-[minmax(14rem,0.6fr)_minmax(0,2.3fr)_minmax(18.5rem,0.9fr)] xl:gap-14 lg:px-12 lg:py-20">
        <div className="site-footer-brand flex flex-col justify-start">
          {hasLogo ? (
            <Image
              src="/images/logo-afinitive-transparent.png"
              alt="Afinitive"
              width={264}
              height={68}
              className="site-footer-logo h-auto w-[180px] sm:w-[210px] lg:w-[240px]"
            />
          ) : (
            <span className="site-footer-wordmark font-serif text-[2.4rem] tracking-[0.1em] text-foreground">
              Afinitive
            </span>
          )}
          <p className="site-footer-statement text-left">
            Preservando tu patrimonio
          </p>
        </div>

        <nav
          aria-label="Navegación del pie de página"
          className="site-footer-navigation grid gap-x-8 gap-y-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 xl:gap-x-10"
        >
          {footerNavigation.map((category) => (
            <div key={category.title} className="space-y-4">
              <h2 className="site-footer-heading text-[0.82rem] tracking-[0.16em] uppercase text-left">
                {category.title}
              </h2>
              <ul className="space-y-2">
                {category.links.map((item) => (
                  <li key={item.label}>
                    <FooterLink item={item} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <aside className="site-footer-contact" aria-label="Datos de contacto">
          <div className="site-footer-contact-item">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
              <path d="M5.4 4.8 8.3 4c.6-.2 1.2.1 1.5.7l1.1 2.7c.2.5.1 1-.3 1.4l-1.3 1.1c.9 1.8 2.3 3.2 4.1 4.1l1.1-1.3c.4-.4.9-.5 1.4-.3l2.7 1.1c.6.3.9.9.7 1.5l-.8 2.9c-.2.7-.9 1.1-1.6 1C10.3 18 6 13.7 5 6.4c-.1-.7.3-1.4 1-1.6Z" />
            </svg>
            <div>
              <span>Teléfono</span>
              <strong className="whitespace-nowrap">+51 902 821 992</strong>
            </div>
          </div>
          <div className="site-footer-contact-item">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m4 7 8 6 8-6" />
            </svg>
            <div>
              <span>Correo</span>
              <strong className="whitespace-nowrap">contacto@afinitive.com.pe</strong>
            </div>
          </div>
          <div className="site-footer-contact-item">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
              <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
            <address>
              <span>Ubicación</span>
              <strong>Camino Real 1236, San Isidro, Lima · Perú</strong>
            </address>
          </div>
        </aside>
      </div>

      <div className="site-footer-utility-wrap">
        <div className="site-footer-utility mx-auto flex w-full max-w-[96rem] flex-col gap-3 px-5 py-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <FooterUtilityLink label="Acceso cliente" href={clientAccessHref} />
          <FooterUtilityLink
            label="Política de privacidad"
            href={privacyPolicyHref}
          />
        </div>
      </div>
    </footer>
  );
}
