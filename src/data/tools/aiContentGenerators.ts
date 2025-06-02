
import { Tool } from "@/types/tools";
import {
  PenTool,
  FileText,
  Zap,
  BookOpen,
  Lightbulb,
  MessageSquare,
  Edit3,
  Globe,
  Sparkles,
  Target,
  Image,
  Palette
} from "lucide-react";

export const aiContentGenerators: Tool[] = [
  {
    icon: PenTool,
    title: "Writesonic",
    description: "AI-powered writing assistant that creates high-quality articles, blog posts, ads, and marketing copy with advanced GPT technology.",
    emoji: "✍️",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://writesonic.com/ai-article-writer-generator?ref=aiwebtoolss",
    tags: ["AI writing", "content creation", "blog posts", "marketing copy", "articles"],
    category: "Writing & Content",
    rating: 4.6,
    totalVotes: 5234
  },
  {
    icon: Image,
    title: "PhotoSonic",
    description: "AI art generator that creates stunning digital artwork and images from text descriptions. Part of the Writesonic suite of AI tools.",
    emoji: "🎨",
    color: "from-pink-500 to-purple-600",
    directUrl: "https://writesonic.com/photosonic-ai-art-generator?via=aiwebtools",
    tags: ["AI art", "image generation", "digital artwork", "text to image", "creative"],
    category: "AI Art & Image Generation",
    rating: 4.5,
    totalVotes: 4123
  },
  {
    icon: FileText,
    title: "Copy.ai",
    description: "AI copywriting tool that generates marketing copy, blog content, and creative writing for businesses and content creators.",
    emoji: "📄",
    color: "from-green-500 to-blue-600",
    directUrl: "https://copy.ai/",
    tags: ["copywriting", "marketing copy", "blog content", "creative writing", "business"],
    category: "Writing & Content",
    rating: 4.4,
    totalVotes: 3876
  },
  {
    icon: Zap,
    title: "Jasper AI",
    description: "Advanced AI writing assistant for creating long-form content, marketing materials, and creative copy with brand voice consistency.",
    emoji: "⚡",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://jasper.ai/",
    tags: ["long-form content", "marketing materials", "brand voice", "creative copy", "consistency"],
    category: "Writing & Content",
    rating: 4.5,
    totalVotes: 4567
  },
  {
    icon: BookOpen,
    title: "Rytr",
    description: "AI writing assistant that helps create content for blogs, emails, ads, and more with over 40 use cases and templates.",
    emoji: "📖",
    color: "from-orange-500 to-red-600",
    directUrl: "https://rytr.me/",
    tags: ["content creation", "blogs", "emails", "ads", "templates"],
    category: "Writing & Content",
    rating: 4.3,
    totalVotes: 3234
  },
  {
    icon: Lightbulb,
    title: "Anyword",
    description: "AI copywriting platform with predictive performance scores that helps optimize marketing copy for better conversion rates.",
    emoji: "💡",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://anyword.com/",
    tags: ["copywriting", "performance optimization", "conversion rates", "marketing copy", "predictive"],
    category: "Writing & Content",
    rating: 4.2,
    totalVotes: 2876
  },
  {
    icon: MessageSquare,
    title: "ContentBot",
    description: "AI content automation tool that creates blog posts, social media content, and marketing copy with bulk generation capabilities.",
    emoji: "💬",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://contentbot.ai/",
    tags: ["content automation", "blog posts", "social media", "bulk generation", "marketing"],
    category: "Writing & Content",
    rating: 4.1,
    totalVotes: 2543
  },
  {
    icon: Edit3,
    title: "Wordtune",
    description: "AI writing companion that helps rewrite, paraphrase, and improve your writing for clarity, tone, and style.",
    emoji: "✏️",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://wordtune.com/",
    tags: ["writing improvement", "rewriting", "paraphrasing", "clarity", "tone"],
    category: "Writing & Content",
    rating: 4.4,
    totalVotes: 3456
  },
  {
    icon: Globe,
    title: "Simplified",
    description: "All-in-one AI-powered design and writing platform for creating content, graphics, and marketing materials.",
    emoji: "🌐",
    color: "from-green-500 to-teal-600",
    directUrl: "https://simplified.com/",
    tags: ["all-in-one", "design", "writing", "graphics", "marketing materials"],
    category: "Writing & Content",
    rating: 4.3,
    totalVotes: 2987
  },
  {
    icon: Sparkles,
    title: "Peppertype.ai",
    description: "AI content generation platform that creates high-converting copy for ads, emails, blogs, and social media.",
    emoji: "✨",
    color: "from-purple-500 to-indigo-600",
    directUrl: "https://peppertype.ai/",
    tags: ["high-converting copy", "ads", "emails", "blogs", "social media"],
    category: "Writing & Content",
    rating: 4.2,
    totalVotes: 2654
  },
  {
    icon: Target,
    title: "Conversion.ai (Jarvis)",
    description: "AI writing assistant focused on creating high-converting marketing copy and content that drives sales and engagement.",
    emoji: "🎯",
    color: "from-red-500 to-pink-600",
    directUrl: "https://conversion.ai/",
    tags: ["high-converting", "marketing copy", "sales", "engagement", "conversion"],
    category: "Writing & Content",
    rating: 4.4,
    totalVotes: 3789
  },
  {
    icon: Palette,
    title: "BuildAI",
    description: "AI-powered platform for building and deploying custom AI applications and tools without coding knowledge.",
    emoji: "🎨",
    color: "from-indigo-500 to-purple-600",
    directUrl: "https://gumroad.com/a/815886803/cahfki",
    tags: ["AI applications", "no-code", "custom tools", "deployment", "platform"],
    category: "AI Development Tools",
    rating: 4.3,
    totalVotes: 2234
  }
];
