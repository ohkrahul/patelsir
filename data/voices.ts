export type Voice = { id: string; quote: string; name: string; roleLabel: string; isPlaceholder: boolean };

export const voices: Voice[] = [
  { id: "featured", quote: "I won Gold at IRIS for the second consecutive year.", name: "Gold at IRIS", roleLabel: "Featured milestone · 2026", isPlaceholder: false },
  { id: "national-stage", quote: "I presented my research alongside 120 projects by 152 students.", name: "IRIS National Fair 2025–26", roleLabel: "On the national stage", isPlaceholder: false },
  { id: "representing-india", quote: "I represented India at Regeneron ISEF 2025 in Columbus, Ohio.", name: "Representing India", roleLabel: "Regeneron ISEF · 2025", isPlaceholder: false },
  { id: "research", quote: "I'm exploring metabolic risk across clinical, lifestyle and diagnostic information.", name: "EarlyDetect-AI", roleLabel: "Research coverage", isPlaceholder: false },
  { id: "more-to-come", quote: "I hope this page never feels finished.", name: "More to come", roleLabel: "Ideas to explore · projects to build", isPlaceholder: false },
  { id: "on-stage", quote: "Presentations, competitions and award ceremonies—the moments when the work meets an audience.", name: "On Stage", roleLabel: "Media & moments", isPlaceholder: false },
  { id: "in-process", quote: "The work, research and preparation behind the final project.", name: "In the Lab / In the Process", roleLabel: "Media & moments", isPlaceholder: false },
  { id: "behind-scenes", quote: "The people, experiences and moments that don't always make it into the final presentation.", name: "Behind the Scenes", roleLabel: "Media & moments", isPlaceholder: false },
];
