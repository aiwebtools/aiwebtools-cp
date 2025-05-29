
import { Tool } from "@/types/tools";
import { 
  Image, 
  Sparkles, 
  Palette, 
  Wand2,
  Eye,
  Bot,
  Globe,
  Crown
} from "lucide-react";

export const coreImageGenerators: Tool[] = [
  {
    icon: Image,
    title: "Ideogram AI",
    description: "Revolutionary, web-based tool that harnesses the power of artificial intelligence to transform text prompts and sketches into stunning digital images. Founded by former Google Brain researchers with exceptional text integration capabilities.",
    emoji: "💭",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://ideogram.ai/",
    tags: ["Google Brain", "text to image", "text integration", "free tool", "digital art", "customized artwork"],
    category: "Image Generation Platforms",
    rating: 4.7,
    totalVotes: 5234
  },
  {
    icon: Sparkles,
    title: "MidJourney",
    description: "Remarkable generative artificial intelligence program that boasts the ability to craft vivid images from simple text inputs. Leading contender among AI art creators, accessible via Discord bot interface with '/imagine' command.",
    emoji: "🎨",
    color: "from-cyan-500 to-purple-600",
    directUrl: "https://www.midjourney.com",
    tags: ["Discord bot", "vivid images", "text inputs", "realistic and abstract", "subscription required", "art generation"],
    category: "Image Generation Platforms",
    rating: 4.8,
    totalVotes: 7234
  },
  {
    icon: Eye,
    title: "DALL·E 3 Image Seed GPT by AI Web Tools",
    description: "Advanced iteration of OpenAI's DALL·E 3 designed to conjure realistic images and artistic creations. Enhanced version with identification numbers (Seed Numbers) for image modification, equipped with data analysis and coding abilities.",
    emoji: "🔍",
    color: "from-blue-500 to-green-600",
    directUrl: "https://chat.openai.com/g/g-xfSYPpo1i-image-seed-gpt",
    tags: ["DALL·E 3", "seed numbers", "image modification", "GPT-4", "data analysis", "photorealistic"],
    category: "Image Generation Platforms",
    rating: 4.9,
    totalVotes: 6789
  },
  {
    icon: Wand2,
    title: "BlueWillow AI",
    description: "Powerful text-to-image generative AI tool that empowers users to effortlessly craft intricate digital artwork by utilizing text prompts. Excels at converting written descriptions into remarkably detailed and top-tier images.",
    emoji: "🌸",
    color: "from-blue-500 to-indigo-600",
    directUrl: "https://www.bluewillow.ai/",
    tags: ["text-to-image", "intricate artwork", "digital artists", "designers", "free generator", "detailed images"],
    category: "Image Generation Platforms",
    rating: 4.5,
    totalVotes: 4123
  },
  {
    icon: Palette,
    title: "NightCafe Studio",
    description: "Powerful AI art generator that employs machine learning to create captivating images from text prompts or base images. Uses Stable Diffusion technique and offers various AI art generation methods including neural style transfer.",
    emoji: "🌙",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://creator.nightcafe.studio/",
    tags: ["Stable Diffusion", "neural style transfer", "machine learning", "text prompts", "artistic masterpieces", "versatile platform"],
    category: "Image Generation Platforms",
    rating: 4.6,
    totalVotes: 4567
  },
  {
    icon: Sparkles,
    title: "Leonardo AI",
    description: "Revolutionary free AI-powered tool that empowers creators to unlock their artistic potential by generating production-quality visual assets. Employs cutting-edge deep learning algorithms with photorealistic artwork capabilities.",
    emoji: "🎭",
    color: "from-orange-500 to-red-600",
    directUrl: "https://app.leonardo.ai/?via=aiwebtools",
    tags: ["free tool", "production-quality", "deep learning", "photorealistic", "150 images daily", "game assets"],
    category: "Image Generation Platforms",
    rating: 4.7,
    totalVotes: 5678
  },
  {
    icon: Bot,
    title: "Bing Image Generator",
    description: "Powered by DALL·E3, harnesses the capabilities of AI to transform text descriptions into visual artwork. Users can simply describe their desired image in text, and the Image Creator will utilize AI to bring their vision to life.",
    emoji: "🤖",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://www.bing.com/create?via=aiwebtools",
    tags: ["DALL·E3", "text descriptions", "visual artwork", "free to use", "limited generations", "Microsoft"],
    category: "Image Generation Platforms",
    rating: 4.4,
    totalVotes: 3876
  },
  {
    icon: Globe,
    title: "Lexica",
    description: "Text-to-image generator that harnesses AI power to transform written descriptions into vibrant visual representations. Craft detailed prompts with ease, generate images free of charge with upscaling for printing.",
    emoji: "🌍",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://lexica.art/",
    tags: ["text-to-image", "vibrant visuals", "detailed prompts", "free generation", "upscaling", "printing ready"],
    category: "Image Generation Platforms",
    rating: 4.4,
    totalVotes: 3456
  },
  {
    icon: Crown,
    title: "DreamUp",
    description: "Revolutionary platform by DeviantArt allowing users to create AI-generated art while ensuring creators and their work are treated fairly. Offers 5 free prompts with upscaled images and creative control options.",
    emoji: "👑",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://www.dreamup.com/",
    tags: ["DeviantArt", "fair treatment", "5 free prompts", "upscaled images", "creative control", "transparency"],
    category: "Image Generation Platforms",
    rating: 4.5,
    totalVotes: 3789
  },
  {
    icon: Bot,
    title: "Microsoft Designer",
    description: "Cutting-edge design application enriched with AI capabilities that streamline high-quality design creation. Powered by OpenAI's Dall-E with AI text-to-image features for social media posts and digital content.",
    emoji: "🤖",
    color: "from-blue-500 to-green-600",
    directUrl: "https://designer.microsoft.com/",
    tags: ["OpenAI Dall-E", "text-to-image", "social media", "digital postcards", "free to use", "AI recommendations"],
    category: "Image Generation Platforms",
    rating: 4.7,
    totalVotes: 5234
  }
];
