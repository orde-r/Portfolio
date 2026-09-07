export type Project = {
  name: string;
  role: string;
  period: string;
  description: string;
  problem: string;
  solution: string;
  built: string;
  tech: string[];
  github: string;
};

export const projects: Project[] = [
  {
    name: "Koinku",
    role: "Frontend Lead",
    period: "Oct 2025 — Jan 2026",
    description: "An expense tracking platform that automates receipt logging and keeps savings goals in motion.",
    problem: "Manual expense tracking creates friction — logging every transaction by hand is tedious and easy to abandon.",
    solution: "Receipt scanning that logs transactions automatically, paired with interactive savings goals that keep users motivated.",
    built: "Led a 3-person frontend team, architected a reusable design system, and integrated OCR and transaction endpoints for seamless logging.",
    tech: ["React", "TypeScript", "Tailwind", "API Integration"],
    github: "https://koinku.my.id",
  },
  {
    name: "BeeTip",
    role: "Frontend Developer",
    period: "Feb 2026 — Jun 2026",
    description: "A peer-to-peer errand platform where students request items and peers heading their way deliver them.",
    problem: "Students lose time traveling between campus floors for meals and essentials that peers nearby could pick up anyway.",
    solution: "A request-and-deliver flow that matches errands with peers already heading the same way, keeping both sides updated live.",
    built: "The complete client-facing prototype as the sole frontend developer: authentication, order creation, errand matching, and real-time status tracking.",
    tech: ["React", "TypeScript", "Tailwind", "REST API", "Socket.io"],
    github: "https://github.com/orde-r/BeeTip",
  },
  {
    name: "Jalan Aman",
    role: "Mobile Developer",
    period: "Feb 2026 — Jun 2026",
    description: "A community-driven mobile platform for crowdsourcing and monitoring real-time road hazards.",
    problem: "Commuters face unpredicted road hazards with no way to know conditions before arriving at their destinations.",
    solution: "A map-led mobile experience to pin hazards, browse community reports, and receive proactive proximity warnings.",
    built: "Geospatial mapping with Flutter Map and OpenStreetMap, location-based reporting flows, and Express backend integration for live incident feeds.",
    tech: ["Flutter", "Dart", "Flutter Map", "Express"],
    github: "https://github.com/zhangs-tech/jalan-aman",
  },
  {
    name: "Mealio",
    role: "Full-stack Developer",
    period: "Feb 2026 — Jun 2026",
    description: "An AI-based mobile food recommendation app that curates personalized dining options for each user.",
    problem: "Finding meals that fit personal preferences, budgets, and dietary restrictions takes time and guesswork.",
    solution: "An AI-powered recommendation flow that tailors dining suggestions to each user's profile, budget, and dietary needs.",
    built: "Handled end-to-end delivery: Express backend containerized with Docker, PostgreSQL schema via Prisma, recommendation endpoints, and modular Flutter UI screens.",
    tech: ["Flutter", "Express", "PostgreSQL", "Prisma", "Docker"],
    github: "https://github.com/orde-r/mealio",
  },
];
