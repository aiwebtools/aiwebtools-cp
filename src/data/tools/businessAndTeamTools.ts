import { Tool } from "@/types/tools";
import { 
  Users, 
  Target, 
  TrendingUp, 
  Briefcase, 
  MessageSquare, 
  Brain, 
  Building,
  User,
  Handshake
} from "lucide-react";

export const businessAndTeamTools: Tool[] = [
  {
    icon: Users,
    title: "TeamAI (Formerly CHAT ABC)",
    description: "Dedicated AI platform for teams and businesses. Access leading AI models from OpenAI, Anthropic, Google, and Meta. Effortless collaboration, share prompts, and organize resources.",
    emoji: "👥",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://teamai.com/",
    tags: ["team collaboration", "multiple AI models", "business", "prompts sharing", "OpenAI", "Anthropic"],
    category: "Business & Team Tools",
    rating: 4.5,
    totalVotes: 4123
  },
  {
    icon: MessageSquare,
    title: "ChatSonic",
    description: "Innovative AI conversational partner with GPT-4 capabilities. Revolutionary alternative to ChatGPT that overcomes limitations and excels in generating human-like text responses.",
    emoji: "💬",
    color: "from-green-500 to-blue-600",
    directUrl: "https://writesonic.com/chat?ref=aiwebtoolss",
    tags: ["ChatGPT alternative", "GPT-4", "conversational AI", "content creation", "human-like responses"],
    category: "Business & Team Tools",
    rating: 4.3,
    totalVotes: 3789
  },
  {
    icon: Bot,
    title: "ChatIQ.ai",
    description: "Next-generation chatbot builder powered by AI. Create custom ChatGPT chatbots tailored to your business needs using your own data. 14-day free trial available.",
    emoji: "🤖",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://chatiq.ai/?via=aiwebtools",
    tags: ["chatbot builder", "custom ChatGPT", "business automation", "custom data", "14-day trial"],
    category: "Business & Team Tools",
    rating: 4.2,
    totalVotes: 2987
  },
  {
    icon: DollarSign,
    title: "FinChat.io",
    description: "AI platform for financial investors and stock traders with ChatGPT-based capabilities. Provides verified data on over 50,000 public companies for informed market decisions.",
    emoji: "📊",
    color: "from-green-500 to-yellow-600",
    directUrl: "https://finchat.io/",
    tags: ["financial AI", "stock trading", "market data", "investors", "public companies", "financial analysis"],
    category: "Business & Team Tools",
    rating: 4.6,
    totalVotes: 4567
  },
  {
    icon: TrendingUp,
    title: "ChainGPT",
    description: "Versatile platform covering blockchain and cryptocurrency services. Smart contract development, market analysis, crypto news, AI trading strategies, and blockchain analytics.",
    emoji: "⛓️",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://www.chaingpt.org/",
    tags: ["blockchain", "cryptocurrency", "smart contracts", "trading", "market analysis", "DeFi"],
    category: "Business & Team Tools",
    rating: 4.1,
    totalVotes: 2345
  },
  {
    icon: Target,
    title: "Jason AI",
    description: "First B2B Conversational AI powered by ChatGPT streamlining outreach, handling prospect responses, and facilitating meeting bookings. Essential sales AI assistant for SDRs and businesses.",
    emoji: "🤝",
    color: "from-blue-500 to-green-600",
    directUrl: "https://get.reply.io/aiwebtools",
    tags: ["B2B sales", "conversational AI", "lead generation", "meeting booking", "sales automation"],
    category: "Business & Team Tools",
    rating: 4.4,
    totalVotes: 3456
  },
  {
    icon: User,
    title: "Coach Vox",
    description: "Innovative platform creating AI version of yourself for lead generation, audience engagement, client coaching, and team empowerment. Ultimate lead magnet for entrepreneurs and creators.",
    emoji: "👤",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://coachvox.ai/",
    tags: ["AI avatar", "lead generation", "coaching", "audience engagement", "entrepreneur tools"],
    category: "Business & Team Tools",
    rating: 4.3,
    totalVotes: 2876
  }
];
