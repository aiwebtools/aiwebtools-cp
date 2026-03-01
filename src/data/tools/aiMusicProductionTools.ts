
import { Tool } from "@/types/tools";
import landrHero from "@/assets/tools/landr-hero.jpg";
import spliceHero from "@/assets/tools/splice-hero.jpg";
import soundrawHero from "@/assets/tools/soundraw-hero.jpg";
import amperHero from "@/assets/tools/amper-hero.jpg";
import udioMusicHero from "@/assets/tools/udio-music-hero.jpg";
import boomyHero from "@/assets/tools/boomy-hero.jpg";
import lyriaHero from "@/assets/tools/lyria-deepmind-hero.jpg";
import { 
  Music, 
  Mic, 
  Radio, 
  Headphones, 
  Volume2,
  Disc,
  Sparkles
} from "lucide-react";

export const aiMusicProductionTools: Tool[] = [
  {
    icon: Music,
    title: "Landr",
    description: "AI-powered music mastering, distribution, and collaboration platform that instantly masters your tracks to professional quality.",
    emoji: "🎵",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://www.landr.com/?via=aiwebtools",
    imageUrl: landrHero,
    tags: ["Music Mastering", "Audio Editing", "mastering", "distribution", "AI audio", "music production", "collaboration"],
    category: "AI Music Production Tools",
    rating: 4.5,
    totalVotes: 4123
  },
  {
    icon: Headphones,
    title: "Splice AI",
    description: "AI-powered sample library and music creation platform with smart sample recommendations and royalty-free sounds.",
    emoji: "🎧",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://splice.com/?via=aiwebtools",
    imageUrl: spliceHero,
    tags: ["Music Generator", "Sound Effects", "samples", "sound library", "music creation", "royalty-free", "AI recommendations"],
    category: "AI Music Production Tools",
    rating: 4.6,
    totalVotes: 5432
  },
  {
    icon: Mic,
    title: "Udio",
    description: "Revolutionary AI music generation platform creating full songs with vocals, instrumentation, and professional mixing from text prompts.",
    emoji: "🎤",
    color: "from-orange-500 to-red-600",
    directUrl: "https://www.udio.com/?via=aiwebtools",
    imageUrl: udioMusicHero,
    category: "AI Music Production Tools",
    rating: 4.7,
    totalVotes: 6789
  },
  {
    icon: Radio,
    title: "Soundraw",
    description: "AI music generator creating royalty-free background music for videos, podcasts, and commercial projects with full customization.",
    emoji: "📻",
    color: "from-green-500 to-teal-600",
    directUrl: "https://soundraw.io/?via=aiwebtools",
    imageUrl: soundrawHero,
    tags: ["Music Generator", "AI music", "royalty-free", "background music", "customizable", "commercial use"],
    category: "AI Music Production Tools",
    rating: 4.4,
    totalVotes: 3876
  },
  {
    icon: Volume2,
    title: "Boomy",
    description: "AI music creation platform that lets anyone create original songs in seconds and earn revenue from streaming platforms.",
    emoji: "🔊",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://boomy.com/?via=aiwebtools",
    imageUrl: boomyHero,
    category: "AI Music Production Tools",
    rating: 4.2,
    totalVotes: 4321
  },
  {
    icon: Disc,
    title: "Amper Music",
    description: "AI music composition tool for creating custom soundtracks with adaptive music technology and full creative control.",
    emoji: "💿",
    color: "from-indigo-500 to-purple-600",
    directUrl: "https://www.shutterstock.com/discover/ampermusic?via=aiwebtools",
    imageUrl: amperHero,
    tags: ["Music Generator", "soundtracks", "adaptive music", "composition", "custom music", "AI composer"],
    category: "AI Music Production Tools",
    rating: 4.3,
    totalVotes: 2987
  },
  {
    icon: Sparkles,
    title: "Lyria (Google DeepMind's Text to Music Generator)",
    description: "Google DeepMind's groundbreaking AI music model integrated into Gemini, generating high-quality music from text descriptions with professional instrumentation, vocals, and mixing.",
    emoji: "🎶",
    color: "from-blue-500 to-teal-600",
    directUrl: "https://gemini.google.com/music",
    imageUrl: lyriaHero,
    tags: ["Music Generator", "text to music", "AI music", "Google DeepMind", "Gemini", "Lyria", "music generation", "AI composer", "Gemini Gem"],
    category: "AI Music Production Tools",
    rating: 4.8,
    totalVotes: 7200
  }
];
