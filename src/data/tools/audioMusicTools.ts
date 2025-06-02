import { Tool } from "@/types/tools";
import { 
  Music, 
  Mic, 
  Volume2, 
  Headphones, 
  Speaker, 
  Waveform,
  Play,
  Radio,
  Disc,
  VolumeX,
  AudioWaveform,
  MicVocal
} from "lucide-react";

export const audioMusicTools: Tool[] = [
  {
    icon: Music,
    title: "Suno AI",
    description: "Create complete songs with vocals and instruments from simple text descriptions. Generate music in any style or genre with AI.",
    emoji: "🎵",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://suno.com/invite/@aiwebtools",
    tags: ["music generation", "vocals", "text to music", "song creation", "AI composer"],
    category: "Audio & Music Tools",
    rating: 4.8,
    totalVotes: 5234
  },
  {
    icon: AudioWaveform,
    title: "Mubert AI",
    description: "AI-powered royalty-free music generation platform. Create custom soundtracks, ambient music, and background audio for any project instantly.",
    emoji: "🎶",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://mubert.com/",
    tags: ["royalty-free music", "background music", "ambient", "soundtracks", "custom music"],
    category: "Audio & Music Tools",
    rating: 4.6,
    totalVotes: 4123
  },
  {
    icon: Disc,
    title: "AIVA (Artificial Intelligence Virtual Artist)",
    description: "AI composer that creates emotional soundtrack music for films, video games, commercials, and other media projects.",
    emoji: "💿",
    color: "from-orange-500 to-red-600",
    directUrl: "https://www.aiva.ai/",
    tags: ["AI composer", "soundtrack", "film music", "video game music", "emotional music"],
    category: "Audio & Music Tools",
    rating: 4.7,
    totalVotes: 3876
  },
  {
    icon: MicVocal,
    title: "AudioSonic Voice Generator",
    description: "AI-powered voice generator that creates realistic human-like speech from text with natural intonation and emotional expression.",
    emoji: "🎙️",
    color: "from-green-500 to-blue-600",
    directUrl: "https://writesonic.com/ai-voice-generator?via=aiwebtools",
    tags: ["voice generation", "text to speech", "realistic voices", "emotional expression", "AI narration"],
    category: "Audio & Music Tools",
    rating: 4.5,
    totalVotes: 3234
  },
  {
    icon: Mic,
    title: "Speechify",
    description: "AI-powered text-to-speech tool that converts written content into natural-sounding audio with celebrity voices and reading speed control.",
    emoji: "🗣️",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://speechify.com/",
    tags: ["text to speech", "reading assistant", "celebrity voices", "accessibility", "audio books"],
    category: "Audio & Music Tools",
    rating: 4.4,
    totalVotes: 2987
  },
  {
    icon: Volume2,
    title: "ElevenLabs",
    description: "Advanced AI voice synthesis platform for creating realistic speech, voice cloning, and multilingual audio content with emotional depth.",
    emoji: "🔊",
    color: "from-green-500 to-cyan-600",
    directUrl: "https://elevenlabs.io/",
    tags: ["voice synthesis", "voice cloning", "multilingual", "realistic speech", "emotional AI"],
    category: "Audio & Music Tools",
    rating: 4.8,
    totalVotes: 6234
  },
  {
    icon: Headphones,
    title: "Adobe Podcast",
    description: "AI-powered audio recording and editing platform that enhances voice recordings and removes background noise automatically.",
    emoji: "🎧",
    color: "from-red-500 to-pink-600",
    directUrl: "https://podcast.adobe.com/",
    tags: ["podcast editing", "voice enhancement", "noise removal", "audio recording", "AI processing"],
    category: "Audio & Music Tools",
    rating: 4.3,
    totalVotes: 2654
  },
  {
    icon: Speaker,
    title: "Replica Studios",
    description: "AI voice actor platform for creating realistic character voices for games, films, and interactive media with emotional range.",
    emoji: "📢",
    color: "from-purple-500 to-indigo-600",
    directUrl: "https://replicastudios.com/",
    tags: ["voice acting", "character voices", "game audio", "film audio", "interactive media"],
    category: "Audio & Music Tools",
    rating: 4.5,
    totalVotes: 3123
  },
  {
    icon: Waveform,
    title: "Soundraw",
    description: "AI music generator that creates royalty-free background music for videos, podcasts, and games with customizable mood and genre.",
    emoji: "〰️",
    color: "from-teal-500 to-green-600",
    directUrl: "https://soundraw.io/",
    tags: ["background music", "royalty-free", "video music", "podcast music", "customizable"],
    category: "Audio & Music Tools",
    rating: 4.2,
    totalVotes: 2876
  },
  {
    icon: Play,
    title: "Boomy",
    description: "AI music creation platform that lets anyone create original songs and submit them to streaming platforms for monetization.",
    emoji: "▶️",
    color: "from-orange-500 to-yellow-600",
    directUrl: "https://boomy.com/",
    tags: ["music creation", "original songs", "streaming platforms", "monetization", "beginner-friendly"],
    category: "Audio & Music Tools",
    rating: 4.0,
    totalVotes: 2345
  },
  {
    icon: Radio,
    title: "Endel",
    description: "AI-powered personalized soundscapes for focus, relaxation, and sleep based on real-time inputs like weather, heart rate, and time of day.",
    emoji: "📻",
    color: "from-indigo-500 to-purple-600",
    directUrl: "https://endel.io/",
    tags: ["personalized audio", "focus music", "relaxation", "sleep sounds", "adaptive soundscapes"],
    category: "Audio & Music Tools",
    rating: 4.4,
    totalVotes: 3456
  },
  {
    icon: VolumeX,
    title: "Krisp",
    description: "AI-powered noise cancellation tool that removes background noise from calls and recordings in real-time for crystal-clear audio.",
    emoji: "🔇",
    color: "from-gray-500 to-blue-600",
    directUrl: "https://krisp.ai/",
    tags: ["noise cancellation", "call quality", "background noise", "real-time processing", "clear audio"],
    category: "Audio & Music Tools",
    rating: 4.6,
    totalVotes: 4567
  }
];
