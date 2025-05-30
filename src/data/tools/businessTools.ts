import { Tool } from "@/types/tools";
import { 
  Briefcase, 
  TrendingUp, 
  DollarSign, 
  BarChart3, 
  PieChart, 
  Calculator,
  Car,
  Building,
  GraduationCap,
  Target,
  Users,
  Lightbulb
} from "lucide-react";

export const businessTools: Tool[] = [
  {
    icon: Car,
    title: "AUTOMOBILE GPT",
    description: "Automobile GPT is your ultimate, all-encompassing Ai automotive expert, designed to guide you through every aspect of the automotive world with precision. Whether you're searching for the best deals at local dealerships, need detailed repair cost assessments, or seek expert advice on maintenance and upgrades, Automobile GPT offers unmatched accuracy and thoroughness. It's your indispensable partner for making informed, precise decisions about your vehicle.",
    emoji: "🚗",
    color: "from-red-500 to-orange-600",
    directUrl: "https://automobilegpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=f_4aFnL-mk8",
    imageUrl: "https://media.discordapp.net/attachments/1150636600846450729/1377298792986185759/automobile.webp",
    tags: ["automotive expert", "dealership deals", "repair costs", "maintenance advice", "vehicle upgrades"],
    category: "Business Tools",
    rating: 4.8,
    totalVotes: 4123
  },
  {
    icon: Building,
    title: "Property Data Finder GPT",
    description: "Property Data Finder GPT by Ai Web Tools LLC delivers unparalleled, precise, and current information about properties. Discover everything from market value and topography to living area, year built, estimated facing direction, geocoordinates, and beyond. Unlock a wealth of property insights like never before!",
    emoji: "🏠",
    color: "from-green-500 to-blue-600",
    directUrl: "https://propertydatafindergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=0ZGBGn9yYwY",
    tags: ["property data", "market value", "topography", "geocoordinates", "real estate intelligence"],
    category: "Business Tools",
    rating: 4.7,
    totalVotes: 3654
  },
  {
    icon: TrendingUp,
    title: "MicroSaaS GPT",
    description: "MicroSaaS GPT is an AI-powered chat assistant that helps entrepreneurs and startups turn niche-specific ideas into fully structured, ready-to-build SaaS applications. By generating innovative concepts and providing complete development blueprints, it streamlines the journey from ideation to deployment. Designed for speed, scalability, and efficiency, it ensures seamless execution using AI code builders.",
    emoji: "💼",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://microsaasgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-mockup-advertisement-with-t_AgWMY.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    tags: ["SaaS development", "startup ideas", "development blueprints", "AI code builders", "entrepreneurship"],
    category: "Business Tools",
    rating: 4.6,
    totalVotes: 3234
  },
  {
    icon: DollarSign,
    title: "Financial Modeling GPT",
    description: "AI-powered financial modeling tool for creating financial forecasts, investment analysis, and financial planning for businesses.",
    emoji: "📊",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://financialmodelinggpt.lovable.app/?via=aiwebtools",
    tags: ["financial modeling", "financial forecasts", "investment analysis", "financial planning", "finance"],
    category: "Business Tools",
    rating: 4.4,
    totalVotes: 3234
  }
];
