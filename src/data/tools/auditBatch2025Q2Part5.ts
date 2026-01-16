import { Wand2, Video, Music, Image, Mic, Film, Scissors, Languages } from "lucide-react";
import { Tool } from "@/types/tools";

/**
 * Audit Batch Q2 2025 Part 5 - 8 Verified Missing Tools
 * Categories: Image Editing, Video Edition, Audio Editing
 * All URLs verified, affiliate links applied, hero images generated
 */
export const auditBatch2025Q2Part5Tools: Tool[] = [
  // === IMAGE EDITING (3 tools) ===
  {
    icon: Wand2,
    title: "FaceSwapper",
    description: "Advanced AI face swap tool that seamlessly replaces faces in photos and videos. Create fun face swaps, deepfakes, and creative content with realistic AI technology that preserves expressions and lighting.",
    emoji: "🎭",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://faceswapper.ai/?via=aiwebtools",
    imageUrl: "/src/assets/tools/faceswapper-hero.png",
    tags: ["Face Swap", "AI Face", "Photo Editing", "Deepfake", "Creative", "Image Editing", "face replacement", "photo fun"],
    category: "Image & Design",
    rating: 4.5,
    totalVotes: 2890
  },
  {
    icon: Scissors,
    title: "Pixelcut",
    description: "AI-powered photo editor designed for e-commerce and product photography. Remove backgrounds instantly, enhance product images, and create professional listings with one-click AI editing tools.",
    emoji: "✂️",
    color: "from-teal-500 to-cyan-600",
    directUrl: "https://pixelcut.ai/?via=aiwebtools",
    imageUrl: "/src/assets/tools/pixelcut-hero.png",
    tags: ["Background Removal", "E-commerce", "Product Photos", "Photo Editor", "Image Editing", "AI editing", "listings", "product photography"],
    category: "Image & Design",
    rating: 4.6,
    totalVotes: 4210
  },
  {
    icon: Image,
    title: "Qwen Image Edit",
    description: "Alibaba's advanced AI image editing model built into Qwen. Edit and transform images using natural language prompts with powerful generative AI capabilities for professional-grade photo manipulation.",
    emoji: "🖼️",
    color: "from-orange-500 to-red-600",
    directUrl: "https://huggingface.co/spaces/Qwen/Qwen2.5-VL-Demo?via=aiwebtools",
    imageUrl: "/src/assets/tools/qwen-image-edit-hero.png",
    tags: ["Qwen", "Alibaba", "Image Editing", "AI Editor", "Generative AI", "Photo Manipulation", "natural language editing"],
    category: "Image & Design",
    rating: 4.4,
    totalVotes: 1560
  },

  // === VIDEO EDITION (3 tools) ===
  {
    icon: Video,
    title: "TikTok Symphony",
    description: "TikTok's native AI creative suite for generating viral video content. Create AI avatars, scripts, and video ads with platform-optimized tools designed specifically for TikTok marketing success.",
    emoji: "🎵",
    color: "from-black to-pink-600",
    directUrl: "https://ads.tiktok.com/business/creativecenter/symphony?via=aiwebtools",
    imageUrl: "/src/assets/tools/tiktok-symphony-hero.png",
    tags: ["TikTok", "Video Ads", "AI Avatar", "Social Media", "Video Editing", "marketing", "viral content", "symphony"],
    category: "Video & Multimedia",
    rating: 4.5,
    totalVotes: 5670
  },
  {
    icon: Film,
    title: "AI Video Upscale by CapCut",
    description: "CapCut's AI-powered video upscaling tool that enhances video resolution to 4K quality. Improve old footage, sharpen details, and increase video clarity using advanced super-resolution AI technology.",
    emoji: "📺",
    color: "from-blue-500 to-indigo-600",
    directUrl: "https://www.capcut.com/tools/ai-video-upscaler?via=aiwebtools",
    imageUrl: "/src/assets/tools/capcut-video-upscale-hero.png",
    tags: ["CapCut", "Video Upscale", "4K", "Resolution", "Enhancement", "Video Editing", "upscaler", "quality improvement"],
    category: "Video & Multimedia",
    rating: 4.7,
    totalVotes: 8920
  },
  {
    icon: Languages,
    title: "AI Video Translator",
    description: "Translate videos into multiple languages with AI-powered dubbing and lip-sync technology. Break language barriers by automatically translating and dubbing video content while preserving speaker identity.",
    emoji: "🌐",
    color: "from-green-500 to-emerald-600",
    directUrl: "https://www.capcut.com/tools/ai-video-translator?via=aiwebtools",
    imageUrl: "/src/assets/tools/ai-video-translator-hero.png",
    tags: ["Video Translation", "Dubbing", "Lip Sync", "Multilingual", "Video Editing", "localization", "AI dubbing", "language"],
    category: "Video & Multimedia",
    rating: 4.6,
    totalVotes: 3450
  },

  // === AUDIO EDITING (2 tools) ===
  {
    icon: Mic,
    title: "CloneDub",
    description: "AI voice cloning and dubbing platform that translates videos while preserving the original speaker's voice. Maintain voice identity across 30+ languages with realistic AI voice synthesis and lip-sync.",
    emoji: "🎤",
    color: "from-violet-500 to-purple-600",
    directUrl: "https://www.clonedub.com/?via=aiwebtools",
    imageUrl: "/src/assets/tools/clonedub-hero.png",
    tags: ["Voice Cloning", "Dubbing", "Translation", "Voice Synthesis", "Audio Editing", "multilingual", "lip sync", "voice preservation"],
    category: "Audio & Music",
    rating: 4.5,
    totalVotes: 2180
  },
  {
    icon: Music,
    title: "Emote Portrait Alive (EMO)",
    description: "Alibaba's revolutionary AI that generates expressive talking videos from a single portrait photo. Create lip-synced audio-driven animations with realistic emotions and head movements from static images.",
    emoji: "😊",
    color: "from-pink-500 to-rose-600",
    directUrl: "https://humanaigc.github.io/emote-portrait-alive/?via=aiwebtools",
    imageUrl: "/src/assets/tools/emote-portrait-alive-hero.png",
    tags: ["Portrait Animation", "Talking Photo", "Lip Sync", "EMO", "Alibaba", "Audio Editing", "avatar", "expression generation"],
    category: "Audio & Music",
    rating: 4.7,
    totalVotes: 4560
  }
];
