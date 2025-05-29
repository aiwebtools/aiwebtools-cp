import { Tool } from "@/types/tools";
import { 
  Mic, 
  Music, 
  Volume2, 
  Headphones, 
  Radio, 
  Speaker, 
  FileAudio,
  Waveform,
  Play,
  Settings,
  Sparkles,
  Bot
} from "lucide-react";

export const audioAndVoiceTools: Tool[] = [
  {
    icon: Mic,
    title: "Podcast Script Writer GPT",
    description: "Create engaging podcast scripts with AI assistance. Generate compelling content, episode outlines, and conversation starters for your podcast.",
    emoji: "🎙️",
    color: "from-red-500 to-orange-500",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/an-illustration-of-a-podcast-host-with-a_HnlUN.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:600,h:300,cg:true/qt=q:30",
    directUrl: "https://podcastwritergpt.lovable.app/?via=aiwebtools",
    tags: ["podcast", "writing", "scripts", "content creation", "audio", "broadcasting"],
    category: "Content Creation",
    rating: 4.2,
    totalVotes: 1654
  },
  {
    icon: Mic,
    title: "ElevenLabs",
    description: "Advanced AI voice generation platform with realistic speech synthesis. Create custom voices, clone voices, and generate speech in multiple languages.",
    emoji: "🎤",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://elevenlabs.io/",
    tags: ["voice generation", "speech synthesis", "voice cloning", "multilingual", "realistic"],
    category: "Audio & Voice Tools",
    rating: 4.8,
    totalVotes: 4567
  },
  {
    icon: Speaker,
    title: "Murf AI",
    description: "AI voice generator for creating professional voiceovers. Transform text into lifelike speech with 120+ voices in 20+ languages.",
    emoji: "🔊",
    color: "from-blue-500 to-green-600",
    directUrl: "https://murf.ai/",
    tags: ["voiceovers", "text-to-speech", "120+ voices", "20+ languages", "professional"],
    category: "Audio & Voice Tools",
    rating: 4.6,
    totalVotes: 3456
  },
  {
    icon: Music,
    title: "Suno AI",
    description: "AI music generation platform that creates original songs from text prompts. Generate music in various styles and genres with lyrics and instrumentation.",
    emoji: "🎵",
    color: "from-pink-500 to-purple-600",
    directUrl: "https://www.suno.ai/",
    tags: ["AI music", "song generation", "text-to-music", "lyrics", "various genres"],
    category: "Audio & Voice Tools",
    rating: 4.7,
    totalVotes: 3890
  },
  {
    icon: Waveform,
    title: "Udio",
    description: "AI music creation platform for generating high-quality music tracks. Create songs with vocals, instruments, and professional mixing.",
    emoji: "🎼",
    color: "from-orange-500 to-red-600",
    directUrl: "https://www.udio.com/",
    tags: ["music creation", "high-quality tracks", "vocals", "instruments", "professional mixing"],
    category: "Audio & Voice Tools",
    rating: 4.5,
    totalVotes: 2987
  },
  {
    icon: Volume2,
    title: "Speechify",
    description: "AI text-to-speech app that reads any text aloud with natural-sounding voices. Perfect for listening to articles, documents, and books.",
    emoji: "📢",
    color: "from-green-500 to-blue-600",
    directUrl: "https://speechify.com/",
    tags: ["text-to-speech", "natural voices", "articles", "documents", "books"],
    category: "Audio & Voice Tools",
    rating: 4.4,
    totalVotes: 3234
  },
  {
    icon: Headphones,
    title: "Descript",
    description: "AI-powered audio editing platform with transcription, overdub, and studio sound features. Edit audio by editing text transcripts.",
    emoji: "🎧",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://www.descript.com/",
    tags: ["audio editing", "transcription", "overdub", "studio sound", "text editing"],
    category: "Audio & Voice Tools",
    rating: 4.6,
    totalVotes: 3654
  },
  {
    icon: Radio,
    title: "Adobe Podcast",
    description: "AI-powered audio enhancement tool that improves recording quality. Remove background noise, echo, and enhance voice clarity.",
    emoji: "📻",
    color: "from-red-500 to-orange-600",
    directUrl: "https://podcast.adobe.com/",
    tags: ["audio enhancement", "noise removal", "echo reduction", "voice clarity", "Adobe"],
    category: "Audio & Voice Tools",
    rating: 4.3,
    totalVotes: 2654
  },
  {
    icon: FileAudio,
    title: "Krisp",
    description: "AI noise cancellation app that removes background noise from calls and recordings. Real-time voice clarity for professional communications.",
    emoji: "🔇",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://krisp.ai/",
    tags: ["noise cancellation", "background noise removal", "voice clarity", "calls", "real-time"],
    category: "Audio & Voice Tools",
    rating: 4.5,
    totalVotes: 3123
  },
  {
    icon: Bot,
    title: "Resemble AI",
    description: "AI voice generator with real-time voice cloning and speech synthesis. Create custom voices and generate speech for various applications.",
    emoji: "🤖",
    color: "from-indigo-500 to-purple-600",
    directUrl: "https://www.resemble.ai/",
    tags: ["voice cloning", "speech synthesis", "custom voices", "real-time", "applications"],
    category: "Audio & Voice Tools",
    rating: 4.4,
    totalVotes: 2876
  },
  {
    icon: Sparkles,
    title: "Boomy",
    description: "AI music creation platform that helps anyone create original songs in seconds. Generate music tracks and monetize them on streaming platforms.",
    emoji: "✨",
    color: "from-yellow-500 to-green-600",
    directUrl: "https://boomy.com/",
    tags: ["music creation", "original songs", "quick generation", "monetization", "streaming"],
    category: "Audio & Voice Tools",
    rating: 4.2,
    totalVotes: 2345
  }
];
