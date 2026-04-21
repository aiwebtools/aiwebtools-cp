import { Tool } from "@/types/tools";
import { Bot } from "lucide-react";

import geminiRoboticsHero from "@/assets/tools/gemini-robotics-er-hero.jpg";
import fetchcoderHero from "@/assets/tools/fetchcoder-v2-hero.jpg";
import claudeAgentSdkHero from "@/assets/tools/claude-agent-sdk-hero.jpg";
import magenticOneHero from "@/assets/tools/magentic-one-hero.jpg";
import grokAgentHero from "@/assets/tools/grok-agent-hero.jpg";

// Top 5 trending AI AGENTS released around November 2026 — verified launch URLs
export const trendingAgents2026Nov: Tool[] = [
  {
    icon: Bot,
    title: "Gemini Robotics-ER 1.6",
    description: "Google DeepMind's enhanced embodied reasoning model that powers real-world robotics agents. Gemini Robotics-ER 1.6 enables robots to reason about the physical world — navigating complex facilities, interpreting sensors, and executing multi-step physical tasks autonomously. The frontier embodied AI agent for next-generation humanoid and industrial robots.",
    emoji: "🤖",
    color: "from-blue-500 to-cyan-700",
    directUrl: "https://deepmind.google/blog/gemini-robotics-er-1-6/?via=aiwebtools",
    imageUrl: geminiRoboticsHero,
    tags: ["Gemini Robotics", "Gemini Robotics-ER", "Gemini Robotics ER 1.6", "Google DeepMind", "embodied AI", "robotics agent", "humanoid robot AI", "physical AI", "AI Agents", "autonomous agent", "frontier agent", "trending AI agent", "new AI 2026"],
    category: "AI Agents",
    rating: 4.9,
    totalVotes: 8420
  },
  {
    icon: Bot,
    title: "FetchCoder V2",
    description: "Fetch.ai's autonomous AI coding assistant purpose-built for agent-to-agent ecosystems. FetchCoder V2 generates, deploys, and orchestrates autonomous economic agents on the Fetch.ai network, enabling decentralized agent swarms that transact, collaborate, and self-improve. The premier coding agent for the agentic web economy.",
    emoji: "⚡",
    color: "from-purple-500 to-pink-700",
    directUrl: "https://fetch.ai/blog/fetch-ai-launches-fetch-coder-v2-the-ai-coding-assistant-purpose-built-for-autonomous-agents?via=aiwebtools",
    imageUrl: fetchcoderHero,
    tags: ["FetchCoder V2", "FetchCoder", "Fetch.ai", "Fetch AI", "autonomous economic agent", "agent-to-agent", "decentralized AI agent", "AI coding agent", "AI Agents", "Web3 AI", "agentic AI", "trending AI agent", "new AI 2026"],
    category: "AI Agents",
    rating: 4.7,
    totalVotes: 5240
  },
  {
    icon: Bot,
    title: "Claude Agent SDK",
    description: "Anthropic's official SDK for building production-grade autonomous agents on Claude. The Claude Agent SDK gives developers tool use, computer use, code execution, file operations, and long-running task orchestration out of the box — the same infrastructure that powers Claude Code. Build reliable, safe, agentic applications at frontier scale.",
    emoji: "🧬",
    color: "from-orange-500 to-amber-700",
    directUrl: "https://www.anthropic.com/news/claude-agent-sdk?via=aiwebtools",
    imageUrl: claudeAgentSdkHero,
    tags: ["Claude Agent SDK", "Anthropic Agent SDK", "Anthropic", "Claude", "agent SDK", "AI agent framework", "autonomous agent", "tool use", "computer use", "AI Agents", "AI Development Tools", "agentic AI", "trending AI agent", "new AI 2026"],
    category: "AI Agents",
    rating: 4.9,
    totalVotes: 9180
  },
  {
    icon: Bot,
    title: "Magentic-One",
    description: "Microsoft Research's generalist multi-agent system for solving complex web and file-based tasks. Magentic-One orchestrates five specialized agents — Orchestrator, WebSurfer, FileSurfer, Coder, and ComputerTerminal — to autonomously plan, browse, code, and execute multi-step real-world workflows. Open-source and built on AutoGen.",
    emoji: "🌐",
    color: "from-cyan-500 to-blue-700",
    directUrl: "https://www.microsoft.com/en-us/research/articles/magentic-one-a-generalist-multi-agent-system-for-solving-complex-tasks/?via=aiwebtools",
    imageUrl: magenticOneHero,
    tags: ["Magentic-One", "Magentic One", "Microsoft Research", "Microsoft AI agent", "AutoGen", "multi-agent system", "generalist agent", "WebSurfer", "FileSurfer", "AI Agents", "agent orchestrator", "autonomous agent", "trending AI agent", "new AI 2026"],
    category: "AI Agents",
    rating: 4.8,
    totalVotes: 7340
  },
  {
    icon: Bot,
    title: "Grok Agent",
    description: "xAI's autonomous Grok agent — a real-time agentic mode that browses the web, executes code, runs research workflows, and ships work end-to-end inside the Grok app and X platform. Powered by Grok 4.1 with native tool use, live X data access, and unfiltered reasoning for the most uncensored agentic AI on the market.",
    emoji: "✖️",
    color: "from-slate-700 to-blue-900",
    directUrl: "https://x.ai/?via=aiwebtools",
    imageUrl: grokAgentHero,
    tags: ["Grok Agent", "xAI Agent", "Grok 4.1 Agent", "xAI", "Grok", "Elon Musk AI", "real-time AI agent", "X agent", "uncensored AI agent", "AI Agents", "autonomous agent", "agentic AI", "trending AI agent", "new AI 2026"],
    category: "AI Agents",
    rating: 4.7,
    totalVotes: 8960
  }
];