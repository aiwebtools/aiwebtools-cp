
import { Tool } from "@/types/tools";
import { 
  Video, 
  Mic, 
  FileText, 
  Image, 
  Sparkles,
  MessageSquare,
  Globe,
  Users,
  Camera,
  Film,
  Play,
  Monitor,
  Music,
  Headphones
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
  },
  {
    icon: Video,
    title: "Synthesia",
    description: "Leading AI Video Generation Platform revolutionizing content creation by turning text into engaging videos. 140+ AI avatars, 120+ languages, trusted by 50,000+ companies.",
    emoji: "🎥",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://www.synthesia.io/?via=Aiwebtools",
    tags: ["video generation", "AI avatars", "text-to-video", "multilingual", "business content"],
    category: "Video & Content Tools",
    rating: 4.7,
    totalVotes: 6543
  },
  {
    icon: FileText,
    title: "GUIDDE",
    description: "AI-powered platform for creating video documentation quickly and efficiently. Generate step-by-step descriptions, AI voiceovers, and professional visuals for workflow explanations.",
    emoji: "📹",
    color: "from-orange-500 to-red-600",
    directUrl: "https://www.guidde.com/?ref=njningu",
    tags: ["video documentation", "AI voiceover", "workflow guides", "tutorial creation", "business documentation"],
    category: "Video & Content Tools",
    rating: 4.3,
    totalVotes: 2876
  },
  {
    icon: Mic,
    title: "Podcastle",
    description: "AI-powered podcasting solution with intuitive toolkit for professional-quality podcasts and videos. Features AI-generated voices, advanced editing, and seamless publishing capabilities.",
    emoji: "🎙️",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://podcastle.ai/?ref=ywywywq",
    tags: ["podcasting", "AI voices", "audio editing", "video podcasts", "content creation"],
    category: "Video & Content Tools",
    rating: 4.4,
    totalVotes: 3234
  },
  {
    icon: Film,
    title: "INVIDEO",
    description: "Ultimate video creation co-pilot with 5,000+ professionally-crafted templates and AI-powered tools. Create high-quality videos effortlessly for marketing, social media, and more.",
    emoji: "🎬",
    color: "from-green-500 to-blue-600",
    directUrl: "https://invideo.sjv.io/k0kMbn",
    tags: ["video creation", "templates", "AI tools", "marketing videos", "social media content"],
    category: "Video & Content Tools",
    rating: 4.5,
    totalVotes: 4567
  },
  {
    icon: Camera,
    title: "MyHeritage Deep Nostalgia™",
    description: "Viral technology bringing family photos to life with 110M+ animations. Licensed from D-ID, animates faces in historical pictures producing high-quality, lifelike video footage.",
    emoji: "📸",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://myheritage.sjv.io/c/4110048/909501/12471",
    tags: ["photo animation", "family history", "deep learning", "video reenactment", "genealogy"],
    category: "Video & Content Tools",
    rating: 4.6,
    totalVotes: 5432
  },
  {
    icon: Play,
    title: "LiveReacting",
    description: "Interactive live streaming solution incorporating pre-recorded videos, games, countdowns, and polls. Cloud-based streaming studio enhancing engagement 5-20x more than traditional streams.",
    emoji: "📺",
    color: "from-red-500 to-orange-600",
    directUrl: "https://livereacting.sjv.io/c/4110048/461538/8208",
    tags: ["live streaming", "interactive content", "engagement tools", "cloud streaming", "social media"],
    category: "Video & Content Tools",
    rating: 4.3,
    totalVotes: 2987
  },
  {
    icon: Monitor,
    title: "Visla",
    description: "AI-powered video storytelling platform revolutionizing video creation. Text-Based Editor, AI Video Generator, teleprompter support, and custom backgrounds for professional video production.",
    emoji: "📱",
    color: "from-blue-500 to-green-600",
    directUrl: "https://www.visla.us/?gr_pk=0EmN&gr_uid=5q8A",
    tags: ["video storytelling", "AI generation", "text-based editing", "professional video", "team collaboration"],
    category: "Video & Content Tools",
    rating: 4.4,
    totalVotes: 3456
  },
  {
    icon: FileText,
    title: "You-TLDR",
    description: "Tool providing quick and efficient summaries of YouTube videos in your preferred language. Enter video URL for concise summaries without watching entire videos.",
    emoji: "📝",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://www.you-tldr.com/",
    tags: ["video summaries", "YouTube", "time saving", "content analysis", "multilingual"],
    category: "Video & Content Tools",
    rating: 4.2,
    totalVotes: 2543
  },
  {
    icon: Video,
    title: "Video2Recipe",
    description: "AI culinary companion simplifying transition from cooking videos to easy-to-follow recipes. Paste video URL for step-by-step instructions and precise ingredient lists.",
    emoji: "🍳",
    color: "from-orange-500 to-red-600",
    directUrl: "https://www.video2recipe.com/",
    tags: ["cooking recipes", "video analysis", "culinary AI", "recipe generation", "food content"],
    category: "Video & Content Tools",
    rating: 4.1,
    totalVotes: 2234
  },
  {
    icon: Video,
    title: "OutfitsAI",
    description: "AI-powered tool allowing users to virtually try on outfits. Experiment with different clothing options and styles using artificial intelligence for fashion exploration.",
    emoji: "👗",
    color: "from-pink-500 to-purple-600",
    directUrl: "https://www.outfitsai.com/",
    tags: ["fashion AI", "virtual try-on", "clothing", "style experimentation", "fashion technology"],
    category: "Video & Content Tools",
    rating: 4.0,
    totalVotes: 3456
  }
];
