
import { Tool } from "@/types/tools";
import { 
  Users, MessageSquare, Video, Calendar, FileText, 
  Share2, Clock, CheckSquare, Folder, Globe 
} from "lucide-react";

export const collaborationTools: Tool[] = [
  {
    icon: Calendar,
    title: "Google Calendar",
    description: "Versatile calendar tool for scheduling meetings, appointments, and events with reminders and sharing.",
    emoji: "📅",
    color: "from-blue-500 to-red-600",
    directUrl: "https://calendar.google.com/?via=aiwebtools",
    tags: ["calendar", "scheduling", "appointments", "reminders", "events"],
    category: "Collaboration Tools",
    rating: 4.5,
    totalVotes: 9876
  },
  {
    icon: Clock,
    title: "Trello",
    description: "Visual project management tool with boards, lists, and cards for organizing tasks and workflows.",
    emoji: "⏱️",
    color: "from-blue-500 to-green-600",
    directUrl: "https://trello.com/?via=aiwebtools",
    tags: ["project management", "task management", "boards", "lists", "workflows"],
    category: "Collaboration Tools",
    rating: 4.3,
    totalVotes: 8543
  },
  {
    icon: CheckSquare,
    title: "Asana",
    description: "Project management platform for task tracking, project planning, and team collaboration with timelines and reporting.",
    emoji: "✔️",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://asana.com/?via=aiwebtools",
    tags: ["project management", "task tracking", "team collaboration", "timelines", "reporting"],
    category: "Collaboration Tools",
    rating: 4.4,
    totalVotes: 7987
  },
  {
    icon: Folder,
    title: "Dropbox",
    description: "Cloud storage and file sharing service for syncing files across devices and collaborating with others.",
    emoji: "📦",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://www.dropbox.com/?via=aiwebtools",
    tags: ["cloud storage", "file sharing", "file sync", "collaboration", "productivity"],
    category: "Collaboration Tools",
    rating: 4.2,
    totalVotes: 7234
  },
  {
    icon: Video,
    title: "Zoom",
    description: "Leading video conferencing platform for meetings, webinars, and team collaboration with AI features.",
    emoji: "📹",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://zoom.us/?via=aiwebtools",
    tags: ["video conferencing", "meetings", "webinars", "team collaboration", "remote work"],
    category: "Collaboration Tools",
    rating: 4.4,
    totalVotes: 8945
  },
  {
    icon: MessageSquare,
    title: "Slack",
    description: "Team communication platform with channels, direct messaging, and integration with productivity tools.",
    emoji: "💬",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://slack.com/?via=aiwebtools",
    tags: ["team chat", "messaging", "channels", "workplace communication", "integrations"],
    category: "Collaboration Tools",
    rating: 4.3,
    totalVotes: 7821
  },
  {
    icon: Users,
    title: "Microsoft Teams",
    description: "Comprehensive collaboration platform combining chat, meetings, file sharing, and Microsoft 365 integration.",
    emoji: "👥",
    color: "from-blue-500 to-green-600",
    directUrl: "https://teams.microsoft.com/?via=aiwebtools",
    tags: ["team collaboration", "video meetings", "file sharing", "Microsoft 365", "enterprise"],
    category: "Collaboration Tools",
    rating: 4.2,
    totalVotes: 6543
  },
  {
    icon: FileText,
    title: "Bit.ai",
    description: "Modern workplace collaboration platform for creating, collaborating, and organizing knowledge. Features document creation, wikis, client portals, and smart integrations for teams worldwide.",
    emoji: "📄",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://bit.ai/?deal=aiwebtools",
    tags: ["document collaboration", "knowledge management", "wikis", "client portals", "team workspace", "content management"],
    category: "Collaboration Tools",
    rating: 4.5,
    totalVotes: 1834
  }
];
