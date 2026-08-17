export type ExplorationCard = {
  id: string;
  number: string;
  title: string;
  tags: string[];
  copy: string;
  status?: "in-progress";
};

export const explorationCards: ExplorationCard[] = [
  { id: "earlydetect", number: "01", title: "The Question", tags: ["EARLYDETECT-AI", "HEALTHCARE"], copy: "Can we make complex health information easier to understand?" },
  { id: "health-score", number: "02", title: "My Idea", tags: ["METABOLIC HEALTH", "ONE METRIC"], copy: "I'm exploring a unified score that combines clinical, lifestyle and diagnostic information." },
  { id: "risk-stratification", number: "03", title: "What I'm Exploring", tags: ["RISK", "DOMAINS", "CHANGE"], copy: "Bringing indicators together, explaining risk and tracking how it changes over time." },
  { id: "research-process", number: "04", title: "What I've Worked On", tags: ["LITERATURE", "DATA", "ETHICS"], copy: "From defining the clinical question to literature review, variable selection and data quality." },
  { id: "iris-isef", number: "05", title: "Beyond the Classroom", tags: ["2× GOLD", "TEAM INDIA", "ISEF 2025"], copy: "IRIS taught me to present and defend an idea; ISEF showed me how students around the world approach science." },
  { id: "six-strings", number: "06", title: "Six Strings", tags: ["GUITAR", "CREATIVITY", "EXPRESSION"], copy: "A space where I'm simply listening, practising, experimenting and trying to get better." },
  { id: "research-goals", number: "07", title: "Five Research Goals", tags: ["RISK", "TRACKING", "PERSONALISATION"], copy: "Bring health indicators together, stratify risk, identify contributing domains, track change over time and explore more personalised interventions." },
  { id: "why-it-matters", number: "08", title: "Why It Matters", tags: ["DIABETES", "MASLD", "PCOS"], copy: "I'm exploring whether fragmented health information can become a clearer picture of a person's metabolic health trajectory." },
  { id: "responsible-research", number: "09", title: "Research, Responsibly", tags: ["ETHICS", "ANONYMISED DATA", "EVOLVING"], copy: "I've developed an understanding of the ethical considerations around anonymised patient data. The preliminary oncology dimension continues to evolve." },
];
