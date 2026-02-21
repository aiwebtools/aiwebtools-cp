import { Bot, Globe, Code, Wand2, Zap, Brain, Rocket, Monitor, Users, Search, Layers, Cpu, Settings2, Terminal } from "lucide-react";
import { Tool } from "@/types/tools";

import multionHero from "@/assets/tools/multion-hero.jpg";
import coderabbitHero from "@/assets/tools/coderabbit-hero.jpg";
import inducedAiHero from "@/assets/tools/induced-ai-hero.jpg";
import browserbaseHero from "@/assets/tools/browserbase-hero.jpg";
import langgraphHero from "@/assets/tools/langgraph-hero.jpg";
import beamAiHero from "@/assets/tools/beam-ai-hero.jpg";
import sweepAiHero from "@/assets/tools/sweep-ai-hero.jpg";
import adeptAiHero from "@/assets/tools/adept-ai-hero.jpg";
import openhandsHero from "@/assets/tools/openhands-hero.jpg";
import diaBrowserHero from "@/assets/tools/dia-browser-hero.jpg";
import axiomAiHero from "@/assets/tools/axiom-ai-hero.jpg";
import replitHero from "@/assets/tools/replit-hero.jpg";

export const newAIAgents2026: Tool[] = [
  {
    icon: Globe,
    title: "The AGI Company (formerly MultiOn)",
    description: "Applied AI lab redefining human-AI interaction. Their flagship product AGI-0 is a personalized, proactive AI co-worker that autonomously completes tasks on your smartphone—browsing, booking, ordering, and navigating the web hands-free.",
    emoji: "🌐",
    color: "from-indigo-500 to-purple-700",
    directUrl: "https://www.theagi.company/?via=aiwebtools",
    imageUrl: multionHero,
    tags: ["Web Tasks Agent", "autonomous browsing", "browser agent", "web automation", "AI agent", "task completion", "AGI", "mobile agent", "agent"],
    category: "AI Agents",
    rating: 4.7,
    totalVotes: 2800
  },
  {
    icon: Code,
    title: "CodeRabbit - AI Code Review Agent",
    description: "AI-powered code review agent that automatically reviews every pull request on GitHub and GitLab. Provides line-by-line feedback, catches bugs, suggests improvements, and generates PR summaries instantly. Trusted by 2M+ repositories.",
    emoji: "🐰",
    color: "from-purple-500 to-violet-700",
    directUrl: "https://coderabbit.ai/?via=aiwebtools",
    imageUrl: coderabbitHero,
    tags: ["Coding Agent", "code review", "GitHub", "GitLab", "pull request", "bug detection", "developer tools", "agent"],
    category: "AI Agents",
    rating: 4.8,
    totalVotes: 3200
  },
  {
    icon: Monitor,
    title: "Induced AI - Browser Automation Agent",
    description: "Enterprise browser automation agent that performs complex web workflows autonomously. Automate data entry, form filling, web scraping, and multi-step browser tasks with natural language instructions.",
    emoji: "🖥️",
    color: "from-blue-500 to-indigo-700",
    directUrl: "https://www.induced.ai/?via=aiwebtools",
    imageUrl: inducedAiHero,
    tags: ["Web Tasks Agent", "browser automation", "enterprise", "web scraping", "data entry", "workflow automation", "agent"],
    category: "AI Agents",
    rating: 4.6,
    totalVotes: 1800
  },
  {
    icon: Cpu,
    title: "BrowserBase - Cloud Browser Infrastructure",
    description: "Cloud browser infrastructure purpose-built for AI agents. Deploy headless browsers at scale so your AI agents can browse, interact with, and extract data from any website reliably and securely. Trusted by Perplexity, Vanta, and Clay.",
    emoji: "☁️",
    color: "from-orange-500 to-red-700",
    directUrl: "https://www.browserbase.com/?via=aiwebtools",
    imageUrl: browserbaseHero,
    tags: ["Web Tasks Agent", "cloud browser", "infrastructure", "headless browser", "AI agent infrastructure", "web scraping", "developer tools", "agent"],
    category: "AI Agents",
    rating: 4.5,
    totalVotes: 1500
  },
  {
    icon: Layers,
    title: "LangGraph - Multi-Agent Orchestration",
    description: "Framework by LangChain for building stateful, multi-actor AI agent applications. Create complex agent workflows with cycles, branching, and human-in-the-loop patterns. Powers production-grade agent systems at Rakuten, GitLab, Elastic, and Cisco.",
    emoji: "🔗",
    color: "from-green-600 to-emerald-800",
    directUrl: "https://www.langchain.com/langgraph/?via=aiwebtools",
    imageUrl: langgraphHero,
    tags: ["Multi-Agent Framework", "LangChain", "orchestration", "stateful agents", "agent framework", "workflow", "developer tools", "agent"],
    category: "AI Agents",
    rating: 4.7,
    totalVotes: 3800
  },
  {
    icon: Zap,
    title: "Beam AI - Autonomous Enterprise Agents",
    description: "Deploy self-learning AI agents that handle enterprise operations end-to-end. Automate customer support, data processing, compliance checks, and business workflows. Already processing 10M+ tasks for Fortune 500 companies.",
    emoji: "⚡",
    color: "from-amber-500 to-yellow-700",
    directUrl: "https://www.beam.ai/?via=aiwebtools",
    imageUrl: beamAiHero,
    tags: ["Automation Agent", "enterprise", "autonomous agents", "customer support", "business automation", "operations", "agent"],
    category: "AI Agents",
    rating: 4.5,
    totalVotes: 1200
  },
  {
    icon: Wand2,
    title: "Sweep AI - JetBrains Coding Agent",
    description: "The fastest AI coding assistant for JetBrains IDEs. AI agent that writes code 10x faster with intelligent autocomplete and an autonomous coding agent built into IntelliJ, PyCharm, and WebStorm. 40k+ installs with 4.9 star rating.",
    emoji: "🧹",
    color: "from-green-500 to-lime-700",
    directUrl: "https://sweep.dev/?via=aiwebtools",
    imageUrl: sweepAiHero,
    tags: ["Coding Agent", "JetBrains", "autocomplete", "IntelliJ", "PyCharm", "AI coding assistant", "developer tools", "agent"],
    category: "AI Agents",
    rating: 4.6,
    totalVotes: 2100
  },
  {
    icon: Brain,
    title: "Adept AI - Computer Use Agent",
    description: "AI agent that uses computers the way humans do—clicking, typing, and navigating software interfaces. Automate any workflow across any application with natural language instructions and visual understanding. Enterprise-grade agentic AI for your tech stack.",
    emoji: "🧠",
    color: "from-amber-500 to-blue-600",
    directUrl: "https://www.adept.ai/?via=aiwebtools",
    imageUrl: adeptAiHero,
    tags: ["Web Tasks Agent", "computer use", "desktop agent", "UI automation", "visual AI", "workflow automation", "autonomous agent", "agent"],
    category: "AI Agents",
    rating: 4.8,
    totalVotes: 5200
  },
  {
    icon: Terminal,
    title: "OpenHands - Open Source Dev Agent",
    description: "Open-source AI software development agent that writes code, fixes bugs, and ships features. Autonomous developer agent that plans tasks, executes code, and interacts with the command line and browser. The open, secure, and model-agnostic platform.",
    emoji: "✋",
    color: "from-orange-500 to-green-600",
    directUrl: "https://www.openhands.dev/?via=aiwebtools",
    imageUrl: openhandsHero,
    tags: ["Coding Agent", "open source", "autonomous coding", "software development", "bug fixing", "full-stack", "developer tools", "agent"],
    category: "AI Agents",
    rating: 4.7,
    totalVotes: 3500
  },
  {
    icon: Globe,
    title: "Dia Browser - AI-Native Web Browser",
    description: "AI-native web browser by The Browser Company (makers of Arc). Built from the ground up with AI that chats with your tabs, helps you write, learn, and complete tasks on the web. Your AI writing partner in every text box.",
    emoji: "🌍",
    color: "from-rose-500 to-orange-600",
    directUrl: "https://www.diabrowser.com/?via=aiwebtools",
    imageUrl: diaBrowserHero,
    tags: ["Web Tasks Agent", "AI browser", "The Browser Company", "web assistant", "smart browsing", "AI-native", "writing assistant", "agent"],
    category: "AI Agents",
    rating: 4.6,
    totalVotes: 2800
  },
  {
    icon: Settings2,
    title: "Axiom AI - No-Code Browser Automation",
    description: "No-code browser automation and web scraping agent backed by Y Combinator. Build automated workflows that interact with any website—fill forms, extract data, click buttons, and connect to Zapier and ChatGPT without writing code.",
    emoji: "⚙️",
    color: "from-blue-400 to-cyan-600",
    directUrl: "https://axiom.ai/?via=aiwebtools",
    imageUrl: axiomAiHero,
    tags: ["Web Tasks Agent", "no-code", "browser automation", "web scraping", "data extraction", "workflow builder", "Automation Agent", "agent"],
    category: "AI Agents",
    rating: 4.5,
    totalVotes: 1900
  },
  {
    icon: Rocket,
    title: "Replit - AI App Builder & Coding Agent",
    description: "Build software with AI using Replit Agent. Describe what you want to create in natural language and Replit's AI builds full-stack applications from scratch—frontend, backend, database, and deployment. The fastest way to go from idea to live app.",
    emoji: "🚀",
    color: "from-orange-500 to-blue-600",
    directUrl: "https://replit.com/?via=aiwebtools",
    imageUrl: replitHero,
    tags: ["Coding Agent", "AI app builder", "full-stack", "no-code", "deployment", "web development", "vibe coding", "agent"],
    category: "AI Agents",
    rating: 4.8,
    totalVotes: 8500
  }
];
