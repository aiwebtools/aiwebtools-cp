
import { Tool } from "@/types/tools";
import { 
  Video, Play, Camera, Film, Edit, Clapperboard, 
  Monitor, FileVideo, Zap, Sparkles, Music
} from "lucide-react";

export const videoTools: Tool[] = [
  {
    icon: Video,
    title: "Runway ML",
    description: "AI-powered video generation and editing platform for creative professionals and content creators.",
    emoji: "🎬",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://runwayml.com/?via=aiwebtools",
    tags: ["video generation", "AI video editing", "creative tools"],
    category: "Video Tools",
    rating: 4.5,
    totalVotes: 4567
  },
  {
    icon: Play,
    title: "Synthesia",
    description: "Create professional AI videos with virtual presenters and multiple language support.",
    emoji: "🤖",
    color: "from-blue-500 to-green-600",
    directUrl: "https://www.synthesia.io/?via=aiwebtools",
    tags: ["AI presenters", "video creation", "multilingual videos"],
    category: "Video Tools",
    rating: 4.4,
    totalVotes: 3456
  },
  {
    icon: Camera,
    title: "Luma AI",
    description: "Generate stunning 3D and video content using AI-powered technology.",
    emoji: "📹",
    color: "from-green-500 to-cyan-600",
    directUrl: "https://lumalabs.ai/?via=aiwebtools",
    tags: ["3D video", "AI video generation", "visual effects"],
    category: "Video Tools",
    rating: 4.3,
    totalVotes: 2987
  },
  {
    icon: Music,
    title: "Music Video Maker AI Studio",
    description: "Create professional music videos with AI-powered editing, effects, and synchronization tools.",
    emoji: "🎵",
    color: "from-green-500 to-blue-600",
    directUrl: "https://musicvideomakerstudio.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=rBQTUrvHcR8&list=TLGGHKS5WME8OJ8yODA1MjAyNQ",
    tags: ["music videos", "video editing", "AI effects", "synchronization"],
    category: "Video Tools",
    rating: 4.3,
    totalVotes: 2567
  },
  {
    icon: Film,
    title: "Movie Maker Studio AI SUITE",
    description: "Complete AI-powered movie production suite with scriptwriting, storyboarding, editing, and post-production tools.",
    emoji: "🎬",
    color: "from-red-500 to-purple-600",
    directUrl: "https://moviemakerstudioaisuite.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=Zdthelofv_E&list=TLGGyT65jYe0o6cyODA1MjAyNQ&t",
    tags: ["movie making", "video production", "AI suite", "filmmaking"],
    category: "Video Tools",
    rating: 4.5,
    totalVotes: 3456
  }
];
