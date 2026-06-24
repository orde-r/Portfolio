export type SkillGroup = {
  number: string;
  title: string;
  description: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    number: "01",
    title: "Frontend",
    description: "Responsive interfaces built around clarity, reuse, and reliable product flows.",
    skills: ["React", "TypeScript", "Tailwind CSS", "JavaScript", "Zustand", "HTML", "CSS"],
  },
  {
    number: "02",
    title: "Backend",
    description: "APIs and data systems that support real application behavior.",
    skills: ["Express", "REST API", "Prisma", "PostgreSQL", "Authentication", "Docker"],
  },
  {
    number: "03",
    title: "Mobile",
    description: "Cross-platform applications with map and location-aware interactions.",
    skills: ["Flutter", "Dart", "Flutter Map"],
  },
  {
    number: "04",
    title: "Tools",
    description: "Practical tools for designing, debugging, and shipping with a team.",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Figma"],
  },
];
