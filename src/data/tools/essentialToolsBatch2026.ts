import { Tool } from "@/types/tools";
import { Mic, Video, Search, Code, Zap, Layout, Brain, Wand2, Volume2, Bot, Workflow, Sparkles, Monitor } from "lucide-react";

import elevenlabsHero from "@/assets/tools/elevenlabs-hero.jpg";
import perplexityHero from "@/assets/tools/perplexity-hero.jpg";
import notebooklmHero from "@/assets/tools/notebooklm-hero.jpg";
import devinHero from "@/assets/tools/devin-hero.jpg";
import hailuoAiHero from "@/assets/tools/hailuo-ai-hero.jpg";
import minimaxHero from "@/assets/tools/minimax-hero.jpg";
import runwayGen4Hero from "@/assets/tools/runway-gen4-hero.jpg";
import dalleHero from "@/assets/tools/dalle-hero.jpg";
import makeHero from "@/assets/tools/make-hero.jpg";
import haiperHero from "@/assets/tools/haiper-hero.jpg";
import viggleHero from "@/assets/tools/viggle-hero.jpg";
import vizardAiHero from "@/assets/tools/vizard-ai-hero.jpg";
import elaiHero from "@/assets/tools/elai-hero.jpg";
import playhtHero from "@/assets/tools/playht-hero.jpg";
import lovoAiHero from "@/assets/tools/lovo-ai-hero.jpg";
import phindHero from "@/assets/tools/phind-hero.jpg";
import activepiecesHero from "@/assets/tools/activepieces-hero.jpg";
import domoaiHero from "@/assets/tools/domoai-hero.jpg";
import wanAiHero from "@/assets/tools/wan-ai-hero.jpg";
import flowiseaiHero from "@/assets/tools/flowiseai-hero.jpg";
import devvAiHero from "@/assets/tools/devv-ai-hero.jpg";
import andiSearchHero from "@/assets/tools/andi-search-hero.jpg";
import relumeHero from "@/assets/tools/relume-hero.jpg";
import webflowAiHero from "@/assets/tools/webflow-ai-hero.jpg";
import openaiCodexHero from "@/assets/tools/openai-codex-hero.jpg";

export const essentialToolsBatch2026: Tool[] = [
  {
    icon: Mic,
    title: "ElevenLabs",
    description: "The most realistic AI voice generator and text-to-speech platform. Create lifelike voiceovers in 32 languages with emotion control, voice cloning, and real-time dubbing. Used by Hollywood studios and top creators worldwide for audiobooks, podcasts, and video narration.",
    emoji: "🎙️",
    color: "from-purple-600 to-indigo-700",
    directUrl: "https://elevenlabs.io/?via=aiwebtools",
    imageUrl: elevenlabsHero,
    tags: ["text to speech", "voice cloning", "AI voice", "voiceover", "dubbing", "audiobook", "voice synthesis", "speech generation", "voice AI", "audio AI"],
    category: "Audio & Music",
    rating: 4.9,
    totalVotes: 12450
  },
  {
    icon: Search,
    title: "Perplexity",
    description: "AI-powered answer engine that combines real-time web search with large language models to deliver accurate, cited answers. Features Pro Search for multi-step reasoning, academic mode, and structured outputs. The fastest way to get grounded, up-to-date answers with sources.",
    emoji: "🔍",
    color: "from-teal-500 to-cyan-600",
    directUrl: "https://perplexity.ai/?via=aiwebtools",
    imageUrl: perplexityHero,
    tags: ["AI search", "answer engine", "research", "citations", "web search", "question answering", "real-time search", "knowledge engine", "fact finding"],
    category: "Research & Academic",
    rating: 4.9,
    totalVotes: 18200
  },
  {
    icon: Brain,
    title: "NotebookLM",
    description: "Google's AI-powered research assistant that transforms your documents into interactive knowledge bases. Upload PDFs, websites, and notes to get AI-generated summaries, Q&A, and even podcast-style audio overviews. The ultimate tool for students, researchers, and knowledge workers.",
    emoji: "📓",
    color: "from-blue-500 to-green-500",
    directUrl: "https://notebooklm.google.com",
    imageUrl: notebooklmHero,
    tags: ["Google AI", "research assistant", "document analysis", "audio overview", "podcast", "note-taking", "study tool", "knowledge base", "PDF analysis"],
    category: "Research & Academic",
    rating: 4.8,
    totalVotes: 9870
  },
  {
    icon: Code,
    title: "Devin",
    description: "The world's first fully autonomous AI software engineer by Cognition. Devin can plan, code, debug, and deploy entire projects end-to-end. It uses its own shell, browser, and code editor to solve complex engineering tasks, write tests, and ship production-ready code autonomously.",
    emoji: "🤖",
    color: "from-green-600 to-emerald-700",
    directUrl: "https://devin.ai/?via=aiwebtools",
    imageUrl: devinHero,
    tags: ["autonomous coding", "AI engineer", "software development", "code generation", "debugging", "full-stack AI", "Cognition", "AI agent", "coding agent"],
    category: "Coding & Development",
    rating: 4.7,
    totalVotes: 8540
  },
  {
    icon: Video,
    title: "Hailuo AI",
    description: "Leading AI video generation platform by MiniMax featuring state-of-the-art text-to-video and image-to-video capabilities. Generates cinematic, high-quality videos with exceptional motion quality, character consistency, and prompt adherence. A top contender in the AI video space alongside Runway and Kling.",
    emoji: "🎬",
    color: "from-amber-500 to-orange-600",
    directUrl: "https://hailuoai.video/?via=aiwebtools",
    imageUrl: hailuoAiHero,
    tags: ["text to video", "AI video", "video generation", "cinematic AI", "MiniMax", "image to video", "video creator", "motion generation"],
    category: "Video & Animation Tools",
    rating: 4.8,
    totalVotes: 7650
  },
  {
    icon: Brain,
    title: "Minimax",
    description: "Powerful Chinese AI lab behind Hailuo AI, offering multimodal AI models for text, video, voice, and music generation. Their Video-01 and Music-01 models rival the best in the industry, delivering stunning creative outputs across multiple modalities from a single platform.",
    emoji: "🧠",
    color: "from-red-500 to-orange-600",
    directUrl: "https://www.minimaxi.com/?via=aiwebtools",
    imageUrl: minimaxHero,
    tags: ["multimodal AI", "video generation", "music generation", "text generation", "AI lab", "foundation model", "creative AI", "Chinese AI"],
    category: "AI Platforms",
    rating: 4.7,
    totalVotes: 5430
  },
  {
    icon: Video,
    title: "Runway Gen-4",
    description: "Runway's latest generation AI video model offering unprecedented cinematic quality, character consistency, and creative control. Gen-4 produces Hollywood-grade footage with precise camera movements, coherent multi-shot narratives, and photorealistic visual fidelity that transforms filmmaking.",
    emoji: "🎥",
    color: "from-purple-600 to-pink-600",
    directUrl: "https://runwayml.com/?via=aiwebtools",
    imageUrl: runwayGen4Hero,
    tags: ["AI video", "text to video", "video generation", "cinematic AI", "filmmaking", "Gen-4", "Runway", "creative AI", "video editing"],
    category: "Video & Animation Tools",
    rating: 4.9,
    totalVotes: 15600
  },
  {
    icon: Sparkles,
    title: "DALL-E",
    description: "OpenAI's groundbreaking AI image generation model that creates stunning, photorealistic images from text descriptions. DALL-E 3 features native ChatGPT integration, exceptional prompt understanding, and the ability to generate text within images accurately. The gold standard of AI image creation.",
    emoji: "🎨",
    color: "from-emerald-500 to-teal-600",
    directUrl: "https://openai.com/dall-e-3/?via=aiwebtools",
    imageUrl: dalleHero,
    tags: ["AI image", "text to image", "image generation", "OpenAI", "DALL-E 3", "art generation", "photorealistic", "creative AI", "digital art"],
    category: "Image & Design",
    rating: 4.9,
    totalVotes: 22000
  },
  {
    icon: Workflow,
    title: "Make",
    description: "Visual automation platform (formerly Integromat) that connects 1,800+ apps and services with powerful AI-enhanced workflows. Build complex multi-step automations with a drag-and-drop interface, AI agents, branching logic, and error handling — no coding required.",
    emoji: "⚙️",
    color: "from-purple-600 to-violet-700",
    directUrl: "https://www.make.com/?via=aiwebtools",
    imageUrl: makeHero,
    tags: ["automation", "workflow", "no-code", "integrations", "API", "Integromat", "business automation", "AI automation", "task automation"],
    category: "Business & Productivity",
    rating: 4.8,
    totalVotes: 11200
  },
  {
    icon: Video,
    title: "Haiper",
    description: "AI-powered video creation platform built by former Google DeepMind researchers. Generate high-quality videos from text or images with exceptional motion realism and creative control. Features video-to-video transformation, animation, and real-time rendering at accessible pricing.",
    emoji: "✨",
    color: "from-indigo-600 to-blue-700",
    directUrl: "https://haiper.ai/?via=aiwebtools",
    imageUrl: haiperHero,
    tags: ["AI video", "text to video", "video generation", "DeepMind", "animation", "video creation", "motion AI", "creative video"],
    category: "Video & Animation Tools",
    rating: 4.6,
    totalVotes: 4320
  },
  {
    icon: Bot,
    title: "Viggle",
    description: "Revolutionary AI character animation platform that brings any character to life with controllable body movements. Upload a character image and a motion reference to generate realistic animations — perfect for memes, social content, music videos, and creative projects.",
    emoji: "💃",
    color: "from-pink-500 to-fuchsia-600",
    directUrl: "https://viggle.ai/?via=aiwebtools",
    imageUrl: viggleHero,
    tags: ["character animation", "AI animation", "motion transfer", "video creation", "meme maker", "body animation", "creative AI", "social content"],
    category: "Video & Animation Tools",
    rating: 4.7,
    totalVotes: 6780
  },
  {
    icon: Video,
    title: "Vizard AI",
    description: "AI-powered video repurposing tool that automatically transforms long-form videos into viral short clips for TikTok, Reels, and Shorts. Features AI scene detection, auto-captioning, smart cropping, and one-click resizing to maximize content reach across all platforms.",
    emoji: "✂️",
    color: "from-teal-500 to-green-600",
    directUrl: "https://vizard.ai/?via=aiwebtools",
    imageUrl: vizardAiHero,
    tags: ["video repurposing", "short clips", "TikTok", "Reels", "Shorts", "auto caption", "video editing", "content creation", "social media"],
    category: "Video & Animation Tools",
    rating: 4.7,
    totalVotes: 5890
  },
  {
    icon: Monitor,
    title: "Elai",
    description: "Enterprise AI video platform that creates professional training, marketing, and presentation videos using photorealistic AI avatars. Choose from 80+ diverse avatars, 75+ languages, and customizable templates. No cameras, studios, or actors needed — just type your script.",
    emoji: "🎭",
    color: "from-blue-500 to-indigo-600",
    directUrl: "https://elai.io/?via=aiwebtools",
    imageUrl: elaiHero,
    tags: ["AI avatar", "video creation", "training video", "presentation", "text to video", "AI presenter", "enterprise video", "avatar video"],
    category: "Video & Animation Tools",
    rating: 4.6,
    totalVotes: 4560
  },
  {
    icon: Volume2,
    title: "PlayHT",
    description: "Ultra-realistic AI voice generator with the largest library of natural-sounding voices. Features instant voice cloning, emotion control, and real-time streaming. Create voiceovers for videos, podcasts, audiobooks, and IVR systems with voices indistinguishable from real humans.",
    emoji: "🔊",
    color: "from-orange-500 to-red-600",
    directUrl: "https://play.ht/?via=aiwebtools",
    imageUrl: playhtHero,
    tags: ["text to speech", "voice cloning", "AI voice", "voiceover", "audio generation", "voice synthesis", "podcast", "audiobook", "voice AI"],
    category: "Audio & Music",
    rating: 4.7,
    totalVotes: 6340
  },
  {
    icon: Mic,
    title: "LOVO AI",
    description: "Award-winning AI voice generator and text-to-speech platform with 500+ voices in 100+ languages. Features Genny, an AI-powered creative assistant for voice, video, and scriptwriting. Perfect for e-learning, marketing, explainer videos, and global content localization.",
    emoji: "🗣️",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://lovo.ai/?via=aiwebtools",
    imageUrl: lovoAiHero,
    tags: ["text to speech", "AI voice", "voice generator", "e-learning", "localization", "voice cloning", "video narration", "multilingual", "voice AI"],
    category: "Audio & Music",
    rating: 4.6,
    totalVotes: 5120
  },
  {
    icon: Search,
    title: "Phind",
    description: "AI-powered search engine built specifically for developers. Get instant, accurate answers to programming questions with code examples, explanations, and cited sources. Features pair programming mode and IDE integrations for VS Code, making it the go-to coding companion.",
    emoji: "💻",
    color: "from-green-600 to-teal-600",
    directUrl: "https://www.phind.com/?via=aiwebtools",
    imageUrl: phindHero,
    tags: ["developer search", "coding assistant", "programming", "code search", "AI search", "developer tools", "VS Code", "pair programming"],
    category: "Coding & Development",
    rating: 4.7,
    totalVotes: 7230
  },
  {
    icon: Zap,
    title: "Activepieces",
    description: "Open-source, no-code automation platform that connects your apps and automates workflows with AI-powered intelligence. Self-hostable alternative to Zapier with 200+ integrations, AI actions, and a visual workflow builder. Perfect for teams wanting full control over their automation infrastructure.",
    emoji: "🧩",
    color: "from-orange-500 to-blue-600",
    directUrl: "https://www.activepieces.com/?via=aiwebtools",
    imageUrl: activepiecesHero,
    tags: ["automation", "open source", "no-code", "workflow", "self-hosted", "integrations", "Zapier alternative", "AI automation"],
    category: "Business & Productivity",
    rating: 4.6,
    totalVotes: 3890
  },
  {
    icon: Wand2,
    title: "DomoAI",
    description: "AI-powered video and image style transfer tool that transforms any content into stunning anime, cartoon, pixel art, or artistic styles. Upload a video or image and instantly apply creative style transformations with exceptional quality and consistency across frames.",
    emoji: "🎌",
    color: "from-pink-500 to-purple-600",
    directUrl: "https://domoai.app/?via=aiwebtools",
    imageUrl: domoaiHero,
    tags: ["style transfer", "anime AI", "video transformation", "art style", "image to anime", "video to anime", "creative AI", "artistic filter"],
    category: "Video & Animation Tools",
    rating: 4.7,
    totalVotes: 5670
  },
  {
    icon: Video,
    title: "Wan AI",
    description: "Open-source video generation model by Alibaba delivering state-of-the-art cinematic quality. Wan 2.1 supports text-to-video, image-to-video, and video-to-video with exceptional character consistency and motion realism. Competitive with closed-source models while being fully open and self-hostable.",
    emoji: "🎞️",
    color: "from-red-600 to-amber-600",
    directUrl: "https://wan.video/?via=aiwebtools",
    imageUrl: wanAiHero,
    tags: ["open source", "text to video", "video generation", "Alibaba", "AI video", "image to video", "cinematic AI", "self-hosted"],
    category: "Video & Animation Tools",
    rating: 4.7,
    totalVotes: 4980
  },
  {
    icon: Workflow,
    title: "FlowiseAI",
    description: "Open-source drag-and-drop UI for building customized LLM applications, chatbots, and AI agents. Connect LangChain and LlamaIndex components visually without code. Build RAG pipelines, multi-agent systems, and custom AI workflows with a beautiful node-based interface.",
    emoji: "🔗",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://flowiseai.com/?via=aiwebtools",
    imageUrl: flowiseaiHero,
    tags: ["LLM builder", "no-code AI", "chatbot builder", "RAG", "LangChain", "AI agents", "open source", "workflow builder", "AI pipeline"],
    category: "AI Agents & Automation",
    rating: 4.7,
    totalVotes: 4560
  },
  {
    icon: Search,
    title: "Devv.ai",
    description: "Next-generation AI search engine designed exclusively for developers. Searches across GitHub, Stack Overflow, documentation, and the web to deliver precise, code-focused answers with working examples. Understands programming context and provides framework-specific solutions instantly.",
    emoji: "🔎",
    color: "from-amber-500 to-orange-600",
    directUrl: "https://devv.ai/?via=aiwebtools",
    imageUrl: devvAiHero,
    tags: ["developer search", "code search", "programming", "GitHub", "Stack Overflow", "documentation", "developer tools", "AI search"],
    category: "Coding & Development",
    rating: 4.6,
    totalVotes: 3450
  },
  {
    icon: Search,
    title: "Andi Search",
    description: "Conversational AI search engine that answers questions directly instead of showing links. Combines generative AI with live web data to provide clear, summarized answers with source citations. Features a clean, ad-free interface focused on knowledge discovery rather than advertising.",
    emoji: "💬",
    color: "from-sky-400 to-blue-500",
    directUrl: "https://andisearch.com/?via=aiwebtools",
    imageUrl: andiSearchHero,
    tags: ["AI search", "conversational search", "answer engine", "ad-free", "knowledge search", "question answering", "web search", "AI assistant"],
    category: "Research & Academic",
    rating: 4.5,
    totalVotes: 2890
  },
  {
    icon: Layout,
    title: "Relume",
    description: "AI-powered website design tool that generates complete sitemaps and wireframes from a simple text description. Exports directly to Figma and Webflow with production-ready component library. Accelerates web design workflow from weeks to minutes with intelligent layout generation.",
    emoji: "📐",
    color: "from-gray-700 to-blue-600",
    directUrl: "https://www.relume.io/?via=aiwebtools",
    imageUrl: relumeHero,
    tags: ["web design", "wireframing", "sitemap", "Figma", "Webflow", "UI design", "component library", "layout generation", "design tool"],
    category: "Image & Design",
    rating: 4.7,
    totalVotes: 4120
  },
  {
    icon: Layout,
    title: "Webflow AI",
    description: "Webflow's integrated AI assistant that helps you build professional websites faster with AI-powered layout generation, content writing, and page building. Describe what you need and Webflow AI creates responsive, production-ready designs using the full power of the Webflow visual editor.",
    emoji: "🌐",
    color: "from-blue-600 to-indigo-700",
    directUrl: "https://webflow.com/?via=aiwebtools",
    imageUrl: webflowAiHero,
    tags: ["web design", "website builder", "AI design", "no-code", "responsive design", "visual editor", "CMS", "web development"],
    category: "Coding & Development",
    rating: 4.8,
    totalVotes: 13400
  },
  {
    icon: Code,
    title: "OpenAI Codex",
    description: "OpenAI's cloud-based autonomous coding agent that runs in a sandboxed environment to write, test, and fix code independently. Codex handles multi-file edits, runs test suites, and submits pull requests — functioning as a tireless AI software engineer that works in parallel on your codebase.",
    emoji: "⚡",
    color: "from-green-600 to-emerald-600",
    directUrl: "https://openai.com/index/introducing-codex/?via=aiwebtools",
    imageUrl: openaiCodexHero,
    tags: ["autonomous coding", "AI engineer", "code generation", "OpenAI", "cloud coding", "software agent", "pull requests", "code review", "AI coding"],
    category: "Coding & Development",
    rating: 4.8,
    totalVotes: 9870
  }
];
