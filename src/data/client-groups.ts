export type ClientGroup = {
  alt: string;
  id: string;
  title: string;
  imageSrc: string;
};

export const clientGroups: ClientGroup[] = [
  {
    alt: "Familia conversando en una residencia contemporánea junto a una ventana",
    id: "personas-y-familias",
    title: "Personas y familias",
    imageSrc: "/images/who-we-serve/personas-y-familias.png",
  },
  {
    alt: "Profesionales reunidos en un espacio privado de asesoría",
    id: "empresas-e-instituciones",
    title: "Empresas e instituciones",
    imageSrc: "/images/who-we-serve/instituciones-intermediarias.png",
  },
  {
    alt: "Ejecutivos conversando en una sala corporativa con ventanales",
    id: "family-office-y-gestores",
    title: "Family Office y gestores",
    imageSrc: "/images/who-we-serve/fondos-privados.png",
  },
];
