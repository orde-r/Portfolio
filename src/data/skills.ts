export type SkillGroup = {
  number: string;
  title: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    number: "01",
    title: "Frontend",
    skills: ["React", "TypeScript", "Tailwind CSS", "JavaScript", "Zustand", "HTML", "CSS"],
  },
  {
    number: "02",
    title: "Backend",
    skills: ["Express", "REST API", "Prisma", "PostgreSQL", "Authentication", "Docker"],
  },
  {
    number: "03",
    title: "Mobile",
    skills: ["Flutter", "Dart", "Flutter Map"],
  },
  {
    number: "04",
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Figma"],
  },
];
