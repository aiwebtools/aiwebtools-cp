import { Tool } from "@/types/tools";
import { Globe, MousePointer, Code2, Sparkles, Cpu, GitBranch, Wand2, TerminalSquare, Users, Briefcase, Bot, Workflow, Brain, Activity, BarChart3, LineChart, FileJson, Waves, Zap, Server, Network, Layers, MessageSquare, Boxes, Search } from "lucide-react";

import convergenceHero from "@/assets/tools/convergence-proxy-hero.jpg";
import multionHero from "@/assets/tools/multion-hero.jpg";
import roocodeHero from "@/assets/tools/roocode-hero.jpg";
import continueDevHero from "@/assets/tools/continue-dev-hero.jpg";
import tabbyMlHero from "@/assets/tools/tabby-ml-hero.jpg";
import sweepAiHero from "@/assets/tools/sweep-ai-hero.jpg";
import codySourcegraphHero from "@/assets/tools/cody-sourcegraph-hero.jpg";
import voidEditorHero from "@/assets/tools/void-editor-hero.jpg";
import pythagoraHero from "@/assets/tools/pythagora-hero.jpg";
import allHandsAiHero from "@/assets/tools/all-hands-ai-hero.jpg";
import gptEngineerHero from "@/assets/tools/gpt-engineer-hero.jpg";
import sema4AiHero from "@/assets/tools/sema4-ai-hero.jpg";
import decagonHero from "@/assets/tools/decagon-hero.jpg";
import elevenXHero from "@/assets/tools/11x-hero.jpg";
import artisanAiHero from "@/assets/tools/artisan-ai-hero.jpg";
import roxHero from "@/assets/tools/rox-hero.jpg";
import distylHero from "@/assets/tools/distyl-hero.jpg";
import beamAiHero from "@/assets/tools/beam-ai-hero.jpg";
import memgptHero from "@/assets/tools/memgpt-hero.jpg";
import arizePhoenixHero from "@/assets/tools/arize-phoenix-hero.jpg";
import opikHero from "@/assets/tools/opik-hero.jpg";
import wandbWeaveHero from "@/assets/tools/wandb-weave-hero.jpg";
import outlinesHero from "@/assets/tools/outlines-hero.jpg";
import poolsideHero from "@/assets/tools/poolside-hero.jpg";
import sunaAiHero from "@/assets/tools/suna-ai-hero.jpg";

// Top AI Agents Batch — July 2026 Part 3 (25 verified-new agent/autonomy tools, dedupe-checked against 3,800+ existing titles)
export const topAgentsBatch2026JulPart3: Tool[] = [
  {
    icon: Globe, title: "Convergence Proxy",
    description: "Convergence's web-browsing AI agent 'Proxy' that autonomously navigates the internet, books travel, fills forms and completes long-running tasks on your behalf.",
    emoji: "🧭", color: "from-emerald-500 to-cyan-500",
    directUrl: "https://convergence.ai/?via=aiwebtools", imageUrl: convergenceHero,
    tags: ["Convergence", "Proxy", "web agent", "browser agent", "autonomous agent", "AI assistant", "AI Agents"],
    category: "AI Agents", rating: 4.7,
  },
  {
    icon: MousePointer, title: "MultiOn",
    description: "Autonomous AI agent that controls your browser to execute multi-step tasks across any website — ordering, researching, applying and automating the open web.",
    emoji: "🖱️", color: "from-emerald-500 to-blue-500",
    directUrl: "https://multion.ai/?via=aiwebtools", imageUrl: multionHero,
    tags: ["MultiOn", "browser agent", "web automation", "autonomous agent", "AI assistant", "AI Agents"],
    category: "AI Agents", rating: 4.7,
  },
  {
    icon: Code2, title: "Roo Code",
    description: "Open-source autonomous AI coding agent for VS Code — plans, edits and ships entire features across your codebase with multi-mode reasoning.",
    emoji: "🦘", color: "from-emerald-500 to-emerald-700",
    directUrl: "https://roocode.com/?via=aiwebtools", imageUrl: roocodeHero,
    tags: ["Roo Code", "AI coding agent", "VS Code", "open source", "coding assistant", "autonomous coding", "AI Agents"],
    category: "AI Agents", rating: 4.8,
  },
  {
    icon: TerminalSquare, title: "Continue.dev",
    description: "Open-source AI code assistant for VS Code and JetBrains — bring any model and customize autocompletes, chat and agentic workflows in your IDE.",
    emoji: "➡️", color: "from-emerald-500 to-purple-500",
    directUrl: "https://continue.dev/?via=aiwebtools", imageUrl: continueDevHero,
    tags: ["Continue.dev", "AI coding assistant", "VS Code", "JetBrains", "open source", "IDE agent", "AI Agents"],
    category: "AI Agents", rating: 4.8,
  },
  {
    icon: Code2, title: "Tabby ML",
    description: "Self-hosted open-source AI coding copilot — own your code, own your model, with on-prem autocomplete and chat for engineering teams.",
    emoji: "🐱", color: "from-emerald-500 to-slate-500",
    directUrl: "https://www.tabbyml.com/?via=aiwebtools", imageUrl: tabbyMlHero,
    tags: ["Tabby ML", "self-hosted copilot", "open source coding AI", "AI autocomplete", "on-prem AI", "AI Agents"],
    category: "AI Agents", rating: 4.7,
  },
  {
    icon: GitBranch, title: "Sweep AI",
    description: "Autonomous AI junior developer that turns GitHub issues into clean pull requests — refactors, tests and ships code while you review.",
    emoji: "🧹", color: "from-emerald-500 to-orange-500",
    directUrl: "https://sweep.dev/?via=aiwebtools", imageUrl: sweepAiHero,
    tags: ["Sweep AI", "AI dev agent", "GitHub agent", "autonomous coding", "PR automation", "AI Agents"],
    category: "AI Agents", rating: 4.6,
  },
  {
    icon: Code2, title: "Cody by Sourcegraph",
    description: "Enterprise AI coding assistant from Sourcegraph with full-codebase context, agentic workflows and your-choice frontier models for serious engineering teams.",
    emoji: "🧠", color: "from-emerald-500 to-violet-500",
    directUrl: "https://sourcegraph.com/cody?via=aiwebtools", imageUrl: codySourcegraphHero,
    tags: ["Cody", "Sourcegraph", "AI coding assistant", "enterprise AI", "codebase search", "AI Agents"],
    category: "AI Agents", rating: 4.8,
  },
  {
    icon: TerminalSquare, title: "Void Editor",
    description: "Open-source AI-native code editor — a transparent, hackable Cursor alternative that lets you run any model with full agentic coding superpowers.",
    emoji: "🌌", color: "from-slate-700 to-emerald-500",
    directUrl: "https://voideditor.com/?via=aiwebtools", imageUrl: voidEditorHero,
    tags: ["Void Editor", "AI code editor", "open source", "Cursor alternative", "agentic coding", "AI Agents"],
    category: "AI Agents", rating: 4.7,
  },
  {
    icon: Wand2, title: "Pythagora",
    description: "AI app builder that codes full production apps from a chat — autonomously plans, writes, tests and deploys real software end-to-end.",
    emoji: "📐", color: "from-emerald-500 to-indigo-500",
    directUrl: "https://www.pythagora.ai/?via=aiwebtools", imageUrl: pythagoraHero,
    tags: ["Pythagora", "AI app builder", "autonomous developer", "GPT Pilot", "full-stack AI", "AI Agents"],
    category: "AI Agents", rating: 4.7,
  },
  {
    icon: Users, title: "All Hands AI",
    description: "Open-source autonomous software-engineering agent (formerly OpenDevin) that plans, codes, runs and debugs entire projects with multi-agent collaboration.",
    emoji: "🙌", color: "from-emerald-500 to-cyan-500",
    directUrl: "https://www.all-hands.dev/?via=aiwebtools", imageUrl: allHandsAiHero,
    tags: ["All Hands AI", "OpenHands", "autonomous SWE agent", "open source", "multi-agent", "AI Agents"],
    category: "AI Agents", rating: 4.8,
  },
  {
    icon: Sparkles, title: "GPT Engineer",
    description: "Generate an entire codebase from a single prompt — GPT Engineer plans, scaffolds and writes complete projects with one conversation.",
    emoji: "🛠️", color: "from-emerald-500 to-yellow-500",
    directUrl: "https://gptengineer.app/?via=aiwebtools", imageUrl: gptEngineerHero,
    tags: ["GPT Engineer", "autonomous codegen", "AI app builder", "open source", "Lovable origin", "AI Agents"],
    category: "AI Agents", rating: 4.7,
  },
  {
    icon: Workflow, title: "Sema4 AI",
    description: "Enterprise platform for building Python-based AI agents — combines actions, runners and a control plane to automate real business workflows.",
    emoji: "🐍", color: "from-emerald-500 to-blue-500",
    directUrl: "https://sema4.ai/?via=aiwebtools", imageUrl: sema4AiHero,
    tags: ["Sema4 AI", "Robocorp", "Python AI agents", "enterprise automation", "agent platform", "AI Agents"],
    category: "AI Agents", rating: 4.7,
  },
  {
    icon: MessageSquare, title: "Decagon AI",
    description: "Enterprise-grade AI customer-support agents that resolve high-volume tickets autonomously for brands like Notion, Duolingo and Eventbrite.",
    emoji: "🔟", color: "from-emerald-500 to-pink-500",
    directUrl: "https://decagon.ai/?via=aiwebtools", imageUrl: decagonHero,
    tags: ["Decagon AI", "AI customer support", "support agents", "enterprise AI", "CX automation", "AI Agents"],
    category: "AI Agents", rating: 4.8,
  },
  {
    icon: Briefcase, title: "11x",
    description: "Autonomous AI digital workers (Alice the SDR, Jordan the AE) that prospect, qualify and book meetings 24/7 like a full sales team.",
    emoji: "🤖", color: "from-emerald-500 to-fuchsia-500",
    directUrl: "https://www.11x.ai/?via=aiwebtools", imageUrl: elevenXHero,
    tags: ["11x", "AI SDR", "Alice", "Jordan", "AI digital worker", "sales automation", "AI Agents"],
    category: "AI Agents", rating: 4.7,
  },
  {
    icon: Users, title: "Artisan AI",
    description: "Artisan's AI BDR 'Ava' autonomously runs outbound sales — researches prospects, writes personalized emails and books pipeline at scale.",
    emoji: "🎨", color: "from-emerald-500 to-rose-500",
    directUrl: "https://www.artisan.co/?via=aiwebtools", imageUrl: artisanAiHero,
    tags: ["Artisan AI", "Ava", "AI BDR", "outbound sales agent", "sales automation", "AI Agents"],
    category: "AI Agents", rating: 4.7,
  },
  {
    icon: Network, title: "Rox",
    description: "AI agent swarm for revenue teams — orchestrates dozens of specialist agents to enrich, target and close accounts across your CRM stack.",
    emoji: "🦊", color: "from-emerald-500 to-orange-500",
    directUrl: "https://rox.com/?via=aiwebtools", imageUrl: roxHero,
    tags: ["Rox", "AI agent swarm", "revenue agents", "CRM AI", "go-to-market AI", "AI Agents"],
    category: "AI Agents", rating: 4.7,
  },
  {
    icon: Server, title: "Distyl AI",
    description: "Enterprise AI agent platform delivering custom autonomous solutions for Fortune 500s across customer service, ops and analytics.",
    emoji: "🏛️", color: "from-emerald-500 to-slate-500",
    directUrl: "https://www.distyl.ai/?via=aiwebtools", imageUrl: distylHero,
    tags: ["Distyl AI", "enterprise AI agents", "Fortune 500", "custom agents", "AI consulting", "AI Agents"],
    category: "AI Agents", rating: 4.6,
  },
  {
    icon: Workflow, title: "Beam AI",
    description: "Agentic process automation platform — deploy self-learning AI agents that handle complex back-office workflows end-to-end.",
    emoji: "📡", color: "from-emerald-500 to-cyan-500",
    directUrl: "https://beam.ai/?via=aiwebtools", imageUrl: beamAiHero,
    tags: ["Beam AI", "agentic process automation", "APA", "AI workflow agents", "back-office AI", "AI Agents"],
    category: "AI Agents", rating: 4.7,
  },
  {
    icon: Brain, title: "MemGPT",
    description: "Open-source framework for AI agents with long-term memory, virtual context and self-editing recall — the research project behind Letta.",
    emoji: "🧠", color: "from-emerald-500 to-purple-500",
    directUrl: "https://memgpt.ai/?via=aiwebtools", imageUrl: memgptHero,
    tags: ["MemGPT", "long-term memory", "agent memory", "open source agent", "stateful AI", "AI Agents"],
    category: "AI Agents", rating: 4.7,
  },
  {
    icon: Activity, title: "Arize Phoenix",
    description: "Open-source LLM observability — trace, evaluate and debug AI agents and RAG pipelines with rich span visualization.",
    emoji: "🔥", color: "from-emerald-500 to-orange-500",
    directUrl: "https://phoenix.arize.com/?via=aiwebtools", imageUrl: arizePhoenixHero,
    tags: ["Arize Phoenix", "LLM observability", "agent tracing", "open source", "evals", "AI Agents"],
    category: "AI Agents", rating: 4.8,
  },
  {
    icon: BarChart3, title: "Comet Opik",
    description: "Open-source LLM evaluation and observability platform from Comet — log, score and debug agentic AI applications at scale.",
    emoji: "☄️", color: "from-emerald-500 to-blue-500",
    directUrl: "https://www.comet.com/site/products/opik/?via=aiwebtools", imageUrl: opikHero,
    tags: ["Comet Opik", "LLM evaluation", "LLM observability", "open source evals", "agent monitoring", "AI Agents"],
    category: "AI Agents", rating: 4.7,
  },
  {
    icon: LineChart, title: "W&B Weave",
    description: "Weights & Biases Weave — lightweight toolkit to build, evaluate and monitor LLM applications and agents with full trace history.",
    emoji: "🧵", color: "from-emerald-500 to-yellow-500",
    directUrl: "https://wandb.ai/site/weave/?via=aiwebtools", imageUrl: wandbWeaveHero,
    tags: ["W&B Weave", "Weights and Biases", "LLM observability", "agent evaluation", "tracing", "AI Agents"],
    category: "AI Agents", rating: 4.8,
  },
  {
    icon: FileJson, title: "Outlines",
    description: "Structured generation library by dottxt — force any LLM to output valid JSON, regex or grammar-constrained text for reliable agent tool calls.",
    emoji: "📐", color: "from-emerald-500 to-indigo-500",
    directUrl: "https://dottxt-ai.github.io/outlines/?via=aiwebtools", imageUrl: outlinesHero,
    tags: ["Outlines", "dottxt", "structured generation", "JSON mode", "constrained decoding", "AI Agents"],
    category: "AI Agents", rating: 4.7,
  },
  {
    icon: Waves, title: "Poolside",
    description: "Poolside is building frontier foundation models specialized for software development — secure, deployable coding intelligence for the enterprise.",
    emoji: "🏝️", color: "from-emerald-500 to-teal-500",
    directUrl: "https://poolside.ai/?via=aiwebtools", imageUrl: poolsideHero,
    tags: ["Poolside", "coding foundation model", "frontier model", "enterprise AI", "code LLM", "AI Agents"],
    category: "AI Agents", rating: 4.7,
  },
  {
    icon: Bot, title: "Suna AI",
    description: "Open-source generalist AI agent (Manus-style) that browses the web, runs code, controls files and completes complex tasks autonomously.",
    emoji: "☀️", color: "from-emerald-500 to-amber-500",
    directUrl: "https://www.suna.so/?via=aiwebtools", imageUrl: sunaAiHero,
    tags: ["Suna AI", "Kortix", "open source agent", "generalist AI agent", "Manus alternative", "AI Agents"],
    category: "AI Agents", rating: 4.7,
  },
];