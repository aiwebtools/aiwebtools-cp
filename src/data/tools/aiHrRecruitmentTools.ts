import { Tool } from "@/types/tools";
import { Users, Briefcase, Target, UserCheck, Search } from "lucide-react";

import hirevueHero from "@/assets/tools/hirevue-hero.jpg";
import pymetricsHero from "@/assets/tools/pymetrics-hero.jpg";
import eightfoldAiHero from "@/assets/tools/eightfold-ai-hero.jpg";
import paradoxHero from "@/assets/tools/paradox-hero.jpg";
import seekoutHero from "@/assets/tools/seekout-hero.jpg";
import workdayHero from "@/assets/tools/workday-hero.jpg";

export const aiHrRecruitmentTools: Tool[] = [
  {
    icon: Users,
    title: "HireVue",
    description: "AI-powered video interviewing and assessment platform. Conduct structured interviews, analyze candidate responses, and make data-driven hiring decisions with AI insights.",
    emoji: "🎥",
    color: "from-blue-500 to-indigo-600",
    directUrl: "https://www.hirevue.com/?via=aiwebtools",
    imageUrl: hirevueHero,
    tags: ["Automation Agent", "video interviews", "candidate assessment", "AI hiring", "recruitment", "talent acquisition", "interview analysis", "agent", "HR & Recruitment"],
    category: "AI HR & Recruitment",
    rating: 4.6,
    totalVotes: 5678
  },
  {
    icon: Briefcase,
    title: "Pymetrics",
    description: "AI-powered talent matching platform using behavioral assessments and neuroscience games. Match candidates to roles based on cognitive and emotional attributes.",
    emoji: "🧠",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://www.pymetrics.ai/?via=aiwebtools",
    imageUrl: pymetricsHero,
    tags: ["Automation Agent", "talent matching", "behavioral assessment", "AI recruitment", "candidate evaluation", "skills assessment", "neuroscience", "agent", "HR & Recruitment"],
    category: "AI HR & Recruitment",
    rating: 4.5,
    totalVotes: 4234
  },
  {
    icon: Target,
    title: "Eightfold AI",
    description: "AI talent intelligence platform for recruiting, retention, and workforce planning. Match candidates to opportunities and predict career trajectories with deep learning.",
    emoji: "🎯",
    color: "from-green-500 to-emerald-600",
    directUrl: "https://eightfold.ai/?via=aiwebtools",
    imageUrl: eightfoldAiHero,
    tags: ["Automation Agent", "talent intelligence", "workforce planning", "AI recruitment", "career pathing", "retention", "skills matching", "agent", "HR & Recruitment", "Analytics & Reporting"],
    category: "AI HR & Recruitment",
    rating: 4.7,
    totalVotes: 6789
  },
  {
    icon: UserCheck,
    title: "Paradox (Olivia)",
    description: "AI recruiting assistant that automates candidate screening, interview scheduling, and communication. Chat-based experience for candidates and recruiters.",
    emoji: "🤖",
    color: "from-orange-500 to-red-600",
    directUrl: "https://www.paradox.ai/?via=aiwebtools",
    imageUrl: paradoxHero,
    tags: ["Chatbot Agent", "Automation Agent", "AI chatbot", "candidate screening", "interview scheduling", "recruitment automation", "conversational AI", "hiring assistant", "agent", "HR & Recruitment", "Automation"],
    category: "AI HR & Recruitment",
    rating: 4.6,
    totalVotes: 5432
  },
  {
    icon: Search,
    title: "SeekOut",
    description: "AI-powered talent sourcing and recruiting platform. Find hard-to-reach candidates, build diverse talent pipelines, and accelerate hiring with intelligent search.",
    emoji: "🔍",
    color: "from-teal-500 to-cyan-600",
    directUrl: "https://www.seekout.com/?via=aiwebtools",
    imageUrl: seekoutHero,
    tags: ["Research Agent", "talent sourcing", "candidate search", "diversity hiring", "recruitment", "talent pipeline", "AI search", "agent", "HR & Recruitment"],
    category: "AI HR & Recruitment",
    rating: 4.5,
    totalVotes: 4567
  },
  {
    icon: Users,
    title: "Workday Recruiting",
    description: "AI-enhanced recruiting and talent management system. Streamline hiring processes, analyze candidate fit, and optimize workforce planning with predictive analytics.",
    emoji: "💼",
    color: "from-indigo-500 to-purple-600",
    directUrl: "https://www.workday.com/en-us/products/human-capital-management/recruiting.html?via=aiwebtools",
    imageUrl: workdayHero,
    tags: ["Automation Agent", "ATS", "talent management", "workforce planning", "recruitment", "enterprise HR", "predictive analytics", "agent", "HR & Recruitment", "Analytics & Reporting"],
    category: "AI HR & Recruitment",
    rating: 4.6,
    totalVotes: 7891
  }
];
