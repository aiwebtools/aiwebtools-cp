
import { Tool } from "@/types/tools";
import { 
  Mail, 
  Send, 
  Inbox, 
  Users, 
  Target, 
  BarChart3, 
  Zap,
  Shield,
  Calendar,
  Filter,
  Bell,
  Settings
} from "lucide-react";

export const emailManagementTools: Tool[] = [
  {
    icon: Mail,
    title: "Superhuman",
    description: "AI-powered email client with advanced features like email triage, smart scheduling, and lightning-fast shortcuts for inbox zero productivity.",
    emoji: "⚡",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://superhuman.com/",
    tags: ["Email Agent", "email client", "inbox zero", "productivity", "AI triage", "smart scheduling", "agent"],
    category: "Email Management Tools",
    rating: 4.6,
    totalVotes: 3456
  },
  {
    icon: Send,
    title: "Mailchimp",
    description: "AI-powered email marketing platform with smart recommendations, automated campaigns, and predictive analytics for better engagement.",
    emoji: "🐵",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://mailchimp.com/",
    tags: ["Marketing Agent", "email marketing", "automated campaigns", "predictive analytics", "smart recommendations", "engagement", "agent"],
    category: "Email Management Tools",
    rating: 4.5,
    totalVotes: 4321
  },
  {
    icon: Target,
    title: "ConvertKit",
    description: "Email marketing platform for creators with AI-powered automation, tagging, and segmentation. Build and nurture your audience effectively.",
    emoji: "🎯",
    color: "from-pink-500 to-red-600",
    directUrl: "https://convertkit.com/",
    tags: ["Marketing Agent", "creator focused", "automation", "audience building", "segmentation", "email sequences", "agent"],
    category: "Email Management Tools",
    rating: 4.4,
    totalVotes: 2987
  },
  {
    icon: Inbox,
    title: "Gmail Smart Compose",
    description: "AI-powered writing assistance in Gmail that suggests complete sentences and phrases as you type, helping compose emails faster.",
    emoji: "📬",
    color: "from-red-500 to-orange-600",
    directUrl: "https://mail.google.com/",
    tags: ["Gmail", "smart compose", "writing assistance", "auto-complete", "productivity"],
    category: "Email Management Tools",
    rating: 4.3,
    totalVotes: 5432
  },
  {
    icon: Users,
    title: "Constant Contact",
    description: "Email marketing and automation platform with AI-powered subject line optimization, send time optimization, and content suggestions.",
    emoji: "👥",
    color: "from-blue-500 to-green-600",
    directUrl: "https://www.constantcontact.com/",
    tags: ["email marketing", "subject line optimization", "send time optimization", "content suggestions", "automation"],
    category: "Email Management Tools",
    rating: 4.2,
    totalVotes: 3234
  },
  {
    icon: BarChart3,
    title: "Klaviyo",
    description: "AI-powered email and SMS marketing platform with advanced segmentation, predictive analytics, and personalized customer experiences.",
    emoji: "📊",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://www.klaviyo.com/",
    tags: ["Marketing Agent", "email marketing", "SMS marketing", "predictive analytics", "personalization", "segmentation", "agent"],
    category: "Email Management Tools",
    rating: 4.5,
    totalVotes: 2876
  },
  {
    icon: Shield,
    title: "Proofpoint",
    description: "AI-powered email security platform that protects against phishing, malware, and data loss with advanced threat detection.",
    emoji: "🛡️",
    color: "from-gray-500 to-blue-600",
    directUrl: "https://www.proofpoint.com/",
    tags: ["email security", "phishing protection", "malware detection", "threat detection", "data loss prevention"],
    category: "Email Management Tools",
    rating: 4.4,
    totalVotes: 2654
  },
  {
    icon: Zap,
    title: "Boomerang",
    description: "AI-powered email productivity tool with message scheduling, follow-up reminders, and email response tracking for Gmail and Outlook.",
    emoji: "🪃",
    color: "from-green-500 to-teal-600",
    directUrl: "https://www.boomeranggmail.com/",
    tags: ["email scheduling", "follow-up reminders", "response tracking", "Gmail", "Outlook"],
    category: "Email Management Tools",
    rating: 4.1,
    totalVotes: 2345
  },
  {
    icon: Filter,
    title: "SaneBox",
    description: "AI email management service that automatically filters unimportant emails, schedules delivery, and provides smart notifications.",
    emoji: "📥",
    color: "from-orange-500 to-red-600",
    directUrl: "https://www.sanebox.com/",
    tags: ["email filtering", "smart notifications", "automated organization", "scheduled delivery", "productivity"],
    category: "Email Management Tools",
    rating: 4.0,
    totalVotes: 2123
  },
  {
    icon: Bell,
    title: "Mixmax",
    description: "Sales engagement platform with AI-powered email sequences, tracking, and automation. Enhance email productivity and sales workflows.",
    emoji: "🔔",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://mixmax.com/",
    tags: ["Sales Agent", "sales engagement", "email sequences", "tracking", "automation", "sales workflows", "agent"],
    category: "Email Management Tools",
    rating: 4.2,
    totalVotes: 1987
  }
];
