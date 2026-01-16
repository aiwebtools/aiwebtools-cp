import { Tool } from "@/types/tools";
import { 
  Video, 
  FileText, 
  Mic, 
  Image, 
  Wand2, 
  Users, 
  Share2, 
  BarChart3, 
  Presentation, 
  Linkedin, 
  Gamepad2, 
  Film, 
  Briefcase, 
  Smile,
  Code,
  Pen
} from "lucide-react";

// Image imports
import mediaIoHero from "@/assets/tools/media-io-hero.png";
import finalRoundAiHero from "@/assets/tools/final-round-ai-hero.png";
import sketchflowHero from "@/assets/tools/sketchflow-hero.png";
import writehybridHero from "@/assets/tools/writehybrid-hero.png";
import kirkifyHero from "@/assets/tools/kirkify-hero.png";
import aiDungeonHero from "@/assets/tools/ai-dungeon-hero.png";
import ltxStudioHero from "@/assets/tools/ltx-studio-hero.png";
import otterAiHero from "@/assets/tools/otter-ai-hero.png";
import descriptHero from "@/assets/tools/descript-hero.png";
import nottaAiHero from "@/assets/tools/notta-ai-hero.png";
import sproutSocialHero from "@/assets/tools/sprout-social-hero.png";
import flairAiHero from "@/assets/tools/flair-ai-hero.png";
import vismeHero from "@/assets/tools/visme-hero.png";
import taplioHero from "@/assets/tools/taplio-hero.png";
import rpggoHero from "@/assets/tools/rpggo-hero.png";
import facelessVideoHero from "@/assets/tools/faceless-video-hero.png";

export const marketingTranscriberStorytelling2025: Tool[] = [
  // ===== FEATURED / TRENDING TOOLS =====
  {
    icon: Video,
    title: "Media.io",
    description: "WonderShare Media.io is an all-in-one AI platform for effortless video, image, and audio creation. Features AI video generator, image enhancer, audio tools, and comprehensive media editing capabilities for creators.",
    emoji: "🎬",
    color: "from-purple-500 to-cyan-600",
    directUrl: "https://www.media.io/?via=aiwebtools",
    imageUrl: mediaIoHero,
    tags: ["Video Generator", "Audio AI", "Image AI", "WonderShare", "media editing", "content creation", "all-in-one", "video editing", "Video Editor"],
    category: "Video & Multimedia",
    rating: 4.7,
    totalVotes: 5678
  },
  {
    icon: Briefcase,
    title: "Final Round AI",
    description: "AI-powered job interview preparation platform with Interview Copilot that provides real-time answers during live interviews. Practice with AI mock interviews and get instant feedback to ace any job interview.",
    emoji: "💼",
    color: "from-blue-500 to-green-600",
    directUrl: "https://www.finalroundai.com/?via=aiwebtools",
    imageUrl: finalRoundAiHero,
    tags: ["Interview AI", "Job Preparation", "Career", "interview copilot", "mock interview", "job search", "hiring", "Human Resources"],
    category: "Business & Productivity",
    rating: 4.8,
    totalVotes: 4532
  },
  {
    icon: Code,
    title: "Sketchflow.ai",
    description: "AI design-to-code platform that transforms sketches, wireframes, and designs into functional web and mobile app code. Build applications faster with AI-powered design conversion.",
    emoji: "✏️",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://www.sketchflow.ai/?via=aiwebtools",
    imageUrl: sketchflowHero,
    tags: ["Design to Code", "No-Code", "Web Development", "wireframe", "app builder", "coding AI", "Developer Tools"],
    category: "Coding & Development",
    rating: 4.5,
    totalVotes: 2341
  },
  {
    icon: Pen,
    title: "WriteHybrid AI Humanizer",
    description: "AI humanizer tool that transforms AI-generated content into natural, human-like text. Bypass AI detection systems like GPTZero and Turnitin while preserving meaning and academic integrity.",
    emoji: "✍️",
    color: "from-orange-500 to-amber-600",
    directUrl: "https://www.writehybrid.com/?via=aiwebtools",
    imageUrl: writehybridHero,
    tags: ["AI Humanizer", "AI Detection", "Writing AI", "content humanization", "bypass detection", "academic writing", "AI Detection"],
    category: "Writing & Content",
    rating: 4.4,
    totalVotes: 1876
  },
  {
    icon: Smile,
    title: "Kirkify AI",
    description: "Viral meme face swap generator that transforms any image into Kirkified memes. Create shareable, humorous face-swapped content for social media in seconds with AI-powered face transformation.",
    emoji: "😂",
    color: "from-orange-500 to-red-600",
    directUrl: "https://kirkify.uk/?via=aiwebtools",
    imageUrl: kirkifyHero,
    tags: ["Meme Generator", "Face Swap", "Viral Content", "social media", "humor", "entertainment", "Face Swap & DeepFake"],
    category: "Image & Design",
    rating: 4.3,
    totalVotes: 3421
  },

  // ===== STORYTELLING & GAMES =====
  {
    icon: Gamepad2,
    title: "AI Dungeon",
    description: "Text-based adventure story game where you direct and star in AI-generated narratives. Create infinite stories in any genre with advanced AI storytelling that adapts to your choices and imagination.",
    emoji: "🐉",
    color: "from-purple-600 to-gold-500",
    directUrl: "https://aidungeon.com/?via=aiwebtools",
    imageUrl: aiDungeonHero,
    tags: ["Storytelling", "Text Adventure", "AI Game", "interactive fiction", "RPG", "narrative AI", "creative writing", "Gaming & Entertainment"],
    category: "Gaming & Entertainment",
    rating: 4.6,
    totalVotes: 6789
  },
  {
    icon: Film,
    title: "LTX Studio",
    description: "Creative AI platform for video production used by filmmakers, advertisers, and creative teams. Generate videos, storyboards, and cinematic content with AI-powered filmmaking tools and music video generation.",
    emoji: "🎥",
    color: "from-blue-600 to-gold-500",
    directUrl: "https://ltx.studio/?via=aiwebtools",
    imageUrl: ltxStudioHero,
    tags: ["Video Production", "Filmmaking AI", "Storyboard", "cinematic", "advertising", "music video", "creative studio", "Video Generator"],
    category: "Video & Multimedia",
    rating: 4.7,
    totalVotes: 4567
  },
  {
    icon: Gamepad2,
    title: "RPGGO AI",
    description: "AI-powered RPG game engine and creator platform for text-based adventure games. Design, create, and play immersive role-playing games with AI-powered characters, Game Masters, and interactive storytelling.",
    emoji: "⚔️",
    color: "from-purple-600 to-gold-500",
    directUrl: "https://www.rpggo.ai/?via=aiwebtools",
    imageUrl: rpggoHero,
    tags: ["RPG Game", "AI Game Creator", "Text Adventure", "game engine", "role-playing", "interactive fiction", "Gaming & Entertainment"],
    category: "Gaming & Entertainment",
    rating: 4.5,
    totalVotes: 3456
  },

  // ===== TRANSCRIBER TOOLS =====
  {
    icon: Mic,
    title: "Otter AI",
    description: "AI meeting notetaker and transcription platform that turns conversations into searchable transcripts. Get automated summaries, AI chat insights, and collaborative meeting notes with voice recognition.",
    emoji: "🦦",
    color: "from-teal-500 to-blue-600",
    directUrl: "https://otter.ai/?via=aiwebtools",
    imageUrl: otterAiHero,
    tags: ["Transcription", "Meeting Notes", "Voice AI", "notetaker", "speech-to-text", "meeting summary", "productivity", "Transcriber"],
    category: "Business & Productivity",
    rating: 4.8,
    totalVotes: 8765
  },
  {
    icon: Video,
    title: "Descript",
    description: "AI video and podcast editor that makes editing as easy as editing text. Features transcription, screen recording, AI voice cloning, filler word removal, and collaborative video editing in one platform.",
    emoji: "🎬",
    color: "from-green-500 to-teal-600",
    directUrl: "https://www.descript.com/?via=aiwebtools",
    imageUrl: descriptHero,
    tags: ["Video Editor", "Podcast Editor", "Transcription", "voice cloning", "screen recording", "audio editing", "content creation", "Transcriber"],
    category: "Video & Multimedia",
    rating: 4.7,
    totalVotes: 7654
  },
  {
    icon: FileText,
    title: "Notta AI",
    description: "AI note taker and meeting transcription platform supporting 50+ languages. Automatically transcribe, translate, and summarize meetings with bilingual transcription and AI-powered meeting insights.",
    emoji: "📝",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://www.notta.ai/en?via=aiwebtools",
    imageUrl: nottaAiHero,
    tags: ["Transcription", "Meeting Notes", "Multilingual", "AI notetaker", "translation", "meeting summary", "voice-to-text", "Transcriber"],
    category: "Business & Productivity",
    rating: 4.6,
    totalVotes: 4532
  },

  // ===== MARKETING TOOLS =====
  {
    icon: Share2,
    title: "Sprout Social",
    description: "AI-powered social media management platform transforming social data into business intelligence. Features scheduling, analytics, engagement tools, and Trellis AI agent for enterprise social media insights.",
    emoji: "🌱",
    color: "from-green-500 to-emerald-600",
    directUrl: "https://sproutsocial.com/?via=aiwebtools",
    imageUrl: sproutSocialHero,
    tags: ["Social Media", "Marketing AI", "Analytics", "scheduling", "engagement", "enterprise", "brand management", "Social Networks"],
    category: "Marketing & Sales",
    rating: 4.7,
    totalVotes: 6543
  },
  {
    icon: Image,
    title: "Flair AI",
    description: "AI product photo generator and editor for e-commerce and marketing. Create stunning branded product photography with AI-generated backgrounds, scenes, and professional product shots in real-time.",
    emoji: "✨",
    color: "from-pink-500 to-orange-600",
    directUrl: "https://flair.ai/?via=aiwebtools",
    imageUrl: flairAiHero,
    tags: ["Product Photography", "E-commerce", "Marketing AI", "branded content", "product shots", "advertising", "visual marketing"],
    category: "Marketing & Sales",
    rating: 4.6,
    totalVotes: 3421
  },
  {
    icon: Presentation,
    title: "Visme",
    description: "AI presentation maker, infographic creator, and visual content platform. Create high-converting branded presentations, data visualizations, documents, and social graphics with AI-powered design tools.",
    emoji: "📊",
    color: "from-purple-500 to-teal-600",
    directUrl: "https://www.visme.co/?via=aiwebtools",
    imageUrl: vismeHero,
    tags: ["Presentation AI", "Infographic", "Data Visualization", "slides", "design", "branded content", "visual content", "Presentation"],
    category: "Business & Productivity",
    rating: 4.6,
    totalVotes: 5678
  },
  {
    icon: Linkedin,
    title: "Taplio",
    description: "AI-powered LinkedIn personal brand growth platform. Create viral LinkedIn content with AI trained on 500M+ posts, schedule posts, generate carousels, and grow your professional audience.",
    emoji: "💼",
    color: "from-blue-600 to-blue-700",
    directUrl: "https://taplio.com/?via=aiwebtools",
    imageUrl: taplioHero,
    tags: ["LinkedIn AI", "Personal Branding", "Content Creation", "social media", "professional growth", "engagement", "Social Networks"],
    category: "Marketing & Sales",
    rating: 4.5,
    totalVotes: 3456
  },
  {
    icon: Film,
    title: "Faceless.video",
    description: "AI faceless video generator for creating viral social media content without showing your face. Automatically create and post custom videos daily for YouTube, TikTok, and other platforms.",
    emoji: "🎭",
    color: "from-red-600 to-black",
    directUrl: "https://faceless.video/?via=aiwebtools",
    imageUrl: facelessVideoHero,
    tags: ["Faceless Video", "Social Media", "Content Automation", "YouTube", "TikTok", "viral content", "video creation", "Social Networks"],
    category: "Video & Multimedia",
    rating: 4.4,
    totalVotes: 2876
  }
];
