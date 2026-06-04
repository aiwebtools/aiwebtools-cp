import { Tool } from "@/types/tools";
import { Video, Captions, AudioWaveform, Music, Code2, Bot, Wrench, Wind, Eye, Cpu, BookOpen, Gem, Sun, Sparkles, Brain, Palette, Type, Layers, Cloud, Trees, Layout, Database, Zap, NotebookPen, Brush } from "lucide-react";

import wan25Hero from "@/assets/tools/wan-25-hero.jpg";
import submagicHero from "@/assets/tools/submagic-hero.jpg";
import elevenV3Hero from "@/assets/tools/eleven-v3-hero.jpg";
import sunoV4Hero from "@/assets/tools/suno-v4-hero.jpg";
import junieHero from "@/assets/tools/junie-hero.jpg";
import autogptHero from "@/assets/tools/autogpt-hero.jpg";
import sweAgentHero from "@/assets/tools/swe-agent-hero.jpg";
import mistralLargeHero from "@/assets/tools/mistral-large-hero.jpg";
import pixtralHero from "@/assets/tools/pixtral-hero.jpg";
import nemotronHero from "@/assets/tools/nemotron-hero.jpg";
import olmoHero from "@/assets/tools/olmo-hero.jpg";
import gemini25Hero from "@/assets/tools/gemini-25-hero.jpg";
import claude4Hero from "@/assets/tools/claude-4-hero.jpg";
import gpt5Hero from "@/assets/tools/gpt-5-hero.jpg";
import openaiO3Hero from "@/assets/tools/openai-o3-hero.jpg";
import recraftV3Hero from "@/assets/tools/recraft-v3-hero.jpg";
import ideogram2Hero from "@/assets/tools/ideogram-2-hero.jpg";
import fluxKontextHero from "@/assets/tools/flux-kontext-hero.jpg";
import sd35Hero from "@/assets/tools/sd-35-hero.jpg";
import bflHero from "@/assets/tools/bfl-hero.jpg";
import promptlayerHero from "@/assets/tools/promptlayer-hero.jpg";
import chromaDbHero from "@/assets/tools/chroma-db-hero.jpg";
import convexHero from "@/assets/tools/convex-hero.jpg";
import nyotaHero from "@/assets/tools/nyota-hero.jpg";
import kreaRealtimeHero from "@/assets/tools/krea-realtime-hero.jpg";

// Top New Batch — June 2026 (25 verified real, popular AI tools we didn't have yet)
export const topNewBatch2026Jun25: Tool[] = [
  {
    icon: Video, title: "Wan 2.5",
    description: "Wan 2.5 is Alibaba Tongyi Lab's flagship open video model — generating cinematic 1080p clips with synchronized audio and improved prompt adherence from text or image inputs.",
    emoji: "🎞️", color: "from-red-600 to-orange-600",
    directUrl: "https://wan.video/?via=aiwebtools", imageUrl: wan25Hero,
    tags: ["Wan 2.5", "Alibaba", "Tongyi", "AI video", "text to video", "open source video model", "Video Generation"],
    category: "Video Generation", rating: 4.7,
  },
  {
    icon: Captions, title: "Submagic",
    description: "Submagic auto-generates viral animated captions, B-roll, sound effects, and zooms for TikTok, Reels, and Shorts — turning long videos into polished short-form clips in minutes.",
    emoji: "✨", color: "from-pink-500 to-purple-600",
    directUrl: "https://submagic.co/?via=aiwebtools", imageUrl: submagicHero,
    tags: ["Submagic", "captions", "subtitles", "TikTok", "Reels", "Shorts", "short form video", "AI video editor", "Video Editing"],
    category: "Video Editing", rating: 4.8,
  },
  {
    icon: AudioWaveform, title: "Eleven v3",
    description: "ElevenLabs v3 is the most expressive text-to-speech model — multi-speaker dialogue, audio tags for emotion and SFX, and 70+ languages with studio-grade voice cloning.",
    emoji: "🎙️", color: "from-slate-800 to-blue-600",
    directUrl: "https://elevenlabs.io/v3?via=aiwebtools", imageUrl: elevenV3Hero,
    tags: ["ElevenLabs v3", "text to speech", "TTS", "voice cloning", "AI voice", "dialogue", "audio tags", "Voice"],
    category: "AI Voice & Speech", rating: 4.9,
  },
  {
    icon: Music, title: "Suno v4",
    description: "Suno v4 generates full studio-quality songs from a prompt — sharper vocals, dynamic instrumentation, custom lyrics, song extension, and stems for remix.",
    emoji: "🎵", color: "from-red-500 to-yellow-500",
    directUrl: "https://suno.com/?via=aiwebtools", imageUrl: sunoV4Hero,
    tags: ["Suno v4", "AI music", "song generator", "AI songwriter", "music generation", "lyrics", "Music"],
    category: "AI Music & Audio", rating: 4.9,
  },
  {
    icon: Code2, title: "JetBrains Junie",
    description: "Junie is JetBrains' autonomous coding agent inside IntelliJ, PyCharm, WebStorm, and Rider — plans tasks, edits multi-file projects, runs tests, and ships PRs.",
    emoji: "🧑‍💻", color: "from-purple-600 to-orange-500",
    directUrl: "https://www.jetbrains.com/junie/?via=aiwebtools", imageUrl: junieHero,
    tags: ["JetBrains Junie", "Junie", "AI coding agent", "IntelliJ", "PyCharm", "WebStorm", "autonomous developer", "Coding"],
    category: "Coding & Development", rating: 4.7,
  },
  {
    icon: Bot, title: "AutoGPT",
    description: "AutoGPT is the original open-source autonomous AI agent framework — chains GPT actions, uses tools, and runs long-horizon goals end-to-end. Build, deploy, and run your own agents.",
    emoji: "🤖", color: "from-emerald-600 to-green-800",
    directUrl: "https://agpt.co/?via=aiwebtools", imageUrl: autogptHero,
    tags: ["AutoGPT", "autonomous agents", "AI agent framework", "open source AI", "agent platform", "AI Agents"],
    category: "AI Agents", rating: 4.6,
  },
  {
    icon: Wrench, title: "SWE-agent",
    description: "SWE-agent (Princeton NLP) is the open-source AI software engineer that resolves real GitHub issues — top of the SWE-bench leaderboard, with an Agent-Computer Interface for autonomous repo fixes.",
    emoji: "🛠️", color: "from-cyan-500 to-blue-700",
    directUrl: "https://swe-agent.com/?via=aiwebtools", imageUrl: sweAgentHero,
    tags: ["SWE-agent", "Princeton", "AI software engineer", "SWE-bench", "GitHub agent", "code agent", "Coding"],
    category: "Coding & Development", rating: 4.6,
  },
  {
    icon: Wind, title: "Mistral Large",
    description: "Mistral Large 2 is Mistral AI's flagship reasoning model — top-tier code, math, and multilingual performance with a 128k context window, available on Le Chat and via API.",
    emoji: "🌬️", color: "from-orange-600 to-red-600",
    directUrl: "https://mistral.ai/news/mistral-large-2407/?via=aiwebtools", imageUrl: mistralLargeHero,
    tags: ["Mistral Large", "Mistral AI", "LLM", "Le Chat", "European AI", "reasoning model", "Chat"],
    category: "AI Chat & Assistants", rating: 4.7,
  },
  {
    icon: Eye, title: "Pixtral",
    description: "Pixtral is Mistral's open multimodal vision-language model — image understanding, OCR, charts, and multi-image reasoning at native resolution, with permissive Apache 2.0 weights.",
    emoji: "👁️", color: "from-orange-500 to-rose-700",
    directUrl: "https://mistral.ai/news/pixtral-12b/?via=aiwebtools", imageUrl: pixtralHero,
    tags: ["Pixtral", "Mistral", "vision language model", "VLM", "open source", "multimodal", "image understanding"],
    category: "AI Vision & Image", rating: 4.6,
  },
  {
    icon: Cpu, title: "NVIDIA Nemotron",
    description: "NVIDIA Nemotron is a family of open enterprise-grade LLMs (Nano, Super, Ultra) for reasoning, agentic AI, and RAG — optimized for NVIDIA GPUs and available on build.nvidia.com.",
    emoji: "🟢", color: "from-green-500 to-emerald-700",
    directUrl: "https://www.nvidia.com/en-us/ai-data-science/foundation-models/nemotron/?via=aiwebtools", imageUrl: nemotronHero,
    tags: ["Nemotron", "NVIDIA", "open LLM", "enterprise AI", "reasoning model", "agentic AI", "NIM"],
    category: "AI Chat & Assistants", rating: 4.6,
  },
  {
    icon: BookOpen, title: "OLMo",
    description: "OLMo by Allen Institute for AI (Ai2) is a fully open language model family — weights, training data, code, and checkpoints released for transparent research.",
    emoji: "📚", color: "from-cyan-500 to-teal-600",
    directUrl: "https://allenai.org/olmo?via=aiwebtools", imageUrl: olmoHero,
    tags: ["OLMo", "Allen AI", "Ai2", "open language model", "fully open LLM", "research"],
    category: "AI Research", rating: 4.6,
  },
  {
    icon: Gem, title: "Gemini 2.5 Pro",
    description: "Gemini 2.5 Pro is Google DeepMind's flagship thinking model — leading reasoning, 1M-token context, native multimodal, and tool use across Gemini app, AI Studio, and Vertex AI.",
    emoji: "💎", color: "from-blue-500 to-purple-600",
    directUrl: "https://deepmind.google/technologies/gemini/pro/?via=aiwebtools", imageUrl: gemini25Hero,
    tags: ["Gemini 2.5 Pro", "Google DeepMind", "thinking model", "1M context", "multimodal", "Vertex AI", "Chat"],
    category: "AI Chat & Assistants", rating: 4.9,
  },
  {
    icon: Sun, title: "Claude 4",
    description: "Claude 4 (Opus & Sonnet) by Anthropic is the leading frontier model for coding, agentic workflows, and long-running tasks — with extended thinking, tool use, and a 200k context window.",
    emoji: "🌅", color: "from-orange-400 to-amber-600",
    directUrl: "https://www.anthropic.com/claude?via=aiwebtools", imageUrl: claude4Hero,
    tags: ["Claude 4", "Anthropic", "Opus", "Sonnet", "coding agent", "frontier model", "LLM", "Chat"],
    category: "AI Chat & Assistants", rating: 4.9,
  },
  {
    icon: Sparkles, title: "GPT-5",
    description: "GPT-5 is OpenAI's unified flagship model — combining fast responses with deep reasoning, dramatically reduced hallucinations, and best-in-class coding, agentic tool use, and multimodality inside ChatGPT and the API.",
    emoji: "✴️", color: "from-slate-900 to-teal-500",
    directUrl: "https://openai.com/index/introducing-gpt-5/?via=aiwebtools", imageUrl: gpt5Hero,
    tags: ["GPT-5", "OpenAI", "ChatGPT", "frontier model", "reasoning", "agentic AI", "Chat"],
    category: "AI Chat & Assistants", rating: 5.0,
  },
  {
    icon: Brain, title: "OpenAI o3",
    description: "OpenAI o3 is the deep-reasoning model that thinks before it answers — state-of-the-art performance on math, science, coding, and multi-step planning, with native tool use in ChatGPT.",
    emoji: "🧠", color: "from-indigo-700 to-cyan-500",
    directUrl: "https://openai.com/index/introducing-o3-and-o4-mini/?via=aiwebtools", imageUrl: openaiO3Hero,
    tags: ["OpenAI o3", "o3", "reasoning model", "ChatGPT", "math AI", "science AI", "Chat"],
    category: "AI Chat & Assistants", rating: 4.9,
  },
  {
    icon: Palette, title: "Recraft V3",
    description: "Recraft V3 is the design-first image model — vector + raster generation with brand styles, accurate long-form text rendering, and infinite design canvas. #1 on the Hugging Face image arena at launch.",
    emoji: "🎨", color: "from-fuchsia-500 to-orange-500",
    directUrl: "https://www.recraft.ai/?via=aiwebtools", imageUrl: recraftV3Hero,
    tags: ["Recraft V3", "AI image generation", "vector AI", "brand design", "text in images", "Image Generation"],
    category: "Image Generation", rating: 4.8,
  },
  {
    icon: Type, title: "Ideogram 2.0",
    description: "Ideogram 2.0 is the AI image model known for best-in-class typography and reliable text rendering — perfect for posters, logos, and graphic-design-quality compositions.",
    emoji: "🔠", color: "from-pink-400 to-purple-500",
    directUrl: "https://ideogram.ai/?via=aiwebtools", imageUrl: ideogram2Hero,
    tags: ["Ideogram 2", "Ideogram", "AI image", "text in images", "typography AI", "poster generator", "Image Generation"],
    category: "Image Generation", rating: 4.8,
  },
  {
    icon: Layers, title: "FLUX.1 Kontext",
    description: "FLUX.1 Kontext by Black Forest Labs is a state-of-the-art in-context image generation and editing model — preserves character identity across edits, follows instructions, and powers pro creative workflows.",
    emoji: "🌀", color: "from-slate-700 to-red-600",
    directUrl: "https://blackforestlabs.ai/flux-kontext/?via=aiwebtools", imageUrl: fluxKontextHero,
    tags: ["FLUX Kontext", "FLUX.1", "Black Forest Labs", "image editing AI", "character consistency", "Image Generation"],
    category: "Image Generation", rating: 4.8,
  },
  {
    icon: Cloud, title: "Stable Diffusion 3.5",
    description: "Stable Diffusion 3.5 by Stability AI is the open image model family (Large, Large Turbo, Medium) — high-quality photoreal and stylized generation with permissive commercial license for creators.",
    emoji: "☁️", color: "from-pink-400 to-indigo-500",
    directUrl: "https://stability.ai/stable-image?via=aiwebtools", imageUrl: sd35Hero,
    tags: ["Stable Diffusion 3.5", "SD3.5", "Stability AI", "open image model", "text to image", "Image Generation"],
    category: "Image Generation", rating: 4.7,
  },
  {
    icon: Trees, title: "Black Forest Labs",
    description: "Black Forest Labs builds the FLUX family of frontier image and video models — including FLUX.1 [pro], [dev], [schnell], Kontext, and FLUX.2 — powering creative tools across the industry.",
    emoji: "🌲", color: "from-slate-800 to-rose-700",
    directUrl: "https://blackforestlabs.ai/?via=aiwebtools", imageUrl: bflHero,
    tags: ["Black Forest Labs", "FLUX", "FLUX.1", "FLUX.2", "image model lab", "generative AI research"],
    category: "Image Generation", rating: 4.8,
  },
  {
    icon: Layout, title: "PromptLayer",
    description: "PromptLayer is the prompt management & observability platform — version, A/B test, log, evaluate, and collaborate on LLM prompts across OpenAI, Anthropic, and any provider.",
    emoji: "🧾", color: "from-orange-400 to-amber-600",
    directUrl: "https://promptlayer.com/?via=aiwebtools", imageUrl: promptlayerHero,
    tags: ["PromptLayer", "prompt management", "LLM observability", "prompt versioning", "AI evaluation", "LLMOps"],
    category: "AI Development Tools", rating: 4.6,
  },
  {
    icon: Database, title: "Chroma",
    description: "Chroma is the open-source AI-native embedding database — store, query, and search vectors for RAG, semantic search, and agent memory. Simple Python/JS API, self-host or Chroma Cloud.",
    emoji: "🟪", color: "from-fuchsia-500 to-blue-500",
    directUrl: "https://www.trychroma.com/?via=aiwebtools", imageUrl: chromaDbHero,
    tags: ["Chroma", "vector database", "embedding database", "RAG", "semantic search", "agent memory", "LLM infra"],
    category: "AI Development Tools", rating: 4.7,
  },
  {
    icon: Zap, title: "Convex",
    description: "Convex is the reactive backend-as-a-service for AI apps — TypeScript serverless functions, realtime sync, vector search, file storage, and built-in support for OpenAI/Anthropic agents.",
    emoji: "⚡", color: "from-purple-600 to-indigo-700",
    directUrl: "https://www.convex.dev/?via=aiwebtools", imageUrl: convexHero,
    tags: ["Convex", "reactive database", "backend as a service", "realtime sync", "AI backend", "TypeScript backend"],
    category: "AI Development Tools", rating: 4.7,
  },
  {
    icon: NotebookPen, title: "Nyota",
    description: "Nyota is an AI meeting assistant that prepares your meeting agenda, records, transcribes, and generates structured action-item notes synced to your project tools.",
    emoji: "📝", color: "from-rose-400 to-amber-400",
    directUrl: "https://nyota.ai/?via=aiwebtools", imageUrl: nyotaHero,
    tags: ["Nyota", "AI meeting notes", "meeting assistant", "transcription", "action items", "Meeting Assistant"],
    category: "Productivity & Utilities", rating: 4.6,
  },
  {
    icon: Brush, title: "Krea Realtime",
    description: "Krea Realtime turns your sketches, webcam feed, or prompts into AI-generated images in real time — pro creative canvas with FLUX, SDXL, and live video-to-video.",
    emoji: "🖌️", color: "from-pink-400 to-blue-500",
    directUrl: "https://www.krea.ai/?via=aiwebtools", imageUrl: kreaRealtimeHero,
    tags: ["Krea", "Krea Realtime", "realtime AI art", "video to video", "AI canvas", "live image generation", "Image Generation"],
    category: "Image Generation", rating: 4.8,
  },
];