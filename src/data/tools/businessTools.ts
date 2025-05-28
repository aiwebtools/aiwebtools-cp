import { Tool } from "@/types/tools";
import { 
  Building, TrendingUp, Users, BarChart3, 
  DollarSign, Target, Briefcase, Calculator,
  BookOpen
} from "lucide-react";

export const businessTools: Tool[] = [
  {
    icon: Building,
    title: "Business Plan GPT",
    description: "AI-powered business plan generator for entrepreneurs, startups, and small businesses, providing strategic planning and business development assistance.",
    emoji: "🏢",
    color: "from-blue-500 to-gray-600",
    directUrl: "https://businessplangpt.lovable.app/?via=aiwebtools",
    tags: ["business plan", "entrepreneur", "startup", "small business", "planning"],
    category: "Business Tools",
    rating: 4.5,
    totalVotes: 3456
  },
  {
    icon: TrendingUp,
    title: "Market Research GPT",
    description: "AI-driven market research assistant providing market analysis, consumer insights, and competitive intelligence for business strategy.",
    emoji: "📈",
    color: "from-green-500 to-blue-600",
    directUrl: "https://marketresearchgpt.lovable.app/?via=aiwebtools",
    tags: ["market research", "market analysis", "consumer insights", "competitive intelligence", "business strategy"],
    category: "Business Tools",
    rating: 4.3,
    totalVotes: 2876
  },
  {
    icon: Users,
    title: "Customer Service GPT",
    description: "AI customer service assistant providing automated support, customer engagement, and service solutions for businesses.",
    emoji: "🧑‍💼",
    color: "from-orange-500 to-red-600",
    directUrl: "https://customerservicegpt.lovable.app/?via=aiwebtools",
    tags: ["customer service", "support", "engagement", "service solutions", "automation"],
    category: "Business Tools",
    rating: 4.2,
    totalVotes: 2543
  },
  {
    icon: BarChart3,
    title: "Financial Modeling GPT",
    description: "AI-powered financial modeling tool for creating financial forecasts, investment analysis, and financial planning for businesses.",
    emoji: "📊",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://financialmodelinggpt.lovable.app/?via=aiwebtools",
    tags: ["financial modeling", "financial forecasts", "investment analysis", "financial planning", "finance"],
    category: "Business Tools",
    rating: 4.4,
    totalVotes: 3234
  },
  {
    icon: DollarSign,
    title: "Grant Writer GPT",
    description: "AI-driven grant writing assistant for nonprofits and organizations, providing grant proposal assistance and funding strategies.",
    emoji: "💰",
    color: "from-green-500 to-blue-600",
    directUrl: "https://grantwritergpt.lovable.app/?via=aiwebtools",
    tags: ["grant writing", "nonprofits", "funding", "grant proposal", "fundraising"],
    category: "Business Tools",
    rating: 4.1,
    totalVotes: 2134
  }
];
