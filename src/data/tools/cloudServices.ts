
import { Tool } from "@/types/tools";
import { 
  Cloud, 
  Database, 
  Server, 
  Shield, 
  Zap,
  Globe,
  Lock,
  Monitor,
  HardDrive,
  Wifi
} from "lucide-react";

export const cloudServices: Tool[] = [
  {
    icon: Database,
    title: "Firebase",
    description: "Google's mobile and web application development platform with real-time database, authentication, hosting, and analytics.",
    emoji: "🔥",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://firebase.google.com/",
    tags: ["backend", "real-time database", "authentication", "hosting", "Google"],
    category: "Cloud & Infrastructure",
    rating: 4.6,
    totalVotes: 5432
  },
  {
    icon: Server,
    title: "Heroku",
    description: "Cloud platform as a service supporting several programming languages. Deploy, manage, and scale applications easily.",
    emoji: "☁️",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://heroku.com/",
    tags: ["cloud hosting", "deployment", "scaling", "multiple languages", "PaaS"],
    category: "Cloud & Infrastructure",
    rating: 4.4,
    totalVotes: 4567
  },
  {
    icon: Globe,
    title: "Cloudflare",
    description: "Web infrastructure and website security company providing CDN, DDoS protection, Internet security, and DNS services.",
    emoji: "🌐",
    color: "from-orange-500 to-red-600",
    directUrl: "https://cloudflare.com/",
    tags: ["CDN", "security", "DNS", "DDoS protection", "performance"],
    category: "Cloud & Infrastructure",
    rating: 4.7,
    totalVotes: 6789
  },
  {
    icon: Cloud,
    title: "Google Drive",
    description: "Cloud storage service with file synchronization and collaboration. Store, share, and collaborate on documents, photos, and more.",
    emoji: "💾",
    color: "from-blue-500 to-green-600",
    directUrl: "https://drive.google.com/",
    tags: ["cloud storage", "file sharing", "collaboration", "synchronization"],
    category: "Cloud & Infrastructure",
    rating: 4.5,
    totalVotes: 7890
  },
  {
    icon: HardDrive,
    title: "OneDrive",
    description: "Microsoft's cloud storage service integrated with Office 365. Store, sync, and share files across devices and platforms.",
    emoji: "💿",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://onedrive.com/",
    tags: ["Microsoft", "cloud storage", "Office integration", "synchronization"],
    category: "Cloud & Infrastructure",
    rating: 4.3,
    totalVotes: 4321
  }
];
