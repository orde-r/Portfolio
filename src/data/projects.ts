export type Project = {
  number: string;
  name: string;
  role: string;
  description: string;
  problem: string;
  solution: string;
  built: string;
  tech: string[];
  github: string;
};

export const projects: Project[] = [
  {
    number: "01",
    name: "Koinku",
    role: "Frontend Lead",
    description: "An expense tracking platform that automates receipt logging and keeps savings goals in motion.",
    problem: "Manual expense tracking creates friction — logging every transaction by hand is tedious and easy to abandon.",
    solution: "Receipt scanning that logs transactions automatically, paired with interactive savings goals that keep users motivated.",
    built: "Led a 3-person frontend team, architected a reusable design system, and integrated OCR and transaction endpoints for seamless logging.",
    tech: ["React", "TypeScript", "Tailwind", "API Integration"],
    github: "https://koinku.my.id",
  },
  {
    number: "02",
    name: "BeeTip",
    role: "Frontend Developer",
    description: "A peer-to-peer errand platform where students request items and peers heading their way deliver them.",
    problem: "Students lose time traveling between campus floors for meals and essentials that peers nearby could pick up anyway.",
    solution: "A request-and-deliver flow that matches errands with peers already heading the same way, keeping both sides updated live.",
    built: "The complete client-facing prototype as the sole frontend developer: authentication, order creation, errand matching, and real-time status tracking.",
    tech: ["React", "TypeScript", "Tailwind", "REST API", "Socket.io"],
    github: "https://github.com/orde-r/BeeTip",
  },
  {
    number: "03",
    name: "Jalan Aman",
    role: "Mobile Developer",
    description: "A community-driven mobile platform for crowdsourcing and monitoring real-time road hazards.",
    problem: "Commuters face unpredicted road hazards with no way to know conditions before arriving at their destinations.",
    solution: "A map-led mobile experience to pin hazards, browse community reports, and receive proactive proximity warnings.",
    built: "Geospatial mapping with Flutter Map and OpenStreetMap, location-based reporting flows, and Express backend integration for live incident feeds.",
    tech: ["Flutter", "Dart", "Flutter Map", "Express"],
    github: "https://github.com/zhangs-tech/jalan-aman",
  },
];
