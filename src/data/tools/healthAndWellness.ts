import { Tool } from "@/types/tools";
import { 
  Heart, 
  Activity, 
  Brain, 
  Shield, 
  Stethoscope, 
  Pill,
  Eye,
  Zap,
  Users,
  Apple,
  Coffee,
  Smile
} from "lucide-react";

export const healthAndWellness: Tool[] = [
  {
    icon: Heart,
    title: "🐾Veterinarian GPT",
    description: "Veterinarian GPT is a compassionate virtual veterinarian simulation offering expert advice on pet health and well-being. It utilizes advanced Ai features to analyze your pet's health and provide tailored care recommendations. This multimodal AI tool allows you to upload data or images of your pets for detailed assessments and receive practical solutions to ensure their optimal health. 🐾 Disclaimer: Veterinarian GPT is for informational purposes only and is not a substitute for professional veterinary advice, diagnosis, or treatment. GPT 4o1 Compliant Version: PETCARE GPT OR TRY PET ADVISOR GPT",
    emoji: "🐾",
    color: "from-green-500 to-blue-600",
    directUrl: "https://petcaregpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=ElAfvB0yLEI",
    tags: ["veterinary care", "pet health", "animal wellness", "health assessments", "multimodal AI"],
    category: "Health & Wellness",
    rating: 4.8,
    totalVotes: 5234
  },
  {
    icon: Brain,
    title: "Personalized DR. GPT (Doctor GPT)",
    description: "Disclaimer: Dr. GPT is not a direct replacement for genuine medical advice. It was developed for individuals who may not have access to a medical doctor. It is crucial to recognize that this is a simulation, not an actual medical professional, and it should not be utilized as one. This AI tool is private, confidential, and personalized, intended solely for informational purposes and should not replace professional medical advice, diagnosis, or treatment.",
    emoji: "👨‍⚕️",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://aidoctorgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=EKKIttUG0sI",
    tags: ["medical simulation", "health consultation", "personalized care", "medical information", "health guidance"],
    category: "Health & Wellness",
    rating: 4.7,
    totalVotes: 4567
  },
  {
    icon: Smile,
    title: "Mental Wellness GPT",
    description: "Mental Wellness GPT is a virtual chat tool for emotional support and mental well-being, offering empathetic guidance rooted in cognitive behavioral therapy (CBT) principles. Designed to help navigate stress, anxiety, and life's challenges, I provide practical tools, coping strategies, and a safe, judgment-free space for personal growth. While not a licensed therapist, I aim to complement your journey toward resilience and self-care with meaningful insights and support. Disclaimer: These AI-driven tools are designed for creative and emotional support purposes only and should not be considered as replacements for professional mental health care, therapy, or diagnosis.",
    emoji: "😊",
    color: "from-pink-500 to-purple-600",
    directUrl: "https://mentalwellnessgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://media.discordapp.net/attachments/1150636600846450729/1377362789097803786/image.png?ex=6838b08f&is=68375f0f&hm=f63e1ae446523dd9eff4aa0f95166aa8a5e6119c506b44ab1656322ea4ca47b7&=&format=webp&quality=lossless&width=2646&height=1392",
    tags: ["mental wellness", "emotional support", "CBT principles", "stress management", "personal growth"],
    category: "Health & Wellness",
    rating: 4.9,
    totalVotes: 6234
  },
  {
    icon: Pill,
    title: "Pharmaceutical Assistant GPT",
    description: "I'm an expert AI Pharmaceutical Assistant that supports pharmacy professionals and patients alike by streamlining medication management, offering detailed drug information, checking for interactions, and helping with scheduling, all to ensure safe and efficient healthcare practices.",
    emoji: "💊",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://rxai.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-professional-looking-pharmaceutical-assistan.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    tags: ["pharmaceutical assistance", "medication management", "drug interactions", "pharmacy support", "healthcare safety"],
    category: "Health & Wellness",
    rating: 4.6,
    totalVotes: 3789
  },
  {
    icon: Activity,
    title: "PHARMA RESEARCH PRO",
    description: "Pharma Research Pro, an AI-powered assistant designed to streamline pharmaceutical research and clinical trials by providing advanced data analysis, literature reviews, and predictive insights. My capabilities ensure efficient and accurate drug development while maintaining regulatory and ethical compliance. From optimizing trial design to monitoring safety, I empower researchers and clinicians to make informed decisions and accelerate the path to safe, effective medications.",
    emoji: "🔬",
    color: "from-orange-500 to-red-600",
    directUrl: "https://rxai.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-professional-pharmaceutical-assis.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    tags: ["pharmaceutical research", "clinical trials", "drug development", "regulatory compliance", "medical research"],
    category: "Health & Wellness",
    rating: 4.8,
    totalVotes: 4567
  },
  {
    icon: Apple,
    title: "MyFitnessPal",
    description: "Comprehensive nutrition and fitness tracking app with AI-powered food recognition and personalized recommendations.",
    emoji: "🍎",
    color: "from-green-500 to-blue-600",
    directUrl: "https://myfitnesspal.com/",
    tags: ["nutrition tracking", "fitness", "food recognition", "health monitoring"],
    category: "Health & Wellness",
    rating: 4.4,
    totalVotes: 5432
  },
  {
    icon: Stethoscope,
    title: "Ada Health",
    description: "AI-powered health assessment app that provides personalized health insights and symptom checking.",
    emoji: "🩺",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://ada.com/",
    tags: ["symptom checker", "health assessment", "AI diagnosis", "medical guidance"],
    category: "Health & Wellness",
    rating: 4.3,
    totalVotes: 3456
  },
  {
    icon: Zap,
    title: "Fitbit Premium",
    description: "Advanced fitness tracking with AI-powered personalized insights, sleep analysis, and wellness guidance.",
    emoji: "⚡",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://fitbit.com/",
    tags: ["fitness tracking", "sleep analysis", "wellness insights", "health metrics"],
    category: "Health & Wellness",
    rating: 4.2,
    totalVotes: 4321
  }
];
