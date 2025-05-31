
import { Tool } from "@/types/tools";
import { 
  Crown,
  Heart
} from "lucide-react";

export const aiAssistants: Tool[] = [
  {
    icon: Crown,
    title: "GODMODE GPT",
    description: "Imagine having an AI companion so powerful and versatile that it seamlessly transforms to meet every need you have—introducing GodMode GPT. This revolutionary AI assistant adapts to any task, providing unmatched capabilities across all domains of knowledge and productivity.",
    emoji: "👑",
    color: "from-yellow-400 to-red-500",
    directUrl: "https://godmodegpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=or3JtZsq6Bc",
    tags: ["versatile ai", "all-purpose", "productivity", "godmode", "ultimate assistant"],
    category: "AI Assistants & Search",
    rating: 4.9,
    totalVotes: 6500
  },
  {
    icon: Heart,
    title: "EMDR Assistant",
    description: "EMDR Therapy Assistant with full capabilities for Eye Movement Desensitization and Reprocessing therapy support. This AI tool provides guidance and assistance for EMDR therapeutic techniques, helping both therapists and individuals understand and implement EMDR protocols safely and effectively.",
    emoji: "🧠",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://chatgpt.com/g/g-oM5YeBpRq-emdr-therapy-assistant-with-full-capabilities",
    tags: ["emdr therapy", "mental health", "trauma therapy", "therapeutic assistance", "psychology"],
    category: "Health & Wellness AI Tools",
    rating: 4.6,
    totalVotes: 1890
  }
];
