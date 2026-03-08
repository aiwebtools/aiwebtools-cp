
import { Tool } from "@/types/tools";
import { 
  Brain, Sparkles, Zap, Bot, Wand2, Stars, Palette, Music, 
  FileText, Image, Video, Mic, Code, Settings, Globe
} from "lucide-react";

import gpt4TurboHero from "@/assets/tools/gpt4-turbo-hero.jpg";
import claude3OpusHero from "@/assets/tools/claude-3-opus-hero.jpg";
import stableDiffusionXlHero from "@/assets/tools/stable-diffusion-xl-hero.jpg";
import musiclmHero from "@/assets/tools/musiclm-hero.jpg";

export const aiGenerativeTools: Tool[] = [
  {
    icon: Brain,
    title: "GPT-4 Turbo",
    description: "OpenAI's most advanced language model with enhanced reasoning, coding, and multimodal capabilities for complex tasks.",
    emoji: "🧠",
    color: "from-green-500 to-blue-600",
    directUrl: "https://openai.com/gpt-4?via=aiwebtools",
    imageUrl: gpt4TurboHero,
    tags: ["GPT-4", "language model", "OpenAI", "multimodal", "reasoning"],
    category: "Advanced AI Tools",
    rating: 4.9,
    totalVotes: 8765
  },
  {
    icon: Sparkles,
    title: "Claude 3 Opus",
    description: "Anthropic's most powerful AI model with exceptional reasoning, creativity, and safety features for complex analysis.",
    emoji: "✨",
    color: "from-orange-500 to-red-600",
    directUrl: "https://claude.ai/?via=aiwebtools",
    imageUrl: claude3OpusHero,
    tags: ["Claude", "Anthropic", "reasoning", "safety", "analysis"],
    category: "Advanced AI Tools",
    rating: 4.8,
    totalVotes: 7654
  },
  {
    icon: Wand2,
    title: "Stable Diffusion XL",
    description: "Advanced open-source image generation model with improved quality, composition, and face generation capabilities.",
    emoji: "🎨",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://stability.ai/stable-diffusion?via=aiwebtools",
    imageUrl: stableDiffusionXlHero,
    tags: ["Stable Diffusion", "image generation", "open source", "AI art"],
    category: "Image & Design Tools",
    rating: 4.6,
    totalVotes: 5432
  },
  {
    icon: Music,
    title: "MusicLM",
    description: "Google's AI music generation model that creates high-quality music from text descriptions across various genres.",
    emoji: "🎵",
    color: "from-pink-500 to-purple-600",
    directUrl: "https://google-research.github.io/seanet/musiclm/examples/?via=aiwebtools",
    imageUrl: musiclmHero,
    tags: ["music generation", "Google", "AI music", "text-to-music"],
    category: "Audio & Voice Tools",
    rating: 4.5,
    totalVotes: 4321
  }
];
