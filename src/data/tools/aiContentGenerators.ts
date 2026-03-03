
import { Tool } from "@/types/tools";
import { 
  Brain,
  PenTool,
  FileText,
  Target,
  Bot,
  Crown
} from "lucide-react";

import jasperAiContentHero from "@/assets/tools/jasper-ai-content-hero.jpg";
import writesonicContentHero from "@/assets/tools/writesonic-content-hero.jpg";
import rytrHero from "@/assets/tools/rytr-hero.jpg";
import chatgptPlusHero from "@/assets/tools/chatgpt-plus-hero.jpg";
import claudeProHero from "@/assets/tools/claude-pro-hero.jpg";

export const aiContentGenerators: Tool[] = [
  {
    icon: Brain,
    title: "Jasper AI",
    description: "AI content generation platform for marketing teams. Create blog posts, social media content, ads, and marketing copy with advanced AI models.",
    emoji: "🧠",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://www.jasper.ai/?via=aiwebtools",
    imageUrl: jasperAiContentHero,
    tags: ["content generation", "marketing copy", "blog posts", "social media", "ads", "Blog Writing", "Copywriting", "Social Media Writing"],
    category: "Writing & Content Enhancement",
    rating: 4.6,
    totalVotes: 4234
  },
  {
    icon: FileText,
    title: "Writesonic",
    description: "AI writing platform for creating articles, ads, product descriptions, and landing pages. GPT-powered content generation with SEO optimization.",
    emoji: "📝",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://writesonic.com/?via=aiwebtools",
    imageUrl: writesonicContentHero,
    tags: ["AI writing", "articles", "ads", "product descriptions", "SEO optimization", "SEO Content", "Article Writing", "Copywriting"],
    category: "Writing & Content Enhancement",
    rating: 4.4,
    totalVotes: 3456
  },
  {
    icon: Target,
    title: "Rytr",
    description: "AI writing assistant for creating high-quality content in seconds. Generate emails, blogs, ads, and social media posts with tone and style customization.",
    emoji: "🎯",
    color: "from-orange-500 to-red-600",
    directUrl: "https://rytr.me/?via=aiwebtools",
    imageUrl: rytrHero,
    tags: ["content creation", "emails", "blogs", "ads", "tone customization", "Blog Writing", "Email Writing", "Copywriting"],
    category: "Writing & Content Enhancement",
    rating: 4.3,
    totalVotes: 2987
  },
  {
    icon: Bot,
    title: "ChatGPT Plus",
    description: "OpenAI's premium conversational AI with advanced writing capabilities, custom instructions, and access to GPT-4 for superior content creation.",
    emoji: "🤖",
    color: "from-green-500 to-blue-600",
    directUrl: "https://chat.openai.com/?via=aiwebtools",
    imageUrl: chatgptPlusHero,
    tags: ["ChatGPT", "OpenAI", "GPT-4", "conversational AI", "content creation", "Creative Writing", "Prompt Engineering"],
    category: "Writing & Content Enhancement",
    rating: 4.8,
    totalVotes: 9876
  },
  {
    icon: Crown,
    title: "Claude Pro",
    description: "Anthropic's advanced AI assistant with exceptional writing capabilities, long-form content creation, and nuanced understanding of context and tone.",
    emoji: "👑",
    color: "from-orange-500 to-red-600",
    directUrl: "https://claude.ai/?via=aiwebtools",
    imageUrl: claudeProHero,
    tags: ["Claude", "Anthropic", "long-form writing", "context understanding", "advanced AI", "Creative Writing", "Book Writing", "Article Writing"],
    category: "Writing & Content Enhancement",
    rating: 4.8,
    totalVotes: 7654
  }
];
