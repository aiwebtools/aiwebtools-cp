
import { BookOpen, Film, Clock, Car, GraduationCap, Shield, Leaf, Zap, Search, Home, Fish, Sprout, Gem, Eye, Brain, Heart, Scale, Calculator, Code, Gamepad2, CreditCard, Users, Palette as PaletteIcon, Video, History, FileText, Settings, Globe, Rocket, Cpu, Building, Headphones, UserSearch, Presentation, DollarSign, HandHeart, PaintBucket, Target, PenTool, Camera, Star, MessageSquare, Mountain, Brush, Phone, Bot, Database, Play, Radio, Layers, Gavel, Activity, Link, Music, Clapperboard, Zap as Lightning, Mic, Monitor, Smartphone, Tablet, TrendingUp, TrendingDown, BarChart, PieChart, LineChart, Package, Truck, ShoppingBag, ShoppingCart, CreditCard as Card, Banknote, Coins, Wallet, Receipt, FileSpreadsheet, Calculator as Calc, TrendingUp as Growth, Investment, Building2, Factory, Briefcase, HardHat, Wrench, Hammer, Screwdriver, Cog, Gear, Thermometer, Gauge, Ruler, Weight, Dumbbell, Apple, Utensils, Pizza, Coffee, Wine, Cake, IceCream, Sandwich, Soup, Salad, Beef, Fish as FishIcon, Carrot, Wheat, Rice, Corn, Cherry, Grapes, Strawberry, Lemon, Orange, Banana, Avocado, Tomato, Pepper, Onion, Garlic, Herb, Spade, Flower, Tree, Seedling, Sun, Cloud, CloudRain, CloudSnow, Wind, Tornado, Zap as Storm, Rainbow, Snowflake, Droplets, Waves, Mountain as Peak, Volcano, Island, Forest, Desert, Beach, Cave, Bridge, Road, Train, Plane, Ship, Boat, Bicycle, Motorcycle, Bus, Taxi, Ambulance, FireTruck, PoliceCar, Tractor, Bulldozer, Excavator, Crane, Forklift, Van, Pickup, SportsCar, ConvertibleCar, ElectricCar, Hybrid, Fuel, GasStation, ParkingMeter, TrafficLight, StopSign, YieldSign, SpeedLimit, Construction, RoadWork, Detour, Bridge as RoadBridge, Tunnel, Highway, Street, Sidewalk, Crosswalk, BusStop, TrainStation, Airport, Port, Harbor, Marina, Lighthouse, Pier, Dock, Wharf, Ferry, Cruise, Yacht, Sailboat, Speedboat, Kayak, Canoe, Surfboard, Jetski, Submarine, Helicopter, Jet, Glider, Balloon, Parachute, Drone, Satellite, Rocket as Space, Shuttle, Station, Planet, Moon, Star as StarIcon, Comet, Meteor, Galaxy, Nebula, BlackHole, Telescope, Microscope, Lab, Beaker, TestTube, Petri, DNA, Molecule, Atom, Neutron, Proton, Electron, Magnet, Battery, Lightbulb, Laser, Radar, Sonar, Antenna, Transmitter, Receiver, Amplifier, Speaker, Microphone, Headphone, Earphone, Radio as RadioIcon, Television, Monitor as Screen, Projector, Camera as CameraIcon, Camcorder, Film as FilmIcon, Photo, Image, Video as VideoIcon, Audio, Music as MusicIcon, Song, Album, Playlist, Artist, Band, Instrument, Piano, Guitar, Violin, Drums, Trumpet, Saxophone, Flute, Harmonica, Accordion, Harp, Banjo, Mandolin, Ukulele, Bass, Cello, Tuba, Trombone, Clarinet, Oboe, Bassoon, Recorder, Xylophone, Marimba, Timpani, Cymbals, Triangle, Tambourine, Castanets, Maracas, Bongos, Conga, Djembe, Tabla, Sitar, Didgeridoo, Bagpipes, Harmonica as Harp2, Synthesizer, Keyboard, Organ, Turntable, Mixer, Equalizer, Amplifier as Amp } from "lucide-react";
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
  "Tools & Utilities": ["tools", "utilities", "practical", "helper", "generator", "converter", "calculator"]
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
    icon: Link,
    title: "Legislator Link GPT",
    description: "AI tool to help you easily connect with legislators in your state or country and get involved in local legislative efforts",
    emoji: "🏛️",
    color: "from-blue-600 to-indigo-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["politics", "government", "legislation", "democracy", "civic engagement", "voting", "policy", "advocacy", "representatives", "congress", "senate"],
    category: "Communication & Social"
  },
  {
    icon: Music,
    title: "MiniMax Video & Music Generator",
    description: "Creating Music Videos for your promotions has never been easier with AI-powered generation",
    emoji: "🎵",
    color: "from-purple-600 to-pink-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["music", "video", "generation", "promotion", "creative", "marketing", "advertising", "content", "social media"],
    category: "Music & Audio"
  },
  {
    icon: Clapperboard,
    title: "KLING (Chinese Sora) Video Generator",
    description: "China's version of OpenAI's Sora, generates high-quality videos up to two minutes long from text prompts",
    emoji: "🎬",
    color: "from-red-600 to-orange-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["video", "generation", "AI", "text-to-video", "sora", "creative", "chinese", "kuaishou", "cinematic"],
    category: "Video Generation & Editing"
  },
  {
    icon: Video,
    title: "RunwayML Text to Video Generator",
    description: "Gen 3 is our personal favorite text-to-video generation platform for professional content",
    emoji: "🎥",
    color: "from-green-600 to-blue-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["video", "generation", "AI", "text-to-video", "runway", "creative", "professional", "gen3", "machine learning"],
    category: "Video Generation & Editing"
  },
  {
    icon: Lightning,
    title: "Luma Dream Machine - Text to Video",
    description: "A mirror and a map leaves the soul intact - advanced text to video generation with artistic flair",
    emoji: "⚡",
    color: "from-yellow-600 to-orange-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["video", "generation", "AI", "text-to-video", "creative", "dreams", "artistic", "luma", "imagination"],
    category: "Video Generation & Editing"
  },
  {
    icon: Video,
    title: "HotShot Text-to-Video Generator",
    description: "Cutting-edge AI-powered text-to-video generation tool designed to streamline content creation",
    emoji: "🔥",
    color: "from-red-600 to-pink-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["video", "generation", "AI", "text-to-video", "content creation", "creative", "streamlined", "efficient"],
    category: "Video Generation & Editing"
  },
  {
    icon: Leaf,
    title: "Sustainable Futures GPT",
    description: "Assist governments and communities in making data-driven decisions for environmental sustainability",
    emoji: "🌍",
    color: "from-green-600 to-emerald-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["environment", "sustainability", "government", "data", "green", "ecology", "climate", "renewable", "conservation"],
    category: "Science & Research"
  },
  {
    icon: Zap,
    title: "Nikola Tesla GPT",
    description: "Investigate scientific mysteries and craft groundbreaking theories with innovative brilliance",
    emoji: "⚡",
    color: "from-purple-600 to-indigo-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["science", "invention", "electricity", "innovation", "research", "genius", "physics", "engineering", "discovery"],
    category: "Science & Research"
  },
  {
    icon: Search,
    title: "Food Quality Inspector GPT",
    description: "Smart companion for grocery shopping, assessing food quality and safety with expert guidance",
    emoji: "🛒",
    color: "from-yellow-500 to-orange-600",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["food", "quality", "safety", "inspection", "grocery", "health", "nutrition", "shopping", "organic"],
    category: "Health & Wellness"
  },
  {
    icon: Eye,
    title: "Snoop Image AI",
    description: "Tool for verifying image authenticity, analyzing whether images are likely real or AI-generated with Snoop Dogg style",
    emoji: "👁️",
    color: "from-purple-600 to-indigo-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["image", "verification", "authenticity", "AI detection", "analysis", "security", "deepfake", "fake", "real"],
    category: "Technology & Development"
  },
  {
    icon: Gavel,
    title: "Legal Draftsmith GPT",
    description: "Specializes in the precise drafting of legal documents with expert AI assistance for professionals",
    emoji: "⚖️",
    color: "from-gray-700 to-slate-800",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["legal", "law", "documents", "drafting", "contracts", "justice", "attorney", "lawyer", "compliance"],
    category: "Legal & Finance"
  },
  {
    icon: Video,
    title: "InVideo AI",
    description: "Ultimate video creation tool for crafting professional videos accessible to everyone",
    emoji: "🎥",
    color: "from-red-600 to-pink-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["video", "creation", "professional", "editing", "marketing", "content", "social media", "youtube"],
    category: "Video Generation & Editing"
  },
  {
    icon: Bot,
    title: "Grok 3",
    description: "Advanced AI developed by X.AI with enhanced conversational capabilities and real-time information",
    emoji: "🤖",
    color: "from-blue-600 to-cyan-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["AI", "chatbot", "conversation", "advanced", "X.AI", "communication", "elon musk", "twitter", "real-time"],
    category: "AI Assistants & Chatbots"
  },
  {
    icon: Cpu,
    title: "BIG-AGI",
    description: "Innovative AI suite making cutting-edge artificial intelligence accessible to professionals and developers",
    emoji: "💻",
    color: "from-purple-700 to-indigo-800",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["AI", "development", "professional", "suite", "cutting-edge", "technology", "developers", "programming"],
    category: "Technology & Development"
  },
  {
    icon: MessageSquare,
    title: "ChatRTX by NVIDIA",
    description: "Personalize a GPT model with your own content, requires RTX 30/40 series GPU with 8GB+ VRAM",
    emoji: "💬",
    color: "from-green-600 to-emerald-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["AI", "chatbot", "NVIDIA", "GPU", "personalization", "local", "RTX", "hardware", "custom"],
    category: "AI Assistants & Chatbots"
  },
  {
    icon: Brain,
    title: "GPT Ideas Assistant",
    description: "AI assistant for generating and organizing creative GPT ideas and instructions for custom models",
    emoji: "💡",
    color: "from-yellow-600 to-orange-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["AI", "ideas", "creativity", "brainstorming", "organization", "GPT", "prompts", "instructions"],
    category: "Creative & Design"
  },
  {
    icon: Phone,
    title: "Freedom GPT (Phone Call GPT)",
    description: "Deploy AI phone agents with advanced conversational capabilities for business automation",
    emoji: "📞",
    color: "from-blue-700 to-indigo-800",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["AI", "phone", "automation", "business", "conversation", "agents", "voice", "calling", "customer service"],
    category: "Business & Productivity"
  },
  {
    icon: Rocket,
    title: "Cheatlayer Project Atlas (BETA)",
    description: "Advanced automation platform for creating complex workflows and business processes efficiently",
    emoji: "🚀",
    color: "from-orange-600 to-red-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["automation", "workflow", "business", "processes", "productivity", "beta", "advanced", "efficiency"],
    category: "Business & Productivity"
  },
  {
    icon: Users,
    title: "Hugging Face Chat",
    description: "Access various large language models without paid membership and deploy specialized AI assistants",
    emoji: "🤗",
    color: "from-cyan-600 to-blue-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["AI", "language models", "chat", "free", "community", "assistants", "open source", "models"],
    category: "AI Assistants & Chatbots"
  },
  {
    icon: Heart,
    title: "Music Melodies & Lessons GPT",
    description: "Ultimate musical companion for learning instruments, vocals, songwriting with step-by-step guidance",
    emoji: "🎵",
    color: "from-purple-600 to-pink-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["music", "learning", "instruments", "vocals", "education", "songwriting", "lessons", "teaching"],
    category: "Education & Learning"
  },
  {
    icon: Star,
    title: "Sophia Aeterna",
    description: "Embodies timeless wisdom, guiding seekers through philosophy, mysticism, and esotericism",
    emoji: "⭐",
    color: "from-gold-500 to-amber-600",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["wisdom", "philosophy", "mysticism", "spirituality", "guidance", "enlightenment", "esoteric", "ancient"],
    category: "Education & Learning"
  },
  {
    icon: Zap,
    title: "Groq",
    description: "Choose between Mistral and Llama LLMs - free, fast and efficient, comparable to GPT 3.5 Turbo",
    emoji: "⚡",
    color: "from-green-700 to-emerald-800",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["AI", "language models", "fast", "efficient", "free", "LLM", "mistral", "llama", "speed"],
    category: "AI Assistants & Chatbots"
  },
  {
    icon: Radio,
    title: "Suno AI Music Generator",
    description: "Top text-to-music generator - provide a theme and create amazing songs instantly with AI",
    emoji: "🎧",
    color: "from-purple-700 to-indigo-800",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["music", "generation", "AI", "text-to-music", "songs", "creative", "composer", "melody", "beats"],
    category: "Music & Audio"
  },
  {
    icon: Layers,
    title: "Meshy AI",
    description: "Turn text and images into captivating 3D assets in under a minute for games and design",
    emoji: "🎲",
    color: "from-orange-600 to-red-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["3D", "modeling", "assets", "text-to-3D", "images", "design", "games", "graphics", "mesh"],
    category: "Creative & Design"
  },
  {
    icon: Bot,
    title: "BotSonic",
    description: "Build and deploy your own bots for your website effortlessly - no coding knowledge needed",
    emoji: "🤖",
    color: "from-cyan-600 to-blue-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["bots", "website", "no-code", "deployment", "automation", "chatbots", "customer service", "support"],
    category: "Business & Productivity"
  },
  {
    icon: MessageSquare,
    title: "Mistral",
    description: "Comparable to GPT-4 and Claude 2, powerful free chatbot with advanced capabilities",
    emoji: "💬",
    color: "from-blue-600 to-purple-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["AI", "chatbot", "free", "advanced", "conversation", "language model", "GPT", "claude"],
    category: "AI Assistants & Chatbots"
  },
  {
    icon: Video,
    title: "Music Video Maker Studio",
    description: "Full-blown music video & production creative suite - transform yourself into a cinematic star",
    emoji: "🎬",
    color: "from-red-600 to-pink-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["music video", "production", "creative", "cinematic", "video editing", "entertainment", "studio"],
    category: "Video Generation & Editing"
  },
  {
    icon: Play,
    title: "PixVerse AI",
    description: "Create animations from images - bring any image to life effortlessly and for free",
    emoji: "▶️",
    color: "from-green-600 to-teal-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["animation", "images", "AI", "free", "video", "creative", "image-to-video", "motion"],
    category: "Video Generation & Editing"
  },
  {
    icon: Database,
    title: "Labs.Google",
    description: "Expansive suite of AI-powered tools for creativity, learning, and productivity from Google",
    emoji: "🧪",
    color: "from-blue-700 to-indigo-800",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["Google", "AI tools", "creativity", "learning", "productivity", "experimental", "labs", "suite"],
    category: "Technology & Development"
  },
  {
    icon: Users,
    title: "Hey Gen",
    description: "AI video generation with Avatar customization, talking photos, and text-to-image capabilities",
    emoji: "👋",
    color: "from-purple-600 to-pink-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["AI", "video generation", "avatar", "photos", "text-to-image", "personalization", "deepfake", "talking"],
    category: "Video Generation & Editing"
  },
  {
    icon: Video,
    title: "Sora",
    description: "Groundbreaking AI model by OpenAI that transforms text into highly realistic videos",
    emoji: "🎥",
    color: "from-orange-600 to-red-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["AI", "video generation", "OpenAI", "text-to-video", "realistic", "groundbreaking", "revolutionary"],
    category: "Video Generation & Editing"
  },
  {
    icon: Building,
    title: "Build AI",
    description: "Build your own AI enhanced applications effortlessly by simply describing them",
    emoji: "🏗️",
    color: "from-cyan-600 to-blue-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["AI", "applications", "building", "development", "no-code", "description", "custom", "apps"],
    category: "Technology & Development"
  },
  {
    icon: BookOpen,
    title: "Children's Picture Book Maker",
    description: "Create magical picture books for children with AI-powered illustrations and narratives",
    emoji: "📚",
    color: "from-green-600 to-emerald-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["children", "books", "illustrations", "storytelling", "education", "creative", "kids", "learning"],
    category: "Education & Learning"
  },
  {
    icon: Film,
    title: "Movie Scene Maker GPT",
    description: "Transform yourself into a movie star and create stunning personalized movie scenes",
    emoji: "🎬",
    color: "from-red-600 to-pink-700",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["movies", "scenes", "personalization", "entertainment", "creative", "video", "actor", "star"],
    category: "Video Generation & Editing"
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
