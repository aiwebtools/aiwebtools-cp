
import { Tool } from "@/types/tools";
import { 
  Video, 
  Music, 
  Palette, 
  Camera, 
  Film, 
  Mic,
  Edit,
  Brush,
  Play,
  FileVideo,
  Image,
  Headphones
} from "lucide-react";

export const creativeSuites: Tool[] = [
  {
    icon: Video,
    title: "Movie Maker Studio AI SUITE",
    description: "Complete AI-powered movie production suite with scriptwriting, storyboarding, editing, and post-production tools.",
    emoji: "🎬",
    color: "from-red-500 to-purple-600",
    directUrl: "https://moviemakerstudioaisuite.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=Zdthelofv_E&list=TLGGyT65jYe0o6cyODA1MjAyNQ&t",
    tags: ["movie making", "video production", "AI suite", "filmmaking"],
    category: "Creative Suites",
    rating: 4.5,
    totalVotes: 3456
  },
  {
    icon: Play,
    title: "STAGEMASTER AI SUITE FOR THE Preforming Arts",
    description: "Comprehensive AI suite for theater, dance, and performing arts with choreography, staging, and production assistance.",
    emoji: "🎭",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://stagemasteraisuite.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=-QIxYSlcRWM",
    tags: ["performing arts", "theater", "choreography", "staging"],
    category: "Creative Suites",
    rating: 4.4,
    totalVotes: 2876
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
    category: "Creative Suites",
    rating: 4.3,
    totalVotes: 2567
  },
  {
    icon: Edit,
    title: "Movie Script Writer GPT",
    description: "Professional screenplay and script writing assistant with industry-standard formatting and story development tools.",
    emoji: "📝",
    color: "from-blue-500 to-indigo-600",
    directUrl: "https://moviescriptwritergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=4e3Rkurt3-c&list=TLGGtoG6kc0vED4yODA1MjAyNQ",
    tags: ["screenwriting", "script writing", "storytelling", "formatting"],
    category: "Creative Suites",
    rating: 4.6,
    totalVotes: 3234
  }
];
