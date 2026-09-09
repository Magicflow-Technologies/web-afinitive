export type TeamMember = {
  id: string;
  firstName: string;
  lastName: string;
  role: string;
  imageSrc: string;
  imageClassName?: string;
  profileTitle: string;
  locations: string;
  biography: string[];
  education: string[];
  leadership: string[];
};

export const teamMembers: TeamMember[] = [
  {
    id: "ricardo-bertalmio",
    firstName: "Ricardo",
    lastName: "Bertalmio",
    role: "CEO & Socio Fundador",
    imageSrc: "/images/team/ricardo-bertalmio.png",
    imageClassName: "scale-[1.12] object-[center_18%]",
    profileTitle: "CEO & Socio Fundador",
    locations: "Lima • Bogotá • Santiago",
    biography: [
      "Lidera las relaciones con clientes y la ejecución local con un enfoque en estructuración, preservación y crecimiento de patrimonio a través de soluciones a la medida y un enfoque disciplinado y de alto contacto.",
      "Con amplia experiencia en los mercados financieros, ha sido socio de confianza de firmas en la construcción, diversificación y gestión de portafolios de inversión inmobiliaria en múltiples clases de activos.",
      "Su fortaleza radica en traducir necesidades complejas en estrategias claras y planes ejecutables, con consistencia en la asignación de capital y la toma de decisiones.",
    ],
    education: [
      "Economista, Universidad del Pacifico.",
      "MBA en Finanzas Corporativas, Universidad del Pacifico.",
    ],
    leadership: [],
  },
  {
    id: "renzo-castillo",
    firstName: "Renzo",
    lastName: "Castillo",
    role: "Independent Board Director",
    imageSrc: "/images/team/renzo-castillo.png",
    profileTitle: "Independent Board Director",
    locations: "San Francisco • New York • Lima",
    biography: [
      "Renzo Castillo incorpora al Directorio una perspectiva cross-border, desarrollada a través de su trayectoria profesional en Estados Unidos y América Latina.",
      "Su experiencia abarca M&A, private equity, capital allocation y fundraising, así como la creación, escalamiento y exits de empresas en industrias altamente competitivas.",
      "Con base en Silicon Valley, aporta además una perspectiva estratégica sobre el impacto de la inteligencia artificial en el diseño de modelos operativos, la calidad de las decisiones empresariales y la formación de ventajas competitivas.",
      "Desde el Directorio, contribuye con criterio independiente a las decisiones de inversión, crecimiento y alianzas estratégicas, priorizando la disciplina institucional y la creación de valor a largo plazo.",
    ],
    education: [
      "B.A. in Economics, University of California, Berkeley",
      "MBA, The Wharton School, University of Pennsylvania",
      "Executive Education in Digital Transformation, Stanford University",
    ],
    leadership: [],
  },
  {
    id: "gonzalo-arrieta",
    firstName: "Gonzalo",
    lastName: "Arrieta",
    role: "Nuevos Proyectos",
    imageSrc: "/images/team/gonzalo-arrieta.png",
    profileTitle: "Socio de Soluciones de Inversión",
    locations: "Lima • Bogotá • Santiago",
    biography: [
      "Abogado con amplia experiencia en litigios complejos y procedimientos de arbitraje de alto nivel, asesorando a clientes nacionales e internacionales en organizaciones de los sectores de infraestructura, construcción, contratación pública e industrias deportivas. Su práctica se distingue por su enfoque estratégico para la resolución de disputas, combinado con un sólido conocimiento legal y una perspectiva comercial orientada a resultados.",
      "En el sector deportivo, ha asesorado a federaciones internacionales, clubes profesionales y atletas de élite, así como en su rol como Gerente Legal Corporativo para organizaciones de fútbol profesional. Su experiencia abarca asuntos regulatorios, gestión de riesgos, gobernanza y resolución de disputas en entornos altamente especializados.",
    ],
    education: [
      "Licenciatura en Ingeniería Industrial, Universidad de Lima.",
      "Maestría en Ciencias (M.Sc.) en Finanzas, con especialización en Finanzas Corporativas, Universidad del Pacífico.",
      "Maestría en Dirección de Marketing y Estrategia Comercial, Universidad Peruana de Ciencias Aplicadas (UPC).",
      "Especialización de Posgrado en Diseño y Estructuración de Fideicomisos, Universidad ESAN.",
    ],
    leadership: [],
  },
  {
    id: "yesandra-escobar",
    firstName: "Yesandra",
    lastName: "Escobar",
    role: "Client Experience",
    imageSrc: "/images/team/yesandra-escobar.png",
    profileTitle: "Socia de Desarrollo Corporativo y Finanzas",
    locations: "Lima • Bogotá • Santiago",
    biography: [
      "Profesional en Marketing y Relaciones Públicas con más de 12 años de experiencia liderando áreas comerciales, administrativas, financieras y de desarrollo de negocios en Perú y Venezuela. Cuenta con una sólida trayectoria en planificación estratégica, gestión comercial, administración corporativa y desarrollo de relaciones de alto valor, participando en la estructuración y ejecución de operaciones financieras y comerciales complejas.",
      "Actualmente se desempeña como Gerente Administrativo y de Soporte Comercial y Finanzas en Fidox Perú, participando en la estructuración comercial, financiera y legal de créditos empresariales, fideicomisos bancarios y de titulización, así como en emisiones vinculadas al mercado de capitales. Su experiencia incluye desarrollo de negocios, negociación estratégica, gestión de clientes corporativos y liderazgo de equipos multidisciplinarios, contribuyendo al crecimiento sostenible y la generación de valor.",
    ],
    education: [
      "Licenciada en Marketing con mención en Relaciones Públicas.",
      "Especialización en Gerencia Estratégica de Marketing.",
      "Especialización en Ventas Digitales.",
      "Especialización en Diseño y Estructuración de Fideicomisos.",
      "Formación en Gestión Corporativa.",
    ],
    leadership: [],
  },
  {
    id: "giancarlo-mandriotti",
    firstName: "Giancarlo",
    lastName: "Mandriotti",
    role: "Legal Advisor",
    imageSrc: "/images/team/giancarlo-mandriotti.png",
    profileTitle: "Socio de Asesoría Legal Corporativa",
    locations: "Latinoamérica • Europa",
    biography: [
      "Abogado y árbitro con un distinguido historial en el manejo de disputas complejas de alta valoración y arbitrajes.",
      "Asesor de confianza para empresas líderes en sectores estratégicos, brindando asesoría en desafíos legales complicados, marcos regulatorios y consideraciones de gestión de riesgos.",
      "Reconocido por ofrecer soluciones prácticas, orientadas al negocio y para representar eficazmente a los clientes en procedimientos judiciales y arbitrales.",
      "Combina un profundo conocimiento legal con criterio estratégico y visión comercial, permitiendo a las organizaciones tomar decisiones críticas y complejas en entornos legales con total confianza.",
    ],
    education: [
      "Maestría en Derecho (LL.M.), Universidad Pompeu Fabra",
      "Maestría en Derecho, Pontificia Universidad Católica del Perú",
    ],
    leadership: [
      "Profesor de Derecho Procesal Civil, Universidad San Ignacio de Loyola.",
      "Conferencista y panelista en conferencias, seminarios y foros de la industria de arbitraje.",
      "Árbitro en instituciones líderes, incluido el Centro de Arbitraje de la Cámara de Comercio de Lima, La Pontificia Universidad Católica del Perú y el Consejo de Arbitraje de Lima.",
      "Participante activo en competencias internacionales de arbitrajes simuladas.",
    ],
  },
  {
    id: "juan-jose-lavaud",
    firstName: "Juan José",
    lastName: "Lavaud",
    role: "Real Estate Advisor",
    imageSrc: "/images/team/juan-jose-lavaud.png",
    profileTitle: "Socio de Inversiones y Estrategia Inmobiliaria",
    locations: "Lima • Latinoamérica",
    biography: [
      "Ejecutivo con más de 25 años de experiencia en el sector inmobiliario, especializado en inversiones, gestión de portafolios y desarrollo de proyectos. Ha liderado fondos de inversión y estrategias inmobiliarias para inversionistas institucionales y privados, participando en proyectos de alto impacto en distintos segmentos del mercado.",
      "Ha ocupado posiciones de liderazgo en W Capital SAFI, FIBRA, Urbanova, Qolono Inmobiliaria y Colliers. Actualmente es fundador de Casa 18 e InBestor, iniciativas enfocadas en inversión inmobiliaria, desarrollo de oportunidades y generación de valor patrimonial.",
    ],
    education: [
      "Bachiller en Administración, Universidad del Pacífico.",
      "Certified Commercial Investment Member (CCIM), The CCIM Institute.",
    ],
    leadership: [
      "Fundador de Casa 18.",
      "Fundador de InBestor.",
      "Ex CEO de W Capital SAFI.",
      "Ex Fund Manager de FIBRA.",
      "Ex Investment Director de Colliers.",
    ],
  },
  {
    id: "diego-marrero",
    firstName: "Diego",
    lastName: "Marrero",
    role: "Portfolio Manager",
    imageSrc: "/images/team/diego-marrero.png",
    profileTitle: "Socio de Inversiones y Mercados de Capitales",
    locations: "Perú • Mercados Globales",
    biography: [
      "Ejecutivo financiero con más de 20 años de experiencia en gestión de inversiones, administración de portafolios y mercados de capitales. Especializado en asset allocation y estrategias de inversión para inversionistas institucionales y patrimonios de gran escala.",
      "Fue Chief Investment Officer de AFP Habitat y Credifondo, liderando la gestión de activos y la definición de estrategias de inversión de largo plazo en algunas de las principales instituciones financieras del Perú.",
      "Actualmente es Portfolio Manager en Blum SAF. Cuenta con las certificaciones CFA y CAIA, y ha contribuido al desarrollo de la industria financiera como ex Director de CFA Society Perú.",
    ],
    education: ["MBA, Saïd Business School, University of Oxford."],
    leadership: [
      "Chartered Financial Analyst (CFA).",
      "Chartered Alternative Investment Analyst (CAIA).",
      "Ex Director, CFA Society Perú.",
      "Ex Chief Investment Officer, AFP Habitat.",
      "Ex Chief Investment Officer, Credifondo.",
    ],
  },
  {
    id: "kebor-montes",
    firstName: "Kebor",
    lastName: "Montes",
    role: "Director, AIS Financial Group",
    imageSrc: "/images/team/kebor.jpg",
    profileTitle: "Director, AIS Financial Group",
    locations: "Suiza • Europa",
    biography: [
      "Profesional de inversiones con más de 7 años de experiencia en AIS Financial Group, colaborando con bancos de inversión de primer nivel y clientes internacionales exigentes.",
      "Especializado en la estructuración de soluciones de inversión a medida, con foco en productos estructurados y soluciones cross-asset, optimizando pricing, ejecución y negociación con contrapartes globales.",
      "Ha liderado la oficina de Ginebra dirigiendo la estrategia cross-asset, con trayectoria previa en gestión de portafolios LATAM, productos derivados y coordinación de operaciones internacionales.",
    ],
    education: [
      "Máster en Ingeniería Industrial, Universidad Pontificia Comillas, Madrid.",
    ],
    leadership: [
      "Candidato CFA Nivel 1, CFA Institute.",
      "DALF C2, Institut Français (francés nativo).",
      "Más de 8 años de trayectoria internacional en Ginebra, Suiza.",
    ],
  },
];
