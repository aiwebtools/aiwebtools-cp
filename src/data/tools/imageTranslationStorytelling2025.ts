import { Tool } from "@/types/tools";
import { 
  Image, 
  Palette, 
  Wand2, 
  Sparkles, 
  Globe,
  Languages,
  BookOpen,
  Pen,
  FileText,
  MessageCircle,
  Video,
  Mic,
  Star,
  Heart,
  Feather
} from "lucide-react";

// Image paths
import deevidAiHero from "@/assets/tools/deevid-ai-hero.png";
import colorartHero from "@/assets/tools/colorart-hero.png";
import pxzHero from "@/assets/tools/pxz-hero.png";
import seedreamHero from "@/assets/tools/seedream-hero.png";
import gptImageHero from "@/assets/tools/gpt-image-hero.png";
import deeplHero from "@/assets/tools/deepl-hero.png";
import heygenTranslateHero from "@/assets/tools/heygen-translate-hero.png";
import wordtuneHero from "@/assets/tools/wordtune-hero.png";
import lingvanexHero from "@/assets/tools/lingvanex-hero.png";
import tarjimlyHero from "@/assets/tools/tarjimly-hero.png";
import lovoTranslateHero from "@/assets/tools/lovo-translate-hero.png";
import storyAiHero from "@/assets/tools/story-ai-hero.png";
import sudowriteHero from "@/assets/tools/sudowrite-hero.png";
import novelaiHero from "@/assets/tools/novelai-hero.png";
import sagaStoryHero from "@/assets/tools/saga-story-hero.png";
import dreamilyHero from "@/assets/tools/dreamily-hero.png";
import storybirdHero from "@/assets/tools/storybird-hero.png";
import shortlyaiHero from "@/assets/tools/shortlyai-hero.png";

export const imageTranslationStorytelling2025: Tool[] = [
  // ===== IMAGE GENERATION TOOLS =====
  {
    icon: Wand2,
    title: "Deevid AI",
    description: "Advanced AI image generation platform using neural networks to create stunning digital art, illustrations, and creative visuals from text prompts with exceptional quality.",
    emoji: "🎨",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://deevid.ai/?via=aiwebtools",
    imageUrl: deevidAiHero,
    tags: ["Image Generator", "AI Art", "Neural Art", "text-to-image", "digital art", "creative AI", "artwork generation"],
    category: "Image & Design Tools",
    rating: 4.5,
    totalVotes: 2341
  },
  {
    icon: Palette,
    title: "Colorart AI",
    description: "AI-powered color palette and art generation tool that creates vibrant artwork with intelligent color schemes. Perfect for designers, artists, and creative professionals.",
    emoji: "🌈",
    color: "from-red-500 to-yellow-500",
    directUrl: "https://colorart.ai/?via=aiwebtools",
    imageUrl: colorartHero,
    tags: ["Image Generator", "Color Palette", "AI Art", "color design", "palette generator", "artistic tools", "design AI"],
    category: "Image & Design Tools",
    rating: 4.3,
    totalVotes: 1876
  },
  {
    icon: Sparkles,
    title: "PXZ AI",
    description: "Innovative AI image generation platform combining pixel art aesthetics with modern AI. Create unique retro-style images and transform concepts into pixel-perfect artwork.",
    emoji: "👾",
    color: "from-cyan-500 to-purple-600",
    directUrl: "https://pxz.ai/?via=aiwebtools",
    imageUrl: pxzHero,
    tags: ["Image Generator", "Pixel Art", "AI Art", "retro art", "game art", "pixel generator", "creative tools"],
    category: "Image & Design Tools",
    rating: 4.4,
    totalVotes: 1654
  },
  {
    icon: Star,
    title: "Seedream 4.5",
    description: "Next-generation AI image generation model that creates dreamy, surreal, and photorealistic images. Advanced model with exceptional detail and creative capabilities.",
    emoji: "✨",
    color: "from-violet-500 to-purple-600",
    directUrl: "https://seedream.ai/?via=aiwebtools",
    imageUrl: seedreamHero,
    tags: ["Image Generator", "AI Art", "Photorealistic", "dreamy art", "surreal images", "advanced AI", "creative generation"],
    category: "Image & Design Tools",
    rating: 4.7,
    totalVotes: 3421
  },
  {
    icon: Image,
    title: "GPT Image 1.5",
    description: "OpenAI-powered image generation model offering photorealistic and creative image creation. Advanced capabilities for detailed, high-quality visual content generation.",
    emoji: "🖼️",
    color: "from-green-500 to-teal-600",
    directUrl: "https://openai.com/gpt-image?via=aiwebtools",
    imageUrl: gptImageHero,
    tags: ["Image Generator", "OpenAI", "Photorealistic", "AI art", "text-to-image", "creative AI", "visual generation"],
    category: "Image & Design Tools",
    rating: 4.8,
    totalVotes: 5678
  },

  // ===== TRANSLATION TOOLS =====
  {
    icon: Globe,
    title: "DeepL Translator",
    description: "Industry-leading AI translation service known for exceptional accuracy and natural-sounding translations. Supports 30+ languages with neural machine translation technology.",
    emoji: "🌍",
    color: "from-blue-600 to-cyan-500",
    directUrl: "https://www.deepl.com/translator?via=aiwebtools",
    imageUrl: deeplHero,
    tags: ["Translation", "Language AI", "Multilingual", "neural translation", "language processing", "document translation", "professional translation"],
    category: "Translation & Language",
    rating: 4.9,
    totalVotes: 8765
  },
  {
    icon: Video,
    title: "HeyGen Video Translate",
    description: "AI-powered video translation and dubbing platform. Translate videos into 40+ languages with lip-sync technology, maintaining natural speech and expressions.",
    emoji: "🎬",
    color: "from-purple-500 to-indigo-600",
    directUrl: "https://www.heygen.com/video-translate?via=aiwebtools",
    imageUrl: heygenTranslateHero,
    tags: ["Translation", "Video AI", "Dubbing", "lip sync", "video localization", "multilingual video", "content translation"],
    category: "Translation & Language",
    rating: 4.7,
    totalVotes: 4532
  },
  {
    icon: FileText,
    title: "Wordtune",
    description: "AI writing and translation assistant that helps rewrite, rephrase, and translate text. Improve clarity, tone, and style while maintaining original meaning.",
    emoji: "✍️",
    color: "from-blue-500 to-purple-500",
    directUrl: "https://www.wordtune.com/?via=aiwebtools",
    imageUrl: wordtuneHero,
    tags: ["Translation", "Writing AI", "Rewriting", "text enhancement", "language improvement", "content refinement", "AI editor"],
    category: "Translation & Language",
    rating: 4.6,
    totalVotes: 5678
  },
  {
    icon: Languages,
    title: "Lingvanex",
    description: "Comprehensive AI translation platform supporting 100+ languages. Offers text, document, website, and speech translation with API integration for developers.",
    emoji: "🗣️",
    color: "from-teal-500 to-blue-600",
    directUrl: "https://lingvanex.com/?via=aiwebtools",
    imageUrl: lingvanexHero,
    tags: ["Translation", "API", "Multilingual", "document translation", "speech translation", "language API", "enterprise translation"],
    category: "Translation & Language",
    rating: 4.4,
    totalVotes: 2345
  },
  {
    icon: Heart,
    title: "Tarjimly",
    description: "AI-powered humanitarian translation platform connecting refugees and aid workers with volunteer translators. Supporting crisis communication in 100+ languages.",
    emoji: "💙",
    color: "from-blue-400 to-cyan-500",
    directUrl: "https://tarjimly.org/?via=aiwebtools",
    imageUrl: tarjimlyHero,
    tags: ["Translation", "Humanitarian", "Nonprofit", "refugee support", "crisis translation", "volunteer translation", "social impact"],
    category: "Translation & Language",
    rating: 4.8,
    totalVotes: 1234
  },
  {
    icon: Mic,
    title: "LOVO Translate",
    description: "AI voiceover and translation platform for creating multilingual content. Generate natural-sounding voices in 100+ languages for videos, podcasts, and e-learning.",
    emoji: "🎙️",
    color: "from-orange-500 to-red-500",
    directUrl: "https://lovo.ai/translate?via=aiwebtools",
    imageUrl: lovoTranslateHero,
    tags: ["Translation", "Voiceover", "Audio AI", "text-to-speech", "multilingual audio", "voice synthesis", "content localization"],
    category: "Translation & Language",
    rating: 4.5,
    totalVotes: 3456
  },

  // ===== STORYTELLING TOOLS =====
  {
    icon: BookOpen,
    title: "Story AI",
    description: "AI-powered storytelling and narrative generation platform. Create immersive stories, develop characters, and build compelling narratives with intelligent writing assistance.",
    emoji: "📖",
    color: "from-amber-500 to-orange-600",
    directUrl: "https://story.ai/?via=aiwebtools",
    imageUrl: storyAiHero,
    tags: ["Storytelling", "Creative Writing", "Narrative AI", "story generation", "character development", "fiction writing", "AI author"],
    category: "Writing & Content",
    rating: 4.5,
    totalVotes: 3421
  },
  {
    icon: Pen,
    title: "Sudowrite",
    description: "AI fiction writing assistant designed for novelists and storytellers. Get intelligent suggestions, beat writer's block, and enhance your creative writing process.",
    emoji: "✒️",
    color: "from-indigo-500 to-purple-600",
    directUrl: "https://www.sudowrite.com/?via=aiwebtools",
    imageUrl: sudowriteHero,
    tags: ["Storytelling", "Fiction Writing", "Novel AI", "creative assistant", "writing suggestions", "author tools", "story development"],
    category: "Writing & Content",
    rating: 4.7,
    totalVotes: 4567
  },
  {
    icon: Sparkles,
    title: "NovelAI",
    description: "AI-powered storytelling and creative writing platform with anime-style image generation. Create novels, stories, and visual narratives with advanced AI assistance.",
    emoji: "🌟",
    color: "from-violet-600 to-purple-700",
    directUrl: "https://novelai.net/?via=aiwebtools",
    imageUrl: novelaiHero,
    tags: ["Storytelling", "Novel Writing", "AI Art", "anime art", "creative writing", "visual novels", "interactive fiction"],
    category: "Writing & Content",
    rating: 4.6,
    totalVotes: 5678
  },
  {
    icon: Feather,
    title: "Saga AI",
    description: "Interactive storytelling platform for creating choose-your-own-adventure narratives. Build branching storylines with AI assistance for immersive reader experiences.",
    emoji: "🎭",
    color: "from-emerald-500 to-teal-600",
    directUrl: "https://saga.so/?via=aiwebtools",
    imageUrl: sagaStoryHero,
    tags: ["Storytelling", "Interactive Fiction", "Branching Narratives", "choose adventure", "story games", "narrative design", "reader engagement"],
    category: "Writing & Content",
    rating: 4.4,
    totalVotes: 2345
  },
  {
    icon: Star,
    title: "Dreamily AI",
    description: "Creative AI story generation tool for dreamy, imaginative narratives. Generate surreal stories, fantasy tales, and creative fiction with ethereal storytelling style.",
    emoji: "💭",
    color: "from-pink-400 to-purple-500",
    directUrl: "https://dreamily.ai/?via=aiwebtools",
    imageUrl: dreamilyHero,
    tags: ["Storytelling", "Dream Stories", "Fantasy AI", "surreal fiction", "imaginative writing", "creative narratives", "ethereal tales"],
    category: "Writing & Content",
    rating: 4.3,
    totalVotes: 1876
  },
  {
    icon: Heart,
    title: "Storybird",
    description: "AI-powered children's book and illustration creation platform. Create whimsical picture books with beautiful artwork and engaging stories for young readers.",
    emoji: "🐦",
    color: "from-sky-400 to-blue-500",
    directUrl: "https://storybird.com/?via=aiwebtools",
    imageUrl: storybirdHero,
    tags: ["Storytelling", "Children's Books", "Illustration", "picture books", "kids stories", "educational content", "visual storytelling"],
    category: "Writing & Content",
    rating: 4.5,
    totalVotes: 3421
  },
  {
    icon: FileText,
    title: "ShortlyAI",
    description: "AI-powered story writing assistant for long-form content. Beat writer's block and create compelling narratives with intelligent continuation and story development.",
    emoji: "📝",
    color: "from-gray-500 to-slate-600",
    directUrl: "https://www.shortlyai.com/?via=aiwebtools",
    imageUrl: shortlyaiHero,
    tags: ["Storytelling", "Long-form Writing", "AI Writer", "content generation", "story continuation", "creative assistant", "writing tool"],
    category: "Writing & Content",
    rating: 4.4,
    totalVotes: 2876
  }
];
