import { Tool } from "@/types/tools";
import { 
  Palette, Camera, Music, Brush, Pen, 
  Film, Mic, Video, Heart, Star,
  Sparkles, Image as ImageIcon, Paintbrush
} from "lucide-react";

export const creativeServices: Tool[] = [
  {
    icon: Palette,
    title: "Graphic Designer GPT",
    description: "AI-powered graphic design assistant for creating logos, branding materials, and visual content with professional design principles.",
    emoji: "🎨",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://graphicdesignergpt.lovable.app/?via=aiwebtools",
    tags: ["graphic design", "logos", "branding", "visual content", "design"],
    category: "Creative Services",
    rating: 4.3,
    totalVotes: 2876
  },
  {
    icon: Camera,
    title: "Photography Assistant GPT",
    description: "Professional photography AI assistant providing composition tips, lighting guidance, and photo editing recommendations.",
    emoji: "📸",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://photographygpt.lovable.app/?via=aiwebtools",
    tags: ["photography", "composition", "lighting", "photo editing", "visual arts"],
    category: "Creative Services",
    rating: 4.2,
    totalVotes: 2134
  },
  {
    icon: Music,
    title: "Music Producer GPT",
    description: "AI music production assistant for composers, producers, and musicians, offering composition guidance and production tips.",
    emoji: "🎵",
    color: "from-green-500 to-blue-600",
    directUrl: "https://musicproducergpt.lovable.app/?via=aiwebtools",
    tags: ["music production", "composition", "audio", "music", "sound design"],
    category: "Creative Services",
    rating: 4.1,
    totalVotes: 1987
  },
  {
    icon: Paintbrush,
    title: "Tattoo Designer GPT",
    description: "Specialized AI assistant for tattoo design creation, providing artistic concepts, design refinement, and tattoo art inspiration for artists and clients.",
    emoji: "🎭",
    color: "from-red-500 to-purple-600",
    directUrl: "https://tattoogpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=3dtGbNqXdPY",
    tags: ["tattoo design", "body art", "artistic concepts", "design creation", "tattoo art"],
    category: "Creative Services",
    rating: 4.2,
    totalVotes: 2543
  }
];
