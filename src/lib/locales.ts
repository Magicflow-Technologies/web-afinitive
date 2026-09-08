export const defaultLocale = "es" as const;

// `en` debe permanecer deshabilitado hasta incorporar y validar
// todas las traducciones oficiales aprobadas por Afinitive.
export const locales = [
  {
    code: "es",
    label: "ES",
    enabled: true,
  },
  {
    code: "en",
    label: "EN",
    enabled: false,
  },
] as const;

export type LocaleConfig = (typeof locales)[number];
export type LocaleCode = LocaleConfig["code"];
