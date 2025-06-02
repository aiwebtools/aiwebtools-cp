import { Tool } from "@/types/tools";
import { 
  Image, 
  Palette, 
  Paintbrush, 
  Camera, 
  Zap, 
  Sparkles,
  Eye,
  Layers,
  Wand2,
  Brush,
  Frame,
  Stars
} from "lucide-react";

export const aiImageGeneration: Tool[] = [
  {
    icon: Image,
    title: "DALL-E 3",
    description: "OpenAI's most advanced AI image generator that creates highly detailed, creative images from text descriptions with improved accuracy and artistic quality.",
    emoji: "🎨",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://openai.com/dall-e-3",
    tags: ["image generation", "text to image", "creative ai", "artistic", "detailed"],
    category: "AI Image Generation",
    rating: 4.8,
    totalVotes: 6234
  },
  {
    icon: Palette,
    title: "Midjourney",
    description: "Premier AI art generator known for creating stunning, artistic images with exceptional quality and unique aesthetic styles from text prompts.",
    emoji: "🎭",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://www.midjourney.com/",
    tags: ["ai art", "artistic images", "unique styles", "high quality", "creative"],
    category: "AI Image Generation",
    rating: 4.9,
    totalVotes: 8765
  },
  {
    icon: Paintbrush,
    title: "Stable Diffusion",
    description: "Open-source AI image generation model that creates high-quality images from text descriptions with extensive customization options.",
    emoji: "🖌️",
    color: "from-green-500 to-blue-600",
    directUrl: "https://stability.ai/",
    tags: ["open source", "customizable", "high quality", "text to image", "flexible"],
    category: "AI Image Generation",
    rating: 4.7,
    totalVotes: 5432
  },
  {
    icon: Camera,
    title: "Adobe Firefly",
    description: "Adobe's creative AI that generates images, text effects, and creative assets designed for commercial use with built-in copyright protection.",
    emoji: "📸",
    color: "from-red-500 to-orange-600",
    directUrl: "https://www.adobe.com/products/firefly.html",
    tags: ["commercial use", "text effects", "creative assets", "copyright safe", "professional"],
    category: "AI Image Generation",
    rating: 4.6,
    totalVotes: 4321
  },
  {
    icon: Zap,
    title: "Leonardo AI",
    description: "Powerful AI image generator with fine-tuned models for game assets, concept art, and character design with advanced control features.",
    emoji: "⚡",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://leonardo.ai/",
    tags: ["game assets", "concept art", "character design", "fine-tuned models", "advanced control"],
    category: "AI Image Generation",
    rating: 4.5,
    totalVotes: 3876
  },
  {
    icon: Sparkles,
    title: "Ideogram",
    description: "AI image generator specializing in creating images with accurate text rendering and typography integration for logos and graphic design.",
    emoji: "✨",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://ideogram.ai/",
    tags: ["text rendering", "typography", "logos", "graphic design", "accurate text"],
    category: "AI Image Generation",
    rating: 4.4,
    totalVotes: 3234
  },
  {
    icon: Eye,
    title: "Flux.1",
    description: "Next-generation AI image model that produces photorealistic images with exceptional detail, lighting, and composition quality.",
    emoji: "👁️",
    color: "from-indigo-500 to-purple-600",
    directUrl: "https://replicate.com/black-forest-labs/flux-schnell",
    tags: ["photorealistic", "exceptional detail", "lighting", "composition", "next-gen"],
    category: "AI Image Generation",
    rating: 4.7,
    totalVotes: 4567
  },
  {
    icon: Layers,
    title: "DreamStudio",
    description: "Stability AI's official interface for Stable Diffusion with advanced settings, prompt engineering tools, and batch generation capabilities.",
    emoji: "🔲",
    color: "from-teal-500 to-green-600",
    directUrl: "https://dreamstudio.ai/",
    tags: ["stable diffusion", "advanced settings", "prompt engineering", "batch generation", "professional"],
    category: "AI Image Generation",
    rating: 4.3,
    totalVotes: 2987
  },
  {
    icon: Wand2,
    title: "Playground AI",
    description: "User-friendly AI image generator with collaborative features, style mixing, and an intuitive interface for creators of all skill levels.",
    emoji: "🪄",
    color: "from-pink-500 to-purple-600",
    directUrl: "https://playgroundai.com/",
    tags: ["user-friendly", "collaborative", "style mixing", "intuitive", "beginner-friendly"],
    category: "AI Image Generation",
    rating: 4.2,
    totalVotes: 2654
  },
  {
    icon: Brush,
    title: "Artbreeder",
    description: "Collaborative AI art platform that blends images and explores creative possibilities through genetic algorithms and community collaboration.",
    emoji: "🖼️",
    color: "from-orange-500 to-red-600",
    directUrl: "https://www.artbreeder.com/",
    tags: ["collaborative", "image blending", "genetic algorithms", "community", "exploration"],
    category: "AI Image Generation",
    rating: 4.1,
    totalVotes: 2345
  },
  {
    icon: Frame,
    title: "NightCafe Creator",
    description: "AI art generator with multiple algorithms, style transfer capabilities, and a vibrant community for sharing and discovering AI-generated artwork.",
    emoji: "🖌️",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://creator.nightcafe.studio/",
    tags: ["multiple algorithms", "style transfer", "community", "artwork sharing", "discovery"],
    category: "AI Image Generation",
    rating: 4.0,
    totalVotes: 2123
  },
  {
    icon: Stars,
    title: "PhotoSonic",
    description: "AI art generator that creates stunning digital artwork from text descriptions with focus on artistic styles and creative expression.",
    emoji: "⭐",
    color: "from-yellow-500 to-pink-600",
    directUrl: "https://writesonic.com/photosonic-ai-art-generator?via=aiwebtools",
    tags: ["digital artwork", "artistic styles", "creative expression", "text to art", "stunning visuals"],
    category: "AI Image Generation",
    rating: 4.3,
    totalVotes: 2876
  }
];
