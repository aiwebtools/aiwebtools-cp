import { BookOpen, Film, Clock, Car, GraduationCap, Shield, Leaf, Zap, Search, Home, Fish, Sprout, Gem, Eye, Brain, Heart, Scale, Calculator, Code, Gamepad2, CreditCard, Users, Palette, Video, History, FileText, Settings, Globe, Rocket, Cpu, Building, Headphones, UserSearch, Presentation, DollarSign, HandHeart, Paintbrush, Target, PenTool, Camera, Star, MessageSquare, Mountain, Brush, Phone, Bot, Database, Play, Radio, Layers, Gavel, Activity, Link, Music, Clapperboard, Mic, Monitor, Smartphone, Tablet, TrendingUp, TrendingDown, BarChart, PieChart, LineChart, Package, Truck, ShoppingBag, ShoppingCart, Banknote, Coins, Wallet, Receipt, FileSpreadsheet, Calculator as Calc, Briefcase, HardHat, Wrench, Hammer, Cog, Thermometer, Gauge, Ruler, Weight, Dumbbell, Apple, Utensils, Pizza, Coffee, Wine, Cake, Sandwich, Trees, Sun, Cloud, CloudRain, CloudSnow, Wind, Rainbow, Snowflake, Droplets, Waves, Plane, Ship, Bike, Bus, Ambulance, Fuel, Construction, Train, Lightbulb, Battery, Microscope, TestTube, Beaker, Atom, Magnet, Speaker, Mic as Microphone, Tv, Piano, Guitar, Music as Violin, Drum, Music as Trumpet, Stethoscope, PillBottle, Syringe, FlaskConical, BookOpenCheck, Briefcase as BusinessCase, Coins as Money, ShieldCheck, Cannabis, Crown, Flame, MapPin, TreePine, Sparkles, Wand2, Palette as Art, Camera as Photo, Gamepad, Hash, CheckCircle2, AlertTriangle, FileImage, Scissors, Newspaper, Megaphone, Award } from "lucide-react";
import { Tool } from "@/types/tools";

// Tool categories for organization
export const toolCategories = {
  "AI Assistants & Chatbots": ["chatbot", "AI", "assistant", "conversation", "language model", "GPT", "LLM"],
  "Video Generation & Editing": ["video", "generation", "editing", "animation", "text-to-video", "movie", "film"],
  "Music & Audio": ["music", "audio", "generation", "sound", "voice", "song", "composition"],
  "Writing & Content": ["writing", "content", "books", "scripts", "documents", "text", "literature"],
  "Education & Learning": ["education", "learning", "teaching", "academic", "study", "course", "training"],
  "Business & Productivity": ["business", "productivity", "automation", "workflow", "professional", "enterprise"],
  "Creative & Design": ["creative", "design", "art", "illustration", "graphics", "visual", "aesthetic"],
  "Health & Wellness": ["health", "wellness", "medical", "therapy", "mental", "fitness", "healthcare"],
  "Legal & Finance": ["legal", "law", "finance", "money", "investment", "contracts", "compliance"],
  "Technology & Development": ["technology", "development", "programming", "software", "coding", "tech"],
  "Science & Research": ["science", "research", "data", "analysis", "scientific", "innovation", "discovery"],
  "Entertainment & Gaming": ["entertainment", "gaming", "fun", "recreation", "games", "media", "streaming"],
  "Communication & Social": ["communication", "social", "messaging", "networking", "collaboration", "chat"],
  "Tools & Utilities": ["tools", "utilities", "practical", "helper", "generator", "converter", "calculator"],
  "Specialized Services": ["specialized", "professional", "expert", "consultation", "advisory", "guidance"]
};

export const featuredTools: Tool[] = [
  {
    icon: BookOpen,
    title: "Book Writer GPT",
    description: "Create professionally written full books about any topic with AI-powered assistance",
    emoji: "✍️",
    color: "from-blue-500 to-purple-600",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["writing", "books", "literature", "publishing", "creative", "author", "content creation"],
    category: "Writing & Content"
  },
  {
    icon: Film,
    title: "Movie Script Writer GPT",
    description: "AI companion for industry-standard movie scripts and professional storytelling",
    emoji: "🎬",
    color: "from-red-500 to-pink-600",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["writing", "movies", "scripts", "entertainment", "storytelling", "screenplay", "film"],
    category: "Writing & Content"
  },
  {
    icon: Clock,
    title: "Time Machine GPT",
    description: "Explore the past, potential futures, and alternative realities with AI guidance",
    emoji: "🌀",
    color: "from-cyan-500 to-blue-600",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["history", "time", "exploration", "education", "science", "past", "future", "timeline"],
    category: "Education & Learning"
  },
  {
    icon: Car,
    title: "Automobile GPT",
    description: "Comprehensive automotive expert for deals, repairs, maintenance advice, and car knowledge",
    emoji: "🏎️",
    color: "from-orange-500 to-red-600",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["automotive", "cars", "maintenance", "repair", "transportation", "vehicles", "mechanic"],
    category: "Tools & Utilities"
  },
  {
    icon: GraduationCap,
    title: "College Degree GPT",
    description: "Complete college education experience with accessible learning resources and academic support",
    emoji: "🎓",
    color: "from-green-500 to-teal-600",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["education", "college", "learning", "degree", "academic", "university", "study", "curriculum"],
    category: "Education & Learning"
  },
  {
    icon: Shield,
    title: "Survivalist GPT",
    description: "Comprehensive survival companion with practical knowledge and outdoor experience guidance",
    emoji: "🛡️",
    color: "from-gray-500 to-slate-600",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["survival", "outdoor", "emergency", "preparedness", "skills", "wilderness", "safety"],
    category: "Tools & Utilities"
  }
];

export const allTools: Tool[] = [
  ...featuredTools,
  // New AI Tools from your comprehensive list
  {
    icon: Bot,
    title: "AI Tools Expert GPT",
    description: "Master AI specialist providing expert guidance on all AI tools and technologies",
    emoji: "🤖",
    color: "from-blue-600 to-purple-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["AI", "expert", "tools", "guidance", "technology", "specialist", "consultation"],
    category: "AI Assistants & Chatbots"
  },
  {
    icon: Video,
    title: "Movie Maker AI Studio",
    description: "Professional AI-powered movie creation studio for filmmakers and content creators",
    emoji: "🎬",
    color: "from-red-600 to-pink-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["movie", "studio", "filmmaking", "video", "production", "AI", "cinema"],
    category: "Video Generation & Editing"
  },
  {
    icon: FileText,
    title: "Insurance Claims GPT",
    description: "AI assistant for insurance claim processing, documentation, and professional guidance",
    emoji: "📋",
    color: "from-blue-500 to-indigo-600",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["insurance", "claims", "documentation", "legal", "finance", "professional"],
    category: "Legal & Finance"
  },
  {
    icon: Heart,
    title: "Veterinarian GPT",
    description: "Professional veterinary assistant for animal health, care guidance, and medical advice",
    emoji: "🐾",
    color: "from-green-600 to-emerald-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["veterinary", "animals", "pets", "health", "medical", "care", "advice"],
    category: "Health & Wellness"
  },
  {
    icon: Plane,
    title: "Travel Advisor GPT",
    description: "Expert travel planning assistant for destinations, itineraries, and travel optimization",
    emoji: "✈️",
    color: "from-cyan-500 to-blue-600",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["travel", "vacation", "planning", "destinations", "tourism", "advisor", "trip"],
    category: "Tools & Utilities"
  },
  {
    icon: Users,
    title: "Social Services GPT",
    description: "Community support assistant for social services, welfare, and public assistance guidance",
    emoji: "🤝",
    color: "from-purple-500 to-indigo-600",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["social", "services", "community", "support", "welfare", "assistance", "public"],
    category: "Communication & Social"
  },
  {
    icon: Cannabis,
    title: "Cannabis GPT",
    description: "Comprehensive cannabis education, cultivation, and industry guidance assistant",
    emoji: "🌿",
    color: "from-green-500 to-emerald-600",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
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
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["home", "renovation", "construction", "design", "improvement", "building", "DIY"],
    category: "Tools & Utilities"
  },
  {
    icon: Scale,
    title: "Public Defender GPT",
    description: "Legal assistance for public defense cases, criminal law guidance, and court preparation",
    emoji: "⚖️",
    color: "from-gray-600 to-slate-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["legal", "defense", "criminal", "law", "court", "justice", "attorney"],
    category: "Legal & Finance"
  },
  {
    icon: Stethoscope,
    title: "Doctor GPT",
    description: "Medical consultation assistant for health guidance, symptoms analysis, and wellness advice",
    emoji: "👩‍⚕️",
    color: "from-blue-500 to-cyan-600",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["medical", "doctor", "health", "diagnosis", "symptoms", "healthcare", "consultation"],
    category: "Health & Wellness"
  },
  {
    icon: Wine,
    title: "Mixologist GPT",
    description: "Professional bartending assistant for cocktails, drinks, and mixology expertise",
    emoji: "🍸",
    color: "from-purple-500 to-pink-600",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["cocktails", "bartending", "drinks", "mixology", "recipes", "alcohol", "bar"],
    category: "Entertainment & Gaming"
  },
  {
    icon: TrendingUp,
    title: "Trader GPT",
    description: "Financial trading assistant for market analysis, investment strategies, and trading guidance",
    emoji: "📈",
    color: "from-green-600 to-emerald-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["trading", "finance", "stocks", "investment", "market", "cryptocurrency", "analysis"],
    category: "Legal & Finance"
  },
  {
    icon: PillBottle,
    title: "Pharmaceutical Assistant",
    description: "Medication guidance, drug interactions, and pharmaceutical knowledge assistant",
    emoji: "💊",
    color: "from-blue-600 to-indigo-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["pharmaceutical", "medication", "drugs", "health", "pharmacy", "medicine"],
    category: "Health & Wellness"
  },
  {
    icon: Rocket,
    title: "Stellaris AI Space GPT",
    description: "Space exploration and strategy gaming assistant for Stellaris and space simulations",
    emoji: "🚀",
    color: "from-purple-600 to-indigo-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["space", "gaming", "strategy", "stellaris", "exploration", "simulation"],
    category: "Entertainment & Gaming"
  },
  {
    icon: Target,
    title: "Firearms Safety GPT",
    description: "Comprehensive firearms safety education, training, and responsible ownership guidance",
    emoji: "🎯",
    color: "from-red-500 to-orange-600",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
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
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
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
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["solar", "renewable", "energy", "assessment", "sustainability", "green"],
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
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["truth", "wisdom", "oracle", "verification", "analysis", "insight"],
    category: "Tools & Utilities"
  },
  {
    icon: Heart,
    title: "Marriage Mender GPT",
    description: "Relationship counseling and marriage guidance for couples therapy and communication",
    emoji: "💕",
    color: "from-pink-500 to-red-600",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["marriage", "relationships", "counseling", "therapy", "couples", "communication"],
    category: "Health & Wellness"
  },
  {
    icon: Sprout,
    title: "AI Farming Expert",
    description: "Agricultural expertise for farming optimization, crop management, and sustainable agriculture",
    emoji: "🌱",
    color: "from-green-600 to-emerald-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["farming", "agriculture", "crops", "sustainable", "optimization", "cultivation"],
    category: "Science & Research"
  },
  {
    icon: Fish,
    title: "Fisherman's GPT",
    description: "Fishing expertise, techniques, locations, and equipment guidance for anglers",
    emoji: "🎣",
    color: "from-blue-500 to-cyan-600",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["fishing", "angling", "outdoor", "techniques", "equipment", "locations"],
    category: "Entertainment & Gaming"
  },
  {
    icon: Gem,
    title: "Collectible Appraisal GPT",
    description: "Professional appraisal service for collectibles, antiques, and valuable items",
    emoji: "💎",
    color: "from-purple-600 to-pink-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["collectibles", "appraisal", "antiques", "valuation", "assessment", "expert"],
    category: "Specialized Services"
  },
  {
    icon: Weight,
    title: "Material Valuation GPT",
    description: "Professional material assessment and valuation for industrial and commercial purposes",
    emoji: "⚖️",
    color: "from-gray-600 to-blue-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["materials", "valuation", "assessment", "industrial", "commercial", "analysis"],
    category: "Specialized Services"
  },
  {
    icon: Cog,
    title: "Engineering GPTs",
    description: "Comprehensive engineering solutions for mechanical, electrical, and civil engineering",
    emoji: "⚙️",
    color: "from-orange-600 to-red-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["engineering", "mechanical", "electrical", "civil", "technical", "design"],
    category: "Technology & Development"
  },
  {
    icon: Fuel,
    title: "Oil & Gas AI Tools Suite",
    description: "Comprehensive oil and gas industry tools for exploration, production, and analysis",
    emoji: "🛢️",
    color: "from-black to-gray-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["oil", "gas", "energy", "petroleum", "industry", "exploration", "production"],
    category: "Science & Research"
  },
  {
    icon: Paintbrush,
    title: "Tattoo GPT",
    description: "Tattoo design creation, art consultation, and tattoo culture guidance",
    emoji: "🎨",
    color: "from-purple-600 to-pink-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["tattoo", "art", "design", "body art", "ink", "creative", "culture"],
    category: "Creative & Design"
  },
  {
    icon: Search,
    title: "Phenomenon Exploration AI",
    description: "Scientific phenomenon investigation and unexplained mysteries exploration",
    emoji: "🔬",
    color: "from-cyan-600 to-purple-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["phenomenon", "science", "exploration", "mysteries", "investigation", "research"],
    category: "Science & Research"
  },
  {
    icon: Star,
    title: "Performing Arts AI Tools",
    description: "Comprehensive performing arts guidance for theater, dance, and stage performance",
    emoji: "⭐",
    color: "from-yellow-500 to-orange-600",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["performing arts", "theater", "dance", "stage", "performance", "drama"],
    category: "Entertainment & Gaming"
  },
  {
    icon: Utensils,
    title: "Restaurant Menu Maker GPT",
    description: "Professional restaurant menu creation, pricing, and culinary design assistance",
    emoji: "🍽️",
    color: "from-red-500 to-yellow-600",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["restaurant", "menu", "culinary", "food", "design", "pricing", "hospitality"],
    category: "Business & Productivity"
  },
  {
    icon: FlaskConical,
    title: "Apothecary GPT",
    description: "Traditional herbal medicine, natural remedies, and apothecary knowledge",
    emoji: "🧪",
    color: "from-green-600 to-purple-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["apothecary", "herbal", "medicine", "natural", "remedies", "traditional"],
    category: "Health & Wellness"
  },
  {
    icon: Globe,
    title: "World Peace GPT",
    description: "Global harmony initiatives, conflict resolution, and peace-building strategies",
    emoji: "🕊️",
    color: "from-blue-500 to-green-600",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["peace", "harmony", "conflict resolution", "global", "diplomacy", "unity"],
    category: "Communication & Social"
  },
  {
    icon: Briefcase,
    title: "Jobs & Resume Assistance",
    description: "Professional career guidance, resume optimization, and job search assistance",
    emoji: "💼",
    color: "from-blue-600 to-indigo-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["jobs", "resume", "career", "employment", "professional", "hiring"],
    category: "Business & Productivity"
  },
  {
    icon: Code,
    title: "MicroSaaS Developer GPT",
    description: "Micro-SaaS development guidance for small software businesses and entrepreneurs",
    emoji: "💻",
    color: "from-green-600 to-blue-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["SaaS", "development", "entrepreneur", "software", "business", "startup"],
    category: "Technology & Development"
  },
  {
    icon: Crown,
    title: "ImmortalizeMe™ Services",
    description: "Digital legacy creation and personal immortalization through AI technology",
    emoji: "👑",
    color: "from-yellow-500 to-purple-600",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["legacy", "immortalization", "digital", "AI", "personal", "memory"],
    category: "Specialized Services"
  },
  {
    icon: Coffee,
    title: "Culinary & Mixology GPTs",
    description: "Professional cooking and mixology expertise for chefs and bartenders",
    emoji: "👨‍🍳",
    color: "from-orange-500 to-red-600",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["culinary", "cooking", "mixology", "chef", "bartender", "recipes"],
    category: "Entertainment & Gaming"
  },
  {
    icon: Sparkles,
    title: "Skin-Care & Spa GPT",
    description: "Professional skincare guidance, spa treatments, and beauty consultation",
    emoji: "✨",
    color: "from-pink-500 to-purple-600",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["skincare", "spa", "beauty", "wellness", "treatment", "cosmetics"],
    category: "Health & Wellness"
  },
  {
    icon: Palette,
    title: "Logo & Ad Design",
    description: "Professional logo creation and advertising design for businesses and brands",
    emoji: "🎨",
    color: "from-blue-600 to-purple-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["logo", "design", "advertising", "branding", "graphics", "marketing"],
    category: "Creative & Design"
  },
  {
    icon: BookOpenCheck,
    title: "Comic Book Maker GPT",
    description: "Comic book creation, storytelling, and illustration guidance for graphic novels",
    emoji: "📚",
    color: "from-red-600 to-yellow-500",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["comic", "graphic novel", "illustration", "storytelling", "art", "creative"],
    category: "Creative & Design"
  },
  {
    icon: Wand2,
    title: "Meme Generator GPT",
    description: "Viral meme creation, social media content, and humor generation",
    emoji: "😂",
    color: "from-purple-500 to-pink-600",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["memes", "social media", "humor", "viral", "content", "entertainment"],
    category: "Entertainment & Gaming"
  },
  {
    icon: Shirt,
    title: "Virtual Stylist GPT",
    description: "Personal fashion styling, wardrobe consultation, and style guidance",
    emoji: "👗",
    color: "from-pink-500 to-purple-600",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["fashion", "styling", "wardrobe", "clothes", "style", "personal"],
    category: "Creative & Design"
  },
  {
    icon: FileImage,
    title: "Graphic & Cover Design GPT",
    description: "Professional graphic design and book cover creation for publications",
    emoji: "📖",
    color: "from-blue-600 to-green-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["graphic design", "cover", "books", "publications", "visual", "design"],
    category: "Creative & Design"
  },
  {
    icon: Camera,
    title: "Product Photography GPT",
    description: "Professional product photography guidance, lighting, and e-commerce optimization",
    emoji: "📸",
    color: "from-gray-600 to-blue-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["photography", "product", "e-commerce", "lighting", "professional", "visual"],
    category: "Creative & Design"
  },
  {
    icon: ShoppingBag,
    title: "Shopping GPT",
    description: "Smart shopping assistant for deals, comparisons, and purchase recommendations",
    emoji: "🛍️",
    color: "from-green-500 to-blue-600",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["shopping", "deals", "comparison", "recommendations", "e-commerce", "retail"],
    category: "Tools & Utilities"
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
    tags: ["commercial", "advertising", "marketing", "video", "scenes", "production"],
    category: "Video Generation & Editing"
  },
  {
    icon: Scissors,
    title: "Playwright GPT",
    description: "Professional playwriting assistance for theater scripts and dramatic works",
    emoji: "🎭",
    color: "from-red-600 to-purple-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["playwright", "theater", "drama", "scripts", "stage", "performance"],
    category: "Writing & Content"
  },
  {
    icon: BookOpenCheck,
    title: "Training Manual Generator",
    description: "Professional training manual creation for corporate and educational purposes",
    emoji: "📋",
    color: "from-blue-600 to-green-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["training", "manual", "education", "corporate", "documentation", "learning"],
    category: "Education & Learning"
  },
  {
    icon: Film,
    title: "ScreenPlay Writer GPT",
    description: "Professional screenplay writing for movies, TV shows, and film productions",
    emoji: "🎬",
    color: "from-red-500 to-orange-600",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["screenplay", "film", "movies", "TV", "script", "writing", "production"],
    category: "Writing & Content"
  },
  {
    icon: Gamepad,
    title: "Game Design Document GPT",
    description: "Comprehensive game design documentation and development planning",
    emoji: "🎮",
    color: "from-purple-600 to-blue-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["game design", "documentation", "development", "gaming", "planning", "creative"],
    category: "Entertainment & Gaming"
  },
  {
    icon: BusinessCase,
    title: "Business Plan Generator",
    description: "Professional business plan creation and startup strategy development",
    emoji: "📊",
    color: "from-green-600 to-blue-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["business plan", "startup", "strategy", "entrepreneur", "planning", "finance"],
    category: "Business & Productivity"
  },
  {
    icon: Presentation,
    title: "Quick PowerPoint PPTx GPT",
    description: "Rapid PowerPoint presentation creation and professional slide design",
    emoji: "📽️",
    color: "from-orange-500 to-red-600",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["PowerPoint", "presentations", "slides", "business", "professional", "design"],
    category: "Business & Productivity"
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
    icon: Paintbrush,
    title: "Coloring Book Generator",
    description: "Custom coloring book creation for children and adults with artistic designs",
    emoji: "🎨",
    color: "from-purple-500 to-pink-600",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["coloring book", "art", "children", "creative", "design", "education"],
    category: "Creative & Design"
  },
  {
    icon: Scale,
    title: "Legislation Writer GPT",
    description: "Professional legislative document drafting and policy writing assistance",
    emoji: "📜",
    color: "from-blue-700 to-gray-800",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["legislation", "policy", "government", "law", "drafting", "legal"],
    category: "Legal & Finance"
  },
  {
    icon: Gavel,
    title: "Writing Lawmakers Tools",
    description: "Tools for communicating with legislators and government officials",
    emoji: "✍️",
    color: "from-blue-600 to-indigo-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["lawmakers", "government", "communication", "advocacy", "politics", "writing"],
    category: "Communication & Social"
  },
  {
    icon: Microphone,
    title: "Podcast Script Writer GPT",
    description: "Professional podcast script creation and audio content planning",
    emoji: "🎙️",
    color: "from-purple-600 to-pink-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["podcast", "script", "audio", "content", "broadcasting", "media"],
    category: "Music & Audio"
  },
  {
    icon: FileText,
    title: "Grant Writer GPT",
    description: "Professional grant writing assistance for funding applications and proposals",
    emoji: "💰",
    color: "from-green-600 to-blue-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["grant writing", "funding", "proposals", "applications", "nonprofit", "research"],
    category: "Business & Productivity"
  },
  {
    icon: Newspaper,
    title: "Newsletter Writer GPT",
    description: "Professional newsletter creation and email marketing content development",
    emoji: "📰",
    color: "from-blue-500 to-cyan-600",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["newsletter", "email marketing", "content", "communication", "marketing"],
    category: "Business & Productivity"
  },
  {
    icon: Megaphone,
    title: "Public Testimony Writer",
    description: "Professional public testimony and speech writing for government hearings",
    emoji: "📢",
    color: "from-red-600 to-orange-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["testimony", "public speaking", "government", "advocacy", "speech", "civic"],
    category: "Communication & Social"
  },
  {
    icon: BookOpen,
    title: "Learn Any Course GPT",
    description: "Comprehensive learning assistant for any subject or course curriculum",
    emoji: "📚",
    color: "from-green-600 to-blue-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["learning", "education", "courses", "curriculum", "study", "knowledge"],
    category: "Education & Learning"
  },
  {
    icon: Award,
    title: "Learn Any Skill GPT",
    description: "Skill development assistant for learning any practical or professional skill",
    emoji: "🏆",
    color: "from-yellow-500 to-orange-600",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["skills", "learning", "development", "training", "practical", "professional"],
    category: "Education & Learning"
  },
  {
    icon: History,
    title: "Talk to History GPT",
    description: "Interactive historical conversations with famous figures and historical events",
    emoji: "🏛️",
    color: "from-brown-600 to-yellow-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["history", "historical figures", "conversation", "education", "interactive"],
    category: "Education & Learning"
  },
  {
    icon: Calculator,
    title: "Math Inventor GPT",
    description: "Advanced mathematics problem solving and mathematical concept development",
    emoji: "🔢",
    color: "from-blue-600 to-purple-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["mathematics", "problem solving", "concepts", "invention", "education"],
    category: "Education & Learning"
  },
  {
    icon: GraduationCap,
    title: "Course Creator GPT",
    description: "Educational course development and curriculum design for instructors",
    emoji: "👨‍🏫",
    color: "from-green-600 to-blue-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["course creation", "curriculum", "education", "instructor", "teaching"],
    category: "Education & Learning"
  },
  {
    icon: Home,
    title: "HomeSchool Assistant GPT",
    description: "Comprehensive homeschooling support and educational guidance for families",
    emoji: "🏠",
    color: "from-yellow-500 to-green-600",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["homeschool", "education", "family", "teaching", "learning", "children"],
    category: "Education & Learning"
  },
  {
    icon: Star,
    title: "Celebrity Chat Line GPT",
    description: "Interactive conversations with AI versions of celebrities and famous personalities",
    emoji: "⭐",
    color: "from-gold-500 to-yellow-600",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["celebrity", "entertainment", "conversation", "famous", "personality", "chat"],
    category: "Entertainment & Gaming"
  },
  {
    icon: Bot,
    title: "Matrix-Neo GPT",
    description: "Matrix-inspired AI assistant with philosophical insights and reality questioning",
    emoji: "🕶️",
    color: "from-green-500 to-black",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["matrix", "philosophy", "reality", "AI", "consciousness", "simulation"],
    category: "Entertainment & Gaming"
  },
  {
    icon: CheckCircle2,
    title: "Quiz & Test Maker/Grader",
    description: "Educational quiz creation and automated grading system for educators",
    emoji: "✅",
    color: "from-blue-600 to-green-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["quiz", "test", "grading", "education", "assessment", "teaching"],
    category: "Education & Learning"
  },
  {
    icon: GraduationCap,
    title: "Personal Educator GPT",
    description: "Personalized learning assistant adapted to individual learning styles and needs",
    emoji: "👨‍🎓",
    color: "from-purple-600 to-blue-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["personal", "education", "learning", "individualized", "tutor", "adaptive"],
    category: "Education & Learning"
  },
  {
    icon: Hash,
    title: "Binary to Text Converter",
    description: "Convert binary code to text and vice versa for programming and data analysis",
    emoji: "💻",
    color: "from-green-600 to-blue-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["binary", "converter", "programming", "data", "coding", "technology"],
    category: "Technology & Development"
  },
  {
    icon: Crown,
    title: "Project Blueberry GPT👑🫐",
    description: "Premium AI project management and creative development suite",
    emoji: "🫐",
    color: "from-blue-600 to-purple-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["project management", "creative", "premium", "development", "productivity"],
    category: "Business & Productivity"
  },
  {
    icon: Users,
    title: "Roleplay Companion GPT",
    description: "Interactive roleplay scenarios and character development for entertainment",
    emoji: "🎭",
    color: "from-purple-600 to-pink-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["roleplay", "entertainment", "character", "interactive", "scenarios"],
    category: "Entertainment & Gaming"
  },
  {
    icon: Users,
    title: "Team GPT",
    description: "Collaborative team management and group project coordination assistant",
    emoji: "👥",
    color: "from-blue-600 to-green-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["team", "collaboration", "management", "project", "coordination", "group"],
    category: "Business & Productivity"
  },
  {
    icon: Brain,
    title: "Albert Einstein GPT",
    description: "Scientific discussions and physics insights from the perspective of Albert Einstein",
    emoji: "🧠",
    color: "from-gray-600 to-blue-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["Einstein", "physics", "science", "relativity", "genius", "education"],
    category: "Education & Learning"
  },
  {
    icon: Gamepad,
    title: "Trivia Night GPT",
    description: "Interactive trivia games and quiz hosting for entertainment and learning",
    emoji: "🧩",
    color: "from-purple-600 to-yellow-500",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["trivia", "quiz", "games", "entertainment", "knowledge", "interactive"],
    category: "Entertainment & Gaming"
  },
  {
    icon: Search,
    title: "Etymological Decoder GPT",
    description: "Word origins, etymology, and linguistic analysis for language enthusiasts",
    emoji: "📝",
    color: "from-brown-600 to-orange-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["etymology", "language", "linguistics", "words", "origins", "analysis"],
    category: "Education & Learning"
  },
  {
    icon: Crystal,
    title: "Fortune Teller GPT",
    description: "Entertainment fortune telling and mystical guidance for fun and insight",
    emoji: "🔮",
    color: "from-purple-600 to-pink-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["fortune telling", "mystical", "entertainment", "predictions", "fun"],
    category: "Entertainment & Gaming"
  },
  {
    icon: Mountain,
    title: "Imagination Traveler GPT",
    description: "Creative journey guidance for imaginative exploration and storytelling",
    emoji: "🗻",
    color: "from-blue-600 to-purple-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["imagination", "creativity", "travel", "storytelling", "exploration"],
    category: "Creative & Design"
  },
  {
    icon: Ship,
    title: "Titanic Resurrections GPT",
    description: "Historical recreation and alternative history scenarios of the Titanic",
    emoji: "🚢",
    color: "from-blue-700 to-gray-800",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["Titanic", "history", "alternative", "recreation", "historical", "simulation"],
    category: "Education & Learning"
  },
  {
    icon: FlaskConical,
    title: "Alchemical Scientist GPT",
    description: "Historical alchemy and modern chemistry fusion for scientific exploration",
    emoji: "⚗️",
    color: "from-purple-600 to-gold-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["alchemy", "chemistry", "science", "historical", "exploration", "mystical"],
    category: "Science & Research"
  },
  {
    icon: TreePine,
    title: "Native American History AI",
    description: "Indigenous American history, culture, and traditional knowledge preservation",
    emoji: "🪶",
    color: "from-brown-600 to-green-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["Native American", "indigenous", "history", "culture", "traditional", "heritage"],
    category: "Education & Learning"
  },
  {
    icon: Settings,
    title: "Multi-Tasker GPT",
    description: "Advanced multi-task coordination and productivity optimization assistant",
    emoji: "⚡",
    color: "from-orange-600 to-red-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["multitasking", "productivity", "coordination", "efficiency", "organization"],
    category: "Business & Productivity"
  },
  {
    icon: Bot,
    title: "Customizable GPT Maker👑",
    description: "Create and customize your own GPT assistants for specific needs",
    emoji: "🛠️",
    color: "from-blue-600 to-purple-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["customizable", "GPT maker", "AI", "creation", "personalization"],
    category: "Technology & Development"
  },
  {
    icon: Crown,
    title: "Blueberry Method GPT🫐",
    description: "Premium methodology and systematic approach to problem-solving",
    emoji: "🫐",
    color: "from-blue-600 to-purple-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["methodology", "problem solving", "systematic", "premium", "approach"],
    category: "Business & Productivity"
  },
  {
    icon: Zap,
    title: "GodMode GPT",
    description: "Advanced AI capabilities with enhanced reasoning and problem-solving power",
    emoji: "⚡",
    color: "from-gold-500 to-red-600",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["advanced", "god mode", "enhanced", "reasoning", "powerful", "AI"],
    category: "AI Assistants & Chatbots"
  },
  {
    icon: Globe,
    title: "Prompt 2 AI Page Builder",
    description: "Convert text prompts into complete web pages and applications",
    emoji: "🌐",
    color: "from-blue-600 to-green-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["page builder", "web development", "prompts", "AI", "applications"],
    category: "Technology & Development"
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
  }
];

// Enhanced search functionality with comprehensive keyword matching
export const searchTools = (tools: Tool[], searchTerm: string): Tool[] => {
  if (!searchTerm.trim()) return tools;
  
  const normalizedSearch = searchTerm.toLowerCase().trim();
  
  // Comprehensive related keywords for better search matching
  const relatedKeywords: { [key: string]: string[] } = {
    // Science & Research
    science: ["research", "experiment", "data", "analysis", "scientific", "innovation", "technology", "discovery", "lab", "study", "tesla", "physics", "chemistry", "biology", "astronomy", "geology", "ecology", "genetics", "molecular", "atomic", "quantum", "relativity", "evolution", "climate", "environment", "sustainability"],
    research: ["science", "study", "analysis", "investigation", "experiment", "data", "academic", "scholarly", "evidence", "hypothesis", "theory", "methodology", "findings", "results", "conclusions"],
    
    // Education & Learning
    education: ["learning", "teaching", "academic", "study", "course", "lesson", "school", "university", "college", "training", "curriculum", "pedagogy", "instruction", "tutorial", "knowledge", "skills", "degree", "certification"],
    learning: ["education", "study", "training", "skill", "knowledge", "course", "lesson", "tutorial", "practice", "development", "growth", "improvement", "mastery", "understanding"],
    college: ["university", "education", "academic", "degree", "student", "campus", "higher education", "scholarship", "major", "minor", "graduate", "undergraduate"],
    
    // Business & Finance
    business: ["finance", "marketing", "sales", "productivity", "automation", "workflow", "professional", "enterprise", "commerce", "trade", "industry", "corporate", "management", "strategy", "leadership", "entrepreneurship"],
    finance: ["money", "investment", "trading", "banking", "cryptocurrency", "economics", "valuation", "accounting", "budget", "revenue", "profit", "cost", "expense", "capital", "assets", "portfolio"],
    money: ["finance", "currency", "cash", "payment", "investment", "savings", "wealth", "income", "salary", "wage", "price", "value", "cost", "budget"],
    
    // Creative & Art
    creative: ["art", "design", "music", "video", "writing", "storytelling", "illustration", "animation", "graphics", "visual", "aesthetic", "artistic", "imagination", "inspiration", "original"],
    art: ["creative", "design", "visual", "aesthetic", "artistic", "illustration", "painting", "drawing", "sculpture", "gallery", "museum", "culture", "beauty", "expression"],
    design: ["creative", "visual", "aesthetic", "graphics", "layout", "typography", "color", "style", "interface", "user experience", "UX", "UI", "web design", "graphic design"],
    music: ["audio", "sound", "song", "melody", "rhythm", "beat", "composition", "instrument", "voice", "vocal", "singing", "recording", "production", "studio", "album", "artist"],
    
    // Video & Media
    video: ["film", "movie", "cinema", "recording", "streaming", "youtube", "content", "media", "visual", "animation", "editing", "production", "director", "camera"],
    film: ["movie", "cinema", "video", "director", "actor", "screenplay", "script", "production", "entertainment", "hollywood", "documentary", "feature", "short"],
    movie: ["film", "cinema", "video", "entertainment", "actor", "director", "script", "scene", "plot", "story", "character", "dialogue"],
    
    // Health & Wellness
    health: ["wellness", "medical", "therapy", "mental", "fitness", "nutrition", "healthcare", "medicine", "doctor", "hospital", "treatment", "cure", "disease", "prevention", "diagnosis"],
    wellness: ["health", "fitness", "mental health", "self-care", "mindfulness", "meditation", "stress relief", "relaxation", "balance", "wellbeing", "lifestyle"],
    mental: ["psychology", "therapy", "counseling", "emotional", "mind", "brain", "cognitive", "behavioral", "psychiatric", "anxiety", "depression", "stress"],
    therapy: ["treatment", "healing", "counseling", "rehabilitation", "recovery", "support", "intervention", "psychology", "mental health"],
    
    // Technology & AI
    technology: ["AI", "machine learning", "software", "programming", "development", "digital", "tech", "computer", "internet", "innovation", "automation", "robotics"],
    AI: ["artificial intelligence", "machine learning", "neural network", "deep learning", "algorithm", "automation", "robot", "chatbot", "language model", "GPT"],
    programming: ["coding", "development", "software", "algorithm", "computer", "language", "script", "application", "system", "database"],
    
    // Legal & Law
    legal: ["law", "contract", "compliance", "regulation", "justice", "court", "attorney", "lawyer", "judge", "legislation", "statute", "litigation"],
    law: ["legal", "justice", "court", "attorney", "lawyer", "judge", "regulation", "statute", "compliance", "rights", "constitution"],
    
    // Entertainment & Gaming
    entertainment: ["games", "movies", "music", "fun", "recreation", "media", "streaming", "leisure", "amusement", "show", "performance"],
    gaming: ["games", "video games", "esports", "player", "console", "PC", "mobile", "arcade", "competition", "tournament"],
    
    // Communication & Social
    communication: ["chat", "messaging", "social", "networking", "conversation", "discussion", "talk", "dialogue", "interaction", "connection"],
    social: ["networking", "community", "connection", "relationship", "interaction", "media", "platform", "sharing", "collaboration"],
    
    // Food & Nutrition
    food: ["nutrition", "cooking", "recipe", "diet", "meal", "ingredient", "cuisine", "restaurant", "kitchen", "chef", "grocery", "organic", "healthy"],
    cooking: ["food", "recipe", "cuisine", "chef", "kitchen", "ingredient", "meal", "dish", "preparation", "baking", "grilling"],
    
    // Automotive & Transportation
    automotive: ["car", "vehicle", "transportation", "driving", "motor", "engine", "mechanic", "repair", "maintenance", "fuel", "electric"],
    car: ["vehicle", "automobile", "driving", "transportation", "motor", "engine", "wheels", "road", "traffic", "parking"],
    
    // Tools & Utilities
    tools: ["utilities", "helper", "generator", "converter", "calculator", "measurement", "instrument", "equipment", "device", "gadget"],
    utility: ["tool", "helper", "useful", "practical", "functional", "service", "resource", "facility", "convenience"]
  };
  
  return tools.filter(tool => {
    // Direct matches in title, description, and category
    const titleMatch = tool.title.toLowerCase().includes(normalizedSearch);
    const descriptionMatch = tool.description.toLowerCase().includes(normalizedSearch);
    const categoryMatch = tool.category?.toLowerCase().includes(normalizedSearch);
    
    // Tag matches
    const tagMatch = tool.tags?.some(tag => tag.toLowerCase().includes(normalizedSearch));
    
    // Exact keyword matches in tags
    const exactTagMatch = tool.tags?.some(tag => normalizedSearch.includes(tag.toLowerCase()));
    
    // Related keyword matches
    const relatedMatch = Object.entries(relatedKeywords).some(([category, keywords]) => {
      // If search term matches category
      if (normalizedSearch.includes(category) || category.includes(normalizedSearch)) {
        return keywords.some(keyword => 
          tool.title.toLowerCase().includes(keyword) || 
          tool.description.toLowerCase().includes(keyword) ||
          tool.tags?.some(tag => tag.toLowerCase().includes(keyword))
        );
      }
      
      // If search term matches any related keyword
      return keywords.some(keyword => {
        if (normalizedSearch.includes(keyword) || keyword.includes(normalizedSearch)) {
          return tool.tags?.some(tag => tag.toLowerCase().includes(category)) ||
                 tool.title.toLowerCase().includes(category) ||
                 tool.description.toLowerCase().includes(category) ||
                 tool.category?.toLowerCase().includes(category);
        }
        return false;
      });
    });
    
    // Partial word matching for better search results
    const partialMatch = tool.tags?.some(tag => {
      const tagWords = tag.toLowerCase().split(' ');
      const searchWords = normalizedSearch.split(' ');
      return searchWords.some(searchWord => 
        tagWords.some(tagWord => 
          tagWord.includes(searchWord) || searchWord.includes(tagWord)
        )
      );
    });
    
    return titleMatch || descriptionMatch || categoryMatch || tagMatch || exactTagMatch || relatedMatch || partialMatch;
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
