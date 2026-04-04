
import { Tool } from "@/types/tools";
import { Brain, Code, Database, Shield, Zap, Search, Cpu, Globe, Layers, BarChart3, Eye, MessageSquare, Palette, Music, Video, FileText, BookOpen, Wrench, Server, Bot, Lock, Briefcase, Heart, Lightbulb, Rocket } from "lucide-react";

import dataikuHero from "@/assets/tools/dataiku-hero.jpg";
import e2bHero from "@/assets/tools/e2b-hero.jpg";
import promptfooHero from "@/assets/tools/promptfoo-hero.jpg";
import mstyHero from "@/assets/tools/msty-hero.jpg";
import librechatHero from "@/assets/tools/librechat-hero.jpg";
import nomicHero from "@/assets/tools/nomic-hero.jpg";
import pearaiHero from "@/assets/tools/pearai-hero.jpg";
import boltdiyHero from "@/assets/tools/bolt-diy-hero.jpg";
import anythingllmHero from "@/assets/tools/anythingllm-hero.jpg";
import localaiHero from "@/assets/tools/localai-hero.jpg";
import llamafileHero from "@/assets/tools/llamafile-hero.jpg";
import litellmHero from "@/assets/tools/litellm-hero.jpg";
import vllmHero from "@/assets/tools/vllm-hero.jpg";
import mlxHero from "@/assets/tools/mlx-hero.jpg";
import googleidxHero from "@/assets/tools/google-idx-hero.jpg";
import gitpodHero from "@/assets/tools/gitpod-hero.jpg";
import lobechatHero from "@/assets/tools/lobechat-hero.jpg";
import mlflowHero from "@/assets/tools/mlflow-hero.jpg";
import neptuneHero from "@/assets/tools/neptune-hero.jpg";
import langtraceHero from "@/assets/tools/langtrace-hero.jpg";
import pezzoHero from "@/assets/tools/pezzo-hero.jpg";
import lastmileHero from "@/assets/tools/lastmile-hero.jpg";
import twilioHero from "@/assets/tools/twilio-hero.jpg";
import sendbirdHero from "@/assets/tools/sendbird-hero.jpg";
import dagsterHero from "@/assets/tools/dagster-hero.jpg";

export const mustHaveToolsBatch2026: Tool[] = [
  {
    icon: Database,
    title: "Dataiku",
    description: "Enterprise AI platform for data science, machine learning, and AI agent orchestration. Build, deploy, and govern AI systems at scale with a collaborative no-code to pro-code environment trusted by Fortune 500 companies worldwide.",
    emoji: "🔬",
    color: "from-blue-600 to-indigo-700",
    directUrl: "https://www.dataiku.com/?via=aiwebtools",
    imageUrl: dataikuHero,
    tags: ["data science", "machine learning", "enterprise AI", "MLOps", "AI governance", "no-code", "analytics"],
    category: "Data & Analytics",
    rating: 4.7,
    totalVotes: 8920
  },
  {
    icon: Code,
    title: "E2B",
    description: "Cloud sandboxes for AI-generated code execution. Run untrusted code safely in isolated environments designed specifically for AI agents, LLM apps, and code interpreters with sub-second startup times.",
    emoji: "📦",
    color: "from-orange-500 to-red-600",
    directUrl: "https://e2b.dev/?via=aiwebtools",
    imageUrl: e2bHero,
    tags: ["code sandbox", "AI agents", "code execution", "developer tools", "cloud infrastructure", "LLM"],
    category: "Coding & Development",
    rating: 4.5,
    totalVotes: 3450
  },
  {
    icon: Shield,
    title: "Promptfoo",
    description: "Open-source LLM testing and evaluation framework. Test prompts, compare models, catch regressions, and red-team your AI applications with automated evaluation pipelines for production-grade reliability.",
    emoji: "🧪",
    color: "from-green-500 to-teal-600",
    directUrl: "https://www.promptfoo.dev/?via=aiwebtools",
    imageUrl: promptfooHero,
    tags: ["LLM testing", "prompt engineering", "AI evaluation", "red teaming", "open source", "developer tools"],
    category: "AI Agents & Automation",
    rating: 4.6,
    totalVotes: 2890
  },
  {
    icon: Cpu,
    title: "Msty",
    description: "Beautiful desktop app to run AI models locally on your Mac, Windows, or Linux. Chat with multiple LLMs offline, manage models, and keep your data completely private with a sleek native interface.",
    emoji: "🖥️",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://msty.app/?via=aiwebtools",
    imageUrl: mstyHero,
    tags: ["local AI", "desktop app", "offline AI", "privacy", "LLM", "open source"],
    category: "AI Chat & Assistants",
    rating: 4.4,
    totalVotes: 2340
  },
  {
    icon: MessageSquare,
    title: "LibreChat",
    description: "Free, open-source AI chat platform supporting ChatGPT, Claude, Gemini, and local models in one unified interface. Self-host your own AI chat with plugins, file uploads, and multi-model conversations.",
    emoji: "💬",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://www.librechat.ai/?via=aiwebtools",
    imageUrl: librechatHero,
    tags: ["open source", "AI chat", "self-hosted", "multi-model", "ChatGPT alternative", "privacy"],
    category: "AI Chat & Assistants",
    rating: 4.5,
    totalVotes: 4120
  },
  {
    icon: Globe,
    title: "Nomic AI",
    description: "Open-source AI platform for embeddings, data visualization, and atlas mapping. Create interactive maps of your data, explore datasets visually, and use state-of-the-art embedding models for search and RAG.",
    emoji: "🗺️",
    color: "from-indigo-500 to-violet-600",
    directUrl: "https://www.nomic.ai/?via=aiwebtools",
    imageUrl: nomicHero,
    tags: ["embeddings", "data visualization", "open source", "vector database", "RAG", "machine learning"],
    category: "Data & Analytics",
    rating: 4.3,
    totalVotes: 1890
  },
  {
    icon: Code,
    title: "PearAI",
    description: "Open-source AI-powered code editor built on VSCode. Features AI chat, inline editing, and autonomous coding agents that understand your full codebase for seamless pair programming with AI.",
    emoji: "🍐",
    color: "from-green-400 to-emerald-600",
    directUrl: "https://trypear.ai/?via=aiwebtools",
    imageUrl: pearaiHero,
    tags: ["AI code editor", "open source", "VSCode", "pair programming", "coding agent", "developer tools"],
    category: "Coding & Development",
    rating: 4.2,
    totalVotes: 2670
  },
  {
    icon: Zap,
    title: "Bolt DIY",
    description: "Open-source version of Bolt.new for self-hosting. Build full-stack web applications with AI using any LLM provider. Deploy your own AI app builder with complete control over models and infrastructure.",
    emoji: "⚡",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://github.com/stackblitz-labs/bolt.diy?via=aiwebtools",
    imageUrl: boltdiyHero,
    tags: ["open source", "web builder", "AI coding", "self-hosted", "full-stack", "app builder"],
    category: "Coding & Development",
    rating: 4.4,
    totalVotes: 5670
  },
  {
    icon: Brain,
    title: "AnythingLLM",
    description: "All-in-one desktop and Docker AI app. Chat with documents, use any LLM, build AI agents, and create custom workspaces. The most complete open-source enterprise-ready RAG and AI chat application.",
    emoji: "🤖",
    color: "from-slate-600 to-gray-800",
    directUrl: "https://anythingllm.com/?via=aiwebtools",
    imageUrl: anythingllmHero,
    tags: ["RAG", "document chat", "open source", "AI agents", "enterprise", "local AI", "desktop"],
    category: "AI Chat & Assistants",
    rating: 4.6,
    totalVotes: 7890
  },
  {
    icon: Server,
    title: "LocalAI",
    description: "Free, open-source OpenAI-compatible API to run AI models locally. Drop-in replacement for OpenAI with support for text, image, audio generation, embeddings, and more — all without GPU required.",
    emoji: "🏠",
    color: "from-teal-500 to-cyan-700",
    directUrl: "https://localai.io/?via=aiwebtools",
    imageUrl: localaiHero,
    tags: ["local AI", "open source", "OpenAI compatible", "API", "self-hosted", "privacy", "free"],
    category: "AI Inference Platforms",
    rating: 4.3,
    totalVotes: 3560
  },
  {
    icon: Cpu,
    title: "Llamafile",
    description: "Run LLMs with a single file — no installation needed. Mozilla's revolutionary approach bundles AI models into executable files that run on any OS, making local AI truly portable and accessible.",
    emoji: "🦙",
    color: "from-amber-500 to-yellow-700",
    directUrl: "https://github.com/Mozilla-Ocho/llamafile?via=aiwebtools",
    imageUrl: llamafileHero,
    tags: ["local AI", "portable", "open source", "Mozilla", "LLM", "no installation", "cross-platform"],
    category: "AI Inference Platforms",
    rating: 4.5,
    totalVotes: 4230
  },
  {
    icon: Layers,
    title: "LiteLLM",
    description: "Universal API gateway for 100+ LLM providers. Call OpenAI, Anthropic, Google, Azure, and more through one unified API. Includes load balancing, spend tracking, and rate limiting for production use.",
    emoji: "🔌",
    color: "from-blue-400 to-indigo-600",
    directUrl: "https://www.litellm.ai/?via=aiwebtools",
    imageUrl: litellmHero,
    tags: ["LLM gateway", "API proxy", "multi-provider", "developer tools", "load balancing", "open source"],
    category: "AI Agents & Automation",
    rating: 4.4,
    totalVotes: 3120
  },
  {
    icon: Rocket,
    title: "vLLM",
    description: "High-throughput and memory-efficient LLM serving engine. Deploy AI models with PagedAttention for up to 24x higher throughput than HuggingFace Transformers. The industry standard for LLM inference.",
    emoji: "🚀",
    color: "from-red-500 to-rose-700",
    directUrl: "https://docs.vllm.ai/?via=aiwebtools",
    imageUrl: vllmHero,
    tags: ["LLM serving", "inference", "high throughput", "open source", "GPU optimization", "deployment"],
    category: "AI Inference Platforms",
    rating: 4.7,
    totalVotes: 6780
  },
  {
    icon: Cpu,
    title: "MLX",
    description: "Apple's machine learning framework optimized for Apple Silicon. Run and fine-tune AI models natively on M-series Macs with incredible speed. Supports LLMs, image models, and speech AI locally.",
    emoji: "🍎",
    color: "from-gray-700 to-slate-900",
    directUrl: "https://github.com/ml-explore/mlx?via=aiwebtools",
    imageUrl: mlxHero,
    tags: ["Apple Silicon", "machine learning", "local AI", "open source", "Mac", "fine-tuning", "inference"],
    category: "AI Inference Platforms",
    rating: 4.6,
    totalVotes: 5430
  },
  {
    icon: Code,
    title: "Google IDX",
    description: "Google's AI-powered cloud IDE for full-stack development. Build web and mobile apps in the browser with built-in Gemini AI assistance, instant previews, and one-click deployment to Google Cloud.",
    emoji: "☁️",
    color: "from-blue-500 to-green-500",
    directUrl: "https://idx.dev/?via=aiwebtools",
    imageUrl: googleidxHero,
    tags: ["cloud IDE", "Google", "AI coding", "full-stack", "Gemini", "web development", "mobile"],
    category: "Coding & Development",
    rating: 4.3,
    totalVotes: 4560
  },
  {
    icon: Code,
    title: "Gitpod",
    description: "Cloud development environments that spin up in seconds. Automated, standardized dev environments for teams with AI-powered coding assistance, prebuilt workspaces, and seamless GitHub integration.",
    emoji: "🔧",
    color: "from-orange-400 to-amber-600",
    directUrl: "https://www.gitpod.io/?via=aiwebtools",
    imageUrl: gitpodHero,
    tags: ["cloud IDE", "dev environments", "GitHub", "CI/CD", "developer tools", "remote development"],
    category: "Coding & Development",
    rating: 4.4,
    totalVotes: 5890
  },
  {
    icon: MessageSquare,
    title: "LobeChat",
    description: "Modern open-source AI chat framework supporting multiple AI providers, plugins, knowledge base, and multi-modal interactions. Beautiful UI with function calling, TTS, and vision capabilities built-in.",
    emoji: "🤗",
    color: "from-violet-500 to-purple-700",
    directUrl: "https://lobehub.com/?via=aiwebtools",
    imageUrl: lobechatHero,
    tags: ["open source", "AI chat", "multi-modal", "plugins", "TTS", "self-hosted", "knowledge base"],
    category: "AI Chat & Assistants",
    rating: 4.5,
    totalVotes: 6340
  },
  {
    icon: BarChart3,
    title: "MLflow",
    description: "Open-source platform for the complete machine learning lifecycle. Track experiments, package models, manage deployments, and create a central model registry. The industry standard for MLOps workflows.",
    emoji: "📊",
    color: "from-blue-600 to-sky-700",
    directUrl: "https://mlflow.org/?via=aiwebtools",
    imageUrl: mlflowHero,
    tags: ["MLOps", "experiment tracking", "model registry", "open source", "machine learning", "deployment"],
    category: "Data & Analytics",
    rating: 4.6,
    totalVotes: 9120
  },
  {
    icon: Eye,
    title: "Neptune AI",
    description: "Experiment tracking and model registry for ML teams. Log, visualize, and compare experiments across your team. Built for scale with enterprise-grade collaboration and governance features.",
    emoji: "🔱",
    color: "from-cyan-600 to-teal-700",
    directUrl: "https://neptune.ai/?via=aiwebtools",
    imageUrl: neptuneHero,
    tags: ["experiment tracking", "MLOps", "model registry", "collaboration", "machine learning", "enterprise"],
    category: "Data & Analytics",
    rating: 4.4,
    totalVotes: 3670
  },
  {
    icon: Search,
    title: "Langtrace",
    description: "Open-source observability tool for LLM applications. Monitor, debug, and optimize your AI apps with distributed tracing, prompt analytics, and cost tracking across all major LLM providers.",
    emoji: "🔍",
    color: "from-emerald-500 to-green-700",
    directUrl: "https://www.langtrace.ai/?via=aiwebtools",
    imageUrl: langtraceHero,
    tags: ["LLM observability", "tracing", "monitoring", "open source", "AI debugging", "analytics"],
    category: "AI Agents & Automation",
    rating: 4.3,
    totalVotes: 1890
  },
  {
    icon: Wrench,
    title: "Pezzo AI",
    description: "Open-source LLMOps platform for prompt management, version control, and AI operations. Centralize prompt engineering, track costs, monitor performance, and collaborate on AI development workflows.",
    emoji: "⚙️",
    color: "from-pink-500 to-rose-600",
    directUrl: "https://www.pezzo.ai/?via=aiwebtools",
    imageUrl: pezzoHero,
    tags: ["LLMOps", "prompt management", "version control", "open source", "AI operations", "monitoring"],
    category: "AI Agents & Automation",
    rating: 4.2,
    totalVotes: 1560
  },
  {
    icon: Bot,
    title: "LastMile AI",
    description: "AI development platform for building, evaluating, and deploying AI applications. Features AI Workbooks for prototyping, AutoEval for testing, and production-ready deployment pipelines.",
    emoji: "🏁",
    color: "from-indigo-600 to-blue-800",
    directUrl: "https://lastmileai.dev/?via=aiwebtools",
    imageUrl: lastmileHero,
    tags: ["AI development", "evaluation", "prototyping", "deployment", "LLM apps", "testing"],
    category: "AI Agents & Automation",
    rating: 4.3,
    totalVotes: 2120
  },
  {
    icon: MessageSquare,
    title: "Twilio AI",
    description: "Build AI-powered communication experiences at scale. Programmable voice, messaging, video, and email APIs with built-in AI assistants for customer engagement across every channel worldwide.",
    emoji: "📞",
    color: "from-red-500 to-pink-600",
    directUrl: "https://www.twilio.com/en-us/ai?via=aiwebtools",
    imageUrl: twilioHero,
    tags: ["communication API", "voice AI", "messaging", "customer engagement", "enterprise", "omnichannel"],
    category: "Business & Productivity",
    rating: 4.5,
    totalVotes: 12450
  },
  {
    icon: MessageSquare,
    title: "Sendbird AI Chatbot",
    description: "Enterprise AI chatbot platform for customer support, sales, and engagement. Build intelligent chat experiences with LLM-powered agents, knowledge base integration, and omnichannel messaging at scale.",
    emoji: "💬",
    color: "from-purple-600 to-indigo-700",
    directUrl: "https://sendbird.com/ai-chatbot?via=aiwebtools",
    imageUrl: sendbirdHero,
    tags: ["AI chatbot", "customer support", "enterprise", "messaging", "LLM", "omnichannel"],
    category: "Business & Productivity",
    rating: 4.4,
    totalVotes: 5670
  },
  {
    icon: Database,
    title: "Dagster",
    description: "Cloud-native data orchestration platform. Build, test, and deploy data pipelines with built-in AI/ML integration, asset-based programming, and enterprise-grade observability for modern data teams.",
    emoji: "🔄",
    color: "from-teal-600 to-emerald-800",
    directUrl: "https://dagster.io/?via=aiwebtools",
    imageUrl: dagsterHero,
    tags: ["data orchestration", "data pipelines", "MLOps", "ETL", "analytics", "open source", "enterprise"],
    category: "Data & Analytics",
    rating: 4.5,
    totalVotes: 4890
  }
];
