import { Tool } from "@/types/tools";
import {
  Cloud, LayoutGrid, Kanban, Smartphone, Map, Package, FileCode, ScrollText,
  ListChecks, MonitorCog, KeyRound, Layers, Zap, Gem, Highlighter, MousePointer2,
  Waves, Boxes, ShieldAlert, Bird, ShieldCheck, Orbit, LockKeyhole, Lightbulb,
  Bot, ScanEye, Timer, Dog, Brain, Eye, RefreshCw, Sigma, TestTube2, Leaf,
  Bug, Route, Split, Users, Repeat, Sparkles, MessageSquareQuote, HelpCircle,
  Headphones, FileText, Flame, Glasses, Swords, Gauge, Music2, MonitorSmartphone,
} from "lucide-react";

import terragonHero from "@/assets/tools/terragon-hero.jpg";
import conductorBuildHero from "@/assets/tools/conductor-build-hero.jpg";
import vibeKanbanHero from "@/assets/tools/vibe-kanban-hero.jpg";
import omnaraHero from "@/assets/tools/omnara-hero.jpg";
import traycerHero from "@/assets/tools/traycer-hero.jpg";
import repoPromptHero from "@/assets/tools/repo-prompt-hero.jpg";
import specKitHero from "@/assets/tools/spec-kit-hero.jpg";
import openspecHero from "@/assets/tools/openspec-hero.jpg";
import taskMasterAiHero from "@/assets/tools/task-master-ai-hero.jpg";
import claudiaGuiHero from "@/assets/tools/claudia-gui-hero.jpg";
import arcadeDevHero from "@/assets/tools/arcade-dev-hero.jpg";
import parallelWebHero from "@/assets/tools/parallel-web-systems-hero.jpg";
import superpowersHero from "@/assets/tools/superpowers-skills-hero.jpg";
import basaltAiHero from "@/assets/tools/basalt-ai-hero.jpg";
import highlightAiHero from "@/assets/tools/highlight-ai-hero.jpg";
import aceHero from "@/assets/tools/ace-general-agents-hero.jpg";
import surferHHero from "@/assets/tools/surfer-h-hero.jpg";
import halluminateHero from "@/assets/tools/halluminate-hero.jpg";
import haizeLabsHero from "@/assets/tools/haize-labs-hero.jpg";
import graySwanHero from "@/assets/tools/gray-swan-ai-hero.jpg";
import virtueAiHero from "@/assets/tools/virtue-ai-hero.jpg";
import calypsoaiHero from "@/assets/tools/calypsoai-hero.jpg";
import promptSecurityHero from "@/assets/tools/prompt-security-hero.jpg";
import andonLabsHero from "@/assets/tools/andon-labs-hero.jpg";
import agentTarsHero from "@/assets/tools/agent-tars-hero.jpg";
import midsceneHero from "@/assets/tools/midscene-hero.jpg";
import shortestHero from "@/assets/tools/shortest-hero.jpg";
import qaWolfHero from "@/assets/tools/qa-wolf-hero.jpg";
import octomindHero from "@/assets/tools/octomind-hero.jpg";
import applitoolsHero from "@/assets/tools/applitools-hero.jpg";
import autifyHero from "@/assets/tools/autify-hero.jpg";
import testsigmaHero from "@/assets/tools/testsigma-hero.jpg";
import katalonHero from "@/assets/tools/katalon-hero.jpg";
import rainforestQaHero from "@/assets/tools/rainforest-qa-hero.jpg";
import bug0Hero from "@/assets/tools/bug0-hero.jpg";
import mazeHero from "@/assets/tools/maze-research-hero.jpg";
import dovetailHero from "@/assets/tools/dovetail-hero.jpg";
import usertestingHero from "@/assets/tools/usertesting-hero.jpg";
import looppanelHero from "@/assets/tools/looppanel-hero.jpg";
import insight7Hero from "@/assets/tools/insight7-hero.jpg";
import userEvaluationHero from "@/assets/tools/user-evaluation-hero.jpg";
import wonderingHero from "@/assets/tools/wondering-ai-hero.jpg";
import genwayHero from "@/assets/tools/genway-hero.jpg";
import versiveHero from "@/assets/tools/versive-hero.jpg";
import attentionInsightHero from "@/assets/tools/attention-insight-hero.jpg";
import visualeyesHero from "@/assets/tools/visualeyes-hero.jpg";
import daggerHero from "@/assets/tools/dagger-io-hero.jpg";
import tricentisHero from "@/assets/tools/tricentis-hero.jpg";
import virtuosoQaHero from "@/assets/tools/virtuoso-qa-hero.jpg";
import loop11Hero from "@/assets/tools/loop11-hero.jpg";

// AI-Native Batch 2026 — 50 real, verified AI tools across agent orchestration,
// AI security, QA automation and AI-powered user research. None previously in the database.
export const aiNativeBatch2026: Tool[] = [
  {
    icon: Cloud, title: "Terragon", emoji: "☁️", color: "from-sky-500 to-indigo-600",
    description: "Cloud platform for running Claude Code agents in parallel sandboxes from your browser or phone. Kick off multiple coding tasks at once, review diffs and open pull requests without tying up your local machine.",
    directUrl: "https://www.terragonlabs.com/?via=aiwebtools", imageUrl: terragonHero,
    tags: ["Terragon", "cloud coding agents", "Claude Code", "parallel agents", "async coding", "pull requests", "agent sandbox", "remote development", "Development & Coding"],
    category: "Development & Coding", rating: 4.6, totalVotes: 860
  },
  {
    icon: LayoutGrid, title: "Conductor", emoji: "🎼", color: "from-violet-500 to-fuchsia-600",
    description: "macOS app that runs many Claude Code agents in parallel, each in its own isolated git worktree. Review, test and merge every agent's work side by side like a conductor leading an orchestra of coders.",
    directUrl: "https://conductor.build/?via=aiwebtools", imageUrl: conductorBuildHero,
    tags: ["Conductor", "parallel Claude Code", "git worktree", "macOS coding app", "multi agent coding", "agent orchestration", "code review", "Development & Coding"],
    category: "Development & Coding", rating: 4.6, totalVotes: 720
  },
  {
    icon: Kanban, title: "Vibe Kanban", emoji: "🗂️", color: "from-emerald-500 to-teal-600",
    description: "Open-source kanban board for orchestrating AI coding agents. Queue tasks, run Claude Code, Codex, Gemini CLI and others in parallel, and track every agent's progress across columns in real time. Free and open source.",
    directUrl: "https://www.vibekanban.com/?via=aiwebtools", imageUrl: vibeKanbanHero,
    tags: ["Vibe Kanban", "open source", "free", "AI coding agents", "kanban board", "agent orchestration", "Codex", "Gemini CLI", "task queue", "Development & Coding", "Free"],
    category: "Development & Coding", rating: 4.7, totalVotes: 1180, isFree: true
  },
  {
    icon: Smartphone, title: "Omnara", emoji: "📱", color: "from-orange-500 to-rose-600",
    description: "Command center for AI coding agents that lets you launch, monitor and reply to Claude Code and other agents from your phone. Push notifications fire when an agent needs input so long runs never stall. Open source with a free tier.",
    directUrl: "https://omnara.com/?via=aiwebtools", imageUrl: omnaraHero,
    tags: ["Omnara", "mobile agent control", "Claude Code", "agent notifications", "remote coding", "open source", "free tier", "agent monitoring", "Development & Coding", "Free"],
    category: "Development & Coding", rating: 4.5, totalVotes: 640, isFree: true
  },
  {
    icon: Map, title: "Traycer", emoji: "🗺️", color: "from-blue-500 to-cyan-600",
    description: "Planning layer for AI coding. Traycer turns a request into a reviewed, file-by-file implementation plan before any code is written, then hands the verified plan to Claude Code, Cursor or Codex for execution.",
    directUrl: "https://traycer.ai/?via=aiwebtools", imageUrl: traycerHero,
    tags: ["Traycer", "AI planning", "spec driven development", "coding plans", "Cursor", "Claude Code", "Codex", "implementation plan", "Development & Coding"],
    category: "Development & Coding", rating: 4.6, totalVotes: 910
  },
  {
    icon: Package, title: "Repo Prompt", emoji: "📦", color: "from-amber-500 to-orange-600",
    description: "Context engineering app for macOS and iOS that helps you hand exactly the right files to an LLM. Build precise prompts from your repository with a file tree, token counts, code maps and apply-back diffs.",
    directUrl: "https://repoprompt.com/?via=aiwebtools", imageUrl: repoPromptHero,
    tags: ["Repo Prompt", "context engineering", "LLM prompts", "codebase context", "token budget", "macOS app", "code map", "diff apply", "Development & Coding"],
    category: "Development & Coding", rating: 4.6, totalVotes: 780
  },
  {
    icon: FileCode, title: "Spec Kit", emoji: "📐", color: "from-slate-500 to-blue-600",
    description: "GitHub's open-source toolkit for spec-driven development with AI agents. Define intent as an executable specification, generate a plan and tasks, then let Copilot, Claude Code or Gemini CLI implement against it. Free and open source.",
    directUrl: "https://github.com/github/spec-kit", imageUrl: specKitHero,
    tags: ["Spec Kit", "GitHub", "spec driven development", "open source", "free", "GitHub Copilot", "Claude Code", "Gemini CLI", "executable specs", "Development & Coding", "Free"],
    category: "Development & Coding", rating: 4.7, totalVotes: 1520, isFree: true
  },
  {
    icon: ScrollText, title: "OpenSpec", emoji: "📜", color: "from-teal-500 to-emerald-600",
    description: "Open-source spec-driven workflow for AI coding assistants. Agree on a written change proposal first, then let the agent implement and archive it, keeping humans and AI aligned on intent. Free and open source.",
    directUrl: "https://github.com/Fission-AI/OpenSpec", imageUrl: openspecHero,
    tags: ["OpenSpec", "spec driven development", "open source", "free", "change proposals", "AI coding workflow", "agent alignment", "documentation", "Development & Coding", "Free"],
    category: "Development & Coding", rating: 4.5, totalVotes: 690, isFree: true
  },
  {
    icon: ListChecks, title: "Task Master", emoji: "✅", color: "from-indigo-500 to-purple-600",
    description: "Open-source AI task management system for coding agents. Parses a product requirements document into a dependency-aware task graph, then drives Cursor, Claude Code or Windsurf through it task by task. Free and open source.",
    directUrl: "https://www.task-master.dev/?via=aiwebtools", imageUrl: taskMasterAiHero,
    tags: ["Task Master", "taskmaster ai", "open source", "free", "AI task management", "PRD parsing", "Cursor", "Windsurf", "dependency graph", "Development & Coding", "Free"],
    category: "Development & Coding", rating: 4.7, totalVotes: 1430, isFree: true
  },
  {
    icon: MonitorCog, title: "Claudia", emoji: "🖥️", color: "from-orange-500 to-amber-600",
    description: "Open-source desktop GUI for Claude Code. Manage projects and sessions, build custom agents, track token usage and run everything in a sandboxed environment with a visual interface instead of the terminal. Free and open source.",
    directUrl: "https://github.com/getAsterisk/claudia", imageUrl: claudiaGuiHero,
    tags: ["Claudia", "Claude Code GUI", "open source", "free", "desktop app", "agent management", "session history", "token usage", "Development & Coding", "Free"],
    category: "Development & Coding", rating: 4.6, totalVotes: 1290, isFree: true
  },
  {
    icon: KeyRound, title: "Arcade.dev", emoji: "🔑", color: "from-violet-500 to-purple-700",
    description: "Tool-calling and authentication platform for AI agents. Gives agents secure, user-scoped access to hundreds of real APIs including Gmail, Slack, GitHub and Stripe with OAuth handled for you. Free developer tier.",
    directUrl: "https://www.arcade.dev/?via=aiwebtools", imageUrl: arcadeDevHero,
    tags: ["Arcade.dev", "agent tools", "tool calling", "OAuth for agents", "API integrations", "MCP server", "agent authentication", "free tier", "AI Agents", "Free"],
    category: "AI Agents", rating: 4.6, totalVotes: 830, isFree: true
  },
  {
    icon: Layers, title: "Parallel Web Systems", emoji: "🧭", color: "from-blue-600 to-indigo-700",
    description: "Web research infrastructure built for AI. Its Search and Task APIs let agents read and reason across millions of live web pages in parallel, returning cited, structured answers instead of raw links.",
    directUrl: "https://parallel.ai/?via=aiwebtools", imageUrl: parallelWebHero,
    tags: ["Parallel Web Systems", "parallel ai", "web research API", "agent search", "deep research", "cited answers", "structured extraction", "AI Agents"],
    category: "AI Agents", rating: 4.6, totalVotes: 760
  },
  {
    icon: Zap, title: "Superpowers", emoji: "⚡", color: "from-yellow-400 to-amber-600",
    description: "Open-source skills library that upgrades Claude Code with reusable capabilities for brainstorming, planning, testing, debugging and git workflows, installed as composable skill modules. Free and open source.",
    directUrl: "https://github.com/obra/superpowers", imageUrl: superpowersHero,
    tags: ["Superpowers", "Claude Code skills", "open source", "free", "agent skills", "plugin", "workflow automation", "test driven development", "Development & Coding", "Free"],
    category: "Development & Coding", rating: 4.6, totalVotes: 970, isFree: true
  },
  {
    icon: Gem, title: "Basalt", emoji: "💎", color: "from-sky-500 to-blue-700",
    description: "Collaborative platform for building, versioning and evaluating AI prompts and features. Product and engineering teams iterate on prompts, run evaluations against real datasets and ship changes with monitoring. Free plan available.",
    directUrl: "https://www.getbasalt.ai/?via=aiwebtools", imageUrl: basaltAiHero,
    tags: ["Basalt", "prompt engineering", "prompt versioning", "LLM evaluation", "AI observability", "prompt management", "free plan", "Development & Coding", "Free"],
    category: "Development & Coding", rating: 4.5, totalVotes: 520, isFree: true
  },
  {
    icon: Highlighter, title: "Highlight AI", emoji: "🔦", color: "from-amber-400 to-yellow-600",
    description: "Context-aware desktop AI assistant that can see your screen and hear your meetings, then answer questions, draft replies and automate actions across any app. Free tier available for Mac and Windows.",
    directUrl: "https://highlightai.com/?via=aiwebtools", imageUrl: highlightAiHero,
    tags: ["Highlight AI", "desktop AI assistant", "screen context", "meeting notes", "AI overlay", "productivity assistant", "free tier", "Productivity", "Free"],
    category: "Productivity & Utilities", rating: 4.5, totalVotes: 1120, isFree: true
  },
  {
    icon: MousePointer2, title: "Ace by General Agents", emoji: "🖱️", color: "from-slate-400 to-blue-600",
    description: "Computer-use agent that actually drives your Mac, moving the cursor, clicking and typing to complete real desktop tasks at superhuman speed rather than just chatting about them.",
    directUrl: "https://generalagents.com/ace/?via=aiwebtools", imageUrl: aceHero,
    tags: ["Ace", "General Agents", "computer use agent", "desktop automation", "cursor control", "AI agent", "macOS automation", "AI Agents"],
    category: "AI Agents", rating: 4.5, totalVotes: 690
  },
  {
    icon: Waves, title: "Surfer H", emoji: "🌊", color: "from-cyan-500 to-blue-700",
    description: "Web-browsing AI agent from H Company that navigates real websites to research, extract data and complete multi-step online tasks, powered by the open Holo vision-language models.",
    directUrl: "https://www.surferh.com/?via=aiwebtools", imageUrl: surferHHero,
    tags: ["Surfer H", "H Company", "browser agent", "web automation", "Holo model", "data extraction", "web research", "AI Agents"],
    category: "AI Agents", rating: 4.4, totalVotes: 540
  },
  {
    icon: Boxes, title: "Halluminate", emoji: "🧊", color: "from-fuchsia-500 to-teal-500",
    description: "Simulation and training environment for computer-use agents. Provides realistic cloned websites and task suites so teams can train, benchmark and stress-test agents safely before production.",
    directUrl: "https://www.halluminate.ai/?via=aiwebtools", imageUrl: halluminateHero,
    tags: ["Halluminate", "agent simulation", "computer use training", "agent benchmarks", "synthetic web", "agent evaluation", "AI Agents"],
    category: "AI Agents", rating: 4.4, totalVotes: 410
  },
  {
    icon: ShieldAlert, title: "Haize Labs", emoji: "🛡️", color: "from-red-600 to-rose-700",
    description: "AI red-teaming and evaluation lab. Automatically discovers jailbreaks, hallucinations and failure modes in LLM applications, then turns them into reproducible test suites and automated judges.",
    directUrl: "https://www.haizelabs.com/?via=aiwebtools", imageUrl: haizeLabsHero,
    tags: ["Haize Labs", "AI red teaming", "jailbreak testing", "LLM evaluation", "model safety", "adversarial testing", "Security & Privacy"],
    category: "Security & Privacy", rating: 4.5, totalVotes: 620
  },
  {
    icon: Bird, title: "Gray Swan AI", emoji: "🦢", color: "from-slate-400 to-slate-700",
    description: "AI safety and security company running large-scale red-teaming arenas and automated attack tooling that expose vulnerabilities in frontier models and agents before attackers find them.",
    directUrl: "https://www.grayswan.ai/?via=aiwebtools", imageUrl: graySwanHero,
    tags: ["Gray Swan AI", "AI security", "red teaming arena", "model vulnerabilities", "agent safety", "jailbreak testing", "Security & Privacy"],
    category: "Security & Privacy", rating: 4.5, totalVotes: 700
  },
  {
    icon: ShieldCheck, title: "Virtue AI", emoji: "🏛️", color: "from-emerald-500 to-green-700",
    description: "End-to-end AI security and compliance platform. Red-teams models and agents, then enforces runtime guardrails covering data privacy, bias, jailbreaks and regulatory requirements for enterprise deployments.",
    directUrl: "https://www.virtueai.com/?via=aiwebtools", imageUrl: virtueAiHero,
    tags: ["Virtue AI", "AI guardrails", "AI compliance", "model red teaming", "runtime safety", "enterprise AI security", "Security & Privacy"],
    category: "Security & Privacy", rating: 4.5, totalVotes: 580
  },
  {
    icon: Orbit, title: "CalypsoAI", emoji: "🛰️", color: "from-blue-600 to-cyan-700",
    description: "AI security platform that inspects every prompt and response in real time, blocking prompt injection, data leakage and model abuse across all the LLMs an enterprise runs.",
    directUrl: "https://calypsoai.com/?via=aiwebtools", imageUrl: calypsoaiHero,
    tags: ["CalypsoAI", "LLM security", "prompt injection defense", "AI governance", "model scanning", "enterprise AI", "Security & Privacy"],
    category: "Security & Privacy", rating: 4.5, totalVotes: 660
  },
  {
    icon: LockKeyhole, title: "Prompt Security", emoji: "🔐", color: "from-blue-500 to-indigo-700",
    description: "Full-stack GenAI security platform that governs employee AI usage, protects homegrown LLM apps from prompt injection and data exfiltration, and secures AI coding assistants.",
    directUrl: "https://www.prompt.security/?via=aiwebtools", imageUrl: promptSecurityHero,
    tags: ["Prompt Security", "GenAI security", "prompt injection", "shadow AI", "data loss prevention", "AI firewall", "Security & Privacy"],
    category: "Security & Privacy", rating: 4.6, totalVotes: 740
  },
  {
    icon: Lightbulb, title: "Andon Labs", emoji: "🏮", color: "from-amber-500 to-orange-700",
    description: "AI safety evaluation lab that tests agents on long-horizon, real-world tasks. Best known for Vending-Bench and embodied agent benchmarks that reveal how models behave when left to operate autonomously.",
    directUrl: "https://andonlabs.com/?via=aiwebtools", imageUrl: andonLabsHero,
    tags: ["Andon Labs", "AI safety evaluation", "agent benchmarks", "Vending-Bench", "long horizon tasks", "autonomy testing", "Research & Academic"],
    category: "Research & Academic", rating: 4.4, totalVotes: 430
  },
  {
    icon: Bot, title: "Agent TARS", emoji: "🤖", color: "from-teal-500 to-emerald-700",
    description: "Open-source multimodal AI agent from ByteDance that operates a browser and terminal together, reading screenshots, running commands and completing complex tasks end to end. Free and open source.",
    directUrl: "https://github.com/bytedance/UI-TARS-desktop", imageUrl: agentTarsHero,
    tags: ["Agent TARS", "UI-TARS", "ByteDance", "open source", "free", "multimodal agent", "browser automation", "GUI agent", "AI Agents", "Free"],
    category: "AI Agents", rating: 4.6, totalVotes: 1080, isFree: true
  },
  {
    icon: ScanEye, title: "Midscene", emoji: "👁️", color: "from-lime-500 to-green-700",
    description: "Open-source AI automation framework that drives web and Android UIs using natural language and vision models. Write automation in plain English and let Midscene find and act on the right elements. Free and open source.",
    directUrl: "https://midscenejs.com/", imageUrl: midsceneHero,
    tags: ["Midscene", "open source", "free", "UI automation", "vision model", "Playwright", "Android automation", "natural language testing", "Development & Coding", "Free"],
    category: "Development & Coding", rating: 4.6, totalVotes: 890, isFree: true
  },
  {
    icon: Timer, title: "Shortest", emoji: "⏱️", color: "from-slate-300 to-blue-600",
    description: "Open-source AI-powered end-to-end testing framework. Write Playwright tests as plain English sentences and let the AI resolve selectors and assertions at run time. Free and open source.",
    directUrl: "https://github.com/anti-work/shortest", imageUrl: shortestHero,
    tags: ["Shortest", "open source", "free", "AI testing", "Playwright", "end to end tests", "natural language tests", "QA automation", "Development & Coding", "Free"],
    category: "Development & Coding", rating: 4.5, totalVotes: 620, isFree: true
  },
  {
    icon: Dog, title: "QA Wolf", emoji: "🐺", color: "from-green-600 to-emerald-800",
    description: "Managed AI-powered QA service that builds and maintains automated end-to-end test coverage for your app, runs it in parallel on every deploy and triages failures with human-verified bug reports.",
    directUrl: "https://www.qawolf.com/?via=aiwebtools", imageUrl: qaWolfHero,
    tags: ["QA Wolf", "automated QA", "end to end testing", "test maintenance", "parallel test runs", "bug triage", "Development & Coding"],
    category: "Development & Coding", rating: 4.6, totalVotes: 810
  },
  {
    icon: Brain, title: "Octomind", emoji: "🐙", color: "from-orange-500 to-violet-700",
    description: "AI agents that discover, write and maintain Playwright end-to-end tests for your web app automatically, healing broken selectors and running suites in parallel across browsers. Free tier available.",
    directUrl: "https://octomind.dev/?via=aiwebtools", imageUrl: octomindHero,
    tags: ["Octomind", "AI test generation", "Playwright", "self healing tests", "end to end testing", "free tier", "QA automation", "Development & Coding", "Free"],
    category: "Development & Coding", rating: 4.5, totalVotes: 700, isFree: true
  },
  {
    icon: Eye, title: "Applitools", emoji: "👀", color: "from-cyan-500 to-blue-700",
    description: "Visual AI testing platform. Its Visual AI engine compares application screenshots like a human eye would, catching layout and rendering bugs across browsers and devices that assertion-based tests miss. Free tier available.",
    directUrl: "https://applitools.com/?via=aiwebtools", imageUrl: applitoolsHero,
    tags: ["Applitools", "visual AI testing", "visual regression", "cross browser testing", "Eyes", "UI testing", "free tier", "Development & Coding", "Free"],
    category: "Development & Coding", rating: 4.6, totalVotes: 940, isFree: true
  },
  {
    icon: RefreshCw, title: "Autify", emoji: "🔁", color: "from-orange-500 to-amber-700",
    description: "AI-powered no-code test automation for web and mobile. Record a scenario once and Autify's AI heals the test as your UI changes, keeping regression suites green without constant rewriting.",
    directUrl: "https://autify.com/?via=aiwebtools", imageUrl: autifyHero,
    tags: ["Autify", "no code testing", "self healing tests", "mobile test automation", "regression testing", "AI QA", "Development & Coding"],
    category: "Development & Coding", rating: 4.4, totalVotes: 560
  },
  {
    icon: Sigma, title: "Testsigma", emoji: "🧮", color: "from-indigo-500 to-blue-700",
    description: "Cloud-based low-code test automation platform where tests are written in plain English and run across web, mobile and APIs. Includes AI test generation and auto-healing. Open-source community edition available free.",
    directUrl: "https://testsigma.com/?via=aiwebtools", imageUrl: testsigmaHero,
    tags: ["Testsigma", "low code testing", "plain English tests", "API testing", "mobile testing", "open source edition", "free", "Development & Coding", "Free"],
    category: "Development & Coding", rating: 4.5, totalVotes: 680, isFree: true
  },
  {
    icon: TestTube2, title: "Katalon", emoji: "🧪", color: "from-teal-500 to-emerald-700",
    description: "Unified test automation platform covering web, API, desktop and mobile with AI-assisted authoring, self-healing locators and rich reporting. Free edition available for individuals and small teams.",
    directUrl: "https://katalon.com/?via=aiwebtools", imageUrl: katalonHero,
    tags: ["Katalon", "test automation", "API testing", "mobile testing", "self healing", "AI QA", "free edition", "Development & Coding", "Free"],
    category: "Development & Coding", rating: 4.5, totalVotes: 1010, isFree: true
  },
  {
    icon: Leaf, title: "Rainforest QA", emoji: "🌿", color: "from-green-600 to-teal-700",
    description: "No-code QA platform that blends AI automation with an on-demand human tester crowd, giving fast, reliable release sign-off without maintaining brittle test scripts.",
    directUrl: "https://www.rainforestqa.com/?via=aiwebtools", imageUrl: rainforestQaHero,
    tags: ["Rainforest QA", "no code QA", "crowd testing", "release testing", "manual and automated QA", "regression suite", "Development & Coding"],
    category: "Development & Coding", rating: 4.4, totalVotes: 520
  },
  {
    icon: Bug, title: "Bug0", emoji: "🐞", color: "from-red-500 to-cyan-700",
    description: "AI QA agents that continuously explore your product like a real user, find regressions before customers do and file reproducible bug reports with video and console traces.",
    directUrl: "https://bug0.com/?via=aiwebtools", imageUrl: bug0Hero,
    tags: ["Bug0", "AI QA agent", "bug detection", "exploratory testing", "regression discovery", "automated bug reports", "Development & Coding"],
    category: "Development & Coding", rating: 4.4, totalVotes: 390
  },
  {
    icon: Route, title: "Maze", emoji: "🧩", color: "from-rose-500 to-orange-600",
    description: "AI-powered continuous product discovery platform. Run usability tests, surveys and prototype studies, then let Maze's AI summarize sessions and surface the insight that should change your roadmap. Free plan available.",
    directUrl: "https://maze.co/?via=aiwebtools", imageUrl: mazeHero,
    tags: ["Maze", "user research", "usability testing", "prototype testing", "AI insights", "product discovery", "free plan", "Business & Marketing", "Free"],
    category: "Business & Marketing", rating: 4.6, totalVotes: 1240, isFree: true
  },
  {
    icon: Split, title: "Dovetail", emoji: "🪵", color: "from-indigo-500 to-violet-700",
    description: "AI customer insights hub that transcribes interviews, calls and support tickets, then automatically tags themes and turns scattered feedback into a searchable, shareable research repository. Free plan available.",
    directUrl: "https://dovetail.com/?via=aiwebtools", imageUrl: dovetailHero,
    tags: ["Dovetail", "customer insights", "research repository", "interview transcription", "thematic analysis", "AI tagging", "free plan", "Business & Marketing", "Free"],
    category: "Business & Marketing", rating: 4.7, totalVotes: 1360, isFree: true
  },
  {
    icon: Users, title: "UserTesting", emoji: "🎬", color: "from-green-500 to-emerald-700",
    description: "Human insight platform that puts your product in front of real target users on video, with AI that summarizes sessions, flags friction moments and quantifies sentiment across hundreds of tests.",
    directUrl: "https://www.usertesting.com/?via=aiwebtools", imageUrl: usertestingHero,
    tags: ["UserTesting", "user research", "video feedback", "AI session summaries", "usability testing", "customer experience", "Business & Marketing"],
    category: "Business & Marketing", rating: 4.6, totalVotes: 1580
  },
  {
    icon: Repeat, title: "Looppanel", emoji: "🔄", color: "from-amber-500 to-yellow-700",
    description: "AI research analysis tool that records and transcribes user calls, auto-generates notes with timestamps and clusters findings into themes so researchers can go from interview to insight in minutes. Free trial available.",
    directUrl: "https://www.looppanel.com/?via=aiwebtools", imageUrl: looppanelHero,
    tags: ["Looppanel", "UX research analysis", "interview transcription", "AI notes", "thematic analysis", "research repository", "Business & Marketing"],
    category: "Business & Marketing", rating: 4.5, totalVotes: 610
  },
  {
    icon: Sparkles, title: "Insight7", emoji: "💠", color: "from-fuchsia-500 to-pink-700",
    description: "AI platform that analyzes interviews, sales calls and survey data at scale, extracting pain points, opportunities and quantified themes with supporting evidence for every claim. Free plan available.",
    directUrl: "https://insight7.io/?via=aiwebtools", imageUrl: insight7Hero,
    tags: ["Insight7", "qualitative data analysis", "interview analysis", "customer insights", "AI themes", "survey analysis", "free plan", "Data & Analytics", "Free"],
    category: "Data & Analytics", rating: 4.4, totalVotes: 520, isFree: true
  },
  {
    icon: MessageSquareQuote, title: "User Evaluation", emoji: "🗣️", color: "from-blue-500 to-violet-700",
    description: "AI customer research assistant that turns audio, video and text data into structured insight reports, highlight reels and presentation-ready summaries in minutes. Free trial available.",
    directUrl: "https://www.userevaluation.com/?via=aiwebtools", imageUrl: userEvaluationHero,
    tags: ["User Evaluation", "AI customer research", "insight reports", "highlight reels", "transcription", "qualitative analysis", "Business & Marketing"],
    category: "Business & Marketing", rating: 4.5, totalVotes: 570
  },
  {
    icon: HelpCircle, title: "Wondering", emoji: "❓", color: "from-teal-500 to-cyan-700",
    description: "AI-moderated user research platform that runs adaptive interviews at scale, asking intelligent follow-up questions in over fifty languages and synthesizing the results automatically.",
    directUrl: "https://www.wondering.com/?via=aiwebtools", imageUrl: wonderingHero,
    tags: ["Wondering", "AI moderated interviews", "user research at scale", "adaptive questions", "multilingual research", "insight synthesis", "Business & Marketing"],
    category: "Business & Marketing", rating: 4.5, totalVotes: 480
  },
  {
    icon: Headphones, title: "Genway", emoji: "🎧", color: "from-blue-600 to-indigo-800",
    description: "AI voice interviewer that conducts hundreds of qualitative research conversations simultaneously, then delivers themes, sentiment trends and verbatim evidence in one dashboard.",
    directUrl: "https://www.genway.ai/?via=aiwebtools", imageUrl: genwayHero,
    tags: ["Genway", "AI voice interviews", "qualitative research at scale", "market research AI", "sentiment analysis", "consumer insights", "Business & Marketing"],
    category: "Business & Marketing", rating: 4.4, totalVotes: 420
  },
  {
    icon: FileText, title: "Versive", emoji: "📄", color: "from-cyan-500 to-sky-700",
    description: "AI-native survey and interview platform that asks intelligent follow-ups to open-ended answers, then compresses thousands of responses into concise decision briefs. Free plan available.",
    directUrl: "https://versive.com/?via=aiwebtools", imageUrl: versiveHero,
    tags: ["Versive", "AI surveys", "open ended analysis", "decision briefs", "customer feedback", "research automation", "free plan", "Business & Marketing", "Free"],
    category: "Business & Marketing", rating: 4.4, totalVotes: 400, isFree: true
  },
  {
    icon: Flame, title: "Attention Insight", emoji: "🔥", color: "from-orange-500 to-red-700",
    description: "Pre-launch attention heatmap tool that predicts where people will look on your designs and ads with high eye-tracking accuracy, no live traffic or test panel required. Free trial available.",
    directUrl: "https://attentioninsight.com/?via=aiwebtools", imageUrl: attentionInsightHero,
    tags: ["Attention Insight", "predictive heatmap", "eye tracking AI", "design testing", "ad creative testing", "conversion optimization", "Design & Creative"],
    category: "Design & Creative", rating: 4.5, totalVotes: 690
  },
  {
    icon: Glasses, title: "VisualEyes", emoji: "🕶️", color: "from-violet-500 to-blue-700",
    description: "AI design validation tool from Neurons that simulates eye-tracking and preference tests on your mockups, scoring clarity, focus and engagement before you ship. Free trial available.",
    directUrl: "https://www.visualeyes.design/?via=aiwebtools", imageUrl: visualeyesHero,
    tags: ["VisualEyes", "AI eye tracking", "design validation", "clarity score", "attention prediction", "UX design testing", "Design & Creative"],
    category: "Design & Creative", rating: 4.4, totalVotes: 610
  },
  {
    icon: Swords, title: "Dagger", emoji: "🗡️", color: "from-green-500 to-slate-700",
    description: "Open-source programmable engine for CI/CD and AI agent workflows. Define pipelines as code in your favourite language, run them in reproducible containers anywhere, and cache every step. Free and open source.",
    directUrl: "https://dagger.io/", imageUrl: daggerHero,
    tags: ["Dagger", "open source", "free", "CI CD", "pipelines as code", "containers", "agent workflows", "DevOps", "Development & Coding", "Free"],
    category: "Development & Coding", rating: 4.6, totalVotes: 1140, isFree: true
  },
  {
    icon: Gauge, title: "Tricentis", emoji: "📊", color: "from-blue-600 to-indigo-800",
    description: "Enterprise continuous testing suite with AI-driven, risk-based test coverage for SAP, Salesforce and complex application landscapes, including model-based automation and performance testing.",
    directUrl: "https://www.tricentis.com/?via=aiwebtools", imageUrl: tricentisHero,
    tags: ["Tricentis", "continuous testing", "Tosca", "SAP testing", "risk based testing", "enterprise QA", "performance testing", "Business & Marketing"],
    category: "Development & Coding", rating: 4.5, totalVotes: 880
  },
  {
    icon: Music2, title: "Virtuoso QA", emoji: "🎻", color: "from-amber-400 to-yellow-700",
    description: "Codeless AI test automation platform where tests are authored in natural language and self-heal as the application changes, with built-in accessibility and API testing.",
    directUrl: "https://www.virtuoso.qa/?via=aiwebtools", imageUrl: virtuosoQaHero,
    tags: ["Virtuoso QA", "codeless testing", "natural language tests", "self healing automation", "accessibility testing", "API testing", "Development & Coding"],
    category: "Development & Coding", rating: 4.4, totalVotes: 470
  },
  {
    icon: MonitorSmartphone, title: "Loop11", emoji: "🔟", color: "from-orange-500 to-amber-700",
    description: "Remote usability testing platform that runs moderated and unmoderated studies on live sites and prototypes, capturing click paths, heatmaps, task success rates and session video. Free trial available.",
    directUrl: "https://www.loop11.com/?via=aiwebtools", imageUrl: loop11Hero,
    tags: ["Loop11", "remote usability testing", "unmoderated testing", "click path analysis", "heatmaps", "task success", "UX research", "Business & Marketing"],
    category: "Business & Marketing", rating: 4.4, totalVotes: 450
  },
];
