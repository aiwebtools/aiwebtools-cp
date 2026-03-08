import { Tool } from "@/types/tools";
import { 
  Volume2, AudioLines, Waves, Zap, Music,
  Speaker, Radio, Headphones, Mic2, FileAudio
} from "lucide-react";

import adobePodcastAiHero from "@/assets/tools/adobe-podcast-ai-hero.jpg";
import soundlyHero from "@/assets/tools/soundly-hero.jpg";
import boomLibraryHero from "@/assets/tools/boom-library-hero.jpg";
import spliceSoundsHero from "@/assets/tools/splice-sounds-hero.jpg";
import artlistSfxHero from "@/assets/tools/artlist-sfx-hero.jpg";
import epidemicSoundHero from "@/assets/tools/epidemic-sound-hero.jpg";
import zapsplatHero from "@/assets/tools/zapsplat-hero.jpg";
import freesoundHero from "@/assets/tools/freesound-hero.jpg";
import soundsnapHero from "@/assets/tools/soundsnap-hero.jpg";
import bbcSoundEffectsHero from "@/assets/tools/bbc-sound-effects-hero.jpg";
import storyblocksAudioHero from "@/assets/tools/storyblocks-audio-hero.jpg";
import sonnissHero from "@/assets/tools/sonniss-hero.jpg";
import proSoundEffectsHero from "@/assets/tools/pro-sound-effects-hero.jpg";
import aSoundEffectHero from "@/assets/tools/a-sound-effect-hero.jpg";
import audioJungleHero from "@/assets/tools/audio-jungle-hero.jpg";

export const sfxGeneratorTools: Tool[] = [
  {
    icon: Volume2,
    title: "Adobe Podcast AI",
    description: "Adobe's AI-powered audio tool suite with voice enhancement, noise reduction, and speech-to-text for professional podcasts and audio production.",
    emoji: "🎧",
    color: "from-red-500 to-orange-600",
    directUrl: "https://podcast.adobe.com/?via=aiwebtools",
    imageUrl: adobePodcastAiHero,
    tags: ["Sound Effects", "Voice Enhancement", "Noise Reduction", "Adobe", "Podcast", "Audio Production", "AI Audio"],
    category: "AUDIO & VOICE TOOLS",
    rating: 4.7,
    totalVotes: 4230
  },
  {
    icon: Waves,
    title: "Soundly",
    description: "Cloud-based sound effects library and search engine for filmmakers, game developers, and content creators. Find and preview thousands of SFX instantly.",
    emoji: "🔊",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://getsoundly.com/?via=aiwebtools",
    imageUrl: soundlyHero,
    tags: ["Sound Effects", "SFX Library", "Filmmaking", "Game Audio", "Content Creation", "Sound Design"],
    category: "AUDIO & VOICE TOOLS",
    rating: 4.6,
    totalVotes: 3540
  },
  {
    icon: AudioLines,
    title: "Boom Library",
    description: "Premium sound effects and sample library for film, TV, games, and media. High-quality cinematic SFX collections from industry professionals.",
    emoji: "💥",
    color: "from-orange-500 to-red-600",
    directUrl: "https://www.boomlibrary.com/?via=aiwebtools",
    imageUrl: boomLibraryHero,
    tags: ["Sound Effects", "SFX Library", "Cinematic", "Film Audio", "Game Sound", "Premium SFX"],
    category: "AUDIO & VOICE TOOLS",
    rating: 4.8,
    totalVotes: 4120
  },
  {
    icon: Zap,
    title: "Splice Sounds",
    description: "Massive library of royalty-free samples, loops, and sound effects. Industry-standard sounds for music production and sound design.",
    emoji: "⚡",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://splice.com/sounds/?via=aiwebtools",
    imageUrl: spliceSoundsHero,
    tags: ["Sound Effects", "Samples", "Loops", "Royalty-Free", "Music Production", "Sound Design"],
    category: "AUDIO & VOICE TOOLS",
    rating: 4.7,
    totalVotes: 5680
  },
  {
    icon: Speaker,
    title: "Artlist SFX",
    description: "Curated sound effects library with unlimited downloads for creators. High-quality foley, ambience, and cinematic sounds.",
    emoji: "🎬",
    color: "from-teal-500 to-green-600",
    directUrl: "https://artlist.io/sfx/?via=aiwebtools",
    imageUrl: artlistSfxHero,
    tags: ["Sound Effects", "Foley", "Ambience", "Cinematic SFX", "Unlimited Downloads", "Content Creation"],
    category: "AUDIO & VOICE TOOLS",
    rating: 4.6,
    totalVotes: 3890
  },
  {
    icon: Radio,
    title: "Epidemic Sound SFX",
    description: "Premium sound effects library paired with royalty-free music. Perfect for YouTube, podcasts, and professional productions.",
    emoji: "📻",
    color: "from-indigo-500 to-purple-600",
    directUrl: "https://www.epidemicsound.com/sound-effects/?via=aiwebtools",
    imageUrl: epidemicSoundHero,
    tags: ["Sound Effects", "Royalty-Free", "YouTube Audio", "Podcast SFX", "Professional", "Music Library"],
    category: "AUDIO & VOICE TOOLS",
    rating: 4.5,
    totalVotes: 4560
  },
  {
    icon: Headphones,
    title: "ZapSplat",
    description: "Free sound effects library with thousands of high-quality SFX. Perfect for indie creators, students, and professionals.",
    emoji: "💫",
    color: "from-yellow-500 to-orange-500",
    directUrl: "https://www.zapsplat.com/?via=aiwebtools",
    imageUrl: zapsplatHero,
    tags: ["Sound Effects", "Free SFX", "Indie Audio", "Sound Library", "Creative Commons"],
    category: "AUDIO & VOICE TOOLS",
    rating: 4.4,
    totalVotes: 3210
  },
  {
    icon: Music,
    title: "Freesound",
    description: "Collaborative database of Creative Commons licensed sounds. Community-driven SFX sharing platform for creators worldwide.",
    emoji: "🌍",
    color: "from-green-500 to-teal-500",
    directUrl: "https://freesound.org/?via=aiwebtools",
    imageUrl: freesoundHero,
    tags: ["Sound Effects", "Creative Commons", "Community", "Free Audio", "Sound Database"],
    category: "AUDIO & VOICE TOOLS",
    rating: 4.3,
    totalVotes: 2890
  },
  {
    icon: Mic2,
    title: "Soundsnap",
    description: "Professional sound effects library used by major studios. High-quality recordings for film, TV, games, and advertising.",
    emoji: "🎙️",
    color: "from-red-600 to-rose-500",
    directUrl: "https://www.soundsnap.com/?via=aiwebtools",
    imageUrl: soundsnapHero,
    tags: ["Sound Effects", "Professional SFX", "Studio Quality", "Film Audio", "Advertising"],
    category: "AUDIO & VOICE TOOLS",
    rating: 4.6,
    totalVotes: 3670
  },
  {
    icon: FileAudio,
    title: "Sonniss GameAudioGDC",
    description: "Annual game audio bundles with thousands of royalty-free sound effects specifically designed for game development.",
    emoji: "🎮",
    color: "from-violet-500 to-purple-600",
    directUrl: "https://sonniss.com/?via=aiwebtools",
    imageUrl: sonnissHero,
    tags: ["Sound Effects", "Game Audio", "Royalty-Free", "Game Development", "SFX Bundle"],
    category: "AUDIO & VOICE TOOLS",
    rating: 4.5,
    totalVotes: 2980
  },
  {
    icon: AudioLines,
    title: "Pro Sound Effects",
    description: "Premium sound effects library with over 500,000 sounds. Industry-standard SFX used in major Hollywood productions.",
    emoji: "🎥",
    color: "from-slate-600 to-gray-700",
    directUrl: "https://www.prosoundeffects.com/?via=aiwebtools",
    imageUrl: proSoundEffectsHero,
    tags: ["Sound Effects", "Hollywood Audio", "Premium SFX", "Film Production", "Professional"],
    category: "AUDIO & VOICE TOOLS",
    rating: 4.7,
    totalVotes: 3450
  },
  {
    icon: Waves,
    title: "A Sound Effect",
    description: "Independent sound effects marketplace connecting creators with sound designers. Unique and specialized SFX collections.",
    emoji: "🎭",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://www.asoundeffect.com/?via=aiwebtools",
    imageUrl: aSoundEffectHero,
    tags: ["Sound Effects", "Indie SFX", "Marketplace", "Sound Design", "Unique Sounds"],
    category: "AUDIO & VOICE TOOLS",
    rating: 4.4,
    totalVotes: 2340
  },
  {
    icon: Zap,
    title: "Audio Jungle",
    description: "Envato's massive marketplace for royalty-free music and sound effects. Affordable SFX for every project type.",
    emoji: "🌴",
    color: "from-green-600 to-emerald-500",
    directUrl: "https://audiojungle.net/?via=aiwebtools",
    imageUrl: audioJungleHero,
    tags: ["Sound Effects", "Envato", "Royalty-Free", "Affordable SFX", "Marketplace"],
    category: "AUDIO & VOICE TOOLS",
    rating: 4.5,
    totalVotes: 4890
  },
  {
    icon: Speaker,
    title: "BBC Sound Effects",
    description: "Over 33,000 sound effects from the BBC Archive available for personal, educational, and research use.",
    emoji: "📺",
    color: "from-black to-gray-700",
    directUrl: "https://sound-effects.bbcrewind.co.uk/?via=aiwebtools",
    imageUrl: bbcSoundEffectsHero,
    tags: ["Sound Effects", "BBC", "Archive", "Free SFX", "Historical Audio", "Educational"],
    category: "AUDIO & VOICE TOOLS",
    rating: 4.6,
    totalVotes: 3120
  },
  {
    icon: Volume2,
    title: "Storyblocks Audio",
    description: "Unlimited downloads of royalty-free music, sound effects, and audio tracks for video creators and content producers.",
    emoji: "📚",
    color: "from-blue-600 to-indigo-600",
    directUrl: "https://www.storyblocks.com/audio/?via=aiwebtools",
    imageUrl: storyblocksAudioHero,
    tags: ["Sound Effects", "Royalty-Free", "Unlimited Downloads", "Video Audio", "Stock Audio"],
    category: "AUDIO & VOICE TOOLS",
    rating: 4.5,
    totalVotes: 3780
  }
];
