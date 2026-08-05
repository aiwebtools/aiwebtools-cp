import { Tool } from "@/types/tools";
import { 
  Brain, Globe, Video, Music, Image, FileText, Code, Cpu, 
  MessageSquare, Zap, Camera, Headphones, Palette, Monitor,
  Wand2, Gamepad2, Building, Shield, Phone, Users, Database,
  BarChart3, Layers, Settings, ChartBar, Globe2, Briefcase,
  Calendar, Search, Download, Upload, Play, Edit3, Sparkles
} from "lucide-react";

export const additionalPopularTools2025: Tool[] = [
  {
    icon: Video,
    title: "Kling AI",
    description: "Advanced Chinese AI video generation platform that competes with Sora. Creates high-quality, realistic videos from text prompts with impressive motion and scene understanding.",
    emoji: "🎬",
    imageUrl: "/src/assets/tools/kling-ai-hero.jpg",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://klingai.com/h5-app/invitation?code=7BVDK88SKFUS",
    tags: ["video generation", "AI video", "Chinese AI", "Sora competitor", "text-to-video"],
    category: "Video & Multimedia Tools",
    rating: 4.5,
    totalVotes: 2890
  },
  {
    icon: Video,
    title: "RunwayML Gen-3 Text-to-Video",
    description: "Runway's latest Gen-3 video generation model that creates professional-quality videos from text descriptions. Advanced motion control and video editing capabilities.",
    emoji: "🎯",
    imageUrl: "/src/assets/tools/runwayml-gen3-hero.jpg",
    color: "from-green-500 to-teal-600",
    directUrl: "https://runwayml.com/?via=aiwebtools",
    tags: ["video generation", "RunwayML", "Gen-3", "professional video", "motion control"],
    category: "Video & Multimedia Tools",
    rating: 4.6,
    totalVotes: 3245
  },
  {
    icon: Video,
    title: "HotShot Text-to-Video Generator",
    description: "AI-powered video generation platform that creates engaging video content from text prompts. Specializes in social media and marketing video content.",
    emoji: "🔥",
    imageUrl: "/src/assets/tools/hotshot-hero.jpg",
    color: "from-red-500 to-orange-600",
    directUrl: "https://hotshot.co/?via=aiwebtools",
    tags: ["video generation", "social media", "marketing videos", "text-to-video", "content creation"],
    category: "Video & Multimedia Tools",
    rating: 4.3,
    totalVotes: 1956
  },
  {
    icon: Music,
    title: "MiniMax Video & Music Generator",
    description: "Comprehensive AI platform for generating both video and music content. Chinese Sora competitor with excellent video generation and music creation capabilities.",
    emoji: "🎵",
    imageUrl: "/src/assets/tools/minimax-hero.jpg",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://api.minimax.chat/?via=aiwebtools",
    tags: ["video generation", "music generation", "MiniMax", "Chinese AI", "multimedia creation"],
    category: "Video & Multimedia Tools",
    rating: 4.4,
    totalVotes: 2134
  },
  {
    icon: Users,
    title: "BHuman (Personalized Video)",
    description: "AI platform that creates personalized videos at scale using AI avatars and voice cloning. Perfect for marketing, sales, and customer engagement.",
    emoji: "👥",
    color: "from-indigo-500 to-blue-600",
    directUrl: "https://bhuman.ai/?via=aiwebtools",
    tags: ["personalized video", "AI avatars", "voice cloning", "marketing", "sales videos"],
    category: "Video & Multimedia Tools",
    rating: 4.5,
    totalVotes: 2678
  },
  {
    icon: ChartBar,
    title: "LMSYS Chatbot Arena",
    description: "Platform for comparing and ranking different AI language models through anonymous battles. Community-driven evaluation of AI chatbots and language models.",
    emoji: "⚔️",
    color: "from-yellow-500 to-red-600",
    directUrl: "https://chat.lmsys.org/?via=aiwebtools",
    tags: ["AI comparison", "language models", "chatbot evaluation", "AI ranking", "community platform"],
    category: "AI Research & Comparison",
    rating: 4.7,
    totalVotes: 3456
  },
  {
    icon: Cpu,
    title: "ChatRTX (NVIDIA)",
    description: "NVIDIA's local AI assistant that runs entirely on your RTX GPU. Chat with your documents, files, and data while maintaining complete privacy.",
    emoji: "🖥️",
    color: "from-green-500 to-emerald-600",
    directUrl: "https://www.nvidia.com/en-us/ai-on-rtx/chatrtx/?via=aiwebtools",
    tags: ["local AI", "NVIDIA", "RTX GPU", "privacy", "document chat", "offline AI"],
    category: "Local AI Solutions",
    rating: 4.4,
    totalVotes: 2234
  },
  {
    icon: Shield,
    title: "Cheatlayer Project Atlas",
    description: "AI automation platform that uses natural language to create complex automation workflows. No-code solution for building sophisticated AI agents and automations.",
    emoji: "🛡️",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://cheatlayer.com/?via=aiwebtools",
    tags: ["AI automation", "no-code", "workflow automation", "AI agents", "natural language"],
    category: "Automation & Workflow Tools",
    rating: 4.2,
    totalVotes: 1789
  },
  {
    icon: Globe2,
    title: "10Web Website Generator",
    description: "AI-powered website builder that creates professional WordPress websites in minutes. Includes hosting, optimization, and AI content generation.",
    emoji: "🌐",
    color: "from-purple-500 to-indigo-600",
    directUrl: "https://10web.io/?via=aiwebtools",
    tags: ["website builder", "WordPress", "AI websites", "hosting", "optimization"],
    category: "Web Development Tools",
    rating: 4.3,
    totalVotes: 2567
  },
  {
    icon: Settings,
    title: "MAKE Automations",
    description: "Visual automation platform that connects apps and services to create powerful workflows. Drag-and-drop interface for complex integrations and automation.",
    emoji: "⚙️",
    color: "from-orange-500 to-red-600",
    directUrl: "https://make.com/?via=aiwebtools",
    tags: ["automation", "workflow", "integrations", "visual builder", "app connections"],
    category: "Automation & Workflow Tools",
    rating: 4.5,
    totalVotes: 3123
  },
  {
    icon: Download,
    title: "Pinokio.Computer",
    description: "One-click installer for AI applications and models. Easily install and run various AI tools, models, and applications on your local machine.",
    emoji: "📦",
    color: "from-teal-500 to-green-600",
    directUrl: "https://pinokio.computer/?via=aiwebtools",
    tags: ["AI installer", "local AI", "one-click install", "AI models", "desktop applications"],
    category: "Local AI Solutions",
    rating: 4.1,
    totalVotes: 1456
  },
  {
    icon: Brain,
    title: "Anything LLM",
    description: "Open-source alternative to ChatGPT that you can run locally. Private, customizable AI assistant that works with your documents and data.",
    emoji: "🧠",
    color: "from-indigo-500 to-purple-600",
    directUrl: "https://anythingllm.com/?via=aiwebtools",
    tags: ["open source", "local AI", "privacy", "document chat", "customizable AI"],
    category: "Local AI Solutions",
    rating: 4.6,
    totalVotes: 2789
  }
];