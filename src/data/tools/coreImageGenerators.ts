import { Image, Palette, Wand2, Sparkles, Camera, Brush, Star, Crown, Zap, Bot } from "lucide-react";
import { Tool } from "@/types/tools";

import gpt4oImageGenHero from "@/assets/tools/gpt4o-image-gen-hero.jpg";
import googleWhiskHero from "@/assets/tools/google-whisk-hero.jpg";
import imageFxHero from "@/assets/tools/image-fx-hero.jpg";
import kreaAiHero from "@/assets/tools/krea-ai-hero.jpg";
import midjourneyHero from "@/assets/tools/midjourney-hero.jpg";

export const coreImageGenerators: Tool[] = [
  {
    icon: Bot,
    title: "GPT-4o Image Generation",
    description: "OpenAI's latest GPT-4o model with advanced image generation capabilities. Create stunning visuals from text descriptions with enhanced understanding and creative output.",
    emoji: "🤖",
    color: "from-emerald-500 to-blue-600",
    directUrl: "https://graphicdesigngpt.lovable.app/?via=aiwebtools",
    imageUrl: gpt4oImageGenHero,
    tags: ["Image Generator", "GPT-4o", "OpenAI", "image generation", "text-to-image", "AI art", "advanced model"],
    category: "Core Image Generators",
    rating: 4.9,
    totalVotes: 7890
  },
  {
    icon: Wand2,
    title: "Google Whisk",
    description: "Revolutionary AI tool from Google Labs that generates images using other images as prompts instead of text. Input images for subject, scene, and style to create unique visuals with Imagen 3.",
    emoji: "🎨",
    color: "from-blue-500 to-green-600",
    directUrl: "https://labs.google/fx/tools/whisk?via=aiwebtools",
    imageUrl: googleWhiskHero,
    tags: ["Image Generator", "image prompts", "Google Labs", "Imagen 3", "visual exploration", "creative"],
    category: "Core Image Generators",
    rating: 4.8,
    totalVotes: 3456
  },
  {
    icon: Image,
    title: "Image FX by Google",
    description: "Cutting-edge AI image generator from Google Labs that converts text prompts into visually stunning images. Advanced AI models make image generation accessible to all skill levels.",
    emoji: "🖼️",
    color: "from-red-500 to-pink-600",
    directUrl: "https://labs.google/fx/tools/image-fx?via=aiwebtools",
    imageUrl: imageFxHero,
    tags: ["Image Generator", "Google Labs", "text-to-image", "AI models", "creative tools", "image generation"],
    category: "Core Image Generators",
    rating: 4.7,
    totalVotes: 3234
  },
  {
    icon: Sparkles,
    title: "Krea.ai",
    description: "Intuitive AI-powered platform for generating and enhancing images and videos. Features Flux for high-quality images, video AI, enhancer for upscaling, and creative mini-apps.",
    emoji: "✨",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://www.krea.ai/?via=aiwebtools",
    imageUrl: kreaAiHero,
    tags: ["Image Generator", "Image Upscaler", "image generation", "video AI", "upscaling", "free platform", "creative tools"],
    category: "Core Image Generators",
    rating: 4.6,
    totalVotes: 2890
  },
  {
    icon: Palette,
    title: "Playground.com Design",
    description: "AI-powered design platform with hundreds of customizable templates for creating stunning visuals. Generate unique designs for logos, t-shirts, social media, and more without design skills.",
    emoji: "🎪",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://playground.com/design?via=aiwebtools",
    imageUrl: "/src/assets/tools/playground-ai-hero.png",
    tags: ["Graphic Design", "Logo Design", "design templates", "AI design", "customizable", "logos", "social media"],
    category: "Core Image Generators",
    rating: 4.5,
    totalVotes: 2567
  },
  {
    icon: Camera,
    title: "Flair.ai",
    description: "AI-powered design platform for high-quality product photoshoots. Drag and drop props, stage scenes with AI, real-time collaboration, and AI-generated fashion models.",
    emoji: "📸",
    color: "from-indigo-500 to-purple-600",
    directUrl: "https://flair.ai/?via=aiwebtools",
    imageUrl: "/src/assets/tools/flair-ai-hero.png",
    tags: ["Product Photography", "Image Generator", "product photography", "AI staging", "fashion models", "collaboration", "e-commerce"],
    category: "Core Image Generators",
    rating: 4.7,
    totalVotes: 3123
  },
  {
    icon: Brush,
    title: "Exactly.Ai",
    description: "Create custom image models that emulate your specific art styles. Train AI on your artwork to generate consistent images matching your unique artistic vision.",
    emoji: "🖌️",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://exactly.ai/?via=aiwebtools",
    imageUrl: "/src/assets/tools/exactly-ai-hero.png",
    tags: ["AI Art", "Image Generator", "custom models", "art style", "training", "consistent generation", "artistic"],
    category: "Core Image Generators",
    rating: 4.4,
    totalVotes: 2234
  },
  {
    icon: Wand2,
    title: "Recraft AI Image Generator",
    description: "Powerful tool that transforms text prompts into high-quality, versatile images for advertisements, digital banners, and printable materials. Collaborative platform with real-time feedback.",
    emoji: "🔧",
    color: "from-green-500 to-teal-600",
    directUrl: "https://www.recraft.ai/?via=aiwebtools",
    imageUrl: "/src/assets/tools/recraft-ai-hero.png",
    tags: ["Image Generator", "Graphic Design", "text-to-image", "advertisements", "collaborative", "high-quality", "versatile"],
    category: "Core Image Generators",
    rating: 4.6,
    totalVotes: 2890
  },
  {
    icon: Sparkles,
    title: "SeeLab.ai",
    description: "AI-powered platform for creating brand-specific visuals with precision. Fine-tune AI models using brand assets, generate product images, avatars, and marketing materials with visual editor.",
    emoji: "👁️",
    color: "from-purple-500 to-indigo-600",
    directUrl: "https://www.seelab.ai/en?via=aiwebtools",
    tags: ["Image Generator", "Avatar Creator", "brand visuals", "fine-tuning", "product images", "marketing", "visual editor"],
    category: "Core Image Generators",
    rating: 4.5,
    totalVotes: 2456
  },
  {
    icon: Star,
    title: "Midjourney",
    description: "Leading AI art generator known for creating stunning, artistic images from text prompts. Premium quality results with unique artistic style and community features.",
    emoji: "⭐",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://www.midjourney.com/?via=aiwebtools",
    imageUrl: midjourneyHero,
    tags: ["Image Generator", "AI Art", "AI art", "artistic style", "premium quality", "community", "text-to-image"],
    category: "Core Image Generators",
    rating: 4.9,
    totalVotes: 6789
  },
  {
    icon: Zap,
    title: "Stable Diffusion",
    description: "Open-source AI image generator that can be run locally or through various online platforms. Highly customizable with extensive community support and models.",
    emoji: "⚡",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://stability.ai/stablediffusion?via=aiwebtools",
    imageUrl: "/src/assets/tools/stable-diffusion-hero.png",
    tags: ["Image Generator", "AI Art", "open source", "local deployment", "customizable", "community", "free"],
    category: "Core Image Generators",
    rating: 4.7,
    totalVotes: 4321
  },
  {
    icon: Image,
    title: "Leonardo AI",
    description: "AI art generator focused on game assets, concept art, and creative content. Features various models optimized for different artistic styles and use cases.",
    emoji: "🎨",
    color: "from-red-500 to-purple-600",
    directUrl: "https://leonardo.ai/?via=aiwebtools",
    tags: ["Image Generator", "Illustration", "game assets", "concept art", "multiple models", "artistic styles", "creative"],
    category: "Core Image Generators",
    rating: 4.6,
    totalVotes: 3876
  }
];
