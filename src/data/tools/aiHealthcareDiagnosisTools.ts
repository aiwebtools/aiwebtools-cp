import { Tool } from "@/types/tools";
import { Heart, Activity, Stethoscope, Pill, HeartPulse, Thermometer } from "lucide-react";

import adaHealthHero from "@/assets/tools/ada-health-hero.jpg";
import buoyHealthHero from "@/assets/tools/buoy-health-hero.jpg";
import kHealthHero from "@/assets/tools/k-health-hero.jpg";
import healthilyHero from "@/assets/tools/healthily-hero.jpg";
import infermedicaHero from "@/assets/tools/infermedica-hero.jpg";

export const aiHealthcareDiagnosisTools: Tool[] = [
  {
    icon: Activity,
    title: "Ada Health",
    description: "AI-powered symptom assessment app that checks symptoms, provides personalized health information, and guides you to appropriate care. Trusted by millions worldwide.",
    emoji: "💊",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://ada.com/?via=aiwebtools",
    imageUrl: adaHealthHero,
    tags: ["symptom checker", "health assessment", "medical AI", "diagnosis assistant", "health guidance", "symptom analysis"],
    category: "AI Healthcare Diagnosis",
    rating: 4.7,
    totalVotes: 15678
  },
  {
    icon: Heart,
    title: "Buoy Health",
    description: "AI-powered symptom checker and health assistant that helps you understand symptoms, get treatment recommendations, and find the right care quickly.",
    emoji: "❤️",
    color: "from-red-500 to-pink-600",
    directUrl: "https://www.buoyhealth.com/?via=aiwebtools",
    imageUrl: buoyHealthHero,
    tags: ["symptom checker", "health navigation", "treatment guidance", "medical AI", "care finder", "health assistant"],
    category: "AI Healthcare Diagnosis",
    rating: 4.6,
    totalVotes: 9876
  },
  {
    icon: Pill,
    title: "K Health",
    description: "AI-powered primary care with symptom checking, personalized treatment plans, and access to licensed doctors. Get diagnoses and prescriptions through the app.",
    emoji: "💉",
    color: "from-green-500 to-emerald-600",
    directUrl: "https://www.khealth.com/?via=aiwebtools",
    imageUrl: kHealthHero,
    tags: ["primary care", "symptom checker", "prescriptions", "virtual doctor", "health AI", "telemedicine", "treatment plans"],
    category: "AI Healthcare Diagnosis",
    rating: 4.7,
    totalVotes: 13234
  },
  {
    icon: HeartPulse,
    title: "Your.MD (Healthily)",
    description: "AI health assistant that checks symptoms, provides health information, and connects you to appropriate medical care. Personal health companion in your pocket.",
    emoji: "💗",
    color: "from-pink-500 to-rose-600",
    directUrl: "https://www.healthily.com/?via=aiwebtools",
    imageUrl: healthilyHero,
    tags: ["symptom checker", "health information", "medical guidance", "health assistant", "wellness app", "AI diagnosis"],
    category: "AI Healthcare Diagnosis",
    rating: 4.5,
    totalVotes: 8567
  },
  {
    icon: Thermometer,
    title: "Infermedica",
    description: "AI-powered preliminary diagnosis and triage tool used by healthcare providers. Advanced symptom analysis engine for accurate health assessments.",
    emoji: "🌡️",
    color: "from-orange-500 to-red-600",
    directUrl: "https://infermedica.com/?via=aiwebtools",
    imageUrl: infermedicaHero,
    tags: ["symptom analysis", "triage", "preliminary diagnosis", "healthcare providers", "medical AI", "health assessment"],
    category: "AI Healthcare Diagnosis",
    rating: 4.6,
    totalVotes: 6789
  }
];
