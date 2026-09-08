import Link from "next/link";
import { footerNavigation } from "@/data/footer-navigation";

const expertiseLinks =
  footerNavigation.find((category) => category.title === "Qué hacemos")?.links ?? [];

export function ExpertiseRibbonSection() {
  if (expertiseLinks.length === 0) {
    return null;
  }

  return (
    <section className="expertise-ribbon" aria-label="Qué hacemos">
      <div className="expertise-ribbon-shell mx-auto w-full max-w-[88rem] px-5 sm:px-8 lg:px-12">
        <p className="expertise-ribbon-label">Qué hacemos</p>
        <nav aria-label="Servicios de Afinitive" className="expertise-ribbon-nav">
          <ul className="expertise-ribbon-list">
            {expertiseLinks.map((service) => (
              <li key={service.label}>
                {service.href ? (
                  <Link className="expertise-ribbon-link" href={service.href}>
                    <span>{service.label}</span>
                    <svg aria-hidden="true" fill="none" viewBox="0 0 20 20">
                      <path d="M4 10h11M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.35" />
                    </svg>
                  </Link>
                ) : (
                  <span aria-disabled="true" className="expertise-ribbon-link is-disabled">
                    <span>{service.label}</span>
                  </span>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
