
import { Tool } from "@/types/tools";
import { 
  PenTool, 
  BookOpen, 
  FileText, 
  Edit3, 
  Type, 
  Feather,
  Sparkles,
  Mic,
  Video,
  Theater,
  Crown,
  Scroll
} from "lucide-react";

export const contentCreationAndWritingTools: Tool[] = [
  {
    icon: Theater,
    title: "🎭 Playwriter GPT",
    description: "Craft professional, fully structured theatrical plays from start to finish. Whether you have a concept or need inspiration, create original, engaging plays designed to captivate audiences.",
    emoji: "🎭",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://playwritergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=KKldzg40wEI&list=TLGGGcedR_qZHHYyODA1MjAyNQ",
    imageUrl: "https://cdn.discordapp.com/attachments/1150636600846450729/1377298129782575217/playwrite.webp",
    tags: ["playwriting", "theatrical writing", "script creation", "drama", "performance arts"],
    category: "Content Creation & Writing Tools",
    rating: 4.7,
    totalVotes: 3890
  },
  {
    icon: Crown,
    title: "Customizable GPT Maker",
    description: "CUSTOM GPT MAKER is a customizable AI that transforms into any GPT you imagine, excelling in data analysis, live web data retrieval, and visualizations, ensuring precise task completion.",
    emoji: "👑",
    color: "from-gold-500 to-yellow-600",
    directUrl: "https://customgptmaker.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=SmBXfGqXfco",
    tags: ["custom GPT", "AI transformation", "data analysis", "web data retrieval", "task automation"],
    category: "Content Creation & Writing Tools",
    rating: 4.8,
    totalVotes: 4123
  },
  {
    icon: PenTool,
    title: "AI Content Generator",
    description: "Generate high-quality content for blogs, social media, marketing campaigns, and more with advanced AI writing capabilities.",
    emoji: "✍️",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://example.com/aicontentgenerator",
    tags: ["content generation", "blog writing", "social media", "marketing", "copywriting"],
    category: "Content Creation & Writing Tools",
    rating: 4.5,
    totalVotes: 3456
  },
  {
    icon: BookOpen,
    title: "Blog Post Creator",
    description: "Create engaging, SEO-optimized blog posts with AI assistance. Get topic suggestions, outlines, and full articles tailored to your audience.",
    emoji: "📖",
    color: "from-green-500 to-blue-600",
    directUrl: "https://example.com/blogpostcreator",
    tags: ["blog writing", "SEO optimization", "content marketing", "article creation", "topic research"],
    category: "Content Creation & Writing Tools",
    rating: 4.4,
    totalVotes: 2987
  },
  {
    icon: FileText,
    title: "Technical Writing Assistant",
    description: "Specialized AI for creating clear, comprehensive technical documentation, user manuals, and API documentation.",
    emoji: "📄",
    color: "from-gray-500 to-blue-600",
    directUrl: "https://example.com/techwritingassistant",
    tags: ["technical writing", "documentation", "user manuals", "API docs", "clear communication"],
    category: "Content Creation & Writing Tools",
    rating: 4.3,
    totalVotes: 2654
  },
  {
    icon: Edit3,
    title: "Content Editor Pro",
    description: "Advanced AI editor that improves grammar, style, tone, and readability of your content while maintaining your unique voice.",
    emoji: "✏️",
    color: "from-orange-500 to-red-600",
    directUrl: "https://example.com/contenteditorpro",
    tags: ["content editing", "grammar correction", "style improvement", "readability", "proofreading"],
    category: "Content Creation & Writing Tools",
    rating: 4.6,
    totalVotes: 3789
  },
  {
    icon: Type,
    title: "Headline Generator",
    description: "Create compelling headlines and titles that grab attention and increase click-through rates for your content.",
    emoji: "📰",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://example.com/headlinegenerator",
    tags: ["headline creation", "title generation", "clickbait", "engagement", "marketing copy"],
    category: "Content Creation & Writing Tools",
    rating: 4.2,
    totalVotes: 2321
  },
  {
    icon: Feather,
    title: "Creative Writing Coach",
    description: "AI-powered writing coach that helps with character development, plot structure, and creative writing techniques.",
    emoji: "🪶",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://example.com/creativewritingcoach",
    tags: ["creative writing", "character development", "plot structure", "writing techniques", "storytelling"],
    category: "Content Creation & Writing Tools",
    rating: 4.4,
    totalVotes: 2876
  },
  {
    icon: Sparkles,
    title: "Social Media Content Creator",
    description: "Generate engaging social media posts, captions, and hashtags optimized for different platforms and audiences.",
    emoji: "✨",
    color: "from-pink-500 to-purple-600",
    directUrl: "https://example.com/socialmediacreator",
    tags: ["social media", "content creation", "captions", "hashtags", "engagement"],
    category: "Content Creation & Writing Tools",
    rating: 4.5,
    totalVotes: 3234
  },
  {
    icon: Scroll,
    title: "Script Writer AI",
    description: "Professional script writing tool for screenplays, video scripts, podcasts, and other media content with proper formatting.",
    emoji: "📜",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://example.com/scriptwriterai",
    tags: ["script writing", "screenplays", "video scripts", "podcast scripts", "media content"],
    category: "Content Creation & Writing Tools",
    rating: 4.3,
    totalVotes: 2543
  }
];
