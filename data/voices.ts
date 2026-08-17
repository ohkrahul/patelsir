export type Voice = {
  id: string;
  quote: string;
  name: string;
  roleLabel: string;
  isPlaceholder: boolean;
};

export const voices: Voice[] = [
  {
    id: "featured",
    quote: "Second consecutive IRIS Gold for research on a unified Metabolic Health Score.",
    name: "Gold at IRIS",
    roleLabel: "Featured milestone · 2026",
    isPlaceholder: false,
  },
  {
    id: "national-stage",
    quote: "Selected for Gold from 120 projects presented by 152 students.",
    name: "IRIS National Fair 2025–26",
    roleLabel: "On the national stage",
    isPlaceholder: false,
  },
  {
    id: "representing-india",
    quote: "Represented India at Regeneron ISEF 2025 in Columbus, Ohio.",
    name: "Representing India",
    roleLabel: "Regeneron ISEF · 2025",
    isPlaceholder: false,
  },
  {
    id: "research",
    quote: "Exploring metabolic risk across clinical, lifestyle and diagnostic information.",
    name: "EarlyDetect-AI",
    roleLabel: "Research coverage",
    isPlaceholder: false,
  },
  {
    id: "more-to-come",
    quote: "Every new project and milestone becomes another chapter.",
    name: "More to come",
    roleLabel: "This journey isn't finished",
    isPlaceholder: false,
  },
];
