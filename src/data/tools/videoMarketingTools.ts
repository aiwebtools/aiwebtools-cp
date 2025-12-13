
import { Tool } from "@/types/tools";
import { 
  Play,
  Music,
  Film,
  Video,
  Globe,
  Sparkles
} from "lucide-react";

export const videoMarketingTools: Tool[] = [
  {
    icon: Globe,
    title: "Google Flow Editing Studio",
    description: "Google's experimental visual editing tool that allows you to create and edit visual content with AI-powered features. Part of Google Labs' innovative tools for creative professionals.",
    emoji: "🌊",
    color: "from-blue-500 to-green-600",
    directUrl: "https://labs.google/fx/tools/flow/?via=aiwebtools",
    tags: ["Google Labs", "visual editing", "experimental", "creative tools", "AI editing", "Video Editor", "Motion Graphics"],
    category: "Video Tools",
    rating: 4.5,
    totalVotes: 2100
  },
  {
    icon: Play,
    title: "Pictory",
    description: "AI video creation tool that turns long-form content into engaging short videos. Perfect for social media, marketing, and content repurposing.",
    emoji: "▶️",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://pictory.ai/",
    tags: ["content repurposing", "short videos", "social media", "marketing", "long-form content", "Video Editor", "Short Form Video"],
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
    tags: ["text-to-speech", "realistic voices", "blog posts", "presentations", "narration", "Video Generator"],
    category: "Video Tools",
    rating: 4.2,
    totalVotes: 2345
  },
  {
    icon: Sparkles,
    title: "Elai.io",
    description: "AI video generation platform for creating personalized videos at scale. Features AI presenters and automated video production workflows.",
    emoji: "⭐",
    color: "from-green-500 to-blue-600",
    directUrl: "https://elai.io/",
    tags: ["personalized videos", "scale", "AI presenters", "automation", "workflows", "Video Generator", "Avatar Video"],
    category: "Video Tools",
    rating: 4.1,
    totalVotes: 1987
  },
  {
    icon: Film,
    title: "Animoto",
    description: "AI-powered video maker for creating professional marketing videos. Smart templates and automated editing for social media and business content.",
    emoji: "🎨",
    color: "from-purple-500 to-cyan-600",
    directUrl: "https://animoto.com/",
    tags: ["marketing videos", "smart templates", "automated editing", "social media", "business", "Video Generator", "Video Production"],
    category: "Video Tools",
    rating: 4.0,
    totalVotes: 3456
  },
  {
    icon: Film,
    title: "Wideo",
    description: "Online video creation platform with AI-assisted editing. Create professional animated videos, presentations, and marketing content with drag-and-drop simplicity.",
    emoji: "🎬",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://wideo.co/",
    tags: ["animated videos", "presentations", "marketing content", "drag-and-drop", "professional", "Animation", "Video Generator"],
    category: "Video Tools",
    rating: 4.0,
    totalVotes: 2543
  },
  {
    icon: Video,
    title: "Visla",
    description: "AI video creation platform for teams and businesses. Generate videos from text, record with teleprompter, and edit with AI-powered tools for professional content.",
    emoji: "📺",
    color: "from-indigo-500 to-cyan-600",
    directUrl: "https://www.visla.us/",
    tags: ["team collaboration", "business videos", "teleprompter", "professional content", "AI editing", "Video Editor", "Video Production"],
    category: "Video Tools",
    rating: 4.2,
    totalVotes: 2876
  }
];
