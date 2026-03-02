
import { Tool } from "@/types/tools";
import { 
  Users, 
  Video, 
  MessageSquare, 
  Brain,
  Target,
  Calendar
} from "lucide-react";

import firefliesAiHero from "@/assets/tools/fireflies-ai-hero.jpg";
import fathomHero from "@/assets/tools/fathom-hero.jpg";
import avomaHero from "@/assets/tools/avoma-hero.jpg";
import grainHero from "@/assets/tools/grain-hero.jpg";
import semblyAiHero from "@/assets/tools/sembly-ai-hero.jpg";
import tactiqHero from "@/assets/tools/tactiq-hero.jpg";

export const aiMeetingAssistants: Tool[] = [
  {
    icon: Video,
    title: "Fireflies.ai",
    description: "AI meeting assistant that automatically records, transcribes, and analyzes voice conversations. Integrates with all major video conferencing platforms and provides searchable meeting notes with action items.",
    emoji: "🔥",
    color: "from-orange-500 to-red-600",
    directUrl: "https://fireflies.ai/?via=aiwebtools",
    imageUrl: firefliesAiHero,
    tags: ["Meeting Agent", "Automation Agent", "meeting recording", "transcription", "voice analytics", "action items", "team collaboration", "agent"],
    category: "AI Meeting Assistants",
    rating: 4.7,
    totalVotes: 7234
  },
  {
    icon: Brain,
    title: "Fathom",
    description: "Free AI meeting assistant that records, transcribes, and summarizes your meetings. Highlights key moments, extracts action items, and syncs with your CRM without requiring bots to join calls.",
    emoji: "🧠",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://fathom.video/?via=aiwebtools",
    imageUrl: fathomHero,
    tags: ["Meeting Agent", "Automation Agent", "free meeting notes", "no bot", "CRM sync", "highlights", "summaries", "agent"],
    category: "AI Meeting Assistants",
    rating: 4.8,
    totalVotes: 8901
  },
  {
    icon: MessageSquare,
    title: "Avoma",
    description: "End-to-end AI meeting assistant for customer-facing teams. Automatically records meetings, generates notes, provides conversation intelligence, and integrates with CRM for revenue optimization.",
    emoji: "💬",
    color: "from-blue-500 to-green-600",
    directUrl: "https://www.avoma.com/?via=aiwebtools",
    imageUrl: avomaHero,
    tags: ["Meeting Agent", "Automation Agent", "conversation intelligence", "CRM integration", "sales meetings", "customer success", "revenue optimization", "agent"],
    category: "AI Meeting Assistants",
    rating: 4.6,
    totalVotes: 5678
  },
  {
    icon: Target,
    title: "Grain",
    description: "AI-powered meeting recorder and note-taker for revenue teams. Automatically captures customer insights, creates highlight reels, and shares key moments with AI-generated summaries.",
    emoji: "🎯",
    color: "from-green-500 to-teal-600",
    directUrl: "https://grain.com/?via=aiwebtools",
    imageUrl: grainHero,
    tags: ["Meeting Agent", "Automation Agent", "revenue teams", "customer insights", "highlight reels", "sales enablement", "AI summaries", "agent"],
    category: "AI Meeting Assistants",
    rating: 4.5,
    totalVotes: 4567
  },
  {
    icon: Calendar,
    title: "Sembly AI",
    description: "Smart AI meeting assistant that attends meetings on your behalf, takes comprehensive notes, and provides multi-meeting insights. Features automated follow-ups and integration with productivity tools.",
    emoji: "📅",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://www.sembly.ai/?via=aiwebtools",
    imageUrl: semblyAiHero,
    tags: ["Meeting Agent", "Automation Agent", "automated attendance", "comprehensive notes", "multi-meeting insights", "follow-ups", "productivity", "agent"],
    category: "AI Meeting Assistants",
    rating: 4.4,
    totalVotes: 3890
  },
  {
    icon: Users,
    title: "Tactiq",
    description: "Real-time transcription tool for Google Meet, Zoom, and MS Teams. Generates AI meeting summaries, action items, and custom AI prompts while maintaining privacy with local processing.",
    emoji: "👥",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://tactiq.io/?via=aiwebtools",
    imageUrl: tactiqHero,
    tags: ["Meeting Agent", "Automation Agent", "real-time transcription", "privacy focused", "action items", "custom AI prompts", "local processing", "agent"],
    category: "AI Meeting Assistants",
    rating: 4.6,
    totalVotes: 6123
  }
];
