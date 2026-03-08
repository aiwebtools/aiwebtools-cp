import { Tool } from "@/types/tools";
import { 
  Zap, Bot, Wand2, Sparkles, Brain, Target, Users, FileText, 
  Video, Music, Image, Code, MessageSquare, Search, Settings,
  TrendingUp, BarChart3, Shield, Heart, Globe, Mic, Camera,
  Edit, Play, Palette, Book, Briefcase, Clock, Star, Award,
  Lightbulb, Coffee, Gift, Eye, Brush, Layers, Database,
  Monitor, Cloud, Lock, Phone, Mail, Calendar, Share2,
  Package, Terminal, GitBranch, CheckSquare, Folder, Bell,
  Workflow, Link, Timer, Repeat, Activity, PieChart, LineChart,
  Cpu, HardDrive, Wifi, DollarSign, Calculator, BookOpen,
  Building, Crown, Diamond, Headphones, Gamepad2, Film
} from "lucide-react";

import vwoHero from "@/assets/tools/vwo-hero.jpg";
import podcastleHero from "@/assets/tools/podcastle-hero.jpg";
import spinrewriterHero from "@/assets/tools/spinrewriter-hero.jpg";
import simplifiedHero from "@/assets/tools/simplified-hero.jpg";
import windsorHero from "@/assets/tools/windsor-hero.jpg";
import comparHero from "@/assets/tools/compar-hero.jpg";
import colossyanHero from "@/assets/tools/colossyan-hero.jpg";
import paragraphaiHero from "@/assets/tools/paragraphai-hero.jpg";
import ideabuddyHero from "@/assets/tools/ideabuddy-hero.jpg";
import convaiHero from "@/assets/tools/convai-hero.jpg";
import yippityHero from "@/assets/tools/yippity-hero.jpg";
import tinywowHero from "@/assets/tools/tinywow-hero.jpg";
import deepmotionHero from "@/assets/tools/deepmotion-hero.jpg";
import elephasHero from "@/assets/tools/elephas-hero.jpg";
import predisHero from "@/assets/tools/predis-hero.jpg";

export const comprehensiveAITools: Tool[] = [
  // VWO - A/B Testing & Conversion Optimization
  {
    icon: Target,
    title: "VWO",
    description: "Turn your visitors into paying customers. Set up your first experiment right away. Optimize digital experiences & maximize conversions. Your customer is evolving every day. Decode their evolving behaviors, fine-tune with robust A/B testing, and personalize experiences that hit home. Boost conversions across your websites and mobile apps through data-driven UI and server-side enhancements.",
    emoji: "🎯",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://vwo.com/",
    imageUrl: vwoHero,
    tags: ["A/B testing", "conversion optimization", "experimentation", "personalization", "analytics"],
    category: "Design Assistant Tools",
    rating: 4.6,
    totalVotes: 3456
  },

  // Podcastle - Podcast Creation
  {
    icon: Mic,
    title: "Podcastle",
    description: "The One-Stop Shop for Broadcast Storytelling. Great AI tool for podcasters or anyone who deals with long-form video creation. Studio-quality recording, AI-powered editing, and seamless exporting all in a single web-based platform.",
    emoji: "🎙️",
    color: "from-red-500 to-orange-600",
    directUrl: "https://podcastle.ai/?ref=ywywywq",
    imageUrl: podcastleHero,
    tags: ["podcast", "recording", "AI editing", "broadcast", "storytelling"],
    category: "Audio & Voice Tools",
    rating: 4.5,
    totalVotes: 2987
  },

  // Spinrewriter - Content Spinning
  {
    icon: Edit,
    title: "Spinrewriter",
    description: "Need unique content? Watch how to rewrite a single article into 500 articles in 45 seconds. With ENL technology, Spin Rewriter is the perfect tool for SEO specialists that need unique, human-quality content to rank higher on Google.",
    emoji: "🔄",
    color: "from-green-500 to-blue-600",
    directUrl: "https://www.spinrewriter.com/",
    imageUrl: spinrewriterHero,
    tags: ["content spinning", "SEO", "article rewriting", "ENL technology", "content generation"],
    category: "Writing & Content Creation",
    rating: 4.3,
    totalVotes: 2234
  },

  // Simplified - AI Writing Assistant
  {
    icon: FileText,
    title: "Simplified",
    description: "Simplified AI Writer is a free ai copywriting assistant that generates high-quality content for blogs, articles, product descriptions, websites & social media.",
    emoji: "✍️",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://simplified.com/?fpr=kenneth81",
    imageUrl: simplifiedHero,
    tags: ["AI writing", "copywriting", "content generation", "social media", "marketing"],
    category: "Writing & Content Creation",
    rating: 4.4,
    totalVotes: 3123
  },

  // Windsor - Personalized Video Marketing
  {
    icon: Video,
    title: "Windsor",
    description: "Send a personal video to every single customer so they never forget your brand Record one video, and Windsor's AI sends out millions of personalized copies to your customers.",
    emoji: "📹",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://windsor.io/?via=aiwebtools",
    imageUrl: windsorHero,
    tags: ["personalized video", "marketing", "customer engagement", "brand recognition", "automation"],
    category: "Video & Content Creation",
    rating: 4.2,
    totalVotes: 1987
  },

  // Compar - AI Content Analysis
  {
    icon: BarChart3,
    title: "Compar",
    description: "AI Powered Content Analyses.",
    emoji: "📊",
    color: "from-orange-500 to-red-600",
    directUrl: "https://compar.ai/",
    imageUrl: comparHero,
    tags: ["content analysis", "AI analytics", "performance tracking", "insights", "optimization"],
    category: "Data & Analytics",
    rating: 4.1,
    totalVotes: 1654
  },

  // Colossyan - AI Video Creator
  {
    icon: Film,
    title: "Colossyan",
    description: "Colossyan Creator makes video creation simple and stress-free. Discover our AI video creator with real actors. Create videos in less than 5 minutes. Start for free here.",
    emoji: "🎬",
    color: "from-indigo-500 to-purple-600",
    directUrl: "https://www.colossyan.com/?via=aiwebtools",
    imageUrl: colossyanHero,
    tags: ["AI video", "real actors", "video creation", "fast production", "professional videos"],
    category: "Video & Content Creation",
    rating: 4.3,
    totalVotes: 2456
  },

  // ParagraphAI - Writing Assistant
  {
    icon: Edit,
    title: "ParagraphAI",
    description: "ParagraphAI is an AI Writing App that writes clear, concise, and error-free content.",
    emoji: "📝",
    color: "from-green-500 to-teal-600",
    directUrl: "https://paragraphai.com/?ref=aiwebtools",
    imageUrl: paragraphaiHero,
    tags: ["AI writing", "grammar check", "content clarity", "error-free writing", "productivity"],
    category: "Writing & Content Creation",
    rating: 4.2,
    totalVotes: 2187
  },

  // IdeaBuddy - Business Planning
  {
    icon: Lightbulb,
    title: "Ideabuddy",
    description: "Bring your business idea to life. All-in-one business planning software that helps you turn your great idea into a successful business.",
    emoji: "💡",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://ideabuddy.com/?via=Aiwebtools",
    imageUrl: ideabuddyHero,
    tags: ["business planning", "idea development", "startup", "business strategy", "entrepreneurship"],
    category: "Business & Productivity",
    rating: 4.4,
    totalVotes: 2654
  },

  // Convai - Conversational AI
  {
    icon: MessageSquare,
    title: "Convai",
    description: "Easy to use, Conversational AI APIs for Speech Recognition, Language Understanding and generation, and Text to Speech. Design your games characters with GPT and speech enabled applications. Design your conversation based Characters and Speech based video game assets and youll be amazed.",
    emoji: "🗣️",
    color: "from-blue-500 to-indigo-600",
    directUrl: "https://convai.com/",
    imageUrl: convaiHero,
    tags: ["conversational AI", "speech recognition", "game development", "character design", "voice AI"],
    category: "AI Development Tools",
    rating: 4.5,
    totalVotes: 2876
  },

  // Yippity.io - Flashcard Generator
  {
    icon: BookOpen,
    title: "Yippity.io",
    description: "Enter your Notes and Yippity.io will generate questions automatically from them. Generates Flashcards Automatically. Anything that gets pasted on the textbox that you see on the website gets converted into a series of questions and answers that the user can then copy and paste into their flashcard application.",
    emoji: "📚",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://yippity.io/",
    imageUrl: yippityHero,
    tags: ["flashcards", "study tool", "education", "question generation", "learning"],
    category: "Education & Learning",
    rating: 4.3,
    totalVotes: 1987
  },

  // TinyWow - Utility Tools
  {
    icon: Zap,
    title: "TinyWow",
    description: "AI powered utility tools to make your life easier. Most common tools include, PDF, video, image, AI write and converter tools. TinyWow provides free online conversion, pdf, and other handy tools to help you solve problems of all types. All files both processed and unprocessed are deleted after 1 hour.",
    emoji: "🔧",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://tinywow.com/",
    imageUrl: tinywowHero,
    tags: ["utility tools", "PDF tools", "file conversion", "image tools", "productivity"],
    category: "Utilities & Productivity",
    rating: 4.2,
    totalVotes: 3456
  },

  // DeepMotion - 3D Animation
  {
    icon: Activity,
    title: "DeepMotion",
    description: "Animate 3D lets you turn videos into 3D animations by using real-time body tracking for use in games, augmented/virtual reality, and other applications. Simplifying 3D Animation.",
    emoji: "🎭",
    color: "from-red-500 to-purple-600",
    directUrl: "https://www.deepmotion.com/animate-3d?gad=1&gclid=Cj0KCQjwxYOiBhC9ARIsANiEIfaFSs89mduH1Un8tCZbmV2s_uSfz8lkFg7zCKoYSnLrbsF74fcc-VoaAqB4EALw_wcB",
    imageUrl: deepmotionHero,
    tags: ["3D animation", "motion capture", "body tracking", "AR/VR", "game development"],
    category: "3D & Animation",
    rating: 4.4,
    totalVotes: 2234
  },

  // Elephas - Mac AI Writer
  {
    icon: Edit,
    title: "Elephas",
    description: "The only AI writer that integrates with your Mac. Works across various applications. Personal AI Writing Assistant for Mac. Save hours every day. The world's first AI writer that works across your Mac, iPhone, and iPad.",
    emoji: "🐘",
    color: "from-gray-500 to-blue-600",
    directUrl: "https://elephas.app/",
    imageUrl: elephasHero,
    tags: ["Mac integration", "AI writing", "cross-platform", "productivity", "Apple ecosystem"],
    category: "Writing & Content Creation",
    rating: 4.3,
    totalVotes: 1876
  },

  // Predis - Social Media AI
  {
    icon: Share2,
    title: "Predis",
    description: "Predis.ai is an AI-powered content generator that helps create stunning social media posts in seconds. It offers a variety of features such as idea generation, engagement prediction, content recommendation, hashtag recommendation, and creatives suggestion.",
    emoji: "📱",
    color: "from-pink-500 to-red-600",
    directUrl: "https://predis.ai/?ref=aiwebtools",
    imageUrl: predisHero,
    tags: ["social media", "content generation", "engagement prediction", "hashtags", "marketing"],
    category: "Marketing & Social Media",
    rating: 4.5,
    totalVotes: 3123
  }
];
