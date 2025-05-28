
import { Tool } from "@/types/tools";
import { 
  MessageSquare, Bot, Brain, Lightbulb, Sparkles, 
  Users, Heart, Search, BookOpen, Zap, Star,
  Crown, Shield, Globe, Wand2
} from "lucide-react";

export const aiAssistants: Tool[] = [
  {
    icon: MessageSquare,
    title: "ChatGPT",
    description: "OpenAI's revolutionary conversational AI assistant that can help with writing, coding, analysis, and creative tasks. Features advanced reasoning capabilities and up-to-date knowledge.",
    emoji: "🤖",
    color: "from-green-500 to-emerald-600",
    category: "AI Assistants",
    directUrl: "https://chat.openai.com/",
    tags: ["conversation", "writing", "coding", "analysis", "creative tasks"],
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop"
  },
  {
    icon: Brain,
    title: "Claude (Anthropic)",
    description: "Anthropic's advanced AI assistant known for helpful, harmless, and honest responses. Excels at analysis, writing, math, coding, and creative tasks with strong safety measures.",
    emoji: "🧠",
    color: "from-purple-500 to-indigo-600",
    category: "AI Assistants",
    directUrl: "https://claude.ai/",
    tags: ["analysis", "writing", "math", "coding", "safety"],
    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=300&fit=crop"
  },
  {
    icon: Sparkles,
    title: "Google Gemini",
    description: "Google's most capable AI model with multimodal understanding. Can process text, images, audio, and code with advanced reasoning and creative capabilities.",
    emoji: "✨",
    color: "from-blue-500 to-cyan-600",
    category: "AI Assistants",
    directUrl: "https://gemini.google.com/",
    tags: ["multimodal", "reasoning", "creative", "Google", "advanced"],
    imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop"
  },
  {
    icon: Crown,
    title: "Talk to the Gods GPT",
    description: "Engage in conversations with historical deities, mythological figures, and divine entities from various cultures and religions. Experience wisdom, guidance, and ancient perspectives through AI-powered divine conversations.",
    emoji: "👑",
    color: "from-yellow-500 to-orange-600",
    category: "AI Assistants",
    directUrl: "https://chat.openai.com/g/g-AbLzOCY6S-talk-to-the-gods",
    tags: ["mythology", "religion", "history", "wisdom", "divine", "spiritual", "guidance", "ancient"],
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop"
  },
  {
    icon: Lightbulb,
    title: "Perplexity AI",
    description: "AI-powered research assistant that provides accurate, real-time answers with cited sources. Perfect for research, fact-checking, and staying updated with current information.",
    emoji: "💡",
    color: "from-teal-500 to-green-600",
    category: "AI Assistants",
    directUrl: "https://www.perplexity.ai/",
    tags: ["research", "fact-checking", "sources", "real-time", "accuracy"],
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop"
  },
  {
    icon: Users,
    title: "Character.AI",
    description: "Create and chat with AI characters based on fictional characters, historical figures, or original creations. Engage in roleplay and creative conversations.",
    emoji: "👥",
    color: "from-pink-500 to-rose-600",
    category: "AI Assistants",
    directUrl: "https://character.ai/",
    tags: ["roleplay", "characters", "creative", "conversation", "fiction"],
    imageUrl: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=400&h=300&fit=crop"
  },
  {
    icon: Heart,
    title: "Replika",
    description: "AI companion designed to be your personal chatbot friend. Offers emotional support, companionship, and personalized conversations that evolve over time.",
    emoji: "💖",
    color: "from-red-500 to-pink-600",
    category: "AI Assistants",
    directUrl: "https://replika.ai/",
    tags: ["companion", "emotional support", "friendship", "personalized", "mental health"],
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop"
  },
  {
    icon: Search,
    title: "You.com",
    description: "AI-powered search engine that provides personalized results and can answer questions, write content, and help with research using multiple AI models.",
    emoji: "🔍",
    color: "from-blue-600 to-purple-600",
    category: "AI Assistants",
    directUrl: "https://you.com/",
    tags: ["search", "personalized", "research", "multiple models", "web search"],
    imageUrl: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=400&h=300&fit=crop"
  },
  {
    icon: BookOpen,
    title: "Poe by Quora",
    description: "Access multiple AI models in one platform including GPT-4, Claude, and others. Compare responses and choose the best AI for your specific needs.",
    emoji: "📚",
    color: "from-indigo-500 to-blue-600",
    category: "AI Assistants",
    directUrl: "https://poe.com/",
    tags: ["multiple models", "comparison", "GPT-4", "Claude", "platform"],
    imageUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop"
  },
  {
    icon: Zap,
    title: "Bing Chat (Copilot)",
    description: "Microsoft's AI assistant integrated with Bing search. Provides real-time information, creative content generation, and helpful assistance with current web data.",
    emoji: "⚡",
    color: "from-blue-500 to-teal-600",
    category: "AI Assistants",
    directUrl: "https://www.bing.com/chat",
    tags: ["Microsoft", "real-time", "web data", "creative", "search integration"],
    imageUrl: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop"
  },
  {
    icon: Star,
    title: "Hugging Face Chat",
    description: "Chat with various open-source AI models including Llama, Mistral, and others. Great for developers and researchers exploring different AI capabilities.",
    emoji: "🤗",
    color: "from-yellow-500 to-orange-600",
    category: "AI Assistants",
    directUrl: "https://huggingface.co/chat/",
    tags: ["open-source", "Llama", "Mistral", "developers", "research"],
    imageUrl: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=400&h=300&fit=crop"
  },
  {
    icon: Shield,
    title: "Pi AI",
    description: "Inflection AI's personal intelligence designed to be helpful, harmless, and honest. Focuses on natural conversation and emotional intelligence.",
    emoji: "🛡️",
    color: "from-green-500 to-blue-600",
    category: "AI Assistants",
    directUrl: "https://pi.ai/",
    tags: ["personal", "emotional intelligence", "natural conversation", "helpful", "harmless"],
    imageUrl: "https://images.unsplash.com/photo-1527430253228-e93688616381?w=400&h=300&fit=crop"
  },
  {
    icon: Globe,
    title: "ChatSonic",
    description: "AI chatbot with real-time data access, image generation capabilities, and voice commands. Offers GPT-4 powered conversations with current information.",
    emoji: "🌐",
    color: "from-purple-500 to-pink-600",
    category: "AI Assistants",
    directUrl: "https://writesonic.com/chat",
    tags: ["real-time data", "image generation", "voice commands", "GPT-4", "current info"],
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop"
  },
  {
    icon: Wand2,
    title: "Jasper Chat",
    description: "AI assistant specifically designed for marketers, content creators, and businesses. Specializes in marketing copy, content strategy, and brand voice.",
    emoji: "🪄",
    color: "from-purple-600 to-indigo-600",
    category: "AI Assistants",
    directUrl: "https://www.jasper.ai/chat",
    tags: ["marketing", "content creation", "business", "brand voice", "strategy"],
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
  }
];
