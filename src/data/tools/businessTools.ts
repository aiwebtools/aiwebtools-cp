
import { Tool } from "@/types/tools";
import { 
  Briefcase, 
  TrendingUp, 
  BarChart3, 
  Users, 
  Calendar, 
  FileText, 
  PieChart, 
  Target,
  Building2,
  DollarSign
} from "lucide-react";

export const businessTools: Tool[] = [
  {
    icon: Briefcase,
    title: "Notion",
    description: "All-in-one workspace for notes, tasks, wikis, and databases.",
    emoji: "📝",
    color: "from-gray-500 to-gray-700",
    directUrl: "https://notion.so",
    tags: ["productivity", "workspace", "notes", "collaboration"],
    category: "Business & Productivity",
    rating: 4.7,
    totalVotes: 15234
  },
  {
    icon: TrendingUp,
    title: "Salesforce",
    description: "Leading customer relationship management (CRM) platform.",
    emoji: "💼",
    color: "from-blue-500 to-cyan-500",
    directUrl: "https://salesforce.com",
    tags: ["CRM", "sales", "customer management", "business"],
    category: "Business & Productivity",
    rating: 4.4,
    totalVotes: 12876
  },
  {
    icon: BarChart3,
    title: "Tableau",
    description: "Powerful data visualization and business intelligence platform.",
    emoji: "📊",
    color: "from-orange-500 to-red-500",
    directUrl: "https://tableau.com",
    tags: ["data visualization", "analytics", "business intelligence"],
    category: "Business & Productivity",
    rating: 4.5,
    totalVotes: 9876
  },
  {
    icon: Users,
    title: "Slack",
    description: "Business communication platform for teams and organizations.",
    emoji: "💬",
    color: "from-purple-500 to-pink-500",
    directUrl: "https://slack.com",
    tags: ["communication", "team collaboration", "messaging"],
    category: "Business & Productivity",
    rating: 4.6,
    totalVotes: 18765
  },
  {
    icon: Calendar,
    title: "Calendly",
    description: "Easy scheduling software for meetings and appointments.",
    emoji: "📅",
    color: "from-green-500 to-blue-500",
    directUrl: "https://calendly.com",
    tags: ["scheduling", "calendar", "appointments", "meetings"],
    category: "Business & Productivity",
    rating: 4.7,
    totalVotes: 11234
  },
  {
    icon: FileText,
    title: "DocuSign",
    description: "Digital signature and document management platform.",
    emoji: "✍️",
    color: "from-yellow-500 to-orange-500",
    directUrl: "https://docusign.com",
    tags: ["digital signatures", "document management", "legal"],
    category: "Business & Productivity",
    rating: 4.5,
    totalVotes: 8765
  },
  {
    icon: PieChart,
    title: "QuickBooks",
    description: "Accounting software for small and medium businesses.",
    emoji: "💰",
    color: "from-green-600 to-emerald-600",
    directUrl: "https://quickbooks.intuit.com",
    tags: ["accounting", "finance", "business management", "invoicing"],
    category: "Business & Productivity",
    rating: 4.3,
    totalVotes: 13456
  },
  {
    icon: Target,
    title: "HubSpot",
    description: "Inbound marketing, sales, and customer service platform.",
    emoji: "🎯",
    color: "from-orange-500 to-red-600",
    directUrl: "https://hubspot.com",
    tags: ["marketing", "CRM", "sales", "customer service"],
    category: "Business & Productivity",
    rating: 4.5,
    totalVotes: 14567
  },
  {
    icon: Building2,
    title: "Microsoft Teams",
    description: "Collaboration platform combining chat, meetings, and file sharing.",
    emoji: "🏢",
    color: "from-blue-600 to-purple-600",
    directUrl: "https://teams.microsoft.com",
    tags: ["collaboration", "video conferencing", "chat", "file sharing"],
    category: "Business & Productivity",
    rating: 4.2,
    totalVotes: 16789
  },
  {
    icon: DollarSign,
    title: "Stripe",
    description: "Online payment processing platform for businesses.",
    emoji: "💳",
    color: "from-purple-600 to-blue-600",
    directUrl: "https://stripe.com",
    tags: ["payments", "e-commerce", "financial services", "API"],
    category: "Business & Productivity",
    rating: 4.6,
    totalVotes: 12345
  }
];
