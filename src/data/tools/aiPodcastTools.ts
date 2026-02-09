
import { Tool } from "@/types/tools";
import { 
  Mic, 
  Headphones, 
  Wand2, 
  Volume2,
  Edit3,
  Radio,
  Video
} from "lucide-react";
import descriptHero from "@/assets/tools/descript-hero.jpg";
import riversideFmHero from "@/assets/tools/riverside-fm-hero.jpg";
import podcastleHero from "@/assets/tools/podcastle-hero.jpg";
import cleanvoiceHero from "@/assets/tools/cleanvoice-hero.jpg";
import auphonicHero from "@/assets/tools/auphonic-hero.jpg";
import anchorSpotifyHero from "@/assets/tools/anchor-spotify-hero.jpg";

export const aiPodcastTools: Tool[] = [
  {
    icon: Edit3,
    title: "Descript",
    description: "All-in-one podcast editing platform that lets you edit audio by editing text. Features AI-powered Studio Sound, filler word removal, transcription, and multi-track editing for professional podcast production.",
    emoji: "🎙️",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://www.descript.com/?via=aiwebtools",
    imageUrl: descriptHero,
    tags: ["Podcast Tools", "Audio Editing", "podcast editing", "text-based editing", "AI audio", "transcription", "filler word removal"],
    category: "AI Podcast Tools",
    rating: 4.7,
    totalVotes: 5234
  },
  {
    icon: Video,
    title: "Riverside.fm",
    description: "Professional podcast and video recording platform with studio-quality audio and 4K video. Records locally for lossless quality, with AI transcription, editing tools, and live streaming capabilities.",
    emoji: "🎬",
    color: "from-blue-500 to-green-600",
    directUrl: "https://riverside.fm/?via=aiwebtools",
    imageUrl: riversideFmHero,
    tags: ["Podcast Tools", "podcast recording", "video recording", "studio quality", "remote interviews", "live streaming"],
    category: "AI Podcast Tools",
    rating: 4.8,
    totalVotes: 6789
  },
  {
    icon: Mic,
    title: "Podcastle",
    description: "AI-powered podcast creation platform offering recording, editing, and hosting. Features Magic Dust for audio enhancement, automatic transcription, and collaborative editing tools for teams.",
    emoji: "🎧",
    color: "from-orange-500 to-red-600",
    directUrl: "https://podcastle.ai/?via=aiwebtools",
    imageUrl: podcastleHero,
    tags: ["Podcast Tools", "Audio Enhancement", "podcast creation", "audio enhancement", "collaborative editing", "podcast hosting", "AI editing"],
    category: "AI Podcast Tools",
    rating: 4.5,
    totalVotes: 4123
  },
  {
    icon: Wand2,
    title: "Cleanvoice",
    description: "AI-powered audio editing tool that automatically removes filler sounds, mouth sounds, stuttering, and dead air from podcast recordings. Supports multiple languages and provides professional-quality audio cleanup.",
    emoji: "✨",
    color: "from-green-500 to-blue-600",
    directUrl: "https://cleanvoice.ai/?via=aiwebtools",
    imageUrl: cleanvoiceHero,
    tags: ["Podcast Tools", "Audio Enhancement", "audio cleanup", "filler removal", "podcast editing", "AI audio processing", "noise reduction"],
    category: "AI Podcast Tools",
    rating: 4.6,
    totalVotes: 3456
  },
  {
    icon: Headphones,
    title: "Auphonic",
    description: "Intelligent audio post-production tool with automatic audio leveling, noise reduction, and multitrack balancing. Optimizes podcasts for different listening platforms with AI-powered audio processing.",
    emoji: "🎵",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://auphonic.com/?via=aiwebtools",
    imageUrl: auphonicHero,
    tags: ["Podcast Tools", "Audio Enhancement", "audio leveling", "noise reduction", "post-production", "multitrack", "audio optimization"],
    category: "AI Podcast Tools",
    rating: 4.4,
    totalVotes: 2987
  },
  {
    icon: Radio,
    title: "Anchor (Spotify for Podcasters)",
    description: "Free podcast creation and hosting platform by Spotify. Offers recording tools, editing features, distribution to all major platforms, and monetization options for podcasters of all levels.",
    emoji: "📻",
    color: "from-green-500 to-blue-600",
    directUrl: "https://podcasters.spotify.com/?via=aiwebtools",
    imageUrl: anchorSpotifyHero,
    tags: ["Podcast Tools", "podcast hosting", "free platform", "distribution", "monetization", "Spotify"],
    category: "AI Podcast Tools",
    rating: 4.5,
    totalVotes: 7890
  }
];
