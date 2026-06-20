import { Tool } from "@/types/tools";
import { Sparkles, Wand2, Mic, Play, Image as ImageIcon, Cpu } from "lucide-react";

import muvioHero from "@/assets/tools/muvio-ai-hero.jpg";
import neuralFramesHero from "@/assets/tools/neural-frames-hero.jpg";
import decoherenceHero from "@/assets/tools/decoherence-hero.jpg";
import wzrdHero from "@/assets/tools/wzrd-hero.jpg";
import vondyMusicHero from "@/assets/tools/vondy-music-hero.jpg";
import neuralCanvasHero from "@/assets/tools/neuralcanvas-hero.jpg";
import plaidayHero from "@/assets/tools/plaiday-hero.jpg";
import diffusionStudioHero from "@/assets/tools/diffusion-studio-hero.jpg";
import audoirHero from "@/assets/tools/audoir-hero.jpg";

// 9 UNIQUE AI Music Video Generator agents & tools — verified not already
// present elsewhere in the database. Tools that overlapped with existing
// entries (Kaiber, Kling, Hailuo, Vidu, Genmo, Hedra, Higgsfield, Domo,
// PixVerse, Krea, Specterr, Rotor, Magic Hour, Pollo, Lensgo, Renderforest,
// AIVA, DeepBrain, InVideo, VEED, Steve.AI) were removed to prevent
// duplicate listings across the catalog.
const CATEGORY = "AI Music Video Generators";
const MUSIC_VIDEO_TAGS = [
  "AI music video",
  "music video generator",
  "music video maker",
  "AI music video agent",
];

export const aiMusicVideoGeneratorTools: Tool[] = [
  {
    icon: Sparkles,
    title: "Muvio",
    description:
      "Muvio is an end-to-end AI music video agent: it ingests your song, plans scenes, generates the visuals, syncs cuts to the beat, and assembles a finished music video automatically. The fastest way to turn a track into a real video without editing or prompting expertise.",
    emoji: "🎬",
    color: "from-fuchsia-500 to-blue-600",
    directUrl: "https://muvio.ai/?via=aiwebtools",
    imageUrl: muvioHero,
    tags: [...MUSIC_VIDEO_TAGS, "Muvio", "AI agent", "song to video", "beat sync", "automatic music video", "end-to-end", "Muvio.ai"],
    category: CATEGORY,
    rating: 4.8,
    totalVotes: 18500,
  },
  {
    icon: Cpu,
    title: "Neural Frames",
    description:
      "Neural Frames is an audio-reactive AI music video generator that turns prompts and your music into hypnotic, beat-driven animations. Great for psychedelic, electronic, and visualizer-style music videos with real-time audio reactivity.",
    emoji: "🧠",
    color: "from-indigo-500 to-pink-500",
    directUrl: "https://www.neuralframes.com/?via=aiwebtools",
    imageUrl: neuralFramesHero,
    tags: [...MUSIC_VIDEO_TAGS, "Neural Frames", "audio reactive", "AI visualizer", "stable diffusion", "psychedelic"],
    category: CATEGORY,
    rating: 4.7,
    totalVotes: 28000,
  },
  {
    icon: Sparkles,
    title: "Decoherence",
    description:
      "Decoherence is an AI music video tool built on Stable Diffusion. Generate beat-synced visuals, animate keyframes to your audio, and craft surreal AI music videos with fine creative control.",
    emoji: "🌌",
    color: "from-violet-600 to-cyan-500",
    directUrl: "https://www.decoherence.co/?via=aiwebtools",
    imageUrl: decoherenceHero,
    tags: [...MUSIC_VIDEO_TAGS, "Decoherence", "stable diffusion", "beat sync", "keyframe animation"],
    category: CATEGORY,
    rating: 4.6,
    totalVotes: 18000,
  },
  {
    icon: Wand2,
    title: "WZRD",
    description:
      "WZRD turns any audio track into a dreamlike, AI-generated music video. Upload your song and WZRD creates audio-reactive surreal visuals automatically — perfect for ambient, electronic, and atmospheric tracks.",
    emoji: "🧙",
    color: "from-purple-500 to-amber-500",
    directUrl: "https://wzrd.ai/?via=aiwebtools",
    imageUrl: wzrdHero,
    tags: [...MUSIC_VIDEO_TAGS, "WZRD", "audio reactive", "surreal visuals", "ambient"],
    category: CATEGORY,
    rating: 4.5,
    totalVotes: 14000,
  },
  {
    icon: Mic,
    title: "Vondy Music Video Generator",
    description:
      "Vondy's Music Video Generator is a free AI tool that turns prompts and audio into short music videos. Simple, accessible, and great for quick concept reels and social posts.",
    emoji: "🎤",
    color: "from-teal-500 to-fuchsia-500",
    directUrl: "https://www.vondy.com/?via=aiwebtools",
    imageUrl: vondyMusicHero,
    tags: [...MUSIC_VIDEO_TAGS, "Vondy", "free", "quick", "concept reels"],
    category: CATEGORY,
    rating: 4.3,
    totalVotes: 9000,
  },
  {
    icon: ImageIcon,
    title: "NeuralCanvas",
    description:
      "NeuralCanvas generates AI music video frames and animated scenes from prompts, with painterly and cinematic styles ideal for music storytelling.",
    emoji: "🎨",
    color: "from-fuchsia-500 to-blue-600",
    directUrl: "https://neuralcanvas.io/?via=aiwebtools",
    imageUrl: neuralCanvasHero,
    tags: [...MUSIC_VIDEO_TAGS, "NeuralCanvas", "AI scenes", "painterly", "cinematic"],
    category: CATEGORY,
    rating: 4.4,
    totalVotes: 11000,
  },
  {
    icon: Play,
    title: "PlaiDay",
    description:
      "PlaiDay turns photos and prompts into AI music video moments featuring you and friends. Built for short, share-ready music clips with personalized characters.",
    emoji: "🎭",
    color: "from-rose-500 to-teal-500",
    directUrl: "https://plai.day/?via=aiwebtools",
    imageUrl: plaidayHero,
    tags: [...MUSIC_VIDEO_TAGS, "PlaiDay", "personalized", "short form", "character video"],
    category: CATEGORY,
    rating: 4.4,
    totalVotes: 9500,
  },
  {
    icon: Sparkles,
    title: "Diffusion Studio",
    description:
      "Diffusion Studio is an open-source AI video editor designed for crafting AI music videos. Stitch generative clips, apply diffusion effects, and edit beat-synced sequences in the browser.",
    emoji: "🎛️",
    color: "from-indigo-600 to-emerald-500",
    directUrl: "https://diffusion.studio/?via=aiwebtools",
    imageUrl: diffusionStudioHero,
    tags: [...MUSIC_VIDEO_TAGS, "Diffusion Studio", "open source", "AI video editor", "browser editor"],
    category: CATEGORY,
    rating: 4.5,
    totalVotes: 8200,
  },
  {
    icon: Mic,
    title: "Audoir",
    description:
      "Audoir is an AI music video generator that analyzes your song's mood, energy, and structure to compose matching visuals and transitions automatically — built specifically for musicians releasing tracks.",
    emoji: "🎶",
    color: "from-amber-500 to-rose-600",
    directUrl: "https://audoir.com/?via=aiwebtools",
    imageUrl: audoirHero,
    tags: [...MUSIC_VIDEO_TAGS, "Audoir", "song analysis", "mood matching", "musician tool"],
    category: CATEGORY,
    rating: 4.4,
    totalVotes: 7800,
  },
];
