import { Tool } from "@/types/tools";
import { 
  Music, 
  Video,
  Mic,
  Film,
  Play,
  Sparkles,
  Wand2,
  Users
} from "lucide-react";
import sunoAiHero from "@/assets/tools/suno-ai-hero.jpg";
import udioHero from "@/assets/tools/udio-hero.jpg";
import soraOpenAiHero from "@/assets/tools/sora-openai-hero.jpg";
import runwayGen3Hero from "@/assets/tools/runway-gen3-hero.jpg";
import pikaAiHero from "@/assets/tools/pika-ai-hero.jpg";
import lumaDreamMachineHero from "@/assets/tools/luma-dream-machine-hero.jpg";
import heygenHero from "@/assets/tools/heygen-hero.jpg";
import synthesiaHero from "@/assets/tools/synthesia-hero.jpg";
import dIdHero from "@/assets/tools/d-id-hero.jpg";

export const topMusicVideoTools: Tool[] = [
  // Music Generation
  {
    icon: Music,
    title: "Suno AI",
    description: "Revolutionary AI music generator creating full songs with vocals and lyrics from text prompts. Generate professional-quality music in any genre with v4 model. Most popular AI music tool.",
    emoji: "🎵",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://suno.com/?via=aiwebtools",
    imageUrl: sunoAiHero,
    tags: ["Suno", "AI music", "music generation", "vocals", "lyrics", "full songs", "genre music"],
    category: "AI Music Generation",
    rating: 4.9,
    totalVotes: 124000
  },
  {
    icon: Mic,
    title: "Udio",
    description: "Advanced AI music generator by ex-DeepMind engineers. Create high-quality music with natural-sounding vocals, precise control, and extend/edit capabilities. Strong Suno competitor.",
    emoji: "🎤",
    color: "from-orange-500 to-red-600",
    directUrl: "https://www.udio.com/?via=aiwebtools",
    imageUrl: udioHero,
    tags: ["Udio", "AI music", "music creation", "vocals", "DeepMind", "professional music", "editing"],
    category: "AI Music Generation",
    rating: 4.8,
    totalVotes: 89000
  },
  
  // Video Generation
  {
    icon: Film,
    title: "Sora (OpenAI)",
    description: "OpenAI's groundbreaking text-to-video AI model creating up to 60-second videos. Currently in limited release, Sora generates highly realistic scenes with complex camera movements and multiple characters.",
    emoji: "🎬",
    color: "from-green-500 to-teal-600",
    directUrl: "https://sora.com/?via=aiwebtools",
    imageUrl: soraOpenAiHero,
    tags: ["Sora", "OpenAI", "text-to-video", "AI video", "realistic video", "60 seconds", "groundbreaking"],
    category: "AI Video Generation",
    rating: 4.9,
    totalVotes: 156000
  },
  {
    icon: Video,
    title: "Runway Gen-3",
    description: "Industry-leading AI video generation platform. Gen-3 Alpha delivers cinematic quality video from text and images with precise motion control. Used by professionals worldwide.",
    emoji: "🎥",
    color: "from-blue-500 to-indigo-600",
    directUrl: "https://runwayml.com/?via=aiwebtools",
    imageUrl: runwayGen3Hero,
    tags: ["Runway", "Gen-3", "AI video", "cinematic", "professional", "motion control", "text-to-video"],
    category: "AI Video Generation",
    rating: 4.8,
    totalVotes: 134000
  },
  {
    icon: Play,
    title: "Pika",
    description: "Fast AI video generator creating 3-second clips with impressive quality. Pika 2.0 offers character consistency, scene expansion, and rapid iteration for social media content.",
    emoji: "▶️",
    color: "from-pink-500 to-purple-600",
    directUrl: "https://pika.art/?via=aiwebtools",
    imageUrl: pikaAiHero,
    tags: ["Pika", "AI video", "fast generation", "social media", "character consistency", "quick videos"],
    category: "AI Video Generation",
    rating: 4.7,
    totalVotes: 98000
  },
  {
    icon: Sparkles,
    title: "Luma Dream Machine",
    description: "Ultra-fast AI video generation with Ray2 model. Create high-quality 5-second videos in 120 seconds. Excellent for quick iterations and creative experimentation.",
    emoji: "✨",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://lumalabs.ai/dream-machine?via=aiwebtools",
    imageUrl: lumaDreamMachineHero,
    tags: ["Luma", "Dream Machine", "fast video", "AI video", "quick generation", "Ray2", "experimentation"],
    category: "AI Video Generation",
    rating: 4.7,
    totalVotes: 89000
  },
  {
    icon: Users,
    title: "HeyGen",
    description: "AI avatar video platform creating talking head videos with realistic lip-sync in 40+ languages. Perfect for marketing, training, and personalized video content at scale.",
    emoji: "👤",
    color: "from-green-600 to-teal-600",
    directUrl: "https://www.heygen.com/?via=aiwebtools",
    imageUrl: heygenHero,
    tags: ["HeyGen", "AI avatars", "talking head", "lip-sync", "multilingual", "marketing videos", "personalized"],
    category: "AI Video Generation",
    rating: 4.8,
    totalVotes: 112000
  },
  {
    icon: Film,
    title: "Synthesia",
    description: "Enterprise AI video platform with 150+ AI avatars and 120+ languages. Create professional training videos, product demos, and corporate communications without cameras or studios.",
    emoji: "🎭",
    color: "from-blue-600 to-indigo-600",
    directUrl: "https://www.synthesia.io/?via=aiwebtools",
    imageUrl: synthesiaHero,
    tags: ["Synthesia", "enterprise video", "AI avatars", "training videos", "corporate", "120 languages", "professional"],
    category: "AI Video Generation",
    rating: 4.7,
    totalVotes: 87000
  },
  {
    icon: Wand2,
    title: "D-ID",
    description: "Create talking avatar videos from still images. AI-powered digital humans with natural expressions and movements. Ideal for personalized video messages and creative content.",
    emoji: "🪄",
    color: "from-purple-600 to-pink-600",
    directUrl: "https://www.d-id.com/?via=aiwebtools",
    imageUrl: dIdHero,
    tags: ["D-ID", "talking avatars", "digital humans", "photo animation", "personalized videos", "AI faces"],
    category: "AI Video Generation",
    rating: 4.6,
    totalVotes: 76000
  },
  {
    icon: Film,
    title: "Artlist (Sora 2)",
    description: "Professional creative assets platform now featuring Sora 2 by OpenAI for AI video generation. Access royalty-free stock footage, music, sound effects, plus cutting-edge AI video tools all in one platform.",
    emoji: "🎬",
    color: "from-indigo-600 to-purple-600",
    directUrl: "https://artlist.io/?via=aiwebtools",
    tags: ["Artlist", "Sora 2", "Sora", "AI video", "OpenAI", "stock footage", "royalty-free", "creative assets", "video generation", "professional"],
    category: "AI Video Generation",
    rating: 4.8,
    totalVotes: 112000
  }
];
