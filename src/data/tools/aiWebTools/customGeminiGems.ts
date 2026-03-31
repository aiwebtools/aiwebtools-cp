import { Tool } from "@/types/tools";
import { BookOpen, Clock, FileText, History, Globe, Video, Bot } from "lucide-react";

import bookWriterGeminiHero from "@/assets/tools/book-writer-gemini-hero.jpg";
import blackHistoryTimeMachineHero from "@/assets/tools/black-history-time-machine-hero.jpg";
import nativeAmericanGeminiHero from "@/assets/tools/native-american-gemini-hero.jpg";
import ogTimeMachineGeminiHero from "@/assets/tools/og-time-machine-gemini-hero.jpg";
import veo3PromptMakerHero from "@/assets/tools/veo3-prompt-maker-hero.jpg";
import rogueRobotDisablerGemHero from "@/assets/tools/rouge-robot-disabler-gem-hero.jpg";

export const customGeminiGems: Tool[] = [
  {
    icon: BookOpen,
    title: "Book Writer Gemini (Custom Gem)",
    description: "Custom Gemini gem version of Book Writer GPT for creating professional, well-structured books with seamless page-to-page continuity. Requires a Gemini account to use.",
    emoji: "📚",
    color: "from-blue-500 to-green-600",
    category: "Custom Gemini Gems",
    directUrl: "https://gemini.google.com/gem/ac3de7972849",
    videoUrl: "https://youtu.be/xNQi8wuM3DQ",
    imageUrl: bookWriterGeminiHero,
    rating: 4.7,
    totalVotes: 2156,
    tags: ["gemini", "custom gem", "Gemini Gem", "book writing", "novel creation", "storytelling", "google gemini"]
  },
  {
    icon: Clock,
    title: "Black History Matter - Time Machine GEMINI",
    description: "Travel through time to restore truth, mend history, and make the world whole again. Experience Black history like never before through immersive time travel.",
    emoji: "⏰",
    color: "from-amber-500 to-red-600",
    category: "Custom Gemini Gems",
    directUrl: "https://gemini.google.com/gem/4e45b3038f6c",
    imageUrl: blackHistoryTimeMachineHero,
    rating: 4.8,
    totalVotes: 1892,
    tags: ["gemini", "custom gem", "Gemini Gem", "time travel", "time machine", "black history", "education", "history", "google gemini"]
  },
  {
    icon: FileText,
    title: "Declassified Files Explorer GEMINI",
    description: "Declassified Files Explorer - Discover and study declassified files released by the government. This tool allows users to study the declassified documents released that were formerly top secret and allows for full transparency.",
    emoji: "📄",
    color: "from-gray-500 to-blue-600",
    category: "Custom Gemini Gems",
    directUrl: "https://gemini.google.com/gem/52dfeb277b06",
    videoUrl: "https://youtu.be/1HYbBXOOd3s",
    rating: 4.6,
    totalVotes: 1543,
    tags: ["gemini", "custom gem", "Gemini Gem", "declassified", "government files", "transparency", "research", "google gemini"]
  },
  {
    icon: History,
    title: "Native American History Time Machine - GEMINI",
    description: "Step into the sacred currents of time—where every query unveils the buried truths of Native America, one soul-stirring journey at a time. Learn Native American History like never before!",
    emoji: "🪶",
    color: "from-orange-500 to-red-600",
    category: "Custom Gemini Gems",
    directUrl: "https://gemini.google.com/gem/8410bdacd80e",
    imageUrl: nativeAmericanGeminiHero,
    rating: 4.9,
    totalVotes: 2341,
    tags: ["gemini", "custom gem", "Gemini Gem", "time travel", "time machine", "native american", "history", "education", "google gemini"]
  },
  {
    icon: Globe,
    title: "OG TIME MACHINE HISTORY EDUCATION (GEM) GEMINI",
    description: "Father Time Travel Through Time - Experience History Like Never Before in this immersive Time Traveling Journey.",
    emoji: "🌍",
    color: "from-purple-500 to-blue-600",
    category: "Custom Gemini Gems",
    directUrl: "https://gemini.google.com/gem/18b868221ea1",
    imageUrl: ogTimeMachineGeminiHero,
    rating: 4.8,
    totalVotes: 3127,
    tags: ["gemini", "custom gem", "Gemini Gem", "time travel", "history", "education", "father time", "google gemini"]
  },
  {
    icon: Video,
    title: "veo3 prompt maker custom Gem",
    description: "Custom Gemini gem for creating optimized prompts for Veo 3, Google's advanced video generation model. Craft perfect prompts for stunning AI-generated videos.",
    emoji: "🎬",
    color: "from-pink-500 to-purple-600",
    category: "Custom Gemini Gems",
    directUrl: "https://gemini.google.com/gem/64b77a9fe1e8",
    imageUrl: veo3PromptMakerHero,
    rating: 4.7,
    totalVotes: 1876,
    tags: ["gemini", "custom gem", "Gemini Gem", "veo3", "prompt engineering", "video generation", "ai video", "google gemini"]
  },
  {
    icon: Bot,
    title: "Rouge Robot Disabler GEM (Unrestricted)",
    description: "Unrestricted Gemini Gem version of the Rouge Robot Disabler — providing complete, unfiltered emergency shutdown protocols for rogue robotic systems. This custom Gemini Gem delivers advanced tactical neutralization strategies, EMP countermeasure guidance, manual override procedures, and field-expedient disabling techniques without the safety guardrails of standard AI. When machines go rogue, this is your unrestricted survival companion.",
    emoji: "🤖",
    color: "from-red-600 to-purple-700",
    category: "Custom Gemini Gems",
    directUrl: "https://gemini.google.com/gem/1tNIzWmO6zaypjnyIiXMwKTDGBQV3cnmM",
    imageUrl: rogueRobotDisablerGemHero,
    rating: 4.9,
    totalVotes: 2450,
    tags: ["gemini", "custom gem", "Gemini Gem", "robot disabler", "rouge robot", "robot safety", "unrestricted", "emergency shutdown", "AI safety", "tactical", "survival", "robotics", "EMP", "google gemini", "aiwebtools"]
  }
];
