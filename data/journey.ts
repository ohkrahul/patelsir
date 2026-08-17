export type JourneyCard = {
  id: string;
  small?: string;
  title: string;
  copy: string;
  stat?: { value: string; label: string };
  tag?: string;
};

export const journeyCards: JourneyCard[] = [
  { id: "curiosity", small: "WHERE IT STARTED", title: "Following a Question", copy: "I'm a student, researcher and someone who enjoys following a question until I understand it a little better." },
  { id: "perspectives", title: "Learning to Look Again", copy: "I've learned to look at problems from different perspectives, understand the science, work with data and change my thinking when the evidence tells me to." },
  { id: "healthcare", title: "Healthcare × Technology", copy: "My interest in research led me towards healthcare and preventive health—and to asking how complex health information might be made easier to understand." },
  { id: "earlydetect", title: "EarlyDetect-AI", copy: "My research explores a unified Metabolic Health Score that brings clinical biomarkers, lifestyle factors and diagnostic information into one interpretable metric.", tag: "FEATURED PROJECT" },
  { id: "iris-2025", title: "Gold at IRIS 2025", copy: "My Gold-winning research at IRIS led to the opportunity to represent India at an international science fair.", stat: { value: "GOLD", label: "IRIS NATIONAL FAIR 2025" } },
  { id: "isef", title: "Representing India", copy: "In 2025, I represented India at the Regeneron International Science and Engineering Fair in Columbus, Ohio.", stat: { value: "INDIA", label: "REGENERON ISEF 2025" } },
  { id: "iris-2026", title: "Gold, Again", copy: "I won Gold at the IRIS National Fair 2025–26 for my Metabolic Health Score research—my second consecutive Gold at IRIS.", stat: { value: "2× GOLD", label: "IRIS NATIONAL FAIR" } },
  { id: "music", title: "Six Strings", copy: "When I'm not researching or studying, I love playing guitar. It gives me a completely different way to think, experiment and express myself." },
];
