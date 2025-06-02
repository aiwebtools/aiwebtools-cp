import { Tool } from "@/types/tools";
import { 
  MessageSquare, 
  Brain, 
  Zap, 
  Users, 
  Search, 
  BookOpen, 
  Globe, 
  Cpu,
  Sparkles,
  Bot
} from "lucide-react";

export const aiAssistants: Tool[] = [
  {
    icon: Sparkles,
    title: "Merlin AI",
    description: "All-in-one AI assistant powered by ChatGPT, GPT-4, Claude, and other leading AI models. Access AI anywhere on the web with browser extension support and advanced capabilities.",
    emoji: "🧙‍♂️",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://www.getmerlin.in/pricing?ref=mte1mgu4",
    tags: ["ai assistant", "browser extension", "chatgpt", "gpt-4", "web ai"],
    category: "AI Assistants",
    rating: 4.5,
    totalVotes: 4321
  },
  {
    icon: MessageSquare,
    title: "ChatGPT",
    description: "Revolutionary AI chatbot from OpenAI that answers questions, generates content, and engages in conversations.",
    emoji: "💬",
    color: "from-green-500 to-blue-600",
    directUrl: "https://chat.openai.com/?via=aiwebtools",
    tags: ["chatbot", "ai", "conversational ai", "natural language processing"],
    category: "AI Assistants",
    rating: 4.8,
    totalVotes: 8765
  },
  {
    icon: Brain,
    title: "Claude AI",
    description: "Next-generation AI assistant from Anthropic designed for helpful, harmless, and honest conversations.",
    emoji: "🧠",
    color: "from-orange-500 to-red-600",
    directUrl: "https://www.anthropic.com/claude-in-slack?via=aiwebtools",
    tags: ["ai assistant", "conversational ai", "natural language processing", "ethics"],
    category: "AI Assistants",
    rating: 4.7,
    totalVotes: 7654
  },
  {
    icon: Zap,
    title: "Microsoft Copilot",
    description: "AI companion for Microsoft 365 apps that boosts productivity, creativity, and collaboration.",
    emoji: "⚡",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://www.microsoft.com/en-us/microsoft-365/copilot?via=aiwebtools",
    tags: ["ai assistant", "microsoft 365", "productivity", "collaboration"],
    category: "AI Assistants",
    rating: 4.6,
    totalVotes: 6543
  },
  {
    icon: Users,
    title: "Character AI",
    description: "Platform for creating and interacting with AI characters for entertainment, learning, and companionship.",
    emoji: "🎭",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://beta.character.ai/?via=aiwebtools",
    tags: ["ai characters", "entertainment", "learning", "companionship"],
    category: "AI Assistants",
    rating: 4.4,
    totalVotes: 5432
  },
  {
    icon: Search,
    title: "Perplexity AI",
    description: "AI-powered search engine that provides accurate answers, citations, and sources for your queries.",
    emoji: "🔍",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://www.perplexity.ai/?via=aiwebtools",
    tags: ["search engine", "ai search", "research", "information retrieval"],
    category: "AI Assistants",
    rating: 4.5,
    totalVotes: 4321
  },
  {
    icon: BookOpen,
    title: "YouChat",
    description: "AI assistant that helps you find information, generate content, and automate tasks with natural language.",
    emoji: "📖",
    color: "from-green-500 to-blue-600",
    directUrl: "https://you.com/?via=aiwebtools",
    tags: ["ai assistant", "information retrieval", "content generation", "automation"],
    category: "AI Assistants",
    rating: 4.3,
    totalVotes: 3210
  },
  {
    icon: Globe,
    title: "Google Bard",
    description: "Experimental AI service from Google that lets you explore your curiosity, create content, and bring your ideas to life.",
    emoji: "🌎",
    color: "from-red-500 to-yellow-600",
    directUrl: "https://bard.google.com/?via=aiwebtools",
    tags: ["ai assistant", "google", "exploration", "content creation", "ideas"],
    category: "AI Assistants",
    rating: 4.2,
    totalVotes: 2109
  },
  {
    icon: Cpu,
    title: "Pi, Your Personal AI",
    description: "Meet Pi, your personal AI. A new kind of AI, designed to be supportive, offer advice, and be a sounding board.",
    emoji: "🤖",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://pi.ai/?via=aiwebtools",
    tags: ["ai assistant", "personal ai", "advice", "support", "sounding board"],
    category: "AI Assistants",
    rating: 4.6,
    totalVotes: 5678
  },
  {
    icon: Bot,
    title: "Otter AI",
    description: "AI-powered assistant that records and transcribes meetings, interviews, and voice conversations in real-time.",
    emoji: "🎙️",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://otter.ai/?via=aiwebtools",
    tags: ["ai assistant", "transcription", "meeting recording", "voice recognition"],
    category: "AI Assistants",
    rating: 4.4,
    totalVotes: 3456
  }
];
