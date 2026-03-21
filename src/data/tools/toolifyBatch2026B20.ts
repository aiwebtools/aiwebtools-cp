
import { Tool } from "@/types/tools";
import {
  Code, Layers, Video, Palette, Settings, Cpu, Zap, Globe,
  Brain, Rocket, Search, Users, Calendar, Compass, Download,
  Bot, Database, Workflow, Wrench, Monitor, Scissors, Cloud,
  Terminal, Sparkles, Eye
} from "lucide-react";

import mastraHero from "@/assets/tools/mastra-hero.jpg";
import meshyHero from "@/assets/tools/meshy-hero.jpg";
import opusclipHero from "@/assets/tools/opusclip-hero.jpg";
import recraftHero from "@/assets/tools/recraft-hero.jpg";
import comfyuiHero from "@/assets/tools/comfyui-hero.jpg";
import falAiHero from "@/assets/tools/fal-ai-hero.jpg";
import lovableHero from "@/assets/tools/lovable-hero.jpg";
import crewaiHero from "@/assets/tools/crewai-hero.jpg";
import raycastHero from "@/assets/tools/raycast-hero.jpg";
import mem0Hero from "@/assets/tools/mem0-hero.jpg";
import runcomfyHero from "@/assets/tools/runcomfy-hero.jpg";
import perfectlyAiHero from "@/assets/tools/perfectly-ai-hero.jpg";
import tldrawHero from "@/assets/tools/tldraw-hero.jpg";
import greptileHero from "@/assets/tools/greptile-hero.jpg";
import tempoLabsHero from "@/assets/tools/tempo-labs-hero.jpg";
import valTownHero from "@/assets/tools/val-town-hero.jpg";
import marimoHero from "@/assets/tools/marimo-hero.jpg";
import firecrawlHero from "@/assets/tools/firecrawl-hero.jpg";
import triggerDevHero from "@/assets/tools/trigger-dev-hero.jpg";
import inngestHero from "@/assets/tools/inngest-hero.jpg";
import calComHero from "@/assets/tools/cal-com-hero.jpg";
import arcBrowserHero from "@/assets/tools/arc-browser-hero.jpg";
import janAiHero from "@/assets/tools/jan-ai-hero.jpg";
import cosineGenieHero from "@/assets/tools/cosine-genie-hero.jpg";
import maiImage2Hero from "@/assets/tools/mai-image-2-hero.jpg";

export const toolifyBatch2026B20: Tool[] = [
  // === AI AGENT FRAMEWORKS ===
  {
    icon: Code,
    title: "Mastra",
    description: "The TypeScript AI framework from the team behind Gatsby. Build AI agents, workflows, RAG pipelines, and memory systems with a modern TypeScript stack. Features Studio UI for interactive dev and testing, MCP support, evals, and full-stack agent deployment.",
    emoji: "🔧",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://mastra.ai/?via=aiwebtools",
    imageUrl: mastraHero,
    tags: ["AI framework", "TypeScript", "AI agents", "workflows", "RAG", "memory", "MCP", "developer tools", "agent framework", "open source"],
    category: "AI Agents",
    rating: 4.7,
    totalVotes: 3456,
    tagline: "Build agents with a modern TypeScript stack — from the Gatsby team"
  },
  {
    icon: Users,
    title: "CrewAI",
    description: "Leading multi-agent orchestration framework that lets you build crews of AI agents that collaborate to accomplish complex tasks. Define roles, goals, and backstories for each agent, then let them work together autonomously with shared tools and memory.",
    emoji: "👥",
    color: "from-blue-600 to-indigo-700",
    directUrl: "https://www.crewai.com/?via=aiwebtools",
    imageUrl: crewaiHero,
    tags: ["multi-agent", "orchestration", "AI agents", "crew", "collaboration", "autonomous", "Python", "agent framework", "swarm"],
    category: "AI Agents",
    rating: 4.6,
    totalVotes: 4567,
    tagline: "Assemble crews of AI agents that think, plan, and execute together"
  },
  {
    icon: Brain,
    title: "Mem0",
    description: "The memory layer for AI applications and agents. Add persistent, intelligent memory to any LLM or agent — remembering user preferences, past conversations, and context across sessions. Open-source with cloud and self-hosted options.",
    emoji: "🧠",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://mem0.ai/?via=aiwebtools",
    imageUrl: mem0Hero,
    tags: ["AI memory", "agent memory", "persistent memory", "LLM", "context", "personalization", "open source", "AI infrastructure"],
    category: "AI Agents",
    rating: 4.5,
    totalVotes: 2890,
    tagline: "Give your AI agents a brain that remembers everything"
  },
  // === 3D & CREATIVE ===
  {
    icon: Layers,
    title: "Meshy",
    description: "AI-powered 3D model generator that creates stunning 3D assets from text prompts or images in seconds. Generate textured 3D models, characters, and objects for games, AR/VR, and design projects. Supports PBR textures and multiple export formats.",
    emoji: "🎮",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://www.meshy.ai/?via=aiwebtools",
    imageUrl: meshyHero,
    tags: ["3D modeling", "text to 3D", "image to 3D", "game assets", "AR", "VR", "3D generation", "PBR textures", "3D design"],
    category: "3D & Visualization",
    rating: 4.5,
    totalVotes: 5678,
    tagline: "Turn words into stunning 3D worlds in seconds"
  },
  // === VIDEO TOOLS ===
  {
    icon: Scissors,
    title: "OpusClip",
    description: "AI-powered video repurposing tool that transforms long-form videos into viral short clips. Automatically identifies the most engaging moments, adds captions, reframes for vertical format, and generates AI B-roll. Used by top creators and brands worldwide.",
    emoji: "✂️",
    color: "from-red-500 to-orange-600",
    directUrl: "https://www.opus.pro/?via=aiwebtools",
    imageUrl: opusclipHero,
    tags: ["video clipping", "video repurposing", "short-form video", "AI editing", "captions", "vertical video", "content creation", "social media"],
    category: "Video & Multimedia",
    rating: 4.7,
    totalVotes: 6789,
    tagline: "Turn one long video into 10 viral shorts — automatically"
  },
  // === IMAGE & DESIGN ===
  {
    icon: Palette,
    title: "Recraft",
    description: "Professional AI design tool that generates production-ready vector illustrations, icons, and images. Creates consistent brand-aligned visuals with precise style control, infinite canvas, and real-time collaboration. The Recraft V3 model leads industry benchmarks.",
    emoji: "🎨",
    color: "from-violet-500 to-blue-600",
    directUrl: "https://www.recraft.ai/?via=aiwebtools",
    imageUrl: recraftHero,
    tags: ["AI design", "vector generation", "illustrations", "icons", "brand design", "image generation", "graphic design", "design tool"],
    category: "Image & Design",
    rating: 4.6,
    totalVotes: 4321,
    tagline: "Design-grade AI that thinks in vectors, not just pixels"
  },
  {
    icon: Sparkles,
    title: "MAI-Image-2 by Microsoft",
    description: "Microsoft's latest AI image generation model offering limitless creativity with stunning photorealism and artistic control. Integrated into Microsoft Designer and Copilot, delivering state-of-the-art image generation with precise prompt following and text rendering.",
    emoji: "🖼️",
    color: "from-blue-500 to-teal-600",
    directUrl: "https://designer.microsoft.com/?via=aiwebtools",
    imageUrl: maiImage2Hero,
    tags: ["image generation", "Microsoft", "AI art", "photorealism", "text rendering", "Copilot", "Designer", "creative AI"],
    category: "Image & Design",
    rating: 4.5,
    totalVotes: 3456,
    tagline: "Microsoft's creative engine — limitless imagery at your fingertips"
  },
  // === AI IMAGE WORKFLOWS ===
  {
    icon: Settings,
    title: "ComfyUI",
    description: "The most powerful open-source node-based AI image and video generation workflow tool. Build complex Stable Diffusion, Flux, and other model pipelines with a visual graph interface. Supports ControlNet, LoRA, inpainting, and advanced workflows loved by professionals.",
    emoji: "⚙️",
    color: "from-green-500 to-teal-600",
    directUrl: "https://www.comfy.org/?via=aiwebtools",
    imageUrl: comfyuiHero,
    tags: ["node-based", "Stable Diffusion", "Flux", "image workflows", "open source", "ControlNet", "LoRA", "AI pipelines", "image generation"],
    category: "Image & Design",
    rating: 4.8,
    totalVotes: 8901,
    tagline: "The node-based powerhouse behind every serious AI artist"
  },
  {
    icon: Cloud,
    title: "RunComfy",
    description: "Run ComfyUI in the cloud with zero setup. Access powerful GPU servers to run complex AI image generation workflows without local hardware. Pre-loaded with popular models, custom nodes, and templates for instant creative production.",
    emoji: "☁️",
    color: "from-blue-400 to-cyan-500",
    directUrl: "https://www.runcomfy.com/?via=aiwebtools",
    imageUrl: runcomfyHero,
    tags: ["cloud GPU", "ComfyUI", "image generation", "cloud computing", "AI workflows", "Stable Diffusion", "no setup", "GPU rental"],
    category: "Image & Design",
    rating: 4.4,
    totalVotes: 2345,
    tagline: "ComfyUI in the cloud — no GPU, no problem"
  },
  // === AI INFERENCE ===
  {
    icon: Zap,
    title: "fal.ai",
    description: "Lightning-fast AI model inference platform for developers. Run Flux, Stable Diffusion, LLMs, and custom models with the fastest cold-start times in the industry. Simple API, pay-per-use pricing, and optimized GPU infrastructure for production AI applications.",
    emoji: "⚡",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://fal.ai/?via=aiwebtools",
    imageUrl: falAiHero,
    tags: ["AI inference", "API", "Flux", "Stable Diffusion", "GPU", "fast inference", "developer tools", "model hosting", "serverless AI"],
    category: "AI Development & Infrastructure",
    rating: 4.6,
    totalVotes: 3678,
    tagline: "The fastest AI inference on Earth — sub-second model runs"
  },
  // === APP BUILDERS ===
  {
    icon: Rocket,
    title: "Lovable",
    description: "AI-powered full-stack web application builder that turns natural language into production-ready React apps with Supabase backend. Chat with AI to build complete web apps with authentication, databases, and deployment — no coding required. The fastest way from idea to live app.",
    emoji: "💖",
    color: "from-pink-500 to-purple-600",
    directUrl: "https://lovable.dev/?via=aiwebtools",
    imageUrl: lovableHero,
    tags: ["app builder", "vibe coding", "React", "full-stack", "no-code", "AI coding", "web development", "Supabase", "deployment"],
    category: "Coding & Development",
    rating: 4.8,
    totalVotes: 7890,
    tagline: "Speak your app into existence — from idea to production in minutes"
  },
  {
    icon: Palette,
    title: "Tempo Labs",
    description: "AI-powered visual React component editor that lets you design and build React components visually with AI assistance. Edit styles, layouts, and content in real-time with a Figma-like interface that generates clean production code.",
    emoji: "🎯",
    color: "from-blue-500 to-indigo-600",
    directUrl: "https://www.tempo.new/?via=aiwebtools",
    imageUrl: tempoLabsHero,
    tags: ["React", "visual editor", "UI builder", "component builder", "AI design", "frontend", "developer tools", "design to code"],
    category: "Coding & Development",
    rating: 4.4,
    totalVotes: 2567,
    tagline: "Design React components visually — AI writes the code"
  },
  // === DEVELOPER TOOLS ===
  {
    icon: Search,
    title: "Greptile",
    description: "AI-powered codebase understanding tool that deeply indexes your entire repository and lets you chat with your code. Get instant answers about architecture, find bugs, understand complex logic, and onboard faster. Integrates with GitHub, GitLab, and IDEs.",
    emoji: "🔍",
    color: "from-green-500 to-emerald-600",
    directUrl: "https://www.greptile.com/?via=aiwebtools",
    imageUrl: greptileHero,
    tags: ["codebase understanding", "code search", "AI coding", "GitHub", "code review", "developer tools", "onboarding", "code intelligence"],
    category: "Coding & Development",
    rating: 4.5,
    totalVotes: 2345,
    tagline: "Chat with your entire codebase like it's a teammate"
  },
  {
    icon: Bot,
    title: "Cosine Genie",
    description: "AI software engineer that deeply understands your codebase and writes production-quality code. Genie reads your entire repo, understands patterns and conventions, then implements features, fixes bugs, and refactors code while respecting your existing architecture.",
    emoji: "🧞",
    color: "from-blue-600 to-purple-700",
    directUrl: "https://cosine.sh/?via=aiwebtools",
    imageUrl: cosineGenieHero,
    tags: ["AI engineer", "autonomous coding", "code generation", "codebase understanding", "bug fixing", "refactoring", "developer tools"],
    category: "Coding & Development",
    rating: 4.5,
    totalVotes: 3456,
    tagline: "An AI engineer that actually understands your entire codebase"
  },
  {
    icon: Terminal,
    title: "Val Town",
    description: "Social platform for writing and deploying serverless TypeScript/JavaScript functions instantly. Write vals (serverless functions) with AI assistance, connect to APIs, schedule cron jobs, and build mini-apps — all from your browser with zero infrastructure setup.",
    emoji: "🏘️",
    color: "from-orange-500 to-amber-600",
    directUrl: "https://www.val.town/?via=aiwebtools",
    imageUrl: valTownHero,
    tags: ["serverless", "TypeScript", "JavaScript", "functions", "API", "cron jobs", "developer tools", "cloud functions", "no-ops"],
    category: "Coding & Development",
    rating: 4.4,
    totalVotes: 2890,
    tagline: "Write a function, ship it instantly — serverless social coding"
  },
  {
    icon: Database,
    title: "Marimo",
    description: "Next-generation Python notebook that's reproducible, git-friendly, and AI-native. Reactive execution means cells auto-update when dependencies change. Built-in AI assistant, interactive UI elements, and deployment as web apps or scripts.",
    emoji: "📓",
    color: "from-green-500 to-emerald-600",
    directUrl: "https://marimo.io/?via=aiwebtools",
    imageUrl: marimoHero,
    tags: ["Python", "notebooks", "data science", "AI-native", "reactive", "developer tools", "data analysis", "machine learning", "open source"],
    category: "Coding & Development",
    rating: 4.5,
    totalVotes: 2345,
    tagline: "Python notebooks reimagined — reactive, reproducible, AI-powered"
  },
  // === WEB SCRAPING & DATA ===
  {
    icon: Globe,
    title: "Firecrawl",
    description: "Turn any website into LLM-ready data with a single API call. Scrape, crawl, map, and search the web with clean markdown output, structured data extraction, and JavaScript rendering. The go-to web scraping API for AI applications and RAG pipelines.",
    emoji: "🔥",
    color: "from-orange-500 to-red-600",
    directUrl: "https://www.firecrawl.dev/?via=aiwebtools",
    imageUrl: firecrawlHero,
    tags: ["web scraping", "API", "LLM data", "RAG", "crawling", "markdown", "data extraction", "developer tools", "AI data"],
    category: "AI Development & Infrastructure",
    rating: 4.6,
    totalVotes: 3890,
    tagline: "Turn the entire web into clean, LLM-ready data"
  },
  // === WORKFLOW & AUTOMATION ===
  {
    icon: Workflow,
    title: "Trigger.dev",
    description: "Open-source background jobs and workflow platform for TypeScript. Build reliable AI pipelines, long-running tasks, and event-driven automation with retries, scheduling, and observability. Perfect for AI agent orchestration and data processing at scale.",
    emoji: "⚡",
    color: "from-purple-500 to-indigo-600",
    directUrl: "https://trigger.dev/?via=aiwebtools",
    imageUrl: triggerDevHero,
    tags: ["background jobs", "TypeScript", "workflows", "automation", "AI pipelines", "scheduling", "developer tools", "open source", "serverless"],
    category: "Coding & Development",
    rating: 4.5,
    totalVotes: 2678,
    tagline: "Background jobs that just work — built for AI-scale workloads"
  },
  {
    icon: Zap,
    title: "Inngest",
    description: "Event-driven AI workflow platform that lets you build reliable, durable functions triggered by events. Queue jobs, orchestrate multi-step AI pipelines, handle retries, and manage concurrency — all with simple TypeScript code and zero infrastructure.",
    emoji: "🔗",
    color: "from-red-500 to-pink-600",
    directUrl: "https://www.inngest.com/?via=aiwebtools",
    imageUrl: inngestHero,
    tags: ["event-driven", "workflows", "TypeScript", "AI orchestration", "queues", "durable functions", "developer tools", "serverless"],
    category: "Coding & Development",
    rating: 4.4,
    totalVotes: 2123,
    tagline: "Event-driven AI workflows that never lose a step"
  },
  // === PRODUCTIVITY ===
  {
    icon: Calendar,
    title: "Cal.com",
    description: "Open-source AI-powered scheduling platform that automates meeting coordination. AI scheduling assistant handles availability, time zones, and preferences. Integrates with Google, Outlook, Zoom, and 100+ apps. Self-hostable alternative to Calendly with enterprise features.",
    emoji: "📅",
    color: "from-blue-500 to-indigo-600",
    directUrl: "https://cal.com/?via=aiwebtools",
    imageUrl: calComHero,
    tags: ["scheduling", "calendar", "AI assistant", "meetings", "open source", "productivity", "time management", "automation"],
    category: "Business & Productivity",
    rating: 4.6,
    totalVotes: 4567,
    tagline: "AI scheduling that eliminates the back-and-forth forever"
  },
  {
    icon: Sparkles,
    title: "Raycast",
    description: "Blazing-fast AI-powered productivity launcher for macOS that replaces Spotlight. Built-in AI chat, clipboard history, window management, snippets, and 1000+ extensions. Control your entire workflow from a single keystroke with AI assistance baked into everything.",
    emoji: "🚀",
    color: "from-orange-500 to-red-600",
    directUrl: "https://www.raycast.com/?via=aiwebtools",
    imageUrl: raycastHero,
    tags: ["productivity", "launcher", "macOS", "AI assistant", "clipboard", "window management", "extensions", "workflow", "command palette"],
    category: "Business & Productivity",
    rating: 4.8,
    totalVotes: 6789,
    tagline: "Your entire digital life — one keystroke away"
  },
  // === BROWSERS ===
  {
    icon: Compass,
    title: "Arc Browser",
    description: "Reimagined AI-powered web browser by The Browser Company. Features intelligent tab management, Spaces for context switching, AI-powered page summaries, built-in ad blocking, and a beautiful split-view interface. Available on macOS, Windows, and iOS.",
    emoji: "🌐",
    color: "from-blue-400 to-purple-600",
    directUrl: "https://arc.net/?via=aiwebtools",
    imageUrl: arcBrowserHero,
    tags: ["browser", "AI browser", "tab management", "productivity", "macOS", "Windows", "iOS", "web browsing", "AI assistant"],
    category: "Business & Productivity",
    rating: 4.7,
    totalVotes: 5678,
    tagline: "The browser that thinks the way you do"
  },
  // === LOCAL AI ===
  {
    icon: Download,
    title: "Jan",
    description: "Open-source desktop ChatGPT alternative that runs AI models 100% offline on your computer. Supports GGUF models from Hugging Face, connects to remote APIs (OpenAI, Claude), and features a beautiful chat interface. Privacy-first with local-only data storage.",
    emoji: "🖥️",
    color: "from-amber-500 to-orange-600",
    directUrl: "https://jan.ai/?via=aiwebtools",
    imageUrl: janAiHero,
    tags: ["local AI", "offline AI", "desktop AI", "open source", "ChatGPT alternative", "privacy", "GGUF", "local models", "self-hosted"],
    category: "Local AI Solutions",
    rating: 4.5,
    totalVotes: 4321,
    tagline: "ChatGPT on your desktop — offline, private, yours"
  },
  // === DESIGN & WHITEBOARD ===
  {
    icon: Eye,
    title: "tldraw",
    description: "Open-source collaborative whiteboard and drawing tool with powerful AI features. Draw rough shapes and let AI turn them into polished UI components, websites, and code. The 'Make Real' feature converts sketches into working HTML/CSS instantly.",
    emoji: "✏️",
    color: "from-blue-400 to-cyan-500",
    directUrl: "https://www.tldraw.com/?via=aiwebtools",
    imageUrl: tldrawHero,
    tags: ["whiteboard", "drawing", "AI design", "sketch to code", "collaborative", "open source", "UI design", "Make Real", "prototyping"],
    category: "Image & Design",
    rating: 4.5,
    totalVotes: 3456,
    tagline: "Sketch it, and AI makes it real — whiteboard magic"
  },
  // === RECRUITING ===
  {
    icon: Users,
    title: "Perfectly",
    description: "The first AI-native recruiting agency. AI agent Paul automates sourcing, outreach, screening, and qualification — delivering interview-ready candidates directly to Slack. Fill roles in days, not months, with white-glove candidate treatment at scale.",
    emoji: "🎯",
    color: "from-teal-500 to-blue-600",
    directUrl: "https://www.perfectly.ai/?via=aiwebtools",
    imageUrl: perfectlyAiHero,
    tags: ["recruiting", "hiring", "AI agent", "talent acquisition", "sourcing", "HR tech", "automation", "candidate screening"],
    category: "Business & Productivity",
    rating: 4.4,
    totalVotes: 1890,
    tagline: "AI recruiter that fills roles in days, not months"
  }
];
