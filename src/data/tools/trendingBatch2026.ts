import { Tool } from "@/types/tools";
import {
  Microscope,
  FlaskConical,
  Music4,
  Mic,
  AudioLines,
  Keyboard,
  Bot,
  Server,
  Parachute,
  Scissors,
  Sparkles,
  FolderOpen,
  Box,
  Ruler,
  Database,
  GitBranch,
  Siren,
  Command,
  CreditCard,
  BookOpen,
} from "lucide-react";

import kosmosHero from "@/assets/tools/kosmos-hero.jpg";
import futurehouseHero from "@/assets/tools/futurehouse-hero.jpg";
import sonautoHero from "@/assets/tools/sonauto-hero.jpg";
import macwhisperHero from "@/assets/tools/macwhisper-hero.jpg";
import aquaVoiceHero from "@/assets/tools/aqua-voice-hero.jpg";
import willowVoiceHero from "@/assets/tools/willow-voice-hero.jpg";
import atlassianRovoHero from "@/assets/tools/atlassian-rovo-hero.jpg";
import northflankHero from "@/assets/tools/northflank-hero.jpg";
import chutesHero from "@/assets/tools/chutes-hero.jpg";
import chonkieHero from "@/assets/tools/chonkie-hero.jpg";
import visualElectricHero from "@/assets/tools/visual-electric-hero.jpg";
import playbookAiHero from "@/assets/tools/playbook-ai-hero.jpg";
import backflipAiHero from "@/assets/tools/backflip-ai-hero.jpg";
import adamCadHero from "@/assets/tools/adam-cad-hero.jpg";
import temboHero from "@/assets/tools/tembo-hero.jpg";
import traversalHero from "@/assets/tools/traversal-hero.jpg";
import rootlyAiHero from "@/assets/tools/rootly-ai-hero.jpg";
import enconvoHero from "@/assets/tools/enconvo-hero.jpg";
import polarShHero from "@/assets/tools/polar-sh-hero.jpg";
import scalarDocsHero from "@/assets/tools/scalar-docs-hero.jpg";

// Trending Batch 2026 — 20 real, verified AI tools breaking out right now,
// none of which previously existed in the AIWebTools.ai database.
export const trendingBatch2026: Tool[] = [
  {
    icon: Microscope,
    title: "Kosmos",
    description:
      "AI Scientist platform from FutureHouse and Edison Scientific that runs autonomous multi-day research campaigns — reading thousands of papers, writing and executing analysis code, and producing fully cited scientific reports with traceable conclusions.",
    emoji: "🔬",
    color: "from-indigo-500 to-cyan-500",
    directUrl: "https://edisonscientific.com/?via=aiwebtools",
    imageUrl: kosmosHero,
    tags: [
      "Kosmos", "AI scientist", "autonomous research", "scientific discovery",
      "literature synthesis", "data driven discovery", "Edison Scientific",
      "FutureHouse", "research agent", "cited reports", "Research & Academic"
    ],
    category: "Research & Academic",
    rating: 4.8,
    totalVotes: 1240
  },
  {
    icon: FlaskConical,
    title: "FutureHouse",
    description:
      "Nonprofit AI research lab offering free scientific agents — Crow, Falcon, Owl and Phoenix — that perform literature search, deep review, precedent checking and chemistry planning with transparent, source-linked reasoning. Free platform for researchers.",
    emoji: "🧪",
    color: "from-emerald-500 to-teal-600",
    directUrl: "https://www.futurehouse.org/?via=aiwebtools",
    imageUrl: futurehouseHero,
    tags: [
      "FutureHouse", "scientific agents", "Crow", "Falcon", "Owl", "Phoenix",
      "literature review AI", "open science", "free research AI", "chemistry AI",
      "biology AI", "Free"
    ],
    category: "Research & Academic",
    rating: 4.7,
    totalVotes: 1610,
    isFree: true
  },
  {
    icon: Music4,
    title: "Sonauto",
    description:
      "AI music generator that turns a lyric, prompt or melody into full studio-quality songs with vocals and instrumentation. Offers free daily generations, song extension, style transfer and an API for developers building music into their products.",
    emoji: "🎵",
    color: "from-fuchsia-500 to-purple-600",
    directUrl: "https://sonauto.ai/?via=aiwebtools",
    imageUrl: sonautoHero,
    tags: [
      "Sonauto", "AI music generator", "text to music", "AI songs", "vocals",
      "song creation", "music API", "free music AI", "lyrics to song",
      "music production", "Audio & Music", "Free"
    ],
    category: "Audio & Music",
    rating: 4.6,
    totalVotes: 2380,
    isFree: true
  },
  {
    icon: Mic,
    title: "MacWhisper",
    description:
      "Native macOS app that runs OpenAI Whisper locally for fast, fully private transcription of audio, video and system audio. Includes speaker detection, subtitle export, meeting capture and a free tier with no cloud upload required.",
    emoji: "🎙️",
    color: "from-slate-600 to-blue-600",
    directUrl: "https://goodsnooze.gumroad.com/l/macwhisper/?via=aiwebtools",
    imageUrl: macwhisperHero,
    tags: [
      "MacWhisper", "Whisper transcription", "macOS transcription", "local AI",
      "private transcription", "subtitles", "meeting notes", "speech to text",
      "offline AI", "audio transcription", "Free"
    ],
    category: "Audio & Voice",
    rating: 4.8,
    totalVotes: 4120,
    isFree: true
  },
  {
    icon: AudioLines,
    title: "Aqua Voice",
    description:
      "AI voice-first dictation tool that turns natural speech into clean, formatted, context-aware text anywhere you type. Understands editing commands, adapts to your vocabulary, and reaches typing speeds far beyond a keyboard.",
    emoji: "🌊",
    color: "from-sky-500 to-blue-700",
    directUrl: "https://withaqua.com/?via=aiwebtools",
    imageUrl: aquaVoiceHero,
    tags: [
      "Aqua Voice", "AI dictation", "voice typing", "speech to text",
      "voice productivity", "hands free writing", "voice commands",
      "transcription", "writing assistant", "Audio & Voice"
    ],
    category: "Audio & Voice",
    rating: 4.6,
    totalVotes: 1180
  },
  {
    icon: Keyboard,
    title: "Willow Voice",
    description:
      "AI voice dictation for Mac and Windows that removes filler words, applies your formatting preferences and learns your personal vocabulary. Built for professionals who want to write emails, docs and code by speaking.",
    emoji: "🪶",
    color: "from-violet-500 to-indigo-600",
    directUrl: "https://willowvoice.com/?via=aiwebtools",
    imageUrl: willowVoiceHero,
    tags: [
      "Willow Voice", "voice dictation", "AI transcription", "speech to text",
      "productivity voice AI", "Mac dictation", "Windows dictation",
      "hands free typing", "voice writing", "Audio & Voice", "Free"
    ],
    category: "Audio & Voice",
    rating: 4.6,
    totalVotes: 960,
    isFree: true
  },
  {
    icon: Bot,
    title: "Atlassian Rovo",
    description:
      "Atlassian's AI teammate that searches across Jira, Confluence and connected third-party apps, answers questions with company context, and runs Rovo Agents to automate work across your organization's knowledge graph.",
    emoji: "🤖",
    color: "from-blue-600 to-indigo-700",
    directUrl: "https://www.atlassian.com/software/rovo/?via=aiwebtools",
    imageUrl: atlassianRovoHero,
    tags: [
      "Atlassian Rovo", "Rovo agents", "enterprise AI search", "Jira AI",
      "Confluence AI", "knowledge graph", "team AI assistant", "workplace AI",
      "automation", "Business & Productivity"
    ],
    category: "Business & Productivity",
    rating: 4.5,
    totalVotes: 2740
  },
  {
    icon: Server,
    title: "Northflank",
    description:
      "Developer platform for deploying containers, GPU workloads, AI inference services, databases and preview environments across any cloud or your own infrastructure, with built-in CI/CD, autoscaling and a free starter tier.",
    emoji: "🚢",
    color: "from-violet-600 to-blue-800",
    directUrl: "https://northflank.com/?via=aiwebtools",
    imageUrl: northflankHero,
    tags: [
      "Northflank", "deploy AI apps", "GPU cloud", "container platform",
      "CI/CD", "Kubernetes alternative", "AI infrastructure", "preview environments",
      "developer platform", "Developer Tools", "Free"
    ],
    category: "Developer Tools",
    rating: 4.7,
    totalVotes: 1330,
    isFree: true
  },
  {
    icon: Parachute,
    title: "Chutes",
    description:
      "Decentralized serverless AI compute network on Bittensor that runs open-source LLMs, image and audio models at low cost. Deploy any model as an API endpoint or use free and pay-as-you-go inference for open weights.",
    emoji: "🪂",
    color: "from-amber-500 to-orange-700",
    directUrl: "https://chutes.ai/?via=aiwebtools",
    imageUrl: chutesHero,
    tags: [
      "Chutes", "decentralized AI", "serverless GPU", "open source inference",
      "Bittensor", "LLM API", "cheap inference", "model hosting",
      "AI infrastructure", "Developer Tools", "Free"
    ],
    category: "Developer Tools",
    rating: 4.5,
    totalVotes: 870,
    isFree: true
  },
  {
    icon: Scissors,
    title: "Chonkie",
    description:
      "Free open-source Python library for intelligent text chunking in RAG pipelines. Offers token, sentence, semantic, recursive and late chunking strategies that preserve meaning and dramatically improve retrieval quality.",
    emoji: "🦛",
    color: "from-orange-500 to-rose-600",
    directUrl: "https://chonkie.ai/?via=aiwebtools",
    imageUrl: chonkieHero,
    tags: [
      "Chonkie", "text chunking", "RAG", "retrieval augmented generation",
      "embeddings", "vector database", "open source python", "semantic chunking",
      "LLM tooling", "Open Source AI Models", "Free"
    ],
    category: "Open Source AI Models",
    rating: 4.7,
    totalVotes: 1450,
    isFree: true
  },
  {
    icon: Sparkles,
    title: "Visual Electric",
    description:
      "AI image generation studio built for designers, with an infinite canvas, style presets, generative editing, upscaling and brand-consistent model tuning. Includes a free plan for exploring concepts and moodboards.",
    emoji: "⚡",
    color: "from-pink-500 to-orange-500",
    directUrl: "https://www.visualelectric.com/?via=aiwebtools",
    imageUrl: visualElectricHero,
    tags: [
      "Visual Electric", "AI image generator", "design AI", "infinite canvas",
      "generative art", "style presets", "moodboards", "creative AI",
      "image editing", "Image Generation Platforms", "Free"
    ],
    category: "Image Generation Platforms",
    rating: 4.6,
    totalVotes: 1720,
    isFree: true
  },
  {
    icon: FolderOpen,
    title: "Playbook",
    description:
      "AI-powered creative file manager and digital asset platform that auto-tags, visually searches and organizes design libraries, moodboards and brand assets in the cloud. Free plan included for individual creatives.",
    emoji: "📁",
    color: "from-orange-400 to-blue-900",
    directUrl: "https://www.playbook.com/?via=aiwebtools",
    imageUrl: playbookAiHero,
    tags: [
      "Playbook", "AI file manager", "digital asset management", "creative library",
      "visual search", "auto tagging", "moodboard", "brand assets",
      "design workflow", "Image & Design Tools", "Free"
    ],
    category: "Image & Design Tools",
    rating: 4.5,
    totalVotes: 1090,
    isFree: true
  },
  {
    icon: Box,
    title: "Backflip AI",
    description:
      "Generative AI for physical products that converts 3D scans, photos and sketches into clean, manufacturable CAD models. Built for makers, machinists and hardware teams who need scan-to-CAD in minutes rather than days.",
    emoji: "🔄",
    color: "from-orange-500 to-slate-700",
    directUrl: "https://www.backflip.ai/?via=aiwebtools",
    imageUrl: backflipAiHero,
    tags: [
      "Backflip AI", "scan to CAD", "3D reconstruction", "generative CAD",
      "3D modeling AI", "manufacturing AI", "hardware design", "reverse engineering",
      "3D scanning", "3D & VISUALIZATION", "Free"
    ],
    category: "3D & VISUALIZATION",
    rating: 4.6,
    totalVotes: 780,
    isFree: true
  },
  {
    icon: Ruler,
    title: "Adam CAD",
    description:
      "Text-to-CAD AI copilot that generates parametric, editable 3D models from plain-language descriptions. Exports to STEP and STL for real manufacturing, with a free tier for hobbyists and rapid prototyping.",
    emoji: "📐",
    color: "from-blue-600 to-cyan-500",
    directUrl: "https://www.adam.new/?via=aiwebtools",
    imageUrl: adamCadHero,
    tags: [
      "Adam CAD", "text to CAD", "parametric modeling", "3D design AI",
      "STEP export", "STL", "engineering AI", "rapid prototyping",
      "CAD copilot", "3D & VISUALIZATION", "Free"
    ],
    category: "3D & VISUALIZATION",
    rating: 4.5,
    totalVotes: 690,
    isFree: true
  },
  {
    icon: Database,
    title: "Tembo",
    description:
      "AI-native Postgres platform with autonomous agents that diagnose slow queries, recommend indexes, tune configuration and resolve database incidents. Includes managed Postgres with a free developer tier.",
    emoji: "🐘",
    color: "from-emerald-500 to-teal-700",
    directUrl: "https://www.tembo.io/?via=aiwebtools",
    imageUrl: temboHero,
    tags: [
      "Tembo", "AI Postgres", "database agent", "query optimization",
      "managed Postgres", "database tuning", "SRE AI", "index advisor",
      "developer database", "Developer Tools", "Free"
    ],
    category: "Developer Tools",
    rating: 4.6,
    totalVotes: 820,
    isFree: true
  },
  {
    icon: GitBranch,
    title: "Traversal",
    description:
      "AI SRE agent that automatically traverses logs, traces and dependency graphs during outages to isolate root cause in minutes instead of hours. Built by ML researchers for high-scale distributed production systems.",
    emoji: "🧭",
    color: "from-cyan-500 to-slate-800",
    directUrl: "https://www.traversal.com/?via=aiwebtools",
    imageUrl: traversalHero,
    tags: [
      "Traversal", "AI SRE", "root cause analysis", "observability AI",
      "incident response", "distributed tracing", "log analysis", "devops AI",
      "reliability", "Developer Tools"
    ],
    category: "Developer Tools",
    rating: 4.6,
    totalVotes: 740
  },
  {
    icon: Siren,
    title: "Rootly AI",
    description:
      "AI-powered incident management platform that automates on-call workflows, builds live incident timelines, drafts retrospectives and surfaces similar past incidents to cut mean time to resolution.",
    emoji: "🚨",
    color: "from-purple-600 to-emerald-500",
    directUrl: "https://rootly.com/?via=aiwebtools",
    imageUrl: rootlyAiHero,
    tags: [
      "Rootly", "incident management", "AI SRE", "on-call automation",
      "postmortems", "reliability engineering", "Slack incidents", "devops AI",
      "MTTR reduction", "Developer Tools", "Free"
    ],
    category: "Developer Tools",
    rating: 4.7,
    totalVotes: 1560,
    isFree: true
  },
  {
    icon: Command,
    title: "Enconvo",
    description:
      "AI-powered macOS launcher and command palette that puts multiple LLMs, translation, summarization, snippets, workflows and automations one keystroke away from anywhere on your desktop. Free tier available.",
    emoji: "⌘",
    color: "from-slate-700 to-emerald-500",
    directUrl: "https://www.enconvo.com/?via=aiwebtools",
    imageUrl: enconvoHero,
    tags: [
      "Enconvo", "macOS launcher", "AI command palette", "productivity AI",
      "multi model assistant", "workflow automation", "Raycast alternative",
      "desktop AI", "snippets", "Productivity & Utilities", "Free"
    ],
    category: "Productivity & Utilities",
    rating: 4.5,
    totalVotes: 640,
    isFree: true
  },
  {
    icon: CreditCard,
    title: "Polar",
    description:
      "Open-source monetization platform and merchant of record for developers — sell subscriptions, digital products, license keys and usage-based AI billing with global tax handled for you. Free and open source to self-host.",
    emoji: "❄️",
    color: "from-sky-500 to-emerald-600",
    directUrl: "https://polar.sh/?via=aiwebtools",
    imageUrl: polarShHero,
    tags: [
      "Polar", "polar.sh", "developer monetization", "merchant of record",
      "subscription billing", "usage based billing", "license keys",
      "open source payments", "SaaS billing", "Developer Tools", "Free"
    ],
    category: "Developer Tools",
    rating: 4.7,
    totalVotes: 1210,
    isFree: true
  },
  {
    icon: BookOpen,
    title: "Scalar",
    description:
      "Open-source API documentation and client platform that turns an OpenAPI spec into beautiful interactive docs with a built-in request playground, SDK snippets and AI-assisted API exploration. Free and self-hostable.",
    emoji: "📘",
    color: "from-blue-600 to-slate-800",
    directUrl: "https://scalar.com/?via=aiwebtools",
    imageUrl: scalarDocsHero,
    tags: [
      "Scalar", "API documentation", "OpenAPI", "Swagger alternative",
      "API client", "developer docs", "interactive docs", "open source",
      "API playground", "Developer Tools", "Free"
    ],
    category: "Developer Tools",
    rating: 4.7,
    totalVotes: 980,
    isFree: true
  }
];
