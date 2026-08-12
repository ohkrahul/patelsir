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
    small: "THE BEGINNING",
    title: "Always Asking Why",
    copy: "Curiosity began with wanting to understand how things work—and slowly became wanting to understand how they could work better.",
  },
  {
    id: "science",
    title: "Looking Closer",
    copy: "Science became a way to turn questions into experiments, evidence and better questions.",
  },
  {
    id: "ai",
    title: "Discovering AI",
    copy: "Artificial intelligence opened another possibility: machines that can recognise patterns, learn from information and contribute to solving meaningful problems.",
  },
  {
    id: "healthcare",
    title: "Technology × Healthcare",
    copy: "Early exposure to conversations around healthcare and pharmaceuticals made Shaurya curious about how technology might contribute to better health outcomes.",
  },
  {
    id: "earlydetect",
    title: "Turning Curiosity Into a Project",
    copy: "EarlyDetect-AI began as an exploration of whether artificial intelligence could potentially help identify health-risk patterns earlier.",
    tag: "FEATURED PROJECT",
  },
  {
    id: "iris",
    title: "IRIS National Fair 2025–26",
    copy: "Presenting the project nationally became an opportunity to research, explain, answer questions and improve the idea through feedback.",
    stat: { value: "GOLD", label: "IRIS NATIONAL FAIR 2025–26" },
  },
  {
    id: "music",
    title: "Beyond the Screen",
    copy: "Playing guitar offers a different way to think—less about finding the correct answer and more about rhythm, expression and creativity.",
  },
  {
    id: "now",
    title: "Still Exploring",
    copy: "More ideas, competitions, experiments and experiences are ahead. The objective isn't to have the final answer yet. It's to keep finding questions worth pursuing.",
  },
];
