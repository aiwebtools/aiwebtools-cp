
import { Tool } from "@/types/tools";
import { 
  Video, 
  Mic, 
  FileText, 
  Image, 
  Sparkles,
  MessageSquare,
  Globe,
  Users
} from "lucide-react";

export const videoAndContentTools: Tool[] = [
  {
    icon: Video,
    title: "Kapwing",
    description: "Excellent video editing platform for social media content. Adding subtitles, auto editing, and producing more content in less time. Cutting-edge video creation platform for teams.",
    emoji: "🎬",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://www.kapwing.com/",
    tags: ["video editing", "social media", "subtitles", "auto editing", "content creation", "team collaboration"],
    category: "Video & Content Tools",
    rating: 4.6,
    totalVotes: 5234
  },
  {
    icon: Mic,
    title: "Podcastr",
    description: "Effortlessly create podcasts with AI. Customize your podcaster's voice and generate episodes on any topic you choose, all powered by AI technology.",
    emoji: "🎙️",
    color: "from-red-500 to-orange-600",
    directUrl: "https://podcraftr.com/?linkId=lp_854324&sourceId=aiwebtools&tenantId=podcraftr",
    tags: ["podcast creation", "AI voice", "content generation", "audio", "automated", "topic generation"],
    category: "Video & Content Tools",
    rating: 4.2,
    totalVotes: 2876
  },
  {
    icon: MessageSquare,
    title: "Chat D-ID",
    description: "Pioneering conversational AI with digital humans. Real-time conversations powered by D-ID's technology and ChatGPT. Animate images to talk with lifelike lip-sync technology.",
    emoji: "🗣️",
    color: "from-green-500 to-blue-600",
    directUrl: "https://chat.d-id.com/",
    tags: ["digital humans", "conversational AI", "image animation", "lip-sync", "real-time chat", "D-ID"],
    category: "Video & Content Tools",
    rating: 4.4,
    totalVotes: 3567
  }
];
