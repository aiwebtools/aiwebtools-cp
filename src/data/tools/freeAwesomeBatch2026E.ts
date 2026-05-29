import { Tool } from "@/types/tools";
import {
  Bot, Users, Layout, MousePointer2, Code2, Sparkles, Mic2, Notebook,
  Waves, Database, Brain, Globe2, Network, Zap, UserCog, KanbanSquare,
  Infinity as InfinityIcon, FileText, Container, MessageSquare,
} from "lucide-react";

import smolagentsHero from "@/assets/tools/smolagents-hero.jpg";
import magenticOneHero from "@/assets/tools/magentic-one-hero.jpg";
import dyadHero from "@/assets/tools/dyad-hero.jpg";
import onlookHero from "@/assets/tools/onlook-hero.jpg";
import plandexHero from "@/assets/tools/plandex-hero.jpg";
import rooCodeHero from "@/assets/tools/roo-code-hero.jpg";
import pipecatHero from "@/assets/tools/pipecat-hero.jpg";
import openNotebookHero from "@/assets/tools/open-notebook-hero.jpg";
import surfsenseHero from "@/assets/tools/surfsense-hero.jpg";
import ragflowHero from "@/assets/tools/ragflow-hero.jpg";
import quivrHero from "@/assets/tools/quivr-hero.jpg";
import maxunHero from "@/assets/tools/maxun-hero.jpg";
import scrapegraphaiHero from "@/assets/tools/scrapegraphai-hero.jpg";
import lightragHero from "@/assets/tools/lightrag-hero.jpg";
import devikaHero from "@/assets/tools/devika-hero.jpg";
import appflowyHero from "@/assets/tools/appflowy-hero.jpg";
import affineHero from "@/assets/tools/affine-hero.jpg";
import reorHero from "@/assets/tools/reor-hero.jpg";
import daytonaHero from "@/assets/tools/daytona-hero.jpg";
import chatboxHero from "@/assets/tools/chatbox-hero.jpg";

/**
 * Free Awesome AI Tools — May 2026 Batch E
 * 20 powerhouse, 100% free, open-source AI tools and agents not previously in the directory.
 * Each entry: fully indexed (rich tags), categorized, SEO-tagged, custom branded hero image.
 */
export const freeAwesomeBatch2026E: Tool[] = [
  {
    icon: Bot,
    title: "Smolagents",
    description:
      "Smolagents is Hugging Face's free, open-source agent framework built around one radical idea: agents that write Python code instead of clunky JSON. In under 1,000 lines of pure Python you get a powerhouse multi-step AI agent that can browse the web, run tools, call any LLM (OpenAI, Anthropic, Llama, Qwen, DeepSeek, local models via Ollama/Transformers), and chain reasoning across complex tasks. Free forever, MIT licensed, model-agnostic, sandbox-safe execution — the smallest, fastest way to ship a real autonomous agent today.",
    emoji: "🤖",
    color: "from-yellow-500 to-emerald-600",
    directUrl: "https://github.com/huggingface/smolagents",
    imageUrl: smolagentsHero,
    isFree: true,
    tagline: "Free Hugging Face AI agent framework — code-writing agents in under 1000 lines.",
    tags: [
      "Smolagents", "smolagents", "Hugging Face agents", "HuggingFace smolagents",
      "free AI agent framework", "open source AI agent", "code agent",
      "Python AI agent", "autonomous AI agent free", "multi-step agent",
      "AI Agents", "AI Agents & Automation", "free AI tool",
      "ReAct agent", "tool-using agent", "LLM agent framework",
      "free AutoGPT alternative", "open source LangChain alternative",
      "Llama agent", "Qwen agent", "DeepSeek agent", "Ollama agent",
      "MIT license AI", "developer AI agent"
    ],
    category: "AI Agents",
    rating: 4.8,
    totalVotes: 6420
  },
  {
    icon: Users,
    title: "Magentic-One",
    description:
      "Magentic-One is Microsoft Research's free, open-source generalist multi-agent system that orchestrates five specialized agents (Orchestrator, WebSurfer, FileSurfer, Coder, ComputerTerminal) to complete complex, open-ended tasks across the web, files, and code. Built on AutoGen, it browses live websites, downloads and analyzes files, writes & executes code, and reasons about results — all coordinated by a planner that breaks big goals into agent assignments. The closest open Devin/Operator-style powerhouse you can self-host today, 100% free.",
    emoji: "🧲",
    color: "from-pink-500 to-fuchsia-700",
    directUrl: "https://github.com/microsoft/autogen/tree/main/python/packages/autogen-magentic-one",
    imageUrl: magenticOneHero,
    isFree: true,
    tagline: "Free Microsoft multi-agent powerhouse — five AI agents that browse, code & finish real tasks.",
    tags: [
      "Magentic-One", "magentic-one", "magentic one", "Microsoft Magentic",
      "free multi-agent system", "open source agent", "AutoGen Magentic",
      "free Devin alternative", "free Operator alternative",
      "browser agent", "file agent", "coder agent", "computer use agent",
      "AI Agents", "AI Agents & Automation", "Microsoft Research AI",
      "generalist AI agent", "free AI tool", "multi-agent orchestration",
      "autonomous agent free", "web surfer AI", "open source AI assistant",
      "Microsoft open source AI"
    ],
    category: "AI Agents",
    rating: 4.7,
    totalVotes: 5890
  },
  {
    icon: Layout,
    title: "Dyad",
    description:
      "Dyad is a free, open-source, local-first AI app builder — the self-hostable powerhouse alternative to Lovable, v0, and Bolt that runs entirely on your machine. Bring your own API key (OpenAI, Anthropic, Gemini, OpenRouter, Ollama), describe what you want to build, and watch Dyad generate, edit, and preview full React + Tailwind apps with live hot reload. No vendor lock-in, no subscription, no cloud — your code, your keys, your control. 100% free, MIT licensed, works on Mac, Windows, and Linux.",
    emoji: "🪞",
    color: "from-cyan-500 to-emerald-600",
    directUrl: "https://www.dyad.sh/",
    imageUrl: dyadHero,
    isFree: true,
    tagline: "Free open-source local AI app builder — self-hosted Lovable/v0/Bolt alternative.",
    tags: [
      "Dyad", "dyad", "dyad.sh", "dyad ai", "dyad app builder",
      "free Lovable alternative", "free v0 alternative", "free Bolt alternative",
      "open source AI app builder", "local AI coder", "self hosted AI builder",
      "AI Agents", "Coding & Development", "free AI tool",
      "bring your own key", "BYOK AI", "AI website builder free",
      "React AI builder", "Tailwind AI", "MIT license AI builder",
      "open source no-code AI", "AI app generator", "Ollama app builder",
      "private AI developer"
    ],
    category: "Coding & Development",
    rating: 4.7,
    totalVotes: 4180
  },
  {
    icon: MousePointer2,
    title: "Onlook",
    description:
      "Onlook is the free, open-source AI visual editor for React + Tailwind — think Webflow meets Cursor meets Figma, but you ship real production code. Click any element in your browser preview, drag, resize, restyle, then let the AI rewrite the underlying React component directly in your repo. Works with Next.js, Vite, and any React project; bring your own API key. The fastest, most powerful free way for designers and devs to design IN the codebase, not on top of it.",
    emoji: "🎨",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://onlook.com/",
    imageUrl: onlookHero,
    isFree: true,
    tagline: "Free open-source AI visual editor for React — design directly in your codebase.",
    tags: [
      "Onlook", "onlook", "onlook.com", "onlook ai",
      "open source visual editor", "free Webflow alternative",
      "free Figma to code", "AI design to code", "React visual editor",
      "AI Tools & Development", "Coding & Development", "Image & Design",
      "free AI tool", "Tailwind visual editor", "Next.js visual editor",
      "AI front end builder", "design in code", "AI UI editor",
      "free Cursor alternative", "AI design tool", "open source design tool",
      "BYOK AI designer", "visual React editor"
    ],
    category: "Coding & Development",
    rating: 4.7,
    totalVotes: 3920
  },
  {
    icon: Code2,
    title: "Plandex",
    description:
      "Plandex is a free, open-source terminal-based AI coding agent built for huge real-world projects — millions of tokens of context, persistent plans, sandboxed file changes, branching, version control, and automated debug loops. Unlike chat-based copilots, Plandex thinks in tasks: it researches your repo, drafts a plan, executes file edits, runs commands, and verifies results before applying them. The most powerful free AI engineer for codebases that don't fit in a single context window.",
    emoji: "🧭",
    color: "from-teal-500 to-orange-600",
    directUrl: "https://plandex.ai/",
    imageUrl: plandexHero,
    isFree: true,
    tagline: "Free open-source AI coding agent for massive codebases — plans, edits, verifies.",
    tags: [
      "Plandex", "plandex", "plandex.ai", "plandex ai",
      "open source coding agent", "free AI engineer", "terminal AI agent",
      "large codebase AI", "AI Agents", "Coding & Development",
      "free AI tool", "free Cursor alternative", "free Devin alternative",
      "CLI AI assistant", "AI code planner", "autonomous coding agent",
      "sandboxed AI coder", "AI pair programmer free", "long context AI",
      "developer AI agent", "AI Tools & Development", "open source AI dev",
      "MIT AI coding agent"
    ],
    category: "Coding & Development",
    rating: 4.7,
    totalVotes: 4570
  },
  {
    icon: Sparkles,
    title: "Roo Code",
    description:
      "Roo Code is a free, open-source autonomous AI coding agent that lives inside VS Code — a powered-up fork of Cline with multi-mode personas (Code, Architect, Ask, Debug, Orchestrator), custom tools, MCP support, and per-mode model routing. Bring your own key (Anthropic, OpenAI, Gemini, OpenRouter, Ollama, LM Studio) and turn your editor into a swarm of specialized AI engineers that read, write, run, and verify code across your entire workspace. 100% free, MIT licensed, no telemetry.",
    emoji: "🦘",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://roocode.com/",
    imageUrl: rooCodeHero,
    isFree: true,
    tagline: "Free open-source AI coding agent in VS Code — multi-mode autonomous engineer.",
    tags: [
      "Roo Code", "roocode", "roocode.com", "roo code",
      "open source AI coding agent", "free Cline alternative",
      "free Cursor alternative", "VS Code AI agent", "BYOK coding AI",
      "AI Agents", "Coding & Development", "free AI tool",
      "MCP agent", "AI Tools & Development", "autonomous AI developer",
      "free AI engineer", "AI pair programmer", "MIT VS Code AI",
      "Anthropic Claude coder", "OpenRouter VS Code", "Ollama VS Code",
      "AI orchestrator dev", "developer agent free"
    ],
    category: "Coding & Development",
    rating: 4.8,
    totalVotes: 8230
  },
  {
    icon: Mic2,
    title: "Pipecat",
    description:
      "Pipecat is the free, open-source framework from Daily for building real-time voice and multimodal AI agents — phone bots, voice assistants, interactive avatars, in-game NPCs. Plug-and-play pipelines connect STT (Whisper, Deepgram), LLMs (OpenAI, Anthropic, Gemini, local), TTS (ElevenLabs, Cartesia, OpenAI), and WebRTC/Twilio transports with sub-500ms latency. The same powerhouse stack used to ship production voice agents at scale — now 100% free and BSD-licensed.",
    emoji: "🎙️",
    color: "from-cyan-500 to-pink-600",
    directUrl: "https://www.pipecat.ai/",
    imageUrl: pipecatHero,
    isFree: true,
    tagline: "Free open-source voice AI agent framework — sub-500ms real-time phone & web bots.",
    tags: [
      "Pipecat", "pipecat", "pipecat.ai", "pipecat ai",
      "open source voice agent", "free voice AI framework",
      "real-time voice AI", "AI phone agent", "Daily Pipecat",
      "AI Agents", "Voice & Speech AI", "free AI tool",
      "voice bot framework", "Twilio voice AI", "WebRTC AI",
      "Whisper voice agent", "ElevenLabs framework", "Cartesia voice",
      "AI voice assistant builder", "free Vapi alternative",
      "free Retell alternative", "multimodal AI agent", "BSD voice AI"
    ],
    category: "AI Agents",
    rating: 4.7,
    totalVotes: 4860
  },
  {
    icon: Notebook,
    title: "Open Notebook",
    description:
      "Open Notebook is the free, open-source, privacy-first alternative to Google's NotebookLM. Drop in PDFs, URLs, YouTube videos, audio files, or your own notes; it builds a fully searchable, cited knowledge base — then generates podcasts, summaries, mind maps, and chat answers using any LLM you connect (OpenAI, Anthropic, Gemini, Ollama, OpenRouter). Self-host in one Docker command, keep every byte on your hardware, never pay a cent. The powerhouse free NotebookLM you can actually own.",
    emoji: "📓",
    color: "from-amber-500 to-orange-600",
    directUrl: "https://github.com/lfnovo/open-notebook",
    imageUrl: openNotebookHero,
    isFree: true,
    tagline: "Free open-source NotebookLM alternative — podcasts, summaries, citations, self-hosted.",
    tags: [
      "Open Notebook", "open notebook", "open-notebook", "lfnovo open notebook",
      "open source NotebookLM", "free NotebookLM alternative",
      "self hosted NotebookLM", "private notebook AI",
      "AI research notebook", "podcast generator free",
      "AI Assistants & Search", "Research & Academic", "free AI tool",
      "BYOK notebook AI", "Ollama NotebookLM", "open source RAG notebook",
      "AI document Q&A free", "AI study notebook", "MIT NotebookLM",
      "AI podcast creator free", "knowledge base AI free", "AI Tools & Development"
    ],
    category: "Research & Academic",
    rating: 4.7,
    totalVotes: 3540
  },
  {
    icon: Waves,
    title: "SurfSense",
    description:
      "SurfSense is a free, open-source AI research agent that fuses NotebookLM + Perplexity into one self-hosted powerhouse. Connect 13+ sources (Slack, Notion, GitHub, Linear, Gmail, Jira, Confluence, Discord, YouTube, your files, the live web) and ask anything — it builds hierarchical indices, retrieves cited evidence, generates podcasts, and writes deep reports across every connected workspace. BYO LLM (OpenAI, Anthropic, Gemini, Ollama). 100% free, Apache-licensed.",
    emoji: "🌊",
    color: "from-blue-500 to-teal-600",
    directUrl: "https://www.surfsense.net/",
    imageUrl: surfsenseHero,
    isFree: true,
    tagline: "Free open-source NotebookLM + Perplexity hybrid — research across 13+ connected sources.",
    tags: [
      "SurfSense", "surfsense", "surfsense.net", "surf sense",
      "open source Perplexity alternative", "open source NotebookLM",
      "free AI research assistant", "self hosted research AI",
      "AI Assistants & Search", "Research & Academic", "free AI tool",
      "Slack AI search", "Notion AI search", "GitHub AI search",
      "AI deep research free", "knowledge agent free", "AI Tools & Development",
      "open source research agent", "AI podcast research", "Apache AI",
      "BYOK research AI", "Ollama Perplexity", "multi-source AI"
    ],
    category: "AI Assistants & Search",
    rating: 4.6,
    totalVotes: 2890
  },
  {
    icon: Database,
    title: "RAGFlow",
    description:
      "RAGFlow is the free, open-source RAG engine powerhouse — deep-document understanding for complex PDFs, scans, tables, charts, slides, and Word files, with grounded citations and a visual chunk debugger so you can actually trust the answers. Plug in any LLM (OpenAI, Anthropic, Ollama, vLLM, DeepSeek), wire it to your enterprise data, and stand up a private ChatGPT-style assistant in minutes. Self-hostable via Docker, Apache 2.0 licensed, scales to millions of documents.",
    emoji: "🧬",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://ragflow.io/",
    imageUrl: ragflowHero,
    isFree: true,
    tagline: "Free open-source RAG engine — deep document understanding with cited answers.",
    tags: [
      "RAGFlow", "ragflow", "ragflow.io", "rag flow",
      "open source RAG", "free RAG engine", "RAG for documents",
      "AI document chat free", "private ChatGPT", "self hosted AI",
      "AI Assistants & Search", "AI Tools & Development", "free AI tool",
      "Apache RAG", "PDF AI chat free", "AI table extraction",
      "AI enterprise search", "AI knowledge base free",
      "Ollama RAG", "DeepSeek RAG", "AI document parser",
      "AI search engine free", "RAG framework", "free LlamaIndex alternative"
    ],
    category: "AI Tools & Development",
    rating: 4.7,
    totalVotes: 5210
  },
  {
    icon: Brain,
    title: "Quivr",
    description:
      "Quivr is your free, open-source AI second brain — a privacy-first knowledge vault that lets you ingest any file, URL, or note and chat with it through your favorite LLM (GPT, Claude, Gemini, Mistral, Llama, local Ollama). Organize knowledge into 'brains' you can share with teammates, automate ingestion via integrations, and self-host the whole stack with Supabase. 50k+ GitHub stars, Apache 2.0, completely free forever.",
    emoji: "🧠",
    color: "from-violet-500 to-indigo-700",
    directUrl: "https://www.quivr.com/",
    imageUrl: quivrHero,
    isFree: true,
    tagline: "Free open-source AI second brain — chat with your files, notes & URLs privately.",
    tags: [
      "Quivr", "quivr", "quivr.com", "quivr ai",
      "open source second brain", "AI second brain free",
      "private AI knowledge base", "free AI notes assistant",
      "AI Assistants & Search", "Research & Academic", "free AI tool",
      "self hosted AI brain", "AI document chat free", "Apache AI",
      "AI Tools & Development", "personal AI assistant",
      "team knowledge AI", "Supabase AI", "Ollama brain",
      "free Mem alternative", "free ChatGPT alternative", "Quivr second brain",
      "RAG personal assistant"
    ],
    category: "AI Assistants & Search",
    rating: 4.7,
    totalVotes: 6890
  },
  {
    icon: Globe2,
    title: "Maxun",
    description:
      "Maxun is the free, open-source no-code web scraper that turns any website into an API in minutes. Point-and-click to record extraction robots that pull lists, tables, and screenshots; schedule runs; export clean JSON or CSV. Handles pagination, dynamic JS pages, logins, and proxies out of the box. The fastest free way to build production scrapers — no Python, no Selenium, no headaches. AGPL-3.0 licensed, self-host for zero cost.",
    emoji: "🕸️",
    color: "from-orange-500 to-teal-600",
    directUrl: "https://www.maxun.dev/",
    imageUrl: maxunHero,
    isFree: true,
    tagline: "Free open-source no-code web scraper — turn any site into an API by clicking.",
    tags: [
      "Maxun", "maxun", "maxun.dev", "maxun ai",
      "open source web scraper", "free no-code scraper",
      "AI web scraper free", "free Octoparse alternative",
      "free Apify alternative", "free Browse AI alternative",
      "AI Tools & Development", "Productivity & Utilities", "free AI tool",
      "website to API", "no-code scraper", "AI Agents",
      "AGPL scraper", "self hosted scraper", "scheduled scraping",
      "data extraction tool", "AI Agents & Automation", "AI scraping",
      "JSON CSV scraper", "browser automation free"
    ],
    category: "AI Tools & Development",
    rating: 4.6,
    totalVotes: 4120
  },
  {
    icon: Network,
    title: "ScrapeGraphAI",
    description:
      "ScrapeGraphAI is a free, open-source Python library that lets you scrape any website with a single natural-language prompt powered by LLMs — no XPath, no CSS selectors, no babysitting. Build scraping graphs that handle multi-page workflows, search engines, audio, and structured JSON output. Works with OpenAI, Anthropic, Gemini, Groq, Ollama. The smartest free way to teach an AI to read the web for you. MIT licensed.",
    emoji: "🕷️",
    color: "from-lime-500 to-emerald-700",
    directUrl: "https://scrapegraphai.com/",
    imageUrl: scrapegraphaiHero,
    isFree: true,
    tagline: "Free open-source AI web scraping — describe what you need, get JSON back.",
    tags: [
      "ScrapeGraphAI", "scrapegraphai", "scrapegraphai.com", "scrape graph ai",
      "open source AI scraper", "LLM web scraper", "natural language scraping",
      "AI Tools & Development", "Productivity & Utilities", "free AI tool",
      "Python AI scraper", "free Firecrawl alternative", "AI Agents",
      "GPT web scraper", "Ollama scraper", "AI data extraction",
      "structured JSON scraping", "AI web research", "MIT AI scraper",
      "AI Agents & Automation", "knowledge graph scraper",
      "free web data tool", "developer AI scraper"
    ],
    category: "AI Tools & Development",
    rating: 4.7,
    totalVotes: 5430
  },
  {
    icon: Zap,
    title: "LightRAG",
    description:
      "LightRAG is a free, open-source, blazing-fast graph-based RAG framework that builds dual-level knowledge graphs (entities + relationships) for sharper, more contextual retrieval than naive vector RAG. Lower cost, faster ingestion, better answers on complex queries — a true GraphRAG-class engine you can run on your laptop. Plug in any LLM (OpenAI, Anthropic, Gemini, Ollama, vLLM) and your own embeddings. MIT licensed, completely free.",
    emoji: "💡",
    color: "from-yellow-400 to-blue-600",
    directUrl: "https://github.com/HKUDS/LightRAG",
    imageUrl: lightragHero,
    isFree: true,
    tagline: "Free open-source graph-based RAG — faster, cheaper, smarter answers than vector RAG.",
    tags: [
      "LightRAG", "lightrag", "light rag", "HKUDS LightRAG",
      "open source GraphRAG", "graph RAG free",
      "fast RAG framework", "AI Tools & Development", "AI Assistants & Search",
      "free AI tool", "knowledge graph AI", "AI Agents",
      "MIT RAG", "free Microsoft GraphRAG alternative",
      "Ollama RAG", "Python RAG library", "research RAG",
      "AI document Q&A", "vector search free", "AI retrieval framework",
      "developer RAG library", "AI Agents & Automation", "lightweight RAG"
    ],
    category: "AI Tools & Development",
    rating: 4.7,
    totalVotes: 4670
  },
  {
    icon: UserCog,
    title: "Devika",
    description:
      "Devika is a free, open-source autonomous AI software engineer that takes a high-level task, breaks it into steps, researches the web, writes code, runs it, and iterates until your feature is done. Inspired by Devin but completely free and self-hostable, she supports Claude, GPT-4, Llama, Mistral, and local Ollama models out of the box. Visual planning UI, browser agent, and project memory built-in. The powerhouse open-source autonomous developer you can actually deploy today.",
    emoji: "👩‍💻",
    color: "from-purple-500 to-cyan-600",
    directUrl: "https://github.com/stitionai/devika",
    imageUrl: devikaHero,
    isFree: true,
    tagline: "Free open-source autonomous AI software engineer — Devin alternative you can self-host.",
    tags: [
      "Devika", "devika", "stition devika", "devika ai",
      "open source AI software engineer", "free Devin alternative",
      "autonomous AI developer", "AI engineer agent",
      "AI Agents", "Coding & Development", "free AI tool",
      "self hosted AI developer", "Claude AI engineer", "GPT-4 engineer",
      "Ollama AI engineer", "AI Tools & Development", "AI Agents & Automation",
      "browser AI agent", "free Devin clone", "open source autonomous dev",
      "AI feature builder", "MIT AI engineer", "AI project planner"
    ],
    category: "AI Agents",
    rating: 4.5,
    totalVotes: 7180
  },
  {
    icon: KanbanSquare,
    title: "AppFlowy",
    description:
      "AppFlowy is the free, open-source, privacy-first powerhouse alternative to Notion — docs, databases, kanban, calendars, wikis, and built-in AI all wrapped in a snappy native app. Works fully offline, syncs end-to-end encrypted, runs locally with your own AI (Ollama) or any LLM API. 60k+ GitHub stars, AGPL licensed, no per-seat fees, no data lock-in. The all-in-one workspace that finally belongs to you.",
    emoji: "🗂️",
    color: "from-indigo-500 to-emerald-600",
    directUrl: "https://appflowy.io/",
    imageUrl: appflowyHero,
    isFree: true,
    tagline: "Free open-source Notion alternative with built-in AI — docs, databases, kanban, offline.",
    tags: [
      "AppFlowy", "appflowy", "appflowy.io", "app flowy",
      "open source Notion alternative", "free Notion alternative",
      "privacy first workspace", "self hosted Notion", "AppFlowy AI",
      "AI Assistants & Search", "Business & Productivity",
      "Productivity & Utilities", "free AI tool",
      "offline Notion", "AGPL workspace", "AI notes app free",
      "AI kanban board", "AI database tool", "Ollama productivity",
      "free Coda alternative", "free ClickUp alternative",
      "AI Tools & Development", "all in one workspace"
    ],
    category: "Business & Productivity",
    rating: 4.6,
    totalVotes: 7320
  },
  {
    icon: InfinityIcon,
    title: "AFFiNE",
    description:
      "AFFiNE is the free, open-source next-gen workspace that fuses Notion-style docs + Miro-style whiteboard + Linear-style databases into one infinite canvas with built-in AI. Outline a doc, draw on a board, drop in a database, and the AI helps you write, sketch, plan, and connect everything — all locally or self-hosted with end-to-end encryption. 50k+ GitHub stars, MIT licensed, no subscriptions, no limits. A true Notion + Miro + Linear killer.",
    emoji: "♾️",
    color: "from-pink-400 to-teal-500",
    directUrl: "https://affine.pro/",
    imageUrl: affineHero,
    isFree: true,
    tagline: "Free open-source Notion + Miro + Linear workspace with built-in AI — one infinite canvas.",
    tags: [
      "AFFiNE", "affine", "affine.pro", "affine ai",
      "open source workspace", "free Notion alternative",
      "free Miro alternative", "free Linear alternative",
      "AI whiteboard free", "AI canvas tool", "all in one workspace",
      "AI Assistants & Search", "Business & Productivity",
      "Productivity & Utilities", "free AI tool",
      "AI Tools & Development", "self hosted workspace",
      "MIT workspace", "AI docs free", "AI mind map",
      "infinite canvas AI", "privacy first AI workspace",
      "Toeverything AFFiNE", "Local first AI"
    ],
    category: "Business & Productivity",
    rating: 4.7,
    totalVotes: 6450
  },
  {
    icon: FileText,
    title: "Reor",
    description:
      "Reor is a free, open-source, fully local AI note-taking app that automatically links your ideas, answers questions about your notes, and provides intelligent semantic search — all without sending a single byte to the cloud. Powered by Ollama / LM Studio / Llama.cpp running on-device, plus Obsidian-compatible Markdown files you own forever. The most private AI second brain you can install today. 100% free, AGPL licensed.",
    emoji: "🗒️",
    color: "from-amber-400 to-yellow-700",
    directUrl: "https://www.reorproject.org/",
    imageUrl: reorHero,
    isFree: true,
    tagline: "Free fully-local AI note-taking — semantic search & auto-linking, 100% offline.",
    tags: [
      "Reor", "reor", "reor project", "reor ai", "reorproject.org",
      "open source AI notes", "local AI notes", "private AI notebook",
      "offline AI notes", "Obsidian AI alternative", "AI second brain",
      "AI Assistants & Search", "Productivity & Utilities", "free AI tool",
      "Research & Academic", "AI Tools & Development",
      "Ollama notes app", "Llama.cpp notes", "Markdown AI",
      "self hosted notes AI", "AGPL notes", "AI knowledge graph notes",
      "semantic search notes", "free Mem alternative"
    ],
    category: "Productivity & Utilities",
    rating: 4.6,
    totalVotes: 3820
  },
  {
    icon: Container,
    title: "Daytona",
    description:
      "Daytona is the free, open-source, lightning-fast development environment built for AI agents — spin up secure, isolated, sub-90ms sandboxes where AI engineers can write, run, and verify code in parallel without ever touching your machine. The perfect runtime for autonomous coding agents, AI-generated apps, MCP tools, and large-scale agent swarms. Self-hostable, MIT-style licensed, used by frontier AI labs to scale agents safely. 100% free for personal and self-hosted use.",
    emoji: "📦",
    color: "from-teal-500 to-orange-600",
    directUrl: "https://www.daytona.io/",
    imageUrl: daytonaHero,
    isFree: true,
    tagline: "Free open-source dev environment for AI agents — sub-90ms secure sandboxes at scale.",
    tags: [
      "Daytona", "daytona", "daytona.io", "daytona ai",
      "open source dev environment", "AI agent sandbox",
      "free E2B alternative", "free CodeSandbox alternative",
      "AI Tools & Development", "Coding & Development", "AI Agents",
      "free AI tool", "AI Agents & Automation",
      "secure code execution", "sandboxed AI", "agent infrastructure",
      "AI dev platform", "self hosted dev env", "AI runtime",
      "MIT dev environment", "developer tools", "AI agent platform",
      "Daytona sandbox"
    ],
    category: "AI Tools & Development",
    rating: 4.7,
    totalVotes: 5630
  },
  {
    icon: MessageSquare,
    title: "Chatbox",
    description:
      "Chatbox is the free, open-source desktop & mobile client that puts every top AI model — GPT-4, Claude, Gemini, DeepSeek, Llama, Qwen, Mistral, plus any local Ollama/LM Studio model — into one clean, fast interface. Bring your own keys, chat with files, images, prompts, and personas, sync history locally, and never pay a ChatGPT/Claude subscription again. 30k+ GitHub stars, GPL-3.0 licensed, available on Mac, Windows, Linux, iOS, Android & web.",
    emoji: "💬",
    color: "from-blue-500 to-indigo-600",
    directUrl: "https://chatboxai.app/",
    imageUrl: chatboxHero,
    isFree: true,
    tagline: "Free open-source desktop & mobile AI chat — every top LLM in one app, BYO key.",
    tags: [
      "Chatbox", "chatbox", "chatbox ai", "chatboxai.app", "chatbox app",
      "open source AI chat client", "free ChatGPT app", "free Claude app",
      "BYOK AI chat", "multi LLM chat", "AI Assistants & Search",
      "Productivity & Utilities", "free AI tool",
      "desktop AI chat", "mobile AI chat", "Ollama desktop client",
      "LM Studio chat", "free Poe alternative", "GPT desktop app",
      "Claude desktop app", "Gemini desktop", "DeepSeek client",
      "GPL AI chat", "AI Tools & Development"
    ],
    category: "AI Assistants & Search",
    rating: 4.7,
    totalVotes: 8940
  }
];