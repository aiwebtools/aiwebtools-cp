import { Tool } from "@/types/tools";
import { 
  PenTool, 
  FileText, 
  Hash, 
  Globe, 
  Zap, 
  Brain,
  MessageSquare,
  Edit,
  Sparkles,
  Target,
  Users,
  TrendingUp
} from "lucide-react";

export const aiContentGenerators: Tool[] = [
  {
    icon: PenTool,
    title: "Jasper",
    description: "AI writing assistant for creating blog posts, social media content, and marketing copy. Generates original, creative content quickly.",
    emoji: "✍️",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://www.jasper.ai/?fpr=aiwebtools",
    tags: ["AI writing", "content creation", "blog posts", "social media", "marketing copy"],
    category: "AI Content Generators",
    rating: 4.7,
    totalVotes: 5234
  },
  {
    icon: FileText,
    title: "Copy.ai",
    description: "AI-powered copywriting tool that generates high-converting marketing copy for ads, emails, and websites. Automates the copywriting process.",
    emoji: "📝",
    color: "from-green-500 to-blue-600",
    directUrl: "https://www.copy.ai/?via=aiwebtools",
    tags: ["copywriting", "marketing copy", "ads", "emails", "website content"],
    category: "AI Content Generators",
    rating: 4.6,
    totalVotes: 4876
  },
  {
    icon: Hash,
    title: "Scalenut",
    description: "AI content marketing platform for creating SEO-optimized blog posts, articles, and website content. End-to-end content creation workflow.",
    emoji: "#️⃣",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://www.scalenut.com/?via=aiwebtools",
    tags: ["content marketing", "SEO optimization", "blog posts", "articles", "website content"],
    category: "AI Content Generators",
    rating: 4.5,
    totalVotes: 4234
  },
  {
    icon: Globe,
    title: "Rytr",
    description: "AI writing tool that generates content for various use cases, including blog posts, social media, and marketing copy. Affordable and easy to use.",
    emoji: "🌐",
    color: "from-orange-500 to-yellow-600",
    directUrl: "https://rytr.me/?via=aiwebtools",
    tags: ["AI writing", "content generation", "blog posts", "social media", "marketing copy"],
    category: "AI Content Generators",
    rating: 4.4,
    totalVotes: 3876
  },
  {
    icon: PenTool,
    title: "Writesonic",
    description: "AI writing assistant that generates high-quality content for blogs, ads, emails, and websites. Features GPT-4 powered writing with SEO optimization.",
    emoji: "✍️",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://writesonic.com/ai-article-writer-generator?ref=aiwebtoolss",
    tags: ["AI writing", "content generation", "SEO optimization", "blog posts", "marketing copy"],
    category: "AI Content Generators",
    rating: 4.5,
    totalVotes: 4567
  },
  {
    icon: Zap,
    title: "Simplified AI Writer",
    description: "All-in-one AI marketing platform with an AI writer, graphic design tools, and video editor. Streamlines content creation and marketing workflows.",
    emoji: "⚡",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://simplified.com/?lmref=4jgvzA",
    tags: ["AI writing", "graphic design", "video editing", "marketing platform", "content creation"],
    category: "AI Content Generators",
    rating: 4.3,
    totalVotes: 3456
  },
  {
    icon: Brain,
    title: "Anyword",
    description: "AI copywriting platform that generates data-driven marketing copy for ads, emails, and landing pages. Predictive performance scoring for content optimization.",
    emoji: "🧠",
    color: "from-green-500 to-cyan-600",
    directUrl: "https://anyword.com/?via=aiwebtools",
    tags: ["copywriting", "marketing copy", "data-driven", "performance scoring", "content optimization"],
    category: "AI Content Generators",
    rating: 4.4,
    totalVotes: 3678
  },
  {
    icon: MessageSquare,
    title: "ClosersCopy",
    description: "AI copywriting tool that generates long-form sales copy, email sequences, and marketing content. Focuses on persuasive writing and storytelling.",
    emoji: "💬",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://www.closerscopy.com/",
    tags: ["copywriting", "sales copy", "email sequences", "marketing content", "persuasive writing"],
    category: "AI Content Generators",
    rating: 4.2,
    totalVotes: 3234
  },
  {
    icon: Edit,
    title: "Article Forge",
    description: "AI article writer that generates unique, SEO-friendly articles on any topic. Automates content creation for blogs and websites.",
    emoji: "✏️",
    color: "from-orange-500 to-red-600",
    directUrl: "https://www.articleforge.com/",
    tags: ["article writing", "SEO-friendly", "content automation", "blog content", "website content"],
    category: "AI Content Generators",
    rating: 4.1,
    totalVotes: 2987
  },
  {
    icon: Sparkles,
    title: "Outwrite",
    description: "AI writing assistant that improves grammar, style, and clarity. Helps you write clear, concise, and engaging content.",
    emoji: "✨",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://www.outwrite.com/",
    tags: ["grammar", "style", "clarity", "writing improvement", "content editing"],
    category: "AI Content Generators",
    rating: 4.3,
    totalVotes: 3123
  },
  {
    icon: Target,
    title: "Surfer SEO",
    description: "AI-powered SEO tool that helps you optimize your content for search engines. Provides data-driven insights and recommendations for ranking higher.",
    emoji: "🎯",
    color: "from-blue-500 to-green-600",
    directUrl: "https://surferseo.com/?via=aiwebtools",
    tags: ["SEO", "content optimization", "search engines", "data-driven", "keyword research"],
    category: "AI Content Generators",
    rating: 4.6,
    totalVotes: 4444
  },
  {
    icon: Users,
    title: "INK",
    description: "AI content creation platform that generates SEO-optimized content for websites, blogs, and social media. Includes keyword research and content planning tools.",
    emoji: "👥",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://inkforall.com/",
    tags: ["content creation", "SEO optimization", "keyword research", "content planning", "website content"],
    category: "AI Content Generators",
    rating: 4.2,
    totalVotes: 3333
  },
  {
    icon: TrendingUp,
    title: "MarketMuse",
    description: "AI content intelligence platform that analyzes content and provides recommendations for improving its quality and relevance. Helps you create authoritative content.",
    emoji: "📈",
    color: "from-red-500 to-pink-600",
    directUrl: "https://www.marketmuse.com/",
    tags: ["content intelligence", "content analysis", "content quality", "content relevance", "authoritative content"],
    category: "AI Content Generators",
    rating: 4.4,
    totalVotes: 3555
  }
];
