import { Tool } from "@/types/tools";
import { Layers, Cloud, Video, MonitorPlay, Mic, MessageSquare, Users, PenTool } from "lucide-react";

import anytypeHero from "@/assets/tools/anytype-hero.jpg";
import novitaAiHero from "@/assets/tools/novita-ai-hero.jpg";
import capHero from "@/assets/tools/cap-hero.jpg";
import screenStudioHero from "@/assets/tools/screen-studio-hero.jpg";
import yoodliHero from "@/assets/tools/yoodli-hero.jpg";
import poisedHero from "@/assets/tools/poised-hero.jpg";
import bluedotHero from "@/assets/tools/bluedot-hero.jpg";
import figjamAiHero from "@/assets/tools/figjam-ai-hero.jpg";

// Batch II 2026 — 8 verified free / open-source AI tools not previously in the directory.
// All tools individually confirmed unique against the existing database on 2026-07-18.
export const freeAwesomeBatch2026II: Tool[] = [
  {
    icon: Layers, title: "Anytype",
    description: "Open-source, local-first knowledge graph and personal workspace — your notes, docs, and ideas encrypted on your own device. A free, sovereign alternative to Notion built by a community for humanity.",
    emoji: "🌌", color: "from-blue-500 to-indigo-700",
    directUrl: "https://anytype.io/?via=aiwebtools", imageUrl: anytypeHero,
    tags: ["Open Source", "Free", "Local First", "Notes", "Knowledge Graph", "Privacy", "Notion Alternative", "ethical ai"],
    category: "Productivity & Utilities", rating: 4.7, totalVotes: 2400, isFree: true,
  },
  {
    icon: Cloud, title: "Novita AI",
    description: "Affordable serverless GPU cloud for AI inference — run open-source LLMs, image models, and voice models at a fraction of the usual cost, with a generous free tier for builders and creators.",
    emoji: "⚡", color: "from-purple-500 to-violet-700",
    directUrl: "https://novita.ai/?via=aiwebtools", imageUrl: novitaAiHero,
    tags: ["GPU Cloud", "AI Inference", "Serverless", "Free Tier", "LLM Hosting", "Developer Tools", "Open Models"],
    category: "AI Inference Platforms", rating: 4.6, totalVotes: 1180, isFree: true,
  },
  {
    icon: Video, title: "Cap",
    description: "Beautiful open-source screen recorder for Mac and Windows — a free, privacy-respecting alternative to Loom. Record, share, and collaborate without accounts or paywalls.",
    emoji: "🎥", color: "from-orange-500 to-red-600",
    directUrl: "https://cap.so/?via=aiwebtools", imageUrl: capHero,
    tags: ["Open Source", "Free", "Screen Recorder", "Loom Alternative", "Privacy", "Video", "macOS", "Windows", "ethical ai"],
    category: "AI Video Editing", rating: 4.7, totalVotes: 1900, isFree: true,
  },
  {
    icon: MonitorPlay, title: "Screen Studio",
    description: "Cinematic screen recording with automatic zooms, smooth cursor tracking, and beautiful backgrounds — free tier lets anyone create polished product demos and tutorials.",
    emoji: "🎬", color: "from-pink-500 to-purple-600",
    directUrl: "https://screen.studio/?via=aiwebtools", imageUrl: screenStudioHero,
    tags: ["Screen Recording", "Video", "Tutorials", "Product Demos", "Free Tier", "macOS", "Content Creation"],
    category: "AI Video Editing", rating: 4.8, totalVotes: 3600, isFree: true,
  },
  {
    icon: Mic, title: "Yoodli",
    description: "Free AI-powered public speaking coach — practice presentations, interviews, and pitches privately and get instant feedback on pacing, filler words, and clarity. A gift for anyone building confidence.",
    emoji: "🎤", color: "from-amber-500 to-orange-600",
    directUrl: "https://yoodli.ai/?via=aiwebtools", imageUrl: yoodliHero,
    tags: ["Public Speaking", "AI Coach", "Communication", "Free", "Presentations", "Interview Prep", "Self Improvement"],
    category: "AI Educational Tools", rating: 4.7, totalVotes: 2800, isFree: true,
  },
  {
    icon: MessageSquare, title: "Poised",
    description: "Real-time AI communication coach that quietly analyzes your video calls, coaching you on confidence, clarity, and pacing. Free plan helps every human become a more compassionate communicator.",
    emoji: "🧘", color: "from-teal-500 to-cyan-700",
    directUrl: "https://www.poised.com/?via=aiwebtools", imageUrl: poisedHero,
    tags: ["Communication", "AI Coach", "Video Calls", "Real-time Feedback", "Free", "Remote Work", "Self Improvement"],
    category: "AI Meeting Assistants", rating: 4.5, totalVotes: 1420, isFree: true,
  },
  {
    icon: Users, title: "Bluedot",
    description: "AI meeting notetaker that joins your video calls, transcribes, and summarizes automatically — no bot appears on screen. Generous free tier makes note-taking effortless for teams and solo humans.",
    emoji: "🔵", color: "from-blue-500 to-cyan-600",
    directUrl: "https://bluedothq.com/?via=aiwebtools", imageUrl: bluedotHero,
    tags: ["Meeting Notes", "Transcription", "AI Notetaker", "Zoom", "Google Meet", "Free", "Productivity"],
    category: "AI Meeting Assistants", rating: 4.7, totalVotes: 1650, isFree: true,
  },
  {
    icon: PenTool, title: "FigJam AI",
    description: "Figma's free collaborative whiteboard supercharged with AI — turn prompts into flowcharts, organize sticky notes automatically, and summarize brainstorms. Free forever tier for teams building together in unity.",
    emoji: "🎨", color: "from-rose-500 to-pink-600",
    directUrl: "https://www.figma.com/figjam/?via=aiwebtools", imageUrl: figjamAiHero,
    tags: ["Whiteboard", "AI Diagrams", "Collaboration", "Free", "Brainstorming", "Team", "Figma", "Design"],
    category: "Productivity & Utilities", rating: 4.8, totalVotes: 5200, isFree: true,
  },
];