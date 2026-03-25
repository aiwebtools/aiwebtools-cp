import { Tool } from "@/types/tools";
import {
  Globe, Video, Target, Palette, Monitor, PenTool, Sparkles, User, Image, Layers
} from "lucide-react";

import raskAiHero from "@/assets/tools/rask-ai-hero.jpg";
import typefaceAiHero from "@/assets/tools/typeface-ai-hero.jpg";
import coframeHero from "@/assets/tools/coframe-hero.jpg";
import collovAiHero from "@/assets/tools/collov-ai-hero.jpg";
import screenappHero from "@/assets/tools/screenapp-hero.jpg";
import vizcomHero from "@/assets/tools/vizcom-hero.jpg";
import rendernetAiHero from "@/assets/tools/rendernet-ai-hero.jpg";
import delphiAiHero from "@/assets/tools/delphi-ai-hero.jpg";
import stockimgAiHero from "@/assets/tools/stockimg-ai-hero.jpg";
import exactlyAiHero from "@/assets/tools/exactly-ai-hero.jpg";

export const researchedToolsBatch2026: Tool[] = [
  {
    icon: Globe, title: "Rask AI — Video Dubbing & Translation in 130+ Languages",
    description: "AI-powered video dubbing and localization platform trusted by 3.4 million users. Translate and dub videos into 130+ languages with realistic AI voice cloning, lip-sync, and automatic subtitles. Features voice cloning that preserves the original speaker's tone and emotion. Used by content creators, marketers, e-learning companies, and global brands. G2 rated 4.7 stars. The fastest way to make your video content accessible worldwide.",
    emoji: "🌍", color: "from-blue-600 to-teal-500",
    directUrl: "https://www.rask.ai/?via=aiwebtools",
    imageUrl: raskAiHero,
    tags: ["video dubbing", "AI translation", "voice cloning", "lip sync", "130+ languages", "video localization", "subtitles", "content localization", "multilingual", "e-learning", "global marketing"],
    category: "Video & Multimedia", rating: 4.7, totalVotes: 34000,
    tagline: "Dub your videos into 130+ languages with AI voice cloning — trusted by 3.4M users"
  },
  {
    icon: Target, title: "Typeface AI — Enterprise Marketing Content Platform",
    description: "Agentic AI platform for enterprise marketing teams that orchestrates people, agents, and systems to run context-rich, on-brand campaigns at scale. Generate marketing copy, social media posts, email campaigns, and branded visuals while maintaining brand voice and compliance. Features the Marketing Orchestration Engine for end-to-end campaign automation. Trusted by Fortune 500 companies. SOC 2 Type II certified.",
    emoji: "🎯", color: "from-amber-600 to-orange-700",
    directUrl: "https://www.typeface.ai/?via=aiwebtools",
    imageUrl: typefaceAiHero,
    tags: ["enterprise marketing", "content generation", "brand voice", "campaign automation", "agentic AI", "SOC 2", "on-brand content", "marketing orchestration", "AI copywriting", "enterprise AI"],
    category: "Marketing & Sales", rating: 4.6, totalVotes: 12500,
    tagline: "Enterprise agentic AI that runs on-brand marketing campaigns at scale"
  },
  {
    icon: Sparkles, title: "Coframe — AI Website Optimization & A/B Testing",
    description: "AI that autonomously creates and tests variations of your website content, improving conversions 24/7. Launch A/B tests in hours, see conversion lift in 2 weeks — no lift required from your team. Coframe automatically generates copy, headlines, CTAs, and design variations, runs statistically significant tests, and implements winners. Y Combinator backed. The future of conversion rate optimization.",
    emoji: "⚡", color: "from-blue-500 to-green-600",
    directUrl: "https://www.coframe.com/?via=aiwebtools",
    imageUrl: coframeHero,
    tags: ["website optimization", "A/B testing", "conversion rate", "CRO", "AI testing", "copy optimization", "headlines", "CTAs", "autonomous optimization", "Y Combinator"],
    category: "Marketing & Sales", rating: 4.5, totalVotes: 3400,
    tagline: "AI that rewrites and A/B tests your website 24/7 — conversion lift in 2 weeks"
  },
  {
    icon: Palette, title: "Collov AI — AI Interior Design & Virtual Staging",
    description: "Revolutionary one-click AI interior design tool that transforms any room into your dream space instantly. Professional virtual staging, furniture addition/removal, room decluttering, material overlays, seasonal transformations, and photo quality enhancement. Used by real estate agents, interior designers, and homeowners worldwide. Upload a photo and watch AI redesign your space in seconds with photorealistic results.",
    emoji: "🏠", color: "from-amber-500 to-brown-600",
    directUrl: "https://collov.ai/?via=aiwebtools",
    imageUrl: collovAiHero,
    tags: ["interior design", "virtual staging", "AI room design", "furniture staging", "real estate", "home design", "room transformation", "photo enhancement", "architecture", "home renovation"],
    category: "Image & Design", rating: 4.5, totalVotes: 28000,
    tagline: "One-click AI interior design — transform any room into your dream space instantly"
  },
  {
    icon: Monitor, title: "ScreenApp — AI Meeting Recorder & Transcription (No Bots)",
    description: "The only AI meeting assistant that stays completely invisible — no bot joins your call. Record screen, meetings, and audio, then get AI-generated transcripts, summaries, and action items automatically. Features bot-free recording, real-time transcription, AI search across all recordings, and team knowledge management. Loved by 3M+ users. Trusted by Tesla, Atlassian, Salesforce, and Netflix. Available as Mac app, Chrome extension, Android and iOS.",
    emoji: "🖥️", color: "from-purple-600 to-cyan-500",
    directUrl: "https://screenapp.io/?via=aiwebtools",
    imageUrl: screenappHero,
    tags: ["meeting recorder", "AI transcription", "screen recording", "no bot", "meeting notes", "action items", "knowledge management", "audio recording", "video recording", "team productivity"],
    category: "Meeting & Transcription Tools", rating: 4.6, totalVotes: 45000,
    tagline: "Invisible AI meeting recorder — no bot joins your call, just perfect notes"
  },
  {
    icon: PenTool, title: "Vizcom — AI Design Platform for Product Designers",
    description: "AI-powered design platform that transforms rough sketches into photorealistic product renders in seconds. Used by world-class brands including Dell, Ford, New Balance, and Estée Lauder. Features style transfer, AI studio for concept iteration, and collaborative design tools. From sketch to finished product visualization — Vizcom bridges the gap between imagination and reality for industrial and product designers.",
    emoji: "✏️", color: "from-amber-600 to-blue-700",
    directUrl: "https://www.vizcom.ai/?via=aiwebtools",
    imageUrl: vizcomHero,
    tags: ["product design", "industrial design", "sketch to render", "3D rendering", "concept design", "style transfer", "Ford", "Dell", "New Balance", "design visualization", "AI rendering"],
    category: "Image & Design", rating: 4.7, totalVotes: 18500,
    tagline: "Sketch to photorealistic render in seconds — used by Ford, Dell, and New Balance"
  },
  {
    icon: Video, title: "RenderNet AI (Affogato) — AI Ad Agent & Product Video Creator",
    description: "AI ad agent that turns products into viral videos in minutes — no crew, no edits. Studio-quality product ads ready fast. Backed by Y Combinator with 1.6M+ creators and brands. Features chat-based control for natural language video creation, multi-scene professional videos with timeline editing, and endless styles from product launches to UGC promos to meme-style content. 25M+ assets generated.",
    emoji: "🎬", color: "from-orange-500 to-purple-600",
    directUrl: "https://www.rendernet.ai/?via=aiwebtools",
    imageUrl: rendernetAiHero,
    tags: ["AI ads", "product videos", "video generation", "UGC content", "marketing videos", "Y Combinator", "chat-based video", "product photography", "social media ads", "viral content"],
    category: "Video & Multimedia", rating: 4.6, totalVotes: 16000,
    tagline: "Products → viral videos in minutes — 1.6M+ brands trust RenderNet's AI ad agent"
  },
  {
    icon: User, title: "Delphi AI — Digital Clone & AI Twin Platform",
    description: "Create a living digital clone of yourself that answers questions, maintains relationships, and preserves your knowledge — forever. Used by thought leaders like Lenny Rachitsky, Jay Shetty, and Brian Halligan. Your Delphi learns from text, audio, and video, mirrors your latest insights, and evolves with you. Never repeat yourself again, never miss a connection. Future-proof your knowledge with an AI that thinks like you.",
    emoji: "🔮", color: "from-gold-500 to-blue-700",
    directUrl: "https://www.delphi.ai/?via=aiwebtools",
    imageUrl: delphiAiHero,
    tags: ["digital clone", "AI twin", "knowledge preservation", "personal AI", "thought leader", "voice clone", "digital mind", "legacy", "audience engagement", "content creator"],
    category: "AI Agents", rating: 4.7, totalVotes: 22000,
    tagline: "Create a digital clone of yourself that answers questions and preserves your legacy forever"
  },
  {
    icon: Image, title: "Stockimg AI — AI Stock Image & Design Content Generator",
    description: "Faster than any designer — generate AI stock photos, logos, social media posts, TikTok videos, wallpapers, illustrations, avatars, and more from text prompts. G2 leader in Stock Photos. Employees from Zoom, Tesla, Shopify, Netflix, and Airbnb are registered users. Eliminates the need for traditional stock photo subscriptions by generating unlimited on-demand visual content tailored to your exact needs.",
    emoji: "📸", color: "from-blue-500 to-pink-500",
    directUrl: "https://stockimg.ai/?via=aiwebtools",
    imageUrl: stockimgAiHero,
    tags: ["AI stock photos", "logo generator", "social media content", "illustration", "avatar", "wallpaper", "TikTok video", "stock images", "content creation", "visual content", "G2 leader"],
    category: "Image & Design", rating: 4.5, totalVotes: 35000,
    tagline: "Generate unlimited stock photos, logos, and videos — faster than any designer"
  },
  {
    icon: Layers, title: "Exactly AI — Private AI Image Generator for Brand Consistency",
    description: "Train your own private AI image generator that always stays on-brand. Upload your brand's visual style and Exactly AI learns it, generating consistent imagery across all your marketing, products, and social media. Features style transfer, AI studio, and full ownership of generated images. Trusted by Shopify, Notion, Google for Startups, and Opal. The enterprise solution for teams who need AI imagery that matches their brand — every single time.",
    emoji: "🎨", color: "from-emerald-500 to-teal-700",
    directUrl: "https://exactly.ai/?via=aiwebtools",
    imageUrl: exactlyAiHero,
    tags: ["brand consistency", "private AI", "style transfer", "enterprise image generation", "on-brand imagery", "visual identity", "Shopify", "Notion", "brand AI", "custom model training"],
    category: "Image & Design", rating: 4.6, totalVotes: 15000,
    tagline: "Your private AI image generator — always on-brand, always consistent, owned by you"
  }
];
