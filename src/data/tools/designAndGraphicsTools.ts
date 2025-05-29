
import { Tool } from "@/types/tools";
import { 
  Brush, PenTool, Crop, Layers, Camera, Palette
} from "lucide-react";

export const designAndGraphicsTools: Tool[] = [
  {
    icon: Camera,
    title: "Product Photography GPT",
    description: "AI-powered product photography tool that creates stunning product images and commercial photography with professional lighting and composition.",
    emoji: "📸",
    color: "from-blue-500 to-purple-500",
    directUrl: "https://productphotographygpt.lovable.app/?via=aiwebtools",
    tags: ["product photography", "commercial photography", "ai photography", "product images"],
    category: "Image & Design",
    rating: 4.4,
    totalVotes: 2876
  },
  {
    icon: Palette,
    title: "Ad & Logo Maker GPT",
    description: "AI-powered advertising and logo creation tool that generates professional ads and brand logos with customizable designs and marketing-focused layouts.",
    emoji: "🎨",
    color: "from-purple-500 to-pink-500",
    directUrl: "https://adandlogomakergpt.lovable.app/?via=aiwebtools",
    tags: ["logo design", "advertising", "brand design", "marketing materials"],
    category: "Image & Design",
    rating: 4.3,
    totalVotes: 3124
  },
  {
    icon: Brush,
    title: "RunwayML Gen-2",
    description: "Generate videos and images from text prompts using generative AI.",
    emoji: "🎬",
    color: "from-pink-500 to-purple-500",
    directUrl: "https://runwayml.com/gen2/?via=aiwebtools",
    tags: ["video generation", "image generation", "ai video editing"],
    category: "Image & Design",
    rating: 4.5,
    totalVotes: 4567
  },
  {
    icon: Camera,
    title: "Lensa AI",
    description: "Create AI-generated avatars and portraits with artistic styles.",
    emoji: "📸",
    color: "from-yellow-500 to-orange-500",
    directUrl: "https://lensa-ai.com/?via=aiwebtools",
    tags: ["ai avatars", "portraits", "ai photo editing"],
    category: "Image & Design",
    rating: 4.2,
    totalVotes: 3456
  },
  {
    icon: PenTool,
    title: "AutoDraw",
    description: "Create freehand drawings and have them converted into polished illustrations with AI.",
    emoji: "✍️",
    color: "from-green-500 to-yellow-500",
    directUrl: "https://www.autodraw.com/?via=aiwebtools",
    tags: ["ai drawing", "illustration", "freehand drawing"],
    category: "Image & Design",
    rating: 4.0,
    totalVotes: 2987
  },
  {
    icon: Crop,
    title: "Simplified AI Image Generator",
    description: "Generate unique images and graphics for marketing and content creation.",
    emoji: "🌁",
    color: "from-purple-500 to-pink-500",
    directUrl: "https://simplified.com/ai-image-generator/?via=aiwebtools",
    tags: ["ai image generator", "marketing graphics", "content creation"],
    category: "Image & Design",
    rating: 4.2,
    totalVotes: 3345
  },
  {
    icon: Layers,
    title: "Icons8 Lunacy",
    description: "A free graphic design software with AI-powered tools and a vast library of assets.",
    emoji: "🌈",
    color: "from-yellow-500 to-green-500",
    directUrl: "https://icons8.com/lunacy?via=aiwebtools",
    tags: ["graphic design software", "ai design tools", "design assets"],
    category: "Image & Design",
    rating: 4.5,
    totalVotes: 4456
  }
];
