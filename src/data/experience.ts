export type Experience = {
  period: string;
  title: string;
  role: string;
  description: string;
  details?: string;
  sub?: ExperienceSub[];
};

export type ExperienceSub = {
  title: string;
  role: string;
  description: string;
  details?: string;
};

export const experiences: Experience[] = [
  {
    period: "Dec 2024 — Present",
    title: "KMBD",
    role: "Staff & Division Treasurer",
    description:
      "Supporting event execution, team coordination, and operational activities at BINUS University, while tracking divisional expenses and budgets.",
    details:
      "Built practical experience in communication, responsibility, adaptability, and working across committees.",
    sub: [
      {
        title: "Kathina Event",
        role: "Design & Documentation Committee",
        description:
          "Contributed to visual documentation and design-related event needs as part of the committee.",
      },
      {
        title: "One Million Help",
        role: "Fundraising Committee",
        description:
          "Supported a charity program focused on village outreach, socialization, and basic food distribution.",
        details:
          "Helped coordinate fundraising and event preparation with the wider organizing team.",
      },
    ],
  },
];
