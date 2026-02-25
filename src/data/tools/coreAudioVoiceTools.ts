
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
  Bot,
  Fish
} from "lucide-react";

import elevenlabsHeroImg from "@/assets/tools/elevenlabs-hero.jpg";
import murfAiCoreHero from "@/assets/tools/murf-ai-core-hero.jpg";
import descriptCoreHero from "@/assets/tools/descript-core-hero.jpg";
import krispCoreHero from "@/assets/tools/krisp-core-hero.jpg";
import resembleAiCoreHero from "@/assets/tools/resemble-ai-core-hero.jpg";

export const coreAudioVoiceTools: Tool[] = [
  {
    icon: Music,
    title: "UDIO AI Music Generator",
    description: "Advanced AI music creation platform for generating high-quality music tracks. Create songs with vocals, instruments, and professional mixing using cutting-edge AI technology.",
    emoji: "🎼",
    color: "from-orange-500 to-red-600",
    directUrl: "https://www.udio.com/?via=aiwebtools",
    imageUrl: elevenlabsHeroImg,
    tags: ["music generation", "ai music", "song creation", "vocals", "instruments", "audio production", "music ai", "udio"],
    category: "Audio & Voice Tools",
    rating: 4.8,
    totalVotes: 6543
  },
  {
    icon: Mic,
    title: "Eleven Labs: Voice Agents, Text to Speech, FX Sound Effects Generator",
    description: "Leading AI voice platform offering advanced text-to-speech, conversational AI agents, voice cloning, dubbing, speech-to-text transcription, and ElevenReader for audiobook creation. Generate realistic human voices, create AI conversations, clone voices, and produce professional audio content for any project.",
    emoji: "🎤",
    color: "from-purple-500 to-blue-600",
    imageUrl: elevenlabsHeroImg,
    directUrl: "https://try.elevenlabs.io/aiwebtools",
    tags: ["text to speech", "tts", "conversational ai", "voice cloning", "dubbing", "speech to text", "elevenreader", "voice generation", "sound effects", "ai voice", "speech synthesis", "eleven labs", "elevenlabs", "music generation", "sound generation", "audio ai", "voice ai", "speech ai", "professional voice", "realistic voice", "human voice", "voice over", "narration", "audio production", "audiobook", "ai conversation", "voice chat", "ai dubbing", "transcription"],
    category: "Audio & Voice Tools",
    rating: 4.8,
    totalVotes: 5432
  },
  {
    icon: Fish,
    title: "Fish Audio Text to Speech Platform",
    description: "Super realistic AI voice generator platform offering high-quality text-to-speech conversion with natural-sounding voices. Advanced voice synthesis technology for creating professional audio content with lifelike vocal characteristics.",
    emoji: "🐠",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://fish.audio/?via=aiwebtools",
    imageUrl: elevenlabsHeroImg,
    tags: ["text to speech", "realistic voice", "voice synthesis", "ai voice", "speech generation", "voice cloning", "audio generation", "natural voice", "voice ai", "tts platform"],
    category: "Audio & Voice Tools",
    rating: 4.7,
    totalVotes: 3456
  },
  {
    icon: Speaker,
    title: "Murf AI",
    description: "AI voice generator for creating professional voiceovers. Transform text into lifelike speech with 120+ voices in 20+ languages.",
    emoji: "🔊",
    color: "from-blue-500 to-green-600",
    directUrl: "https://get.murf.ai/1uvb0e8dznua",
    imageUrl: murfAiCoreHero,
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
    imageUrl: elevenlabsHeroImg,
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
    imageUrl: descriptCoreHero,
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
    imageUrl: elevenlabsHeroImg,
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
    imageUrl: krispCoreHero,
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
    imageUrl: resembleAiCoreHero,
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
    imageUrl: elevenlabsHeroImg,
    tags: ["music creation", "original songs", "quick generation", "monetization", "streaming"],
    category: "Audio & Voice Tools",
    rating: 4.2,
    totalVotes: 2345
  }
];
