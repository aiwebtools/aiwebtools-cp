
import { Tool } from "@/types/tools";
import { 
  Users, 
  MessageSquare, 
  Video, 
  Calendar, 
  FileText,
  Share2,
  Clock,
  CheckSquare,
  Folder,
  GitBranch
} from "lucide-react";

export const collaborationTools: Tool[] = [
  {
    icon: Users,
    title: "Discord",
    description: "Voice, video, and text communication platform designed for communities. Create servers, channels, and connect with teams or friends.",
    emoji: "🎮",
    color: "from-indigo-500 to-purple-600",
    directUrl: "https://discord.com/",
    tags: ["communication", "voice chat", "communities", "gaming", "collaboration"],
    category: "Collaboration & Communication",
    rating: 4.7,
    totalVotes: 5432
  },
  {
    icon: Video,
    title: "Zoom",
    description: "Video conferencing platform for meetings, webinars, and online events. HD video, screen sharing, and collaboration features.",
    emoji: "📹",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://zoom.us/",
    tags: ["video conferencing", "meetings", "webinars", "screen sharing"],
    category: "Collaboration & Communication",
    rating: 4.5,
    totalVotes: 6789
  },
  {
    icon: MessageSquare,
    title: "Microsoft Teams",
    description: "Collaboration platform combining workplace chat, meetings, file storage, and application integration in Microsoft 365.",
    emoji: "💼",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://teams.microsoft.com/",
    tags: ["Microsoft", "workplace chat", "file sharing", "integration"],
    category: "Collaboration & Communication",
    rating: 4.3,
    totalVotes: 4567
  },
  {
    icon: FileText,
    title: "Google Workspace",
    description: "Suite of cloud-based productivity and collaboration tools including Gmail, Drive, Docs, Sheets, and Meet.",
    emoji: "📄",
    color: "from-red-500 to-yellow-600",
    directUrl: "https://workspace.google.com/",
    tags: ["Google", "productivity suite", "cloud storage", "collaboration"],
    category: "Collaboration & Communication",
    rating: 4.6,
    totalVotes: 7890
  },
  {
    icon: Folder,
    title: "Dropbox",
    description: "Cloud storage platform with file synchronization, sharing, and collaboration features for teams and individuals.",
    emoji: "📦",
    color: "from-blue-500 to-indigo-600",
    directUrl: "https://dropbox.com/",
    tags: ["cloud storage", "file sharing", "synchronization", "backup"],
    category: "Collaboration & Communication",
    rating: 4.4,
    totalVotes: 3456
  }
];
