
import { Tool } from "@/types/tools";
import { 
  MessageSquare, 
  Bot, 
  Zap, 
  Brain, 
  Cpu, 
  Sparkles, 
  Globe, 
  Mic, 
  Eye, 
  Code,
  Search,
  FileText,
  Settings,
  Layers,
  Shield
} from "lucide-react";

export const aiChatPlatforms: Tool[] = [
  {
    icon: MessageSquare,
    title: "ChatGPT",
    description: "Advanced AI chatbot by OpenAI with natural language understanding, creative writing, code assistance, and problem-solving capabilities.",
    emoji: "💬",
    color: "from-green-500 to-blue-600",
    directUrl: "https://chat.openai.com/",
    tags: ["chat", "AI assistant", "natural language", "code help", "creative writing"],
    category: "AI CHAT & ASSISTANTS",
    rating: 4.8,
    totalVotes: 8765
  },
  {
    icon: Bot,
    title: "Claude",
    description: "Anthropic's AI assistant focused on helpful, harmless, and honest conversations with advanced reasoning and analysis capabilities.",
    emoji: "🤖",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://claude.ai/",
    tags: ["AI assistant", "reasoning", "analysis", "helpful", "conversational AI"],
    category: "AI CHAT & ASSISTANTS",
    rating: 4.7,
    totalVotes: 6543
  },
  {
    icon: Search,
    title: "Perplexity AI",
    description: "AI-powered search engine that provides accurate, real-time answers with citations from reliable sources.",
    emoji: "🔍",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://perplexity.ai/",
    tags: ["AI search", "real-time answers", "citations", "research", "information"],
    category: "AI CHAT & ASSISTANTS",
    rating: 4.6,
    totalVotes: 4321
  },
  {
    icon: Brain,
    title: "Google Bard",
    description: "Google's conversational AI service powered by LaMDA, offering creative and informative responses.",
    emoji: "🧠",
    color: "from-red-500 to-orange-600",
    directUrl: "https://bard.google.com/",
    tags: ["Google AI", "conversational", "creative", "informative", "LaMDA"],
    category: "AI CHAT & ASSISTANTS",
    rating: 4.4,
    totalVotes: 5432
  },
  {
    icon: Zap,
    title: "Character.AI",
    description: "Create and chat with AI characters. Build unique personalities and have conversations with historical figures, fictional characters, or custom creations.",
    emoji: "⚡",
    color: "from-yellow-500 to-red-600",
    directUrl: "https://character.ai/",
    tags: ["character AI", "roleplay", "personalities", "creative chat", "entertainment"],
    category: "AI CHAT & ASSISTANTS",
    rating: 4.3,
    totalVotes: 3456
  },
  {
    icon: Code,
    title: "GitHub Copilot Chat",
    description: "AI pair programmer that helps you write code faster with intelligent suggestions and explanations directly in your IDE.",
    emoji: "💻",
    color: "from-gray-500 to-blue-600",
    directUrl: "https://github.com/features/copilot",
    tags: ["code assistant", "programming", "IDE integration", "GitHub", "development"],
    category: "AI CHAT & ASSISTANTS",
    rating: 4.5,
    totalVotes: 4567
  },
  {
    icon: Sparkles,
    title: "Poe by Quora",
    description: "Access multiple AI models including GPT-4, Claude, and others in one platform. Compare responses and choose the best AI for your needs.",
    emoji: "✨",
    color: "from-indigo-500 to-purple-600",
    directUrl: "https://poe.com/",
    tags: ["multiple AI models", "comparison", "GPT-4", "Claude", "unified platform"],
    category: "AI CHAT & ASSISTANTS",
    rating: 4.4,
    totalVotes: 3789
  },
  {
    icon: Globe,
    title: "Bing Chat",
    description: "Microsoft's AI-powered chat interface integrated with Bing search, providing current information and creative assistance.",
    emoji: "🌐",
    color: "from-blue-500 to-green-600",
    directUrl: "https://bing.com/chat",
    tags: ["Microsoft", "Bing integration", "current info", "web search", "creative"],
    category: "AI CHAT & ASSISTANTS",
    rating: 4.2,
    totalVotes: 2987
  },
  {
    icon: Mic,
    title: "Replika",
    description: "AI companion designed for meaningful conversations, emotional support, and personal growth through empathetic interactions.",
    emoji: "🎙️",
    color: "from-pink-500 to-purple-600",
    directUrl: "https://replika.ai/",
    tags: ["AI companion", "emotional support", "personal growth", "empathetic", "friendship"],
    category: "AI CHAT & ASSISTANTS",
    rating: 4.1,
    totalVotes: 2345
  },
  {
    icon: Eye,
    title: "ChatSonic",
    description: "AI chatbot with real-time data access, image generation, and voice commands. Like ChatGPT but with superpowers.",
    emoji: "👁️",
    color: "from-orange-500 to-red-600",
    directUrl: "https://writesonic.com/chat",
    tags: ["real-time data", "image generation", "voice commands", "enhanced ChatGPT"],
    category: "AI CHAT & ASSISTANTS",
    rating: 4.3,
    totalVotes: 3456
  },
  {
    icon: Layers,
    title: "BlackBox AI",
    description: "Multi-LLM chat bot with voice integration and connections to all the latest LLMs such as Grok, GPT, Claude, Mistral, and more. Advanced AI platform combining multiple language models for enhanced capabilities.",
    emoji: "⚫",
    color: "from-gray-800 to-black",
    directUrl: "https://www.blackbox.ai/?via=aiwebtools",
    tags: ["multi-LLM", "voice integration", "Grok", "GPT", "Claude", "Mistral", "multiple AI models", "advanced AI", "chat bot", "voice chat"],
    category: "AI CHAT & ASSISTANTS",
    rating: 4.6,
    totalVotes: 3200
  }
];
