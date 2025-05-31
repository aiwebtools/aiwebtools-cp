
import { Tool } from "@/types/tools";
import { 
  Play, 
  Music, 
  Gamepad2, 
  Tv, 
  Radio, 
  Camera, 
  Film,
  Headphones,
  Star,
  Crown,
  Sparkles,
  Heart
} from "lucide-react";

export const entertainmentMediaTools: Tool[] = [
  {
    icon: Film,
    title: "TikTok For You Page",
    description: "AI algorithm that curates personalized video content based on user interactions, preferences, and engagement patterns.",
    emoji: "🎬",
    color: "from-black to-pink-500",
    directUrl: "https://www.tiktok.com/",
    tags: ["content curation", "personalized videos", "TikTok", "social media", "engagement"],
    category: "Entertainment & Media Tools",
    rating: 4.4,
    totalVotes: 4321
  },
  {
    icon: Tv,
    title: "Amazon Prime Video X-Ray",
    description: "AI-powered feature that provides instant access to cast information, trivia, and behind-the-scenes content while watching.",
    emoji: "📺",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://www.primevideo.com/",
    tags: ["content enhancement", "cast information", "trivia", "Amazon Prime", "viewing experience"],
    category: "Entertainment & Media Tools",
    rating: 4.1,
    totalVotes: 2654
  },
  {
    icon: Radio,
    title: "Pandora Music Genome",
    description: "AI music recommendation system that analyzes musical characteristics to create personalized radio stations and playlists.",
    emoji: "📻",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://www.pandora.com/",
    tags: ["music analysis", "personalized radio", "Music Genome", "Pandora", "recommendations"],
    category: "Entertainment & Media Tools",
    rating: 4.0,
    totalVotes: 2345
  },
  {
    icon: Star,
    title: "Discord AI Moderation",
    description: "AI-powered moderation tools for Discord servers including automated content filtering, spam detection, and community management.",
    emoji: "⭐",
    color: "from-indigo-500 to-purple-600",
    directUrl: "https://discord.com/",
    tags: ["community moderation", "content filtering", "spam detection", "Discord", "automated moderation"],
    category: "Entertainment & Media Tools",
    rating: 4.3,
    totalVotes: 3123
  },
  {
    icon: Heart,
    title: "Twitch AI Recommendations",
    description: "AI system that recommends live streams and content creators based on viewing history, game preferences, and community interactions.",
    emoji: "💜",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://www.twitch.tv/",
    tags: ["stream recommendations", "content discovery", "Twitch", "live streaming", "gaming"],
    category: "Entertainment & Media Tools",
    rating: 4.2,
    totalVotes: 2876
  }
];
