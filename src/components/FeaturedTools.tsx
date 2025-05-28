import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Film, Clock, Car, GraduationCap, Shield, Theater, Heart, Music, Beaker, Gavel, Palette, Search, Leaf, Zap, Brain, Home, Fish, Sprout, Gem, Camera, Gamepad2, Calculator, Globe, TrendingUp, Stethoscope, Scale, Briefcase, PenTool, Code, Utensils, Brush, Phone, DollarSign, Dna, Binary, Star, Eye, FileText, Hammer, Award, CreditCard, Users, Palette as PaletteIcon, Video, Rocket, Cpu, Settings, Target, Building, Headphones, UserSearch, Presentation, HandHeart, History, PaintBucket, Microscope, Mountain, Mic, Play, Bot, Radio, Headphones as HeadphonesIcon, MessageSquare, Wand2, Layers, Database, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const featuredTools = [
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

const allTools = [
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
    icon: Home,
    title: "Home Renovator GPT",
    description: "AI-powered home improvement assistant for repairs and renovations",
    emoji: "🏡",
    color: "from-brown-500 to-orange-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: Fish,
    title: "Fisherman GPT",
    description: "Expert virtual fishing assistant for finding spots, gear, and regulations",
    emoji: "🎣",
    color: "from-blue-600 to-cyan-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: Sprout,
    title: "Agronomus",
    description: "AI Farming Expert for agricultural guidance and crop optimization",
    emoji: "🌱",
    color: "from-green-700 to-lime-600",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: Gem,
    title: "Antique & Collectible Appraisal GPT",
    description: "Expert appraisals and valuations of antiques, collectibles, and coins",
    emoji: "💎",
    color: "from-purple-700 to-pink-600",
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
    icon: Brain,
    title: "Trivia Night GPT",
    description: "AI-powered trivia showdown for friends and family",
    emoji: "🧠",
    color: "from-indigo-600 to-purple-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: Heart,
    title: "Veterinarian GPT",
    description: "Compassionate virtual veterinarian offering expert pet health advice",
    emoji: "🐾",
    color: "from-pink-600 to-red-600",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: Shield,
    title: "Insurance Claims GPT",
    description: "Advanced claims management and estimation with detailed damage analysis",
    emoji: "🔒",
    color: "from-blue-700 to-indigo-800",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: Leaf,
    title: "Cannabis GPT",
    description: "Multimodal AI for legal cannabis users, growers, and professionals",
    emoji: "🌿",
    color: "from-green-600 to-teal-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: Scale,
    title: "Probability GPT",
    description: "Discover truth with precise probability scores and unbiased analysis",
    emoji: "⚖️",
    color: "from-gray-600 to-slate-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: BookOpen,
    title: "Learn Any Course GPT",
    description: "AI-powered tutor for comprehensive courses on any subject",
    emoji: "📚",
    color: "from-blue-600 to-cyan-600",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: Gavel,
    title: "Public Defender GPT",
    description: "Advanced legal assistant for defense research and trial strategy",
    emoji: "⚖️",
    color: "from-gray-800 to-blue-900",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: Home,
    title: "Property Data Finder GPT",
    description: "Precise property information from market value to geocoordinates",
    emoji: "🏠",
    color: "from-orange-600 to-red-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: Calculator,
    title: "Algebraic Expression Inventor GPT",
    description: "Tackle mathematical challenges with creativity and precision",
    emoji: "🔢",
    color: "from-purple-600 to-indigo-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: Code,
    title: "Bolt.New",
    description: "AI-powered web development platform for full-stack applications",
    emoji: "⚡",
    color: "from-cyan-600 to-blue-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: Gamepad2,
    title: "Multitasker GPT",
    description: "Handle multiple unrelated tasks simultaneously with efficiency",
    emoji: "🎯",
    color: "from-red-600 to-pink-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: CreditCard,
    title: "Predictive Credit Score Checker GPT",
    description: "AI tool for estimating creditworthiness based on specific addresses with data-backed credit score estimates",
    emoji: "💳",
    color: "from-blue-700 to-indigo-800",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: Users,
    title: "Name Insight Predictor",
    description: "Discover hidden meanings in your name through history, numerology, and culture with AI-driven insights",
    emoji: "📝",
    color: "from-purple-600 to-pink-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: PaletteIcon,
    title: "Coloring Book Generator GPT",
    description: "Creates full coloring books from your imagination with custom designs and themes",
    emoji: "🎨",
    color: "from-orange-500 to-red-600",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: Video,
    title: "PIKA LABS",
    description: "Text to video generation platform with lip sync and sound effects capabilities",
    emoji: "🎬",
    color: "from-cyan-600 to-blue-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: History,
    title: "Native American History Time Machine",
    description: "Immersive time travel adventure through Native American history with authentic stories and cultures",
    emoji: "🏛️",
    color: "from-amber-600 to-orange-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: FileText,
    title: "Public Testimony Writer GPT",
    description: "Streamlines legislative testimony process and promotes public engagement in local policy",
    emoji: "📜",
    color: "from-gray-600 to-slate-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: Settings,
    title: "MAKE AUTOMATIONS",
    description: "Create automation workflows with an all-in-one platform trusted by over 500,000 makers",
    emoji: "⚙️",
    color: "from-green-600 to-teal-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: Shield,
    title: "Cyber Security GPT",
    description: "Deploy defense mechanisms and strategies to mitigate infrastructure attacks and cyber threats",
    emoji: "🔐",
    color: "from-red-600 to-pink-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: Globe,
    title: "10Web",
    description: "AI-powered website builder that clones websites and converts them into WordPress sites",
    emoji: "🌐",
    color: "from-blue-600 to-purple-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: Rocket,
    title: "Startup Validator GPT",
    description: "AI-powered startup analysis tool for assessing market viability, scalability, and investment potential",
    emoji: "🚀",
    color: "from-orange-600 to-red-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: Cpu,
    title: "PINOKIO.COMPUTER",
    description: "Install and run multiple AI applications locally on your computer with ease",
    emoji: "💻",
    color: "from-gray-700 to-slate-800",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: Video,
    title: "RUNWAY ML",
    description: "Create videos from text descriptions and images with cutting-edge AI video generation",
    emoji: "🎥",
    color: "from-purple-700 to-indigo-800",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: Users,
    title: "Synthesia",
    description: "Premier AI video generation platform with 140+ lifelike AI avatars for dynamic content",
    emoji: "👥",
    color: "from-cyan-700 to-blue-800",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: Building,
    title: "Business Plan Generator GPT",
    description: "AI-driven tool creating tailored business plans with market analysis and financial projections",
    emoji: "💼",
    color: "from-green-700 to-emerald-800",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: Sprout,
    title: "Fungus Whisperer GPT",
    description: "Expert AI guide for mushroom cultivation, safe foraging, and creative culinary uses of fungi",
    emoji: "🍄",
    color: "from-amber-700 to-orange-800",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: Zap,
    title: "Drill Baby Drill AI Suite",
    description: "Cutting-edge collection of 10 specialized AI tools for oil and gas operations optimization",
    emoji: "⚡",
    color: "from-yellow-600 to-orange-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: Brain,
    title: "Dream Interpreter GPT",
    description: "Analyze and interpret dreams using psychological, mythological, and symbolic frameworks",
    emoji: "💭",
    color: "from-purple-600 to-indigo-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: Headphones,
    title: "Podcast Script Writer GPT",
    description: "Craft engaging, structured podcast scripts optimized for audio storytelling",
    emoji: "🎙️",
    color: "from-red-600 to-pink-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: UserSearch,
    title: "Person Information Finder GPT",
    description: "Uncover detailed public information about individuals through web and social media searches",
    emoji: "🔍",
    color: "from-blue-700 to-indigo-800",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: Presentation,
    title: "PPTx Maker GPT",
    description: "Create beautiful, detailed PowerPoint presentations with custom visuals and ready-to-download slides",
    emoji: "📊",
    color: "from-orange-600 to-red-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: FileText,
    title: "Grant Writer GPT",
    description: "Expert AI partner for crafting compelling, funder-ready grant proposals",
    emoji: "📝",
    color: "from-green-600 to-teal-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: DollarSign,
    title: "Universal Basic Income Strategist GPT",
    description: "Design sustainable UBI models with implementation roadmaps and economic analysis",
    emoji: "💰",
    color: "from-emerald-600 to-green-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: HandHeart,
    title: "Global Peace Restoration GPT",
    description: "AI-powered diplomatic tool for resolving complex global conflicts through structured negotiation",
    emoji: "🕊️",
    color: "from-blue-600 to-cyan-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: Gem,
    title: "Artwork & Vintage Appraisal GPT",
    description: "Expert AI for fast, accurate valuations of art, antiques, and collectibles with market data",
    emoji: "🎨",
    color: "from-purple-700 to-pink-800",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: Eye,
    title: "Uncovering Hidden Historical Patterns GPT",
    description: "Reveals suppressed truths and hidden power structures by analyzing symbolism and historical contradictions",
    emoji: "👁️",
    color: "from-gray-800 to-slate-900",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: PaintBucket,
    title: "Sketch Artist GPT",
    description: "AI-powered sketch art assistant turning images or descriptions into professional sketches",
    emoji: "✏️",
    color: "from-gray-600 to-slate-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: Target,
    title: "AI Tools Finder GPT",
    description: "Personal expert for locating the best AI tools with step-by-step guides for any AI tool",
    emoji: "🎯",
    color: "from-cyan-600 to-blue-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: PenTool,
    title: "Article and Blog Rewriter GPT",
    description: "Rewrite SEO optimized articles and blogs with enhanced content and improved structure",
    emoji: "📝",
    color: "from-green-600 to-emerald-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: Camera,
    title: "Midjourney 101",
    description: "Unlock the full potential of AI-generated art with comprehensive Midjourney tutorials",
    emoji: "📷",
    color: "from-purple-600 to-indigo-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: Star,
    title: "Gemini By Google",
    description: "Next generation AI with live streaming capabilities, real-time captions, and translations",
    emoji: "⭐",
    color: "from-blue-600 to-purple-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: Brain,
    title: "Claude 3.5 Sonnet",
    description: "Revolutionary AI with enhanced capabilities, 200K token context window, and superior reasoning",
    emoji: "🧠",
    color: "from-orange-600 to-red-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: Video,
    title: "Video Second-by-Second Analysis GPT",
    description: "Break down footage with precision, analyzing every second and extracting key visual frames",
    emoji: "🎬",
    color: "from-red-600 to-pink-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: Palette,
    title: "Ideogram AI",
    description: "Revolutionary text-in-image generation with unparalleled capabilities for logos and advertisements",
    emoji: "🎨",
    color: "from-pink-600 to-purple-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: Users,
    title: "BHUMAN",
    description: "Generate hyper-personalized video messages by cloning your face and voice for customer engagement",
    emoji: "👤",
    color: "from-cyan-600 to-blue-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: Cpu,
    title: "LM STUDIO",
    description: "Download and run hundreds of AI tools locally on your computer with no internet required",
    emoji: "💻",
    color: "from-gray-700 to-slate-800",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: Zap,
    title: "Merlin AI",
    description: "All-in-one AI extension powered by GPT-4, Claude, and Llama models for enhanced productivity",
    emoji: "⚡",
    color: "from-purple-600 to-indigo-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: Target,
    title: "LMSYS CHATBOT ARENA",
    description: "Dynamic platform for benchmarking language models through anonymous chatbot duels",
    emoji: "🏟️",
    color: "from-red-600 to-orange-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: Mountain,
    title: "Llama by META",
    description: "Open source AI model you can fine-tune, distill and deploy anywhere in 8B, 70B and 405B versions",
    emoji: "🦙",
    color: "from-blue-600 to-cyan-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: Brush,
    title: "MiddleJourney Prompt Enhancer",
    description: "Expert AI for optimizing Midjourney prompts and enhancing your creative experience",
    emoji: "🎨",
    color: "from-orange-600 to-pink-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    icon: Heart,
    title: "Mary Magdalene GPT",
    description: "Connect with Mary Magdalene to explore profound Gnostic divine secrets and hidden insights",
    emoji: "🕊️",
    color: "from-gold-500 to-amber-600",
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
    icon: Music,
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

const FeaturedTools = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter tools based on search term
  const filteredTools = allTools.filter(tool =>
    tool.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tool.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredFeaturedTools = featuredTools.filter(tool =>
    tool.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tool.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredGridTools = filteredTools.slice(6);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="bg-gradient-to-r from-ai-purple to-ai-blue bg-clip-text text-transparent">AI Tools</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover our most popular AI-powered tools designed to enhance your creative process
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search AI tools..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-ai-purple focus:ring-2 focus:ring-ai-purple/20 transition-all duration-300"
            />
          </div>
        </div>
        
        {/* Featured Tools Grid */}
        {filteredFeaturedTools.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredFeaturedTools.map((tool, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${tool.color} flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform duration-300`}>
                    {tool.emoji}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-ai-purple transition-colors">
                    {tool.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                    {tool.description}
                  </CardDescription>
                  {/* YouTube Video Embed */}
                  <div className="mb-4 rounded-lg overflow-hidden">
                    <iframe
                      width="100%"
                      height="200"
                      src={tool.videoUrl}
                      title={`${tool.title} Demo`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded-lg"
                    ></iframe>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-ai-purple to-ai-blue hover:from-ai-purple/80 hover:to-ai-blue/80 text-white transition-all duration-300 transform hover:scale-105">
                    Try Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* All Tools Section */}
        {filteredGridTools.length > 0 && (
          <>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">
                Complete <span className="bg-gradient-to-r from-ai-purple to-ai-blue bg-clip-text text-transparent">AI Tools Collection</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredGridTools.map((tool, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 bg-white/70 backdrop-blur-sm">
                  <CardHeader className="text-center pb-2">
                    <div className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-r ${tool.color} flex items-center justify-center text-white text-lg group-hover:scale-110 transition-transform duration-300`}>
                      {tool.emoji}
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-ai-purple transition-colors">
                      {tool.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-gray-600 mb-3 text-sm leading-relaxed">
                      {tool.description}
                    </CardDescription>
                    {/* Smaller YouTube Video Embed for grid items */}
                    <div className="mb-3 rounded overflow-hidden">
                      <iframe
                        width="100%"
                        height="120"
                        src={tool.videoUrl}
                        title={`${tool.title} Demo`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="rounded"
                      ></iframe>
                    </div>
                    <Button size="sm" className="w-full bg-gradient-to-r from-ai-purple to-ai-blue hover:from-ai-purple/80 hover:to-ai-blue/80 text-white transition-all duration-300 transform hover:scale-105">
                      Try Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}

        {/* No Results Message */}
        {searchTerm && filteredTools.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 text-xl mb-4">No AI tools found for "{searchTerm}"</div>
            <Button 
              onClick={() => setSearchTerm("")}
              variant="outline" 
              className="border-ai-purple text-ai-purple hover:bg-ai-purple hover:text-white"
            >
              Clear Search
            </Button>
          </div>
        )}
        
        {!searchTerm && (
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-ai-purple text-ai-purple hover:bg-ai-purple hover:text-white px-8 py-4 rounded-xl transition-all duration-300"
            >
              View All AI Tools
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedTools;
