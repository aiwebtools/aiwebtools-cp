import { Tool } from "@/types/tools";
import { 
  Bot, 
  Search, 
  Code, 
  Zap, 
  Brain, 
  Settings, 
  Globe, 
  Calculator,
  Target,
  MessageSquare,
  Lightbulb,
  Database,
  FileText,
  Cpu,
  Activity,
  Shield,
  Eye,
  Rocket,
  Hash,
  Cloud
} from "lucide-react";

export const aiToolsAndUtilities: Tool[] = [
  {
    icon: Search,
    title: "Perplexity AI Search Engine",
    description: "One of the best AI search engines available - similar to Google but with advanced AI capabilities. Features real-time search with citations and sources.",
    emoji: "🔍",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://www.perplexity.ai/",
    tags: ["AI search", "search engine", "research", "citations", "real-time"],
    category: "AI Tools & Utilities",
    rating: 4.8,
    totalVotes: 4567
  },
  {
    icon: List,
    title: "1000+ AI Tools List",
    description: "Comprehensive list of over 1000 AI tools and resources, categorized for easy browsing and discovery.",
    emoji: "📚",
    color: "from-green-500 to-blue-600",
    directUrl: "https://1000aitools.lovable.app/?via=aiwebtools",
    tags: ["AI tools", "AI resources", "list", "directory", "database"],
    category: "AI Tools To Run LOCALLY",
    rating: 4.3,
    totalVotes: 2789
  },
  {
    icon: Zap,
    title: "Prompt Box",
    description: "AI-powered prompt generator for creating effective prompts for AI models and chatbots.",
    emoji: "💡",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://promptbox.lovable.app/?via=aiwebtools",
    tags: ["prompt generator", "AI prompts", "chatbots", "AI models", "prompt engineering"],
    category: "AI Tools To Run LOCALLY",
    rating: 4.1,
    totalVotes: 1987
  },
  {
    icon: Shield,
    title: "AI Legal Assistant",
    description: "AI-powered legal assistant that provides legal information, document review, and legal research assistance.",
    emoji: "⚖️",
    color: "from-gray-500 to-blue-600",
    directUrl: "https://ailegalassistant.lovable.app/?via=aiwebtools",
    tags: ["legal assistant", "AI legal", "legal information", "document review", "legal research"],
    category: "AI Tools To Run LOCALLY",
    rating: 4.4,
    totalVotes: 3567
  },
  {
    icon: FlaskConical,
    title: "AI Chemical Assistant",
    description: "AI-powered chemical assistant that provides chemical information, reaction prediction, and chemical research assistance.",
    emoji: "🧪",
    color: "from-red-500 to-blue-600",
    directUrl: "https://aichemicalassistant.lovable.app/?via=aiwebtools",
    tags: ["chemical assistant", "AI chemical", "chemical information", "reaction prediction", "chemical research"],
    category: "AI Tools To Run LOCALLY",
    rating: 4.5,
    totalVotes: 3456
  },
  {
    icon: Atom,
    title: "AI Physics Assistant",
    description: "AI-powered physics assistant that provides physics information, problem-solving assistance, and physics research assistance.",
    emoji: "⚛️",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://aiphysicsassistant.lovable.app/?via=aiwebtools",
    tags: ["physics assistant", "AI physics", "physics information", "problem-solving", "physics research"],
    category: "AI Tools To Run LOCALLY",
    rating: 4.2,
    totalVotes: 1876
  }
];
