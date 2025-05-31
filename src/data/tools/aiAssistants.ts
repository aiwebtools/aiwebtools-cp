
import { Tool } from "@/types/tools";
import { 
  Sparkles, 
  Lightbulb, 
  MessageSquare, 
  Brain, 
  Code, 
  FileText,
  Users
} from "lucide-react";

export const aiAssistants: Tool[] = [
  {
    icon: Sparkles,
    title: "Merlin Ai",
    description: "AI-powered browser extension and assistant that works across multiple platforms. Provides AI assistance for research, writing, summarization, and productivity tasks directly in your browser.",
    emoji: "🧙‍♂️",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://app.getmerlin.in/plans?ref=mte1mgu4",
    videoUrl: "https://www.youtube.com/watch?v=rDrG5DqCCgY",
    tags: ["browser extension", "AI assistant", "productivity", "research assistant", "writing helper", "multi-platform"],
    category: "AI Assistants",
    rating: 4.5,
    totalVotes: 3234
  }
];
