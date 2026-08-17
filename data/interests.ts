export type InterestCard = { id: string; title: string; points: string[]; footer: string };

export const interestCards: InterestCard[] = [
  { id: "science-health", title: "LIFE SCIENCES × HEALTHCARE", points: ["Human biology", "Preventive health", "Metabolic health", "Clinical research", "Better outcomes"], footer: "I'm fascinated by the human body and how different systems interact." },
  { id: "ai-technology", title: "AI × TECHNOLOGY", points: ["Artificial intelligence", "Data", "Pattern recognition", "Digital health", "Real-world problems"], footer: "I'm curious about how technology can help solve meaningful problems." },
  { id: "research-music", title: "RESEARCH × MUSIC", points: ["Questions", "Evidence", "Guitar", "Creativity", "Expression"], footer: "I enjoy making sense of questions—and letting creativity take over." },
];
