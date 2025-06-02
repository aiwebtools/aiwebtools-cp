
import { Tool } from "@/types/tools";
import { 
  BookOpen, GraduationCap, Brain, Users, Target, Lightbulb,
  Calculator, Globe, MessageSquare, Award, Zap, Star
} from "lucide-react";

export const aiEducationTools: Tool[] = [
  {
    icon: Brain,
    title: "Khan Academy Khanmigo",
    description: "AI-powered tutoring assistant that provides personalized learning support across subjects with Socratic questioning.",
    emoji: "🧠",
    color: "from-green-500 to-blue-600",
    directUrl: "https://www.khanacademy.org/khan-labs",
    tags: ["AI tutoring", "personalized learning", "education", "Socratic method"],
    category: "Education & Learning",
    rating: 4.7,
    totalVotes: 3456
  },
  {
    icon: Calculator,
    title: "Wolfram Alpha",
    description: "Computational knowledge engine that provides expert-level answers and calculations across mathematics and sciences.",
    emoji: "🔢",
    color: "from-orange-500 to-red-600",
    directUrl: "https://www.wolframalpha.com/",
    tags: ["computational engine", "mathematics", "science", "knowledge base"],
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
    directUrl: "https://www.century.tech/",
    tags: ["personalized learning", "adaptive learning", "student analytics", "education AI"],
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
    directUrl: "https://socratic.org/",
    tags: ["homework help", "Google", "visual learning", "subject assistance"],
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
    directUrl: "https://www.coursera.org/",
    tags: ["online courses", "personalized learning", "skill development", "certificates"],
    category: "Education & Learning",
    rating: 4.5,
    totalVotes: 2876
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
