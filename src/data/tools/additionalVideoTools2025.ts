import { Tool } from "@/types/tools";
import { 
  Video, Play, Edit, Camera, Film, Monitor, 
  Mic, Volume2, ImageIcon, Sparkles, Scissors,
  Download, Upload, Layers, Palette, Wand2, Clock
} from "lucide-react";

export const additionalVideoTools2025: Tool[] = [
  {
    icon: Video,
    title: "Veed.io",
    description: "Online video editor with AI-powered features such as automatic subtitles, background removal, and smart editing tools.",
    emoji: "🎬",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://www.veed.io/?via=aiwebtools",
    tags: ["Video Editing", "Online Editor", "AI Features", "Subtitles", "Background Removal"],
    category: "VIDEO & MULTIMEDIA",
    rating: 4.5,
    totalVotes: 3240
  },
  {
    icon: Sparkles,
    title: "Veo",
    description: "State-of-the-art text-to-video model from Google DeepMind that creates high-quality video content from text descriptions.",
    emoji: "✨",
    color: "from-red-500 to-pink-500",
    directUrl: "https://deepmind.google/technologies/veo/?via=aiwebtools",
    tags: ["Google DeepMind", "Text-to-Video", "AI Generation", "High Quality", "Video Creation"],
    category: "VIDEO & MULTIMEDIA",
    rating: 4.8,
    totalVotes: 4150
  },
  {
    icon: Edit,
    title: "VideoAI",
    description: "Platform that repurposes long videos into bite-sized clips perfect for social media with AI-powered editing.",
    emoji: "✂️",
    color: "from-orange-500 to-red-500",
    directUrl: "https://video.ai/?via=aiwebtools",
    tags: ["Video Repurposing", "Social Media", "Clip Creation", "AI Editing", "Content Optimization"],
    category: "VIDEO & MULTIMEDIA",
    rating: 4.3,
    totalVotes: 2180
  },
  {
    icon: Layers,
    title: "Vizzy AI",
    description: "Tool that automatically edits long videos into clips with AI-powered scene detection and highlight extraction.",
    emoji: "🎯",
    color: "from-teal-500 to-green-500",
    directUrl: "https://vizzy.ai/?via=aiwebtools",
    tags: ["Auto Editing", "Scene Detection", "Highlights", "Video Clips", "AI Processing"],
    category: "VIDEO & MULTIMEDIA",
    rating: 4.2,
    totalVotes: 1890
  },
  {
    icon: Clock,
    title: "Wisecut",
    description: "AI video editing tool that automatically cuts silences, adds music, and creates engaging video content.",
    emoji: "⏰",
    color: "from-purple-500 to-indigo-500",
    directUrl: "https://wisecut.video/?via=aiwebtools",
    tags: ["Auto Cut", "Silence Removal", "Music Addition", "AI Editing", "Content Enhancement"],
    category: "VIDEO & MULTIMEDIA",
    rating: 4.4,
    totalVotes: 2650
  }
];