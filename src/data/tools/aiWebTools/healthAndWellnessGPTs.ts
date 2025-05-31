import { Tool } from "@/types/tools";
import { 
  Heart, 
  Stethoscope, 
  Pill, 
  Activity, 
  Brain, 
  Shield,
  User,
  Plus,
  AlertTriangle,
  Briefcase,
  Sparkles
} from "lucide-react";

export const healthAndWellnessGPTs: Tool[] = [
  {
    icon: Stethoscope,
    title: "Personalized DR. GPT (Doctor GPT)",
    description: "Disclaimer: Dr. GPT is not a direct replacement for genuine medical advice. It was developed for individuals who may not have access to a medical doctor. It is crucial to recognize that this is a simulation, not an actual medical professional, and it should not be utilized as one. This AI tool is private, confidential, and personalized, intended solely for informational purposes and should not replace professional medical advice, diagnosis, or treatment.",
    emoji: "👨‍⚕️",
    color: "from-blue-500 to-green-600",
    directUrl: "https://aidoctorgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=EKKIttUG0sI",
    tags: ["medical consultation", "health advice", "doctor simulation", "healthcare", "medical ai", "aiwebtools"],
    category: "Health & Wellness",
    rating: 4.7,
    totalVotes: 5432
  },
  {
    icon: Sparkles,
    title: "SKIN CARE GPT",
    description: "SKINCARE GPT by AI Web Tools LLC is your comprehensive AI-powered dermatology and skincare consultant, providing personalized skincare guidance, product recommendations, and professional beauty advice tailored to your unique skin type and concerns. Whether you're dealing with acne, aging, sensitivity, or seeking to optimize your skincare routine, this advanced AI analyzes your skin condition, lifestyle factors, and preferences to deliver customized skincare solutions that deliver real results. Upload photos of your skin for detailed analysis, receive personalized product recommendations from trusted brands, and get step-by-step skincare routines designed specifically for your needs. The AI considers factors like skin type, age, climate, budget, and specific concerns to create comprehensive skincare protocols that address everything from daily maintenance to targeted treatments. Features include ingredient compatibility checking, product comparison analysis, seasonal routine adjustments, and professional skincare technique guidance. Perfect for skincare enthusiasts seeking expert guidance, individuals with specific skin concerns needing targeted solutions, and anyone wanting to achieve healthy, radiant skin through science-backed recommendations. SKINCARE GPT ensures your skin gets the personalized care it deserves.",
    emoji: "✨",
    color: "from-pink-500 to-purple-600",
    directUrl: "https://skincaregpt.lovable.app/?via=aiwebtools",
    tags: ["skincare", "dermatology", "beauty advice", "skin analysis", "cosmetics", "health", "wellness", "aiwebtools"],
    category: "Health & Wellness",
    rating: 4.6,
    totalVotes: 4567
  },
  {
    icon: User,
    title: "🐾Veterinarian GPT",
    description: "Veterinarian GPT is a compassionate virtual veterinarian simulation offering expert advice on pet health and well-being. It utilizes advanced Ai features to analyze your pet's health and provide tailored care recommendations. This multimodal AI tool allows you to upload data or images of your pets for detailed assessments and receive practical solutions to ensure their optimal health. 🐾 Disclaimer: Veterinarian GPT is for informational purposes only and is not a substitute for professional veterinary advice, diagnosis, or treatment. GPT 4o1 Compliant Version: PETCARE GPT OR TRY PET ADVISOR GPT",
    emoji: "🐾",
    color: "from-green-500 to-blue-600",
    directUrl: "https://petcaregpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=ElAfvB0yLEI",
    imageUrl: "https://cdn.discordapp.com/attachments/1150636600846450729/1377298535833407488/vet.webp",
    tags: ["veterinary care", "pet health", "animal medicine", "pet consultation", "veterinary advice", "aiwebtools"],
    category: "Health & Wellness",
    rating: 4.6,
    totalVotes: 4321
  },
  {
    icon: Pill,
    title: "Pharmaceutical Assistant GPT",
    description: "I'm an expert AI Pharmaceutical Assistant that supports pharmacy professionals and patients alike by streamlining medication management, offering detailed drug information, checking for interactions, and helping with scheduling, all to ensure safe and efficient healthcare practices.",
    emoji: "💊",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://rxai.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-professional-looking-pharmaceutical-assistan.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    tags: ["pharmaceutical", "medication management", "drug information", "pharmacy", "healthcare", "aiwebtools"],
    category: "Health & Wellness",
    rating: 4.5,
    totalVotes: 3876
  },
  {
    icon: Brain,
    title: "Mental Wellness GPT",
    description: "Mental Wellness GPT is a virtual chat tool for emotional support and mental well-being, offering empathetic guidance rooted in cognitive behavioral therapy (CBT) principles. Designed to help navigate stress, anxiety, and life's challenges, I provide practical tools, coping strategies, and a safe, judgment-free space for personal growth. While not a licensed therapist, I aim to complement your journey toward resilience and self-care with meaningful insights and support. Disclaimer: These AI-driven tools are designed for creative and emotional support purposes only and should not be considered as replacements for professional mental health care, therapy, or diagnosis.",
    emoji: "🧠",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://mentalwellnessgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/_e6DtLUv-2Q",
    imageUrl: "https://media.discordapp.net/attachments/1150636600846450729/1377362789097803786/image.png?ex=6838b08f&is=68375f0f&hm=f63e1ae446523dd9eff4aa0f95166aa8a5e6119c506b44ab1656322ea4ca47b7&=&format=webp&quality=lossless&width=2646&height=1392",
    tags: ["mental health", "wellness", "therapy", "cbt", "emotional support", "aiwebtools"],
    category: "Health & Wellness",
    rating: 4.8,
    totalVotes: 6234
  },
  {
    icon: Activity,
    title: "DENTAL GPT",
    description: "DENTAL GPT is your comprehensive AI-powered dental consultant, providing expert guidance on oral health, dental procedures, and preventive care. Whether you're dealing with dental concerns, seeking advice on oral hygiene practices, or need information about dental treatments, this advanced AI offers professional dental knowledge and personalized recommendations. From routine dental care guidance to understanding complex dental procedures, DENTAL GPT helps you make informed decisions about your oral health. Perfect for patients seeking dental education, dental professionals looking for reference material, and anyone wanting to maintain optimal oral health through expert guidance.",
    emoji: "🦷",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://chatgpt.com/g/g-67cbcbcf3a38819183974f2d062d5d7f-dental-gpt-expert",
    tags: ["dental health", "oral care", "dentistry", "dental consultation", "oral hygiene", "dental procedures", "healthcare"],
    category: "Health & Wellness",
    rating: 4.5,
    totalVotes: 2890
  }
];
