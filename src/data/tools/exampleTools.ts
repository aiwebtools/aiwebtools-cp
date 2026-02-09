
import { Tool } from "@/types/tools";
import { 
  Target
} from "lucide-react";

import languageTutorHero from "@/assets/tools/language-tutor-ai-hero.jpg";

export const exampleTools: Tool[] = [
  {
    icon: Target,
    title: "Language Tutor AI",
    description: "Personalized language tutoring with AI-driven lessons, grammar assistance, and vocabulary building.",
    emoji: "🎯",
    color: "from-orange-500 to-red-600",
    directUrl: "https://chatgpt.com/g/g-683dc2a086948191b1714340631f2012-language-tutor-ai",
    imageUrl: languageTutorHero,
    tags: ["language learning", "AI tutoring", "grammar", "vocabulary"],
    category: "Educational & Research",
    rating: 4.4,
    totalVotes: 2876
  }
];
