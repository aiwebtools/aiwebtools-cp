import { Tool } from "@/types/tools";
import { 
  Image, 
  Palette, 
  Wand2, 
  Sparkles, 
  Camera, 
  Eye,
  Brush,
  Zap,
  Star,
  Crown,
  Paintbrush
} from "lucide-react";

import midjourneyHero from "@/assets/tools/midjourney-hero.jpg";
import ideogramHero from "@/assets/tools/ideogram-hero.jpg";

export const aiImageGeneration: Tool[] = [
  {
    icon: Wand2,
    title: "Midjourney – Image Generation Platform",
    description: "Advanced AI image generation platform that creates stunning, high-quality images from text prompts. Known for its artistic style and exceptional detail in generated artwork.",
    emoji: "🎨",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://www.midjourney.com/home?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=5deYUaqwreo",
    imageUrl: midjourneyHero,
    tags: ["Image Generator", "AI Art", "image generation", "AI art", "text-to-image", "creative AI", "digital art", "artwork creation"],
    category: "AI Image Generation",
    rating: 4.8,
    totalVotes: 5234
  },
  {
    icon: Star,
    title: "Ideogram – Image Generator",
    description: "AI-powered image generation platform that excels at creating images with text integration and typography. Perfect for logos, posters, and text-based designs.",
    emoji: "💫",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://ideogram.ai/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=USSpwbe3Rxk",
    imageUrl: ideogramHero,
    tags: ["Image Generator", "Logo Design", "image generation", "typography", "text integration", "logo design", "AI design", "creative tools"],
    category: "AI Image Generation",
    rating: 4.6,
    totalVotes: 3456
  },
  {
    icon: Palette,
    title: "DALL·E 3",
    description: "Create realistic and imaginative images from text descriptions",
    emoji: "🎨",
    color: "from-blue-600 to-purple-600",
    directUrl: "https://openai.com/dall-e-3?via=aiwebtools",
    imageUrl: "/src/assets/tools/dalle3-hero.png",
    tags: ["Image Generator", "image generation", "text to image", "ai art"],
    category: "Image & Design Tools",
    rating: 4.7,
    totalVotes: 5234
  },
  {
    icon: Sparkles,
    title: "NightCafe Creator",
    description: "Generate AI art and images with multiple AI art generation methods.",
    emoji: "✨",
    color: "from-purple-500 to-red-500",
    directUrl: "https://nightcafe.studio/?via=aiwebtools",
    imageUrl: "/src/assets/tools/nightcafe-hero.png",
    tags: ["AI Art", "Image Generator", "ai art", "image generation", "ai art community"],
    category: "Image & Design Tools",
    rating: 4.4,
    totalVotes: 4123
  },
  {
    icon: Paintbrush,
    title: "Sketch Artist GPT",
    description: "Professional digital sketch artist and drawing assistant. Create sketches, digital artwork, character designs, and artistic illustrations with AI-powered drawing guidance.",
    emoji: "✏️",
    color: "from-gray-500 to-blue-600",
    directUrl: "https://sketchartistgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://cdn.discordapp.com/attachments/1150636600846450729/1377297453321162812/sketch.webp?ex=683873b5&is=68372235&hm=004c60f783b5ee0fc0e866fe8bbafb8c93952d2ac4e4bccaa93a9f71a7095ccb&",
    tags: ["Illustration", "AI Art", "sketching", "digital art", "drawing", "character design", "artistic illustration"],
    category: "Image & Design Tools",
    rating: 4.3,
    totalVotes: 2567
  },
  {
    icon: Palette,
    title: "Midjourney – Image Generation Platform",
    description: "Leading AI image generation platform for creating stunning visual art. Generate high-quality images, artwork, and creative visuals from text prompts with advanced AI models.",
    emoji: "🎨",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://www.midjourney.com/home?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=5deYUaqwreo",
    tags: ["Image Generator", "AI Art", "AI art", "image generation", "creative visuals", "text-to-image", "digital art"],
    category: "Image & Design Tools",
    rating: 4.6,
    totalVotes: 4567
  },
  {
    icon: Sparkles,
    title: "Ideogram – Image Generator",
    description: "Advanced AI image generator with text integration capabilities. Create images with readable text, logos, and precise visual content generation for various creative projects.",
    emoji: "✨",
    color: "from-cyan-500 to-purple-600",
    directUrl: "https://ideogram.ai/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=USSpwbe3Rxk",
    tags: ["Image Generator", "Logo Design", "Graphic Design", "text-to-image", "logo creation", "AI generator", "visual content", "graphic design"],
    category: "Image & Design Tools",
    rating: 4.4,
    totalVotes: 3789
  },
  {
    icon: Palette,
    title: "Leonardo AI",
    description: "Advanced AI image generation platform with precision controls for creating high-quality artwork, designs, and visual content.",
    emoji: "🎨",
    color: "from-orange-500 to-red-600",
    directUrl: "https://app.leonardo.ai/?via=aiwebtools",
    imageUrl: "https://cdn.discordapp.com/attachments/1150636600846450729/1377298532423303249/leonardo.webp?ex=683874b7&is=68372337&hm=2a2cb45408fda109c050a3afe84d79aad0a5fd26ae489114f33cc92a3da33a47&",
    tags: ["Image Generator", "AI Art", "AI art", "image generation", "digital art", "creative tools", "design"],
    category: "Image & Design Tools",
    rating: 4.5,
    totalVotes: 3421
  }
];
