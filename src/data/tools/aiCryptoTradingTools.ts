
import { Tool } from "@/types/tools";
import { 
  TrendingUp, 
  Bot, 
  Zap, 
  Brain, 
  Rocket,
  Coins,
  LineChart
} from "lucide-react";

import threeCommasHero from "@/assets/tools/3commas-hero.jpg";
import cryptohopperHero from "@/assets/tools/cryptohopper-hero.jpg";
import pionexHero from "@/assets/tools/pionex-hero.jpg";
import tradesantaHero from "@/assets/tools/tradesanta-hero.jpg";
import bitsgapHero from "@/assets/tools/bitsgap-hero.jpg";
import nansenHero from "@/assets/tools/nansen-hero.jpg";

export const aiCryptoTradingTools: Tool[] = [
  {
    icon: Bot,
    title: "3Commas",
    description: "Advanced crypto trading bot platform with AI-powered strategies, smart trading, and portfolio management across multiple exchanges.",
    emoji: "🤖",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://3commas.io/?via=aiwebtools",
    imageUrl: threeCommasHero,
    tags: ["crypto trading", "trading bots", "portfolio management", "automated trading", "DCA bots"],
    category: "AI Crypto & Trading Tools",
    rating: 4.5,
    totalVotes: 4567
  },
  {
    icon: Brain,
    title: "Cryptohopper",
    description: "AI-powered crypto trading bot with automated strategies, market making, and social trading features.",
    emoji: "🧠",
    color: "from-green-500 to-teal-600",
    directUrl: "https://www.cryptohopper.com/?via=aiwebtools",
    imageUrl: cryptohopperHero,
    tags: ["crypto bot", "automated trading", "trading strategies", "market making", "social trading"],
    category: "AI Crypto & Trading Tools",
    rating: 4.4,
    totalVotes: 3876
  },
  {
    icon: Zap,
    title: "Pionex",
    description: "Exchange with built-in AI trading bots offering 16 free trading strategies including grid and arbitrage bots.",
    emoji: "⚡",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://www.pionex.com/?via=aiwebtools",
    imageUrl: pionexHero,
    tags: ["crypto exchange", "free bots", "grid trading", "arbitrage", "automated strategies"],
    category: "AI Crypto & Trading Tools",
    rating: 4.3,
    totalVotes: 3234
  },
  {
    icon: TrendingUp,
    title: "TradeSanta",
    description: "Cloud-based crypto trading bot for automated long and short strategies with technical indicator support.",
    emoji: "📈",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://tradesanta.com/?via=aiwebtools",
    imageUrl: tradesantaHero,
    tags: ["trading automation", "technical indicators", "long/short trading", "cloud trading", "crypto bot"],
    category: "AI Crypto & Trading Tools",
    rating: 4.2,
    totalVotes: 2987
  },
  {
    icon: LineChart,
    title: "Bitsgap",
    description: "AI crypto trading platform with smart trading terminal, automated bots, and portfolio tracking across exchanges.",
    emoji: "📊",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://bitsgap.com/?via=aiwebtools",
    imageUrl: bitsgapHero,
    tags: ["trading terminal", "portfolio tracking", "crypto bots", "arbitrage", "unified trading"],
    category: "AI Crypto & Trading Tools",
    rating: 4.4,
    totalVotes: 3456
  },
  {
    icon: Rocket,
    title: "pump.fun",
    description: "Decentralized platform for creating and launching meme coins on Solana with fair launch mechanisms and no presale.",
    emoji: "🚀",
    color: "from-orange-500 to-red-600",
    directUrl: "https://pump.fun/?via=aiwebtools",
    imageUrl: "/src/assets/tools/pumpfun-hero.png",
    tags: ["meme coins", "token launch", "Solana", "DeFi", "fair launch", "decentralized"],
    category: "AI Crypto & Trading Tools",
    rating: 4.1,
    totalVotes: 2345
  },
  {
    icon: Coins,
    title: "Nansen",
    description: "AI-powered blockchain analytics platform providing on-chain insights, smart money tracking, and DeFi analytics.",
    emoji: "🪙",
    color: "from-indigo-500 to-purple-600",
    directUrl: "https://www.nansen.ai/?via=aiwebtools",
    imageUrl: nansenHero,
    tags: ["blockchain analytics", "on-chain data", "smart money", "DeFi analytics", "crypto intelligence"],
    category: "AI Crypto & Trading Tools",
    rating: 4.6,
    totalVotes: 4123
  }
];
