import { Tool } from "@/types/tools";
import { Crown, Heart, GraduationCap } from "lucide-react";

export const priorityFeaturedGPTs: Tool[] = [
  {
    icon: Crown,
    title: "GODMODE.SPACE",
    description: "Imagine having an AI companion so powerful and versatile that it seamlessly transforms to meet every need you have—introducing GodMode from godmode.space. This revolutionary AI assistant adapts to any task, providing unmatched capabilities across all domains of knowledge and productivity.",
    emoji: "👑",
    color: "from-yellow-400 to-red-500",
    directUrl: "https://godmode.space",
    videoUrl: "https://youtu.be/m2crGAhbs5g?si=0U5gA4QC_oQG0KXS",
    tags: ["versatile ai", "all-purpose", "productivity", "godmode", "ultimate assistant"],
    category: "AI Assistants & Search",
    rating: 4.9,
    totalVotes: 6500
  },
  {
    icon: Heart,
    title: "💪 AI Wellness Coach",
    description: "AI-driven wellness coach that provides personalized fitness plans, nutrition advice, and mental health support.",
    emoji: "❤️",
    color: "from-red-500 to-pink-600",
    directUrl: "https://chatgpt.com/g/g-68ae1e75dd988191b4629abab71e625f-wellness-warrior-ai-coach-mentor-gpt",
    tags: ["wellness coach", "fitness plans", "nutrition advice", "mental health", "Custom GPT"],
    category: "AI Assistants & Search",
    rating: 4.4,
    totalVotes: 3123
  },
  {
    icon: GraduationCap,
    title: "🎓 AI Education Platform",
    description: "AI-powered education platform that offers personalized learning experiences and educational resources.",
    emoji: "🎓",
    color: "from-blue-500 to-green-600",
    directUrl: "https://college-degree-gpt.lovable.app/?via=aiwebtools",
    tags: ["education platform", "personalized learning", "educational resources", "Custom GPT"],
    category: "AI Assistants & Search",
    rating: 4.6,
    totalVotes: 3345
  },
];
