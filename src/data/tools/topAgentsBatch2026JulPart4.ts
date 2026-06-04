import { Tool } from "@/types/tools";
import { Bird, Boxes, Layers, Mic, BrainCircuit, PenTool, Activity, Waves, Gauge, ShieldCheck, Network, GitBranch, Wand2, Eye, MessageSquareCode, Diamond, Bot, Theater, Gamepad2, Workflow, UserCog, Headset, Bug, Code2, GitPullRequest, Plug, MousePointer, Sparkles } from "lucide-react";

import gooseHero from "@/assets/tools/goose-block-hero.jpg";
import beeAgentHero from "@/assets/tools/bee-agent-hero.jpg";
import vellumHero from "@/assets/tools/vellum-hero.jpg";
import elevenAgentsHero from "@/assets/tools/elevenlabs-agents-hero.jpg";
import gleanHero from "@/assets/tools/glean-hero.jpg";
import writerAiHero from "@/assets/tools/writer-ai-hero.jpg";
import traceSentryHero from "@/assets/tools/trace-sentry-hero.jpg";
import covalHero from "@/assets/tools/coval-hero.jpg";
import ragasHero from "@/assets/tools/ragas-hero.jpg";
import confidentAiHero from "@/assets/tools/confident-ai-hero.jpg";
import octotoolsHero from "@/assets/tools/octotools-hero.jpg";
import langgraphHero from "@/assets/tools/langgraph-hero.jpg";
import magicDevHero from "@/assets/tools/magic-dev-hero.jpg";
import sentrySeerHero from "@/assets/tools/sentry-seer-hero.jpg";
import korbitHero from "@/assets/tools/korbit-hero.jpg";
import diamondGraphiteHero from "@/assets/tools/diamond-graphite-hero.jpg";
import charlieLabsHero from "@/assets/tools/charlie-labs-hero.jpg";
import stagehandHero from "@/assets/tools/stagehand-hero.jpg";
import arcadeAiHero from "@/assets/tools/arcade-ai-hero.jpg";
import buildshipHero from "@/assets/tools/buildship-hero.jpg";
import gumloopHero from "@/assets/tools/gumloop-hero.jpg";
import emaHero from "@/assets/tools/ema-hero.jpg";
import asappHero from "@/assets/tools/asapp-hero.jpg";
import koreAiHero from "@/assets/tools/kore-ai-hero.jpg";
import bugbotHero from "@/assets/tools/bugbot-hero.jpg";
import devonAiHero from "@/assets/tools/devon-ai-hero.jpg";
import prAgentHero from "@/assets/tools/pr-agent-hero.jpg";
import composioAgentKitHero from "@/assets/tools/composio-agentkit-hero.jpg";
import claudeComputerUseHero from "@/assets/tools/claude-computer-use-hero.jpg";
import cassidyAiHero from "@/assets/tools/cassidy-ai-hero.jpg";

// Top AI Agents Batch — July 2026 Part 4 (25 verified-new agent tools, deduped against 3,800+ existing titles)
export const topAgentsBatch2026JulPart4: Tool[] = [
  {
    icon: Bird, title: "Goose",
    description: "Block's open-source on-machine AI agent — a local-first developer assistant that plans, edits code, runs shell commands and orchestrates extensions across your system.",
    emoji: "🪿", color: "from-emerald-500 to-green-500",
    directUrl: "https://block.github.io/goose/?via=aiwebtools", imageUrl: gooseHero,
    tags: ["Goose", "Block", "open source agent", "local agent", "developer agent", "shell agent", "AI Agents"],
    category: "AI Agents", rating: 4.8,
  },
  {
    icon: Boxes, title: "Bee Agent Framework",
    description: "IBM's open-source TypeScript framework for building scalable, production-grade multi-agent systems with memory, tools and granite-tuned reasoning.",
    emoji: "🐝", color: "from-yellow-500 to-emerald-500",
    directUrl: "https://i-am-bee.github.io/bee-agent-framework/?via=aiwebtools", imageUrl: beeAgentHero,
    tags: ["Bee Agent", "IBM", "agent framework", "TypeScript", "multi-agent", "open source", "AI Agents"],
    category: "AI Agents", rating: 4.7,
  },
  {
    icon: Layers, title: "Vellum",
    description: "End-to-end LLM and agent development platform for prompt engineering, evaluation, deployment and observability — built for production AI teams.",
    emoji: "📐", color: "from-blue-500 to-emerald-500",
    directUrl: "https://www.vellum.ai/?via=aiwebtools", imageUrl: vellumHero,
    tags: ["Vellum", "LLM ops", "prompt engineering", "evaluation", "agent platform", "AI Agents"],
    category: "AI Agents", rating: 4.7,
  },
  {
    icon: Mic, title: "ElevenLabs Agents",
    description: "Real-time conversational voice agents with ultra-realistic TTS, low-latency turn taking, tool calls and telephony for production voice AI.",
    emoji: "🎙️", color: "from-emerald-500 to-cyan-500",
    directUrl: "https://elevenlabs.io/conversational-ai/?via=aiwebtools", imageUrl: elevenAgentsHero,
    tags: ["ElevenLabs Agents", "voice agent", "conversational AI", "voice AI", "TTS", "AI Agents"],
    category: "AI Agents", rating: 4.9,
  },
  {
    icon: BrainCircuit, title: "Glean Work AI",
    description: "Enterprise work AI platform with universal search, assistants and autonomous agents that act across your company's apps, data and workflows.",
    emoji: "🔎", color: "from-emerald-500 to-blue-500",
    directUrl: "https://www.glean.com/?via=aiwebtools", imageUrl: gleanHero,
    tags: ["Glean", "Work AI", "enterprise agents", "knowledge agent", "RAG", "AI Agents"],
    category: "AI Agents", rating: 4.8,
  },
  {
    icon: PenTool, title: "Writer AI Studio",
    description: "Writer's full-stack generative AI platform with Palmyra models, AI HQ agent builder, RAG and governance for the enterprise.",
    emoji: "🖋️", color: "from-emerald-500 to-teal-500",
    directUrl: "https://writer.com/?via=aiwebtools", imageUrl: writerAiHero,
    tags: ["Writer AI Studio", "AI HQ", "Palmyra", "enterprise agents", "RAG", "AI Agents"],
    category: "AI Agents", rating: 4.7,
  },
  {
    icon: Activity, title: "Trace by Sentry",
    description: "AI agent observability from Sentry — traces, spans, costs, evals and error monitoring for LLM and agent workloads in production.",
    emoji: "📡", color: "from-emerald-500 to-purple-500",
    directUrl: "https://sentry.io/for/ai/?via=aiwebtools", imageUrl: traceSentryHero,
    tags: ["Sentry", "Trace", "agent observability", "LLM monitoring", "tracing", "AI Agents"],
    category: "AI Agents", rating: 4.7,
  },
  {
    icon: Waves, title: "Coval",
    description: "Simulation and evaluation platform purpose-built for AI voice and chat agents — stress-test conversations at scale before shipping.",
    emoji: "🌊", color: "from-cyan-500 to-emerald-500",
    directUrl: "https://www.coval.dev/?via=aiwebtools", imageUrl: covalHero,
    tags: ["Coval", "voice agent eval", "simulation", "agent testing", "QA", "AI Agents"],
    category: "AI Agents", rating: 4.7,
  },
  {
    icon: Gauge, title: "Ragas",
    description: "Open-source evaluation framework for RAG pipelines and LLM agents — faithfulness, answer relevancy, context precision and more.",
    emoji: "📊", color: "from-emerald-500 to-green-500",
    directUrl: "https://docs.ragas.io/?via=aiwebtools", imageUrl: ragasHero,
    tags: ["Ragas", "RAG evaluation", "LLM eval", "open source", "agent metrics", "AI Agents"],
    category: "AI Agents", rating: 4.7,
  },
  {
    icon: ShieldCheck, title: "Confident AI",
    description: "Cloud platform built on DeepEval for LLM and agent evaluation, regression testing, dataset management and red-teaming.",
    emoji: "✅", color: "from-emerald-500 to-blue-500",
    directUrl: "https://www.confident-ai.com/?via=aiwebtools", imageUrl: confidentAiHero,
    tags: ["Confident AI", "DeepEval", "LLM eval", "agent eval", "red teaming", "AI Agents"],
    category: "AI Agents", rating: 4.7,
  },
  {
    icon: Network, title: "OctoTools",
    description: "Stanford's training-free agentic framework that orchestrates multiple tools via standardized tool cards for complex reasoning tasks.",
    emoji: "🐙", color: "from-emerald-500 to-purple-500",
    directUrl: "https://octotools.github.io/?via=aiwebtools", imageUrl: octotoolsHero,
    tags: ["OctoTools", "Stanford", "agent framework", "tool use", "reasoning", "AI Agents"],
    category: "AI Agents", rating: 4.7,
  },
  {
    icon: GitBranch, title: "LangGraph",
    description: "LangChain's low-level orchestration framework for building stateful, controllable, multi-agent applications as graphs.",
    emoji: "🕸️", color: "from-emerald-500 to-cyan-500",
    directUrl: "https://www.langchain.com/langgraph/?via=aiwebtools", imageUrl: langgraphHero,
    tags: ["LangGraph", "LangChain", "agent orchestration", "stateful agents", "graph", "AI Agents"],
    category: "AI Agents", rating: 4.8,
  },
  {
    icon: Wand2, title: "Magic Dev",
    description: "Frontier coding model with ultra-long context (100M tokens) designed to reason over entire codebases and ship full features autonomously.",
    emoji: "🪄", color: "from-emerald-500 to-violet-500",
    directUrl: "https://magic.dev/?via=aiwebtools", imageUrl: magicDevHero,
    tags: ["Magic Dev", "long context", "coding agent", "frontier model", "autonomous coder", "AI Agents"],
    category: "AI Agents", rating: 4.7,
  },
  {
    icon: Eye, title: "Sentry Seer",
    description: "Sentry's AI debugging agent that analyzes stack traces, root-causes issues and proposes verified fixes via pull request.",
    emoji: "👁️", color: "from-emerald-500 to-pink-500",
    directUrl: "https://sentry.io/product/seer/?via=aiwebtools", imageUrl: sentrySeerHero,
    tags: ["Sentry Seer", "AI debugging", "root cause", "bug fix agent", "PR agent", "AI Agents"],
    category: "AI Agents", rating: 4.8,
  },
  {
    icon: MessageSquareCode, title: "Korbit",
    description: "Autonomous AI code reviewer that catches issues, mentors developers and accelerates pull-request workflows across GitHub and GitLab.",
    emoji: "🛰️", color: "from-emerald-500 to-cyan-500",
    directUrl: "https://www.korbit.ai/?via=aiwebtools", imageUrl: korbitHero,
    tags: ["Korbit", "AI code review", "PR agent", "developer mentor", "GitHub", "AI Agents"],
    category: "AI Agents", rating: 4.6,
  },
  {
    icon: Diamond, title: "Diamond",
    description: "Graphite's AI code review agent — surfaces real bugs, security issues and design problems on every pull request, tuned to your codebase.",
    emoji: "💎", color: "from-cyan-500 to-emerald-500",
    directUrl: "https://graphite.dev/diamond/?via=aiwebtools", imageUrl: diamondGraphiteHero,
    tags: ["Diamond", "Graphite", "AI code review", "PR agent", "static analysis", "AI Agents"],
    category: "AI Agents", rating: 4.7,
  },
  {
    icon: Bot, title: "Charlie Labs",
    description: "Autonomous AI software engineering teammate that picks up GitHub issues, writes code and opens production-ready pull requests on its own.",
    emoji: "🤖", color: "from-emerald-500 to-blue-500",
    directUrl: "https://charlielabs.ai/?via=aiwebtools", imageUrl: charlieLabsHero,
    tags: ["Charlie Labs", "autonomous coder", "GitHub issues", "PR agent", "engineering teammate", "AI Agents"],
    category: "AI Agents", rating: 4.6,
  },
  {
    icon: Theater, title: "Stagehand",
    description: "Browserbase's open-source browser automation framework — natural-language Playwright actions for reliable AI web agents.",
    emoji: "🎭", color: "from-emerald-500 to-purple-500",
    directUrl: "https://www.stagehand.dev/?via=aiwebtools", imageUrl: stagehandHero,
    tags: ["Stagehand", "Browserbase", "browser automation", "Playwright", "web agent", "AI Agents"],
    category: "AI Agents", rating: 4.7,
  },
  {
    icon: Gamepad2, title: "Arcade AI",
    description: "Tool-calling platform that gives AI agents secure, authenticated access to hundreds of real-world APIs and SaaS apps.",
    emoji: "🕹️", color: "from-emerald-500 to-fuchsia-500",
    directUrl: "https://www.arcade.dev/?via=aiwebtools", imageUrl: arcadeAiHero,
    tags: ["Arcade AI", "tool calling", "agent tools", "API integrations", "OAuth", "AI Agents"],
    category: "AI Agents", rating: 4.7,
  },
  {
    icon: Workflow, title: "Buildship",
    description: "Low-code visual builder for AI workflows, agents and backends — connect any API, model or database without writing infrastructure code.",
    emoji: "⚙️", color: "from-emerald-500 to-orange-500",
    directUrl: "https://buildship.com/?via=aiwebtools", imageUrl: buildshipHero,
    tags: ["Buildship", "low code", "AI workflow", "agent backend", "automation", "AI Agents"],
    category: "AI Agents", rating: 4.6,
  },
  {
    icon: Workflow, title: "Gumloop",
    description: "No-code platform to build, deploy and run AI agents and automations across web scraping, content, ops and data tasks.",
    emoji: "🔁", color: "from-emerald-500 to-lime-500",
    directUrl: "https://www.gumloop.com/?via=aiwebtools", imageUrl: gumloopHero,
    tags: ["Gumloop", "no code", "AI automation", "agent workflow", "scraping agent", "AI Agents"],
    category: "AI Agents", rating: 4.6,
  },
  {
    icon: UserCog, title: "Ema Unlimited",
    description: "Universal AI Employee for the enterprise — Ema handles repetitive knowledge work across roles with a generative workflow engine.",
    emoji: "🧑‍💼", color: "from-emerald-500 to-blue-500",
    directUrl: "https://www.ema.co/?via=aiwebtools", imageUrl: emaHero,
    tags: ["Ema", "AI employee", "universal agent", "enterprise AI", "knowledge work", "AI Agents"],
    category: "AI Agents", rating: 4.6,
  },
  {
    icon: Headset, title: "ASAPP",
    description: "Generative AI platform for contact centers — autonomous voice and digital agents plus copilots that boost CX team productivity.",
    emoji: "🎧", color: "from-emerald-500 to-cyan-500",
    directUrl: "https://www.asapp.com/?via=aiwebtools", imageUrl: asappHero,
    tags: ["ASAPP", "contact center AI", "customer service agent", "voice agent", "CX copilot", "AI Agents"],
    category: "AI Agents", rating: 4.6,
  },
  {
    icon: Network, title: "Kore AI",
    description: "Enterprise agent platform (AgentOS) for designing, deploying and governing safe AI agents and copilots at scale across the business.",
    emoji: "🧠", color: "from-emerald-500 to-violet-500",
    directUrl: "https://kore.ai/?via=aiwebtools", imageUrl: koreAiHero,
    tags: ["Kore.ai", "AgentOS", "enterprise agents", "agent platform", "conversational AI", "AI Agents"],
    category: "AI Agents", rating: 4.6,
  },
  {
    icon: Bug, title: "Bugbot",
    description: "Cursor's AI code-review agent — automatically reviews pull requests, catches bugs and proposes fixes inside your editor and GitHub.",
    emoji: "🐞", color: "from-emerald-500 to-red-500",
    directUrl: "https://cursor.com/bugbot/?via=aiwebtools", imageUrl: bugbotHero,
    tags: ["Bugbot", "Cursor", "AI code review", "PR agent", "bug detection", "AI Agents"],
    category: "AI Agents", rating: 4.7,
  },
  {
    icon: Code2, title: "Devon AI",
    description: "Open autonomous AI software engineer that plans, codes, tests and ships pull requests — the open alternative to Devin-class agents.",
    emoji: "👨‍💻", color: "from-emerald-500 to-blue-500",
    directUrl: "https://github.com/entropy-research/Devon?via=aiwebtools", imageUrl: devonAiHero,
    tags: ["Devon AI", "open source", "autonomous engineer", "coding agent", "Devin alternative", "AI Agents"],
    category: "AI Agents", rating: 4.6,
  },
  {
    icon: GitPullRequest, title: "PR-Agent",
    description: "Qodo's open-source AI pull-request agent — automatic PR descriptions, code reviews, suggestions and changelogs for GitHub, GitLab and Bitbucket.",
    emoji: "🔀", color: "from-emerald-500 to-purple-500",
    directUrl: "https://github.com/Codium-ai/pr-agent?via=aiwebtools", imageUrl: prAgentHero,
    tags: ["PR-Agent", "Qodo", "Codium", "AI code review", "open source", "AI Agents"],
    category: "AI Agents", rating: 4.7,
  },
  {
    icon: Plug, title: "Composio AgentKit",
    description: "Connect AI agents to 250+ apps with managed auth, structured tool calling and built-in triggers — the integration layer for agentic AI.",
    emoji: "🔌", color: "from-emerald-500 to-cyan-500",
    directUrl: "https://composio.dev/?via=aiwebtools", imageUrl: composioAgentKitHero,
    tags: ["Composio", "AgentKit", "tool calling", "agent integrations", "OAuth", "AI Agents"],
    category: "AI Agents", rating: 4.7,
  },
  {
    icon: MousePointer, title: "Claude Computer Use",
    description: "Anthropic's agent capability that lets Claude operate a computer like a human — moving the cursor, clicking, typing and navigating any app.",
    emoji: "🖥️", color: "from-emerald-500 to-orange-500",
    directUrl: "https://www.anthropic.com/news/3-5-models-and-computer-use?via=aiwebtools", imageUrl: claudeComputerUseHero,
    tags: ["Claude Computer Use", "Anthropic", "computer agent", "screen control", "desktop agent", "AI Agents"],
    category: "AI Agents", rating: 4.8,
  },
  {
    icon: Sparkles, title: "Cassidy AI",
    description: "No-code AI assistant and agent platform for businesses — train on your knowledge base and deploy custom agents across teams.",
    emoji: "✨", color: "from-emerald-500 to-pink-500",
    directUrl: "https://www.cassidyai.com/?via=aiwebtools", imageUrl: cassidyAiHero,
    tags: ["Cassidy AI", "no code agents", "business assistant", "knowledge base", "team AI", "AI Agents"],
    category: "AI Agents", rating: 4.6,
  },
];