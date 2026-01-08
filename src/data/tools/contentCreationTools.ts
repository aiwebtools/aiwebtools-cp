import { Tool } from "@/types/tools";
import { 
  FileText, Edit3, BookOpen, Camera, Video, Mic, 
  Image, Brush, PenTool, Layers, Type, Wand2, Zap
} from "lucide-react";

export const contentCreationTools: Tool[] = [
  {
    icon: FileText,
    title: "Jasper",
    description: "AI writing assistant that helps create blog posts, social media content, and marketing copy with brand voice.",
    emoji: "✍️",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://jasper.ai/?via=aiwebtools",
    imageUrl: "/src/assets/tools/jasper-ai-hero.png",
    tags: ["AI writing", "content marketing", "blog posts", "copywriting", "brand voice", "Blog Writing", "Copywriting", "Social Media Writing"],
    category: "Content Creation",
    rating: 4.5,
    totalVotes: 3456
  },
  {
    icon: BookOpen,
    title: "Writesonic",
    description: "AI writing platform for creating articles, ads, emails, and website copy with SEO optimization.",
    emoji: "📚",
    color: "from-green-500 to-blue-600",
    directUrl: "https://writesonic.com/?via=aiwebtools",
    imageUrl: "/src/assets/tools/writesonic-hero.png",
    tags: ["AI writing", "SEO content", "articles", "ads", "website copy", "SEO Content", "Article Writing", "Copywriting"],
    category: "Content Creation",
    rating: 4.4,
    totalVotes: 2654
  },
  {
    icon: PenTool,
    title: "Orchard.ink",
    description: "Revolutionary GPT Text Editor with multiplayer collaboration, smart suggestions, real-time web search, and document analysis. Perfect for teams creating and editing documents together.",
    emoji: "🌳",
    color: "from-emerald-500 to-blue-600",
    directUrl: "https://www.orchard.ink/?via=aiwebtools",
    imageUrl: "/src/assets/tools/orchard-ink-hero.png",
    tags: ["GPT editor", "collaborative writing", "document editing", "team collaboration", "smart text editor", "web search", "Grammar & Editing", "Content Strategy"],
    category: "Content Creation",
    rating: 4.3,
    totalVotes: 1247
  },
  {
    icon: Camera,
    title: "Flashy.ai",
    description: "AI-powered platform to create, organize, and publish content. Plan shoots, manage assets, edit with AI, and publish to social—all in one place.",
    emoji: "⚡",
    color: "from-indigo-500 to-purple-600",
    directUrl: "https://www.flashy.ai/?via=aiwebtools",
    imageUrl: "/src/assets/tools/flashy-ai-hero.png",
    tags: ["content hub", "asset management", "shoot planning", "AI editing", "social publishing", "workflow", "marketing", "Social Media Writing", "Content Strategy"],
    category: "Content Creation",
    rating: 4.5,
    totalVotes: 1670
  },
  {
    icon: Zap,
    title: "VortexAI",
    description: "Go viral with AI - From prompt to profit. VortexAI transforms your ideas into stunning, shareable content that captivates audiences and fuels your growth. Create viral content that drives engagement and monetization.",
    emoji: "🌪️",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://vortex.channel/?via=aiwebtools",
    imageUrl: "/src/assets/tools/vortexai-hero.png",
    tags: ["viral content", "AI content creation", "social media", "viral marketing", "content monetization", "shareable content", "audience growth", "prompt to profit", "vortex", "go viral", "Social Media Writing", "Copywriting"],
    category: "Content Creation",
    rating: 4.6,
    totalVotes: 2340
  }
];
