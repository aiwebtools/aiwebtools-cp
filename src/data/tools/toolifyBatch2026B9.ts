import { Tool } from "@/types/tools";
import {
  Database, Globe, BarChart3, Rocket, Music, Mic2, FileText,
  ImageIcon, PenTool, Wand2, Video, Layout, Bot, Search,
  Share2, MessageSquare, Scissors, BookOpen, Code, DollarSign
} from "lucide-react";

import brightDataHero from "@/assets/tools/bright-data-hero.jpg";
import limecubeHero from "@/assets/tools/limecube-hero.jpg";
import loamlyHero from "@/assets/tools/loamly-hero.jpg";
import jetAdminHero from "@/assets/tools/jet-admin-hero.jpg";
import rankpilotHero from "@/assets/tools/rankpilot-hero.jpg";
import songrHero from "@/assets/tools/songr-hero.jpg";
import turboscribeHero from "@/assets/tools/turboscribe-hero.jpg";
import piclumenHero from "@/assets/tools/piclumen-hero.jpg";
import writehumanHero from "@/assets/tools/writehuman-hero.jpg";
import trickleHero from "@/assets/tools/trickle-magic-canvas-hero.jpg";
import floyoHero from "@/assets/tools/floyo-hero.jpg";
import adsturboHero from "@/assets/tools/adsturbo-hero.jpg";
import slidesgptHero from "@/assets/tools/slidesgpt-hero.jpg";
import vocolHero from "@/assets/tools/vocol-ai-hero.jpg";
import redesignrHero from "@/assets/tools/redesignr-ai-hero.jpg";
import numeHero from "@/assets/tools/nume-hero.jpg";
import linerHero from "@/assets/tools/liner-ai-hero.jpg";
import socialdudeHero from "@/assets/tools/socialdude-hero.jpg";
import chaindeskHero from "@/assets/tools/chaindesk-hero.jpg";
import samuraiHero from "@/assets/tools/samurai-ai-hero.jpg";
import storynestHero from "@/assets/tools/storynest-hero.jpg";
import cometapiHero from "@/assets/tools/cometapi-hero.jpg";

export const toolifyBatch2026B9: Tool[] = [
  {
    icon: Database, title: "Bright Data",
    description: "AI-driven web scraping and automation platform providing structured data collection at scale. Access any website's data through proxies, scraping APIs, and ready-made datasets for AI training, market research, and competitive intelligence.",
    emoji: "💡", color: "from-blue-500 to-cyan-500",
    directUrl: "https://brightdata.com/?via=aiwebtools",
    imageUrl: brightDataHero,
    tags: ["web scraping", "data collection", "AI training data", "proxy network", "structured data", "market research"],
    category: "Data & Analytics",
    tagline: "AI-powered web scraping and data collection at enterprise scale"
  },
  {
    icon: Globe, title: "Limecube",
    description: "AI website builder that helps startups and entrepreneurs launch professional websites in 60 seconds. From idea to launch with AI-generated content, SEO optimization, and responsive design — no coding skills required.",
    emoji: "🟢", color: "from-green-500 to-lime-500",
    directUrl: "https://www.limecube.co/?via=aiwebtools",
    imageUrl: limecubeHero,
    tags: ["website builder", "AI web design", "startup tools", "no-code", "SEO", "landing page"],
    category: "Coding & Development",
    tagline: "AI website builder — idea to launch in 60 seconds flat"
  },
  {
    icon: BarChart3, title: "Loamly",
    description: "AI traffic analytics platform that detects when ChatGPT, Claude, Perplexity, and Gemini send visitors to your website. Unlike Google Analytics, Loamly uses cryptographic verification to accurately attribute AI referral traffic.",
    emoji: "📊", color: "from-orange-500 to-amber-500",
    directUrl: "https://www.loamly.ai/?via=aiwebtools",
    imageUrl: loamlyHero,
    tags: ["AI analytics", "ChatGPT traffic", "referral tracking", "AI attribution", "web analytics", "SEO"],
    category: "Marketing & Sales",
    tagline: "See exactly when ChatGPT and Claude send you traffic — finally"
  },
  {
    icon: Layout, title: "Jet Admin",
    description: "No-code AI platform for building custom business apps and internal tools powered by GPT-4. Create advanced dashboards, admin panels, and workflows without coding — ask questions in everyday language and Jet converts them to precise queries.",
    emoji: "🚀", color: "from-red-500 to-orange-500",
    directUrl: "https://www.jetadmin.io/?via=aiwebtools",
    imageUrl: jetAdminHero,
    tags: ["no-code", "business apps", "admin panel", "internal tools", "GPT-4", "dashboard builder"],
    category: "Business & Productivity",
    tagline: "Build custom business apps with AI — no code, no IT requests"
  },
  {
    icon: Rocket, title: "Rankpilot",
    description: "AI SEO copilot for Google and AI search that automates content creation, keyword research, and ranking optimization. Generate SEO-optimized content that ranks on both traditional search engines and AI-powered search results.",
    emoji: "🎯", color: "from-orange-500 to-red-500",
    directUrl: "https://rankpilot.io/?via=aiwebtools",
    imageUrl: rankpilotHero,
    tags: ["SEO", "AI search", "content optimization", "keyword research", "Google ranking", "AI SEO"],
    category: "Marketing & Sales",
    tagline: "AI SEO copilot — rank on Google and AI search simultaneously"
  },
  {
    icon: Music, title: "SongR",
    description: "Free AI app that creates custom songs with just 3 clicks — no musical experience needed. Generate fully personalized songs for special occasions, social media content, or entertainment that can be freely shared.",
    emoji: "🎵", color: "from-purple-500 to-pink-500",
    directUrl: "https://www.songr.ai/?via=aiwebtools",
    imageUrl: songrHero,
    tags: ["AI music", "song generator", "free music", "personalized songs", "content creation", "music maker"],
    category: "Audio & Music",
    isFree: true,
    tagline: "Create custom songs in 3 clicks — zero musical experience needed"
  },
  {
    icon: Mic2, title: "TurboScribe",
    description: "AI transcription service converting audio and video to text in 98+ languages with unlimited transcription. Industry-leading accuracy powered by advanced AI models, perfect for professionals, educators, and businesses seeking fast, cost-effective transcription.",
    emoji: "⚡", color: "from-blue-600 to-cyan-500",
    directUrl: "https://turboscribe.ai/?via=aiwebtools",
    imageUrl: turboscribeHero,
    tags: ["transcription", "speech to text", "audio transcription", "multilingual", "video transcription", "AI scribe"],
    category: "Audio & Music",
    tagline: "Unlimited AI transcription in 98+ languages — blazing fast"
  },
  {
    icon: ImageIcon, title: "PicLumen",
    description: "Free AI image and video generator that converts text or images into stunning visuals. Choose from multiple AI models, generate high-quality images with various artistic styles, and create AI videos — all completely free to use.",
    emoji: "🌈", color: "from-pink-500 to-purple-500",
    directUrl: "https://www.piclumen.com/?via=aiwebtools",
    imageUrl: piclumenHero,
    tags: ["AI image generator", "free image generator", "text to image", "AI art", "AI video", "multiple models"],
    category: "Image & Design",
    isFree: true,
    tagline: "Free AI image & video generator — multiple models, zero cost"
  },
  {
    icon: PenTool, title: "WriteHuman",
    description: "AI humanizer that transforms AI-generated text into undetectable, human-like content. Bypass AI detectors including GPTZero, Turnitin, and Copyleaks while maintaining the original meaning and quality of your writing.",
    emoji: "✍️", color: "from-amber-500 to-orange-500",
    directUrl: "https://writehuman.ai/?via=aiwebtools",
    imageUrl: writehumanHero,
    tags: ["AI humanizer", "bypass AI detection", "content rewriter", "GPTZero bypass", "Turnitin", "human text"],
    category: "Writing & Content",
    tagline: "Make AI text undetectable — bypass every AI checker instantly"
  },
  {
    icon: Wand2, title: "Trickle Magic Canvas",
    description: "The world's first agentic coding canvas designed for vibe coding. Create production-ready apps and websites with AI by co-creating on a visual canvas — seamlessly build, iterate, and deploy without traditional coding workflows.",
    emoji: "✨", color: "from-purple-500 to-violet-500",
    directUrl: "https://trickle.so/?via=aiwebtools",
    imageUrl: trickleHero,
    tags: ["vibe coding", "agentic canvas", "AI app builder", "no-code", "web development", "AI coding"],
    category: "Coding & Development",
    tagline: "The world's first agentic canvas for vibe coding — build by co-creating"
  },
  {
    icon: Code, title: "Floyo",
    description: "Browser-based ComfyUI platform with zero setup required. Access the full power of ComfyUI workflow discovery, building, and execution directly in your browser — powered by ThinkDiffusion with enterprise-grade GPU infrastructure.",
    emoji: "🔄", color: "from-violet-500 to-purple-500",
    directUrl: "https://www.floyo.ai/?via=aiwebtools",
    imageUrl: floyoHero,
    tags: ["ComfyUI", "AI workflows", "browser-based", "image generation", "stable diffusion", "no setup"],
    category: "Image & Design",
    tagline: "Full ComfyUI power in your browser — zero setup, instant workflows"
  },
  {
    icon: Video, title: "Adsturbo",
    description: "AI-powered ad generator that transforms product images into high-converting video ads in seconds. Create professional marketing videos for social media, e-commerce, and digital campaigns with turbocharged AI creative automation.",
    emoji: "📺", color: "from-teal-500 to-cyan-500",
    directUrl: "https://adsturbo.ai/?via=aiwebtools",
    imageUrl: adsturboHero,
    tags: ["AI ads", "video ads", "ad generator", "marketing automation", "e-commerce", "social media ads"],
    category: "Marketing & Sales",
    tagline: "AI-powered ads that convert — product to video ad in seconds"
  },
  {
    icon: FileText, title: "SlidesGPT",
    description: "AI-powered presentation generator using ChatGPT API that creates professional slide decks from any topic. Over 10 million presentations created — turn ideas into structured, polished presentations with stronger messaging and cleaner sections.",
    emoji: "📊", color: "from-blue-500 to-indigo-500",
    directUrl: "https://slidesgpt.com/?via=aiwebtools",
    imageUrl: slidesgptHero,
    tags: ["AI presentations", "slide maker", "ChatGPT", "pitch deck", "business presentations", "PowerPoint"],
    category: "Business & Productivity",
    tagline: "10M+ presentations created — AI slide decks from any topic"
  },
  {
    icon: Mic2, title: "Vocol AI",
    description: "AI-powered voice collaboration platform for transcription, meeting summaries, and team knowledge management. Transform spoken conversations into actionable insights with automated note-taking, speaker identification, and shareable highlights.",
    emoji: "🎙️", color: "from-indigo-500 to-blue-500",
    directUrl: "https://www.vocol.ai/?via=aiwebtools",
    imageUrl: vocolHero,
    tags: ["voice collaboration", "meeting transcription", "AI notes", "team productivity", "speaker ID", "knowledge management"],
    category: "Business & Productivity",
    tagline: "Voice collaboration AI — meetings to actionable insights instantly"
  },
  {
    icon: Layout, title: "Redesignr AI",
    description: "AI-powered landing page builder platform for small business marketing campaigns, automated website redesign, and GitHub documentation generation. Create high-converting pages without coding skills — perfect for digital agencies and entrepreneurs.",
    emoji: "🎨", color: "from-pink-500 to-rose-500",
    directUrl: "https://redesignr.ai/?via=aiwebtools",
    imageUrl: redesignrHero,
    tags: ["landing page builder", "website redesign", "AI web design", "marketing pages", "no-code", "conversion optimization"],
    category: "Coding & Development",
    tagline: "AI landing page builder — high-converting pages without code"
  },
  {
    icon: DollarSign, title: "Nume",
    description: "The AI CFO for CEOs and finance teams. Nume works directly on your ERP and bank data to proactively run essential CFO workflows and deliver financial insights — without you needing to ask. Onboard in 5 minutes, enjoy financial peace of mind on autopilot.",
    emoji: "💰", color: "from-cyan-500 to-teal-500",
    directUrl: "https://www.nume.ai/?via=aiwebtools",
    imageUrl: numeHero,
    tags: ["AI CFO", "finance automation", "financial insights", "ERP integration", "cash flow", "startup finance"],
    category: "Business & Productivity",
    tagline: "Your AI CFO — financial insights on autopilot, onboard in 5 minutes"
  },
  {
    icon: Search, title: "LINER AI",
    description: "AI-powered search assistant and digital highlighter for reliable research. Advanced deep research capabilities with access to the latest top AI models, file uploads, and ad-free search experience for academics, students, and professionals.",
    emoji: "🔍", color: "from-purple-500 to-indigo-500",
    directUrl: "https://getliner.com/?via=aiwebtools",
    imageUrl: linerHero,
    tags: ["AI search", "research tool", "digital highlighter", "academic research", "deep research", "AI assistant"],
    category: "Research & Learning",
    tagline: "AI-powered deep research — highlight, search, and discover smarter"
  },
  {
    icon: Share2, title: "SocialDude",
    description: "AI-driven social media content creation tool for impactful, brand-consistent messaging across Instagram, TikTok, LinkedIn, and more. Save time and boost engagement with AI-generated posts tailored to each platform's best practices.",
    emoji: "📱", color: "from-blue-500 to-violet-500",
    directUrl: "https://socialdude.ai/?via=aiwebtools",
    imageUrl: socialdudeHero,
    tags: ["social media AI", "content creation", "Instagram", "TikTok", "LinkedIn", "brand messaging"],
    category: "Marketing & Sales",
    tagline: "AI social media content — brand-consistent posts for every platform"
  },
  {
    icon: MessageSquare, title: "Chaindesk",
    description: "No-code platform to build custom ChatGPT AI chatbots trained on your company data. Automate customer support, lead generation, and more by importing data from Notion, Google Drive, and other sources — deploy in minutes.",
    emoji: "🔗", color: "from-slate-600 to-gray-700",
    directUrl: "https://www.chaindesk.ai/?via=aiwebtools",
    imageUrl: chaindeskHero,
    tags: ["AI chatbot", "customer support", "no-code", "ChatGPT", "lead generation", "custom chatbot"],
    category: "Business & Productivity",
    tagline: "Build custom ChatGPT chatbots trained on your data — no code needed"
  },
  {
    icon: Scissors, title: "Samurai AI",
    description: "AI-powered read-it-later app that summarizes YouTube videos, articles, and podcasts. Learn more in less time with the ultimate AI summarizer — save hours with just minutes of reading AI-generated wisdom and key insights.",
    emoji: "⚔️", color: "from-red-500 to-orange-500",
    directUrl: "https://gosamurai.ai/?via=aiwebtools",
    imageUrl: samuraiHero,
    tags: ["AI summarizer", "YouTube summary", "article summary", "podcast summary", "read-it-later", "productivity"],
    category: "Productivity & Utilities",
    tagline: "AI summarizer for YouTube, articles & podcasts — hours saved in minutes"
  },
  {
    icon: BookOpen, title: "StoryNest.ai",
    description: "AI-powered platform for creating, sharing, and discovering interactive stories. Build branching narratives with AI assistance, explore community-created adventures, and experience storytelling where your choices shape the outcome.",
    emoji: "📖", color: "from-violet-500 to-purple-500",
    directUrl: "https://storynest.ai/?via=aiwebtools",
    imageUrl: storynestHero,
    tags: ["interactive stories", "AI storytelling", "branching narratives", "creative writing", "story generator", "choose your adventure"],
    category: "Creative & Entertainment",
    tagline: "AI interactive stories — your choices shape every adventure"
  },
  {
    icon: Bot, title: "CometAPI",
    description: "One-stop large-model API aggregation platform that streamlines integration of multiple AI models. Access GPT-4, Claude, Gemini, and more through a single unified API — simplify AI model management with comprehensive documentation and competitive pricing.",
    emoji: "☄️", color: "from-blue-500 to-purple-500",
    directUrl: "https://www.cometapi.com/?via=aiwebtools",
    imageUrl: cometapiHero,
    tags: ["API aggregation", "LLM API", "GPT-4 API", "Claude API", "multi-model", "AI integration"],
    category: "Coding & Development",
    tagline: "All top AI models through one API — GPT-4, Claude, Gemini unified"
  },
];
