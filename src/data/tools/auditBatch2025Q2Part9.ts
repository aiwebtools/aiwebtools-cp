import { Tool } from "@/types/tools";
import { Globe, Video, Languages, Mic, FileText, BookOpen, Wand2, Gamepad2, Users, Sparkles, Palette } from "lucide-react";

// Import hero images
import laraTranslateHero from "@/assets/tools/lara-translate-hero.png";
import iTranslateHero from "@/assets/tools/itranslate-hero.png";
import blipCutHero from "@/assets/tools/blipcut-hero.png";
import tiktokBusinessHero from "@/assets/tools/tiktok-business-hero.png";
import fineVoiceHero from "@/assets/tools/finevoice-hero.png";
import freeSubtitlesHero from "@/assets/tools/free-subtitles-generator-hero.png";
import parakeetNvidiaHero from "@/assets/tools/parakeet-nvidia-hero.png";
import ai2uHero from "@/assets/tools/ai2u-hero.png";
import storyIllustratorHero from "@/assets/tools/story-illustrator-hero.png";
import myAdventuresHero from "@/assets/tools/my-adventures-hero.png";
import storyDiffusionHero from "@/assets/tools/story-diffusion-hero.png";
import aiStoryHero from "@/assets/tools/ai-story-hero.png";
import storytellerAugieHero from "@/assets/tools/storyteller-augie-hero.png";

// Audit Batch Q2 2025 Part 9: Translation, Marketing, Transcriber, Storytelling Generator
// 13 new verified tools added to database

export const auditBatch2025Q2Part9Tools: Tool[] = [
  // ========== TRANSLATION ==========
  {
    icon: Languages,
    title: "Lara Translate",
    description: "AI-powered translation platform delivering human-quality translations in 200+ languages. Professional document translation, real-time API, and specialized industry terminology for business and enterprise.",
    emoji: "🌐",
    color: "from-blue-500 to-teal-600",
    directUrl: "https://www.laratranslate.com/?via=aiwebtools",
    imageUrl: laraTranslateHero,
    tags: ["Translation", "AI Translator", "Document Translation", "language translation", "multilingual", "enterprise", "localization"],
    category: "Translation Tools",
    rating: 4.6,
    totalVotes: 2890
  },
  {
    icon: Globe,
    title: "iTranslate",
    description: "Smart AI translation app supporting 100+ languages with voice translation, offline mode, and camera translation. Instant text, voice, and image translation for travelers and multilingual communication.",
    emoji: "🗣️",
    color: "from-green-500 to-emerald-600",
    directUrl: "https://www.itranslate.com/?via=aiwebtools",
    imageUrl: iTranslateHero,
    tags: ["Translation", "Voice Translation", "Camera Translation", "mobile app", "offline translation", "travel", "language"],
    category: "Translation Tools",
    rating: 4.5,
    totalVotes: 4520
  },
  {
    icon: Video,
    title: "BlipCut AI Video Translator",
    description: "AI video translation and dubbing platform. Translate videos into 50+ languages with AI voice cloning, lip-sync dubbing, and automatic subtitle generation for global content distribution.",
    emoji: "🎬",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://blipcut.com/?via=aiwebtools",
    imageUrl: blipCutHero,
    tags: ["Video Translation", "AI Dubbing", "Lip Sync", "voice cloning", "subtitle generator", "localization", "Translation"],
    category: "Translation Tools",
    rating: 4.4,
    totalVotes: 1870
  },

  // ========== MARKETING ==========
  {
    icon: Video,
    title: "TikTok For Business",
    description: "Official TikTok advertising and business platform with AI-powered creative tools. Create viral ad campaigns, access TikTok's AI Creative Assistant, and reach billions of engaged users worldwide.",
    emoji: "📱",
    color: "from-pink-500 to-red-600",
    directUrl: "https://www.tiktok.com/business/?via=aiwebtools",
    imageUrl: tiktokBusinessHero,
    tags: ["TikTok Ads", "Social Media Marketing", "Video Ads", "AI advertising", "viral marketing", "influencer", "Marketing"],
    category: "Marketing & Sales",
    rating: 4.6,
    totalVotes: 8940
  },

  // ========== TRANSCRIBER ==========
  {
    icon: Mic,
    title: "FineVoice Speech to Text",
    description: "AI speech-to-text and voice recording platform with high-accuracy transcription. Convert audio to text in 40+ languages with speaker identification, punctuation, and real-time transcription.",
    emoji: "🎤",
    color: "from-orange-500 to-red-600",
    directUrl: "https://www.finevoice.com/?via=aiwebtools",
    imageUrl: fineVoiceHero,
    tags: ["Speech to Text", "Transcription", "Voice Recording", "audio to text", "dictation", "real-time transcription", "Transcriber"],
    category: "Audio & Music",
    rating: 4.4,
    totalVotes: 2340
  },
  {
    icon: FileText,
    title: "Free Subtitles Generator",
    description: "Free AI-powered subtitle and caption generator. Automatically create accurate subtitles for videos in multiple languages with timing synchronization and export to SRT, VTT, and other formats.",
    emoji: "📝",
    color: "from-blue-500 to-indigo-600",
    directUrl: "https://freesubtitles.ai/?via=aiwebtools",
    imageUrl: freeSubtitlesHero,
    tags: ["Subtitles", "Captions", "Video Transcription", "SRT generator", "accessibility", "free tool", "Transcriber"],
    category: "Video & Multimedia",
    rating: 4.3,
    totalVotes: 5670
  },
  {
    icon: Sparkles,
    title: "Parakeet by NVIDIA",
    description: "NVIDIA's state-of-the-art automatic speech recognition model. Enterprise-grade ASR with exceptional accuracy, multi-language support, and optimized for NVIDIA GPUs and edge deployment.",
    emoji: "🦜",
    color: "from-green-600 to-lime-500",
    directUrl: "https://build.nvidia.com/nvidia/parakeet-ctc-1.1b?via=aiwebtools",
    imageUrl: parakeetNvidiaHero,
    tags: ["Speech Recognition", "ASR", "NVIDIA AI", "enterprise transcription", "GPU optimized", "deep learning", "Transcriber"],
    category: "Audio & Music",
    rating: 4.7,
    totalVotes: 3210
  },

  // ========== STORYTELLING GENERATOR ==========
  {
    icon: Users,
    title: "AI2U: With You 'Til The End",
    description: "Interactive AI companion storytelling platform creating personalized narrative experiences. Build emotional connections through AI-driven stories that evolve based on your choices and interactions.",
    emoji: "💫",
    color: "from-purple-600 to-pink-500",
    directUrl: "https://ai2u.ai/?via=aiwebtools",
    imageUrl: ai2uHero,
    tags: ["AI Companion", "Interactive Story", "Narrative AI", "emotional AI", "personalized stories", "character AI", "Storytelling"],
    category: "Gaming & Entertainment",
    rating: 4.5,
    totalVotes: 2890
  },
  {
    icon: Palette,
    title: "Story Illustrator AI",
    description: "AI-powered story illustration generator creating visual narratives from text. Transform written stories into illustrated books with consistent character design and artistic style throughout.",
    emoji: "🎨",
    color: "from-amber-500 to-orange-600",
    directUrl: "https://storyillustrator.ai/?via=aiwebtools",
    imageUrl: storyIllustratorHero,
    tags: ["Story Illustration", "AI Art", "Book Illustration", "visual storytelling", "children's books", "narrative art", "Storytelling"],
    category: "Image & Design",
    rating: 4.4,
    totalVotes: 1560
  },
  {
    icon: BookOpen,
    title: "My Adventures AI",
    description: "Personalized AI adventure story generator creating custom stories featuring you as the main character. Choose your adventure with AI-generated narratives, illustrations, and interactive storylines.",
    emoji: "📚",
    color: "from-teal-500 to-cyan-600",
    directUrl: "https://myadventures.ai/?via=aiwebtools",
    imageUrl: myAdventuresHero,
    tags: ["Adventure Stories", "Personalized Stories", "Interactive Fiction", "children's stories", "AI storytelling", "custom books", "Storytelling"],
    category: "Writing & Content",
    rating: 4.5,
    totalVotes: 3450
  },
  {
    icon: Wand2,
    title: "StoryDiffusion",
    description: "AI consistent character story generation using diffusion models. Create visual stories with consistent characters, scenes, and art styles across multiple panels and pages.",
    emoji: "✨",
    color: "from-violet-600 to-purple-700",
    directUrl: "https://storydiffusion.ai/?via=aiwebtools",
    imageUrl: storyDiffusionHero,
    tags: ["Story Generation", "Consistent Characters", "AI Comics", "diffusion model", "visual narrative", "sequential art", "Storytelling"],
    category: "Image & Design",
    rating: 4.6,
    totalVotes: 2780
  },
  {
    icon: Sparkles,
    title: "AI Story Generator",
    description: "Free AI story generator creating complete narratives from simple prompts. Generate short stories, novels, and creative fiction with customizable genres, characters, and plot twists.",
    emoji: "📖",
    color: "from-indigo-500 to-blue-600",
    directUrl: "https://aistorygenerator.org/?via=aiwebtools",
    imageUrl: aiStoryHero,
    tags: ["Story Generator", "Creative Writing", "Fiction Writing", "narrative AI", "plot generator", "free tool", "Storytelling"],
    category: "Writing & Content",
    rating: 4.3,
    totalVotes: 6890
  },
  {
    icon: Video,
    title: "Storyteller by Augie",
    description: "AI-powered video storytelling platform turning text into engaging video stories. Create professional narrative videos with AI voiceover, visuals, and animations from simple text input.",
    emoji: "🎬",
    color: "from-rose-500 to-pink-600",
    directUrl: "https://augie.studio/?via=aiwebtools",
    imageUrl: storytellerAugieHero,
    tags: ["Video Storytelling", "AI Video", "Text to Video", "narrative video", "content creation", "automated video", "Storytelling"],
    category: "Video & Multimedia",
    rating: 4.5,
    totalVotes: 2340
  }
];
