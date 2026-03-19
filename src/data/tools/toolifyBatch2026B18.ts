
import { Tool } from "@/types/tools";
import { Bot, Code, Globe, Brain, Layers, Zap, Terminal, Users, Shield, Cpu, Video, Mic, Search, Settings } from "lucide-react";

import openswarmHero from "@/assets/tools/openswarm-hero.jpg";
import eniaCodeHero from "@/assets/tools/enia-code-hero.jpg";
import agentBrowserHero from "@/assets/tools/agent-browser-hero.jpg";
import zeroclawHero from "@/assets/tools/zeroclaw-hero.jpg";
import scienceclawHero from "@/assets/tools/scienceclaw-hero.jpg";
import openbrowserclawHero from "@/assets/tools/openbrowserclaw-hero.jpg";
import clawtankHero from "@/assets/tools/clawtank-hero.jpg";
import vanGoghAiHero from "@/assets/tools/van-gogh-ai-hero.jpg";
import togetherAiHero from "@/assets/tools/together-ai-hero.jpg";
import livekitAgentsHero from "@/assets/tools/livekit-agents-hero.jpg";
import retuneHero from "@/assets/tools/retune-hero.jpg";
import ubosHero from "@/assets/tools/ubos-hero.jpg";
import tabbyMlHero from "@/assets/tools/tabby-ml-hero.jpg";
import julepAiHero from "@/assets/tools/julep-ai-hero.jpg";
import browserbirdHero from "@/assets/tools/browserbird-hero.jpg";
import instructorHero from "@/assets/tools/instructor-hero.jpg";
import marvinAiHero from "@/assets/tools/marvin-ai-hero.jpg";
import controlflowHero from "@/assets/tools/controlflow-hero.jpg";
import onDeviceBrowserAgentHero from "@/assets/tools/on-device-browser-agent-hero.jpg";
import agentdeskHero from "@/assets/tools/agentdesk-hero.jpg";
import agentHarnessHero from "@/assets/tools/agent-harness-hero.jpg";
import wandbHero from "@/assets/tools/wandb-hero.jpg";
import anyscaleHero from "@/assets/tools/anyscale-hero.jpg";
import potpieAiHero from "@/assets/tools/potpie-ai-hero.jpg";
import farosAiHero from "@/assets/tools/faros-ai-hero.jpg";

export const toolifyBatch2026B18: Tool[] = [
  {
    icon: Users, title: "OpenSwarm",
    description: "Open-source autonomous AI agent orchestrator powered by Claude Code CLI. Coordinates multiple Claude-powered AI agents to autonomously handle software development tasks, issue triage, and knowledge-base management with Worker/Reviewer pairs, cognitive memory, and Linear/GitHub/Discord integration.",
    emoji: "🐝", color: "from-cyan-500 to-purple-600",
    directUrl: "https://openswarm.info/?via=aiwebtools", imageUrl: openswarmHero,
    tags: ["AI Agents", "Multi-Agent Framework", "Agent Swarm", "Claude", "orchestration", "autonomous agents", "open source", "developer tools", "swarm"],
    category: "AI Agents", rating: 4.7, totalVotes: 1890,
    tagline: "Your mission control center for a swarm of Claude-powered AI agents"
  },
  {
    icon: Code, title: "Enia Code",
    description: "Proactive AI coding agent that detects bugs, performance issues, architectural inconsistencies, and refactoring opportunities without waiting for you to ask. Product Hunt featured (March 2026). Unlike reactive assistants, Enia continuously monitors your codebase and suggests improvements.",
    emoji: "🔍", color: "from-green-500 to-emerald-600",
    directUrl: "https://eniacode.com/?via=aiwebtools", imageUrl: eniaCodeHero,
    tags: ["Coding Agent", "proactive AI", "bug detection", "code review", "developer tools", "performance optimization", "refactoring"],
    category: "DEVELOPMENT & CODING", rating: 4.6, totalVotes: 2340,
    tagline: "The AI coding agent that finds bugs before you even know they exist"
  },
  {
    icon: Globe, title: "Vercel Agent Browser",
    description: "Browser automation CLI for AI agents with 23,000+ GitHub stars. Built in Rust for maximum performance, it enables AI agents to browse, interact with, and extract data from any website programmatically. The industry standard for agent-driven browser automation.",
    emoji: "🌐", color: "from-black to-gray-700",
    directUrl: "https://agent-browser.dev/?via=aiwebtools", imageUrl: agentBrowserHero,
    tags: ["AI Agents", "Web Tasks Agent", "browser automation", "Vercel", "Rust", "CLI", "web scraping", "open source"],
    category: "AI Agents", rating: 4.8, totalVotes: 4567,
    tagline: "The Rust-powered browser CLI that lets AI agents conquer the web"
  },
  {
    icon: Shield, title: "ZeroClaw",
    description: "Secure multi-agent AI orchestration framework built in Rust with WASM plugins and provider-agnostic routing. 22,000+ GitHub stars. Designed for hardcore developers building high-performance multi-agent AI systems with zero-trust security and sandboxed execution.",
    emoji: "🦀", color: "from-orange-600 to-red-700",
    directUrl: "https://github.com/nicholasgasior/zeroclaw/?via=aiwebtools", imageUrl: zeroclawHero,
    tags: ["AI Agents", "Multi-Agent Framework", "Rust", "WASM", "security", "open source", "high-performance", "swarm"],
    category: "AI Agents", rating: 4.7, totalVotes: 3890,
    tagline: "Multi-agent AI orchestration in Rust — zero-trust, maximum performance"
  },
  {
    icon: Brain, title: "ScienceClaw",
    description: "A self-evolving AI research colleague for scientists with 285 skills, zero hallucination design, and persistent memory. Analyzes papers, designs experiments, writes code, and evolves its capabilities over time. Open-source research assistant that grows smarter with every interaction.",
    emoji: "🔬", color: "from-blue-500 to-cyan-600",
    directUrl: "https://github.com/beita6969/ScienceClaw/?via=aiwebtools", imageUrl: scienceclawHero,
    tags: ["AI Agents", "research", "science", "academic", "open source", "persistent memory", "experiment design"],
    category: "AI Agents", rating: 4.5, totalVotes: 1567,
    tagline: "Your AI research colleague that evolves, remembers, and never hallucinates"
  },
  {
    icon: Globe, title: "OpenBrowserClaw",
    description: "Browser-native personal AI assistant requiring zero infrastructure — the browser IS the server. Open-source PWA that runs entirely in your browser with no cloud dependency, providing a full OpenClaw-compatible AI assistant experience from any device.",
    emoji: "🐾", color: "from-green-500 to-emerald-700",
    directUrl: "https://openbrowserclaw.com/?via=aiwebtools", imageUrl: openbrowserclawHero,
    tags: ["AI Agents", "browser agent", "PWA", "open source", "privacy", "no cloud", "OpenClaw", "personal assistant"],
    category: "AI Agents", rating: 4.4, totalVotes: 1234,
    tagline: "OpenClaw in your browser — zero servers, zero setup, infinite potential"
  },
  {
    icon: Cpu, title: "ClawTank",
    description: "The fastest way to deploy OpenClaw — one-click managed hosting for the open-source personal AI assistant framework. No Docker, no SSH, no DevOps required. Each user gets an isolated container with automatic SSL, updates, and backups. Deploy in under 1 minute.",
    emoji: "🚀", color: "from-blue-600 to-green-500",
    directUrl: "https://clawtank.dev/?via=aiwebtools", imageUrl: clawtankHero,
    tags: ["AI Agents", "hosting", "OpenClaw", "managed platform", "one-click deploy", "Docker", "cloud"],
    category: "AI Agents", rating: 4.3, totalVotes: 987,
    tagline: "One-click OpenClaw deployment — your AI assistant live in 60 seconds"
  },
  {
    icon: Video, title: "Van Gogh AI Video Generator",
    description: "Free AI video generator for creating artistic videos from text or images with impressionist and painterly styles. Transform your ideas into stunning Van Gogh-inspired video art with AI-powered artistic rendering. No sign-up required.",
    emoji: "🎨", color: "from-yellow-500 to-blue-600",
    directUrl: "https://vangogh.video/?via=aiwebtools", imageUrl: vanGoghAiHero,
    tags: ["video generation", "AI art", "free AI", "artistic video", "text-to-video", "Van Gogh", "creative"],
    category: "Video Generation", rating: 4.4, totalVotes: 2890, isFree: true,
    tagline: "Turn your words into Van Gogh-style video masterpieces — completely free"
  },
  {
    icon: Cpu, title: "Together AI",
    description: "Leading AI model inference platform offering the fastest and most affordable way to run open-source AI models. Access Llama, Mixtral, DBRX, and 100+ models via a single API with industry-leading inference speed and competitive pricing. Trusted by thousands of developers.",
    emoji: "🤝", color: "from-blue-600 to-indigo-700",
    directUrl: "https://together.ai/?via=aiwebtools", imageUrl: togetherAiHero,
    tags: ["AI infrastructure", "model inference", "API", "open source models", "Llama", "Mixtral", "cloud compute", "developer tools"],
    category: "AI Tools & Development", rating: 4.7, totalVotes: 5670,
    tagline: "Run 100+ open-source AI models at lightning speed with one API"
  },
  {
    icon: Mic, title: "LiveKit Agents",
    description: "Open-source framework for building real-time, multimodal AI agents that see, hear, and speak. Build voice AI agents, video processing pipelines, and real-time AI applications with sub-second latency. Powers thousands of production voice agents worldwide.",
    emoji: "🎙️", color: "from-purple-500 to-pink-600",
    directUrl: "https://livekit.io/agents/?via=aiwebtools", imageUrl: livekitAgentsHero,
    tags: ["AI Agents", "Voice Agent", "open source", "real-time", "multimodal", "voice AI", "video processing", "WebRTC"],
    category: "AI Agents", rating: 4.6, totalVotes: 3456,
    tagline: "Open-source voice agents that hear, think, and speak in real-time"
  },
  {
    icon: Code, title: "Retune",
    description: "The visual layer for vibe coding. See your AI-generated code come alive with real-time visual previews, component inspection, and design system integration. Bridge the gap between AI code generation and visual design with an intuitive overlay system.",
    emoji: "🎯", color: "from-orange-500 to-red-500",
    directUrl: "https://retune.dev/?via=aiwebtools", imageUrl: retuneHero,
    tags: ["developer tools", "vibe coding", "visual coding", "code preview", "design system", "UI development"],
    category: "DEVELOPMENT & CODING", rating: 4.3, totalVotes: 1234,
    tagline: "See your vibe-coded apps come alive with real-time visual previews"
  },
  {
    icon: Layers, title: "UBOS",
    description: "From vibe coding to vibe deployment. AI agent deployment platform with MCP integration that turns ideas into infrastructure with one message. Deploy OpenSwarm, OpenClaw, and other AI agent frameworks with zero DevOps knowledge required.",
    emoji: "☁️", color: "from-blue-500 to-cyan-500",
    directUrl: "https://ubos.tech/?via=aiwebtools", imageUrl: ubosHero,
    tags: ["AI Agents", "deployment", "infrastructure", "MCP", "vibe deployment", "cloud", "no-code"],
    category: "AI Agents", rating: 4.4, totalVotes: 1678,
    tagline: "Vibe deploy AI agents — one message turns ideas into live infrastructure"
  },
  {
    icon: Terminal, title: "Tabby",
    description: "Self-hosted AI coding assistant — the open-source alternative to GitHub Copilot. Run your own AI code completion server with full privacy and customization. Supports all major IDEs, works with any LLM backend, and keeps your code on your infrastructure.",
    emoji: "🐱", color: "from-amber-500 to-orange-600",
    directUrl: "https://tabby.tabbyml.com/?via=aiwebtools", imageUrl: tabbyMlHero,
    tags: ["Code Assistant", "Coding Agent", "open source", "self-hosted", "code completion", "privacy", "IDE integration"],
    category: "DEVELOPMENT & CODING", rating: 4.6, totalVotes: 4123,
    tagline: "Self-hosted GitHub Copilot alternative — your code, your servers, your rules"
  },
  {
    icon: Brain, title: "Julep AI",
    description: "Platform for building stateful AI agents with persistent memory, complex multi-step workflows, and tool integration. Unlike stateless chatbots, Julep agents remember context across sessions, execute long-running tasks, and maintain relationships between conversations.",
    emoji: "🧃", color: "from-green-500 to-emerald-700",
    directUrl: "https://julep.ai/?via=aiwebtools", imageUrl: julepAiHero,
    tags: ["AI Agents", "stateful agents", "persistent memory", "workflow automation", "multi-step", "developer platform"],
    category: "AI Agents", rating: 4.5, totalVotes: 2345,
    tagline: "AI agents with memory — they remember you, your context, and your goals"
  },
  {
    icon: Globe, title: "BrowserBird",
    description: "Self-hosted AI agent orchestrator with a real browser, cron scheduler, and web dashboard. Run automated browser tasks on your own infrastructure with full visual monitoring. Perfect for web scraping, testing, and autonomous browsing workflows.",
    emoji: "🐦", color: "from-teal-500 to-blue-600",
    directUrl: "https://browserbird.dev/?via=aiwebtools", imageUrl: browserbirdHero,
    tags: ["AI Agents", "Web Tasks Agent", "self-hosted", "browser automation", "cron scheduler", "web scraping", "monitoring"],
    category: "AI Agents", rating: 4.3, totalVotes: 987,
    tagline: "Self-hosted browser agent with scheduling, dashboards, and full control"
  },
  {
    icon: Settings, title: "Instructor",
    description: "The most popular library for getting structured outputs from LLMs. Patches OpenAI, Anthropic, and other clients to return validated Pydantic models instead of raw text. Used by thousands of production apps for reliable, type-safe AI responses.",
    emoji: "📐", color: "from-blue-500 to-orange-500",
    directUrl: "https://useinstructor.com/?via=aiwebtools", imageUrl: instructorHero,
    tags: ["developer tools", "structured output", "Pydantic", "LLM", "validation", "Python", "open source"],
    category: "AI Tools & Development", rating: 4.7, totalVotes: 3789,
    tagline: "Get perfectly structured JSON from any LLM — validated, typed, reliable"
  },
  {
    icon: Bot, title: "Marvin AI",
    description: "The AI engineering framework by Prefect that makes building AI-powered features as simple as writing a function. Extract data, classify text, generate synthetic data, and build AI pipelines with clean Pythonic APIs. Production-ready AI engineering toolkit.",
    emoji: "🤖", color: "from-purple-600 to-indigo-700",
    directUrl: "https://askmarvin.ai/?via=aiwebtools", imageUrl: marvinAiHero,
    tags: ["developer tools", "AI engineering", "Python", "Prefect", "data extraction", "classification", "open source"],
    category: "AI Tools & Development", rating: 4.5, totalVotes: 2456,
    tagline: "AI engineering made as simple as writing a Python function"
  },
  {
    icon: Layers, title: "ControlFlow",
    description: "Agentic workflow framework by Prefect for building AI applications with structured, observable, and controllable agent workflows. Define tasks declaratively, orchestrate multiple agents, and maintain full visibility into every step of your AI pipeline.",
    emoji: "🔄", color: "from-blue-600 to-cyan-600",
    directUrl: "https://controlflow.ai/?via=aiwebtools", imageUrl: controlflowHero,
    tags: ["AI Agents", "Multi-Agent Framework", "workflow", "Prefect", "orchestration", "observable", "developer tools"],
    category: "AI Agents", rating: 4.4, totalVotes: 1890,
    tagline: "Orchestrate AI agents with the precision of a symphony conductor"
  },
  {
    icon: Shield, title: "On-Device Browser Agent",
    description: "On-device AI browser automation using WebLLM — no cloud, no API keys, fully private. Runs AI models directly in your browser for automated web tasks without sending any data to external servers. The most private way to use AI browser agents.",
    emoji: "🔒", color: "from-green-600 to-emerald-800",
    directUrl: "https://github.com/RunanywhereAI/on-device-browser-agent/?via=aiwebtools", imageUrl: onDeviceBrowserAgentHero,
    tags: ["AI Agents", "Web Tasks Agent", "privacy", "on-device", "WebLLM", "browser automation", "no cloud", "open source"],
    category: "AI Agents", rating: 4.3, totalVotes: 1123,
    tagline: "AI browser automation that never leaves your device — total privacy"
  },
  {
    icon: Code, title: "AgentDesk",
    description: "AI-powered code review agent that automatically reviews pull requests, identifies bugs, suggests improvements, and enforces coding standards. Integrates with GitHub and GitLab to provide continuous, intelligent code review at scale.",
    emoji: "🖥️", color: "from-gray-600 to-blue-600",
    directUrl: "https://agentdesk.ai/?via=aiwebtools", imageUrl: agentdeskHero,
    tags: ["Coding Agent", "code review", "GitHub", "GitLab", "pull requests", "bug detection", "developer tools"],
    category: "DEVELOPMENT & CODING", rating: 4.4, totalVotes: 1567,
    tagline: "AI agent that reviews every pull request so bugs never reach production"
  },
  {
    icon: Search, title: "Agent Harness",
    description: "Comprehensive benchmarking and comparison platform for agentic AI frameworks. Compare LangGraph vs CrewAI vs AutoGen vs OpenAI Symphony with real-world test scenarios. Make informed decisions about which agent framework fits your production needs.",
    emoji: "📊", color: "from-blue-500 to-purple-500",
    directUrl: "https://agent-harness.ai/?via=aiwebtools", imageUrl: agentHarnessHero,
    tags: ["AI Agents", "benchmarking", "comparison", "LangGraph", "CrewAI", "AutoGen", "framework evaluation"],
    category: "AI Agents", rating: 4.3, totalVotes: 1234,
    tagline: "The definitive benchmark that tells you which AI agent framework actually works"
  },
  {
    icon: Brain, title: "Weights & Biases",
    description: "The industry-standard MLOps platform for experiment tracking, model versioning, dataset management, and AI application monitoring. Track every experiment, visualize model performance, and collaborate with your ML team. Used by OpenAI, NVIDIA, and thousands of AI teams.",
    emoji: "📈", color: "from-yellow-500 to-amber-600",
    directUrl: "https://wandb.ai/?via=aiwebtools", imageUrl: wandbHero,
    tags: ["MLOps", "experiment tracking", "model versioning", "AI infrastructure", "monitoring", "collaboration", "machine learning"],
    category: "AI Tools & Development", rating: 4.8, totalVotes: 6789,
    tagline: "Track every AI experiment — the platform OpenAI and NVIDIA trust"
  },
  {
    icon: Cpu, title: "Anyscale",
    description: "Scalable AI compute platform built on Ray, the open-source framework powering OpenAI, Uber, and Spotify. Run distributed AI workloads, fine-tune models, and deploy inference endpoints at any scale. The enterprise platform for production AI infrastructure.",
    emoji: "⚡", color: "from-blue-500 to-blue-700",
    directUrl: "https://anyscale.com/?via=aiwebtools", imageUrl: anyscaleHero,
    tags: ["AI infrastructure", "distributed computing", "Ray", "model training", "inference", "enterprise", "cloud compute"],
    category: "AI Tools & Development", rating: 4.6, totalVotes: 3456,
    tagline: "The Ray-powered platform that scales AI from laptop to global infrastructure"
  },
  {
    icon: Code, title: "Potpie AI",
    description: "AI-powered code review and understanding platform that deeply analyzes your codebase to provide contextual reviews, explain complex code, and suggest architectural improvements. Goes beyond surface-level linting to understand intent and design patterns.",
    emoji: "🥧", color: "from-orange-500 to-red-600",
    directUrl: "https://potpie.ai/?via=aiwebtools", imageUrl: potpieAiHero,
    tags: ["Coding Agent", "code review", "code understanding", "architecture", "developer tools", "AI analysis"],
    category: "DEVELOPMENT & CODING", rating: 4.4, totalVotes: 1890,
    tagline: "AI that understands your code's intent, not just its syntax"
  },
  {
    icon: Zap, title: "Faros AI",
    description: "Engineering intelligence platform that connects to your entire development toolchain (GitHub, Jira, CI/CD, PagerDuty) to provide unified visibility into engineering metrics, team productivity, and software delivery performance. DORA metrics and beyond.",
    emoji: "🏗️", color: "from-cyan-500 to-blue-600",
    directUrl: "https://faros.ai/?via=aiwebtools", imageUrl: farosAiHero,
    tags: ["developer tools", "engineering intelligence", "DORA metrics", "productivity", "analytics", "CI/CD", "team management"],
    category: "AI Tools & Development", rating: 4.5, totalVotes: 2345,
    tagline: "See your entire engineering org's health in one unified AI dashboard"
  }
];
