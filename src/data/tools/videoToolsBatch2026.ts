import { Tool } from "@/types/tools";
import { Film, Video, Sparkles, Globe, Code, BarChart3, Palette } from "lucide-react";

import magicHourHero from "@/assets/tools/magic-hour-hero.jpg";
import flovaHero from "@/assets/tools/flova-hero.jpg";
import envatoVideoGenHero from "@/assets/tools/envato-videogen-hero.jpg";
import hedraHero from "@/assets/tools/hedra-character3-hero.jpg";
import mochi1Hero from "@/assets/tools/mochi1-hero.jpg";
import grokImagineHero from "@/assets/tools/grok-imagine-hero.jpg";
import lmArenaHero from "@/assets/tools/lm-arena-video-hero.jpg";

export const videoToolsBatch2026: Tool[] = [
  {
    icon: Film, title: "Magic Hour",
    description: "An all-in-one AI video creation suite featuring 'chained workflows' that let you Generate → Upscale → Face Swap in seamless parallel pipelines. Handles multiple generations simultaneously with no concurrency caps, making it ideal for creators who need high-volume, polished video output fast.",
    emoji: "✨", color: "from-purple-500 to-gold-600",
    directUrl: "https://magichour.ai/?via=aiwebtools", imageUrl: magicHourHero,
    tags: ["Video Generation", "Video & Multimedia", "chained workflows", "face swap", "upscale", "parallel generation", "video creation", "Video Generator"],
    category: "Video Generation", rating: 4.5,
  },
  {
    icon: Video, title: "Flova",
    description: "A specialized AI agent designed specifically for creating long-form, cinematic TV commercial (TVC) ads from single text prompts. Unlike clip generators, Flova understands narrative structure, brand guidelines, and commercial pacing to produce broadcast-ready advertising content autonomously.",
    emoji: "🎬", color: "from-blue-500 to-cyan-600",
    directUrl: "https://flova.ai/?via=aiwebtools", imageUrl: flovaHero,
    tags: ["Video Generation", "Video & Multimedia", "TV commercials", "long-form video", "advertising", "cinematic", "TVC", "brand content", "Video Generator"],
    category: "Video Generation", rating: 4.4,
  },
  {
    icon: Sparkles, title: "Envato VideoGen",
    description: "A specialized AI video generator that layers AI-generated motion directly onto Envato's massive stock footage library. Combine the reliability of professional stock assets with cutting-edge AI motion synthesis for hybrid productions that look polished and commercially safe.",
    emoji: "🎞️", color: "from-green-500 to-emerald-600",
    directUrl: "https://elements.envato.com/videogen/?via=aiwebtools", imageUrl: envatoVideoGenHero,
    tags: ["Video Generation", "Video & Multimedia", "stock footage", "AI motion", "Envato", "hybrid video", "commercial", "Video Generator"],
    category: "Video Generation", rating: 4.3,
  },
  {
    icon: Globe, title: "Hedra Character-3",
    description: "Features the groundbreaking 'Character-3' omnimodal foundation model that processes images, text, and audio simultaneously to produce the industry's most accurate lip-sync and facial animation. The gold standard for talking-head video generation with perfect audio-visual synchronization.",
    emoji: "🗣️", color: "from-indigo-500 to-purple-600",
    directUrl: "https://hedra.com/?via=aiwebtools", imageUrl: hedraHero,
    tags: ["Video Generation", "Video & Multimedia", "lip-sync", "character animation", "omnimodal", "talking head", "foundation model", "Avatar Video", "Video Generator"],
    category: "Video Generation", rating: 4.6,
  },
  {
    icon: Code, title: "Mochi-1",
    description: "The premier open-source video generation model by Genmo, designed for creators and developers who want to fine-tune their own 'Brand Vibe' without recurring subscription fees. Run locally, customize freely, and produce high-end cinematic video with full control over the model weights.",
    emoji: "🍡", color: "from-green-500 to-teal-600",
    directUrl: "https://genmo.ai/?via=aiwebtools", imageUrl: mochi1Hero,
    tags: ["Video Generation", "Video & Multimedia", "open-source", "fine-tuning", "local AI", "Genmo", "developer", "Video Generator", "self-hosted"],
    category: "Video Generation", rating: 4.5,
  },
  {
    icon: Palette, title: "Grok Imagine",
    description: "xAI's unfiltered AI image and video generation engine integrated into Grok. The 'no-guardrails' alternative ideal for creators who need raw, unfiltered realism for gritty, satirical, or boundary-pushing creative content without the restrictions found in mainstream generators.",
    emoji: "⚡", color: "from-gray-800 to-blue-700",
    directUrl: "https://x.com/i/grok/?via=aiwebtools", imageUrl: grokImagineHero,
    tags: ["Image & Design", "Video Generation", "xAI", "unfiltered", "image generation", "creative freedom", "Grok", "no guardrails", "Image Generator"],
    category: "Image & Design", rating: 4.4,
  },
  {
    icon: BarChart3, title: "LM Arena Video",
    description: "A community-driven 'Battleground' where creators can test identical prompts against every top video model (Kling, Sora, Veo, Runway, Pika) for free to see which performs best for their specific style. Crowdsourced rankings and ELO scores help you pick the right model every time.",
    emoji: "🏟️", color: "from-blue-500 to-indigo-600",
    directUrl: "https://lmarena.ai/?via=aiwebtools", imageUrl: lmArenaHero,
    tags: ["Video Generation", "Video & Multimedia", "benchmarking", "model comparison", "community", "leaderboard", "ELO", "free", "Video Generator"],
    category: "Video Generation", rating: 4.5,
  },
];
