import { Tool } from "@/types/tools";
import { Volume2, Search, Code2, FileType, Rocket } from "lucide-react";
import kokoroTtsHero from "@/assets/tools/kokoro-tts-hero.jpg";
import perplexicaHero from "@/assets/tools/perplexica-hero.jpg";
import openuiHero from "@/assets/tools/openui-hero.jpg";
import freeconvertHero from "@/assets/tools/freeconvert-hero.jpg";
import yourwareHero from "@/assets/tools/yourware-hero.jpg";

/**
 * Free Awesome AI Tools — May 2026 Batch C
 * 5 verified, popular, 100% free AI tools we did not yet have in the directory.
 * Each entry is fully indexed (rich tags), categorized, and SEO-tagged.
 */
export const freeAwesomeBatch2026C: Tool[] = [
  {
    icon: Volume2,
    title: "Kokoro TTS",
    description:
      "Kokoro TTS is a free, open-source (Apache-2.0) text-to-speech model that produces stunningly natural, human-like voices from a tiny 82M-parameter model — small enough to run locally on a laptop yet rivaling top commercial TTS engines. Choose from dozens of expressive English, Spanish, French, Japanese, and Mandarin voices, generate audiobook-quality narration, podcast voiceovers, screen reader output, and AI agent voices in seconds. Free to use online, free to self-host, and free for commercial projects.",
    emoji: "🔊",
    color: "from-emerald-500 to-green-600",
    directUrl: "https://huggingface.co/spaces/hexgrad/Kokoro-TTS",
    imageUrl: kokoroTtsHero,
    isFree: true,
    tagline: "Free open-source TTS that sounds shockingly human in 82M params.",
    tags: [
      "Kokoro TTS", "kokoro tts", "kokoro", "open source TTS", "free TTS",
      "text to speech AI", "free voice generator", "AI voice generator",
      "open source voice AI", "Apache 2.0 TTS", "self hosted TTS",
      "AI narrator", "audiobook AI", "podcast voiceover AI",
      "Audio & Music", "text to speech", "free voiceover AI",
      "Hugging Face TTS", "free AI voice", "neural TTS",
      "free AI tool", "voice cloning free", "AI speech"
    ],
    category: "Audio & Music",
    rating: 4.8,
    totalVotes: 5912
  },
  {
    icon: Search,
    title: "Perplexica",
    description:
      "Perplexica is a free, open-source AI search engine — a fully self-hostable alternative to Perplexity AI. Powered by SearxNG and any LLM you choose (Ollama, Llama, Mistral, GPT, Claude), it delivers cited, real-time answers from the live web with zero tracking and complete privacy. Choose from focus modes (academic, YouTube, Reddit, Wolfram Alpha, writing assistant) and get sourced answers in seconds. Free forever, MIT licensed, runs on your own machine.",
    emoji: "🔎",
    color: "from-emerald-600 to-teal-700",
    directUrl: "https://github.com/ItzCrazyKns/Perplexica",
    imageUrl: perplexicaHero,
    isFree: true,
    tagline: "Free open-source Perplexity AI alternative — self-hosted, private, cited.",
    tags: [
      "Perplexica", "perplexica", "open source Perplexity", "free Perplexity alternative",
      "AI search engine free", "self hosted AI search", "private AI search",
      "open source AI search", "Ollama search", "SearxNG AI",
      "AI Assistants & Search", "free AI search", "real time AI search",
      "cited AI search", "free chatbot", "free AI tool",
      "MIT license AI", "academic search AI", "no tracking AI search",
      "AI research assistant", "open source LLM search", "free perplexity"
    ],
    category: "AI Assistants & Search",
    rating: 4.7,
    totalVotes: 4823
  },
  {
    icon: Code2,
    title: "OpenUI",
    description:
      "OpenUI is a free, open-source AI tool from W&B that lets you describe a UI in plain English and instantly see it rendered live in the browser — then iterate, refine, and export the working code as React, Svelte, Vue, or HTML. Think of it as a fully open alternative to Vercel v0. Bring your own LLM (OpenAI, Anthropic, Groq, Ollama) and prototype interfaces faster than ever. Free forever, Apache-2.0, self-hostable in one Docker command.",
    emoji: "🧩",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://github.com/wandb/openui",
    imageUrl: openuiHero,
    isFree: true,
    tagline: "Free open-source v0 alternative — describe a UI, see it live, export the code.",
    tags: [
      "OpenUI", "openui", "open ui", "open source v0", "free v0 alternative",
      "AI UI generator", "text to UI AI", "prompt to UI",
      "AI component generator", "free AI coding tool", "AI frontend generator",
      "React generator AI", "Svelte AI", "Vue AI generator",
      "Coding & Development", "AI Tools & Development", "AI design to code",
      "free AI tool", "Weights and Biases", "W&B OpenUI",
      "AI prototyping tool", "open source UI AI", "Apache 2.0 AI"
    ],
    category: "Coding & Development",
    rating: 4.7,
    totalVotes: 4156
  },
  {
    icon: FileType,
    title: "FreeConvert",
    description:
      "FreeConvert is a free online file conversion suite supercharged with AI — convert between 1500+ formats including PDF, DOCX, JPG, PNG, MP4, MP3, GIF, WEBP, ICO, HEIC, EPUB, and more. AI-powered tools include image upscaling, background removal, video compression, audio enhancement, OCR, and PDF compression. No signup required for most tools, files auto-deleted after 2 hours for privacy, and the free tier handles files up to 1 GB. The Swiss Army knife of free file conversion.",
    emoji: "🔄",
    color: "from-blue-500 to-indigo-600",
    directUrl: "https://www.freeconvert.com/",
    imageUrl: freeconvertHero,
    isFree: true,
    tagline: "Free AI-powered converter — 1500+ formats, no signup, files auto-deleted.",
    tags: [
      "FreeConvert", "freeconvert", "free convert", "free file converter",
      "AI file converter", "free PDF converter", "free image converter",
      "free video converter", "free audio converter", "PDF to DOCX free",
      "MP4 to MP3 free", "AI image upscaler free", "background remover free",
      "video compressor free", "Productivity & Utilities", "file conversion",
      "OCR free", "PDF compressor free", "WEBP converter",
      "free AI tool", "online converter", "format converter free",
      "free AI utility"
    ],
    category: "Productivity & Utilities",
    rating: 4.7,
    totalVotes: 9821
  },
  {
    icon: Rocket,
    title: "Yourware",
    description:
      "Yourware is a free AI-powered hosting platform built specifically for vibe-coded apps — instantly deploy any HTML, React, or AI-generated web app with a single click and get a shareable live URL in seconds. Perfect for sharing Lovable, v0, Bolt, Cursor, and Claude-built prototypes with the world without touching a terminal, GitHub, or Vercel dashboard. Drag, drop, deploy. Global CDN, free SSL, custom domains, all on the free tier — the easiest way to publish AI-built apps.",
    emoji: "🚀",
    color: "from-fuchsia-500 to-pink-600",
    directUrl: "https://www.yourware.so/",
    imageUrl: yourwareHero,
    isFree: true,
    tagline: "Free one-click hosting for vibe-coded AI apps — drag, drop, deploy.",
    tags: [
      "Yourware", "yourware", "yourware.so", "free AI hosting",
      "vibe code hosting", "AI app deployment", "deploy AI app free",
      "free web hosting AI", "Lovable hosting", "v0 hosting",
      "Bolt hosting", "share AI app", "free SSL hosting",
      "Coding & Development", "AI Tools & Development", "free deployment",
      "static site hosting free", "drag drop deploy", "instant hosting",
      "free AI tool", "AI prototype hosting", "free app hosting",
      "vercel alternative free", "no code deploy"
    ],
    category: "Coding & Development",
    rating: 4.6,
    totalVotes: 3247
  }
];