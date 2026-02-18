import { Tool } from "@/types/tools";
import { 
  MessageSquare, 
  Search, 
  Sparkles,
  Brain,
  Zap,
  Globe
} from "lucide-react";

import chatgptHero from "@/assets/tools/chatgpt-hero.jpg";
import claudeHero from "@/assets/tools/claude-hero.jpg";
import geminiHero from "@/assets/tools/gemini-hero.jpg";
import perplexityHero from "@/assets/tools/perplexity-hero.jpg";
import grokHero from "@/assets/tools/grok-hero.jpg";
import microsoftCopilotHero from "@/assets/tools/microsoft-copilot-hero.jpg";

export const majorAIPlatforms: Tool[] = [
  {
    icon: MessageSquare,
    title: "ChatGPT",
    description: "The most popular AI chatbot by OpenAI. Revolutionary conversational AI with GPT-4o and GPT-5 models for writing, coding, analysis, and creative tasks. The AI tool that started the revolution.",
    emoji: "💬",
    color: "from-green-500 to-teal-600",
    directUrl: "https://chat.openai.com/?via=aiwebtools",
    imageUrl: chatgptHero,
    tags: ["ChatGPT", "OpenAI", "GPT-4", "GPT-5", "conversational AI", "chatbot", "writing", "coding", "analysis"],
    category: "AI Chat & Assistants",
    rating: 4.9,
    totalVotes: 125000
  },
  {
    icon: Brain,
    title: "Claude (Anthropic)",
    description: "Advanced AI assistant by Anthropic with superior reasoning and long context windows up to 200K tokens. Claude 3.5 Sonnet and Claude 4 excel at analysis, coding, and creative writing with helpful, harmless responses.",
    emoji: "🧠",
    color: "from-orange-500 to-amber-600",
    directUrl: "https://claude.ai/?via=aiwebtools",
    imageUrl: claudeHero,
    tags: ["Claude", "Anthropic", "AI assistant", "long context", "reasoning", "coding", "analysis", "creative writing"],
    category: "AI Chat & Assistants",
    rating: 4.9,
    totalVotes: 89000
  },
  {
    icon: Sparkles,
    title: "Google Gemini",
    description: "Google's flagship multimodal AI model integrating with Google Workspace. Gemini 2.5 Pro offers advanced reasoning, coding, and seamless integration with Gmail, Docs, and other Google services.",
    emoji: "✨",
    color: "from-blue-500 to-indigo-600",
    directUrl: "https://gemini.google.com/?via=aiwebtools",
    imageUrl: geminiHero,
    tags: ["Google Gemini", "multimodal AI", "Google AI", "workspace integration", "reasoning", "productivity"],
    category: "AI Chat & Assistants",
    rating: 4.7,
    totalVotes: 95000
  },
  {
    icon: Search,
    title: "Perplexity AI",
    description: "AI-powered answer engine that provides accurate, source-cited responses. Combines conversational AI with real-time web search for research, fact-checking, and knowledge discovery.",
    emoji: "🔍",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://www.perplexity.ai/?via=aiwebtools",
    imageUrl: perplexityHero,
    tags: ["AI search", "answer engine", "research", "fact-checking", "citations", "real-time search"],
    category: "AI Chat & Assistants",
    rating: 4.8,
    totalVotes: 67000
  },
  {
    icon: Zap,
    title: "Grok (xAI)",
    description: "Elon Musk's xAI chatbot with real-time access to X (Twitter) data. Grok 2 offers witty, unfiltered responses with up-to-date information and unique personality.",
    emoji: "⚡",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://x.ai/?via=aiwebtools",
    imageUrl: grokHero,
    tags: ["Grok", "xAI", "Elon Musk", "real-time data", "Twitter integration", "chatbot"],
    category: "AI Chat & Assistants",
    rating: 4.5,
    totalVotes: 45000
  },
  {
    icon: Globe,
    title: "Microsoft Copilot",
    description: "Microsoft's AI assistant integrated across Windows, Office 365, Edge browser, and Bing. Powered by GPT-4, enhancing productivity with AI assistance in everyday tasks.",
    emoji: "🤖",
    color: "from-blue-600 to-cyan-600",
    directUrl: "https://copilot.microsoft.com/?via=aiwebtools",
    imageUrl: microsoftCopilotHero,
    tags: ["Microsoft Copilot", "GPT-4", "Office 365", "Windows AI", "productivity", "enterprise AI"],
    category: "AI Chat & Assistants",
    rating: 4.6,
    totalVotes: 78000
  }
];
