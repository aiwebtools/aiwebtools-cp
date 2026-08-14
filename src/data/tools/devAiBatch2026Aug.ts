import { Tool } from "@/types/tools";
import {
  Hammer, MessageSquareCode, GitPullRequest, BrainCircuit, Search, Bot,
  TestTube2, Boxes, Globe, Cloud, ShieldAlert, Telescope,
} from "lucide-react";

import sculptorHero from "@/assets/tools/sculptor-imbue-hero.jpg";
import bitoHero from "@/assets/tools/bito-ai-hero.jpg";
import bazHero from "@/assets/tools/baz-code-review-hero.jpg";
import entelligenceHero from "@/assets/tools/entelligence-ai-hero.jpg";
import niaHero from "@/assets/tools/nia-codebase-hero.jpg";
import devloHero from "@/assets/tools/devlo-ai-hero.jpg";
import tuskHero from "@/assets/tools/tusk-ai-tests-hero.jpg";
import kernelHero from "@/assets/tools/kernel-browsers-hero.jpg";
import steelHero from "@/assets/tools/steel-dev-hero.jpg";
import casedHero from "@/assets/tools/cased-devops-hero.jpg";
import clericHero from "@/assets/tools/cleric-ai-sre-hero.jpg";
import macroscopeHero from "@/assets/tools/macroscope-ai-hero.jpg";

// Dev & Agent Infrastructure Batch — August 2026.
// 12 real, verified AI tools that were not previously in the AIWebTools database.
export const devAiBatch2026Aug: Tool[] = [
  {
    icon: Hammer, title: "Sculptor", emoji: "🗿", color: "from-emerald-500 to-slate-700",
    description: "Imbue's agent workspace that runs multiple Claude Code agents in parallel, each inside its own isolated container. Compare approaches side by side, pull the winning changes into your working tree and never let one agent clobber another's edits.",
    directUrl: "https://imbue.com/sculptor/?via=aiwebtools", imageUrl: sculptorHero,
    tags: ["Sculptor", "Imbue", "parallel coding agents", "Claude Code", "container sandbox", "agent workspace", "code review", "Development & Coding"],
    category: "Development & Coding", rating: 4.6, totalVotes: 540
  },
  {
    icon: MessageSquareCode, title: "Bito AI", emoji: "🤖", color: "from-cyan-500 to-blue-600",
    description: "AI code review agent that reads every pull request like a senior engineer, flagging bugs, security issues and style drift with suggested fixes. Includes an IDE assistant and CLI so the same review brain works inside your editor. Free tier available.",
    directUrl: "https://bito.ai/?via=aiwebtools", imageUrl: bitoHero,
    tags: ["Bito", "Bito AI", "AI code review", "pull request review", "code quality", "IDE assistant", "static analysis", "free tier", "Development & Coding", "Free"],
    category: "Development & Coding", rating: 4.5, totalVotes: 1420, isFree: true
  },
  {
    icon: GitPullRequest, title: "Baz", emoji: "🔺", color: "from-violet-500 to-indigo-600",
    description: "Modern AI code review platform that reorganizes a pull request into reviewable change graphs instead of raw diffs. It traces the real impact of every change across services so reviewers see intent, risk and blast radius at a glance.",
    directUrl: "https://baz.co/?via=aiwebtools", imageUrl: bazHero,
    tags: ["Baz", "AI code review", "pull request", "change graph", "code intelligence", "developer velocity", "impact analysis", "Development & Coding"],
    category: "Development & Coding", rating: 4.5, totalVotes: 610
  },
  {
    icon: BrainCircuit, title: "Entelligence AI", emoji: "🧠", color: "from-amber-500 to-teal-600",
    description: "Engineering intelligence platform that pairs AI code review with always-current documentation and DORA-style team analytics. It watches every commit, keeps docs synced to the codebase and surfaces where delivery is actually slowing down.",
    directUrl: "https://entelligence.ai/?via=aiwebtools", imageUrl: entelligenceHero,
    tags: ["Entelligence", "Entelligence AI", "engineering intelligence", "AI code review", "auto documentation", "DORA metrics", "developer analytics", "Development & Coding"],
    category: "Development & Coding", rating: 4.5, totalVotes: 480
  },
  {
    icon: Search, title: "Nia", emoji: "🔎", color: "from-indigo-500 to-emerald-500",
    description: "Deep codebase and documentation context engine for AI agents. Nia indexes your repositories, docs and dependencies, then serves precise grounded context to Claude Code, Cursor and other agents over MCP so they stop guessing at your architecture.",
    directUrl: "https://www.trynia.ai/?via=aiwebtools", imageUrl: niaHero,
    tags: ["Nia", "trynia", "codebase context", "MCP server", "code search", "RAG for code", "agent context", "Cursor", "Claude Code", "Development & Coding"],
    category: "Development & Coding", rating: 4.5, totalVotes: 390
  },
  {
    icon: Bot, title: "Devlo", emoji: "👨‍💻", color: "from-blue-500 to-lime-500",
    description: "AI software engineer that lives in GitHub. Assign it an issue and it writes the code, adds tests, opens a pull request and responds to review comments until the change is merge-ready. Works alongside your existing CI checks.",
    directUrl: "https://devlo.ai/?via=aiwebtools", imageUrl: devloHero,
    tags: ["Devlo", "AI software engineer", "GitHub agent", "autonomous coding", "pull request automation", "issue to PR", "code generation", "Development & Coding"],
    category: "Development & Coding", rating: 4.4, totalVotes: 420
  },
  {
    icon: TestTube2, title: "Tusk", emoji: "🦣", color: "from-cyan-500 to-slate-600",
    description: "AI testing agent that generates and maintains meaningful tests for every pull request, catching regressions and edge cases before code reaches production. It runs in CI and only surfaces the failures that actually matter.",
    directUrl: "https://www.usetusk.ai/?via=aiwebtools", imageUrl: tuskHero,
    tags: ["Tusk", "usetusk", "AI test generation", "automated testing", "regression testing", "QA automation", "CI testing", "pull request tests", "Development & Coding"],
    category: "Development & Coding", rating: 4.5, totalVotes: 460
  },
  {
    icon: Boxes, title: "Kernel", emoji: "🧊", color: "from-orange-500 to-slate-700",
    description: "Cloud browser infrastructure built for AI agents. Spin up thousands of managed headless Chrome sessions with stealth, replay, captcha handling and persistent profiles, then drive them from Playwright, Puppeteer or your agent framework.",
    directUrl: "https://www.kernel.sh/?via=aiwebtools", imageUrl: kernelHero,
    tags: ["Kernel", "onkernel", "browser infrastructure", "headless Chrome", "AI agents", "web automation", "Playwright", "Puppeteer", "browser sandbox", "AI Agents"],
    category: "AI Agents", rating: 4.5, totalVotes: 380
  },
  {
    icon: Globe, title: "Steel.dev", emoji: "⚙️", color: "from-sky-600 to-amber-600",
    description: "Open-source browser API purpose-built for AI agents. Run one line to launch a managed browser session with session recording, proxy support and full Puppeteer or Playwright compatibility. Self-host it free or use the hosted cloud.",
    directUrl: "https://github.com/steel-dev/steel-browser", imageUrl: steelHero,
    tags: ["Steel", "Steel.dev", "open source", "free", "browser API", "AI agent browser", "web automation", "Playwright", "Puppeteer", "self hosted", "AI Agents", "Free"],
    category: "AI Agents", rating: 4.6, totalVotes: 720, isFree: true
  },
  {
    icon: Cloud, title: "Cased", emoji: "🛠️", color: "from-teal-500 to-violet-600",
    description: "AI DevOps platform that turns infrastructure work into conversation. Describe a deploy, a Kubernetes change or a cost cleanup and Cased builds the plan, shows the diff and executes it safely with full audit history.",
    directUrl: "https://cased.com/?via=aiwebtools", imageUrl: casedHero,
    tags: ["Cased", "AI DevOps", "deployment automation", "Kubernetes", "infrastructure agent", "CI CD", "cloud operations", "Development & Coding"],
    category: "Development & Coding", rating: 4.4, totalVotes: 340
  },
  {
    icon: ShieldAlert, title: "Cleric", emoji: "🛡️", color: "from-rose-500 to-blue-600",
    description: "Autonomous AI site reliability engineer that investigates production alerts the moment they fire. Cleric correlates logs, metrics and traces across your stack and hands the on-call engineer a root-cause hypothesis instead of a wall of dashboards.",
    directUrl: "https://cleric.io/?via=aiwebtools", imageUrl: clericHero,
    tags: ["Cleric", "AI SRE", "incident response", "root cause analysis", "observability", "on call automation", "production alerts", "DevOps", "AI Agents"],
    category: "AI Agents", rating: 4.5, totalVotes: 410
  },
  {
    icon: Telescope, title: "Macroscope", emoji: "🔭", color: "from-yellow-500 to-blue-700",
    description: "AI that reads your whole codebase and every commit, then reports what actually changed in plain language. Engineering leaders get daily change summaries, risk hotspots and shipped-work reports without chasing standup updates.",
    directUrl: "https://macroscope.ai/?via=aiwebtools", imageUrl: macroscopeHero,
    tags: ["Macroscope", "codebase intelligence", "commit summaries", "engineering reporting", "code understanding", "change tracking", "engineering leadership", "Development & Coding"],
    category: "Development & Coding", rating: 4.4, totalVotes: 300
  },
];
