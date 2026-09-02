import { Tool } from "@/types/tools";
import { 
  Car, Leaf, Fish, Shield, Home, Wrench, Dog, Star, 
  Mountain, Compass, FlaskConical, Atom, TreePine, Eye, Droplets
} from "lucide-react";

import materiumorHero from "@/assets/tools/materiumor-hero.jpg";
import desalinizationSentinelHero from "@/assets/tools/desalinization-sentinel-hero.jpg";
import cannabisInspectorHero from "@/assets/cannabis-inspector-hero.jpg";

export const specializedAndNiche: Tool[] = [
  {
    icon: Car,
    title: "AUTOMOBILE GPT",
    description: "Automobile GPT is your ultimate, all-encompassing Ai automotive expert, designed to guide you through every aspect of the automotive world with precision. Whether you're searching for the best deals at local dealerships, need detailed repair cost assessments, or seek expert advice on maintenance and upgrades, Automobile GPT offers unmatched accuracy and thoroughness. It's your indispensable partner for making informed, precise decisions about your vehicle.",
    emoji: "🚗",
    color: "from-blue-500 to-gray-600",
    directUrl: "https://automobilegpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=f_4aFnL-mk8",
    imageUrl: "https://media.discordapp.net/attachments/1150636600846450729/1377298792986185759/automobile.webp?ex=683874f5&is=68372375&hm=ec15bb55f45d7623016122da411f80c948a8120c5091a6085e69ca09706031d8&=&format=webp&width=2400&height=1200",
    tags: ["automotive", "cars", "diagnostics", "vehicle information"],
    category: "Specialized & Niche",
    rating: 4.3,
    totalVotes: 2876
  },
  {
    icon: Leaf,
    title: "🌿Cannabis GPT",
    description: "Multimodal AI for legal cannabis users, growers, and professionals. Comprehensive resources on strain genetics, edibles dosing, and cultivation techniques. Upload images for plant health insights. Updates on regulations, research, and product recommendations. Safe consumption, cannabinoid science, terpene profiles. Adults 21+ in legal areas only.",
    emoji: "🌿",
    color: "from-green-500 to-emerald-600",
    directUrl: "https://cannabisgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/1fOxuIyl1C8",
    imageUrl: cannabisInspectorHero,
    tags: ["cannabis", "cultivation", "strain genetics", "legal cannabis", "plant health"],
    category: "Specialized & Niche",
    rating: 4.3,
    totalVotes: 2567
  },
  {
    icon: Fish,
    title: "Fisherman GPT",
    description: "Hi there! 👋 I'm Fisherman GPT, your expert virtual fishing assistant. I specialize in providing detailed, step-by-step guidance for all things related to fishing, from finding the best fishing spots and recommending ideal baits, to sourcing the cheapest gear and calculating trip costs. I can also identify fish species, analyze water conditions, and provide local regulations to ensure you're fully prepared for your trip. With the ability to search the web for the latest data and even generate reports, I offer a complete, personalized fishing experience, helping you make the most of your time on the water. 🎣😊",
    emoji: "🎣",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://fishermangpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/pJO0nmwLm24",
    tags: ["fishing", "outdoor recreation", "fishing spots", "gear recommendations", "angling"],
    category: "Specialized & Niche",
    rating: 4.2,
    totalVotes: 1987
  },
  {
    icon: Shield,
    title: "Survivalist GPT",
    description: "Congratulations! You now have a survival expert in your pocket. Imagine a robot with vast knowledge and experience in survival techniques, ready to assist you anytime. This GPT, offers step-by-step guidance, practical strategies, and personalized support for any survival or battlefield scenario. It's the ultimate survival companion, always by your side. Remember, with Survivalist GPT, you're never alone.",
    emoji: "🏕️",
    color: "from-green-500 to-brown-600",
    directUrl: "https://survivalistgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/RX6W8KC0y18?si=iEp3dxzZORO1s_sN",
    imageUrl: "https://media.discordapp.net/attachments/1150636600846450729/1377298679387521186/survivalist.webp?ex=683874da&is=6837235a&hm=47343d2e045ffa4fbd8d754f9e85a79b9172d12cb3651ee90c48add9ad6ed748&=&format=webp&width=2340&height=1312",
    tags: ["survival", "wilderness", "emergency preparedness", "outdoor skills"],
    category: "Specialized & Niche",
    rating: 4.4,
    totalVotes: 2567
  },
  {
    icon: Home,
    title: "Home Renovator GPT",
    description: "Home Renovator GPT is your AI-powered home improvement assistant that simplifies every step of your repair or renovation. It provides personalized instructions, accurate cost estimates, and helps you find the best local suppliers and contractors. Upload photos for tailored advice, and get detailed reports with everything you need—from materials to labor costs. Whether you're DIY-ing or hiring professionals, Home Renovator GPT ensures your project is efficient, affordable, and stress-free.",
    emoji: "🏡",
    color: "from-orange-500 to-red-600",
    directUrl: "https://homerenovationgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/fzmhFNPwQ7A",
    tags: ["home renovation", "DIY projects", "home improvement", "construction", "repair guidance", "kitchen", "household", "handyman", "fix it", "home repair", "Custom GPT"],
    category: "Specialized & Niche",
    rating: 4.3,
    totalVotes: 2789
  },
  {
    icon: Dog,
    title: "🐾Veterinarian GPT",
    description: "Compassionate virtual veterinarian simulation providing expert advice on pet health and well-being. Advanced AI analyzes your pet's health with tailored care recommendations. Multimodal capabilities allow uploading data and images for detailed assessments. Disclaimer: Informational only, not substitute for professional veterinary advice.",
    emoji: "🐾",
    color: "from-green-500 to-blue-600",
    directUrl: "https://petcaregpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/jwjNOKP5mf4",
    tags: ["veterinary", "pet health", "animal care", "pet advice", "animal wellness"],
    category: "Specialized & Niche",
    rating: 4.4,
    totalVotes: 3123
  },
  {
    icon: Star,
    title: "ImmortalizeME",
    description: "Digital legacy and memory preservation platform for creating lasting digital memorials and life stories.",
    emoji: "✨",
    color: "from-purple-500 to-gold-600",
    directUrl: "https://immortalizeme.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=JXLqPMfw49Y",
    tags: ["digital legacy", "memory preservation", "memorials", "life stories"],
    category: "Specialized & Niche",
    rating: 4.2,
    totalVotes: 2234
  },
  {
    icon: Star,
    title: "Dream Interpreter GPT",
    description: "AI-driven dream analysis and interpretation using psychological, mythological, and symbolic frameworks. Uncover hidden meanings, subconscious patterns, emotions, and opportunities for personal growth. Breaks down symbols and guides introspection for deeper self-understanding.",
    emoji: "💭",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://dreaminterpreter.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-mystical-advertisement-for-an-ai-tool-cal.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true/qt=q:98",
    tags: ["dream interpretation", "psychology", "symbolism", "self-discovery", "subconscious analysis"],
    category: "Specialized & Niche",
    rating: 4.2,
    totalVotes: 2456
  },
  {
    icon: TreePine,
    title: "Fungus GPT (Fungus Whisperer GPT)",
    description: "Expert AI guide for mushroom cultivation, safe foraging, and culinary uses. Provides precise identification, growing techniques, and recipes with emphasis on safety and sustainability. Combines mycology knowledge with folklore and hands-on guidance.",
    emoji: "🍄",
    color: "from-brown-500 to-green-600",
    directUrl: "https://fungusgpt.lovable.app/?via=aiwebtools",
    imageUrl: "/src/assets/tools/fungus-gpt-hero.png",
    tags: ["mycology", "mushroom cultivation", "foraging", "fungi identification", "sustainable practices"],
    category: "Specialized & Niche",
    rating: 4.3,
    totalVotes: 1876
  },
  {
    icon: FlaskConical,
    title: "Food Quality Inspector GPT",
    description: "Food Quality Inspector GPT by AiWebTools.Ai is your smart companion for grocery shopping, helping you assess food quality, freshness, and safety on the spot. It analyzes ingredients, flags unhealthy or banned substances, and provides clear nutritional insights to guide healthier choices. Whether you're choosing fresh produce or packaged goods, it's like having a food safety and nutrition expert right by your side. 🛒🍎",
    emoji: "🔍",
    color: "from-green-500 to-blue-600",
    directUrl: "https://foodqualitygpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/rHJR4V8iYZI?si=nkXT-PNl8abQDHWE",
    imageUrl: "https://cdn.discordapp.com/attachments/1150636600846450729/1377298675285626880/foodquality.webp?ex=683874d9&is=68372359&hm=68b71d1ffdf0228ef2cad3d55d4e8369304444a51cc07b4cb5c8feec9235f6a0&",
    tags: ["food safety", "quality inspection", "nutrition analysis", "grocery shopping", "health assessment", "cooking", "food", "recipe", "nutrition", "diet", "fruit", "vegetables", "Custom GPT"],
    category: "Specialized & Niche",
    rating: 4.1,
    totalVotes: 1654
  },
  {
    icon: Atom,
    title: "MATERIUMOR- Material Valuation GPT",
    description: "Next-generation valuation assistant for physical and digital assets. Provides data-informed insights for rare metals, gems, and digital currencies including market value, trade opportunities, and economic trends. Aims for accessible, equitable material knowledge.",
    emoji: "💎",
    color: "from-purple-500 to-cyan-600",
    directUrl: "https://materialvaluationgpt.lovable.app/?via=aiwebtools",
    imageUrl: materiumorHero,
    tags: ["material valuation", "precious metals", "gemstones", "asset assessment", "market analysis"],
    category: "Specialized & Niche",
    rating: 4.2,
    totalVotes: 1987
  },
  {
    icon: Eye,
    title: "Phenomenon Investigator Suite",
    description: "Advanced paranormal and unexplained phenomena research tool for investigating UFO sightings, ghost encounters, cryptid research, and other mysterious occurrences with scientific methodology.",
    emoji: "👁️",
    color: "from-purple-500 to-green-600",
    directUrl: "https://phenomenonexplorer.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/faBkRli0puc?si=Sao0KIfV2iGWLGB-",
    imageUrl: "https://cdn.discordapp.com/attachments/1150636600846450729/1377298677785428110/phenomon.webp?ex=683874d9&is=68372359&hm=8e55c5c272fab29c3619293bc4785a0efd8b9ce111802a50f51779c0b82c426a&",
    tags: ["paranormal research", "UFO investigation", "ghost hunting", "cryptid research", "unexplained phenomena"],
    category: "Specialized & Niche",
    rating: 4.3,
    totalVotes: 2156
  },
  {
    icon: Droplets,
    title: "DESALINIZATION SENTINEL GPT",
    description: "Planetary water decentralization equilibrium command AI ensuring Earth's sustainable hydration balance. This advanced tool helps communities and organizations formulate planning for global desalinization efforts and water sustainability initiatives. It provides expert guidance on desalination technologies, environmental impact assessments, cost-benefit analysis, and strategic planning for water decentralization. Perfect for environmental planners, water resource managers, and sustainability advocates working to ensure clean water access for future generations.",
    emoji: "💧",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://chatgpt.com/g/g-68e5c8e372c4819190c7d247847c908b-desalinization-sentinel-gpt/",
    imageUrl: desalinizationSentinelHero,
    tags: ["desalination", "water sustainability", "water security", "environmental planning", "water management", "sustainability", "clean water", "water technology", "earth", "planetary", "aiwebtools"],
    category: "Specialized & Niche",
    rating: 4.5,
    totalVotes: 1543
  }
];
