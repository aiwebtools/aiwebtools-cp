import { Tool } from "@/types/tools";
import { Bot, Brain, Globe, Shield, Workflow, Cpu, Eye, MessageSquare, FileCode, Network, BarChart3, Database, Users, Layers, Sparkles, Search, GitBranch, TerminalSquare, BrainCircuit, Puzzle, Activity, Zap, Boxes, Server, Lock } from "lucide-react";

import strandsAgentsHero from "@/assets/tools/strands-agents-hero.jpg";
import agentcoreHero from "@/assets/tools/agentcore-hero.jpg";
import hyperbrowserHero from "@/assets/tools/hyperbrowser-hero.jpg";
import steelBrowserHero from "@/assets/tools/steel-browser-hero.jpg";
import patronusHero from "@/assets/tools/patronus-hero.jpg";
import deepevalHero from "@/assets/tools/deepeval-hero.jpg";
import athinaHero from "@/assets/tools/athina-hero.jpg";
import maximAiHero from "@/assets/tools/maxim-ai-hero.jpg";
import humanloopHero from "@/assets/tools/humanloop-hero.jpg";
import atomicAgentsHero from "@/assets/tools/atomic-agents-hero.jpg";
import inferableHero from "@/assets/tools/inferable-hero.jpg";
import parallelAiHero from "@/assets/tools/parallel-ai-hero.jpg";
import serperHero from "@/assets/tools/serper-hero.jpg";
import ai21MaestroHero from "@/assets/tools/ai21-maestro-hero.jpg";
import palmyraHero from "@/assets/tools/palmyra-hero.jpg";
import fixieAiHero from "@/assets/tools/fixie-ai-hero.jpg";
import fetchAiHero from "@/assets/tools/fetch-ai-hero.jpg";
import olasHero from "@/assets/tools/olas-hero.jpg";
import sentientAgiHero from "@/assets/tools/sentient-agi-hero.jpg";
import gensynHero from "@/assets/tools/gensyn-hero.jpg";
import nousResearchHero from "@/assets/tools/nous-research-hero.jpg";
import hyperbolicHero from "@/assets/tools/hyperbolic-hero.jpg";
import primeIntellectHero from "@/assets/tools/prime-intellect-hero.jpg";
import ritualHero from "@/assets/tools/ritual-hero.jpg";
import factoryAiHero from "@/assets/tools/factory-ai-hero.jpg";
import refactAiHero from "@/assets/tools/refact-ai-hero.jpg";
import bitoAiHero from "@/assets/tools/bito-ai-hero.jpg";
import zencoderHero from "@/assets/tools/zencoder-hero.jpg";
import nearAiHero from "@/assets/tools/near-ai-hero.jpg";
import lakeraHero from "@/assets/tools/lakera-hero.jpg";

// Top AI Agents Batch — July 2026 Part 2 (25 verified-new agent/autonomy tools, dedupe-checked)
export const topAgentsBatch2026JulPart2: Tool[] = [
  {
    icon: Network, title: "Strands Agents",
    description: "Open-source SDK from AWS for building, orchestrating and running production-grade AI agents with a model-driven approach — the modern way to ship agentic apps on the cloud.",
    emoji: "🧵", color: "from-emerald-500 to-orange-500",
    directUrl: "https://strandsagents.com/?via=aiwebtools", imageUrl: strandsAgentsHero,
    tags: ["Strands Agents", "AWS", "AI agents", "agent SDK", "agent orchestration", "open source", "model-driven", "AI Agents"],
    category: "AI Agents", rating: 4.8,
  },
  {
    icon: Server, title: "Amazon Bedrock AgentCore",
    description: "Amazon's enterprise agent runtime on Bedrock — secure memory, identity, gateway, browser and code-interpreter primitives to deploy autonomous AI agents at scale.",
    emoji: "🪨", color: "from-orange-500 to-emerald-600",
    directUrl: "https://aws.amazon.com/bedrock/agentcore/?via=aiwebtools", imageUrl: agentcoreHero,
    tags: ["Bedrock AgentCore", "AWS Bedrock", "agent runtime", "AI agents", "enterprise agents", "agent memory", "AI Agents"],
    category: "AI Agents", rating: 4.8,
  },
  {
    icon: Globe, title: "Hyperbrowser",
    description: "Cloud headless-browser infrastructure built for AI agents — spin up thousands of stealth browser sessions, scrape and automate the web at hyperspeed.",
    emoji: "🌐", color: "from-emerald-500 to-cyan-500",
    directUrl: "https://hyperbrowser.ai/?via=aiwebtools", imageUrl: hyperbrowserHero,
    tags: ["Hyperbrowser", "browser automation", "AI agents", "web scraping", "stealth browser", "agent infrastructure", "AI Agents"],
    category: "AI Agents", rating: 4.7,
  },
  {
    icon: Globe, title: "Steel Browser",
    description: "Open-source browser API purpose-built for AI agents — control real Chromium sessions for scraping, automation and computer-use agents.",
    emoji: "🛠️", color: "from-slate-400 to-emerald-500",
    directUrl: "https://steel.dev/?via=aiwebtools", imageUrl: steelBrowserHero,
    tags: ["Steel Browser", "Steel.dev", "browser API", "AI agents", "open source", "computer use", "AI Agents"],
    category: "AI Agents", rating: 4.7,
  },
  {
    icon: Shield, title: "Patronus AI",
    description: "Automated evaluation and guardrails platform for LLM agents — detect hallucinations, PII leaks, prompt injections and unsafe outputs in production.",
    emoji: "🛡️", color: "from-emerald-500 to-indigo-600",
    directUrl: "https://patronus.ai/?via=aiwebtools", imageUrl: patronusHero,
    tags: ["Patronus AI", "LLM evaluation", "guardrails", "hallucination detection", "AI safety", "agent evaluation", "AI Agents"],
    category: "AI Agents", rating: 4.8,
  },
  {
    icon: Activity, title: "DeepEval",
    description: "Open-source LLM evaluation framework from Confident AI — Pytest-style unit tests, metrics and CI/CD checks for agents, RAG pipelines and prompts.",
    emoji: "✅", color: "from-emerald-500 to-purple-600",
    directUrl: "https://confident-ai.com/?via=aiwebtools", imageUrl: deepevalHero,
    tags: ["DeepEval", "Confident AI", "LLM evaluation", "agent testing", "open source", "RAG evaluation", "AI Agents"],
    category: "AI Agents", rating: 4.8,
  },
  {
    icon: Eye, title: "Athina AI",
    description: "End-to-end observability, evaluation and experimentation platform for LLM agents — monitor production performance and ship safer AI features.",
    emoji: "🦉", color: "from-emerald-500 to-blue-600",
    directUrl: "https://athina.ai/?via=aiwebtools", imageUrl: athinaHero,
    tags: ["Athina AI", "LLM observability", "agent monitoring", "evaluation", "AI experimentation", "AI Agents"],
    category: "AI Agents", rating: 4.7,
  },
  {
    icon: BarChart3, title: "Maxim AI",
    description: "End-to-end agent simulation, evaluation and observability platform — ship reliable AI agents 5x faster with prompt management, dataset curation and prod tracing.",
    emoji: "📊", color: "from-emerald-500 to-pink-500",
    directUrl: "https://getmaxim.ai/?via=aiwebtools", imageUrl: maximAiHero,
    tags: ["Maxim AI", "agent simulation", "LLM evaluation", "observability", "prompt management", "AI Agents"],
    category: "AI Agents", rating: 4.8,
  },
  {
    icon: Users, title: "Humanloop",
    description: "Enterprise LLM platform for collaborative prompt engineering, evaluation and human-in-the-loop fine-tuning of AI agents.",
    emoji: "🔁", color: "from-emerald-500 to-purple-500",
    directUrl: "https://humanloop.com/?via=aiwebtools", imageUrl: humanloopHero,
    tags: ["Humanloop", "prompt engineering", "LLM evaluation", "human in the loop", "agent platform", "AI Agents"],
    category: "AI Agents", rating: 4.7,
  },
  {
    icon: Boxes, title: "Atomic Agents",
    description: "Lightweight modular Python framework for building production AI agents from composable, atomic Pydantic-typed building blocks — Lego for agents.",
    emoji: "⚛️", color: "from-emerald-500 to-cyan-600",
    directUrl: "https://github.com/BrainBlend-AI/atomic-agents?via=aiwebtools", imageUrl: atomicAgentsHero,
    tags: ["Atomic Agents", "agent framework", "Python", "modular AI", "open source", "Pydantic", "AI Agents"],
    category: "AI Agents", rating: 4.7,
  },
  {
    icon: Workflow, title: "Inferable",
    description: "Managed platform for running long-lived, durable AI agents in production with built-in tool calling, distributed execution and human approval flows.",
    emoji: "⚡", color: "from-emerald-500 to-yellow-500",
    directUrl: "https://inferable.ai/?via=aiwebtools", imageUrl: inferableHero,
    tags: ["Inferable", "AI agents", "durable execution", "tool calling", "agent runtime", "AI Agents"],
    category: "AI Agents", rating: 4.7,
  },
  {
    icon: Search, title: "Parallel AI",
    description: "Deep-research web API built for agents — runs many search and reasoning agents in parallel to deliver structured, cited answers at frontier quality.",
    emoji: "🔎", color: "from-emerald-500 to-violet-600",
    directUrl: "https://parallel.ai/?via=aiwebtools", imageUrl: parallelAiHero,
    tags: ["Parallel AI", "deep research", "search API", "AI agents", "web research", "AI Agents"],
    category: "AI Agents", rating: 4.8,
  },
  {
    icon: Search, title: "Serper",
    description: "The fastest, most affordable Google Search API for AI agents — millisecond results powering autonomous research workflows worldwide.",
    emoji: "🚀", color: "from-emerald-500 to-blue-500",
    directUrl: "https://serper.dev/?via=aiwebtools", imageUrl: serperHero,
    tags: ["Serper", "Google Search API", "search agent", "AI agents", "web search", "SERP API", "AI Agents"],
    category: "AI Agents", rating: 4.8,
  },
  {
    icon: BrainCircuit, title: "AI21 Maestro",
    description: "AI21 Labs' agent orchestration platform — plan, execute and validate multi-step agent workflows with built-in reliability and governance.",
    emoji: "🎼", color: "from-emerald-500 to-amber-500",
    directUrl: "https://www.ai21.com/maestro/?via=aiwebtools", imageUrl: ai21MaestroHero,
    tags: ["AI21 Maestro", "AI21 Labs", "agent orchestration", "workflow planning", "AI agents", "AI Agents"],
    category: "AI Agents", rating: 4.7,
  },
  {
    icon: Brain, title: "Palmyra by Writer",
    description: "Writer's enterprise-grade Palmyra family of LLMs powering autonomous business agents for marketing, support, finance and healthcare workflows.",
    emoji: "🌴", color: "from-emerald-500 to-orange-500",
    directUrl: "https://writer.com/palmyra/?via=aiwebtools", imageUrl: palmyraHero,
    tags: ["Palmyra", "Writer AI", "enterprise LLM", "business agents", "Palmyra X5", "AI Agents"],
    category: "AI Agents", rating: 4.7,
  },
  {
    icon: MessageSquare, title: "Fixie AI",
    description: "Voice-AI agent platform for building lifelike, low-latency conversational agents for customer support, sales and IVR — used at enterprise scale.",
    emoji: "🧚", color: "from-emerald-500 to-pink-500",
    directUrl: "https://fixie.ai/?via=aiwebtools", imageUrl: fixieAiHero,
    tags: ["Fixie AI", "voice agents", "conversational AI", "voice AI platform", "AI agents", "AI Agents"],
    category: "AI Agents", rating: 4.6,
  },
  {
    icon: Network, title: "Fetch.ai",
    description: "Decentralized network of autonomous economic agents — discover, transact and coordinate AI agents across an open agentic Web3 economy.",
    emoji: "🤝", color: "from-emerald-500 to-purple-600",
    directUrl: "https://fetch.ai/?via=aiwebtools", imageUrl: fetchAiHero,
    tags: ["Fetch.ai", "decentralized AI", "autonomous agents", "agentic web3", "AEA", "AI Agents"],
    category: "AI Agents", rating: 4.7,
  },
  {
    icon: Network, title: "Olas Network",
    description: "Open-source agent stack and marketplace for autonomous services — operate co-owned AI agents (Olas Mech, Predict, Pearl) that run 24/7 on-chain.",
    emoji: "🌊", color: "from-emerald-500 to-blue-600",
    directUrl: "https://olas.network/?via=aiwebtools", imageUrl: olasHero,
    tags: ["Olas", "Autonolas", "autonomous services", "agent marketplace", "decentralized AI", "AI Agents"],
    category: "AI Agents", rating: 4.6,
  },
  {
    icon: Brain, title: "Sentient AGI",
    description: "Open AGI movement building loyal, community-owned AI models — home of the Dobby LLMs and the OML (Open, Monetizable, Loyal) framework.",
    emoji: "🧠", color: "from-emerald-500 to-rose-500",
    directUrl: "https://sentient.xyz/?via=aiwebtools", imageUrl: sentientAgiHero,
    tags: ["Sentient AGI", "open source AI", "Dobby LLM", "community AI", "decentralized AGI", "AI Agents"],
    category: "AI Agents", rating: 4.7,
  },
  {
    icon: Cpu, title: "Gensyn",
    description: "Decentralized compute protocol for training and running AI models — pool global GPU resources to power agent training at frontier scale.",
    emoji: "⚙️", color: "from-emerald-500 to-indigo-600",
    directUrl: "https://gensyn.ai/?via=aiwebtools", imageUrl: gensynHero,
    tags: ["Gensyn", "decentralized compute", "AI training", "GPU network", "AI Agents", "AI infrastructure"],
    category: "AI Agents", rating: 4.6,
  },
  {
    icon: Brain, title: "Nous Research",
    description: "Open-source AI research collective behind the Hermes and DeepHermes LLM family — frontier open models tuned for reasoning agents.",
    emoji: "🪐", color: "from-emerald-500 to-violet-600",
    directUrl: "https://nousresearch.com/?via=aiwebtools", imageUrl: nousResearchHero,
    tags: ["Nous Research", "Hermes LLM", "DeepHermes", "open source AI", "reasoning agents", "AI Agents"],
    category: "AI Agents", rating: 4.8,
  },
  {
    icon: Server, title: "Hyperbolic",
    description: "Decentralized AI cloud — on-demand GPU compute and lightning-fast open-source model inference for agents at a fraction of hyperscaler prices.",
    emoji: "🌀", color: "from-emerald-500 to-cyan-500",
    directUrl: "https://hyperbolic.xyz/?via=aiwebtools", imageUrl: hyperbolicHero,
    tags: ["Hyperbolic", "AI inference", "GPU cloud", "decentralized compute", "open source models", "AI Agents"],
    category: "AI Agents", rating: 4.7,
  },
  {
    icon: Cpu, title: "Prime Intellect",
    description: "Distributed training platform — train, fine-tune and deploy frontier open models across a global network of GPUs, with the INTELLECT model family.",
    emoji: "🌍", color: "from-emerald-500 to-blue-500",
    directUrl: "https://primeintellect.ai/?via=aiwebtools", imageUrl: primeIntellectHero,
    tags: ["Prime Intellect", "distributed training", "INTELLECT model", "open source AI", "AI compute", "AI Agents"],
    category: "AI Agents", rating: 4.7,
  },
  {
    icon: Lock, title: "Ritual",
    description: "Sovereign AI compute network — verifiable, on-chain inference and tooling that lets developers run privacy-preserving AI agents anywhere.",
    emoji: "🕯️", color: "from-emerald-500 to-purple-600",
    directUrl: "https://ritual.net/?via=aiwebtools", imageUrl: ritualHero,
    tags: ["Ritual", "sovereign AI", "on-chain inference", "verifiable AI", "decentralized agents", "AI Agents"],
    category: "AI Agents", rating: 4.6,
  },
  {
    icon: FileCode, title: "Factory AI",
    description: "Autonomous software engineering platform — fleets of AI 'Droids' that plan, code, review and ship production-grade software alongside human engineers.",
    emoji: "🏭", color: "from-emerald-500 to-orange-600",
    directUrl: "https://factory.ai/?via=aiwebtools", imageUrl: factoryAiHero,
    tags: ["Factory AI", "Droids", "AI software engineer", "autonomous coding", "code agents", "AI Agents"],
    category: "AI Agents", rating: 4.8,
  },
  {
    icon: FileCode, title: "Refact AI",
    description: "Open-source autonomous AI coding agent — refactors, fills, writes and reviews code end-to-end inside your IDE with self-hostable models.",
    emoji: "♻️", color: "from-emerald-500 to-teal-600",
    directUrl: "https://refact.ai/?via=aiwebtools", imageUrl: refactAiHero,
    tags: ["Refact AI", "AI coding agent", "open source", "code refactoring", "IDE agent", "AI Agents"],
    category: "AI Agents", rating: 4.6,
  },
  {
    icon: GitBranch, title: "Bito AI",
    description: "AI code review and dev agent that automates pull request reviews, security audits and code completions inside your repos, IDE and CI.",
    emoji: "🤖", color: "from-emerald-500 to-blue-500",
    directUrl: "https://bito.ai/?via=aiwebtools", imageUrl: bitoAiHero,
    tags: ["Bito AI", "AI code review", "pull request agent", "AI dev assistant", "DevOps AI", "AI Agents"],
    category: "AI Agents", rating: 4.6,
  },
  {
    icon: TerminalSquare, title: "Zencoder",
    description: "Autonomous AI coding agent for the enterprise — Zen agents plan, code, test and ship features inside any IDE with deep repo understanding.",
    emoji: "🧘", color: "from-emerald-500 to-purple-500",
    directUrl: "https://zencoder.ai/?via=aiwebtools", imageUrl: zencoderHero,
    tags: ["Zencoder", "AI coding agent", "Zen agents", "autonomous coding", "IDE agent", "AI Agents"],
    category: "AI Agents", rating: 4.7,
  },
  {
    icon: Network, title: "NEAR AI",
    description: "Open-source, user-owned AI assistant network built on NEAR Protocol — privacy-preserving, on-chain agents anyone can run, train and monetize.",
    emoji: "🛰️", color: "from-emerald-500 to-blue-600",
    directUrl: "https://near.ai/?via=aiwebtools", imageUrl: nearAiHero,
    tags: ["NEAR AI", "user-owned AI", "open source", "decentralized agents", "NEAR Protocol", "AI Agents"],
    category: "AI Agents", rating: 4.6,
  },
  {
    icon: Shield, title: "Lakera Guard",
    description: "Real-time security firewall for LLM agents — blocks prompt injection, jailbreaks, data leakage and unsafe outputs across any model.",
    emoji: "🛡️", color: "from-emerald-500 to-red-500",
    directUrl: "https://lakera.ai/?via=aiwebtools", imageUrl: lakeraHero,
    tags: ["Lakera Guard", "Lakera AI", "LLM security", "prompt injection", "AI firewall", "agent security", "AI Agents"],
    category: "AI Agents", rating: 4.8,
  },
];