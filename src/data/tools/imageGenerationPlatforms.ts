
import { Tool } from "@/types/tools";
import { 
  Brain, Palette, Users
} from "lucide-react";

export const imageGenerationPlatforms: Tool[] = [
  {
    icon: Brain,
    title: "Midjourney – Image Generation Platform",
    description: "Leading AI image generation platform for creating stunning artwork, illustrations, and creative visuals using advanced AI technology.",
    emoji: "🎨",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://www.midjourney.com/home",
    videoUrl: "https://www.youtube.com/watch?v=5deYUaqwreo",
    tags: ["image generation", "artwork", "AI art", "creative", "visual design"],
    category: "Image Generation Platforms",
    rating: 4.6,
    totalVotes: 5234
  },
  {
    icon: Palette,
    title: "Ideogram – Image Generator",
    description: "AI-powered image generation platform specializing in high-quality visual content creation with advanced artistic capabilities.",
    emoji: "🖼️",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://ideogram.ai/",
    videoUrl: "https://www.youtube.com/watch?v=USSpwbe3Rxk",
    tags: ["image generation", "visual content", "artistic", "AI art", "creative"],
    category: "Image Generation Platforms",
    rating: 4.4,
    totalVotes: 3456
  },
  {
    icon: Users,
    title: "BHUMAN – Avatars Creation For Outreach",
    description: "AI-powered avatar creation platform for personalized video outreach, sales, and marketing communications with realistic digital personas.",
    emoji: "👤",
    color: "from-orange-500 to-red-600",
    directUrl: "https://app.bhuman.ai/?ref=zde0otr",
    videoUrl: "https://www.youtube.com/watch?v=W1WHD9IhGhs",
    tags: ["avatar creation", "video outreach", "personalized", "marketing", "digital personas"],
    category: "Image Generation Platforms",
    rating: 4.2,
    totalVotes: 2987
  }
];
