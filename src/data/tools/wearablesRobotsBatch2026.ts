import { Tool } from "@/types/tools";
import { Bot, Heart, Mic, Usb, HardDrive } from "lucide-react";

import onexNeoHero from "@/assets/tools/onex-neo-hero.jpg";
import friendAiHero from "@/assets/tools/friend-ai-hero.jpg";
import plaudNotepinHero from "@/assets/tools/plaud-notepin-hero.jpg";
import bunkeraiUsbHero from "@/assets/tools/bunkerai-usb-hero.jpg";
import portablemindHero from "@/assets/tools/portablemind-hero.jpg";

export const wearablesRobotsBatch2026: Tool[] = [
  {
    icon: Bot,
    title: "1X NEO",
    description: "The world's first consumer-ready humanoid robot designed to transform life at home. NEO automates everyday chores — getting the door, putting away dishes, folding laundry — and offers personalized assistance powered by 1X's Redwood Generalist AI. Pre-order now with $200 deposit; deliveries start 2026.",
    emoji: "🤖",
    color: "from-amber-500 to-orange-600",
    directUrl: "https://www.1x.tech/order?via=aiwebtools",
    imageUrl: onexNeoHero,
    tags: ["1X NEO", "humanoid robot", "home robot", "consumer robot", "household automation", "AI assistant robot", "Redwood AI", "bipedal robot", "Robotics Companies", "AI Gadgets & Devices", "wearable", "device"],
    category: "Robotics Companies",
    rating: 4.7,
    totalVotes: 2456
  },
  {
    icon: Heart,
    title: "Friend AI Pendant",
    description: "An always-on AI companion pendant that listens, remembers, and chats with you throughout your day. Created by Avi Schiffmann, this water-resistant wearable connects via Bluetooth to your phone and delivers conversational AI as a literal friend you wear around your neck.",
    emoji: "💖",
    color: "from-pink-500 to-rose-600",
    directUrl: "https://www.friend.com/?via=aiwebtools",
    imageUrl: friendAiHero,
    tags: ["Friend AI", "AI pendant", "AI necklace", "wearable AI companion", "AI friend", "conversational wearable", "AI roommate", "always-on AI", "AI Gadgets & Devices", "wearable tech"],
    category: "AI Gadgets & Devices",
    rating: 4.2,
    totalVotes: 1876
  },
  {
    icon: Mic,
    title: "Plaud NotePin",
    description: "The world's #1 AI note-taking wearable. Plaud NotePin clips to your collar, records meetings and conversations hands-free, and uses GPT-powered AI to deliver instant transcripts, summaries, and action items. The premium, discreet alternative to bulky AI pins.",
    emoji: "📌",
    color: "from-yellow-500 to-amber-600",
    directUrl: "https://www.plaud.ai/products/notepin?via=aiwebtools",
    imageUrl: plaudNotepinHero,
    tags: ["Plaud NotePin", "Plaud", "AI voice recorder", "AI note taker", "wearable transcription", "AI pin", "meeting recorder", "AI wearable", "AI Gadgets & Devices", "note-taking device", "smart pin"],
    category: "AI Gadgets & Devices",
    rating: 4.6,
    totalVotes: 4321
  },
  {
    icon: Usb,
    title: "BunkerAI USB",
    description: "The #1 offline AI USB drive — 100% air-gapped, uncensored, and survival-ready. BunkerAI USB V2 ($89) packs an uncensored reasoning engine plus a 'backup of civilization' archive (offline medical diagnostics, grid-down engineering, survival agriculture, tactical emergency ops) onto a single USB stick. Plug in anywhere — no internet, no cloud, no tracking. Built for preppers, survivalists, and anyone who refuses to depend on Big Tech.",
    emoji: "🔒",
    color: "from-green-600 to-gray-800",
    directUrl: "https://bunkerai.io/products/bunkerai2?via=aiwebtools",
    imageUrl: bunkeraiUsbHero,
    tags: ["BunkerAI", "Bunker AI", "offline AI USB", "survival USB", "air-gapped AI", "uncensored AI", "offline LLM", "prepper AI", "grid-down AI", "USB AI drive", "survival kit", "AI Gadgets & Devices", "device"],
    category: "AI Gadgets & Devices",
    rating: 4.5,
    totalVotes: 1567
  },
  {
    icon: HardDrive,
    title: "PortableMind",
    description: "Offline AI on a USB stick — voice, vision, chat, and phone access running entirely on your hardware. Plug PortableMind into any Windows or macOS laptop and launch the desktop app: no cloud logins, no subscription, no internet required. The trusted, privacy-first alternative for people searching for an offline AI USB.",
    emoji: "💾",
    color: "from-slate-400 to-blue-500",
    directUrl: "https://portablemind.io/?via=aiwebtools",
    imageUrl: portablemindHero,
    tags: ["PortableMind", "offline AI USB", "USB AI drive", "local AI", "private AI", "no cloud AI", "offline LLM USB", "Windows AI USB", "macOS AI USB", "AI Gadgets & Devices", "device", "privacy AI"],
    category: "AI Gadgets & Devices",
    rating: 4.4,
    totalVotes: 987
  }
];
