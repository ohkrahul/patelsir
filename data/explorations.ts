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
    tags: ["AI", "HEALTHCARE", "RESEARCH"],
    copy: "Can AI potentially help identify health risks earlier?",
  },
  {
    id: "iris",
    number: "02",
    title: "IRIS National Fair",
    tags: ["RESEARCH", "PRESENTATION", "GOLD"],
    copy: "EarlyDetect-AI presented at IRIS National Fair 2025–26, receiving Gold Medal recognition at the national level.",
  },
  {
    id: "research-process",
    number: "03",
    title: "The Research Process",
    tags: ["QUESTIONS", "EVIDENCE", "ITERATION"],
    copy: "Learning how an idea changes when it meets research, feedback and difficult questions.",
  },
  {
    id: "ai-experiments",
    number: "04",
    title: "AI Experiments",
    tags: ["AI", "DATA", "TECHNOLOGY"],
    copy: "Small experiments exploring what machines can recognise, predict and help us understand.",
  },
  {
    id: "six-strings",
    number: "05",
    title: "Six Strings",
    tags: ["GUITAR", "MUSIC", "CREATIVITY"],
    copy: "A completely different kind of pattern recognition.",
  },
  {
    id: "next-experiment",
    number: "06",
    title: "Next Experiment",
    tags: ["COMING SOON"],
    copy: "This space is supposed to change.",
    status: "in-progress",
  },
];
