import { Tool } from "@/types/tools";
import { Bot, Heart, Mic } from "lucide-react";

import onexNeoHero from "@/assets/tools/onex-neo-hero.jpg";
import friendAiHero from "@/assets/tools/friend-ai-hero.jpg";
import plaudNotepinHero from "@/assets/tools/plaud-notepin-hero.jpg";

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
  }
];
