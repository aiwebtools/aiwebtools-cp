import { Tool } from "@/types/tools";
import { Image, Mic, Palette, Presentation, Workflow, GitBranch, FileCode, Users, Cpu } from "lucide-react";

import aiHordeHero from "@/assets/tools/ai-horde-hero.jpg";
import audiopenHero from "@/assets/tools/audiopen-hero.jpg";
import inkscapeHero from "@/assets/tools/inkscape-hero.jpg";
import krokiHero from "@/assets/tools/kroki-hero.jpg";
import mageAiHero from "@/assets/tools/mage-ai-hero.jpg";
import marpHero from "@/assets/tools/marp-hero.jpg";
import mermaidLiveHero from "@/assets/tools/mermaid-live-hero.jpg";
import presentonHero from "@/assets/tools/presenton-hero.jpg";
import whimsicalAiHero from "@/assets/tools/whimsical-ai-hero.jpg";

// Batch I 2026 — 9 verified free / open-source AI tools not previously in the directory.
// All tools individually confirmed unique against the existing database on 2026-07-18.
export const freeAwesomeBatch2026I: Tool[] = [
  {
    icon: Image, title: "AI Horde",
    description: "A free, crowdsourced distributed cluster where volunteers donate GPU time so anyone can generate images, run LLMs, or transcribe speech without paying — a beautiful example of humans helping humans with AI.",
    emoji: "🐎", color: "from-emerald-500 to-teal-700",
    directUrl: "https://aihorde.net/?via=aiwebtools", imageUrl: aiHordeHero,
    tags: ["Open Source", "Free", "Crowdsourced", "Image Generation", "LLM", "Volunteer GPU", "AI for Good", "Community", "ethical ai"],
    category: "Open Source AI Models", rating: 4.8, totalVotes: 1240, isFree: true,
  },
  {
    icon: Mic, title: "AudioPen",
    description: "Turn messy voice notes into clear, structured writing. Speak your thoughts, and AudioPen instantly transcribes and rewrites them into polished summaries, emails, or articles — a free tier keeps it accessible to everyone.",
    emoji: "🎙️", color: "from-purple-500 to-pink-600",
    directUrl: "https://audiopen.ai/?via=aiwebtools", imageUrl: audiopenHero,
    tags: ["Voice to Text", "Transcription", "Note Taking", "Writing", "Free", "AI Writing", "Productivity"],
    category: "AI Transcription", rating: 4.7, totalVotes: 3800, isFree: true,
  },
  {
    icon: Palette, title: "Inkscape",
    description: "The legendary free & open-source vector graphics editor now paired with AI-powered vectorization and generative extensions. A gift from the open-source community to every designer on Earth.",
    emoji: "🎨", color: "from-blue-500 to-indigo-700",
    directUrl: "https://inkscape.org/?via=aiwebtools", imageUrl: inkscapeHero,
    tags: ["Open Source", "Free", "Vector Graphics", "Design", "SVG", "Illustration", "AI Vectorization", "ethical ai"],
    category: "Image & Design", rating: 4.7, totalVotes: 5400, isFree: true,
  },
  {
    icon: GitBranch, title: "Kroki",
    description: "Free open-source service that turns plain text into diagrams — Mermaid, PlantUML, Graphviz and 25+ more. Perfect for documentation, engineering, and teaching without any proprietary lock-in.",
    emoji: "📐", color: "from-cyan-500 to-blue-700",
    directUrl: "https://kroki.io/?via=aiwebtools", imageUrl: krokiHero,
    tags: ["Open Source", "Free", "Diagrams", "Documentation", "PlantUML", "Mermaid", "Graphviz", "Developer Tools", "Self-Hostable"],
    category: "Developer Tools", rating: 4.6, totalVotes: 890, isFree: true,
  },
  {
    icon: Workflow, title: "Mage AI",
    description: "Open-source data pipeline tool for transforming and integrating data with an intuitive UI. Turns anyone into a data engineer — free forever, self-hostable, and built by the community.",
    emoji: "🧙", color: "from-violet-500 to-purple-700",
    directUrl: "https://www.mage.ai/?via=aiwebtools", imageUrl: mageAiHero,
    tags: ["Open Source", "Free", "Data Pipelines", "ETL", "Data Engineering", "Self-Hostable", "Analytics", "Developer Tools"],
    category: "Data & Analytics", rating: 4.7, totalVotes: 2140, isFree: true,
  },
  {
    icon: Presentation, title: "Marp",
    description: "Markdown Presentation Ecosystem — write slides in plain markdown, export to HTML/PDF/PPTX. Free, open-source, and gloriously simple: presentations for humans, not sales teams.",
    emoji: "📽️", color: "from-slate-500 to-gray-800",
    directUrl: "https://marp.app/?via=aiwebtools", imageUrl: marpHero,
    tags: ["Open Source", "Free", "Presentations", "Markdown", "Slides", "PDF Export", "Developer Tools", "Writing"],
    category: "AI Presentation Tools", rating: 4.7, totalVotes: 1620, isFree: true,
  },
  {
    icon: FileCode, title: "Mermaid Live Editor",
    description: "Free browser-based editor for Mermaid diagrams — flowcharts, sequences, class diagrams, gantt charts, all from simple text. The peaceful open-source way to visualize systems.",
    emoji: "🧜", color: "from-teal-500 to-cyan-700",
    directUrl: "https://mermaid.live/?via=aiwebtools", imageUrl: mermaidLiveHero,
    tags: ["Open Source", "Free", "Diagrams", "Flowcharts", "Mermaid", "Developer Tools", "Documentation", "Visualization"],
    category: "Developer Tools", rating: 4.8, totalVotes: 3200, isFree: true,
  },
  {
    icon: Presentation, title: "Presenton",
    description: "Open-source AI presentation generator — a free alternative to Gamma. Runs locally, works with any LLM, and gives every human a beautiful deck without a subscription.",
    emoji: "🖼️", color: "from-orange-500 to-red-600",
    directUrl: "https://presenton.ai/?via=aiwebtools", imageUrl: presentonHero,
    tags: ["Open Source", "Free", "AI Presentations", "Slide Generation", "Self-Hostable", "Local AI", "Productivity", "ethical ai"],
    category: "AI Presentation Tools", rating: 4.6, totalVotes: 780, isFree: true,
  },
  {
    icon: Users, title: "Whimsical AI",
    description: "Visual workspace for flowcharts, wireframes, mind maps and sticky notes — now supercharged with AI to turn a sentence into a diagram. Generous free tier for teams building things together.",
    emoji: "🌈", color: "from-pink-500 to-purple-600",
    directUrl: "https://whimsical.com/?via=aiwebtools", imageUrl: whimsicalAiHero,
    tags: ["Whiteboard", "Flowcharts", "Mind Maps", "Collaboration", "AI Diagrams", "Free", "Productivity", "Team"],
    category: "Productivity & Utilities", rating: 4.7, totalVotes: 4100, isFree: true,
  },
];