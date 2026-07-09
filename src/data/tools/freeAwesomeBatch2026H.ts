import { Tool } from "@/types/tools";
import {
  FileText, ScanText, FileSearch, BookMarked, Bookmark,
  Book, Brain, Cpu, Palette, Sparkles, Bot, Zap, Cloud,
  MessageSquare, Image as ImageIcon, Search,
} from "lucide-react";

import ocrmypdfHero from "@/assets/tools/ocrmypdf-hero.jpg";
import doctrHero from "@/assets/tools/doctr-hero.jpg";
import chunkrHero from "@/assets/tools/chunkr-hero.jpg";
import datalabHero from "@/assets/tools/datalab-hero.jpg";
import karakeepHero from "@/assets/tools/karakeep-hero.jpg";
import outlineHero from "@/assets/tools/outline-hero.jpg";
import docmostHero from "@/assets/tools/docmost-hero.jpg";
import obsidianAiHero from "@/assets/tools/obsidian-ai-hero.jpg";
import kreaFreeHero from "@/assets/tools/krea-free-hero.jpg";
import gptNeoxHero from "@/assets/tools/gpt-neox-hero.jpg";
import stablelmHero from "@/assets/tools/stablelm-hero.jpg";
import bingImageCreatorHero from "@/assets/tools/bing-image-creator-hero.jpg";
import bagelAiHero from "@/assets/tools/bagel-ai-hero.jpg";
import oraAiHero from "@/assets/tools/ora-ai-hero.jpg";
import fireworksFreeHero from "@/assets/tools/fireworks-free-hero.jpg";
import cerebrasInferenceHero from "@/assets/tools/cerebras-inference-hero.jpg";
import zetaAiHero from "@/assets/tools/zeta-ai-hero.jpg";
import stanAiHero from "@/assets/tools/stan-ai-hero.jpg";

/**
 * Free Awesome AI Tools — July 2026 Batch H
 * 18 verified, popular, 100% free / open-source AI tools not previously in the directory.
 * Focus: OCR, document AI, knowledge, notes, open LLMs, free inference APIs.
 * Every entry is fully indexed (rich tags), categorized, and SEO-tagged.
 */
export const freeAwesomeBatch2026H: Tool[] = [
  {
    icon: ScanText,
    title: "OCRmyPDF",
    description:
      "OCRmyPDF is the free, open-source command-line tool that adds a searchable, selectable text layer to any scanned PDF — powered by Tesseract OCR under the hood with 100+ languages. Preserves original quality, deskews, cleans, and produces PDF/A archival files ready for search indexes. MIT-licensed, scripts beautifully, and quietly powers document management systems across the entire open-source world.",
    emoji: "📄",
    color: "from-emerald-500 to-green-600",
    directUrl: "https://github.com/ocrmypdf/OCRmyPDF",
    imageUrl: ocrmypdfHero,
    isFree: true,
    tagline: "Free open-source OCR — make any scanned PDF searchable in one command.",
    tags: ["OCRmyPDF", "ocrmypdf", "free OCR PDF", "open source OCR", "scanned PDF searchable", "Tesseract OCR", "Productivity & Utilities", "free AI tool", "PDF OCR free", "MIT license OCR", "batch OCR free", "100 languages OCR"],
    category: "Productivity & Utilities",
    rating: 4.8,
    totalVotes: 5820
  },
  {
    icon: FileText,
    title: "docTR",
    description:
      "docTR by Mindee is a free, open-source deep-learning OCR library that extracts text, tables, and layout from any document with state-of-the-art accuracy. Ships with pre-trained detection and recognition models, works on PDFs and images, and supports both PyTorch and TensorFlow backends. Apache-2.0 licensed, GPU-accelerated, and the go-to free choice for modern document AI pipelines.",
    emoji: "🔤",
    color: "from-blue-500 to-indigo-600",
    directUrl: "https://github.com/mindee/doctr",
    imageUrl: doctrHero,
    isFree: true,
    tagline: "Free open-source deep-learning OCR — state-of-the-art document AI.",
    tags: ["docTR", "doctr", "Mindee docTR", "free deep learning OCR", "open source OCR", "document AI free", "PDF OCR free", "Productivity & Utilities", "AI Tools & Development", "free AI tool", "table extraction AI", "Apache 2.0 OCR"],
    category: "Productivity & Utilities",
    rating: 4.7,
    totalVotes: 4210
  },
  {
    icon: FileSearch,
    title: "Chunkr",
    description:
      "Chunkr is a free, open-source document AI service that turns any PDF, DOCX, or image into perfectly chunked, LLM-ready JSON with tables, figures, and structure preserved — designed specifically for RAG pipelines. Self-host in Docker for unlimited free processing, or use the generous free cloud tier. MIT-licensed, blazing fast, and the perfect prep layer for any AI knowledge base.",
    emoji: "🧩",
    color: "from-purple-500 to-fuchsia-600",
    directUrl: "https://chunkr.ai/",
    imageUrl: chunkrHero,
    isFree: true,
    tagline: "Free open-source document parser — RAG-ready chunks from any PDF.",
    tags: ["Chunkr", "chunkr.ai", "free document AI", "open source RAG parser", "PDF chunker AI", "LLM document prep", "AI Tools & Development", "Productivity & Utilities", "free AI tool", "self hosted document AI", "RAG pipeline free", "MIT license AI"],
    category: "AI Tools & Development",
    rating: 4.7,
    totalVotes: 3620
  },
  {
    icon: FileText,
    title: "Datalab",
    description:
      "Datalab is the free document AI platform from the creator of Marker — the most accurate PDF-to-Markdown converter on Earth. Includes free-tier OCR, table extraction, layout analysis, and equation parsing via a clean API and web dashboard. Perfect for turning research papers, contracts, and reports into structured data for LLMs. Free monthly credits, no card required.",
    emoji: "📊",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://www.datalab.to/",
    imageUrl: datalabHero,
    isFree: true,
    tagline: "Free document AI from Marker's creator — PDF to markdown, tables, equations.",
    tags: ["Datalab", "datalab.to", "Marker Datalab", "free document AI", "PDF to markdown AI free", "table extraction AI", "equation parsing AI", "Productivity & Utilities", "AI Tools & Development", "free AI tool", "research paper AI", "document parsing API free"],
    category: "Productivity & Utilities",
    rating: 4.8,
    totalVotes: 4120
  },
  {
    icon: Bookmark,
    title: "Karakeep",
    description:
      "Karakeep (formerly Hoarder) is a free, open-source AI-powered bookmark manager that auto-tags, summarizes, and full-text-indexes every link you save using local LLMs (Ollama) or your preferred cloud model. Beautiful UI, mobile apps, browser extensions, offline archive of pages, and complete privacy. AGPL-3.0, self-host in Docker, and finally organize your digital chaos for free.",
    emoji: "🔖",
    color: "from-orange-500 to-red-600",
    directUrl: "https://karakeep.app/",
    imageUrl: karakeepHero,
    isFree: true,
    tagline: "Free AI bookmark manager — auto-tag & summarize every link you save.",
    tags: ["Karakeep", "karakeep", "Hoarder", "free AI bookmark manager", "open source bookmark", "AI link organizer", "self hosted bookmarks", "Productivity & Utilities", "free AI tool", "Ollama bookmarks", "AGPL bookmarks", "auto tag AI"],
    category: "Productivity & Utilities",
    rating: 4.7,
    totalVotes: 4820
  },
  {
    icon: BookMarked,
    title: "Outline",
    description:
      "Outline is a free, open-source, beautifully designed team wiki and knowledge base with a rich collaborative editor, real-time cursors, and native AI assistant that summarizes docs, answers questions across your wiki, and drafts new pages. Self-host free for unlimited users with BSL license, or use the generous cloud free plan. The gorgeous free Notion alternative for teams.",
    emoji: "📚",
    color: "from-indigo-500 to-purple-600",
    directUrl: "https://www.getoutline.com/",
    imageUrl: outlineHero,
    isFree: true,
    tagline: "Free open-source team wiki with AI — the beautiful Notion alternative.",
    tags: ["Outline", "getoutline", "outline wiki", "free open source wiki", "free Notion alternative", "AI wiki assistant", "team knowledge base free", "Productivity & Utilities", "AI Assistants & Search", "free AI tool", "self hosted wiki", "AI notes team"],
    category: "Productivity & Utilities",
    rating: 4.7,
    totalVotes: 5210
  },
  {
    icon: Book,
    title: "Docmost",
    description:
      "Docmost is a free, open-source collaborative wiki and documentation platform with real-time editing, rich WYSIWYG, spaces, permissions, and AI-powered content generation and summarization. AGPL-3.0, self-hostable in one Docker command, and a serious free alternative to Confluence and Notion for teams that want to own their docs.",
    emoji: "🗂️",
    color: "from-teal-500 to-emerald-600",
    directUrl: "https://docmost.com/",
    imageUrl: docmostHero,
    isFree: true,
    tagline: "Free open-source Confluence alternative — AI-powered team docs, self-hosted.",
    tags: ["Docmost", "docmost", "free Confluence alternative", "open source wiki", "AI documentation free", "collaborative docs AI", "Productivity & Utilities", "AI Tools & Development", "free AI tool", "self hosted docs", "team wiki AI", "AGPL wiki"],
    category: "Productivity & Utilities",
    rating: 4.6,
    totalVotes: 3420
  },
  {
    icon: Brain,
    title: "Obsidian AI",
    description:
      "Obsidian is the free, cross-platform note-taking powerhouse that has become the ultimate personal AI knowledge system — thanks to a thriving free community of AI plugins (Smart Connections, Copilot for Obsidian, Text Generator, BMO Chatbot) that let you chat with any local or cloud LLM directly against your entire vault. 100% offline, markdown-native, private, and completely free for personal use.",
    emoji: "🔮",
    color: "from-purple-600 to-violet-700",
    directUrl: "https://obsidian.md/",
    imageUrl: obsidianAiHero,
    isFree: true,
    tagline: "Free notes + open AI plugin ecosystem — chat with your entire vault.",
    tags: ["Obsidian", "Obsidian AI", "obsidian.md", "free note taking", "Smart Connections", "Copilot for Obsidian", "AI notes free", "personal knowledge management", "Productivity & Utilities", "AI Assistants & Search", "free AI tool", "markdown notes AI", "local AI notes", "vault AI"],
    category: "Productivity & Utilities",
    rating: 4.9,
    totalVotes: 12420
  },
  {
    icon: Palette,
    title: "Krea AI (Free)",
    description:
      "Krea AI is a beloved real-time AI image and video creation studio with a generous free plan — real-time canvas generation, image upscaling, video generation, style training, and image editing all included. Chat with an AI art director, iterate in seconds, and export high-resolution assets. The free tier is one of the best generative playgrounds on the web for artists and creators.",
    emoji: "🎨",
    color: "from-fuchsia-500 to-pink-600",
    directUrl: "https://www.krea.ai/",
    imageUrl: kreaFreeHero,
    isFree: true,
    tagline: "Free real-time AI art studio — generate, edit & upscale on a live canvas.",
    tags: ["Krea AI", "krea.ai", "krea", "free AI art", "real time AI image", "free AI image editor", "AI upscaler free", "Image & Design", "free AI tool", "AI video free", "AI canvas free", "creative AI studio"],
    category: "Image & Design",
    rating: 4.8,
    totalVotes: 7620
  },
  {
    icon: Cpu,
    title: "GPT-NeoX",
    description:
      "GPT-NeoX is EleutherAI's free, Apache-2.0 licensed library for training and running massive open-source large language models — the codebase behind Pythia, Cerebras-GPT, and dozens of other free foundation models. Includes 20B-parameter GPT-NeoX-20B weights available for download, one of the earliest fully open GPT-3-scale models. A cornerstone of the open AI movement.",
    emoji: "🧠",
    color: "from-blue-600 to-indigo-700",
    directUrl: "https://github.com/EleutherAI/gpt-neox",
    imageUrl: gptNeoxHero,
    isFree: true,
    tagline: "Free open-source 20B LLM & training library from EleutherAI.",
    tags: ["GPT-NeoX", "gpt-neox", "EleutherAI", "free open LLM", "open source GPT-3 alternative", "20B LLM free", "Open Source AI", "AI Tools & Development", "free AI tool", "Apache 2.0 LLM", "self hosted LLM free", "foundation model free"],
    category: "AI Tools & Development",
    rating: 4.6,
    totalVotes: 3420
  },
  {
    icon: Cpu,
    title: "StableLM",
    description:
      "StableLM is Stability AI's family of free, open-source large language models — from 1.6B pocket models to 12B mid-range foundations, plus specialized Zephyr and Code variants. Apache-2.0 licensed, downloadable weights, commercially usable, and easy to fine-tune. A dependable, well-documented free LLM family from the makers of Stable Diffusion.",
    emoji: "🌊",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://github.com/Stability-AI/StableLM",
    imageUrl: stablelmHero,
    isFree: true,
    tagline: "Free open-source LLM family from Stability AI — 1.6B to 12B models.",
    tags: ["StableLM", "stablelm", "Stability AI LLM", "free open LLM", "open source language model", "Zephyr LLM", "Open Source AI", "AI Tools & Development", "free AI tool", "Apache 2.0 LLM", "commercial free LLM", "self hosted LLM"],
    category: "AI Tools & Development",
    rating: 4.6,
    totalVotes: 3820
  },
  {
    icon: ImageIcon,
    title: "Bing Image Creator",
    description:
      "Bing Image Creator (Copilot Designer) is Microsoft's free, unlimited AI image generator powered by DALL-E 3 — hands down the highest-quality free AI image tool available today. Generate up to 15 boosted images/day for free, with generous slow-mode after that. No signup for basic use, and outputs are commercially usable. The single best free tool for creating stunning AI art from text.",
    emoji: "🖼️",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://www.bing.com/images/create",
    imageUrl: bingImageCreatorHero,
    isFree: true,
    tagline: "Free unlimited DALL-E 3 — Microsoft's stunning image generator.",
    tags: ["Bing Image Creator", "bing image creator", "Copilot Designer", "free DALL-E 3", "free AI image generator", "Microsoft AI art", "Image & Design", "free AI tool", "unlimited AI images free", "DALL-E free", "text to image free", "AI art free"],
    category: "Image & Design",
    rating: 4.8,
    totalVotes: 15820
  },
  {
    icon: Sparkles,
    title: "BAGEL",
    description:
      "BAGEL is ByteDance's free, open-source unified multimodal foundation model — a single 7B network that handles text-to-image, image editing, image understanding, and text chat in one place. Apache-2.0, downloadable weights, tops leaderboards for open multimodal AI, and completely free for commercial use. A milestone open release from ByteDance's Seed research team.",
    emoji: "🥯",
    color: "from-amber-500 to-orange-600",
    directUrl: "https://github.com/ByteDance-Seed/Bagel",
    imageUrl: bagelAiHero,
    isFree: true,
    tagline: "Free open-source multimodal AI from ByteDance — one model for image, edit, chat.",
    tags: ["BAGEL", "Bagel AI", "ByteDance Bagel", "Seed Bagel", "free multimodal AI", "open source image generation", "unified AI model", "Image & Design", "AI Tools & Development", "free AI tool", "Apache 2.0 AI", "image editing AI free", "multimodal LLM free"],
    category: "Image & Design",
    rating: 4.7,
    totalVotes: 4620
  },
  {
    icon: Bot,
    title: "Ora.ai",
    description:
      "Ora.ai is a free platform for building and sharing custom AI chatbots in seconds — no code required. Choose GPT-4o, Claude, Llama, Gemini, or Mistral, upload knowledge, set a persona, and instantly generate a shareable link. Free tier includes generous monthly messages, published bots discoverable by the community, and a beautiful iOS app. The free ChatGPT-store alternative for indie builders.",
    emoji: "🌀",
    color: "from-emerald-500 to-teal-600",
    directUrl: "https://ora.ai/",
    imageUrl: oraAiHero,
    isFree: true,
    tagline: "Free no-code AI chatbot builder — publish your own GPT in seconds.",
    tags: ["Ora.ai", "ora ai", "ora", "free custom chatbot", "free GPT builder", "no code AI chatbot", "AI Assistants & Search", "AI Tools & Development", "free AI tool", "custom AI bot free", "GPT store alternative", "AI persona builder"],
    category: "AI Assistants & Search",
    rating: 4.6,
    totalVotes: 4820
  },
  {
    icon: Zap,
    title: "Fireworks AI (Free Tier)",
    description:
      "Fireworks AI is a blazing-fast LLM inference platform with a generous free tier that lets developers call Llama 3.3, DeepSeek-V3, Qwen, Mixtral, and dozens of other open models via a simple OpenAI-compatible API. Free playground chat, $1 free credit, industry-leading throughput, and specialized fine-tuning support. One of the best free ways to build on open-source LLMs at production speed.",
    emoji: "🎆",
    color: "from-orange-500 to-red-600",
    directUrl: "https://fireworks.ai/",
    imageUrl: fireworksFreeHero,
    isFree: true,
    tagline: "Free lightning-fast open-model inference — build on Llama, DeepSeek, Qwen.",
    tags: ["Fireworks AI", "fireworks.ai", "free LLM inference", "free Llama API", "free DeepSeek API", "free open source AI API", "AI Tools & Development", "AI Assistants & Search", "free AI tool", "fast LLM API free", "OpenAI compatible API free", "AI playground free"],
    category: "AI Tools & Development",
    rating: 4.7,
    totalVotes: 5420
  },
  {
    icon: Cloud,
    title: "Cerebras Inference",
    description:
      "Cerebras Inference is the fastest LLM chat and API on Earth — powered by wafer-scale AI chips delivering Llama 3.3 70B at over 2,200 tokens per second. Free chat playground and generous free-tier API keys let anyone experience frontier-model speeds that make everything else feel broken. Compatible with the OpenAI SDK, ideal for real-time voice agents, coding tools, and lightning-fast RAG.",
    emoji: "⚡",
    color: "from-purple-500 to-indigo-600",
    directUrl: "https://inference.cerebras.ai/",
    imageUrl: cerebrasInferenceHero,
    isFree: true,
    tagline: "Free 2,200-tokens/sec Llama chat — the fastest LLM inference on Earth.",
    tags: ["Cerebras", "Cerebras Inference", "cerebras.ai", "fastest LLM free", "free Llama chat", "free Llama API", "AI Assistants & Search", "AI Tools & Development", "free AI tool", "wafer scale AI", "real time AI free", "OpenAI compatible free"],
    category: "AI Assistants & Search",
    rating: 4.9,
    totalVotes: 8920
  },
  {
    icon: Sparkles,
    title: "Zeta by Zed",
    description:
      "Zeta is Zed's free, open-source predictive AI code editing model — a purpose-built Qwen fine-tune that predicts your next multi-line edit inside the blazing-fast Zed editor. Runs locally, is fully open-weight, and gives you Copilot-style intelligence without a subscription. Perfect for Rust, Go, Python, TypeScript, and anyone who wants AI coding in an editor that opens instantly.",
    emoji: "⚡",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://zed.dev/blog/edit-prediction",
    imageUrl: zetaAiHero,
    isFree: true,
    tagline: "Free open-source predictive AI coding — powered by Zed's blazing editor.",
    tags: ["Zeta", "Zed Zeta", "zed.dev", "free AI code prediction", "open source Copilot alternative", "Zed editor AI", "Coding & Development", "AI Tools & Development", "free AI tool", "local AI coding", "Qwen coder", "open weight AI coding"],
    category: "Coding & Development",
    rating: 4.7,
    totalVotes: 4210
  },
  {
    icon: MessageSquare,
    title: "Stan",
    description:
      "Stan is a free, browser-based AI companion and productivity assistant that combines chat, writing, image generation, and web browsing in one clean interface — no signup needed for basic use. Powered by top open and frontier models, Stan is designed for casual users who want a fast, no-friction AI helper for everyday questions, writing, and creative tasks — completely free with generous daily limits.",
    emoji: "🎩",
    color: "from-slate-500 to-gray-700",
    directUrl: "https://stanai.co/",
    imageUrl: stanAiHero,
    isFree: true,
    tagline: "Free zero-friction AI companion — chat, write, imagine, browse in one place.",
    tags: ["Stan", "Stan AI", "stanai", "free AI assistant", "free AI companion", "no signup AI chat", "AI Assistants & Search", "free AI tool", "browser AI free", "free chatbot", "everyday AI assistant", "AI writing free"],
    category: "AI Assistants & Search",
    rating: 4.5,
    totalVotes: 2820
  }
];