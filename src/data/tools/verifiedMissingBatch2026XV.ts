import { Tool } from "@/types/tools";
import { Bot, Captions, ChartNoAxesCombined, Gem, Presentation, Search, Video } from "lucide-react";

import googleOpalHero from "@/assets/tools/google-opal-hero.jpg";
import openArtHero from "@/assets/tools/openart-hero.jpg";
import simularHero from "@/assets/tools/simular-hero.jpg";
import fellouHero from "@/assets/tools/fellou-hero.jpg";
import synthesysHero from "@/assets/tools/synthesys-hero.jpg";
import yepicAiHero from "@/assets/tools/yepic-ai-hero.jpg";
import danelfinHero from "@/assets/tools/danelfin-hero.jpg";
import composerTradeHero from "@/assets/tools/composer-trade-hero.jpg";
import gemRecruitingHero from "@/assets/tools/gem-recruiting-hero.jpg";
import maestraAiHero from "@/assets/tools/maestra-ai-hero.jpg";

// Batch XV 2026 — ten verified real tools, checked against the full directory
// by title, alias, and official domain before indexing.
export const verifiedMissingBatch2026XV: Tool[] = [
  {
    icon: Bot, title: "Google Opal", emoji: "🔷", color: "from-blue-500 to-amber-500",
    description: "Google Opal is an experimental no-code tool for turning natural-language ideas into shareable mini apps built from editable AI workflow steps.",
    directUrl: "https://opal.withgoogle.com/", imageUrl: googleOpalHero,
    tags: ["Google Opal", "Google Labs", "no code AI", "mini app builder", "natural language apps", "AI workflow", "free", "AI Agents"],
    category: "AI Agents", rating: 4.6, isFree: true,
  },
  {
    icon: Presentation, title: "OpenArt", emoji: "🎨", color: "from-emerald-500 to-fuchsia-600",
    description: "OpenArt is an AI creative studio for generating and editing images, training personalized models, maintaining consistent characters, and transforming ideas into visual stories.",
    directUrl: "https://openart.ai/?via=aiwebtools", imageUrl: openArtHero,
    tags: ["OpenArt", "AI image generator", "AI art", "image editing", "consistent characters", "custom model", "freemium", "Image Generation"],
    category: "Image Generation", rating: 4.6, isFree: true,
  },
  {
    icon: Bot, title: "Simular", emoji: "🖱️", color: "from-cyan-500 to-amber-500",
    description: "Simular develops computer-use AI agents that interact with desktop applications to complete multi-step digital workflows through familiar visual interfaces.",
    directUrl: "https://www.simular.ai/?via=aiwebtools", imageUrl: simularHero,
    tags: ["Simular", "computer use agent", "desktop agent", "workflow automation", "autonomous agent", "GUI agent", "AI Agents"],
    category: "AI Agents", rating: 4.5,
  },
  {
    icon: Search, title: "Fellou", emoji: "🌐", color: "from-emerald-500 to-cyan-600",
    description: "Fellou is an agentic browser that researches across websites, organizes findings, and executes complex web tasks through autonomous browsing workflows.",
    directUrl: "https://fellou.ai/?via=aiwebtools", imageUrl: fellouHero,
    tags: ["Fellou", "agentic browser", "AI browser", "web research agent", "browser automation", "autonomous research", "freemium", "AI Agents"],
    category: "AI Agents", rating: 4.5, isFree: true,
  },
  {
    icon: Presentation, title: "Synthesys", emoji: "🎙️", color: "from-fuchsia-500 to-cyan-500",
    description: "Synthesys is an AI avatar and voice studio for creating presenter videos, UGC-style advertisements, multilingual dubbing, and voice-cloned media in one workflow.",
    directUrl: "https://synthesys.io/?via=aiwebtools", imageUrl: synthesysHero,
    tags: ["Synthesys", "AI avatar", "voice cloning", "UGC video", "text to speech", "video dubbing", "AI presenter", "freemium", "Video & Multimedia"],
    category: "Video & Multimedia", rating: 4.5, isFree: true,
  },
  {
    icon: Video, title: "Yepic AI", emoji: "🌍", color: "from-blue-500 to-lime-500",
    description: "Yepic AI creates talking-photo avatars and multilingual presenter videos for sales, training, education, and marketing from text and a single portrait.",
    directUrl: "https://www.yepic.ai/?via=aiwebtools", imageUrl: yepicAiHero,
    tags: ["Yepic AI", "talking photo", "AI avatar video", "multilingual video", "text to video", "sales video AI", "AI presenter", "freemium", "Video & Multimedia"],
    category: "Video & Multimedia", rating: 4.5, isFree: true,
  },
  {
    icon: ChartNoAxesCombined, title: "Danelfin", emoji: "📈", color: "from-emerald-600 to-blue-600",
    description: "Danelfin ranks stocks and ETFs with explainable AI Scores that combine fundamental, technical, and sentiment indicators for data-informed investing research.",
    directUrl: "https://danelfin.com/?via=aiwebtools", imageUrl: danelfinHero,
    tags: ["Danelfin", "AI stock picker", "investing AI", "stock ratings", "ETF analysis", "market sentiment", "fintech AI", "freemium", "Finance & Trading"],
    category: "Finance & Trading", rating: 4.5, isFree: true,
  },
  {
    icon: ChartNoAxesCombined, title: "Composer", emoji: "🎼", color: "from-blue-600 to-emerald-500",
    description: "Composer is a no-code algorithmic trading platform for describing strategies in natural language, building and backtesting them, and automating execution.",
    directUrl: "https://www.composer.trade/?via=aiwebtools", imageUrl: composerTradeHero,
    tags: ["Composer", "Composer Trade", "AI trading", "algorithmic trading", "no code trading bot", "backtesting", "automated strategy", "freemium", "Finance & Trading"],
    category: "Finance & Trading", rating: 4.5, isFree: true,
  },
  {
    icon: Gem, title: "Gem", emoji: "💎", color: "from-teal-500 to-rose-500",
    description: "Gem is an AI-first recruiting platform and talent CRM with sourcing agents, candidate rediscovery, and natural-language search across hiring databases.",
    directUrl: "https://www.gem.com/?via=aiwebtools", imageUrl: gemRecruitingHero,
    tags: ["Gem", "Gem recruiting", "AI recruiting", "talent CRM", "sourcing agent", "candidate rediscovery", "HR tech", "ATS AI", "paid", "HR & Recruitment"],
    category: "HR & Recruitment", rating: 4.6,
  },
  {
    icon: Captions, title: "Maestra AI", emoji: "🗣️", color: "from-cyan-500 to-red-600",
    description: "Maestra AI localizes live and recorded media with automated transcription, subtitles, translation, voice dubbing, and captioning across more than 125 languages.",
    directUrl: "https://maestra.ai/?via=aiwebtools", imageUrl: maestraAiHero,
    tags: ["Maestra AI", "AI transcription", "subtitle generator", "video dubbing", "translation AI", "captioning", "media localization", "125 languages", "freemium", "Translation & Localization"],
    category: "Translation & Localization", rating: 4.6, isFree: true,
  },
];