
import { Tool } from "@/types/tools";
import { Music, Volume2, Wand2, Radio } from "lucide-react";

export const audioEditingAndProductionTools: Tool[] = [
  {
    icon: Volume2,
    title: "Stable Audio",
    description: "AI audio generation model by Stability AI that creates music, sound effects, and ambient audio from text descriptions. High-quality variable-length audio generation.",
    emoji: "🔊",
    color: "from-violet-500 to-purple-600",
    directUrl: "https://stableaudio.com/",
    tags: ["Stability AI", "sound effects", "ambient audio", "variable length", "text descriptions", "high quality"],
    category: "Audio & Music Tools",
    rating: 4.6,
    totalVotes: 4321
  },
  {
    icon: Music,
    title: "LALAL.AI",
    description: "Innovative music source separation service that leverages advanced AI technology to swiftly and accurately extract vocal and instrument tracks from audio and video files while preserving high-quality audio.",
    emoji: "🎵",
    color: "from-green-500 to-blue-600",
    directUrl: "https://www.lalal.ai/?fp_ref=aiwebtools",
    tags: ["stem separation", "vocal extraction", "instrument tracks", "batch upload", "fast processing", "high-quality audio"],
    category: "Audio & Music Tools",
    rating: 4.6,
    totalVotes: 4567
  },
  {
    icon: Music,
    title: "Vocal Remover",
    description: "User-friendly online AI tool designed to eliminate vocals from audio files effectively. Excels at isolating vocals from the original track, resulting in a pristine instrumental version.",
    emoji: "🎵",
    color: "from-red-500 to-pink-600",
    directUrl: "https://vocalremover.org/",
    tags: ["vocal removal", "karaoke tracks", "AI technology", "instrumental version", "audio isolation", "one-click process"],
    category: "Audio & Music Tools",
    rating: 4.4,
    totalVotes: 3456
  },
  {
    icon: Wand2,
    title: "Songmastr",
    description: "User-friendly AI mastering tool designed to elevate the quality of your music effortlessly. Refine your songs to sound nearly as exceptional as your favorite artists' tracks.",
    emoji: "🎛️",
    color: "from-orange-500 to-yellow-600",
    directUrl: "https://www.songmastr.com/",
    tags: ["AI mastering", "reference track", "matchering library", "7 songs per week", "no downloads", "enhanced audio quality"],
    category: "Audio & Music Tools",
    rating: 4.2,
    totalVotes: 2543
  },
  {
    icon: Radio,
    title: "Adobe Podcast",
    description: "Powerful AI tool that offers a free solution for improving audio quality, transforming voice recordings into professional-grade audio as if they were produced in a top-tier podcasting studio.",
    emoji: "🎙️",
    color: "from-red-500 to-orange-600",
    directUrl: "https://podcast.adobe.com/enhance",
    tags: ["enhance speech", "professional audio", "free account", "bulk uploading", "mic check", "browser-based"],
    category: "Audio & Music Tools",
    rating: 4.6,
    totalVotes: 4234
  }
];
