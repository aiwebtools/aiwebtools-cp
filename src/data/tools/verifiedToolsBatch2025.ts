import { Tool } from "@/types/tools";
import { Sparkles, LayoutDashboard, TrendingUp, Image, Box, Cpu, Eraser, Camera, Video, Music, Eye, Shirt, Smile, Gamepad2, Database, FileText, Bot, PenTool, Palette, Briefcase } from "lucide-react";

// VERIFIED AI TOOLS BATCH - January 2025
// All URLs verified via web search - NO fake tools
// All tools have affiliate links where applicable

export const verifiedToolsBatch2025: Tool[] = [
  // ============ FEATURED PLATFORMS ============
  {
    icon: Sparkles,
    emoji: "🚀",
    color: "from-purple-500 to-blue-500",
    title: "i10X",
    description: "Access ChatGPT 5, Perplexity, Claude and 500+ more LLMs & tools with a single subscription starting from $8. All your AI needs in one place.",
    category: "AI Agents",
    isFree: false,
    directUrl: "https://i10x.ai/?via=aiwebtools",
    imageUrl: "/images/i10x-hero.png",
    tags: ["LLM Platform", "Multi-Model", "AI Subscription", "ChatGPT", "Claude", "Perplexity", "Featured"]
  },
  {
    icon: LayoutDashboard,
    emoji: "✅",
    color: "from-pink-500 to-purple-500",
    title: "ClickUp",
    description: "Manage your projects faster with a platform that brings teams, tasks, and documents together. Built-in AI summarizes notes, writes for you, and organizes priorities.",
    category: "Business & Productivity",
    isFree: true,
    directUrl: "https://clickup.com/?via=aiwebtools",
    imageUrl: "/images/clickup-hero.png",
    tags: ["Project Management", "Productivity", "AI Assistant", "Team Collaboration", "Featured"]
  },
  {
    icon: TrendingUp,
    emoji: "📊",
    color: "from-orange-500 to-red-500",
    title: "Semrush One",
    description: "Measure and optimize your visibility on Google and in AI responses like ChatGPT, Perplexity, or Gemini. Compare yourself to competitors and audit your site's AI indexability.",
    category: "Marketing & Sales",
    isFree: false,
    directUrl: "https://www.semrush.com/one/?via=aiwebtools",
    imageUrl: "/images/semrush-one-hero.png",
    tags: ["SEO", "AI Visibility", "Marketing", "Analytics", "Featured"]
  },

  // ============ IMAGE GENERATION & EDITING ============
  {
    icon: Image,
    emoji: "🖼️",
    color: "from-red-500 to-orange-500",
    title: "Shutterstock AI",
    description: "AI-powered image generator from Shutterstock. Create unique images from text prompts with industry-leading AI technology backed by OpenAI partnership.",
    category: "Image & Design",
    isFree: false,
    directUrl: "https://www.shutterstock.com/ai-image-generator?via=aiwebtools",
    imageUrl: "/images/shutterstock-ai-hero.png",
    tags: ["Image Generation", "Text-to-Image", "Stock Images", "AI Art"]
  },
  {
    icon: Box,
    emoji: "📦",
    color: "from-green-500 to-teal-500",
    title: "Mockuplabs.ai",
    description: "Free mockup generator to create any product mockup. Boost sales of print-on-demand and eCommerce with realistic product mockups and 10k+ sellable templates.",
    category: "Image & Design",
    isFree: true,
    directUrl: "https://www.mockuplabs.ai/?via=aiwebtools",
    imageUrl: "/images/mockuplabs-hero.png",
    tags: ["Mockup Generator", "E-commerce", "Product Design", "POD"]
  },
  {
    icon: Cpu,
    emoji: "🤖",
    color: "from-blue-500 to-indigo-500",
    title: "GLM-Image",
    description: "First open-source, industrial-grade discrete auto-regressive image generation model. Dense-knowledge and high-fidelity image generation by Z.ai.",
    category: "Image & Design",
    isFree: true,
    directUrl: "https://z.ai/glm-image?via=aiwebtools",
    imageUrl: "/images/glm-image-hero.png",
    tags: ["Image Generation", "Open Source", "Auto-regressive", "AI Art"]
  },
  {
    icon: Eraser,
    emoji: "✨",
    color: "from-cyan-500 to-blue-500",
    title: "MarkGone Watermark Remover",
    description: "AI-powered watermark remover for photos and videos. Remove watermarks, logos, and unwanted objects from images while preserving quality.",
    category: "Image & Design",
    isFree: true,
    directUrl: "https://www.removewatermarks.com/?via=aiwebtools",
    imageUrl: "/images/markgone-hero.png",
    tags: ["Watermark Remover", "Image Editing", "Video Editing", "AI Tool"]
  },
  {
    icon: Camera,
    emoji: "💄",
    color: "from-pink-400 to-rose-500",
    title: "BeautyPlus Image Enhancer",
    description: "AI-powered photo editor and image enhancer. Upscale images, enhance resolution, color, and contrast without quality loss. 75M+ monthly active users.",
    category: "Image & Design",
    isFree: true,
    directUrl: "https://www.beautyplus.com/image-enhancer?via=aiwebtools",
    imageUrl: "/images/beautyplus-hero.png",
    tags: ["Image Enhancer", "Photo Editor", "AI Filters", "Beauty AI"]
  },

  // ============ VIDEO TOOLS ============
  {
    icon: Video,
    emoji: "🎬",
    color: "from-purple-500 to-pink-500",
    title: "AVCLabs Video Blur AI",
    description: "Professional video blurring software. Automatically blur faces, backgrounds, license plates, and objects in videos. Reduce 99% of blurring workload with AI.",
    category: "Video & Multimedia",
    isFree: false,
    directUrl: "https://www.avclabs.com/video-blur-ai.html?via=aiwebtools",
    imageUrl: "/images/avclabs-blur-hero.png",
    tags: ["Video Blur", "Face Blur", "Privacy Tool", "Video Editing"]
  },

  // ============ MUSIC & AUDIO ============
  {
    icon: Music,
    emoji: "🎵",
    color: "from-violet-500 to-purple-500",
    title: "MakeBestMusic",
    description: "AI music generator and production suite. Create original music, generate vocals, split tracks, master audio, and write lyrics with AI-powered tools.",
    category: "Audio & Music",
    isFree: true,
    directUrl: "https://makebestmusic.com/?via=aiwebtools",
    imageUrl: "/images/makebestmusic-hero.png",
    tags: ["Music Generator", "AI Music", "Text-to-Music", "Voice Cover"]
  },

  // ============ HEALTHCARE & WELLNESS ============
  {
    icon: Eye,
    emoji: "👁️",
    color: "from-teal-500 to-cyan-500",
    title: "Virtual Field",
    description: "Portable visual field and color vision testing. Comfortable, patient-friendly eye exams with AI-powered accuracy. Save time and improve patient experience.",
    category: "Health & Wellness",
    isFree: false,
    directUrl: "https://www.virtualfield.io/?via=aiwebtools",
    imageUrl: "/images/virtual-field-hero.png",
    tags: ["Eye Testing", "Healthcare", "Medical AI", "Vision Test"]
  },

  // ============ FASHION & LIFESTYLE ============
  {
    icon: Shirt,
    emoji: "👗",
    color: "from-rose-500 to-pink-500",
    title: "Klodsy",
    description: "Virtual try-on app and AI fashion assistant. Upload your photo, try on clothes digitally, compare styles, and plan outfits before you buy.",
    category: "Creative & Lifestyle",
    isFree: true,
    directUrl: "https://klodsy.com/?via=aiwebtools",
    imageUrl: "/images/klodsy-hero.png",
    tags: ["Virtual Try-On", "Fashion AI", "Outfit Planner", "Style Assistant"]
  },

  // ============ MEME & CREATIVE ============
  {
    icon: Smile,
    emoji: "😂",
    color: "from-yellow-500 to-orange-500",
    title: "Kirkify",
    description: "AI meme generator with drag-and-drop neon meme creation. Generate AI satire and creative memes in seconds with this innovative meme studio.",
    category: "Creative & Entertainment",
    isFree: true,
    directUrl: "https://kirkify.net/?via=aiwebtools",
    imageUrl: "/images/kirkify-hero.png",
    tags: ["Meme Generator", "AI Satire", "Creative Tool", "Neon Memes"]
  },

  // ============ GAMES ============
  {
    icon: Gamepad2,
    emoji: "🎮",
    color: "from-emerald-500 to-green-500",
    title: "Infinite Craft by Neal",
    description: "AI-powered endless world building game. Start with four elements and mix your way to thousands of surprising combinations. Over 100 million unique possibilities.",
    category: "Gaming & Entertainment",
    isFree: true,
    directUrl: "https://neal.fun/infinite-craft/?via=aiwebtools",
    imageUrl: "/images/infinite-craft-hero.png",
    tags: ["AI Game", "Crafting Game", "Sandbox", "Creative Game"]
  },

  // ============ DATA & ANALYTICS ============
  {
    icon: Database,
    emoji: "📊",
    color: "from-indigo-500 to-blue-500",
    title: "Scale AI",
    description: "Data engine for AI. Collect, curate, and annotate data for machine learning. Trusted by world's leading ML teams to accelerate AI development.",
    category: "Data & Analytics",
    isFree: false,
    directUrl: "https://scale.com/?via=aiwebtools",
    imageUrl: "/images/scale-ai-hero.png",
    tags: ["Data Labeling", "ML Training", "Data Annotation", "Enterprise AI"]
  },
  {
    icon: FileText,
    emoji: "📄",
    color: "from-blue-500 to-cyan-500",
    title: "Nanonets",
    description: "AI-powered intelligent document processing and workflow automation. Transform business processes with intelligent automation in a few clicks.",
    category: "Business & Productivity",
    isFree: true,
    directUrl: "https://nanonets.com/?via=aiwebtools",
    imageUrl: "/images/nanonets-hero.png",
    tags: ["Document Processing", "Automation", "OCR", "Workflow AI"]
  },

  // ============ GOOGLE AI ============
  {
    icon: Bot,
    emoji: "🌟",
    color: "from-blue-400 to-indigo-500",
    title: "Gemini Personal Intelligence",
    description: "Google's AI personal assistant connecting Gemini to Gmail, Photos, YouTube and your Google apps data. Get personalized intelligence across your digital life.",
    category: "AI Agents",
    isFree: true,
    directUrl: "https://gemini.google.com/?via=aiwebtools",
    imageUrl: "/images/gemini-personal-hero.png",
    tags: ["Google AI", "Personal Assistant", "Gmail AI", "Gemini"]
  },

  // ============ WRITING & HUMANIZER ============
  {
    icon: PenTool,
    emoji: "✍️",
    color: "from-green-500 to-emerald-500",
    title: "WriteHybrid AI Humanizer",
    description: "AI text humanizer that transforms AI-generated content into natural, human-like writing. Bypass AI detection while maintaining quality and meaning.",
    category: "Writing & Content",
    isFree: true,
    directUrl: "https://writehybrid.com/?via=aiwebtools",
    imageUrl: "/images/writehybrid-hero.png",
    tags: ["AI Humanizer", "Content Writing", "AI Detection Bypass", "Text Rewriter"]
  },

  // ============ DESIGN & SKETCHING ============
  {
    icon: Palette,
    emoji: "🎨",
    color: "from-violet-500 to-purple-500",
    title: "Sketchflow.ai",
    description: "AI-powered sketching and design tool. Transform rough sketches into polished designs with intelligent AI assistance for designers and creatives.",
    category: "Image & Design",
    isFree: true,
    directUrl: "https://sketchflow.ai/?via=aiwebtools",
    imageUrl: "/images/sketchflow-hero.png",
    tags: ["Sketch Tool", "Design AI", "UI Design", "Wireframing"]
  },

  // ============ JOB & CAREER ============
  {
    icon: Briefcase,
    emoji: "💼",
    color: "from-amber-500 to-orange-500",
    title: "Final Round AI",
    description: "AI-powered interview preparation and career coaching. Practice with realistic AI interviews, get feedback, and land your dream job.",
    category: "Business & Productivity",
    isFree: false,
    directUrl: "https://www.finalroundai.com/?via=aiwebtools",
    imageUrl: "/images/final-round-ai-hero.png",
    tags: ["Interview Prep", "Career AI", "Job Search", "Mock Interview"]
  }
];
