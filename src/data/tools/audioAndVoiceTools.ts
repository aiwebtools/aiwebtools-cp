
import { Tool } from "@/types/tools";
import { 
  Mic, 
  Volume2, 
  Phone, 
  MessageSquare, 
  Headphones,
  Music,
  Radio,
  Speaker,
  Disc,
  AudioLines,
  Bot,
  BarChart3,
  TrendingUp
} from "lucide-react";

import elevenlabsHero from "@/assets/tools/elevenlabs-hero.jpg";
import blandAiHero from "@/assets/tools/bland-ai-hero.jpg";
import vapiAiHero from "@/assets/tools/vapi-ai-hero.jpg";
import retellAiHero from "@/assets/tools/retell-ai-hero.jpg";
import airAiHero from "@/assets/tools/air-ai-hero.jpg";
import synthflowAiHero from "@/assets/tools/synthflow-ai-hero.jpg";
import murfAiHero from "@/assets/tools/murf-ai-hero.jpg";
import speechifyHero from "@/assets/tools/speechify-hero.jpg";
import descriptHero from "@/assets/tools/descript-hero.jpg";
import aivaHero from "@/assets/tools/aiva-hero.jpg";
import resembleAiHero from "@/assets/tools/resemble-ai-hero.jpg";
import replicaStudiosHero from "@/assets/tools/replica-studios-hero.jpg";
import audiogenHero from "@/assets/tools/audiogen-hero.jpg";
import cleanvoiceHero from "@/assets/tools/cleanvoice-hero.jpg";
import humeAiHero from "@/assets/tools/hume-ai-hero.jpg";
import voiceflowHero from "@/assets/tools/voiceflow-hero.jpg";
import fakeyouHero from "@/assets/tools/fakeyou-hero.jpg";
import respeecherHero from "@/assets/tools/respeecher-hero.jpg";
import cognigyHero from "@/assets/tools/cognigy-hero.jpg";
import gongIoHero from "@/assets/tools/gong-io-hero.jpg";
import chorusAiHero from "@/assets/tools/chorus-ai-hero.jpg";
import callrailHero from "@/assets/tools/callrail-hero.jpg";
import goodcallHero from "@/assets/tools/goodcall-hero.jpg";
import cartesiaAiHero from "@/assets/tools/cartesia-ai-hero.jpg";
import lindyAiHero from "@/assets/tools/lindy-ai-hero.jpg";
import typecastHero from "@/assets/tools/typecast-hero.jpg";
import listnrHero from "@/assets/tools/listnr-hero.jpg";
import podcastAiHero from "@/assets/tools/podcast-ai-hero.jpg";
import dialoraAiHero from "@/assets/tools/dialora-ai-hero.jpg";
import callpodAiHero from "@/assets/tools/callpod-ai-hero.jpg";
import koreAiHero from "@/assets/tools/kore-ai-hero.jpg";
import omakaseHero from "@/assets/tools/omakase-hero.jpg";
import assemblyaiHero from "@/assets/tools/assemblyai-hero.jpg";
import deepgramHero from "@/assets/tools/deepgram-hero.jpg";
import openaiWhisperHero from "@/assets/tools/openai-whisper-hero.jpg";
import revAiHero from "@/assets/tools/rev-ai-hero.jpg";
import sonixHero from "@/assets/tools/sonix-hero.jpg";
import happyScribeHero from "@/assets/tools/happy-scribe-hero.jpg";

export const audioAndVoiceTools: Tool[] = [
  {
    icon: Mic,
    title: "Eleven Labs: Voice Agents, Text to Speech, FX Sound Effects Generator",
    description: "Advanced AI voice generation and cloning platform. Create natural-sounding voices for any content with cutting-edge text-to-speech technology.",
    emoji: "🎙️",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://try.elevenlabs.io/aiwebtools",
    imageUrl: elevenlabsHero,
    tags: ["Voice Cloning", "Text-to-Speech", "voice generation", "voice cloning", "AI voices", "audio production"],
    category: "Audio & Voice",
    rating: 4.8,
    totalVotes: 5432
  },
  {
    icon: Phone,
    title: "Bland.ai",
    description: "Enterprise-grade AI phone calling platform. Build and deploy conversational AI phone agents that can make and receive calls at scale with natural human-like conversations.",
    emoji: "📞",
    color: "from-blue-500 to-indigo-600",
    directUrl: "https://www.bland.ai/?via=aiwebtools",
    imageUrl: blandAiHero,
    tags: ["Voice Agent", "phone agents", "call agents", "voice agents", "AI phone", "phone automation", "call automation", "inbound calls", "outbound calls", "conversational AI", "agent"],
    category: "Phone & Voice Agents",
    rating: 4.7,
    totalVotes: 4200
  },
  {
    icon: Phone,
    title: "Vapi.ai",
    description: "Build voice AI agents in minutes. Create intelligent phone assistants that can handle customer support, sales calls, and appointments with powerful conversational AI.",
    emoji: "☎️",
    color: "from-violet-500 to-purple-600",
    directUrl: "https://vapi.ai/?via=aiwebtools",
    imageUrl: vapiAiHero,
    tags: ["Voice Agent", "phone agents", "voice agents", "call agents", "AI phone", "voice AI", "phone automation", "conversational AI", "customer support", "sales calls", "agent"],
    category: "Phone & Voice Agents",
    rating: 4.6,
    totalVotes: 3890
  },
  {
    icon: Phone,
    title: "Retell AI",
    description: "Advanced conversational AI for phone calls. Create lifelike voice agents that handle complex conversations with low latency and natural interruptions.",
    emoji: "📱",
    color: "from-cyan-500 to-teal-600",
    directUrl: "https://www.retellai.com/?via=aiwebtools",
    imageUrl: retellAiHero,
    tags: ["Voice Agent", "phone agents", "voice agents", "call agents", "AI phone", "conversational AI", "voice AI", "phone automation", "call center", "inbound", "outbound", "agent"],
    category: "Phone & Voice Agents",
    rating: 4.6,
    totalVotes: 3650
  },
  {
    icon: Phone,
    title: "Air.ai",
    description: "Fully autonomous AI agents that conduct 10-40 minute phone calls that sound like real humans. Perfect for sales, customer service, and appointment setting.",
    emoji: "🤖",
    color: "from-emerald-500 to-green-600",
    directUrl: "https://www.air.ai/?via=aiwebtools",
    imageUrl: airAiHero,
    tags: ["Voice Agent", "Autonomous Agent", "phone agents", "voice agents", "call agents", "AI phone", "autonomous agents", "sales calls", "customer service", "phone automation", "conversational AI", "agent"],
    category: "Phone & Voice Agents",
    rating: 4.5,
    totalVotes: 3420
  },
  {
    icon: Phone,
    title: "Synthflow AI",
    description: "Advanced AI phone agents for businesses. Create intelligent voice assistants that can handle customer calls, appointments, and support with human-like conversation.",
    emoji: "📞",
    color: "from-green-500 to-blue-600",
    directUrl: "https://synthflow.ai/?via=aiwebtools",
    imageUrl: synthflowAiHero,
    tags: ["Voice Agent", "phone agents", "voice AI", "customer service", "appointment booking", "business automation", "agent"],
    category: "Phone & Voice Agents",
    rating: 4.6,
    totalVotes: 3456
  },
  {
    icon: Bot,
    title: "Cognigy",
    description: "Enterprise conversational AI platform for building intelligent customer service bots across voice and chat channels. Features advanced NLU, dialog management, and omnichannel support.",
    emoji: "🤖",
    color: "from-blue-600 to-indigo-600",
    directUrl: "https://www.cognigy.com/?via=aiwebtools",
    imageUrl: cognigyHero,
    tags: ["Voice Agent", "conversational AI", "chatbot platform", "voice agents", "customer service", "enterprise AI", "NLU", "dialog management", "agent"],
    category: "Phone & Voice Agents",
    rating: 4.5,
    totalVotes: 2890
  },
  {
    icon: Bot,
    title: "Kore.ai",
    description: "AI-powered conversational platform for building virtual assistants and chatbots. Supports voice, text, and multi-channel deployment with enterprise-grade features.",
    emoji: "💼",
    color: "from-purple-600 to-pink-600",
    directUrl: "https://kore.ai/?via=aiwebtools",
    imageUrl: koreAiHero,
    category: "Phone & Voice Agents",
    rating: 4.4,
    totalVotes: 2650
  },
  {
    icon: Bot,
    title: "Voiceflow",
    description: "Visual conversation design platform for building voice and chat assistants. Create, prototype, and deploy conversational AI experiences without code.",
    emoji: "🎨",
    color: "from-cyan-600 to-blue-600",
    directUrl: "https://www.voiceflow.com/?via=aiwebtools",
    imageUrl: voiceflowHero,
    tags: ["Voice Agent", "conversational AI", "voice assistant", "chatbot builder", "no-code", "conversation design", "prototyping", "agent"],
    category: "Phone & Voice Agents",
    rating: 4.6,
    totalVotes: 3200
  },
  {
    icon: BarChart3,
    title: "Gong.io",
    description: "Revenue intelligence platform that analyzes customer conversations. Uses AI to capture, analyze, and deliver insights from sales calls and meetings to improve team performance.",
    emoji: "📊",
    color: "from-orange-600 to-red-600",
    directUrl: "https://www.gong.io/?via=aiwebtools",
    imageUrl: gongIoHero,
    tags: ["call analytics", "conversation intelligence", "sales analytics", "revenue intelligence", "call recording", "AI insights"],
    category: "Phone & Voice Agents",
    rating: 4.7,
    totalVotes: 4100
  },
  {
    icon: TrendingUp,
    title: "Chorus.ai",
    description: "Conversation intelligence platform for sales teams. AI-powered call recording and analysis that helps identify winning behaviors and coaching opportunities.",
    emoji: "📈",
    color: "from-green-600 to-teal-600",
    directUrl: "https://www.chorus.ai/?via=aiwebtools",
    imageUrl: chorusAiHero,
    tags: ["call analytics", "conversation intelligence", "sales coaching", "call recording", "AI analysis", "sales enablement"],
    category: "Phone & Voice Agents",
    rating: 4.6,
    totalVotes: 3750
  },
  {
    icon: Phone,
    title: "CallRail",
    description: "Call tracking and analytics platform with AI-powered conversation intelligence. Track marketing campaigns, analyze calls, and optimize customer communications.",
    emoji: "📞",
    color: "from-blue-600 to-purple-600",
    directUrl: "https://www.callrail.com/?via=aiwebtools",
    imageUrl: callrailHero,
    tags: ["call tracking", "call analytics", "conversation intelligence", "marketing analytics", "call recording", "AI insights"],
    category: "Phone & Voice Agents",
    rating: 4.5,
    totalVotes: 3400
  },
  {
    icon: Volume2,
    title: "Murf AI",
    description: "Professional AI voice generator for creating voiceovers, podcasts, and audio content with realistic human-like voices.",
    emoji: "🔊",
    color: "from-orange-500 to-red-600",
    directUrl: "https://get.murf.ai/1uvb0e8dznua",
    imageUrl: murfAiHero,
    tags: ["Text-to-Speech", "Voice Synthesis", "voiceover", "podcast", "audio content", "voice synthesis"],
    category: "Audio & Voice",
    rating: 4.5,
    totalVotes: 4321
  },
  {
    icon: MessageSquare,
    title: "Speechify",
    description: "AI-powered text-to-speech app that converts any text into natural-sounding speech. Perfect for accessibility and productivity.",
    emoji: "💬",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://speechify.com/?via=aiwebtools",
    imageUrl: speechifyHero,
    tags: ["Text-to-Speech", "accessibility", "reading", "productivity", "audio conversion"],
    category: "Audio & Voice",
    rating: 4.4,
    totalVotes: 6789
  },
  {
    icon: Headphones,
    title: "Descript",
    description: "All-in-one audio and video editing platform with AI-powered features for podcasting, screen recording, and transcription.",
    emoji: "🎧",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://www.descript.com/?via=aiwebtools",
    imageUrl: descriptHero,
    tags: ["Audio Editing", "Podcast Tools", "video editing", "transcription", "podcasting", "screen recording"],
    category: "Audio & Voice",
    rating: 4.7,
    totalVotes: 3987
  },
  {
    icon: Music,
    title: "AIVA",
    description: "AI composer that creates original music for various projects including films, games, and commercials.",
    emoji: "🎵",
    color: "from-indigo-500 to-purple-600",
    directUrl: "https://www.aiva.ai/?via=aiwebtools",
    imageUrl: aivaHero,
    tags: ["Music Generator", "AI composition", "soundtrack", "background music", "creative AI"],
    category: "Audio & Voice",
    rating: 4.3,
    totalVotes: 2654
  },
  {
    icon: Radio,
    title: "Resemble AI",
    description: "Real-time voice cloning and speech synthesis platform for creating custom AI voices with emotional control.",
    emoji: "📻",
    color: "from-red-500 to-orange-600",
    directUrl: "https://www.resemble.ai/?via=aiwebtools",
    imageUrl: resembleAiHero,
    tags: ["Voice Cloning", "Voice Synthesis", "speech synthesis", "custom voices", "emotional AI", "real-time"],
    category: "Audio & Voice",
    rating: 4.2,
    totalVotes: 1987
  },
  {
    icon: Speaker,
    title: "Replica Studios",
    description: "AI voice acting platform for games, films, and other media with a marketplace of digital voice actors.",
    emoji: "🔈",
    color: "from-teal-500 to-green-600",
    directUrl: "https://replicastudios.com/?via=aiwebtools",
    imageUrl: replicaStudiosHero,
    tags: ["Voice Synthesis", "voice acting", "game audio", "film audio", "digital voices", "media production"],
    category: "Audio & Voice",
    rating: 4.1,
    totalVotes: 1543
  },
  {
    icon: Disc,
    title: "Audiogen",
    description: "AI-powered audio generation platform for creating sound effects, ambient audio, and music for various applications.",
    emoji: "💽",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://www.audiogen.co/?via=aiwebtools",
    imageUrl: audiogenHero,
    tags: ["Sound Effects", "Music Generator", "ambient audio", "AI audio", "music generation", "audio production"],
    category: "Audio & Voice",
    rating: 4.0,
    totalVotes: 1234
  },
  {
    icon: AudioLines,
    title: "Cleanvoice",
    description: "AI-powered audio cleaning tool that removes filler words, mouth sounds, and background noise from recordings.",
    emoji: "🧹",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://cleanvoice.ai/?via=aiwebtools",
    imageUrl: cleanvoiceHero,
    tags: ["Audio Enhancement", "Podcast Tools", "noise removal", "filler words", "podcast editing", "audio cleanup"],
    category: "Audio & Voice",
    rating: 4.4,
    totalVotes: 2876
  },
  {
    icon: Volume2,
    title: "Hume Lifelike Voice AI",
    description: "Advanced AI platform creating emotionally intelligent and lifelike voice interactions. Features natural conversational AI with emotional understanding and human-like speech patterns.",
    emoji: "🎭",
    color: "from-indigo-500 to-purple-600",
    directUrl: "https://www.hume.ai/?via=aiwebtools",
    imageUrl: humeAiHero,
    tags: ["Voice Synthesis", "emotional AI", "lifelike voice", "conversational AI", "voice interaction", "emotion recognition", "natural speech"],
    category: "Audio & Voice",
    rating: 4.6,
    totalVotes: 2100
  },
  {
    icon: Mic,
    title: "Omakase Website Voice Agents",
    description: "Turn any business website into a voice agent that talks to visitors, answers questions, and captures leads automatically.",
    emoji: "🗣️",
    color: "from-blue-500 to-indigo-600",
    directUrl: "https://www.omakase.ai/?via=aiwebtools",
    imageUrl: omakaseHero,
    category: "Phone & Voice Agents",
    rating: 4.5,
    totalVotes: 120
  },
  {
    icon: Mic,
    title: "AssemblyAI",
    description: "AI-powered speech-to-text API with industry-leading accuracy. Real-time transcription, speaker diarization, sentiment analysis, and content moderation for developers.",
    emoji: "🎤",
    color: "from-blue-600 to-indigo-600",
    directUrl: "https://www.assemblyai.com/?via=aiwebtools",
    imageUrl: assemblyaiHero,
    category: "Audio & Voice",
    rating: 4.8,
    totalVotes: 5240
  },
  {
    icon: AudioLines,
    title: "Deepgram",
    description: "Enterprise-grade speech AI platform with lightning-fast transcription API. Real-time and pre-recorded speech recognition with custom model training.",
    emoji: "⚡",
    color: "from-cyan-600 to-blue-600",
    directUrl: "https://deepgram.com/?via=aiwebtools",
    imageUrl: deepgramHero,
    category: "Audio & Voice",
    rating: 4.7,
    totalVotes: 4560
  },
  {
    icon: Volume2,
    title: "OpenAI Whisper",
    description: "State-of-the-art open-source speech recognition model by OpenAI. Multilingual transcription and translation with high accuracy across 99 languages.",
    emoji: "🌐",
    color: "from-purple-600 to-pink-600",
    directUrl: "https://openai.com/research/whisper",
    imageUrl: openaiWhisperHero,
    category: "Audio & Voice",
    rating: 4.9,
    totalVotes: 8920
  },
  {
    icon: Mic,
    title: "Rev.ai",
    description: "Accurate speech-to-text API for developers. Automatic transcription with custom vocabulary, async and streaming options, and multiple language support.",
    emoji: "🔴",
    color: "from-red-600 to-orange-600",
    directUrl: "https://www.rev.ai/?via=aiwebtools",
    imageUrl: revAiHero,
    category: "Audio & Voice",
    rating: 4.6,
    totalVotes: 3780
  },
  {
    icon: MessageSquare,
    title: "Sonix",
    description: "Fast, accurate automated transcription in 40+ languages. AI-powered platform with advanced editing tools, translation, and subtitle generation.",
    emoji: "📝",
    color: "from-green-600 to-teal-600",
    directUrl: "https://sonix.ai/?via=aiwebtools",
    imageUrl: sonixHero,
    category: "Audio & Voice",
    rating: 4.5,
    totalVotes: 4120
  },
  {
    icon: Headphones,
    title: "Happy Scribe",
    description: "Automated transcription and subtitling platform supporting 120+ languages. Human-made transcription services combined with AI for maximum accuracy.",
    emoji: "✍️",
    color: "from-yellow-600 to-orange-600",
    directUrl: "https://www.happyscribe.com/?via=aiwebtools",
    imageUrl: happyScribeHero,
    category: "Audio & Voice",
    rating: 4.7,
    totalVotes: 5340
  },
  {
    icon: AudioLines,
    title: "Trint",
    description: "AI transcription software trusted by journalists and professionals. Automated transcription with powerful collaboration and editing features.",
    emoji: "📰",
    color: "from-indigo-600 to-purple-600",
    directUrl: "https://trint.com/?via=aiwebtools",
    tags: ["Transcription", "Speech-to-Text", "journalist tools", "professional transcription", "collaboration", "editing", "workflow"],
    category: "Audio & Voice",
    rating: 4.6,
    totalVotes: 4890
  },
  // ==================== NEW VOICE AI TOOLS 2025 ====================
  {
    icon: Phone,
    title: "Goodcall",
    description: "AI receptionist and phone agent for small businesses. Answers calls, books appointments, and handles customer inquiries automatically with no-code setup in minutes.",
    emoji: "📞",
    color: "from-green-500 to-teal-600",
    directUrl: "https://www.goodcall.com/?via=aiwebtools",
    imageUrl: goodcallHero,
    tags: ["Voice Agent", "phone agents", "AI receptionist", "appointment booking", "small business", "no-code", "customer service", "inbound calls", "agent"],
    category: "Phone & Voice Agents",
    rating: 4.5,
    totalVotes: 2890
  },
  {
    icon: AudioLines,
    title: "Cartesia AI",
    description: "Ultra-low latency voice AI with Sonic TTS and Ink speech-to-text. Create lifelike voices with instant reactions, multilingual support, and voice cloning in seconds.",
    emoji: "⚡",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://cartesia.ai/?via=aiwebtools",
    imageUrl: cartesiaAiHero,
    tags: ["Voice Synthesis", "Text-to-Speech", "voice cloning", "low latency", "real-time", "speech-to-text", "multilingual", "expressive voices"],
    category: "Audio & Voice",
    rating: 4.7,
    totalVotes: 3200
  },
  {
    icon: Bot,
    title: "Vocode",
    description: "Open-source framework for building voice agents with your own models. Full control over ASR, TTS, LLM, and telephony with Python and Node SDKs.",
    emoji: "🔧",
    color: "from-gray-600 to-gray-800",
    directUrl: "https://github.com/vocodedev/?via=aiwebtools",
    tags: ["Voice Agent", "open source", "voice framework", "ASR", "TTS", "LLM", "telephony", "developer tools", "agent"],
    category: "Phone & Voice Agents",
    rating: 4.4,
    totalVotes: 1890
  },
  {
    icon: Bot,
    title: "Lindy AI Voice Agents",
    description: "Complete AI employee platform with Gaia phone agent. Handles calls, schedules appointments, and completes tasks during conversations with integrated CRM and calendar support.",
    emoji: "🤖",
    color: "from-indigo-500 to-blue-600",
    directUrl: "https://www.lindy.ai/?via=aiwebtools",
    imageUrl: lindyAiHero,
    tags: ["Voice Agent", "phone agents", "AI employee", "call automation", "appointment booking", "CRM integration", "conversational AI", "agent"],
    category: "Phone & Voice Agents",
    rating: 4.6,
    totalVotes: 3450
  },
  {
    icon: Mic,
    title: "FakeYou",
    description: "Deep fake text-to-speech with thousands of celebrity and character voices. Create audio content featuring iconic voices from movies, games, and pop culture.",
    emoji: "🎭",
    color: "from-red-500 to-orange-600",
    directUrl: "https://fakeyou.com/?via=aiwebtools",
    imageUrl: fakeyouHero,
    tags: ["Text-to-Speech", "Voice Cloning", "celebrity voices", "character voices", "deep fake", "voice generation", "entertainment"],
    category: "Audio & Voice",
    rating: 4.3,
    totalVotes: 5670
  },
  {
    icon: Mic,
    title: "Replica Studios",
    description: "AI voice actors for games, films, and creative projects. Create realistic character voices with emotional range and lip-sync ready audio output.",
    emoji: "🎬",
    color: "from-blue-600 to-purple-600",
    directUrl: "https://replicastudios.com/?via=aiwebtools",
    tags: ["Voice Synthesis", "voice actors", "game audio", "film production", "character voices", "emotional AI", "lip sync"],
    category: "Audio & Voice",
    rating: 4.5,
    totalVotes: 2980
  },
  {
    icon: Volume2,
    title: "Typecast",
    description: "AI voice actors and virtual humans for video content. Create professional voiceovers with 400+ voices and generate AI avatars for presentations and marketing.",
    emoji: "🎙️",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://typecast.ai/?via=aiwebtools",
    imageUrl: typecastHero,
    tags: ["Text-to-Speech", "voice actors", "AI avatars", "video content", "marketing", "presentations", "virtual humans"],
    category: "Audio & Voice",
    rating: 4.4,
    totalVotes: 3120
  },
  {
    icon: Mic,
    title: "Respeecher",
    description: "Hollywood-grade voice cloning for film and TV production. Create perfect voice matches for dubbing, de-aging, and posthumous performances used in major productions.",
    emoji: "🎥",
    color: "from-amber-500 to-red-600",
    directUrl: "https://www.respeecher.com/?via=aiwebtools",
    imageUrl: respeecherHero,
    tags: ["Voice Cloning", "film production", "dubbing", "de-aging", "Hollywood", "professional voice", "speech-to-speech"],
    category: "Audio & Voice",
    rating: 4.8,
    totalVotes: 2340
  },
  {
    icon: Headphones,
    title: "Listnr",
    description: "AI voice generator with 900+ voices in 142 languages. Create podcasts, audiobooks, and voiceovers with emotion control and audio editing tools.",
    emoji: "🎧",
    color: "from-green-500 to-emerald-600",
    directUrl: "https://www.listnr.tech/?via=aiwebtools",
    imageUrl: listnrHero,
    tags: ["Text-to-Speech", "podcast creation", "audiobooks", "voiceovers", "multilingual", "emotion control", "audio editing"],
    category: "Audio & Voice",
    rating: 4.4,
    totalVotes: 2890
  },
  {
    icon: Radio,
    title: "Podcast.ai",
    description: "AI-powered podcast creation platform. Generate entire podcast episodes with AI hosts, create show notes, and produce professional audio content automatically.",
    emoji: "🎙️",
    color: "from-purple-600 to-indigo-600",
    directUrl: "https://podcast.ai/?via=aiwebtools",
    imageUrl: podcastAiHero,
    tags: ["Podcast Tools", "AI podcast", "audio generation", "show notes", "content creation", "AI hosts", "automated podcasting"],
    category: "Audio & Voice",
    rating: 4.3,
    totalVotes: 2150
  },
  {
    icon: Phone,
    title: "Dialora AI",
    description: "AI voice agents for phone calls with natural conversation abilities. Handle inbound and outbound calls for sales, support, and appointment scheduling.",
    emoji: "📲",
    color: "from-teal-500 to-cyan-600",
    directUrl: "https://www.dialora.ai/?via=aiwebtools",
    imageUrl: dialoraAiHero,
    tags: ["Voice Agent", "phone agents", "call automation", "sales calls", "customer support", "appointment booking", "conversational AI", "agent"],
    category: "Phone & Voice Agents",
    rating: 4.5,
    totalVotes: 1980
  },
  {
    icon: Phone,
    title: "CallPod AI",
    description: "Enterprise AI phone agent platform for high-volume call operations. Automate customer service, lead qualification, and appointment setting with human-like conversations.",
    emoji: "☎️",
    color: "from-blue-600 to-indigo-600",
    directUrl: "https://www.callpod.ai/?via=aiwebtools",
    imageUrl: callpodAiHero,
    tags: ["Voice Agent", "phone agents", "enterprise", "call center", "lead qualification", "customer service", "high volume", "agent"],
    category: "Phone & Voice Agents",
    rating: 4.4,
    totalVotes: 1750
  }
];

