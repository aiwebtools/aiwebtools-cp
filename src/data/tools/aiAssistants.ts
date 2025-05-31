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
  },
  {
    icon: Lightbulb,
    title: "Personal AI Assistant",
    description: "Customizable AI assistant that learns from your behavior and preferences to provide personalized support and recommendations.",
    emoji: "💡",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://example.com/personalai",
    tags: ["personalization", "recommendations", "productivity", "learning", "support"],
    category: "AI Assistants",
    rating: 4.2,
    totalVotes: 2876
  },
  {
    icon: MessageSquare,
    title: "AI Communication Assistant",
    description: "AI-powered communication tool that helps you write emails, messages, and documents with improved clarity and tone.",
    emoji: "💬",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://example.com/aicommunication",
    tags: ["communication", "writing", "emails", "messages", "clarity"],
    category: "AI Assistants",
    rating: 4.3,
    totalVotes: 3123
  },
  {
    icon: Brain,
    title: "AI Research Assistant",
    description: "AI assistant that helps you conduct research, find relevant information, and summarize key findings from academic papers and articles.",
    emoji: "🧠",
    color: "from-indigo-500 to-purple-600",
    directUrl: "https://example.com/airesearch",
    tags: ["research", "information retrieval", "summarization", "academic papers", "articles"],
    category: "AI Assistants",
    rating: 4.4,
    totalVotes: 3456
  },
  {
    icon: Code,
    title: "AI Coding Assistant",
    description: "AI-powered coding assistant that helps you write, debug, and optimize code in various programming languages.",
    emoji: "💻",
    color: "from-green-500 to-blue-600",
    directUrl: "https://example.com/aicoding",
    tags: ["coding", "debugging", "optimization", "programming languages", "development"],
    category: "AI Assistants",
    rating: 4.6,
    totalVotes: 3789
  },
  {
    icon: FileText,
    title: "AI Document Assistant",
    description: "AI assistant that helps you create, edit, and manage documents with automated formatting, grammar checking, and content suggestions.",
    emoji: "📄",
    color: "from-teal-500 to-green-600",
    directUrl: "https://example.com/aidocument",
    tags: ["documents", "editing", "formatting", "grammar checking", "content suggestions"],
    category: "AI Assistants",
    rating: 4.1,
    totalVotes: 2654
  }
];
