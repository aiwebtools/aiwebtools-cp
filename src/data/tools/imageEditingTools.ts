
import { Tool } from "@/types/tools";
import { 
  ImageIcon, Wand2, Scissors, Edit, Crop, Filter, Eye
} from "lucide-react";

export const imageEditingTools: Tool[] = [
  {
    icon: ImageIcon,
    title: "Deep Image AI",
    description: "Enhance and upscale images with AI-powered resolution enhancement.",
    emoji: "🖼️",
    color: "from-green-500 to-blue-500",
    directUrl: "https://deepimage.ai/?via=aiwebtools",
    imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=300&fit=crop",
    tags: ["image enhancement", "upscaling", "ai photo editing"],
    category: "Image & Design",
    rating: 4.3,
    totalVotes: 3876
  },
  {
    icon: Wand2,
    title: "Fotor AI Photo Editor",
    description: "Edit photos with AI-powered tools for retouching, effects, and enhancements.",
    emoji: "🪄",
    color: "from-cyan-500 to-blue-500",
    directUrl: "https://www.fotor.com/features/ai-photo-editor/?via=aiwebtools",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=300&fit=crop",
    tags: ["ai photo editing", "photo retouching", "ai effects"],
    category: "Image & Design",
    rating: 4.1,
    totalVotes: 3210
  },
  {
    icon: Scissors,
    title: "Remove.bg",
    description: "Automatically remove image backgrounds with AI-powered precision.",
    emoji: "✂️",
    color: "from-red-500 to-orange-500",
    directUrl: "https://www.remove.bg/?via=aiwebtools",
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=300&fit=crop",
    tags: ["background removal", "image editing", "ai image processing"],
    category: "Image & Design",
    rating: 4.6,
    totalVotes: 4876
  },
  {
    icon: Edit,
    title: " Vance AI",
    description: "Enhance, upscale, and edit images with a variety of AI-powered tools.",
    emoji: "✏️",
    color: "from-blue-500 to-cyan-500",
    directUrl: "https://vanceai.com/?via=aiwebtools",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=300&fit=crop",
    tags: ["image enhancement", "upscaling", "ai photo editor"],
    category: "Image & Design",
    rating: 4.3,
    totalVotes: 3654
  },
  {
    icon: Filter,
    title: "Hotpot AI",
    description: "Access a suite of AI tools for graphic design, image editing, and AI art generation.",
    emoji: "🔥",
    color: "from-orange-500 to-red-500",
    directUrl: "https://hotpot.ai/?via=aiwebtools",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=300&fit=crop",
    tags: ["graphic design", "ai image editing", "ai art generator"],
    category: "Image & Design",
    rating: 4.1,
    totalVotes: 3123
  },
  {
    icon: Eye,
    title: "Zyro AI Image Upscaler",
    description: "Upscale images and enhance details with this free AI-powered tool.",
    emoji: "👁️",
    color: "from-pink-500 to-blue-500",
    directUrl: "https://zyro.com/ai/image-upscaler?via=aiwebtools",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=300&fit=crop",
    tags: ["image upscaler", "ai image enhancement", "free ai tools"],
    category: "Image & Design",
    rating: 4.0,
    totalVotes: 2890
  }
];
