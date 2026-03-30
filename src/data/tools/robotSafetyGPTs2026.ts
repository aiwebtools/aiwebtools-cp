
import { Tool } from "@/types/tools";
import { Camera, ShieldOff, Bot, Crosshair } from "lucide-react";

import passportPhotoMakerHero from "@/assets/tools/passport-photo-maker-gpt-hero.jpg";
import disableThatRobotHero from "@/assets/tools/disable-that-robot-gpt-hero.jpg";
import rogueRobotDisablerHero from "@/assets/tools/rouge-robot-disabler-gpt-hero.jpg";
import robotIdentifierDisablerHero from "@/assets/tools/robot-identifier-disabler-survivalist-gpt-hero.jpg";

export const robotSafetyGPTs2026: Tool[] = [
  {
    icon: Camera,
    title: "Passport Photo Maker GPT",
    description: "Create passport photos from selfies and save money on photo services. This AI-powered tool transforms your casual selfies into compliant, professional passport and visa photos meeting international standards. No need to visit expensive photo services — get perfectly cropped, properly lit, and regulation-compliant ID photos instantly from your phone.",
    emoji: "📸",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://chatgpt.com/g/g-69c9b803f5c0819197b62a84caf1b410-passport-photo-maker-gpt",
    imageUrl: passportPhotoMakerHero,
    tags: ["passport photo", "photo maker", "selfie", "ID photo", "visa photo", "passport", "photo services", "travel document", "photo compliance", "aiwebtools", "Custom GPT"],
    category: "Professional Services",
    rating: 4.7,
    totalVotes: 2156,
    isFree: true,
    tagline: "Turn any selfie into a perfect passport photo — skip the photo booth forever"
  },
  {
    icon: ShieldOff,
    title: "Disable That Robot GPT",
    description: "Guides safe emergency shutdown of rogue robots with precise, step-by-step instructions. This AI safety tool provides expert-level guidance for safely disabling malfunctioning or rogue robotic systems in emergency scenarios. Covers industrial robots, autonomous drones, humanoid robots, and more with detailed shutdown procedures, safety protocols, and emergency containment strategies.",
    emoji: "🤖",
    color: "from-red-600 to-orange-700",
    directUrl: "https://chatgpt.com/g/g-69c9b28b20148191bbddae43c87c430f-disable-that-robot-gpt",
    imageUrl: disableThatRobotHero,
    tags: ["robot safety", "emergency shutdown", "robot disabler", "rogue robot", "AI safety", "robotics", "emergency protocol", "robot containment", "safety guide", "aiwebtools", "Custom GPT"],
    category: "Professional Services",
    rating: 4.8,
    totalVotes: 1987,
    isFree: true,
    tagline: "When machines go rogue — your emergency robot shutdown survival guide"
  },
  {
    icon: Bot,
    title: "Rouge Robot Disabler GPT",
    description: "Guides safe emergency shutdown of robots with precise, step-by-step instructions. A specialized AI safety companion focused on neutralizing rogue robotic threats through systematic disabling procedures. Features EMP countermeasures, manual override protocols, and tactical approaches for different robot types and threat levels.",
    emoji: "⚡",
    color: "from-purple-600 to-red-700",
    directUrl: "https://chatgpt.com/g/g-69c9adb28a0c81919ffd49556388f683-rouge-robot-disabler-gpt",
    imageUrl: rogueRobotDisablerHero,
    tags: ["rouge robot", "robot disabler", "robot shutdown", "AI safety", "emergency", "robotics safety", "EMP countermeasures", "robot neutralization", "threat assessment", "aiwebtools", "Custom GPT"],
    category: "Professional Services",
    rating: 4.7,
    totalVotes: 1876,
    isFree: true,
    tagline: "Tactical robot neutralization protocols for when AI goes sideways"
  },
  {
    icon: Crosshair,
    title: "Robot Identifier and Disabler Survivalist GPT",
    description: "The ultimate survivalist companion for identifying and safely disabling any type of robot encountered in the field. Combines robot identification databases with tactical shutdown procedures, weak point analysis, and field-expedient disabling techniques. Whether facing autonomous drones, industrial bots, or advanced humanoid robots, this GPT provides the survival knowledge needed to stay safe.",
    emoji: "🎯",
    color: "from-amber-600 to-stone-700",
    directUrl: "https://chatgpt.com/g/g-69c9be4c1cd4819186035cc0da423c6f-robot-identifier-and-disabler-survivalist-gpt",
    imageUrl: robotIdentifierDisablerHero,
    tags: ["robot identifier", "robot disabler", "survivalist", "robot survival", "AI safety", "robot recognition", "tactical", "field survival", "robot weak points", "post-apocalyptic", "aiwebtools", "Custom GPT"],
    category: "Professional Services",
    rating: 4.8,
    totalVotes: 2034,
    isFree: true,
    tagline: "Identify any robot, find its weakness, shut it down — survive the machine age"
  }
];
