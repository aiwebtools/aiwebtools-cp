import { Tool } from "@/types/tools";
import { FileText, Video, Film, Compass, ClipboardList, Sparkles, BookOpen, Newspaper, Repeat, Brain, PenLine, Zap, Waves, Layout, Frame, Wand2, FlaskConical, Cloud, Database, Activity } from "lucide-react";

import readAiHero from "@/assets/tools/read-ai-hero.jpg";
import veo3Hero from "@/assets/tools/veo-3-hero.jpg";
import sora2Hero from "@/assets/tools/sora-2-hero.jpg";
import chatgptAtlasHero from "@/assets/tools/chatgpt-atlas-hero.jpg";
import chatprdHero from "@/assets/tools/chatprd-hero.jpg";
import lumaRay2Hero from "@/assets/tools/luma-ray-2-hero.jpg";
import elevenReaderHero from "@/assets/tools/elevenreader-hero.jpg";
import particleNewsHero from "@/assets/tools/particle-news-hero.jpg";
import magicLoopsHero from "@/assets/tools/magic-loops-hero.jpg";
import lettaHero from "@/assets/tools/letta-hero.jpg";
import eraserAiHero from "@/assets/tools/eraser-ai-hero.jpg";
import grok3Hero from "@/assets/tools/grok-3-hero.jpg";
import deepseekR1Hero from "@/assets/tools/deepseek-r1-hero.jpg";
import stitchGoogleHero from "@/assets/tools/stitch-google-hero.jpg";
import subframeHero from "@/assets/tools/subframe-hero.jpg";
import magicPatternsHero from "@/assets/tools/magic-patterns-hero.jpg";
import perplexityLabsHero from "@/assets/tools/perplexity-labs-hero.jpg";
import skyworkAiHero from "@/assets/tools/skywork-ai-hero.jpg";
import tonicAiHero from "@/assets/tools/tonic-ai-hero.jpg";
import chatgptPulseHero from "@/assets/tools/chatgpt-pulse-hero.jpg";

// Top New Batch — June 2026 (20 verified real, popular AI tools we didn't have yet)
export const topNewBatch2026Jun20: Tool[] = [
  {
    icon: FileText, title: "Read AI",
    description: "Read AI is an AI copilot for meetings, email, and messages — generating real-time summaries, action items, transcripts, sentiment analytics, and follow-up emails across Zoom, Google Meet, Teams, Slack, and Gmail.",
    emoji: "📖", color: "from-blue-600 to-purple-700",
    directUrl: "https://www.read.ai/?via=aiwebtools", imageUrl: readAiHero,
    tags: ["Read AI", "meeting AI", "meeting summary", "Zoom AI", "Teams AI", "Gmail AI", "transcription", "meeting notes", "AI copilot", "Meeting Assistant"],
    category: "Productivity & Utilities", rating: 4.7,
  },
  {
    icon: Video, title: "Veo 3",
    description: "Veo 3 is Google DeepMind's flagship video model — generating cinematic 4K clips with native synchronized audio, dialogue, and sound effects from a single prompt. Available in Gemini, Flow, and the Vertex AI API.",
    emoji: "🎬", color: "from-blue-500 to-cyan-600",
    directUrl: "https://deepmind.google/models/veo/?via=aiwebtools", imageUrl: veo3Hero,
    tags: ["Veo 3", "Google DeepMind", "AI video generation", "text to video", "video model", "Flow", "Vertex AI", "cinematic AI", "Video Generation"],
    category: "Video Generation", rating: 4.9,
  },
  {
    icon: Film, title: "Sora 2",
    description: "Sora 2 is OpenAI's next-generation video and audio model with sharper physics, controllable cameos, synchronized dialogue, and longer, more coherent scenes — available standalone at sora.com and inside ChatGPT.",
    emoji: "🌀", color: "from-indigo-600 to-violet-800",
    directUrl: "https://sora.com/?via=aiwebtools", imageUrl: sora2Hero,
    tags: ["Sora 2", "OpenAI", "AI video", "text to video", "video generation", "ChatGPT video", "cameo", "Video Generation"],
    category: "Video Generation", rating: 4.9,
  },
  {
    icon: Compass, title: "ChatGPT Atlas",
    description: "ChatGPT Atlas is OpenAI's AI-native browser — ChatGPT travels with you on every page, with built-in agent mode that can browse, click, and complete tasks for you across the web.",
    emoji: "🧭", color: "from-teal-500 to-emerald-700",
    directUrl: "https://chatgpt.com/atlas/?via=aiwebtools", imageUrl: chatgptAtlasHero,
    tags: ["ChatGPT Atlas", "OpenAI browser", "AI browser", "agent mode", "web agent", "ChatGPT", "browser assistant", "AI Agents"],
    category: "AI Agents", rating: 4.7,
  },
  {
    icon: ClipboardList, title: "ChatPRD",
    description: "ChatPRD is an on-demand AI chief product officer — draft and improve product requirements documents, brainstorm features, set goals, and coach PMs in minutes instead of days.",
    emoji: "📋", color: "from-blue-500 to-indigo-700",
    directUrl: "https://www.chatprd.ai/?via=aiwebtools", imageUrl: chatprdHero,
    tags: ["ChatPRD", "PRD generator", "product requirements", "AI product manager", "PM coach", "product strategy", "Productivity"],
    category: "Business & Productivity", rating: 4.6,
  },
  {
    icon: Sparkles, title: "Luma Ray 2",
    description: "Luma Ray 2 is Luma Labs' large-scale video generation model — produces fast, realistic, physics-accurate motion with natural camera moves and stunning detail from text or image prompts.",
    emoji: "🌈", color: "from-purple-500 to-pink-600",
    directUrl: "https://lumalabs.ai/ray/?via=aiwebtools", imageUrl: lumaRay2Hero,
    tags: ["Luma Ray 2", "Luma Labs", "Dream Machine", "AI video generation", "text to video", "image to video", "video model", "Video Generation"],
    category: "Video Generation", rating: 4.7,
  },
  {
    icon: BookOpen, title: "ElevenReader",
    description: "ElevenReader by ElevenLabs turns any PDF, article, ePub, or document into a lifelike audiobook narrated by ultra-realistic AI voices — including famous celebrity voice clones — for hands-free reading anywhere.",
    emoji: "🎧", color: "from-amber-500 to-orange-600",
    directUrl: "https://elevenreader.io/?via=aiwebtools", imageUrl: elevenReaderHero,
    tags: ["ElevenReader", "ElevenLabs", "AI audiobook", "text to speech", "PDF to audio", "AI narration", "Audio & Music"],
    category: "Audio & Music", rating: 4.7,
  },
  {
    icon: Newspaper, title: "Particle News",
    description: "Particle is an AI-powered news app from ex-Twitter engineers — summarizes stories across hundreds of sources, balances perspectives, and lets you chat with the news to dig deeper without bias.",
    emoji: "📰", color: "from-slate-700 to-cyan-600",
    directUrl: "https://www.particle.news/?via=aiwebtools", imageUrl: particleNewsHero,
    tags: ["Particle News", "AI news", "news summarizer", "unbiased news", "news app", "AI reader", "Productivity"],
    category: "News & Information", rating: 4.6,
  },
  {
    icon: Repeat, title: "Magic Loops",
    description: "Magic Loops lets anyone build mini AI apps and automations by combining LLM steps with code and APIs — turn a prompt into a working workflow, scheduled job, or shareable tool in minutes.",
    emoji: "🔁", color: "from-violet-500 to-fuchsia-600",
    directUrl: "https://magicloops.com/?via=aiwebtools", imageUrl: magicLoopsHero,
    tags: ["Magic Loops", "AI automation", "no-code AI", "AI workflow", "LLM workflow", "AI app builder", "Productivity"],
    category: "Productivity & Utilities", rating: 4.6,
  },
  {
    icon: Brain, title: "Letta",
    description: "Letta (formerly MemGPT) is the open-source framework and cloud platform for building stateful AI agents with persistent long-term memory — the missing memory layer that lets agents truly learn over time.",
    emoji: "🧠", color: "from-emerald-500 to-teal-700",
    directUrl: "https://www.letta.com/?via=aiwebtools", imageUrl: lettaHero,
    tags: ["Letta", "MemGPT", "AI memory", "stateful agents", "agent framework", "open source AI", "long term memory", "AI Agents"],
    category: "AI Agents", rating: 4.7,
  },
  {
    icon: PenLine, title: "Eraser AI",
    description: "Eraser AI is the AI-native diagramming and engineering docs tool — generate architecture diagrams, sequence flows, and entity-relationship diagrams from natural-language prompts, then refine and share with your team.",
    emoji: "✏️", color: "from-rose-500 to-orange-600",
    directUrl: "https://www.eraser.io/ai/?via=aiwebtools", imageUrl: eraserAiHero,
    tags: ["Eraser AI", "AI diagrams", "DiagramGPT", "architecture diagrams", "engineering docs", "developer docs", "Developer Tools"],
    category: "Developer Tools", rating: 4.6,
  },
  {
    icon: Zap, title: "Grok 3",
    description: "Grok 3 by xAI is Elon Musk's frontier reasoning chatbot — featuring Think mode, DeepSearch agentic web research, and real-time access to the X firehose. Available on grok.com and inside X.",
    emoji: "⚡", color: "from-zinc-800 to-slate-600",
    directUrl: "https://grok.com/?via=aiwebtools", imageUrl: grok3Hero,
    tags: ["Grok 3", "xAI", "Elon Musk", "AI chatbot", "DeepSearch", "Think mode", "reasoning model", "AI Chat Platforms"],
    category: "AI Chat Platforms", rating: 4.7,
  },
  {
    icon: Waves, title: "DeepSeek R1",
    description: "DeepSeek R1 is the open-weight reasoning model that shocked the world — matching o1 on math, code, and reasoning benchmarks while being released under MIT license. Free to use at chat.deepseek.com.",
    emoji: "🐋", color: "from-blue-700 to-indigo-900",
    directUrl: "https://chat.deepseek.com/?via=aiwebtools", imageUrl: deepseekR1Hero,
    tags: ["DeepSeek R1", "DeepSeek", "reasoning model", "open source LLM", "MIT license", "o1 competitor", "free AI", "AI Chat Platforms"],
    category: "AI Chat Platforms", rating: 4.8,
  },
  {
    icon: Layout, title: "Stitch by Google",
    description: "Stitch is Google Labs' AI UI designer — describe an app and Stitch generates polished mobile and web UI designs you can iterate on, then export to Figma or production-ready frontend code.",
    emoji: "🧵", color: "from-yellow-400 to-blue-500",
    directUrl: "https://stitch.withgoogle.com/?via=aiwebtools", imageUrl: stitchGoogleHero,
    tags: ["Stitch", "Google Labs", "AI UI design", "design to code", "Figma export", "UI generator", "Image & Design"],
    category: "Image & Design", rating: 4.6,
  },
  {
    icon: Frame, title: "Subframe",
    description: "Subframe is the AI-native UI builder for designers and developers — generate beautiful React components from prompts with pixel-perfect Tailwind output, full customization, and one-click code export.",
    emoji: "🖼️", color: "from-neutral-700 to-zinc-500",
    directUrl: "https://subframe.com/?via=aiwebtools", imageUrl: subframeHero,
    tags: ["Subframe", "AI UI builder", "design to code", "React components", "Tailwind", "frontend AI", "Developer Tools"],
    category: "Developer Tools", rating: 4.6,
  },
  {
    icon: Wand2, title: "Magic Patterns",
    description: "Magic Patterns is the AI design copilot for product teams — describe a feature and instantly get React + Tailwind UI components, full pages, or design system variants, all editable in the browser.",
    emoji: "🪄", color: "from-pink-500 to-purple-700",
    directUrl: "https://www.magicpatterns.com/?via=aiwebtools", imageUrl: magicPatternsHero,
    tags: ["Magic Patterns", "AI UI design", "React generator", "Tailwind UI", "design copilot", "AI prototype", "Image & Design"],
    category: "Image & Design", rating: 4.5,
  },
  {
    icon: FlaskConical, title: "Perplexity Labs",
    description: "Perplexity Labs is the deep work mode of Perplexity — runs multi-step research projects for 10+ minutes, builds spreadsheets, dashboards, mini-apps, and reports, complete with citations and downloadable assets.",
    emoji: "🧪", color: "from-teal-600 to-slate-800",
    directUrl: "https://www.perplexity.ai/labs/?via=aiwebtools", imageUrl: perplexityLabsHero,
    tags: ["Perplexity Labs", "Perplexity", "deep research", "AI research", "AI reports", "AI dashboards", "Research & Academic Tools"],
    category: "Research & Academic Tools", rating: 4.7,
  },
  {
    icon: Cloud, title: "Skywork AI",
    description: "Skywork is an AI super agent that turns prompts into production-ready spreadsheets, slide decks, research reports, podcasts, and websites — coordinating multiple specialist agents end-to-end.",
    emoji: "☁️", color: "from-sky-400 to-blue-700",
    directUrl: "https://skywork.ai/?via=aiwebtools", imageUrl: skyworkAiHero,
    tags: ["Skywork AI", "AI super agent", "AI documents", "AI slides", "AI spreadsheets", "AI reports", "AI Agents"],
    category: "AI Agents", rating: 4.6,
  },
  {
    icon: Database, title: "Tonic AI",
    description: "Tonic AI generates safe, realistic synthetic data and de-identified datasets for development and ML training — preserving statistical fidelity without exposing PII, fully compliant with HIPAA and GDPR.",
    emoji: "🧫", color: "from-purple-600 to-violet-800",
    directUrl: "https://www.tonic.ai/?via=aiwebtools", imageUrl: tonicAiHero,
    tags: ["Tonic AI", "synthetic data", "data privacy", "data masking", "ML data", "GDPR", "HIPAA", "Developer Tools"],
    category: "Developer Tools", rating: 4.6,
  },
  {
    icon: Activity, title: "ChatGPT Pulse",
    description: "ChatGPT Pulse is OpenAI's proactive daily briefing — overnight, ChatGPT reviews your chats, connected apps, and feedback to deliver personalized morning research cards, summaries, and follow-ups.",
    emoji: "💚", color: "from-green-500 to-emerald-700",
    directUrl: "https://openai.com/index/introducing-chatgpt-pulse/?via=aiwebtools", imageUrl: chatgptPulseHero,
    tags: ["ChatGPT Pulse", "OpenAI", "proactive AI", "daily briefing", "morning summary", "ChatGPT Pro", "Productivity"],
    category: "Productivity & Utilities", rating: 4.6,
  },
];