
import { Tool } from "@/types/tools";
import { 
  Mic, 
  MessageCircle, 
  Smartphone, 
  Bot,
  Volume2
} from "lucide-react";

// Removed: amazonAlexaHero, googleAssistantHero, appleSiriHero - native phone assistants removed
import voiceflowHero from "@/assets/tools/voiceflow-hero.jpg";
import dialogflowHero from "@/assets/tools/dialogflow-hero.jpg";

export const aiVoiceAssistantTools: Tool[] = [
  // Removed: Amazon Alexa, Google Assistant, Apple Siri - native phone/device assistants, not standalone AI tools
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
