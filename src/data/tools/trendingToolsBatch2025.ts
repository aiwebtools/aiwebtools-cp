import { Scan, Camera, Palette, Video, Layers, Code, MessageSquare, Film, Target, Zap, Globe } from "lucide-react";

// Hero image imports
import faceShapeDetectorHero from "@/assets/tools/face-shape-detector-hero.png";
import photoEditorAiHero from "@/assets/tools/photo-editor-ai-hero.png";
import aiVectorHero from "@/assets/tools/ai-vector-hero.png";
import seedanceHero from "@/assets/tools/seedance-hero.png";
import wan26Hero from "@/assets/tools/wan26-hero.png";
import minimaxM21Hero from "@/assets/tools/minimax-m21-hero.png";
import iquestCoderHero from "@/assets/tools/iquest-coder-hero.png";
import chatterboxTurboHero from "@/assets/tools/chatterbox-turbo-hero.png";
import aimagetovideoHero from "@/assets/tools/aimagetovideo-hero.png";
import aimyAdsHero from "@/assets/tools/aimy-ads-hero.png";
import gemini3FlashHero from "@/assets/tools/gemini-3-flash-hero.png";

/**
 * Trending AI Tools Batch 2025
 * Top trending tools from industry rankings - added to expand database coverage
 * All tools include 4K hero images, affiliate tracking, and proper categorization
 */
export const trendingToolsBatch2025 = [
  // === FACE & BEAUTY ANALYSIS ===
  {
    icon: Scan,
    title: "Face Shape Detector",
    description: "AI-powered face shape analysis tool that accurately identifies your face shape (oval, round, square, heart, oblong) and provides personalized hairstyle, makeup, and eyewear recommendations.",
    emoji: "👤",
    color: "from-pink-500 to-purple-600",
    directUrl: "https://faceshapedetector.com/?via=aiwebtools",
    imageUrl: faceShapeDetectorHero,
    tags: ["Face Analysis", "Beauty AI", "Face Shape", "Hairstyle Recommendations", "Makeup Tips", "Personal Style", "beauty tech", "selfie analysis"],
    category: "Image & Design",
    rating: 4.6,
    isFree: true
  },

  // === PHOTO EDITING ===
  {
    icon: Camera,
    title: "Photo Editor AI",
    description: "Comprehensive AI photo editor with background removal, enhancement, filters, object removal, and professional retouching. One-click AI improvements for stunning photos.",
    emoji: "📷",
    color: "from-orange-500 to-red-600",
    directUrl: "https://photoeditorai.com/?via=aiwebtools",
    imageUrl: photoEditorAiHero,
    tags: ["Photo Editor", "AI Enhancement", "Background Removal", "Retouching", "Image Editing", "Filters", "photo enhancement", "image improvement"],
    category: "Image & Design",
    rating: 4.7,
    isFree: true
  },

  // === VECTOR GRAPHICS ===
  {
    icon: Palette,
    title: "AI Vector",
    description: "Transform raster images into clean, scalable vector graphics with AI. Create SVG files, logos, and illustrations from photos or sketches with professional vectorization quality.",
    emoji: "🎨",
    color: "from-blue-500 to-indigo-600",
    directUrl: "https://aivector.io/?via=aiwebtools",
    imageUrl: aiVectorHero,
    tags: ["Vector Graphics", "SVG Generator", "Image to Vector", "Logo Creation", "Vectorization", "Illustration", "graphic design", "scalable graphics"],
    category: "Image & Design",
    rating: 4.5,
    isFree: false
  },

  // === VIDEO GENERATION - DANCE/MOTION ===
  {
    icon: Video,
    title: "Seedance 1.5 Pro",
    description: "Advanced AI video generation model specializing in dance and human motion synthesis. Create realistic dancing videos from text prompts or reference images with natural movement flow.",
    emoji: "💃",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://seedance.ai/?via=aiwebtools",
    imageUrl: seedanceHero,
    tags: ["Video Generation", "Dance AI", "Motion Synthesis", "Human Motion", "Text-to-Video", "Dance Videos", "animation", "choreography AI"],
    category: "Video & Multimedia",
    rating: 4.8,
    isFree: false
  },

  // === VIDEO GENERATION - CHINESE AI ===
  {
    icon: Film,
    title: "Wan2.6",
    description: "State-of-the-art Chinese video generation model rivaling top Western competitors. Create cinematic quality videos with exceptional motion coherence and visual fidelity from text prompts.",
    emoji: "🎬",
    color: "from-teal-500 to-cyan-600",
    directUrl: "https://wan.video/?via=aiwebtools",
    imageUrl: wan26Hero,
    tags: ["Video Generation", "Chinese AI", "Text-to-Video", "Cinematic", "High Quality Video", "AI Video", "motion synthesis", "film production"],
    category: "Video & Multimedia",
    rating: 4.9,
    isFree: false
  },

  // === MULTIMODAL AI ===
  {
    icon: Layers,
    title: "MiniMax M2.1",
    description: "Powerful multimodal AI model from MiniMax supporting text, image, audio, and video understanding. Competitive with leading Western models for diverse AI applications.",
    emoji: "🔮",
    color: "from-red-500 to-orange-600",
    directUrl: "https://minimax.chat/?via=aiwebtools",
    imageUrl: minimaxM21Hero,
    tags: ["Multimodal AI", "Chinese AI", "Text Generation", "Image Understanding", "Audio AI", "LLM", "general purpose AI", "MiniMax"],
    category: "AI Chat & Assistants",
    rating: 4.7,
    isFree: true
  },

  // === CODING AI ===
  {
    icon: Code,
    title: "IQuest-Coder-V1",
    description: "Specialized AI coding assistant optimized for code generation, debugging, and software development. Strong performance on coding benchmarks with efficient inference.",
    emoji: "💻",
    color: "from-green-500 to-emerald-600",
    directUrl: "https://huggingface.co/spaces/IQuest/IQuest-Coder-V1?via=aiwebtools",
    imageUrl: iquestCoderHero,
    tags: ["Coding AI", "Code Generation", "Developer Tools", "Programming", "AI Coding", "Software Development", "code assistant", "debugging"],
    category: "Coding & Development",
    rating: 4.6,
    isFree: true
  },

  // === VOICE AI ===
  {
    icon: MessageSquare,
    title: "Chatterbox Turbo",
    description: "Lightning-fast text-to-speech and voice cloning AI with expressive, natural-sounding voices. Create realistic voice content for videos, podcasts, and applications with minimal latency.",
    emoji: "🗣️",
    color: "from-blue-500 to-yellow-500",
    directUrl: "https://chatterbox.audio/?via=aiwebtools",
    imageUrl: chatterboxTurboHero,
    tags: ["Text-to-Speech", "Voice Cloning", "TTS", "Voice AI", "Audio Generation", "Voice Synthesis", "speech", "narration"],
    category: "Audio & Music",
    rating: 4.7,
    isFree: true
  },

  // === IMAGE TO VIDEO ===
  {
    icon: Film,
    title: "AIImageToVideo.pro",
    description: "Transform static images into dynamic videos with AI-powered animation. Bring photos to life with motion, camera movements, and visual effects for engaging video content.",
    emoji: "🎥",
    color: "from-orange-500 to-purple-600",
    directUrl: "https://aiimagetovideo.pro/?via=aiwebtools",
    imageUrl: aimagetovideoHero,
    tags: ["Image to Video", "Photo Animation", "AI Animation", "Video Creation", "Motion", "Dynamic Content", "video generation", "image animation"],
    category: "Video & Multimedia",
    rating: 4.5,
    isFree: false
  },

  // === ADVERTISING AI ===
  {
    icon: Target,
    title: "Aimy Ads",
    description: "AI-powered advertising creative generator that produces high-converting ad creatives for social media, display, and digital marketing campaigns with data-driven optimization.",
    emoji: "📢",
    color: "from-red-500 to-orange-600",
    directUrl: "https://aimy.ads/?via=aiwebtools",
    imageUrl: aimyAdsHero,
    tags: ["Advertising AI", "Ad Creative", "Marketing", "Social Media Ads", "Digital Advertising", "Campaign Optimization", "banners", "conversions"],
    category: "Marketing & Sales",
    rating: 4.6,
    isFree: false
  },

  // === GOOGLE AI ===
  {
    icon: Zap,
    title: "Gemini 3 Flash",
    description: "Google's fastest Gemini model optimized for speed and efficiency. Lightning-fast responses with strong multimodal capabilities for text, code, and image understanding at reduced latency.",
    emoji: "⚡",
    color: "from-blue-500 to-green-500",
    directUrl: "https://gemini.google.com/?via=aiwebtools",
    imageUrl: gemini3FlashHero,
    tags: ["Google AI", "Gemini", "Fast AI", "Multimodal", "Low Latency", "LLM", "efficient AI", "real-time", "gemini 3", "flash"],
    category: "AI Chat & Assistants",
    rating: 4.8,
    isFree: true
  }
];

export default trendingToolsBatch2025;
