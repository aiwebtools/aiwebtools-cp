
import { Tool } from "@/types/tools";
import { 
  Briefcase, 
  Calculator, 
  TrendingUp, 
  Users, 
  Target, 
  BarChart3,
  Shield,
  Wrench,
  MapPin,
  Truck,
  HardHat
} from "lucide-react";

export const businessTools: Tool[] = [
  {
    icon: Calculator,
    title: "Financial Calculator Pro",
    description: "Advanced financial calculations for business planning, investments, loans, and complex financial modeling with real-time market data integration.",
    emoji: "💰",
    color: "from-green-500 to-emerald-600",
    directUrl: "https://financialcalculator.ai",
    tags: ["financial planning", "calculations", "investments", "business finance", "market analysis", "Finance & Accounting", "Task Management"],
    category: "Business Tools",
    rating: 4.7,
    totalVotes: 3456
  },
  {
    icon: TrendingUp,
    title: "Market Analysis Suite",
    description: "Comprehensive market research and competitive analysis tools for strategic business decision making and market positioning.",
    emoji: "📈",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://marketanalysis.pro",
    tags: ["market research", "competitive analysis", "business intelligence", "strategic planning", "Analytics & Reporting", "Business Intelligence", "All-in-One Suite"],
    category: "Business Tools",
    rating: 4.8,
    totalVotes: 4123
  },
  {
    icon: Users,
    title: "Team Management Hub",
    description: "Advanced team collaboration and project management platform with AI-powered productivity insights and workflow optimization.",
    emoji: "👥",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://teamhub.ai",
    tags: ["team management", "collaboration", "project management", "productivity", "workflow", "Team Collaboration", "Project Management", "Task Management"],
    category: "Business Tools",
    rating: 4.6,
    totalVotes: 3789
  },
  {
    icon: Wrench,
    title: "IT SUPPORT GPT",
    description: "Comprehensive IT support and troubleshooting assistance for technical issues, system maintenance, and technology solutions. Provides expert guidance for hardware, software, and network problems.",
    emoji: "🔧",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://chatgpt.com/g/g-683b97eb3ac081918a1755a261409586-it-support-gpt",
    tags: ["IT support", "troubleshooting", "technical assistance", "system maintenance", "technology solutions", "Customer Support", "Workflow Optimization"],
    category: "Business Tools",
    rating: 4.6,
    totalVotes: 4321
  },
  {
    icon: Shield,
    title: "Security Consultant GPT",
    description: "Expert cybersecurity consulting and risk assessment services. Provides security audits, threat analysis, and recommendations for protecting digital assets and infrastructure.",
    emoji: "🛡️",
    color: "from-red-500 to-orange-600",
    directUrl: "https://chatgpt.com/g/g-683b98ddf8708191a5a25fc94d0f0d32-security-consultant-gpt",
    tags: ["cybersecurity", "security consulting", "risk assessment", "threat analysis", "digital protection", "Analytics & Reporting", "Task Management"],
    category: "Business Tools",
    rating: 4.7,
    totalVotes: 3987
  },
  {
    icon: MapPin,
    title: "Urban Planner GPT",
    description: "Professional urban planning and city development consultation. Assists with zoning analysis, community development, sustainable planning, and municipal project guidance.",
    emoji: "🏙️",
    color: "from-green-500 to-blue-600",
    directUrl: "https://chatgpt.com/g/g-68bba6576cb881918abbcf39ac5d6c7b-urban-planner-gpt",
    tags: ["urban planning", "city development", "zoning", "community development", "sustainable planning", "Project Management", "Checklist & Planning"],
    category: "Business Tools",
    rating: 4.5,
    totalVotes: 3456
  },
  {
    icon: Truck,
    title: "Logistics Manager GPT",
    description: "Supply chain and logistics management expertise. Provides guidance on inventory optimization, shipping coordination, warehouse management, and distribution strategies.",
    emoji: "📦",
    color: "from-orange-500 to-red-600",
    directUrl: "https://chatgpt.com/g/g-683b9a863cdc81919593479698ad685e-logistics-manager-gpt",
    tags: ["logistics management", "supply chain", "inventory optimization", "shipping", "warehouse management", "Automation Platform", "Workflow Optimization"],
    category: "Business Tools",
    rating: 4.6,
    totalVotes: 4123
  },
  {
    icon: HardHat,
    title: "SAFETY INSPECTOR GPT",
    description: "Professional safety inspection and compliance consulting. Provides workplace safety assessments, regulatory compliance guidance, and risk mitigation strategies for various industries.",
    emoji: "🦺",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://chatgpt.com/g/g-683b9c463ec48191bd96a0013905aa97-safety-inspector-gpt",
    tags: ["safety inspection", "compliance", "workplace safety", "risk assessment", "regulatory guidance", "HR & Recruitment", "Checklist & Planning"],
    category: "Business Tools",
    rating: 4.5,
    totalVotes: 3789
  }
];
