export const sectionNavigation = {
  afinitive: "#afinitive",
  equipo: "#equipo",
  aQuienesServimos: "#a-quienes-servimos",
  nuevosProyectos: "#nuevos-proyectos",
  conversemos: "#conversemos",
  oficinas: null,
  publicaciones: null,
  mercados: null,
  masAllaDeLosMercados: null,
  newsletter: null,
  accesoCliente: null,
  politicaPrivacidad: null,
} as const;

export type SectionNavigation = typeof sectionNavigation;
export type SectionNavigationKey = keyof SectionNavigation;
