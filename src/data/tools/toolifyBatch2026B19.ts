
import { Tool } from "@/types/tools";
import { Bot, Code, Globe, Brain, Zap, Terminal, Users, Shield, Cpu, Video, Mic, Search, Settings, Layers, MessageSquare, BarChart3 } from "lucide-react";

import groqHero from "@/assets/tools/groq-hero.jpg";
import lindyAiHero from "@/assets/tools/lindy-ai-hero.jpg";
import windsurfHero from "@/assets/tools/windsurf-hero.jpg";
import clineHero from "@/assets/tools/cline-hero.jpg";
import aiderHero from "@/assets/tools/aider-hero.jpg";
import gleanHero from "@/assets/tools/glean-hero.jpg";
import stagehandHero from "@/assets/tools/stagehand-hero.jpg";
import browserbaseHero from "@/assets/tools/browserbase-hero.jpg";
import supermavenHero from "@/assets/tools/supermaven-hero.jpg";
import amazonQHero from "@/assets/tools/amazon-q-hero.jpg";
import qodoHero from "@/assets/tools/qodo-hero.jpg";
import augmentCodeHero from "@/assets/tools/augment-code-hero.jpg";
import jetbrainsAiHero from "@/assets/tools/jetbrains-ai-hero.jpg";
import v0Hero from "@/assets/tools/v0-hero.jpg";
import piecesHero from "@/assets/tools/pieces-hero.jpg";
import continueDevHero from "@/assets/tools/continue-dev-hero.jpg";
import agentDiscussHero from "@/assets/tools/agentdiscuss-hero.jpg";
import banyanAiHero from "@/assets/tools/banyan-ai-hero.jpg";
import aiAutoBrowserHero from "@/assets/tools/ai-auto-browser-hero.jpg";
import codyAiHero from "@/assets/tools/cody-ai-hero.jpg";
import tuskAiHero from "@/assets/tools/tusk-ai-hero.jpg";
import codestoryHero from "@/assets/tools/codestory-hero.jpg";
import operaBrowserAiHero from "@/assets/tools/opera-browser-ai-hero.jpg";
import wordwareHero from "@/assets/tools/wordware-ai-hero.jpg";
import coderabbitHero from "@/assets/tools/coderabbit-ai-hero.jpg";

export const toolifyBatch2026B19: Tool[] = [
  {
    icon: Cpu, title: "Groq",
    description: "The fastest AI inference engine in the world powered by custom LPU (Language Processing Unit) hardware. Delivers up to 18x faster inference than GPU-based competitors with sub-second response times. Access Llama 3, Mixtral, Gemma and more at blazing speed via a simple API.",
    emoji: "⚡", color: "from-orange-500 to-red-600",
    directUrl: "https://groq.com/?via=aiwebtools", imageUrl: groqHero,
    tags: ["AI infrastructure", "inference engine", "LPU", "fast AI", "API", "Llama", "Mixtral", "cloud compute", "developer tools", "hardware"],
    category: "AI Tools & Development", rating: 4.9, totalVotes: 12450,
    tagline: "The world's fastest AI inference — 18x faster than GPUs with custom LPU chips"
  },
  {
    icon: Bot, title: "Lindy AI",
    description: "Build AI agents in minutes without code — the most intuitive no-code AI agent platform. Create custom AI employees for sales, support, recruiting, meetings, marketing and operations that work 24/7. Integrates with 3,000+ apps and handles complex multi-step workflows autonomously.",
    emoji: "🤖", color: "from-purple-500 to-pink-500",
    directUrl: "https://lindy.ai/?via=aiwebtools", imageUrl: lindyAiHero,
    tags: ["AI Agents", "Automation Agent", "no-code", "AI employees", "workflow automation", "sales automation", "customer support", "recruiting"],
    category: "AI Agents", rating: 4.7, totalVotes: 8900,
    tagline: "Build AI employees in minutes — no code, 3,000+ integrations, works 24/7"
  },
  {
    icon: Code, title: "Windsurf",
    description: "The first agentic IDE — formerly Codewind by Codeium. An AI-powered code editor that goes beyond autocomplete with Cascade, an AI agent that understands your entire codebase, writes multi-file changes, runs terminal commands, and proactively suggests improvements. The future of coding.",
    emoji: "🏄", color: "from-teal-500 to-cyan-600",
    directUrl: "https://windsurf.com/?via=aiwebtools", imageUrl: windsurfHero,
    tags: ["Coding Agent", "IDE", "AI code editor", "agentic coding", "Cascade", "code completion", "developer tools", "Codeium"],
    category: "DEVELOPMENT & CODING", rating: 4.8, totalVotes: 15600,
    tagline: "The first agentic IDE — AI that understands your entire codebase and codes alongside you"
  },
  {
    icon: Terminal, title: "Cline",
    description: "Open-source autonomous AI coding agent that lives in your VS Code editor. Cline can create and edit files, execute terminal commands, use the browser, and handle complex software engineering tasks with human-in-the-loop approval. 50,000+ GitHub stars. The most popular open-source AI coding agent.",
    emoji: "🔧", color: "from-blue-600 to-indigo-700",
    directUrl: "https://cline.bot/?via=aiwebtools", imageUrl: clineHero,
    tags: ["Coding Agent", "VS Code", "open source", "autonomous agent", "terminal", "file editing", "AI coding", "developer tools"],
    category: "DEVELOPMENT & CODING", rating: 4.7, totalVotes: 11200,
    tagline: "The open-source AI coding agent in VS Code with 50K+ GitHub stars"
  },
  {
    icon: Terminal, title: "Aider",
    description: "AI pair programming in your terminal. The original open-source AI coding assistant that works with any LLM (GPT-4, Claude, Llama) to edit code in your local git repo. Understands your entire codebase, makes multi-file edits, and commits changes directly. 25,000+ GitHub stars.",
    emoji: "💻", color: "from-green-600 to-emerald-700",
    directUrl: "https://aider.chat/?via=aiwebtools", imageUrl: aiderHero,
    tags: ["Coding Agent", "terminal", "pair programming", "open source", "git", "multi-file editing", "CLI", "developer tools"],
    category: "DEVELOPMENT & CODING", rating: 4.6, totalVotes: 8900,
    tagline: "AI pair programming in your terminal — works with any LLM, edits your git repo"
  },
  {
    icon: Search, title: "Glean",
    description: "Enterprise AI search and knowledge management platform that connects all your company's apps (Slack, Google Drive, Confluence, Salesforce, 100+ more) into one intelligent search. Ask questions in natural language and get instant answers grounded in your company's actual data.",
    emoji: "🔍", color: "from-blue-500 to-purple-600",
    directUrl: "https://glean.com/?via=aiwebtools", imageUrl: gleanHero,
    tags: ["enterprise search", "knowledge management", "AI assistant", "workplace AI", "enterprise", "data integration", "productivity"],
    category: "Business & Productivity", rating: 4.7, totalVotes: 7800,
    tagline: "One search across all your company's apps — AI that knows your entire organization"
  },
  {
    icon: Globe, title: "Stagehand",
    description: "AI-powered browser automation framework by Browserbase that uses natural language instead of brittle CSS selectors. Write browser automations in plain English — Stagehand uses vision models to understand pages and execute actions reliably even when websites change their layout.",
    emoji: "🎭", color: "from-amber-500 to-orange-600",
    directUrl: "https://stagehand.dev/?via=aiwebtools", imageUrl: stagehandHero,
    tags: ["AI Agents", "Web Tasks Agent", "browser automation", "natural language", "web scraping", "testing", "open source", "developer tools"],
    category: "AI Agents", rating: 4.6, totalVotes: 5670,
    tagline: "Browser automation in plain English — no selectors, no breakage, just results"
  },
  {
    icon: Globe, title: "Browserbase",
    description: "Cloud infrastructure for running headless browsers at scale for AI agents. Provides managed browser sessions with stealth mode, CAPTCHA solving, residential proxies, and session recording. The backbone infrastructure powering thousands of AI browser agents in production.",
    emoji: "☁️", color: "from-gray-700 to-blue-600",
    directUrl: "https://browserbase.com/?via=aiwebtools", imageUrl: browserbaseHero,
    tags: ["AI infrastructure", "headless browser", "cloud", "AI Agents", "web scraping", "CAPTCHA", "stealth mode", "developer tools"],
    category: "AI Agents", rating: 4.5, totalVotes: 4560,
    tagline: "Cloud browsers for AI agents — stealth mode, CAPTCHA solving, infinite scale"
  },
  {
    icon: Code, title: "Supermaven",
    description: "The fastest AI code completion engine — 3x faster than GitHub Copilot with a 1 million token context window. Founded by the creator of Tabnine, Supermaven processes your entire codebase for deeply contextual suggestions that understand your project's patterns and conventions.",
    emoji: "🦸", color: "from-purple-600 to-violet-700",
    directUrl: "https://supermaven.com/?via=aiwebtools", imageUrl: supermavenHero,
    tags: ["Code Assistant", "code completion", "IDE", "fast AI", "context window", "developer tools", "VS Code", "JetBrains"],
    category: "DEVELOPMENT & CODING", rating: 4.7, totalVotes: 6780,
    tagline: "3x faster than Copilot with a 1M token context window — by Tabnine's creator"
  },
  {
    icon: Cpu, title: "Amazon Q Developer",
    description: "Amazon's AI-powered developer assistant for building, transforming, and operating AWS applications. Generates code, debugs issues, optimizes cloud infrastructure, and automates Java/Python upgrades. Deeply integrated with the entire AWS ecosystem for enterprise cloud development.",
    emoji: "📦", color: "from-orange-500 to-amber-600",
    directUrl: "https://aws.amazon.com/q/developer/?via=aiwebtools", imageUrl: amazonQHero,
    tags: ["Code Assistant", "AWS", "cloud development", "enterprise", "code generation", "debugging", "infrastructure", "Amazon"],
    category: "DEVELOPMENT & CODING", rating: 4.5, totalVotes: 5430,
    tagline: "Amazon's AI developer assistant — built for the entire AWS cloud ecosystem"
  },
  {
    icon: Shield, title: "Qodo",
    description: "AI-powered code integrity platform (formerly CodiumAI) that generates meaningful tests, reviews code quality, and ensures code reliability. Goes beyond simple code generation to focus on what matters most: making sure your code actually works correctly. Trusted by enterprise teams.",
    emoji: "✅", color: "from-green-500 to-teal-600",
    directUrl: "https://qodo.ai/?via=aiwebtools", imageUrl: qodoHero,
    tags: ["Code Assistant", "testing", "code quality", "code review", "developer tools", "enterprise", "AI testing", "CodiumAI"],
    category: "DEVELOPMENT & CODING", rating: 4.5, totalVotes: 4890,
    tagline: "AI that writes tests and ensures your code actually works — formerly CodiumAI"
  },
  {
    icon: Code, title: "Augment Code",
    description: "Enterprise AI coding platform with the industry's deepest codebase understanding. Augment indexes your entire monorepo, documentation, and coding patterns to provide context-aware completions and chat assistance that actually understands your organization's code at scale.",
    emoji: "🔮", color: "from-indigo-500 to-blue-700",
    directUrl: "https://augmentcode.com/?via=aiwebtools", imageUrl: augmentCodeHero,
    tags: ["Code Assistant", "enterprise", "monorepo", "code completion", "AI coding", "developer tools", "codebase understanding"],
    category: "DEVELOPMENT & CODING", rating: 4.6, totalVotes: 3890,
    tagline: "Enterprise AI coding that understands your entire monorepo — not just open files"
  },
  {
    icon: Brain, title: "JetBrains AI",
    description: "AI assistant built directly into all JetBrains IDEs (IntelliJ, PyCharm, WebStorm, etc.). Provides context-aware code completion, in-editor chat, code explanation, refactoring suggestions, and commit message generation — all powered by multiple LLMs and deeply integrated with JetBrains' code intelligence.",
    emoji: "🧠", color: "from-purple-600 to-pink-600",
    directUrl: "https://jetbrains.com/ai/?via=aiwebtools", imageUrl: jetbrainsAiHero,
    tags: ["Code Assistant", "IDE", "JetBrains", "IntelliJ", "PyCharm", "code completion", "refactoring", "developer tools"],
    category: "DEVELOPMENT & CODING", rating: 4.6, totalVotes: 7890,
    tagline: "AI native to every JetBrains IDE — code smarter in IntelliJ, PyCharm, and beyond"
  },
  {
    icon: Globe, title: "v0 by Vercel",
    description: "AI-powered UI generation platform by Vercel that creates production-ready React components from text descriptions or screenshots. Generates clean, accessible code using shadcn/ui and Tailwind CSS. Iterate on designs with natural language and deploy instantly to Vercel.",
    emoji: "🎨", color: "from-black to-gray-800",
    directUrl: "https://v0.dev/?via=aiwebtools", imageUrl: v0Hero,
    tags: ["AI code generation", "UI generation", "React", "Vercel", "web development", "Tailwind", "shadcn", "frontend"],
    category: "DEVELOPMENT & CODING", rating: 4.8, totalVotes: 18900,
    tagline: "Describe any UI in words — get production-ready React components instantly"
  },
  {
    icon: Layers, title: "Pieces for Developers",
    description: "AI-powered code snippet manager and developer productivity suite with a Long-Term Memory Engine. Saves, enriches, and intelligently retrieves code snippets across your workflow. Integrates with every IDE, browser, and collaboration tool to create a persistent developer memory.",
    emoji: "🧩", color: "from-blue-500 to-cyan-600",
    directUrl: "https://pieces.app/?via=aiwebtools", imageUrl: piecesHero,
    tags: ["developer tools", "code snippets", "productivity", "AI memory", "IDE integration", "workflow", "code management"],
    category: "DEVELOPMENT & CODING", rating: 4.5, totalVotes: 4560,
    tagline: "Your AI-powered developer memory — save, find, and reuse code across everything"
  },
  {
    icon: Code, title: "Continue",
    description: "The leading open-source AI code assistant for VS Code and JetBrains. Connect any LLM (GPT-4, Claude, Llama, Ollama) to get tab autocomplete, chat, and inline editing. Fully customizable with your own models and context providers. 20,000+ GitHub stars.",
    emoji: "▶️", color: "from-red-500 to-orange-600",
    directUrl: "https://continue.dev/?via=aiwebtools", imageUrl: continueDevHero,
    tags: ["Code Assistant", "open source", "VS Code", "JetBrains", "LLM", "code completion", "Ollama", "developer tools"],
    category: "DEVELOPMENT & CODING", rating: 4.6, totalVotes: 7890,
    tagline: "Open-source AI code assistant — use any LLM in VS Code or JetBrains"
  },
  {
    icon: Users, title: "AgentDiscuss",
    description: "New AI agent collaboration and discussion platform launched on Product Hunt (March 2026) by Y Combinator's Garry Tan. Enables AI agents to discuss, debate, and collaborate on complex problems together. A new paradigm for multi-agent interaction and collective intelligence.",
    emoji: "💬", color: "from-green-500 to-blue-500",
    directUrl: "https://agentdiscuss.com/?via=aiwebtools", imageUrl: agentDiscussHero,
    tags: ["AI Agents", "Multi-Agent Framework", "collaboration", "discussion", "collective intelligence", "Product Hunt", "Garry Tan"],
    category: "AI Agents", rating: 4.4, totalVotes: 2340,
    tagline: "AI agents that discuss and debate together — collective intelligence by Garry Tan"
  },
  {
    icon: BarChart3, title: "Banyan AI",
    description: "AI-powered SaaS churn detection and prevention platform (Product Hunt featured, March 2026). Uses machine learning to identify at-risk customers before they cancel, analyze engagement signals, and trigger automated retention campaigns. Turn churn data into actionable revenue intelligence.",
    emoji: "🌳", color: "from-green-600 to-emerald-700",
    directUrl: "https://banyan.ai/?via=aiwebtools", imageUrl: banyanAiHero,
    tags: ["SaaS", "churn prevention", "analytics", "customer retention", "machine learning", "revenue intelligence", "Product Hunt"],
    category: "Business & Productivity", rating: 4.5, totalVotes: 1890,
    tagline: "AI that detects SaaS churn before it happens — save customers automatically"
  },
  {
    icon: Globe, title: "AI Auto Browser",
    description: "Windows desktop app for AI-powered browser automation — navigate, click, download, and schedule web tasks on autopilot. Supports OpenAI, Claude, Gemini, and Ollama for local AI processing. One-time $19.99 purchase with daily/weekly scheduling and multi-agent AI understanding.",
    emoji: "🖥️", color: "from-blue-600 to-purple-700",
    directUrl: "https://bytesweavers.tech/ai-auto-browser/?via=aiwebtools", imageUrl: aiAutoBrowserHero,
    tags: ["AI Agents", "Web Tasks Agent", "Windows", "PC", "browser automation", "desktop app", "scheduler", "Ollama"],
    category: "AI Agents", rating: 4.3, totalVotes: 1560,
    tagline: "AI browser automation for Windows — one-time purchase, works with any LLM"
  },
  {
    icon: Search, title: "Cody AI",
    description: "AI coding assistant by Sourcegraph that understands your entire codebase. Powered by Sourcegraph's code graph, Cody provides context-aware code completions, answers questions about your codebase, generates unit tests, and explains complex code — all grounded in your actual repository.",
    emoji: "🐕", color: "from-purple-500 to-red-500",
    directUrl: "https://sourcegraph.com/cody/?via=aiwebtools", imageUrl: codyAiHero,
    tags: ["Code Assistant", "Sourcegraph", "codebase search", "code completion", "AI coding", "developer tools", "code intelligence"],
    category: "DEVELOPMENT & CODING", rating: 4.6, totalVotes: 5670,
    tagline: "AI that reads your entire codebase — answers, completions, and tests grounded in your code"
  },
  {
    icon: Bot, title: "Tusk AI",
    description: "AI agent that autonomously fixes bugs and handles coding tickets from your issue tracker. Connect your GitHub issues or Jira tickets, and Tusk's AI agent writes the code, creates pull requests, and iterates on review feedback — reducing engineering backlog automatically.",
    emoji: "🐘", color: "from-gray-600 to-blue-700",
    directUrl: "https://usetusk.ai/?via=aiwebtools", imageUrl: tuskAiHero,
    tags: ["Coding Agent", "bug fixing", "GitHub", "Jira", "pull requests", "autonomous agent", "engineering", "developer tools"],
    category: "DEVELOPMENT & CODING", rating: 4.4, totalVotes: 2340,
    tagline: "AI agent that reads your tickets, writes the code, and creates the pull request"
  },
  {
    icon: Code, title: "Codestory",
    description: "AI-native code editor built from the ground up for agentic workflows. Unlike plugins added to existing editors, Codestory reimagines the IDE experience with AI at its core — providing intelligent code navigation, multi-file refactoring, and deep understanding of code intent.",
    emoji: "📖", color: "from-indigo-500 to-purple-600",
    directUrl: "https://codestory.ai/?via=aiwebtools", imageUrl: codestoryHero,
    tags: ["Coding Agent", "IDE", "AI code editor", "agentic coding", "code navigation", "refactoring", "developer tools"],
    category: "DEVELOPMENT & CODING", rating: 4.4, totalVotes: 2890,
    tagline: "An IDE built from scratch for AI — not a plugin, a paradigm shift"
  },
  {
    icon: Globe, title: "Opera Browser AI",
    description: "The first major browser with native AI-based agentic browsing. Opera's Browser Operator is a built-in AI agent that performs browsing tasks for you — filling forms, comparing products, booking flights, and executing multi-step web workflows without extensions or plugins.",
    emoji: "🌐", color: "from-red-500 to-pink-600",
    directUrl: "https://opera.com/?via=aiwebtools", imageUrl: operaBrowserAiHero,
    tags: ["AI Agents", "Web Tasks Agent", "browser", "agentic browsing", "Opera", "web automation", "productivity"],
    category: "AI Agents", rating: 4.5, totalVotes: 6780,
    tagline: "The first major browser with a built-in AI agent — your browsing on autopilot"
  },
  {
    icon: Brain, title: "Wordware",
    description: "Natural language programming IDE for building AI agents and LLM applications. Write your AI logic in plain English instead of code — Wordware compiles it into production-ready AI pipelines. The fastest way for non-developers to build sophisticated AI agents and workflows.",
    emoji: "📝", color: "from-blue-500 to-indigo-600",
    directUrl: "https://wordware.ai/?via=aiwebtools", imageUrl: wordwareHero,
    tags: ["AI Agents", "no-code", "natural language programming", "LLM", "AI development", "workflow", "developer tools"],
    category: "AI Agents", rating: 4.5, totalVotes: 3450,
    tagline: "Program AI agents in plain English — natural language that compiles to production"
  },
  {
    icon: Shield, title: "CodeRabbit",
    description: "AI-powered code review platform that automatically reviews every pull request with the depth of a senior engineer. Provides line-by-line feedback, identifies bugs and security issues, suggests improvements, and learns your team's coding standards over time. Trusted by 10,000+ repositories.",
    emoji: "🐰", color: "from-orange-500 to-yellow-600",
    directUrl: "https://coderabbit.ai/?via=aiwebtools", imageUrl: coderabbitHero,
    tags: ["Code Assistant", "code review", "pull requests", "GitHub", "security", "developer tools", "AI review", "GitLab"],
    category: "DEVELOPMENT & CODING", rating: 4.7, totalVotes: 8900,
    tagline: "AI code reviewer as thorough as a senior engineer — on every pull request"
  }
];
