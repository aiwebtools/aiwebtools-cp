import { Tool } from "@/types/tools";
import { Zap, Brain, Moon, Sheet, Blocks, Calculator, GraduationCap, MessageCircle, Palette, Wand2, Sparkles, Boxes, Film, User, LineChart, TrendingUp } from "lucide-react";

import ninjaAiHero from "@/assets/tools/ninja-ai-hero.jpg";
import cubbyHero from "@/assets/tools/cubby-hero.jpg";
import kimiMoonshotHero from "@/assets/tools/kimi-moonshot-hero.jpg";
import rowsAiHero from "@/assets/tools/rows-ai-hero.jpg";
import bricksAiHero from "@/assets/tools/bricks-ai-hero.jpg";
import formulaBotHero from "@/assets/tools/formula-bot-hero.jpg";
import jenniAiHero from "@/assets/tools/jenni-ai-hero.jpg";
import talkieAiHero from "@/assets/tools/talkie-ai-hero.jpg";
import kittlHero from "@/assets/tools/kittl-hero.jpg";
import playgroundV3Hero from "@/assets/tools/playground-v3-hero.jpg";
import piggyMagicHero from "@/assets/tools/piggy-magic-hero.jpg";
import tripo3dHero from "@/assets/tools/tripo3d-hero.jpg";
import wonderStudioHero from "@/assets/tools/wonder-studio-hero.jpg";
import rokokoVisionHero from "@/assets/tools/rokoko-vision-hero.jpg";
import tradeIdeasHero from "@/assets/tools/trade-ideas-hero.jpg";
import trendspiderHero from "@/assets/tools/trendspider-hero.jpg";

// Popular World Tools Batch V 2026 — 16 verified-unique high-traffic AI tools
// completing the 60-tool arc. All confirmed missing from the 5,000+ directory.
export const popularWorldToolsBatch2026V: Tool[] = [
  {
    icon: Zap, title: "Ninja AI",
    description: "Ninja AI is a super-agent that runs GPT-4o, Claude, Gemini, and Llama in parallel from a single interface — routing each task to the model that answers best. One subscription, every frontier model, unlimited power.",
    emoji: "🥷", color: "from-emerald-500 to-slate-700",
    directUrl: "https://myninja.ai/?via=aiwebtools",
    imageUrl: ninjaAiHero,
    tags: ["Ninja AI", "MyNinja", "AI agent", "multi-model", "GPT-4o", "Claude", "Gemini", "Llama", "super agent", "AI aggregator"],
    category: "AI Agents & Assistants", rating: 4.6, totalVotes: 24000,
  },
  {
    icon: Brain, title: "Cubby",
    description: "Cubby is a collaborative AI research workspace where teams gather documents, PDFs, and web clips into shared cubbies — then let AI summarize, connect, and surface insights across every source.",
    emoji: "📦", color: "from-indigo-500 to-teal-500",
    directUrl: "https://cubby.nyc/?via=aiwebtools",
    imageUrl: cubbyHero,
    tags: ["Cubby", "AI research", "collaborative research", "team knowledge", "PDF AI", "document AI", "second brain"],
    category: "Research & Academic Tools", rating: 4.5, totalVotes: 8500,
  },
  {
    icon: Moon, title: "Kimi (Moonshot AI)",
    description: "Kimi by Moonshot AI is China's flagship long-context chat assistant, capable of ingesting entire books, contracts, and codebases in a single conversation. A top-3 Chinese LLM with world-class reasoning.",
    emoji: "🌙", color: "from-indigo-600 to-purple-600",
    directUrl: "https://kimi.moonshot.cn/?via=aiwebtools",
    imageUrl: kimiMoonshotHero,
    tags: ["Kimi", "Moonshot AI", "Chinese LLM", "long context", "AI chat", "reasoning AI", "document AI"],
    category: "AI Chatbots & Assistants", rating: 4.7, totalVotes: 145000,
  },
  {
    icon: Sheet, title: "Rows AI",
    description: "Rows AI is a next-gen spreadsheet with a built-in AI analyst that writes formulas, cleans data, and generates dashboards from plain-English prompts. The modern Google Sheets replacement for data-driven teams.",
    emoji: "📊", color: "from-cyan-500 to-violet-600",
    directUrl: "https://rows.com/?via=aiwebtools",
    imageUrl: rowsAiHero,
    tags: ["Rows", "Rows AI", "AI spreadsheet", "data analysis", "AI analyst", "smart formulas", "dashboards"],
    category: "Data & Analytics", rating: 4.7, totalVotes: 32000,
  },
  {
    icon: Blocks, title: "Bricks AI",
    description: "Bricks AI generates full spreadsheets, docs, and dashboards from a single prompt — describe the deliverable and Bricks builds the model, formulas, charts, and narrative for you.",
    emoji: "🧱", color: "from-orange-500 to-blue-600",
    directUrl: "https://thebricks.com/?via=aiwebtools",
    imageUrl: bricksAiHero,
    tags: ["Bricks", "Bricks AI", "AI spreadsheet", "AI documents", "prompt to sheet", "productivity AI"],
    category: "Data & Analytics", rating: 4.5, totalVotes: 12000,
  },
  {
    icon: Calculator, title: "Formula Bot",
    description: "Formula Bot turns plain English into Excel and Google Sheets formulas, then explains the logic step by step. The fastest way to stop Googling VLOOKUP and INDEX/MATCH forever.",
    emoji: "🤖", color: "from-emerald-500 to-lime-500",
    directUrl: "https://formulabot.com/?via=aiwebtools",
    imageUrl: formulaBotHero,
    tags: ["Formula Bot", "AI formulas", "Excel AI", "Google Sheets AI", "spreadsheet helper", "VLOOKUP"],
    category: "Productivity & Utilities", rating: 4.6, totalVotes: 46000,
  },
  {
    icon: GraduationCap, title: "Jenni AI",
    description: "Jenni AI is the leading AI writing assistant for students and researchers, with autocomplete, real citations, plagiarism checks, and paraphrasing built for academic papers, essays, and theses.",
    emoji: "🎓", color: "from-indigo-700 to-amber-500",
    directUrl: "https://jenni.ai/?via=aiwebtools",
    imageUrl: jenniAiHero,
    tags: ["Jenni AI", "AI writing", "academic writing", "essay AI", "citation AI", "research assistant", "thesis"],
    category: "Writing & Content", rating: 4.7, totalVotes: 78000,
  },
  {
    icon: MessageCircle, title: "Talkie AI",
    description: "Talkie AI is a wildly popular AI companion app with millions of user-created characters for casual conversation, roleplay, and story-driven chat. A friendlier, more playful Character.AI alternative.",
    emoji: "💬", color: "from-purple-500 to-blue-500",
    directUrl: "https://www.talkie-ai.com/?via=aiwebtools",
    imageUrl: talkieAiHero,
    tags: ["Talkie", "Talkie AI", "AI companion", "AI characters", "AI chat", "roleplay AI", "character chat"],
    category: "AI Chatbots & Assistants", rating: 4.5, totalVotes: 92000,
  },
  {
    icon: Palette, title: "Kittl",
    description: "Kittl is a browser-based AI design studio for typography-driven graphics — retro badges, t-shirt art, posters, and logos, powered by AI text-to-image, vectorization, and background removal.",
    emoji: "🎨", color: "from-teal-500 to-pink-500",
    directUrl: "https://www.kittl.com/?via=aiwebtools",
    imageUrl: kittlHero,
    tags: ["Kittl", "AI design", "typography", "poster maker", "t-shirt design", "vector AI", "logo maker"],
    category: "Design & Creative", rating: 4.7, totalVotes: 58000,
  },
  {
    icon: Wand2, title: "Playground v3",
    description: "Playground v3 is Playground AI's flagship text-to-image model with photoreal quality, native text rendering, and best-in-class prompt following — free tier available for daily creators.",
    emoji: "🖌️", color: "from-fuchsia-500 to-cyan-500",
    directUrl: "https://playground.com/?via=aiwebtools",
    imageUrl: playgroundV3Hero,
    tags: ["Playground", "Playground v3", "Playground AI", "text to image", "AI image", "photoreal AI", "free AI art"],
    category: "AI Image Generation", rating: 4.6, totalVotes: 41000,
  },
  {
    icon: Sparkles, title: "Piggy Magic",
    description: "Piggy Magic transforms slides into interactive AI-powered experiences — quizzes, drag-and-drops, and story games — that keep audiences engaged. Presentations, evolved.",
    emoji: "🐷", color: "from-pink-500 to-purple-500",
    directUrl: "https://piggy.to/?via=aiwebtools",
    imageUrl: piggyMagicHero,
    tags: ["Piggy Magic", "interactive slides", "AI presentations", "quiz maker", "engagement AI", "classroom AI"],
    category: "Education & Learning", rating: 4.4, totalVotes: 6500,
  },
  {
    icon: Boxes, title: "Tripo3D",
    description: "Tripo3D turns text prompts and single images into production-ready textured 3D models in under a minute. A go-to AI 3D generator for game devs, XR creators, and 3D printing.",
    emoji: "🧊", color: "from-violet-500 to-cyan-500",
    directUrl: "https://www.tripo3d.ai/?via=aiwebtools",
    imageUrl: tripo3dHero,
    tags: ["Tripo3D", "Tripo AI", "AI 3D", "text to 3D", "image to 3D", "game assets", "3D printing"],
    category: "3D & Visualization", rating: 4.7, totalVotes: 34000,
  },
  {
    icon: Film, title: "Wonder Studio",
    description: "Wonder Studio (by Wonder Dynamics, now Autodesk) is an AI VFX platform that automatically detects actors in live footage and replaces them with fully animated CG characters — no motion capture rig required.",
    emoji: "🎬", color: "from-violet-600 to-slate-700",
    directUrl: "https://wonderdynamics.com/?via=aiwebtools",
    imageUrl: wonderStudioHero,
    tags: ["Wonder Studio", "Wonder Dynamics", "AI VFX", "CGI replacement", "actor replacement", "AI animation", "Autodesk"],
    category: "Video & Animation Tools", rating: 4.7, totalVotes: 28000,
  },
  {
    icon: User, title: "Rokoko Vision",
    description: "Rokoko Vision is a free markerless AI motion capture tool that turns any single-camera video into 3D animation data — export to Blender, Unity, Unreal, and Maya in minutes.",
    emoji: "🕺", color: "from-blue-600 to-purple-600",
    directUrl: "https://www.rokoko.com/products/vision?via=aiwebtools",
    imageUrl: rokokoVisionHero,
    tags: ["Rokoko", "Rokoko Vision", "AI motion capture", "mocap", "free mocap", "video to animation", "Blender", "Unity", "Unreal"],
    category: "Video & Animation Tools", rating: 4.6, totalVotes: 22000,
  },
  {
    icon: LineChart, title: "Trade Ideas",
    description: "Trade Ideas is a Wall-Street-grade AI stock scanner whose 'Holly' virtual analyst runs millions of overnight simulations to surface each morning's highest-probability trade setups.",
    emoji: "📈", color: "from-emerald-500 to-green-700",
    directUrl: "https://www.trade-ideas.com/?via=aiwebtools",
    imageUrl: tradeIdeasHero,
    tags: ["Trade Ideas", "AI stock scanner", "Holly AI", "day trading", "trading AI", "stock alerts", "market intelligence"],
    category: "Finance & Trading", rating: 4.6, totalVotes: 39000,
  },
  {
    icon: TrendingUp, title: "TrendSpider",
    description: "TrendSpider automates technical analysis with AI-powered auto-trendlines, multi-timeframe pattern recognition, and no-code strategy backtesting — pro-grade tools for retail traders.",
    emoji: "🕸️", color: "from-red-500 to-green-500",
    directUrl: "https://trendspider.com/?via=aiwebtools",
    imageUrl: trendspiderHero,
    tags: ["TrendSpider", "AI charting", "auto trendlines", "pattern recognition", "trading AI", "backtesting", "technical analysis"],
    category: "Finance & Trading", rating: 4.6, totalVotes: 33000,
  },
];