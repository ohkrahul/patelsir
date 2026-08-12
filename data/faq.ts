export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

// Questions are locked text from the spec. Answers are drafted strictly from
// facts stated elsewhere in the spec (no new claims invented) — flagged for
// a human read-through before final ship, since these read as factual
// statements about a real minor.
export const faqItems: FAQItem[] = [
  {
    id: "what-is-earlydetect",
    question: "What is EarlyDetect-AI?",
    answer:
      "EarlyDetect-AI is Shaurya's exploratory project looking at whether artificial intelligence could help identify health-risk patterns earlier. It isn't a clinically validated medical product — it's a student research project that received Gold recognition at IRIS National Fair 2025–26.",
  },
  {
    id: "shaurya-role",
    question: "What was Shaurya's role in the project?",
    answer:
      "He researched the idea, built the project and presented it at IRIS National Fair 2025–26 — explaining the concept, answering questions from judges, and refining the idea based on their feedback.",
  },
  {
    id: "iris-learnings",
    question: "What did he learn at IRIS?",
    answer:
      "Presenting nationally meant learning how to explain a technical idea clearly, defend it under questioning, and treat feedback as a way to improve the project rather than as criticism.",
  },
  {
    id: "science-interests",
    question: "What areas of science interest him?",
    answer:
      "Biology, healthcare and the science behind how the human body works are the areas he keeps returning to, alongside a broader curiosity about how research turns questions into evidence.",
  },
  {
    id: "ai-interest",
    question: "How is AI part of his interests?",
    answer:
      "AI is one of the tools he's exploring — specifically how machines can recognise patterns and learn from information in ways that might contribute to solving meaningful problems, like early health-risk detection.",
  },
  {
    id: "why-healthcare",
    question: "Why healthcare?",
    answer:
      "Growing up around conversations involving healthcare and pharmaceuticals gave him early exposure to the field, which turned into genuine curiosity about how technology might contribute to better health outcomes.",
  },
  {
    id: "why-music",
    question: "Why is music part of the website?",
    answer:
      "Because it's a real part of how Shaurya thinks — playing guitar offers a different kind of problem-solving, less about finding a single correct answer and more about rhythm, expression and creativity.",
  },
  {
    id: "whats-next",
    question: "What's next?",
    answer:
      "More ideas, competitions and experiments — the goal isn't to lock into one path early, it's to keep building and notice which questions become impossible to ignore. He hopes to eventually study at a leading university, but the immediate focus is learning deeply and discovering what he genuinely wants to pursue.",
  },
];
