import { Tool } from "@/types/tools";
import { Search, TrendingUp, Target, BarChart3, FileText } from "lucide-react";

export const aiSeoContentTools: Tool[] = [
  {
    icon: Search,
    title: "Surfer SEO",
    description: "AI-powered SEO content optimization platform. Analyze top-ranking pages, get real-time optimization suggestions, and improve your content's search rankings.",
    emoji: "🏄",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://surferseo.com/?via=aiwebtools",
    imageUrl: "/src/assets/tools/surfer-seo-hero.png",
    tags: ["SEO", "content optimization", "keyword research", "SERP analysis", "content marketing", "AI SEO", "SEO Content", "Content Strategy", "SEO Tools", "Content Marketing"],
    category: "AI SEO & Content Marketing",
    rating: 4.8,
    totalVotes: 8234
  },
  {
    icon: TrendingUp,
    title: "Frase",
    description: "AI content optimization and research tool. Create SEO-optimized content briefs, analyze competitors, and write content that ranks with AI assistance.",
    emoji: "📈",
    color: "from-green-500 to-emerald-600",
    directUrl: "https://www.frase.io/?via=aiwebtools",
    imageUrl: "/src/assets/tools/frase-hero.png",
    tags: ["SEO", "content briefs", "AI writing", "competitor analysis", "content optimization", "keyword research", "SEO Content", "Content Strategy", "Article Writing", "SEO Tools", "Market Research"],
    category: "AI SEO & Content Marketing",
    rating: 4.7,
    totalVotes: 7456
  },
  {
    icon: Target,
    title: "MarketMuse",
    description: "AI-powered content intelligence platform. Plan, research, and optimize your entire content strategy with data-driven insights and competitive analysis.",
    emoji: "🎯",
    color: "from-purple-500 to-indigo-600",
    directUrl: "https://www.marketmuse.com/?via=aiwebtools",
    imageUrl: "/src/assets/tools/marketmuse-hero.png",
    tags: ["content strategy", "SEO", "content planning", "competitive analysis", "AI insights", "content optimization", "SEO Content", "Content Strategy", "SEO Tools", "Content Marketing", "Market Research"],
    category: "AI SEO & Content Marketing",
    rating: 4.6,
    totalVotes: 5891
  },
  {
    icon: BarChart3,
    title: "Clearscope",
    description: "AI-driven SEO content optimization platform. Get keyword recommendations, content grading, and optimization suggestions to improve search rankings.",
    emoji: "📊",
    color: "from-orange-500 to-red-600",
    directUrl: "https://www.clearscope.io/?via=aiwebtools",
    imageUrl: "/src/assets/tools/clearscope-hero.png",
    tags: ["SEO", "content optimization", "keyword research", "content grading", "search rankings", "AI analysis", "SEO Content", "SEO Tools", "Content Marketing"],
    category: "AI SEO & Content Marketing",
    rating: 4.7,
    totalVotes: 6234
  },
  {
    icon: FileText,
    title: "Neuronwriter",
    description: "AI content editor with advanced SEO optimization. Plan content, optimize for search intent, and analyze competitors with NLP-powered suggestions.",
    emoji: "🧠",
    color: "from-pink-500 to-rose-600",
    directUrl: "https://www.neuronwriter.com/?via=aiwebtools",
    imageUrl: "/src/assets/tools/neuronwriter-hero.png",
    tags: ["SEO", "content editor", "NLP", "search intent", "content optimization", "AI writing", "competitor analysis", "SEO Content", "Article Writing", "SEO Tools", "Content Marketing"],
    category: "AI SEO & Content Marketing",
    rating: 4.6,
    totalVotes: 5567
  }
];
