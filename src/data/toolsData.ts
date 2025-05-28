import { BookOpen, Film, Clock, Car, GraduationCap, Shield, Leaf, Zap, Search, Home, Fish, Sprout, Gem, Eye, Brain, Heart, Scale, Calculator, Code, Gamepad2, CreditCard, Users, Palette as PaletteIcon, Video, History, FileText, Settings, Globe, Rocket, Cpu, Building, Headphones, UserSearch, Presentation, DollarSign, HandHeart, PaintBucket, Target, PenTool, Camera, Star, MessageSquare, Mountain, Brush, Phone, Bot, Database, Play, Radio, Layers, Gavel, Activity, Link, Music, Clapperboard, Zap as Lightning } from "lucide-react";
import { Tool } from "@/types/tools";

export const featuredTools: Tool[] = [
  {
    icon: BookOpen,
    title: "Book Writer GPT",
    description: "Create professionally written full books about any topic",
    emoji: "✍️",
    color: "from-blue-500 to-purple-600",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["writing", "books", "literature", "publishing", "creative"]
  },
  {
    icon: Film,
    title: "Movie Script Writer GPT",
    description: "AI companion for industry-standard movie scripts and storytelling",
    emoji: "🎬",
    color: "from-red-500 to-pink-600",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["writing", "movies", "scripts", "entertainment", "storytelling"]
  },
  {
    icon: Clock,
    title: "Time Machine GPT",
    description: "Explore the past, potential futures, and alternative realities",
    emoji: "🌀",
    color: "from-cyan-500 to-blue-600",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["history", "time", "exploration", "education", "science"]
  },
  {
    icon: Car,
    title: "Automobile GPT",
    description: "Comprehensive automotive expert for deals, repairs, and maintenance advice",
    emoji: "🏎️",
    color: "from-orange-500 to-red-600",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["automotive", "cars", "maintenance", "repair", "transportation"]
  },
  {
    icon: GraduationCap,
    title: "College Degree GPT",
    description: "Complete college education experience with accessible learning resources",
    emoji: "🎓",
    color: "from-green-500 to-teal-600",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["education", "college", "learning", "degree", "academic"]
  },
  {
    icon: Shield,
    title: "Survivalist GPT",
    description: "Comprehensive survival companion with practical knowledge and experience",
    emoji: "🛡️",
    color: "from-gray-500 to-slate-600",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["survival", "outdoor", "emergency", "preparedness", "skills"]
  }
];

export const allTools: Tool[] = [
  ...featuredTools,
  {
    icon: Activity,
    title: "Mental Wellness GPT (CBT)",
    description: "Virtual chat tool for emotional support and mental well-being, offering empathetic guidance rooted in cognitive behavioral therapy (CBT) principles",
    emoji: "🧠",
    color: "from-green-600 to-teal-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["mental health", "wellness", "therapy", "CBT", "emotional support", "psychology"]
  },
  {
    icon: Link,
    title: "Legislator Link GPT",
    description: "AI tool to help you easily connect with legislators in your state or country and get involved in local legislative efforts",
    emoji: "🏛️",
    color: "from-blue-600 to-indigo-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["politics", "government", "legislation", "democracy", "civic engagement"]
  },
  {
    icon: Music,
    title: "MiniMax Video & Music Generator",
    description: "Creating Music Videos for your promotions has never been easier",
    emoji: "🎵",
    color: "from-purple-600 to-pink-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["music", "video", "generation", "promotion", "creative", "marketing"]
  },
  {
    icon: Clapperboard,
    title: "KLING (Chinese Sora) Video Generator",
    description: "China's version of OpenAI's Sora, generates high-quality videos up to two minutes long from text",
    emoji: "🎬",
    color: "from-red-600 to-orange-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["video", "generation", "AI", "text-to-video", "sora", "creative"]
  },
  {
    icon: Video,
    title: "RunwayML Text to Video Generator",
    description: "Gen 3 is our personal favorite text-to-video generation platform",
    emoji: "🎥",
    color: "from-green-600 to-blue-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["video", "generation", "AI", "text-to-video", "runway", "creative"]
  },
  {
    icon: Lightning,
    title: "Luma Dream Machine - Text to Video",
    description: "A mirror and a map leaves the soul intact - advanced text to video generation",
    emoji: "⚡",
    color: "from-yellow-600 to-orange-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["video", "generation", "AI", "text-to-video", "creative", "dreams"]
  },
  {
    icon: Video,
    title: "HotShot Text-to-Video Generator",
    description: "Cutting-edge AI-powered text-to-video generation tool designed to streamline content creation",
    emoji: "🔥",
    color: "from-red-600 to-pink-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["video", "generation", "AI", "text-to-video", "content creation", "creative"]
  },
  {
    icon: Leaf,
    title: "Sustainable Futures GPT",
    description: "Assist governments and communities in making data-driven decisions for environmental sustainability",
    emoji: "🌍",
    color: "from-green-600 to-emerald-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["environment", "sustainability", "government", "data", "green", "ecology"]
  },
  {
    icon: Zap,
    title: "Nikola Tesla GPT",
    description: "Investigate scientific mysteries and craft groundbreaking theories with innovative brilliance",
    emoji: "⚡",
    color: "from-purple-600 to-indigo-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["science", "invention", "electricity", "innovation", "research", "genius"]
  },
  {
    icon: Search,
    title: "Food Quality Inspector GPT",
    description: "Smart companion for grocery shopping, assessing food quality and safety",
    emoji: "🛒",
    color: "from-yellow-500 to-orange-600",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["food", "quality", "safety", "inspection", "grocery", "health"]
  },
  {
    icon: Eye,
    title: "Snoop Image AI",
    description: "Tool for verifying image authenticity, analyzing whether images are likely real or AI-generated with Snoop Dogg style",
    emoji: "👁️",
    color: "from-purple-600 to-indigo-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["image", "verification", "authenticity", "AI detection", "analysis", "security"]
  },
  {
    icon: Gavel,
    title: "Legal Draftsmith GPT",
    description: "Specializes in the precise drafting of legal documents with expert AI assistance",
    emoji: "⚖️",
    color: "from-gray-700 to-slate-800",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["legal", "law", "documents", "drafting", "contracts", "justice"]
  },
  {
    icon: Video,
    title: "InVideo AI",
    description: "Ultimate video creation tool for crafting professional videos accessible to everyone",
    emoji: "🎥",
    color: "from-red-600 to-pink-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["video", "creation", "professional", "editing", "marketing", "content"]
  },
  {
    icon: Bot,
    title: "Grok 3",
    description: "Advanced AI developed by X.AI with enhanced conversational capabilities",
    emoji: "🤖",
    color: "from-blue-600 to-cyan-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["AI", "chatbot", "conversation", "advanced", "X.AI", "communication"]
  },
  {
    icon: Cpu,
    title: "BIG-AGI",
    description: "Innovative AI suite making cutting-edge artificial intelligence accessible to professionals and developers",
    emoji: "💻",
    color: "from-purple-700 to-indigo-800",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["AI", "development", "professional", "suite", "cutting-edge", "technology"]
  },
  {
    icon: MessageSquare,
    title: "ChatRTX by NVIDIA",
    description: "Personalize a GPT model with your own content, requires RTX 30/40 series GPU with 8GB+ VRAM",
    emoji: "💬",
    color: "from-green-600 to-emerald-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["AI", "chatbot", "NVIDIA", "GPU", "personalization", "local"]
  },
  {
    icon: Brain,
    title: "GPT Ideas Assistant",
    description: "AI assistant for generating and organizing creative GPT ideas and instructions",
    emoji: "💡",
    color: "from-yellow-600 to-orange-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["AI", "ideas", "creativity", "brainstorming", "organization", "GPT"]
  },
  {
    icon: Phone,
    title: "Freedom GPT (Phone Call GPT)",
    description: "Deploy AI phone agents with advanced conversational capabilities for business automation",
    emoji: "📞",
    color: "from-blue-700 to-indigo-800",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["AI", "phone", "automation", "business", "conversation", "agents"]
  },
  {
    icon: Rocket,
    title: "Cheatlayer Project Atlas (BETA)",
    description: "Advanced automation platform for creating complex workflows and business processes",
    emoji: "🚀",
    color: "from-orange-600 to-red-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["automation", "workflow", "business", "processes", "productivity", "beta"]
  },
  {
    icon: Users,
    title: "Hugging Face Chat",
    description: "Access various large language models without paid membership and deploy specialized AI assistants",
    emoji: "🤗",
    color: "from-cyan-600 to-blue-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["AI", "language models", "chat", "free", "community", "assistants"]
  },
  {
    icon: Heart,
    title: "Music Melodies & Lessons GPT",
    description: "Ultimate musical companion for learning instruments, vocals, songwriting with step-by-step guidance",
    emoji: "🎵",
    color: "from-purple-600 to-pink-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["music", "learning", "instruments", "vocals", "education", "songwriting"]
  },
  {
    icon: Star,
    title: "Sophia Aeterna",
    description: "Embodies timeless wisdom, guiding seekers through philosophy, mysticism, and esotericism",
    emoji: "⭐",
    color: "from-gold-500 to-amber-600",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["wisdom", "philosophy", "mysticism", "spirituality", "guidance", "enlightenment"]
  },
  {
    icon: Zap,
    title: "Groq",
    description: "Choose between Mistral and Llama LLMs - free, fast and efficient, comparable to GPT 3.5 Turbo",
    emoji: "⚡",
    color: "from-green-700 to-emerald-800",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["AI", "language models", "fast", "efficient", "free", "LLM"]
  },
  {
    icon: Radio,
    title: "Suno AI Music Generator",
    description: "Top text-to-music generator - provide a theme and create amazing songs instantly",
    emoji: "🎧",
    color: "from-purple-700 to-indigo-800",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["music", "generation", "AI", "text-to-music", "songs", "creative"]
  },
  {
    icon: Layers,
    title: "Meshy AI",
    description: "Turn text and images into captivating 3D assets in under a minute",
    emoji: "🎲",
    color: "from-orange-600 to-red-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["3D", "modeling", "assets", "text-to-3D", "images", "design"]
  },
  {
    icon: Bot,
    title: "BotSonic",
    description: "Build and deploy your own bots for your website effortlessly - no coding knowledge needed",
    emoji: "🤖",
    color: "from-cyan-600 to-blue-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["bots", "website", "no-code", "deployment", "automation", "chatbots"]
  },
  {
    icon: MessageSquare,
    title: "Mistral",
    description: "Comparable to GPT-4 and Claude 2, powerful free chatbot with advanced capabilities",
    emoji: "💬",
    color: "from-blue-600 to-purple-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["AI", "chatbot", "free", "advanced", "conversation", "language model"]
  },
  {
    icon: Video,
    title: "Music Video Maker Studio",
    description: "Full-blown music video & production creative suite - transform yourself into a cinematic star",
    emoji: "🎬",
    color: "from-red-600 to-pink-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["music video", "production", "creative", "cinematic", "video editing", "entertainment"]
  },
  {
    icon: Play,
    title: "PixVerse AI",
    description: "Create animations from images - bring any image to life effortlessly and for free",
    emoji: "▶️",
    color: "from-green-600 to-teal-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["animation", "images", "AI", "free", "video", "creative"]
  },
  {
    icon: Database,
    title: "Labs.Google",
    description: "Expansive suite of AI-powered tools for creativity, learning, and productivity",
    emoji: "🧪",
    color: "from-blue-700 to-indigo-800",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["Google", "AI tools", "creativity", "learning", "productivity", "experimental"]
  },
  {
    icon: Users,
    title: "Hey Gen",
    description: "AI video generation with Avatar customization, talking photos, and text-to-image capabilities",
    emoji: "👋",
    color: "from-purple-600 to-pink-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["AI", "video generation", "avatar", "photos", "text-to-image", "personalization"]
  },
  {
    icon: Video,
    title: "Sora",
    description: "Groundbreaking AI model by OpenAI that transforms text into highly realistic videos",
    emoji: "🎥",
    color: "from-orange-600 to-red-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["AI", "video generation", "OpenAI", "text-to-video", "realistic", "groundbreaking"]
  },
  {
    icon: Building,
    title: "Build AI",
    description: "Build your own AI enhanced applications effortlessly by simply describing them",
    emoji: "🏗️",
    color: "from-cyan-600 to-blue-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["AI", "applications", "building", "development", "no-code", "description"]
  },
  {
    icon: BookOpen,
    title: "Children's Picture Book Maker",
    description: "Create magical picture books for children with AI-powered illustrations and narratives",
    emoji: "📚",
    color: "from-green-600 to-emerald-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["children", "books", "illustrations", "storytelling", "education", "creative"]
  },
  {
    icon: Film,
    title: "Movie Scene Maker GPT",
    description: "Transform yourself into a movie star and create stunning personalized movie scenes",
    emoji: "🎬",
    color: "from-red-600 to-pink-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["movies", "scenes", "personalization", "entertainment", "creative", "video"]
  }
];

// Enhanced search functionality
export const searchTools = (tools: Tool[], searchTerm: string): Tool[] => {
  if (!searchTerm.trim()) return tools;
  
  const normalizedSearch = searchTerm.toLowerCase().trim();
  
  // Define related keywords for better search matching
  const relatedKeywords: { [key: string]: string[] } = {
    science: ["research", "experiment", "data", "analysis", "scientific", "innovation", "technology", "discovery"],
    education: ["learning", "teaching", "academic", "study", "course", "lesson", "school", "university", "college"],
    business: ["finance", "marketing", "sales", "productivity", "automation", "workflow", "professional", "enterprise"],
    creative: ["art", "design", "music", "video", "writing", "storytelling", "illustration", "animation"],
    health: ["wellness", "medical", "therapy", "mental", "fitness", "nutrition", "healthcare"],
    technology: ["AI", "machine learning", "software", "programming", "development", "digital", "tech"],
    finance: ["money", "investment", "trading", "banking", "cryptocurrency", "economics", "valuation"],
    legal: ["law", "contract", "compliance", "regulation", "justice", "court", "attorney"],
    entertainment: ["games", "movies", "music", "fun", "recreation", "media", "streaming"],
    communication: ["chat", "messaging", "social", "networking", "conversation", "discussion"]
  };
  
  return tools.filter(tool => {
    // Direct matches in title and description
    const titleMatch = tool.title.toLowerCase().includes(normalizedSearch);
    const descriptionMatch = tool.description.toLowerCase().includes(normalizedSearch);
    
    // Tag matches
    const tagMatch = tool.tags?.some(tag => tag.toLowerCase().includes(normalizedSearch));
    
    // Related keyword matches
    const relatedMatch = Object.entries(relatedKeywords).some(([category, keywords]) => {
      if (normalizedSearch.includes(category) || category.includes(normalizedSearch)) {
        return keywords.some(keyword => 
          tool.title.toLowerCase().includes(keyword) || 
          tool.description.toLowerCase().includes(keyword) ||
          tool.tags?.some(tag => tag.toLowerCase().includes(keyword))
        );
      }
      return keywords.some(keyword => {
        if (normalizedSearch.includes(keyword) || keyword.includes(normalizedSearch)) {
          return tool.tags?.some(tag => tag.toLowerCase().includes(category)) ||
                 tool.title.toLowerCase().includes(category) ||
                 tool.description.toLowerCase().includes(category);
        }
        return false;
      });
    });
    
    return titleMatch || descriptionMatch || tagMatch || relatedMatch;
  });
};
