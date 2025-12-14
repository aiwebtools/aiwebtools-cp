
import { Tool } from "@/types/tools";
import { 
  Box, 
  Scan, 
  Boxes, 
  Layers, 
  Aperture,
  Shapes
} from "lucide-react";

export const ai3DModelingTools: Tool[] = [
  {
    icon: Box,
    title: "Spline",
    description: "Browser-based 3D design tool with AI-powered features for creating interactive 3D experiences, animations, and web-ready models.",
    emoji: "📦",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://spline.design/?via=aiwebtools",
    tags: ["3D design", "web 3D", "interactive design", "3D animations", "browser-based", "3D modeling"],
    category: "3D & VISUALIZATION",
    rating: 4.6,
    totalVotes: 4567
  },
  {
    icon: Boxes,
    title: "Vectary",
    description: "AI-enhanced 3D and AR design platform for creating product mockups, interactive 3D content, and augmented reality experiences.",
    emoji: "🧊",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://www.vectary.com/?via=aiwebtools",
    tags: ["3D design", "AR design", "product mockups", "interactive 3D", "web platform", "3D modeling"],
    category: "3D & VISUALIZATION",
    rating: 4.5,
    totalVotes: 3876
  },
  {
    icon: Scan,
    title: "Meshcapade",
    description: "AI-powered digital human creation platform generating realistic 3D avatars and body models from photos or measurements.",
    emoji: "🔍",
    color: "from-green-500 to-teal-600",
    directUrl: "https://meshcapade.com/?via=aiwebtools",
    tags: ["digital humans", "3D avatars", "body modeling", "realistic models", "photo-to-3D", "3D generation"],
    category: "3D & VISUALIZATION",
    rating: 4.7,
    totalVotes: 3234
  },
  {
    icon: Aperture,
    title: "Polycam",
    description: "AI 3D scanning app using LiDAR and photogrammetry to capture real-world objects and spaces as 3D models on mobile devices.",
    emoji: "📸",
    color: "from-orange-500 to-red-600",
    directUrl: "https://poly.cam/?via=aiwebtools",
    tags: ["3D scanning", "LiDAR", "photogrammetry", "mobile scanning", "reality capture", "3D capture"],
    category: "3D & VISUALIZATION",
    rating: 4.6,
    totalVotes: 4321
  },
  {
    icon: Layers,
    title: "Kaedim3D",
    description: "AI tool converting 2D images into high-quality 3D models automatically, perfect for game assets and design workflows.",
    emoji: "🎨",
    color: "from-purple-600 to-pink-600",
    directUrl: "https://www.kaedim3d.com/?via=aiwebtools",
    tags: ["2D to 3D", "image to model", "game assets", "automatic conversion", "AI 3D modeling", "3D generation"],
    category: "3D & VISUALIZATION",
    rating: 4.4,
    totalVotes: 2987
  },
  {
    icon: Shapes,
    title: "Masterpiece Studio",
    description: "AI-powered 3D creative suite for generating, editing, and deploying 3D models with natural language prompts for game development.",
    emoji: "🎭",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://masterpiecestudio.com/?via=aiwebtools",
    tags: ["AI 3D generation", "game development", "natural language", "3D editing", "creative suite", "text-to-3D"],
    category: "3D & VISUALIZATION",
    rating: 4.5,
    totalVotes: 3456
  }
];
