
import { Tool } from "@/types/tools";
import { 
  PenTool, 
  FileText, 
  Edit, 
  Brain, 
  Sparkles, 
  Wand2, 
  Type,
  Book,
  Lightbulb,
  Zap,
  Target,
  Globe
} from "lucide-react";

export const contentCreationTools: Tool[] = [
  {
    icon: Type,
    title: "Grammarly",
    description: "AI-powered writing assistant that helps improve grammar, spelling, and writing style for all types of content creation.",
    emoji: "✍️",
    color: "from-green-500 to-blue-600",
    directUrl: "https://www.grammarly.com/",
    tags: ["writing assistant", "grammar", "content editing", "AI writing", "proofreading"],
    category: "Content Creation Tools",
    rating: 4.6,
    totalVotes: 8932
  },
  {
    icon: PenTool,
    title: "Jasper AI",
    description: "Advanced AI writing tool for creating high-quality content at scale. Perfect for marketing copy, blog posts, and creative writing.",
    emoji: "🤖",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://www.jasper.ai/",
    tags: ["AI writing", "content generation", "marketing copy", "blog writing", "creative content"],
    category: "Content Creation Tools",
    rating: 4.5,
    totalVotes: 7234
  },
  {
    icon: FileText,
    title: "Copy.ai",
    description: "AI copywriting tool that generates marketing copy, product descriptions, social media posts, and more in seconds.",
    emoji: "📝",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://www.copy.ai/",
    tags: ["copywriting", "marketing copy", "product descriptions", "social media", "AI content"],
    category: "Content Creation Tools",
    rating: 4.4,
    totalVotes: 6543
  },
  {
    icon: Brain,
    title: "Writesonic",
    description: "AI writing assistant for creating articles, blog posts, ads, product descriptions, and more with advanced language models.",
    emoji: "🧠",
    color: "from-orange-500 to-red-600",
    directUrl: "https://writesonic.com/",
    tags: ["AI writing", "blog posts", "articles", "ads", "product descriptions"],
    category: "Content Creation Tools",
    rating: 4.3,
    totalVotes: 5432
  },
  {
    icon: Sparkles,
    title: "Rytr",
    description: "AI writing assistant that helps create high-quality content for blogs, emails, ads, and more in just a few seconds.",
    emoji: "✨",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://rytr.me/",
    tags: ["AI writing", "content creation", "emails", "blogs", "ads"],
    category: "Content Creation Tools",
    rating: 4.2,
    totalVotes: 4321
  },
  {
    icon: Wand2,
    title: "Anyword",
    description: "AI copywriting platform that predicts which words will perform best for your audience and business goals.",
    emoji: "🪄",
    color: "from-green-500 to-teal-600",
    directUrl: "https://anyword.com/",
    tags: ["AI copywriting", "performance prediction", "audience targeting", "conversion optimization"],
    category: "Content Creation Tools",
    rating: 4.1,
    totalVotes: 3876
  },
  {
    icon: Book,
    title: "Notion AI",
    description: "AI-powered workspace that helps with writing, brainstorming, editing, and summarizing content within your notes and documents.",
    emoji: "📚",
    color: "from-gray-500 to-blue-600",
    directUrl: "https://www.notion.so/product/ai",
    tags: ["workspace AI", "note taking", "document editing", "brainstorming", "summarization"],
    category: "Content Creation Tools",
    rating: 4.4,
    totalVotes: 6789
  },
  {
    icon: Edit,
    title: "Quillbot",
    description: "AI-powered paraphrasing tool that helps rewrite and enhance your writing while maintaining the original meaning.",
    emoji: "🖊️",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://quillbot.com/",
    tags: ["paraphrasing", "text rewriting", "writing enhancement", "AI editing", "grammar"],
    category: "Content Creation Tools",
    rating: 4.3,
    totalVotes: 5234
  },
  {
    icon: Lightbulb,
    title: "Smart Text Editor",
    description: "AI-powered text editing and rewriting tool that improves clarity while preserving original meaning and intent. Adjusts wording, tone, and structure for enhanced readability.",
    emoji: "💡",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://clarityomni.lovable.app/?via=aiwebtools",
    tags: ["text editing", "content clarity", "rewriting", "AI enhancement", "readability"],
    category: "Content Creation Tools",
    rating: 4.5,
    totalVotes: 3456
  },
  {
    icon: Zap,
    title: "Hypotenuse AI",
    description: "AI content generator for product descriptions, blog articles, social media captions, and ad copy that converts.",
    emoji: "⚡",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://www.hypotenuse.ai/",
    tags: ["content generation", "product descriptions", "blog articles", "social media", "ad copy"],
    category: "Content Creation Tools",
    rating: 4.2,
    totalVotes: 3789
  },
  {
    icon: Target,
    title: "Persado",
    description: "AI-powered language platform that generates personalized marketing messages proven to drive engagement and conversions.",
    emoji: "🎯",
    color: "from-red-500 to-pink-600",
    directUrl: "https://www.persado.com/",
    tags: ["marketing messages", "personalization", "engagement", "conversions", "language AI"],
    category: "Content Creation Tools",
    rating: 4.0,
    totalVotes: 2876
  },
  {
    icon: Globe,
    title: "Wordtune",
    description: "AI writing companion that understands what you're trying to say and suggests ways to make your writing clearer and more compelling.",
    emoji: "🌍",
    color: "from-green-500 to-blue-600",
    directUrl: "https://www.wordtune.com/",
    tags: ["writing assistant", "clarity", "suggestions", "content improvement", "AI writing"],
    category: "Content Creation Tools",
    rating: 4.3,
    totalVotes: 4567
  }
];
