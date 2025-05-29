
import { Tool } from "@/types/tools";
import { 
  MessageSquare, 
  Phone, 
  Video, 
  Mail, 
  Users,
  Mic,
  Share2,
  Calendar,
  Bell,
  Globe
} from "lucide-react";

export const communicationTools: Tool[] = [
  {
    icon: MessageSquare,
    title: "WhatsApp Web",
    description: "Web version of WhatsApp messenger. Send messages, make calls, and share media from your computer browser.",
    emoji: "💬",
    color: "from-green-500 to-blue-600",
    directUrl: "https://web.whatsapp.com/",
    tags: ["messaging", "web app", "calls", "media sharing", "cross-platform"],
    category: "Communication Tools",
    rating: 4.6,
    totalVotes: 7890
  },
  {
    icon: Video,
    title: "Google Meet",
    description: "Video conferencing platform by Google. Host secure online meetings with screen sharing, recording, and collaboration features.",
    emoji: "📹",
    color: "from-blue-500 to-green-600",
    directUrl: "https://meet.google.com/",
    tags: ["video conferencing", "Google", "meetings", "screen sharing", "collaboration"],
    category: "Communication Tools",
    rating: 4.4,
    totalVotes: 5432
  },
  {
    icon: Phone,
    title: "Skype",
    description: "Video calling and messaging service. Make free voice and video calls, send messages, and share files worldwide.",
    emoji: "📞",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://skype.com/",
    tags: ["video calls", "messaging", "international calls", "file sharing"],
    category: "Communication Tools",
    rating: 4.2,
    totalVotes: 4567
  },
  {
    icon: Users,
    title: "Telegram Web",
    description: "Cloud-based messaging platform with focus on speed, security, and privacy. Access from any device with sync.",
    emoji: "✈️",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://web.telegram.org/",
    tags: ["messaging", "cloud-based", "security", "privacy", "cross-platform"],
    category: "Communication Tools",
    rating: 4.5,
    totalVotes: 6789
  },
  {
    icon: Globe,
    title: "Signal",
    description: "Private messenger with end-to-end encryption. Secure messaging, voice, and video calls with privacy focus.",
    emoji: "🔒",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://signal.org/",
    tags: ["privacy", "encryption", "secure messaging", "voice calls", "open source"],
    category: "Communication Tools",
    rating: 4.7,
    totalVotes: 4321
  }
];
