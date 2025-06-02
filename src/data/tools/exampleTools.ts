
import { Tool } from "@/types/tools";
import { 
  Target,
  Lightbulb,
  MessageSquare
} from "lucide-react";

export const exampleTools: Tool[] = [
  {
    icon: Target,
    title: "Language Tutor AI",
    description: "Personalized language tutoring with AI-driven lessons, grammar assistance, and vocabulary building.",
    emoji: "🎯",
    color: "from-orange-500 to-red-600",
    directUrl: "https://chatgpt.com/g/g-683dc2a086948191b1714340631f2012-language-tutor-ai",
    tags: ["language learning", "AI tutoring", "grammar", "vocabulary"],
    category: "Educational & Research",
    rating: 4.4,
    totalVotes: 2876
  },
  {
    icon: Lightbulb,
    title: "Homework Helper Bot",
    description: "AI-powered homework assistance and study guide for students across various subjects.",
    emoji: "💡",
    color: "from-yellow-500 to-green-600",
    directUrl: "https://chatgpt.com/g/g-683dc3e1898481918c41e1d6007d7a76-homework-helper-bot",
    tags: ["homework help", "study guide", "AI assistance", "education"],
    category: "Educational & Research",
    rating: 4.3,
    totalVotes: 2543
  },
  {
    icon: MessageSquare,
    title: "AI Essay Writer",
    description: "Automated essay writing tool with AI-powered research, content generation, and citation assistance.",
    emoji: "💬",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://chatgpt.com/g/g-683dc6b3725c81918a85c801f894dd19-ai-essay-writer-gpt",
    tags: ["essay writing", "content generation", "research", "citations"],
    category: "Educational & Research",
    rating: 4.2,
    totalVotes: 2234
  }
];
