import { Tool } from "@/types/tools";
import { Mic, Volume2, Radio, Sparkles, Headphones, Music } from "lucide-react";

import resembleAiHero from "@/assets/tools/resemble-ai-hero.jpg";
import wellsaidLabsHero from "@/assets/tools/wellsaid-labs-hero.jpg";
import murfAiHero from "@/assets/tools/murf-ai-hero.jpg";
import lovoHero from "@/assets/tools/lovo-hero.jpg";
import playHtHero from "@/assets/tools/play-ht-hero.jpg";
import speechifyHero from "@/assets/tools/speechify-hero.jpg";

export const aiVoiceSpeechTools: Tool[] = [
  {
    icon: Mic,
    title: "Resemble AI",
    description: "AI voice cloning and text-to-speech platform. Create custom voices, clone existing voices, and generate natural-sounding speech for any application with real-time synthesis.",
    emoji: "🎤",
    color: "from-purple-500 to-indigo-600",
    directUrl: "https://www.resemble.ai/?via=aiwebtools",
    imageUrl: resembleAiHero,
    tags: ["Voice Cloning", "Text-to-Speech", "voice cloning", "AI voices", "custom voices", "speech synthesis", "real-time voice"],
    category: "AI Voice & Speech",
    rating: 4.7,
    totalVotes: 12456
  },
  {
    icon: Volume2,
    title: "WellSaid Labs",
    description: "AI voice generation platform with studio-quality voice overs. Create professional narration for videos, e-learning, and content with lifelike AI voices.",
    emoji: "🔊",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://wellsaidlabs.com/?via=aiwebtools",
    imageUrl: wellsaidLabsHero,
    tags: ["Text-to-Speech", "Voice Synthesis", "AI voices", "voice over", "narration", "professional voices", "studio quality"],
    category: "AI Voice & Speech",
    rating: 4.8,
    totalVotes: 15678
  },
  {
    icon: Radio,
    title: "Murf.ai",
    description: "AI voice generator with 120+ realistic text-to-speech voices. Create voiceovers for videos, presentations, and e-learning with customizable emotions and tones.",
    emoji: "📻",
    color: "from-green-500 to-emerald-600",
    directUrl: "https://murf.ai/?via=aiwebtools",
    imageUrl: murfAiHero,
    tags: ["Text-to-Speech", "Voice Synthesis", "AI voices", "voice over", "video narration", "realistic voices", "voice generator"],
    category: "AI Voice & Speech",
    rating: 4.7,
    totalVotes: 18234
  },
  {
    icon: Headphones,
    title: "LOVO",
    description: "AI voice generator and text-to-speech platform with 500+ voices in 100 languages. Create professional voiceovers, audiobooks, and content with emotion control.",
    emoji: "🎧",
    color: "from-pink-500 to-rose-600",
    directUrl: "https://www.lovo.ai/?via=aiwebtools",
    imageUrl: lovoHero,
    tags: ["Text-to-Speech", "Voice Synthesis", "AI voices", "multilingual", "voice generation", "audiobooks", "emotion control"],
    category: "AI Voice & Speech",
    rating: 4.6,
    totalVotes: 14567
  },
  {
    icon: Sparkles,
    title: "Play.ht",
    description: "Ultra-realistic AI voice generator with voice cloning. Generate natural-sounding speech, clone voices, and create multilingual content with advanced emotion control.",
    emoji: "✨",
    color: "from-orange-500 to-red-600",
    directUrl: "https://play.ht/?via=aiwebtools",
    imageUrl: playHtHero,
    tags: ["Voice Cloning", "Text-to-Speech", "AI voices", "realistic speech", "multilingual", "voice generation"],
    category: "AI Voice & Speech",
    rating: 4.7,
    totalVotes: 13456
  },
  {
    icon: Music,
    title: "Speechify",
    description: "AI-powered text-to-speech app that turns any text into natural-sounding audio. Listen to documents, articles, PDFs, and books with lifelike voices.",
    emoji: "🌊",
    color: "from-blue-600 to-indigo-700",
    directUrl: "https://speechify.com/?via=aiwebtools",
    imageUrl: speechifyHero,
    tags: ["Text-to-Speech", "audiobooks", "document reader", "listening app", "AI voices", "natural speech"],
    category: "AI Voice & Speech",
    rating: 4.8,
    totalVotes: 28934
  }
];
