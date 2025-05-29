
import { Tool } from "@/types/tools";
import { 
  User, 
  FileText, 
  TrendingUp, 
  Briefcase, 
  Users, 
  Search, 
  Building, 
  Target, 
  Star, 
  Zap, 
  Award
} from "lucide-react";

export const resumeAndCareerTools: Tool[] = [
  {
    icon: Award,
    title: "Kick Resume",
    description: "Leading AI-driven resume builder trusted by over 3.6 million job seekers worldwide. Utilizes OpenAI's GPT-4 to quickly generate impressive resumes. Customizable templates, real-world examples, AI Cover Letter Builder.",
    emoji: "🚀",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://www.kickresume.com/en/",
    tags: ["3.6M job seekers", "GPT-4", "customizable templates", "cover letter builder", "GDPR compliant"],
    category: "Resume & Career Tools",
    rating: 4.6,
    totalVotes: 4567
  },
  {
    icon: Target,
    title: "Resumaker.ai",
    description: "Efficient online resume-building tool creating professional resumes in minutes. 35,810+ company-approved templates with AI engine for auto-completion and data filling. Strong 256-bit encryption for data security.",
    emoji: "📄",
    color: "from-green-500 to-blue-600",
    directUrl: "https://resumaker.ai/",
    tags: ["35k+ templates", "AI auto-completion", "256-bit encryption", "HR professionals", "data security"],
    category: "Resume & Career Tools",
    rating: 4.4,
    totalVotes: 3789
  },
  {
    icon: Briefcase,
    title: "REZI",
    description: "AI-driven resume builder revolutionizing resume creation. Uses cutting-edge AI for writing, editing, formatting, and optimization. Over 1.3M users, 62.18% interview rate, 8.23/10 user review score.",
    emoji: "💼",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://www.rezi.ai/?via=aiwebtools",
    tags: ["1.3M users", "62.18% interview rate", "ATS targeting", "LinkedIn integration", "100% money-back"],
    category: "Resume & Career Tools",
    rating: 4.8,
    totalVotes: 6234
  },
  {
    icon: FileText,
    title: "Refrens",
    description: "AI-powered platform for freelancers and small businesses managing finances and client relationships. Features Invoice Generator tool with customizable templates. 4.8/5 rating based on over 11,700 reviews.",
    emoji: "📊",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://www.refrens.com/free-online-invoice-generator",
    tags: ["freelancers", "small business", "invoice generator", "4.8/5 rating", "11.7k reviews", "client relationships"],
    category: "Resume & Career Tools",
    rating: 4.8,
    totalVotes: 5678
  },
  {
    icon: Search,
    title: "LoopCV",
    description: "AI-powered platform streamlining job searching by automating applications, personalized recruiter emails, and interview securing. Trusted by 50,000+ users in top global companies.",
    emoji: "🔄",
    color: "from-blue-500 to-green-600",
    directUrl: "https://loopcv.pro/?via=Aiwebtools",
    tags: ["job search automation", "recruiter outreach", "interview optimization", "career advancement", "application tracking"],
    category: "Resume & Career Tools",
    rating: 4.4,
    totalVotes: 3456
  }
];
