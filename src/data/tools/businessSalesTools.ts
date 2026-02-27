
import { Tool } from "@/types/tools";
import { 
  TrendingUp, 
  Users, 
  Target, 
  BarChart3, 
  Briefcase, 
  Phone,
  Mail,
  Calendar,
  MessageSquare,
  PieChart,
  Building
} from "lucide-react";

import hubspotSalesHero from "@/assets/tools/hubspot-sales-hero.jpg";
import salesforceHero from "@/assets/tools/salesforce-hero.jpg";
import pipedriveHero from "@/assets/tools/pipedrive-hero.jpg";
import intercomHero from "@/assets/tools/intercom-hero.jpg";
import gongHero from "@/assets/tools/gong-hero.jpg";
import outreachHero from "@/assets/tools/outreach-hero.jpg";
import calendlyHero from "@/assets/tools/calendly-hero.jpg";
import zoominfoHero from "@/assets/tools/zoominfo-hero.jpg";
import mondayComHero from "@/assets/tools/monday-com-hero.jpg";

export const businessSalesTools: Tool[] = [
  {
    icon: Users,
    title: "HubSpot",
    description: "Comprehensive CRM platform with AI-powered sales, marketing, and customer service tools. Automate workflows and enhance customer relationships.",
    emoji: "🏢",
    color: "from-orange-500 to-red-600",
    directUrl: "https://www.hubspot.com/?via=aiwebtools",
    imageUrl: hubspotSalesHero,
    tags: ["CRM", "sales automation", "marketing", "customer service", "workflows", "CRM", "Marketing", "Sales", "CRM & Sales", "Marketing Automation", "Lead Generation"],
    category: "Business & Sales Tools",
    rating: 4.7,
    totalVotes: 5432
  },
  {
    icon: TrendingUp,
    title: "Salesforce",
    description: "World's leading CRM platform with AI-powered Einstein features. Manage sales pipelines, customer data, and business processes at scale.",
    emoji: "📈",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://www.salesforce.com/?via=aiwebtools",
    imageUrl: salesforceHero,
    tags: ["CRM", "Einstein AI", "sales pipelines", "customer data", "enterprise", "CRM", "Sales", "Analytics & Reporting", "CRM & Sales", "Sales Enablement", "Analytics & Tracking"],
    category: "Business & Sales Tools",
    rating: 4.6,
    totalVotes: 4567
  },
  {
    icon: Target,
    title: "Pipedrive",
    description: "Sales CRM designed for small and medium businesses. Visual sales pipeline management with AI-powered insights and automation.",
    emoji: "🎯",
    color: "from-green-500 to-blue-600",
    directUrl: "https://www.pipedrive.com/?via=aiwebtools",
    imageUrl: pipedriveHero,
    tags: ["sales CRM", "pipeline management", "SMB", "AI insights", "automation", "CRM", "Sales", "CRM & Sales", "Sales Enablement"],
    category: "Business & Sales Tools",
    rating: 4.5,
    totalVotes: 3456
  },
  {
    icon: MessageSquare,
    title: "Intercom",
    description: "Customer messaging platform with AI chatbots and support automation. Engage customers throughout their lifecycle with personalized conversations.",
    emoji: "💬",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://www.intercom.com/?via=aiwebtools",
    imageUrl: intercomHero,
    tags: ["customer messaging", "AI chatbots", "support automation", "customer engagement", "lifecycle", "Customer Support", "Sales", "CRM & Sales", "Marketing Automation"],
    category: "Business & Sales Tools",
    rating: 4.4,
    totalVotes: 3234
  },
  {
    icon: Phone,
    title: "Gong",
    description: "Revenue intelligence platform that captures and analyzes sales conversations. AI-powered insights to improve deal outcomes and team performance.",
    emoji: "📞",
    color: "from-indigo-500 to-purple-600",
    directUrl: "https://www.gong.io/?via=aiwebtools",
    imageUrl: gongHero,
    tags: ["revenue intelligence", "sales conversations", "AI insights", "deal outcomes", "team performance", "Sales", "Analytics & Reporting", "Analytics & Tracking", "Sales Enablement"],
    category: "Business & Sales Tools",
    rating: 4.6,
    totalVotes: 2987
  },
  {
    icon: Mail,
    title: "Outreach",
    description: "Sales engagement platform that helps teams efficiently and effectively engage prospects and customers. AI-powered sequence optimization.",
    emoji: "📧",
    color: "from-red-500 to-pink-600",
    directUrl: "https://www.outreach.io/?via=aiwebtools",
    imageUrl: outreachHero,
    tags: ["sales engagement", "prospect engagement", "sequence optimization", "AI-powered", "efficiency", "Sales", "Automation", "Lead Generation", "Marketing Automation", "Sales Enablement"],
    category: "Business & Sales Tools",
    rating: 4.3,
    totalVotes: 2654
  },
  {
    icon: Calendar,
    title: "Calendly",
    description: "Automated scheduling tool that eliminates back-and-forth emails. AI-powered meeting scheduling with integrations and workflow automation.",
    emoji: "📅",
    color: "from-blue-500 to-green-600",
    directUrl: "https://calendly.com/?via=aiwebtools",
    imageUrl: calendlyHero,
    tags: ["automated scheduling", "meeting scheduling", "workflow automation", "integrations", "efficiency", "Meeting & Scheduling", "Automation", "Sales Enablement"],
    category: "Business & Sales Tools",
    rating: 4.5,
    totalVotes: 3789
  },
  {
    icon: BarChart3,
    title: "ZoomInfo",
    description: "B2B database and sales intelligence platform. Find and connect with prospects using AI-powered contact and company data.",
    emoji: "📊",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://www.zoominfo.com/?via=aiwebtools",
    imageUrl: zoominfoHero,
    tags: ["B2B database", "sales intelligence", "prospect finding", "contact data", "company data", "Sales", "Business Intelligence", "Lead Generation", "Market Research", "Sales Enablement"],
    category: "Business & Sales Tools",
    rating: 4.4,
    totalVotes: 2876
  },
  {
    icon: Building,
    title: "Monday.com",
    description: "Work operating system with AI features for project management, CRM, and team collaboration. Customize workflows and automate processes.",
    emoji: "🏗️",
    color: "from-orange-500 to-yellow-600",
    directUrl: "https://monday.com/?via=aiwebtools",
    imageUrl: mondayComHero,
    tags: ["work OS", "project management", "CRM", "team collaboration", "workflow automation", "Project Management", "Team Collaboration", "CRM", "CRM & Sales", "Marketing Automation"],
    category: "Business & Sales Tools",
    rating: 4.3,
    totalVotes: 3456
  }
];
