export type ClientGroup = {
  alt: string;
  id: string;
  title: string;
  imageSrc: string;
};

export const clientGroups: ClientGroup[] = [
  {
    alt: "Fotografía arquitectónica minimalista y monocromática representando serenidad, legado y preservación patrimonial familiar",
    id: "personas-y-familias",
    title: "Personas y familias",
    imageSrc: "/images/who-we-serve/personas-y-familias.png",
  },
  {
    alt: "Fotografía arquitectónica monocromática de estructuras geométricas limpias representando solidez institucional y disciplina",
    id: "empresas-e-instituciones",
    title: "Empresas e instituciones",
    imageSrc: "/images/who-we-serve/instituciones-intermediarias.png",
  },
  {
    alt: "Composición artística minimalista y monocromática representando visión global, gobernanza y perspectiva patrimonial de largo plazo",
    id: "family-office-y-gestores",
    title: "Family Office y gestores",
    imageSrc: "/images/who-we-serve/fondos-privados.png",
  },
];
