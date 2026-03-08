export const ZONES = [
  { id: 'about',      name: 'About Me',   tag: '01', x:  0, z:  0, color: 0x5efce8, hex: '#5efce8' },
  { id: 'experience', name: 'Experience', tag: '02', x: 24, z:  0, color: 0xf5c842, hex: '#f5c842' },
  { id: 'skills',     name: 'Skills',     tag: '03', x:  0, z:-24, color: 0x00d4ff, hex: '#00d4ff' },
  { id: 'projects',   name: 'Projects',   tag: '04', x:-24, z:  0, color: 0xff5e7d, hex: '#ff5e7d' },
  { id: 'contact',    name: 'Contact',    tag: '05', x:  0, z: 24, color: 0x88ffcc, hex: '#88ffcc' },
];

export const CONTENT = {
  about: {
    tag: '01 · About',
    title: 'Rohit Prakash',
    titleAccent: '',
    bio: '5+ years building high-performance web products — from real-time fleet tracking dashboards to image-processing suites. I obsess over performance, clean architecture, and shipping things that actually work at scale.',
    cards: [
      { label: 'Location', value: 'Ahmedabad, India' },
      { label: 'Education', value: 'B.Tech Automobile Engg\nGNIOT · 2014–2018' },
      { label: 'Email', value: 'rohit47018@gmail.com', href: 'mailto:rohit47018@gmail.com' },
      { label: 'Phone', value: '+91 9451096864', href: 'tel:+919451096864' },
      { label: 'GitHub', value: 'github.com/47018rohit', href: 'https://github.com/47018rohit' },
      { label: 'LinkedIn', value: 'linkedin.com/in/rohitprakash', href: 'https://linkedin.com/in/rohitprakash' },
    ],
  },
  experience: {
    tag: '02 · Experience',
    title: "Where I've Worked",
    jobs: [
      {
        role: 'Senior Software Engineer',
        company: 'Celcius Logistics Solutions',
        location: 'Ahmedabad',
        period: 'Nov 2023 – Present',
        bullets: [
          'Kafka-based event-driven pipeline processing 20k+ daily events with sub-second latency — fleet visibility improved by 60%',
          'Led PHP monolith → React/TypeScript micro-frontend migration, reducing UI defects by 40%',
          'Redis caching reduced PostgreSQL load by 60%, API response times by 45%',
          'UI component library with Redux Toolkit accelerated feature delivery by 30%',
        ],
      },
      {
        role: 'L1 Frontend Engineer',
        company: 'EagleView India',
        location: 'Bengaluru',
        period: 'Apr 2021 – Nov 2023',
        bullets: [
          'Image processing suite with React + Canvas API, reducing manual TAT by 50%, handling 10k+ daily images via WebWorkers',
          'OAuth2.0/JWT + RBAC across microservices — PCI-DSS compliant, zero security incidents over 24 months',
          'Code-splitting & lazy loading → Lighthouse 90+, page load improved by 35%',
        ],
      },
      {
        role: 'Frontend Developer · Intern',
        company: 'Solar Secure Solutions',
        location: 'Bengaluru',
        period: 'Feb – Apr 2021',
        bullets: [
          'Responsive WCAG 2.1 UI components with 95% on-time delivery rate',
        ],
      },
    ],
  },
  skills: {
    tag: '03 · Skills',
    title: 'Tech Stack',
    sections: [
      {
        label: 'Frontend',
        hot: true,
        items: ['React.js','Next.js','TypeScript','Redux Toolkit','React Query','Tailwind CSS','shadcn/ui','Styled Components','HTML5','CSS3'],
      },
      {
        label: 'Backend & Infra',
        items: ['Node.js','Express.js','Apache Kafka','KafkaJS','Redis','PostgreSQL','MySQL','Elasticsearch','Docker','Kubernetes'],
      },
      {
        label: 'APIs & Architecture',
        items: ['REST API','GraphQL','WebSocket','Microservices','OAuth 2.0','JWT','RBAC','Event-Driven Architecture','SSR'],
      },
      {
        label: 'Cloud & DevOps',
        items: ['AWS S3/EC2','GCP','Firebase','Docker','CI/CD','Jenkins','Git','Webpack','Vite','Vercel'],
      },
      {
        label: 'Testing & AI',
        items: ['Jest','React Testing Library','ESLint','Prettier','GitHub Copilot','AI-Assisted Dev'],
      },
    ],
  },
  projects: {
    tag: '04 · Projects',
    title: "Things I've Built",
    list: [
      {
        name: 'Transport Management System',
        period: 'Apr – Oct 2025',
        desc: 'Dual-module TMS (Picker + Admin) serving 50+ users with real-time shipment tracking and automated workflow orchestration for partload operations.',
        tech: ['React','TypeScript','Tailwind CSS','shadcn/ui','Formik','Redux Toolkit','React Query'],
      },
      {
        name: 'Fleet Tracking Microservice',
        period: 'Mar – Sep 2025',
        desc: 'Node.js microservice with Kafka consumer groups processing 1M+ GPS events daily with Redis geospatial indexing and fault-tolerant partitioning.',
        tech: ['Node.js','Kafka','KafkaJS','Redis','TypeScript','Zod','PostgreSQL','Docker'],
      },
      {
        name: 'Knowledge Center Platform',
        period: 'Aug 2024 – Mar 2025',
        desc: 'Self-service platform with video tutorials, blog editor, and Elasticsearch full-text search — reduced support tickets by 40%.',
        tech: ['React','JavaScript','Tailwind CSS','shadcn/ui','Redux Toolkit','Elasticsearch'],
      },
      {
        name: 'Warehouse Management System',
        period: 'Dec 2023 – Jun 2024',
        desc: 'Real-time inventory app with WebSocket updates, ApexCharts visualizations, and barcode integration for 100+ locations.',
        tech: ['React.js','WebSocket','ApexCharts','Bootstrap','Redux Toolkit'],
      },
    ],
  },
  contact: {
    tag: '05 · Contact',
    title: "Let's Connect",
    bio: 'Open to senior frontend / full-stack roles, freelance projects, or a good chat about distributed systems and React architecture.',
    links: [
      { icon: '✉', label: 'Email',    value: 'rohit47018@gmail.com',           href: 'mailto:rohit47018@gmail.com' },
      { icon: 'in', label: 'LinkedIn', value: 'linkedin.com/in/rohitprakash',   href: 'https://linkedin.com/in/rohitprakash' },
      { icon: '⌥', label: 'GitHub',   value: 'github.com/47018rohit',          href: 'https://github.com/47018rohit' },
      { icon: '☏', label: 'Phone',    value: '+91 9451096864',                  href: 'tel:+919451096864' },
    ],
  },
};
