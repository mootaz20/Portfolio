/* ============================================================
   Single source of truth for every piece of portfolio content.
   Project blurbs are deliberately short - one idea each.
   ============================================================ */

export const profile = {
  name: "Mootaz Alhalak",
  role: "Full-Stack Developer",
  tagline:
    "I build systems end-to-end - and a background in penetration testing means I build them with security in mind from day one.",
  location: "Damascus, Syria",
  email: "mootazalhalak695@gmail.com",
  phone: "(+963) 959 902 075",
  phoneHref: "+963959902075",
  roles: [
    "Full-Stack Developer",
    "Angular & Node.js Engineer",
    "Parse Server / NestJS Backend",
    "Security-Minded Builder",
  ],
  bio: [
    "I am a Full-Stack Developer at 90Soft, where I design and ship production platforms for real operators - telecom field operations, fuel logistics, hospitality, HR and e-commerce. I own the whole lifecycle: database schema, REST and cloud-function APIs, Angular dashboards, and deployment on Linux servers with Docker.",
    "Most of my work is enterprise-scale internal software - the kind that has to stay correct under load, handle bilingual Arabic/English interfaces with full RTL, and survive real users on real production servers. Several of these platforms I built from an empty repository.",
    "Alongside development I completed an intensive cyber security internship, finishing 2nd in my cohort. It is not my day job - it is the reason RBAC, JWT sessions, input validation and secure API design are in my code from the first commit rather than patched in later.",
  ],
  socials: {
    github: "https://github.com/mootaz20",
    linkedin: "https://www.linkedin.com/in/mootaz-alhalak-30a561255",
    facebook: "https://www.facebook.com/profile.php?id=100014620451120",
    tryhackme: "https://tryhackme.com/p/MZshell",
  },
  cv: {
    fullstack: "/assets/cv/Mootaz_Alhalak_FullStack_CV.pdf",
    security: "/assets/cv/Mootaz_Alhalak_Security_CV.pdf",
  },
  education: {
    degree: "B.Sc. Computer Science",
    school: "Damascus University",
    note: "5th Year - In Progress",
  },
  languages: [
    { name: "Arabic", level: "Native" },
    { name: "English", level: "Intermediate" },
  ],
};

export const stats = [
  { value: "12", label: "Platforms delivered" },
  { value: "8", label: "Running in production" },
  { value: "2+", label: "Years at 90Soft" },
  { value: "98.8%", label: "Security internship score" },
];

/* ------------------------------------------------------------
   Experience timeline
   ------------------------------------------------------------ */

export const experience = [
  {
    id: "90soft",
    role: "Full-Stack Developer",
    org: "90Soft",
    place: "Syria",
    period: "2024 - Present",
    current: true,
    kind: "work",
    summary:
      "Building and maintaining large-scale production platforms across telecom, energy, hospitality, HR and e-commerce - Angular on the front, Parse Server and NestJS on the back.",
    points: [
      "Own features end-to-end: MongoDB schema, cloud-function and REST API design, Angular dashboard, then deployment and post-launch production support.",
      "Delivered the SOA platform family - GMS, Fuel, SOA and SOA General - into Syriatel production servers via Docker on Linux, including live bug triage after launch.",
      "Standard across everything I ship: role-based access control, bilingual EN/AR with automatic RTL/LTR, light and dark theming, server-side paginated tables with Excel export.",
      "Led a scoping-model refactor as a documented engineering process - written assessment, frozen endpoint contract, phased build plan - so backend and frontend could build in parallel without breaking the live mobile client.",
    ],
  },
  {
    id: "focalx-security",
    role: "Cyber Security Intern",
    org: "Focal X Agency",
    place: "Syria",
    period: "Sep 2025 - Dec 2025",
    kind: "security",
    highlight: "Score 98.80% - Ranked 2nd - CEO recommendation letter",
    summary:
      "Intensive four-month program covering network security, web application attacks, OS hardening, cryptography and penetration testing fundamentals.",
    points: [
      "Applied OWASP Top 10 hands-on - identified and exploited SQL Injection, XSS, IDOR and authentication failures in lab environments.",
      "Worked with Burp Suite, Nmap, Metasploit, Hydra, Hashcat, WPScan, Nikto and DirB in structured attack scenarios.",
      "Studied SIEM, IDS/IPS, firewall and VPN configuration for a defensive view of the same systems.",
    ],
  },
  {
    id: "focalx-mern",
    role: "MERN Stack Developer Trainee",
    org: "Focal X Agency",
    place: "Syria",
    period: "Aug 2024",
    kind: "training",
    highlight: "Ranked 3rd in cohort - CEO recommendation letter",
    summary:
      "Intensive full-stack training program - built and deployed a series of applications across the MERN stack, from static layouts through to a CRUD app running on a live API.",
    points: [
      "Covered the MERN stack end-to-end: React with Redux Toolkit, Node.js and Express APIs, MongoDB data modelling.",
      "Shipped and deployed every project of the program, from static layout drills through to a full-stack CRUD application with a live API.",
    ],
  },
];

/* ------------------------------------------------------------
   Professional projects - one idea each, kept short.
   ownership: how much of it is mine
   status:    where it lives now
   ------------------------------------------------------------ */

export const projects = [
  {
    id: "soa-gms",
    name: "SOA GMS",
    subtitle: "Grounds & Generator Management System",
    client: "Syriatel",
    year: "2025 - 2026",
    role: "Full-Stack Engineer",
    ownership: "Built from zero",
    status: "In production",
    blurb:
      "Field-operations control center for the telecom tower network: sites, generators, preventive maintenance, spare-part inventory and technician site access - with a no-code report builder and a two-way sync to an external inventory system.",
    stack: [
      "Angular 21",
      "PrimeNG",
      "Tailwind",
      "Parse Server 9",
      "TypeScript",
      "MongoDB",
      "Docker",
    ],
    tags: ["Full-Stack", "Enterprise"],
    accent: "blue",
  },
  {
    id: "soa-fuel",
    name: "SOA Fuel",
    subtitle: "Fuel Logistics & Field Operations Platform",
    client: "Syriatel",
    year: "Nov 2024 - Jan 2026",
    role: "Full-Stack Engineer",
    ownership: "Backend & dashboard owner",
    status: "In production",
    blurb:
      "Runs the full lifecycle of fuel-delivery trips and corrective maintenance across a national network of telecom sites - trips ingested from an external FCMS system, technicians filing site-access and visit forms offline in the field, then back-office validation and write-back to the source system.",
    stack: [
      "TypeScript",
      "Parse Server 8",
      "Express",
      "MongoDB",
      "Angular 17",
      "PrimeNG",
      "Camunda BPM",
    ],
    tags: ["Full-Stack", "Enterprise"],
    accent: "cyan",
  },
  {
    id: "soa",
    name: "SOA",
    subtitle: "Field Operations Platform",
    client: "Syriatel",
    year: "2026",
    role: "Full-Stack Engineer",
    ownership: "Feature owner",
    status: "In production",
    blurb:
      "Plans, dispatches and validates field maintenance across the site network - task plans, a dynamic PM form builder with recursive sub-forms, site-access validation, and a schema-introspecting report builder that turns any domain class into tables, charts or geo views, plus multi-day task drafts so technicians do not lose work across sessions.",
    stack: [
      "TypeScript",
      "Parse Server",
      "Express",
      "MongoDB",
      "Angular",
      "PrimeNG",
      "ECharts",
      "Leaflet",
    ],
    tags: ["Full-Stack", "Enterprise"],
    accent: "violet",
  },
  {
    id: "soa-general",
    name: "SOA General",
    subtitle: "Multi-Tenant Field Operations Platform",
    client: "Syriatel",
    year: "2026",
    role: "Full-Stack Engineer",
    ownership: "Lead contributor",
    status: "In production",
    blurb:
      "The multi-tenant generalisation of SOA - same field-operations feature set (task plans, PM form builder, site access and validation, report builder), rebuilt to serve many companies from one deployment. What is new here: a decorator-driven backend framework with auto-generated Swagger, company and group scoping with block-cascade rules, bulk Excel import with a pre-commit review dialog, and a configurable external-API layer wired to SMIS and n8n.",
    stack: [
      "TypeScript",
      "Parse Server 9",
      "Express 5",
      "MongoDB",
      "Angular 21",
      "PrimeNG 21",
      "ECharts",
      "Leaflet",
    ],
    tags: ["Full-Stack", "Enterprise"],
    accent: "cyan",
  },
  {
    id: "nilz",
    name: "Nilz",
    subtitle: "Property Rental & Reservation Platform",
    year: "2025",
    role: "Frontend Developer",
    ownership: "Sole frontend author",
    status: "In production",
    blurb:
      "Admin dashboard and public site for property rentals - the full booking lifecycle from unit availability search through payments, contracts and business reporting.",
    stack: [
      "Angular 19 (zoneless)",
      "Signals",
      "PrimeNG",
      "Tailwind",
      "Firebase FCM",
      "Google Maps",
    ],
    tags: ["Frontend", "Hospitality"],
    accent: "blue",
  },
  {
    id: "transportation",
    name: "Transportation Platform",
    subtitle: "Passenger Transport & Visa Services",
    year: "2025",
    role: "Full-Stack Engineer",
    ownership: "Core contributor",
    status: "In production",
    blurb:
      "Transport and tourist-delegation platform spanning an API, an admin dashboard and a public site - the piece I owned was HyperPay online payments, front to back.",
    stack: [
      "Angular 17/18",
      "Node.js",
      "Parse Server",
      "TypeScript",
      "HyperPay",
      "pdfMake",
    ],
    tags: ["Full-Stack", "Payments"],
    accent: "cyan",
  },
  {
    id: "leaders",
    name: "Leaders Institute",
    subtitle: "Academic Platform - 3 Applications",
    year: "2025",
    role: "Frontend Developer",
    ownership: "Lead contributor",
    status: "In production",
    blurb:
      "Three-application Angular suite for an academic institute: an internal admin dashboard, a peer-reviewed scientific magazine portal and the public website - all bilingual with full RTL.",
    stack: ["Angular 18/19", "Signals", "PrimeNG", "Tailwind", "ExcelJS", "jsPDF"],
    tags: ["Frontend", "Education"],
    accent: "violet",
  },
  {
    id: "hrms",
    name: "HRMS",
    subtitle: "HR & Workforce Management",
    year: "2025",
    role: "Full-Stack Developer",
    ownership: "Feature owner",
    status: "In production",
    blurb:
      "Workforce platform with face-recognition attendance. I shipped the biometric photo reset workflow end-to-end, the admin dashboard, and attendance reporting with Excel and PDF export.",
    stack: ["NestJS 11", "MongoDB", "Angular 19", "PrimeNG", "Firebase", "PWA"],
    tags: ["Full-Stack", "HR"],
    accent: "blue",
  },
  {
    id: "mvp-platforms",
    name: "MVP Platforms",
    subtitle: "Al-Basset · Smart Station · General Assistant",
    year: "2024 - 2026",
    role: "Frontend & Full-Stack Developer",
    ownership: "Solo build & core contributor",
    status: "MVP",
    blurb:
      "Three early-stage products taken from concept to a working MVP. Al-Basset is a bilingual product showroom with an admin CMS across seven content domains; Smart Station is a services marketplace with a service catalog and cart flow; General Assistant is an AI support gateway that handles client requests over real-time messaging before routing them to a human agent.",
    stack: [
      "Angular 19",
      "Tailwind",
      "Parse Server",
      "Node.js",
      "WebSocket",
      "n8n",
      "MongoDB",
    ],
    tags: ["Full-Stack", "Frontend", "CMS", "AI"],
    accent: "violet",
  },
  {
    id: "chamsale",
    name: "Chamsale",
    subtitle: "C2C Marketplace",
    year: "2024 - 2025",
    role: "Full-Stack Developer",
    ownership: "Core contributor",
    status: "In production",
    blurb:
      "Peer-to-peer buy and sell marketplace with per-category dynamic listing forms, posts, comments and ratings, plus admin moderation tooling.",
    stack: ["Angular", "Node.js", "Parse Server", "MongoDB"],
    tags: ["Full-Stack", "Marketplace"],
    accent: "blue",
  },
];

export const projectFilters = ["All", "Full-Stack", "Frontend", "Enterprise"];

/* ------------------------------------------------------------
   Skills
   ------------------------------------------------------------ */

export const skillGroups = [
  {
    id: "frontend",
    label: "Frontend",
    icon: "layout",
    items: [
      "Angular 17 - 21",
      "React",
      "TypeScript",
      "JavaScript ES6+",
      "Signals & Zoneless",
      "RxJS",
      "PrimeNG",
      "Tailwind CSS",
      "Angular Material",
      "Bootstrap",
      "ngx-translate / RTL",
    ],
  },
  {
    id: "backend",
    label: "Backend",
    icon: "server",
    items: [
      "Node.js",
      "NestJS",
      "Express.js",
      "Parse Server",
      "REST API Design",
      "JWT Auth",
      "RBAC",
      "LiveQuery / WebSocket",
      "Cron Jobs",
    ],
  },
  {
    id: "data",
    label: "Data & DevOps",
    icon: "database",
    items: [
      "MongoDB",
      "Mongoose",
      "SQL",
      "Docker",
      "Linux Deployment",
      "GitLab CI/CD",
      "Git / GitHub",
      "Production Debugging",
    ],
  },
  {
    id: "integrations",
    label: "Integrations",
    icon: "plug",
    items: [
      "HyperPay",
      "Camunda BPM",
      "Firebase FCM",
      "n8n Automation",
      "Google Maps",
      "CKEditor 5",
      "SheetJS / ExcelJS",
      "jsPDF & pdfMake",
      "Leaflet",
      "ECharts",
    ],
  },
  {
    id: "security",
    label: "Security",
    icon: "shield",
    items: [
      "OWASP Top 10",
      "Secure API Design",
      "Session & Auth Security",
      "Input Validation",
      "Burp Suite",
      "Nmap",
      "Metasploit",
      "Wireshark",
      "Kali Linux",
    ],
  },
];

/* ------------------------------------------------------------
   Security - kept as a reference block, not the headline
   ------------------------------------------------------------ */

export const security = {
  intro:
    "Security is training and interest, not my job title - but it changes how I write software. Access control, session handling and input validation are decisions I make at design time, on every platform above.",
  items: [
    {
      title: "Cyber Security Internship",
      org: "Focal X Agency",
      meta: "Sep - Dec 2025",
      note: "Four-month program. Scored 98.80%, ranked 2nd in cohort.",
    },
    {
      title: "Linux Server Pentest",
      org: "Solo black-box report",
      meta: "Jan 2026",
      note: "WordPress + FTP + SSH target. 4 critical/high findings, full post-exploitation write-up.",
    },
    {
      title: "OWASP Juice Shop Pentest",
      org: "Team of 4 - led the engagement",
      meta: "Jan 2026",
      note: "10 vulnerabilities across 8 OWASP Top 10 categories, with risk matrix and PoC evidence.",
    },
    {
      title: "TryHackMe Labs",
      org: "Ongoing practice",
      meta: "18 rooms",
      note: "Networking, web exploitation, SIEM, cryptography and malware analysis.",
    },
  ],
  tools: [
    "Burp Suite",
    "Nmap",
    "Metasploit",
    "Wireshark",
    "Hydra",
    "Hashcat",
    "WPScan",
    "Nikto",
    "DirB",
    "Kali Linux",
  ],
};

/* ------------------------------------------------------------
   Certificates
   ------------------------------------------------------------ */

export const certificates = [
  {
    id: "cs-internship",
    title: "Cyber Security Internship",
    issuer: "Focal X Agency",
    date: "Dec 2025",
    badge: "Score 98.80% - Rank 2nd",
    featured: true,
    type: "Security",
  },
  {
    id: "mern",
    title: "MERN Stack Training",
    issuer: "Focal X Agency",
    date: "Aug 2024",
    badge: "Rank 3rd in cohort",
    featured: true,
    type: "Development",
  },
  {
    id: "recommendation",
    title: "CEO Recommendation Letter",
    issuer: "Focal X Agency",
    date: "2024 & 2025",
    badge: "Awarded twice",
    featured: true,
    type: "Recognition",
  },
  {
    id: "google-foundations",
    title: "Foundations of Cybersecurity",
    issuer: "Google / Coursera",
    date: "Aug 2023",
    type: "Security",
  },
  {
    id: "google-playitsafe",
    title: "Play It Safe: Manage Security Risks",
    issuer: "Google / Coursera",
    date: "Sep 2023",
    type: "Security",
  },
  {
    id: "google-networks",
    title: "Connect and Protect: Networks and Network Security",
    issuer: "Google / Coursera",
    date: "Sep 2023",
    type: "Security",
  },
  {
    id: "google-linux",
    title: "Tools of the Trade: Linux and SQL",
    issuer: "Google / Coursera",
    date: "Oct 2023",
    type: "Foundations",
  },
];

/* ------------------------------------------------------------
   Nav
   ------------------------------------------------------------ */

export const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
];
