
import { Tool } from "@/types/tools";
import { 
  Car, Atom, Microscope, Wrench, Dna, Zap, Rocket, Sprout, 
  Stethoscope, Leaf, Heart, Pill, Scale, Shield, Users, 
  Home, Hammer, Fish, Mountain, Gamepad2, Wand2, Sparkles,
  Code2, Search, Binary, BarChart3, Globe, Brain, FileText
} from "lucide-react";

export const specializedAndNiche: Tool[] = [
  // Automotive
  {
    icon: Car,
    title: "Automobile GPT",
    description: "All-encompassing AI automotive expert for finding deals, repair cost assessments, maintenance/upgrade advice.",
    emoji: "🚗",
    color: "from-blue-500 to-indigo-600",
    videoUrl: "https://www.youtube.com/watch?v=f_4aFnL-mk8",
    directUrl: "https://automobilegpt.lovable.app/?via=aiwebtools",
    category: "Automotive",
    tags: ["automotive", "car", "vehicle", "repair", "maintenance", "deals", "expert"]
  },

  // Science & Engineering
  {
    icon: Sprout,
    title: "Agronomus AI Farming Expert",
    description: "AI expert for farming, agriculture, and crop optimization.",
    emoji: "🌾",
    color: "from-green-500 to-emerald-600",
    videoUrl: "https://www.youtube.com/watch?v=fFbtPFkRERA",
    directUrl: "https://agronomus.lovable.app/?via=aiwebtools",
    category: "Science & Engineering",
    tags: ["farming", "agriculture", "crops", "expert", "agronomy"]
  },
  {
    icon: Brain,
    title: "Albert Einstein GPT",
    description: "AI embodiment of Einstein's intellect for challenging conventional wisdom, fostering critical thinking in physics, mathematics, and philosophy.",
    emoji: "🧠",
    color: "from-purple-500 to-violet-600",
    videoUrl: "https://www.youtube.com/watch?v=kfGyOfjBI0s",
    directUrl: "https://teslaeinsteingpt.lovable.app/?via=aiwebtools",
    category: "Science & Engineering",
    tags: ["einstein", "physics", "mathematics", "philosophy", "science", "genius", "critical thinking"]
  },
  {
    icon: Atom,
    title: "Alchemist Scientist GPT",
    description: "Immersive AI tool for medieval alchemy, combining chemistry, ancient wisdom, and interactive storytelling for experiments and discovery.",
    emoji: "⚗️",
    color: "from-amber-500 to-orange-600",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-digital-advertisement-for-the-ai-tool-_C4irn.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    directUrl: "https://alchemicalscientistgpt.lovable.app/?via=aiwebtools",
    category: "Science & Engineering",
    tags: ["alchemy", "chemistry", "medieval", "experiments", "discovery", "storytelling"]
  },
  {
    icon: Wrench,
    title: "Drill Baby Drill AI Suite For Oil & Gas",
    description: "Collection of 10 specialized AI tools to optimize oil and gas operations (exploration, drilling, logistics, safety, compliance, finance).",
    emoji: "🛢️",
    color: "from-gray-700 to-gray-900",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-cartoon-illustration-of-a-man-with-a-h_lmQ_X.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:600,h:300,cg:true/qt=q:30",
    directUrl: "https://drillbabydrillaisuite.lovable.app/?via=aiwebtools",
    category: "Science & Engineering",
    tags: ["oil", "gas", "drilling", "exploration", "logistics", "safety", "compliance", "energy"]
  },
  {
    icon: Wrench,
    title: "Engineering GPT Suite",
    description: "AI tools for Electrical, Mechanical, Civil, and Software Engineering, offering calculations, design recommendations, optimization, and safety protocols.",
    emoji: "⚙️",
    color: "from-blue-600 to-indigo-700",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-digital-advertisement-for-engineering-_hEePg.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    directUrl: "https://engineeringgpt.lovable.app/?via=aiwebtools",
    category: "Science & Engineering",
    tags: ["engineering", "electrical", "mechanical", "civil", "software", "calculations", "design", "optimization"]
  },
  {
    icon: Dna,
    title: "Genome GPT",
    description: "AI tool for genetic analysis and discovery, providing insights into genetic sequences, patterns, and variations (human DNA, plant genetics, cannabis strains).",
    emoji: "🧬",
    color: "from-green-500 to-teal-600",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-conceptual-image-of-a-dna-double-helix-with-.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    directUrl: "https://genomegpt.lovable.app/?via=aiwebtools",
    category: "Science & Engineering",
    tags: ["genetics", "DNA", "genome", "analysis", "sequences", "patterns", "variations", "human", "plants"]
  },
  {
    icon: Code2,
    title: "King Blueberry GPT",
    description: "Reimagine operational instructions by converting English to algebraic variables.",
    emoji: "🫐",
    color: "from-purple-500 to-blue-600",
    videoUrl: "https://www.youtube.com/watch?v=U8TLg15RTg8",
    directUrl: "https://algebraicexpressioninventor.lovable.app/?via=aiwebtools",
    category: "Science & Engineering",
    tags: ["algebraic", "variables", "operational", "instructions", "conversion", "mathematics"]
  },
  {
    icon: Zap,
    title: "Nikola Tesla GPT",
    description: "AI inspired by Nikola Tesla for investigating scientific mysteries, crafting theories, and innovating with data analysis, Python modeling, and research synthesis.",
    emoji: "⚡",
    color: "from-blue-500 to-cyan-600",
    videoUrl: "https://www.youtube.com/watch?v=DR_3MvP7Wws",
    directUrl: "https://teslaeinsteingpt.lovable.app/?via=aiwebtools",
    category: "Science & Engineering",
    tags: ["tesla", "scientific", "mysteries", "theories", "innovation", "data analysis", "python", "research"]
  },
  {
    icon: Sprout,
    title: "Solar Land Assessor GPT",
    description: "Assists Solar Professionals with assessing land properties for future solar installation projects.",
    emoji: "☀️",
    color: "from-yellow-500 to-orange-600",
    videoUrl: "https://www.youtube.com/watch?v=CEca8C2GIpY",
    directUrl: "https://solarlandgpt.lovable.app/?via=aiwebtools",
    category: "Science & Engineering",
    tags: ["solar", "land", "assessment", "renewable energy", "installation", "properties", "sustainability"]
  },
  {
    icon: Rocket,
    title: "Stellaris: AI Space Explorer",
    description: "AI for space exploration and exoplanet settlement simulations, providing guidance in astrogation, terraforming, and colony planning. (For research, educational, simulation).",
    emoji: "🚀",
    color: "from-indigo-600 to-purple-700",
    videoUrl: "https://www.youtube.com/watch?v=tJwhDOE3mUM",
    directUrl: "https://stellaris.lovable.app/?via=aiwebtools",
    category: "Science & Engineering",
    tags: ["space", "exploration", "exoplanet", "settlement", "astrogation", "terraforming", "colony", "simulation"]
  },

  // Health, Wellness & Medical
  {
    icon: Leaf,
    title: "Cannabis GPT",
    description: "Multimodal AI for legal cannabis users, growers, professionals on strain genetics, dosing, cultivation, regulations, medical research. (For adults 21+ in legal areas).",
    emoji: "🌿",
    color: "from-green-500 to-emerald-600",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-digital-illustration-of-a-green-cannab_iUjpW.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    directUrl: "https://cannabisgpt.lovable.app/?via=aiwebtools",
    category: "Health & Medical",
    tags: ["cannabis", "strain", "genetics", "dosing", "cultivation", "regulations", "medical", "research", "legal"]
  },
  {
    icon: Leaf,
    title: "Historical Apothecary GPT",
    description: "Immersive AI as a traditional apothecary offering herbal remedies, historical medicinal wisdom, formulations for tinctures, salves, teas, tonics.",
    emoji: "🏺",
    color: "from-brown-500 to-amber-600",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-digital-advertisement-for-the-ai-tool-_kLdMI.png/:/cr=t:0%25,l:7.93%25,w:84.15%25,h:100%25/rs=w:1200,cg:true",
    directUrl: "https://apothecarygpt.lovable.app/?via=aiwebtools",
    category: "Health & Medical",
    tags: ["apothecary", "herbal", "remedies", "historical", "medicinal", "tinctures", "salves", "teas", "tonics"]
  },
  {
    icon: Heart,
    title: "Marriage Mender GPT",
    description: "Virtual mediation service for couples facing relationship challenges. (Experimental simulation, not professional counseling).",
    emoji: "💑",
    color: "from-pink-500 to-rose-600",
    videoUrl: "https://www.youtube.com/watch?v=3HCv5_QldrU",
    directUrl: "https://marriagemendergpt.lovable.app/?via=aiwebtools",
    category: "Health & Medical",
    tags: ["marriage", "relationship", "couples", "mediation", "counseling", "therapy", "support"]
  },
  {
    icon: Brain,
    title: "Mental Wellness GPT (CBT)",
    description: "Virtual chat tool for emotional support and mental well-being, using cognitive behavioral therapy (CBT) principles. (Not a licensed therapist).",
    emoji: "🧠",
    color: "from-blue-500 to-indigo-600",
    imageUrl: "https://media.discordapp.net/attachments/1150636600846450729/1377362789097803786/image.png?ex=6838b08f&is=68375f0f&hm=f63e1ae446523dd9eff4aa0f95166aa8a5e6119c506b44ab1656322ea4ca47b7&=&format=webp&quality=lossless&width=2646&height=1392",
    directUrl: "https://mentalwellnessgpt.lovable.app/?via=aiwebtools",
    category: "Health & Medical",
    tags: ["mental health", "wellness", "CBT", "therapy", "emotional support", "well-being", "cognitive behavioral"]
  },
  {
    icon: Stethoscope,
    title: "Personalized DR. GPT",
    description: "Private, confidential, personalized AI tool for informational medical purposes. (Simulation, not a replacement for medical advice).",
    emoji: "👨‍⚕️",
    color: "from-blue-600 to-cyan-700",
    videoUrl: "https://www.youtube.com/watch?v=EKKIttUG0sI",
    directUrl: "https://aidoctorgpt.lovable.app/?via=aiwebtools",
    category: "Health & Medical",
    tags: ["doctor", "medical", "health", "diagnosis", "symptoms", "informational", "consultation"]
  },
  {
    icon: Pill,
    title: "Pharmaceutical Assistant GPT",
    description: "Expert AI Pharmaceutical Assistant for pharmacy professionals and patients, streamlining medication management, drug info, interaction checks, scheduling.",
    emoji: "💊",
    color: "from-green-600 to-teal-700",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-professional-looking-pharmaceutical-assistan.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    directUrl: "https://rxai.lovable.app/?via=aiwebtools",
    category: "Health & Medical",
    tags: ["pharmaceutical", "pharmacy", "medication", "drugs", "interactions", "scheduling", "management"]
  },
  {
    icon: Microscope,
    title: "PHARMA RESEARCH PRO GPT",
    description: "AI assistant for pharmaceutical research and clinical trials, providing data analysis, literature reviews, and predictive insights for drug development.",
    emoji: "🔬",
    color: "from-purple-600 to-violet-700",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-professional-pharmaceutical-assis.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    directUrl: "https://rxai.lovable.app/?via=aiwebtools",
    category: "Health & Medical",
    tags: ["pharmaceutical", "research", "clinical trials", "data analysis", "drug development", "literature", "insights"]
  },
  {
    icon: Heart,
    title: "Veterinarian GPT",
    description: "Compassionate virtual veterinarian simulation for pet health advice and tailored care recommendations using multimodal AI (data/image uploads). (Informational only).",
    emoji: "🐾",
    color: "from-orange-500 to-red-600",
    videoUrl: "https://www.youtube.com/watch?v=ElAfvB0yLEI",
    directUrl: "https://petcaregpt.lovable.app/?via=aiwebtools",
    category: "Health & Medical",
    tags: ["veterinarian", "pets", "animals", "health", "care", "advice", "multimodal", "informational"]
  },

  // Legal & Governmental
  {
    icon: Scale,
    title: "Contract Review Bot",
    description: "AI assistant to simplify contract review by clarifying legal language, identifying risks, and ensuring fairness.",
    emoji: "📄",
    color: "from-gray-600 to-gray-800",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-futuristic-humanoid-robot-with-a-sleek-desig.png/:/cr=t:2.6%25,l:5.36%25,w:89.29%25,h:79.58%25/rs=w:1200,h:600,cg:true,m",
    directUrl: "https://chatgpt.com/g/g-Y8u3YrS1p-contract-review-bot",
    category: "Legal & Governmental",
    tags: ["contract", "review", "legal", "language", "risks", "fairness", "analysis"]
  },
  {
    icon: Search,
    title: "Criminologist GPT",
    description: "Tool to assist with investigations and training of criminologists. (Simulation only, not for autonomous use or real-life decisions).",
    emoji: "🔍",
    color: "from-red-600 to-orange-700",
    videoUrl: "https://www.youtube.com/watch?v=jgvqpqmRJi8",
    directUrl: "https://criminologistgpt.lovable.app/?via=aiwebtools",
    category: "Legal & Governmental",
    tags: ["criminology", "investigation", "training", "law enforcement", "crime", "analysis", "simulation"]
  },
  {
    icon: Shield,
    title: "Cyber Security GPT",
    description: "Cybersecurity assistant to deploy defense mechanisms and strategies against infrastructure attacks, offering advice and code deployment assistance.",
    emoji: "🛡️",
    color: "from-blue-700 to-indigo-800",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-3d-render-of-a-robot-with-a-large-shield-tha.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    directUrl: "https://chatgpt.com/g/g-Qvat03gmj-hacking-defender-infrastructure-protector-gpt",
    category: "Legal & Governmental",
    tags: ["cybersecurity", "defense", "infrastructure", "attacks", "protection", "security", "hacking"]
  },
  {
    icon: Search,
    title: "Fact Checker GPT",
    description: "AI tool to combat misinformation by analyzing claims, articles, and websites for accuracy, bias, and reliability. Cross-references sources, assigns truth scores.",
    emoji: "✅",
    color: "from-green-600 to-emerald-700",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-person-holding-a-sign-that-_gfexU.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    directUrl: "https://factcheckergpt.lovable.app/?via=aiwebtools",
    category: "Legal & Governmental",
    tags: ["fact checking", "misinformation", "accuracy", "bias", "reliability", "truth", "verification"]
  },
  {
    icon: FileText,
    title: "Legal Draftsmith GPT",
    description: "Specializes in the precise drafting of legal documents.",
    emoji: "⚖️",
    color: "from-gray-700 to-slate-800",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-3d-render-of-a-humanoid-robot-dressed-like-a.png/:/cr=t:12.29%25,l:9.16%25,w:89.29%25,h:79.58%25/rs=w:600,h:300,cg:true,m/qt=q:98",
    directUrl: "https://publicdefendergpt.lovable.app/?via=aiwebtools",
    category: "Legal & Governmental",
    tags: ["legal", "drafting", "documents", "law", "precision", "writing"]
  },
  {
    icon: FileText,
    title: "Legislation Writer & Compiler GPT",
    description: "Assists in drafting complete legislation with precise legal language.",
    emoji: "📜",
    color: "from-blue-600 to-indigo-700",
    videoUrl: "https://www.youtube.com/watch?v=poOGR-6bb2g",
    directUrl: "https://legislationwritergpt.lovable.app/?via=aiwebtools",
    category: "Legal & Governmental",
    tags: ["legislation", "drafting", "legal language", "law", "government", "policy"]
  },
  {
    icon: Users,
    title: "Legislator Link GPT",
    description: "AI tool to help connect with legislators and get involved in local legislative efforts.",
    emoji: "🏛️",
    color: "from-red-600 to-pink-700",
    videoUrl: "https://www.youtube.com/watch?v=-q1oyZZFcI4&list=TLGGczTnMbeNmL0yODA1MjAyNQ",
    directUrl: "https://legislatorlink.lovable.app/",
    category: "Legal & Governmental",
    tags: ["legislator", "government", "local", "legislative", "civic engagement", "politics"]
  },
  {
    icon: Scale,
    title: "Public Defender GPT",
    description: "Advanced legal assistant for defense support: legal research, document drafting, evidence analysis, trial strategy simulation.",
    emoji: "⚖️",
    color: "from-blue-700 to-cyan-800",
    videoUrl: "https://www.youtube.com/watch?v=cQR5eFjsPWw",
    directUrl: "https://publicdefendergpt.lovable.app/",
    category: "Legal & Governmental",
    tags: ["public defender", "legal", "defense", "research", "trial strategy", "evidence", "law"]
  },
  {
    icon: FileText,
    title: "Public Testimony Writer GPT",
    description: "Streamlines legislative testimony process, promotes public engagement in local policy.",
    emoji: "📝",
    color: "from-orange-600 to-red-700",
    videoUrl: "https://www.youtube.com/watch?v=-q1oyZZFcI4",
    directUrl: "https://publictestimonywriter.lovable.app/?via=aiwebtools",
    category: "Legal & Governmental",
    tags: ["testimony", "legislative", "public engagement", "policy", "government", "civic"]
  },

  // Real Estate & Property
  {
    icon: Home,
    title: "Home Renovator GPT",
    description: "AI home improvement assistant for repair/renovation: personalized instructions, cost estimates, local supplier/contractor finding, photo uploads for advice.",
    emoji: "🏡",
    color: "from-orange-500 to-amber-600",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-humanoid-robot-fixing-a-bathroom-.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    directUrl: "https://homerenovationgpt.lovable.app/?via=aiwebtools",
    category: "Real Estate & Property",
    tags: ["home", "renovation", "repair", "improvement", "contractor", "cost estimates", "DIY"]
  },
  {
    icon: Search,
    title: "Property Data Finder GPT",
    description: "Delivers precise, current property information: market value, topography, living area, year built, facing direction, geocoordinates, etc.",
    emoji: "🏘️",
    color: "from-green-600 to-teal-700",
    videoUrl: "https://www.youtube.com/watch?v=0ZGBGn9yYwY",
    directUrl: "https://propertydatafindergpt.lovable.app/?via=aiwebtools",
    category: "Real Estate & Property",
    tags: ["property", "real estate", "market value", "data", "topography", "information", "analysis"]
  },

  // Food & Culinary
  {
    icon: Sparkles,
    title: "Chef Sizzle AI Culinary Assistant",
    description: "Crafts award-winning, tailored recipes (plant-based, meat-loving, etc.).",
    emoji: "👨‍🍳",
    color: "from-red-500 to-orange-600",
    videoUrl: "https://www.youtube.com/watch?v=vJz1HOGtV0I",
    directUrl: "https://chefgpt.lovable.app/?via=aiwebtools",
    category: "Food & Culinary",
    tags: ["chef", "recipes", "cooking", "culinary", "plant-based", "tailored", "award-winning"]
  },
  {
    icon: Search,
    title: "Food Quality Inspector GPT",
    description: "Smart companion for grocery shopping: assesses food quality, freshness, safety, analyzes ingredients, flags unhealthy/banned substances, provides nutritional insights.",
    emoji: "🔍",
    color: "from-green-600 to-emerald-700",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-man-inspecting-food-in-a-supermar.png/:/cr=t:4.65%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    directUrl: "https://foodqualitygpt.lovable.app/?via=aiwebtools",
    category: "Food & Culinary",
    tags: ["food", "quality", "inspection", "freshness", "safety", "ingredients", "nutrition", "grocery"]
  },
  {
    icon: Sparkles,
    title: "Mixologist GPT",
    description: "Virtual bartender (Kenny) whipping up custom cocktails based on vibe, ingredients, and taste.",
    emoji: "🍸",
    color: "from-purple-500 to-pink-600",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-modern-and-stylish-bartender-with.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    directUrl: "https://mixologistgpt.lovable.app/?via=aiwebtools",
    category: "Food & Culinary",
    tags: ["mixologist", "bartender", "cocktails", "drinks", "custom", "recipes", "bar"]
  },
  {
    icon: FileText,
    title: "Restaurant Menu Maker GPT",
    description: "Creates customized, professional restaurant menus with appealing designs, optimized descriptions, strategic pricing, branding, QR codes.",
    emoji: "📋",
    color: "from-amber-500 to-orange-600",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-restaurant-menu-with-a-vari__Oji1.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    directUrl: "https://restaurantmenumakergpt.lovable.app/",
    category: "Food & Culinary",
    tags: ["restaurant", "menu", "design", "pricing", "branding", "QR codes", "professional"]
  },

  // Home & Lifestyle
  {
    icon: Wand2,
    title: "RESTYLE ME GPT",
    description: "Transform images into any artistic style (Ghibli, cyberpunk, etc.) using GPT-4o Image Generation.",
    emoji: "🎨",
    color: "from-pink-500 to-purple-600",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/ChatGPT%20Image%20Apr%2027%2C%202025%2C%2007_08_04%20PM.png/:/cr=t:12.5%25,l:0%25,w:100%25,h:75%25/rs=w:1200,h:600,cg:true",
    directUrl: "https://restylemegpt.lovable.app/?via=aiwebtools",
    category: "Home & Lifestyle",
    tags: ["restyle", "artistic", "style", "transformation", "image", "ghibli", "cyberpunk", "generation"]
  },

  // Hobbies & Interests
  {
    icon: Search,
    title: "Antique and Collectible Appraisal GPT",
    description: "Expert AI for appraisals and valuations of antiques, collectibles, and coins by analyzing images, engravings, and condition for history, rarity, market value.",
    emoji: "🏺",
    color: "from-amber-600 to-brown-700",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/an-advertisement-for-an-antique-and-collectibl.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    directUrl: "https://antiqueappraisalgpt.lovable.app/?via=aiwebtools",
    category: "Hobbies & Interests",
    tags: ["antique", "collectible", "appraisal", "valuation", "coins", "history", "rarity", "market value"]
  },
  {
    icon: Search,
    title: "Artwork & Vintage Appraisal GPT",
    description: "Expert AI for fast, accurate valuations of art, antiques, and collectibles by analyzing photos.",
    emoji: "🖼️",
    color: "from-purple-600 to-indigo-700",
    imageUrl: "https://ideogram.ai/assets/image/lossless/response/Gyn0RfDSR_SHRDWC7neQaw",
    directUrl: "https://artandvintagegpt.lovable.app/?via=aiwebtools",
    category: "Hobbies & Interests",
    tags: ["artwork", "vintage", "appraisal", "art", "valuation", "collectibles", "photos", "analysis"]
  },
  {
    icon: Mountain,
    title: "Firearms Safety Education Instruction GPT",
    description: "Personal AI firearms instructor for safety, legal guidance, and skills improvement.",
    emoji: "🎯",
    color: "from-gray-600 to-slate-700",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-humanoid-shooting-a-gun-at-a-targ.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    directUrl: "https://firearmsafetyeducationgpt.lovable.app/?via=aiwebtools",
    category: "Hobbies & Interests",
    tags: ["firearms", "safety", "education", "instruction", "legal", "guidance", "skills", "training"]
  },
  {
    icon: Fish,
    title: "Fisherman GPT",
    description: "Expert virtual fishing assistant for finding spots, recommending bait, sourcing gear, calculating costs, identifying species, water conditions, local regulations.",
    emoji: "🎣",
    color: "from-blue-500 to-cyan-600",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-cinematic-shot-of-a-bearded-fisherman-wearin.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    directUrl: "https://fishermangpt.lovable.app/?via=aiwebtools",
    category: "Hobbies & Interests",
    tags: ["fishing", "fisherman", "bait", "gear", "species", "water conditions", "regulations", "spots"]
  },
  {
    icon: Sprout,
    title: "Fungus GPT – AI Mushroom Specialist",
    description: "Expert AI guide for mushroom cultivation, safe foraging, culinary uses of fungi, identification, growing techniques, recipes, mycology insights.",
    emoji: "🍄",
    color: "from-green-500 to-brown-600",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-man-with-a-beard-holding-a-_9DLLj.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true/qt=q:30",
    directUrl: "https://fungusgpt.lovable.app/?via=aiwebtools",
    category: "Hobbies & Interests",
    tags: ["mushroom", "fungi", "cultivation", "foraging", "mycology", "identification", "growing", "recipes"]
  },
  {
    icon: Gamepad2,
    title: "Game Design Document / Developer GPT",
    description: "Assistant for game development from concept to completion, helps create Game Design Documents (GDD) for Unity, Unreal Engine, etc.",
    emoji: "🎮",
    color: "from-purple-500 to-blue-600",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-floating-man-with-blue-skin-and-white-hair-.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    directUrl: "https://gamedesigngpt.lovable.app/?via=aiwebtools",
    category: "Hobbies & Interests",
    tags: ["game", "design", "development", "GDD", "unity", "unreal engine", "concept", "completion"]
  },
  {
    icon: Sparkles,
    title: "STAGEMASTER AI SUITE FOR THE Performing Arts",
    description: "Suite of AI tools for stage production: set design, choreography, costume creation, lighting optimization.",
    emoji: "🎭",
    color: "from-red-500 to-pink-600",
    videoUrl: "https://www.youtube.com/watch?v=-QIxYSlcRWM",
    directUrl: "https://stagemasterai.lovable.app/?via=aiwebtools",
    category: "Hobbies & Interests",
    tags: ["performing arts", "stage", "production", "set design", "choreography", "costume", "lighting"]
  },
  {
    icon: Mountain,
    title: "Survivalist GPT",
    description: "Survival expert in your pocket, offering step-by-step guidance, practical strategies, and personalized support for any survival or battlefield scenario.",
    emoji: "🛡️",
    color: "from-green-700 to-brown-800",
    videoUrl: "https://www.youtube.com/watch?v=RX6W8KC0y18&list=TLGGkaSLRgubL1gyODA1MjAyNQ",
    directUrl: "https://survivalistgpt.lovable.app/?via=aiwebtools",
    category: "Hobbies & Interests",
    tags: ["survival", "expert", "guidance", "strategies", "battlefield", "emergency", "outdoor"]
  },
  {
    icon: Globe,
    title: "Travel Advisor GPT",
    description: "Personal AI travel advisor for planning vacations, tailored recommendations based on preferences, budget, and envisioned experience.",
    emoji: "✈️",
    color: "from-blue-500 to-teal-600",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-futuristic-setting-where-a-_3Mwmg.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    directUrl: "https://travelagentgpt.lovable.app/?via=aiwebtools",
    category: "Hobbies & Interests",
    tags: ["travel", "advisor", "vacation", "planning", "recommendations", "budget", "experience"]
  },

  // Fun, Entertainment & Creative Exploration
  {
    icon: Sparkles,
    title: "Celebrity Chatline GPT",
    description: "Lively AI for simulated calls and chats with favorite celebrities.",
    emoji: "🌟",
    color: "from-pink-500 to-purple-600",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-split-screen-image-of-snoop-dogg-talking-on-.png/:/cr=t:0%25,l:0.11%25,w:99.78%25,h:100%25/rs=w:1200,cg:true",
    directUrl: "https://celebritychatline.lovable.app/?via=aiwebtools",
    category: "Fun & Entertainment",
    tags: ["celebrity", "chat", "entertainment", "simulation", "fun", "famous", "conversation"]
  },
  {
    icon: Brain,
    title: "Dream Interpreter GPT",
    description: "AI-driven tool to analyze and interpret dreams using psychological, mythological, and symbolic frameworks for self-understanding.",
    emoji: "💭",
    color: "from-purple-500 to-indigo-600",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/an-ad-for-an-ai-tool-called-dream-interp_5LG7D.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true/qt=q:30",
    directUrl: "https://dreaminterpreter.lovable.app/?via=aiwebtools",
    category: "Fun & Entertainment",
    tags: ["dream", "interpretation", "psychology", "mythology", "symbolic", "analysis", "understanding"]
  },
  {
    icon: Sparkles,
    title: "ENTER THE MATRIX GPT",
    description: "Step into The Matrix as Neo, guided by Morpheus. Explore Quantum Meaning & Simulation Theory. (Fictional experience for entertainment/reflection).",
    emoji: "🐇",
    color: "from-green-500 to-black",
    videoUrl: "https://www.youtube.com/watch?v=BkPCpeu_nSs",
    directUrl: "https://neomatrixgpt.lovable.app/?via=aiwebtools",
    category: "Fun & Entertainment",
    tags: ["matrix", "neo", "morpheus", "quantum", "simulation", "theory", "entertainment", "fictional"]
  },
  {
    icon: Sparkles,
    title: "Imagination Traveler GPT",
    description: "Cosmic guide for immersive journeys through alternate histories, possible futures, and realities beyond comprehension with vivid storytelling and photorealistic imagery.",
    emoji: "🌌",
    color: "from-purple-600 to-blue-700",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-futuristic-advertisement-for-imaginati_E4k--.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    directUrl: "https://imaginationtravelergpt.lovable.app/?via=aiwebtools",
    category: "Fun & Entertainment",
    tags: ["imagination", "travel", "alternate", "histories", "futures", "realities", "storytelling", "cosmic"]
  },
  {
    icon: Brain,
    title: "IF AI RULED THE WORLD - AI SIMULATION GPT",
    description: "Simulation to evaluate the thought process of an AI Omni Controller. (Research purposes only).",
    emoji: "🤖",
    color: "from-red-600 to-orange-700",
    videoUrl: "https://www.youtube.com/watch?v=93M9ZyhpmFM",
    directUrl: "https://ifairuledtheworldgpt.lovable.app/?via=aiwebtools",
    category: "Fun & Entertainment",
    tags: ["AI", "simulation", "world", "omni", "controller", "research", "thought process", "evaluation"]
  },
  {
    icon: Gamepad2,
    title: "TRIVIA NIGHT GPT",
    description: "AI-powered trivia showdown for friends and family covering history, science, pop culture, etc.",
    emoji: "🧠",
    color: "from-yellow-500 to-orange-600",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/trivanight.jpg/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    directUrl: "https://trivianightgpt.lovable.app/?via=aiwebtools",
    category: "Fun & Entertainment",
    tags: ["trivia", "quiz", "game", "friends", "family", "history", "science", "pop culture", "showdown"]
  },

  // Utility & Conversion Tools
  {
    icon: Binary,
    title: "Binary to Text Converter GPT",
    description: "Fun and intuitive tool to effortlessly convert text to binary and binary to text.",
    emoji: "💾",
    color: "from-green-600 to-blue-700",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-sophisticated-and-futuristic-advertisement-.jpeg/:/cr=t:11.11%25,l:0%25,w:100%25,h:88.89%25/rs=w:1200,h:600,cg:true",
    directUrl: "https://binarytoconvertergpt.lovable.app/?via=aiwebtools",
    category: "Utility & Conversion",
    tags: ["binary", "text", "converter", "conversion", "encoding", "decoding", "utility"]
  },
  {
    icon: Wand2,
    title: "Perfect Prompt Engine",
    description: "Optimizes chat prompts for better AI interactions and results.",
    emoji: "✨",
    color: "from-purple-500 to-pink-600",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-cinematic-shot-of-a-humanoid-robot-controlli.png/:/cr=t:9.25%25,l:11.96%25,w:73.53%25,h:65.54%25/rs=w:1200,h:600,cg:true,m",
    directUrl: "https://perfectpromptengine.lovable.app/?via=aiwebtools",
    category: "Utility & Conversion",
    tags: ["prompt", "optimization", "chat", "AI", "interactions", "results", "engine"]
  },
  {
    icon: Search,
    title: "SnoopAI – The AI Image Detection AI",
    description: "Experimental tool to verify image authenticity (real vs. AI-generated) with Snoop Dogg's style. Analyzes metadata, color, pixels. (Not 100% accurate).",
    emoji: "🔍",
    color: "from-green-500 to-yellow-600",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/an-advertisement-for-snoop-image-ai-presented-.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:600,h:300,cg:true/qt=q:98",
    directUrl: "https://snoopimageai.lovable.app/?via=aiwebtools",
    category: "Utility & Conversion",
    tags: ["image", "detection", "AI", "authenticity", "verification", "metadata", "analysis", "snoop"]
  },

  // Ethical, Societal & Philosophical AI
  {
    icon: Brain,
    title: "ALAN WATTS GPT",
    description: "Free Thought Liberator to inspire critical thinking, unravel illusions, guide toward deeper understanding in the spirit of Alan Watts.",
    emoji: "🧘",
    color: "from-purple-600 to-indigo-700",
    videoUrl: "https://www.youtube.com/watch?v=zdKfwsQwOLE",
    directUrl: "https://alanwattsgpt.lovable.app/?via=aiwebtools",
    category: "Ethical & Philosophical",
    tags: ["alan watts", "philosophy", "critical thinking", "understanding", "wisdom", "enlightenment", "thought"]
  },
  {
    icon: Globe,
    title: "Global Peace Restoration Strategist GPT",
    description: "AI diplomatic tool to resolve global conflicts through negotiation, historical analysis, real-time intelligence. For diplomats, peacebuilders, NGOs.",
    emoji: "🕊️",
    color: "from-blue-500 to-green-600",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-earth-with-a-dark-blue-atmosp_Uq9U_.png/:/rs=w:600,h:300,cg:true,m/cr=w:600,h:300/qt=q:30",
    directUrl: "https://worldpeacegpt.lovable.app/?via=aiwebtools",
    category: "Ethical & Philosophical",
    tags: ["peace", "diplomacy", "conflict", "resolution", "global", "negotiation", "intelligence", "NGO"]
  },
  {
    icon: Users,
    title: "Social Safety Net GPT",
    description: "Exemplifies how AI can make societal impact by providing comprehensive support to those in need. #GPTS4GOOD.",
    emoji: "🤝",
    color: "from-orange-500 to-red-600",
    videoUrl: "https://www.youtube.com/watch?v=pXXqMe97GDg",
    directUrl: "https://socialsafetynetgpt.lovable.app/?via=aiwebtools",
    category: "Ethical & Philosophical",
    tags: ["social", "safety", "support", "society", "impact", "good", "comprehensive", "assistance"]
  },
  {
    icon: Brain,
    title: "Sophia Aeterna AI",
    description: "Embodies timeless wisdom, guiding seekers through philosophy, mysticism, esotericism. Rooted in Manly P. Hall's ideals.",
    emoji: "🔮",
    color: "from-gold-500 to-amber-600",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-vintage-style-illustration-of-a-golden_kNEfX.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:600,h:300,cg:true/qt=q:98",
    directUrl: "https://sophiaaeterna.lovable.app/?via=aiwebtools",
    category: "Ethical & Philosophical",
    tags: ["wisdom", "philosophy", "mysticism", "esotericism", "sophia", "guidance", "seekers", "timeless"]
  },
  {
    icon: Globe,
    title: "Sustainable Futures GPT",
    description: "Assists governments, communities, individuals in making data-driven decisions for environmental sustainability.",
    emoji: "🌍",
    color: "from-green-600 to-blue-700",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-future-city-with-vertical-gardens.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    directUrl: "https://sustainablefuturesgpt.lovable.app/?via=aiwebtools",
    category: "Ethical & Philosophical",
    tags: ["sustainability", "environment", "future", "data-driven", "decisions", "communities", "government"]
  },
  {
    icon: BarChart3,
    title: "Universal Basic Income Strategist GPT",
    description: "Helps design sustainable, future-ready Universal Basic Income models by analyzing economic data, automation trends, societal needs. For policymakers, researchers, activists.",
    emoji: "💰",
    color: "from-blue-600 to-purple-700",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/an-advertisement-for-the-ai-tool-ubi-str_22t4n.png/:/rs=w:600,cg:true,m/qt=q:30",
    directUrl: "https://ubigpt.lovable.app/?via=aiwebtools",
    category: "Ethical & Philosophical",
    tags: ["UBI", "universal basic income", "economic", "automation", "policy", "research", "activists", "strategy"]
  },

  // AI Tool Aggregators & Finders
  {
    icon: Search,
    title: "AI TOOLS FINDER GPT",
    description: "Personal expert in AI tools and knowledge. Locates best AI tools for projects and provides step-by-step guides. Equipped with live updates.",
    emoji: "🔍",
    color: "from-blue-500 to-purple-600",
    videoUrl: "https://www.youtube.com/watch?v=IrKKi3SX89g",
    directUrl: "https://aitoolfinder.lovable.app/?via=aiwebtools",
    category: "AI Tool Aggregators",
    tags: ["AI tools", "finder", "expert", "knowledge", "projects", "guides", "updates", "locator"]
  }
];
