import { Tool } from "@/types/tools";
import { Mic, Brain, Video, Music, ImageIcon, Globe, Sparkles, Cpu, Palette, FileAudio, Speaker, Users, StickyNote, Layers, Radio } from "lucide-react";

import plaudNoteHero from "@/assets/tools/plaud-note-hero.jpg";
import limitlessAiHero from "@/assets/tools/limitless-ai-hero.jpg";
import recallAiHero from "@/assets/tools/recall-ai-hero.jpg";
import kitsAiHero from "@/assets/tools/kits-ai-hero.jpg";
import memAiHero from "@/assets/tools/mem-ai-hero.jpg";
import logseqHero from "@/assets/tools/logseq-hero.jpg";
import capacitiesHero from "@/assets/tools/capacities-hero.jpg";
import polloAiHero from "@/assets/tools/pollo-ai-hero.jpg";
import rendernetHero from "@/assets/tools/rendernet-hero.jpg";
import floraAiHero from "@/assets/tools/flora-ai-hero.jpg";
import wegicHero from "@/assets/tools/wegic-hero.jpg";
import playhtHero from "@/assets/tools/playht-hero.jpg";
import rephraseAiHero from "@/assets/tools/rephrase-ai-hero.jpg";
import whisperOpenAiHero from "@/assets/tools/whisper-openai-hero.jpg";
import soundhoundAiHero from "@/assets/tools/soundhound-ai-hero.jpg";

// Popular World Tools Batch IV 2026 — 15 verified-unique high-traffic AI tools
// confirmed missing from the existing 5,000+ tool directory as of 2026-07-19.
export const popularWorldToolsBatch2026IV: Tool[] = [
  {
    icon: Mic, title: "Plaud Note",
    description: "Plaud Note is a credit-card-thin AI voice recorder that magnetically attaches to your phone, capturing meetings and calls, then delivering GPT-powered transcripts and summaries. A pocket-sized AI scribe for professionals who live in conversations.",
    emoji: "🎙️", color: "from-slate-500 to-emerald-600",
    directUrl: "https://www.plaud.ai/?via=aiwebtools",
    imageUrl: plaudNoteHero,
    tags: ["Plaud", "Plaud Note", "AI voice recorder", "AI transcription", "meeting recorder", "GPT summary", "AI wearable", "productivity", "voice AI"],
    category: "AI Gadgets & Hardware", rating: 4.7, totalVotes: 42000,
  },
  {
    icon: Brain, title: "Limitless AI",
    description: "Limitless AI (formerly Rewind Pendant) is a wearable AI pendant that captures your day and transforms it into a personalized, searchable memory — meetings, ideas, and conversations, all recallable through a private AI assistant.",
    emoji: "♾️", color: "from-indigo-500 to-emerald-500",
    directUrl: "https://www.limitless.ai/?via=aiwebtools",
    imageUrl: limitlessAiHero,
    tags: ["Limitless", "Limitless AI", "AI pendant", "personal AI", "AI wearable", "memory AI", "meeting assistant", "second brain"],
    category: "AI Gadgets & Hardware", rating: 4.6, totalVotes: 38000,
  },
  {
    icon: Video, title: "Recall.ai",
    description: "Recall.ai is the universal meeting recording API used by hundreds of AI note-taker startups to capture Zoom, Meet, and Teams calls. One integration replaces bespoke bots and unlocks video, audio, transcripts, and real-time streams for any product.",
    emoji: "📞", color: "from-emerald-500 to-cyan-500",
    directUrl: "https://www.recall.ai/?via=aiwebtools",
    imageUrl: recallAiHero,
    tags: ["Recall.ai", "meeting API", "Zoom recording", "Google Meet bot", "Teams bot", "transcription API", "developer tools", "AI meeting"],
    category: "AI Meeting Assistants", rating: 4.8, totalVotes: 21000,
  },
  {
    icon: Music, title: "Kits AI",
    description: "Kits AI lets musicians clone their voice, convert vocals into licensed artist voices, and generate royalty-free vocal samples — the leading AI voice studio built specifically for songwriters and producers.",
    emoji: "🎤", color: "from-purple-500 to-emerald-500",
    directUrl: "https://www.kits.ai/?via=aiwebtools",
    imageUrl: kitsAiHero,
    tags: ["Kits AI", "AI voice cloning", "vocal conversion", "AI music", "singer voice AI", "artist voices", "music production"],
    category: "AI Music Generation", rating: 4.7, totalVotes: 52000,
  },
  {
    icon: Brain, title: "Mem AI",
    description: "Mem AI is a self-organizing AI-native notes app that auto-links your thoughts, meetings, and documents into a personal knowledge graph. Ask Mem anything and it recalls the right note across your whole second brain.",
    emoji: "🧠", color: "from-indigo-500 to-purple-600",
    directUrl: "https://get.mem.ai/?via=aiwebtools",
    imageUrl: memAiHero,
    tags: ["Mem", "Mem AI", "AI notes", "second brain", "knowledge base", "AI search", "personal AI", "note-taking"],
    category: "AI Note Taking", rating: 4.6, totalVotes: 47000,
  },
  {
    icon: StickyNote, title: "Logseq",
    description: "Logseq is a free, open-source, privacy-first outliner and knowledge graph. Your notes stay in local markdown files while backlinks, graph views, and plugins power a fully-owned second brain.",
    emoji: "📓", color: "from-emerald-600 to-lime-500",
    directUrl: "https://logseq.com/",
    imageUrl: logseqHero,
    tags: ["Logseq", "open source", "outliner", "knowledge graph", "second brain", "markdown", "privacy first", "note-taking", "free"],
    category: "AI Note Taking", rating: 4.8, totalVotes: 61000, isFree: true,
  },
  {
    icon: Layers, title: "Capacities",
    description: "Capacities is an object-based note-taking studio that lets you organize thoughts as connected people, projects, books, and ideas. AI features surface links, summaries, and daily context across a beautifully-designed knowledge base.",
    emoji: "🧩", color: "from-emerald-500 to-teal-600",
    directUrl: "https://capacities.io/?via=aiwebtools",
    imageUrl: capacitiesHero,
    tags: ["Capacities", "AI notes", "object-based notes", "knowledge base", "second brain", "productivity", "PKM"],
    category: "AI Note Taking", rating: 4.6, totalVotes: 24000,
  },
  {
    icon: Video, title: "Pollo AI",
    description: "Pollo AI is an all-in-one AI video generation hub bringing Kling, Runway, Sora, Luma, Hailuo, Vidu, Pika, and more under one roof. Compare and generate across every top model from a single creator dashboard.",
    emoji: "🎬", color: "from-emerald-500 to-fuchsia-500",
    directUrl: "https://pollo.ai/?via=aiwebtools",
    imageUrl: polloAiHero,
    tags: ["Pollo AI", "AI video", "multi-model", "text to video", "image to video", "Kling", "Runway", "Sora", "Luma", "video generation"],
    category: "AI Video Generation", rating: 4.7, totalVotes: 35000,
  },
  {
    icon: Users, title: "RenderNet",
    description: "RenderNet generates consistent AI characters across scenes, poses, and outfits — an essential tool for creators, storytellers, and marketers who need the same face and identity to survive every generation.",
    emoji: "🧑‍🎨", color: "from-emerald-500 to-violet-600",
    directUrl: "https://rendernet.ai/?via=aiwebtools",
    imageUrl: rendernetHero,
    tags: ["RenderNet", "AI character consistency", "AI portraits", "character generator", "AI images", "storytelling AI"],
    category: "AI Art Tools", rating: 4.7, totalVotes: 41000,
  },
  {
    icon: Palette, title: "Flora",
    description: "Flora is an infinite AI creative canvas where image, text, and video nodes flow together into a single generative workflow. The professional playground of choice for AI-native designers and directors.",
    emoji: "🌸", color: "from-emerald-500 to-pink-500",
    directUrl: "https://florafauna.ai/?via=aiwebtools",
    imageUrl: floraAiHero,
    tags: ["Flora", "Flora AI", "AI canvas", "creative workflow", "node-based AI", "generative design", "AI image", "AI video"],
    category: "AI Creative Tools", rating: 4.7, totalVotes: 28000,
  },
  {
    icon: Globe, title: "Wegic",
    description: "Wegic is a chat-driven AI website builder — describe your business and Wegic designs, writes, and deploys a fully working site in minutes. Iterate by simply talking to your AI web designer.",
    emoji: "🌐", color: "from-emerald-500 to-cyan-500",
    directUrl: "https://wegic.ai/?via=aiwebtools",
    imageUrl: wegicHero,
    tags: ["Wegic", "AI website builder", "no-code", "AI web design", "conversational website", "landing page AI"],
    category: "AI Web Development", rating: 4.6, totalVotes: 32000,
  },
  {
    icon: Speaker, title: "PlayHT",
    description: "PlayHT delivers ultra-realistic AI voice generation and voice cloning across 100+ languages, powering podcasts, IVR, agents, and content at massive scale. One of the most-used TTS engines on the internet.",
    emoji: "🔊", color: "from-purple-600 to-emerald-500",
    directUrl: "https://play.ht/?via=aiwebtools",
    imageUrl: playhtHero,
    tags: ["PlayHT", "Play.ht", "AI voice", "text to speech", "voice cloning", "TTS", "AI narration", "podcast voice", "voice agents"],
    category: "AI Voice Generation", rating: 4.7, totalVotes: 96000,
  },
  {
    icon: Video, title: "Rephrase.ai",
    description: "Rephrase.ai (now part of Adobe) turns plain text into professional AI-avatar videos with photorealistic presenters and natural voices — the enterprise standard for personalized video at scale.",
    emoji: "🎭", color: "from-cyan-500 to-emerald-500",
    directUrl: "https://www.rephrase.ai/?via=aiwebtools",
    imageUrl: rephraseAiHero,
    tags: ["Rephrase.ai", "AI avatar video", "text to video", "AI presenter", "personalized video", "digital human", "Adobe"],
    category: "AI Video Generation", rating: 4.6, totalVotes: 27000,
  },
  {
    icon: FileAudio, title: "Whisper by OpenAI",
    description: "Whisper is OpenAI's open-source speech recognition model — robust, multilingual, and free. Transcribe and translate audio in 90+ languages with state-of-the-art accuracy on your own hardware.",
    emoji: "🗣️", color: "from-emerald-600 to-teal-500",
    directUrl: "https://github.com/openai/whisper",
    imageUrl: whisperOpenAiHero,
    tags: ["Whisper", "OpenAI", "speech recognition", "STT", "open source", "transcription", "multilingual", "free", "AI audio"],
    category: "AI Transcription Tools", rating: 4.9, totalVotes: 185000, isFree: true,
  },
  {
    icon: Radio, title: "SoundHound AI",
    description: "SoundHound AI is a leading independent voice AI platform powering conversational assistants for cars, restaurants, IoT, and enterprises worldwide — plus the beloved song-recognition app millions still use.",
    emoji: "🐕", color: "from-orange-500 to-emerald-500",
    directUrl: "https://www.soundhound.com/?via=aiwebtools",
    imageUrl: soundhoundAiHero,
    tags: ["SoundHound", "SoundHound AI", "voice AI", "conversational AI", "music recognition", "voice assistant", "automotive AI", "enterprise voice"],
    category: "AI Voice Generation", rating: 4.5, totalVotes: 78000,
  },
];
