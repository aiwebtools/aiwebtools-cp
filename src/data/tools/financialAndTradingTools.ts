
import { Tool } from "@/types/tools";
import { 
  DollarSign, 
  TrendingUp, 
  BarChart3, 
  LineChart, 
  PieChart, 
  Calculator, 
  Target, 
  Zap, 
  Bot, 
  Brain, 
  Building,
  Atom
} from "lucide-react";

import forexEaHero from "@/assets/tools/forex-ea-hero.jpg";
import dwaveHero from "@/assets/tools/dwave-hero.jpg";

export const financialAndTradingTools: Tool[] = [
  {
    icon: DollarSign,
    title: "FinChat.io",
    description: "AI platform for financial investors and stock traders with ChatGPT-based capabilities. Provides verified data on over 50,000 public companies for informed market decisions.",
    emoji: "📊",
    color: "from-green-500 to-yellow-600",
    directUrl: "https://finchat.io/",
    imageUrl: "/src/assets/tools/finchat-hero.png",
    tags: ["financial AI", "stock trading", "market data", "investors", "public companies", "financial analysis", "Financial Analytics", "Trading Agent"],
    category: "Financial & Trading Tools",
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
    imageUrl: "/src/assets/tools/chaingpt-hero.png",
    tags: ["blockchain", "cryptocurrency", "smart contracts", "trading", "market analysis", "DeFi", "Financial Analytics", "Trading Agent"],
    category: "Financial & Trading Tools",
    rating: 4.1,
    totalVotes: 2345
  },
  {
    icon: Bot,
    title: "Buy Forex Expert Advisor Online",
    description: "Comprehensive solution for Forex traders, providing a range of advanced Forex Expert Advisors (EAs) powered by artificial intelligence. These EAs are designed to capitalize on the dynamic and highly liquid Forex market, with a daily turnover exceeding $6 trillion.",
    emoji: "💹",
    color: "from-green-500 to-blue-600",
    directUrl: "https://www.buyforexeaonline.com/",
    imageUrl: forexEaHero,
    tags: ["Forex trading", "Expert Advisors", "AI-powered", "$6T daily market", "risk management", "Automation Agent", "Trading Agent"],
    category: "Financial & Trading Tools",
    rating: 4.2,
    totalVotes: 2654
  },
  {
    icon: Atom,
    title: "D-Wave",
    description: "Leading quantum computing company that is actively driving the adoption of quantum computing solutions in practical business applications. Their quantum computing systems and services are designed to help technology and business leaders harness the power of quantum computing to solve complex problems.",
    emoji: "⚛️",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://www.dwavesys.com/",
    imageUrl: dwaveHero,
    tags: ["quantum computing", "Advantage system", "Leap solver", "enterprise solutions", "quantum ROI", "Predictive Analytics"],
    category: "Financial & Trading Tools",
    rating: 4.4,
    totalVotes: 3456
  }
];
