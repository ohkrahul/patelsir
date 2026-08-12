export type InterestCard = {
  id: string;
  title: string;
  points: string[];
  footer: string;
};

export const interestCards: InterestCard[] = [
  {
    id: "science-health",
    title: "SCIENCE × HEALTH",
    points: ["Biology", "Healthcare innovation", "Research", "Prevention", "Human problems"],
    footer: "Understanding the problem before trying to solve it.",
  },
  {
    id: "ai-technology",
    title: "AI × TECHNOLOGY",
    points: ["Artificial intelligence", "Data", "Pattern recognition", "Digital tools", "Experimentation"],
    footer: "Exploring what computation can reveal.",
  },
  {
    id: "music-ideas",
    title: "MUSIC × IDEAS",
    points: ["Guitar", "Creativity", "Expression", "Entrepreneurship", "Leadership"],
    footer: "Not every useful idea begins with a dataset.",
  },
];
