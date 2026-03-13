import { Tool } from "@/types/tools";
import {
  Video,
  Search,
  Image,
  Shield,
  Layout,
  Scissors,
  BarChart3,
  FileText,
  PenTool,
  MessageSquare,
  Camera,
  Briefcase,
  Dog,
  Sparkles,
  Monitor,
  Zap,
  Globe,
  Layers,
  Bot,
  Music
} from "lucide-react";

import falcocutHero from "@/assets/tools/falcocut-hero.jpg";
import myeditHero from "@/assets/tools/myedit-hero.jpg";
import ideaapeHero from "@/assets/tools/ideaape-hero.jpg";
import outlerkitHero from "@/assets/tools/outlierkit-hero.jpg";
import korgiHero from "@/assets/tools/korgi-hero.jpg";
import rezzyHero from "@/assets/tools/rezzy-hero.jpg";
import medeoHero from "@/assets/tools/medeo-hero.jpg";
import feenaiHero from "@/assets/tools/feenai-hero.jpg";
import zoerHero from "@/assets/tools/zoer-hero.jpg";
import imgcreatorHero from "@/assets/tools/imgcreator-hero.jpg";
import artguruHero from "@/assets/tools/artguru-hero.jpg";
import motionexcelHero from "@/assets/tools/motionexcel-hero.jpg";
import deepbrainHero from "@/assets/tools/deepbrain-hero.jpg";
import chatupaiHero from "@/assets/tools/chatupai-hero.jpg";
import polymerHero from "@/assets/tools/polymer-dspm-hero.jpg";
import vectorizerHero from "@/assets/tools/vectorizer-hero.jpg";
import xpilotHero from "@/assets/tools/xpilot-hero.jpg";
import dewyHero from "@/assets/tools/dewy-chat-hero.jpg";
import hemleionHero from "@/assets/tools/hemleion-hero.jpg";
import vidguruHero from "@/assets/tools/vidguru-hero.jpg";
import invidiaiHero from "@/assets/tools/invidiai-hero.jpg";
import pixcapHero from "@/assets/tools/pixcap-hero.jpg";

export const toolifyBatch2026B10: Tool[] = [
  {
    icon: Scissors,
    title: "FalcoCut",
    description: "AI-powered video agent for marketing, UGC & product content. Create studio-quality videos with AI voice cloning, 50+ avatars, face swap, and 7+ language translation to cut production time instantly.",
    emoji: "🎬",
    color: "from-red-500 to-orange-500",
    directUrl: "https://falcocut.ai/?via=aiwebtools",
    imageUrl: falcocutHero,
    category: "Video & Multimedia",
    tags: ["video generator", "UGC", "face swap", "voice cloning", "marketing video", "e-commerce video", "AI video editor", "multilingual"],
    isFree: false,
    tagline: "AI video agent that turns text into studio-quality marketing content in seconds"
  },
  {
    icon: Camera,
    title: "MyEdit",
    description: "Online creative AI tool for image, audio, and video editing. Features AI art generator, photo enhancer, background remover, face swap, and Veo 3 video generator — all in one free browser-based platform.",
    emoji: "🎨",
    color: "from-blue-500 to-cyan-500",
    directUrl: "https://myedit.online/?via=aiwebtools",
    imageUrl: myeditHero,
    category: "Image & Design",
    tags: ["photo editor", "AI art generator", "background remover", "image enhancer", "video editor", "audio editor", "free AI tools", "online editor"],
    isFree: true,
    tagline: "All-in-one AI creative suite for image, audio, and video — free in your browser"
  },
  {
    icon: Search,
    title: "IdeaApe",
    description: "AI-powered market research platform that helps entrepreneurs validate business ideas, discover customer pain points, and analyze market opportunities using automated research and competitive intelligence.",
    emoji: "🦍",
    color: "from-amber-500 to-yellow-500",
    directUrl: "https://ideaape.com/?via=aiwebtools",
    imageUrl: ideaapeHero,
    category: "Business & Productivity",
    tags: ["market research", "idea validation", "business intelligence", "competitor analysis", "startup", "entrepreneurship", "customer insights"],
    isFree: false,
    tagline: "AI market research that validates your business ideas before you build"
  },
  {
    icon: BarChart3,
    title: "OutlierKit",
    description: "YouTube analytics and outlier detection platform that helps creators identify viral content trends, analyze competitor performance, and optimize video strategy with AI-powered insights.",
    emoji: "📊",
    color: "from-purple-500 to-indigo-500",
    directUrl: "https://outlierkit.com/?via=aiwebtools",
    imageUrl: outlerkitHero,
    category: "Data & Analytics",
    tags: ["YouTube analytics", "outlier detection", "content strategy", "competitor analysis", "video analytics", "creator tools", "viral content"],
    isFree: false,
    tagline: "Find viral YouTube outliers and reverse-engineer what makes content go viral"
  },
  {
    icon: Layout,
    title: "Korgi",
    description: "AI project management tool that creates complete project boards in 60 seconds. Perfect for solo businesses and hybrid/remote teams — organize data rooms, business docs, pitch decks, and launches instantly.",
    emoji: "🐕",
    color: "from-emerald-500 to-teal-500",
    directUrl: "https://korgi.app/?via=aiwebtools",
    imageUrl: korgiHero,
    category: "Business & Productivity",
    tags: ["project management", "AI workspace", "data room", "pitch deck", "business organizer", "remote teams", "productivity"],
    isFree: false,
    tagline: "AI project boards created in 60 seconds — just describe what you need"
  },
  {
    icon: FileText,
    title: "Rezzy",
    description: "AI resume builder specifically designed for engineers and developers. Trained on resumes that landed offers at top companies — beat ATS bots with optimized formatting, keywords, and cover letters.",
    emoji: "📄",
    color: "from-sky-500 to-blue-500",
    directUrl: "https://www.rezzy.dev/?via=aiwebtools",
    imageUrl: rezzyHero,
    category: "Business & Productivity",
    tags: ["resume builder", "ATS optimization", "cover letter", "job search", "engineer resume", "developer resume", "career tools"],
    isFree: false,
    tagline: "AI resume builder trained on resumes that actually landed offers at FAANG"
  },
  {
    icon: Video,
    title: "Medeo",
    description: "AI-powered video creation and editing tool that simplifies video production with automated editing, scene generation, and smart templates for content creators and marketers.",
    emoji: "🎞️",
    color: "from-rose-500 to-pink-500",
    directUrl: "https://medeo.ai/?via=aiwebtools",
    imageUrl: medeoHero,
    category: "Video & Multimedia",
    tags: ["video creation", "AI video", "video editing", "content creation", "video templates", "automated editing"],
    isFree: false,
    tagline: "AI video tool that turns your ideas into polished videos without the learning curve"
  },
  {
    icon: Bot,
    title: "Feen AI",
    description: "AI-powered assistant platform offering intelligent automation, chat capabilities, and workflow optimization for businesses looking to enhance customer engagement and streamline operations.",
    emoji: "🤖",
    color: "from-violet-500 to-purple-500",
    directUrl: "https://feen.ai/?via=aiwebtools",
    imageUrl: feenaiHero,
    category: "AI Agents & Assistants",
    tags: ["AI assistant", "chatbot", "automation", "customer engagement", "workflow", "business AI"],
    isFree: false,
    tagline: "AI assistant that automates your workflows and supercharges customer engagement"
  },
  {
    icon: PenTool,
    title: "ZOER",
    description: "AI-powered digital whiteboard and design collaboration tool that helps teams brainstorm, sketch, and visualize ideas together in real-time with intelligent drawing assistance.",
    emoji: "✏️",
    color: "from-orange-500 to-red-500",
    directUrl: "https://zoer.io/?via=aiwebtools",
    imageUrl: zoerHero,
    category: "Creative & Design",
    tags: ["whiteboard", "design collaboration", "brainstorming", "digital drawing", "team collaboration", "visual thinking"],
    isFree: false,
    tagline: "AI whiteboard that turns messy brainstorms into organized visual masterpieces"
  },
  {
    icon: Image,
    title: "ImgCreator.AI",
    description: "AI image generator that creates stunning images from text descriptions. Features background removal, image editing, and multiple art styles for designers, marketers, and content creators.",
    emoji: "🖼️",
    color: "from-cyan-500 to-blue-500",
    directUrl: "https://imgcreator.zmo.ai/?via=aiwebtools",
    imageUrl: imgcreatorHero,
    category: "Image & Design",
    tags: ["image generator", "AI art", "text to image", "background remover", "design tool", "marketing images"],
    isFree: false,
    tagline: "Text-to-image AI that generates professional visuals in any style you imagine"
  },
  {
    icon: Sparkles,
    title: "ArtGuru",
    description: "Free AI art generator that transforms text prompts into beautiful artwork. Create stunning illustrations, paintings, and digital art in various styles with advanced AI models.",
    emoji: "🎭",
    color: "from-fuchsia-500 to-pink-500",
    directUrl: "https://www.artguru.ai/?via=aiwebtools",
    imageUrl: artguruHero,
    category: "Image & Design",
    tags: ["AI art", "text to image", "art generator", "illustration", "digital art", "free AI art", "painting generator"],
    isFree: true,
    tagline: "Free AI art generator that turns your words into gallery-worthy masterpieces"
  },
  {
    icon: Zap,
    title: "MotionExcel",
    description: "AI-powered spreadsheet and data automation tool that transforms complex Excel workflows with intelligent formulas, automated data cleaning, and smart analysis for business professionals.",
    emoji: "⚡",
    color: "from-green-500 to-emerald-500",
    directUrl: "https://motionexcel.com/?via=aiwebtools",
    imageUrl: motionexcelHero,
    category: "Business & Productivity",
    tags: ["spreadsheet AI", "Excel automation", "data analysis", "formulas", "business intelligence", "data cleaning"],
    isFree: false,
    tagline: "AI that makes Excel feel like magic — automate formulas, clean data, analyze instantly"
  },
  {
    icon: Monitor,
    title: "DeepBrain AI",
    description: "Enterprise AI video generation platform that creates realistic AI avatars and studio-quality videos from text. Used by Fortune 500 companies for training, marketing, and customer communications.",
    emoji: "🧠",
    color: "from-indigo-500 to-blue-500",
    directUrl: "https://www.deepbrain.io/?via=aiwebtools",
    imageUrl: deepbrainHero,
    category: "Video & Multimedia",
    tags: ["AI avatar", "video generation", "text to video", "AI presenter", "training videos", "enterprise video", "digital human"],
    isFree: false,
    tagline: "Enterprise AI avatars that deliver your message with human-like realism"
  },
  {
    icon: MessageSquare,
    title: "ChatUp AI",
    description: "Advanced AI chatbot platform featuring multiple AI models including GPT-4, Claude, and Gemini. Offers AI-powered conversations, writing assistance, image generation, and code help in one interface.",
    emoji: "💬",
    color: "from-teal-500 to-cyan-500",
    directUrl: "https://chatup.ai/?via=aiwebtools",
    imageUrl: chatupaiHero,
    category: "AI Chat & Assistants",
    tags: ["AI chat", "chatbot", "GPT-4", "writing assistant", "code helper", "image generation", "multi-model AI"],
    isFree: false,
    tagline: "One chat interface to access GPT-4, Claude, and Gemini — all AI models unified"
  },
  {
    icon: Shield,
    title: "Polymer DSPM",
    description: "AI-powered Data Security Posture Management platform that automatically discovers, classifies, and protects sensitive data across cloud environments — preventing data breaches before they happen.",
    emoji: "🛡️",
    color: "from-slate-500 to-gray-500",
    directUrl: "https://www.polymerhq.io/?via=aiwebtools",
    imageUrl: polymerHero,
    category: "Security & Privacy",
    tags: ["data security", "DSPM", "cloud security", "data protection", "compliance", "sensitive data", "enterprise security"],
    isFree: false,
    tagline: "AI that finds and protects your sensitive data before hackers do"
  },
  {
    icon: Image,
    title: "Vectorizer.AI",
    description: "AI-powered image vectorization tool that converts raster images (PNG, JPG) into clean, scalable vector graphics (SVG) with remarkable accuracy. Perfect for logos, illustrations, and design assets.",
    emoji: "📐",
    color: "from-lime-500 to-green-500",
    directUrl: "https://vectorizer.ai/?via=aiwebtools",
    imageUrl: vectorizerHero,
    category: "Image & Design",
    tags: ["vectorize", "SVG converter", "image to vector", "logo design", "raster to vector", "design tools", "illustration"],
    isFree: false,
    tagline: "Turn any image into a perfect scalable vector — AI precision meets design magic"
  },
  {
    icon: Bot,
    title: "X-Pilot",
    description: "AI coding copilot that integrates with your IDE to provide intelligent code suggestions, automated debugging, code review, and documentation generation for faster software development.",
    emoji: "✈️",
    color: "from-blue-600 to-indigo-600",
    directUrl: "https://xpilot.ai/?via=aiwebtools",
    imageUrl: xpilotHero,
    category: "Coding & Development",
    tags: ["code assistant", "AI coding", "IDE plugin", "code review", "debugging", "developer tools", "programming"],
    isFree: false,
    tagline: "AI coding copilot that writes, reviews, and debugs code right in your IDE"
  },
  {
    icon: MessageSquare,
    title: "Dewy Chat",
    description: "AI-powered conversational assistant that helps users with research, writing, analysis, and creative tasks through natural language chat with advanced reasoning capabilities.",
    emoji: "💧",
    color: "from-sky-400 to-blue-400",
    directUrl: "https://dewychat.com/?via=aiwebtools",
    imageUrl: dewyHero,
    category: "AI Chat & Assistants",
    tags: ["AI chat", "conversational AI", "research assistant", "writing helper", "analysis", "creative assistant"],
    isFree: false,
    tagline: "AI chat assistant with deep reasoning for research, writing, and creative thinking"
  },
  {
    icon: Globe,
    title: "Hemleion",
    description: "AI-powered web design and development platform that generates responsive websites from descriptions. Build professional sites with AI-generated layouts, content, and code — no design skills needed.",
    emoji: "🌐",
    color: "from-purple-600 to-violet-600",
    directUrl: "https://hemleion.com/?via=aiwebtools",
    imageUrl: hemleionHero,
    category: "Web Development",
    tags: ["web design", "AI website builder", "responsive design", "no-code", "web development", "site generator"],
    isFree: false,
    tagline: "Describe your dream website and watch AI build it — responsive, polished, ready to launch"
  },
  {
    icon: Video,
    title: "VidGuru",
    description: "AI video editing and creation platform that automates video production with smart cuts, transitions, captions, and effects. Transform raw footage into polished content for social media and marketing.",
    emoji: "🎥",
    color: "from-red-600 to-rose-600",
    directUrl: "https://vidguru.ai/?via=aiwebtools",
    imageUrl: vidguruHero,
    category: "Video & Multimedia",
    tags: ["video editing", "AI video", "social media video", "auto captions", "video effects", "content creation"],
    isFree: false,
    tagline: "AI video editor that transforms raw footage into scroll-stopping content automatically"
  },
  {
    icon: Video,
    title: "InVidiai",
    description: "AI-powered video intelligence platform that analyzes, indexes, and extracts insights from video content. Automatically generates summaries, transcriptions, and searchable video libraries.",
    emoji: "🔍",
    color: "from-amber-600 to-orange-600",
    directUrl: "https://invidiai.com/?via=aiwebtools",
    imageUrl: invidiaiHero,
    category: "Video & Multimedia",
    tags: ["video analysis", "video intelligence", "transcription", "video search", "content indexing", "AI video"],
    isFree: false,
    tagline: "AI that watches your videos so you don't have to — search, summarize, analyze"
  },
  {
    icon: Layers,
    title: "Pixcap",
    description: "AI-powered 3D design and mockup platform that creates stunning 3D graphics, product mockups, and animated designs. Transform flat designs into eye-catching 3D visuals without complex software.",
    emoji: "💎",
    color: "from-pink-500 to-rose-500",
    directUrl: "https://pixcap.com/?via=aiwebtools",
    imageUrl: pixcapHero,
    category: "3D & Visualization",
    tags: ["3D design", "mockup generator", "3D graphics", "product mockup", "animation", "design tool", "3D modeling"],
    isFree: false,
    tagline: "Create stunning 3D designs and mockups with AI — no 3D modeling skills required"
  }
];
