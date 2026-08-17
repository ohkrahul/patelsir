export type JourneyCard = {
  id: string;
  small?: string;
  title: string;
  copy: string;
  stat?: { value: string; label: string };
  tag?: string;
};

export const journeyCards: JourneyCard[] = [
  {
    id: "curiosity",
    small: "WHERE IT STARTED",
    title: "Curiosity Came First",
    copy: "I started by wanting to understand why things happen. Over time, that became a desire to understand whether things could work differently—or better.",
  },
  {
    id: "science",
    title: "Questions Into Evidence",
    copy: "Science and research showed me how a question can become a hypothesis, how evidence can change an idea and how difficult questions can make a project stronger.",
  },
  {
    id: "healthcare",
    title: "Healthcare × Technology",
    copy: "My interests began to meet at the intersection of life sciences, healthcare, technology and artificial intelligence.",
  },
  {
    id: "earlydetect",
    title: "EarlyDetect-AI",
    copy: "My research explores bringing clinical biomarkers, lifestyle factors and diagnostic information together into a single, interpretable Metabolic Health Score.",
    tag: "FEATURED PROJECT",
  },
  {
    id: "iris-2025",
    title: "Gold at IRIS 2025",
    copy: "Gold recognition at the IRIS National Fair led to the opportunity to represent India internationally.",
    stat: { value: "GOLD", label: "IRIS NATIONAL FAIR 2025" },
  },
  {
    id: "isef",
    title: "Representing India",
    copy: "I represented India at the Regeneron International Science and Engineering Fair 2025 in Columbus, Ohio, USA.",
    stat: { value: "INDIA", label: "REGENERON ISEF 2025" },
  },
  {
    id: "iris-2026",
    title: "Gold, Again",
    copy: "EarlyDetect-AI received Gold at the IRIS National Fair 2025–26—my second consecutive Gold at IRIS.",
    stat: { value: "2× GOLD", label: "IRIS NATIONAL FAIR" },
  },
  {
    id: "now",
    title: "Still Learning",
    copy: "I don't want to define myself by one career or subject at 14. I want to learn something, try something, question something, build something—and repeat.",
  },
];
