
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
  Zap,
  Globe,
  Settings
} from "lucide-react";

import huggingfaceSpacesHero from "@/assets/tools/huggingface-spaces-hero.jpg";
import copycoderHero from "@/assets/tools/copycoder-hero.jpg";
import gumloopHero from "@/assets/tools/gumloop-hero.jpg";
import n8nHero from "@/assets/tools/n8n-hero.jpg";

export const platformsAndDevelopment: Tool[] = [
  {
    icon: Bot,
    title: "GEMINI/GOOGLE AI STUDIO",
    description: "Google's advanced AI platform for developing and deploying AI applications with powerful multimodal capabilities and Google's latest AI technology.",
    emoji: "🤖",
    color: "from-blue-500 to-green-600",
    directUrl: "http://g.co/g1referral/911Z9NTK",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/gemini_multimodal_live.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    category: "DEVELOPMENT & CODING",
    tags: ["Google AI", "Gemini", "AI development", "multimodal AI", "All-in-One Suite", "Multi-Tool Platform"],
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
    tags: ["call center", "AI agents", "customer service", "automation", "Automation Platform", "Workflow Optimization"],
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
    videoUrl: "https://youtu.be/jwjNOKP5mf4",
    category: "Healthcare AI",
    tags: ["medical AI", "health advice", "diagnosis", "healthcare", "All-in-One Suite"],
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
    tags: ["trading", "finance", "investment", "market analysis", "Task Management"],
    rating: 4.5,
    totalVotes: 2654
  },
  {
    icon: Target,
    title: "Solar Land Assessor GPT",
    description: "I assist Solar Professionals with assessing land properties for future solar installation projects.",
    emoji: "☀️",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://solarlandgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=CEca8C2GIpY",
    category: "Renewable Energy",
    tags: ["solar energy", "land assessment", "renewable energy", "sustainability", "Checklist & Planning"],
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
    tags: ["data analysis", "research", "reporting", "statistics", "Data Conversion", "Task Management"],
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
    tags: ["resume", "job search", "career", "employment", "All-in-One Suite", "Workflow Optimization"],
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
    tags: ["material valuation", "assessment", "properties", "analysis", "Data Conversion"],
    rating: 4.4,
    totalVotes: 1876
  },
  {
    icon: Globe,
    title: "Hugging Face Spaces",
    description: "Community-driven platform empowering developers to build, deploy, and share interactive AI applications with Gradio and Streamlit integration for rapid experimentation.",
    emoji: "🤗",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://huggingface.co/spaces",
    imageUrl: huggingfaceSpacesHero,
    tags: ["community platform", "AI applications", "Gradio", "Streamlit", "open source ML", "Multi-Tool Platform", "Team Collaboration"],
    category: "DEVELOPMENT & CODING",
    rating: 4.8,
    totalVotes: 5234
  },
  {
    icon: Code,
    title: "CopyCoder.AI",
    description: "Advanced AI tool converting UI screenshots into optimized prompts for AI code generators, streamlining development by eliminating manual UI descriptions.",
    emoji: "📸",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://copycoder.ai/",
    imageUrl: copycoderHero,
    tags: ["UI screenshots", "code generation", "AI prompts", "development tools", "automation", "Automation Platform", "Code Assistant"],
    category: "DEVELOPMENT & CODING",
    rating: 4.4,
    totalVotes: 2456
  },
  {
    icon: Settings,
    title: "n8n Workflow Automation",
    description: "Open-source workflow automation tool connecting different apps and services without coding, offering more flexibility than Zapier with self-hosting capabilities.",
    emoji: "🔗",
    color: "from-green-500 to-blue-600",
    directUrl: "https://n8n.io/",
    imageUrl: n8nHero,
    tags: ["workflow automation", "open source", "no-code", "self-hosted", "app integration", "Automation Platform", "Workflow Optimization"],
    category: "DEVELOPMENT & CODING",
    rating: 4.6,
    totalVotes: 3456
  },
  {
    icon: Bot,
    title: "Gumloop AI Automation",
    description: "No-code AI automation platform with drag-and-drop interface for complex workflows, data extraction, scoring with 40+ platform integrations and self-hosting options.",
    emoji: "🔄",
    color: "from-cyan-500 to-purple-600",
    directUrl: "https://www.gumloop.com/",
    imageUrl: gumloopHero,
    tags: ["no-code automation", "drag-and-drop", "data extraction", "platform integrations", "self-hosting", "Automation Platform", "Multi-Tool Platform"],
    category: "DEVELOPMENT & CODING",
    rating: 4.5,
    totalVotes: 2890
  }
];
