import { Tool } from "@/types/tools";
import { 
  PenTool, FileText, Newspaper, BookOpen, Edit,
  Type, AlignLeft, Quote, Hash, MessageCircle,
  Mail, Send, MessageSquare, Users, Globe,
  TrendingUp, BarChart3, Target, Lightbulb,
  Zap, Star, Trophy, Award, Crown, Diamond,
  Rocket, Heart, Smile, Coffee, Gift, Cake,
  PartyPopper, Camera, Music, Palette, Brush,
  Scissors, Wand2, Video, ImageIcon, Gamepad2,
  Sparkles, Mic, Headphones, Search, Paintbrush
} from "lucide-react";

export const writingAndContent: Tool[] = [
  {
    icon: PenTool,
    title: "Rytr",
    description: "AI writing assistant that helps you create high-quality content, from blog posts to emails, in just a few clicks.",
    emoji: "✍️",
    color: "from-blue-400 to-purple-500",
    directUrl: "https://rytr.me/",
    tags: ["writing", "content creation", "blogging", "email"],
    category: "Writing & Content"
  },
  {
    icon: FileText,
    title: "Jasper",
    description: "AI content generator that helps you create blog posts, social media content, and marketing copy.",
    emoji: "📝",
    color: "from-green-400 to-blue-500",
    directUrl: "https://www.jasper.ai/",
    tags: ["content creation", "blogging", "social media", "marketing"],
    category: "Writing & Content"
  },
  {
    icon: Newspaper,
    title: "Scalenut",
    description: "AI-powered content marketing platform that helps you plan, create, and optimize content.",
    emoji: "📰",
    color: "from-yellow-400 to-orange-500",
    directUrl: "https://www.scalenut.com/",
    tags: ["content marketing", "SEO", "planning", "optimization"],
    category: "Writing & Content"
  },
  {
    icon: BookOpen,
    title: "Copy.ai",
    description: "AI-powered copywriting tool that helps you generate marketing copy, product descriptions, and website content.",
    emoji: "📖",
    color: "from-red-400 to-pink-500",
    directUrl: "https://www.copy.ai/",
    tags: ["copywriting", "marketing", "product descriptions", "website content"],
    category: "Writing & Content"
  },
  {
    icon: Edit,
    title: "QuillBot",
    description: "AI-powered paraphrasing tool that helps you rewrite and improve your writing.",
    emoji: "✏️",
    color: "from-purple-400 to-blue-500",
    directUrl: "https://quillbot.com/",
    tags: ["paraphrasing", "rewriting", "writing improvement"],
    category: "Writing & Content"
  },
  {
    icon: Type,
    title: "Anyword",
    description: "AI-powered copywriting platform that helps you generate and optimize marketing copy.",
    emoji: "⌨️",
    color: "from-green-400 to-yellow-500",
    directUrl: "https://anyword.com/",
    tags: ["copywriting", "marketing", "optimization"],
    category: "Writing & Content"
  },
  {
    icon: AlignLeft,
    title: "Simplified",
    description: "All-in-one AI content creation platform that helps you create blog posts, social media content, and marketing copy.",
    emoji: "☰",
    color: "from-blue-400 to-green-500",
    directUrl: "https://simplified.com/",
    tags: ["content creation", "blogging", "social media", "marketing"],
    category: "Writing & Content"
  },
  {
    icon: Quote,
    title: "Writesonic",
    description: "AI-powered copywriting tool that helps you generate marketing copy, product descriptions, and website content.",
    emoji: "”",
    color: "from-yellow-400 to-red-500",
    directUrl: "https://writesonic.com/",
    tags: ["copywriting", "marketing", "product descriptions", "website content"],
    category: "Writing & Content"
  },
  {
    icon: Hash,
    title: "Article Forge",
    description: "AI article writer that generates unique, SEO-friendly content for your website or blog.",
    emoji: "#️⃣",
    color: "from-red-400 to-purple-500",
    directUrl: "https://www.articleforge.com/",
    tags: ["article writing", "SEO", "content generation"],
    category: "Writing & Content"
  },
  {
    icon: MessageCircle,
    title: "ClosersCopy",
    description: "AI-powered copywriting tool that helps you write high-converting sales copy.",
    emoji: "💬",
    color: "from-purple-400 to-green-500",
    directUrl: "https://www.closerscopy.com/",
    tags: ["copywriting", "sales copy", "conversion"],
    category: "Writing & Content"
  },
  {
    icon: Mail,
    title: "Smartwriter",
    description: "AI email writer that generates personalized emails that get opened, read, and replied to.",
    emoji: "✉️",
    color: "from-green-400 to-blue-500",
    directUrl: "https://www.smartwriter.ai/",
    tags: ["email writing", "personalization", "engagement"],
    category: "Writing & Content"
  },
  {
    icon: Send,
    title: "Outwrite",
    description: "AI-powered writing assistant that helps you improve your writing and communication skills.",
    emoji: "➡️",
    color: "from-blue-400 to-yellow-500",
    directUrl: "https://www.outwrite.com/",
    tags: ["writing improvement", "communication skills"],
    category: "Writing & Content"
  },
  {
    icon: Mic,
    title: "Podcast Script Writer GPT",
    description: "Professional podcast script writing assistant. Create engaging podcast scripts, episode outlines, interview questions, and content structure for compelling audio content.",
    emoji: "🎙️",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://podcastwritergpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/an-illustration-of-a-podcast-host-with-a_HnlUN.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:600,h:300,cg:true/qt=q:30",
    tags: ["podcast", "script writing", "audio content", "episode planning", "interviewing"],
    category: "Writing & Content",
    rating: 4.3,
    totalVotes: 2789
  },
  {
    icon: Edit,
    title: "Article and Blog Rewriter GPT",
    description: "Advanced article and blog rewriting tool. Transform existing content, improve readability, optimize for SEO, and create unique versions while maintaining original meaning.",
    emoji: "✏️",
    color: "from-blue-500 to-green-600",
    directUrl: "https://rewritergpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/1000005696.jpg/:/cr=t:9.9%25,l:0%25,w:100%25,h:80.21%25/rs=w:600,h:300,cg:true/qt=q:98",
    tags: ["content rewriting", "blog optimization", "SEO", "article improvement", "content transformation"],
    category: "Writing & Content",
    rating: 4.2,
    totalVotes: 3156
  }
];
