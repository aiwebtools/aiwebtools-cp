import { Tool } from "@/types/tools";
import { Crown, Heart, GraduationCap, Music } from "lucide-react";
import bobMarleyGptImage from "@/assets/tools/bob-marley-gpt.png";

export const priorityFeaturedGPTs: Tool[] = [
  {
    icon: Music,
    title: "Bob Marley GPT",
    description: "The living continuation of Bob Marley's message—truth, unity, and liberation in living voice. Ask Bob for advice on life, love, spirituality, and finding inner peace. Experience the wisdom of reggae's greatest legend through AI. Jah yes!",
    emoji: "🎶",
    color: "from-green-500 to-yellow-500",
    imageUrl: bobMarleyGptImage,
    directUrl: "https://chatgpt.com/g/g-69470ce966d08191aca9b8d80db20859-bob-marley-gpt",
    tags: ["bob marley", "reggae", "wisdom", "spirituality", "advice", "music legend", "rastafari", "peace", "unity", "custom gpt"],
    category: "Creative & Entertainment",
    rating: 4.9,
    totalVotes: 4200
  },
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
    imageUrl: "/src/assets/tools/ai-wellness-coach-hero.png",
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
    imageUrl: "/src/assets/tools/ai-education-platform-hero.png",
    tags: ["education platform", "personalized learning", "educational resources", "Custom GPT"],
    category: "AI Assistants & Search",
    rating: 4.6,
    totalVotes: 3345
  },
];
