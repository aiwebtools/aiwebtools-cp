import { Tool } from "@/types/tools";
import { 
  Image, 
  Palette, 
  Sparkles,
  Wand2,
  Layers,
  Zap
} from "lucide-react";

export const topImageGenerators: Tool[] = [
  {
    icon: Palette,
    title: "Midjourney",
    description: "The most famous AI art generator creating stunning, artistic images from text prompts. Industry-leading quality for creative professionals, digital artists, and designers. Access via Discord.",
    emoji: "🎨",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://www.midjourney.com/?via=aiwebtools",
    imageUrl: "/src/assets/tools/midjourney-hero.png",
    tags: ["Image Generator", "AI Art", "Midjourney", "AI art", "image generation", "artistic", "creative", "digital art", "text-to-image"],
    category: "AI Image Generation",
    rating: 4.9,
    totalVotes: 156000
  },
  {
    icon: Zap,
    title: "Flux AI",
    description: "Next-generation AI image model by Black Forest Labs (Stable Diffusion creators). Flux Pro and Dev models deliver exceptional quality, prompt adherence, and diverse artistic styles.",
    emoji: "⚡",
    color: "from-orange-500 to-red-600",
    directUrl: "https://flux1.ai/?via=aiwebtools",
    imageUrl: "/src/assets/tools/flux-ai-hero.png",
    tags: ["Image Generator", "Flux", "AI image", "Black Forest Labs", "high quality", "text-to-image", "artistic styles"],
    category: "AI Image Generation",
    rating: 4.9,
    totalVotes: 112000
  },
  {
    icon: Sparkles,
    title: "Ideogram",
    description: "AI image generator excelling at text rendering within images. Perfect for creating posters, logos, and designs with accurate text. Magic Prompt feature enhances simple prompts.",
    emoji: "✨",
    color: "from-blue-500 to-indigo-600",
    directUrl: "https://ideogram.ai/?via=aiwebtools",
    imageUrl: "/src/assets/tools/ideogram-hero.png",
    tags: ["Image Generator", "Logo Design", "Ideogram", "text in images", "logo design", "posters", "AI image", "text rendering", "design", "image generator", "ai image", "generate images", "logo generator", "logo maker", "create logo", "ai logo"],
    category: "AI Image Generation",
    rating: 4.8,
    totalVotes: 89000
  },
  {
    icon: Layers,
    title: "Stable Diffusion",
    description: "Open-source AI image generation model by Stability AI. SDXL and SD3 versions offer customizable, community-driven AI art with local deployment options and complete creative control.",
    emoji: "🔓",
    color: "from-purple-600 to-blue-600",
    directUrl: "https://stability.ai/?via=aiwebtools",
    imageUrl: "/src/assets/tools/stable-diffusion-hero.png",
    tags: ["Image Generator", "AI Art", "Stable Diffusion", "open source", "SDXL", "customizable", "local AI", "community", "free"],
    category: "AI Image Generation",
    rating: 4.8,
    totalVotes: 178000
  },
  {
    icon: Image,
    title: "Leonardo.AI",
    description: "Game-focused AI art generator with fine-tuned models for game assets, characters, and environments. Create consistent art styles with custom model training and character reference tools.",
    emoji: "🎮",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://leonardo.ai/?via=aiwebtools",
    imageUrl: "https://cdn.discordapp.com/attachments/1150636600846450729/1377298532423303249/leonardo.webp",
    tags: ["Image Generator", "Illustration", "Leonardo AI", "game art", "character design", "game assets", "consistent style", "custom models"],
    category: "AI Image Generation",
    rating: 4.7,
    totalVotes: 84000
  },
  {
    icon: Wand2,
    title: "Adobe Firefly",
    description: "Adobe's enterprise AI image generator integrated with Creative Cloud. Commercially safe, trained on licensed content. Generate, edit, and enhance images directly in Photoshop and Illustrator.",
    emoji: "🔥",
    color: "from-red-500 to-orange-600",
    directUrl: "https://firefly.adobe.com/?via=aiwebtools",
    imageUrl: "/src/assets/tools/adobe-firefly-hero.png",
    tags: ["Image Generator", "Photo Editor", "Adobe Firefly", "enterprise AI", "Creative Cloud", "commercial safe", "Photoshop", "licensed", "design"],
    category: "AI Image Generation",
    rating: 4.6,
    totalVotes: 92000
  },
];
