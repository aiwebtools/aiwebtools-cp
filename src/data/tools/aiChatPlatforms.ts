
import { Tool } from "@/types/tools";
import { 
  MessageCircle, 
  Bot, 
  Zap, 
  Brain, 
  Sparkles, 
  Globe, 
  Users,
  Mic,
  Settings,
  Star
} from "lucide-react";

export const aiChatPlatforms: Tool[] = [
  {
    icon: MessageCircle,
    title: "ChatGPT",
    description: "OpenAI's powerful conversational AI assistant. Get help with writing, analysis, coding, math, and creative tasks through natural language conversations.",
    emoji: "💬",
    color: "from-green-500 to-cyan-600",
    directUrl: "https://chat.openai.com/",
    tags: ["conversational AI", "OpenAI", "writing assistance", "coding help", "general purpose"],
    category: "AI Chat Platforms",
    rating: 4.8,
    totalVotes: 12589
  },
  {
    icon: Bot,
    title: "Claude",
    description: "Anthropic's AI assistant focused on being helpful, harmless, and honest. Excellent for analysis, writing, coding, and thoughtful conversations.",
    emoji: "🤖",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://claude.ai/",
    tags: ["Anthropic", "AI assistant", "analysis", "writing", "coding", "safety-focused"],
    category: "AI Chat Platforms",
    rating: 4.7,
    totalVotes: 8934
  },
  {
    icon: Zap,
    title: "BotSonic",
    description: "Advanced AI chatbot platform by WriteSonic for creating intelligent conversational experiences. Build custom chatbots for customer service, sales, and support.",
    emoji: "⚡",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://writesonic.com/botsonic?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=CzQdnpFawKI",
    tags: ["chatbot platform", "writesonic", "customer service", "conversational AI", "botsonic", "aiwebtools"],
    category: "AI Chat Platforms",
    rating: 4.5,
    totalVotes: 3456
  },
  {
    icon: Star,
    title: "Mistral",
    description: "European AI company's large language model platform offering powerful conversational AI capabilities with a focus on multilingual support and reasoning.",
    emoji: "⭐",
    color: "from-orange-500 to-red-600",
    directUrl: "https://chat.mistral.ai/chat",
    imageUrl: "https://media.discordapp.net/attachments/1150636600846450729/1377358724829810719/image.png?ex=6838acc6&is=68375b46&hm=ab683553ec132d326caf50834883a32cdf8e3230bfa35299cf360227757a75fc&=&format=webp&quality=lossless&width=2848&height=1002",
    tags: ["mistral ai", "european ai", "multilingual", "large language model", "conversational ai", "reasoning"],
    category: "AI Chat Platforms",
    rating: 4.6,
    totalVotes: 4567
  },
  {
    icon: Brain,
    title: "Perplexity",
    description: "AI-powered research and conversational search engine. Get accurate, sourced answers to complex questions with real-time information.",
    emoji: "🧠",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://www.perplexity.ai/",
    tags: ["research", "search engine", "sourced answers", "real-time information", "fact-checking"],
    category: "AI Chat Platforms",
    rating: 4.6,
    totalVotes: 7234
  },
  {
    icon: Sparkles,
    title: "Character.AI",
    description: "Create and chat with AI characters. Roleplay, practice languages, brainstorm ideas, and have fun conversations with personalized AI personalities.",
    emoji: "✨",
    color: "from-pink-500 to-purple-600",
    directUrl: "https://character.ai/",
    tags: ["roleplay", "AI characters", "personalized AI", "entertainment", "creative conversations"],
    category: "AI Chat Platforms",
    rating: 4.4,
    totalVotes: 6789
  },
  {
    icon: Globe,
    title: "Poe by Quora",
    description: "Access multiple AI models in one platform including GPT-4, Claude, and others. Compare responses and choose the best AI for your needs.",
    emoji: "🌐",
    color: "from-indigo-500 to-purple-600",
    directUrl: "https://poe.com/",
    tags: ["multiple AI models", "Quora", "GPT-4", "Claude", "AI comparison", "unified platform"],
    category: "AI Chat Platforms",
    rating: 4.3,
    totalVotes: 5432
  }
];
