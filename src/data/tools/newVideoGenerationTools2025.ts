
import { Tool } from "@/types/tools";
import { Video, Film, Play, Camera, Sparkles, Wand2, Palette, Zap, Monitor, Users } from "lucide-react";

import seedanceHero from "@/assets/tools/seedance-hero.jpg";
import pixverseHero from "@/assets/tools/pixverse-hero.jpg";
import viggleAiHero from "@/assets/tools/viggle-ai-hero.jpg";
import captionsAiHero from "@/assets/tools/captions-ai-hero.jpg";
import domoAiHero from "@/assets/tools/domo-ai-hero.jpg";
import wondershareVirboHero from "@/assets/tools/wondershare-virbo-hero.jpg";
import genmoAiHero from "@/assets/tools/genmo-ai-hero.jpg";
import morphStudioHero from "@/assets/tools/morph-studio-hero.jpg";
import viduHero from "@/assets/tools/vidu-hero.jpg";
import haiperAiHero from "@/assets/tools/haiper-ai-hero.jpg";

export const newVideoGenerationTools2025: Tool[] = [
  {
    icon: Video,
    title: "Seedance 2.0",
    description: "Seedance 2.0 is a multimodal AI video generator that lets you guide generation with text + images + video + audio combined. Features reference-first control for recreating exactly what you envision with style, motion, and rhythm guidance.",
    emoji: "🌱",
    color: "from-purple-600 to-blue-600",
    directUrl: "https://deevid.ai/model/seedance-2/?via=aiwebtools",
    imageUrl: seedanceHero,
    tags: ["text-to-video", "multimodal", "video generation", "AI video", "reference control", "Video Generator", "cinematic"],
    category: "Video Generation",
    rating: 4.8,
    totalVotes: 4560
  },
  {
    icon: Sparkles,
    title: "PixVerse",
    description: "Frontier AI research and video intelligence platform that redefines video creation. Features real-time interactive world engine, audio-visual consistency, and one-click complete storytelling with models up to V5.6.",
    emoji: "🎬",
    color: "from-pink-500 to-cyan-500",
    directUrl: "https://pixverse.ai/?via=aiwebtools",
    imageUrl: pixverseHero,
    tags: ["text-to-video", "video generation", "AI video", "world engine", "storytelling", "Video Generator", "real-time"],
    category: "Video Generation",
    rating: 4.7,
    totalVotes: 5230
  },
  {
    icon: Users,
    title: "Viggle AI",
    description: "AI-powered character animation platform that lets you remix anyone into viral memes and videos. Features physics-based motion and the Meme Maker tool for creating engaging animated content from photos.",
    emoji: "🕺",
    color: "from-green-500 to-yellow-500",
    directUrl: "https://viggle.ai/?via=aiwebtools",
    imageUrl: viggleAiHero,
    tags: ["character animation", "meme maker", "AI animation", "video generation", "viral content", "Video Generator", "Animation"],
    category: "Video Generation",
    rating: 4.6,
    totalVotes: 6780
  },
  {
    icon: Wand2,
    title: "Captions AI",
    description: "AI-powered video editor that automatically edits your videos with cinematic styles, captions, effects, and transitions. Choose from styles like Align, Volt, Ember, and Film to transform raw footage into polished content.",
    emoji: "💬",
    color: "from-orange-600 to-red-600",
    directUrl: "https://www.captions.ai/?via=aiwebtools",
    imageUrl: captionsAiHero,
    tags: ["AI video editing", "auto captions", "cinematic styles", "video effects", "content creation", "Video Editor", "Video Generator"],
    category: "Video Generation",
    rating: 4.7,
    totalVotes: 7890
  },
  {
    icon: Palette,
    title: "Domo AI",
    description: "Complete AI animation platform for video generation and creation. Turn any text, image, and video into anime, realistic, or artistic visual styles instantly. Backed by Andreessen Horowitz.",
    emoji: "🎨",
    color: "from-pink-500 to-purple-500",
    directUrl: "https://domoai.app/?via=aiwebtools",
    imageUrl: domoAiHero,
    tags: ["anime video", "style transfer", "AI animation", "video generation", "artistic video", "Video Generator", "Animation"],
    category: "Video Generation",
    rating: 4.6,
    totalVotes: 5430
  },
  {
    icon: Camera,
    title: "Wondershare Virbo",
    description: "AI video generator with 350+ lifelike avatars, 400 natural voices, and 80 languages. Create captivating videos with AI avatars, talking photos, and video translation features for professional content at scale.",
    emoji: "🎭",
    color: "from-blue-600 to-indigo-600",
    directUrl: "https://virbo.wondershare.com/?via=aiwebtools",
    imageUrl: wondershareVirboHero,
    tags: ["AI avatars", "video generation", "multilingual", "talking photo", "video translator", "Video Generator", "Avatar Video"],
    category: "Video Generation",
    rating: 4.5,
    totalVotes: 4120
  },
  {
    icon: Monitor,
    title: "Genmo AI",
    description: "Building the world's most sophisticated video world models to understand the physical world. Generate high-quality videos from text prompts with advanced physics understanding and realistic motion.",
    emoji: "🌍",
    color: "from-amber-600 to-yellow-500",
    directUrl: "https://genmo.ai/?via=aiwebtools",
    imageUrl: genmoAiHero,
    tags: ["world model", "text-to-video", "video generation", "physics AI", "realistic motion", "Video Generator"],
    category: "Video Generation",
    rating: 4.5,
    totalVotes: 3450
  },
  {
    icon: Film,
    title: "Morph Studio",
    description: "Advanced AI platform for video and image generation featuring top models like Seedance 2.0, Sora, Veo, Kling, Hailuo, and GPT Image all in one workspace. Create stunning content with multiple AI engines.",
    emoji: "🔮",
    color: "from-violet-600 to-blue-500",
    directUrl: "https://www.morphstudio.com/?via=aiwebtools",
    imageUrl: morphStudioHero,
    tags: ["multi-model", "video generation", "AI platform", "Sora", "Kling", "Hailuo", "Video Generator", "creative studio"],
    category: "Video Generation",
    rating: 4.7,
    totalVotes: 3890
  },
  {
    icon: Play,
    title: "Vidu",
    description: "All-in-one AI image and video creation platform. Fast, high-quality, and affordable with reference-to-video capability for creating videos that align with reference subjects including characters, objects, and scenes.",
    emoji: "🎥",
    color: "from-red-600 to-red-500",
    directUrl: "https://www.vidu.com/?via=aiwebtools",
    imageUrl: viduHero,
    tags: ["text-to-video", "reference-to-video", "video generation", "AI video", "character consistency", "Video Generator"],
    category: "Video Generation",
    rating: 4.6,
    totalVotes: 4780
  },
  {
    icon: Zap,
    title: "Haiper AI",
    description: "Perceptual AI foundation model built by Google DeepMind alumni for hyper-realistic video generation. Haiper 2.0 delivers the most powerful model for hyper-realism with faster generation speeds. 4M+ users.",
    emoji: "⚡",
    color: "from-amber-500 to-teal-500",
    directUrl: "https://haiper.ai/?via=aiwebtools",
    imageUrl: haiperAiHero,
    tags: ["text-to-video", "hyper-realistic", "video generation", "Google DeepMind", "AI video", "Video Generator", "foundation model"],
    category: "Video Generation",
    rating: 4.7,
    totalVotes: 5670
  }
];
