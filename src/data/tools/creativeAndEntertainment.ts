
import { Tool } from "@/types/tools";
import { 
  Palette, 
  Film, 
  Music, 
  Camera, 
  Gamepad2, 
  Mic, 
  Video, 
  Sparkles, 
  Headphones, 
  Play, 
  Star, 
  Heart, 
  Zap, 
  Globe, 
  Users, 
  Award,
  Coffee,
  Lightbulb
} from "lucide-react";

import gimpHero from "@/assets/tools/gimp-hero.jpg";

export const creativeAndEntertainment: Tool[] = [
  {
    icon: Palette,
    title: "GIMP",
    description: "Free and open-source image editor with advanced features for photo retouching, image composition, and graphic design. High Quality Photo Manipulation",
    emoji: "🎨",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://www.gimp.org/",
    imageUrl: gimpHero,
    tags: ["image editing", "photo retouching", "graphic design", "open source", "free"],
    category: "Creative & Entertainment",
    rating: 4.5,
    totalVotes: 4567
  }
];
