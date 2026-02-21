import { Bot, Globe, Code, Wand2, Zap, Brain, Rocket, Monitor, Users, Search, Layers, Cpu, Settings2, Terminal } from "lucide-react";
import { Tool } from "@/types/tools";

import multionHero from "@/assets/tools/multion-hero.jpg";
import coderabbitHero from "@/assets/tools/coderabbit-hero.jpg";
import phindHero from "@/assets/tools/phind-hero.jpg";
import inducedAiHero from "@/assets/tools/induced-ai-hero.jpg";
import browserbaseHero from "@/assets/tools/browserbase-hero.jpg";
import langgraphHero from "@/assets/tools/langgraph-hero.jpg";
import beamAiHero from "@/assets/tools/beam-ai-hero.jpg";
import fixieAiHero from "@/assets/tools/fixie-ai-hero.jpg";
import sweepAiHero from "@/assets/tools/sweep-ai-hero.jpg";
import fineDevHero from "@/assets/tools/fine-dev-hero.jpg";
import adeptAiHero from "@/assets/tools/adept-ai-hero.jpg";
import openhandsHero from "@/assets/tools/openhands-hero.jpg";
import diaBrowserHero from "@/assets/tools/dia-browser-hero.jpg";
import axiomAiHero from "@/assets/tools/axiom-ai-hero.jpg";
import ottogridHero from "@/assets/tools/ottogrid-hero.jpg";

export const newAIAgents2026: Tool[] = [
  {
    icon: Globe,
    title: "MultiOn",
    description: "AI web agent that autonomously browses the internet and completes tasks for you. Book flights, order food, fill forms, and navigate complex websites hands-free with natural language commands.",
    emoji: "🌐",
    color: "from-indigo-500 to-purple-700",
    directUrl: "https://www.multion.ai/?via=aiwebtools",
    imageUrl: multionHero,
    tags: ["Web Tasks Agent", "autonomous browsing", "browser agent", "web automation", "AI agent", "task completion", "agent"],
    category: "AI Agents",
    rating: 4.7,
    totalVotes: 2800
  },
  {
    icon: Code,
    title: "CodeRabbit - AI Code Review Agent",
    description: "AI-powered code review agent that automatically reviews every pull request on GitHub and GitLab. Provides line-by-line feedback, catches bugs, suggests improvements, and generates PR summaries instantly.",
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
    icon: Search,
    title: "Phind - AI Search for Developers",
    description: "AI-powered search engine built specifically for developers. Get instant, accurate answers to programming questions with code examples, sourced from documentation and real codebases. Faster than Stack Overflow.",
    emoji: "🔍",
    color: "from-green-500 to-teal-700",
    directUrl: "https://www.phind.com/?via=aiwebtools",
    imageUrl: phindHero,
    tags: ["Research Agent", "developer search", "code search", "programming", "documentation", "AI search", "developer tools", "agent"],
    category: "AI Agents",
    rating: 4.7,
    totalVotes: 4500
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
    description: "Cloud browser infrastructure purpose-built for AI agents. Deploy headless browsers at scale so your AI agents can browse, interact with, and extract data from any website reliably and securely.",
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
    description: "Framework by LangChain for building stateful, multi-actor AI agent applications. Create complex agent workflows with cycles, branching, and human-in-the-loop patterns. Powers production-grade agent systems.",
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
    description: "Deploy autonomous AI agents that handle enterprise operations end-to-end. Automate customer support, data processing, compliance checks, and business workflows with agents that learn and improve over time.",
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
    icon: Bot,
    title: "Fixie AI - Conversational Agent Platform",
    description: "Platform for building production-ready conversational AI agents that connect to your data and APIs. Create agents that can search, retrieve information, and take actions through natural language conversations.",
    emoji: "🤖",
    color: "from-orange-500 to-pink-600",
    directUrl: "https://www.fixie.ai/?via=aiwebtools",
    imageUrl: fixieAiHero,
    tags: ["Conversational Agent", "chatbot", "API integration", "agent builder", "conversational AI", "data retrieval", "agent"],
    category: "AI Agents",
    rating: 4.4,
    totalVotes: 900
  },
  {
    icon: Wand2,
    title: "Sweep AI - GitHub Coding Agent",
    description: "AI-powered coding agent that turns GitHub issues into pull requests. Describe what you want in an issue and Sweep writes the code, creates the PR, and handles the implementation autonomously.",
    emoji: "🧹",
    color: "from-green-500 to-lime-700",
    directUrl: "https://sweep.dev/?via=aiwebtools",
    imageUrl: sweepAiHero,
    tags: ["Coding Agent", "GitHub", "pull requests", "autonomous coding", "issue to PR", "open source", "developer tools", "agent"],
    category: "AI Agents",
    rating: 4.6,
    totalVotes: 2100
  },
  {
    icon: Users,
    title: "Fine.dev - AI Coding Agent for Teams",
    description: "AI coding agent designed for engineering teams. Automates routine development tasks, writes implementations from specs, handles code reviews, and integrates with your team's existing workflow and codebase.",
    emoji: "👥",
    color: "from-blue-600 to-purple-700",
    directUrl: "https://www.fine.dev/?via=aiwebtools",
    imageUrl: fineDevHero,
    tags: ["Coding Agent", "team coding", "engineering", "autonomous development", "code generation", "workflow integration", "agent"],
    category: "AI Agents",
    rating: 4.5,
    totalVotes: 1400
  },
  {
    icon: Brain,
    title: "Adept AI - Computer Use Agent",
    description: "AI agent that uses computers the way humans do—clicking, typing, and navigating software interfaces. Automate any workflow across any application with natural language instructions and visual understanding.",
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
    title: "OpenHands (formerly OpenDevin) - Open Source Dev Agent",
    description: "Open-source AI software development agent that writes code, fixes bugs, and ships features. Autonomous developer agent that plans tasks, executes code, and interacts with the command line and browser.",
    emoji: "✋",
    color: "from-orange-500 to-green-600",
    directUrl: "https://www.all-hands.dev/?via=aiwebtools",
    imageUrl: openhandsHero,
    tags: ["Coding Agent", "open source", "autonomous coding", "software development", "bug fixing", "full-stack", "developer tools", "agent"],
    category: "AI Agents",
    rating: 4.7,
    totalVotes: 3500
  },
  {
    icon: Globe,
    title: "Dia Browser - AI-Native Web Browser",
    description: "AI-native web browser by The Browser Company (makers of Arc). Built from the ground up with AI agents that proactively help you browse, summarize pages, fill forms, and complete tasks on the web.",
    emoji: "🌍",
    color: "from-rose-500 to-orange-600",
    directUrl: "https://www.diabrowser.com/?via=aiwebtools",
    imageUrl: diaBrowserHero,
    tags: ["Web Tasks Agent", "AI browser", "The Browser Company", "web assistant", "smart browsing", "AI-native", "agent"],
    category: "AI Agents",
    rating: 4.6,
    totalVotes: 2800
  },
  {
    icon: Settings2,
    title: "Axiom AI - No-Code Browser Automation",
    description: "No-code browser automation and web scraping agent. Build automated workflows that interact with any website—fill forms, extract data, click buttons, and complete multi-step processes without writing code.",
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
    title: "Ottogrid - AI Research Agent at Scale",
    description: "AI research agent that automates web research at scale. Feed it a list of companies, people, or topics and Ottogrid researches each one across the web, returning structured data in spreadsheet format.",
    emoji: "📊",
    color: "from-blue-600 to-indigo-800",
    directUrl: "https://ottogrid.ai/?via=aiwebtools",
    imageUrl: ottogridHero,
    tags: ["Research Agent", "web research", "data collection", "lead enrichment", "market research", "structured data", "automation", "agent"],
    category: "AI Agents",
    rating: 4.6,
    totalVotes: 1600
  }
];
