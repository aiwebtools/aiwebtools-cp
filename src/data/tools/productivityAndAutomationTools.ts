
import { Tool } from "@/types/tools";
import { 
  Zap, 
  Mic, 
  FileText, 
  Calendar, 
  Bot, 
  Target,
  Sparkles,
  MessageSquare
} from "lucide-react";

export const productivityAndAutomationTools: Tool[] = [
  {
    icon: Mic,
    title: "FireFlies AI",
    description: "Streamlines meeting management by automating transcription, summarization, search, and analysis of voice conversations. Trusted by over 100,000 organizations, records and transcribes meetings across video-conferencing platforms.",
    emoji: "🔥",
    color: "from-orange-500 to-red-600",
    directUrl: "https://fireflies.ai/?gr_pk=Orzo&gr_uid=lqX7",
    tags: ["100k+ organizations", "meeting transcription", "voice analysis", "conversation intelligence", "CRM automation"],
    category: "Productivity & Automation Tools",
    rating: 4.7,
    totalVotes: 5234
  },
  {
    icon: Zap,
    title: "Magical",
    description: "Productivity app that employs AI to streamline repetitive tasks. Over 500,000 users across 20,000 companies. Automates data entry, message drafting, and filling spreadsheets without requiring integrations or APIs.",
    emoji: "✨",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://www.getmagical.com/",
    tags: ["500k+ users", "20k companies", "data entry", "automation", "no APIs", "repetitive tasks"],
    category: "Productivity & Automation Tools",
    rating: 4.5,
    totalVotes: 4123
  },
  {
    icon: FileText,
    title: "Skipit.AI",
    description: "Productivity-enhancing tool for summarizing and chatting about YouTube videos, PDFs, Google Docs, and websites. Simply paste a link to obtain concise summaries and interact with content like ChatGPT.",
    emoji: "⏭️",
    color: "from-green-500 to-blue-600",
    directUrl: "https://skipit.ai/",
    tags: ["content summarization", "YouTube videos", "PDFs", "Google Docs", "chat interaction", "productivity"],
    category: "Productivity & Automation Tools",
    rating: 4.3,
    totalVotes: 3234
  },
  {
    icon: Target,
    title: "SheetsAI",
    description: "Integrates AI magic directly into Google Sheets. Describe what you need in plain English and witness the enchantment unfold. SHEETAI_BRAIN, SHEETAI_LIST, and SHEETAI_FILL functions for automated tasks.",
    emoji: "📊",
    color: "from-blue-500 to-green-600",
    directUrl: "https://www.sheetai.app/?via=Aiwebtools",
    tags: ["Google Sheets", "AI functions", "plain English", "automation", "copywriting", "data population"],
    category: "Productivity & Automation Tools",
    rating: 4.4,
    totalVotes: 3567
  },
  {
    icon: Sparkles,
    title: "Sheeter",
    description: "Ultimate Excel formula generator designed to supercharge productivity. Generate complex Excel formulas with just a few clicks. Enter queries in plain English and get corresponding formulas instantly.",
    emoji: "📋",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://sheeter.ai/",
    tags: ["Excel formulas", "plain English", "Google Sheets", "productivity", "formula generator", "automation"],
    category: "Productivity & Automation Tools",
    rating: 4.2,
    totalVotes: 2876
  },
  {
    icon: MessageSquare,
    title: "PolitePost",
    description: "Leverages AI technology to refine and enhance email communication, ensuring professionalism and politeness in workplace correspondence. Transform informal emails into refined, courteous messages.",
    emoji: "📧",
    color: "from-indigo-500 to-purple-600",
    directUrl: "https://politepost.net/",
    tags: ["email enhancement", "professional communication", "workplace correspondence", "AI refinement", "politeness"],
    category: "Productivity & Automation Tools",
    rating: 4.1,
    totalVotes: 2345
  }
];
