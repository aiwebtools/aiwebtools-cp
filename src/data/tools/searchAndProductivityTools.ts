
import { Tool } from "@/types/tools";
import { 
  Search, 
  Globe, 
  FileText, 
  BookOpen, 
  Zap, 
  Database, 
  Brain,
  MessageSquare,
  Code,
  Settings,
  Eye,
  Users
} from "lucide-react";

import gptgoHero from "@/assets/tools/gptgo-hero.jpg";
import globeAiHero from "@/assets/tools/globe-ai-hero.jpg";
import gptWorkspaceHero from "@/assets/tools/gpt-workspace-hero.jpg";
import merlinBrowserHero from "@/assets/tools/merlin-browser-hero.jpg";
import notebooklmBrandedHero from "@/assets/tools/notebooklm-branded-hero.jpg";

export const searchAndProductivityTools: Tool[] = [
  {
    icon: Search,
    title: "GPTGO.ai",
    description: "Versatile platform combining ChatGPT with search engine capabilities. Free access to ChatGPT chatbot with integrated web search, available in over 50 languages.",
    emoji: "🔍",
    color: "from-blue-500 to-green-600",
    directUrl: "https://gptgo.ai/?hl=en&via=aiwebtools",
    imageUrl: gptgoHero,
    tags: ["ChatGPT", "search engine", "multilingual", "free", "web search", "conversational AI"],
    category: "Search & Productivity",
    rating: 4.2,
    totalVotes: 3567
  },
  {
    icon: FileText,
    title: "GPT Workspace",
    description: "Productivity tool integrating ChatGPT into Google Workspace applications including Docs, Sheets, Slides, Drive, and Gmail. Boost productivity within Google environment.",
    emoji: "📄",
    color: "from-green-500 to-blue-600",
    directUrl: "https://gpt.space/?via=aiwebtools",
    imageUrl: gptWorkspaceHero,
    tags: ["Google Workspace", "productivity", "ChatGPT integration", "documents", "email", "collaboration"],
    category: "Search & Productivity",
    rating: 4.5,
    totalVotes: 4123
  },
  {
    icon: Globe,
    title: "You.com",
    description: "Revolutionary AI-powered search and content creation platform. Immediate answers with GPT-4, unlimited chat, AI art generation, and privacy-focused approach for $9.99/month.",
    emoji: "🌐",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://you.com/?via=aiwebtools",
    imageUrl: "/src/assets/tools/you-com-hero.png",
    tags: ["AI search", "GPT-4", "content creation", "privacy", "unlimited chat", "AI art"],
    category: "Search & Productivity",
    rating: 4.6,
    totalVotes: 5234
  },
  {
    icon: Zap,
    title: "Merlin",
    description: "Ultimate companion for supercharging ChatGPT experience while browsing. Lightning-fast Gmail replies, blog summaries, YouTube summaries, and enhanced social media engagement.",
    emoji: "⚡",
    color: "from-yellow-500 to-red-600",
    directUrl: "https://app.getmerlin.in/plans?ref=mte1mgu4",
    imageUrl: merlinBrowserHero,
    tags: ["browser extension", "ChatGPT enhancement", "Gmail", "YouTube", "productivity", "GPT-4 access"],
    category: "Search & Productivity",
    rating: 4.4,
    totalVotes: 3789
  },
  {
    icon: Eye,
    title: "Globe Ai",
    description: "Visual online learning database that's free. Search for anything on any topic and get vast visual data for education. Great for visual learners who prefer charts and images.",
    emoji: "🌍",
    color: "from-green-500 to-teal-600",
    directUrl: "https://explorer.globe.engineer/?via=aiwebtools",
    imageUrl: globeAiHero,
    tags: ["visual learning", "education", "free", "charts", "images", "database"],
    category: "Search & Productivity",
    rating: 4.3,
    totalVotes: 2876
  },
  {
    icon: FileText,
    title: "Napkin AI",
    description: "Transform documents with graphs, charts, and diagrams. Beta version available - upload documents and instantly create graphical representations of selected information.",
    emoji: "📊",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://www.napkin.ai/?via=aiwebtools",
    imageUrl: "/src/assets/tools/napkin-ai-hero.png",
    tags: ["document visualization", "graphs", "charts", "diagrams", "beta", "free trial"],
    category: "Search & Productivity",
    rating: 4.1,
    totalVotes: 1987
  },
  {
    icon: BookOpen,
    title: "Notebook LM by Google",
    description: "Upload URLs, PDFs, or documents to receive summarized breakdowns with simulated podcasts. Great for students or understanding information context in creative ways.",
    emoji: "📓",
    color: "from-red-500 to-orange-600",
    directUrl: "https://notebooklm.google.com/?via=aiwebtools",
    imageUrl: notebooklmBrandedHero,
    tags: ["Google", "document analysis", "podcast generation", "summarization", "education", "creative learning"],
    category: "Search & Productivity",
    rating: 4.7,
    totalVotes: 4567
  }
];
