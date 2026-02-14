
import { Tool } from "@/types/tools";
import { Bot, Workflow, Brain, Cpu, Layers } from "lucide-react";
import difyHero from "@/assets/tools/dify-ai-hero.jpg";
import cozeHero from "@/assets/tools/coze-ai-hero.jpg";
import flowiseHero from "@/assets/tools/flowise-ai-hero.jpg";
import lettaHero from "@/assets/tools/letta-ai-hero.jpg";
import agnoHero from "@/assets/tools/agno-ai-hero.jpg";

export const topAgentPlatforms2026: Tool[] = [
  {
    icon: Workflow,
    title: "Dify",
    description: "Open-source LLM app development platform for building AI agents, RAG pipelines, and complex workflows visually. Supports 100+ LLMs, includes prompt IDE, agent orchestration, observability, and enterprise-grade deployment. Self-host or use cloud with 600K+ GitHub stars.",
    emoji: "🔮",
    color: "from-blue-600 to-purple-700",
    directUrl: "https://dify.ai/?via=aiwebtools",
    imageUrl: difyHero,
    tags: ["AI agents", "LLM platform", "open source", "workflow builder", "RAG", "agent orchestration", "no-code", "AI Agents", "Automation Agent", "Multi-Agent Framework"],
    category: "AI Agents",
    rating: 4.8,
    totalVotes: 8921,
    tagline: "Open-source agent builder with 600K+ GitHub stars"
  },
  {
    icon: Bot,
    title: "Coze",
    description: "Next-generation AI agent development platform by ByteDance. Build, deploy, and publish AI chatbots and agents with visual workflows, plugin marketplace, knowledge bases, and multi-platform distribution. Publish agents to Discord, Telegram, Slack, and websites instantly.",
    emoji: "🤖",
    color: "from-blue-500 to-cyan-500",
    directUrl: "https://www.coze.com/?via=aiwebtools",
    imageUrl: cozeHero,
    tags: ["AI agents", "chatbot builder", "ByteDance", "workflow automation", "plugin marketplace", "agent deployment", "no-code", "AI Agents", "Chatbot Agents", "Automation Agent"],
    category: "AI Agents",
    rating: 4.6,
    totalVotes: 6543,
    tagline: "ByteDance's powerhouse for building AI agents with zero code"
  },
  {
    icon: Layers,
    title: "Flowise",
    description: "Open-source visual AI agent and LLM workflow builder. Drag-and-drop interface for creating AI agents, chatflows, and RAG applications. Self-hostable with 100+ integrations, human-in-the-loop support, evaluations, and team workspaces. Built on LangChain and LlamaIndex.",
    emoji: "🌊",
    color: "from-green-500 to-emerald-600",
    directUrl: "https://flowiseai.com/?via=aiwebtools",
    imageUrl: flowiseHero,
    tags: ["AI agents", "open source", "visual builder", "LangChain", "RAG", "drag and drop", "self-hosted", "AI Agents", "Multi-Agent Framework", "Automation Agent"],
    category: "AI Agents",
    rating: 4.7,
    totalVotes: 5876,
    tagline: "Drag-and-drop your way to production AI agents"
  },
  {
    icon: Brain,
    title: "Letta",
    description: "Stateful AI agent framework formerly known as MemGPT. Build agents with persistent, self-editing memory that remember conversations across sessions. Features core memory, archival memory, and memory hierarchy for truly intelligent long-term AI assistants. Created at UC Berkeley.",
    emoji: "🧠",
    color: "from-purple-600 to-pink-500",
    directUrl: "https://www.letta.com/?via=aiwebtools",
    imageUrl: lettaHero,
    tags: ["AI agents", "MemGPT", "stateful agents", "memory management", "persistent memory", "agent framework", "open source", "AI Agents", "Multi-Agent Framework", "Chatbot Agents"],
    category: "AI Agents",
    rating: 4.7,
    totalVotes: 4321,
    tagline: "AI agents that actually remember you — the MemGPT evolution"
  },
  {
    icon: Cpu,
    title: "Agno",
    description: "Lightweight, model-agnostic AI agent framework for building multi-modal agents in Python. Create teams of agents with memory, knowledge, tools, and reasoning capabilities. Supports 23+ model providers, structured outputs, and blazing-fast agent creation in just 5 lines of code.",
    emoji: "⚡",
    color: "from-cyan-500 to-blue-700",
    directUrl: "https://www.agno.com/?via=aiwebtools",
    imageUrl: agnoHero,
    tags: ["AI agents", "agent framework", "multi-modal", "Python", "model-agnostic", "lightweight", "open source", "AI Agents", "Multi-Agent Framework", "Coding Agent"],
    category: "AI Agents",
    rating: 4.6,
    totalVotes: 3987,
    tagline: "Build production AI agents in 5 lines of Python"
  }
];
