import { Tool } from "@/types/tools";
import { Bot, Brain, Globe, Bug, Workflow, Cpu, Eye, MessageSquare, FileCode, Telescope, BarChart3, Database, Users, Shield, BookOpen, Layers, Sparkles, Wrench, Network, GitBranch, Guitar, TerminalSquare, Heart, BrainCircuit, Puzzle } from "lucide-react";

import apifyHero from "@/assets/tools/apify-hero.jpg";
import athenaIntelligenceHero from "@/assets/tools/athena-intelligence-hero.jpg";
import crawl4aiHero from "@/assets/tools/crawl4ai-hero.jpg";
import cuaHero from "@/assets/tools/cua-hero.jpg";
import restackHero from "@/assets/tools/restack-hero.jpg";
import hatchetHero from "@/assets/tools/hatchet-hero.jpg";
import tarsierHero from "@/assets/tools/tarsier-hero.jpg";
import inkeepHero from "@/assets/tools/inkeep-hero.jpg";
import bamlHero from "@/assets/tools/baml-hero.jpg";
import mirascopeHero from "@/assets/tools/mirascope-hero.jpg";
import textqlHero from "@/assets/tools/textql-hero.jpg";
import defogHero from "@/assets/tools/defog-hero.jpg";
import workhelixHero from "@/assets/tools/workhelix-hero.jpg";
import aporiaHero from "@/assets/tools/aporia-hero.jpg";
import argillaHero from "@/assets/tools/argilla-hero.jpg";
import substrateHero from "@/assets/tools/substrate-hero.jpg";
import anaraHero from "@/assets/tools/anara-hero.jpg";
import opperAiHero from "@/assets/tools/opper-ai-hero.jpg";
import pipedreamHero from "@/assets/tools/pipedream-hero.jpg";
import statelyHero from "@/assets/tools/stately-hero.jpg";
import ampSourcegraphHero from "@/assets/tools/amp-sourcegraph-hero.jpg";
import opencodeHero from "@/assets/tools/opencode-hero.jpg";
import crushHero from "@/assets/tools/crush-hero.jpg";
import mindsdbHero from "@/assets/tools/mindsdb-hero.jpg";
import copilotkitHero from "@/assets/tools/copilotkit-hero.jpg";

// Top AI Agents Batch — July 2026 (25 verified real AI agents we didn't have yet)
export const topAgentsBatch2026Jul: Tool[] = [
  {
    icon: Globe, title: "Apify",
    description: "Apify runs thousands of pre-built and custom AI agents (Actors) for web scraping, browser automation, and data extraction at cloud scale — the agent marketplace for the open web.",
    emoji: "🕷️", color: "from-green-500 to-emerald-700",
    directUrl: "https://apify.com/?via=aiwebtools", imageUrl: apifyHero,
    tags: ["Apify", "AI agents", "web scraping", "browser automation", "actors", "data extraction", "agent marketplace", "AI Agents"],
    category: "AI Agents", rating: 4.8,
  },
  {
    icon: BarChart3, title: "Athena Intelligence",
    description: "Athena Intelligence deploys Olympus, an autonomous AI analyst agent for the enterprise — ingests internal data, runs deep research, and produces decision-grade reports end-to-end.",
    emoji: "🦉", color: "from-indigo-700 to-amber-500",
    directUrl: "https://www.athenaintelligence.ai/?via=aiwebtools", imageUrl: athenaIntelligenceHero,
    tags: ["Athena Intelligence", "Olympus", "AI analyst", "enterprise AI agent", "autonomous research", "AI Agents"],
    category: "AI Agents", rating: 4.7,
  },
  {
    icon: Bug, title: "Crawl4AI",
    description: "Crawl4AI is the leading open-source LLM-friendly web crawler and scraper — async, blazing fast, and outputs clean markdown ready for RAG and agent pipelines.",
    emoji: "🕸️", color: "from-green-600 to-cyan-600",
    directUrl: "https://crawl4ai.com/?via=aiwebtools", imageUrl: crawl4aiHero,
    tags: ["Crawl4AI", "open source crawler", "LLM scraper", "markdown", "RAG", "agent tools", "AI Agents"],
    category: "AI Agents", rating: 4.8,
  },
  {
    icon: Cpu, title: "Cua",
    description: "Cua (trycua) is the open-source Docker for computer-use agents — spin up sandboxed macOS, Linux, and Windows VMs that AI agents can see, click, type, and operate.",
    emoji: "🖥️", color: "from-purple-600 to-cyan-500",
    directUrl: "https://www.trycua.com/?via=aiwebtools", imageUrl: cuaHero,
    tags: ["Cua", "trycua", "computer use agent", "agent VM", "macOS agent", "browser agent", "AI Agents"],
    category: "AI Agents", rating: 4.7,
  },
  {
    icon: Workflow, title: "Restack",
    description: "Restack is the durable execution backend for AI agents — long-running workflows, retries, scheduling, and observability built specifically for production agent systems.",
    emoji: "♾️", color: "from-orange-500 to-slate-800",
    directUrl: "https://www.restack.io/?via=aiwebtools", imageUrl: restackHero,
    tags: ["Restack", "durable execution", "agent backend", "workflow orchestration", "AI Agents"],
    category: "AI Agents", rating: 4.6,
  },
  {
    icon: GitBranch, title: "Hatchet",
    description: "Hatchet is open-source distributed task orchestration for AI agents — runs background workflows, fan-out, retries, and rate limits across thousands of agent jobs.",
    emoji: "🪓", color: "from-red-600 to-blue-900",
    directUrl: "https://hatchet.run/?via=aiwebtools", imageUrl: hatchetHero,
    tags: ["Hatchet", "task orchestration", "background jobs", "agent infrastructure", "open source", "AI Agents"],
    category: "AI Agents", rating: 4.7,
  },
  {
    icon: Eye, title: "Tarsier",
    description: "Tarsier by Reworkd is an open-source vision utility that lets LLM agents see and interact with web pages — tagging interactive elements so any model can act like a browser agent.",
    emoji: "👁️", color: "from-teal-600 to-amber-500",
    directUrl: "https://github.com/reworkd/tarsier?via=aiwebtools", imageUrl: tarsierHero,
    tags: ["Tarsier", "Reworkd", "vision agent", "web agent", "browser automation", "LLM tools", "AI Agents"],
    category: "AI Agents", rating: 4.6,
  },
  {
    icon: MessageSquare, title: "Inkeep",
    description: "Inkeep builds conversational AI support agents for product documentation — accurate, cited, and deployable as chat, in-app copilot, or autonomous ticket-resolution agent.",
    emoji: "💬", color: "from-blue-500 to-purple-600",
    directUrl: "https://inkeep.com/?via=aiwebtools", imageUrl: inkeepHero,
    tags: ["Inkeep", "docs AI", "support agent", "RAG chat", "AI copilot", "customer support agent", "AI Agents"],
    category: "AI Agents", rating: 4.7,
  },
  {
    icon: FileCode, title: "BAML",
    description: "BAML by Boundary is a schema-aligned language for LLM and agent prompts — type-safe outputs, function calls, and tool use that compile to Python, TypeScript, Go, and Ruby.",
    emoji: "🧩", color: "from-pink-500 to-cyan-500",
    directUrl: "https://www.boundaryml.com/?via=aiwebtools", imageUrl: bamlHero,
    tags: ["BAML", "Boundary", "prompt engineering", "structured output", "agent framework", "type safe LLM", "AI Agents"],
    category: "AI Agents", rating: 4.7,
  },
  {
    icon: Telescope, title: "Mirascope",
    description: "Mirascope is a pythonic toolkit for building LLM-powered applications and agents — clean abstractions for prompts, tools, structured outputs, and provider-agnostic agent orchestration.",
    emoji: "🔭", color: "from-blue-700 to-indigo-900",
    directUrl: "https://mirascope.com/?via=aiwebtools", imageUrl: mirascopeHero,
    tags: ["Mirascope", "Python LLM framework", "agent toolkit", "prompt engineering", "AI Agents"],
    category: "AI Agents", rating: 4.6,
  },
  {
    icon: Brain, title: "TextQL",
    description: "TextQL Ana is an autonomous AI data analyst agent for the enterprise — connects to your warehouse, BI, and semantic layer to answer business questions with charts and SQL.",
    emoji: "📊", color: "from-purple-700 to-violet-500",
    directUrl: "https://textql.com/?via=aiwebtools", imageUrl: textqlHero,
    tags: ["TextQL", "Ana", "AI data analyst", "natural language SQL", "BI agent", "AI Agents"],
    category: "AI Agents", rating: 4.7,
  },
  {
    icon: Database, title: "Defog AI",
    description: "Defog AI is an AI agent that converts natural language into accurate SQL for enterprise databases — fine-tuned models and the SQLCoder family power its production deployments.",
    emoji: "🌫️", color: "from-teal-500 to-orange-500",
    directUrl: "https://defog.ai/?via=aiwebtools", imageUrl: defogHero,
    tags: ["Defog", "SQLCoder", "text to SQL", "data agent", "natural language database", "AI Agents"],
    category: "AI Agents", rating: 4.6,
  },
  {
    icon: Users, title: "Workhelix",
    description: "Workhelix is the AI workforce intelligence platform — measures where generative AI and agents create economic value across teams, roles, and workflows in your company.",
    emoji: "🧬", color: "from-blue-600 to-emerald-500",
    directUrl: "https://www.workhelix.com/?via=aiwebtools", imageUrl: workhelixHero,
    tags: ["Workhelix", "AI workforce", "agent ROI", "workforce intelligence", "enterprise AI strategy", "AI Agents"],
    category: "AI Agents", rating: 4.6,
  },
  {
    icon: Shield, title: "Aporia",
    description: "Aporia provides real-time guardrails for LLMs and AI agents — blocks prompt injection, PII leaks, hallucinations, and policy violations at the millisecond layer before they reach users.",
    emoji: "🛡️", color: "from-green-500 to-slate-900",
    directUrl: "https://www.aporia.com/?via=aiwebtools", imageUrl: aporiaHero,
    tags: ["Aporia", "AI guardrails", "agent safety", "prompt injection", "LLM security", "AI Agents"],
    category: "AI Agents", rating: 4.7,
  },
  {
    icon: BookOpen, title: "Argilla",
    description: "Argilla is the open-source data platform for AI agents and LLMs — collaborative labeling, feedback collection, and dataset curation for fine-tuning and evaluating agentic systems.",
    emoji: "🏺", color: "from-orange-600 to-amber-300",
    directUrl: "https://argilla.io/?via=aiwebtools", imageUrl: argillaHero,
    tags: ["Argilla", "data labeling", "LLM dataset", "agent training", "RLHF", "open source", "AI Agents"],
    category: "AI Agents", rating: 4.6,
  },
  {
    icon: Layers, title: "Substrate",
    description: "Substrate is a compound AI inference runtime for agent graphs — chain dozens of models, tools, and steps with automatic optimization, parallelism, and streaming.",
    emoji: "🧠", color: "from-teal-600 to-pink-600",
    directUrl: "https://substrate.run/?via=aiwebtools", imageUrl: substrateHero,
    tags: ["Substrate", "compound AI", "agent graphs", "inference runtime", "model chaining", "AI Agents"],
    category: "AI Agents", rating: 4.6,
  },
  {
    icon: Sparkles, title: "Anara",
    description: "Anara (formerly Unriddle) is an AI research assistant agent for scholars — reads, summarizes, cites, and chats with your library of PDFs, papers, and notes to accelerate deep work.",
    emoji: "📚", color: "from-amber-500 to-yellow-300",
    directUrl: "https://anara.com/?via=aiwebtools", imageUrl: anaraHero,
    tags: ["Anara", "Unriddle", "AI research assistant", "PDF chat", "scholar agent", "AI Agents"],
    category: "AI Agents", rating: 4.7,
  },
  {
    icon: Wrench, title: "Opper AI",
    description: "Opper AI turns prompts into production-grade AI functions with built-in evaluation, observability, and model routing — the missing ops layer for shipping reliable agents.",
    emoji: "⚙️", color: "from-blue-600 to-sky-400",
    directUrl: "https://opper.ai/?via=aiwebtools", imageUrl: opperAiHero,
    tags: ["Opper AI", "AI functions", "agent observability", "LLM ops", "model routing", "AI Agents"],
    category: "AI Agents", rating: 4.6,
  },
  {
    icon: Network, title: "Pipedream",
    description: "Pipedream Connect is the workflow + AI agent platform with 2,500+ integrations — build event-driven agents that read, write, and orchestrate across every SaaS tool you use.",
    emoji: "🔌", color: "from-purple-600 to-pink-500",
    directUrl: "https://pipedream.com/?via=aiwebtools", imageUrl: pipedreamHero,
    tags: ["Pipedream", "Pipedream Connect", "workflow automation", "AI agent platform", "integrations", "AI Agents"],
    category: "AI Agents", rating: 4.8,
  },
  {
    icon: Puzzle, title: "Stately AI",
    description: "Stately AI is a visual designer for state machines and AI agent flows — model multi-step agents with XState, generate code, and inspect runtime behavior in real time.",
    emoji: "🧠", color: "from-purple-700 to-yellow-500",
    directUrl: "https://stately.ai/?via=aiwebtools", imageUrl: statelyHero,
    tags: ["Stately", "XState", "state machines", "agent design", "visual workflow", "AI Agents"],
    category: "AI Agents", rating: 4.6,
  },
  {
    icon: Guitar, title: "Amp by Sourcegraph",
    description: "Amp is Sourcegraph's agentic coding assistant — uses the best frontier models with unrestricted token budgets, deep codebase context, and parallel sub-agents to ship real engineering work.",
    emoji: "🎸", color: "from-yellow-400 to-black",
    directUrl: "https://ampcode.com/?via=aiwebtools", imageUrl: ampSourcegraphHero,
    tags: ["Amp", "Sourcegraph Amp", "agentic coding", "AI coding agent", "frontier models", "AI Coding"],
    category: "AI Coding Tools", rating: 4.8,
  },
  {
    icon: TerminalSquare, title: "OpenCode",
    description: "OpenCode by SST is the open-source, terminal-based AI coding agent — provider-agnostic, runs any model, with a fast TUI for autonomous edits, refactors, and tool use.",
    emoji: "💻", color: "from-green-500 to-slate-900",
    directUrl: "https://opencode.ai/?via=aiwebtools", imageUrl: opencodeHero,
    tags: ["OpenCode", "SST", "terminal AI agent", "open source coding agent", "TUI coding", "AI Coding"],
    category: "AI Coding Tools", rating: 4.7,
  },
  {
    icon: Heart, title: "Crush",
    description: "Crush by Charmbracelet is the glamourous AI coding agent for your terminal — multi-model, multi-session, with a beautiful TUI that makes pair-programming with LLMs delightful.",
    emoji: "💖", color: "from-pink-400 to-purple-500",
    directUrl: "https://github.com/charmbracelet/crush?via=aiwebtools", imageUrl: crushHero,
    tags: ["Crush", "Charmbracelet", "terminal AI", "AI coding agent", "TUI", "open source", "AI Coding"],
    category: "AI Coding Tools", rating: 4.7,
  },
  {
    icon: BrainCircuit, title: "MindsDB",
    description: "MindsDB turns any enterprise database into an AI knowledge base with agents — query unstructured and structured data with natural language across 200+ data sources.",
    emoji: "🧠", color: "from-blue-500 to-orange-500",
    directUrl: "https://mindsdb.com/?via=aiwebtools", imageUrl: mindsdbHero,
    tags: ["MindsDB", "AI database", "knowledge base agent", "natural language query", "data agents", "AI Agents"],
    category: "AI Agents", rating: 4.7,
  },
  {
    icon: Bot, title: "CopilotKit",
    description: "CopilotKit is the open-source framework for building in-app AI copilots and agents — React components, generative UI, CoAgents with LangGraph, and full-stack hooks for any product.",
    emoji: "🤖", color: "from-blue-600 to-cyan-500",
    directUrl: "https://www.copilotkit.ai/?via=aiwebtools", imageUrl: copilotkitHero,
    tags: ["CopilotKit", "AI copilot framework", "React AI agents", "CoAgents", "LangGraph UI", "AI Agents"],
    category: "AI Agents", rating: 4.8,
  },
];