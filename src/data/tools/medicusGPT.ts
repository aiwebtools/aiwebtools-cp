import { Tool } from "@/types/tools";
import { Stethoscope } from "lucide-react";
import medicusHero from "@/assets/tools/medicus-wellcheck-gpt-hero.jpg";

export const medicusGPT: Tool[] = [
  {
    icon: Stethoscope,
    title: "Medicus - the FREE Personal Medical GPT",
    description: "Medicus WellCheck GPT is your FREE personal AI medical assistant, designed to provide comprehensive health information, symptom analysis, wellness guidance, and personalized health insights. Whether you need help understanding symptoms, exploring treatment options, or tracking your wellness journey, Medicus delivers private, confidential, and personalized medical information powered by advanced AI. Disclaimer: Medicus is not a replacement for professional medical advice. It was developed for individuals who may not have access to a medical doctor. This is a simulation, not an actual medical professional, intended solely for informational purposes.",
    emoji: "🏥",
    color: "from-teal-500 to-blue-600",
    directUrl: "https://chatgpt.com/g/g-69c4da4473b0819185462889b7348a28-medicus-wellcheck-gpt",
    imageUrl: medicusHero,
    tags: [
      "medicus", "doctor", "medical", "health", "wellness", "doctor gpt", "ai doctor",
      "personal doctor", "medical gpt", "health assistant", "symptom checker", "diagnosis",
      "treatment", "healthcare", "medical ai", "free doctor", "wellcheck", "medical consultation",
      "health advice", "physician", "medical help", "health help", "talk to doctor", "need doctor",
      "doctor ai", "medical assistant", "health check", "wellness gpt", "Custom GPT", "Medical",
      "Healthcare", "simulation", "aiwebtools", "free medical", "personalized health"
    ],
    category: "Healthcare Professionals",
    rating: 4.9,
    totalVotes: 5120,
    isFree: true,
    tagline: "Your FREE AI doctor in your pocket — health wisdom without the waiting room"
  }
];
