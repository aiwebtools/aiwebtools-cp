
import { Tool } from "@/types/tools";
import { 
  Edit, 
  Zap,
  Play,
  Clock,
  Wand2
} from "lucide-react";

import munchHero from "@/assets/tools/munch-hero.jpg";
import vadooHero from "@/assets/tools/vadoo-hero.jpg";
import descriptHero from "@/assets/tools/descript-hero.jpg";
import kapwingHero from "@/assets/tools/kapwing-hero.jpg";

export const videoEditingTools: Tool[] = [
  {
    icon: Edit,
    title: "Descript",
    description: "AI-powered video and audio editor that works like a document. Edit videos by editing text, remove filler words, and clone voices.",
    emoji: "✂️",
    color: "from-green-500 to-blue-600",
    directUrl: "https://www.descript.com/",
    imageUrl: descriptHero,
    tags: ["text-based editing", "filler word removal", "voice cloning", "audio editing", "transcription", "Video Editor"],
    category: "Video Tools",
    rating: 4.7,
    totalVotes: 4234
  },
  {
    icon: Zap,
    title: "Kapwing",
    description: "Online video editor with AI features including auto-subtitles, background removal, and smart cropping. Collaborative editing platform.",
    emoji: "⚡",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://www.kapwing.com/",
    imageUrl: kapwingHero,
    tags: ["online editor", "auto-subtitles", "background removal", "smart cropping", "collaborative", "Video Editor"],
    category: "Video Tools",
    rating: 4.4,
    totalVotes: 2876
  },
  {
    icon: Edit,
    title: "Wondershare Filmora",
    description: "AI-powered video editor with smart features like auto-reframe, motion tracking, and AI audio denoise. Professional video editing made simple.",
    emoji: "🎞️",
    color: "from-orange-500 to-red-600",
    directUrl: "https://filmora.wondershare.com/",
    imageUrl: "/src/assets/tools/filmora-hero.png",
    tags: ["video editing", "motion tracking", "auto-reframe", "AI denoise", "professional", "Video Editor", "Motion Graphics"],
    category: "Video Tools",
    rating: 4.4,
    totalVotes: 3876
  },
  {
    icon: Edit,
    title: "Opus Clip",
    description: "AI-powered tool that turns long videos into viral short clips. Automatically identifies highlights and creates engaging social media content.",
    emoji: "✂️",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://www.opus.pro/",
    imageUrl: "/src/assets/tools/opus-clip-hero.png",
    tags: ["video clipping", "viral content", "highlights", "social media", "automation", "Video Editor", "Short Form Video"],
    category: "Video Tools",
    rating: 4.2,
    totalVotes: 2876
  },
  {
    icon: Clock,
    title: "Vidyo.ai",
    description: "AI-powered video editing tool that automatically creates short clips from long-form content. Perfect for creating social media content from podcasts, webinars, and interviews.",
    emoji: "⏱️",
    color: "from-red-500 to-orange-600",
    directUrl: "https://vidyo.ai/",
    imageUrl: "/src/assets/tools/vidyo-ai-hero.png",
    tags: ["automatic clipping", "long-form to short", "social media", "podcasts", "webinars", "interviews", "Video Editor", "Short Form Video"],
    category: "Video Tools",
    rating: 4.3,
    totalVotes: 3234
  },
  {
    icon: Edit,
    title: "Munch",
    description: "AI-powered video repurposing tool that extracts the most engaging moments from long-form content. Automatically creates short clips optimized for social platforms.",
    emoji: "🍽️",
    color: "from-orange-500 to-yellow-600",
    directUrl: "https://www.getmunch.com/",
    imageUrl: munchHero,
    tags: ["video repurposing", "engaging moments", "short clips", "social optimization", "automatic", "Video Editor", "Short Form Video"],
    category: "Video Tools",
    rating: 4.1,
    totalVotes: 1987
  },
  {
    icon: Wand2,
    title: "Vadoo AI",
    description: "AI video editing platform that automatically adds captions, creates highlights, and optimizes content for social media. Transform raw footage into polished videos instantly.",
    emoji: "🪄",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://vadoo.tv/",
    imageUrl: vadooHero,
    tags: ["automatic captions", "highlights creation", "social optimization", "raw footage", "instant editing", "Video Editor"],
    category: "Video Tools",
    rating: 4.2,
    totalVotes: 2654
  },
  {
    icon: Play,
    title: "Klap AI",
    description: "AI-powered video editor that turns videos (even 2h49 long) into viral shorts. Create TikToks, Reels, Shorts from your long videos in just one click. Automatically finds the best moments and creates viral-ready content for social media platforms.",
    emoji: "🎬",
    color: "from-pink-500 to-purple-600",
    directUrl: "https://klap.app/?via=Aiwebtools",
    imageUrl: "/src/assets/tools/klap-hero.png",
    tags: ["video clipping", "viral content", "social media", "automatic editing", "short clips", "highlights", "Video Editor", "Short Form Video"],
    category: "Video Tools",
    rating: 4.3,
    totalVotes: 2847
  }
];
