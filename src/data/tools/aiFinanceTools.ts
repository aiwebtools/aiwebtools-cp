
import { Tool } from "@/types/tools";
import { 
  DollarSign, TrendingUp, BarChart3, Calculator, PieChart,
  CreditCard, Wallet, Building, Target, Zap
} from "lucide-react";

import kenshoHero from "@/assets/tools/kensho-hero.jpg";
import alphasenseHero from "@/assets/tools/alphasense-hero.jpg";
import zestAiHero from "@/assets/tools/zest-ai-hero.jpg";
import personalCapitalHero from "@/assets/tools/personal-capital-hero.jpg";
import robinhoodHero from "@/assets/tools/robinhood-hero.jpg";
import mintHero from "@/assets/tools/mint-hero.jpg";

export const aiFinanceTools: Tool[] = [
  {
    icon: TrendingUp,
    title: "Kensho",
    description: "AI analytics platform for financial markets providing real-time insights and predictive analytics for investment decisions.",
    emoji: "📈",
    color: "from-green-500 to-blue-600",
    directUrl: "https://www.kensho.com/?via=aiwebtools",
    imageUrl: kenshoHero,
    tags: ["financial analytics", "market insights", "investment", "predictive analytics"],
    category: "Professional Services",
    rating: 4.6,
    totalVotes: 2345
  },
  {
    icon: BarChart3,
    title: "AlphaSense",
    description: "AI-powered market intelligence platform that searches and analyzes millions of documents for investment research.",
    emoji: "📊",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://www.alpha-sense.com/?via=aiwebtools",
    imageUrl: alphasenseHero,
    tags: ["market intelligence", "investment research", "document analysis", "financial data"],
    category: "Professional Services",
    rating: 4.5,
    totalVotes: 1987
  },
  {
    icon: Building,
    title: "Zest AI",
    description: "AI platform for credit underwriting that helps lenders make more accurate and fair lending decisions.",
    emoji: "🏢",
    color: "from-orange-500 to-red-600",
    directUrl: "https://www.zest.ai/?via=aiwebtools",
    imageUrl: zestAiHero,
    tags: ["credit scoring", "lending", "underwriting", "financial AI"],
    category: "Professional Services",
    rating: 4.4,
    totalVotes: 1876
  },
  {
    icon: PieChart,
    title: "Personal Capital",
    description: "AI-powered wealth management and financial planning platform with comprehensive portfolio analysis.",
    emoji: "🥧",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://www.personalcapital.com/?via=aiwebtools",
    imageUrl: personalCapitalHero,
    tags: ["wealth management", "financial planning", "portfolio analysis", "investment tracking"],
    category: "Professional Services",
    rating: 4.3,
    totalVotes: 1654
  },
  {
    icon: Target,
    title: "Robinhood",
    description: "AI-enhanced commission-free investing platform with smart portfolio recommendations and market insights.",
    emoji: "🎯",
    color: "from-green-500 to-teal-600",
    directUrl: "https://robinhood.com/?via=aiwebtools",
    imageUrl: robinhoodHero,
    tags: ["investing", "trading", "portfolio management", "market analysis"],
    category: "Professional Services",
    rating: 4.2,
    totalVotes: 3421
  },
  {
    icon: Wallet,
    title: "Mint (Intuit)",
    description: "AI-powered personal finance app that categorizes transactions, tracks spending, and provides budget recommendations.",
    emoji: "💰",
    color: "from-green-500 to-cyan-600",
    directUrl: "https://mint.intuit.com/?via=aiwebtools",
    imageUrl: mintHero,
    tags: ["personal finance", "budgeting", "expense tracking", "financial planning"],
    category: "Professional Services",
    rating: 4.2,
    totalVotes: 1432
  }
];
