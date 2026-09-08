export type Regulator = {
  name: string;
  imageSrc: string;
  description: string;
};

export const regulators: Regulator[] = [
  {
    name: "Superintendencia del Mercado de Valores",
    imageSrc: "/images/regulators/smv.png",
    description:
      "Es un organismo técnico especializado adscrito al Ministerio de Economía y Finanzas que tiene por finalidad velar por la protección de los inversionistas, la eficiencia y transparencia de los mercados bajo su supervisión, la correcta formación de precios y la difusión de toda la información necesaria para tales propósitos.",
  },
  {
    name: "Supervisión y Regulación",
    imageSrc: "/images/regulators/sbs.png",
    description:
      "Es el organismo encargado de la regulación y supervisión de los sistemas financiero, de seguros y privado de pensiones (SPP), así como de prevenir y detectar el lavado de activos y financiamiento del terrorismo. Su objetivo primordial es preservar los intereses de los depositantes, de los asegurados y de los afiliados al SPP.",
  },
  {
    name: "Supervisión LAFT UIF – SBS",
    imageSrc: "/images/regulators/sbs.png",
    description:
      "Unidad Especializada de la SBS encargada de recibir, analizar y transmitir información para la detección del Lavado de Activos y/o del Financiamiento del Terrorismo; así como coadyuvar a la implementación por parte de los Sujetos Obligados del sistema de prevención para detectar y reportar operaciones sospechosas de Lavado de Activos y Financiamiento del Terrorismo.",
  },
  {
    name: "U.S. Securities and Exchange Commission",
    imageSrc: "/images/regulators/sec.png",
    description:
      "Es una agencia independiente del gobierno federal de los Estados Unidos. Su misión principal es proteger a los inversores, mantener mercados de valores justos, ordenados y eficientes, y facilitar la formación de capital. Regula la divulgación de información clave y supervisa a los participantes del mercado para prevenir fraudes.",
  },
];
