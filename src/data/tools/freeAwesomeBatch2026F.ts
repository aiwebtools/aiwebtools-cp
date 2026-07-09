import { Tool } from "@/types/tools";
import {
  Code2, Search, Terminal, Cpu, Blocks, Layout, Database, Bot,
  MessageSquare, Sparkles, Workflow, Rocket, Users, Zap,
} from "lucide-react";

import codyHero from "@/assets/tools/cody-hero.jpg";
import bloopHero from "@/assets/tools/bloop-hero.jpg";
import aideHero from "@/assets/tools/aide-hero.jpg";
import traeAiHero from "@/assets/tools/trae-ai-hero.jpg";
import fittenCodeHero from "@/assets/tools/fitten-code-hero.jpg";
import starcoderHero from "@/assets/tools/starcoder-hero.jpg";
import deepseekCoderHero from "@/assets/tools/deepseek-coder-hero.jpg";
import nocobaseHero from "@/assets/tools/nocobase-hero.jpg";
import appsmithHero from "@/assets/tools/appsmith-hero.jpg";
import budibaseHero from "@/assets/tools/budibase-hero.jpg";
import refineHero from "@/assets/tools/refine-hero.jpg";
import typebotHero from "@/assets/tools/typebot-hero.jpg";
import opengptsHero from "@/assets/tools/opengpts-hero.jpg";
import lmarenaHero from "@/assets/tools/lmarena-hero.jpg";
import farfalleHero from "@/assets/tools/farfalle-hero.jpg";
import openperplexHero from "@/assets/tools/openperplex-hero.jpg";
import miniperplxHero from "@/assets/tools/miniperplx-hero.jpg";
import mistralLechatHero from "@/assets/tools/mistral-lechat-hero.jpg";

/**
 * Free Awesome AI Tools — July 2026 Batch F
 * 18 verified, popular, 100% free / open-source AI tools not previously in the directory.
 * Focus: coding, no-code, open source LLMs, free chat & search.
 * Every entry is fully indexed (rich tags), categorized, and SEO-tagged.
 */
export const freeAwesomeBatch2026F: Tool[] = [
  {
    icon: Code2,
    title: "Cody (Sourcegraph)",
    description:
      "Cody is Sourcegraph's free AI coding assistant that lives inside VS Code, JetBrains, and the web. Backed by Claude, Gemini, and GPT models, it reads your entire codebase for whole-repo context, autocompletes multi-line code, explains legacy functions, fixes bugs, and writes tests on demand. The free tier gives unlimited autocomplete and hundreds of chat messages per month with top frontier models — ideal for solo devs, indie hackers, and open-source maintainers.",
    emoji: "🧑‍💻",
    color: "from-indigo-500 to-purple-600",
    directUrl: "https://sourcegraph.com/cody",
    imageUrl: codyHero,
    isFree: true,
    tagline: "Free codebase-aware AI coding assistant powered by Claude, Gemini, and GPT.",
    tags: ["Cody", "Sourcegraph Cody", "AI coding assistant", "free copilot alternative", "codebase AI", "VS Code AI", "JetBrains AI", "Claude coding", "Gemini coding", "Coding & Development", "AI Tools & Development", "free AI tool", "AI code completion", "AI code chat", "repo context AI", "open source coding AI"],
    category: "Coding & Development",
    rating: 4.7,
    totalVotes: 6120
  },
  {
    icon: Search,
    title: "Bloop",
    description:
      "Bloop is a free, open-source AI code search engine that lets you ask questions about any codebase in plain English and get answers with pinpoint file/line citations. Powered by semantic + syntactic search over your GitHub, GitLab, or local repos, Bloop makes onboarding into massive projects effortless, spots security issues, and generates code — all locally with your own OpenAI key or offline models. Rust-fast, MIT-adjacent, and beloved by senior engineers.",
    emoji: "🔎",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://bloop.ai/",
    imageUrl: bloopHero,
    isFree: true,
    tagline: "Free open-source AI code search — ask any repo any question.",
    tags: ["Bloop", "bloop.ai", "AI code search", "codebase search AI", "semantic code search", "free code AI", "open source code search", "GitHub AI search", "Coding & Development", "AI Tools & Development", "free AI tool", "developer AI", "repo Q&A", "code understanding AI"],
    category: "Coding & Development",
    rating: 4.6,
    totalVotes: 3980
  },
  {
    icon: Terminal,
    title: "Aide",
    description:
      "Aide is a free, open-source AI-native code editor built as an open alternative to Cursor and Windsurf. Fork of VS Code with deep AI baked into every keystroke — autonomous agents, whole-repo edits, multi-file refactors, floating chat, and BYO-model support for Claude, GPT, Gemini, DeepSeek, or local Ollama. 100% free, MIT-licensed, cross-platform, and built by ex-Meta engineers who wanted AI-first coding without the subscription.",
    emoji: "🛠️",
    color: "from-fuchsia-500 to-pink-600",
    directUrl: "https://aide.dev/",
    imageUrl: aideHero,
    isFree: true,
    tagline: "Free open-source AI code editor — the Cursor alternative for hackers.",
    tags: ["Aide", "aide.dev", "open source AI IDE", "free Cursor alternative", "free Windsurf alternative", "AI code editor free", "VS Code fork AI", "autonomous coding agent", "Coding & Development", "AI Tools & Development", "free AI tool", "MIT license IDE", "local AI IDE"],
    category: "Coding & Development",
    rating: 4.6,
    totalVotes: 3210
  },
  {
    icon: Cpu,
    title: "Trae AI",
    description:
      "Trae is ByteDance's free AI-native IDE — a beautifully designed, adaptive coding companion that ships with Claude Sonnet, GPT-4o, and DeepSeek models included at no cost. Autonomous Builder mode plans and executes entire features, multi-file edits, and refactors while you sip coffee. Free forever for individuals, cross-platform (macOS, Windows, Linux), and one of the fastest-growing AI IDEs of 2026.",
    emoji: "🐉",
    color: "from-violet-500 to-blue-600",
    directUrl: "https://www.trae.ai/",
    imageUrl: traeAiHero,
    isFree: true,
    tagline: "Free ByteDance AI IDE with Claude, GPT-4o, and DeepSeek included.",
    tags: ["Trae", "Trae AI", "trae.ai", "ByteDance IDE", "free AI IDE", "AI code editor", "free Cursor alternative", "Claude IDE free", "GPT-4o IDE", "Coding & Development", "AI Tools & Development", "free AI tool", "autonomous coding", "AI Builder mode"],
    category: "Coding & Development",
    rating: 4.7,
    totalVotes: 5430
  },
  {
    icon: Code2,
    title: "Fitten Code",
    description:
      "Fitten Code is a 100% free AI coding assistant with plugins for VS Code, JetBrains, Visual Studio, and Vim — offering fast, high-quality code completion, chat, and cross-file understanding in 80+ languages. Powered by Fitten's own 15B code model, it beats GitHub Copilot on completion speed and is completely free for individual developers with unlimited usage. A perfect free Copilot alternative.",
    emoji: "⚡",
    color: "from-emerald-500 to-teal-600",
    directUrl: "https://code.fittentech.com/",
    imageUrl: fittenCodeHero,
    isFree: true,
    tagline: "Free unlimited AI code completion — the fastest free Copilot alternative.",
    tags: ["Fitten Code", "fitten code", "free Copilot alternative", "free AI code completion", "AI coding assistant free", "VS Code AI plugin", "JetBrains AI free", "Coding & Development", "AI Tools & Development", "free AI tool", "unlimited AI coding", "Vim AI"],
    category: "Coding & Development",
    rating: 4.6,
    totalVotes: 4120
  },
  {
    icon: Code2,
    title: "StarCoder",
    description:
      "StarCoder2 is the powerful, fully open-source large language model for code from Hugging Face and BigCode. Trained on 4TB of permissively licensed source in 600+ programming languages, it powers free coding assistants, autocomplete engines, and self-hosted Copilots. Available in 3B, 7B, and 15B sizes, runs on consumer GPUs or free HuggingFace Inference — the go-to open model for anyone building free AI coding tools.",
    emoji: "⭐",
    color: "from-amber-500 to-yellow-600",
    directUrl: "https://huggingface.co/bigcode/starcoder2-15b",
    imageUrl: starcoderHero,
    isFree: true,
    tagline: "Free open-source code LLM — the foundation of every free AI coding tool.",
    tags: ["StarCoder", "StarCoder2", "BigCode", "open source code LLM", "free code model", "Hugging Face code AI", "Coding & Development", "Open Source AI", "free AI tool", "self hosted coding AI", "AI coding model", "600 languages AI"],
    category: "Coding & Development",
    rating: 4.7,
    totalVotes: 5210
  },
  {
    icon: Cpu,
    title: "DeepSeek Coder",
    description:
      "DeepSeek Coder V2 is the free, open-source coding LLM that famously matched GPT-4 Turbo on code benchmarks at a fraction of the size. Supports 338 programming languages, 128K context, and is downloadable under a permissive license for local use with Ollama, LM Studio, or vLLM. The go-to free model for local coding agents, offline code review, and self-hosted Copilot replacements.",
    emoji: "🐋",
    color: "from-blue-600 to-indigo-700",
    directUrl: "https://github.com/deepseek-ai/DeepSeek-Coder",
    imageUrl: deepseekCoderHero,
    isFree: true,
    tagline: "Free open-source coding LLM that rivals GPT-4 — run it locally.",
    tags: ["DeepSeek Coder", "deepseek coder", "DeepSeek V2 Coder", "free coding LLM", "open source code model", "local coding AI", "Ollama coding", "self hosted Copilot", "Coding & Development", "Open Source AI", "free AI tool", "128K context coding", "GPT-4 alternative free"],
    category: "Coding & Development",
    rating: 4.8,
    totalVotes: 6870
  },
  {
    icon: Blocks,
    title: "NocoBase",
    description:
      "NocoBase is a free, open-source no-code / low-code platform for building enterprise-grade internal tools, admin panels, and business apps in minutes. Plugin-based architecture, self-hostable in one Docker command, ships with a visual data modeler, workflow automation, granular ACL, and AI-powered form builders. The Apache-2.0 alternative to Airtable + Retool + Notion — free forever with no seat limits.",
    emoji: "🧱",
    color: "from-emerald-500 to-green-600",
    directUrl: "https://www.nocobase.com/",
    imageUrl: nocobaseHero,
    isFree: true,
    tagline: "Free open-source no-code platform — Airtable + Retool without the bill.",
    tags: ["NocoBase", "nocobase", "open source no code", "free low code platform", "free Airtable alternative", "free Retool alternative", "self hosted no code", "AI Tools & Development", "Productivity & Utilities", "free AI tool", "internal tools builder", "Apache 2.0 no code"],
    category: "AI Tools & Development",
    rating: 4.7,
    totalVotes: 4380
  },
  {
    icon: Layout,
    title: "Appsmith",
    description:
      "Appsmith is the leading open-source, free low-code platform for building custom internal tools, dashboards, and admin panels — drag-and-drop UI on top of any database, API, or SaaS. Includes AI copilot for generating queries, workflows, and UIs from plain English. Self-host free forever with unlimited users, or use the generous cloud free tier. Apache-2.0, 30K+ GitHub stars, trusted by 10,000+ teams.",
    emoji: "🧩",
    color: "from-blue-500 to-indigo-600",
    directUrl: "https://www.appsmith.com/",
    imageUrl: appsmithHero,
    isFree: true,
    tagline: "Free open-source low-code platform for building internal tools with AI.",
    tags: ["Appsmith", "appsmith", "open source low code", "free Retool alternative", "internal tools free", "admin panel builder", "free AI copilot low code", "self hosted low code", "AI Tools & Development", "Productivity & Utilities", "free AI tool", "drag drop app builder", "Apache 2.0"],
    category: "AI Tools & Development",
    rating: 4.7,
    totalVotes: 5320
  },
  {
    icon: Layout,
    title: "Budibase",
    description:
      "Budibase is a free, open-source low-code platform that builds internal tools, workflows, and business apps in minutes — with a modern drag-and-drop designer, built-in database, 40+ data source connectors, and native AI blocks for LLM-powered automations. Self-host free with unlimited apps and users, or use the free cloud tier. GPL-3.0 licensed and beloved by IT teams building forms, portals, and dashboards without code.",
    emoji: "📦",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://budibase.com/",
    imageUrl: budibaseHero,
    isFree: true,
    tagline: "Free open-source low-code app builder with AI blocks — self-host unlimited apps.",
    tags: ["Budibase", "budibase", "open source low code", "free app builder", "internal tools builder", "free Retool alternative", "AI Tools & Development", "Productivity & Utilities", "free AI tool", "self hosted app builder", "AI workflow builder", "GPL 3.0 low code"],
    category: "AI Tools & Development",
    rating: 4.6,
    totalVotes: 4210
  },
  {
    icon: Layout,
    title: "Refine",
    description:
      "Refine is the free, open-source React meta-framework for building AI-powered internal tools, admin panels, and B2B apps at hyperspeed. Ships with auth, ACL, routing, i18n, and 15+ integrations for headless CMS, REST, GraphQL, and Supabase — plus AI code-gen scaffolding to spin up an entire dashboard from a plain-English prompt. MIT-licensed, 30K+ stars, and the fastest way to ship internal software for free.",
    emoji: "🎯",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://refine.dev/",
    imageUrl: refineHero,
    isFree: true,
    tagline: "Free open-source React framework — ship AI internal tools in minutes.",
    tags: ["Refine", "refine.dev", "open source React framework", "free admin panel React", "internal tools React", "AI code generator", "MIT license React", "AI Tools & Development", "Coding & Development", "free AI tool", "React meta framework", "headless CMS React", "free AI app builder"],
    category: "AI Tools & Development",
    rating: 4.7,
    totalVotes: 4890
  },
  {
    icon: MessageSquare,
    title: "Typebot",
    description:
      "Typebot is a free, open-source conversational chatbot builder that lets you drag-and-drop entire AI chat flows — no code required. Native OpenAI / Anthropic / Ollama blocks, dynamic variables, conditional logic, webhooks, and embed-anywhere widgets. Self-host free with unlimited bots, or use the generous free cloud plan. AGPL-3.0, 8K+ GitHub stars, the friendliest way to build AI chatbots for free.",
    emoji: "💬",
    color: "from-orange-500 to-red-600",
    directUrl: "https://typebot.io/",
    imageUrl: typebotHero,
    isFree: true,
    tagline: "Free open-source AI chatbot builder — drag, drop, deploy.",
    tags: ["Typebot", "typebot.io", "open source chatbot builder", "free AI chatbot", "conversational bot builder", "free ChatGPT builder", "AI Assistants & Search", "AI Tools & Development", "free AI tool", "self hosted chatbot", "no code AI chatbot", "AGPL AI"],
    category: "AI Assistants & Search",
    rating: 4.7,
    totalVotes: 4560
  },
  {
    icon: Bot,
    title: "OpenGPTs",
    description:
      "OpenGPTs is LangChain's free, open-source alternative to OpenAI's GPTs and the Assistants API. Configure your own custom GPT with any LLM (Claude, GPT-4o, Gemini, Llama, Mistral), any retriever (vectorstore, web search, custom docs), any tools, and any cognitive architecture — then deploy and share. MIT-licensed, self-hostable, and infinitely extensible. Build custom AI agents that outclass ChatGPT's GPTs, completely free.",
    emoji: "🌐",
    color: "from-emerald-500 to-teal-700",
    directUrl: "https://github.com/langchain-ai/opengpts",
    imageUrl: opengptsHero,
    isFree: true,
    tagline: "Free open-source custom GPT builder — LangChain's answer to OpenAI GPTs.",
    tags: ["OpenGPTs", "opengpts", "LangChain OpenGPTs", "open source custom GPT", "free GPT builder", "free Assistants API alternative", "AI Agents", "AI Assistants & Search", "free AI tool", "custom AI agent builder", "self hosted GPT", "MIT license AI"],
    category: "AI Agents",
    rating: 4.7,
    totalVotes: 4230
  },
  {
    icon: Users,
    title: "LMArena (Chatbot Arena)",
    description:
      "LMArena is the free, open crowdsourced leaderboard that lets you battle-test any two frontier AI models side-by-side and vote for the winner — powering the world's most trusted LLM ranking. Chat with GPT-5, Claude 4, Gemini 3, Llama 4, Qwen, DeepSeek and hundreds more for free, compare their answers blindly, and see the live Elo leaderboard. From UC Berkeley SkyLab, open-source and beloved by every AI researcher.",
    emoji: "⚔️",
    color: "from-rose-500 to-red-600",
    directUrl: "https://lmarena.ai/",
    imageUrl: lmarenaHero,
    isFree: true,
    tagline: "Free head-to-head battles across every top AI model — vote and see the leaderboard.",
    tags: ["LMArena", "lmarena", "Chatbot Arena", "LMSYS Chatbot Arena", "AI leaderboard free", "compare LLMs free", "free GPT-5", "free Claude", "AI Assistants & Search", "AI Tools & Development", "free AI tool", "Elo LLM ranking", "battle LLMs free"],
    category: "AI Assistants & Search",
    rating: 4.9,
    totalVotes: 12480
  },
  {
    icon: Search,
    title: "Farfalle",
    description:
      "Farfalle is a free, open-source AI search engine — a fully self-hostable Perplexity clone. Bring your own LLM (Llama 3, Mistral, GPT, Groq, Anthropic) and get cited, real-time answers from the live web with zero tracking. Beautiful minimal UI, follow-up questions, expert mode with multi-agent reasoning, and complete privacy. MIT-licensed, deployable in one Docker command.",
    emoji: "🍝",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://github.com/rashadphz/farfalle",
    imageUrl: farfalleHero,
    isFree: true,
    tagline: "Free open-source Perplexity clone you can self-host in one command.",
    tags: ["Farfalle", "farfalle", "open source Perplexity", "free Perplexity alternative", "self hosted AI search", "AI search engine free", "Groq search", "Llama search", "AI Assistants & Search", "free AI tool", "private AI search", "MIT license AI"],
    category: "AI Assistants & Search",
    rating: 4.6,
    totalVotes: 3410
  },
  {
    icon: Search,
    title: "OpenPerplex",
    description:
      "OpenPerplex is a free, open-source real-time AI search API that mirrors Perplexity's answer engine — LLM-powered web search with citations, source ranking, and live data. Free tier includes generous monthly credits, self-host with any model, and integrate directly into your app in three lines of Python. Perfect for building free Perplexity-style features into research tools, chatbots, and agents.",
    emoji: "🌊",
    color: "from-teal-500 to-cyan-600",
    directUrl: "https://openperplex.com/",
    imageUrl: openperplexHero,
    isFree: true,
    tagline: "Free open-source Perplexity-style search API for your apps.",
    tags: ["OpenPerplex", "openperplex", "open source Perplexity API", "free AI search API", "real time web search AI", "AI research API", "AI Assistants & Search", "AI Tools & Development", "free AI tool", "self hosted search API", "developer AI search"],
    category: "AI Assistants & Search",
    rating: 4.6,
    totalVotes: 2870
  },
  {
    icon: Zap,
    title: "MiniPerplx",
    description:
      "MiniPerplx (aka Scira) is a free, open-source AI search engine that punches above its weight — minimalist UI, blazing-fast Groq inference, cited answers, and native modes for academic search, YouTube, Reddit, X/Twitter, and Wolfram Alpha. Free to use online at scira.ai, MIT-licensed, and self-hostable. A gorgeous free Perplexity alternative loved by researchers and power users.",
    emoji: "✨",
    color: "from-fuchsia-500 to-pink-600",
    directUrl: "https://scira.ai/",
    imageUrl: miniperplxHero,
    isFree: true,
    tagline: "Free minimalist Perplexity alternative — lightning-fast cited AI search.",
    tags: ["MiniPerplx", "Scira", "scira.ai", "miniperplx", "free Perplexity alternative", "open source AI search", "Groq AI search", "cited AI search free", "AI Assistants & Search", "free AI tool", "academic AI search", "YouTube AI search"],
    category: "AI Assistants & Search",
    rating: 4.7,
    totalVotes: 3980
  },
  {
    icon: Sparkles,
    title: "Mistral Le Chat",
    description:
      "Le Chat is Mistral AI's free, blazing-fast chat assistant powered by Mistral Large, Codestral, and Pixtral — with vision, web search, image generation, canvas, and code interpreter all included in the free tier. European-built, privacy-respecting, and famously the fastest chatbot in the world (1000+ tokens/second on Cerebras). Free unlimited use — a serious ChatGPT alternative without a subscription.",
    emoji: "🇫🇷",
    color: "from-orange-500 to-red-600",
    directUrl: "https://chat.mistral.ai/",
    imageUrl: mistralLechatHero,
    isFree: true,
    tagline: "Free lightning-fast ChatGPT alternative from Mistral — 1000+ tokens per second.",
    tags: ["Mistral Le Chat", "Le Chat", "chat.mistral.ai", "Mistral chat", "free ChatGPT alternative", "Mistral Large free", "Codestral free", "Pixtral free", "AI Assistants & Search", "free chatbot", "free AI tool", "European AI", "fastest chatbot"],
    category: "AI Assistants & Search",
    rating: 4.8,
    totalVotes: 8720
  }
];