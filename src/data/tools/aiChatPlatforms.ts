
import { MessageCircle, Bot, Zap, Brain, Users, Heart, Coffee, Star } from "lucide-react";
import { Tool } from "@/types/tools";

export const aiChatPlatforms: Tool[] = [
  {
    icon: MessageCircle,
    title: "META AI STUDIO",
    description: "Create AI characters based on your interests, and creators can build AI extensions of themselves. Start chatting with these AIs in Instagram, Messenger, and WhatsApp. Powered by LLAMA.",
    emoji: "🤖",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://ai.meta.com/ai-studio/",
    tags: ["AI characters", "social media", "LLAMA", "Instagram", "Messenger"],
    category: "AI Chat Platforms",
    rating: 4.6,
    totalVotes: 3200
  },
  {
    icon: Zap,
    title: "Groq",
    description: "Choose between Mistral and Llama LLMs. Free, fast and efficient LLM comparable to GPT 3.5 Turbo. High-speed inference platform for AI applications.",
    emoji: "⚡",
    color: "from-yellow-400 to-orange-500",
    directUrl: "https://groq.com/",
    tags: ["LLM", "fast inference", "Mistral", "Llama", "free"],
    category: "AI Chat Platforms",
    rating: 4.7,
    totalVotes: 2890
  },
  {
    icon: Users,
    title: "LMSYS CHATBOT ARENA",
    description: "Platform for benchmarking and evaluating large language models through anonymous, randomized chatbot battles. Compare models like Grok-2 vs GPT-4o in community-driven evaluations.",
    emoji: "⚔️",
    color: "from-red-400 to-purple-500",
    directUrl: "https://arena.lmsys.org/",
    tags: ["LLM benchmarking", "chatbot battles", "model comparison", "evaluation", "community"],
    category: "AI Chat Platforms",
    rating: 4.8,
    totalVotes: 3450
  },
  {
    icon: Brain,
    title: "Corcel",
    description: "Build AI-powered apps with decentralized AI infrastructure powered by Bittensor. Use GPT-4 turbo and many other LLMs, fine-tune models, access APIs, and integrate into your software.",
    emoji: "🌐",
    color: "from-cyan-400 to-indigo-500",
    directUrl: "https://corcel.io/",
    tags: ["decentralized AI", "Bittensor", "GPT-4", "API access", "custom models"],
    category: "AI Development Platforms",
    rating: 4.5,
    totalVotes: 2100
  },
  {
    icon: Heart,
    title: "RIZZ AI",
    description: "Advanced AI-powered dating assistant providing personalized conversation starters, flirting tips, and relationship advice. Trained on successful dating interactions with privacy focus.",
    emoji: "💕",
    color: "from-pink-400 to-red-500",
    directUrl: "https://rizzai.ai/",
    tags: ["dating assistant", "conversation starters", "relationship advice", "privacy", "personalized"],
    category: "Lifestyle & Personal",
    rating: 4.3,
    totalVotes: 1890
  },
  {
    icon: Coffee,
    title: "Ohai.ai",
    description: "Personal AI assistant for managing daily tasks, calendars, reminders, and coordination with family and colleagues. Create profiles, connect calendars, and receive daily summaries.",
    emoji: "☕",
    color: "from-brown-400 to-orange-500",
    directUrl: "https://www.ohai.ai",
    tags: ["personal assistant", "task management", "calendar", "family coordination", "daily summaries"],
    category: "Productivity & Personal",
    rating: 4.4,
    totalVotes: 2200
  },
  {
    icon: Star,
    title: "TwinMind",
    description: "AI-powered personal assistant acting as a 'digital twin' with real-time insights, contextual search, and perfect memory. Proactive meeting suggestions with on-device processing for privacy.",
    emoji: "👥",
    color: "from-purple-400 to-pink-500",
    directUrl: "https://twinmind.ai/",
    tags: ["digital twin", "personal assistant", "perfect memory", "privacy", "real-time insights"],
    category: "Productivity & Personal",
    rating: 4.6,
    totalVotes: 2450
  },
  {
    icon: MessageCircle,
    title: "Meta AI Studio for Instagram",
    description: "Create your own AI agents for Instagram trained on your data to respond to customer requests. Integrate AI assistance directly into your Instagram business presence.",
    emoji: "📸",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://aistudio.instagram.com/",
    tags: ["Instagram AI", "customer service", "business automation", "custom training", "social media"],
    category: "Social Media & Business",
    rating: 4.5,
    totalVotes: 1980
  },
  {
    icon: Bot,
    title: "Nelima",
    description: "Pioneering community-driven Large Action Model (LAM) that executes complex actions like analyzing data, publishing websites, browsing web, and tracking packages. All-in-one automation solution.",
    emoji: "🚀",
    color: "from-green-400 to-blue-500",
    directUrl: "https://sellagen.com/",
    tags: ["action model", "automation", "web browsing", "data analysis", "community-driven"],
    category: "AI Automation Platforms",
    rating: 4.7,
    totalVotes: 2150
  }
];
