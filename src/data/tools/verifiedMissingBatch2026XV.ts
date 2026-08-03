import { Tool } from "@/types/tools";
import { Bot, BriefcaseBusiness, Captions, ChartNoAxesCombined, Film, Gem, Mail, Presentation, Search, Video } from "lucide-react";

import viduAiHero from "@/assets/tools/vidu-ai-hero.jpg";
import relevanceAiHero from "@/assets/tools/relevance-ai-hero.jpg";
import fyxerAiHero from "@/assets/tools/fyxer-ai-hero.jpg";
import hebbiaHero from "@/assets/tools/hebbia-hero.jpg";
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
    icon: Film, title: "Vidu AI", emoji: "🎬", color: "from-cyan-500 to-orange-500",
    description: "Vidu AI is an all-in-one generative video platform that turns text, images, and visual references into polished videos while preserving character and scene consistency.",
    directUrl: "https://www.vidu.com/?via=aiwebtools", imageUrl: viduAiHero,
    tags: ["Vidu AI", "AI video generator", "text to video", "image to video", "reference video", "consistent character", "AI animation", "freemium", "Video & Multimedia"],
    category: "Video & Multimedia", rating: 4.6, isFree: true,
  },
  {
    icon: Bot, title: "Relevance AI", emoji: "🤖", color: "from-emerald-500 to-cyan-600",
    description: "Relevance AI is a platform for building, deploying, and managing coordinated AI agent teams for sales, customer support, marketing, and operational workflows.",
    directUrl: "https://relevanceai.com/?via=aiwebtools", imageUrl: relevanceAiHero,
    tags: ["Relevance AI", "AI agents", "agent builder", "agent teams", "workflow automation", "no code agents", "enterprise AI", "freemium", "AI Agents"],
    category: "AI Agents", rating: 4.7, isFree: true,
  },
  {
    icon: Mail, title: "Fyxer AI", emoji: "📨", color: "from-teal-500 to-amber-500",
    description: "Fyxer AI is an email and meeting assistant for Gmail and Outlook that organizes inboxes, drafts replies, and creates useful meeting notes automatically.",
    directUrl: "https://www.fyxer.com/?via=aiwebtools", imageUrl: fyxerAiHero,
    tags: ["Fyxer AI", "AI email assistant", "Gmail AI", "Outlook AI", "inbox management", "draft replies", "meeting notes", "free trial", "Business & Productivity"],
    category: "Business & Productivity", rating: 4.5,
  },
  {
    icon: Search, title: "Hebbia", emoji: "🔎", color: "from-emerald-700 to-red-600",
    description: "Hebbia is an institutional AI research platform that analyzes large document collections, surfaces cited answers, and helps finance teams produce rigorous reports and due diligence.",
    directUrl: "https://www.hebbia.com/?via=aiwebtools", imageUrl: hebbiaHero,
    tags: ["Hebbia", "enterprise research", "AI finance", "document analysis", "cited answers", "due diligence AI", "institutional research", "paid", "Research & Academic"],
    category: "Research & Academic", rating: 4.7,
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