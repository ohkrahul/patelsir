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
    quote: "Shaurya Patel won Gold for the second consecutive year at the IRIS National Fair 2025–26 for research on a unified Metabolic Health Score.",
    name: "Gold at IRIS",
    roleLabel: "Featured milestone · 2026",
    isPlaceholder: false,
  },
  {
    id: "national-stage",
    quote: "At the national fair, 120 projects by 152 students were evaluated, with Shaurya's project receiving Gold recognition.",
    name: "IRIS National Fair 2025–26",
    roleLabel: "On the national stage",
    isPlaceholder: false,
  },
  {
    id: "representing-india",
    quote: "After winning Gold at IRIS in 2025, Shaurya represented India at Regeneron ISEF 2025 in Columbus, Ohio.",
    name: "Representing India",
    roleLabel: "Regeneron ISEF · 2025",
    isPlaceholder: false,
  },
  {
    id: "research",
    quote: "The project explores metabolic risk stratification across clinical, lifestyle and diagnostic information.",
    name: "EarlyDetect-AI",
    roleLabel: "Research coverage",
    isPlaceholder: false,
  },
  {
    id: "more-to-come",
    quote: "Every new competition, project, recognition and milestone becomes another chapter.",
    name: "More to come",
    roleLabel: "This journey isn't finished",
    isPlaceholder: false,
  },
];
