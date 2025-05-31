
import { Tool } from "@/types/tools";
import { 
  Box, 
  Package, 
  Eye, 
  Layers, 
  Zap, 
  Sparkles,
  Monitor,
  Camera,
  Globe,
  Settings
} from "lucide-react";

export const threeDAndVisualizationTools: Tool[] = [
  {
    icon: Box,
    title: "Spline",
    description: "Design and collaborate on 3D web experiences in the browser. Create interactive 3D objects, animations, and scenes with real-time collaboration.",
    emoji: "📦",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://spline.design/",
    tags: ["3D design", "web 3D", "interactive", "collaboration", "browser-based"],
    category: "3D & Visualization Tools",
    rating: 4.6,
    totalVotes: 3456
  },
  {
    icon: Package,
    title: "Meshy Ai - TEXT TO 3D Generator",
    description: "AI-powered 3D model generator that creates high-quality 3D assets from text prompts or images. Perfect for game development and 3D visualization. Get 20% OFF with Promo CODE: AIWEBTOOLS",
    emoji: "🎲",
    color: "from-green-500 to-blue-600",
    directUrl: "https://www.meshy.ai/?via=aiwebtools",
    imageUrl: "https://cdn.discordapp.com/attachments/1150636600846450729/1377357834886582463/image.png?ex=6838abf1&is=68375a71&hm=8796d07ef297f42d59644ba648de8f8e892976312a6e04ec90242aea3c02c9ad&",
    tags: ["AI 3D generation", "text-to-3D", "image-to-3D", "game assets", "3D models", "meshy ai", "aiwebtools"],
    category: "3D & Visualization Tools",
    rating: 4.5,
    totalVotes: 2987
  },
  {
    icon: Sparkles,
    title: "Luma AI",
    description: "Capture and create photorealistic 3D models using neural radiance fields. Transform photos into stunning 3D experiences.",
    emoji: "✨",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://lumalabs.ai/",
    tags: ["photorealistic 3D", "neural radiance fields", "photo-to-3D", "3D capture", "NeRF"],
    category: "3D & Visualization Tools",
    rating: 4.7,
    totalVotes: 4123
  },
  {
    icon: Eye,
    title: "Polycam",
    description: "3D scanning app that turns photos into 3D models. Capture objects and spaces with your phone and create detailed 3D reconstructions.",
    emoji: "👁️",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://poly.cam/",
    tags: ["3D scanning", "photo-to-3D", "mobile scanning", "3D reconstruction", "photogrammetry"],
    category: "3D & Visualization Tools",
    rating: 4.4,
    totalVotes: 3234
  },
  {
    icon: Globe,
    title: "Blender",
    description: "Free and open-source 3D creation suite supporting modeling, rigging, animation, simulation, rendering, compositing, and motion tracking.",
    emoji: "🌐",
    color: "from-orange-500 to-red-600",
    directUrl: "https://www.blender.org/",
    tags: ["3D modeling", "animation", "rendering", "open source", "free", "professional"],
    category: "3D & Visualization Tools",
    rating: 4.8,
    totalVotes: 5678
  }
];
