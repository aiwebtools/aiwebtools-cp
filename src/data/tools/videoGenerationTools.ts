
import { Tool } from "@/types/tools";
import { 
  Video, 
  Brain, 
  Film, 
  Camera, 
  Wand2,
  Sparkles,
  Monitor,
  Clapperboard
} from "lucide-react";

export const videoGenerationTools: Tool[] = [
  {
    icon: Brain,
    title: "Google VEO 3",
    description: "Google DeepMind's most advanced video generation model. VEO 3 creates high-quality videos with sound from text prompts, representing the cutting edge of AI video generation technology.",
    emoji: "🧠",
    color: "from-red-500 to-orange-600",
    directUrl: "https://deepmind.google/models/veo/?via=aiwebtools",
    tags: ["Google DeepMind", "video generation", "text-to-video", "AI video", "sound generation"],
    category: "Video Tools",
    rating: 4.8,
    totalVotes: 3200
  },
  {
    icon: Video,
    title: "Runway ML",
    description: "Advanced AI video generation and editing platform. Create videos from text, images, or extend existing footage with Gen-2 and Gen-3 models.",
    emoji: "🎬",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://runwayml.com/",
    tags: ["AI video generation", "text-to-video", "video editing", "Gen-2", "Gen-3"],
    category: "Video Tools",
    rating: 4.8,
    totalVotes: 4567
  },
  {
    icon: Film,
    title: "Pika Labs",
    description: "AI video generator that creates stunning videos from text prompts or images. Easy-to-use platform for creating short-form video content.",
    emoji: "🎥",
    color: "from-pink-500 to-purple-600",
    directUrl: "https://pika.art/",
    tags: ["text-to-video", "image-to-video", "short-form", "easy-to-use", "AI generation"],
    category: "Video Tools",
    rating: 4.7,
    totalVotes: 3890
  },
  {
    icon: Video,
    title: "Luma Dream Machine",
    description: "AI video generator that creates high-quality, realistic videos from text and images. Advanced physics simulation and temporal consistency.",
    emoji: "🌙",
    color: "from-indigo-500 to-blue-600",
    directUrl: "https://lumalabs.ai/dream-machine",
    tags: ["realistic videos", "physics simulation", "temporal consistency", "high-quality", "Luma Labs"],
    category: "Video Tools",
    rating: 4.6,
    totalVotes: 3654
  },
  {
    icon: Clapperboard,
    title: "Stable Video Diffusion",
    description: "Stability AI's open-source video generation model. Create high-quality videos from images using state-of-the-art diffusion technology.",
    emoji: "🎭",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://stability.ai/stable-video",
    tags: ["open source", "diffusion model", "image-to-video", "Stability AI", "high-quality"],
    category: "Video Tools",
    rating: 4.5,
    totalVotes: 2987
  },
  {
    icon: Camera,
    title: "Genmo AI",
    description: "Creative AI platform for generating videos, images, and 3D models. Transform ideas into visual content with advanced AI models.",
    emoji: "🌟",
    color: "from-cyan-500 to-purple-600",
    directUrl: "https://www.genmo.ai/",
    tags: ["creative AI", "video generation", "3D models", "visual content", "advanced models"],
    category: "Video Tools",
    rating: 4.4,
    totalVotes: 2654
  },
  {
    icon: Sparkles,
    title: "Invideo AI",
    description: "AI video creation platform that generates videos from text prompts. Create marketing videos, social media content, and presentations effortlessly.",
    emoji: "✨",
    color: "from-cyan-500 to-purple-600",
    directUrl: "https://invideo.io/",
    tags: ["text-to-video", "marketing videos", "social media", "presentations", "AI creation"],
    category: "Video Tools",
    rating: 4.4,
    totalVotes: 2987
  },
  {
    icon: Film,
    title: "Steve AI",
    description: "AI video creation platform that converts text to video with animations. Create live-action and animated videos for marketing, education, and social media.",
    emoji: "⭐",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://www.steve.ai/",
    tags: ["text to video", "animations", "live-action", "marketing", "education", "social media"],
    category: "Video Tools",
    rating: 4.1,
    totalVotes: 2987
  }
];
