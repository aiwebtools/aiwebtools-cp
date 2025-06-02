import { Tool } from "@/types/tools";
import { 
  PenTool, 
  FileText, 
  CheckCircle, 
  Zap, 
  BookOpen, 
  Edit3,
  Search
} from "lucide-react";

export const writingAndContentEnhancement: Tool[] = [
  {
    icon: Search,
    title: "SEO CHECKER",
    description: "Advanced SEO checker and optimizer that analyzes your content for search engine optimization. SEO CHECKER helps improve your website's visibility with comprehensive SEO analysis, keyword optimization, and actionable recommendations to boost your search rankings.",
    emoji: "🔍",
    color: "from-green-500 to-blue-600",
    directUrl: "https://writesonic.com/seo-checker-and-optimizer?ref=aiwebtoolss",
    tags: ["SEO optimization", "content analysis", "search rankings", "keyword research", "website optimization"],
    category: "Writing & Content Enhancement",
    rating: 4.5,
    totalVotes: 1890
  },
  {
    icon: PenTool,
    title: "Grammarly",
    description: "AI-powered writing assistant that helps you write clearly and effectively. Advanced grammar checking, style suggestions, and tone detection.",
    emoji: "✍️",
    color: "from-green-500 to-blue-600",
    directUrl: "https://www.grammarly.com/?via=aiwebtools",
    tags: ["grammar checker", "writing assistant", "proofreading", "style guide"],
    category: "Writing & Content Enhancement",
    rating: 4.7,
    totalVotes: 8234
  },
  {
    icon: FileText,
    title: "ProWritingAid",
    description: "Comprehensive writing editor with advanced grammar checking, style improvements, and detailed writing reports.",
    emoji: "📝",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://prowritingaid.com/?via=aiwebtools",
    tags: ["grammar checker", "writing editor", "style analysis", "writing reports"],
    category: "Writing & Content Enhancement",
    rating: 4.6,
    totalVotes: 5432
  },
  {
    icon: CheckCircle,
    title: "Hemingway Editor",
    description: "Writing app that makes your writing bold and clear. Highlights complex sentences and suggests improvements for readability.",
    emoji: "✅",
    color: "from-red-500 to-orange-600",
    directUrl: "https://hemingwayapp.com/?via=aiwebtools",
    tags: ["readability", "writing clarity", "editing", "style improvement"],
    category: "Writing & Content Enhancement",
    rating: 4.5,
    totalVotes: 3421
  },
  {
    icon: Zap,
    title: "QuillBot",
    description: "AI-powered paraphrasing tool that helps you rewrite and enhance your writing. Perfect for improving clarity and avoiding plagiarism.",
    emoji: "⚡",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://quillbot.com/?via=aiwebtools",
    tags: ["paraphrasing", "rewriting", "plagiarism checker", "writing enhancement"],
    category: "Writing & Content Enhancement",
    rating: 4.4,
    totalVotes: 6789
  },
  {
    icon: BookOpen,
    title: "Wordtune",
    description: "AI writing companion that understands what you're trying to say and suggests ways to make your writing clearer and more compelling.",
    emoji: "📖",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://www.wordtune.com/?via=aiwebtools",
    tags: ["writing enhancement", "AI writing", "text improvement", "clarity"],
    category: "Writing & Content Enhancement",
    rating: 4.6,
    totalVotes: 4567
  },
  {
    icon: Edit3,
    title: "LanguageTool",
    description: "Multilingual grammar, style, and spell checker that works in over 20 languages. Perfect for professional writing and communication.",
    emoji: "🌐",
    color: "from-orange-500 to-red-600",
    directUrl: "https://languagetool.org/?via=aiwebtools",
    tags: ["grammar checker", "multilingual", "spell checker", "professional writing"],
    category: "Writing & Content Enhancement",
    rating: 4.5,
    totalVotes: 3890
  }
];
