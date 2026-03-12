import { Tool } from "@/types/tools";
import { Calendar, Workflow, Brain, UserSearch, Database, Eye } from "lucide-react";
import feedhiveHero from "@/assets/tools/feedhive-hero.jpg";
import relayAppHero from "@/assets/tools/relay-app-hero.jpg";
import obviouslyAiHero from "@/assets/tools/obviously-ai-hero.jpg";
import leadiqHero from "@/assets/tools/leadiq-hero.jpg";
import roseAiHero from "@/assets/tools/rose-ai-hero.jpg";
import perceptionAiHero from "@/assets/tools/perception-ai-hero.jpg";

export const nicheBatch2026: Tool[] = [
  {
    icon: Calendar,
    title: "FeedHive",
    description: "AI-powered social media scheduling and management platform that predicts optimal posting times, generates content ideas, and provides performance analytics across all major social channels.",
    emoji: "📱",
    color: "from-orange-500 to-pink-600",
    directUrl: "https://feedhive.com/?via=aiwebtools",
    imageUrl: feedhiveHero,
    tags: ["social media scheduler", "content calendar", "posting optimization", "social analytics", "AI scheduling", "social media management", "Marketing", "Social Networks"],
    category: "Marketing & Sales",
    rating: 4.5,
    totalVotes: 2345
  },
  {
    icon: Workflow,
    title: "Relay.app",
    description: "Modern automation platform that seamlessly blends AI-powered steps with human-in-the-loop decisions. Build workflows where AI handles the routine and humans approve the critical—ensuring quality without sacrificing speed.",
    emoji: "🔄",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://relay.app/?via=aiwebtools",
    imageUrl: relayAppHero,
    tags: ["workflow automation", "human-in-the-loop", "AI automation", "approval workflows", "business automation", "no-code automation", "Automation Agent", "agent"],
    category: "AI Agents",
    rating: 4.4,
    totalVotes: 1876
  },
  {
    icon: Brain,
    title: "Obviously AI",
    description: "No-code machine learning platform that lets anyone build predictive models without writing code. Predict customer churn, forecast sales, and make data-driven decisions with AI-powered analytics that work in minutes, not months.",
    emoji: "🔮",
    color: "from-purple-500 to-indigo-600",
    directUrl: "https://obviously.ai/?via=aiwebtools",
    imageUrl: obviouslyAiHero,
    tags: ["no-code ML", "predictive analytics", "machine learning", "customer churn", "sales forecasting", "data science", "AI predictions", "Data & Analytics"],
    category: "Data & Analytics",
    rating: 4.3,
    totalVotes: 1543
  },
  {
    icon: UserSearch,
    title: "LeadIQ",
    description: "AI-powered sales prospecting tool that captures, verifies, and enriches contact information in real-time. Find decision-makers, build targeted lead lists, and automate personalized outreach to close more deals faster.",
    emoji: "🎯",
    color: "from-green-500 to-teal-600",
    directUrl: "https://leadiq.com/?via=aiwebtools",
    imageUrl: leadiqHero,
    tags: ["lead prospecting", "contact verification", "sales intelligence", "B2B leads", "email finder", "sales automation", "Sales Agent", "agent", "Sales"],
    category: "Marketing & Sales",
    rating: 4.4,
    totalVotes: 2134
  },
  {
    icon: Database,
    title: "Rose AI",
    description: "An intelligent data platform that helps researchers, analysts, and businesses find, clean, and visualize economic and market data. Rose AI transforms complex datasets into actionable insights with AI-powered search and analysis.",
    emoji: "🌹",
    color: "from-rose-500 to-red-600",
    directUrl: "https://rose.ai/?via=aiwebtools",
    imageUrl: roseAiHero,
    tags: ["data platform", "economic data", "market research", "data visualization", "AI analytics", "dataset discovery", "Data & Analytics", "Research"],
    category: "Data & Analytics",
    rating: 4.3,
    totalVotes: 987
  },
  {
    icon: Eye,
    title: "Perception AI",
    description: "AI-powered color palette generator and design intelligence platform using color psychology research. Create stunning color schemes instantly, analyze existing palettes for emotional impact, and receive AI recommendations to enhance your creative designs and branding.",
    emoji: "👁️",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://perception.io/?via=aiwebtools",
    imageUrl: perceptionAiHero,
    tags: ["color palette", "color psychology", "design AI", "branding", "creative tools", "color generator", "Image & Design Tools"],
    category: "Image & Design Tools",
    rating: 4.2,
    totalVotes: 876
  }
];
