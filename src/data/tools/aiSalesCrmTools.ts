import { Tool } from "@/types/tools";
import { TrendingUp, Users, Phone, MessageSquare, Target, BarChart3 } from "lucide-react";
import hubspotAiHero from "@/assets/tools/hubspot-ai-hero.jpg";
import clariHero from "@/assets/tools/clari-hero.jpg";
import pipedriveHero from "@/assets/tools/pipedrive-hero.jpg";
import gongIoHero from "@/assets/tools/gong-io-hero.jpg";
import chorusAiHero from "@/assets/tools/chorus-ai-hero.jpg";
import outreachHero from "@/assets/tools/outreach-hero.jpg";
import salesforceEinsteinHero from "@/assets/tools/salesforce-einstein-hero.jpg";

export const aiSalesCrmTools: Tool[] = [
  {
    icon: TrendingUp,
    title: "Salesforce Einstein",
    description: "AI-powered CRM with predictive analytics, automated data entry, intelligent forecasting, and personalized customer insights. Transform sales processes with AI.",
    emoji: "☁️",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://www.salesforce.com/einstein/?via=aiwebtools",
    imageUrl: salesforceEinsteinHero,
    tags: ["CRM", "sales automation", "predictive analytics", "customer insights", "AI forecasting", "enterprise", "Sales Agent", "agent", "CRM", "Sales", "Analytics & Reporting"],
    category: "AI Sales & CRM",
    rating: 4.8,
    totalVotes: 18234
  },
  {
    icon: Users,
    title: "HubSpot AI",
    description: "AI-enhanced CRM and sales platform with intelligent lead scoring, automated outreach, content optimization, and predictive deal insights. All-in-one growth platform.",
    emoji: "🧲",
    color: "from-orange-500 to-red-600",
    directUrl: "https://www.hubspot.com/?via=aiwebtools",
    imageUrl: hubspotAiHero,
    tags: ["CRM", "marketing automation", "sales automation", "lead scoring", "inbound marketing", "AI insights", "Sales Agent", "agent", "CRM", "Marketing", "Sales"],
    category: "AI Sales & CRM",
    rating: 4.7,
    totalVotes: 16789
  },
  {
    icon: Phone,
    title: "Gong.io",
    description: "AI-powered revenue intelligence platform that captures and analyzes customer interactions. Get insights from sales calls, emails, and meetings to improve win rates.",
    emoji: "🎯",
    color: "from-purple-500 to-indigo-600",
    directUrl: "https://www.gong.io/?via=aiwebtools",
    imageUrl: gongIoHero,
    tags: ["conversation intelligence", "revenue intelligence", "sales coaching", "call analysis", "deal insights", "AI analytics", "Sales Agent", "agent", "Sales", "Analytics & Reporting"],
    category: "AI Sales & CRM",
    rating: 4.8,
    totalVotes: 9876
  },
  {
    icon: MessageSquare,
    title: "Chorus.ai (ZoomInfo)",
    description: "AI conversation intelligence platform that records, transcribes, and analyzes sales calls. Extract insights, coach teams, and close more deals with data-driven intelligence.",
    emoji: "💬",
    color: "from-green-500 to-emerald-600",
    directUrl: "https://www.chorus.ai/?via=aiwebtools",
    imageUrl: chorusAiHero,
    tags: ["conversation intelligence", "call recording", "sales coaching", "transcription", "deal insights", "ZoomInfo", "Sales Agent", "agent", "Sales", "Analytics & Reporting"],
    category: "AI Sales & CRM",
    rating: 4.7,
    totalVotes: 7234
  },
  {
    icon: Target,
    title: "Outreach",
    description: "AI-powered sales engagement platform with intelligent sequencing, automated workflows, and predictive analytics. Optimize every customer interaction and accelerate pipeline.",
    emoji: "📧",
    color: "from-blue-600 to-indigo-700",
    directUrl: "https://www.outreach.io/?via=aiwebtools",
    imageUrl: outreachHero,
    tags: ["sales engagement", "email automation", "sales sequencing", "pipeline management", "AI optimization", "outbound sales", "Sales Agent", "agent", "Sales", "Automation"],
    category: "AI Sales & CRM",
    rating: 4.6,
    totalVotes: 8567
  },
  {
    icon: BarChart3,
    title: "Clari",
    description: "AI-powered revenue platform with intelligent forecasting, pipeline management, and deal insights. Predict revenue outcomes and optimize sales execution with precision.",
    emoji: "📊",
    color: "from-teal-500 to-cyan-600",
    directUrl: "https://www.clari.com/?via=aiwebtools",
    imageUrl: clariHero,
    tags: ["revenue operations", "sales forecasting", "pipeline management", "deal tracking", "AI predictions", "sales analytics", "Sales Agent", "agent", "Sales", "Analytics & Reporting", "Business Intelligence"],
    category: "AI Sales & CRM",
    rating: 4.7,
    totalVotes: 6789
  },
  {
    icon: Users,
    title: "Pipedrive",
    description: "AI-enhanced sales CRM with smart contact data, sales assistant recommendations, automated workflows, and visual pipeline management. Simple yet powerful for sales teams.",
    emoji: "🔄",
    color: "from-green-600 to-teal-700",
    directUrl: "https://www.pipedrive.com/?via=aiwebtools",
    imageUrl: pipedriveHero,
    tags: ["CRM", "pipeline management", "sales automation", "AI assistant", "contact management", "visual sales", "Sales Agent", "agent", "CRM", "Sales"],
    category: "AI Sales & CRM",
    rating: 4.6,
    totalVotes: 11234
  }
];
