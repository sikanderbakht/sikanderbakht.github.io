/**
 * Single source of truth for all case studies.
 *
 * Content rule: every claim traces to Sikander's resumes (Android + React
 * Native) or to the app's own public store listing. No invented metrics.
 *
 * Images: each project has a folder at src/assets/projects/<slug>/ resolved by
 * src/lib/images.ts. Entries flagged `temp: true` are stand-ins to be swapped
 * for real store captures — search TODO(IMAGE-REPLACE) to find them all, and
 * see IMAGES.md for the checklist.
 */

export type Category = "Banking" | "Trading" | "Payments" | "Consumer";
export type Stack = "Android" | "React Native";

export interface ProjectImage {
  /** filename inside src/assets/projects/<slug>/ */
  file: string;
  alt: string;
  temp?: boolean;
  source?: "real" | "generated" | "play-store" | "app-store";
}

export interface Fact {
  value: string;
  label: string;
}

export interface Project {
  slug: string;
  name: string;
  client: string;
  category: Category;
  /** primary technology track shown on the card/hero */
  stack: Stack;
  /** full tech chip list */
  tech: string[];
  role: string;
  /** display period; omitted where exact dates are unconfirmed */
  period?: string;
  /** brand-derived tint (approx from the real app), used sparingly on dark */
  tint: string;
  tagline: string;
  overview: string;
  facts: Fact[];
  contributions: string[];
  impact?: string;
  /** span two columns on the desktop grid */
  featured?: boolean;
  images: ProjectImage[];
}

export const projects: Project[] = [
  {
    slug: "enbdx",
    name: "ENBD X",
    client: "Emirates NBD",
    category: "Banking",
    stack: "Android",
    tech: [
      "Android",
      "Kotlin",
      "Jetpack Compose",
      "MVVM",
      "Clean Architecture",
      "Dagger/Hilt",
      "Coroutines",
      "Navigation Component",
      "Modularization",
    ],
    role: "Mobile Lead",
    period: "2023 – Present",
    tint: "#22B8CF",
    tagline: "Next-generation retail banking for the UAE's largest bank.",
    overview:
      "ENBD X is Emirates NBD's flagship retail banking app, built on a shared multi-app Android platform. I led the modularization of that codebase and delivered secure digital onboarding, restructuring the app so multiple squads could ship in parallel.",
    facts: [
      { value: "40→2 min", label: "Build time cut" },
      { value: "5", label: "White-label apps on the platform" },
      { value: "90%+", label: "Unit test coverage" },
    ],
    contributions: [
      "Led modularization of a shared multi-app Android codebase into core and feature modules with strict dependency rules, enabling parallel development across teams.",
      "Built independently runnable feature modules and standardized navigation so features could be developed, tested, and released more independently.",
      "Delivered digital onboarding flows including identity verification and liveness checks (Jumio, EFR, TrueID), and co-developed supporting backend APIs to align contracts and validation.",
      "Strengthened release quality through unit tests and UI automation on critical onboarding steps, backed by crash monitoring to keep production stability high.",
    ],
    impact:
      "Reduced build times from ~40 minutes to ~2 minutes and enabled independent, parallel squad delivery across the bank's app suite.",
    featured: true,
    images: [
      { file: "enbdx-app-1.png", alt: "ENBD X dashboard screen", source: "real" },
      { file: "enbdx-app-2.png", alt: "ENBD X accounts overview", source: "real" },
      { file: "enbdx-app-3.png", alt: "ENBD X payments screen", source: "real" },
      { file: "enbdx-app-4.png", alt: "ENBD X transfers screen", source: "real" },
      { file: "enbdx-app-5.png", alt: "ENBD X insights screen", source: "real" },
    ],
  },

  {
    slug: "emirates-islamic",
    name: "Emirates Islamic",
    client: "Emirates Islamic",
    category: "Banking",
    stack: "Android",
    tech: [
      "Android",
      "Kotlin",
      "MVVM",
      "Clean Architecture",
      "Dagger/Hilt",
      "Modularization",
    ],
    role: "Mobile Lead",
    period: "2023 – Present",
    tint: "#16A34A",
    tagline: "Sharia-compliant digital banking on a shared platform.",
    overview:
      "Emirates Islamic's banking app is the Sharia-compliant sibling of ENBD X, built from the same modular Android platform. I contributed the shared architecture and onboarding, keeping strict module boundaries so both apps evolve safely from one codebase.",
    facts: [
      { value: "1 codebase", label: "Shared across apps" },
      { value: "90%+", label: "Unit test coverage" },
    ],
    contributions: [
      "Refactored the shared multi-app Android codebase into core and feature modules with clear dependency rules, enabling parallel development across teams.",
      "Built runnable feature modules and standardized navigation patterns so features could be developed, tested, and released more independently.",
      "Delivered digital onboarding including identity verification and liveness checks, co-developing backend APIs to align request/response contracts and validation rules.",
      "Strengthened release quality with unit tests and UI automation on critical onboarding steps, supported by crash monitoring.",
    ],
    images: [
      { file: "cover.svg", alt: "Emirates Islamic app placeholder", temp: true, source: "generated" }, // TODO(IMAGE-REPLACE)
      { file: "shot-1.svg", alt: "Emirates Islamic app placeholder", temp: true, source: "generated" }, // TODO(IMAGE-REPLACE)
      { file: "shot-2.svg", alt: "Emirates Islamic app placeholder", temp: true, source: "generated" }, // TODO(IMAGE-REPLACE)
    ],
  },

  {
    slug: "liv",
    name: "Liv",
    client: "Emirates NBD",
    category: "Banking",
    stack: "Android",
    tech: [
      "Android",
      "Kotlin",
      "Coroutines",
      "Paging",
      "MVVM",
      "Clean Architecture",
    ],
    role: "Android Lead",
    period: "2022 – 2023",
    tint: "#FF4D6D",
    tagline: "Lifestyle digital bank with in-app crypto & stock trading.",
    overview:
      "Liv is Emirates NBD's lifestyle digital bank. I built its end-to-end investing experience — crypto and stock trading journeys plus portfolio management — designed for fast refresh and smooth rendering under real-world network conditions.",
    facts: [
      { value: "Crypto + stocks", label: "Trading journeys" },
      { value: "Watchlists", label: "Portfolio & holdings" },
    ],
    contributions: [
      "Built end-to-end trading journeys for crypto and stocks, covering quote retrieval, order placement, confirmation states, and transaction history.",
      "Implemented portfolio experiences (watchlists, holdings, asset detail) designed for fast refresh and smooth rendering with pagination and caching.",
      "Contributed to trading and portfolio backend APIs, aligning mobile and backend on error models, idempotent-friendly order handling, and data consistency.",
      "Improved reliability with focused unit tests for trading state and end-to-end coverage for buy/sell flows.",
    ],
    images: [
      { file: "cover.svg", alt: "Liv app placeholder", temp: true, source: "generated" }, // TODO(IMAGE-REPLACE)
      { file: "shot-1.svg", alt: "Liv app placeholder", temp: true, source: "generated" }, // TODO(IMAGE-REPLACE)
      { file: "shot-2.svg", alt: "Liv app placeholder", temp: true, source: "generated" }, // TODO(IMAGE-REPLACE)
    ],
  },

  {
    slug: "mbio",
    name: "MB.io",
    client: "MultiBank Group",
    category: "Trading",
    stack: "React Native",
    tech: [
      "React Native",
      "TypeScript",
      "Redux Toolkit",
      "RTK Query",
      "Modular Architecture",
      "Atomic Design",
      "Native SDK Integration",
    ],
    role: "Mobile Lead",
    tint: "#F5A623",
    tagline: "Regulated crypto exchange, built for clarity and speed.",
    overview:
      "MB.io is MultiBank Group's regulated crypto exchange — buy, sell, and trade BTC, ETH and USDT with an institutional-grade wallet and portfolio tracking. I built the trading and payment flows from the ground up in a fully modular architecture following an atomic design system.",
    facts: [
      { value: "BTC · ETH · USDT", label: "Assets traded" },
      { value: "Atomic design", label: "Fully modular UI" },
      { value: "17+", label: "Regulators (MultiBank Group)" },
    ],
    contributions: [
      "Built core trading flows — real-time price charts, market orders, and instant buy/sell/exchange for BTC, ETH and USDT — from the ground up.",
      "Developed a secure digital wallet and portfolio dashboard for tracking balances and transactions across multiple assets.",
      "Implemented discovery and market-insight surfaces (trending coins, curated collections) to support informed decisions.",
      "Architected the app in a fully modular way and applied an atomic design system for consistent, reusable UI across the product.",
    ],
    images: [
      { file: "cover.svg", alt: "MB.io app placeholder", temp: true, source: "generated" }, // TODO(IMAGE-REPLACE)
      { file: "shot-1.svg", alt: "MB.io app placeholder", temp: true, source: "generated" }, // TODO(IMAGE-REPLACE)
      { file: "shot-2.svg", alt: "MB.io app placeholder", temp: true, source: "generated" }, // TODO(IMAGE-REPLACE)
    ],
  },

  {
    slug: "mbfx",
    name: "MultiBank Plus",
    client: "MultiBank Group",
    category: "Trading",
    stack: "React Native",
    tech: [
      "React Native",
      "TypeScript",
      "Redux Toolkit",
      "RTK Query",
      "Modular Architecture",
      "Atomic Design",
    ],
    role: "Mobile Lead",
    tint: "#3B82F6",
    tagline: "Multi-asset derivatives trading with 20,000+ instruments.",
    overview:
      "MultiBank Plus (MBFX) is MultiBank Group's multi-asset trading platform, offering 20,000+ instruments with advanced charting and real-time market data. I built the trading and payment flows from the start, in a modular architecture with an atomic design system.",
    facts: [
      { value: "20,000+", label: "Tradable instruments" },
      { value: "$35B+", label: "Daily group volume" },
      { value: "100", label: "Countries served" },
    ],
    contributions: [
      "Built trading journeys across 20,000+ instruments with advanced charting and real-time market data.",
      "Implemented efficient order execution and secure funding/payment flows for a regulated environment.",
      "Delivered a risk-free demo trading experience with a virtual balance for new traders.",
      "Structured the app modularly and applied an atomic design system for scalable, consistent UI.",
    ],
    images: [
      { file: "cover.svg", alt: "MultiBank Plus app placeholder", temp: true, source: "generated" }, // TODO(IMAGE-REPLACE)
      { file: "shot-1.svg", alt: "MultiBank Plus app placeholder", temp: true, source: "generated" }, // TODO(IMAGE-REPLACE)
      { file: "shot-2.svg", alt: "MultiBank Plus app placeholder", temp: true, source: "generated" }, // TODO(IMAGE-REPLACE)
    ],
  },

  {
    slug: "mex",
    name: "MEX",
    client: "MultiBank Group",
    category: "Trading",
    stack: "React Native",
    tech: [
      "React Native",
      "TypeScript",
      "Redux Toolkit",
      "Modular Architecture",
      "Atomic Design",
    ],
    role: "Mobile Lead",
    tint: "#D4A72C",
    tagline: "The next-generation evolution of MultiBank Plus.",
    overview:
      "MEX is the next-generation rebuild of MultiBank Plus — a modernized multi-asset trading experience with a refreshed architecture and design system. I built its trading and payment flows from the ground up.",
    facts: [
      { value: "Next-gen", label: "Rebuild of MB Plus" },
      { value: "Multi-asset", label: "Trading platform" },
    ],
    contributions: [
      "Rebuilt core trading and payment flows for the next-generation multi-asset platform.",
      "Modernized the app architecture with a fully modular structure and an atomic design system.",
      "Focused on performance and consistency across a refreshed multi-asset trading experience.",
    ],
    images: [
      { file: "cover.svg", alt: "MEX app placeholder", temp: true, source: "generated" }, // TODO(IMAGE-REPLACE)
      { file: "shot-1.svg", alt: "MEX app placeholder", temp: true, source: "generated" }, // TODO(IMAGE-REPLACE)
      { file: "shot-2.svg", alt: "MEX app placeholder", temp: true, source: "generated" }, // TODO(IMAGE-REPLACE)
    ],
  },

  {
    slug: "edara",
    name: "Edara",
    client: "Riyad Bank",
    category: "Banking",
    stack: "React Native",
    tech: [
      "React Native",
      "TypeScript",
      "React Navigation",
      "Redux Toolkit",
      "iOS",
      "Android",
    ],
    role: "Mobile Lead",
    period: "2022 – 2023",
    tint: "#14B8A6",
    tagline: "Cross-platform digital business banking.",
    overview:
      "Edara is Riyad Bank's digital business banking app for iOS and Android. I led development of a consistent cross-platform experience and built complex onboarding-style journeys for mortgages and loans under strict compliance constraints.",
    facts: [
      { value: "iOS + Android", label: "Single React Native app" },
      { value: "Mortgages & loans", label: "Compliance journeys" },
    ],
    contributions: [
      "Led development of a React Native business banking app for iOS and Android, delivering a consistent cross-platform experience across multiple core banking services.",
      "Built complex onboarding-style journeys for mortgages and loans — eligibility checks, document capture, validation, and real-time status tracking under compliance constraints.",
      "Hardened flow reliability with resilient networking and state handling — timeouts, retries, and robust error recovery for poor-network conditions.",
      "Defined a scalable app architecture with clear boundaries, enabling faster iteration while reducing regression risk.",
    ],
    images: [
      { file: "cover.svg", alt: "Edara app placeholder", temp: true, source: "generated" }, // TODO(IMAGE-REPLACE)
      { file: "shot-1.svg", alt: "Edara app placeholder", temp: true, source: "generated" }, // TODO(IMAGE-REPLACE)
      { file: "shot-2.svg", alt: "Edara app placeholder", temp: true, source: "generated" }, // TODO(IMAGE-REPLACE)
    ],
  },

  {
    slug: "stc-pay",
    name: "STC Pay",
    client: "STC Bahrain",
    category: "Payments",
    stack: "Android",
    tech: [
      "Android",
      "Kotlin",
      "MVVM",
      "Clean Architecture",
      "Dagger/Hilt",
      "Retrofit",
      "Coroutines",
      "NFC",
    ],
    role: "Senior Mobile Engineer",
    period: "2019 – 2022",
    tint: "#9333EA",
    tagline: "Bahrain's leading mobile wallet.",
    overview:
      "STC Pay is Bahrain's leading mobile wallet. I led an overhaul of its Android architecture and performance while shipping core wallet journeys and delivering NFC Tap & Go in partnership with Mastercard.",
    facts: [
      { value: "10M+", label: "Downloads" },
      { value: "4.5★", label: "Store rating" },
      { value: "3 months", label: "NFC delivered" },
      { value: "99%+", label: "Crash-free releases" },
    ],
    contributions: [
      "Migrated the Android codebase from Java to Kotlin and re-architected it from MVC to MVVM, improving maintainability and development velocity.",
      "Built and shipped core wallet journeys — P2P transfers, bill payments, remittances, and payment flows — integrating backend services via Retrofit.",
      "Led end-to-end delivery of NFC Tap & Go, integrating Mastercard's SDK with virtual cards and launching the feature within three months.",
      "Monitored and optimized performance with Firebase Performance and profiling tools, reducing startup time and minimizing UI jank.",
    ],
    impact:
      "Contributed to a wallet with 10M+ downloads and a 4.5★ rating, maintaining 90%+ test coverage and 99%+ crash-free production releases.",
    featured: true,
    images: [
      { file: "cover.svg", alt: "STC Pay app placeholder", temp: true, source: "generated" }, // TODO(IMAGE-REPLACE)
      { file: "shot-1.svg", alt: "STC Pay app placeholder", temp: true, source: "generated" }, // TODO(IMAGE-REPLACE)
      { file: "shot-2.svg", alt: "STC Pay app placeholder", temp: true, source: "generated" }, // TODO(IMAGE-REPLACE)
    ],
  },

  {
    slug: "sadad",
    name: "Sadad",
    client: "SADAD Bahrain",
    category: "Payments",
    stack: "Android",
    tech: [
      "Android",
      "Kotlin",
      "MVVM",
      "Clean Architecture",
      "Retrofit",
      "Room",
      "Server-driven UI",
    ],
    role: "Software Engineer",
    period: "2017 – 2019",
    tint: "#22C55E",
    tagline: "One-stop payments platform for Bahrain.",
    overview:
      "Sadad is Bahrain's one-stop payments app, consolidating 200+ consumer services into a single experience. I migrated it to Clean Architecture, built a backend-driven UI system, and made data flows offline-first.",
    facts: [
      { value: "200+", label: "Consumer services" },
      { value: "~40%", label: "App-size reduction" },
      { value: "99%+", label: "Crash-free releases" },
    ],
    contributions: [
      "Built features for a one-stop payments platform integrating 200+ consumer services and supporting high-volume transactions.",
      "Migrated the Android architecture from MVC to Clean Architecture with MVVM, improving structure, scalability, and maintainability.",
      "Designed a backend-driven UI system that rendered screens from API responses, reducing duplicate UI code and speeding up delivery of new services.",
      "Implemented offline-first data flows using Room with clear data/domain/presentation separation, and reduced app size by almost 40% through build optimization and code splitting.",
    ],
    impact:
      "Maintained 90%+ unit test coverage and 99%+ crash-free releases while cutting app size by nearly 40%.",
    images: [
      { file: "cover.svg", alt: "Sadad app placeholder", temp: true, source: "generated" }, // TODO(IMAGE-REPLACE)
      { file: "shot-1.svg", alt: "Sadad app placeholder", temp: true, source: "generated" }, // TODO(IMAGE-REPLACE)
      { file: "shot-2.svg", alt: "Sadad app placeholder", temp: true, source: "generated" }, // TODO(IMAGE-REPLACE)
    ],
  },

  {
    slug: "hello-demo",
    name: "Hello",
    client: "Personal project",
    category: "Consumer",
    stack: "React Native",
    tech: ["React Native", "WebSockets", "Native Modules", "ExoPlayer"],
    role: "Mobile Engineer",
    period: "2016 – 2017",
    tint: "#A855F7",
    tagline: "A real-time music-sharing app.",
    overview:
      "Hello is an early music-sharing app with real-time chat and resilient background audio playback — an experiment in real-time messaging and native media integration.",
    facts: [
      { value: "Real-time", label: "WebSocket chat" },
      { value: "Background audio", label: "Native playback" },
    ],
    contributions: [
      "Built a real-time chat module using WebSockets, including reconnect handling and message delivery states.",
      "Implemented background audio playback via a native ExoPlayer module with a foreground service, notifications, and media controls.",
      "Added test coverage for chat and playback state, and improved playback resilience for interruptions and app backgrounding.",
    ],
    images: [
      { file: "cover.svg", alt: "Hello app placeholder", temp: true, source: "generated" }, // TODO(IMAGE-REPLACE)
      { file: "shot-1.svg", alt: "Hello app placeholder", temp: true, source: "generated" }, // TODO(IMAGE-REPLACE)
      { file: "shot-2.svg", alt: "Hello app placeholder", temp: true, source: "generated" }, // TODO(IMAGE-REPLACE)
    ],
  },
];

export const categories: Category[] = ["Banking", "Trading", "Payments", "Consumer"];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
