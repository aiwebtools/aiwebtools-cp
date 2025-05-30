import { Tool } from "@/types/tools";
import { 
  PenTool, 
  FileText, 
  BookOpen, 
  Edit, 
  CheckCircle, 
  Globe, 
  Zap, 
  Target,
  Brain,
  Sparkles,
  MessageSquare,
  Eye,
  Search,
  Languages
} from "lucide-react";

export const writingAndContentEnhancement: Tool[] = [
  {
    icon: CheckCircle,
    title: "Grammarly",
    description: "AI-powered writing assistant that helps improve grammar, spelling, clarity, and tone. Real-time suggestions for better writing across all platforms.",
    emoji: "✅",
    color: "from-green-500 to-blue-600",
    directUrl: "https://www.grammarly.com/",
    tags: ["grammar check", "writing assistant", "spell check", "tone", "clarity"],
    category: "Writing & Content Enhancement",
    rating: 4.7,
    totalVotes: 5432
  },
  {
    icon: Brain,
    title: "Jasper AI",
    description: "AI content generation platform for marketing teams. Create blog posts, social media content, ads, and marketing copy with advanced AI models.",
    emoji: "🧠",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://www.jasper.ai/",
    tags: ["content generation", "marketing copy", "blog posts", "social media", "ads"],
    category: "Writing & Content Enhancement",
    rating: 4.6,
    totalVotes: 4234
  },
  {
    icon: PenTool,
    title: "Copy.ai",
    description: "AI copywriting tool that generates marketing copy, product descriptions, emails, and social media content. Templates for various content types.",
    emoji: "✍️",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://www.copy.ai/",
    tags: ["copywriting", "marketing copy", "product descriptions", "emails", "templates"],
    category: "Writing & Content Enhancement",
    rating: 4.5,
    totalVotes: 3876
  },
  {
    icon: FileText,
    title: "Writesonic",
    description: "AI writing platform for creating articles, ads, product descriptions, and landing pages. GPT-powered content generation with SEO optimization.",
    emoji: "📝",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://writesonic.com/",
    tags: ["AI writing", "articles", "ads", "product descriptions", "SEO optimization"],
    category: "Writing & Content Enhancement",
    rating: 4.4,
    totalVotes: 3456
  },
  {
    icon: Sparkles,
    title: "Notion AI",
    description: "AI writing assistant integrated into Notion workspace. Generate content, summarize information, and enhance productivity within your notes and documents.",
    emoji: "✨",
    color: "from-gray-500 to-purple-600",
    directUrl: "https://www.notion.so/product/ai",
    tags: ["Notion integration", "workspace AI", "content generation", "summarization", "productivity"],
    category: "Writing & Content Enhancement",
    rating: 4.5,
    totalVotes: 3234
  },
  {
    icon: Target,
    title: "Rytr",
    description: "AI writing assistant for creating high-quality content in seconds. Generate emails, blogs, ads, and social media posts with tone and style customization.",
    emoji: "🎯",
    color: "from-orange-500 to-red-600",
    directUrl: "https://rytr.me/",
    tags: ["content creation", "emails", "blogs", "ads", "tone customization"],
    category: "Writing & Content Enhancement",
    rating: 4.3,
    totalVotes: 2987
  },
  {
    icon: Languages,
    title: "DeepL Write",
    description: "AI writing assistant that helps improve and perfect your writing. Fix grammar, enhance clarity, and refine tone with advanced language models.",
    emoji: "🌐",
    color: "from-blue-500 to-green-600",
    directUrl: "https://www.deepl.com/write",
    tags: ["writing improvement", "grammar", "clarity", "tone refinement", "DeepL"],
    category: "Writing & Content Enhancement",
    rating: 4.6,
    totalVotes: 3654
  },
  {
    icon: BookOpen,
    title: "Wordtune",
    description: "AI writing companion that understands context and suggests ways to rewrite sentences. Improve clarity, tone, and style of your writing.",
    emoji: "📖",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://www.wordtune.com/",
    tags: ["sentence rewriting", "context understanding", "clarity", "tone", "style"],
    category: "Writing & Content Enhancement",
    rating: 4.4,
    totalVotes: 3123
  },
  {
    icon: MessageSquare,
    title: "QuillBot",
    description: "AI paraphrasing tool that rewrites text while maintaining meaning. Features grammar checker, summarizer, and citation generator.",
    emoji: "💬",
    color: "from-green-500 to-teal-600",
    directUrl: "https://quillbot.com/",
    tags: ["paraphrasing", "grammar check", "summarizer", "citations", "text rewriting"],
    category: "Writing & Content Enhancement",
    rating: 4.5,
    totalVotes: 3789
  },
  {
    icon: Eye,
    title: "Hemingway Editor",
    description: "Writing app that helps make your text clear and concise. Highlights complex sentences, passive voice, and suggests improvements for readability.",
    emoji: "👁️",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://hemingwayapp.com/",
    tags: ["readability", "clear writing", "concise text", "sentence complexity", "passive voice"],
    category: "Writing & Content Enhancement",
    rating: 4.3,
    totalVotes: 2654
  }
];
