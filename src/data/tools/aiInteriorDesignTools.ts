
import { Tool } from "@/types/tools";
import { 
  Home, 
  Palette, 
  Layout, 
  Sparkles, 
  Box,
  Sofa
} from "lucide-react";

import decorillaHero from "@/assets/tools/decorilla-hero.jpg";
import planner5dHero from "@/assets/tools/planner-5d-hero.jpg";
import homestylerHero from "@/assets/tools/homestyler-hero.jpg";
import coohomHero from "@/assets/tools/coohom-hero.jpg";
import roomvoHero from "@/assets/tools/roomvo-hero.jpg";


export const aiInteriorDesignTools: Tool[] = [
  {
    icon: Palette,
    title: "Decorilla AI",
    description: "AI-powered interior design service matching you with professional designers and smart room visualization tools.",
    emoji: "🎨",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://www.decorilla.com/?via=aiwebtools",
    imageUrl: decorillaHero,
    tags: ["Interior Design", "interior design", "room design", "professional designers", "visualization", "home decor"],
    category: "AI Interior Design Tools",
    rating: 4.5,
    totalVotes: 2876
  },
  {
    icon: Layout,
    title: "Planner 5D",
    description: "AI-assisted home design app for creating realistic 2D and 3D floor plans and interior designs.",
    emoji: "📐",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://planner5d.com/?via=aiwebtools",
    imageUrl: planner5dHero,
    tags: ["Interior Design", "3D Modeling", "floor plans", "3D design", "home planning", "room design", "visualization"],
    category: "AI Interior Design Tools",
    rating: 4.4,
    totalVotes: 3456
  },
  {
    icon: Home,
    title: "Homestyler",
    description: "AI-powered interior design platform with smart furniture placement and realistic 3D rendering.",
    emoji: "🏡",
    color: "from-green-500 to-teal-600",
    directUrl: "https://www.homestyler.com/?via=aiwebtools",
    imageUrl: homestylerHero,
    tags: ["Interior Design", "3D Modeling", "3D rendering", "furniture placement", "interior design", "room visualization", "home design"],
    category: "AI Interior Design Tools",
    rating: 4.3,
    totalVotes: 2987
  },
  {
    icon: Box,
    title: "Coohom",
    description: "Professional AI interior design software with photorealistic rendering and extensive furniture library.",
    emoji: "📦",
    color: "from-orange-500 to-red-600",
    directUrl: "https://www.coohom.com/?via=aiwebtools",
    imageUrl: coohomHero,
    tags: ["Interior Design", "3D Modeling", "professional design", "photorealistic", "furniture library", "3D visualization", "design software"],
    category: "AI Interior Design Tools",
    rating: 4.5,
    totalVotes: 2345
  },
  {
    icon: Sparkles,
    title: "Roomvo",
    description: "AI-powered room visualization tool for instantly seeing flooring, paint, and decor in your space.",
    emoji: "✨",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://www.roomvo.com/?via=aiwebtools",
    imageUrl: roomvoHero,
    tags: ["Interior Design", "room visualization", "flooring design", "paint colors", "virtual staging", "instant visualization"],
    category: "AI Interior Design Tools",
    rating: 4.2,
    totalVotes: 1876
  }
];
