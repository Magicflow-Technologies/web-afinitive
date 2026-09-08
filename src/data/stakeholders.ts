export const stakeholders = [
  "Clientes",
  "Empleados",
  "Directivos",
  "Bancos",
  "Reguladores",
  "Fiduciarios",
  "Factoring",
  "Sociedades titulizadoras",
  "Custodios",
  "Brokers",
  "Compañías de seguros",
  "Agentes de bolsa",
  "Sociedades agentes de bolsa",
  "Estudios de abogados",
  "Clasificadoras de riesgo",
  "Gestores de inversión",
] as const;

export type Stakeholder = (typeof stakeholders)[number];
