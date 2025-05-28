import { BookOpen, Film, Clock, Car, GraduationCap, Shield, Leaf, Zap, Search, Home, Fish, Sprout, Gem, Eye, Brain, Heart, Scale, Calculator, Code, Gamepad2, CreditCard, Users, Palette, Video, History, FileText, Settings, Globe, Rocket, Cpu, Building, Headphones, UserSearch, Presentation, DollarSign, HandHeart, Paintbrush, Target, PenTool, Camera, Star, MessageSquare, Mountain, Brush, Phone, Bot, Database, Play, Radio, Layers, Gavel, Activity, Link, Music, Clapperboard, Mic, Monitor, Smartphone, Tablet, TrendingUp, TrendingDown, BarChart, PieChart, LineChart, Package, Truck, ShoppingBag, ShoppingCart, Banknote, Coins, Wallet, Receipt, FileSpreadsheet, Calculator as Calc, Briefcase, HardHat, Wrench, Hammer, Cog, Thermometer, Gauge, Ruler, Weight, Dumbbell, Apple, Utensils, Pizza, Coffee, Wine, Cake, Sandwich, Trees, Sun, Cloud, CloudRain, CloudSnow, Wind, Rainbow, Snowflake, Droplets, Waves, Plane, Ship, Bike, Bus, Ambulance, Fuel, Construction, Train, Lightbulb, Battery, Microscope, TestTube, Beaker, Atom, Magnet, Speaker, Mic as Microphone, Tv, Piano, Guitar, Music as Violin, Drum, Music as Trumpet, Stethoscope, PillBottle, Syringe, FlaskConical, BookOpenCheck, Briefcase as BusinessCase, Coins as Money, ShieldCheck, Cannabis, Crown, Flame, MapPin, TreePine, Sparkles, Wand2, Palette as Art, Camera as Photo, Gamepad, Hash, CheckCircle2, AlertTriangle, FileImage, Scissors, Newspaper, Megaphone, Award, Shirt as ShirtIcon, Gem as Crystal } from "lucide-react";
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
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["movie", "studio", "filmmaking", "video", "production", "AI", "cinema", "video generation", "film production", "director", "visual effects"],
    category: "Video Generation & Editing"
  },
  {
    icon: FileText,
    title: "Insurance Claims GPT",
    description: "AI assistant for insurance claim processing, documentation, and professional guidance",
    emoji: "📋",
    color: "from-blue-500 to-indigo-600",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["insurance", "claims", "documentation", "legal", "finance", "professional", "processing"],
    category: "Legal & Finance"
  },
  {
    icon: Heart,
    title: "Veterinarian GPT",
    description: "Professional veterinary assistant for animal health, care guidance, and medical advice",
    emoji: "🐾",
    color: "from-green-600 to-emerald-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["veterinary", "animals", "pets", "health", "medical", "care", "advice", "vet"],
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
    icon: Music,
    title: "Music Video Maker Studio",
    description: "AI-powered music video creation and production studio for artists",
    emoji: "🎵",
    color: "from-purple-600 to-pink-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["music", "video", "studio", "production", "artist", "creation", "visual", "video generation"],
    category: "Video Generation & Editing"
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
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
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
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
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
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
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
