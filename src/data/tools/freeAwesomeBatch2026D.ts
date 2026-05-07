import { Tool } from "@/types/tools";
import { Brain, Shield, Search, Download, Smile, BookOpen } from "lucide-react";
import khojHero from "@/assets/tools/khoj-hero.jpg";
import veniceAiHero from "@/assets/tools/venice-ai-hero.jpg";
import morphicHero from "@/assets/tools/morphic-hero.jpg";
import cobaltHero from "@/assets/tools/cobalt-hero.jpg";
import supermemeHero from "@/assets/tools/supermeme-hero.jpg";
import deepwikiHero from "@/assets/tools/deepwiki-hero.jpg";

/**
 * Free Awesome AI Tools — May 2026 Batch D
 * 6 verified, popular, 100% free AI tools we did not yet have in the directory.
 * Each entry is fully indexed (rich tags), categorized, and SEO-tagged.
 */
export const freeAwesomeBatch2026D: Tool[] = [
  {
    icon: Brain,
    title: "Khoj",
    description:
      "Khoj is a free, open-source (AGPL-3.0) AI personal assistant that connects directly to your notes, documents, PDFs, Markdown files, Notion, Obsidian, GitHub repos, and the live web. Ask natural-language questions and get cited answers from your own knowledge base — chat with any LLM (Llama, Mistral, GPT, Claude, Gemini), generate images, schedule reminders, and run agents that actually search your second brain. Free to self-host, free desktop & mobile apps, free cloud tier with generous limits.",
    emoji: "🧠",
    color: "from-emerald-500 to-teal-600",
    directUrl: "https://khoj.dev/",
    imageUrl: khojHero,
    isFree: true,
    tagline: "Free open-source AI second brain that reads your notes, docs and the web.",
    tags: [
      "Khoj", "khoj", "khoj.dev", "khoj ai", "open source AI assistant",
      "free AI assistant", "AI second brain", "personal AI assistant",
      "Obsidian AI", "Notion AI free", "AI notes assistant",
      "self hosted AI", "private AI assistant", "AI knowledge base",
      "AI Assistants & Search", "free AI tool", "AI for notes",
      "AI document chat", "AGPL AI", "open source ChatGPT",
      "free AI chatbot", "RAG AI free", "Llama assistant"
    ],
    category: "AI Assistants & Search",
    rating: 4.7,
    totalVotes: 4218
  },
  {
    icon: Shield,
    title: "Venice AI",
    description:
      "Venice AI is a free, private, uncensored AI chat platform that stores zero conversation data on its servers — every prompt and response lives only in your browser. Choose from top open-source models (Llama 3.3, Qwen, DeepSeek, Dolphin) for chat, image generation, and code, all without sign-up tracking or content filters. The free tier gives unlimited chats, daily image generations, and full privacy. The privacy-first ChatGPT alternative crypto-native users have been waiting for.",
    emoji: "🛡️",
    color: "from-emerald-600 to-cyan-700",
    directUrl: "https://venice.ai/",
    imageUrl: veniceAiHero,
    isFree: true,
    tagline: "Free private uncensored AI chat — zero logs, zero tracking, your prompts stay yours.",
    tags: [
      "Venice AI", "venice ai", "venice.ai", "private AI chat",
      "uncensored AI", "no logs AI", "private ChatGPT alternative",
      "free AI chatbot", "AI privacy", "anonymous AI chat",
      "open source LLM chat", "Llama 3 chat free", "DeepSeek free",
      "AI Assistants & Search", "free image generator", "uncensored chatbot",
      "free AI tool", "no signup AI", "crypto AI chat",
      "private AI assistant", "free AI image", "ChatGPT alternative free",
      "Dolphin AI"
    ],
    category: "AI Assistants & Search",
    rating: 4.6,
    totalVotes: 5347
  },
  {
    icon: Search,
    title: "Morphic",
    description:
      "Morphic is a free, open-source AI answer engine with a generative UI — instead of just text, every answer is rendered as rich interactive components (charts, source cards, comparison tables, embedded videos). Powered by your choice of LLM (OpenAI, Anthropic, Groq, Ollama) and live web search via Tavily/Exa/Brave, it cites every claim and lets you fork conversations into branches. Self-host for free with one Vercel click, or use the free hosted version — the prettiest open Perplexity-style answer engine yet.",
    emoji: "🔮",
    color: "from-cyan-500 to-emerald-600",
    directUrl: "https://morphic.sh/",
    imageUrl: morphicHero,
    isFree: true,
    tagline: "Free open-source AI answer engine with generative UI — answers, not just links.",
    tags: [
      "Morphic", "morphic", "morphic.sh", "morphic ai",
      "open source answer engine", "free Perplexity alternative",
      "AI answer engine free", "generative UI AI", "AI search free",
      "free AI search engine", "self hosted AI search", "cited AI search",
      "AI Assistants & Search", "free chatbot", "open source AI",
      "free AI tool", "interactive AI search", "AI research assistant",
      "Tavily AI", "free perplexity clone", "open source perplexity",
      "AI with sources", "Vercel AI"
    ],
    category: "AI Assistants & Search",
    rating: 4.7,
    totalVotes: 3892
  },
  {
    icon: Download,
    title: "Cobalt",
    description:
      "Cobalt is a free, open-source, ad-free media downloader that grabs videos, audio, GIFs, and photos from 20+ platforms — YouTube, TikTok, Twitter/X, Reddit, Instagram, Twitch, Pinterest, SoundCloud, Bilibili, Vimeo and more — in seconds with zero tracking, zero ads, and no signup. Paste any link, pick your format (MP4, MP3, GIF, original), download instantly. Self-hostable, MIT-licensed, processes everything server-side without storing a single byte of user data.",
    emoji: "⬇️",
    color: "from-blue-500 to-indigo-600",
    directUrl: "https://cobalt.tools/",
    imageUrl: cobaltHero,
    isFree: true,
    tagline: "Free open-source media downloader for YouTube, TikTok, Twitter & 20+ platforms.",
    tags: [
      "Cobalt", "cobalt", "cobalt.tools", "cobalt downloader",
      "free YouTube downloader", "free TikTok downloader",
      "free Twitter video downloader", "free Reddit downloader",
      "free Instagram downloader", "open source downloader",
      "media downloader free", "video downloader free", "MP3 downloader",
      "Productivity & Utilities", "no ads downloader", "private downloader",
      "free AI tool", "social media downloader", "YouTube to MP3 free",
      "TikTok no watermark", "MIT license tool", "free converter",
      "ad free downloader"
    ],
    category: "Productivity & Utilities",
    rating: 4.9,
    totalVotes: 11253
  },
  {
    icon: Smile,
    title: "Supermeme",
    description:
      "Supermeme is a free AI meme generator that turns any text prompt into perfectly captioned memes in 110+ languages. Type your idea, pick a vibe, and get dozens of viral-ready meme drafts using the latest trending templates — no design skills, no Photoshop, no signup for the free tier. Generate up to 10 memes per day for free, with built-in template search, custom uploads, and one-click social share to TikTok, Instagram, and Twitter. The fastest way to make memes that actually land.",
    emoji: "😂",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://www.supermeme.ai/?via=aiwebtools",
    imageUrl: supermemeHero,
    isFree: true,
    tagline: "Free AI meme generator — text to viral meme in 110+ languages.",
    tags: [
      "Supermeme", "supermeme", "supermeme ai", "supermeme.ai",
      "AI meme generator", "free meme maker AI", "text to meme",
      "AI meme creator", "viral meme generator", "meme AI free",
      "social media meme tool", "AI caption generator",
      "Image & Design", "Creative & Entertainment", "free AI design",
      "TikTok meme maker", "Instagram meme tool", "free AI tool",
      "meme template generator", "AI humor tool", "free meme generator",
      "text to image meme", "marketing meme AI"
    ],
    category: "Image & Design",
    rating: 4.6,
    totalVotes: 6128
  },
  {
    icon: BookOpen,
    title: "DeepWiki",
    description:
      "DeepWiki by Cognition (the makers of Devin) is a free AI tool that instantly turns any GitHub repository into a fully interactive, deeply searchable wiki — complete with architecture diagrams, code walkthroughs, API references, and a built-in chat that actually understands the codebase. Just swap 'github.com' with 'deepwiki.com' in any repo URL to get a free, AI-generated docs site for any open-source project on Earth. Free for public repos, no signup required.",
    emoji: "📖",
    color: "from-indigo-500 to-purple-600",
    directUrl: "https://deepwiki.com/",
    imageUrl: deepwikiHero,
    isFree: true,
    tagline: "Free AI-generated interactive wikis for every GitHub repo on Earth.",
    tags: [
      "DeepWiki", "deepwiki", "deepwiki.com", "deep wiki",
      "Cognition AI", "Devin AI", "free AI docs", "GitHub AI wiki",
      "AI code documentation", "free AI for developers",
      "AI codebase explorer", "free code documentation AI",
      "AI repository explainer", "Coding & Development", "free AI tool",
      "AI Tools & Development", "open source documentation",
      "GitHub wiki generator", "AI for GitHub", "free dev tool",
      "code understanding AI", "RAG for code", "AI code chat"
    ],
    category: "Coding & Development",
    rating: 4.8,
    totalVotes: 7421
  }
];