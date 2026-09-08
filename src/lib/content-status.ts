export const contentStatus = {
  // Todo el contenido actual corresponde a español.
  // Antes de activar inglés se deben validar traducciones oficiales de:
  // hero, secciones de portada, cifras, perfiles del equipo, modales,
  // acciones, navegación, footer, textos alternativos y metadata.
  es: "complete",
  en: "pending_official_translation",
} as const;

export type ContentStatus = typeof contentStatus;
