import { Tool } from "@/types/tools";
import { Mic, Brain, Sparkles, Compass, Image as ImageIcon, Wand2, Headphones, Camera, User, Cpu, Search, Database, BarChart3, Activity, Code, Bot } from "lucide-react";

import sesameHero from "@/assets/tools/sesame-ai-hero.jpg";
import mercuryHero from "@/assets/tools/mercury-inception-hero.jpg";
import sakanaHero from "@/assets/tools/sakana-ai-hero.jpg";
import liquidHero from "@/assets/tools/liquid-ai-hero.jpg";
import cohereNorthHero from "@/assets/tools/cohere-north-hero.jpg";
import reveHero from "@/assets/tools/reve-image-hero.jpg";
import fluxKontextHero from "@/assets/tools/flux-kontext-hero.jpg";
import whiskHero from "@/assets/tools/whisk-google-hero.jpg";
import wisprHero from "@/assets/tools/wispr-flow-hero.jpg";
import superwhisperHero from "@/assets/tools/superwhisper-hero.jpg";
import aragonHero from "@/assets/tools/aragon-ai-hero.jpg";
import photoaiHero from "@/assets/tools/photoai-hero.jpg";
import cerebrasHero from "@/assets/tools/cerebras-hero.jpg";
import voyageHero from "@/assets/tools/voyage-ai-hero.jpg";
import jinaHero from "@/assets/tools/jina-ai-hero.jpg";
import qdrantHero from "@/assets/tools/qdrant-hero.jpg";
import braintrustHero from "@/assets/tools/braintrust-hero.jpg";
import heliconeHero from "@/assets/tools/helicone-hero.jpg";
import clineHero from "@/assets/tools/cline-hero.jpg";
import gooseHero from "@/assets/tools/goose-block-hero.jpg";

export const newFrontierBatch2026Jun: Tool[] = [
  {
    icon: Mic, title: "Sesame AI",
    description: "Sesame's Conversational Speech Model (CSM) powers astonishingly human voice companions Maya and Miles, with emotional presence, natural pacing, and real-time interruption handling. The voice AI that finally crossed the uncanny valley.",
    emoji: "🎙️", color: "from-purple-600 to-teal-500",
    directUrl: "https://www.sesame.com/?via=aiwebtools", imageUrl: sesameHero,
    tags: ["voice AI", "conversational AI", "Sesame", "Maya", "Miles", "CSM", "speech model", "AI companion", "natural voice"],
    category: "Audio & Music", rating: 4.8,
  },
  {
    icon: Brain, title: "Mercury by Inception Labs",
    description: "Mercury is the world's first commercial-scale diffusion large language model, generating text up to 10x faster than autoregressive LLMs while matching frontier quality. A breakthrough in how language models are built.",
    emoji: "💧", color: "from-cyan-500 to-blue-700",
    directUrl: "https://www.inceptionlabs.ai/?via=aiwebtools", imageUrl: mercuryHero,
    tags: ["Mercury", "Inception Labs", "diffusion LLM", "language model", "fast inference", "AI research", "dLLM"],
    category: "AI Inference Platforms", rating: 4.7,
  },
  {
    icon: Sparkles, title: "Sakana AI",
    description: "Sakana AI builds nature-inspired foundation models and the renowned AI Scientist — an autonomous agent that conducts end-to-end machine learning research, generates novel ideas, writes papers, and reviews them.",
    emoji: "🐟", color: "from-red-500 to-pink-600",
    directUrl: "https://sakana.ai/?via=aiwebtools", imageUrl: sakanaHero,
    tags: ["Sakana AI", "AI Scientist", "research agent", "foundation models", "nature-inspired AI", "autonomous research"],
    category: "Research & Academic Tools", rating: 4.7,
  },
  {
    icon: Brain, title: "Liquid AI",
    description: "Liquid AI builds Liquid Foundation Models (LFMs) — efficient, general-purpose models inspired by dynamical systems and neuroscience that outperform transformers at the same scale with a fraction of the memory footprint.",
    emoji: "🌊", color: "from-blue-600 to-violet-700",
    directUrl: "https://www.liquid.ai/?via=aiwebtools", imageUrl: liquidHero,
    tags: ["Liquid AI", "LFM", "Liquid Foundation Models", "edge AI", "efficient AI", "foundation models", "MIT spinout"],
    category: "AI Inference Platforms", rating: 4.7,
  },
  {
    icon: Compass, title: "Cohere North",
    description: "Cohere North is a secure, customizable AI workspace for the enterprise — connecting your team to internal data, tools, and agents with private deployment, fine-grained controls, and a fully agentic interface.",
    emoji: "🧭", color: "from-amber-500 to-orange-700",
    directUrl: "https://cohere.com/north/?via=aiwebtools", imageUrl: cohereNorthHero,
    tags: ["Cohere", "North", "enterprise AI", "AI workspace", "private AI", "agent platform", "secure AI", "Command"],
    category: "AI Agents", rating: 4.6,
  },
  {
    icon: ImageIcon, title: "Reve Image",
    description: "Reve Image is a frontier text-to-image model engineered for prompt adherence, aesthetics, and typography. Generates striking, on-brand visuals with razor-sharp text rendering and editorial polish.",
    emoji: "🎨", color: "from-pink-500 to-fuchsia-700",
    directUrl: "https://reve.art/?via=aiwebtools", imageUrl: reveHero,
    tags: ["Reve", "Reve Image", "text to image", "AI image generation", "prompt adherence", "typography", "image model"],
    category: "Image & Design", rating: 4.6,
  },
  {
    icon: Wand2, title: "FLUX.1 Kontext",
    description: "FLUX.1 Kontext by Black Forest Labs is a context-aware image generation and editing model that preserves identity, style, and composition across edits — instruction-driven editing at frontier quality.",
    emoji: "🌲", color: "from-emerald-600 to-green-800",
    directUrl: "https://bfl.ai/?via=aiwebtools", imageUrl: fluxKontextHero,
    tags: ["FLUX", "FLUX.1 Kontext", "Black Forest Labs", "image editing", "image generation", "context aware", "instruction editing"],
    category: "Image & Design", rating: 4.8,
  },
  {
    icon: ImageIcon, title: "Whisk by Google Labs",
    description: "Whisk is a Google Labs experiment that lets you remix images by combining a subject, scene, and style — no prompt required. Mix three reference images and watch Imagen produce a brand new visual.",
    emoji: "🥣", color: "from-blue-500 to-yellow-500",
    directUrl: "https://labs.google/fx/tools/whisk/?via=aiwebtools", imageUrl: whiskHero,
    tags: ["Whisk", "Google Labs", "image remix", "Imagen", "visual remix", "AI image", "Gemini image"],
    category: "Image & Design", rating: 4.5,
  },
  {
    icon: Mic, title: "Wispr Flow",
    description: "Wispr Flow is the fastest AI dictation app — speak naturally and watch perfectly punctuated, context-aware text appear in any app, 3x faster than typing with auto-formatting and tone control.",
    emoji: "💨", color: "from-sky-400 to-blue-600",
    directUrl: "https://wisprflow.ai/?via=aiwebtools", imageUrl: wisprHero,
    tags: ["Wispr", "Wispr Flow", "AI dictation", "voice to text", "transcription", "productivity", "speech to text"],
    category: "Productivity & Utilities", rating: 4.7,
  },
  {
    icon: Headphones, title: "Superwhisper",
    description: "Superwhisper is a powerful local AI voice transcription app for macOS and iOS — speak to type anywhere with private, on-device Whisper models, custom modes, and lightning-fast accuracy.",
    emoji: "🎤", color: "from-violet-600 to-purple-800",
    directUrl: "https://superwhisper.com/?via=aiwebtools", imageUrl: superwhisperHero,
    tags: ["Superwhisper", "voice transcription", "Whisper", "macOS dictation", "iOS dictation", "local AI", "privacy"],
    category: "Productivity & Utilities", rating: 4.7,
    platform: "cross-platform", platforms: ["macOS", "iOS"],
  },
  {
    icon: Camera, title: "Aragon AI",
    description: "Aragon AI generates studio-quality professional headshots from your selfies in under an hour — perfect for LinkedIn, resumes, and corporate profiles. Trained on stylist-curated wardrobes and lighting.",
    emoji: "📸", color: "from-slate-600 to-blue-700",
    directUrl: "https://www.aragon.ai/?via=aiwebtools", imageUrl: aragonHero,
    tags: ["Aragon AI", "AI headshots", "professional photos", "LinkedIn photos", "corporate headshots", "selfie to portrait"],
    category: "Image & Design", rating: 4.6,
  },
  {
    icon: User, title: "PhotoAI",
    description: "PhotoAI by Pieter Levels trains an AI model on your face and generates unlimited photorealistic photos of yourself in any setting, outfit, or scenario — lifestyle, fashion, fitness, dating, and pro headshots.",
    emoji: "🖼️", color: "from-orange-400 to-rose-600",
    directUrl: "https://photoai.com/?via=aiwebtools", imageUrl: photoaiHero,
    tags: ["PhotoAI", "Pieter Levels", "AI photos", "personal AI model", "lifestyle photography", "AI portraits", "indie SaaS"],
    category: "Image & Design", rating: 4.5,
  },
  {
    icon: Cpu, title: "Cerebras Inference",
    description: "Cerebras Inference runs Llama, Qwen, and DeepSeek on the world's largest AI chip — delivering up to 2,100 tokens per second, the fastest LLM inference on the planet. Real-time AI at unprecedented speed.",
    emoji: "⚡", color: "from-orange-600 to-red-700",
    directUrl: "https://www.cerebras.ai/?via=aiwebtools", imageUrl: cerebrasHero,
    tags: ["Cerebras", "fast inference", "LLM hosting", "wafer scale", "Llama", "DeepSeek", "AI infrastructure", "ultra fast"],
    category: "AI Inference Platforms", rating: 4.8,
  },
  {
    icon: Search, title: "Voyage AI",
    description: "Voyage AI provides best-in-class embedding and reranker models for retrieval-augmented generation (RAG) — outperforming OpenAI embeddings on accuracy with domain-specific options for code, finance, and law.",
    emoji: "🚀", color: "from-indigo-600 to-blue-800",
    directUrl: "https://www.voyageai.com/?via=aiwebtools", imageUrl: voyageHero,
    tags: ["Voyage AI", "embeddings", "rerankers", "RAG", "semantic search", "vector embeddings", "retrieval"],
    category: "Developer Tools", rating: 4.7,
  },
  {
    icon: Search, title: "Jina AI",
    description: "Jina AI builds multimodal embeddings, rerankers, and a neural search stack — including Reader API that turns any URL into LLM-friendly markdown and DeepSearch for agentic web research.",
    emoji: "🔎", color: "from-teal-500 to-fuchsia-600",
    directUrl: "https://jina.ai/?via=aiwebtools", imageUrl: jinaHero,
    tags: ["Jina AI", "embeddings", "neural search", "Reader API", "DeepSearch", "multimodal", "open source AI"],
    category: "Developer Tools", rating: 4.6,
  },
  {
    icon: Database, title: "Qdrant",
    description: "Qdrant is an open-source, high-performance vector database written in Rust — powering production-scale semantic search, recommendations, and RAG with hybrid search and quantization built-in.",
    emoji: "💎", color: "from-red-500 to-rose-700",
    directUrl: "https://qdrant.tech/?via=aiwebtools", imageUrl: qdrantHero,
    tags: ["Qdrant", "vector database", "semantic search", "RAG", "Rust", "open source", "hybrid search", "vector store"],
    category: "Developer Tools", rating: 4.7,
  },
  {
    icon: BarChart3, title: "Braintrust",
    description: "Braintrust is the enterprise platform for LLM evaluation, experimentation, and observability — used by Notion, Airtable, and Stripe to ship AI features with confidence through systematic eval-driven development.",
    emoji: "🧠", color: "from-green-500 to-emerald-700",
    directUrl: "https://www.braintrust.dev/?via=aiwebtools", imageUrl: braintrustHero,
    tags: ["Braintrust", "LLM eval", "observability", "AI experimentation", "prompt eval", "AI ops", "LLMOps"],
    category: "Developer Tools", rating: 4.7,
  },
  {
    icon: Activity, title: "Helicone",
    description: "Helicone is the open-source LLM observability platform — log, monitor, and debug every prompt and completion across OpenAI, Anthropic, and any provider with one-line integration and real-time analytics.",
    emoji: "🌻", color: "from-yellow-400 to-amber-600",
    directUrl: "https://www.helicone.ai/?via=aiwebtools", imageUrl: heliconeHero,
    tags: ["Helicone", "LLM observability", "open source", "AI monitoring", "prompt logging", "LLM analytics", "LLMOps"],
    category: "Developer Tools", rating: 4.6,
  },
  {
    icon: Code, title: "Cline",
    description: "Cline is an autonomous AI coding agent for VS Code that plans, edits files, runs commands, and uses your terminal — supports Claude, GPT, Gemini, and local models with human-in-the-loop control.",
    emoji: "🤖", color: "from-cyan-400 to-blue-700",
    directUrl: "https://cline.bot/?via=aiwebtools", imageUrl: clineHero,
    tags: ["Cline", "AI coding agent", "VS Code", "autonomous coding", "Claude coding", "Coding Agent", "Developer Tools", "open source"],
    category: "Coding & Development", rating: 4.7,
  },
  {
    icon: Bot, title: "Goose by Block",
    description: "Goose is Block's open-source on-machine AI agent that automates engineering tasks end-to-end — runs locally, uses any LLM, and extends via MCP servers for everything from coding to data analysis.",
    emoji: "🦢", color: "from-emerald-400 to-teal-600",
    directUrl: "https://block.github.io/goose/?via=aiwebtools", imageUrl: gooseHero,
    tags: ["Goose", "Block", "open source agent", "on-machine AI", "MCP", "developer agent", "AI Agents", "autonomous agent"],
    category: "AI Agents", rating: 4.6,
  },
];