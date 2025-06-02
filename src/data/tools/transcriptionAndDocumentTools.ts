
import { Tool } from "@/types/tools";
import { 
  Mic,
  Video
} from "lucide-react";

export const transcriptionAndDocumentTools: Tool[] = [
  {
    icon: Mic,
    title: "Otter.ai",
    description: "AI meeting transcription and note-taking tool that converts speech to text with smart summaries and action item extraction.",
    emoji: "🦦",
    color: "from-orange-500 to-yellow-600",
    directUrl: "https://otter.ai/?via=aiwebtools",
    tags: ["transcription", "meeting notes", "speech to text", "smart summaries", "action items"],
    category: "Writing & Content Enhancement",
    rating: 4.4,
    totalVotes: 4567
  },
  {
    icon: Video,
    title: "Descript",
    description: "AI-powered text-based video and audio editing with transcription capabilities. Edit media by editing text, perfect for content creators.",
    emoji: "🎬",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://www.descript.com/?via=aiwebtools",
    tags: ["text-based editing", "transcription", "video editing", "audio editing", "content creation"],
    category: "Writing & Content Enhancement",
    rating: 4.6,
    totalVotes: 3789
  }
];
