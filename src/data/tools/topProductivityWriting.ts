import { Tool } from "@/types/tools";
import { 
  FileText, 
  CheckCircle,
  Sparkles,
  Zap,
  Edit,
  BookOpen,
  PenTool,
  Layers
} from "lucide-react";

import grammarlyHero from "@/assets/tools/grammarly-hero.jpg";
import notionAiHero from "@/assets/tools/notion-ai-hero.jpg";
import jasperAiHero from "@/assets/tools/jasper-ai-hero.jpg";
import copyAiHero from "@/assets/tools/copy-ai-hero.jpg";
import wordtuneHero from "@/assets/tools/wordtune-hero.jpg";
import quillbotHero from "@/assets/tools/quillbot-hero.jpg";
import writesonicHero from "@/assets/tools/writesonic-hero.jpg";
import canvaAiHero from "@/assets/tools/canva-ai-hero.jpg";

export const topProductivityWriting: Tool[] = [
  {
    icon: CheckCircle,
    title: "Grammarly",
    description: "World's most popular AI writing assistant with 30+ million users. Real-time grammar, spelling, tone, and clarity suggestions. Integrates everywhere you write with plagiarism detection and style guides.",
    emoji: "✅",
    color: "from-green-500 to-teal-600",
    directUrl: "https://www.grammarly.com/?via=aiwebtools",
    imageUrl: grammarlyHero,
    tags: ["Grammarly", "writing assistant", "grammar", "spelling", "tone", "clarity", "plagiarism", "popular", "Grammar & Editing"],
    category: "AI Writing & Productivity",
    rating: 4.8,
    totalVotes: 245000
  },
  {
    icon: BookOpen,
    title: "Notion AI",
    description: "AI assistant integrated into Notion workspace. Write, brainstorm, summarize, and organize with AI help. Seamlessly enhances your notes, docs, wikis, and databases with intelligent automation.",
    emoji: "📓",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://www.notion.so/product/ai?via=aiwebtools",
    imageUrl: notionAiHero,
    tags: ["Notion AI", "workspace AI", "note-taking", "organization", "brainstorming", "productivity", "integrated", "Content Strategy"],
    category: "AI Writing & Productivity",
    rating: 4.7,
    totalVotes: 178000
  },
  {
    icon: Sparkles,
    title: "Jasper AI",
    description: "Enterprise AI content platform for marketing teams. Create blog posts, social media, ads, and marketing copy at scale with brand voice consistency and team collaboration features.",
    emoji: "✨",
    color: "from-orange-500 to-red-600",
    directUrl: "https://www.jasper.ai/?via=aiwebtools",
    imageUrl: jasperAiHero,
    tags: ["Jasper", "marketing copy", "content creation", "enterprise", "brand voice", "team collaboration", "scale", "Blog Writing", "Copywriting", "Social Media Writing"],
    category: "AI Writing & Productivity",
    rating: 4.6,
    totalVotes: 134000
  },
  {
    icon: Zap,
    title: "Copy.ai",
    description: "AI copywriting platform for marketing and sales content. Generate ads, social posts, emails, and product descriptions with 90+ templates and tone controls. Great for small businesses.",
    emoji: "⚡",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://www.copy.ai/?via=aiwebtools",
    imageUrl: copyAiHero,
    tags: ["Copy.ai", "copywriting", "marketing", "sales", "templates", "ads", "small business", "Copywriting", "Email Writing", "Social Media Writing"],
    category: "AI Writing & Productivity",
    rating: 4.5,
    totalVotes: 98000
  },
  {
    icon: Edit,
    title: "Wordtune",
    description: "AI writing companion that rewrites and rephrases sentences for clarity and impact. Helps you find the perfect words with tone adjustment, summarization, and expansion features.",
    emoji: "✍️",
    color: "from-indigo-500 to-purple-600",
    directUrl: "https://www.wordtune.com/?via=aiwebtools",
    imageUrl: wordtuneHero,
    tags: ["Wordtune", "rewriting", "rephrasing", "clarity", "tone", "summarization", "writing improvement", "Grammar & Editing"],
    category: "AI Writing & Productivity",
    rating: 4.6,
    totalVotes: 87000
  },
  {
    icon: PenTool,
    title: "QuillBot",
    description: "AI paraphrasing and summarization tool trusted by millions. Rewrite content, check grammar, detect plagiarism, and create citations. Perfect for students and writers.",
    emoji: "🖋️",
    color: "from-green-600 to-emerald-600",
    directUrl: "https://quillbot.com/?via=aiwebtools",
    imageUrl: quillbotHero,
    tags: ["QuillBot", "paraphrasing", "summarization", "grammar", "plagiarism", "citations", "students", "Grammar & Editing", "Academic Writing"],
    category: "AI Writing & Productivity",
    rating: 4.7,
    totalVotes: 156000
  },
  {
    icon: FileText,
    title: "Writesonic",
    description: "AI writing platform for content creation, SEO optimization, and chatbots. Create articles, ads, landing pages, and more with GPT-4 powered tools and brand voice features.",
    emoji: "📝",
    color: "from-pink-500 to-rose-600",
    directUrl: "https://writesonic.com/?via=aiwebtools",
    imageUrl: writesonicHero,
    tags: ["Writesonic", "content creation", "SEO", "articles", "landing pages", "GPT-4", "brand voice", "SEO Content", "Blog Writing", "Copywriting"],
    category: "AI Writing & Productivity",
    rating: 4.5,
    totalVotes: 92000
  },
  {
    icon: Layers,
    title: "Canva AI",
    description: "Canva's AI-powered design platform with Magic Write, Magic Design, and text-to-image generation. Create stunning graphics, presentations, and marketing materials with AI assistance.",
    emoji: "🎨",
    color: "from-blue-600 to-purple-600",
    directUrl: "https://www.canva.com/ai-image-generator/?via=aiwebtools",
    imageUrl: canvaAiHero,
    tags: ["Canva", "design AI", "Magic Write", "graphics", "presentations", "marketing", "text-to-image", "Social Media Writing"],
    category: "AI Design & Productivity",
    rating: 4.8,
    totalVotes: 287000
  }
];
