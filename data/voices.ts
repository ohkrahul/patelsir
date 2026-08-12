export type Voice = {
  id: string;
  quote: string;
  name: string;
  roleLabel: string;
  isPlaceholder: boolean;
};

// Per spec: use only genuine quotes, or clearly-labeled placeholders — never
// fabricate testimonials attributed to real people. All entries below are
// placeholders until real, consented quotes are supplied.
export const voices: Voice[] = [
  {
    id: "teacher",
    quote: "[Placeholder — awaiting a real, consented quote from a teacher]",
    name: "Name withheld",
    roleLabel: "Teacher",
    isPlaceholder: true,
  },
  {
    id: "project-mentor",
    quote: "[Placeholder — awaiting a real, consented quote from a project mentor]",
    name: "Name withheld",
    roleLabel: "Project Mentor",
    isPlaceholder: true,
  },
  {
    id: "research-mentor",
    quote: "[Placeholder — awaiting a real, consented quote from a research mentor]",
    name: "Name withheld",
    roleLabel: "Research Mentor",
    isPlaceholder: true,
  },
  {
    id: "school-faculty",
    quote: "[Placeholder — awaiting a real, consented quote from school faculty]",
    name: "Name withheld",
    roleLabel: "School Faculty",
    isPlaceholder: true,
  },
  {
    id: "competition-judge",
    quote: "[Placeholder — awaiting a real, consented quote from a competition mentor/judge]",
    name: "Name withheld",
    roleLabel: "Competition Judge",
    isPlaceholder: true,
  },
];
