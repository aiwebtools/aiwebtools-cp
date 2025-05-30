
import { Tool } from "@/types/tools";
import { Mic, Volume2, Speaker } from "lucide-react";

export const voiceAndSpeechTools: Tool[] = [
  {
    icon: Mic,
    title: "Voicemod AI Voices",
    description: "AI-powered voice transformation platform with celebrity voices, character voices, and custom voice creation. Real-time voice changing for streaming and gaming.",
    emoji: "🎭",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://www.voicemod.net/",
    tags: ["voice transformation", "celebrity voices", "character voices", "real-time", "streaming", "gaming"],
    category: "Audio & Music Tools",
    rating: 4.3,
    totalVotes: 4567
  },
  {
    icon: Volume2,
    title: "Coqui TTS",
    description: "Open-source text-to-speech AI with voice cloning capabilities. Create custom voices, multilingual support, and real-time speech synthesis for various applications.",
    emoji: "🗣️",
    color: "from-green-500 to-emerald-600",
    directUrl: "https://coqui.ai/",
    tags: ["open source", "voice cloning", "multilingual", "real-time synthesis", "custom voices", "TTS"],
    category: "Audio & Music Tools",
    rating: 4.5,
    totalVotes: 3654
  },
  {
    icon: Mic,
    title: "Respeecher",
    description: "Professional AI voice cloning platform used by filmmakers and content creators. Ultra-realistic voice synthesis for dubbing, localization, and creative voice transformation.",
    emoji: "🎬",
    color: "from-red-500 to-orange-600",
    directUrl: "https://www.respeecher.com/",
    tags: ["professional voice cloning", "filmmakers", "dubbing", "localization", "ultra-realistic", "voice transformation"],
    category: "Audio & Music Tools",
    rating: 4.6,
    totalVotes: 3987
  },
  {
    icon: Mic,
    title: "Speechify",
    description: "Leading text-to-speech app that converts any text into natural-sounding audio. Perfect for audiobooks, articles, PDFs, and documents with celebrity and AI voices.",
    emoji: "📢",
    color: "from-blue-500 to-green-600",
    directUrl: "https://speechify.com/",
    tags: ["text-to-speech", "audiobooks", "natural voices", "celebrity voices", "document reading", "accessibility"],
    category: "Audio & Music Tools",
    rating: 4.6,
    totalVotes: 5678
  },
  {
    icon: Volume2,
    title: "ElevenLabs",
    description: "Trailblazing voice AI research and deployment company dedicated to breaking language barriers and enhancing content accessibility through advanced AI audio generation technology.",
    emoji: "🔊",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://elevenlabs.io/",
    tags: ["voice AI", "multilingual", "contextually-aware", "language barriers", "content accessibility", "real-time conversations"],
    category: "Audio & Music Tools",
    rating: 4.8,
    totalVotes: 6234
  },
  {
    icon: Mic,
    title: "MURF AI",
    description: "Versatile AI voice generator that empowers creators to transform text into lifelike speech with studio-quality voiceovers. With a wide selection of over 120+ AI voices available in 20+ languages, offers the perfect voice for every creative need.",
    emoji: "🎤",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://murf.ai/?lmref=x8ap_g",
    tags: ["120+ AI voices", "20+ languages", "studio-quality", "voiceovers", "marketing", "education"],
    category: "Audio & Music Tools",
    rating: 4.7,
    totalVotes: 5234
  }
];
