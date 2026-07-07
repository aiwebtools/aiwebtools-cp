
import { Tool } from "@/types/tools";
import { 
  Mic,
  Calculator,
  Shield,
  Compass,
  Building,
  Shirt
} from "lucide-react";
import medicalBillingCodingGptHero from "@/assets/tools/medical-billing-coding-gpt-hero.jpg";
import healthInsuranceClaimsGptHero from "@/assets/tools/health-insurance-claims-gpt-hero.jpg";
import virtualStylistGptHero from "@/assets/tools/virtual-stylist-gpt-hero.jpg";

export const professionalGPTsAudio: Tool[] = [
  {
    icon: Mic,
    title: "Nucleus AI Inbound Call Agents Platform",
    description: "Revolutionary AI-powered inbound call agents that handle customer service, sales calls, and support with human-like conversation abilities. Advanced phone automation platform for businesses.",
    emoji: "📞",
    color: "from-blue-500 to-cyan-600",
    imageUrl: "https://cdn.discordapp.com/attachments/1150636600846450729/1377368060364849193/image.png?ex=6838b577&is=683763f7&hm=5d7af47618e4e284baa269ee596a3b68f2ee26e23dd13ed84be94a092aff4f44&",
    directUrl: "https://nucleus.chat/?via=aiwebtools",
    tags: ["phone agents", "call agents", "inbound calls", "ai agents", "call center", "phone automation", "voice ai", "customer service", "nucleus", "call handling", "phone system", "voice agents", "telephone agents", "automated calling", "call management"],
    category: "Communication & Entertainment",
    rating: 4.9,
    totalVotes: 6789
  },
  {
    icon: Calculator,
    title: "Medical Billing & Coding GPT",
    description: "Your AI-powered medical billing assistant specializing in CPT, ICD-10, and HCPCS coding with real-time insurance reimbursement calculations. Professional coding expertise for healthcare professionals.",
    emoji: "🏥",
    color: "from-blue-500 to-green-600",
    directUrl: "https://medicalbillinggpt.lovable.app/?via=aiwebtools",
    imageUrl: medicalBillingCodingGptHero,
    tags: ["medical billing", "medical coding", "CPT codes", "ICD-10", "HCPCS", "insurance", "reimbursement", "healthcare", "medical professionals", "billing assistant", "Medical Coding", "Healthcare"],
    category: "Healthcare Professionals",
    rating: 4.7,
    totalVotes: 2890
  },
  {
    icon: Shield,
    title: "Health Insurance Claims GPT",
    description: "Maximize Your Health Insurance Claims With AI. Health Insurance Claims GPT expertly handles assessments, calculates costs, and generates accurate reports to ensure you get the maximum reimbursement for all your healthcare expenses.",
    emoji: "🛡️",
    color: "from-green-500 to-blue-600",
    directUrl: "https://healthinsurenceclaimsgpt.lovable.app/?via=aiwebtools",
    imageUrl: healthInsuranceClaimsGptHero,
    tags: ["health insurance", "insurance claims", "claim assessment", "cost calculation", "reimbursement", "healthcare expenses", "insurance reports", "claims processing", "medical claims", "Healthcare", "Medical"],
    category: "Healthcare Professionals",
    rating: 4.6,
    totalVotes: 2450
  },
  {
    icon: Building,
    title: "Real Estate GPT",
    description: "Intelligent Real Estate Analysis & Insights. RealEstateGPT provides detailed, data-driven, and actionable property intelligence for accurate valuation, mortgage analysis, rental management, and commercial real estate investments.",
    emoji: "🏘️",
    color: "from-blue-500 to-slate-600",
    directUrl: "https://realestategpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/ULnIHexQO0w",
    tags: ["real estate", "property valuation", "mortgage analysis", "rental management", "commercial real estate", "property intelligence", "investment analysis", "real estate data", "property assessment", "market analysis"],
    category: "Professional Services",
    rating: 4.6,
    totalVotes: 2567
  },
  {
    icon: Shirt,
    title: "VIRTUAL STYLIST - VIRTUAL TRY-ON GPT",
    description: "Experience Yourself in the Future of Fashion. Try on outfits, visualize new hairstyles, and transform your look virtually with our advanced AI stylist before making any real changes.",
    emoji: "👗",
    color: "from-pink-500 to-purple-600",
    directUrl: "https://virtualstylistgpt.lovable.app/?via=aiwebtools",
    imageUrl: virtualStylistGptHero,
    tags: ["virtual stylist", "virtual try-on", "fashion", "outfit visualization", "hairstyle simulation", "ai stylist", "virtual makeover", "style transformation", "fashion ai", "wardrobe assistant", "look visualization", "fashion technology", "virtual fitting", "style advisor", "fashion preview"],
    category: "Creative & Entertainment",
    rating: 4.7,
    totalVotes: 3128
  }
];
