import { Tool } from "@/types/tools";
import { 
  Zap, Wrench, Calculator, Database, Code,
  Settings, Brain, Bot, Star, Award,
  Stethoscope, Scale, ShieldCheck, Home, Car,
  Plane, MapPin, Gamepad2, BookOpen, Calc,
  Briefcase, HeartHandshake, Baby, PawPrint,
  Leaf, Recycle, Droplets, Fuel, Search,
  Heart, Palette
} from "lucide-react";

export const specializedAndNiche: Tool[] = [
  {
    icon: Stethoscope,
    title: "Medical Assistant GPT",
    description: "AI-powered medical information and assistance tool for healthcare professionals and patients.",
    emoji: "🏥",
    color: "from-red-400 to-pink-500",
    directUrl: "https://medical.ai",
    tags: ["healthcare", "medical", "diagnosis", "treatment"],
    category: "Specialized & Niche"
  },
  {
    icon: Scale,
    title: "Legal Research Assistant",
    description: "Comprehensive legal research and case analysis tool for lawyers and legal professionals.",
    emoji: "⚖️",
    color: "from-blue-400 to-indigo-500",
    directUrl: "https://legalai.com",
    tags: ["legal", "research", "case analysis", "law"],
    category: "Specialized & Niche"
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity Analyst",
    description: "Advanced cybersecurity threat detection and analysis for IT professionals.",
    emoji: "🔒",
    color: "from-green-400 to-teal-500",
    directUrl: "https://cybersec.ai",
    tags: ["cybersecurity", "threat detection", "IT security", "analysis"],
    category: "Specialized & Niche"
  },
  {
    icon: Home,
    title: "Real Estate Advisor",
    description: "Smart real estate analysis and investment guidance for property professionals.",
    emoji: "🏠",
    color: "from-yellow-400 to-orange-500",
    directUrl: "https://realestate.ai",
    tags: ["real estate", "property", "investment", "market analysis"],
    category: "Specialized & Niche"
  },
  {
    icon: Car,
    title: "Automotive Diagnostic Tool",
    description: "AI-powered vehicle diagnostics and maintenance recommendations for automotive professionals.",
    emoji: "🚗",
    color: "from-purple-400 to-pink-500",
    directUrl: "https://autodiag.ai",
    tags: ["automotive", "diagnostics", "vehicle maintenance", "repair"],
    category: "Specialized & Niche"
  },
  {
    icon: Plane,
    title: "Aviation Safety Assistant",
    description: "Flight safety analysis and aviation industry compliance tool.",
    emoji: "✈️",
    color: "from-blue-400 to-cyan-500",
    directUrl: "https://aviation.ai",
    tags: ["aviation", "flight safety", "compliance", "aerospace"],
    category: "Specialized & Niche"
  },
  {
    icon: MapPin,
    title: "GIS Mapping Specialist",
    description: "Geographic information systems and spatial data analysis tool.",
    emoji: "🗺️",
    color: "from-green-400 to-blue-500",
    directUrl: "https://gis.ai",
    tags: ["GIS", "mapping", "geographic data", "spatial analysis"],
    category: "Specialized & Niche"
  },
  {
    icon: Gamepad2,
    title: "Game Development Assistant",
    description: "AI tools for game developers including mechanics design and balancing.",
    emoji: "🎮",
    color: "from-purple-400 to-red-500",
    directUrl: "https://gamedev.ai",
    tags: ["game development", "game design", "mechanics", "balancing"],
    category: "Specialized & Niche"
  },
  {
    icon: BookOpen,
    title: "Academic Research Helper",
    description: "Research methodology and academic writing assistance for scholars and students.",
    emoji: "📚",
    color: "from-indigo-400 to-purple-500",
    directUrl: "https://academic.ai",
    tags: ["academic research", "scholarly writing", "methodology", "citations"],
    category: "Specialized & Niche"
  },
  {
    icon: Calc,
    title: "Financial Modeling Expert",
    description: "Advanced financial modeling and analysis for investment professionals.",
    emoji: "💰",
    color: "from-green-400 to-yellow-500",
    directUrl: "https://finmodel.ai",
    tags: ["financial modeling", "investment analysis", "valuation", "forecasting"],
    category: "Specialized & Niche"
  },
  {
    icon: Briefcase,
    title: "Supply Chain Optimizer",
    description: "Supply chain management and logistics optimization for businesses.",
    emoji: "📦",
    color: "from-orange-400 to-red-500",
    directUrl: "https://supply.ai",
    tags: ["supply chain", "logistics", "optimization", "inventory management"],
    category: "Specialized & Niche"
  },
  {
    icon: HeartHandshake,
    title: "Non-profit Management Tool",
    description: "Specialized tools for non-profit organizations and charity management.",
    emoji: "🤝",
    color: "from-pink-400 to-purple-500",
    directUrl: "https://nonprofit.ai",
    tags: ["non-profit", "charity", "fundraising", "volunteer management"],
    category: "Specialized & Niche"
  },
  {
    icon: Baby,
    title: "Childcare & Education Specialist",
    description: "AI assistant for childcare providers and early childhood education.",
    emoji: "👶",
    color: "from-yellow-400 to-pink-500",
    directUrl: "https://childcare.ai",
    tags: ["childcare", "early education", "child development", "parenting"],
    category: "Specialized & Niche"
  },
  {
    icon: PawPrint,
    title: "Veterinary Assistant",
    description: "Animal health and veterinary practice management tool.",
    emoji: "🐾",
    color: "from-green-400 to-teal-500",
    directUrl: "https://vet.ai",
    tags: ["veterinary", "animal health", "pet care", "veterinary practice"],
    category: "Specialized & Niche"
  },
  {
    icon: Leaf,
    title: "Agricultural Advisor",
    description: "Crop management and agricultural optimization for farmers.",
    emoji: "🌱",
    color: "from-green-400 to-yellow-500",
    directUrl: "https://agri.ai",
    tags: ["agriculture", "farming", "crop management", "soil analysis"],
    category: "Specialized & Niche"
  },
  {
    icon: Recycle,
    title: "Environmental Impact Assessor",
    description: "Environmental impact analysis and sustainability consulting.",
    emoji: "♻️",
    color: "from-green-400 to-blue-500",
    directUrl: "https://enviro.ai",
    tags: ["environmental", "sustainability", "impact assessment", "green technology"],
    category: "Specialized & Niche"
  },
  {
    icon: Droplets,
    title: "Water Resource Manager",
    description: "Water resource planning and management for utilities and municipalities.",
    emoji: "💧",
    color: "from-blue-400 to-cyan-500",
    directUrl: "https://water.ai",
    tags: ["water management", "utilities", "resource planning", "conservation"],
    category: "Specialized & Niche"
  },
  {
    icon: Fuel,
    title: "Drill Baby Drill AI Suite For Oil & Gas",
    description: "Comprehensive AI suite for oil and gas industry professionals. Get expert assistance with drilling operations, reservoir analysis, and energy sector decision-making.",
    emoji: "🛢️",
    color: "from-gray-500 to-yellow-600",
    directUrl: "https://drillbabydrillaisuite.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-cartoon-illustration-of-a-man-with-a-h_lmQ_X.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:600,h:300,cg:true/qt=q:30",
    tags: ["oil and gas", "drilling", "energy", "reservoir analysis", "industry"],
    category: "Specialized & Niche",
    rating: 4.2,
    totalVotes: 1876
  },
  {
    icon: Search,
    title: "Fungus GPT – AI Mushroom Specialist",
    description: "Expert mycology and mushroom identification tool. Get professional guidance on mushroom species, cultivation techniques, foraging safety, and mycological research.",
    emoji: "🍄",
    color: "from-brown-500 to-green-600",
    directUrl: "https://fungusgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-man-with-a-beard-holding-a-_9DLLj.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true/qt=q:30",
    tags: ["mushrooms", "mycology", "identification", "foraging", "cultivation"],
    category: "Specialized & Niche",
    rating: 4.3,
    totalVotes: 2123
  },
  {
    icon: Heart,
    title: "🕊️Mary Magdalene GPT",
    description: "Spiritual guidance and religious studies assistant focused on Mary Magdalene's teachings and biblical history. Explore spiritual wisdom and religious perspectives.",
    emoji: "🕊️",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://marymagdalenegpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=7qxEnBR2BwQ",
    tags: ["spirituality", "religious studies", "biblical history", "wisdom", "guidance"],
    category: "Specialized & Niche",
    rating: 4.1,
    totalVotes: 1789
  },
  {
    icon: Search,
    title: "Snoop Image AI - Experimental AI Image Generation Detector",
    description: "Advanced AI image detection and analysis tool. Identify AI-generated images, detect deepfakes, and analyze visual content authenticity with cutting-edge detection algorithms.",
    emoji: "🔍",
    color: "from-red-500 to-purple-600",
    directUrl: "https://snoopimageai.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/an-advertisement-for-snoop-image-ai-presented-.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:600,h:300,cg:true/qt=q:98",
    tags: ["AI detection", "image analysis", "deepfake detection", "authenticity", "forensics"],
    category: "Specialized & Niche",
    rating: 4.2,
    totalVotes: 2234
  },
  {
    icon: Palette,
    title: "\"MiddleJourney\" Midjourney Prompting Assistant",
    description: "Advanced prompting assistant for Midjourney and AI image generation. Craft perfect prompts, optimize image generation, and master AI art creation techniques.",
    emoji: "🎨",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://texttovideoprompter.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-visually-captivating-advertisement-for-the-.jpeg/:/cr=t:0.11%25,l:0%25,w:100%25,h:75%25/rs=w:600,h:300,cg:true/qt=q:98",
    tags: ["Midjourney", "prompt engineering", "AI art", "image generation", "optimization"],
    category: "Specialized & Niche",
    rating: 4.3,
    totalVotes: 2567
  },
  {
    icon: Target,
    title: "Cannabis Industry Consultant GPT",
    description: "Specialized AI consultant for the cannabis industry, providing regulatory guidance, business strategies, and compliance information.",
    emoji: "🌿",
    color: "from-green-500 to-teal-600",
    directUrl: "https://cannabisindustrygpt.lovable.app/?via=aiwebtools",
    tags: ["cannabis", "regulatory", "compliance", "business strategy", "industry"],
    category: "Specialized & Niche",
    rating: 4.0,
    totalVotes: 1543
  },
  {
    icon: Shield,
    title: "Cybersecurity Analyst GPT",
    description: "Advanced cybersecurity AI assistant providing threat analysis, security recommendations, and cyber defense strategies.",
    emoji: "🛡️",
    color: "from-red-500 to-blue-600",
    directUrl: "https://cybersecuritygpt.lovable.app/?via=aiwebtools",
    tags: ["cybersecurity", "threat analysis", "security", "cyber defense", "protection"],
    category: "Specialized & Niche",
    rating: 4.4,
    totalVotes: 3124
  },
  {
    icon: Crosshair,
    title: "Firearms Safety Instructor GPT",
    description: "Professional firearms safety education assistant providing comprehensive gun safety training, handling protocols, and responsible ownership guidance.",
    emoji: "🎯",
    color: "from-orange-500 to-red-600",
    directUrl: "https://firearmsafetyeducationgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-humanoid-shooting-a-gun-at-a-targ.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    tags: ["firearms safety", "gun safety", "safety training", "responsible ownership", "education"],
    category: "Specialized & Niche",
    rating: 4.1,
    totalVotes: 1876
  }
];
