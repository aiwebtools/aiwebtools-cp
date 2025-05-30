
import { Tool } from "@/types/tools";
import { 
  Music, 
  Headphones, 
  Mic, 
  Volume2, 
  Radio, 
  Play,
  Disc,
  Waves,
  AudioLines,
  Speaker
} from "lucide-react";

export const aiMusicTools: Tool[] = [
  {
    icon: Music,
    title: "AIVA",
    description: "AI music generation platform that composes emotional soundtrack music for films, video games, and commercials. Create original compositions in various styles.",
    emoji: "🎵",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://www.aiva.ai/",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=200&fit=crop",
    tags: ["music composition", "soundtrack", "film music", "game music", "original compositions"],
    category: "Audio & Music Tools",
    rating: 4.6,
    totalVotes: 3234
  },
  {
    icon: Headphones,
    title: "Mubert",
    description: "AI music streaming and generation platform that creates royalty-free music for content creators, apps, and businesses in real-time.",
    emoji: "🎧",
    color: "from-green-500 to-cyan-600",
    directUrl: "https://mubert.com/",
    imageUrl: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=400&h=200&fit=crop",
    tags: ["royalty-free music", "streaming", "content creators", "real-time generation", "business music"],
    category: "Audio & Music Tools",
    rating: 4.4,
    totalVotes: 2876
  },
  {
    icon: Mic,
    title: "Soundraw",
    description: "AI-powered music generator for creators. Generate unlimited royalty-free music, customize tracks, and create unique soundtracks for any project.",
    emoji: "🎤",
    color: "from-orange-500 to-red-600",
    directUrl: "https://soundraw.io/",
    imageUrl: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=200&fit=crop",
    tags: ["music generator", "royalty-free", "customizable tracks", "soundtracks", "unlimited music"],
    category: "Audio & Music Tools",
    rating: 4.5,
    totalVotes: 3567
  }
];
