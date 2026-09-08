export type ValueDifferentiator = {
  aspect: string;
  traditional: string;
  afinitive: string;
};

export const valueDifferentiators: ValueDifferentiator[] = [
  {
    aspect: "Asesoría Profesional",
    traditional: "Venta de productos estandarizados y comerciales.",
    afinitive: "Objetiva, integral y especializada.",
  },
  {
    aspect: "Transparencia",
    traditional: "Costos ocultos. Falta de claridad en riesgos y estructura.",
    afinitive:
      "Alta transparencia en estructura, riesgos y proveedores.",
  },
  {
    aspect: "Conflicto de interés",
    traditional:
      "Incentivos por cuota de colocación. Venta de productos de marca propia.",
    afinitive: "Arquitectura abierta y selección de proveedores.",
  },
  {
    aspect: "Diseño de solución",
    traditional:
      "Enfoque en campaña corporativa (rentabilidad o producto del mes).",
    afinitive:
      "Tailor – Made según objetivos, plazo, moneda, garantías y riesgo.",
  },
];
