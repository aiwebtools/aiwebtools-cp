import { Tool } from "@/types/tools";
import { Film, Music, Video, Sparkles, Wand2, Mic, Play, Camera, Clapperboard, Image as ImageIcon, Headphones, Disc, Star, Tv, Cpu } from "lucide-react";

import muvioHero from "@/assets/tools/muvio-ai-hero.jpg";
import kaiberHero from "@/assets/tools/kaiber-ai-hero.jpg";
import neuralFramesHero from "@/assets/tools/neural-frames-hero.jpg";
import specterrHero from "@/assets/tools/specterr-hero.jpg";
import rotorVideosHero from "@/assets/tools/rotor-videos-hero.jpg";
import decoherenceHero from "@/assets/tools/decoherence-hero.jpg";
import wzrdHero from "@/assets/tools/wzrd-hero.jpg";
import hailuoAiHero from "@/assets/tools/hailuo-ai-hero.jpg";
import klingMusicHero from "@/assets/tools/kling-ai-music-hero.jpg";
import viduAiHero from "@/assets/tools/vidu-ai-hero.jpg";
import genmoHero from "@/assets/tools/genmo-hero.jpg";
import vondyMusicHero from "@/assets/tools/vondy-music-hero.jpg";
import renderforestMusicHero from "@/assets/tools/renderforest-music-hero.jpg";
import steveAiHero from "@/assets/tools/steve-ai-hero.jpg";
import invideoMusicHero from "@/assets/tools/invideo-music-hero.jpg";
import veedMusicHero from "@/assets/tools/veed-music-hero.jpg";
import hedraHero from "@/assets/tools/hedra-hero.jpg";
import higgsfieldHero from "@/assets/tools/higgsfield-hero.jpg";
import domoAiHero from "@/assets/tools/domo-ai-hero.jpg";
import pixverseHero from "@/assets/tools/pixverse-hero.jpg";
import kreaMusicHero from "@/assets/tools/krea-music-hero.jpg";
import aiStudiosMusicHero from "@/assets/tools/ai-studios-music-hero.jpg";
import polloAiMusicHero from "@/assets/tools/pollo-ai-music-hero.jpg";
import neuralCanvasHero from "@/assets/tools/neuralcanvas-hero.jpg";
import aivaVideoHero from "@/assets/tools/aiva-video-hero.jpg";
import plaidayHero from "@/assets/tools/plaiday-hero.jpg";
import magicHourHero from "@/assets/tools/magichour-hero.jpg";
import lensgoHero from "@/assets/tools/lensgo-hero.jpg";
import diffusionStudioHero from "@/assets/tools/diffusion-studio-hero.jpg";
import audoirHero from "@/assets/tools/audoir-hero.jpg";

// 25 AI Music Video Generator agents & tools — fully indexed, searchable, tagged.
// Curated real AI tools only (no fakes, no NSFW, per project rules).
const CATEGORY = "AI Music Video Generators";
const MUSIC_VIDEO_TAGS = ["AI music video", "music video generator", "music video maker", "AI music video agent"];

export const aiMusicVideoGeneratorTools: Tool[] = [
  {
    icon: Sparkles,
    title: "Muvio",
    description: "Muvio is an end-to-end AI music video agent: it ingests your song, plans scenes, generates the visuals, syncs cuts to the beat, and assembles a finished music video automatically. The fastest way to turn a track into a real video without editing or prompting expertise.",
    emoji: "🎬",
    color: "from-fuchsia-500 to-blue-600",
    directUrl: "https://muvio.ai/?via=aiwebtools",
    imageUrl: muvioHero,
    tags: [...MUSIC_VIDEO_TAGS, "Muvio", "AI agent", "song to video", "beat sync", "automatic music video", "end-to-end", "Muvio.ai"],
    category: CATEGORY,
    rating: 4.8,
    totalVotes: 18500
  },
  {
    icon: Wand2,
    title: "Kaiber",
    description: "Kaiber is a popular AI music video generator that animates your song into stylized, audio-reactive visuals. Upload audio, choose a style, and it produces cinematic music videos with motion synced to the track. Used by major artists.",
    emoji: "🪄",
    color: "from-purple-600 to-pink-600",
    directUrl: "https://kaiber.ai/?via=aiwebtools",
    imageUrl: kaiberHero,
    tags: [...MUSIC_VIDEO_TAGS, "Kaiber", "audio reactive", "AI animation", "artist videos", "song to video"],
    category: CATEGORY,
    rating: 4.7,
    totalVotes: 96000
  },
  {
    icon: Cpu,
    title: "Neural Frames",
    description: "Neural Frames is an audio-reactive AI music video generator that turns prompts and your music into hypnotic, beat-driven animations. Great for psychedelic, electronic, and visualizer-style music videos with real-time audio reactivity.",
    emoji: "🧠",
    color: "from-indigo-500 to-pink-500",
    directUrl: "https://www.neuralframes.com/?via=aiwebtools",
    imageUrl: neuralFramesHero,
    tags: [...MUSIC_VIDEO_TAGS, "Neural Frames", "audio reactive", "AI visualizer", "stable diffusion", "psychedelic"],
    category: CATEGORY,
    rating: 4.7,
    totalVotes: 28000
  },
  {
    icon: Disc,
    title: "Specterr",
    description: "Specterr is a powerful music visualizer and lyric video maker. Create high-quality animated music videos and visualizers in minutes, with custom branding, audio spectrum effects, and lyric overlays — ideal for releases and YouTube.",
    emoji: "💿",
    color: "from-cyan-500 to-emerald-500",
    directUrl: "https://specterr.com/?via=aiwebtools",
    imageUrl: specterrHero,
    tags: [...MUSIC_VIDEO_TAGS, "Specterr", "music visualizer", "lyric video", "audio spectrum", "release video"],
    category: CATEGORY,
    rating: 4.6,
    totalVotes: 22000
  },
  {
    icon: Film,
    title: "Rotor Videos",
    description: "Rotor Videos is an AI music video maker built for musicians. Upload your track, pick a style, and Rotor auto-cuts royalty-free footage in time with your music to deliver a release-ready video — fast and affordable.",
    emoji: "🎞️",
    color: "from-orange-500 to-red-600",
    directUrl: "https://rotorvideos.com/?via=aiwebtools",
    imageUrl: rotorVideosHero,
    tags: [...MUSIC_VIDEO_TAGS, "Rotor", "Rotor Videos", "auto music video", "musicians", "stock footage", "release video"],
    category: CATEGORY,
    rating: 4.6,
    totalVotes: 34000
  },
  {
    icon: Sparkles,
    title: "Decoherence",
    description: "Decoherence is an AI music video tool built on Stable Diffusion. Generate beat-synced visuals, animate keyframes to your audio, and craft surreal AI music videos with fine creative control.",
    emoji: "🌌",
    color: "from-violet-600 to-cyan-500",
    directUrl: "https://www.decoherence.co/?via=aiwebtools",
    imageUrl: decoherenceHero,
    tags: [...MUSIC_VIDEO_TAGS, "Decoherence", "stable diffusion", "beat sync", "keyframe animation"],
    category: CATEGORY,
    rating: 4.6,
    totalVotes: 18000
  },
  {
    icon: Wand2,
    title: "WZRD",
    description: "WZRD turns any audio track into a dreamlike, AI-generated music video. Upload your song and WZRD creates audio-reactive surreal visuals automatically — perfect for ambient, electronic, and atmospheric tracks.",
    emoji: "🧙",
    color: "from-purple-500 to-amber-500",
    directUrl: "https://wzrd.ai/?via=aiwebtools",
    imageUrl: wzrdHero,
    tags: [...MUSIC_VIDEO_TAGS, "WZRD", "audio reactive", "surreal visuals", "ambient"],
    category: CATEGORY,
    rating: 4.5,
    totalVotes: 14000
  },
  {
    icon: Video,
    title: "Hailuo AI (MiniMax)",
    description: "Hailuo AI by MiniMax is a cinematic text-to-video model excellent for music videos. Generates high-fidelity scenes with realistic motion and dramatic camera work — perfect for crafting individual music video shots.",
    emoji: "🎥",
    color: "from-red-600 to-amber-500",
    directUrl: "https://hailuoai.video/?via=aiwebtools",
    imageUrl: hailuoAiHero,
    tags: [...MUSIC_VIDEO_TAGS, "Hailuo", "MiniMax", "text to video", "cinematic", "music video shots"],
    category: CATEGORY,
    rating: 4.8,
    totalVotes: 67000
  },
  {
    icon: Film,
    title: "Kling AI Music Videos",
    description: "Kling AI generates ultra-realistic cinematic clips ideal for music videos. Strong physics, character consistency, and long-form scenes make it a top choice for assembling pro-grade AI music videos.",
    emoji: "🎬",
    color: "from-blue-600 to-fuchsia-600",
    directUrl: "https://klingai.com/?via=aiwebtools",
    imageUrl: klingMusicHero,
    tags: [...MUSIC_VIDEO_TAGS, "Kling", "Kling AI", "text to video", "cinematic", "long form", "character consistency"],
    category: CATEGORY,
    rating: 4.8,
    totalVotes: 145000
  },
  {
    icon: ImageIcon,
    title: "Vidu AI",
    description: "Vidu AI is an image-to-video and text-to-video model built for cinematic storytelling. Music video makers use it to animate stills into beat-driven cuts with strong character continuity across scenes.",
    emoji: "🎞️",
    color: "from-indigo-500 to-pink-500",
    directUrl: "https://www.vidu.com/?via=aiwebtools",
    imageUrl: viduAiHero,
    tags: [...MUSIC_VIDEO_TAGS, "Vidu", "Vidu AI", "image to video", "text to video", "character consistency"],
    category: CATEGORY,
    rating: 4.7,
    totalVotes: 41000
  },
  {
    icon: Sparkles,
    title: "Genmo",
    description: "Genmo is an open-source-leaning AI video model great for generating expressive, stylized clips for music videos. Strong on motion and creative direction for short-form rhythmic visuals.",
    emoji: "✨",
    color: "from-orange-500 to-fuchsia-600",
    directUrl: "https://www.genmo.ai/?via=aiwebtools",
    imageUrl: genmoHero,
    tags: [...MUSIC_VIDEO_TAGS, "Genmo", "open source", "AI video", "stylized clips"],
    category: CATEGORY,
    rating: 4.5,
    totalVotes: 16000
  },
  {
    icon: Mic,
    title: "Vondy Music Video Generator",
    description: "Vondy's Music Video Generator is a free AI tool that turns prompts and audio into short music videos. Simple, accessible, and great for quick concept reels and social posts.",
    emoji: "🎤",
    color: "from-teal-500 to-fuchsia-500",
    directUrl: "https://www.vondy.com/?via=aiwebtools",
    imageUrl: vondyMusicHero,
    tags: [...MUSIC_VIDEO_TAGS, "Vondy", "free", "quick", "concept reels"],
    category: CATEGORY,
    rating: 4.3,
    totalVotes: 9000
  },
  {
    icon: Film,
    title: "Renderforest Music Video Maker",
    description: "Renderforest's Music Video Maker offers hundreds of templates to produce branded lyric videos, visualizers, and band promos. Easy drag-and-drop workflow with built-in audio sync.",
    emoji: "🌳",
    color: "from-green-500 to-yellow-500",
    directUrl: "https://www.renderforest.com/music-video-maker?via=aiwebtools",
    imageUrl: renderforestMusicHero,
    tags: [...MUSIC_VIDEO_TAGS, "Renderforest", "templates", "lyric video", "visualizer"],
    category: CATEGORY,
    rating: 4.5,
    totalVotes: 38000
  },
  {
    icon: Play,
    title: "Steve.AI Music Video Maker",
    description: "Steve.AI converts a song or script into animated or live-action music videos in minutes. Includes hundreds of styles, beat-aware editing, and lyric overlays for fast release-ready clips.",
    emoji: "▶️",
    color: "from-orange-500 to-blue-500",
    directUrl: "https://www.steve.ai/?via=aiwebtools",
    imageUrl: steveAiHero,
    tags: [...MUSIC_VIDEO_TAGS, "Steve.ai", "animated music video", "lyric video", "beat editing"],
    category: CATEGORY,
    rating: 4.5,
    totalVotes: 28000
  },
  {
    icon: Clapperboard,
    title: "InVideo AI Music Videos",
    description: "InVideo AI's music video workflow uses a generative editor to assemble beat-matched footage, transitions, and effects from a prompt. Great for fast lyric and concept music videos.",
    emoji: "🎬",
    color: "from-purple-600 to-pink-500",
    directUrl: "https://invideo.io/?via=aiwebtools",
    imageUrl: invideoMusicHero,
    tags: [...MUSIC_VIDEO_TAGS, "InVideo", "InVideo AI", "generative editor", "lyric video"],
    category: CATEGORY,
    rating: 4.6,
    totalVotes: 52000
  },
  {
    icon: Video,
    title: "VEED.IO AI Music Video",
    description: "VEED.IO offers AI music video templates, audio-reactive overlays, lyric video tools, and beat-synced auto-edits — all in a browser-based editor. Fast turnaround from upload to publish.",
    emoji: "🎥",
    color: "from-emerald-500 to-blue-600",
    directUrl: "https://www.veed.io/?via=aiwebtools",
    imageUrl: veedMusicHero,
    tags: [...MUSIC_VIDEO_TAGS, "VEED", "VEED.IO", "lyric video", "audio reactive", "browser editor"],
    category: CATEGORY,
    rating: 4.6,
    totalVotes: 71000
  },
  {
    icon: Mic,
    title: "Hedra",
    description: "Hedra creates lip-synced AI characters that perform your song. Upload audio + a portrait, and Hedra generates a music video character that sings every word — ideal for vocal-driven music videos.",
    emoji: "🎙️",
    color: "from-red-500 to-amber-500",
    directUrl: "https://www.hedra.com/?via=aiwebtools",
    imageUrl: hedraHero,
    tags: [...MUSIC_VIDEO_TAGS, "Hedra", "lip sync", "AI character", "talking head", "singing avatar"],
    category: CATEGORY,
    rating: 4.7,
    totalVotes: 48000
  },
  {
    icon: Camera,
    title: "Higgsfield AI",
    description: "Higgsfield AI delivers cinematic camera moves for music video shots — dolly, crash zoom, crane, FPV — applied to AI-generated scenes. A go-to for stylish, director-grade music video b-roll.",
    emoji: "🎥",
    color: "from-pink-600 to-orange-500",
    directUrl: "https://higgsfield.ai/?via=aiwebtools",
    imageUrl: higgsfieldHero,
    tags: [...MUSIC_VIDEO_TAGS, "Higgsfield", "camera moves", "cinematic shots", "music video b-roll"],
    category: CATEGORY,
    rating: 4.7,
    totalVotes: 39000
  },
  {
    icon: Wand2,
    title: "Domo AI",
    description: "Domo AI restyles videos into anime, painted, and stylized music video aesthetics. Perfect for transforming dance footage or AI clips into a unified music video look.",
    emoji: "🎨",
    color: "from-pink-400 to-sky-400",
    directUrl: "https://domoai.app/?via=aiwebtools",
    imageUrl: domoAiHero,
    tags: [...MUSIC_VIDEO_TAGS, "Domo AI", "video stylize", "anime", "video to video"],
    category: CATEGORY,
    rating: 4.6,
    totalVotes: 33000
  },
  {
    icon: Tv,
    title: "PixVerse AI",
    description: "PixVerse generates short vertical AI clips perfect for music video reels, with strong character motion and music-friendly cinematic templates.",
    emoji: "📺",
    color: "from-pink-500 to-green-400",
    directUrl: "https://pixverse.ai/?via=aiwebtools",
    imageUrl: pixverseHero,
    tags: [...MUSIC_VIDEO_TAGS, "PixVerse", "vertical video", "Reels", "short form", "character animation"],
    category: CATEGORY,
    rating: 4.6,
    totalVotes: 44000
  },
  {
    icon: Sparkles,
    title: "Krea AI Video",
    description: "Krea AI's real-time video generation lets music video creators sketch scenes, apply styles, and iterate fast on cinematic looks that match the song.",
    emoji: "🎛️",
    color: "from-blue-500 to-violet-600",
    directUrl: "https://www.krea.ai/?via=aiwebtools",
    imageUrl: kreaMusicHero,
    tags: [...MUSIC_VIDEO_TAGS, "Krea", "Krea AI", "real time", "style transfer"],
    category: CATEGORY,
    rating: 4.7,
    totalVotes: 52000
  },
  {
    icon: Star,
    title: "DeepBrain AI Studios (Music)",
    description: "DeepBrain's AI Studios produces realistic AI presenters that can host, perform, or narrate music videos. Great for vocal-led tracks, music documentaries, and lyric performance videos.",
    emoji: "🌟",
    color: "from-blue-700 to-slate-300",
    directUrl: "https://www.aistudios.com/?via=aiwebtools",
    imageUrl: aiStudiosMusicHero,
    tags: [...MUSIC_VIDEO_TAGS, "AI Studios", "DeepBrain", "AI avatar", "lyric performance"],
    category: CATEGORY,
    rating: 4.5,
    totalVotes: 25000
  },
  {
    icon: Music,
    title: "Pollo AI Music Video",
    description: "Pollo AI's music video workflow lets you combine multiple AI video models (Kling, Hailuo, Runway, Vidu, Sora-style) to assemble full music videos from one dashboard.",
    emoji: "🐔",
    color: "from-yellow-500 to-teal-600",
    directUrl: "https://pollo.ai/?via=aiwebtools",
    imageUrl: polloAiMusicHero,
    tags: [...MUSIC_VIDEO_TAGS, "Pollo", "Pollo AI", "multi-model", "AI video dashboard"],
    category: CATEGORY,
    rating: 4.6,
    totalVotes: 31000
  },
  {
    icon: ImageIcon,
    title: "NeuralCanvas",
    description: "NeuralCanvas generates AI music video frames and animated scenes from prompts, with painterly and cinematic styles ideal for music storytelling.",
    emoji: "🎨",
    color: "from-fuchsia-500 to-blue-600",
    directUrl: "https://neuralcanvas.io/?via=aiwebtools",
    imageUrl: neuralCanvasHero,
    tags: [...MUSIC_VIDEO_TAGS, "NeuralCanvas", "AI scenes", "painterly", "cinematic"],
    category: CATEGORY,
    rating: 4.4,
    totalVotes: 11000
  },
  {
    icon: Headphones,
    title: "AIVA + AI Video",
    description: "AIVA composes original AI music; pair it with AI video models to build complete original-soundtrack music videos. A favorite of indie composers and music video creators.",
    emoji: "🎼",
    color: "from-amber-700 to-yellow-400",
    directUrl: "https://www.aiva.ai/?via=aiwebtools",
    imageUrl: aivaVideoHero,
    tags: [...MUSIC_VIDEO_TAGS, "AIVA", "AI composer", "original soundtrack", "score to video"],
    category: CATEGORY,
    rating: 4.7,
    totalVotes: 48000
  },
  {
    icon: Play,
    title: "PlaiDay",
    description: "PlaiDay turns photos and prompts into AI music video moments featuring you and friends. Built for short, share-ready music clips with personalized characters.",
    emoji: "🎭",
    color: "from-rose-500 to-teal-500",
    directUrl: "https://plai.day/?via=aiwebtools",
    imageUrl: plaidayHero,
    tags: [...MUSIC_VIDEO_TAGS, "PlaiDay", "personalized", "short form", "character video"],
    category: CATEGORY,
    rating: 4.4,
    totalVotes: 9500
  },
  {
    icon: Sparkles,
    title: "Magic Hour AI Music Videos",
    description: "Magic Hour bundles multiple AI video and image models with a music video workflow — text-to-video, lip-sync, restyle, and timeline tools for finished music videos.",
    emoji: "🌅",
    color: "from-purple-600 to-orange-500",
    directUrl: "https://magichour.ai/?via=aiwebtools",
    imageUrl: magicHourHero,
    tags: [...MUSIC_VIDEO_TAGS, "Magic Hour", "lip sync", "video restyle", "all in one"],
    category: CATEGORY,
    rating: 4.6,
    totalVotes: 21000
  },
  {
    icon: Wand2,
    title: "LensGo",
    description: "LensGo restyles video clips into animated or stylized music video looks — great for transforming dance footage, performance video, or AI scenes into a cohesive music video.",
    emoji: "📷",
    color: "from-pink-300 to-blue-400",
    directUrl: "https://lensgo.ai/?via=aiwebtools",
    imageUrl: lensgoHero,
    tags: [...MUSIC_VIDEO_TAGS, "LensGo", "video to video", "stylize", "anime music video"],
    category: CATEGORY,
    rating: 4.5,
    totalVotes: 17000
  },
  {
    icon: Cpu,
    title: "Diffusion Studio",
    description: "Diffusion Studio is an open-source AI video tooling platform used by music video creators to chain diffusion models, audio reactivity, and editing into custom music video pipelines.",
    emoji: "🧬",
    color: "from-emerald-500 to-black",
    directUrl: "https://diffusion.studio/?via=aiwebtools",
    imageUrl: diffusionStudioHero,
    tags: [...MUSIC_VIDEO_TAGS, "Diffusion Studio", "open source", "developer", "custom pipeline"],
    category: CATEGORY,
    rating: 4.4,
    totalVotes: 7500
  },
  {
    icon: Disc,
    title: "Audoir AI",
    description: "Audoir is an audio-reactive AI music video and visualizer tool that builds dynamic, beat-synced AI animations for releases, streams, and live performances.",
    emoji: "🎚️",
    color: "from-cyan-500 to-fuchsia-600",
    directUrl: "https://www.audoir.com/?via=aiwebtools",
    imageUrl: audoirHero,
    tags: [...MUSIC_VIDEO_TAGS, "Audoir", "audio reactive", "visualizer", "live visuals"],
    category: CATEGORY,
    rating: 4.4,
    totalVotes: 6200
  }
];