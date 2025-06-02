
import { Tool } from "@/types/tools";
import { 
  DollarSign, TrendingUp, BarChart3, Calculator, PieChart,
  CreditCard, Wallet, Building, Target, Zap
} from "lucide-react";

export const aiFinanceTools: Tool[] = [
  {
    icon: TrendingUp,
    title: "Kensho",
    description: "AI analytics platform for financial markets providing real-time insights and predictive analytics for investment decisions.",
    emoji: "📈",
    color: "from-green-500 to-blue-600",
    directUrl: "https://www.kensho.com/?via=aiwebtools",
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
    tags: ["market intelligence", "investment research", "document analysis", "financial data"],
    category: "Professional Services",
    rating: 4.5,
    totalVotes: 1987
  },
  {
    icon: Wallet,
    title: "Mint (Intuit)",
    description: "AI-powered personal finance app that categorizes transactions, tracks spending, and provides budget recommendations.",
    emoji: "💰",
    color: "from-green-500 to-cyan-600",
    directUrl: "https://mint.intuit.com/?via=aiwebtools",
    tags: ["personal finance", "budgeting", "expense tracking", "financial planning"],
    category: "Professional Services",
    rating: 4.2,
    totalVotes: 1432
  },
  {
    icon: Building,
    title: "Zest AI",
    description: "AI platform for credit underwriting that helps lenders make more accurate and fair lending decisions.",
    emoji: "🏢",
    color: "from-orange-500 to-red-600",
    directUrl: "https://www.zest.ai/?via=aiwebtools",
    tags: ["credit scoring", "lending", "underwriting", "financial AI"],
    category: "Professional Services",
    rating: 4.4,
    totalVotes: 1876
  }
];
