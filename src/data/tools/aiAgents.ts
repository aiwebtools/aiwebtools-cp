
import { Tool } from "@/types/tools";
import { 
  Bot, 
  Users, 
  Brain, 
  Zap, 
  MessageSquare, 
  Target, 
  Globe, 
  Shield, 
  Code,
  Cpu,
  Settings,
  Phone,
  Building
} from "lucide-react";

export const aiAgents: Tool[] = [
  {
    icon: Bot,
    title: "Agent GPT",
    description: "Versatile open-source AI tool leveraging GPT-3.5 and GPT-4 models, simulates multiple agents talking to each other about your tasks. Requires API key for operation.",
    emoji: "🤖",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://agentgpt.reworkd.ai/",
    tags: ["open source", "GPT-4", "multi-agent", "collaboration", "paid", "API required"],
    category: "AI Agents",
    rating: 4.2,
    totalVotes: 3456
  },
  {
    icon: Users,
    title: "CamelAGI",
    description: "Innovative AI tool that allows users to observe collaborative efforts of two AI agents working together to solve various tasks. Assign specific roles and witness joint problem-solving capabilities.",
    emoji: "🐪",
    color: "from-orange-500 to-red-600",
    directUrl: "https://camelagi.thesamur.ai/conversation",
    tags: ["multi-agent", "collaboration", "problem-solving", "education", "gaming", "conversational AI"],
    category: "AI Agents",
    rating: 4.0,
    totalVotes: 2134
  },
  {
    icon: Globe,
    title: "GodMode.Space",
    description: "Browser variant of Auto GPT that uses AI to chain together thoughts autonomously. Generates frameworks for business goals, analyzes competition, and evaluates market potential.",
    emoji: "🔥",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://godmode.space/",
    tags: ["autonomous AI", "goal achievement", "market analysis", "business planning", "paid", "API required"],
    category: "AI Agents",
    rating: 4.4,
    totalVotes: 4123
  },
  {
    icon: Phone,
    title: "Bland.ai",
    description: "Ultimate AI phone agent designed to supercharge organization's phone communications. Creates custom phone agents, automates repetitive tasks, and enhances productivity with advanced NLP.",
    emoji: "📞",
    color: "from-green-500 to-blue-600",
    directUrl: "https://bland.ai/",
    tags: ["phone agent", "automation", "NLP", "customer service", "productivity", "business"],
    category: "AI Agents",
    rating: 4.3,
    totalVotes: 2987
  },
  {
    icon: Building,
    title: "Cody",
    description: "AI Assistant for Business trained specifically for your business, team, processes, and clients using your knowledge base. Provides instant answers and supports various tasks.",
    emoji: "👨‍💼",
    color: "from-blue-500 to-green-600",
    directUrl: "https://meetcody.ai/?fpr=aiwebtools",
    tags: ["business AI", "knowledge base", "team assistant", "productivity", "custom training", "workflow"],
    category: "AI Agents",
    rating: 4.5,
    totalVotes: 3789
  }
];
