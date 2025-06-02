
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
  Cloud,
  List,
  FlaskConical,
  Atom,
  Building
} from "lucide-react";

export const aiToolsAndUtilities: Tool[] = [
  {
    icon: Search,
    title: "Perplexity AI Search Engine",
    description: "One of the best AI search engines available - similar to Google but with advanced AI capabilities. Features real-time search with citations and sources.",
    emoji: "🔍",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://www.perplexity.ai/?via=aiwebtools",
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
    icon: Building,
    title: "AI WEB TOOLS LLC",
    description: "Comprehensive AI Tool Directory & Portfolio showcasing the latest and most innovative AI tools and technologies across all categories.",
    emoji: "🏢",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://www.aiwebtools.ai",
    tags: ["AI directory", "portfolio", "tools collection", "AI resources", "comprehensive", "innovation"],
    category: "AI Tools & Utilities",
    rating: 4.8,
    totalVotes: 2567
  }
];
