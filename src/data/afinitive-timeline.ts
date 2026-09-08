export type AfinitiveTimelineMilestone = {
  year: string;
  title: string;
  description: string;
};

// Hitos publicados en la página oficial de historia de Afinitive.
export const afinitiveTimeline: readonly AfinitiveTimelineMilestone[] = [
  {
    year: "2002 – 2010",
    title: "FORMACIÓN DEL EQUIPO FUNDADOR",
    description:
      "Nuestros socios acumularon experiencia en banca y finanzas corporativas en Scotiabank,BBVA,Interbank,Santander y Citibank.",
  },
  {
    year: "2018",
    title: "NACE AFINITIVE",
    description:
      "Economistas de la Universidad del Pacífico fundan una boutique financiera de arquitectura abierta y asesoría a medida.",
  },
  {
    year: "2021",
    title: "AMPLIACIÓN DE SOLUCIONES",
    description:
      "Incorporamos fiduciarios SMV y SBS para estructurar vehículos de titulización con rendimientos de hasta dos dígitos.",
  },
  {
    year: "2025",
    title: "INTERNACIONALIZACIÓN",
    description:
      "Soluciones con eficiencia tributaria para inversión global,junto con talleres de educación financiera.",
  },
  {
    year: "Hoy",
    title: "EXCELENCIA Y COMPROMISO",
    description:
      "Innovamos con la misión de empoderar a inversionistas con transparencia y educación financiera de alto valor.",
  },
] as const;
