export type ExplorationCard = {
  id: string;
  number: string;
  title: string;
  tags: string[];
  copy: string;
  status?: "in-progress";
};

export const explorationCards: ExplorationCard[] = [
  {
    id: "earlydetect",
    number: "01",
    title: "EarlyDetect-AI",
    tags: ["RESEARCH", "HEALTHCARE", "AI"],
    copy: "Can complex health information be brought together and made easier to understand?",
  },
  {
    id: "health-score",
    number: "02",
    title: "Metabolic Health Score",
    tags: ["BIOMARKERS", "LIFESTYLE", "DIAGNOSTICS"],
    copy: "A proposed unified score combining multiple inputs into a more holistic view of metabolic health.",
  },
  {
    id: "risk-stratification",
    number: "03",
    title: "Understanding Risk",
    tags: ["LOW", "MODERATE", "HIGH RISK"],
    copy: "Exploring how risk could be stratified, explained by health domain and tracked over time.",
  },
  {
    id: "research-process",
    number: "04",
    title: "The Research Process",
    tags: ["LITERATURE", "DATA", "ETHICS"],
    copy: "From defining the clinical question and reviewing evidence to data quality and the ethics of anonymised patient data.",
  },
  {
    id: "iris-isef",
    number: "05",
    title: "IRIS to ISEF",
    tags: ["2× GOLD", "TEAM INDIA", "ISEF 2025"],
    copy: "Two consecutive IRIS Gold medals and the opportunity to represent India at Regeneron ISEF 2025.",
  },
  {
    id: "six-strings",
    number: "06",
    title: "Six Strings",
    tags: ["GUITAR", "CREATIVITY", "EXPRESSION"],
    copy: "A different way of thinking—built on patience, practice, experimentation and learning from mistakes.",
  },
];
