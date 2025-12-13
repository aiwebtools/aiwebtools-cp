
import { Tool } from "@/types/tools";
import { 
  Database, 
  Server, 
  Globe
} from "lucide-react";

export const cloudServices: Tool[] = [
  {
    icon: Database,
    title: "Firebase",
    description: "Google's mobile and web application development platform with real-time database, authentication, hosting, and analytics.",
    emoji: "🔥",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://firebase.google.com/",
    tags: ["Database", "Backend", "Cloud Platform", "backend", "real-time database", "authentication", "hosting", "Google"],
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
    tags: ["Cloud Platform", "DevOps", "cloud hosting", "deployment", "scaling", "multiple languages", "PaaS"],
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
    tags: ["Security", "Cloud Platform", "CDN", "security", "DNS", "DDoS protection", "performance"],
    category: "Cloud & Infrastructure",
    rating: 4.7,
    totalVotes: 6789
  },
];
