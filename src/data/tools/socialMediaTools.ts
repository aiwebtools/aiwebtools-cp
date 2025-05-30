
import { Tool } from "@/types/tools";
import { 
  Instagram, 
  Twitter, 
  Facebook, 
  Youtube, 
  Calendar, 
  Share2,
  TrendingUp,
  Users,
  Heart,
  MessageCircle
} from "lucide-react";

export const socialMediaTools: Tool[] = [
  {
    icon: Instagram,
    title: "Buffer",
    description: "Social media management platform for scheduling posts, analyzing performance, and managing multiple social accounts across platforms.",
    emoji: "📱",
    color: "from-pink-500 to-purple-600",
    directUrl: "https://buffer.com/",
    tags: ["social media", "scheduling", "analytics", "management", "marketing"],
    category: "Social Media & Marketing",
    rating: 4.5,
    totalVotes: 3456
  },
  {
    icon: Calendar,
    title: "Later",
    description: "Visual social media scheduler with drag-and-drop calendar, content planning, and analytics for Instagram, Facebook, Twitter, and more.",
    emoji: "📅",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://later.com/",
    tags: ["social scheduling", "visual planning", "Instagram", "content calendar"],
    category: "Social Media & Marketing",
    rating: 4.4,
    totalVotes: 2987
  },
  {
    icon: TrendingUp,
    title: "Hootsuite",
    description: "Comprehensive social media management platform with scheduling, monitoring, analytics, and team collaboration features.",
    emoji: "🦉",
    color: "from-orange-500 to-yellow-600",
    directUrl: "https://hootsuite.com/",
    tags: ["social media", "management", "analytics", "team collaboration", "monitoring"],
    category: "Social Media & Marketing",
    rating: 4.3,
    totalVotes: 4123
  },
  {
    icon: Share2,
    title: "SocialBee",
    description: "Social media management tool with content categorization, recycling, and audience targeting features for better engagement.",
    emoji: "🐝",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://socialbee.io/",
    tags: ["content recycling", "categorization", "audience targeting", "engagement"],
    category: "Social Media & Marketing",
    rating: 4.2,
    totalVotes: 2345
  },
  {
    icon: Users,
    title: "Sprout Social",
    description: "Social media management and optimization platform with advanced analytics, listening, and customer care features.",
    emoji: "🌱",
    color: "from-green-500 to-blue-600",
    directUrl: "https://sproutsocial.com/",
    tags: ["social listening", "customer care", "analytics", "optimization"],
    category: "Social Media & Marketing",
    rating: 4.6,
    totalVotes: 3789
  }
];
