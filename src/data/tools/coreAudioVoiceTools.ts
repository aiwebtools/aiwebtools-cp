import { Tool } from "@/types/tools";
import { 
  Mic, 
  Music, 
  Volume2, 
  Headphones, 
  Radio, 
  Speaker, 
  FileAudio,
  AudioWaveform,
  Play,
  Settings,
  Sparkles,
  Bot
} from "lucide-react";

export const coreAudioVoiceTools: Tool[] = [
  {
    icon: Music,
    title: "Suno AI Music Generator",
    description: "Create complete songs with vocals and instruments using AI. Generate music in any style, from pop to classical, with professional quality output and custom lyrics.",
    emoji: "🎵",
    color: "from-purple-500 to-pink-600",
    imageUrl: "https://cdn.discordapp.com/attachments/1150636600846450729/1377364206441070592/image.png?ex=6838b1e1&is=68376061&hm=4872d401aedf46706d1213c2a93ce9ca260725cec15f98b2186eb25746fda56f&",
    directUrl: "https://suno.com/?via=aiwebtools",
    tags: ["music generation", "ai music", "song creation", "vocals", "instruments", "suno", "music ai", "audio production"],
    category: "Audio & Voice Tools",
    rating: 4.9,
    totalVotes: 8765
  },
  {
    icon: Music,
    title: "UDIO AI Music Generator",
    description: "Advanced AI music creation platform for generating high-quality music tracks. Create songs with vocals, instruments, and professional mixing using cutting-edge AI technology.",
    emoji: "🎼",
    color: "from-orange-500 to-red-600",
    directUrl: "https://www.udio.com/?via=aiwebtools",
    imageUrl: "https://cdn.discordapp.com/attachments/1150636600846450729/1377364206441070592/image.png?ex=6838b1e1&is=68376061&hm=4872d401aedf46706d1213c2a93ce9ca260725cec15f98b2186eb25746fda56f&",
    tags: ["music generation", "ai music", "song creation", "vocals", "instruments", "audio production", "music ai", "udio"],
    category: "Audio & Voice Tools",
    rating: 4.8,
    totalVotes: 6543
  },
  {
    icon: Mic,
    title: "Eleven Labs Text to Speech & Sound Effect Generation Platform",
    description: "Advanced AI-powered text-to-speech and sound effect generation platform. Create realistic human voices, clone voices, and generate professional sound effects for any project.",
    emoji: "🎤",
    color: "from-purple-500 to-blue-600",
    imageUrl: "https://cdn.discordapp.com/attachments/1150636600846450729/1377368060364849193/image.png?ex=6838b577&is=683763f7&hm=5d7af47618e4e284baa269ee596a3b68f2ee26e23dd13ed84be94a092aff4f44&",
    directUrl: "https://elevenlabs.io/?from=kennybastian5304&via=aiwebtools",
    tags: ["text to speech", "tts", "voice generation", "sound effects", "voice cloning", "ai voice", "speech synthesis", "eleven labs", "elevenlabs", "sound generation", "audio ai", "voice ai", "speech ai", "professional voice", "realistic voice", "human voice", "voice over", "narration", "audio production"],
    category: "Audio & Voice Tools",
    rating: 4.8,
    totalVotes: 5432
  },
  {
    icon: Mic,
    title: "Fish Audio Voice Generator",
    description: "Super realistic AI voice generator with advanced text-to-speech capabilities. Create incredibly lifelike human voices with natural emotion and intonation for professional audio production and content creation.",
    emoji: "🐟",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://fish.audio/?via=aiwebtools",
    tags: ["fish audio", "super realistic voice", "text to speech", "voice generation", "ai voice", "realistic voice", "voice synthesis", "human voice", "professional voice", "natural voice", "voice cloning", "audio production", "speech synthesis", "voice ai", "realistic tts"],
    category: "Audio & Voice Tools",
    rating: 4.7,
    totalVotes: 3890
  },
  {
    icon: Speaker,
    title: "Murf AI",
    description: "AI voice generator for creating professional voiceovers. Transform text into lifelike speech with 120+ voices in 20+ languages.",
    emoji: "🔊",
    color: "from-blue-500 to-green-600",
    directUrl: "https://murf.ai/?via=aiwebtools",
    tags: ["voiceovers", "text-to-speech", "120+ voices", "20+ languages", "professional"],
    category: "Audio & Voice Tools",
    rating: 4.6,
    totalVotes: 3456
  },
  {
    icon: Volume2,
    title: "Speechify",
    description: "AI text-to-speech app that reads any text aloud with natural-sounding voices. Perfect for listening to articles, documents, and books.",
    emoji: "📢",
    color: "from-green-500 to-blue-600",
    directUrl: "https://speechify.com/?via=aiwebtools",
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
    directUrl: "https://www.descript.com/?via=aiwebtools",
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
    directUrl: "https://podcast.adobe.com/?via=aiwebtools",
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
    directUrl: "https://krisp.ai/?via=aiwebtools",
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
    directUrl: "https://www.resemble.ai/?via=aiwebtools",
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
    directUrl: "https://boomy.com/?via=aiwebtools",
    tags: ["music creation", "original songs", "quick generation", "monetization", "streaming"],
    category: "Audio & Voice Tools",
    rating: 4.2,
    totalVotes: 2345
  }
];
