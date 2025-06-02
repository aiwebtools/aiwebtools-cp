import { Tool } from "@/types/tools";
import { 
  MessageCircle, 
  Bot, 
  Zap, 
  Brain, 
  Users, 
  Globe,
  Smartphone,
  MessageSquare,
  Headphones,
  Mic,
  Video,
  Search
} from "lucide-react";

export const aiChatPlatforms: Tool[] = [
  {
    icon: MessageCircle,
    title: "ChatGPT (OpenAI)",
    description: "Advanced AI chatbot that generates human-like text for conversations, content creation, and more. Powered by the GPT-3.5 and GPT-4 models.",
    emoji: "💬",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://openai.com/blog/chatgpt",
    tags: ["AI chatbot", "text generation", "conversational AI", "GPT-3.5", "GPT-4"],
    category: "AI Chat Platforms",
    rating: 4.8,
    totalVotes: 7654
  },
  {
    icon: Bot,
    title: "Google Gemini",
    description: "Google's experimental conversational AI service. Engage in natural language conversations, explore creative ideas, and get informative responses.",
    emoji: "🤖",
    color: "from-green-500 to-blue-600",
    directUrl: "https://gemini.google.com/",
    tags: ["conversational ai", "natural language", "google ai", "experimental", "chatbot"],
    category: "AI Chat Platforms",
    rating: 4.6,
    totalVotes: 5432
  },
  {
    icon: Zap,
    title: "Microsoft Copilot",
    description: "AI companion designed to work across multiple platforms like Windows 11, Microsoft 365 apps, and the web. Provides assistance, answers questions, and generates content.",
    emoji: "⚡",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://copilot.microsoft.com/",
    tags: ["ai assistant", "windows 11", "microsoft 365", "content generation", "productivity"],
    category: "AI Chat Platforms",
    rating: 4.5,
    totalVotes: 4876
  },
  {
    icon: Brain,
    title: "Claude AI (Anthropic)",
    description: "Next-generation AI assistant for tasks like summarization, search, creative writing, and code generation. Focuses on helpful and harmless AI interactions.",
    emoji: "🧠",
    color: "from-orange-500 to-red-600",
    directUrl: "https://www.anthropic.com/",
    tags: ["ai assistant", "summarization", "creative writing", "code generation", "helpful ai"],
    category: "AI Chat Platforms",
    rating: 4.7,
    totalVotes: 6123
  },
  {
    icon: Users,
    title: "Character AI",
    description: "Platform for creating and interacting with AI characters. Design custom AI personalities and engage in unique conversations with diverse virtual characters.",
    emoji: "🎭",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://beta.character.ai/",
    tags: ["ai characters", "custom personalities", "virtual conversations", "role-playing", "ai simulation"],
    category: "AI Chat Platforms",
    rating: 4.3,
    totalVotes: 3567
  },
  {
    icon: Globe,
    title: "Perplexity AI",
    description: "AI-powered search engine that provides direct answers, sources, and follow-up questions. Combines search with conversational AI for enhanced information discovery.",
    emoji: "🌐",
    color: "from-green-500 to-blue-600",
    directUrl: "https://www.perplexity.ai/",
    tags: ["ai search engine", "direct answers", "source citations", "conversational search", "information discovery"],
    category: "AI Chat Platforms",
    rating: 4.6,
    totalVotes: 5234
  },
  {
    icon: Smartphone,
    title: "Pi, Your Personal AI",
    description: "Inflection AI's personal AI assistant designed to provide support, companionship, and information. Engage in empathetic and helpful conversations.",
    emoji: "📱",
    color: "from-pink-500 to-purple-600",
    directUrl: "https://pi.ai/",
    tags: ["personal ai", "ai companion", "empathetic ai", "support", "information"],
    category: "AI Chat Platforms",
    rating: 4.4,
    totalVotes: 3987
  },
  {
    icon: MessageSquare,
    title: "ChatSonic",
    description: "Advanced AI chatbot by Writesonic with real-time data access, voice commands, and image generation capabilities. GPT-4 powered conversational AI.",
    emoji: "💬",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://writesonic.com/chat?ref=aiwebtoolss",
    tags: ["AI chatbot", "real-time data", "voice commands", "image generation", "GPT-4"],
    category: "AI Chat Platforms",
    rating: 4.4,
    totalVotes: 3876
  },
  {
    icon: Bot,
    title: "BotSonic",
    description: "AI-powered chatbot builder that creates intelligent customer service bots with natural language processing and automated responses.",
    emoji: "🤖",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://writesonic.com/botsonic?via=aiwebtools",
    tags: ["chatbot builder", "customer service", "natural language", "automated responses", "AI bot"],
    category: "AI Chat Platforms",
    rating: 4.5,
    totalVotes: 3456
  },
  {
    icon: Headphones,
    title: "Replika",
    description: "AI companion that offers emotional support and personalized conversations. Create a unique AI friend and explore self-discovery through chat.",
    emoji: "🎧",
    color: "from-cyan-500 to-purple-600",
    directUrl: "https://replika.com/",
    tags: ["ai companion", "emotional support", "personalized chat", "ai friend", "self-discovery"],
    category: "AI Chat Platforms",
    rating: 4.2,
    totalVotes: 3123
  },
  {
    icon: Mic,
    title: "Otter.ai",
    description: "AI-powered transcription and meeting notes platform. Automatically transcribe meetings, interviews, and voice conversations with real-time transcription.",
    emoji: "🎤",
    color: "from-green-500 to-cyan-600",
    directUrl: "https://otter.ai/",
    tags: ["ai transcription", "meeting notes", "voice conversations", "real-time transcription", "collaboration"],
    category: "AI Chat Platforms",
    rating: 4.5,
    totalVotes: 4234
  },
  {
    icon: Video,
    title: "Descript",
    description: "All-in-one audio & video editing, podcasting, and screen recording platform. Edit audio and video by editing text with AI-powered features.",
    emoji: "🎬",
    color: "from-orange-500 to-red-600",
    directUrl: "https://www.descript.com/",
    tags: ["audio editing", "video editing", "podcasting", "screen recording", "text-based editing"],
    category: "AI Chat Platforms",
    rating: 4.6,
    totalVotes: 4789
  },
  {
    icon: Search,
    title: "YouChat",
    description: "AI search assistant that provides concise answers, generates content, and summarizes information. Combines search with AI chat for enhanced productivity.",
    emoji: "🔍",
    color: "from-blue-500 to-green-600",
    directUrl: "https://you.com/",
    tags: ["ai search", "content generation", "summarization", "productivity", "ai assistant"],
    category: "AI Chat Platforms",
    rating: 4.3,
    totalVotes: 3456
  }
];
