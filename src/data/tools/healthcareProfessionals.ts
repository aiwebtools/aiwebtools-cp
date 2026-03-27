import { Tool } from "@/types/tools";
import { 
  Heart, 
  Stethoscope, 
  PlusCircle, 
  Shield, 
  Brain, 
  Activity,
  Pill,
  Microscope,
  UserCheck,
  HelpCircle
} from "lucide-react";

export const healthcareProfessionals: Tool[] = [
  {
    icon: Pill,
    title: "Pharmaceutical Assistant GPT",
    description: "I'm an expert AI Pharmaceutical Assistant that supports pharmacy professionals and patients alike by streamlining medication management, offering detailed drug information, checking for interactions, and helping with scheduling, all to ensure safe and efficient healthcare practices.",
    emoji: "💊",
    color: "from-blue-500 to-green-600",
    directUrl: "https://rxai.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-professional-looking-pharmaceutical-assistan.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    tags: ["pharmaceutical assistance", "medication management", "drug information", "interaction checking", "healthcare support"],
    category: "Healthcare Professionals",
    rating: 4.8,
    totalVotes: 4234
  },
  {
    icon: Heart,
    title: "🐾Veterinarian GPT",
    description: "Veterinarian GPT is a compassionate virtual veterinarian simulation offering expert advice on pet health and well-being. It utilizes advanced Ai features to analyze your pet's health and provide tailored care recommendations. This multimodal AI tool allows you to upload data or images of your pets for detailed assessments and receive practical solutions to ensure their optimal health. 🐾 Disclaimer: Veterinarian GPT is for informational purposes only and is not a substitute for professional veterinary advice, diagnosis, or treatment. GPT 4o1 Compliant Version: PETCARE GPT OR TRY PET ADVISOR GPT",
    emoji: "🐾",
    color: "from-pink-500 to-purple-600",
    directUrl: "https://petcaregpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/jwjNOKP5mf4",
    tags: ["veterinary care", "pet health", "animal wellness", "pet advice", "veterinary simulation"],
    category: "Healthcare Professionals",
    rating: 4.7,
    totalVotes: 3890
  },
  {
    icon: Stethoscope,
    title: "Personalized DR. GPT (Doctor GPT)",
    description: "Disclaimer: Dr. GPT is not a direct replacement for genuine medical advice. It was developed for individuals who may not have access to a medical doctor. It is crucial to recognize that this is a simulation, not an actual medical professional, and it should not be utilized as one. This AI tool is private, confidential, and personalized, intended solely for informational purposes and should not replace professional medical advice, diagnosis, or treatment.",
    emoji: "👨‍⚕️",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://chatgpt.com/g/g-69c4da4473b0819185462889b7348a28-medicus-wellcheck-gpt",
    videoUrl: "https://youtu.be/jwjNOKP5mf4",
    tags: ["medical consultation", "health assessment", "symptom analysis", "medical simulation", "healthcare access"],
    category: "Healthcare Professionals",
    rating: 4.6,
    totalVotes: 3456
  },
  {
    icon: Brain,
    title: "Mental Wellness GPT",
    description: "Mental Wellness GPT is a virtual chat tool for emotional support and mental well-being, offering empathetic guidance rooted in cognitive behavioral therapy (CBT) principles. Designed to help navigate stress, anxiety, and life's challenges, I provide practical tools, coping strategies, and a safe, judgment-free space for personal growth. While not a licensed therapist, I aim to complement your journey toward resilience and self-care with meaningful insights and support. Disclaimer: These AI-driven tools are designed for creative and emotional support purposes only and should not be considered as replacements for professional mental health care, therapy, or diagnosis.",
    emoji: "🧠",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://mentalwellnessgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/_e6DtLUv-2Q",
    imageUrl: "https://media.discordapp.net/attachments/1150636600846450729/1377362789097803786/image.png?ex=6838b08f&is=68375f0f&hm=f63e1ae446523dd9eff4aa0f95166aa8a5e6119c506b44ab1656322ea4ca47b7&=&format=webp&quality=lossless&width=2646&height=1392",
    tags: ["mental health", "CBT", "emotional wellness", "psychological support", "therapy", "stress management", "anxiety support"],
    category: "Healthcare Professionals",
    rating: 4.6,
    totalVotes: 3234
  },
  {
    icon: Microscope,
    title: "PHARMA RESEARCH PRO",
    description: "Pharma Research Pro, an AI-powered assistant designed to streamline pharmaceutical research and clinical trials by providing advanced data analysis, literature reviews, and predictive insights. My capabilities ensure efficient and accurate drug development while maintaining regulatory and ethical compliance. From optimizing trial design to monitoring safety, I empower researchers and clinicians to make informed decisions and accelerate the path to safe, effective medications.",
    emoji: "🧪",
    color: "from-blue-500 to-green-600",
    directUrl: "https://rxai.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-professional-pharmaceutical-assis.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    tags: ["pharmaceutical research", "clinical trials", "drug development", "regulatory compliance", "data analysis", "aiwebtools"],
    category: "Healthcare Professionals",
    rating: 4.7,
    totalVotes: 3892
  }
];
