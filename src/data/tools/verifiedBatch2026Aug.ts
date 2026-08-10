import { Tool } from "@/types/tools";
import {
  Stethoscope,
  Scale,
  FlaskConical,
  MessageSquare,
  Brain,
  FileText,
  Terminal,
  Code2,
  GitPullRequest,
  Eye,
} from "lucide-react";

import openevidenceHero from "@/assets/tools/openevidence-hero.jpg";
import legoraHero from "@/assets/tools/legora-hero.jpg";
import chaiDiscoveryHero from "@/assets/tools/chai-discovery-hero.jpg";
import mistralLeChatHero from "@/assets/tools/mistral-le-chat-hero.jpg";
import sanaAiHero from "@/assets/tools/sana-ai-hero.jpg";
import scribeHero from "@/assets/tools/scribe-hero.jpg";
import ampCodeHero from "@/assets/tools/amp-code-hero.jpg";
import voidEditorHero from "@/assets/tools/void-editor-hero.jpg";
import ellipsisHero from "@/assets/tools/ellipsis-hero.jpg";
import ultralyticsYoloHero from "@/assets/tools/ultralytics-yolo-hero.jpg";

// Verified Batch 2026 (August) — 10 real, live AI tools not previously in the database.
export const verifiedBatch2026Aug: Tool[] = [
  {
    icon: Stethoscope,
    title: "OpenEvidence",
    description:
      "Free AI medical information platform for clinicians that answers clinical questions with citations drawn from peer-reviewed literature including NEJM and JAMA. Built for point-of-care evidence lookup, differential support and literature synthesis. Health information only — not a substitute for professional medical judgment.",
    emoji: "🩺",
    color: "from-teal-500 to-cyan-600",
    directUrl: "https://www.openevidence.com/?via=aiwebtools",
    imageUrl: openevidenceHero,
    tags: [
      "OpenEvidence", "medical AI", "clinical decision support", "evidence based medicine",
      "peer reviewed citations", "doctors", "clinicians", "medical research AI",
      "free for clinicians", "healthcare AI", "medical literature search", "Free"
    ],
    category: "Healthcare & Medical AI",
    rating: 4.8,
    totalVotes: 3120,
    isFree: true
  },
  {
    icon: Scale,
    title: "Legora",
    description:
      "Collaborative AI platform for lawyers that reviews contracts at scale, runs deep legal research across case law, drafts documents and works directly inside Word. Used by leading law firms for diligence, markup and citation-checked legal analysis.",
    emoji: "⚖️",
    color: "from-blue-800 to-amber-500",
    directUrl: "https://legora.com/?via=aiwebtools",
    imageUrl: legoraHero,
    tags: [
      "Legora", "legal AI", "contract review", "legal research", "law firm AI",
      "document drafting", "due diligence", "Word add-in", "case law analysis",
      "AI for lawyers", "Professional Services"
    ],
    category: "Professional Services",
    rating: 4.7,
    totalVotes: 1980
  },
  {
    icon: FlaskConical,
    title: "Chai Discovery",
    description:
      "Frontier AI lab for molecular structure prediction and de novo antibody design. Chai-1 and Chai-2 predict protein, nucleic acid and ligand complexes with state-of-the-art accuracy, with model weights and a free web interface available for research use.",
    emoji: "🧬",
    color: "from-fuchsia-500 to-blue-600",
    directUrl: "https://www.chaidiscovery.com/?via=aiwebtools",
    imageUrl: chaiDiscoveryHero,
    tags: [
      "Chai Discovery", "Chai-1", "Chai-2", "protein structure prediction",
      "antibody design", "drug discovery AI", "molecular modeling", "biology AI",
      "open weights", "research AI", "Free"
    ],
    category: "Open Source AI Models",
    rating: 4.7,
    totalVotes: 1460,
    isFree: true
  },
  {
    icon: MessageSquare,
    title: "Mistral Le Chat",
    description:
      "Free multimodal AI assistant from Mistral AI with web search, document and image understanding, code generation, image creation and connectors to your work tools. European-built, privacy-focused, and available on web and mobile.",
    emoji: "🐱",
    color: "from-orange-500 to-amber-600",
    directUrl: "https://chat.mistral.ai/?via=aiwebtools",
    imageUrl: mistralLeChatHero,
    tags: [
      "Mistral Le Chat", "Le Chat", "Mistral AI", "AI chat assistant", "free chatbot",
      "multimodal AI", "web search AI", "document analysis", "ChatGPT alternative",
      "European AI", "Free"
    ],
    category: "AI Chat Assistants",
    rating: 4.6,
    totalVotes: 5240,
    isFree: true
  },
  {
    icon: Brain,
    title: "Sana AI",
    description:
      "Enterprise AI knowledge assistant that connects your documents, meetings and business tools into one searchable brain. Records and summarizes meetings, answers company questions with sources, and powers internal learning and onboarding.",
    emoji: "🧠",
    color: "from-indigo-500 to-emerald-500",
    directUrl: "https://sana.ai/?via=aiwebtools",
    imageUrl: sanaAiHero,
    tags: [
      "Sana AI", "enterprise knowledge assistant", "meeting notes AI", "company search",
      "internal knowledge base", "AI learning platform", "onboarding", "business AI",
      "Business Intelligence", "Workflow Optimization"
    ],
    category: "Business & Productivity",
    rating: 4.5,
    totalVotes: 2310
  },
  {
    icon: FileText,
    title: "Scribe",
    description:
      "AI documentation tool that watches you complete a process and instantly turns it into a step-by-step guide with annotated screenshots. Free plan available for capturing SOPs, training docs and how-to guides your team will actually use.",
    emoji: "📝",
    color: "from-purple-500 to-violet-600",
    directUrl: "https://scribehow.com/?via=aiwebtools",
    imageUrl: scribeHero,
    tags: [
      "Scribe", "ScribeHow", "process documentation", "step by step guide generator",
      "SOP creator", "screen recording to guide", "training documentation",
      "how-to guides", "productivity", "Free"
    ],
    category: "Productivity & Utilities",
    rating: 4.6,
    totalVotes: 4180,
    isFree: true
  },
  {
    icon: Terminal,
    title: "Amp Code",
    description:
      "Agentic coding tool from Sourcegraph that runs in the terminal and in your editor. Amp plans, edits across many files, runs tests and commits — an unconstrained autonomous coding agent built for large real-world codebases.",
    emoji: "⚡",
    color: "from-amber-500 to-orange-600",
    directUrl: "https://ampcode.com/?via=aiwebtools",
    imageUrl: ampCodeHero,
    tags: [
      "Amp Code", "Amp", "Sourcegraph", "coding agent", "terminal AI", "autonomous coding",
      "AI pair programmer", "code generation", "agentic coding", "developer tools", "agent"
    ],
    category: "Coding & Development",
    rating: 4.5,
    totalVotes: 1720
  },
  {
    icon: Code2,
    title: "Void Editor",
    description:
      "Open-source AI code editor and Cursor alternative. Void gives you agent mode, inline edits and codebase chat while letting you connect any model or run models locally — full privacy, no data sent to a middleman.",
    emoji: "🕳️",
    color: "from-violet-500 to-slate-700",
    directUrl: "https://voideditor.com/?via=aiwebtools",
    imageUrl: voidEditorHero,
    tags: [
      "Void Editor", "Void", "open source AI editor", "Cursor alternative", "local LLM editor",
      "AI code editor", "privacy coding", "agent mode", "VS Code fork", "free", "Free"
    ],
    category: "Open Source AI Models",
    rating: 4.5,
    totalVotes: 2640,
    isFree: true
  },
  {
    icon: GitPullRequest,
    title: "Ellipsis",
    description:
      "AI code review agent that reviews every pull request automatically, catching bugs, style issues and missing tests, then proposes and pushes fixes. Integrates with GitHub to shorten review cycles for engineering teams.",
    emoji: "🔍",
    color: "from-teal-500 to-slate-700",
    directUrl: "https://www.ellipsis.dev/?via=aiwebtools",
    imageUrl: ellipsisHero,
    tags: [
      "Ellipsis", "AI code review", "pull request review", "GitHub bot", "automated code review",
      "bug detection", "developer productivity", "code quality", "engineering AI", "agent"
    ],
    category: "Developer Tools",
    rating: 4.4,
    totalVotes: 1180
  },
  {
    icon: Eye,
    title: "Ultralytics YOLO",
    description:
      "Open-source computer vision framework powering YOLO models for real-time object detection, segmentation, pose estimation, tracking and classification. Free, pip-installable, and the industry standard for production vision AI.",
    emoji: "👁️",
    color: "from-blue-600 to-cyan-500",
    directUrl: "https://www.ultralytics.com/?via=aiwebtools",
    imageUrl: ultralyticsYoloHero,
    tags: [
      "Ultralytics", "YOLO", "YOLOv8", "YOLO11", "object detection", "computer vision",
      "image segmentation", "pose estimation", "open source vision", "real-time detection",
      "machine learning", "Free"
    ],
    category: "Open Source AI Models",
    rating: 4.8,
    totalVotes: 6870,
    isFree: true
  }
];