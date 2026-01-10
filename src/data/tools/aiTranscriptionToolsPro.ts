
import { Tool } from "@/types/tools";
import { 
  Mic, 
  FileText, 
  Languages, 
  Clock,
  Zap,
  Globe
} from "lucide-react";

export const aiTranscriptionToolsPro: Tool[] = [
  {
    icon: Mic,
    title: "Otter.ai",
    description: "Leading AI meeting assistant that records audio, writes notes, captures slides, and generates summaries in real-time. Integrates with Zoom, Google Meet, and Microsoft Teams for seamless transcription.",
    emoji: "🦦",
    color: "from-green-500 to-blue-600",
    directUrl: "https://otter.ai/?via=aiwebtools",
    imageUrl: "/src/assets/tools/otter-ai-hero.png",
    tags: ["real-time transcription", "meeting notes", "AI summaries", "collaboration", "integrations"],
    category: "AI Transcription Tools",
    rating: 4.6,
    totalVotes: 8934
  },
  {
    icon: FileText,
    title: "Rev AI",
    description: "Professional speech-to-text API and transcription service with 99% accuracy. Offers both automated AI transcription and human transcription options for critical content needs.",
    emoji: "📝",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://www.rev.com/services/ai-transcription/?via=aiwebtools",
    imageUrl: "/src/assets/tools/rev-ai-hero.png",
    tags: ["speech-to-text", "API", "accuracy", "professional transcription", "automation"],
    category: "AI Transcription Tools",
    rating: 4.7,
    totalVotes: 6782
  },
  {
    icon: Languages,
    title: "Trint",
    description: "AI-powered transcription platform supporting 40+ languages with automated translation. Features collaborative editing, searchable transcripts, and seamless workflow integrations for media and research teams.",
    emoji: "🌍",
    color: "from-orange-500 to-red-600",
    directUrl: "https://trint.com/?via=aiwebtools",
    imageUrl: "/src/assets/tools/trint-hero.png",
    tags: ["multilingual", "automated translation", "collaborative editing", "media transcription", "research"],
    category: "AI Transcription Tools",
    rating: 4.5,
    totalVotes: 5234
  },
  {
    icon: Zap,
    title: "Sonix",
    description: "Fast automated transcription platform with advanced features like multi-speaker detection, automated subtitles, and translation to 40+ languages. Built for content creators and businesses.",
    emoji: "⚡",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://sonix.ai/?via=aiwebtools",
    imageUrl: "/src/assets/tools/sonix-hero.png",
    tags: ["automated transcription", "subtitles", "multi-speaker", "translation", "content creation"],
    category: "AI Transcription Tools",
    rating: 4.6,
    totalVotes: 4890
  },
  {
    icon: Globe,
    title: "Happy Scribe",
    description: "AI transcription and subtitle generation platform supporting 120+ languages. Combines automatic transcription with human proofreading options for maximum accuracy in global content.",
    emoji: "😊",
    color: "from-green-500 to-teal-600",
    directUrl: "https://www.happyscribe.com/?via=aiwebtools",
    imageUrl: "/src/assets/tools/happy-scribe-hero.png",
    tags: ["transcription", "subtitles", "120+ languages", "human proofreading", "global content"],
    category: "AI Transcription Tools",
    rating: 4.5,
    totalVotes: 4123
  },
  {
    icon: Clock,
    title: "Transkriptor",
    description: "Lightning-fast AI transcription tool that converts audio and video to text in minutes. Features speaker recognition, time stamps, and export options for various formats and use cases.",
    emoji: "⏱️",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://transkriptor.com/?via=aiwebtools",
    imageUrl: "/src/assets/tools/transkriptor-hero.png",
    tags: ["fast transcription", "speaker recognition", "time stamps", "export options", "audio to text"],
    category: "AI Transcription Tools",
    rating: 4.4,
    totalVotes: 3678
  }
];
