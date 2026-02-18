
import { Tool } from "@/types/tools";
import { 
  Mic, 
  MessageCircle, 
  Smartphone, 
  Bot,
  Volume2
} from "lucide-react";

import amazonAlexaHero from "@/assets/tools/amazon-alexa-hero.jpg";
import googleAssistantHero from "@/assets/tools/google-assistant-hero.jpg";
import appleSiriHero from "@/assets/tools/apple-siri-hero.jpg";
import voiceflowHero from "@/assets/tools/voiceflow-hero.jpg";
import dialogflowHero from "@/assets/tools/dialogflow-hero.jpg";

export const aiVoiceAssistantTools: Tool[] = [
  {
    icon: Volume2,
    title: "Amazon Alexa",
    description: "AI voice assistant powering Echo devices with skills platform, smart home control, and natural language processing for daily tasks.",
    emoji: "🔊",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://developer.amazon.com/alexa?via=aiwebtools",
    imageUrl: amazonAlexaHero,
    tags: ["Voice Agent", "voice assistant", "smart home", "skills platform", "Echo devices", "natural language", "agent"],
    category: "AI Voice Assistant Tools",
    rating: 4.5,
    totalVotes: 8765
  },
  {
    icon: MessageCircle,
    title: "Google Assistant",
    description: "Conversational AI assistant integrated across Google devices and services with contextual understanding and smart home integration.",
    emoji: "💬",
    color: "from-green-500 to-teal-600",
    directUrl: "https://assistant.google.com/",
    imageUrl: googleAssistantHero,
    tags: ["Voice Agent", "Conversational Agent", "conversational AI", "Google integration", "smart home", "contextual understanding", "multi-device", "agent"],
    category: "AI Voice Assistant Tools",
    rating: 4.6,
    totalVotes: 9876
  },
  {
    icon: Smartphone,
    title: "Apple Siri",
    description: "Apple's voice assistant with on-device AI processing, shortcuts automation, and deep iOS/macOS integration for seamless control.",
    emoji: "📱",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://www.apple.com/siri/?via=aiwebtools",
    imageUrl: appleSiriHero,
    tags: ["Voice Agent", "Apple assistant", "on-device AI", "shortcuts", "iOS integration", "privacy-focused", "agent"],
    category: "AI Voice Assistant Tools",
    rating: 4.4,
    totalVotes: 7654
  },
  {
    icon: Bot,
    title: "Voiceflow",
    description: "Platform for building custom AI voice assistants and chatbots with visual design tools, integrations, and deployment options.",
    emoji: "🤖",
    color: "from-orange-500 to-red-600",
    directUrl: "https://www.voiceflow.com/?via=aiwebtools",
    imageUrl: voiceflowHero,
    tags: ["Voice Agent", "Chatbot Agent", "custom assistants", "chatbot builder", "visual design", "integrations", "deployment platform", "agent"],
    category: "AI Voice Assistant Tools",
    rating: 4.5,
    totalVotes: 3456
  },
  {
    icon: Mic,
    title: "Dialogflow",
    description: "Google's conversational AI platform for building voice and text-based interfaces with natural language understanding capabilities.",
    emoji: "🎤",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://cloud.google.com/dialogflow?via=aiwebtools",
    imageUrl: dialogflowHero,
    tags: ["Voice Agent", "Conversational Agent", "conversational AI", "NLU", "chatbot platform", "voice interfaces", "Google Cloud", "agent"],
    category: "AI Voice Assistant Tools",
    rating: 4.6,
    totalVotes: 4567
  },
  // Removed: Mycroft AI - company shut down, out of funds, no longer operational
];
