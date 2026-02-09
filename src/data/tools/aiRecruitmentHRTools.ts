
import { Tool } from "@/types/tools";
import { 
  Users, 
  Briefcase, 
  Video, 
  MessageCircle, 
  Target,
  TrendingUp
} from "lucide-react";

import leverHero from "@/assets/tools/lever-hero.jpg";
import greenhouseHero from "@/assets/tools/greenhouse-hero.jpg";
import hirevueHero from "@/assets/tools/hirevue-hero.jpg";
import paradoxHero from "@/assets/tools/paradox-hero.jpg";
import eightfoldAiHero from "@/assets/tools/eightfold-ai-hero.jpg";
import phenomHero from "@/assets/tools/phenom-hero.jpg";

export const aiRecruitmentHRTools: Tool[] = [
  {
    icon: Briefcase,
    title: "Lever",
    description: "AI-powered recruiting software with intelligent candidate sourcing, collaborative hiring workflows, and analytics for talent acquisition.",
    emoji: "💼",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://www.lever.co/?via=aiwebtools",
    imageUrl: leverHero,
    tags: ["recruiting software", "candidate sourcing", "hiring workflows", "talent acquisition", "recruitment analytics"],
    category: "AI Recruitment & HR Tools",
    rating: 4.6,
    totalVotes: 4567
  },
  {
    icon: Users,
    title: "Greenhouse",
    description: "Comprehensive hiring platform with AI-driven candidate screening, structured interviews, and data-driven recruiting decisions.",
    emoji: "🌱",
    color: "from-green-500 to-teal-600",
    directUrl: "https://www.greenhouse.com/?via=aiwebtools",
    imageUrl: greenhouseHero,
    tags: ["hiring platform", "candidate screening", "structured interviews", "recruiting decisions", "ATS"],
    category: "AI Recruitment & HR Tools",
    rating: 4.7,
    totalVotes: 5432
  },
  {
    icon: Video,
    title: "HireVue",
    description: "AI video interviewing and assessment platform using machine learning for candidate evaluation and predictive hiring insights.",
    emoji: "🎥",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://www.hirevue.com/?via=aiwebtools",
    imageUrl: hirevueHero,
    tags: ["video interviews", "AI assessment", "candidate evaluation", "predictive hiring", "talent insights"],
    category: "AI Recruitment & HR Tools",
    rating: 4.4,
    totalVotes: 3876
  },
  {
    icon: MessageCircle,
    title: "Paradox (Olivia)",
    description: "AI recruiting assistant automating candidate communication, interview scheduling, and screening with conversational AI chatbot.",
    emoji: "💬",
    color: "from-orange-500 to-red-600",
    directUrl: "https://www.paradox.ai/?via=aiwebtools",
    imageUrl: paradoxHero,
    tags: ["AI assistant", "automated scheduling", "candidate communication", "chatbot recruiting", "screening automation"],
    category: "AI Recruitment & HR Tools",
    rating: 4.5,
    totalVotes: 4123
  },
  {
    icon: Target,
    title: "Eightfold AI",
    description: "AI talent intelligence platform for recruiting, retention, and workforce development using deep learning for talent matching.",
    emoji: "🎯",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://eightfold.ai/?via=aiwebtools",
    imageUrl: eightfoldAiHero,
    tags: ["talent intelligence", "workforce development", "talent matching", "retention", "deep learning HR"],
    category: "AI Recruitment & HR Tools",
    rating: 4.6,
    totalVotes: 3987
  },
  {
    icon: TrendingUp,
    title: "Phenom",
    description: "AI-powered talent experience platform with personalized candidate engagement, career site optimization, and smart recruiting automation.",
    emoji: "📈",
    color: "from-indigo-500 to-purple-600",
    directUrl: "https://www.phenom.com/?via=aiwebtools",
    imageUrl: phenomHero,
    tags: ["talent experience", "candidate engagement", "career sites", "recruiting automation", "personalization"],
    category: "AI Recruitment & HR Tools",
    rating: 4.5,
    totalVotes: 3456
  }
];
