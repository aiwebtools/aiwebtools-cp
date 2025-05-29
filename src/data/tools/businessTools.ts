
import { Tool } from "@/types/tools";
import { 
  Building, TrendingUp, Users, BarChart3, 
  DollarSign, Target, Briefcase, Calculator,
  BookOpen
} from "lucide-react";

export const businessTools: Tool[] = [
  {
    icon: TrendingUp,
    title: "Market Research GPT",
    description: "AI-driven market research assistant providing market analysis, consumer insights, and competitive intelligence for business strategy.",
    emoji: "📈",
    color: "from-green-500 to-blue-600",
    directUrl: "https://marketresearchgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=300&fit=crop",
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
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=300&fit=crop",
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
    imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=300&fit=crop",
    tags: ["financial modeling", "financial forecasts", "investment analysis", "financial planning", "finance"],
    category: "Business Tools",
    rating: 4.4,
    totalVotes: 3234
  }
];
