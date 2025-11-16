import { Tool } from "@/types/tools";
import { Video, Scissors, Wand2, Film, Sparkles } from "lucide-react";

export const aiVideoEditingTools: Tool[] = [
  {
    icon: Video,
    title: "Descript",
    description: "AI-powered video and audio editing through text. Edit videos as easily as editing a document, remove filler words, clone your voice, and generate automatic captions.",
    emoji: "🎬",
    color: "from-purple-500 to-indigo-600",
    directUrl: "https://www.descript.com/?via=aiwebtools",
    tags: ["video editing", "transcription", "AI voice cloning", "text-based editing", "audio editing", "subtitles", "screen recording"],
    category: "AI Video Editing",
    rating: 4.9,
    totalVotes: 12456
  },
  {
    icon: Scissors,
    title: "CapCut",
    description: "Free AI-powered video editor with auto-captions, background removal, AI effects, and smart editing tools. Perfect for TikTok, Instagram, and YouTube creators.",
    emoji: "✂️",
    color: "from-pink-500 to-rose-600",
    directUrl: "https://www.capcut.com/?via=aiwebtools",
    tags: ["video editing", "social media", "auto captions", "AI effects", "mobile editing", "free", "content creation"],
    category: "AI Video Editing",
    rating: 4.8,
    totalVotes: 23456
  },
  {
    icon: Wand2,
    title: "Wondershare Filmora",
    description: "AI-enhanced video editing software with smart cutout, auto-reframe, motion tracking, and AI effects. Intuitive interface for beginners and professionals.",
    emoji: "🪄",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://filmora.wondershare.com/?via=aiwebtools",
    tags: ["video editing", "AI effects", "motion tracking", "auto reframe", "content creation", "video production"],
    category: "AI Video Editing",
    rating: 4.7,
    totalVotes: 15678
  },
  {
    icon: Film,
    title: "Adobe Premiere Pro (AI Features)",
    description: "Professional video editing with AI-powered features including auto-reframe, speech-to-text, AI audio cleanup, color matching, and intelligent scene detection.",
    emoji: "🎥",
    color: "from-red-500 to-orange-600",
    directUrl: "https://www.adobe.com/products/premiere.html?via=aiwebtools",
    tags: ["professional editing", "AI automation", "Adobe Creative Cloud", "video production", "color grading", "audio enhancement"],
    category: "AI Video Editing",
    rating: 4.8,
    totalVotes: 28934
  },
  {
    icon: Sparkles,
    title: "VEED.IO",
    description: "AI-powered online video editor with automatic subtitles, background removal, eye contact correction, and AI avatars. Edit videos directly in your browser.",
    emoji: "✨",
    color: "from-green-500 to-emerald-600",
    directUrl: "https://www.veed.io/?via=aiwebtools",
    tags: ["online editor", "auto subtitles", "background removal", "AI avatars", "browser-based", "video editing"],
    category: "AI Video Editing",
    rating: 4.6,
    totalVotes: 9876
  },
  {
    icon: Video,
    title: "Runway ML",
    description: "AI-powered video editing suite with generative AI tools, motion tracking, green screen removal, and advanced AI effects. Perfect for creative professionals.",
    emoji: "🎨",
    color: "from-indigo-500 to-purple-600",
    directUrl: "https://runwayml.com/?via=aiwebtools",
    tags: ["AI video generation", "generative AI", "video editing", "motion tracking", "AI effects", "creative tools"],
    category: "AI Video Editing",
    rating: 4.7,
    totalVotes: 11234
  }
];
