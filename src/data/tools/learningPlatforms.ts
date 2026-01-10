
import { Tool } from "@/types/tools";
import { 
  BookOpen, 
  GraduationCap, 
  Users, 
  Globe, 
  Brain,
  Code,
  Languages,
  Calculator,
  Microscope,
  Music
} from "lucide-react";

export const learningPlatforms: Tool[] = [
  {
    icon: Code,
    title: "freeCodeCamp",
    description: "Learn to code for free with interactive coding lessons, projects, and certifications in web development and data science.",
    emoji: "💻",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://freecodecamp.org/",
    imageUrl: "/src/assets/tools/freecodecamp-hero.png",
    tags: ["coding", "programming", "web development", "free", "certifications", "Learning Platform", "Skill Development", "STEM Education"],
    category: "Learning Platforms",
    rating: 4.9,
    totalVotes: 8765
  },
  {
    icon: Globe,
    title: "Coursera",
    description: "Online courses from top universities and companies. Earn certificates and degrees in various subjects from leading institutions.",
    emoji: "🌍",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://coursera.org/",
    imageUrl: "/src/assets/tools/coursera-ai-hero.png",
    tags: ["university courses", "certificates", "degrees", "professional development", "Learning Platform", "College Prep", "Professional Training", "Academic Writing"],
    category: "Learning Platforms",
    rating: 4.6,
    totalVotes: 5432
  },
  {
    icon: Languages,
    title: "Duolingo",
    description: "Free language learning platform with gamified lessons. Learn languages through interactive exercises and stories.",
    emoji: "🦜",
    color: "from-green-500 to-yellow-600",
    directUrl: "https://duolingo.com/",
    imageUrl: "/src/assets/tools/duolingo-hero.png",
    tags: ["language learning", "gamified", "free", "interactive", "multiple languages", "Language Learning", "Learning Platform"],
    category: "Learning Platforms",
    rating: 4.7,
    totalVotes: 7890
  },
  {
    icon: Brain,
    title: "Brilliant",
    description: "Interactive courses in math, science, and computer science. Learn through problem-solving and visual explanations.",
    emoji: "🧠",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://brilliant.org/",
    imageUrl: "/src/assets/tools/brilliant-hero.png",
    tags: ["math", "science", "computer science", "problem solving", "interactive", "STEM Education", "Learning Platform", "Skill Development"],
    category: "Learning Platforms",
    rating: 4.5,
    totalVotes: 4321
  }
];
