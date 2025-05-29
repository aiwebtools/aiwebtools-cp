import { Tool } from "@/types/tools";
import { 
  Video, 
  Film, 
  Camera, 
  Edit, 
  Play, 
  Upload, 
  Download, 
  Zap,
  Wand2,
  Sparkles,
  Music,
  Mic,
  Globe,
  Brain
} from "lucide-react";

export const videoTools: Tool[] = [
  {
    icon: Globe,
    title: "Google Flow Editing Studio",
    description: "Google's experimental visual editing tool that allows you to create and edit visual content with AI-powered features. Part of Google Labs' innovative tools for creative professionals.",
    emoji: "🌊",
    color: "from-blue-500 to-green-600",
    directUrl: "https://labs.google/fx/tools/flow/?via=aiwebtools",
    tags: ["Google Labs", "visual editing", "experimental", "creative tools", "AI editing"],
    category: "Video Tools",
    rating: 4.5,
    totalVotes: 2100
  },
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
    icon: Wand2,
    title: "Synthesia",
    description: "AI video generation platform for creating professional videos with AI avatars. Perfect for training, marketing, and educational content.",
    emoji: "🎭",
    color: "from-blue-500 to-green-600",
    directUrl: "https://www.synthesia.io/",
    tags: ["AI avatars", "professional videos", "training", "marketing", "educational"],
    category: "Video Tools",
    rating: 4.6,
    totalVotes: 3456
  },
  {
    icon: Camera,
    title: "HeyGen",
    description: "AI video generator with realistic avatars and voice cloning. Create personalized video content at scale with custom avatars and multilingual support.",
    emoji: "📹",
    color: "from-orange-500 to-red-600",
    directUrl: "https://www.heygen.com/",
    tags: ["AI avatars", "voice cloning", "personalized videos", "multilingual", "scale"],
    category: "Video Tools",
    rating: 4.5,
    totalVotes: 3123
  },
  {
    icon: Edit,
    title: "Descript",
    description: "AI-powered video and audio editor that works like a document. Edit videos by editing text, remove filler words, and clone voices.",
    emoji: "✂️",
    color: "from-green-500 to-blue-600",
    directUrl: "https://www.descript.com/",
    tags: ["text-based editing", "filler word removal", "voice cloning", "audio editing", "transcription"],
    category: "Video Tools",
    rating: 4.7,
    totalVotes: 4234
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
    icon: Play,
    title: "Pictory",
    description: "AI video creation tool that turns long-form content into engaging short videos. Perfect for social media, marketing, and content repurposing.",
    emoji: "▶️",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://pictory.ai/",
    tags: ["content repurposing", "short videos", "social media", "marketing", "long-form content"],
    category: "Video Tools",
    rating: 4.3,
    totalVotes: 2654
  },
  {
    icon: Music,
    title: "Fliki",
    description: "AI video generator with text-to-speech and realistic voices. Create videos from blog posts, presentations, or scripts with lifelike narration.",
    emoji: "🎵",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://fliki.ai/",
    tags: ["text-to-speech", "realistic voices", "blog posts", "presentations", "narration"],
    category: "Video Tools",
    rating: 4.2,
    totalVotes: 2345
  },
  {
    icon: Zap,
    title: "Kapwing",
    description: "Online video editor with AI features including auto-subtitles, background removal, and smart cropping. Collaborative editing platform.",
    emoji: "⚡",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://www.kapwing.com/",
    tags: ["online editor", "auto-subtitles", "background removal", "smart cropping", "collaborative"],
    category: "Video Tools",
    rating: 4.4,
    totalVotes: 2876
  }
];
