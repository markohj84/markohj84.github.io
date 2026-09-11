// Datos de los casos de estudio. Extraídos del diseño original (Claude Design).
// Cada caso tiene textos ES/EN; `slug` define la URL en /caso/<slug>.

export type Bi<T = string> = { es: T; en: T };
export type Step = { t: string; d: string };
export type Outcome = { k: string; d: string };

export type Case = {
	slug: string;
	kicker: string;
	title: Bi;
	client: string;
	role: Bi;
	year: string;
	linkTxt?: Bi;
	summary: Bi;
	context: Bi;
	steps: Bi<Step[]>;
	outcomes: Bi<Outcome[]>;
	tools: string[];
	img: string;
	imgs?: string[];
	link: string;
};

export const cases: Case[] = [
  {
    slug: "ciudad-bienestar",
    kicker: "01 / UX/UI · GOBIERNO",
    title: { es: "Caso de estudio: Ciudad Bienestar", en: "Case study: Ciudad Bienestar" },
    client: "Municipio de Benito Juárez, Cancún · Grupo Móvil México",
    role: { es: "Diseño UX/UI y mejora continua", en: "UX/UI design & continuous improvement" },
    year: "2025 — 2026",
    summary: { es: "Plataforma de atención ciudadana del Gobierno de Cancún: captura de jornadas, seguimiento de tareas, chatbot y un tablero de mando para la Presidencia Municipal.", en: "Citizen service platform for the Cancún Government: journey intake, task tracking, chatbot and a command dashboard for the Municipal Presidency." },
    context: { es: "La atención ciudadana se repartía entre jornadas en campo, ventanillas, redes sociales y comités de paz, cada canal con su propio registro. No existía una vista única del estado de las solicitudes ni una forma ágil de capturarlas en campo. El reto fue unificar todos los canales en un solo sistema operable por perfiles muy distintos, desde personal de campo hasta la Presidenta Municipal.", en: "Citizen service was split across field journeys, service windows, social media and peace committees, each with its own record. There was no single view of request status and no fast way to capture them in the field. The challenge was unifying every channel into one system usable by very different profiles, from field staff to the Municipal President." },
    steps: {
      es: [
        { t: "Arquitectura por perfiles", d: "Un menú de módulos (Jornadas, Secretarías, Chatbot, Inbox, Comités de Paz, Seguridad Ciudadana) con permisos y accesos distintos según el rol." },
        { t: "Captura en cuatro pasos", d: "El registro de una jornada se dividió en identificación con INE, intención y motivo, área responsable y ubicación, con confirmación final antes de enviar." },
        { t: "Tablero de mando", d: "Vista corta y vista completa para la Presidencia: progreso de tareas, medios de contacto, categorías, participación ciudadana y mapas en una sola pantalla." },
        { t: "Mejora continua", d: "Iteraciones sobre usabilidad y accesibilidad a partir del uso real, documentadas en el manual operativo de la plataforma." }
      ],
      en: [
        { t: "Role-based architecture", d: "A module menu (Journeys, Secretariats, Chatbot, Inbox, Peace Committees, Citizen Safety) with permissions and access per role." },
        { t: "Four-step intake", d: "Journey registration split into ID verification, intent and reason, responsible area and location, with a final confirmation before submitting." },
        { t: "Command dashboard", d: "Short and full views for the Presidency: task progress, contact channels, categories, citizen participation and maps on a single screen." },
        { t: "Continuous improvement", d: "Usability and accessibility iterations driven by real usage, documented in the platform's operating manual." }
      ]
    },
    outcomes: {
      es: [
        { k: "37,421", d: "Tareas ciudadanas gestionadas en la plataforma, con 80% resueltas." },
        { k: "26,493", d: "Personas atendidas a través de los distintos canales del sistema." },
        { k: "6 días", d: "Tiempo promedio de atención en las 27 jornadas ciudadanas registradas." }
      ],
      en: [
        { k: "37,421", d: "Citizen tasks managed in the platform, 80% resolved." },
        { k: "26,493", d: "People served across the system's different channels." },
        { k: "6 days", d: "Average resolution time across the 27 registered citizen journeys." }
      ]
    },
    tools: ["Figma", "Design Thinking", "Maze", "Chatbot", "IA generativa"],
    img: "/assets/cb/dashboard-w.webp",
    imgs: ["/assets/cb/dashboard-w.webp","/assets/cb/login-w.png","/assets/cb/menu-w.png","/assets/cb/bitacora-clusters-w.png","/assets/cb/informe-area-w.png","/assets/cb/dashboard-jornadas-w.png","/assets/cb/monitor-evidencias-w.png","/assets/cb/mesa-ayuda-w.png","/assets/cb/chatbot-w.png"],
    link: "https://www.behance.net/marcohj"
  },
  {
    slug: "las-cholulas",
    kicker: "02 / PRODUCTO · IA",
    title: { es: "Caso de estudio: Las Cholulas", en: "Case study: Las Cholulas" },
    client: "Las Cholulas · Ecosistema Digital Local · Cholula, Puebla",
    role: { es: "Producto, UX/UI y diseño del sistema", en: "Product, UX/UI & system design" },
    year: "2026",
    linkTxt: { es: "VISITAR LASCHOLULAS.COM", en: "VISIT LASCHOLULAS.COM" },
    summary: { es: "Ecosistema digital de descubrimiento local para Cholula: directorio y redes, menú digital con IA, programa de lealtad y un chatbot de atención y pedidos, todo bajo un mismo login.", en: "Local discovery ecosystem for Cholula: directory and social, AI-powered digital menu, loyalty program and a service-and-orders chatbot, all under a single login." },
    context: { es: "Los negocios de Cholula viven entre redes sociales y listas de precios impresas: cada cambio obliga a reimprimir y el turista que busca qué comer no los encuentra. El reto no era vender otro menú digital, sino diseñar presencia: un ecosistema donde descubrimiento, conversión y retención fueran capas del mismo producto y donde el dueño pudiera operar todo desde su celular, en español e inglés.", en: "Businesses in Cholula live between social media and printed price lists: every change means reprinting, and the tourist looking for a place to eat never finds them. The challenge was not selling another digital menu but designing presence: one ecosystem where discovery, conversion and retention are layers of the same product, operable from the owner's phone in Spanish and English." },
    steps: {
      es: [
        { t: "Cuatro capas, un solo plan", d: "Directorio y redes (descubrimiento), menú digital con QR (conversión) y lealtad (retención) diseñados como capas del mismo producto, incluidas desde el primer día en los tres planes de afiliación." },
        { t: "Panel de negocio", d: "Selector de sucursal, pestañas Menú Digital · Fidelización · Landing Pro y estados vacíos que enseñan el siguiente paso: agregar producto, publicar link y QR, compartir y vender." },
        { t: "IA dentro del producto", d: "Generación de descripciones, copy e imágenes promocionales listas para publicar; traducción asistida ES/EN para menús multiidioma y un asistente de alta que crea productos a partir de texto o de una foto." },
        { t: "Chatbot de atención y pedidos", d: "Flujo conversacional que resuelve horarios, menú y disponibilidad, y deriva el pedido a WhatsApp sin comisiones. Es la pieza que diferencia al plan Empresarial." },
        { t: "Lealtad con escaneo QR", d: "Tarjeta digital única por cliente, sellada desde la cámara del celular del negocio, con ventana anti-doble-lectura y confirmación visual en tiempo real." }
      ],
      en: [
        { t: "Four layers, one plan", d: "Directory and social (discovery), QR digital menu (conversion) and loyalty (retention) designed as layers of the same product, included from day one across the three affiliation plans." },
        { t: "Business panel", d: "Branch selector, Digital Menu · Loyalty · Landing Pro tabs and empty states that teach the next step: add a product, publish link and QR, share and sell." },
        { t: "AI inside the product", d: "Generated descriptions, copy and promo images ready to post; AI-assisted ES/EN translation for multilingual menus and an intake assistant that creates products from text or a photo." },
        { t: "Service & orders chatbot", d: "A conversational flow that answers hours, menu and availability, then hands the order to WhatsApp with no commissions. It is what sets the Enterprise plan apart." },
        { t: "QR-scanned loyalty", d: "A unique digital card per customer, stamped from the venue's phone camera, with an anti-double-read window and real-time visual confirmation." }
      ]
    },
    outcomes: {
      es: [
        { k: "3 planes", d: "Básico, Pro y Empresarial: de la primera ficha digital al ecosistema completo con chatbot e IA." },
        { k: "3–5 seg", d: "Registro de una visita por escaneo QR, frente a los 30 segundos de la tarjeta de papel." },
        { k: "ES / EN", d: "Menús bilingües con traducción asistida por IA, listos para editar antes de publicar." }
      ],
      en: [
        { k: "3 plans", d: "Basic, Pro and Enterprise: from a first digital listing to the full ecosystem with chatbot and AI." },
        { k: "3–5 sec", d: "Visit logged by QR scan, against the 30 seconds of a paper card." },
        { k: "ES / EN", d: "Bilingual menus with AI-assisted translation, editable before publishing." }
      ]
    },
    tools: ["Figma", "IA generativa", "Prompt Engineering", "Chatbot", "HTML5 · CSS3"],
    img: "/assets/lc/mockup.png",
    imgs: ["/assets/lc/mockup.png", "/assets/lc/menu-digital.png", "/assets/lc/fidelizacion.png"],
    link: "https://lascholulas.com"
  },
  {
    slug: "app-promociones-banorte",
    kicker: "03 / UX/UI · BANCA",
    title: { es: "Caso de estudio: App Promociones Banorte", en: "Case study: Promociones Banorte App" },
    client: "Grupo Financiero Banorte · Apps World",
    role: { es: "Diseño UI/UX e imagen gráfica", en: "UI/UX design & visual identity" },
    year: "2015 — 2025",
    summary: { es: "Rediseño de la experiencia del programa de lealtad: catálogo de promociones, navegación y arquitectura de información de una app usada por miles de clientes bancarios.", en: "Redesign of the loyalty program experience: promotions catalog, navigation and information architecture of an app used by thousands of banking customers." },
    context: { es: "La app concentraba cientos de promociones sin una jerarquía clara: los usuarios no encontraban los beneficios cercanos y la interfaz había quedado desalineada de las tendencias del mercado. El reto fue modernizar la experiencia sin romper la continuidad de marca del programa.", en: "The app held hundreds of promotions with no clear hierarchy: users could not find nearby benefits and the interface had drifted from market standards. The challenge was modernizing the experience without breaking the program's brand continuity." },
    steps: {
      es: [
        { t: "Auditoría de la experiencia", d: "Revisión de flujos, inventario de pantallas y detección de fricciones en búsqueda y filtrado de promociones." },
        { t: "Arquitectura y wireframes", d: "Reorganización del catálogo por categoría y cercanía, con wireframes validados antes de subir la fidelidad." },
        { t: "UI de alta fidelidad", d: "Sistema visual consistente en Figma y Adobe XD, con prototipos interactivos para revisión con negocio y desarrollo." }
      ],
      en: [
        { t: "Experience audit", d: "Flow review, screen inventory and detection of friction in promotion search and filtering." },
        { t: "Architecture & wireframes", d: "Catalog reorganized by category and proximity, with wireframes validated before raising fidelity." },
        { t: "High-fidelity UI", d: "Consistent visual system in Figma and Adobe XD, with interactive prototypes for business and dev review." }
      ]
    },
    outcomes: {
      es: [
        { k: "10 años", d: "Responsable continuo de la evolución del producto y su imagen gráfica." },
        { k: "UX modernizada", d: "Experiencia alineada a tendencias actuales del mercado y con usabilidad mejorada." }
      ],
      en: [
        { k: "10 years", d: "Continuous owner of the product's evolution and visual identity." },
        { k: "Modernized UX", d: "Experience aligned with current market standards and improved usability." }
      ]
    },
    tools: ["Figma", "Adobe XD", "Photoshop", "Illustrator"],
    img: "https://mir-s3-cdn-cf.behance.net/projects/original/536ae2207093355.Y3JvcCwyMDQ1LDE2MDAsMCww.png",
    link: "https://www.behance.net/gallery/207093355/Caso-de-Estudio-UXUI-App-Promociones-Banorte"
  },
  {
    slug: "buholegal",
    kicker: "04 / UX/UI · LEGALTECH",
    title: { es: "Caso de estudio: Buholegal", en: "Case study: Buholegal" },
    client: "Buholegal S. de R.L. de C.V.",
    role: { es: "Diseño web UI/UX y maquetación", en: "Web UI/UX design & front-end" },
    year: "2018 — 2024",
    summary: { es: "Transformación de un portal de contenido legal en una experiencia adaptable a móviles, más legible y más fácil de recorrer.", en: "Turning a legal content portal into a mobile-friendly experience that is easier to read and navigate." },
    context: { es: "El sitio recibía tráfico alto desde buscadores pero no era responsivo y su lectura en móvil era deficiente. Había que mejorar usabilidad y jerarquía sin perder posicionamiento ni volumen de contenido.", en: "The site received high search traffic but was not responsive and mobile reading was poor. Usability and hierarchy had to improve without losing SEO or content volume." },
    steps: {
      es: [
        { t: "Diagnóstico con datos", d: "Análisis de comportamiento y puntos de abandono para priorizar las plantillas más críticas." },
        { t: "Rediseño responsivo", d: "Nueva jerarquía tipográfica y layouts adaptables, maquetados con HTML5, CSS3 y JavaScript." },
        { t: "Design Thinking en el equipo", d: "Introducción de la metodología para el desarrollo de producto y las siguientes iteraciones." }
      ],
      en: [
        { t: "Data-led diagnosis", d: "Behavior and drop-off analysis to prioritize the most critical templates." },
        { t: "Responsive redesign", d: "New typographic hierarchy and adaptive layouts, built with HTML5, CSS3 and JavaScript." },
        { t: "Design Thinking in the team", d: "Methodology introduced for product development and later iterations." }
      ]
    },
    outcomes: {
      es: [
        { k: "100% responsivo", d: "Sitio adaptado a dispositivos móviles con mejor diseño y usabilidad." },
        { k: "Proceso optimizado", d: "Metodologías que mejoraron la eficiencia creativa del equipo." }
      ],
      en: [
        { k: "100% responsive", d: "Site adapted to mobile devices with better design and usability." },
        { k: "Optimized process", d: "Methodologies that improved the team's creative efficiency." }
      ]
    },
    tools: ["Figma", "HTML5", "CSS3", "JavaScript", "Hotjar"],
    img: "https://mir-s3-cdn-cf.behance.net/projects/original/2064da191700785.Y3JvcCwyMDQ1LDE2MDAsNzUsMA.png",
    link: "https://www.behance.net/gallery/191700785/Caso-de-Estudio-UXUI-Buholegal"
  },
  {
    slug: "sistema-diseno-buholegal",
    kicker: "05 / SISTEMA DE DISEÑO",
    title: { es: "Sistema de Diseño Buholegal", en: "Buholegal Design System" },
    client: "Buholegal S. de R.L. de C.V.",
    role: { es: "Definición y documentación del sistema", en: "System definition & documentation" },
    year: "2022 — 2024",
    summary: { es: "Biblioteca de componentes, tokens y patrones que dio consistencia visual al portal y aceleró el trabajo del equipo.", en: "Component library, tokens and patterns that brought visual consistency to the portal and sped up the team's work." },
    context: { es: "Cada nueva sección se resolvía desde cero, lo que producía inconsistencias visuales y retrabajo constante entre diseño y desarrollo.", en: "Every new section was solved from scratch, producing visual inconsistencies and constant rework between design and development." },
    steps: {
      es: [
        { t: "Inventario de interfaz", d: "Catalogación de todos los componentes existentes y detección de duplicados." },
        { t: "Tokens y escalas", d: "Definición de color, tipografía, espaciado y radios como base compartida." },
        { t: "Documentación y handoff", d: "Guías de uso, estados y variantes listas para consumo del equipo de desarrollo." }
      ],
      en: [
        { t: "Interface inventory", d: "Cataloging every existing component and spotting duplicates." },
        { t: "Tokens & scales", d: "Color, typography, spacing and radii defined as a shared foundation." },
        { t: "Documentation & handoff", d: "Usage guides, states and variants ready for the dev team." }
      ]
    },
    outcomes: {
      es: [
        { k: "Consistencia", d: "Un lenguaje visual único en todas las plantillas del portal." },
        { k: "Menos retrabajo", d: "Handoff más claro entre diseño y desarrollo." }
      ],
      en: [
        { k: "Consistency", d: "One visual language across every portal template." },
        { k: "Less rework", d: "Clearer handoff between design and development." }
      ]
    },
    tools: ["Figma", "Design tokens", "Platzi patterns"],
    img: "https://mir-s3-cdn-cf.behance.net/projects/original/2a3c45191701727.Y3JvcCwxOTE3LDE1MDAsMCww.png",
    link: "https://www.behance.net/gallery/191701727/Sistema-de-Diseno-Buholegal"
  },
  {
    slug: "mi-seleccion-banorte",
    kicker: "06 / APP · PATROCINIO",
    title: { es: "App Mi Selección Banorte", en: "Mi Selección Banorte App" },
    client: "Grupo Financiero Banorte · Apps World",
    role: { es: "Diseño UI y experiencia de marca", en: "UI design & brand experience" },
    year: "2019 — 2022",
    summary: { es: "Interfaz y lenguaje visual para la app del patrocinio deportivo del banco, con foco en emoción de marca y claridad de contenido.", en: "Interface and visual language for the bank's sports sponsorship app, focused on brand emotion and content clarity." },
    context: { es: "El producto debía transmitir la energía del patrocinio sin sacrificar la legibilidad de la información ni la solidez visual de una institución financiera.", en: "The product had to convey the energy of the sponsorship without sacrificing information legibility or the visual solidity of a financial institution." },
    steps: {
      es: [
        { t: "Dirección visual", d: "Exploraciones de color, tipografía e imagen alineadas al manual de marca." },
        { t: "Diseño de pantallas", d: "Home, contenidos y secciones de participación con jerarquía clara." },
        { t: "Prototipo interactivo", d: "Validación de navegación antes del desarrollo." }
      ],
      en: [
        { t: "Visual direction", d: "Color, typography and imagery explorations aligned with the brand manual." },
        { t: "Screen design", d: "Home, content and participation sections with clear hierarchy." },
        { t: "Interactive prototype", d: "Navigation validated before development." }
      ]
    },
    outcomes: {
      es: [
        { k: "Marca + UI", d: "Coherencia entre campaña, app y piezas promocionales." },
        { k: "Prototipo validado", d: "Decisiones de navegación probadas antes de escribir código." }
      ],
      en: [
        { k: "Brand + UI", d: "Coherence between campaign, app and promotional pieces." },
        { k: "Validated prototype", d: "Navigation decisions tested before writing code." }
      ]
    },
    tools: ["Adobe XD", "Photoshop", "Illustrator"],
    img: "https://mir-s3-cdn-cf.behance.net/projects/original/cca34a191172639.Y3JvcCwxMDA3LDc4OCw0OSww.jpg",
    link: "https://www.behance.net/gallery/191172639/App-Mi-Seleccion-Banorte"
  },
  {
    slug: "landing-promociones-banorte",
    kicker: "07 / WEB · CAPTACIÓN",
    title: { es: "Landing Page Promociones Banorte", en: "Promociones Banorte Landing Page" },
    client: "Grupo Financiero Banorte · Apps World",
    role: { es: "Diseño y maquetación web", en: "Web design & front-end" },
    year: "2018",
    summary: { es: "Landing de descarga del programa de lealtad: una sola pantalla para explicar el beneficio y llevar a la tienda de apps.", en: "Download landing page for the loyalty program: a single screen to explain the benefit and drive to the app stores." },
    context: { es: "La app necesitaba una puerta de entrada web clara para campañas, capaz de funcionar igual de bien en escritorio y en móvil.", en: "The app needed a clear web entry point for campaigns, working equally well on desktop and mobile." },
    steps: {
      es: [
        { t: "Mensaje y jerarquía", d: "Una promesa principal, beneficios en bloques y un solo llamado a la acción." },
        { t: "Diseño visual", d: "Aplicación del sistema gráfico del programa de lealtad." },
        { t: "Maquetación", d: "HTML5, CSS3 y JavaScript optimizados para carga y móvil." }
      ],
      en: [
        { t: "Message & hierarchy", d: "One main promise, benefits in blocks and a single call to action." },
        { t: "Visual design", d: "Applying the loyalty program's graphic system." },
        { t: "Front-end build", d: "HTML5, CSS3 and JavaScript optimized for load and mobile." }
      ]
    },
    outcomes: {
      es: [
        { k: "1 pantalla", d: "Todo el mensaje de campaña resuelto sin scroll innecesario." },
        { k: "Mobile first", d: "Comportamiento adaptable en todos los tamaños." }
      ],
      en: [
        { k: "1 screen", d: "The full campaign message solved without unnecessary scroll." },
        { k: "Mobile first", d: "Adaptive behavior at every size." }
      ]
    },
    tools: ["HTML5", "CSS3", "JavaScript", "Photoshop"],
    img: "https://mir-s3-cdn-cf.behance.net/projects/original/50cce361893973.Y3JvcCwxMzAzLDEwMTksMCwzOA.jpg",
    link: "https://www.behance.net/gallery/61893973/Landing-Page-Promociones-Banorte"
  },
  {
    slug: "propiedades-puebla",
    kicker: "08 / WEB · INMOBILIARIA",
    title: { es: "Propiedades Puebla", en: "Propiedades Puebla" },
    client: "Proyecto freelance",
    role: { es: "Diseño web y desarrollo front-end", en: "Web design & front-end development" },
    year: "2024",
    summary: { es: "Sitio inmobiliario con catálogo de propiedades, fichas de detalle y contacto directo con el asesor.", en: "Real estate site with a property catalog, detail pages and direct contact with the agent." },
    context: { es: "El cliente publicaba propiedades solo en redes sociales y perdía consultas por falta de un catálogo consultable y confiable.", en: "The client published properties only on social media and lost inquiries for lack of a browsable, trustworthy catalog." },
    steps: {
      es: [
        { t: "Estructura del catálogo", d: "Definición de filtros, ficha de propiedad y datos indispensables." },
        { t: "Diseño de interfaz", d: "Layouts con protagonismo fotográfico y contacto siempre visible." },
        { t: "Publicación", d: "Maquetación responsiva y puesta en línea." }
      ],
      en: [
        { t: "Catalog structure", d: "Filters, property page and essential data defined." },
        { t: "Interface design", d: "Photo-led layouts with contact always visible." },
        { t: "Launch", d: "Responsive build and go-live." }
      ]
    },
    outcomes: {
      es: [
        { k: "Catálogo propio", d: "Inventario consultable fuera de redes sociales." },
        { k: "Contacto directo", d: "Cada ficha conduce a una consulta con el asesor." }
      ],
      en: [
        { k: "Own catalog", d: "Browsable inventory outside social media." },
        { k: "Direct contact", d: "Every listing leads to an inquiry with the agent." }
      ]
    },
    tools: ["Figma", "HTML5", "CSS3", "WordPress"],
    img: "https://mir-s3-cdn-cf.behance.net/projects/original/5dc404196545877.Y3JvcCwyNTYwLDIwMDIsMCwxMg.png",
    link: "https://www.behance.net/gallery/196545877/Web-Development-Propiedades-Puebla"
  },
  {
    slug: "material-publicitario-banorte",
    kicker: "09 / DISEÑO GRÁFICO",
    title: { es: "Material Publicitario Banorte", en: "Banorte Promotional Material" },
    client: "Grupo Financiero Banorte · Apps World",
    role: { es: "Dirección gráfica y producción de piezas", en: "Graphic direction & asset production" },
    year: "2015 — 2025",
    summary: { es: "Sistema de piezas promocionales para campañas in-app, correo y redes del Programa de Lealtad.", en: "System of promotional pieces for in-app, email and social campaigns of the Loyalty Program." },
    context: { es: "Las campañas mensuales requerían decenas de piezas en múltiples formatos, con marcas comerciales aliadas distintas cada vez y un plazo corto de producción.", en: "Monthly campaigns required dozens of pieces in multiple formats, with different partner brands each time and short production deadlines." },
    steps: {
      es: [
        { t: "Plantillas maestras", d: "Rejillas y jerarquías reutilizables por formato para producir rápido." },
        { t: "Adaptación por marca", d: "Integración de logotipos y colores de aliados sin romper el sistema." },
        { t: "Entrega multiformato", d: "Exportación para app, correo, web y redes sociales." }
      ],
      en: [
        { t: "Master templates", d: "Reusable grids and hierarchies per format for fast production." },
        { t: "Brand adaptation", d: "Partner logos and colors integrated without breaking the system." },
        { t: "Multi-format delivery", d: "Exports for app, email, web and social." }
      ]
    },
    outcomes: {
      es: [
        { k: "Identidad sólida", d: "Imagen consistente del Programa de Lealtad a lo largo de una década." },
        { k: "Producción ágil", d: "Campañas mensuales entregadas con plantillas sistematizadas." }
      ],
      en: [
        { k: "Solid identity", d: "Consistent Loyalty Program image across a decade." },
        { k: "Agile production", d: "Monthly campaigns delivered with systematized templates." }
      ]
    },
    tools: ["Photoshop", "Illustrator", "Canva"],
    img: "https://mir-s3-cdn-cf.behance.net/projects/original/ca9b87202987287.Y3JvcCwxNzA0LDEzMzMsMTQ3LDA.jpg",
    imgs: ["/assets/banorte-billboard.jpg", "/assets/banorte-hotsale.jpg"],
    link: "https://www.behance.net/gallery/202987287/Material-Publicitario-App-Promociones-Banorte"
  }
];

export const caseBySlug = (slug: string) => cases.find((c) => c.slug === slug);
