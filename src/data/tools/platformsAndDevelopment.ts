
import { Tool } from "@/types/tools";
import { 
  Code, 
  Palette, 
  Bot, 
  Building, 
  TrendingUp, 
  Heart, 
  Stethoscope, 
  Calculator,
  Target,
  Zap
} from "lucide-react";

export const platformsAndDevelopment: Tool[] = [
  {
    icon: Palette,
    title: "Leonardo AI",
    description: "Advanced AI-powered image generation platform for creating stunning artwork, designs, and visual content with professional-quality results.",
    emoji: "🎨",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://app.leonardo.ai/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/image_converted.jpeg/:/rs=w:1200,h:600,cg:true,m/cr=w:1200,h:600",
    category: "AI Art Generation",
    tags: ["AI art", "image generation", "design", "creativity"],
    rating: 4.8,
    totalVotes: 4567
  },
  {
    icon: Bot,
    title: "GEMINI/GOOGLE AI STUDIO",
    description: "Google's advanced AI platform for developing and deploying AI applications with powerful multimodal capabilities and Google's latest AI technology.",
    emoji: "🤖",
    color: "from-blue-500 to-green-600",
    directUrl: "http://g.co/g1referral/911Z9NTK",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/gemini_multimodal_live.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    category: "AI Development Platforms",
    tags: ["Google AI", "Gemini", "AI development", "multimodal AI"],
    rating: 4.9,
    totalVotes: 5678
  },
  {
    icon: Building,
    title: "Nucleus AI Inbound Call Agents Platform",
    description: "Advanced AI-powered call center platform for automated customer service, lead generation, and business communication solutions.",
    emoji: "📞",
    color: "from-blue-600 to-purple-600",
    directUrl: "http://www.nucleus.com/",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-cinematic-shot-of-a-futuristic-office-_x8S3w.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    category: "Business Communication",
    tags: ["call center", "AI agents", "customer service", "automation"],
    rating: 4.6,
    totalVotes: 2987
  },
  {
    icon: Stethoscope,
    title: "Personalized DR. GPT (Doctor GPT)",
    description: "AI medical assistant providing health information, symptom analysis, and medical guidance for patients and healthcare professionals.",
    emoji: "👨‍⚕️",
    color: "from-green-500 to-blue-600",
    directUrl: "https://aidoctorgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=EKKIttUG0sI",
    category: "Healthcare AI",
    tags: ["medical AI", "health advice", "diagnosis", "healthcare"],
    rating: 4.7,
    totalVotes: 3456
  },
  {
    icon: TrendingUp,
    title: "Trader GPT",
    description: "Advanced trading assistant for financial markets analysis, investment strategies, and trading decision support with real-time insights.",
    emoji: "📈",
    color: "from-green-600 to-blue-700",
    directUrl: "https://tradergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=Izs80Fak4hQ",
    category: "Financial Trading",
    tags: ["trading", "finance", "investment", "market analysis"],
    rating: 4.5,
    totalVotes: 2654
  },
  {
    icon: Heart,
    title: "Marriage Mender GPT",
    description: "Relationship counseling and marriage guidance tool for couples seeking to improve communication and strengthen their relationships.",
    emoji: "💕",
    color: "from-pink-500 to-red-600",
    directUrl: "https://marriagemendergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=3HCv5_QldrU",
    category: "Relationship Counseling",
    tags: ["marriage", "relationships", "counseling", "communication"],
    rating: 4.4,
    totalVotes: 2134
  },
  {
    icon: Target,
    title: "Solar Land Assessor GPT",
    description: "Evaluate land suitability for solar installations with comprehensive analysis of solar potential, terrain, and regulatory considerations.",
    emoji: "☀️",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://solarlandgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=CEca8C2GIpY",
    category: "Renewable Energy",
    tags: ["solar energy", "land assessment", "renewable energy", "sustainability"],
    rating: 4.5,
    totalVotes: 2345
  },
  {
    icon: Calculator,
    title: "Data Research Analysis Report GPT",
    description: "Comprehensive data analysis and reporting tool for creating detailed research reports, statistical analysis, and data visualization.",
    emoji: "📊",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://dataanalysisandreportai.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=idxjOwUAD_I",
    category: "Data Analysis",
    tags: ["data analysis", "research", "reporting", "statistics"],
    rating: 4.6,
    totalVotes: 2876
  },
  {
    icon: Building,
    title: "The Resume & Job Finder Ai Suite",
    description: "Complete job search toolkit with resume optimization, job matching, interview preparation, and career guidance for job seekers.",
    emoji: "💼",
    color: "from-green-500 to-blue-600",
    directUrl: "https://resumeandjobsgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-happy-man-with-a-job-offer-_n6N-k.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    category: "Career Development",
    tags: ["resume", "job search", "career", "employment"],
    rating: 4.7,
    totalVotes: 3287
  },
  {
    icon: TrendingUp,
    title: "MATERIUMOR- MATERIAL VALUATION GPT",
    description: "Advanced material valuation and assessment tool for determining the worth and properties of various materials and substances.",
    emoji: "💎",
    color: "from-purple-600 to-blue-700",
    directUrl: "https://materialvaluationgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=tbZu4vnsY_8",
    category: "Material Science",
    tags: ["material valuation", "assessment", "properties", "analysis"],
    rating: 4.4,
    totalVotes: 1876
  }
];
