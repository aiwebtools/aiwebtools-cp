import { BookOpen, Film, Clock, Car, GraduationCap, Shield, Leaf, Zap, Search, Home, Fish, Sprout, Gem, Eye, Brain, Heart, Scale, Calculator, Code, Gamepad2, CreditCard, Users, Palette, Video, History, FileText, Settings, Globe, Rocket, Cpu, Building, Headphones, UserSearch, Presentation, DollarSign, HandHeart, Paintbrush, Target, PenTool, Camera, Star, MessageSquare, Mountain, Brush, Phone, Bot, Database, Play, Radio, Layers, Gavel, Activity, Link, Music, Clapperboard, Mic, Monitor, Smartphone, Tablet, TrendingUp, TrendingDown, BarChart, PieChart, LineChart, Package, Truck, ShoppingBag, ShoppingCart, Banknote, Coins, Wallet, Receipt, FileSpreadsheet, Calculator as Calc, Briefcase, HardHat, Wrench, Hammer, Cog, Thermometer, Gauge, Ruler, Weight, Dumbbell, Apple, Utensils, Pizza, Coffee, Wine, Cake, Sandwich, Trees, Sun, Cloud, CloudRain, CloudSnow, Wind, Rainbow, Snowflake, Droplets, Waves, Plane, Ship, Bike, Bus, Ambulance, Fuel, Construction, Train, Lightbulb, Battery, Microscope, TestTube, Beaker, Atom, Magnet, Speaker, Mic as Microphone, Tv, Piano, Guitar, Music as Violin, Drum, Music as Trumpet, Stethoscope, PillBottle, Syringe, FlaskConical, BookOpenCheck, Briefcase as BusinessCase, Coins as Money, ShieldCheck, Cannabis, Crown, Flame, MapPin, TreePine, Sparkles, Wand2, Palette as Art, Camera as Photo, Gamepad, Hash, CheckCircle2, AlertTriangle, FileImage, Scissors, Newspaper, Megaphone, Award, Shirt as ShirtIcon, Gem as Crystal, Theater, Dna } from "lucide-react";
import { Tool } from "@/types/tools";

// Tool categories for organization with enhanced keywords
export const toolCategories = {
  "AI Assistants & Chatbots": ["chatbot", "AI", "assistant", "conversation", "language model", "GPT", "LLM", "bot", "chat", "artificial intelligence", "virtual assistant"],
  "Video Generation & Editing": ["video", "generation", "editing", "animation", "text-to-video", "movie", "film", "cinema", "visual", "multimedia", "studio", "production", "director", "scene", "commercial"],
  "Music & Audio": ["music", "audio", "generation", "sound", "voice", "song", "composition", "instrument", "vocal", "singing", "recording", "production", "studio", "album", "artist", "podcast", "radio"],
  "Writing & Content": ["writing", "content", "books", "scripts", "documents", "text", "literature", "author", "blog", "article", "newsletter", "grant", "copywriting", "screenplay"],
  "Education & Learning": ["education", "learning", "teaching", "academic", "study", "course", "training", "school", "university", "college", "curriculum", "lesson", "tutorial", "skill development"],
  "Business & Productivity": ["business", "productivity", "automation", "workflow", "professional", "enterprise", "management", "strategy", "leadership", "entrepreneurship", "startup", "planning"],
  "Creative & Design": ["creative", "design", "art", "illustration", "graphics", "visual", "aesthetic", "artistic", "logo", "branding", "tattoo", "comic", "coloring", "styling"],
  "Health & Wellness": ["health", "wellness", "medical", "therapy", "mental", "fitness", "healthcare", "doctor", "veterinary", "pharmaceutical", "spa", "skincare", "EMDR"],
  "Legal & Finance": ["legal", "law", "finance", "money", "investment", "contracts", "compliance", "trading", "taxes", "insurance", "accounting", "legislation"],
  "Technology & Development": ["technology", "development", "programming", "software", "coding", "tech", "AI", "cybersecurity", "3D printing", "engineering", "SaaS"],
  "Science & Research": ["science", "research", "data", "analysis", "scientific", "innovation", "discovery", "farming", "solar", "oil", "gas", "phenomenon", "alchemy"],
  "Entertainment & Gaming": ["entertainment", "gaming", "fun", "recreation", "games", "media", "streaming", "trivia", "roleplay", "celebrity", "fortune telling"],
  "Communication & Social": ["communication", "social", "messaging", "networking", "collaboration", "chat", "public", "testimony", "advocacy", "peace"],
  "Tools & Utilities": ["tools", "utilities", "practical", "helper", "generator", "converter", "calculator", "search", "shopping", "travel", "home renovation"],
  "Specialized Services": ["specialized", "professional", "expert", "consultation", "advisory", "guidance", "appraisal", "immortalization", "custom"]
};

export const featuredTools: Tool[] = [
  {
    icon: BookOpen,
    title: "Book Writer GPT",
    description: "Create professionally written full books about any topic with AI-powered assistance",
    emoji: "✍️",
    color: "from-blue-500 to-purple-600",
    videoUrl: "https://www.youtube.com/embed/xNQi8wuM3DQ",
    directUrl: "https://bookwritergpt.lovable.app/?via=aiwebtools",
    tags: ["writing", "books", "literature", "publishing", "creative", "author", "content creation"],
    category: "Writing & Content"
  },
  {
    icon: Film,
    title: "Movie Script Writer GPT",
    description: "AI companion for industry-standard movie scripts and professional storytelling",
    emoji: "🎬",
    color: "from-red-500 to-pink-600",
    videoUrl: "https://www.youtube.com/embed/4e3Rkurt3-c",
    directUrl: "https://moviescriptwritergpt.lovable.app/?via=aiwebtools",
    tags: ["writing", "movies", "scripts", "entertainment", "storytelling", "screenplay", "film"],
    category: "Writing & Content"
  },
  {
    icon: Clock,
    title: "Time Machine GPT",
    description: "Explore the past, potential futures, and alternative realities with AI guidance",
    emoji: "🌀",
    color: "from-cyan-500 to-blue-600",
    videoUrl: "https://www.youtube.com/embed/rXXScpdUWQo",
    directUrl: "https://time-machine-gpt.lovable.app/?via=aiwebtools",
    tags: ["history", "time", "exploration", "education", "science", "past", "future", "timeline"],
    category: "Education & Learning"
  },
  {
    icon: Car,
    title: "Automobile GPT",
    description: "Comprehensive automotive expert for deals, repairs, maintenance advice, and car knowledge",
    emoji: "🏎️",
    color: "from-orange-500 to-red-600",
    videoUrl: "https://www.youtube.com/embed/f_4aFnL-mk8",
    directUrl: "https://automobilegpt.lovable.app/?via=aiwebtools",
    tags: ["automotive", "cars", "maintenance", "repair", "transportation", "vehicles", "mechanic"],
    category: "Tools & Utilities"
  },
  {
    icon: GraduationCap,
    title: "College Degree GPT",
    description: "Complete college education experience with accessible learning resources and academic support",
    emoji: "🎓",
    color: "from-green-500 to-teal-600",
    videoUrl: "https://www.youtube.com/embed/Cd8uvD-smlM",
    directUrl: "https://college-degree-gpt.lovable.app/?via=aiwebtools",
    tags: ["education", "college", "learning", "degree", "academic", "university", "study", "curriculum"],
    category: "Education & Learning"
  },
  {
    icon: Shield,
    title: "Survivalist GPT",
    description: "Comprehensive survival companion with practical knowledge and outdoor experience guidance",
    emoji: "🛡️",
    color: "from-gray-500 to-slate-600",
    videoUrl: "https://www.youtube.com/embed/RX6W8KC0y18",
    directUrl: "https://survivalistgpt.lovable.app/?via=aiwebtools",
    tags: ["survival", "outdoor", "emergency", "preparedness", "skills", "wilderness", "safety"],
    category: "Tools & Utilities"
  }
];

export const allTools: Tool[] = [
  ...featuredTools,
  {
    icon: Bot,
    title: "AI Tools Expert GPT",
    description: "Master AI specialist providing expert guidance on all AI tools and technologies",
    emoji: "🤖",
    color: "from-blue-600 to-purple-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["AI", "expert", "tools", "guidance", "technology", "specialist", "consultation", "artificial intelligence", "machine learning"],
    category: "AI Assistants & Chatbots"
  },
  {
    icon: Video,
    title: "Movie Maker AI Studio",
    description: "Professional AI-powered movie creation studio for filmmakers and content creators",
    emoji: "🎬",
    color: "from-red-600 to-pink-700",
    videoUrl: "https://www.youtube.com/embed/Zdthelofv_E",
    directUrl: "https://moviemakerstudio.lovable.app/?via=aiwebtools",
    tags: ["movie", "studio", "filmmaking", "video", "production", "AI", "cinema", "video generation", "film production", "director", "visual effects"],
    category: "Video Generation & Editing"
  },
  {
    icon: FileText,
    title: "Insurance Claims GPT",
    description: "AI assistant for insurance claim processing, documentation, and professional guidance",
    emoji: "📋",
    color: "from-blue-500 to-indigo-600",
    videoUrl: "https://www.youtube.com/embed/WNPywJWOUzU",
    directUrl: "https://insuranceclaimsgpt.lovable.app/?via=aiwebtools",
    tags: ["insurance", "claims", "documentation", "legal", "finance", "professional", "processing"],
    category: "Legal & Finance"
  },
  {
    icon: Heart,
    title: "Veterinarian GPT",
    description: "Professional veterinary assistant for animal health, care guidance, and medical advice",
    emoji: "🐾",
    color: "from-green-600 to-emerald-700",
    videoUrl: "https://www.youtube.com/embed/ElAfvB0yLEI",
    directUrl: "https://petcaregpt.lovable.app/?via=aiwebtools",
    tags: ["veterinary", "animals", "pets", "health", "medical", "care", "advice", "vet"],
    category: "Health & Wellness"
  },
  {
    icon: Plane,
    title: "Travel Advisor GPT",
    description: "Expert travel planning assistant for destinations, itineraries, and travel optimization",
    emoji: "✈️",
    color: "from-cyan-500 to-blue-600",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-futuristic-setting-where-a-_3Mwmg.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    directUrl: "https://travelagentgpt.lovable.app/?via=aiwebtools",
    tags: ["travel", "vacation", "planning", "destinations", "tourism", "advisor", "trip"],
    category: "Tools & Utilities"
  },
  {
    icon: Users,
    title: "Social Services GPT",
    description: "Community support assistant for social services, welfare, and public assistance guidance",
    emoji: "🤝",
    color: "from-purple-500 to-indigo-600",
    videoUrl: "https://www.youtube.com/embed/pXXqMe97GDg",
    directUrl: "https://socialsafetynetgpt.lovable.app/?via=aiwebtools",
    tags: ["social", "services", "community", "support", "welfare", "assistance", "public"],
    category: "Communication & Social"
  },
  {
    icon: Cannabis,
    title: "Cannabis GPT",
    description: "Comprehensive cannabis education, cultivation, and industry guidance assistant",
    emoji: "🌿",
    color: "from-green-500 to-emerald-600",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-digital-illustration-of-a-green-cannab_iUjpW.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    directUrl: "https://cannabisgpt.lovable.app/?via=aiwebtools",
    tags: ["cannabis", "marijuana", "cultivation", "medical", "industry", "education"],
    category: "Health & Wellness"
  },
  {
    icon: ShieldCheck,
    title: "CyberSecurity GPT",
    description: "Advanced cybersecurity expert for threat analysis, protection strategies, and security audits",
    emoji: "🔒",
    color: "from-red-600 to-orange-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["cybersecurity", "security", "hacking", "protection", "privacy", "digital", "safety"],
    category: "Technology & Development"
  },
  {
    icon: Home,
    title: "Home Renovator GPT",
    description: "Professional home renovation guidance for construction, design, and improvement projects",
    emoji: "🏠",
    color: "from-yellow-500 to-orange-600",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-humanoid-robot-fixing-a-bathroom-.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    directUrl: "https://homerenovationgpt.lovable.app/?via=aiwebtools",
    tags: ["home", "renovation", "construction", "design", "improvement", "building", "DIY"],
    category: "Tools & Utilities"
  },
  {
    icon: Scale,
    title: "Public Defender GPT",
    description: "Legal assistance for public defense cases, criminal law guidance, and court preparation",
    emoji: "⚖️",
    color: "from-gray-600 to-slate-700",
    videoUrl: "https://www.youtube.com/embed/cQR5eFjsPWw",
    directUrl: "https://publicdefendergpt.lovable.app/",
    tags: ["legal", "defense", "criminal", "law", "court", "justice", "attorney"],
    category: "Legal & Finance"
  },
  {
    icon: Stethoscope,
    title: "Doctor GPT",
    description: "Medical consultation assistant for health guidance, symptoms analysis, and wellness advice",
    emoji: "👩‍⚕️",
    color: "from-blue-500 to-cyan-600",
    videoUrl: "https://www.youtube.com/embed/EKKIttUG0sI",
    directUrl: "https://aidoctorgpt.lovable.app/?via=aiwebtools",
    tags: ["medical", "doctor", "health", "diagnosis", "symptoms", "healthcare", "consultation"],
    category: "Health & Wellness"
  },
  {
    icon: Wine,
    title: "Mixologist GPT",
    description: "Professional bartending assistant for cocktails, drinks, and mixology expertise",
    emoji: "🍸",
    color: "from-purple-500 to-pink-600",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-modern-and-stylish-bartender-with.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    directUrl: "https://mixologistgpt.lovable.app/?via=aiwebtools",
    tags: ["cocktails", "bartending", "drinks", "mixology", "recipes", "alcohol", "bar"],
    category: "Entertainment & Gaming"
  },
  {
    icon: TrendingUp,
    title: "Trader GPT",
    description: "Financial trading assistant for market analysis, investment strategies, and trading guidance",
    emoji: "📈",
    color: "from-green-600 to-emerald-700",
    videoUrl: "https://www.youtube.com/embed/Izs80Fak4hQ",
    directUrl: "https://tradergpt.lovable.app/?via=aiwebtools",
    tags: ["trading", "finance", "stocks", "investment", "market", "cryptocurrency", "analysis"],
    category: "Legal & Finance"
  },
  {
    icon: PillBottle,
    title: "Pharmaceutical Assistant",
    description: "Medication guidance, drug interactions, and pharmaceutical knowledge assistant",
    emoji: "💊",
    color: "from-blue-600 to-indigo-700",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-professional-looking-pharmaceutical-assistan.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    directUrl: "https://rxai.lovable.app/?via=aiwebtools",
    tags: ["pharmaceutical", "medication", "drugs", "health", "pharmacy", "medicine"],
    category: "Health & Wellness"
  },
  {
    icon: Music,
    title: "Music Video Maker Studio",
    description: "AI-powered music video creation and production studio for artists",
    emoji: "🎵",
    color: "from-purple-600 to-pink-700",
    videoUrl: "https://www.youtube.com/embed/rBQTUrvHcR8",
    directUrl: "https://musicvideomakergpt.lovable.app/?via=aiwebtools",
    tags: ["music", "video", "studio", "production", "artist", "creation", "visual", "video generation"],
    category: "Video Generation & Editing"
  },
  {
    icon: Rocket,
    title: "Stellaris AI Space GPT",
    description: "Space exploration and strategy gaming assistant for Stellaris and space simulations",
    emoji: "🚀",
    color: "from-purple-600 to-indigo-700",
    videoUrl: "https://www.youtube.com/embed/tJwhDOE3mUM",
    directUrl: "https://stellaris.lovable.app/?via=aiwebtools",
    tags: ["space", "gaming", "strategy", "stellaris", "exploration", "simulation"],
    category: "Entertainment & Gaming"
  },
  {
    icon: Target,
    title: "Firearms Safety GPT",
    description: "Comprehensive firearms safety education, training, and responsible ownership guidance",
    emoji: "🎯",
    color: "from-red-500 to-orange-600",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-humanoid-shooting-a-gun-at-a-targ.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    directUrl: "https://firearmsafetyeducationgpt.lovable.app/?via=aiwebtools",
    tags: ["firearms", "safety", "training", "education", "responsibility", "security"],
    category: "Education & Learning"
  },
  {
    icon: Flame,
    title: "Firefighter's GPT",
    description: "Professional firefighting guidance, emergency response, and safety protocol assistant",
    emoji: "🚒",
    color: "from-red-600 to-yellow-500",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["firefighting", "emergency", "safety", "rescue", "response", "professional"],
    category: "Specialized Services"
  },
  {
    icon: Search,
    title: "Criminologist GPT",
    description: "Criminal investigation analysis, forensics guidance, and criminology expertise",
    emoji: "🔍",
    color: "from-gray-600 to-slate-700",
    videoUrl: "https://www.youtube.com/embed/jgvqpqmRJi8",
    directUrl: "https://criminologistgpt.lovable.app/?via=aiwebtools",
    tags: ["criminology", "investigation", "forensics", "crime", "analysis", "detective"],
    category: "Legal & Finance"
  },
  {
    icon: Calculator,
    title: "Taxes GPT",
    description: "Tax preparation assistance, deductions guidance, and financial tax planning",
    emoji: "💰",
    color: "from-green-500 to-blue-600",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["taxes", "finance", "accounting", "deductions", "IRS", "preparation"],
    category: "Legal & Finance"
  },
  {
    icon: Sun,
    title: "Solar Land Assessor GPT",
    description: "Solar energy assessment for land evaluation, renewable energy planning, and sustainability",
    emoji: "☀️",
    color: "from-yellow-500 to-orange-600",
    videoUrl: "https://www.youtube.com/embed/CEca8C2GIpY",
    directUrl: "https://solarlandgpt.lovable.app/?via=aiwebtools",
    tags: ["solar", "renewable", "energy", "assessment", "sustainability", "green"],
    category: "Science & Research"
  },
  {
    icon: Activity,
    title: "Mental Wellness GPT (CBT)",
    description: "Virtual chat tool for emotional support and mental well-being, offering empathetic guidance rooted in cognitive behavioral therapy (CBT) principles",
    emoji: "🧠",
    color: "from-green-600 to-teal-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["mental health", "wellness", "therapy", "CBT", "emotional support", "psychology", "mindfulness", "stress", "anxiety", "depression", "counseling", "self-care"],
    category: "Health & Wellness"
  },
  {
    icon: Zap,
    title: "Nikola Tesla Science GPT",
    description: "Electrical engineering and invention guidance inspired by Nikola Tesla's genius",
    emoji: "⚡",
    color: "from-blue-600 to-purple-700",
    videoUrl: "https://www.youtube.com/embed/DR_3MvP7Wws",
    directUrl: "https://teslaeinsteingpt.lovable.app/?via=aiwebtools",
    tags: ["tesla", "science", "electricity", "invention", "engineering", "physics", "innovation"],
    category: "Science & Research"
  },
  {
    icon: Brain,
    title: "EMDR Therapy Assistant",
    description: "Eye Movement Desensitization and Reprocessing therapy guidance and trauma support",
    emoji: "👁️",
    color: "from-purple-500 to-indigo-600",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["EMDR", "therapy", "trauma", "psychology", "healing", "mental health"],
    category: "Health & Wellness"
  },
  {
    icon: Eye,
    title: "Truth Seeker - Oraculum",
    description: "Truth analysis, fact verification, and wisdom guidance for seeking authentic information",
    emoji: "🔮",
    color: "from-cyan-500 to-purple-600",
    videoUrl: "https://www.youtube.com/embed/dUNrGNj8rhM",
    directUrl: "https://oraculum.lovable.app/?via=aiwebtools",
    tags: ["truth", "wisdom", "oracle", "verification", "analysis", "insight"],
    category: "Tools & Utilities"
  },
  {
    icon: Heart,
    title: "Marriage Mender GPT",
    description: "Relationship counseling and marriage guidance for couples therapy and communication",
    emoji: "💕",
    color: "from-pink-500 to-red-600",
    videoUrl: "https://www.youtube.com/embed/3HCv5_QldrU",
    directUrl: "https://marriagemendergpt.lovable.app/?via=aiwebtools",
    tags: ["marriage", "relationships", "counseling", "therapy", "couples", "communication"],
    category: "Health & Wellness"
  },
  {
    icon: Music,
    title: "Music Lessons GPT",
    description: "Comprehensive music education and instrument learning guidance",
    emoji: "🎼",
    color: "from-purple-600 to-blue-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["music", "lessons", "education", "instruments", "learning", "teaching"],
    category: "Education & Learning"
  },
  {
    icon: Sprout,
    title: "AI Farming Expert",
    description: "Agricultural expertise for farming optimization, crop management, and sustainable agriculture",
    emoji: "🌱",
    color: "from-green-600 to-emerald-700",
    videoUrl: "https://www.youtube.com/embed/fFbtPFkRERA",
    directUrl: "https://agronomus.lovable.app/?via=aiwebtools",
    tags: ["farming", "agriculture", "crops", "sustainable", "optimization", "cultivation"],
    category: "Science & Research"
  },
  {
    icon: ShirtIcon,
    title: "Virtual Stylist GPT",
    description: "Personal fashion styling, wardrobe consultation, and style guidance",
    emoji: "👗",
    color: "from-pink-500 to-purple-600",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["fashion", "styling", "wardrobe", "clothes", "style", "personal"],
    category: "Creative & Design"
  },
  {
    icon: Crystal,
    title: "Fortune Teller GPT",
    description: "Entertainment fortune telling and mystical guidance for fun and insight",
    emoji: "🔮",
    color: "from-purple-600 to-pink-700",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/an-advertisement-for-fortune-teller-gpt-_kRpji.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    directUrl: "https://fortunetellergpt.lovable.app/?via=aiwebtools",
    tags: ["fortune telling", "mystical", "entertainment", "predictions", "fun"],
    category: "Entertainment & Gaming"
  },
  {
    icon: Layers,
    title: "3D Print GPT",
    description: "3D printing guidance, modeling assistance, and manufacturing optimization",
    emoji: "🖨️",
    color: "from-orange-600 to-red-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["3D printing", "modeling", "manufacturing", "design", "prototyping", "technology"],
    category: "Technology & Development"
  },
  {
    icon: Video,
    title: "Commercial Scene Maker",
    description: "Professional commercial and advertisement scene creation for marketing",
    emoji: "📺",
    color: "from-purple-600 to-pink-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["commercial", "advertising", "marketing", "video", "scenes", "production", "video generation"],
    category: "Video Generation & Editing"
  },
  {
    icon: Video,
    title: "Text to Video Prompt GPT",
    description: "Optimized prompts for text-to-video AI generation and content creation",
    emoji: "📝",
    color: "from-blue-600 to-purple-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["text to video", "prompts", "AI", "video generation", "content", "optimization"],
    category: "Video Generation & Editing"
  },
  {
    icon: Clapperboard,
    title: "Movie Scene Maker GPT",
    description: "Professional movie scene creation and cinematic storytelling assistant",
    emoji: "🎬",
    color: "from-red-600 to-orange-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["movie", "scene", "cinema", "storytelling", "film", "production", "video generation"],
    category: "Video Generation & Editing"
  },
  {
    icon: Theater,
    title: "StageMaster AI Suite",
    description: "Professional performing arts assistant for stage productions and theatrical guidance",
    emoji: "🎭",
    color: "from-purple-600 to-pink-700",
    videoUrl: "https://www.youtube.com/embed/-QIxYSlcRWM",
    directUrl: "https://stagemasterai.lovable.app/?via=aiwebtools",
    tags: ["theater", "performing arts", "stage", "production", "drama", "acting"],
    category: "Creative & Design"
  },
  {
    icon: Crown,
    title: "ImmortalizeME",
    description: "Digital immortalization service for preserving memories and legacy",
    emoji: "👑",
    color: "from-gold-500 to-yellow-600",
    videoUrl: "https://www.youtube.com/embed/JXLqPMfw49Y",
    directUrl: "https://immortalizeme.lovable.app/?via=aiwebtools",
    tags: ["immortalization", "legacy", "memories", "preservation", "digital"],
    category: "Specialized Services"
  },
  {
    icon: Globe,
    title: "Illuminous World Data Explorer GPT",
    description: "Advanced data exploration and world information analysis assistant",
    emoji: "🌍",
    color: "from-blue-600 to-green-700",
    videoUrl: "https://www.youtube.com/embed/Nd1Ui2-VLMU",
    directUrl: "https://illuminous.lovable.app/?via=aiwebtools",
    tags: ["data", "exploration", "world", "information", "analysis", "research"],
    category: "Science & Research"
  },
  {
    icon: Zap,
    title: "GODMODE GPT",
    description: "Advanced AI assistant with enhanced capabilities and unlimited potential",
    emoji: "⚡",
    color: "from-purple-600 to-red-700",
    videoUrl: "https://www.youtube.com/embed/or3JtZsq6Bc",
    directUrl: "https://godmodegpt.lovable.app/?via=aiwebtools",
    tags: ["AI", "advanced", "godmode", "unlimited", "enhanced", "powerful"],
    category: "AI Assistants & Chatbots"
  },
  {
    icon: History,
    title: "Talk to History GPT",
    description: "Interactive historical conversations with AI-powered historical figures",
    emoji: "📚",
    color: "from-brown-600 to-orange-700",
    videoUrl: "https://www.youtube.com/embed/5t7EXS5tthQ",
    directUrl: "https://talk-to-history-gpt.lovable.app/?via=aiwebtools",
    tags: ["history", "historical", "conversations", "education", "figures", "interactive"],
    category: "Education & Learning"
  },
  {
    icon: Star,
    title: "Talk to the Gods GPT",
    description: "Mystical conversations with AI-powered divine entities and spiritual guidance",
    emoji: "⭐",
    color: "from-gold-500 to-purple-700",
    videoUrl: "https://www.youtube.com/embed/xoUdjZDgplw",
    directUrl: "https://talktothegodsgpt.lovable.app/?via=aiwebtools",
    tags: ["mystical", "gods", "spiritual", "divine", "guidance", "conversation"],
    category: "Entertainment & Gaming"
  },
  {
    icon: Dna,
    title: "Resurrection GPT",
    description: "Advanced AI for data recovery, restoration, and digital resurrection services",
    emoji: "🧬",
    color: "from-green-600 to-blue-700",
    videoUrl: "https://www.youtube.com/embed/nEuxdGO-RZ4",
    directUrl: "https://resurrectiongpt.lovable.app/?via=aiwebtools",
    tags: ["resurrection", "recovery", "restoration", "digital", "advanced", "data"],
    category: "Technology & Development"
  },
  {
    icon: Wand2,
    title: "Perfect Prompt Engine",
    description: "Advanced prompt optimization and engineering for AI interactions",
    emoji: "🪄",
    color: "from-purple-600 to-blue-700",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-cinematic-shot-of-a-humanoid-robot-controlli.png/:/cr=t:9.25%25,l:11.96%25,w:73.53%25,h:65.54%25/rs=w:1200,cg:true,m",
    directUrl: "https://perfectpromptengine.lovable.app/?via=aiwebtools",
    tags: ["prompts", "optimization", "engineering", "AI", "enhancement", "perfect"],
    category: "AI Assistants & Chatbots"
  },
  {
    icon: Eye,
    title: "Clarity Omni GPT",
    description: "All-seeing AI assistant for comprehensive analysis and clear insights",
    emoji: "👁️",
    color: "from-cyan-500 to-purple-600",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-futuristic-scene-of-an-ai-agent-with-a-halo.jpeg/:/cr=t:2.83%25,l:2.83%25,w:94.34%25,h:94.34%25/rs=w:1200,cg:true,m",
    directUrl: "https://clarityomni.lovable.app/?via=aiwebtools",
    tags: ["clarity", "analysis", "insights", "comprehensive", "omni", "AI"],
    category: "AI Assistants & Chatbots"
  },
  {
    icon: Cog,
    title: "Engineering GPT AI Suite",
    description: "Comprehensive engineering solutions and technical guidance for all disciplines",
    emoji: "⚙️",
    color: "from-gray-600 to-blue-700",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-digital-advertisement-for-engineering-_hEePg.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    directUrl: "https://engineeringgpt.lovable.app/?via=aiwebtools",
    tags: ["engineering", "technical", "solutions", "comprehensive", "disciplines", "AI"],
    category: "Technology & Development"
  },
  {
    icon: Sparkles,
    title: "Phenomenon Explorer AI Suite",
    description: "Investigate unexplained phenomena and mysterious occurrences with AI guidance",
    emoji: "✨",
    color: "from-purple-600 to-pink-700",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-ufo-hovering-in-the-sky-wit_w8l4l.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    directUrl: "https://phenomenonexplorer.lovable.app/?via=aiwebtools",
    tags: ["phenomena", "mystery", "unexplained", "investigation", "paranormal", "exploration"],
    category: "Science & Research"
  },
  {
    icon: FileText,
    title: "Legislation Writer GPT",
    description: "Professional legislative drafting and legal document creation assistant",
    emoji: "📜",
    color: "from-blue-600 to-gray-700",
    videoUrl: "https://www.youtube.com/embed/poOGR-6bb2g",
    directUrl: "https://legislationwritergpt.lovable.app/?via=aiwebtools",
    tags: ["legislation", "legal", "drafting", "documents", "law", "professional"],
    category: "Legal & Finance"
  },
  {
    icon: Palette,
    title: "Graphic & Cover Design GPT",
    description: "Professional graphic design and cover creation for books, albums, and marketing",
    emoji: "🎨",
    color: "from-pink-600 to-purple-700",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/2e70f2ce-b17e-4b0f-b5d3-f36c9c22a2e3.png/:/cr=t:12.5%25,l:0%25,w:100%25,h:75%25/rs=w:1200,h:600,cg:true",
    directUrl: "https://graphicdesigngpt.lovable.app/?via=aiwebtools",
    tags: ["graphic design", "covers", "books", "albums", "marketing", "visual"],
    category: "Creative & Design"
  },
  {
    icon: CheckCircle2,
    title: "Fact Checker GPT",
    description: "Advanced fact verification and truth analysis for reliable information",
    emoji: "✅",
    color: "from-green-600 to-blue-700",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-person-holding-a-sign-that-_gfexU.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    directUrl: "https://factcheckergpt.lovable.app/?via=aiwebtools",
    tags: ["fact checking", "verification", "truth", "analysis", "reliability", "information"],
    category: "Tools & Utilities"
  },
  {
    icon: TreePine,
    title: "Sustainable Futures GPT",
    description: "Environmental sustainability planning and green future development guidance",
    emoji: "🌲",
    color: "from-green-600 to-emerald-700",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-future-city-with-vertical-gardens.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    directUrl: "https://sustainablefuturesgpt.lovable.app/?via=aiwebtools",
    tags: ["sustainability", "environment", "green", "future", "development", "eco"],
    category: "Science & Research"
  },
  {
    icon: Apple,
    title: "Food Quality Inspector GPT",
    description: "Food safety inspection and quality assurance guidance for consumers and professionals",
    emoji: "🍎",
    color: "from-red-600 to-orange-700",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-man-inspecting-food-in-a-supermar.png/:/cr=t:4.65%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    directUrl: "https://foodqualitygpt.lovable.app/?via=aiwebtools",
    tags: ["food safety", "quality", "inspection", "health", "consumer", "professional"],
    category: "Health & Wellness"
  },
  {
    icon: Fish,
    title: "Fisherman GPT",
    description: "Comprehensive fishing guidance, techniques, and angling expertise for all skill levels",
    emoji: "🎣",
    color: "from-blue-600 to-cyan-700",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-cinematic-shot-of-a-bearded-fisherman-wearin.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    directUrl: "https://fishermangpt.lovable.app/?via=aiwebtools",
    tags: ["fishing", "angling", "techniques", "outdoor", "recreation", "water sports"],
    category: "Entertainment & Gaming"
  },
  {
    icon: Gem,
    title: "Antique and Collectible Appraisal GPT",
    description: "Professional antique and collectible valuation and authentication services",
    emoji: "💎",
    color: "from-purple-600 to-gold-700",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/an-advertisement-for-an-antique-and-collectibl.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    directUrl: "https://antiqueappraisalgpt.lovable.app/?via=aiwebtools",
    tags: ["antiques", "collectibles", "appraisal", "valuation", "authentication", "professional"],
    category: "Specialized Services"
  },
  {
    icon: Gamepad2,
    title: "Trivia Night GPT",
    description: "Interactive trivia game host with thousands of questions across all topics",
    emoji: "🎮",
    color: "from-purple-600 to-blue-700",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/trivanight.jpg/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    directUrl: "https://trivianightgpt.lovable.app/?via=aiwebtools",
    tags: ["trivia", "games", "questions", "entertainment", "interactive", "fun"],
    category: "Entertainment & Gaming"
  },
  {
    icon: BarChart,
    title: "Probability GPT",
    description: "Advanced probability analysis and statistical modeling for decision making",
    emoji: "📊",
    color: "from-blue-600 to-purple-700",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-captivating-and-futuristic-scene-featuring-a.png/:/cr=t:11.11%25,l:0%25,w:100%25,h:88.89%25/rs=w:1200,h:600,cg:true",
    directUrl: "https://probabilitygpt.lovable.app/?via=aiwebtools",
    tags: ["probability", "statistics", "analysis", "modeling", "decision making", "mathematics"],
    category: "Science & Research"
  },
  {
    icon: BookOpen,
    title: "Learn Any Course GPT",
    description: "Comprehensive learning assistant for any subject or course curriculum",
    emoji: "📖",
    color: "from-green-600 to-blue-700",
    videoUrl: "https://www.youtube.com/embed/98fLvWZy9wI",
    directUrl: "https://learnanycourse.lovable.app/?via=aiwebtools",
    tags: ["learning", "education", "courses", "curriculum", "subjects", "comprehensive"],
    category: "Education & Learning"
  },
  {
    icon: Building,
    title: "Property Data Finder GPT",
    description: "Real estate data analysis and property information research assistant",
    emoji: "🏢",
    color: "from-gray-600 to-blue-700",
    videoUrl: "https://www.youtube.com/embed/0ZGBGn9yYwY",
    directUrl: "https://propertydatafindergpt.lovable.app/?via=aiwebtools",
    tags: ["real estate", "property", "data", "research", "analysis", "information"],
    category: "Business & Productivity"
  },
  {
    icon: Camera,
    title: "Leonardo AI",
    description: "Advanced AI image generation and creative visual content creation platform",
    emoji: "📷",
    color: "from-purple-600 to-pink-700",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/image_converted.jpeg/:/rs=w:1200,h:600,cg:true,m/cr=w:1200,h:600",
    directUrl: "https://app.leonardo.ai/?via=aiwebtools",
    tags: ["AI", "image generation", "visual", "creative", "art", "platform"],
    category: "Creative & Design"
  },
  {
    icon: Calculator,
    title: "Algebraic Expression Inventor GPT",
    description: "Mathematical expression creation and algebraic problem solving assistant",
    emoji: "🧮",
    color: "from-blue-600 to-green-700",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-captivating-futuristic-advertisement-for-alg.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    directUrl: "https://algebraicexpressioninventor.lovable.app/?via=aiwebtools",
    tags: ["mathematics", "algebra", "expressions", "problem solving", "education", "calculation"],
    category: "Education & Learning"
  },
  // NEW TOOLS STARTING HERE
  {
    icon: Zap,
    title: "BOLT.NEW",
    description: "Revolutionary AI-powered web development platform for instant full-stack application creation",
    emoji: "⚡",
    color: "from-blue-600 to-purple-700",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-cinematic-shot-of-a-high-tech-office-with-mu.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    directUrl: "https://bolt.new/?rid=iewkqu",
    tags: ["web development", "AI", "full-stack", "instant", "coding", "platform", "revolutionary"],
    category: "Technology & Development"
  },
  {
    icon: Settings,
    title: "Multitasker GPT",
    description: "AI assistant for managing multiple tasks simultaneously with enhanced productivity features",
    emoji: "⚙️",
    color: "from-orange-500 to-red-600",
    videoUrl: "https://www.youtube.com/embed/y-YZCOzIuDg",
    directUrl: "https://multitaskergpt.lovable.app/?via=aiwebtools",
    tags: ["multitasking", "productivity", "management", "efficiency", "organization", "workflow"],
    category: "Business & Productivity"
  },
  {
    icon: BookOpen,
    title: "Learn Any Skill GPT",
    description: "Comprehensive skill acquisition assistant for learning any skill from basics to mastery",
    emoji: "🎯",
    color: "from-green-600 to-blue-700",
    videoUrl: "https://www.youtube.com/embed/q1AY2LukHrk",
    directUrl: "https://learnanyskillgpt.lovable.app/?via=aiwebtools",
    tags: ["skill learning", "mastery", "education", "training", "development", "expertise"],
    category: "Education & Learning"
  },
  {
    icon: Gem,
    title: "MATERIUMOR - Material Valuation GPT",
    description: "Advanced material valuation and assessment for industrial and precious materials",
    emoji: "💎",
    color: "from-purple-600 to-gold-700",
    videoUrl: "https://www.youtube.com/embed/tbZu4vnsY_8",
    directUrl: "https://materialvaluationgpt.lovable.app/?via=aiwebtools",
    tags: ["material valuation", "assessment", "industrial", "precious metals", "evaluation", "pricing"],
    category: "Specialized Services"
  },
  {
    icon: Heart,
    title: "Lovable.dev",
    description: "AI-powered web development platform for creating beautiful applications with ease",
    emoji: "❤️",
    color: "from-pink-500 to-purple-600",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/loveable.dev.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    directUrl: "https://lovable.dev/?via=aiwebtools",
    tags: ["web development", "AI", "platform", "applications", "development", "coding"],
    category: "Technology & Development"
  },
  {
    icon: Sparkles,
    title: "Gemini/Google AI Studio",
    description: "Google's advanced AI development platform with multimodal capabilities",
    emoji: "✨",
    color: "from-blue-500 to-green-600",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/gemini_multimodal_live.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    directUrl: "http://g.co/g1referral/911Z9NTK",
    tags: ["Google AI", "multimodal", "development", "AI studio", "advanced", "platform"],
    category: "AI Assistants & Chatbots"
  },
  {
    icon: Briefcase,
    title: "MicroSaaS GPT",
    description: "Specialized assistant for building and scaling micro SaaS businesses",
    emoji: "💼",
    color: "from-blue-600 to-purple-700",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-mockup-advertisement-with-t_AgWMY.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    directUrl: "https://microsaasgpt.lovable.app/?via=aiwebtools",
    tags: ["SaaS", "business", "micro", "startup", "entrepreneurship", "scaling"],
    category: "Business & Productivity"
  },
  {
    icon: Brain,
    title: "Albert Einstein GPT",
    description: "AI embodiment of Einstein's genius for physics, mathematics, and scientific innovation",
    emoji: "🧠",
    color: "from-blue-600 to-purple-700",
    videoUrl: "https://www.youtube.com/embed/kfGyOfjBI0s",
    directUrl: "https://teslaeinsteingpt.lovable.app/?via=aiwebtools",
    tags: ["Einstein", "physics", "science", "genius", "mathematics", "innovation"],
    category: "Science & Research"
  },
  {
    icon: Clock,
    title: "Interpretis",
    description: "Historical interpretation and analysis assistant for understanding past events",
    emoji: "🕰️",
    color: "from-brown-600 to-orange-700",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-historical-style-advertisement-for-the_JUvQJ.png/:/cr=t:0%25,l:18.29%25,w:56.1%25,h:100%25/rs=w:1200,h:1200,cg:true",
    directUrl: "https://interpretis.lovable.app/?via=aiwebtools",
    tags: ["historical", "interpretation", "analysis", "events", "understanding", "past"],
    category: "Education & Learning"
  },
  {
    icon: Plane,
    title: "Imagination Traveler GPT",
    description: "Creative journey assistant for imaginative travel experiences and fictional adventures",
    emoji: "✈️",
    color: "from-purple-600 to-pink-700",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-futuristic-advertisement-for-imaginati_E4k--.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    directUrl: "https://imaginationtravelergpt.lovable.app/?via=aiwebtools",
    tags: ["imagination", "travel", "creative", "adventures", "fictional", "journey"],
    category: "Entertainment & Gaming"
  },
  {
    icon: Phone,
    title: "Nucleus AI Inbound Call Agents Platform",
    description: "Advanced AI-powered call center platform for automated customer service",
    emoji: "📞",
    color: "from-blue-600 to-cyan-700",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-cinematic-shot-of-a-futuristic-office-_x8S3w.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    directUrl: "http://www.nucleus.com/",
    tags: ["call center", "AI agents", "customer service", "automation", "platform", "inbound"],
    category: "Business & Productivity"
  },
  {
    icon: Ship,
    title: "Titanic Resurrections GPT",
    description: "Historical recreation and analysis of the Titanic disaster with AI insights",
    emoji: "🚢",
    color: "from-blue-600 to-gray-700",
    videoUrl: "https://www.youtube.com/embed/XlWVaz5bw08",
    directUrl: "https://titanicresurrectionsgpt.lovable.app/?via=aiwebtools",
    tags: ["Titanic", "historical", "disaster", "recreation", "analysis", "maritime"],
    category: "Education & Learning"
  },
  {
    icon: Newspaper,
    title: "Historical Headlines GPT",
    description: "Time-traveling news assistant for exploring historical events and headlines",
    emoji: "📰",
    color: "from-brown-600 to-yellow-700",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/an-advertisement-for-historical-headline_1Ll1g.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    directUrl: "https://historical-headlines-time-traveler.lovable.app/?via=aiwebtools",
    tags: ["historical", "headlines", "news", "time travel", "events", "journalism"],
    category: "Education & Learning"
  },
  {
    icon: TestTube,
    title: "Alchemist Scientist GPT",
    description: "Mystical science assistant combining ancient alchemy with modern scientific knowledge",
    emoji: "🧪",
    color: "from-purple-600 to-gold-700",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-digital-advertisement-for-the-ai-tool-_C4irn.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    directUrl: "https://alchemicalscientistgpt.lovable.app/?via=aiwebtools",
    tags: ["alchemy", "science", "mystical", "ancient", "modern", "chemistry"],
    category: "Science & Research"
  },
  {
    icon: TrendingUp,
    title: "Data Research Analysis Report GPT",
    description: "Comprehensive data analysis and professional research report generation assistant",
    emoji: "📊",
    color: "from-blue-600 to-green-700",
    videoUrl: "https://www.youtube.com/embed/idxjOwUAD_I",
    directUrl: "https://dataanalysisandreportai.lovable.app/?via=aiwebtools",
    tags: ["data analysis", "research", "reports", "comprehensive", "professional", "analytics"],
    category: "Business & Productivity"
  },
  {
    icon: UserSearch,
    title: "The Resume & Job Finder AI Suite",
    description: "Complete career assistance for resume optimization and job search success",
    emoji: "👔",
    color: "from-green-600 to-blue-700",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-happy-man-with-a-job-offer-_n6N-k.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    directUrl: "https://resumeandjobsgpt.lovable.app/?via=aiwebtools",
    tags: ["resume", "job search", "career", "employment", "optimization", "success"],
    category: "Business & Productivity"
  },
  {
    icon: Theater,
    title: "Playwriter GPT",
    description: "Professional playwright assistant for creating compelling theatrical productions",
    emoji: "🎭",
    color: "from-purple-600 to-pink-700",
    videoUrl: "https://www.youtube.com/embed/KKldzg40wEI",
    directUrl: "https://playwritergpt.lovable.app/?via=aiwebtools",
    tags: ["playwriting", "theater", "drama", "theatrical", "productions", "scripts"],
    category: "Creative & Design"
  },
  {
    icon: Settings,
    title: "Customizable GPT Maker",
    description: "Advanced tool for creating personalized AI assistants tailored to specific needs",
    emoji: "⚙️",
    color: "from-blue-600 to-purple-700",
    videoUrl: "https://www.youtube.com/embed/SmBXfGqXfco",
    directUrl: "https://customgptmaker.lovable.app/?via=aiwebtools",
    tags: ["custom GPT", "AI creation", "personalized", "assistants", "tailored", "maker"],
    category: "AI Assistants & Chatbots"
  },
  {
    icon: FlaskConical,
    title: "Historical Apothecary GPT",
    description: "Ancient medicine and historical pharmaceutical knowledge assistant",
    emoji: "🧴",
    color: "from-green-600 to-brown-700",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-digital-advertisement-for-the-ai-tool-_kLdMI.png/:/cr=t:0%25,l:7.93%25,w:84.15%25,h:100%25/rs=w:1200,cg:true",
    directUrl: "https://apothecarygpt.lovable.app/?via=aiwebtools",
    tags: ["apothecary", "historical", "medicine", "ancient", "pharmaceutical", "herbs"],
    category: "Health & Wellness"
  },
  {
    icon: GraduationCap,
    title: "Home-Schooling Assistant GPT",
    description: "Comprehensive homeschooling support for parents and educators",
    emoji: "🏠",
    color: "from-green-600 to-blue-700",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-parent-teaching-their-ki-0096e43.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    directUrl: "https://homeschoolgpt.lovable.app/?via=aiwebtools",
    tags: ["homeschooling", "education", "parents", "curriculum", "teaching", "learning"],
    category: "Education & Learning"
  },
  {
    icon: Gavel,
    title: "Contract Review Bot",
    description: "AI-powered legal contract analysis and review assistant",
    emoji: "⚖️",
    color: "from-gray-600 to-blue-700",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-futuristic-humanoid-robot-with-a-sleek-desig.png/:/cr=t:2.6%25,l:5.36%25,w:89.29%25,h:79.58%25/rs=w:1200,h:600,cg:true,m",
    directUrl: "https://chatgpt.com/g/g-Y8u3YrS1p-contract-review-bot",
    tags: ["contract review", "legal", "analysis", "AI", "law", "documents"],
    category: "Legal & Finance"
  },
  {
    icon: Paintbrush,
    title: "Tattoo Designer GPT",
    description: "Creative tattoo design and body art consultation assistant",
    emoji: "🎨",
    color: "from-purple-600 to-pink-700",
    videoUrl: "https://www.youtube.com/embed/3dtGbNqXdPY",
    directUrl: "https://tattoogpt.lovable.app/?via=aiwebtools",
    tags: ["tattoo", "design", "body art", "creative", "consultation", "artistic"],
    category: "Creative & Design"
  },
  {
    icon: Video,
    title: "Sora Prompt Assistant",
    description: "Optimized prompt creation for Sora and other text-to-video AI platforms",
    emoji: "🎬",
    color: "from-blue-600 to-purple-700",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-futuristic-city-with-tall-buildings-th_JdXy-.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    directUrl: "https://texttovideoprompter.lovable.app/?via=aiwebtools",
    tags: ["Sora", "text to video", "prompts", "video generation", "AI", "optimization"],
    category: "Video Generation & Editing"
  },
  {
    icon: Crown,
    title: "King Blueberry GPT",
    description: "Mathematical expression creation and algebraic problem solving assistant",
    emoji: "👑",
    color: "from-blue-600 to-purple-700",
    videoUrl: "https://www.youtube.com/embed/U8TLg15RTg8",
    directUrl: "https://algebraicexpressioninventor.lovable.app/?via=aiwebtools",
    tags: ["mathematics", "algebra", "expressions", "king", "blueberry", "royal"],
    category: "Education & Learning"
  },
  {
    icon: PillBottle,
    title: "PHARMA RESEARCH PRO",
    description: "Advanced pharmaceutical research and drug development analysis assistant",
    emoji: "💊",
    color: "from-blue-600 to-green-700",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-professional-pharmaceutical-assis.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    directUrl: "https://rxai.lovable.app/?via=aiwebtools",
    tags: ["pharmaceutical", "research", "drug development", "professional", "analysis", "medicine"],
    category: "Health & Wellness"
  },
  {
    icon: Utensils,
    title: "Chef 'Sizzle' AI Culinary Assistant",
    description: "Professional cooking assistant with recipes, techniques, and culinary expertise",
    emoji: "👨‍🍳",
    color: "from-orange-600 to-red-700",
    videoUrl: "https://www.youtube.com/embed/vJz1HOGtV0I",
    directUrl: "https://chefgpt.lovable.app/?via=aiwebtools",
    tags: ["cooking", "chef", "culinary", "recipes", "food", "kitchen"],
    category: "Entertainment & Gaming"
  },
  {
    icon: Palette,
    title: "RESTYLE ME GPT",
    description: "Personal styling and fashion makeover assistant for complete style transformation",
    emoji: "💄",
    color: "from-pink-600 to-purple-700",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/ChatGPT%20Image%20Apr%2027%2C%202025%2C%2007_08_04%20PM.png/:/cr=t:12.5%25,l:0%25,w:100%25,h:75%25/rs=w:1200,h:600,cg:true",
    directUrl: "https://restylemegpt.lovable.app/?via=aiwebtools",
    tags: ["styling", "fashion", "makeover", "personal", "transformation", "style"],
    category: "Creative & Design"
  },
  {
    icon: Search,
    title: "Indiana Archeologist GPT",
    description: "Archaeological exploration and historical artifact discovery assistant",
    emoji: "🏺",
    color: "from-brown-600 to-orange-700",
    videoUrl: "https://www.youtube.com/embed/uf2i_DdaJ7M",
    directUrl: "https://indianaarchaeologygpt.lovable.app/?via=aiwebtools",
    tags: ["archaeology", "Indiana Jones", "artifacts", "exploration", "historical", "discovery"],
    category: "Science & Research"
  },
  {
    icon: FileText,
    title: "Training Manual Generator GPT",
    description: "Professional training manual and business plan creation assistant",
    emoji: "📚",
    color: "from-blue-600 to-green-700",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/1000005968.jpg/:/cr=t:2.83%25,l:2.83%25,w:94.34%25,h:94.34%25/rs=w:1200,cg:true,m",
    directUrl: "https://businessplanandtrainai.lovable.app/?via=aiwebtools",
    tags: ["training", "manual", "business", "education", "professional", "documentation"],
    category: "Business & Productivity"
  },
  {
    icon: Mountain,
    title: "ALAN WATTS GPT",
    description: "Philosophical guidance inspired by Alan Watts' teachings on Eastern philosophy",
    emoji: "🧘",
    color: "from-purple-600 to-blue-700",
    videoUrl: "https://www.youtube.com/embed/zdKfwsQwOLE",
    directUrl: "https://alanwattsgpt.lovable.app/?via=aiwebtools",
    tags: ["philosophy", "Alan Watts", "Eastern", "meditation", "wisdom", "spiritual"],
    category: "Health & Wellness"
  }
];

// Enhanced search functionality with comprehensive keyword matching
export const searchTools = (tools: Tool[], searchTerm: string): Tool[] => {
  if (!searchTerm.trim()) return tools;
  
  const normalizedSearch = searchTerm.toLowerCase().trim();
  
  // Comprehensive related keywords for better search matching
  const relatedKeywords: { [key: string]: string[] } = {
    "video": ["movie", "film", "cinema", "visual", "studio", "production", "scene", "commercial", "editing", "generation", "maker", "creator", "director"],
    "video generation": ["text to video", "movie maker", "film creator", "video studio", "scene maker", "commercial maker", "visual content", "video creation"],
    "movie": ["film", "cinema", "video", "scene", "studio", "production", "director", "screenplay", "script"],
    "film": ["movie", "cinema", "video", "production", "director", "scene", "studio"],
    "studio": ["production", "maker", "creator", "video", "movie", "film", "audio", "music"],
    
    "AI": ["artificial intelligence", "machine learning", "automation", "bot", "assistant", "GPT", "technology"],
    "artificial intelligence": ["AI", "machine learning", "automation", "smart", "intelligent"],
    
    "creative": ["design", "art", "visual", "aesthetic", "artistic", "imagination", "innovation"],
    "design": ["creative", "visual", "graphics", "layout", "aesthetic", "art"],
    
    "health": ["medical", "wellness", "therapy", "healthcare", "doctor", "treatment"],
    "medical": ["health", "doctor", "healthcare", "therapy", "treatment", "diagnosis"],
    
    "business": ["professional", "enterprise", "commercial", "corporate", "productivity"],
    "finance": ["money", "financial", "investment", "trading", "economic"],
    
    "education": ["learning", "teaching", "academic", "course", "training", "skill"],
    "learning": ["education", "teaching", "training", "skill", "development"]
  };
  
  return tools.filter(tool => {
    const titleMatch = tool.title.toLowerCase().includes(normalizedSearch);
    const descriptionMatch = tool.description.toLowerCase().includes(normalizedSearch);
    const categoryMatch = tool.category?.toLowerCase().includes(normalizedSearch);
    
    const tagMatch = tool.tags?.some(tag => 
      tag.toLowerCase().includes(normalizedSearch) || 
      normalizedSearch.includes(tag.toLowerCase())
    );
    
    const relatedMatch = Object.entries(relatedKeywords).some(([category, keywords]) => {
      const searchMatchesCategory = normalizedSearch.includes(category) || category.includes(normalizedSearch);
      const searchMatchesKeyword = keywords.some(keyword => 
        normalizedSearch.includes(keyword) || keyword.includes(normalizedSearch)
      );
      
      if (searchMatchesCategory || searchMatchesKeyword) {
        return keywords.some(keyword => 
          tool.title.toLowerCase().includes(keyword) || 
          tool.description.toLowerCase().includes(keyword) ||
          tool.tags?.some(tag => tag.toLowerCase().includes(keyword))
        ) || tool.title.toLowerCase().includes(category) ||
           tool.description.toLowerCase().includes(category) ||
           tool.tags?.some(tag => tag.toLowerCase().includes(category));
      }
      return false;
    });
    
    const fuzzyMatch = tool.tags?.some(tag => {
      const tagWords = tag.toLowerCase().split(/[\s-_]+/);
      const searchWords = normalizedSearch.split(/[\s-_]+/);
      return searchWords.some(searchWord => 
        tagWords.some(tagWord => {
          if (searchWord.length >= 3 && tagWord.length >= 3) {
            return tagWord.includes(searchWord) || searchWord.includes(tagWord);
          }
          return tagWord === searchWord;
        })
      );
    });
    
    const categoryKeywordMatch = tool.category && Object.entries(toolCategories).some(([catName, catKeywords]) => {
      if (tool.category === catName) {
        return catKeywords.some(keyword => 
          normalizedSearch.includes(keyword) || keyword.includes(normalizedSearch)
        );
      }
      return false;
    });
    
    return titleMatch || descriptionMatch || categoryMatch || tagMatch || relatedMatch || fuzzyMatch || categoryKeywordMatch;
  });
};

// Get tools by category
export const getToolsByCategory = (category: string): Tool[] => {
  return allTools.filter(tool => tool.category === category);
};

// Get all categories with tool counts
export const getCategoriesWithCounts = () => {
  const categoryCounts: { [key: string]: number } = {};
  allTools.forEach(tool => {
    if (tool.category) {
      categoryCounts[tool.category] = (categoryCounts[tool.category] || 0) + 1;
    }
  });
  return categoryCounts;
};
