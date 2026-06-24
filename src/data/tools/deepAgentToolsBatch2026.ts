import { Tool } from "@/types/tools";
import { Bot, Boxes, Bug, Code2, DatabaseZap, Eye, Globe2, Network, ShieldCheck } from "lucide-react";

import opencuaHero from "@/assets/tools/opencua-hero.jpg";
import uiTarsHero from "@/assets/tools/ui-tars-hero.jpg";
import agentS2Hero from "@/assets/tools/agent-s2-hero.jpg";
import browsergymHero from "@/assets/tools/browsergym-hero.jpg";
import toolhiveHero from "@/assets/tools/toolhive-hero.jpg";
import mcpToolboxHero from "@/assets/tools/mcp-toolbox-hero.jpg";
import graphitiHero from "@/assets/tools/graphiti-hero.jpg";
import archonHero from "@/assets/tools/archon-hero.jpg";
import mcpInspectorHero from "@/assets/tools/mcp-inspector-hero.jpg";
import langroidHero from "@/assets/tools/langroid-hero.jpg";

export const deepAgentToolsBatch2026: Tool[] = [
  {
    icon: Bot,
    title: "OpenCUA",
    description: "Open-source computer-use agent framework for training and running agents that perceive screens, reason over desktop state, and control browsers, files, terminals, and apps. Built for researchers and builders pushing real computer-use autonomy.",
    emoji: "🖥️",
    color: "from-emerald-500 to-cyan-700",
    directUrl: "https://github.com/xlang-ai/OpenCUA?via=aiwebtools",
    imageUrl: opencuaHero,
    tags: ["OpenCUA", "computer use agent", "AI Agents", "Open Source", "desktop automation", "browser agent", "GUI agent", "agent framework", "autonomous AI", "research AI"],
    category: "AI Agents & Automation",
    rating: 4.7,
    totalVotes: 788,
    isFree: true
  },
  {
    icon: Eye,
    title: "UI-TARS",
    description: "ByteDance's open-source multimodal GUI agent project for screen understanding and action. UI-TARS reads interfaces, plans steps, clicks, types, and navigates desktop, web, and mobile UI tasks like a visual operator.",
    emoji: "👁️",
    color: "from-red-600 to-emerald-600",
    directUrl: "https://github.com/bytedance/UI-TARS?via=aiwebtools",
    imageUrl: uiTarsHero,
    tags: ["UI-TARS", "ByteDance", "GUI agent", "computer use", "screen understanding", "AI Agents", "Open Source", "browser automation", "mobile automation", "visual agent"],
    category: "AI Agents & Automation",
    rating: 4.9,
    totalVotes: 11000,
    isFree: true
  },
  {
    icon: Globe2,
    title: "Agent S2",
    description: "Simular AI's Agent-S line advances open computer-use agents for real desktop and web workflows. Agent S2 focuses on visual grounding, planning, memory, and reliable multi-step UI execution across everyday software.",
    emoji: "🧭",
    color: "from-green-500 to-slate-700",
    directUrl: "https://github.com/simular-ai/Agent-S?via=aiwebtools",
    imageUrl: agentS2Hero,
    tags: ["Agent S2", "Agent-S", "Simular AI", "computer use agent", "GUI automation", "AI Agents", "Open Source", "visual grounding", "browser agent", "desktop agent"],
    category: "AI Agents & Automation",
    rating: 4.9,
    totalVotes: 11900,
    isFree: true
  },
  {
    icon: Globe2,
    title: "BrowserGym",
    description: "ServiceNow's open-source environment and benchmark suite for training and evaluating web-browsing agents on realistic browser tasks. It gives agent builders a gymnasium for measuring how well AI navigates the living web.",
    emoji: "🏟️",
    color: "from-blue-600 to-emerald-600",
    directUrl: "https://github.com/ServiceNow/BrowserGym?via=aiwebtools",
    imageUrl: browsergymHero,
    tags: ["BrowserGym", "ServiceNow", "browser agent", "AI benchmark", "web automation", "AI Agents", "Open Source", "evaluation", "training environment", "browser tasks"],
    category: "AI Agents & Automation",
    rating: 4.7,
    totalVotes: 1300,
    isFree: true
  },
  {
    icon: ShieldCheck,
    title: "ToolHive",
    description: "Stacklok's open-source manager for securely running MCP servers and agent tools. ToolHive helps developers launch, isolate, permission, and audit tool servers so AI agents can act without turning your system into an unlocked vault.",
    emoji: "🐝",
    color: "from-yellow-500 to-emerald-700",
    directUrl: "https://github.com/stacklok/toolhive?via=aiwebtools",
    imageUrl: toolhiveHero,
    tags: ["ToolHive", "Stacklok", "MCP", "Model Context Protocol", "AI Agents", "Open Source", "secure tools", "agent security", "MCP server", "developer tools"],
    category: "Developer Tools & APIs",
    rating: 4.7,
    totalVotes: 1900,
    isFree: true
  },
  {
    icon: DatabaseZap,
    title: "MCP Toolbox",
    description: "Google's open-source MCP Toolbox gives agents safe, structured tools for databases and data systems. It turns sources like Postgres, MySQL, BigQuery, and more into protocol-native tools LLM agents can discover and use accurately.",
    emoji: "🧰",
    color: "from-green-500 to-blue-600",
    directUrl: "https://github.com/googleapis/genai-toolbox?via=aiwebtools",
    imageUrl: mcpToolboxHero,
    tags: ["MCP Toolbox", "Google", "GenAI Toolbox", "Model Context Protocol", "database tools", "AI Agents", "Open Source", "SQL", "BigQuery", "developer tools"],
    category: "Developer Tools & APIs",
    rating: 4.8,
    totalVotes: 15700,
    isFree: true
  },
  {
    icon: Network,
    title: "Graphiti",
    description: "Zep's open-source temporal knowledge graph framework for AI agents. Graphiti continuously builds entity, relationship, and event memory so agents can reason over changing facts instead of forgetting the path behind them.",
    emoji: "🕸️",
    color: "from-cyan-500 to-emerald-700",
    directUrl: "https://github.com/getzep/graphiti?via=aiwebtools",
    imageUrl: graphitiHero,
    tags: ["Graphiti", "Zep", "knowledge graph", "agent memory", "temporal graph", "AI Agents", "Open Source", "RAG", "memory layer", "graph database"],
    category: "Developer Tools & APIs",
    rating: 4.9,
    totalVotes: 27800,
    isFree: true
  },
  {
    icon: Code2,
    title: "Archon",
    description: "Open-source agentic coding assistant and knowledge-base command center for building projects. Archon combines project context, task agents, MCP servers, and code workflows into a builder cockpit for serious AI-assisted development.",
    emoji: "🏛️",
    color: "from-emerald-500 to-lime-700",
    directUrl: "https://github.com/coleam00/Archon?via=aiwebtools",
    imageUrl: archonHero,
    tags: ["Archon", "AI coding", "agentic coding", "MCP", "AI Agents", "Open Source", "knowledge base", "developer tools", "project builder", "coding assistant"],
    category: "Coding & Development",
    rating: 4.8,
    totalVotes: 22500,
    isFree: true
  },
  {
    icon: Bug,
    title: "MCP Inspector",
    description: "Official open-source developer tool for testing and debugging Model Context Protocol servers. MCP Inspector lets builders inspect tool schemas, resources, prompts, requests, and server behavior before connecting agents to real systems.",
    emoji: "🔎",
    color: "from-emerald-500 to-teal-700",
    directUrl: "https://github.com/modelcontextprotocol/inspector?via=aiwebtools",
    imageUrl: mcpInspectorHero,
    tags: ["MCP Inspector", "Model Context Protocol", "MCP", "debugging", "developer tools", "AI Agents", "Open Source", "tool schema", "server testing", "agent tools"],
    category: "Developer Tools & APIs",
    rating: 4.8,
    totalVotes: 10200,
    isFree: true
  },
  {
    icon: Boxes,
    title: "Langroid",
    description: "Open-source Python framework for building cooperative LLM agents that communicate, delegate, retrieve knowledge, and use tools. Langroid is a clean multi-agent lab where complex workflows become message-passing teams.",
    emoji: "🤖",
    color: "from-emerald-500 to-cyan-700",
    directUrl: "https://github.com/langroid/langroid?via=aiwebtools",
    imageUrl: langroidHero,
    tags: ["Langroid", "Python", "multi-agent framework", "LLM agents", "AI Agents", "Open Source", "agent orchestration", "RAG", "developer tools", "tool use"],
    category: "AI Agents & Automation",
    rating: 4.7,
    totalVotes: 4000,
    isFree: true
  }
];