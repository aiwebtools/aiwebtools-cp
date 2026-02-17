
import { Tool } from "@/types/tools";
import { 
  Share2, 
  BarChart3, 
  Calendar, 
  TrendingUp, 
  Users,
  MessageCircle
} from "lucide-react";

import bufferAiHero from "@/assets/tools/buffer-ai-hero.jpg";
import hootsuiteAiHero from "@/assets/tools/hootsuite-ai-hero.jpg";
import laterAiHero from "@/assets/tools/later-ai-hero.jpg";
import sproutSocialHero from "@/assets/tools/sprout-social-hero.jpg";
import latelyAiHero from "@/assets/tools/lately-ai-hero.jpg";
import sendibleHero from "@/assets/tools/sendible-hero.jpg";

export const aiSocialMediaTools: Tool[] = [
  {
    icon: Calendar,
    title: "Buffer AI",
    description: "AI-powered social media management platform for scheduling posts, analyzing performance, and engaging audiences across multiple platforms.",
    emoji: "📅",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://buffer.com/?via=aiwebtools",
    imageUrl: bufferAiHero,
    tags: ["Social Media Agent", "social media", "scheduling", "analytics", "content management", "multi-platform", "automation", "agent", "Social Media Marketing", "Analytics & Tracking", "Marketing Automation"],
    category: "AI Social Media Management Tools",
    rating: 4.5,
    totalVotes: 4567
  },
  {
    icon: Share2,
    title: "Hootsuite AI",
    description: "Comprehensive AI social media management tool with automated scheduling, sentiment analysis, and unified inbox management.",
    emoji: "🦉",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://www.hootsuite.com/?via=aiwebtools",
    imageUrl: hootsuiteAiHero,
    tags: ["Social Media Agent", "social media", "automation", "sentiment analysis", "scheduling", "team collaboration", "agent", "Social Media Marketing", "Analytics & Tracking", "Marketing Automation"],
    category: "AI Social Media Management Tools",
    rating: 4.4,
    totalVotes: 5123
  },
  {
    icon: TrendingUp,
    title: "Later AI",
    description: "AI-driven visual social media planner with smart scheduling, best time to post predictions, and Instagram analytics.",
    emoji: "📈",
    color: "from-pink-500 to-red-600",
    directUrl: "https://later.com/?via=aiwebtools",
    imageUrl: laterAiHero,
    tags: ["Social Media Agent", "visual planning", "Instagram", "scheduling", "analytics", "content calendar", "agent", "Social Media Marketing", "Analytics & Tracking"],
    category: "AI Social Media Management Tools",
    rating: 4.3,
    totalVotes: 3876
  },
  {
    icon: BarChart3,
    title: "Sprout Social",
    description: "Enterprise-grade AI social media management with advanced analytics, social listening, and customer engagement tools.",
    emoji: "📊",
    color: "from-green-500 to-teal-600",
    directUrl: "https://sproutsocial.com/?via=aiwebtools",
    imageUrl: sproutSocialHero,
    tags: ["Social Media Agent", "enterprise", "analytics", "social listening", "engagement", "reporting", "agent", "Social Media Marketing", "Analytics & Tracking", "Brand Management"],
    category: "AI Social Media Management Tools",
    rating: 4.6,
    totalVotes: 4321
  },
  {
    icon: MessageCircle,
    title: "Lately AI",
    description: "AI content writer that learns your brand voice and automatically generates social media posts from long-form content.",
    emoji: "💬",
    color: "from-orange-500 to-yellow-600",
    directUrl: "https://www.lately.ai/?via=aiwebtools",
    imageUrl: latelyAiHero,
    tags: ["Social Media Agent", "content generation", "brand voice", "automation", "social posts", "AI writing", "agent", "Social Media Marketing", "Content Marketing", "Brand Management"],
    category: "AI Social Media Management Tools",
    rating: 4.2,
    totalVotes: 2987
  },
  {
    icon: Users,
    title: "Sendible",
    description: "AI-powered social media management for agencies with client management, content suggestions, and performance tracking.",
    emoji: "👥",
    color: "from-indigo-500 to-purple-600",
    directUrl: "https://www.sendible.com/?via=aiwebtools",
    imageUrl: sendibleHero,
    tags: ["Social Media Agent", "agency tools", "client management", "automation", "reporting", "collaboration", "agent", "Social Media Marketing", "Analytics & Tracking", "Marketing Automation"],
    category: "AI Social Media Management Tools",
    rating: 4.4,
    totalVotes: 3234
  }
];
