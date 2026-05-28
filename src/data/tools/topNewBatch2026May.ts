import { Tool } from "@/types/tools";
import { Bot, Search, Video, Workflow, Eye } from "lucide-react";

import manusHero from "@/assets/tools/manus-ai-hero.jpg";
import gensparkHero from "@/assets/tools/genspark-ai-hero.jpg";
import higgsfieldHero from "@/assets/tools/higgsfield-ai-hero.jpg";
import lindyHero from "@/assets/tools/lindy-ai-hero.jpg";
import cluelyHero from "@/assets/tools/cluely-ai-hero.jpg";

export const topNewBatch2026May: Tool[] = [
  {
    icon: Bot,
    title: "Manus",
    description: "Autonomous general AI agent that plans, executes, and delivers complex tasks end-to-end — research, coding, data analysis, and browser automation — running independently in the cloud while you focus on what matters.",
    emoji: "🤖",
    color: "from-blue-600 to-cyan-700",
    directUrl: "https://manus.im/?via=aiwebtools",
    imageUrl: manusHero,
    tags: ["AI Agent", "Autonomous Agent", "General AI", "Manus", "Research Agent", "Browser Agent", "Task Automation", "Cloud Agent", "Multi-Step Reasoning", "Productivity"],
    category: "AI Agents",
    rating: 4.8,
    totalVotes: 18450
  },
  {
    icon: Search,
    title: "Genspark",
    description: "AI super-agent search platform powered by a mixture-of-agents architecture. Generates custom Sparkpages with synthesized answers, real-time data, and one-click actions — search, analyze, and act instantly.",
    emoji: "✨",
    color: "from-orange-500 to-pink-600",
    directUrl: "https://www.genspark.ai/?via=aiwebtools",
    imageUrl: gensparkHero,
    tags: ["AI Search", "Search Engine", "Genspark", "AI Agent", "Mixture of Agents", "Research", "Sparkpages", "Answer Engine", "Real-Time Search", "Productivity"],
    category: "Research & Academic",
    rating: 4.7,
    totalVotes: 14200
  },
  {
    icon: Video,
    title: "Higgsfield AI",
    description: "Cinematic AI video generator with precise camera-motion controls. Direct your own AI-generated films with orbit, dolly, zoom, and tilt — Hollywood-grade shots from a single prompt or reference image.",
    emoji: "🎬",
    color: "from-violet-600 to-purple-800",
    directUrl: "https://higgsfield.ai/?via=aiwebtools",
    imageUrl: higgsfieldHero,
    tags: ["AI Video", "Video Generation", "Higgsfield", "Cinematic AI", "Camera Control", "Text to Video", "Image to Video", "Filmmaking", "Motion Control", "Creative AI"],
    category: "Video & Animation",
    rating: 4.8,
    totalVotes: 11680
  },
  {
    icon: Workflow,
    title: "Lindy",
    description: "AI employee and workflow agent builder that automates entire business processes. Connect Gmail, Slack, Salesforce, and 3,000+ apps — Lindy agents handle lead qualification, scheduling, support, and operations 24/7.",
    emoji: "🪄",
    color: "from-purple-400 to-indigo-600",
    directUrl: "https://www.lindy.ai/?via=aiwebtools",
    imageUrl: lindyHero,
    tags: ["AI Agent", "AI Employee", "Lindy", "Workflow Automation", "Business Automation", "No-Code Agent", "Sales Agent", "CRM Automation", "Productivity", "Integrations"],
    category: "AI Agents",
    rating: 4.7,
    totalVotes: 9870
  },
  {
    icon: Eye,
    title: "Cluely",
    description: "Invisible real-time AI assistant that listens to your meetings, interviews, and calls — then surfaces smart hints and answer suggestions on an undetectable desktop overlay. Your private co-pilot for live conversations.",
    emoji: "👁️",
    color: "from-emerald-500 to-teal-700",
    directUrl: "https://cluely.com/?via=aiwebtools",
    imageUrl: cluelyHero,
    tags: ["AI Assistant", "Cluely", "Meeting Assistant", "Real-Time AI", "Interview Helper", "Desktop Overlay", "Conversation AI", "Live AI", "Productivity", "Sales Assistant"],
    category: "AI Assistants",
    rating: 4.6,
    totalVotes: 8430
  }
];