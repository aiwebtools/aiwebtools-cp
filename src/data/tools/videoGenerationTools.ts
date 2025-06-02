
import { Tool } from "@/types/tools";
import { 
  Video, 
  Play, 
  Film, 
  Camera, 
  Clapperboard, 
  Monitor, 
  Zap,
  User,
  Mic,
  Edit3
} from "lucide-react";

export const videoGenerationTools: Tool[] = [
  {
    icon: User,
    title: "Deepbrain AI Studios",
    description: "Create professional AI avatar videos with realistic human presenters. Generate training videos, marketing content, and presentations using AI-powered virtual humans.",
    emoji: "🎭",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://www.deepbrain.io/aistudios?via=aiwebtools",
    tags: ["AI avatars", "virtual humans", "video presentations", "training videos", "marketing content"],
    category: "Video Generation & Editing",
    rating: 4.6,
    totalVotes: 3421
  },
  {
    icon: User,
    title: "Synthesia Avatar Creator Platform",
    description: "Leading AI video generation platform that creates professional videos with AI avatars. Choose from diverse AI presenters or create custom avatars for training, marketing, and communication videos.",
    emoji: "🎬",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://www.synthesia.io/?via=Aiwebtools",
    tags: ["AI avatars", "video generation", "custom avatars", "professional videos", "AI presenters"],
    category: "Video Generation & Editing",
    rating: 4.8,
    totalVotes: 5234
  },
  {
    icon: Video,
    title: "RunwayML",
    description: "AI creative suite that offers advanced video generation, editing, and manipulation tools powered by machine learning.",
    emoji: "🎨",
    color: "from-red-500 to-pink-600",
    directUrl: "https://runwayml.com/",
    tags: ["video editing", "ai tools", "creative suite", "machine learning", "video manipulation"],
    category: "Video Generation & Editing",
    rating: 4.7,
    totalVotes: 4567
  },
  {
    icon: Play,
    title: "Pika Labs",
    description: "Text-to-video AI that generates short videos from text prompts with impressive quality and creative control.",
    emoji: "🎥",
    color: "from-green-500 to-blue-600",
    directUrl: "https://pika.art/",
    tags: ["text to video", "ai generation", "short videos", "creative control"],
    category: "Video Generation & Editing",
    rating: 4.5,
    totalVotes: 3890
  },
  {
    icon: Film,
    title: "Stable Video Diffusion",
    description: "Open-source video generation model that creates high-quality videos from images and text descriptions.",
    emoji: "🎞️",
    color: "from-orange-500 to-red-600",
    directUrl: "https://stability.ai/",
    tags: ["video generation", "open source", "image to video", "text descriptions"],
    category: "Video Generation & Editing",
    rating: 4.4,
    totalVotes: 3234
  },
  {
    icon: Camera,
    title: "Luma Dream Machine",
    description: "AI video generator that creates cinematic videos from text prompts with exceptional realism and creativity.",
    emoji: "📹",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://lumalabs.ai/dream-machine",
    tags: ["cinematic videos", "text prompts", "realism", "ai generation"],
    category: "Video Generation & Editing",
    rating: 4.6,
    totalVotes: 4123
  },
  {
    icon: Clapperboard,
    title: "Kaiber AI",
    description: "Transform photos, videos, and music into stunning AI-generated videos with artistic styles and effects.",
    emoji: "🎬",
    color: "from-purple-500 to-indigo-600",
    directUrl: "https://kaiber.ai/",
    tags: ["artistic videos", "photo transformation", "music videos", "ai effects"],
    category: "Video Generation & Editing",
    rating: 4.3,
    totalVotes: 2876
  },
  {
    icon: Monitor,
    title: "InVideo AI",
    description: "AI-powered video creation platform that generates professional videos from text scripts with templates and automation.",
    emoji: "📺",
    color: "from-teal-500 to-green-600",
    directUrl: "https://invideo.sjv.io/k0kMbn",
    tags: ["video creation", "text scripts", "templates", "automation"],
    category: "Video Generation & Editing",
    rating: 4.2,
    totalVotes: 3567
  },
  {
    icon: Zap,
    title: "Pictory AI",
    description: "Transform long-form content into engaging short videos automatically with AI-powered editing and summarization.",
    emoji: "⚡",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://pictory.ai/",
    tags: ["content transformation", "short videos", "ai editing", "summarization"],
    category: "Video Generation & Editing",
    rating: 4.1,
    totalVotes: 2945
  },
  {
    icon: Mic,
    title: "Fliki",
    description: "AI video generator that creates videos from text with realistic voiceovers and AI avatars in multiple languages.",
    emoji: "🎙️",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://fliki.ai/",
    tags: ["text to video", "voiceovers", "ai avatars", "multiple languages"],
    category: "Video Generation & Editing",
    rating: 4.0,
    totalVotes: 2654
  },
  {
    icon: Edit3,
    title: "Clipchamp",
    description: "Microsoft's AI-powered video editor with automated editing features, templates, and easy-to-use interface.",
    emoji: "✂️",
    color: "from-indigo-500 to-purple-600",
    directUrl: "https://clipchamp.com/",
    tags: ["video editor", "automated editing", "templates", "microsoft"],
    category: "Video Generation & Editing",
    rating: 4.2,
    totalVotes: 3123
  }
];
