
import { Tool } from "@/types/tools";
import { 
  Calendar, 
  Share2,
  TrendingUp,
  Users,
  Heart,
  MessageCircle,
  Music
} from "lucide-react";

import socialMediaSonicHero from "@/assets/tools/socialmedia-sonic-generated-hero.jpg";

export const socialMediaTools: Tool[] = [
  {
    icon: Music,
    title: "SocialMedia Sonic",
    description: "Advanced social media management platform that amplifies your online presence with AI-powered content creation, scheduling, and analytics. SocialMedia Sonic helps businesses and creators optimize their social media strategy across multiple platforms with intelligent automation and performance insights.",
    emoji: "🎵",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://socialsonic.com/?ref=aiwebtoolss",
    imageUrl: socialMediaSonicHero,
    tags: ["social media management", "content creation", "AI-powered", "scheduling", "analytics", "automation"],
    category: "Social Media & Marketing",
    rating: 4.6,
    totalVotes: 2345
  }
  // This category now contains verified AI-powered social media tools
];
