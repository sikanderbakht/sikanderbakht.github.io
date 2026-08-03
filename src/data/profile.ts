/** Site-wide profile content: metrics, experience, skills, approach, contact. */

export const person = {
  name: "Sikander Bakht",
  role: "Mobile Lead",
  tagline: "Mobile Lead & Engineer",
  years: "10+",
  location: "Dubai, United Arab Emirates",
  email: "sikander.bin.ismail@gmail.com",
  phone: "+971 50 585 2690",
  phoneHref: "+971505852690",
  linkedin: "https://www.linkedin.com/in/sikander-bakht-410b4a97",
  github: "https://github.com/sikanderbakht",
  cv: "/sikander-bakht-cv.pdf",
};

export const metrics = [
  { value: "10+", label: "Years shipping mobile" },
  { value: "10M+", label: "Downloads (STC Pay)" },
  { value: "40→2 min", label: "Build times cut" },
  { value: "99%+", label: "Crash-free releases" },
];

export interface Role {
  company: string;
  title: string;
  period: string;
  location: string;
  summary: string;
  points: string[];
}

export const experience: Role[] = [
  {
    company: "Nagarro",
    title: "Staff Software Engineer · Mobile Lead",
    period: "Apr 2022 – Present",
    location: "Dubai, UAE",
    summary:
      "Leading architecture and delivery for high-traffic Android and React Native banking apps across multiple client squads (Emirates NBD, Emirates Islamic, Riyad Bank, MultiBank Group).",
    points: [
      "Led modularization of multi-app banking codebases, cutting build times from ~40 minutes to ~2 minutes and enabling parallel squad delivery.",
      "Owned end-to-end fintech journeys — digital account opening, KYC/liveness (Jumio, EFR, TrueID), payments, and core banking screens.",
      "Built polished UI with Jetpack Compose (Android) and a modular, atomic-design React Native stack, mentoring engineers on performance, security, and maintainability.",
      "Introduced AI-accelerated workflows — custom Claude Code skills/subagents, AI-assisted test generation and code review — and E2E automation with WebdriverIO + Appium.",
    ],
  },
  {
    company: "STC Bahrain",
    title: "Senior Software Engineer",
    period: "Nov 2019 – Apr 2022",
    location: "Manama, Bahrain",
    summary:
      "Led the overhaul of Bahrain's leading mobile wallet across architecture and performance, shipping core wallet features on Android.",
    points: [
      "Migrated the codebase from Java to Kotlin and re-architected MVC → MVVM with Clean Architecture and Dagger/Hilt.",
      "Shipped P2P transfers, bill payments, remittances, and payment flows integrating backend services via Retrofit.",
      "Led NFC Tap & Go with Mastercard's SDK and virtual cards, delivering the feature within three months.",
      "Maintained 90%+ unit test coverage and 99%+ crash-free releases on an app with 10M+ downloads and a 4.5★ rating.",
    ],
  },
  {
    company: "SADAD Bahrain",
    title: "Software Engineer",
    period: "Jun 2017 – Nov 2019",
    location: "Manama, Bahrain",
    summary:
      "Built features for a one-stop payments platform consolidating 200+ consumer services into a single app.",
    points: [
      "Migrated architecture from MVC to Clean Architecture with MVVM for scalability and maintainability.",
      "Designed a backend-driven UI system rendering screens from API responses, cutting duplicate UI and speeding new-service rollout.",
      "Implemented offline-first data flows with Room and reduced app size by nearly 40% through build optimization and code splitting.",
      "Maintained 90%+ coverage and 99%+ crash-free releases.",
    ],
  },
];

export const education = {
  school: "National University of Computer and Emerging Sciences (FAST-NUCES)",
  degree: "BSc, Computer Science",
  period: "2013 – 2017",
  location: "Lahore, Pakistan",
};

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface SkillDomain {
  title: string;
  lead: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Platforms",
    items: ["Android", "Kotlin", "Java", "React Native", "TypeScript", "iOS (Swift)", "Flutter", "Kotlin Multiplatform", "Jetpack Compose"],
  },
  {
    title: "Architecture",
    items: ["Clean Architecture", "MVVM", "Modularization", "Atomic Design", "Monorepo", "Server-driven UI"],
  },
  {
    title: "State & Data",
    items: ["Coroutines", "Flow", "Redux Toolkit", "RTK Query", "Zustand", "Retrofit", "Room", "REST", "GraphQL", "WebSockets"],
  },
  {
    title: "Quality & CI",
    items: ["TDD", "JUnit", "Espresso", "Jest", "Appium", "WebdriverIO", "GitHub Actions", "Fastlane", "Sentry", "Crashlytics"],
  },
  {
    title: "AI & Workflow",
    items: ["Claude Code skills", "AI test generation", "AI code review", "Spec-first delivery", "MCP integrations"],
  },
];

// Featured domains shown prominently at the top of the Skills section.
export const skillDomains: SkillDomain[] = [
  {
    title: "Native Android",
    lead: "Kotlin & Java",
    items: ["Jetpack Compose", "Coroutines / Flow", "Hilt", "MVVM", "Clean Architecture"],
  },
  {
    title: "React Native",
    lead: "TypeScript",
    items: ["Redux Toolkit", "RTK Query", "React Navigation", "Native modules", "Atomic design"],
  },
  {
    title: "Cross-platform",
    lead: "iOS · Flutter · KMP",
    items: ["Swift basics", "Flutter", "Kotlin Multiplatform", "Shared design systems"],
  },
];

export interface Pillar {
  title: string;
  body: string;
}

export const approach: Pillar[] = [
  {
    title: "AI-accelerated engineering",
    body: "I author custom Claude Code skills and subagents for feature scaffolding, boilerplate, and test generation, run AI-assisted code review to enforce architecture, and work spec/plan-first with MCP integrations — including AI-assisted Java→Kotlin and JS→TS migrations.",
  },
  {
    title: "Atomic design systems",
    body: "I build interfaces as tokens → atoms → molecules → organisms, giving product suites a consistent, reusable UI language that scales across apps — as shipped across the MultiBank trading platforms.",
  },
  {
    title: "Modular architecture",
    body: "Feature modules with strict dependency boundaries, independently runnable and releasable. This is what took build times from ~40 minutes to ~2 minutes and unlocked parallel squad delivery.",
  },
  {
    title: "A real quality bar",
    body: "90%+ unit test coverage, 99%+ crash-free releases, E2E automation with Appium and WebdriverIO, and crash/funnel observability with dashboards and alerts to keep releases confident.",
  },
];

export const clients = [
  "Emirates NBD",
  "Emirates Islamic",
  "Liv",
  "Riyad Bank",
  "MultiBank Group",
  "STC Pay",
  "SADAD",
];
