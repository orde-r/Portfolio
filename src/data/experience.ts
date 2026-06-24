export type Experience = {
  period: string;
  title: string;
  role: string;
  description: string;
  details?: string;
};

export const experiences: Experience[] = [
  {
    period: "2024 — Present",
    title: "KMBD",
    role: "Student Organization Staff",
    description: "Supporting event execution, team coordination, and operational activities at BINUS University.",
    details: "Built practical experience in communication, responsibility, adaptability, and working across committees.",
  },
  {
    period: "Committee",
    title: "Kathina Event",
    role: "Design & Documentation",
    description: "Contributed to visual documentation and design-related event needs as part of the committee.",
  },
  {
    period: "Committee",
    title: "One Million Help",
    role: "Fundraising",
    description: "Supported a charity program focused on village outreach, socialization, and basic food distribution.",
    details: "Helped coordinate fundraising and event preparation with the wider organizing team.",
  },
];
