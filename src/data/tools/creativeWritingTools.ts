import { Tool } from "@/types/tools";
import { 
  FileText, 
  PenTool, 
  Edit3, 
  BookOpen, 
  Type, 
  Zap
} from "lucide-react";

import scalenutHero from "@/assets/tools/scalenut-hero.jpg";
import simplifiedHero from "@/assets/tools/simplified-hero.jpg";
import ebookCreatorHero from "@/assets/tools/ebook-creator-hero.jpg";

export const creativeWritingTools: Tool[] = [
  {
    icon: FileText,
    title: "Rytr",
    description: "AI writing assistant that helps you create high-quality content, from blog posts to emails, in just a few seconds, saving time and effort.",
    emoji: "✍️",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://rytr.me/?via=aiwebtools",
    imageUrl: "/src/assets/tools/rytr-hero.png",
    tags: ["writing assistant", "content creation", "blogging", "email marketing", "AI writing", "Blog Writing", "Email Writing", "Copywriting"],
    category: "Writing & Content Enhancement",
    rating: 4.5,
    totalVotes: 3456
  },
  {
    icon: PenTool,
    title: "Jasper",
    description: "AI content generator that creates engaging and original content for blogs, social media, and more, improving your content marketing strategy.",
    emoji: "🖋️",
    color: "from-green-500 to-blue-600",
    directUrl: "https://www.jasper.ai/?via=aiwebtools",
    imageUrl: "/src/assets/tools/jasper-ai-hero.png",
    tags: ["content generation", "blogging", "social media", "content marketing", "AI writing", "Blog Writing", "Social Media Writing", "Copywriting"],
    category: "Writing & Content Enhancement",
    rating: 4.7,
    totalVotes: 4567
  },
  {
    icon: Edit3,
    title: "Grammarly",
    description: "AI-powered writing assistant that helps you eliminate errors and find the perfect words to express yourself clearly and effectively.",
    emoji: "📝",
    color: "from-pink-500 to-purple-600",
    directUrl: "https://grammarly.com/?via=aiwebtools",
    imageUrl: "/src/assets/tools/grammarly-hero.png",
    tags: ["writing assistant", "grammar check", "proofreading", "editing", "AI writing", "Grammar & Editing"],
    category: "Writing & Content Enhancement",
    rating: 4.8,
    totalVotes: 5678
  },
  {
    icon: BookOpen,
    title: "Ebook Creator Suite",
    description: "Professional ebook creation and design platform with templates, formatting tools, and publishing options for authors and content creators.",
    emoji: "📚",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://go2.designrr.io/wordgenie2?affiliate=aiwebtools",
    imageUrl: ebookCreatorHero,
    tags: ["ebook creation", "publishing", "design", "templates", "content creation", "Book Writing"],
    category: "Writing & Content Enhancement",
    rating: 4.3,
    totalVotes: 2876
  },
  {
    icon: Type,
    title: "Scalenut",
    description: "AI-powered SEO and content marketing platform that helps you plan, research, and create high-ranking content, driving organic growth.",
    emoji: "⌨️",
    color: "from-orange-500 to-yellow-600",
    directUrl: "https://www.scalenut.com/?via=aiwebtools",
    imageUrl: scalenutHero,
    tags: ["SEO", "content marketing", "content planning", "keyword research", "AI writing", "SEO Content", "Content Strategy"],
    category: "Writing & Content Enhancement",
    rating: 4.6,
    totalVotes: 3987
  },
  {
    icon: Zap,
    title: "Simplified",
    description: "All-in-one AI marketing platform designed for effortless content creation, scaling your brand with ease and efficiency.",
    emoji: "⚡",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://simplified.com/?via=aiwebtools",
    imageUrl: simplifiedHero,
    tags: ["AI marketing", "content creation", "brand scaling", "social media", "design", "Social Media Writing", "Copywriting"],
    category: "Writing & Content Enhancement",
    rating: 4.4,
    totalVotes: 3210
  }
];
