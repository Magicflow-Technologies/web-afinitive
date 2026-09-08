export type ContactAction = {
  label: string;
  href: string | null;
};

export type ContactNetwork = {
  label: "LinkedIn" | "WhatsApp";
  href: string | null;
};

export const contactActions: ContactAction[] = [
  {
    label: "contacto@afinitive.com.pe",
    href: "mailto:contacto@afinitive.com.pe",
  },
  {
    label: "Suscríbete",
    href: null,
  },
];

export const contactNetworks: ContactNetwork[] = [
  {
    label: "LinkedIn",
    href: null,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/51902821992",
  },
];

export const whatsappFloatingHref = "https://wa.me/51902821992";
