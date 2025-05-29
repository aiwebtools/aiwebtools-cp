
import { Tool } from "@/types/tools";
import { 
  ShoppingCart, 
  TrendingUp, 
  Target, 
  Mail, 
  Zap
} from "lucide-react";

export const ecommerceAndMarketingTools: Tool[] = [
  {
    icon: Target,
    title: "GoCharlie AI",
    description: "Powerful content creation AI platform designed for businesses. Charlie's AI agent streamlines content creation, saving up to 10x time for on-brand content. Over 70 tools generating content with one click.",
    emoji: "🎯",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://gocharlie.ai/?fpr=aiwebtools",
    tags: ["10x time saving", "on-brand content", "70+ tools", "marketers", "10-day trial", "flexible cancellation"],
    category: "E-commerce & Marketing Tools",
    rating: 4.5,
    totalVotes: 4123
  },
  {
    icon: Mail,
    title: "Hoppy Copy",
    description: "AI-powered tool for email marketing campaigns. Over 50 Email AI Templates for holiday campaigns, drip sequences, newsletters. Content Converter, Spam Checker, and competitor insights included.",
    emoji: "📧",
    color: "from-green-500 to-blue-600",
    directUrl: "https://www.hoppycopy.co/?via=Aiwebtools",
    tags: ["50+ templates", "email marketing", "spam checker", "competitor insights", "content converter", "free trial"],
    category: "E-commerce & Marketing Tools",
    rating: 4.4,
    totalVotes: 3789
  },
  {
    icon: ShoppingCart,
    title: "Mentum AI",
    description: "Game-changing solution for e-commerce businesses offering 90% reduction in product listing and localization costs. Automates product information collection, enhances catalog organization, generates descriptions.",
    emoji: "🛒",
    color: "from-orange-500 to-red-600",
    directUrl: "https://www.mentum.ai/?via=aiwebtools",
    tags: ["90% cost reduction", "product listing", "localization", "catalog organization", "multilingual", "SEO optimization"],
    category: "E-commerce & Marketing Tools",
    rating: 4.6,
    totalVotes: 4567
  }
];
