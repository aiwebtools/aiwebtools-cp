
import { Tool } from "@/types/tools";
import { 
  Layers,
  Users,
  Smartphone,
  Search,
  Video,
  Bot,
  Brush,
  Scissors,
  Target,
  Play
} from "lucide-react";

export const specializedImageTools: Tool[] = [
  {
    icon: Layers,
    title: "3Dfy.ai",
    description: "Exciting breakthrough in 3D modeling with its innovative Text-to-3D technology. Cutting-edge platform enables users to effortlessly generate top-notch 3D models within specified object categories using simple text prompts.",
    emoji: "🎲",
    color: "from-green-500 to-teal-600",
    directUrl: "https://3dfy.ai/",
    imageUrl: "/src/assets/tools/3dfy-hero.png",
    tags: ["Text-to-3D", "3D modeling", "text prompts", "beta version", "Discord community", "object categories", "3D Modeling", "Image Generator"],
    category: "Image Generation Platforms",
    rating: 4.3,
    totalVotes: 2987
  },
  {
    icon: Users,
    title: "MetaHuman",
    description: "Groundbreaking framework that empowers creators to easily produce and animate remarkably realistic digital human characters within Unreal Engine projects. MetaHuman Creator and Animator with iPhone accessibility.",
    emoji: "👥",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://www.unrealengine.com/en-US/metahuman",
    imageUrl: "/src/assets/tools/metahuman-hero.png",
    tags: ["Unreal Engine", "digital humans", "iPhone animation", "photorealistic", "MetaHuman Creator", "real-time performance", "Avatar Creator", "3D Modeling"],
    category: "Image Generation Platforms",
    rating: 4.8,
    totalVotes: 5678
  },
  {
    icon: Layers,
    title: "Luma AI",
    description: "Innovative application powered by AI specializing in lifelike 3D images. Neural Radiance Fields (NeRF) technology delivers heightened realism. New Dream Machine text-to-video generator with Sora-quality results.",
    emoji: "🎲",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://lumalabs.ai/",
    imageUrl: "/src/assets/tools/luma-ai-hero.png",
    tags: ["NeRF technology", "3D images", "Dream Machine", "text-to-video", "Sora quality", "cinematic videos", "3D Modeling", "Image Generator"],
    category: "Image Generation Platforms",
    rating: 4.8,
    totalVotes: 6234
  },
  {
    icon: Smartphone,
    title: "FaceApp",
    description: "Globally acclaimed photo editing app that took the world by storm, earning title of top app of 2019. Combines advanced AI technology with user-friendly features, offering over 60 filters for magazine-worthy transformations.",
    emoji: "📱",
    color: "from-pink-500 to-red-600",
    directUrl: "https://www.faceapp.com/",
    tags: ["top app 2019", "60+ filters", "magazine-worthy", "AI technology", "selfie enhancement", "facial transformations", "Photo Editor", "Avatar Creator"],
    category: "Image Generation Platforms",
    rating: 4.8,
    totalVotes: 6234
  },
  {
    icon: Search,
    title: "FaceCheck.ID",
    description: "Reverse image search engine that identifies individuals by comparing uploaded photos with millions of publicly available images. Invaluable for verifying online profiles, uncovering scams, and ensuring safety by identifying criminals.",
    emoji: "🔍",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://facecheck.id/",
    tags: ["reverse search", "profile verification", "scam detection", "safety", "criminal identification", "privacy respect"],
    category: "Image Generation Platforms",
    rating: 4.6,
    totalVotes: 4234
  },
  {
    icon: Search,
    title: "PimEyes",
    description: "Cutting-edge facial recognition and reverse image search engine designed to protect online privacy and image rights. Advanced AI discovers where similar images are published with alerts and removal requests.",
    emoji: "👁️",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://pimeyes.com/en",
    tags: ["facial recognition", "privacy protection", "image rights", "online monitoring", "removal requests", "digital integrity"],
    category: "Image Generation Platforms",
    rating: 4.7,
    totalVotes: 4567
  },
  {
    icon: Scissors,
    title: "BlackInk.ai",
    description: "Innovative solution for those seeking the perfect tattoo design. AI-powered tattoo generator allows users to effortlessly create unique tattoos in a matter of seconds, eliminating lengthy search and design phases.",
    emoji: "🖤",
    color: "from-black to-gray-600",
    directUrl: "https://blackink.ai/",
    tags: ["tattoo design", "unique tattoos", "seconds generation", "design automation", "personalized", "quick creation", "Image Generator", "Graphic Design"],
    category: "Image Generation Platforms",
    rating: 4.3,
    totalVotes: 2234
  },
  {
    icon: Brush,
    title: "AI Meme Generator",
    description: "Online tool that leverages artificial intelligence to automatically generate humorous and entertaining memes from text prompts or existing images. Utilizes AI algorithms to understand context and generate witty and relevant captions.",
    emoji: "😂",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://ai-meme.com/",
    tags: ["meme generation", "humor", "text prompts", "viral content", "social media", "context understanding", "Image Generator", "Graphic Design"],
    category: "Image Generation Platforms",
    rating: 4.2,
    totalVotes: 2345
  },
  {
    icon: Users,
    title: "100,000 Humans That Don't Exist",
    description: "Super realistic whole-body images of entirely generated individuals available for free use without legal concerns. GDPR and CCPA compliant with diverse body types, ages, clothing, and poses for various industries.",
    emoji: "👥",
    color: "from-blue-500 to-green-600",
    directUrl: "https://generated.photos/humans",
    tags: ["generated humans", "GDPR compliant", "no legal concerns", "diverse images", "game development", "NFT artwork"],
    category: "Image Generation Platforms",
    rating: 4.3,
    totalVotes: 2876
  },
  {
    icon: Play,
    title: "Deep Nostalgia",
    description: "Remarkable tool that brings family photos to life through cutting-edge technology. Simply upload or drag and drop a photo to animate faces in cherished family pictures, connecting with family history in new ways.",
    emoji: "📸",
    color: "from-sepia-500 to-brown-600",
    directUrl: "http://myheritage.sjv.io/LXXy1o",
    tags: ["animate photos", "family history", "cutting-edge technology", "cherished memories", "visual heritage", "transformative experience"],
    category: "Image Generation Platforms",
    rating: 4.6,
    totalVotes: 4123
  }
];
