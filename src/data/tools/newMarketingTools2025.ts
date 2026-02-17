import { Tool } from "@/types/tools";
import { 
  TrendingUp, Megaphone, Users, MessageSquare, 
  BarChart3, Target, Mail, Search, Video, 
  Smartphone, Bot, Globe, Zap, Star
} from "lucide-react";

import koreAiHero from "@/assets/tools/kore-ai-hero.jpg";
import ocoyaHero from "@/assets/tools/ocoya-hero.jpg";
import surferAiHero from "@/assets/tools/surfer-ai-hero.jpg";
import tweethunterHero from "@/assets/tools/tweethunter-hero.jpg";

export const newMarketingTools2025: Tool[] = [
  {
    icon: TrendingUp,
    title: "Kore.ai",
    description: "Enterprise conversational AI platform for building chat and voice bots for customer service, HR, and IT automation.",
    emoji: "🤖",
    color: "from-blue-600 to-purple-600",
    directUrl: "https://www.kore.ai/?via=aiwebtools",
    imageUrl: koreAiHero,
    tags: ["AI", "Chatbots", "Enterprise", "Automation", "Marketing Automation", "CRM & Sales"],
    category: "MARKETING & SALES SOLUTIONS",
    rating: 4.5,
    totalVotes: 2840
  },
  {
    icon: Megaphone,
    title: "Ocoya",
    description: "Social media marketing platform that generates captions, schedules posts, and creates content with AI assistance.",
    emoji: "📱",
    color: "from-pink-500 to-rose-500",
    directUrl: "https://ocoya.com/?via=aiwebtools",
    imageUrl: ocoyaHero,
    tags: ["Social Media", "Content Creation", "Marketing", "Scheduling", "Social Media Marketing", "Content Marketing"],
    category: "MARKETING & SALES SOLUTIONS",
    rating: 4.3,
    totalVotes: 1920
  },
  {
    icon: MessageSquare,
    title: "OwlyWriter",
    description: "Hootsuite's AI-powered content generator that creates engaging social media posts and captions.",
    emoji: "✍️",
    color: "from-orange-500 to-red-500",
    directUrl: "https://blog.hootsuite.com/owlywriter-ai/?via=aiwebtools",
    tags: ["Content Writing", "Social Media", "AI Writing", "Captions", "Social Media Marketing", "Content Marketing"],
    category: "MARKETING & SALES SOLUTIONS",
    rating: 4.2,
    totalVotes: 1650
  },
  {
    icon: Bot,
    title: "Quickchat",
    description: "Customer support chatbot that uses GPT-based models to provide automated customer service solutions.",
    emoji: "💬",
    color: "from-green-500 to-teal-500",
    directUrl: "https://quickchat.ai/?via=aiwebtools",
    tags: ["Customer Support", "Chatbot", "AI", "Automation", "CRM & Sales", "Marketing Automation"],
    category: "MARKETING & SALES SOLUTIONS",
    rating: 4.4,
    totalVotes: 2180
  },
  {
    icon: BarChart3,
    title: "Rilla Voice",
    description: "Customer conversation analytics tool that analyzes sales calls and customer interactions for insights.",
    emoji: "📊",
    color: "from-indigo-500 to-blue-500",
    directUrl: "https://www.rillavoice.com/?via=aiwebtools",
    tags: ["Sales Analytics", "Voice Analysis", "Customer Insights", "AI", "Analytics & Tracking", "Sales Enablement"],
    category: "MARKETING & SALES SOLUTIONS",
    rating: 4.6,
    totalVotes: 1340
  },
  {
    icon: Zap,
    title: "RoboRespo",
    description: "Customer service automation solution that generates personalized responses and handles support tickets.",
    emoji: "⚡",
    color: "from-yellow-500 to-orange-500",
    directUrl: "https://roboresponse.ai/?via=aiwebtools",
    tags: ["Customer Service", "Automation", "Support", "AI Responses", "Marketing Automation", "CRM & Sales"],
    category: "MARKETING & SALES SOLUTIONS",
    rating: 4.1,
    totalVotes: 980
  },
  {
    icon: Search,
    title: "Surfer AI",
    description: "SEO content generator that produces keyword-optimized articles and blog posts for better search rankings.",
    emoji: "🔍",
    color: "from-cyan-500 to-blue-500",
    directUrl: "https://surferseo.com/ai/?via=aiwebtools",
    imageUrl: surferAiHero,
    tags: ["SEO", "Content Writing", "Optimization", "Marketing", "SEO Tools", "Content Marketing"],
    category: "MARKETING & SALES SOLUTIONS",
    rating: 4.7,
    totalVotes: 3240
  },
  {
    icon: Target,
    title: "Tweet Hunter",
    description: "Platform that suggests personalized tweet ideas and helps grow Twitter presence with AI-powered content.",
    emoji: "🐦",
    color: "from-sky-500 to-blue-500",
    directUrl: "https://tweethunter.io/?via=aiwebtools",
    imageUrl: tweethunterHero,
    tags: ["Twitter", "Social Media", "Content Ideas", "Growth", "Social Media Marketing", "Content Marketing"],
    category: "MARKETING & SALES SOLUTIONS",
    rating: 4.4,
    totalVotes: 2150
  },
  {
    icon: Globe,
    title: "Unbounce",
    description: "Marketing copy generator that produces landing page copy and marketing materials for better conversions.",
    emoji: "🌐",
    color: "from-purple-500 to-pink-500",
    directUrl: "https://unbounce.com/smart-copy/?via=aiwebtools",
    tags: ["Landing Pages", "Copywriting", "Marketing", "Conversion", "Conversion Optimization", "Content Marketing"],
    category: "MARKETING & SALES SOLUTIONS",
    rating: 4.5,
    totalVotes: 2850
  }
];
