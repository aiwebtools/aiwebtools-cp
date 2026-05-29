import { Tool } from "@/types/tools";
import { Image, MessageCircle, Drama, Smartphone, Sparkles } from "lucide-react";

import invokeaiHero from "@/assets/tools/invokeai-hero.jpg";
import backyardAiHero from "@/assets/tools/backyard-ai-hero.jpg";
import sillytavernHero from "@/assets/tools/sillytavern-hero.jpg";
import mlcChatHero from "@/assets/tools/mlc-chat-hero.jpg";
import enchantedHero from "@/assets/tools/enchanted-hero.jpg";

/**
 * Offline Downloadable AI Programs & Mobile Apps — 2026 Batch
 * 5 free, fully downloadable, offline-first AI tools. Mobile apps are
 * clearly marked. Fully indexed, categorized, searchable.
 */
export const offlineDownloadableBatch2026: Tool[] = [
  {
    icon: Image,
    title: "InvokeAI",
    description:
      "InvokeAI is a free, open-source, fully offline creative AI suite for Stable Diffusion image generation. Runs 100% locally on Windows, macOS, and Linux — no cloud, no subscriptions, no data leaves your machine. Powerful node-based canvas, unified inpainting/outpainting, model manager for SDXL / SD 1.5 / Flux / community checkpoints, and a polished Web UI you install on your own PC. The most user-friendly local image-generation studio for creators, artists, and privacy-first builders.",
    emoji: "🎨",
    color: "from-emerald-500 to-cyan-600",
    directUrl: "https://github.com/invoke-ai/InvokeAI",
    imageUrl: invokeaiHero,
    isFree: true,
    tagline: "Free offline Stable Diffusion studio — runs locally on your own PC.",
    platform: "desktop",
    platforms: ["Windows", "macOS", "Linux"],
    tags: [
      "InvokeAI", "Invoke AI", "Invoke", "invokeai",
      "offline", "offline AI", "offline AI tool", "downloadable", "downloadable AI",
      "on-device", "on device", "local AI", "self-hosted AI",
      "free Stable Diffusion", "Stable Diffusion offline", "local image generation",
      "SDXL local", "Flux local", "AUTOMATIC1111 alternative", "ComfyUI alternative",
      "free AI image generator", "open source image AI", "node based image AI",
      "inpainting outpainting", "Image Generation", "Image Generators",
      "privacy first AI", "no cloud AI", "runs on your computer",
      "Windows AI app", "macOS AI app", "Linux AI app", "desktop AI app",
      "free AI tool", "open source AI"
    ],
    category: "Image Generators",
    rating: 4.8,
    totalVotes: 7820
  },
  {
    icon: MessageCircle,
    title: "Backyard AI",
    description:
      "Backyard AI (formerly Faraday) is a free, fully offline desktop app for running local large language models and chatting with AI companions on your own computer. One-click installer for Windows and macOS, built-in model downloader for Llama, Mistral, Qwen, DeepSeek, and other open models, no internet required after setup. Beautiful character creator, persistent memory, voice, image generation, and complete privacy — your conversations never leave your device. The easiest way to run a private, uncensored local LLM with a polished UI.",
    emoji: "🏡",
    color: "from-emerald-500 to-amber-500",
    directUrl: "https://backyard.ai/?via=aiwebtools",
    imageUrl: backyardAiHero,
    isFree: true,
    tagline: "Free offline desktop AI — run private local LLMs with one click.",
    platform: "desktop",
    platforms: ["Windows", "macOS"],
    tags: [
      "Backyard AI", "Backyard", "Faraday AI", "Faraday", "backyard.ai",
      "offline", "offline AI", "offline LLM", "downloadable", "downloadable AI",
      "on-device", "on device", "local LLM",
      "free local AI app", "private AI", "no cloud AI", "uncensored local AI",
      "Llama local", "Mistral local", "Qwen local", "DeepSeek local",
      "AI companion offline", "character chat offline", "roleplay AI offline",
      "LM Studio alternative", "Ollama alternative", "GPT4All alternative", "Jan AI alternative",
      "Windows AI app", "macOS AI app", "desktop AI app",
      "Chatbots & AI Assistants", "free AI tool", "open source friendly"
    ],
    category: "Chatbots & AI Assistants",
    rating: 4.7,
    totalVotes: 6240
  },
  {
    icon: Drama,
    title: "SillyTavern",
    description:
      "SillyTavern is a free, open-source, self-hosted offline frontend for local large language models — the most powerful chat & roleplay UI in the open AI ecosystem. Install it on Windows, macOS, Linux, or even Android via Termux, then point it at a local backend (KoboldCpp, Oobabooga, Ollama, LM Studio, llama.cpp) for 100% private, unlimited conversations with characters, world info, lorebooks, group chats, TTS, and image-gen extensions. MIT-licensed, no telemetry, no subscriptions, no cloud — the gold standard for serious local-AI users.",
    emoji: "🎭",
    color: "from-emerald-600 to-orange-500",
    directUrl: "https://github.com/SillyTavern/SillyTavern",
    imageUrl: sillytavernHero,
    isFree: true,
    tagline: "Free self-hosted offline LLM frontend — the power user's local AI UI.",
    platform: "cross-platform",
    platforms: ["Windows", "macOS", "Linux", "Android (Termux)"],
    tags: [
      "SillyTavern", "Silly Tavern", "sillytavern",
      "offline AI", "offline LLM frontend", "local LLM UI", "self-hosted AI",
      "downloadable AI app", "free roleplay AI", "AI roleplay offline",
      "KoboldCpp frontend", "Oobabooga frontend", "Ollama UI", "LM Studio UI",
      "llama.cpp frontend", "open source AI chat", "MIT license AI",
      "character chat", "lorebook", "world info", "group chat AI",
      "Open WebUI alternative", "AnythingLLM alternative",
      "Chatbots & AI Assistants", "free AI tool", "no telemetry AI",
      "Windows AI app", "macOS AI app", "Linux AI app", "runs on Android Termux"
    ],
    category: "Chatbots & AI Assistants",
    rating: 4.8,
    totalVotes: 9120
  },
  {
    icon: Smartphone,
    title: "MLC Chat (Mobile App)",
    description:
      "📱 MOBILE APP — MLC Chat is a free, fully offline AI chat app for iPhone and Android that runs real large language models directly on your phone using MLC LLM. No internet, no servers, no accounts — Phi-3, Llama 3, Gemma, Mistral and Qwen models execute on-device with hardware acceleration. Perfect for travel, airplane mode, sensitive conversations, or anyone who wants a private pocket AI assistant. Built by the CMU MLC team, MIT-licensed, free forever.",
    emoji: "📱",
    color: "from-emerald-500 to-teal-600",
    directUrl: "https://llm.mlc.ai/docs/deploy/ios.html",
    imageUrl: mlcChatHero,
    isFree: true,
    tagline: "📱 MOBILE APP • Free fully-offline on-device LLM chat for iOS & Android.",
    platform: "mobile",
    platforms: ["iOS", "Android"],
    tags: [
      "MLC Chat", "MLC LLM", "MLC", "mlc-chat", "mlc llm chat",
      "MOBILE APP", "mobile app", "iOS app", "Android app", "iPhone AI",
      "offline AI", "offline LLM mobile", "on-device AI", "on device LLM",
      "downloadable AI", "local AI phone", "private mobile AI", "airplane mode AI",
      "PocketPal alternative", "Enchanted alternative", "Layla alternative",
      "Llama on phone", "Phi-3 mobile", "Gemma mobile", "Mistral mobile", "Qwen mobile",
      "free AI tool", "open source mobile AI", "MIT license AI",
      "Mobile AI Apps", "Chatbots & AI Assistants", "privacy first mobile AI"
    ],
    category: "Chatbots & AI Assistants",
    rating: 4.6,
    totalVotes: 4980
  },
  {
    icon: Sparkles,
    title: "Enchanted (Mobile App)",
    description:
      "📱 MOBILE APP (iOS) — Enchanted is a free, open-source iPhone, iPad, Mac, and Apple Vision Pro app that gives you a beautiful native chat interface for your own offline Ollama server. Pair it with Ollama running on your home Mac or PC for a 100% private, no-cloud AI assistant that supports Llama 3, Mistral, Gemma, Phi, DeepSeek, and any model you've pulled — all over your local network. Polished Apple-grade UI, voice input, conversations sync across devices, MIT-licensed, no accounts, no telemetry. The most elegant way to talk to your own local LLM from your iPhone.",
    emoji: "✨",
    color: "from-emerald-500 to-violet-600",
    directUrl: "https://github.com/AugustDev/enchanted",
    imageUrl: enchantedHero,
    isFree: true,
    tagline: "📱 iOS MOBILE APP • Free native Ollama client — your offline LLM, beautifully.",
    platform: "mobile",
    platforms: ["iOS", "iPadOS", "macOS", "visionOS"],
    tags: [
      "Enchanted", "Enchanted app", "Enchanted Ollama", "enchanted ios",
      "MOBILE APP", "mobile app", "iOS app", "iPhone app", "iPad app", "macOS app", "Apple Vision Pro app",
      "offline AI", "offline LLM", "Ollama client", "Ollama mobile", "Ollama iOS",
      "downloadable AI", "local AI phone", "private mobile AI",
      "free Ollama app", "open source iOS AI", "MIT license AI",
      "Llama 3 mobile", "Mistral mobile", "Gemma mobile", "Phi mobile", "DeepSeek mobile",
      "no cloud AI", "no telemetry AI", "self-hosted mobile AI",
      "MLC Chat alternative", "PocketPal alternative",
      "Mobile AI Apps", "Chatbots & AI Assistants", "free AI tool"
    ],
    category: "Chatbots & AI Assistants",
    rating: 4.8,
    totalVotes: 5640
  }
];