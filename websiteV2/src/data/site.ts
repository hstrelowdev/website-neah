export type Tone = 'primary' | 'secondary' | 'tertiary';

export type NavLink = {
  label: string;
  href: string;
};

export type Service = {
  icon: string;
  title: string;
  description: string;
  tone: Tone;
};

export type TerminalLine = {
  prefix: string;
  text: string;
  tone: 'prompt' | 'success' | 'muted';
};

export type PipelineStep = {
  label: string;
  result: string;
};

export type ProcessStep = {
  number: string;
  phase: string;
  title: string;
  description: string;
  icon: string;
  footnote: string;
  tone: Tone;
};

export type FooterColumn = {
  title: string;
  links: NavLink[];
};

export const site = {
  brand: {
    name: 'Nexora',
    suffix: 'Labs',
    description:
      'Estudio de ingeniería de software avanzada e incubadora tecnológica especializada en infraestructura distribuida y herramientas para desarrolladores.',
  },

  navigation: [
    { label: 'Servicios', href: '#servicios-seccion' },
    { label: 'Telemetría', href: '#telemetria' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'Contacto', href: '#contacto' },
  ] satisfies NavLink[],

  hero: {
    eyebrow: 'ARQUITECTURA · IA · CLOUD',
    titleLead: 'Ingeniería de software que ',
    titleAccent: 'escala',
    titleTail: ' sin límites.',
    description:
      'Diseñamos y entregamos productos digitales de alto rendimiento, sistemas de IA y software en la nube para equipos ambiciosos.',
    primaryCta: 'Enviar mensaje',
    secondaryCta: 'Explorar servicios',
    telemetry: [
      { icon: 'bolt', label: 'Arquitectura distribuida' },
      { icon: 'verified_user', label: 'Entrega continua' },
    ],
    terminal: {
      title: 'nexora-runtime-cli',
      version: 'v3.4.1',
      command: 'nexora deploy --prod',
      copyLabel: 'Copiar comando',
      copiedLabel: 'Copiado',
      lines: [
        { prefix: '✓', text: 'construyendo infraestructura cloud...', tone: 'success' },
        { prefix: '✓', text: 'seguridad y pruebas verificadas', tone: 'success' },
      ] satisfies TerminalLine[],
      edgeLabel: 'desplegado en clúster edge',
      edgeBadge: '[demo]',
      matrix: [
        { label: 'Región', value: 'multi-región (demo)' },
        { label: 'Contenedores', value: 'simulación' },
      ],
      badge: 'Entrega simulada · entorno demo',
    },
  },

  services: {
    id: 'servicios-seccion',
    eyebrow: 'ESPECIALIDADES',
    titleLead: 'Creado para el ',
    titleAccent: 'rendimiento',
    titleTail: ' moderno',
    description: 'Ingeniería a medida en cuatro disciplinas clave.',
    linkLabel: 'Saber más',
    items: [
      {
        icon: 'terminal',
        title: 'Software a medida',
        description: 'Aplicaciones web y móviles resilientes creadas con frameworks modernos en la nube.',
        tone: 'primary',
      },
      {
        icon: 'smart_toy',
        title: 'IA y automatización',
        description: 'Flujos de agentes inteligentes y pipelines LLM personalizados para tus operaciones.',
        tone: 'tertiary',
      },
      {
        icon: 'shopping_bag',
        title: 'Comercio electrónico',
        description: 'Tiendas headless de alta conversión diseñadas para compras instantáneas.',
        tone: 'secondary',
      },
      {
        icon: 'language',
        title: 'Sitios web',
        description: 'Sitios de marketing ultrarrápidos con diseño meticuloso y velocidad SEO.',
        tone: 'primary',
      },
    ] satisfies Service[],
  },

  telemetry: {
    id: 'telemetria',
    eyebrow: 'TELEMETRÍA SIMULADA',
    titleLead: 'Entrega automatizada ',
    titleAccent: 'simulada',
    titleTail: '',
    description: 'Observa un flujo de despliegue de demostración en tiempo real.',
    board: {
      title: 'SIMULACIÓN CI/CD',
      engine: 'Motor CI/CD v4.19',
      commit: 'PAYLOAD: COMMIT #a9f4c0',
      request: 'Petición de ejemplo: payload sprint API v2.4 (t-0.00s)',
      steps: [
        { label: 'Pruebas de regresión automatizadas superadas', result: 'DEMO · PASS' },
        { label: 'Contenedores Docker enviados al registro', result: 'DEMO · PUSHED' },
        { label: 'Cachés de borde CDN global invalidadas', result: 'DEMO · PURGED' },
      ] satisfies PipelineStep[],
      runningStatus: 'Reiniciando pruebas CI/CD...',
      stepStatuses: [
        '1/3 Pruebas de regresión superadas...',
        '2/3 Contenedores sincronizados en clúster...',
        '3/3 Cachés de borde invalidadas...',
      ],
      finalStatus: 'Simulación finalizada (tiempo de demo: 1.4 s)',
      replayLabel: 'Repetir simulación',
    },
  },

  process: {
    id: 'proceso',
    eyebrow: 'METODOLOGÍA',
    titleLead: 'Nuestra ',
    titleAccent: 'entrega',
    titleTail: ' en tres pasos',
    description: 'Velocidad predecible desde la primera conversación hasta la escala global.',
    cta: 'Enviar mensaje',
    steps: [
      {
        number: '01',
        phase: 'FASE 1',
        title: 'Llamada de diagnóstico',
        description: 'Taller en profundidad para definir requisitos técnicos, arquitectura e hitos.',
        icon: 'schedule',
        footnote: 'Diagnóstico técnico',
        tone: 'primary',
      },
      {
        number: '02',
        phase: 'FASE 2',
        title: 'Planificación',
        description: 'Hoja de ruta técnica detallada, especificaciones de diseño y entregables semanales.',
        icon: 'architecture',
        footnote: 'Arquitectura validada',
        tone: 'primary',
      },
      {
        number: '03',
        phase: 'FASE 3',
        title: 'Desarrollo y medición',
        description: 'Entrega continua CI/CD con vistas previas automatizadas y observabilidad en tiempo real.',
        icon: 'speed',
        footnote: 'Sprints bisemanales',
        tone: 'tertiary',
      },
    ] satisfies ProcessStep[],
  },

  finalCta: {
    id: 'contacto',
    eyebrow: 'COMIENZA HOY',
    titleLead: 'Construyámoslo ',
    titleAccent: 'juntos',
    titleTail: '',
    description: '¿Tienes un proyecto ambicioso en mente? Estamos listos para diseñar tu visión.',
    cta: 'Enviar mensaje',
    assurances: [
      { icon: 'check_circle', label: 'Sin compromiso inicial' },
      { icon: 'forum', label: 'Comunicación directa' },
      { icon: 'speed', label: 'Seguimiento continuo' },
    ],
  },

  contact: {
    endpoint: 'https://formspree.io/f/mgakydlg',
    eyebrow: 'CONTACTO',
    title: 'Cuéntanos tu proyecto',
    description: 'Envíanos un mensaje y te responderemos por correo.',
    fields: {
      name: 'Nombre',
      namePlaceholder: 'Tu nombre',
      email: 'Correo laboral',
      emailPlaceholder: 'nombre@empresa.com',
      message: 'Mensaje',
      messagePlaceholder: 'Cuéntanos brevemente qué necesitas...',
    },
    submit: 'Enviar mensaje',
    sending: 'Enviando...',
    success: 'Mensaje enviado. Gracias por escribirnos.',
    error: 'No pudimos enviar el mensaje. Inténtalo de nuevo.',
    privacy: 'Tus datos se envían a Formspree para gestionar esta consulta.',
    close: 'Cerrar',
  },

  footer: {
    columns: [
      {
        title: 'Servicios',
        links: [
          { label: 'Arquitectura de Software', href: '#servicios-seccion' },
          { label: 'Sistemas Distribuidos', href: '#servicios-seccion' },
          { label: 'Auditoría y Rendimiento', href: '#telemetria' },
          { label: 'Herramientas de Desarrollador', href: '#servicios-seccion' },
        ],
      },
      {
        title: 'Empresa',
        links: [
          { label: 'Nosotros', href: '#proceso' },
          { label: 'Proceso', href: '#proceso' },
          { label: 'Servicios', href: '#servicios-seccion' },
          { label: 'Contacto', href: '#contacto' },
        ],
      },
      {
        title: 'Explorar',
        links: [
          { label: 'Inicio', href: '#inicio' },
          { label: 'Telemetría demo', href: '#telemetria' },
          { label: 'Método de entrega', href: '#proceso' },
          { label: 'Enviar mensaje', href: '#contacto' },
        ],
      },
    ] satisfies FooterColumn[],
    social: [
      { icon: 'code', label: 'Consultar sobre código fuente' },
      { icon: 'forum', label: 'Abrir canal de comunicación' },
      { icon: 'rss_feed', label: 'Solicitar publicaciones técnicas' },
      { icon: 'hub', label: 'Conectar con el equipo' },
    ],
    copyright: '© 2025 Nexora Labs Inc. Todos los derechos reservados.',
    status: 'Nexora Labs · Ingeniería de software',
  },
} as const;
