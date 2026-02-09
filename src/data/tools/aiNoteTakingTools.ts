
import { Tool } from "@/types/tools";
import { 
  FileText, 
  Brain, 
  Zap, 
  Layers,
  Sparkles,
  Network
} from "lucide-react";
import memHero from "@/assets/tools/mem-hero.jpg";
import reflectHero from "@/assets/tools/reflect-hero.jpg";
import obsidianHero from "@/assets/tools/obsidian-hero.jpg";
import craftHero from "@/assets/tools/craft-hero.jpg";
import roamResearchHero from "@/assets/tools/roam-research-hero.jpg";

export const aiNoteTakingTools: Tool[] = [
  {
    icon: Brain,
    title: "Notion AI",
    description: "All-in-one workspace with AI-powered writing, editing, and organization. Features AI blocks for generating content, summarizing notes, creating action items, and transforming your knowledge base into an intelligent system.",
    emoji: "📝",
    color: "from-gray-700 to-gray-900",
    directUrl: "https://www.notion.so/product/ai/?via=aiwebtools",
    imageUrl: "/src/assets/tools/notion-ai-hero.png",
    tags: ["workspace", "AI writing", "note organization", "knowledge base", "productivity"],
    category: "AI Note-Taking Tools",
    rating: 4.8,
    totalVotes: 9234
  },
  {
    icon: Network,
    title: "Mem",
    description: "Self-organizing workspace powered by AI that automatically connects related notes, surfaces relevant information, and helps you capture and organize thoughts effortlessly. Features smart search and contextual recommendations.",
    emoji: "🧠",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://mem.ai/?via=aiwebtools",
    imageUrl: memHero,
    tags: ["self-organizing", "AI search", "contextual", "automatic connections", "knowledge management"],
    category: "AI Note-Taking Tools",
    rating: 4.5,
    totalVotes: 3456
  },
  {
    icon: Sparkles,
    title: "Reflect",
    description: "Networked note-taking app with AI-powered features for organizing thoughts, backlinking notes, and surfacing insights. Includes end-to-end encryption and AI assistant for writing, summarizing, and brainstorming.",
    emoji: "✨",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://reflect.app/?via=aiwebtools",
    imageUrl: reflectHero,
    tags: ["networked notes", "backlinking", "encryption", "AI assistant", "privacy"],
    category: "AI Note-Taking Tools",
    rating: 4.6,
    totalVotes: 4123
  },
  {
    icon: Layers,
    title: "Obsidian with AI Plugins",
    description: "Powerful knowledge base built on local markdown files with extensive AI plugin ecosystem. Features Text Generator, Smart Connections, and AI-powered search to enhance your personal knowledge management system.",
    emoji: "🔮",
    color: "from-purple-600 to-pink-600",
    directUrl: "https://obsidian.md/?via=aiwebtools",
    imageUrl: obsidianHero,
    tags: ["local-first", "markdown", "plugins", "knowledge graph", "privacy", "extensible"],
    category: "AI Note-Taking Tools",
    rating: 4.7,
    totalVotes: 7890
  },
  {
    icon: Zap,
    title: "Craft",
    description: "Beautiful native note-taking app with AI assistant for writing, editing, and organizing. Features AI-powered templates, smart folders, and seamless collaboration across all devices.",
    emoji: "⚡",
    color: "from-orange-500 to-red-600",
    directUrl: "https://www.craft.do/?via=aiwebtools",
    imageUrl: craftHero,
    tags: ["native app", "AI templates", "collaboration", "beautiful design", "cross-platform"],
    category: "AI Note-Taking Tools",
    rating: 4.5,
    totalVotes: 5678
  },
  {
    icon: FileText,
    title: "Roam Research",
    description: "Networked thought tool for building a personal knowledge graph. Features bidirectional linking, AI-powered search, and a graph view to visualize connections between ideas and concepts.",
    emoji: "🕸️",
    color: "from-green-500 to-teal-600",
    directUrl: "https://roamresearch.com/?via=aiwebtools",
    imageUrl: roamResearchHero,
    tags: ["knowledge graph", "bidirectional linking", "networked thinking", "graph view", "Zettelkasten"],
    category: "AI Note-Taking Tools",
    rating: 4.4,
    totalVotes: 4567
  }
];
