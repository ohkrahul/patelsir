export type InterestCard = {
  id: string;
  title: string;
  points: string[];
  footer: string;
};

export const interestCards: InterestCard[] = [
  {
    id: "science-health",
    title: "LIFE SCIENCES × HEALTHCARE",
    points: ["Human biology", "Preventive health", "Metabolic health", "Clinical research", "Better outcomes"],
    footer: "Understanding the science behind the human body.",
  },
  {
    id: "ai-technology",
    title: "AI × TECHNOLOGY",
    points: ["Artificial intelligence", "Data", "Pattern recognition", "Digital health", "Meaningful problems"],
    footer: "Exploring how machines recognise patterns and learn from information.",
  },
  {
    id: "research-music",
    title: "RESEARCH × MUSIC",
    points: ["Questions", "Evidence", "Guitar", "Creativity", "Expression"],
    footer: "Different ways to experiment, learn and think.",
  },
];
