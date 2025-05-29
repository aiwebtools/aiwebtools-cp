
import { Tool } from "@/types/tools";
import { 
  Bot, 
  MessageSquare, 
  Brain, 
  Zap, 
  Sparkles, 
  Users, 
  Globe, 
  BookOpen,
  Shield,
  Lightbulb,
  Target,
  Crown,
  Star,
  Coffee
} from "lucide-react";

export const aiAssistants: Tool[] = [
  {
    icon: MessageSquare,
    title: "Claude",
    description: "Anthropic's advanced AI assistant for thoughtful conversations, creative writing, complex reasoning, and helpful analysis. Built with safety and helpfulness in mind.",
    emoji: "🤖",
    color: "from-orange-500 to-red-600",
    directUrl: "https://claude.ai/",
    tags: ["AI assistant", "conversation", "writing", "analysis", "Anthropic"],
    category: "AI Assistants",
    rating: 4.8,
    totalVotes: 5432
  },
  {
    icon: Bot,
    title: "Perplexity AI",
    description: "AI-powered search engine that provides accurate, real-time answers with cited sources. Combines search and AI to deliver comprehensive information.",
    emoji: "🔍",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://www.perplexity.ai/",
    tags: ["AI search", "research", "citations", "real-time", "information"],
    category: "AI Assistants",
    rating: 4.7,
    totalVotes: 4876
  },
  {
    icon: Brain,
    title: "Poe by Quora",
    description: "Access multiple AI models including GPT-4, Claude, and others in one platform. Create custom bots and explore various AI capabilities.",
    emoji: "🧠",
    color: "from-green-500 to-blue-600",
    directUrl: "https://poe.com/",
    tags: ["multiple AI models", "custom bots", "Quora", "versatile", "platform"],
    category: "AI Assistants",
    rating: 4.6,
    totalVotes: 4234
  },
  {
    icon: Sparkles,
    title: "Character.AI",
    description: "Create and chat with AI characters. Bring personalities to life with advanced language models for entertainment, learning, and creative exploration.",
    emoji: "🎭",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://beta.character.ai/",
    tags: ["AI characters", "roleplay", "entertainment", "personalities", "creative"],
    category: "AI Assistants",
    rating: 4.5,
    totalVotes: 3987
  },
  {
    icon: Globe,
    title: "You.com",
    description: "AI-powered search engine with YouChat assistant. Get personalized search results and AI-powered answers with privacy-focused approach.",
    emoji: "🌐",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://you.com/",
    tags: ["AI search", "privacy", "personalized", "YouChat", "search engine"],
    category: "AI Assistants",
    rating: 4.4,
    totalVotes: 3654
  },
  {
    icon: Shield,
    title: "Pi AI",
    description: "Personal AI assistant by Inflection AI designed to be helpful, harmless, and honest. Focused on natural conversation and emotional intelligence.",
    emoji: "🛡️",
    color: "from-indigo-500 to-purple-600",
    directUrl: "https://pi.ai/",
    tags: ["personal AI", "emotional intelligence", "conversation", "Inflection AI", "helpful"],
    category: "AI Assistants",
    rating: 4.3,
    totalVotes: 3234
  },
  {
    icon: BookOpen,
    title: "Bing Chat",
    description: "Microsoft's AI-powered chat integrated with Bing search. Get conversational AI responses with real-time web information and citations.",
    emoji: "📚",
    color: "from-blue-500 to-green-600",
    directUrl: "https://www.bing.com/chat",
    tags: ["Microsoft", "Bing", "web search", "real-time", "citations"],
    category: "AI Assistants",
    rating: 4.2,
    totalVotes: 2987
  },
  {
    icon: Zap,
    title: "Replika",
    description: "AI companion designed to be a friend and confidant. Personalized AI that learns from conversations and provides emotional support.",
    emoji: "⚡",
    color: "from-pink-500 to-red-600",
    directUrl: "https://replika.ai/",
    tags: ["AI companion", "emotional support", "personalized", "friendship", "confidant"],
    category: "AI Assistants",
    rating: 4.1,
    totalVotes: 2765
  }
];
