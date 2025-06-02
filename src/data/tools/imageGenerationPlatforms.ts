import { Tool } from "@/types/tools";
import { 
  Palette, 
  Image, 
  Sparkles, 
  Zap, 
  Camera, 
  Brush, 
  Wand2, 
  Stars,
  Eye,
  Layers
} from "lucide-react";

export const imageGenerationPlatforms: Tool[] = [
  {
    icon: Brush,
    title: "Leonardo AI",
    description: "Advanced AI art generator with fine-tuned models for creating stunning, high-quality images. Perfect for concept art, illustrations, and creative projects with professional-grade results.",
    emoji: "🎨",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://app.leonardo.ai/?via=aiwebtools",
    tags: ["image generation", "ai art", "concept art", "illustration", "creative"],
    category: "Image & Design",
    rating: 4.7,
    totalVotes: 5432
  },
  {
    icon: Palette,
    title: "DALL-E 3",
    description: "Create realistic images and art from a description in natural language.",
    emoji: "🖼️",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://openai.com/dall-e-3",
    tags: ["image generation", "text to image", "ai art", "realistic images"],
    category: "Image & Design",
    rating: 4.8,
    totalVotes: 6234
  },
  {
    icon: Image,
    title: "Midjourney",
    description: "AI art generator that creates images from textual descriptions, known for its artistic and surreal outputs.",
    emoji: "🏞️",
    color: "from-green-500 to-blue-600",
    directUrl: "https://www.midjourney.com/",
    tags: ["ai art", "image generation", "text to image", "artistic"],
    category: "Image & Design",
    rating: 4.9,
    totalVotes: 7890
  },
  {
    icon: Sparkles,
    title: "Stable Diffusion",
    description: "Open-source deep learning model for generating detailed images conditioned on text descriptions.",
    emoji: "✨",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://stability.ai/",
    tags: ["image generation", "deep learning", "text to image", "open-source"],
    category: "Image & Design",
    rating: 4.6,
    totalVotes: 4567
  },
  {
    icon: Zap,
    title: "RunwayML",
    description: "AI creative suite that offers a range of tools for image and video generation, editing, and manipulation.",
    emoji: "⚡",
    color: "from-red-500 to-pink-600",
    directUrl: "https://runwayml.com/",
    tags: ["image generation", "video editing", "ai tools", "creative suite"],
    category: "Image & Design",
    rating: 4.5,
    totalVotes: 3456
  },
  {
    icon: Camera,
    title: "NightCafe Creator",
    description: "AI art generator that allows you to create stunning art using multiple AI methods and algorithms.",
    emoji: "📸",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://creator.nightcafe.studio/",
    tags: ["ai art", "image generation", "art algorithms", "creative tools"],
    category: "Image & Design",
    rating: 4.4,
    totalVotes: 2345
  },
  {
    icon: Wand2,
    title: "Fotor AI Image Generator",
    description: "Generate high-quality images from text prompts with Fotor's AI image generator, perfect for various creative needs.",
    emoji: "🪄",
    color: "from-green-500 to-cyan-600",
    directUrl: "https://www.fotor.com/features/ai-image-generator/",
    tags: ["ai image generator", "text to image", "creative images", "high-quality images"],
    category: "Image & Design",
    rating: 4.3,
    totalVotes: 1234
  },
  {
    icon: Stars,
    title: "DeepAI",
    description: "AI platform offering tools for image generation, style transfer, and other creative applications.",
    emoji: "🌟",
    color: "from-purple-500 to-indigo-600",
    directUrl: "https://deepai.org/",
    tags: ["ai platform", "image generation", "style transfer", "creative applications"],
    category: "Image & Design",
    rating: 4.2,
    totalVotes: 3456
  },
  {
    icon: Eye,
    title: "Artbreeder",
    description: "Explore and create new images by breeding existing ones, using AI to generate unique variations and combinations.",
    emoji: "👁️",
    color: "from-orange-500 to-yellow-600",
    directUrl: "https://www.artbreeder.com/",
    tags: ["image breeding", "ai generation", "unique images", "creative exploration"],
    category: "Image & Design",
    rating: 4.1,
    totalVotes: 4567
  },
  {
    icon: Layers,
    title: "Craiyon",
    description: "AI model that draws images from any text prompt, offering a fun and creative way to visualize ideas.",
    emoji: " layers",
    color: "from-pink-500 to-red-600",
    directUrl: "https://www.craiyon.com/",
    tags: ["text to image", "ai drawing", "creative visualization", "image generation"],
    category: "Image & Design",
    rating: 4.0,
    totalVotes: 5678
  }
];
