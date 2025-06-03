import { Tool } from "@/types/tools";
import { 
  FileText, Edit3, BookOpen, Camera, Video, Mic, 
  Image, Brush, PenTool, Layers, Type, Wand2 
} from "lucide-react";

export const contentCreationTools: Tool[] = [
  {
    icon: FileText,
    title: "Jasper",
    description: "AI writing assistant that helps create blog posts, social media content, and marketing copy with brand voice.",
    emoji: "✍️",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://jasper.ai/?via=aiwebtools",
    tags: ["AI writing", "content marketing", "blog posts", "copywriting", "brand voice"],
    category: "Content Creation",
    rating: 4.5,
    totalVotes: 3456
  },
  {
    icon: Edit3,
    title: "Copy.ai",
    description: "AI-powered copywriting tool for creating marketing content, emails, and social media posts in seconds.",
    emoji: "📝",
    color: "from-blue-500 to-green-600",
    directUrl: "https://copy.ai/?via=aiwebtools",
    tags: ["copywriting", "marketing content", "email copy", "social media", "AI writing"],
    category: "Content Creation",
    rating: 4.3,
    totalVotes: 2891
  },
  {
    icon: BookOpen,
    title: "Writesonic",
    description: "AI writing platform for creating articles, ads, emails, and website copy with SEO optimization.",
    emoji: "📚",
    color: "from-green-500 to-blue-600",
    directUrl: "https://writesonic.com/?via=aiwebtools",
    tags: ["AI writing", "SEO content", "articles", "ads", "website copy"],
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
    tags: ["GPT editor", "collaborative writing", "document editing", "team collaboration", "smart text editor", "web search"],
    category: "Content Creation",
    rating: 4.3,
    totalVotes: 1247
  }
];
