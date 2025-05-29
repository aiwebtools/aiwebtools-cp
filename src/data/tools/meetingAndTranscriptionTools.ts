
import { Tool } from "@/types/tools";
import { 
  Mic, 
  Video, 
  FileText, 
  Users, 
  MessageSquare, 
  Clock, 
  Search,
  Bot,
  Zap,
  Calendar,
  Star,
  BarChart,
  Brain,
  Settings,
  Globe,
  Shield
} from "lucide-react";

export const meetingAndTranscriptionTools: Tool[] = [
  {
    icon: Mic,
    title: "Podcastle",
    description: "Go-to podcasting solution with intuitive, AI-powered toolkit. Features AI-generated voices, advanced audio and video editing, and seamless publishing capabilities.",
    emoji: "🎙️",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://podcastle.ai/?ref=ywywywq",
    tags: ["podcasting", "AI voices", "audio editing", "video editing", "publishing", "user-friendly"],
    category: "Meeting & Transcription Tools",
    rating: 4.5,
    totalVotes: 3456
  },
  {
    icon: MessageSquare,
    title: "SpeakAI",
    description: "Gateway to turning language data into actionable insights quickly without coding. Trusted by 100,000+ companies for transcription, analysis, and AI content generation.",
    emoji: "🗣️",
    color: "from-blue-500 to-green-600",
    directUrl: "https://speakai.co/?via=aiwebtoolss",
    tags: ["language data", "no coding", "100k+ companies", "transcription", "competitive insights", "multi-language"],
    category: "Meeting & Transcription Tools",
    rating: 4.6,
    totalVotes: 4567
  },
  {
    icon: FileText,
    title: "Otter.ai",
    description: "Advanced AI-powered transcription and note-taking tool that revolutionizes meeting documentation. Real-time transcription with collaborative features and integrations.",
    emoji: "🦦",
    color: "from-green-500 to-blue-600",
    directUrl: "https://otter.ai/",
    tags: ["real-time transcription", "collaborative", "meeting platforms", "searchable transcripts", "action items", "team collaboration"],
    category: "Meeting & Transcription Tools",
    rating: 4.7,
    totalVotes: 5234
  },
  {
    icon: Bot,
    title: "FireFlies AI",
    description: "Indispensable tool for streamlining voice conversations. Automates recording, transcribing, summarizing, searching, and analyzing meetings for 100,000+ organizations.",
    emoji: "🔥",
    color: "from-orange-500 to-red-600",
    directUrl: "https://fireflies.ai/?gr_pk=Orzo&gr_uid=lqX7",
    tags: ["100k+ organizations", "meeting automation", "conversation intelligence", "CRM integration", "sentiment analysis", "knowledge base"],
    category: "Meeting & Transcription Tools",
    rating: 4.6,
    totalVotes: 4123
  },
  {
    icon: Clock,
    title: "You-TLDR",
    description: "Tool that provides quick and efficient summaries of YouTube videos in your preferred language. Save time and get key points without watching entire videos.",
    emoji: "⏰",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://www.you-tldr.com/",
    tags: ["YouTube summaries", "time-saving", "multi-language", "key points", "video content", "efficient"],
    category: "Meeting & Transcription Tools",
    rating: 4.2,
    totalVotes: 2876
  },
  {
    icon: Brain,
    title: "Rewind.AI",
    description: "Personalized AI assistant for managing digital life efficiently. Automatically captures screen and audio, stores locally on Mac with perfect memory capabilities.",
    emoji: "⏪",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://www.rewind.ai/",
    tags: ["personal AI", "screen capture", "perfect memory", "ADHD support", "Mac local storage", "digital organization"],
    category: "Meeting & Transcription Tools",
    rating: 4.4,
    totalVotes: 3234
  },
  {
    icon: FileText,
    title: "REV",
    description: "Comprehensive transcription and speech-to-text services. Human transcription at $1.50/min, automated at $0.25/min, plus Rev Max subscription with premium features.",
    emoji: "📝",
    color: "from-blue-500 to-green-600",
    directUrl: "https://rev.pxf.io/c/4110048/1357141/16349",
    tags: ["human transcription", "automated transcription", "affordable pricing", "Zoom integration", "custom glossaries", "high accuracy"],
    category: "Meeting & Transcription Tools",
    rating: 4.5,
    totalVotes: 3789
  },
  {
    icon: Users,
    title: "MeetGeek",
    description: "Ultimate AI meeting assistant revolutionizing meeting culture. Automatic recording, transcription, summaries, and shareable insights with team collaboration features.",
    emoji: "🤝",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://get.meetgeek.ai/aiwebtools",
    tags: ["meeting assistant", "automatic summaries", "team collaboration", "10k+ teams", "KPI tracking", "custom branding"],
    category: "Meeting & Transcription Tools",
    rating: 4.6,
    totalVotes: 4234
  },
  {
    icon: Video,
    title: "TL;DV",
    description: "Game-changing meeting management tool for recording, transcribing, and summarizing Zoom and Google Meet calls. AI summaries in 30+ languages with speaker detection.",
    emoji: "📹",
    color: "from-green-500 to-cyan-600",
    directUrl: "https://tldv.cello.so/iq6MHPWb7Od",
    tags: ["Zoom integration", "Google Meet", "30+ languages", "speaker detection", "keyword search", "CRM integration"],
    category: "Meeting & Transcription Tools",
    rating: 4.5,
    totalVotes: 3567
  },
  {
    icon: BarChart,
    title: "Traq.ai",
    description: "Revolutionizes sales teams with AI-powered conversation intelligence. Captures and analyzes sales calls providing buyer insights for exceptional results.",
    emoji: "📊",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://www.traq.ai/",
    tags: ["sales intelligence", "conversation analysis", "buyer insights", "win rates", "call transcription", "sales efficiency"],
    category: "Meeting & Transcription Tools",
    rating: 4.4,
    totalVotes: 2945
  },
  {
    icon: MessageSquare,
    title: "Sembly.ai",
    description: "Intelligent meeting assistant providing transcription, comprehensive meeting notes, and valuable insights. High-accuracy transcriptions with speaker identification.",
    emoji: "🎯",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://www.sembly.ai/",
    tags: ["meeting transcription", "speaker identification", "task management", "multi-language", "keyword search", "global support"],
    category: "Meeting & Transcription Tools",
    rating: 4.3,
    totalVotes: 2678
  },
  {
    icon: Bot,
    title: "Cogram",
    description: "AI-driven productivity tool for automated meeting note-taking and post-meeting task management. Focuses on discussions without manual note-taking.",
    emoji: "🤖",
    color: "from-green-500 to-blue-600",
    directUrl: "https://www.cogram.com/",
    tags: ["automated notes", "task management", "meeting summaries", "Zoom integration", "Teams integration", "data privacy"],
    category: "Meeting & Transcription Tools",
    rating: 4.2,
    totalVotes: 2456
  }
];
