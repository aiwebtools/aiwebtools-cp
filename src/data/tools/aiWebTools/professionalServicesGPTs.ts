
import { Tool } from "@/types/tools";
import { Briefcase, Users, Calculator, Building, Leaf, Hammer, MapPin, Scale, DollarSign, Zap, Shield, Clock } from "lucide-react";

export const professionalServicesGPTs: Tool[] = [
  {
    icon: Briefcase,
    title: "🐾Veterinarian GPT",
    description: "Veterinarian GPT by AI Web Tools LLC is your comprehensive AI-powered veterinary assistant, revolutionizing pet healthcare with advanced diagnostic capabilities and expert medical guidance. This cutting-edge multimodal AI tool transforms how pet owners approach animal healthcare by providing instant access to professional-grade veterinary knowledge and personalized care recommendations. Upload photos or describe symptoms to receive detailed health assessments, treatment suggestions, and preventive care guidance tailored specifically to your pet's needs. Whether you're dealing with routine wellness questions, behavioral concerns, or urgent health issues, Veterinarian GPT delivers expert-level insights that help you make informed decisions about your pet's wellbeing. The AI analyzes pet health data using advanced algorithms trained on veterinary medical knowledge, providing actionable advice for common conditions, nutrition planning, vaccination schedules, and emergency care protocols. Perfect for pet owners seeking immediate guidance, veterinary students learning diagnostic techniques, and animal care professionals looking for quick reference support. Features include symptom analysis, breed-specific health information, medication guidance, and comprehensive care planning tools. Disclaimer: Veterinarian GPT is for informational and educational purposes only and should not replace professional veterinary advice, diagnosis, or treatment. Always consult qualified veterinarians for serious health concerns.",
    emoji: "🐾",
    color: "from-green-500 to-blue-600",
    directUrl: "https://petcaregpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=ElAfvB0yLEI",
    tags: ["veterinary care", "pet health", "animal medicine", "health assessment", "pet advice"],
    category: "Professional Services",
    rating: 4.8,
    totalVotes: 6789
  },
  {
    icon: Shield,
    title: "🔒Insurance Claims GPT",
    description: "Insurance Claims GPT by AI Web Tools LLC is the ultimate AI-powered claims management and estimation solution, transforming how insurance professionals and policyholders navigate the complex world of insurance claims processing. This revolutionary tool streamlines every aspect of the claims journey, from initial damage assessment to final settlement negotiations, ensuring maximum accuracy and efficiency throughout the process. Upload photos of damage, describe incidents, or input claim details to receive comprehensive damage analysis, accurate cost estimates, and professional claim documentation that meets industry standards. The AI leverages advanced image recognition technology and extensive insurance database knowledge to provide precise valuations, identify potential fraud indicators, and generate detailed reports that expedite claim processing. Perfect for insurance adjusters seeking accurate assessments, policyholders wanting fair settlements, and insurance companies looking to streamline operations. Features include damage photography analysis, repair cost estimation, comparable claims research, settlement negotiation guidance, and comprehensive documentation generation. The tool ensures you receive fair treatment and adequate compensation by providing data-backed evidence and professional-grade claim support that protects your interests throughout the entire claims process.",
    emoji: "🔒",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://insuranceclaimsgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=WNPywJWOUzU",
    tags: ["insurance claims", "claims management", "damage assessment", "claim processing", "insurance assistance"],
    category: "Professional Services",
    rating: 4.7,
    totalVotes: 5432
  },
  {
    icon: Hammer,
    title: "Home Renovator GPT 🏡🔧",
    description: "Home Renovator GPT by AI Web Tools LLC is your comprehensive AI-powered home improvement and renovation assistant, revolutionizing how homeowners approach DIY projects and professional renovations. This intelligent tool transforms complex construction challenges into manageable, step-by-step solutions that save time, money, and reduce project stress. Upload photos of your space, describe your renovation goals, or outline specific repair needs to receive detailed project plans, accurate cost estimates, and personalized guidance tailored to your skill level and budget. The AI provides comprehensive material lists, tool recommendations, safety protocols, and connects you with qualified local contractors and suppliers for professional assistance when needed. Whether you're planning a kitchen remodel, bathroom renovation, or simple home repairs, Home Renovator GPT delivers expert-level insights that ensure project success. Features include photo-based room analysis, 3D visualization suggestions, permit requirement guidance, timeline planning, and quality control checklists. Perfect for DIY enthusiasts seeking professional guidance, homeowners planning major renovations, and contractors looking for quick project estimation tools. The tool helps maximize your home's value while minimizing costs through intelligent planning and resource optimization.",
    emoji: "🏡",
    color: "from-orange-500 to-red-600",
    directUrl: "https://homerenovationgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-humanoid-robot-fixing-a-bathroom-.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    tags: ["home renovation", "DIY projects", "home improvement", "cost estimation", "contractor matching"],
    category: "Professional Services",
    rating: 4.6,
    totalVotes: 4321
  },
  {
    icon: MapPin,
    title: "Fisherman GPT🎣😊",
    description: "Fisherman GPT by AI Web Tools LLC is your ultimate AI-powered fishing companion, transforming novice anglers into skilled fishermen while enhancing the experience of seasoned professionals. This comprehensive fishing assistant provides expert guidance on every aspect of angling, from finding the perfect fishing spots to selecting optimal gear and mastering advanced techniques. Whether you're planning a weekend fishing trip or pursuing trophy fish, Fisherman GPT delivers personalized recommendations based on your location, target species, and experience level. The AI analyzes weather patterns, water conditions, seasonal fish behavior, and local regulations to provide real-time fishing forecasts and strategic advice. Upload photos of your catch for species identification, get detailed information about fish habitats and feeding patterns, and receive expert tips on bait selection, tackle setup, and fishing techniques. Features include GPS-based fishing spot recommendations, weather and water condition analysis, fishing calendar optimization, gear cost comparison, and comprehensive trip planning tools. Perfect for beginners learning the basics, experienced anglers seeking new challenges, and fishing guides looking for data-driven insights to improve client success rates.",
    emoji: "🎣",
    color: "from-blue-500 to-green-600",
    directUrl: "https://fishermangpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-cinematic-shot-of-a-bearded-fisherman-wearin.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    tags: ["fishing", "outdoor recreation", "fishing gear", "fish identification", "fishing spots"],
    category: "Professional Services",
    rating: 4.5,
    totalVotes: 3876
  },
  {
    icon: Leaf,
    title: "Agronomus AI Farming Expert",
    description: "Agronomus by AI Web Tools LLC is your comprehensive AI-powered agricultural specialist, revolutionizing modern farming through data-driven insights and expert agronomic guidance. This advanced farming assistant transforms traditional agriculture into precision farming by providing real-time crop analysis, soil optimization strategies, and sustainable cultivation practices that maximize yields while minimizing environmental impact. Whether you're managing a small family farm or overseeing large-scale agricultural operations, Agronomus delivers personalized farming solutions based on your specific crops, climate conditions, and operational goals. Upload field photos for crop health analysis, soil condition assessment, and pest identification to receive targeted treatment recommendations and preventive care strategies. The AI analyzes weather patterns, market trends, and seasonal cycles to provide optimal planting schedules, irrigation management, and harvest timing guidance. Features include crop rotation planning, fertilizer optimization, pest and disease management, yield prediction modeling, and sustainable farming practice recommendations. Perfect for farmers seeking to optimize production, agricultural students learning modern techniques, and agribusiness professionals looking for data-driven decision support. Increase your farm's profitability and sustainability through intelligent agricultural management.",
    emoji: "🌾",
    color: "from-green-500 to-yellow-600",
    directUrl: "https://agronomus.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=fFbtPFkRERA",
    tags: ["agriculture", "farming", "crop management", "agricultural technology", "farming advice"],
    category: "Professional Services",
    rating: 4.7,
    totalVotes: 5234
  },
  {
    icon: Leaf,
    title: "Fungus GPT – AI Mushroom Specialist",
    description: "Fungus GPT by AI Web Tools LLC is your expert AI-powered mycology assistant, providing comprehensive guidance on mushroom cultivation, foraging safety, and the fascinating world of fungi. This specialized tool combines deep mycological knowledge with practical applications, making it perfect for mushroom enthusiasts, cultivators, and anyone interested in fungi research. Upload photos for mushroom identification assistance, learn advanced cultivation techniques, and discover innovative culinary applications for edible varieties. The AI provides detailed information about mushroom biology, growth cycles, habitat requirements, and sustainable harvesting practices. Whether you're growing gourmet mushrooms commercially, foraging responsibly, or studying mycology academically, Fungus GPT delivers expert-level insights that enhance your understanding and success with fungi. Features include cultivation environment optimization, harvesting timing guidance, preservation techniques, nutritional analysis, and comprehensive safety protocols. Perfect for commercial mushroom growers seeking yield optimization, foraging enthusiasts learning identification skills, and researchers studying fungal ecosystems. ⚠️ CRITICAL SAFETY WARNING: This tool is for educational and informational purposes only. DO NOT EAT mushrooms identified by AI as identification may be incorrect. Always verify with professional mycologists and multiple expert sources before consuming any wild fungi, as misidentification can result in severe illness or death.",
    emoji: "🍄",
    color: "from-green-500 to-brown-600",
    directUrl: "https://fungusgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=qzndRzBtrEU",
    tags: ["mushroom cultivation", "mycology", "foraging", "fungi identification", "culinary fungi"],
    category: "Professional Services",
    rating: 4.7,
    totalVotes: 5432
  }
];
