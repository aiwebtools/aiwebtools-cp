
import { Tool } from "@/types/tools";
import { 
  Shield, 
  Flame, 
  Heart, 
  AlertTriangle, 
  Users, 
  Phone, 
  MapPin, 
  Target,
  Truck,
  Cross
} from "lucide-react";

export const emergencyServices: Tool[] = [
  {
    icon: Flame,
    title: "Firefighter GPT",
    description: "Professional firefighting guidance, emergency response procedures, fire safety protocols, and firefighting techniques for firefighters and emergency responders.",
    emoji: "🚒",
    color: "from-red-500 to-orange-600",
    directUrl: "https://firefightergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/kDu2SSP9Glw?si=RDSEgewVsQYFRt3S",
    tags: ["firefighting", "emergency response", "fire safety", "emergency procedures", "first responder"],
    category: "Emergency Services",
    rating: 4.8,
    totalVotes: 4567
  },
  {
    icon: Shield,
    title: "Survivalist GPT",
    description: "Congratulations! You now have a survival expert in your pocket. Imagine a robot with vast knowledge and experience in survival techniques, ready to assist you anytime. This GPT, offers step-by-step guidance, practical strategies, and personalized support for any survival or battlefield scenario. It's the ultimate survival companion, always by your side. Remember, with Survivalist GPT, you're never alone.",
    emoji: "🏕️",
    color: "from-green-500 to-brown-600",
    directUrl: "https://survivalistgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/RX6W8KC0y18?si=iEp3dxzZORO1s_sN",
    tags: ["survival skills", "emergency preparedness", "wilderness survival", "outdoor safety", "crisis management"],
    category: "Emergency Services",
    rating: 4.7,
    totalVotes: 3890
  },
  {
    icon: Heart,
    title: "🐾Veterinarian GPT",
    description: "Professional veterinary guidance for pet care, animal health, medical conditions, treatment options, and emergency veterinary care for pets and animals.",
    emoji: "🐾",
    color: "from-blue-500 to-green-600",
    directUrl: "https://petcaregpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/jwjNOKP5mf4",
    tags: ["veterinary care", "pet health", "animal medicine", "emergency care", "pet wellness"],
    category: "Emergency Services",
    rating: 4.6,
    totalVotes: 3456
  },
  {
    icon: Target,
    title: "Firearms Safety Instructor GPT",
    description: "Professional firearms safety education, gun safety protocols, training techniques, and responsible firearm handling for instructors and enthusiasts.",
    emoji: "🎯",
    color: "from-gray-500 to-blue-600",
    directUrl: "https://firearmsafetyeducationgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-humanoid-shooting-a-gun-at-a-targ.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    tags: ["firearms safety", "gun safety", "safety training", "responsible handling", "safety education"],
    category: "Emergency Services",
    rating: 4.5,
    totalVotes: 3123
  },
  {
    icon: Users,
    title: "Social Safety Net GPT",
    description: "Comprehensive social services guidance covering welfare programs, social assistance, community resources, and social support systems for those in need.",
    emoji: "🤝",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://socialsafetynetgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=pXXqMe97GDg",
    tags: ["social services", "welfare programs", "community resources", "social assistance", "support systems"],
    category: "Emergency Services",
    rating: 4.4,
    totalVotes: 2987
  },
  {
    icon: Cross,
    title: "Criminologist GPT",
    description: "Expert criminology analysis covering crime investigation, criminal behavior analysis, forensic science, and criminal justice system guidance for professionals.",
    emoji: "🔍",
    color: "from-red-500 to-purple-600",
    directUrl: "https://criminologistgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=jgvqpqmRJi8",
    tags: ["criminology", "crime investigation", "criminal behavior", "forensic science", "criminal justice"],
    category: "Emergency Services",
    rating: 4.6,
    totalVotes: 3234
  }
];
