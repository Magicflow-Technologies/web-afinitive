export type FooterNavigationLink = {
  label: string;
  href: string | null;
};

export type FooterNavigationCategory = {
  title: string;
  links: FooterNavigationLink[];
};

import { sectionNavigation } from "@/data/section-navigation";

export const footerNavigation: FooterNavigationCategory[] = [
  {
    title: "Quiénes somos",
    links: [
      { label: "Afinitive", href: sectionNavigation.afinitive },
      { label: "Socios de Afinitive", href: sectionNavigation.equipo },
      { label: "Nuestras oficinas", href: sectionNavigation.oficinas },
    ],
  },
  {
    title: "A quién servimos",
    links: [
      {
        label: "Individuos y familias",
        href: sectionNavigation.aQuienesServimos,
      },
      {
        label: "Instituciones intermediarias bancarias",
        href: sectionNavigation.aQuienesServimos,
      },
      { label: "Fondos privados", href: sectionNavigation.aQuienesServimos },
    ],
  },
  {
    title: "Qué hacemos",
    links: [
      { label: "Asesoría financiera", href: sectionNavigation.nuevosProyectos },
      { label: "Wealth management", href: sectionNavigation.nuevosProyectos },
      { label: "Asset management", href: sectionNavigation.nuevosProyectos },
    ],
  },
  {
    title: "Publicaciones",
    links: [
      { label: "Últimas publicaciones", href: sectionNavigation.publicaciones },
      { label: "Mercados", href: sectionNavigation.mercados },
      {
        label: "Más allá de los mercados",
        href: sectionNavigation.masAllaDeLosMercados,
      },
      { label: "Suscribirse al newsletter", href: sectionNavigation.newsletter },
    ],
  },
  {
    title: "Contacto",
    links: [
      { label: "Página de descripción", href: sectionNavigation.conversemos },
      { label: "Formulario de contacto", href: sectionNavigation.conversemos },
    ],
  },
];

export const clientAccessHref = sectionNavigation.accesoCliente;
export const privacyPolicyHref = sectionNavigation.politicaPrivacidad;
