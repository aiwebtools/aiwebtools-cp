
import { Tool } from "@/types/tools";
import { 
  Image, 
  Palette, 
  Wand2, 
  Sparkles, 
  Camera, 
  Brush, 
  Zap,
  Eye,
  Layers,
  Star
} from "lucide-react";

export const coreImageGenerators: Tool[] = [
  {
    icon: Image,
    title: "DALL·E 3",
    description: "Advanced AI tool by OpenAI transforming text into high-precision images. Integrated with ChatGPT for collaborative creativity, emphasizing safety and responsible content generation.",
    emoji: "🎨",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://www.bing.com/create",
    tags: ["text-to-image", "OpenAI", "image generation", "creative AI", "visual content"],
    category: "Core Image Generators",
    rating: 4.8,
    totalVotes: 6543
  },
  {
    icon: Sparkles,
    title: "HotPot.ai",
    description: "Innovative creative tool powered by AI for generating stunning graphics, images, and written content. Transform text into art, create personalized headshots, upscale images, and remove backgrounds.",
    emoji: "🔥",
    color: "from-orange-500 to-red-600",
    directUrl: "https://hotpot.ai/",
    tags: ["creative AI", "graphics generation", "image editing", "content creation", "design tools"],
    category: "Core Image Generators",
    rating: 4.4,
    totalVotes: 3876
  }
];
