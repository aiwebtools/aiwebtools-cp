
import { Tool } from "@/types/tools";
import { 
  Video, 
  Play, 
  Camera, 
  Film, 
  Monitor, 
  Scissors,
  Sparkles,
  Zap,
  Eye,
  Settings
} from "lucide-react";

export const aiVideoTools: Tool[] = [
  {
    icon: Video,
    title: "Runway ML",
    description: "AI-powered video editing and generation platform with text-to-video, image-to-video, and advanced video editing capabilities for creators and professionals.",
    emoji: "🎬",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://runwayml.com/",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=200&fit=crop",
    tags: ["text-to-video", "image-to-video", "video editing", "AI generation", "creative tools"],
    category: "Video & Animation Tools",
    rating: 4.6,
    totalVotes: 3456
  },
  {
    icon: Play,
    title: "Synthesia",
    description: "AI video generation platform that creates professional videos with AI avatars and voiceovers. Perfect for training, marketing, and educational content.",
    emoji: "🎭",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://www.synthesia.io/",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop",
    tags: ["AI avatars", "video generation", "voiceovers", "training videos", "marketing"],
    category: "Video & Animation Tools",
    rating: 4.5,
    totalVotes: 2987
  },
  {
    icon: Camera,
    title: "Luma Dream Machine",
    description: "Advanced AI video generation tool that creates high-quality videos from text prompts and images with realistic motion and effects.",
    emoji: "📹",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://lumalabs.ai/dream-machine",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=200&fit=crop",
    tags: ["text-to-video", "AI generation", "realistic motion", "high-quality", "dream machine"],
    category: "Video & Animation Tools",
    rating: 4.7,
    totalVotes: 4123
  }
];
