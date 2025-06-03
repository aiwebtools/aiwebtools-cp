import { Tool } from "@/types/tools";
import { 
  MessageSquare, 
  Users, 
  Bot, 
  Heart, 
  Zap,
  Sparkles,
  Globe,
  Star,
  Crown,
  Smile
} from "lucide-react";

export const aiChatPlatforms: Tool[] = [
  {
    icon: Heart,
    title: "REPLIKA - Friendly Companion Maker",
    description: "Your AI companion that cares. Replika is always ready to chat when you need an empathetic friend. Create a unique chatbot companion, help it develop its personality through conversations, and enjoy personalized interactions designed to make you feel heard and understood.",
    emoji: "💖",
    color: "from-pink-500 to-purple-600",
    directUrl: "https://replika.ai/?via=aiwebtools",
    category: "AI Companions & Chat",
    tags: ["ai companion", "friendship", "emotional support", "chat", "personality development", "empathetic ai"],
    rating: 4.1,
    totalVotes: 8965
  },
  {
    icon: MessageSquare,
    title: "ChatGPT",
    description: "OpenAI's advanced conversational AI model with superior natural language understanding and generation capabilities.",
    emoji: "🤖",
    color: "from-green-500 to-blue-600",
    directUrl: "https://chatgpt.com/?via=aiwebtools",
    tags: ["AI chat", "conversational AI", "OpenAI", "GPT-4", "text generation"],
    category: "AI Chat Platforms",
    rating: 4.8,
    totalVotes: 15420
  },
  {
    icon: Sparkles,
    title: "Claude",
    description: "Anthropic's advanced AI assistant with excellent human-like conversation and ethical reasoning capabilities.",
    emoji: "✨",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://claude.ai/referral/TRUwVnjRJg&via=aiwebtools",
    tags: ["AI assistant", "Anthropic", "ethical AI", "conversation", "Claude 3.5"],
    category: "AI Chat Platforms",
    rating: 4.7,
    totalVotes: 8934
  },
  {
    icon: Brain,
    title: "Google Gemini",
    description: "Google's advanced AI model with multilingual support, image analysis, and integration with Google services.",
    emoji: "🧠",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://gemini.google.com/?via=aiwebtools",
    tags: ["Google AI", "multilingual", "Gemini", "image analysis", "conversational AI"],
    category: "AI Chat Platforms",
    rating: 4.5,
    totalVotes: 7621
  },
  {
    icon: Globe,
    title: "Perplexity AI",
    description: "AI-powered search engine and chatbot with real-time web access and citation capabilities for research.",
    emoji: "🌐",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://www.perplexity.ai/?via=aiwebtools",
    tags: ["AI search", "research", "citations", "real-time", "web access"],
    category: "AI Chat Platforms",
    rating: 4.6,
    totalVotes: 5432
  },
  {
    icon: Users,
    title: "TeamAI",
    description: "Dedicated AI platform built for teams and businesses with access to GPT-4, Claude, PaLM, and LLaMA. Collaborate on prompts and conversations with up to 100 team members starting at $15/month.",
    emoji: "👥",
    color: "from-blue-500 to-green-600",
    directUrl: "https://teamai.com/?via=aiwebtools",
    tags: ["team collaboration", "business AI", "GPT-4", "Claude", "multi-model AI", "team workspace"],
    category: "AI Chat Platforms",
    rating: 4.4,
    totalVotes: 2156
  }
];
