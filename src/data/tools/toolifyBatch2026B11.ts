
import { Tool } from "@/types/tools";
import {
  Palette, Globe, MessageCircle, Camera, Video, BarChart3,
  Sparkles, Briefcase, GraduationCap, Code, PenTool
} from "lucide-react";

import gencraftHero from "@/assets/tools/gencraft-hero.jpg";
import flotaiHero from "@/assets/tools/flotai-hero.jpg";
import caveduckHero from "@/assets/tools/caveduck-hero.jpg";
import somnyHero from "@/assets/tools/somny-hero.jpg";
import arcadsHero from "@/assets/tools/arcads-hero.jpg";
import visionstoryHero from "@/assets/tools/visionstory-hero.jpg";
import miragicHero from "@/assets/tools/miragic-salespilot-hero.jpg";
import easyPeasyHero from "@/assets/tools/easy-peasy-hero.jpg";
import interviewCopilotHero from "@/assets/tools/interview-copilot-hero.jpg";
import codedesignHero from "@/assets/tools/codedesign-hero.jpg";
import texteroHero from "@/assets/tools/textero-hero.jpg";

export const toolifyBatch2026B11: Tool[] = [
  {
    icon: Palette,
    title: "Gencraft",
    description: "AI-powered platform for generating stunning photos and videos from text prompts. Features diverse models and artistic styles with both web and mobile apps for creative image generation.",
    emoji: "🎨", color: "from-purple-600 to-pink-500",
    directUrl: "https://gencraft.com/?via=aiwebtools", imageUrl: gencraftHero,
    tags: ["AI image generator", "text to image", "AI art", "creative AI", "photo generation", "video generation", "artistic styles"],
    category: "Image & Design", rating: 4.5, totalVotes: 3200,
  },
  {
    icon: Globe,
    title: "Flot.ai",
    description: "The #1 AI copilot for all apps, docs, and websites. Pop up AI anywhere you type or highlight text to write, improve, paraphrase, summarize, translate, explain, or reply with one click. Works across every application.",
    emoji: "🚀", color: "from-cyan-500 to-blue-500",
    directUrl: "https://flot.ai/?via=aiwebtools", imageUrl: flotaiHero,
    tags: ["AI copilot", "writing assistant", "productivity", "browser extension", "paraphrase", "translate", "summarize", "all apps"],
    category: "AI Agents", rating: 4.6, totalVotes: 2800,
  },
  {
    icon: MessageCircle,
    title: "Caveduck",
    description: "Platform for creating and chatting with custom AI characters. Build unique AI personalities, engage in immersive conversations, and explore creative storytelling through interactive character chat experiences.",
    emoji: "🦆", color: "from-amber-500 to-orange-500",
    directUrl: "https://caveduck.io/?via=aiwebtools", imageUrl: caveduckHero,
    tags: ["AI character chat", "custom characters", "roleplay", "interactive storytelling", "AI chat", "creative writing", "character creator"],
    category: "AI Chat Platforms", rating: 4.3, totalVotes: 1900,
  },
  {
    icon: Camera,
    title: "Somny",
    description: "AI character generator that transforms your photos into stunning AI images and videos featuring you. Create a personal AI character from your selfies and generate creative content in any style imaginable.",
    emoji: "✨", color: "from-pink-400 to-rose-500",
    directUrl: "https://www.somny.com/?via=aiwebtools", imageUrl: somnyHero,
    tags: ["AI character generator", "photo to AI", "AI selfie", "personalized AI", "AI avatar", "creative portraits", "AI video"],
    category: "Image & Design", rating: 4.4, totalVotes: 2100,
  },
  {
    icon: Video,
    title: "Arcads",
    description: "Create winning video ads with AI using a library of 1,000+ captivating AI actors or your own custom AI avatar. Generate high-converting UGC-style video ads from text in minutes without film crews or actors.",
    emoji: "🎬", color: "from-red-500 to-orange-600",
    directUrl: "https://www.arcads.ai/?via=aiwebtools", imageUrl: arcadsHero,
    tags: ["AI video ads", "UGC ads", "AI actors", "marketing video", "ad creation", "video generation", "advertising"],
    category: "Video & Multimedia", rating: 4.6, totalVotes: 3500,
  },
  {
    icon: Video,
    title: "VisionStory AI",
    description: "AI-powered video creation platform turning photos and text into lifelike talking videos. Upload an image, write a script, and generate professional AI videos with customizable emotions and expressions.",
    emoji: "📹", color: "from-violet-600 to-purple-500",
    directUrl: "https://www.visionstory.ai/?via=aiwebtools", imageUrl: visionstoryHero,
    tags: ["talking video", "AI video", "photo to video", "text to video", "AI avatar video", "video podcast", "emotion control"],
    category: "Video & Multimedia", rating: 4.4, totalVotes: 1800,
  },
  {
    icon: BarChart3,
    title: "Miragic SalesPilot",
    description: "AI platform for sales analytics, forecasting, and creative content generation. Streamline sales analysis with AI-powered insights, performance tracking, and data-driven forecasting for smarter business decisions.",
    emoji: "📊", color: "from-blue-600 to-green-500",
    directUrl: "https://miragic.ai/?via=aiwebtools", imageUrl: miragicHero,
    tags: ["sales AI", "analytics", "forecasting", "sales assistant", "business intelligence", "CRM", "revenue intelligence"],
    category: "Business & Productivity", rating: 4.3, totalVotes: 1500,
  },
  {
    icon: Sparkles,
    title: "Easy-Peasy.AI",
    description: "All-in-one AI platform for content creation including text, images, audio, video, and transcription. Over 170 templates with 2M+ happy users. Work smarter, create faster, and achieve more with no tech skills required.",
    emoji: "🍰", color: "from-yellow-400 to-pink-500",
    directUrl: "https://easy-peasy.ai/?via=aiwebtools", imageUrl: easyPeasyHero,
    tags: ["all-in-one AI", "content creation", "AI writing", "image generation", "audio AI", "transcription", "templates", "productivity"],
    category: "Writing & Content", rating: 4.5, totalVotes: 4200,
  },
  {
    icon: Briefcase,
    title: "AI Interview Copilot",
    description: "AI assistant for job interview preparation and real-time feedback. Get polished responses crafted by AI during live interviews, practice with mock interviews, and boost your confidence to land your dream job.",
    emoji: "💼", color: "from-blue-600 to-indigo-600",
    directUrl: "https://interviewcopilot.io/?via=aiwebtools", imageUrl: interviewCopilotHero,
    tags: ["interview prep", "AI interview", "job preparation", "real-time feedback", "mock interview", "career tools", "hiring"],
    category: "Business & Productivity", rating: 4.5, totalVotes: 2600,
  },
  {
    icon: Code,
    title: "CodeDesign.ai",
    description: "AI-powered website builder for creating stunning, professional websites effortlessly. The fastest AI website builder on the planet — generate complete websites from text prompts with no coding required.",
    emoji: "💻", color: "from-purple-600 to-cyan-500",
    directUrl: "https://codedesign.ai/?via=aiwebtools", imageUrl: codedesignHero,
    tags: ["AI website builder", "no-code", "web design", "site generator", "landing page", "website creator", "AI web development"],
    category: "AI & Development", rating: 4.4, totalVotes: 2300,
  },
  {
    icon: PenTool,
    title: "Textero.ai",
    description: "AI essay writing assistant with free daily credits for students. Generate academic essays, research papers, and outlines with AI-powered writing help. Features AI detection remover, PDF summarizer, and essay review tools.",
    emoji: "📝", color: "from-amber-500 to-orange-600",
    directUrl: "https://www.textero.ai/?via=aiwebtools", imageUrl: texteroHero,
    tags: ["AI essay writer", "academic writing", "student tools", "research papers", "essay generator", "plagiarism", "education"],
    category: "Education & Learning", rating: 4.3, totalVotes: 1700,
  },
];
