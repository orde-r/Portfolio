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
    name: "BeeTip",
    role: "Sole Frontend Developer",
    description: "A food delivery experience with connected order flows and live status updates.",
    problem: "Multi-role ordering gets confusing when buyers, sellers, and couriers see fragmented status information.",
    solution: "A clear role-aware interface that carries each order from authentication through fulfillment.",
    built: "Responsive product screens, API integration, authentication, order details, and real-time status synchronization.",
    tech: ["React", "TypeScript", "Tailwind", "REST API", "Socket.io"],
    github: "https://github.com/orde-r/BeeTip",
  },
  {
    number: "02",
    name: "Strukly",
    role: "Frontend Lead",
    description: "An expense tracking product that turns transaction records into an understandable daily view.",
    problem: "Raw transaction history is difficult to scan, categorize, and use for everyday decisions.",
    solution: "A structured, responsive interface that makes expense information easier to manage and understand.",
    built: "The frontend architecture, core UI flows, reusable components, and team implementation coordination.",
    tech: ["React", "TypeScript", "Tailwind", "API Integration"],
    github: "https://github.com/mahasigma-sunib/strukly",
  },
  {
    number: "03",
    name: "Jalan Aman",
    role: "Mobile Developer",
    description: "A mobile safety platform that helps communities report hazards and understand nearby conditions.",
    problem: "People need location-aware safety information before choosing routes through unfamiliar areas.",
    solution: "A map-led mobile experience for browsing, creating, and understanding community safety reports.",
    built: "Flutter mobile features, map integration, location interactions, and the core on-device reporting experience.",
    tech: ["Flutter", "Dart", "Flutter Map", "Express"],
    github: "https://github.com/zhangs-tech/jalan-aman",
  },
];
