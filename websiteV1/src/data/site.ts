export type Tone = 'primary' | 'secondary' | 'tertiary' | 'inverse' | 'outline';

export type SectionTagData = {
  index: string;
  slug: string;
  meta?: string;
  tone: Tone;
  onLight?: boolean;
};

export type NavItem = {
  label: string;
  href: string;
};

export type ChipData = {
  label: string;
  tone: Tone;
};

export type CodeTone = 'attribute' | 'keyword' | 'function' | 'method' | 'comment' | 'string' | 'muted';
export type CodeToken = { text: string; tone?: CodeTone };
export type CodeLine = { number: string; tokens: CodeToken[]; cursor?: boolean };

export type ValueCard = {
  icon: string;
  title: string;
  description: string;
  iconTone: Tone;
};

export type Pillar = {
  phase: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  footer: string;
  tone: Tone;
};

export type PipelineStep = {
  number: string;
  title: string;
  description: string;
  badge: string;
  tone: Tone;
  numberTone: Tone;
};

export type SlaRow = {
  label: string;
  value: string;
  tone: Tone;
};

export type Bar = {
  label: string;
  value: number;
  tone: Tone;
};

export type Project = {
  category: string;
  categoryTone: Tone;
  metric: string;
  title: string;
  description: string;
  stack: string[];
  accentTone: Tone;
};

export type Engagement = {
  model: string;
  title: string;
  description: string;
  features: string[];
  cta: string;
  tone: Tone;
  featured?: boolean;
  order: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
  avatarTone: Tone;
};

export type Article = {
  category: string;
  date: string;
  title: string;
  description: string;
  tone: Tone;
};

export type FooterLink = NavItem;
export type FooterColumn = {
  title: string;
  tone: Tone;
  links: FooterLink[];
};

export const site = {
  brand: {
    prefix: 'Commit',
    suffix: 'Line',
    description:
      'The continuous delivery platform partner for mission-critical software. Deterministic distributed architectures for zero-downtime scale.',
  },

  navigation: [
    { label: 'Services', href: '#pillars' },
    { label: 'Solutions', href: '#projects' },
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#ethos' },
    { label: 'Insights', href: '#insights' },
  ] satisfies NavItem[],

  languages: ['EN', 'ES'],

  hero: {
    tag: { index: '01', slug: 'hero', meta: 'HEAD -> main · commit 7f3a9e2', tone: 'primary' } satisfies SectionTagData,
    eyebrow: 'ENTERPRISE ARCHITECTURE · 7f3a9e2',
    titleLead: 'Building the ',
    titleAccent: 'next generation',
    titleTail: ' of software.',
    description:
      'Deterministic systems architecture, zero-drift Kubernetes platform engineering, and high-concurrency cloud infrastructure tailored for ambitious engineering teams.',
    primaryCta: "Let's Talk Projects",
    secondaryCta: 'Explore Architecture',
    chips: [
      { label: 'Rust 1.78 Stable', tone: 'tertiary' },
      { label: 'eBPF Telemetry', tone: 'secondary' },
      { label: 'Strict SOC2 Type II', tone: 'primary' },
    ] satisfies ChipData[],
    ide: {
      filename: 'main.rs — Runtime v2.4.0',
      status: 'CLUSTER SYNCED',
      lines: [
        { number: '01', tokens: [{ text: '#[tokio::main]', tone: 'attribute' }] },
        {
          number: '02',
          tokens: [
            { text: 'pub async fn', tone: 'keyword' },
            { text: ' ' },
            { text: 'deploy_resilient_cluster', tone: 'function' },
            { text: '(cfg: &Config) -> Result<ServiceNode, Err> {' },
          ],
        },
        {
          number: '03',
          tokens: [{ text: '    // Zero-downtime blue/green orchestrator', tone: 'comment' }],
        },
        {
          number: '04',
          tokens: [
            { text: '    ' },
            { text: 'let', tone: 'keyword' },
            { text: ' mesh = ConsensusMesh::' },
            { text: 'initialize', tone: 'method' },
            { text: '(cfg.quorum_shards).' },
            { text: 'await', tone: 'function' },
            { text: '?;' },
          ],
        },
        {
          number: '05',
          tokens: [
            { text: '    mesh.' },
            { text: 'verify_state_invariants', tone: 'method' },
            { text: '(&CommitHash::from(' },
            { text: '"7f3a9e2"', tone: 'string' },
            { text: '))?;' },
          ],
        },
        {
          number: '06',
          tokens: [
            { text: '    ' },
            { text: 'return', tone: 'keyword' },
            { text: ' Ok(mesh.' },
            { text: 'activate_p99_drain', tone: 'function' },
            { text: '().' },
            { text: 'await', tone: 'function' },
            { text: '()?);' },
          ],
        },
        { number: '07', tokens: [{ text: '}' }], cursor: true },
      ] satisfies CodeLine[],
      testsPassed: '842 concurrency tests passed',
      latency: '38ms zero-downtime active',
    },
    topology: {
      title: 'Topology Mesh',
      version: 'v4.2',
      label: 'Quorum Consensus',
      value: 'Optimal',
    },
    slas: {
      title: 'Runtime SLAs',
      rows: [
        { label: 'Uptime SLA', value: '99.999%', tone: 'tertiary' },
        { label: 'Daily Throughput', value: '45M+ Trx', tone: 'secondary' },
        { label: 'P99 Latency', value: '<12ms', tone: 'primary' },
      ] satisfies SlaRow[],
      footer: 'Real-time edge telemetry',
    },
  },

  ethos: {
    tag: { index: '03', slug: 'ethos', meta: 'engineering-integrity', tone: 'primary', onLight: true } satisfies SectionTagData,
    eyebrow: 'Core Philosophy',
    titleLead: 'Engineering with ',
    titleAccent: 'purpose & velocity',
    titleTail: '.',
    quote:
      '“We bridge high-level product strategy with hardcore systems engineering. No hand-waving, just production-grade execution.”',
    author: {
      initials: 'SL',
      name: 'Sarah Lindqvist',
      role: 'VP Architecture & Platform',
    },
    values: [
      {
        icon: 'hub',
        title: 'End-to-End Partner',
        description:
          'From napkin ideation to Kubernetes auto-scaling across multi-region AWS and bare metal setups.',
        iconTone: 'inverse',
      },
      {
        icon: 'psychology',
        title: 'AI at the Core',
        description:
          'Automated regression sweeps, intelligent cache eviction, and embedded retrieval engines built natively.',
        iconTone: 'secondary',
      },
      {
        icon: 'military_tech',
        title: 'Senior Talent Only',
        description:
          'Zero junior handoffs. Every developer on your project has 7+ years building high-load, fault-tolerant apps.',
        iconTone: 'inverse',
      },
      {
        icon: 'speed',
        title: 'Measurable Results',
        description:
          'Strict P99 latency bounds, measurable cloud bill reductions, and commit-to-production cycles under 15 min.',
        iconTone: 'tertiary',
      },
    ] satisfies ValueCard[],
  },

  pillars: {
    id: 'pillars',
    tag: { index: '04', slug: 'lifecycle', meta: 'design-build-run', tone: 'tertiary' } satisfies SectionTagData,
    titleLead: 'Three pillars of ',
    titleAccent: 'engineered perfection',
    titleTail: '.',
    description:
      'Modular capabilities designed to integrate with in-flight corporate platforms or construct ground-up Greenfield platforms.',
    items: [
      {
        phase: 'PHASE_01',
        icon: 'design_services',
        title: 'Systems Design',
        description:
          'High-concurrency data models, micro-frontend hierarchies, and ergonomic developer experience mapping.',
        features: [
          'Distributed State & Domain Modeling',
          'Real-Time UX & Design Systems',
          'AI Agent Integration Schemas',
          'Event-Driven Architecture (EDA)',
        ],
        footer: 'Stage Latency: ~2-4 wks',
        tone: 'primary',
      },
      {
        phase: 'PHASE_02',
        icon: 'code_blocks',
        title: 'Hardcore Build',
        description:
          'Zero-memory-leak backends, high-throughput asynchronous pipelines, and reactive client dashboards.',
        features: [
          'Rust & Go Performance Microservices',
          'Next.js & WebAssembly Frontends',
          'Kafka & Redis Streams Ingestion',
          'Strict Unit & Chaos Engineering Tests',
        ],
        footer: 'Sprint Cadence: Bi-weekly',
        tone: 'secondary',
      },
      {
        phase: 'PHASE_03',
        icon: 'rocket_launch',
        title: 'Continuous Run',
        description:
          'Self-healing multi-cloud Kubernetes clusters, automated rollback gates, and SLA guarantees.',
        features: [
          'ArgoCD GitOps & Terraform Modules',
          'Prometheus & OpenTelemetry Traces',
          '99.999% SLA Incident Response',
          'Automated Zero-Day Patching',
        ],
        footer: 'Target Availability: 99.999%',
        tone: 'tertiary',
      },
    ] satisfies Pillar[],
  },

  pipeline: {
    tag: { index: '05', slug: 'pipeline', meta: 'git-flow-orchestration', tone: 'primary' } satisfies SectionTagData,
    titleLead: 'Deterministic delivery: ',
    titleAccent: 'Branch to Prod',
    titleTail: '.',
    steps: [
      {
        number: '01',
        title: 'Plan & Scope',
        description: 'Automated backlog generation and dependency graphs.',
        badge: '+ AI',
        tone: 'primary',
        numberTone: 'primary',
      },
      {
        number: '02',
        title: 'Design Arch',
        description: 'Schema validation, OpenAPI codegen & threat models.',
        badge: '+ AI',
        tone: 'secondary',
        numberTone: 'secondary',
      },
      {
        number: '03',
        title: 'Build Sprints',
        description: 'Pair programming with LLM linting and fast Rust builds.',
        badge: '+ AI',
        tone: 'tertiary',
        numberTone: 'primary',
      },
      {
        number: '04',
        title: 'Test & Chaos',
        description: 'Synthetic load generation and edge-case fuzzing.',
        badge: '+ AI',
        tone: 'secondary',
        numberTone: 'secondary',
      },
      {
        number: '05',
        title: 'Launch & Scale',
        description: 'Canary rollout with automated rollbacks on SLA dip.',
        badge: '+ AI',
        tone: 'tertiary',
        numberTone: 'tertiary',
      },
    ] satisfies PipelineStep[],
  },

  diagnostic: {
    tag: { index: '06', slug: 'diagnostic', meta: 'audit-telemetry', tone: 'secondary', onLight: true } satisfies SectionTagData,
    score: 4.6,
    scoreOut: 'OUT OF 5.0',
    badge: '✓ Tier 1 Verified · Production Readiness',
    note: 'Based on empirical audits across 300+ parameters.',
    title: 'Software Maturity Check',
    description: 'Real-time enterprise grade capability metrics benchmark.',
    bars: [
      { label: 'Delivery Velocity', value: 94, tone: 'inverse' },
      { label: 'Code Quality & Fault Tolerance', value: 88, tone: 'secondary' },
      { label: 'Cloud Architecture & Auto-scale', value: 92, tone: 'inverse' },
      { label: 'Data Pipelines & Embedded AI', value: 85, tone: 'secondary' },
      { label: 'Team Autonomy & GitOps Hygiene', value: 90, tone: 'tertiary' },
    ] satisfies Bar[],
    footnote: 'Takes 5 minutes · Instant PDF Scorecard',
    cta: 'Take the 5-minute diagnostic',
  },

  projects: {
    id: 'projects',
    tag: { index: '07', slug: 'projects', meta: 'production-records', tone: 'tertiary' } satisfies SectionTagData,
    titleLead: 'Engineered outcomes, ',
    titleAccent: 'not promises',
    titleTail: '.',
    description: 'Validated enterprise metrics delivered into live production.',
    link: 'View all repositories',
    items: [
      {
        category: 'FINTECH BANKING',
        categoryTone: 'primary',
        metric: '-60% Deploy Time',
        title: 'Global Tier-1 Clearing Core',
        description:
          'Transitioned monolithic transaction batching to event-driven Rust worker pools, processing $4.2B in weekly volume with zero lost frames.',
        stack: ['Rust', 'Apache Kafka', 'Kubernetes', 'AWS Graviton'],
        accentTone: 'primary',
      },
      {
        category: 'SUPPLY CHAIN & AI',
        categoryTone: 'secondary',
        metric: '3x Faster Release',
        title: 'Autonomous Fleet Routing Engine',
        description:
          'Implemented dynamic route re-calculation in Go with embedded PyTorch heuristics, serving 85,000 continuous delivery nodes across 4 continents.',
        stack: ['Golang', 'PyTorch', 'GCP Spanner', 'Ray'],
        accentTone: 'secondary',
      },
      {
        category: 'MEDTECH PLATFORM',
        categoryTone: 'tertiary',
        metric: '99.999% SLA Met',
        title: 'Clinical IoT Stream Telehealth',
        description:
          'HIPAA-compliant streaming gateway handling 1.8M concurrent biometric sensors with sub-second alerting and automatic failover.',
        stack: ['TypeScript', 'Next.js', 'Docker', 'Temporal'],
        accentTone: 'tertiary',
      },
    ] satisfies Project[],
  },

  engagement: {
    tag: { index: '08', slug: 'engagement', meta: 'collaboration-modes', tone: 'primary' } satisfies SectionTagData,
    titleLead: 'Engagement structured for ',
    titleAccent: 'maximum throughput',
    titleTail: '.',
    description: 'Transparent SLAs, predictable sprints, and flexible operational integration.',
    models: [
      {
        model: 'MODEL_01',
        title: 'Dedicated Squad',
        description:
          'A self-contained cross-functional engineering team (Lead, 3 Senior Devs, QA, DevOps) taking full ownership of roadmap modules.',
        features: [
          'Dedicated Product Delivery Manager',
          '10-Day SLA team assembly',
          'Direct Slack/GitHub synchronization',
          'Full IP assignment upon every merge',
        ],
        cta: 'Request Squad Specs',
        tone: 'primary',
        featured: true,
        order: 'order-2 lg:order-2',
      },
      {
        model: 'MODEL_02',
        title: 'Staff Augmentation',
        description:
          'Top 2% vetted senior engineers directly embedded into your existing agile cycles, pulling issues from day three.',
        features: [
          '5-Day replacement guarantee',
          'Senior level: 7+ years production exp',
          'Matched to your active timezone',
          'Flexible ramp up / down terms',
        ],
        cta: 'Review Candidate Roster',
        tone: 'secondary',
        order: 'order-1 lg:order-1',
      },
      {
        model: 'MODEL_03',
        title: 'Architecture Advisory',
        description:
          'Principal architects conducting deep performance audits, cloud cost optimization, and AI roadmap design.',
        features: [
          '2-Week Deep Infrastructure Review',
          'Cloud FinOps 30%+ savings roadmap',
          'SOC2 & ISO compliance readiness',
          'CTO-level executive strategy sync',
        ],
        cta: 'Book Architecture Audit',
        tone: 'tertiary',
        order: 'order-3 lg:order-3',
      },
    ] satisfies Engagement[],
    featuredBadge: 'MOST REQUESTED · 10-DAY ONBOARD',
  },

  tech: {
    tag: { index: '09', slug: 'toolchain', meta: 'battle-tested-matrix', tone: 'secondary' } satisfies SectionTagData,
    title: 'The High-Throughput Matrix',
    description: 'We build with languages and runtimes engineered for deterministic predictability.',
    status: 'All toolchains locked & reproducible',
    tools: [
      { label: 'Rust', tone: 'primary' },
      { label: 'TypeScript', tone: 'secondary' },
      { label: 'Go (Golang)', tone: 'tertiary' },
      { label: 'Python 3.12', tone: 'primary' },
      { label: 'React 19', tone: 'secondary' },
      { label: 'Next.js App', tone: 'tertiary' },
      { label: 'Kubernetes', tone: 'primary' },
      { label: 'Docker Engine', tone: 'secondary' },
      { label: 'AWS Infra', tone: 'tertiary' },
      { label: 'Azure Cloud', tone: 'primary' },
      { label: 'Google Cloud', tone: 'secondary' },
      { label: 'PostgreSQL 16', tone: 'tertiary' },
      { label: 'Redis Cluster', tone: 'primary' },
      { label: 'Apache Kafka', tone: 'secondary' },
      { label: 'Terraform', tone: 'tertiary' },
      { label: 'GraphQL / gRPC', tone: 'primary' },
      { label: 'OpenTelemetry', tone: 'secondary' },
      { label: 'ArgoCD', tone: 'tertiary' },
    ] satisfies ChipData[],
  },

  testimonials: {
    tag: { index: '10', slug: 'testimonials', meta: 'executive-feedback', tone: 'primary', onLight: true } satisfies SectionTagData,
    titleLead: 'What engineering leaders say ',
    titleAccent: 'about CommitLine',
    titleTail: '.',
    description: 'Verified direct feedback from tech executives managing scaled platforms.',
    items: [
      {
        quote:
          '“CommitLine restructured our entire clearing engine in 4 months. We achieved 4x throughput with half the cloud compute cost. Their Rust specialists are world-class.”',
        name: 'David Rivera',
        role: 'VP Engineering • FinScale',
        initials: 'DR',
        avatarTone: 'primary',
      },
      {
        quote:
          '“They didn\'t just write code; they transformed how our internal team ships. Zero-drift GitOps and continuous profiling saved us hundreds of incident hours.”',
        name: 'Elena Rostova',
        role: 'CTO • Omnia Logistics',
        initials: 'MK',
        avatarTone: 'secondary',
      },
      {
        quote:
          '“Our HIPAA compliance audit was clean on day one thanks to their strict architecture patterns. 99.999% SLA is a reality, not marketing speak.”',
        name: 'Tariq Beshir',
        role: 'Head of Infra • PulseHealth',
        initials: 'TB',
        avatarTone: 'tertiary',
      },
    ] satisfies Testimonial[],
  },

  insights: {
    id: 'insights',
    tag: { index: '11', slug: 'knowledge', meta: 'open-telemetry-papers', tone: 'tertiary' } satisfies SectionTagData,
    items: [
      {
        category: 'DISTRIBUTED SYSTEMS',
        date: 'May 2025 · 8 min read',
        title: 'Zero-Copy Networking in Rust: Eliminating Linux Kernel Bottlenecks',
        description:
          'How bypassing standard socket allocation through eBPF/XDP cut packet serialization time by 76% in our cluster.',
        tone: 'primary',
      },
      {
        category: 'KUBERNETES & SRE',
        date: 'Apr 2025 · 12 min read',
        title: 'Deterministic GitOps: Eliminating ArgoCD Drift In Multi-Region Deployments',
        description:
          'A comprehensive pattern for managing state across 12 isolated AWS and GCP clusters with atomic synchronization.',
        tone: 'secondary',
      },
      {
        category: 'ENTERPRISE AI',
        date: 'Mar 2025 · 6 min read',
        title: 'Embeddings at the Edge: Real-Time Vector Similarity Under 5ms',
        description:
          'Running quantified ONNX models alongside Cloudflare Workers for sub-millisecond retrieval-augmented pipelines.',
        tone: 'tertiary',
      },
    ] satisfies Article[],
  },

  contact: {
    id: 'contact',
    tag: { index: '10', slug: 'merge -> production', meta: 'v2.4.0 live', tone: 'tertiary' } satisfies SectionTagData,
    eyebrow: 'Initiate Platform Deployment',
    titleLead: "Let's evolve your ",
    titleAccent: 'business together',
    titleTail: '.',
    description:
      'Connect directly with our Principal Solutions Architects. Receive an initial technical scope assessment, architectural roadmap, and engineering estimate within 48 hours.',
    assurances: [
      { icon: 'verified_user', text: 'Mutual Non-Disclosure Agreement (NDA) on Day 1', tone: 'tertiary' },
      { icon: 'schedule', text: 'Guaranteed 24-hour technical response SLA', tone: 'secondary' },
    ],
    form: {
      nameLabel: 'Your Name',
      namePlaceholder: 'Alex Morgan',
      emailLabel: 'Work Email',
      emailPlaceholder: 'alex@enterprise.com',
      scopeLabel: 'Project Scope & Architecture Goals',
      scopePlaceholder: 'Tell us about your tech stack, system bottlenecks, or Greenfield timeline...',
      submit: 'Deploy Your Vision',
    },
  },

  footer: {
    newsletterTitle: 'The Commit Dispatch (Weekly Eng Digest)',
    newsletterPlaceholder: 'dev@engineering.com',
    newsletterCta: 'Subscribe',
    columns: [
      {
        title: 'Services',
        tone: 'primary',
        links: [
          { label: 'Distributed Cloud Native', href: '#pillars' },
          { label: 'Rust Systems Hardening', href: '#pillars' },
          { label: 'AI & Data Pipeline Ops', href: '#pillars' },
          { label: 'Kubernetes GitOps ArgoCD', href: '#pillars' },
          { label: 'Sub-10ms P99 Latency Tuning', href: '#pillars' },
        ],
      },
      {
        title: 'Company',
        tone: 'secondary',
        links: [
          { label: 'About CommitLine', href: '#ethos' },
          { label: 'Senior Engineering Roster', href: '#' },
          { label: 'Careers (Top 2% Only)', href: '#' },
          { label: 'Open Source Repositories', href: '#' },
          { label: 'Contact Principal Desk', href: '#contact' },
        ],
      },
      {
        title: 'Resources',
        tone: 'tertiary',
        links: [
          { label: 'Engineering Whitepapers', href: '#' },
          { label: 'Case Studies Vault', href: '#projects' },
          { label: '5-Minute Maturity Check', href: '#contact' },
          { label: 'GitOps Reference Architecture', href: '#' },
          { label: 'Release Notes v2.4.1', href: '#' },
        ],
      },
    ] satisfies FooterColumn[],
    compliance: {
      title: 'Compliance',
      items: [
        { icon: 'verified', label: 'SOC2 Type II Certified', tone: 'tertiary' },
        { icon: 'verified', label: 'ISO 27001 Accredited', tone: 'secondary' },
        { icon: 'verified', label: 'HIPAA BAA Capable', tone: 'primary' },
        { icon: 'verified', label: 'AWS Premier Partner', tone: 'outline' },
      ] satisfies { icon: string; label: string; tone: Tone }[],
    },
    status: 'All global clusters operational • Zero latency degradations recorded',
    copyright: '© 2025 CommitLine Inc. All systems deterministic • Built with continuous precision.',
  },
};
