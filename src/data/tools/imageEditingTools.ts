
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
    directUrl: "https://deepimage.ai/",
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
    directUrl: "https://www.fotor.com/features/ai-photo-editor/",
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
    directUrl: "https://www.remove.bg/",
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
    directUrl: "https://vanceai.com/",
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
    directUrl: "https://hotpot.ai/",
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
    directUrl: "https://zyro.com/ai/image-upscaler",
    tags: ["image upscaler", "ai image enhancement", "free ai tools"],
    category: "Image & Design",
    rating: 4.0,
    totalVotes: 2890
  }
];
