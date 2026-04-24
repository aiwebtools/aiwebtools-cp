
import { Tool } from "@/types/tools";
import { 
  Brain, Zap, MessageSquare, FileText, Image, Video, Music, 
  Code, Database, Shield, TrendingUp, Users, Briefcase, 
  Camera, Mic, Palette, Globe, Search, Bot, Cpu, 
  BarChart, PieChart, Activity, Target, Layers, Settings,
  Lightbulb, Rocket, Star, Heart, Clock, Filter,
  Edit, Wand2, Sparkles, BookOpen, GraduationCap, Building,
  Headphones, Eye, Scissors, Smartphone, Pen, Map
} from "lucide-react";

import writesonicHero from "@/assets/tools/writesonic-hero.jpg";
import rytrHero from "@/assets/tools/rytr-hero.jpg";
import contentbotHero from "@/assets/tools/contentbot-hero.jpg";
import artbreederHero from "@/assets/tools/artbreeder-hero.jpg";
import nightcafeHero from "@/assets/tools/nightcafe-hero.jpg";
import photosonicHero from "@/assets/tools/photosonic-hero.jpg";
import fotorAiHero from "@/assets/tools/fotor-ai-hero.jpg";
import pictoryHero from "@/assets/tools/pictory-hero.jpg";
import lumen5Hero from "@/assets/tools/lumen5-hero.jpg";
import invideoAiHero from "@/assets/tools/invideo-ai-hero.jpg";
import murfAiHero from "@/assets/tools/murf-ai-hero.jpg";
import resembleAiHero from "@/assets/tools/resemble-ai-hero.jpg";
import aivaHero from "@/assets/tools/aiva-hero.jpg";
import amperMusicHero from "@/assets/tools/amper-music-hero.jpg";
import tabnineHero from "@/assets/tools/tabnine-hero.jpg";
import codet5Hero from "@/assets/tools/codet5-hero.jpg";
import codexOpenaiHero from "@/assets/tools/codex-openai-hero.jpg";
import notionAiHero from "@/assets/tools/notion-ai-hero.jpg";
import originPilotOsHero from "@/assets/tools/origin-pilot-os-hero.jpg";
import seeleAiHero from "@/assets/tools/seele-ai-hero.jpg";
import otterAiHero from "@/assets/tools/otter-ai-hero.jpg";
import firefliesAiHero from "@/assets/tools/fireflies-ai-hero.jpg";

export const moreRealAITools: Tool[] = [
  // AI Writing & Content Tools
  {
    icon: FileText,
    title: "Writesonic",
    description: "AI writing platform for creating marketing copy, blog posts, ads, and product descriptions.",
    emoji: "✍️",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://writesonic.com/?via=aiwebtools",
    imageUrl: writesonicHero,
    tags: ["writing", "marketing copy", "blog posts", "content creation", "copywriting"],
    category: "Content Creation",
    rating: 4.5,
    totalVotes: 4567
  },
  {
    icon: FileText,
    title: "Rytr",
    description: "AI writing assistant that helps create high-quality content for blogs, emails, and ads.",
    emoji: "📝",
    color: "from-green-500 to-blue-600",
    directUrl: "https://rytr.me/?via=aiwebtools",
    imageUrl: rytrHero,
    tags: ["writing assistant", "content creation", "blogs", "emails", "marketing"],
    category: "Content Creation",
    rating: 4.3,
    totalVotes: 3421
  },
  {
    icon: Pen,
    title: "ContentBot",
    description: "AI content automation platform for creating blog posts, marketing content, and social media posts.",
    emoji: "🤖",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://contentbot.ai/?via=aiwebtools",
    imageUrl: contentbotHero,
    tags: ["content automation", "blog posts", "social media", "marketing", "AI writing"],
    category: "Content Creation",
    rating: 4.2,
    totalVotes: 2134
  },
  // AI Image & Art Tools
  {
    icon: Image,
    title: "Artbreeder",
    description: "Collaborative AI tool for creating and evolving images through genetic algorithms.",
    emoji: "🎨",
    color: "from-pink-500 to-purple-600",
    directUrl: "https://artbreeder.com/?via=aiwebtools",
    imageUrl: artbreederHero,
    tags: ["AI art", "image evolution", "collaborative creation", "genetic algorithms", "creativity"],
    category: "AI Image Generation",
    rating: 4.4,
    totalVotes: 5678
  },
  {
    icon: Palette,
    title: "NightCafe",
    description: "AI art generator with multiple algorithms for creating unique artwork from text prompts.",
    emoji: "🌙",
    color: "from-indigo-500 to-purple-600",
    directUrl: "https://creator.nightcafe.studio/?via=aiwebtools",
    imageUrl: nightcafeHero,
    tags: ["AI art", "neural networks", "text-to-image", "art generation", "creativity"],
    category: "AI Image Generation",
    rating: 4.3,
    totalVotes: 4321
  },
  {
    icon: Wand2,
    title: "Photosonic",
    description: "AI image generator that creates stunning artwork and photos from text descriptions.",
    emoji: "📸",
    color: "from-orange-500 to-red-600",
    directUrl: "https://photosonic.writesonic.com/?via=aiwebtools",
    imageUrl: photosonicHero,
    tags: ["image generation", "AI photos", "text-to-image", "artwork", "visual content"],
    category: "AI Image Generation",
    rating: 4.2,
    totalVotes: 3456
  },
  {
    icon: Camera,
    title: "Fotor AI",
    description: "AI-powered photo editing platform with automatic enhancement and creative filters.",
    emoji: "📷",
    color: "from-blue-500 to-green-600",
    directUrl: "https://fotor.com/?via=aiwebtools",
    imageUrl: fotorAiHero,
    tags: ["photo editing", "AI enhancement", "filters", "image processing", "photography"],
    category: "Image Editing",
    rating: 4.4,
    totalVotes: 6789
  },
  // AI Video Tools
  {
    icon: Video,
    title: "Pictory",
    description: "AI video creation platform that turns scripts and blog posts into engaging videos.",
    emoji: "🎬",
    color: "from-red-500 to-pink-600",
    directUrl: "https://pictory.ai/?via=aiwebtools",
    imageUrl: pictoryHero,
    tags: ["video creation", "script-to-video", "AI video", "content marketing", "automation"],
    category: "Video Generation",
    rating: 4.5,
    totalVotes: 5432
  },
  {
    icon: Video,
    title: "Lumen5",
    description: "AI-powered video creation platform for turning blog posts into engaging videos.",
    emoji: "🎥",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://lumen5.com/?via=aiwebtools",
    imageUrl: lumen5Hero,
    tags: ["video creation", "blog-to-video", "social media videos", "AI automation", "marketing"],
    category: "Video Generation",
    rating: 4.3,
    totalVotes: 4567
  },
  {
    icon: Scissors,
    title: "InVideo AI",
    description: "AI video editor that creates professional videos from text prompts and templates.",
    emoji: "✂️",
    color: "from-green-500 to-teal-600",
    directUrl: "https://invideo.io/?via=aiwebtools",
    imageUrl: invideoAiHero,
    tags: ["video editing", "AI templates", "text-to-video", "professional videos", "automation"],
    category: "Video Editing",
    rating: 4.4,
    totalVotes: 7890
  },
  // AI Audio & Voice Tools
  {
    icon: Mic,
    title: "Murf AI",
    description: "AI voice generator with realistic voices for voiceovers, podcasts, and presentations.",
    emoji: "🎤",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://get.murf.ai/1uvb0e8dznua",
    imageUrl: murfAiHero,
    tags: ["voice generation", "text-to-speech", "voiceovers", "podcasts", "AI voices"],
    category: "Audio & Voice",
    rating: 4.6,
    totalVotes: 6543
  },
  {
    icon: Headphones,
    title: "Resemble AI",
    description: "AI voice cloning platform for creating custom synthetic voices from audio samples.",
    emoji: "🎧",
    color: "from-green-500 to-blue-600",
    directUrl: "https://resemble.ai/?via=aiwebtools",
    imageUrl: resembleAiHero,
    tags: ["voice cloning", "synthetic voices", "audio generation", "personalization", "AI audio"],
    category: "Audio & Voice",
    rating: 4.5,
    totalVotes: 4321
  },
  {
    icon: Music,
    title: "AIVA",
    description: "AI composer that creates original music for films, games, and commercials.",
    emoji: "🎼",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://aiva.ai/?via=aiwebtools",
    imageUrl: aivaHero,
    tags: ["AI composer", "music generation", "film music", "game music", "original compositions"],
    category: "Audio & Music",
    rating: 4.4,
    totalVotes: 3789
  },
  {
    icon: Music,
    title: "Amper Music",
    description: "AI music composition platform for creating royalty-free music for content creators.",
    emoji: "🎵",
    color: "from-orange-500 to-red-600",
    directUrl: "https://ampermusic.com/?via=aiwebtools",
    imageUrl: amperMusicHero,
    tags: ["music composition", "royalty-free music", "content creation", "AI composer", "background music"],
    category: "Audio & Music",
    rating: 4.2,
    totalVotes: 2456
  },
  // AI Coding & Development Tools
  {
    icon: Code,
    title: "Tabnine",
    description: "AI code completion tool that predicts and suggests code across multiple programming languages.",
    emoji: "💻",
    color: "from-blue-500 to-green-600",
    directUrl: "https://tabnine.com/?via=aiwebtools",
    imageUrl: tabnineHero,
    tags: ["code completion", "programming", "AI coding", "development", "autocomplete"],
    category: "Developer Tools",
    rating: 4.6,
    totalVotes: 8901
  },
  {
    icon: Bot,
    title: "CodeT5+",
    description: "Advanced AI model for code understanding, generation, and documentation.",
    emoji: "🤖",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://huggingface.co/Salesforce/codet5p-16b/?via=aiwebtools",
    imageUrl: codet5Hero,
    tags: ["code generation", "programming AI", "code understanding", "documentation", "developer tools"],
    category: "Developer Tools",
    rating: 4.4,
    totalVotes: 3456
  },
  {
    icon: Code,
    title: "Codex by OpenAI",
    description: "AI system that translates natural language to code and powers GitHub Copilot.",
    emoji: "⚡",
    color: "from-green-500 to-blue-600",
    directUrl: "https://openai.com/blog/openai-codex/?via=aiwebtools",
    imageUrl: codexOpenaiHero,
    tags: ["code generation", "natural language to code", "programming AI", "OpenAI", "developer tools"],
    category: "Developer Tools",
    rating: 4.7,
    totalVotes: 9876
  },
  // AI Business & Productivity Tools
  {
    icon: Briefcase,
    title: "Notion AI",
    description: "AI-powered writing and brainstorming assistant integrated into Notion workspace.",
    emoji: "📊",
    color: "from-gray-500 to-blue-600",
    directUrl: "https://notion.so/product/ai/?via=aiwebtools",
    imageUrl: notionAiHero,
    tags: ["productivity", "writing assistant", "brainstorming", "workspace", "organization"],
    category: "Productivity",
    rating: 4.5,
    totalVotes: 7654
  },
  {
    icon: TrendingUp,
    title: "Otter.ai",
    description: "AI meeting assistant that transcribes, summarizes, and analyzes conversations.",
    emoji: "🦦",
    color: "from-blue-400 to-cyan-600",
    directUrl: "https://otter.ai/?via=aiwebtools",
    imageUrl: otterAiHero,
    tags: ["meeting transcription", "AI notes", "conversation analysis", "productivity", "collaboration"],
    category: "Productivity",
    rating: 4.6,
    totalVotes: 8765
  },
  {
    icon: Users,
    title: "Fireflies.ai",
    description: "AI meeting assistant that records, transcribes, and searches voice conversations.",
    emoji: "🔥",
    color: "from-orange-500 to-red-600",
    directUrl: "https://fireflies.ai/?via=aiwebtools",
    imageUrl: firefliesAiHero,
    tags: ["meeting recording", "transcription", "conversation search", "team collaboration", "AI assistant"],
    category: "Productivity",
    rating: 4.4,
    totalVotes: 5432
  },
  // AI Design Tools
  {
    icon: Layers,
    title: "Uizard",
    description: "AI-powered design tool that transforms wireframes and sketches into digital designs.",
    emoji: "🎨",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://uizard.io/?via=aiwebtools",
    tags: ["design automation", "wireframes", "UI design", "prototyping", "AI design"],
    category: "Design Tools",
    rating: 4.3,
    totalVotes: 4321
  },
  {
    icon: Palette,
    title: "Khroma",
    description: "AI color tool that learns your preferences and generates infinite color palettes.",
    emoji: "🌈",
    color: "from-rainbow-500 to-rainbow-600",
    directUrl: "https://khroma.co/?via=aiwebtools",
    tags: ["color palettes", "design tools", "AI color", "personalization", "creativity"],
    category: "Design Tools",
    rating: 4.2,
    totalVotes: 3456
  },
  {
    icon: Wand2,
    title: "LOOKA Ai Logo & Brand Designer",
    description: "AI-powered platform that simplifies designing logos and building brand identities for businesses. Creates professional logos, brand kits, marketing materials, business cards, and social profiles with AI assistance.",
    emoji: "✨",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://looka.grsm.io/aiwebtools",
    tags: ["logo design", "brand identity", "AI design", "business branding", "brand kit", "marketing materials", "logo generator", "logo maker", "create logo", "ai logo", "brand logo"],
    category: "Design Tools",
    rating: 4.4,
    totalVotes: 6789
  },
  // AI Research & Analysis Tools
  {
    icon: Search,
    title: "Semantic Scholar",
    description: "AI-powered research tool for finding and understanding scientific literature.",
    emoji: "🔍",
    color: "from-blue-500 to-green-600",
    directUrl: "https://semanticscholar.org/?via=aiwebtools",
    tags: ["research", "scientific literature", "academic search", "AI analysis", "knowledge discovery"],
    category: "Research & Analysis",
    rating: 4.6,
    totalVotes: 5678
  },
  {
    icon: Brain,
    title: "Consensus",
    description: "AI-powered research engine that finds answers from scientific papers.",
    emoji: "🧠",
    color: "from-green-500 to-blue-600",
    directUrl: "https://consensus.app/?via=aiwebtools",
    tags: ["research", "scientific papers", "AI search", "evidence-based answers", "academic research"],
    category: "Research & Analysis",
    rating: 4.5,
    totalVotes: 4321
  },
  {
    icon: BarChart,
    title: "DataRobot",
    description: "Enterprise AI platform for automated machine learning and predictive analytics.",
    emoji: "📊",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://datarobot.com/?via=aiwebtools",
    tags: ["machine learning", "predictive analytics", "enterprise AI", "data science", "automation"],
    category: "Data Analytics",
    rating: 4.7,
    totalVotes: 3456
  },
  // AI Language & Translation Tools
  {
    icon: Globe,
    title: "Reverso",
    description: "AI-powered translation and language learning platform with context examples.",
    emoji: "🌍",
    color: "from-blue-500 to-green-600",
    directUrl: "https://reverso.net/?via=aiwebtools",
    tags: ["translation", "language learning", "context examples", "AI translation", "multilingual"],
    category: "Language & Translation",
    rating: 4.4,
    totalVotes: 6543
  },
  {
    icon: MessageSquare,
    title: "Lingoda AI",
    description: "AI-powered language learning platform with personalized lessons and practice.",
    emoji: "💬",
    color: "from-orange-500 to-red-600",
    directUrl: "https://lingoda.com/?via=aiwebtools",
    tags: ["language learning", "personalized lessons", "AI tutor", "conversation practice", "multilingual"],
    category: "Education & Learning",
    rating: 4.3,
    totalVotes: 4567
  },
  // AI Customer Service Tools
  {
    icon: Bot,
    title: "Zendesk Answer Bot",
    description: "AI-powered customer service bot that provides instant answers to customer questions.",
    emoji: "🤖",
    color: "from-green-500 to-blue-600",
    directUrl: "https://zendesk.com/answer-bot/?via=aiwebtools",
    tags: ["customer service", "chatbot", "automated support", "help desk", "AI assistant"],
    category: "Customer Service",
    rating: 4.4,
    totalVotes: 5432
  },
  {
    icon: MessageSquare,
    title: "LivePerson",
    description: "AI-powered conversational platform for customer engagement and support.",
    emoji: "💬",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://liveperson.com/?via=aiwebtools",
    tags: ["conversational AI", "customer engagement", "live chat", "automated support", "messaging"],
    category: "Customer Service",
    rating: 4.3,
    totalVotes: 4321
  },
  // AI Marketing Tools
  {
    icon: Target,
    title: "Persado",
    description: "AI platform that generates marketing language to maximize customer engagement.",
    emoji: "🎯",
    color: "from-red-500 to-pink-600",
    directUrl: "https://persado.com/?via=aiwebtools",
    tags: ["marketing language", "customer engagement", "AI copywriting", "optimization", "personalization"],
    category: "Marketing Tools",
    rating: 4.5,
    totalVotes: 3456
  },
  {
    icon: TrendingUp,
    title: "Phrasee",
    description: "AI copywriting tool that optimizes email subject lines and marketing copy.",
    emoji: "📈",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://phrasee.co/?via=aiwebtools",
    tags: ["email marketing", "copywriting", "optimization", "A/B testing", "marketing automation"],
    category: "Marketing Tools",
    rating: 4.4,
    totalVotes: 2789
  },
  // AI Healthcare Tools - Babylon Health removed
  {
    icon: Activity,
    title: "Ada Health",
    description: "AI-powered symptom assessment and health guidance platform.",
    emoji: "🩺",
    color: "from-blue-500 to-green-600",
    directUrl: "https://ada.com/?via=aiwebtools",
    tags: ["symptom checker", "health guidance", "AI diagnosis", "medical AI", "healthcare"],
    category: "Healthcare",
    rating: 4.3,
    totalVotes: 4567
  },
  // AI Finance Tools
  {
    icon: TrendingUp,
    title: "Kensho",
    description: "AI analytics platform for financial markets and investment research.",
    emoji: "💹",
    color: "from-green-500 to-blue-600",
    directUrl: "https://kensho.com/?via=aiwebtools",
    tags: ["financial analytics", "investment research", "market analysis", "AI finance", "trading"],
    category: "Financial Tools",
    rating: 4.6,
    totalVotes: 2345
  },
  {
    icon: BarChart,
    title: "Yodlee",
    description: "AI-powered financial data analytics and personal finance management.",
    emoji: "📊",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://yodlee.com/?via=aiwebtools",
    tags: ["financial data", "personal finance", "analytics", "money management", "AI insights"],
    category: "Financial Tools",
    rating: 4.4,
    totalVotes: 3456
  },
  // AI Security Tools
  {
    icon: Shield,
    title: "CrowdStrike Falcon",
    description: "AI-powered cybersecurity platform for threat detection and response.",
    emoji: "🛡️",
    color: "from-red-500 to-orange-600",
    directUrl: "https://crowdstrike.com/?via=aiwebtools",
    tags: ["cybersecurity", "threat detection", "AI security", "endpoint protection", "incident response"],
    category: "Security & Privacy",
    rating: 4.7,
    totalVotes: 4567
  },
  {
    icon: Eye,
    title: "Abnormal Security",
    description: "AI-powered email security platform that detects and prevents advanced threats.",
    emoji: "👁️",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://abnormalsecurity.com/?via=aiwebtools",
    tags: ["email security", "threat prevention", "AI protection", "phishing detection", "cybersecurity"],
    category: "Security & Privacy",
    rating: 4.5,
    totalVotes: 2345
  },
  // AI E-commerce Tools
  {
    icon: Briefcase,
    title: "Algolia",
    description: "AI-powered search and discovery platform for e-commerce and applications.",
    emoji: "🔍",
    color: "from-blue-500 to-teal-600",
    directUrl: "https://algolia.com/?via=aiwebtools",
    tags: ["search platform", "e-commerce search", "AI discovery", "personalization", "recommendations"],
    category: "E-commerce",
    rating: 4.6,
    totalVotes: 5678
  },
  {
    icon: Target,
    title: "Dynamic Yield",
    description: "AI-powered personalization platform for e-commerce and digital experiences.",
    emoji: "🎯",
    color: "from-orange-500 to-red-600",
    directUrl: "https://dynamicyield.com/?via=aiwebtools",
    tags: ["personalization", "e-commerce optimization", "AI recommendations", "customer experience", "conversion optimization"],
    category: "E-commerce",
    rating: 4.4,
    totalVotes: 3456
  },
  // AI Social Media Tools
  {
    icon: Users,
    title: "Hootsuite Insights",
    description: "AI-powered social media analytics and listening platform.",
    emoji: "👥",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://hootsuite.com/products/insights/?via=aiwebtools",
    tags: ["social media analytics", "social listening", "AI insights", "brand monitoring", "sentiment analysis"],
    category: "Social Media",
    rating: 4.3,
    totalVotes: 4567
  },
  {
    icon: MessageSquare,
    title: "Sprout Social",
    description: "AI-powered social media management and customer care platform.",
    emoji: "🌱",
    color: "from-green-500 to-blue-600",
    directUrl: "https://sproutsocial.com/?via=aiwebtools",
    tags: ["social media management", "customer care", "AI automation", "social listening", "engagement"],
    category: "Social Media",
    rating: 4.4,
    totalVotes: 5432
  },
  // AI HR & Recruitment Tools
  {
    icon: Users,
    title: "HireVue",
    description: "AI-powered video interviewing and assessment platform for recruitment.",
    emoji: "👔",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://hirevue.com/?via=aiwebtools",
    tags: ["video interviewing", "recruitment", "AI assessment", "talent acquisition", "hiring"],
    category: "HR & Recruitment",
    rating: 4.2,
    totalVotes: 3456
  },
  {
    icon: Search,
    title: "Entelo",
    description: "AI-powered talent acquisition platform for finding and engaging candidates.",
    emoji: "🔍",
    color: "from-green-500 to-blue-600",
    directUrl: "https://entelo.com/?via=aiwebtools",
    tags: ["talent acquisition", "candidate sourcing", "AI recruitment", "hiring", "workforce planning"],
    category: "HR & Recruitment",
    rating: 4.3,
    totalVotes: 2789
  },
  // AI Education Tools
  {
    icon: BookOpen,
    title: "Squirrel AI",
    description: "AI-powered adaptive learning system for personalized education.",
    emoji: "🐿️",
    color: "from-orange-500 to-red-600",
    directUrl: "https://squirrelai.com/?via=aiwebtools",
    tags: ["adaptive learning", "personalized education", "AI tutoring", "student assessment", "learning analytics"],
    category: "Education & Learning",
    rating: 4.3,
    totalVotes: 3456
  },
  // AI Real Estate Tools
  {
    icon: Building,
    title: "Zillow Zestimate",
    description: "AI-powered home valuation tool that estimates property values.",
    emoji: "🏠",
    color: "from-blue-500 to-green-600",
    directUrl: "https://zillow.com/zestimate/?via=aiwebtools",
    tags: ["property valuation", "real estate", "AI estimation", "home values", "market analysis"],
    category: "Real Estate",
    rating: 4.2,
    totalVotes: 6789
  },
  {
    icon: Map,
    title: "Compass Concierge",
    description: "AI-powered real estate platform with market insights and property recommendations.",
    emoji: "🧭",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://compass.com/?via=aiwebtools",
    tags: ["real estate platform", "market insights", "property recommendations", "AI analysis", "home buying"],
    category: "Real Estate",
    rating: 4.1,
    totalVotes: 2345
  },
  // AI Legal Tools
  {
    icon: FileText,
    title: "Kira Systems",
    description: "AI-powered contract analysis and due diligence platform for legal professionals.",
    emoji: "⚖️",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://kirasystems.com/?via=aiwebtools",
    tags: ["contract analysis", "due diligence", "legal AI", "document review", "law firm technology"],
    category: "Legal Tools",
    rating: 4.5,
    totalVotes: 2345
  },
  {
    icon: Search,
    title: "Ross Intelligence",
    description: "AI-powered legal research platform that understands natural language queries.",
    emoji: "🔍",
    color: "from-green-500 to-blue-600",
    directUrl: "https://rossintelligence.com/?via=aiwebtools",
    tags: ["legal research", "natural language processing", "case law", "legal AI", "law firm technology"],
    category: "Legal Tools",
    rating: 4.4,
    totalVotes: 1876
  },
  // AI Agriculture Tools
  {
    icon: Eye,
    title: "Taranis",
    description: "AI-powered agricultural intelligence platform for crop monitoring and yield prediction.",
    emoji: "👁️",
    color: "from-blue-500 to-green-600",
    directUrl: "https://taranis.com/?via=aiwebtools",
    tags: ["agricultural intelligence", "crop monitoring", "yield prediction", "AI farming", "precision agriculture"],
    category: "Agriculture",
    rating: 4.2,
    totalVotes: 987
  },
  // AI Gaming Tools
  {
    icon: Target,
    title: "🎲 AI Dungeon",
    description: "AI-powered text adventure game with infinite storytelling possibilities.",
    emoji: "🎲",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://aidungeon.io/?via=aiwebtools",
    tags: ["text adventure", "interactive fiction", "AI storytelling", "gaming", "creative writing"],
    category: "Gaming & Entertainment",
    rating: 4.1,
    totalVotes: 5432
  },
  {
    icon: Bot,
    title: "Modl.ai",
    description: "AI platform for creating intelligent NPCs and game characters.",
    emoji: "🤖",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://modl.ai/?via=aiwebtools",
    tags: ["game AI", "NPCs", "game development", "character AI", "interactive gaming"],
    category: "Gaming & Entertainment",
    rating: 4.0,
    totalVotes: 2345
  },
  // AI Wellness & Fitness Tools
  {
    icon: Heart,
    title: "Noom",
    description: "AI-powered weight loss and wellness coaching app with personalized plans.",
    emoji: "💚",
    color: "from-green-500 to-blue-600",
    directUrl: "https://noom.com/?via=aiwebtools",
    tags: ["weight loss", "wellness coaching", "AI coaching", "health tracking", "lifestyle"],
    category: "Health & Wellness",
    rating: 4.2,
    totalVotes: 7890
  },
  {
    icon: Activity,
    title: "MyFitnessPal AI",
    description: "AI-powered nutrition tracking and meal planning application.",
    emoji: "📱",
    color: "from-blue-500 to-green-600",
    directUrl: "https://myfitnesspal.com/?via=aiwebtools",
    tags: ["nutrition tracking", "meal planning", "AI nutrition", "fitness tracking", "health"],
    category: "Health & Wellness",
    rating: 4.3,
    totalVotes: 9876
  },
  // AI Travel Tools
  {
    icon: Map,
    title: "Hopper",
    description: "AI-powered travel app that predicts flight and hotel prices.",
    emoji: "✈️",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://hopper.com/?via=aiwebtools",
    tags: ["travel planning", "price prediction", "flight booking", "hotel booking", "AI travel"],
    category: "Travel & Transportation",
    rating: 4.4,
    totalVotes: 6543
  },
  {
    icon: Globe,
    title: "Mezi",
    description: "AI travel assistant that helps plan and book personalized trips.",
    emoji: "🌍",
    color: "from-green-500 to-blue-600",
    directUrl: "https://mezi.com/?via=aiwebtools",
    tags: ["travel assistant", "trip planning", "personalized travel", "AI concierge", "travel booking"],
    category: "Travel & Transportation",
    rating: 4.2,
    totalVotes: 3456
  },
  // AI News & Information Tools
  {
    icon: FileText,
    title: "Summari",
    description: "AI-powered news summarization tool that creates brief summaries of articles.",
    emoji: "📰",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://chatgpt.com/g/g-683e55bf739c8191983241faaf028062-summari",
    tags: ["news summarization", "article summary", "AI reading", "information digest", "content curation"],
    category: "News & Information",
    rating: 4.1,
    totalVotes: 2345
  },
  {
    icon: Search,
    title: "Ground News",
    description: "AI-powered news platform that shows bias and coverage across different sources.",
    emoji: "🗞️",
    color: "from-orange-500 to-red-600",
    directUrl: "https://ground.news/?via=aiwebtools",
    tags: ["news analysis", "bias detection", "media coverage", "AI journalism", "fact checking"],
    category: "News & Information",
    rating: 4.3,
    totalVotes: 4567
  },
  // AI Photography Tools
  {
    icon: Camera,
    title: "Luminar AI",
    description: "AI-powered photo editing software with intelligent enhancement features.",
    emoji: "📸",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://skylum.com/luminar-ai/?via=aiwebtools",
    tags: ["photo editing", "AI enhancement", "photography", "image processing", "creative editing"],
    category: "Photography",
    rating: 4.4,
    totalVotes: 5432
  },
  {
    icon: Wand2,
    title: "Topaz Labs",
    description: "AI-powered photo enhancement software for noise reduction and upscaling.",
    emoji: "✨",
    color: "from-blue-500 to-green-600",
    directUrl: "https://topazlabs.com/",
    tags: ["photo enhancement", "noise reduction", "image upscaling", "AI photography", "image quality"],
    category: "Photography",
    rating: 4.5,
    totalVotes: 4321
  },
  // AI Mobile Apps
  {
    icon: Smartphone,
    title: "ELSA Speak",
    description: "AI-powered English pronunciation coach mobile app.",
    emoji: "📱",
    color: "from-green-500 to-blue-600",
    directUrl: "https://elsaspeak.com/?via=aiwebtools",
    tags: ["pronunciation coach", "English learning", "AI tutor", "language learning", "speech recognition"],
    category: "Mobile Apps",
    rating: 4.3,
    totalVotes: 6789
  },
  {
    icon: Brain,
    title: "Socratic by Google",
    description: "AI-powered homework helper app that explains concepts across subjects.",
    emoji: "🧠",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://socratic.org/?via=aiwebtools",
    tags: ["homework help", "AI tutor", "education app", "concept explanation", "study assistance"],
    category: "Mobile Apps",
    rating: 4.4,
    totalVotes: 8765
  },
  // AI Automation Platforms
  {
    icon: Settings,
    title: "UiPath",
    description: "AI-powered robotic process automation platform for business workflows.",
    emoji: "⚙️",
    color: "from-orange-500 to-red-600",
    directUrl: "https://uipath.com/?via=aiwebtools",
    tags: ["process automation", "RPA", "workflow automation", "business automation", "AI robotics"],
    category: "Automation",
    rating: 4.5,
    totalVotes: 4567
  },
  {
    icon: Zap,
    title: "Blue Prism",
    description: "AI-enhanced robotic process automation platform for enterprise automation.",
    emoji: "⚡",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://blueprism.com/?via=aiwebtools",
    tags: ["enterprise automation", "RPA", "intelligent automation", "business processes", "AI workflows"],
    category: "Automation",
    rating: 4.4,
    totalVotes: 3456
  },
  {
    icon: Cpu,
    title: "Origin Pilot OS",
    description: "Origin Pilot is China's first independently developed quantum computer operating system, created by Origin Quantum. Launched for public download, it serves as the operations and scheduling hub for quantum computers—unifying multi-architecture quantum hardware, connecting to cloud and applications, and orchestrating with HPC, AI, and classical computing for stable, scalable quantum services. Origin Pilot integrates with the WuKong superconducting quantum computer and supports quantum circuit design, algorithm development, and quantum-classical hybrid computing workflows. It significantly lowers the barrier for quantum computing development and research.",
    emoji: "⚛️",
    color: "from-blue-700 to-cyan-500",
    directUrl: "https://originqc.com.cn/en/?via=aiwebtools",
    imageUrl: originPilotOsHero,
    tags: ["quantum computing", "quantum OS", "operating system", "Origin Quantum", "WuKong", "quantum processor", "quantum development", "quantum programming", "quantum circuits", "HPC", "quantum cloud", "China quantum", "open source quantum"],
    category: "AI Development & Platforms",
    rating: 4.7,
    totalVotes: 3890
  },
  {
    icon: Sparkles,
    title: "Seele AI",
    description: "Seele AI is the world's best AI game generator that lets you build any 2D or 3D game just by chatting. Turn text into playable games instantly with this no-code AI game maker—describe your game concept and watch it come to life. Seele generates complete game worlds including sprites, 3D models, animations, audio, and game logic from simple text prompts. Export your creations to Unity, Three.js, or Unreal Engine. Supporting FPS, racing, simulation, RPG, and more genres, Seele AI democratizes game development for creators of all skill levels.",
    emoji: "🎮",
    color: "from-purple-600 to-pink-500",
    directUrl: "https://www.seeles.ai/?via=aiwebtools",
    imageUrl: seeleAiHero,
    tags: ["AI game maker", "no-code game development", "game generator", "text to game", "3D game creation", "2D game creation", "Unity export", "Unreal Engine", "game design", "indie game development", "AI game engine", "prompt to game"],
    category: "Gaming & Entertainment",
    rating: 4.8,
    totalVotes: 5120
  }
];

console.log(`🚀 Added ${moreRealAITools.length} more real AI tools to the database`);
