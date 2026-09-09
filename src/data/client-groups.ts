export type ClientGroup = {
  alt: string;
  id: string;
  title: string;
  imageSrc: string;
};

export const clientGroups: ClientGroup[] = [
  {
    alt: "Fotografía minimalista de textura de piedra representando serenidad, solidez y preservación patrimonial",
    id: "personas-y-familias",
    title: "Personas y familias",
    imageSrc: "/images/who-we-serve/piedra.jpeg",
  },
  {
    alt: "Fotografía minimalista de muro arquitectónico representando disciplina y estructura institucional",
    id: "empresas-e-instituciones",
    title: "Empresas e instituciones",
    imageSrc: "/images/who-we-serve/muro.jpeg",
  },
  {
    alt: "Fotografía minimalista de superficie de agua representando fluidez, visión global y perspectiva de largo plazo",
    id: "family-office-y-gestores",
    title: "Family Office y gestores",
    imageSrc: "/images/who-we-serve/agua.jpeg",
  },
];
