
import { BookOpen, Film, Clock, Car, GraduationCap, Shield, Leaf, Zap, Search, Home, Fish, Sprout, Gem, Eye, Brain, Heart, Scale, Calculator, Code, Gamepad2, CreditCard, Users, Palette as PaletteIcon, Video, History, FileText, Settings, Globe, Rocket, Cpu, Building, Headphones, UserSearch, Presentation, DollarSign, HandHeart, PaintBucket, Target, PenTool, Camera, Star, MessageSquare, Mountain, Brush, Phone, Bot, Database, Play, Radio, Layers, Gavel } from "lucide-react";
import { Tool } from "@/types/tools";

export const featuredTools: Tool[] = [
  {
    icon: BookOpen,
    title: "Book Writer GPT",
    description: "Create professionally written full books about any topic",
    emoji: "✍️",
    color: "from-blue-500 to-purple-600",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: Film,
    title: "Movie Script Writer GPT",
    description: "AI companion for industry-standard movie scripts and storytelling",
    emoji: "🎬",
    color: "from-red-500 to-pink-600",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: Clock,
    title: "Time Machine GPT",
    description: "Explore the past, potential futures, and alternative realities",
    emoji: "🌀",
    color: "from-cyan-500 to-blue-600",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: Car,
    title: "Automobile GPT",
    description: "Comprehensive automotive expert for deals, repairs, and maintenance advice",
    emoji: "🏎️",
    color: "from-orange-500 to-red-600",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: GraduationCap,
    title: "College Degree GPT",
    description: "Complete college education experience with accessible learning resources",
    emoji: "🎓",
    color: "from-green-500 to-teal-600",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: Shield,
    title: "Survivalist GPT",
    description: "Comprehensive survival companion with practical knowledge and experience",
    emoji: "🛡️",
    color: "from-gray-500 to-slate-600",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];

export const allTools: Tool[] = [
  ...featuredTools,
  {
    icon: Leaf,
    title: "Sustainable Futures GPT",
    description: "Assist governments and communities in making data-driven decisions for environmental sustainability",
    emoji: "🌍",
    color: "from-green-600 to-emerald-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: Zap,
    title: "Nikola Tesla GPT",
    description: "Investigate scientific mysteries and craft groundbreaking theories with innovative brilliance",
    emoji: "⚡",
    color: "from-purple-600 to-indigo-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: Search,
    title: "Food Quality Inspector GPT",
    description: "Smart companion for grocery shopping, assessing food quality and safety",
    emoji: "🛒",
    color: "from-yellow-500 to-orange-600",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: Eye,
    title: "Snoop Image AI",
    description: "Tool for verifying image authenticity, analyzing whether images are likely real or AI-generated with Snoop Dogg style",
    emoji: "👁️",
    color: "from-purple-600 to-indigo-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: Gavel,
    title: "Legal Draftsmith GPT",
    description: "Specializes in the precise drafting of legal documents with expert AI assistance",
    emoji: "⚖️",
    color: "from-gray-700 to-slate-800",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: Video,
    title: "InVideo AI",
    description: "Ultimate video creation tool for crafting professional videos accessible to everyone",
    emoji: "🎥",
    color: "from-red-600 to-pink-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: Bot,
    title: "Grok 3",
    description: "Advanced AI developed by X.AI with enhanced conversational capabilities",
    emoji: "🤖",
    color: "from-blue-600 to-cyan-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: Cpu,
    title: "BIG-AGI",
    description: "Innovative AI suite making cutting-edge artificial intelligence accessible to professionals and developers",
    emoji: "💻",
    color: "from-purple-700 to-indigo-800",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: MessageSquare,
    title: "ChatRTX by NVIDIA",
    description: "Personalize a GPT model with your own content, requires RTX 30/40 series GPU with 8GB+ VRAM",
    emoji: "💬",
    color: "from-green-600 to-emerald-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: Brain,
    title: "GPT Ideas Assistant",
    description: "AI assistant for generating and organizing creative GPT ideas and instructions",
    emoji: "💡",
    color: "from-yellow-600 to-orange-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: Phone,
    title: "Freedom GPT (Phone Call GPT)",
    description: "Deploy AI phone agents with advanced conversational capabilities for business automation",
    emoji: "📞",
    color: "from-blue-700 to-indigo-800",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: Rocket,
    title: "Cheatlayer Project Atlas (BETA)",
    description: "Advanced automation platform for creating complex workflows and business processes",
    emoji: "🚀",
    color: "from-orange-600 to-red-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: Users,
    title: "Hugging Face Chat",
    description: "Access various large language models without paid membership and deploy specialized AI assistants",
    emoji: "🤗",
    color: "from-cyan-600 to-blue-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: Heart,
    title: "Music Melodies & Lessons GPT",
    description: "Ultimate musical companion for learning instruments, vocals, songwriting with step-by-step guidance",
    emoji: "🎵",
    color: "from-purple-600 to-pink-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: Star,
    title: "Sophia Aeterna",
    description: "Embodies timeless wisdom, guiding seekers through philosophy, mysticism, and esotericism",
    emoji: "⭐",
    color: "from-gold-500 to-amber-600",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: Zap,
    title: "Groq",
    description: "Choose between Mistral and Llama LLMs - free, fast and efficient, comparable to GPT 3.5 Turbo",
    emoji: "⚡",
    color: "from-green-700 to-emerald-800",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: Radio,
    title: "Suno AI Music Generator",
    description: "Top text-to-music generator - provide a theme and create amazing songs instantly",
    emoji: "🎧",
    color: "from-purple-700 to-indigo-800",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: Layers,
    title: "Meshy AI",
    description: "Turn text and images into captivating 3D assets in under a minute",
    emoji: "🎲",
    color: "from-orange-600 to-red-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: Bot,
    title: "BotSonic",
    description: "Build and deploy your own bots for your website effortlessly - no coding knowledge needed",
    emoji: "🤖",
    color: "from-cyan-600 to-blue-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: MessageSquare,
    title: "Mistral",
    description: "Comparable to GPT-4 and Claude 2, powerful free chatbot with advanced capabilities",
    emoji: "💬",
    color: "from-blue-600 to-purple-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: Video,
    title: "Music Video Maker Studio",
    description: "Full-blown music video & production creative suite - transform yourself into a cinematic star",
    emoji: "🎬",
    color: "from-red-600 to-pink-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: Play,
    title: "PixVerse AI",
    description: "Create animations from images - bring any image to life effortlessly and for free",
    emoji: "▶️",
    color: "from-green-600 to-teal-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: Database,
    title: "Labs.Google",
    description: "Expansive suite of AI-powered tools for creativity, learning, and productivity",
    emoji: "🧪",
    color: "from-blue-700 to-indigo-800",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: Users,
    title: "Hey Gen",
    description: "AI video generation with Avatar customization, talking photos, and text-to-image capabilities",
    emoji: "👋",
    color: "from-purple-600 to-pink-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: Video,
    title: "Sora",
    description: "Groundbreaking AI model by OpenAI that transforms text into highly realistic videos",
    emoji: "🎥",
    color: "from-orange-600 to-red-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: Building,
    title: "Build AI",
    description: "Build your own AI enhanced applications effortlessly by simply describing them",
    emoji: "🏗️",
    color: "from-cyan-600 to-blue-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: BookOpen,
    title: "Children's Picture Book Maker",
    description: "Create magical picture books for children with AI-powered illustrations and narratives",
    emoji: "📚",
    color: "from-green-600 to-emerald-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: Film,
    title: "Movie Scene Maker GPT",
    description: "Transform yourself into a movie star and create stunning personalized movie scenes",
    emoji: "🎬",
    color: "from-red-600 to-pink-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];
