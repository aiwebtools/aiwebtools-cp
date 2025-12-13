
import { Tool } from "@/types/tools";
import { 
  Video, 
  Image, 
  Sparkles, 
  Wand2, 
  Palette,
  Film,
  Camera,
  Zap
} from "lucide-react";

export const additionalVideoImageGenerators: Tool[] = [
  {
    icon: Video,
    title: "Runway ML",
    description: "Professional AI video editing and generation platform with Gen-2 text-to-video, motion tracking, and advanced AI tools for filmmakers.",
    emoji: "🎬",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://runwayml.com/?via=aiwebtools",
    tags: ["Image Generator", "video generation", "AI editing", "text-to-video", "motion tracking", "Gen-2"],
    category: "Video & Image Generators",
    rating: 4.8,
    totalVotes: 6789
  },
  {
    icon: Sparkles,
    title: "Pika Labs",
    description: "AI video generator creating stunning animations from text prompts with cinematic quality and creative control.",
    emoji: "✨",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://pika.art/?via=aiwebtools",
    tags: ["Image Generator", "video generation", "text-to-video", "animations", "cinematic AI", "creative video"],
    category: "Video & Image Generators",
    rating: 4.7,
    totalVotes: 5432
  },
  {
    icon: Image,
    title: "Leonardo AI",
    description: "Advanced AI image generation platform with consistent character creation, fine-tuned models, and professional-grade outputs.",
    emoji: "🎨",
    color: "from-orange-500 to-red-600",
    directUrl: "https://leonardo.ai/?via=aiwebtools",
    tags: ["Image Generator", "Illustration", "image generation", "consistent characters", "fine-tuned models", "AI art", "professional design"],
    category: "Video & Image Generators",
    rating: 4.7,
    totalVotes: 5678
  },
  {
    icon: Wand2,
    title: "Ideogram AI",
    description: "AI image generator excelling at text rendering within images, perfect for logos, posters, and graphic design with typography.",
    emoji: "🪄",
    color: "from-green-500 to-teal-600",
    directUrl: "https://ideogram.ai/?via=aiwebtools",
    tags: ["Image Generator", "Logo Design", "Graphic Design", "image generation", "text rendering", "typography AI", "logo design", "graphic design"],
    category: "Video & Image Generators",
    rating: 4.6,
    totalVotes: 4321
  },
  {
    icon: Film,
    title: "Kaiber AI",
    description: "AI video generation platform transforming images and music into stunning visual stories with artistic style transfer.",
    emoji: "🎥",
    color: "from-purple-600 to-pink-600",
    directUrl: "https://kaiber.ai/?via=aiwebtools",
    tags: ["AI Art", "video generation", "style transfer", "music videos", "visual stories", "artistic AI"],
    category: "Video & Image Generators",
    rating: 4.5,
    totalVotes: 3987
  },
  {
    icon: Camera,
    title: "Playground AI",
    description: "Fast and accessible AI image generator with free daily credits, diverse art styles, and intuitive creation interface.",
    emoji: "📷",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://playground.com/?via=aiwebtools",
    tags: ["Image Generator", "AI Art", "image generation", "free credits", "art styles", "accessible AI", "creative platform"],
    category: "Video & Image Generators",
    rating: 4.4,
    totalVotes: 4567
  },
  {
    icon: Palette,
    title: "Artbreeder",
    description: "AI image mixing and generation platform creating unique characters, landscapes, and portraits through collaborative breeding.",
    emoji: "🎨",
    color: "from-pink-500 to-red-600",
    directUrl: "https://www.artbreeder.com/?via=aiwebtools",
    tags: ["AI Art", "Avatar Creator", "image mixing", "character creation", "collaborative AI", "portrait generation", "breeding algorithm"],
    category: "Video & Image Generators",
    rating: 4.3,
    totalVotes: 3234
  },
  {
    icon: Zap,
    title: "Stable Video Diffusion",
    description: "Open-source video generation model by Stability AI creating high-quality video animations from single images.",
    emoji: "⚡",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://stability.ai/stable-video?via=aiwebtools",
    tags: ["Image Generator", "video generation", "open source", "image-to-video", "Stability AI", "animation"],
    category: "Video & Image Generators",
    rating: 4.6,
    totalVotes: 4123
  }
];
