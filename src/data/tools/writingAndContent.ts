import { Tool } from "@/types/tools";
import { 
  PenTool, 
  FileText, 
  BookOpen, 
  Edit3, 
  Type, 
  MessageSquare, 
  Users, 
  Briefcase, 
  Globe, 
  Mail, 
  Target, 
  TrendingUp, 
  Zap, 
  Heart, 
  Coffee, 
  Music, 
  Film, 
  Camera, 
  Palette, 
  Lightbulb,
  Newspaper
} from "lucide-react";

export const writingAndContent: Tool[] = [
  {
    icon: PenTool,
    title: "Book Writer GPT",
    description: "AI-powered book writing assistant that helps authors create compelling narratives, develop characters, and structure their stories professionally.",
    emoji: "📚",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://bookwritergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=example",
    tags: ["book writing", "storytelling", "publishing", "creative writing", "authors"],
    category: "Writing & Content",
    rating: 4.7,
    totalVotes: 3892
  },
  {
    icon: FileText,
    title: "AI Content Generator",
    description: "Generate high-quality content for blogs, articles, social media, and marketing materials with AI assistance.",
    emoji: "✍️",
    color: "from-blue-500 to-teal-500",
    directUrl: "https://aicontentgenerator.lovable.app/?via=aiwebtools",
    tags: ["content generation", "writing", "marketing", "blog"],
    category: "Writing & Content",
    rating: 4.6,
    totalVotes: 2876
  },
  {
    icon: BookOpen,
    title: "Story Generator GPT",
    description: "Create engaging stories, plots, and narratives with AI assistance for writers and content creators.",
    emoji: "📖",
    color: "from-green-500 to-blue-500",
    directUrl: "https://storygeneratorgpt.lovable.app/?via=aiwebtools",
    tags: ["storytelling", "creative writing", "plot development", "fiction"],
    category: "Writing & Content",
    rating: 4.5,
    totalVotes: 3245
  },
  {
    icon: Edit3,
    title: "Grammar Checker GPT",
    description: "Advanced AI grammar and style checker for professional writing and content editing.",
    emoji: "✏️",
    color: "from-red-500 to-orange-500",
    directUrl: "https://grammarcheckergpt.lovable.app/?via=aiwebtools",
    tags: ["grammar", "editing", "proofreading", "writing assistance"],
    category: "Writing & Content",
    rating: 4.8,
    totalVotes: 4123
  },
  {
    icon: Type,
    title: "Copywriting GPT",
    description: "Professional copywriting assistant for marketing materials, sales pages, and advertising content.",
    emoji: "💼",
    color: "from-purple-500 to-pink-500",
    directUrl: "https://copywritinggpt.lovable.app/?via=aiwebtools",
    tags: ["copywriting", "marketing", "sales", "advertising"],
    category: "Writing & Content",
    rating: 4.7,
    totalVotes: 3567
  },
  {
    icon: MessageSquare,
    title: "Social Media Content GPT",
    description: "Create engaging social media posts, captions, and content strategies for various platforms.",
    emoji: "📱",
    color: "from-pink-500 to-purple-500",
    directUrl: "https://socialmediacontent.lovable.app/?via=aiwebtools",
    tags: ["social media", "content creation", "marketing", "engagement"],
    category: "Writing & Content",
    rating: 4.6,
    totalVotes: 2987
  },
  {
    icon: Newspaper,
    title: "Article Writer GPT",
    description: "Professional article writing assistant for journalists, bloggers, and content creators.",
    emoji: "📰",
    color: "from-blue-500 to-gray-600",
    directUrl: "https://articlewritergpt.lovable.app/?via=aiwebtools",
    tags: ["article writing", "journalism", "blogging", "content creation"],
    category: "Writing & Content",
    rating: 4.5,
    totalVotes: 2654
  }
];
