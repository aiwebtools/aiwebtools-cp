
import { Tool } from "@/types/tools";
import { 
  BookOpen, GraduationCap, Brain, Users, Target, Lightbulb,
  Calculator, Globe, MessageSquare, Award, Zap, Star
} from "lucide-react";

import homeworkHelperBotHero from "@/assets/tools/homework-helper-bot-hero.jpg";
import aiEssayWriterHero from "@/assets/tools/ai-essay-writer-hero.jpg";
import wolframAlphaHero from "@/assets/tools/wolfram-alpha-hero.jpg";
import centuryTechHero from "@/assets/tools/century-tech-hero.jpg";
import socraticHero from "@/assets/tools/socratic-hero.jpg";
import courseraHero from "@/assets/tools/coursera-hero.jpg";

export const aiEducationTools: Tool[] = [
  {
    icon: Calculator,
    title: "Wolfram Alpha",
    description: "Computational knowledge engine that provides expert-level answers and calculations across mathematics and sciences.",
    emoji: "🔢",
    color: "from-orange-500 to-red-600",
    directUrl: "https://www.wolframalpha.com/?via=aiwebtools",
    imageUrl: wolframAlphaHero,
    tags: ["computational engine", "mathematics", "science", "knowledge base", "STEM Education", "Homework Help"],
    category: "Education & Learning",
    rating: 4.8,
    totalVotes: 4567
  },
  {
    icon: Users,
    title: "Century Tech",
    description: "AI-powered learning platform that personalizes education paths and identifies knowledge gaps for students.",
    emoji: "👥",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://www.century.tech/?via=aiwebtools",
    imageUrl: centuryTechHero,
    tags: ["personalized learning", "adaptive learning", "student analytics", "education AI", "Learning Platform", "Tutoring AI"],
    category: "Education & Learning",
    rating: 4.4,
    totalVotes: 2345
  },
  {
    icon: MessageSquare,
    title: "Socratic by Google",
    description: "AI homework helper that uses camera and voice to help students understand concepts across subjects.",
    emoji: "💬",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://socratic.org/?via=aiwebtools",
    imageUrl: socraticHero,
    tags: ["homework help", "Google", "visual learning", "subject assistance", "Homework Help", "Tutoring AI"],
    category: "Education & Learning",
    rating: 4.3,
    totalVotes: 1987
  },
  {
    icon: Award,
    title: "Coursera AI",
    description: "AI-enhanced online learning platform with personalized course recommendations and adaptive assessments.",
    emoji: "🏆",
    color: "from-cyan-500 to-purple-600",
    directUrl: "https://www.coursera.org/?via=aiwebtools",
    imageUrl: courseraHero,
    tags: ["online courses", "personalized learning", "skill development", "certificates", "Learning Platform", "Professional Training"],
    category: "Education & Learning",
    rating: 4.5,
    totalVotes: 2876
  },
  {
    icon: Lightbulb,
    title: "Homework Helper Bot",
    description: "AI-powered homework assistance and study guide for students across various subjects.",
    emoji: "💡",
    color: "from-yellow-500 to-green-600",
    directUrl: "https://chatgpt.com/g/g-683dc3e1898481918c41e1d6007d7a76-homework-helper-bot",
    imageUrl: homeworkHelperBotHero,
    tags: ["homework help", "study guide", "AI assistance", "education", "Homework Help", "Study Tools", "Tutoring AI"],
    category: "Education & Learning",
    rating: 4.3,
    totalVotes: 2543
  },
  {
    icon: MessageSquare,
    title: "✍️ AI Essay Writer",
    description: "Automated essay writing tool with AI-powered research, content generation, and citation assistance.",
    emoji: "💬",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://chatgpt.com/g/g-683dc6b3725c81918a85c801f894dd19-ai-essay-writer-gpt",
    imageUrl: aiEssayWriterHero,
    tags: ["essay writing", "content generation", "research", "citations", "Academic Writing", "Study Tools"],
    category: "Education & Learning",
    rating: 4.2,
    totalVotes: 2234
  }
];
