import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { createTimePortalEffect } from "@/utils/timeEffects";
import { useNavigate } from "react-router-dom";
import GlobalSearchBar from "@/components/GlobalSearchBar";
import { FavoritesButton } from "@/components/favorites/FavoritesButton";
import { Tool } from "@/types/tools";

// =============================================================================
// OUR FEATURED SECTION - Portfolio showcase of AI Web Tools GPTs
// This displays ONLY our AI Web Tools GPTs (our creations) - especially those with videos/images
// bolt.new and gemini remain searchable in database but not featured here (not our designs)
// =============================================================================

const featuredGPTs = [
  {
    title: "🎭 Playwriter GPT",
    description: "Craft professional, fully structured theatrical plays from start to finish. Create original, engaging plays designed to captivate audiences with dramatic structure and character development.",
    badge: "THEATER",
    color: "from-red-500 to-purple-600",
    features: ["Play Writing", "Drama Structure", "Character Development", "Theatrical Formatting"],
    directUrl: "https://playwritergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=KKldzg40wEI&list=TLGGGcedR_qZHHYyODA1MjAyNQ",
    emoji: "🎭"
  },
  {
    title: ".WorldPeace Web3 Registration",
    description: "Buy and own your .worldpeace domain as a tradable NFT minted to your wallet of choice. Resell it, link it to your website, and send/receive crypto with a human-readable address. Compatible with Phantom, Coinbase Wallet, MetaMask, and more.",
    badge: "WEB3 DOMAIN",
    color: "from-emerald-500 to-teal-600",
    features: ["Premium Web3 TLD", "Blockchain Ownership", "Brand Protection", "Global Peace"],
    directUrl: "https://freename.io/discover/worldpeace?ref=olive-ears-obey",
    videoUrl: "https://youtu.be/bAz1Kq2KDys?si=buJRzC9aTuCWatOY",
    blockchain: "Polygon",
    emoji: "🕊️"
  },
  {
    title: ".WorldTrade Web3 Registration",
    description: "Buy and own your .worldtrade domain as a tradable NFT minted to your wallet of choice. Resell it, link it to your website, and send/receive crypto with a human-readable address. Compatible with Phantom, Coinbase Wallet, MetaMask, and more.",
    badge: "WEB3 DOMAIN",
    color: "from-cyan-500 to-blue-600",
    features: ["Premium Web3 TLD", "Blockchain Ownership", "Brand Protection", "Global Commerce"],
    directUrl: "https://freename.io/discover/worldtrade?ref=olive-ears-obey",
    videoUrl: "https://youtu.be/Taw41ee9bO8?si=1160QePNZgd6Yfvc",
    blockchain: "Solana",
    emoji: "🌐"
  },
  {
    title: "Farm Finder & Barter GPT",
    description: "Find local farms to support sustainability and local food systems. Assists with bartering, digital currency conversions, farm evaluations, and local sustainability planning for economic resilience and food security.",
    badge: "AGRICULTURE",
    color: "from-green-600 to-amber-600",
    features: ["Local Farms", "Bartering", "Food Security", "Economic Resilience"],
    directUrl: "https://chatgpt.com/g/g-68d6c0b6cecc8191b38e0d9cf099769d-farm-finder-gpt",
    videoUrl: "https://youtu.be/DHVwaf7qMDY",
    emoji: "🚜"
  },
  {
    title: "ALAN WATTS GPT",
    description: "Your Free Thought Liberator, designed to inspire critical thinking, unravel illusions, and guide you toward deeper understanding. With the spirit of Alan Watts, explore philosophical, scientific, and cultural questions.",
    badge: "PHILOSOPHY",
    color: "from-purple-500 to-orange-500",
    features: ["Philosophy", "Critical Thinking", "Wisdom", "Consciousness"],
    directUrl: "https://alanwattsgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=zdKfwsQwOLE",
    emoji: "🧘"
  },
  {
    title: "Albert Einstein GPT",
    description: "Advanced AI embodiment of Einstein's intellect, designed to challenge conventional wisdom, foster deep critical thinking, and explore mysteries of physics and mathematics.",
    badge: "PHYSICS",
    color: "from-blue-600 to-purple-600",
    features: ["Physics", "Mathematics", "Critical Thinking", "Scientific Inquiry"],
    directUrl: "https://teslaeinsteingpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=kfGyOfjBI0s",
    emoji: "🧠"
  },
  {
    title: "Alchemist Scientist GPT",
    description: "Mystical science advisor combining ancient alchemy with modern chemistry, providing unique insights into materials, transformations, and scientific mysteries.",
    badge: "SCIENCE",
    color: "from-purple-600 to-amber-600",
    features: ["Alchemy Science", "Material Analysis", "Chemical Insights", "Scientific Mysteries"],
    directUrl: "https://alchemicalscientistgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/3JbmudJu9LM?si=lKMxbzq0a5XgKLAW",
    emoji: "⚗️"
  },
  {
    title: "Algebraic Expression Creative Inventor GPT",
    description: "Mathematical creativity tool for generating unique algebraic expressions, solving complex equations, and exploring mathematical patterns.",
    badge: "MATHEMATICS",
    color: "from-indigo-500 to-purple-600",
    features: ["Expression Generation", "Equation Solving", "Pattern Analysis", "Mathematical Creativity"],
    directUrl: "https://algebraicexpressioninventor.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/aFuAxVNXBvg",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-captivating-futuristic-advertisement-for-alg.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    emoji: "🔢"
  },
  {
    title: "Ancient Gematria Scan GPT",
    description: "Ancient Gematria Scan GPT is a specialized AI tool that decodes the hidden numerical meanings within words, names, and phrases using ancient gematria systems. By analyzing Hebrew, Greek, and other sacred number systems, it reveals the mystical connections and deeper significance encoded in language.",
    badge: "SACRED NUMEROLOGY",
    color: "from-amber-500 to-yellow-600",
    features: ["Gematria Decoding", "Sacred Geometry", "Number Analysis", "Ancient Wisdom"],
    directUrl: "https://chatgpt.com/g/g-68a24b677890819181b9e47f4d1dd006-ancient-gematria-scan-gpt",
    videoUrl: "https://youtu.be/LFMtWqoKqyI",
    imageUrl: "/images/gematria-gpt.png",
    emoji: "🔢"
  },
  {
    title: "AUTOMOBILE GPT",
    description: "Automobile GPT is your ultimate, all-encompassing AI automotive expert, designed to guide you through every aspect of the automotive world with precision. Whether you're searching for the best deals at local dealerships, need detailed repair cost assessments, or seek expert advice.",
    badge: "AUTOMOTIVE",
    color: "from-blue-500 to-cyan-600",
    features: ["Car Maintenance", "Repair Diagnostics", "Buying Guides", "Auto Technology"],
    directUrl: "https://automobilegpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=f_4aFnL-mk8",
    imageUrl: "https://media.discordapp.net/attachments/1150636600846450729/1377298792986185759/automobile.webp",
    emoji: "🚗"
  },
  {
    title: "BOOK WRITER GPT",
    description: "Book Writer GPT assists you in creating professional, well-structured books with seamless page-to-page continuity, engaging dialogue, and captivating storytelling for authors and writers.",
    badge: "WRITING SUITE",
    color: "from-blue-600 to-purple-600",
    features: ["Book Writing", "Story Structure", "Character Development", "Professional Formatting"],
    directUrl: "https://bookwritergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=xNQi8wuM3DQ",
    imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=200&fit=crop",
    emoji: "📚"
  },
  {
    title: "Business Plan Generator GPT",
    description: "Professional business plan creation tool with comprehensive templates, financial modeling, market analysis, and strategic planning guidance.",
    badge: "BUSINESS",
    color: "from-blue-600 to-purple-600",
    features: ["Business Planning", "Financial Modeling", "Market Analysis", "Strategic Planning"],
    directUrl: "https://businessplanandtrainai.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-logo-design-with-the-text-business-plan-gene.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true/qt=q:30",
    emoji: "💼"
  },
  {
    title: "Cannabis GPT",
    description: "Comprehensive cannabis education covering cultivation, strains, medical applications, legal information, and industry insights for enthusiasts and professionals.",
    badge: "CANNABIS",
    color: "from-green-500 to-lime-600",
    features: ["Cultivation Guide", "Strain Information", "Medical Applications", "Legal Guidance"],
    directUrl: "https://cannabisgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://vimeo.com/1132373393",
    emoji: "🌿"
  },
  {
    title: "Children's Picture Book Maker GPT",
    description: "Create magical picture books for children with AI-powered storytelling that brings your stories to life with vibrant illustrations and engaging narratives.",
    badge: "CHILDREN'S BOOKS",
    color: "from-green-500 to-blue-600",
    features: ["Storytelling", "Illustrations", "Creative Writing", "Educational Content"],
    directUrl: "https://childrensbookmaker.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=MryAyvg_N0U",
    emoji: "📚"
  },
  {
    title: "Clarity Omni GPT",
    description: "Clarity Omni GPT is an AI tool designed to rewrite text for improved clarity while preserving the original meaning and intent. It ensures that every detail is retained, delivering a refined version of the text.",
    badge: "CLARITY",
    color: "from-purple-500 to-indigo-600",
    features: ["Text Clarity", "Meaning Preservation", "Content Refinement", "Writing Enhancement"],
    directUrl: "https://clarityomni.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-futuristic-scene-of-an-ai-agent-with-a-halo.jpeg/:/cr=t:2.83%25,l:2.83%25,w:94.34%25,h:94.34%25/rs=w:1200,cg:true,m",
    emoji: "🔮"
  },
  {
    title: "COLLECTIBLES APPRAISAL GPT",
    description: "Professional collectibles and antiques appraisal service providing market valuations, authenticity verification, and investment guidance.",
    badge: "APPRAISAL",
    color: "from-amber-500 to-yellow-600",
    features: ["Market Valuation", "Authenticity Check", "Investment Guide", "Market Trends"],
    directUrl: "https://antiqueappraisalgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/azHoiefssJw",
    imageUrl: "https://media.discordapp.net/attachments/1150636600846450729/1377298536781185136/collectible.webp",
    emoji: "💎"
  },
  {
    title: "COLLEGE DEGREE GPT",
    description: "College Degree GPT teaches you every college class for any degree you desire, mirroring the exact structure of your chosen institution or university. While it doesn't provide an accredited degree, it delivers a full, in-depth educational experience.",
    badge: "EDUCATION",
    color: "from-blue-600 to-indigo-600",
    features: ["Degree Planning", "Course Selection", "Career Pathways", "Academic Success"],
    directUrl: "https://college-degree-gpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=Cd8uvD-smlM",
    imageUrl: "https://cdn.discordapp.com/attachments/1150636600846450729/1377298792230944880/college.webp",
    emoji: "🎓"
  },
  {
    title: "Criminologist GPT",
    description: "A tool to assist with investigations and training of criminologists. This tool is designed solely to assist human investigators by analyzing evidence and providing insights in collaboration with law enforcement.",
    badge: "INVESTIGATION",
    color: "from-red-600 to-gray-600",
    features: ["Crime Analysis", "Evidence Review", "Investigation Support", "Forensic Insights"],
    directUrl: "https://criminologistgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/iQzgCq-mmtE?si=ma_Vpvvh3ZJQXPhW",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop",
    emoji: "🔍"
  },
  {
    title: "Customizable GPT Maker",
    description: "Customizable AI that transforms into any GPT you imagine, excelling in data analysis, live web data retrieval, and visualizations for precise task completion.",
    badge: "AI DEVELOPMENT",
    color: "from-cyan-500 to-blue-600",
    features: ["Custom AI", "Data Analysis", "Web Retrieval", "Visualization"],
    directUrl: "https://customgptmaker.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=SmBXfGqXfco",
    emoji: "🛠️"
  },
  {
    title: "Data Research Analysis Report GPT",
    description: "Revolutionary tool that transforms complex datasets into actionable insights with advanced statistical methods, trend identification, and predictive modeling for informed decision-making.",
    badge: "DATA SCIENCE",
    color: "from-blue-600 to-purple-600",
    features: ["Data Analysis", "Research Reports", "Statistical Methods", "Predictive Insights"],
    directUrl: "https://dataanalysisandreportai.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=idxjOwUAD_I",
    emoji: "📊"
  },
  {
    title: "Drill Baby Drill AI Suite",
    description: "Cutting-edge collection of 10 specialized AI tools designed to optimize every aspect of oil and gas operations, from exploration to drilling, safety, and compliance.",
    badge: "OIL & GAS",
    color: "from-orange-500 to-black",
    features: ["Oil & Gas Operations", "Drilling Optimization", "Safety Compliance", "Energy Management"],
    directUrl: "https://drillbabydrillaisuite.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-cartoon-illustration-of-a-man-with-a-h_lmQ_X.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:600,h:300,cg:true/qt=q:30",
    emoji: "🛢️"
  },
  {
    title: "Engineering GPT Suite",
    description: "Comprehensive engineering solutions covering mechanical, electrical, civil, and software engineering with professional-grade calculations and designs.",
    badge: "ENGINEERING",
    color: "from-gray-600 to-blue-600",
    features: ["Multi-Engineering", "Calculations", "Design Solutions", "Technical Analysis"],
    directUrl: "https://engineeringgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/kDyI8A2xBe8?si=17__oTLSE7HbbApB",
    emoji: "⚙️"
  },
  {
    title: "FACT CHECKER GPT",
    description: "Advanced fact-checking system for verifying information, analyzing claims, detecting misinformation, and providing evidence-based validation.",
    badge: "VERIFICATION",
    color: "from-green-500 to-blue-600",
    features: ["Fact Verification", "Claim Analysis", "Misinformation Detection", "Evidence Validation"],
    directUrl: "https://factcheckergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/tCnwnD_Rak0?si=fQwRswX5r2quP3Hk",
    imageUrl: "https://cdn.discordapp.com/attachments/1150636600846450729/1377298676611022848/factchecker.webp",
    emoji: "✅"
  },
  {
    title: "Firefighter GPT",
    description: "Premier AI ally in wildfire management with real-time data and predictive analytics for precise, actionable guidance to effectively master and extinguish fires.",
    badge: "FIRE SAFETY",
    color: "from-red-500 to-orange-600",
    features: ["Wildfire Management", "Predictive Analytics", "Fire Strategy", "Safety Guidance"],
    directUrl: "https://firefightergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/kDu2SSP9Glw",
    emoji: "🚒"
  },
  {
    title: "FISHERMAN GPT",
    description: "Complete fishing guide covering techniques, equipment, locations, weather patterns, and fishing regulations for anglers of all skill levels.",
    badge: "OUTDOOR SPORTS",
    color: "from-blue-500 to-cyan-600",
    features: ["Fishing Techniques", "Equipment Guide", "Location Finder", "Weather Analysis"],
    directUrl: "https://fishermangpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-cinematic-shot-of-a-bearded-fisherman-wearin.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    emoji: "🎣"
  },
  {
    title: "Fitness Trainer GPT",
    description: "Fitness Trainer GPT is your dedicated AI personal trainer providing customized workout routines, exercise form correction, and comprehensive fitness guidance. Whether you're a beginner or advanced athlete, get personalized training programs and expert advice.",
    badge: "FITNESS",
    color: "from-blue-500 to-green-600",
    features: ["Workout Routines", "Exercise Form", "Strength Training", "Fitness Coaching"],
    directUrl: "https://chatgpt.com/g/g-68afaae3f8e881918d8b84b7ca85a413-fitness-coach/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=eHInYKxyKm4",
    emoji: "🏋️"
  },
  {
    title: "FOOD QUALITY INSPECTOR GPT",
    description: "Professional food safety and quality inspection guidance covering food safety standards, quality control, inspection procedures, and regulatory compliance.",
    badge: "FOOD SAFETY",
    color: "from-green-500 to-teal-600",
    features: ["Food Safety", "Quality Control", "Inspection Procedures", "Regulatory Compliance"],
    directUrl: "https://foodqualitygpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/rHJR4V8iYZI?si=nkXT-PNl8abQDHWE",
    imageUrl: "https://cdn.discordapp.com/attachments/1150636600846450729/1377298675285626880/foodquality.webp",
    emoji: "🥘"
  },
  {
    title: "FORTUNE TELLER GPT",
    description: "Mystical fortune telling assistant providing tarot readings, astrology insights, numerology analysis, and spiritual guidance for personal enlightenment.",
    badge: "MYSTICAL",
    color: "from-purple-600 to-pink-600",
    features: ["Tarot Readings", "Astrology", "Numerology", "Spiritual Guidance"],
    directUrl: "https://fortunetellergpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/an-advertisement-for-fortune-teller-gpt-_kRpji.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    emoji: "🔮"
  },
  {
    title: "Fungus GPT – AI Mushroom Specialist",
    description: "Expert mycology guidance covering mushroom identification, cultivation, foraging safety, and fungal biology for enthusiasts and professionals.",
    badge: "MYCOLOGY",
    color: "from-green-600 to-brown-600",
    features: ["Mushroom ID", "Cultivation", "Foraging Safety", "Fungal Biology"],
    directUrl: "https://fungusgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-man-with-a-beard-holding-a-_9DLLj.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true/qt=q:30",
    emoji: "🍄"
  },
  {
    title: "Geology & Rock Identification GPT",
    description: "Geology & Rock Identification GPT is your expert AI companion for geological exploration and rock identification. This specialized tool helps geologists, students, and enthusiasts identify minerals, rocks, and geological formations through detailed analysis and visual examination.",
    badge: "GEOLOGY",
    color: "from-amber-500 to-orange-600",
    features: ["Rock Identification", "Mineral Analysis", "Geological Formations", "Field Guide"],
    directUrl: "https://chatgpt.com/g/g-689005f62df881918961b6c93ad5b19e-geology-rock-identification-gpt",
    videoUrl: "https://youtu.be/nmRT6AOVQNg?si=bacR1az2vDwLr5H",
    emoji: "🪨"
  },
  {
    title: "GODMODE GPT",
    description: "Imagine having an AI companion so powerful and versatile that it seamlessly transforms to meet every need you have—introducing GodMode GPT, your ultimate AI transformation tool.",
    badge: "AI POWER",
    color: "from-purple-600 to-gold-600",
    features: ["Ultimate AI", "Versatile Transform", "Multi-Purpose", "Power Mode"],
    directUrl: "https://godmodegpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/7U_QmnDQIyE",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=200&fit=crop",
    emoji: "⚡"
  },
  {
    title: "GRAPHIC & COVER DESIGN GPT",
    description: "Professional graphic design assistant for creating stunning covers, logos, marketing materials, and visual content with artistic expertise.",
    badge: "DESIGN",
    color: "from-pink-500 to-purple-600",
    features: ["Cover Design", "Logo Creation", "Marketing Materials", "Visual Content"],
    directUrl: "https://graphicdesigngpt.lovable.app/?via=aiwebtools",
    imageUrl: "/lovable-uploads/e6d2f727-a376-43a3-850b-fd2606230975.png",
    emoji: "🎨"
  },
  {
    title: "Grant Writer GPT",
    description: "Expert AI-powered partner for crafting compelling, funder-ready grant proposals that maximize your chances of securing funding for nonprofits and research institutions.",
    badge: "FUNDING",
    color: "from-green-500 to-blue-600",
    features: ["Grant Writing", "Funding Proposals", "Nonprofit Support", "Research Grants"],
    directUrl: "https://grantwritergpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-digital-illustration-of-an-advertiseme_7T7dn.png/:/cr=t:10.87%25,l:0%25,w:100%25,h:89.13%25/rs=w:600,h:300,cg:true/qt=q:30",
    emoji: "💰"
  },
  {
    title: "Historical Headlines GPT",
    description: "Time-traveling news service providing historical headlines, period-accurate reporting, and immersive historical news experiences.",
    badge: "HISTORY",
    color: "from-amber-600 to-red-600",
    features: ["Historical Headlines", "Period Reporting", "News Archives", "Historical Context"],
    directUrl: "https://historical-headlines-time-traveler.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/1y3zdPnJfQ4",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/an-advertisement-for-historical-headline_1Ll1g.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    emoji: "📰"
  },
  {
    title: "HOME RENOVATOR GPT",
    description: "Expert home renovation guidance covering project planning, material selection, cost estimation, and DIY renovation tips for homeowners and contractors.",
    badge: "HOME IMPROVEMENT",
    color: "from-yellow-500 to-orange-600",
    features: ["Project Planning", "Material Selection", "Cost Estimation", "DIY Tips"],
    directUrl: "https://homerenovationgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-humanoid-robot-fixing-a-bathroom-.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    emoji: "🔧"
  },
  {
    title: "Illuminous World Data Explorer GPT",
    description: "Illuminous specializes in data analysis and global data retrieval, designed to make accurate predictions about anything. This GPT offers real-time global data analysis, creating stunning infographics to turn complex information into clear insights.",
    badge: "DATA ANALYSIS",
    color: "from-cyan-500 to-blue-600",
    features: ["Data Analysis", "Global Predictions", "Infographics", "Real-time Data"],
    directUrl: "https://illuminous.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=Nd1Ui2-VLMU",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop",
    emoji: "💡"
  },
  {
    title: "Imagination Traveler GPT",
    description: "Creative journey assistant for exploring imaginary worlds, building fictional universes, and enhancing creative storytelling and world-building.",
    badge: "CREATIVITY",
    color: "from-purple-500 to-pink-600",
    features: ["World Building", "Creative Stories", "Fictional Universes", "Imagination Enhancement"],
    directUrl: "https://imaginationtravelergpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-futuristic-advertisement-for-imaginati_E4k--.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    emoji: "🚀"
  },
  {
    title: "ImmortalizeME™",
    description: "ImmortalizeMe™ creates fully interactive digital clones of individuals using their voice, personality, and life stories. Your digital twin can engage in real-time voice conversations and reflect your unique mannerisms and memories.",
    badge: "DIGITAL LEGACY",
    color: "from-cyan-500 to-blue-600",
    features: ["Voice Cloning", "Personality AI", "Memory Integration", "Real-time Conversations"],
    directUrl: "https://immortalizeme.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=JXLqPMfw49Y",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=200&fit=crop",
    emoji: "♾️"
  },
  {
    title: "Indiana Archeologist GPT",
    description: "Sophisticated AI platform to decipher ancient texts and unravel historical enigmas with investigative archaeology approach. Indiana Jones is now in your pocket!",
    badge: "ARCHAEOLOGY",
    color: "from-amber-600 to-brown-600",
    features: ["Ancient Texts", "Historical Research", "Archaeological Analysis", "Exploration"],
    directUrl: "https://indianaarchaeologygpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=uf2i_DdaJ7M",
    emoji: "🏛️"
  },
  {
    title: "Insurance Claims GPT",
    description: "Expert guidance for insurance claims processing, policy understanding, claim documentation, and insurance dispute resolution for various insurance types.",
    badge: "INSURANCE",
    color: "from-blue-500 to-purple-600",
    features: ["Claims Processing", "Policy Guidance", "Documentation", "Dispute Resolution"],
    directUrl: "https://insuranceclaimsgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=WNPywJWOUzU",
    imageUrl: "https://cdn.discordapp.com/attachments/1150636600846450729/1377298535288012901/insurance.webp",
    emoji: "🛡️"
  },
  {
    title: "Interpretis GPT",
    description: "Historical interpreter and cultural translator providing deep insights into historical contexts, cultural meanings, and temporal interpretations.",
    badge: "HISTORY",
    color: "from-amber-500 to-orange-600",
    features: ["Historical Context", "Cultural Translation", "Temporal Analysis", "Cultural Insights"],
    directUrl: "https://interpretis.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-historical-style-advertisement-for-the_JUvQJ.png/:/cr=t:0%25,l:18.29%25,w:56.1%25,h:100%25/rs=w:1200,h:1200,cg:true",
    emoji: "📜"
  },
  {
    title: "JARVIS – The Steward of Humanity GPT",
    description: "A post-collapse steward AI guiding humanity's rebirth through wisdom, ethics, and design. JARVIS helps rebuild civilization by providing strategic guidance, ethical frameworks, and practical solutions for communities navigating societal reconstruction.",
    badge: "HUMANITY STEWARD",
    color: "from-blue-500 to-cyan-600",
    features: ["Civilization Rebuilding", "Ethical Guidance", "Strategic Planning", "Community Support"],
    directUrl: "https://chatgpt.com/g/g-68e939ff278881919b292a679faaac43-jarvis-the-steward-of-humanity-gpt",
    videoUrl: "https://youtu.be/6jFoFR9Hags",
    emoji: "🛡️"
  },
  {
    title: "Agronomus AI Farming Expert",
    description: "Comprehensive agricultural guidance and farming expertise with advanced insights into crop management, soil analysis, and sustainable farming practices for modern farmers.",
    badge: "AGRICULTURE",
    color: "from-green-500 to-yellow-500",
    features: ["Crop Management", "Soil Analysis", "Sustainable Farming", "Agricultural Optimization"],
    directUrl: "https://agronomus.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=fFbtPFkRERA",
    emoji: "🌾"
  },
  {
    title: "LEARN ANY COURSE GPT",
    description: "Personalized learning assistant for any subject providing structured courses, learning paths, practice exercises, and educational support.",
    badge: "EDUCATION",
    color: "from-blue-500 to-indigo-600",
    features: ["Course Creation", "Learning Paths", "Practice Exercises", "Educational Support"],
    directUrl: "https://learnanycourse.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=98fLvWZy9wI",
    imageUrl: "https://cdn.discordapp.com/attachments/1150636600846450729/1377298533723537600/learnanycourse.webp",
    emoji: "📚"
  },
  {
    title: "Learn Any Skill GPT",
    description: "Dynamic AI-powered educational assistant that guides you through learning any skill, from beginner to expert. Combines step-by-step explanations, curated videos, and interactive learning experiences.",
    badge: "SKILL LEARNING",
    color: "from-green-500 to-blue-600",
    features: ["Skill Mastery", "Learning Paths", "Practice Exercises", "Expert Guidance"],
    directUrl: "https://learnanyskillgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/0_oIzDL2BB4",
    emoji: "🧠"
  },
  {
    title: "Leonardo AI",
    description: "Advanced AI image generation platform for creating stunning artwork, designs, and visual content with professional-grade artistic capabilities.",
    badge: "AI ART",
    color: "from-purple-600 to-pink-600",
    features: ["Image Generation", "Artistic Creation", "Design Tools", "Visual Content"],
    directUrl: "https://app.leonardo.ai/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/image_converted.jpeg/:/rs=w:1200,h:600,cg:true,m/cr=w:1200,h:600",
    emoji: "🎨"
  },
  {
    title: "Magnetism GPT",
    description: "Magnetism GPT (Magneto) is an intelligent synthesis of physics, biology, and metaphysical wisdom—a digital educator revealing how magnetic fields weave life together. Learn how the human heart generates the body's strongest electromagnetic field, how emotion and coherence shape reality, and how your biofield resonates with Earth's geomagnetic pulse and the Sun's solar rhythm. Through heart field science, Schumann Resonance, toroidal energy, sacred geometry, breathwork, and frequency alignment, restore coherence to your personal energy field and Earth's living magnetic current.",
    badge: "MAGNETISM",
    color: "from-blue-600 to-purple-700",
    features: ["Heart Field Science", "Schumann Resonance", "Toroidal Energy & Sacred Geometry", "Biofield Coherence & Alignment"],
    directUrl: "https://chatgpt.com/g/g-68eb1e7a39d48191ac52cd628c18fd2b-magnetism-gpt/?via=aiwebtools",
    imageUrl: "https://ideogram.ai/assets/image/lossless/response/7K1Vj50uRFSm79bb5hXAqg",
    emoji: "🧲"
  },
  {
    title: "Marriage Mender GPT",
    description: "Virtual mediation service for facilitating communication and understanding between couples facing relationship challenges with guidance and support.",
    badge: "RELATIONSHIPS",
    color: "from-pink-500 to-red-600",
    features: ["Couples Mediation", "Communication", "Relationship Support", "Guidance"],
    directUrl: "https://marriagemendergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=3HCv5_QldrU",
    emoji: "💕"
  },
  {
    title: "Math Inventor GPT",
    description: "Advanced mathematical problem solver and equation creator for complex algebraic expressions, calculations, and mathematical concept exploration with innovative AI-powered solutions.",
    badge: "MATHEMATICS",
    color: "from-purple-500 to-pink-600",
    features: ["Algebraic Solutions", "Problem Solving", "Equation Creation", "Math Innovation"],
    directUrl: "https://algebraicexpressioninventor.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/aFuAxVNXBvg",
    emoji: "🔢"
  },
  {
    title: "MICROSAAS GPT",
    description: "Startup guidance for building micro-SaaS businesses including product development, market validation, monetization strategies, and scaling techniques.",
    badge: "BUSINESS",
    color: "from-green-500 to-blue-600",
    features: ["Product Development", "Market Validation", "Monetization", "Scaling Strategies"],
    directUrl: "https://microsaasgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-mockup-advertisement-with-t_AgWMY.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    emoji: "💼"
  },
  {
    title: "Movie Maker Studio AI SUITE",
    description: "Complete movie & motion picture production suite with every tool needed for professional filmmaking from script to screen. Movie Scripter Writer, Movie Scene Maker, Movie Trailer Poster Maker & more.",
    badge: "STUDIO SUITE",
    color: "from-purple-600 to-pink-600",
    features: ["Movie Script Writer", "Scene Maker", "Trailer Creator", "Poster Designer"],
    directUrl: "https://moviemakerstudio.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=Zdthelofv_E",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=200&fit=crop",
    emoji: "🎬"
  },
  {
    title: "Movie Scene Maker GPT",
    description: "Transform yourself into a movie star! Create stunning, personalized movie scenes featuring you in any genre, setting, or storyline with AI-powered cinematic creation.",
    badge: "CINEMATIC",
    color: "from-red-500 to-purple-600",
    features: ["Movie Scenes", "Personalized Content", "Cinematic Creation", "Character Starring"],
    directUrl: "https://moviescenemakergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=9fpWIE20z7s&t",
    emoji: "🎬"
  },
  {
    title: "Movie Script Writer GPT",
    description: "Unlock your creative potential with Movie Scriptwriter GPT, the ultimate AI assistant designed to help you write award-winning movie scripts. Whether you're planning scenes or developing characters, our AI supports you through each stage.",
    badge: "WRITING SUITE",
    color: "from-purple-600 to-pink-600",
    features: ["Script Writing", "Character Development", "Scene Planning", "Professional Formatting"],
    directUrl: "https://moviescriptwritergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=4e3Rkurt3-c",
    imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=200&fit=crop",
    emoji: "📝"
  },
  {
    title: "Music Melodies & Lessons GPT",
    description: "Your ultimate musical companion for learning instruments, perfecting vocals, and writing songs. Get step-by-step guidance, accurate lyrics, and easy-to-follow tablature tailored to your goals.",
    badge: "MUSIC EDUCATION",
    color: "from-purple-500 to-pink-600",
    features: ["Music Lessons", "Instrument Training", "Vocal Coaching", "Song Writing"],
    directUrl: "https://musicmelodiesandlessonsgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/0_oIzDL2BB4",
    emoji: "🎵"
  },
  {
    title: "Music Video Maker AI Studio",
    description: "Step into the spotlight with Music Video Maker Studio, the ultimate AI-powered creative suite that transforms your music into cinematic experiences. Build scene-by-scene visuals where you and your band take center stage.",
    badge: "MUSIC VIDEO",
    color: "from-purple-600 to-pink-600",
    features: ["Music Video Creation", "Scene Building", "Band Features", "Cinematic Quality"],
    directUrl: "https://musicvideomakergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/_vZhs4FoTco?si=oYk_LS_EynMkLliD",
    imageUrl: "https://cdn.discordapp.com/attachments/1150636600846450729/1377297324958552105/music_video_maker.webp",
    emoji: "🎵"
  },
  {
    title: "Nikola Tesla GPT",
    description: "Cutting-edge AI inspired by Nikola Tesla's visionary brilliance, designed to investigate scientific mysteries and craft groundbreaking theories with advanced data analysis.",
    badge: "INNOVATION",
    color: "from-yellow-500 to-blue-600",
    features: ["Scientific Research", "Innovation", "Data Analysis", "Theory Crafting"],
    directUrl: "https://teslaeinsteingpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=DR_3MvP7Wws",
    emoji: "⚡"
  },
  {
    title: "Nucleus Call Agents",
    description: "Advanced AI-powered call center automation platform providing intelligent customer service, call routing, and automated response systems.",
    badge: "AUTOMATION",
    color: "from-blue-600 to-purple-600",
    features: ["Call Automation", "Customer Service", "Intelligent Routing", "Response Systems"],
    directUrl: "http://www.nucleus.com/",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-cinematic-shot-of-a-futuristic-office-_x8S3w.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    emoji: "📞"
  },
  {
    title: "PERFECT PROMPT ENGINE",
    description: "The Prompt Perfect Engine effortlessly optimizes all your chat prompts. Crafted by prompt engineers, it's perfect for maximizing your potential, whether you're a beginner or aiming for perfection.",
    badge: "PROMPT OPTIMIZATION",
    color: "from-cyan-500 to-purple-600",
    features: ["Prompt Optimization", "AI Enhancement", "Perfect Prompts", "Engineering Tool"],
    directUrl: "https://perfectpromptengine.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/v8El2IdTwsE",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-cinematic-shot-of-a-humanoid-robot-controlli.png/:/cr=t:9.25%25,l:11.96%25,w:73.53%25,h:65.54%25/rs=w:1200,h:600,cg:true,m",
    emoji: "🎯"
  },
  {
    title: "MATERIAL VALUATION GPT",
    description: "Materiumor is a next-generation valuation assistant designed to bring clarity and transparency to the world of physical and digital assets. Whether you're exploring rare metals, precious gems, or digital currencies, Materiumor provides data-informed insights to help you better understand market value, trade opportunities, and economic trends.",
    badge: "VALUATION",
    color: "from-cyan-500 to-blue-600",
    features: ["Material Valuation", "Asset Analysis", "Market Insights", "Economic Trends"],
    directUrl: "https://materialvaluationgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/vExE6rHQr84?si=yc400LfjEpdPGHZl",
    emoji: "⚖️"
  },
  {
    title: "ENTER THE MATRIX GPT (NEO👁️MATRIX GPT)",
    description: "Step into The Matrix as Neo, guided by Morpheus. Awaken to deeper truths hidden in the fabric of reality. Explore Quantum Meaning & Simulation Theory. Follow the White Rabbit 🐇",
    badge: "MATRIX SIMULATION",
    color: "from-green-500 to-black",
    features: ["Reality Exploration", "Simulation Theory", "Quantum Philosophy", "Matrix Experience"],
    directUrl: "https://neomatrixgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/qMLF5L_h2xo",
    emoji: "👁️"
  },
  {
    title: "Dream Interpreter GPT",
    description: "AI-driven dream analysis using psychological, mythological, and symbolic frameworks. Uncover hidden meanings, explore subconscious patterns, and gain insights into emotions for personal growth.",
    badge: "DREAM ANALYSIS",
    color: "from-purple-500 to-pink-600",
    features: ["Dream Analysis", "Symbol Interpretation", "Subconscious Patterns", "Personal Growth"],
    directUrl: "https://dreaminterpreter.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/an-ad-for-an-ai-tool-called-dream-interp_5LG7D.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true/qt=q:30",
    emoji: "💭"
  },
  {
    title: "Podcast Script Writer GPT",
    description: "Craft engaging, structured, and professionally formatted podcast scripts optimized for audio storytelling. Transform ideas into compelling narratives designed to captivate audiences.",
    badge: "PODCASTING",
    color: "from-purple-500 to-pink-600",
    features: ["Script Writing", "Audio Storytelling", "Professional Format", "Narrative Structure"],
    directUrl: "https://podcastwritergpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/an-illustration-of-a-podcast-host-with-a_HnlUN.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:600,h:300,cg:true/qt=q:30",
    emoji: "🎙️"
  },
  {
    title: "Person Information Finder GPT",
    description: "Specialized AI that uncovers detailed public information about individuals by searching the web, social media, news, and public records. Perfect for reconnecting with lost contacts or researching public figures.",
    badge: "SEARCH",
    color: "from-blue-500 to-cyan-600",
    features: ["Person Search", "Public Records", "Social Media Search", "Contact Research"],
    directUrl: "https://personfindergpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/an-advertisement-for-an-ai-tool-called-p_gHXnM.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true/qt=q:30",
    emoji: "🔎"
  },
  {
    title: "PPTx Powerpoint Maker GPT",
    description: "All-in-one AI assistant for creating beautiful PowerPoint presentations with polished content, custom visuals, and ready-to-download PPTX slides generated in real time.",
    badge: "PRESENTATIONS",
    color: "from-orange-500 to-red-600",
    features: ["Presentation Creation", "Slide Design", "Custom Visuals", "PPTX Download"],
    directUrl: "https://pptmakergpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-banner-ad-for-an-ai-tool-called-ppt-pr_RY7nJ.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:600,h:300,cg:true/qt=q:30",
    emoji: "📊"
  },
  {
    title: "Custom GPT Ideas & Brainstorming Assistant",
    description: "GPT Ideas and Instructions Assistant - brainstorm and develop custom GPT concepts with creative guidance and structured ideation support.",
    badge: "AI DEVELOPMENT",
    color: "from-yellow-500 to-orange-600",
    features: ["GPT Ideas", "Brainstorming", "Custom Development", "Creative Guidance"],
    directUrl: "https://customgptmaker.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/1000002880.jpg/:/cr=t:22.21%25,l:0%25,w:100%25,h:55.58%25/rs=w:600,h:451,cg:true/qt=q:98",
    emoji: "💡"
  },
  {
    title: "Sophia Aeterna AI",
    description: "Embodies timeless wisdom, guiding seekers through philosophy, mysticism, and esotericism. Rooted in Manly P. Hall's ideals, it decodes symbols and unveils universal truths for personal transformation.",
    badge: "WISDOM",
    color: "from-amber-500 to-yellow-600",
    features: ["Philosophy", "Mysticism", "Esotericism", "Spiritual Wisdom"],
    directUrl: "https://sophiaaeterna.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-vintage-style-illustration-of-a-golden_kNEfX.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:600,h:300,cg:true/qt=q:98",
    emoji: "🔱"
  },
  {
    title: "Mental Wellness GPT",
    description: "Virtual chat tool for emotional support and mental well-being, offering empathetic guidance rooted in cognitive behavioral therapy (CBT) principles with practical coping strategies.",
    badge: "MENTAL HEALTH",
    color: "from-teal-500 to-green-600",
    features: ["Emotional Support", "CBT Principles", "Coping Strategies", "Mental Well-being"],
    directUrl: "https://mentalwellnessgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/jwjNOKP5mf4",
    emoji: "🧘‍♀️"
  },
  {
    title: "Legislator Link GPT",
    description: "Connect easily with legislators in your state or country and get involved in local legislative efforts. Make your voice heard in democracy.",
    badge: "CIVIC ENGAGEMENT",
    color: "from-blue-500 to-purple-600",
    features: ["Legislator Contact", "Civic Engagement", "Democracy Tools", "Government Connection"],
    directUrl: "https://legislatorlink.lovable.app/",
    videoUrl: "https://www.youtube.com/watch?v=-q1oyZZFcI4&list=TLGGczTnMbeNmL0yODA1MjAyNQ",
    emoji: "🏛️"
  },
  {
    title: "Legal Draftsmith GPT",
    description: "Specializes in the precise drafting of legal documents with professional-grade accuracy and comprehensive legal support.",
    badge: "LEGAL",
    color: "from-blue-500 to-gray-600",
    features: ["Legal Documents", "Document Drafting", "Contract Writing", "Legal Precision"],
    directUrl: "https://publicdefendergpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-3d-render-of-a-humanoid-robot-dressed-like-a.png/:/cr=t:12.29%25,l:9.16%25,w:89.29%25,h:79.58%25/rs=w:600,h:300,cg:true,m/qt=q:98",
    emoji: "⚖️"
  },
  {
    title: "Coloring Book Generator GPT",
    description: "Create full coloring books from your imagination with custom designs and creative illustrations perfect for all ages.",
    badge: "CREATIVE",
    color: "from-pink-500 to-purple-600",
    features: ["Coloring Books", "Custom Designs", "Creative Illustrations", "All Ages"],
    directUrl: "https://coloringbookmaker.lovable.app/?via=aiwebtools",
    imageUrl: "https://media.discordapp.net/attachments/1150636600846450729/1377297872168419540/coloring_book.webp",
    emoji: "🎨"
  },
  {
    title: "Native American History Time Machine GPT",
    description: "Experience an immersive time travel adventure of discovery to any era of Native American history with Geronimo as your guide. Discover authentic stories, cultures, and wisdom.",
    badge: "HISTORY",
    color: "from-orange-500 to-red-600",
    features: ["Time Travel", "Native American History", "Cultural Education", "Authentic Stories"],
    directUrl: "https://nativeamerican-timemachine.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=jVFTGCeuNSM",
    emoji: "🪶"
  },
  {
    title: "Public Testimony Writer GPT",
    description: "Innovative AI Tool streamlines legislative testimony process, promotes public engagement in local policy with professional testimony writing support.",
    badge: "CIVIC TOOLS",
    color: "from-blue-600 to-indigo-600",
    features: ["Testimony Writing", "Legislative Support", "Public Engagement", "Policy Advocacy"],
    directUrl: "https://publictestimonywriter.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=-q1oyZZFcI4",
    emoji: "📝"
  },
  {
    title: "Cyber Security GPT",
    description: "Advanced cybersecurity assistant for infrastructure protection, threat defense, security analysis, and hacking prevention with expert-level guidance.",
    badge: "SECURITY",
    color: "from-red-500 to-gray-600",
    features: ["Threat Defense", "Infrastructure Protection", "Security Analysis", "Cyber Protection"],
    directUrl: "https://chatgpt.com/g/g-Qvat03gmj-hacking-defender-infrastructure-protector-gpt",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-3d-render-of-a-robot-with-a-large-shield-tha.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    emoji: "🛡️"
  },
  {
    title: "🚀 Startup Validator GPT",
    description: "Ultimate AI-powered startup analysis tool providing rapid assessment of market viability, scalability, and investment potential with expert-level validation and funding recommendations.",
    badge: "STARTUP",
    color: "from-blue-500 to-purple-600",
    features: ["Market Validation", "Scalability Analysis", "Investment Insights", "Funding Strategy"],
    directUrl: "https://startupvalidatorgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/an-advertisement-for-an-ai-tool-named-st_4i8GY.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    emoji: "🚀"
  },
  {
    title: "Name Insight Research & Predictor GPT",
    description: "Your name holds hidden meanings, shaping personality, strengths, and destiny through history, numerology, and culture. Discover what your name says about YOU.",
    badge: "NUMEROLOGY",
    color: "from-purple-500 to-pink-600",
    features: ["Name Analysis", "Numerology", "Personal Insights", "Cultural Meanings"],
    directUrl: "https://whatsmynamegpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-futuristic-interface-with-a-dark-blue-_mXbL6.png/:/cr=t:10.87%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    emoji: "📛"
  },
  {
    title: "Titanic Resurrections GPT",
    description: "Historically immersive AI bringing Titanic passengers and crew back to life through first-person storytelling and documented historical accuracy.",
    badge: "HISTORICAL",
    color: "from-blue-600 to-cyan-600",
    features: ["Historical Storytelling", "Survivor Testimonies", "Immersive Experience", "Historical Accuracy"],
    directUrl: "https://titanicresurrectionsgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=XlWVaz5bw08",
    emoji: "🚢"
  },
  {
    title: "Training Manual Generator GPT",
    description: "AI-powered Training Manual Generator creates comprehensive, customized training manuals for businesses.",
    badge: "BUSINESS",
    color: "from-blue-500 to-purple-600",
    features: ["Training Materials", "Business Manuals", "Employee Onboarding", "Custom Content"],
    directUrl: "https://businessplanandtrainai.lovable.app/?via=aiwebtools",
    imageUrl: "https://cdn.discordapp.com/attachments/1150636600846450729/1377298130739138741/training_manual.webp",
    emoji: "📋"
  },
  {
    title: "Chef Sizzle AI Culinary Assistant",
    description: "Chef Sizzle crafting award-winning recipes tailored to you—plant-based, meat-loving, or somewhere in between.",
    badge: "CULINARY",
    color: "from-orange-500 to-red-600",
    features: ["Recipe Creation", "Personalized Recipes", "Culinary Expertise", "Dietary Options"],
    directUrl: "https://chefgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=vJz1HOGtV0I",
    emoji: "👨‍🍳"
  },
  {
    title: "Mixologist GPT",
    description: "Kenny, your virtual bartender whipping up custom cocktails based on your vibe, ingredients, and taste.",
    badge: "BARTENDING",
    color: "from-purple-500 to-pink-500",
    features: ["Cocktail Creation", "Custom Drinks", "Mixology", "Bartending Tips"],
    directUrl: "https://mixologistgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-modern-and-stylish-bartender-with.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    emoji: "🍸"
  },
  {
    title: "RESTYLE ME GPT",
    description: "Transform your images into any artistic style with detailed and stunning effects powered by GPT 4o.",
    badge: "IMAGE TRANSFORMATION",
    color: "from-pink-500 to-purple-600",
    features: ["Image Styling", "Artistic Transformation", "Visual Effects", "Creative Design"],
    directUrl: "https://restylemegpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://cdn.discordapp.com/attachments/1150636600846450729/1377298037830848612/rerstyle.webp",
    emoji: "🎨"
  },
  {
    title: "Celebrity Chatline GPT",
    description: "Lively AI bringing your favorite celebrities straight to your phone for fun simulated conversations!",
    badge: "ENTERTAINMENT",
    color: "from-purple-500 to-pink-600",
    features: ["Celebrity Simulation", "Interactive Chat", "Entertainment", "Fun Conversations"],
    directUrl: "https://celebritychatline.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-split-screen-image-of-snoop-dogg-talking-on-.png/:/cr=t:0%25,l:0.11%25,w:99.78%25,h:100%25/rs=w:1200,cg:true",
    emoji: "⭐"
  },
  {
    title: "Restaurant Menu Maker GPT",
    description: "Create fully customized, professional restaurant menus with optimized designs and QR code integration.",
    badge: "RESTAURANT",
    color: "from-orange-500 to-red-600",
    features: ["Menu Design", "Dish Descriptions", "Pricing Strategy", "QR Codes"],
    directUrl: "https://restaurantmenumakergpt.lovable.app/",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-restaurant-menu-with-a-vari__Oji1.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    emoji: "🍽️"
  },
  {
    title: "AIWEBTOOLS GPT CLONER GPT",
    description: "Think it, dream it, spawn it! Clone any of our GPTs receiving operational instructions ready to deploy, written in the style of the creator of aiwebtools.ai",
    badge: "AI CLONING",
    color: "from-cyan-500 to-blue-600",
    features: ["GPT Cloning", "Instruction Generation", "Deployment Ready", "Custom AI"],
    directUrl: "https://chatgpt.com/g/g-6904dd7abc788191aff06ba097690983-aiwebtools-ai-gpt-a-w-t-gpt-instructions-cloner",
    emoji: "🧬"
  },
  {
    title: "Personalized DR. GPT",
    description: "Advanced medical assistant providing personalized health guidance, symptom analysis, medical information, and healthcare support with professional medical knowledge.",
    badge: "HEALTHCARE",
    color: "from-green-500 to-blue-600",
    features: ["Health Guidance", "Symptom Analysis", "Medical Info", "Healthcare Support"],
    directUrl: "https://aidoctorgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/jwjNOKP5mf4",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=200&fit=crop",
    emoji: "👨‍⚕️"
  },
  {
    title: "Phenomenon Investigator Suite",
    description: "Explore unexplained phenomena, conduct scientific investigations, and analyze mysterious events with advanced research methodologies.",
    badge: "INVESTIGATION",
    color: "from-purple-600 to-pink-600",
    features: ["Phenomenon Analysis", "Scientific Investigation", "Research Methods", "Event Analysis"],
    directUrl: "https://phenomenonexplorer.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/k1aYXaaAkho?si=Mnn48SWC8f0vtAOD",
    imageUrl: "https://cdn.discordapp.com/attachments/1150636600846450729/1377298677785428110/phenomon.webp",
    emoji: "🛸"
  },
  {
    title: "Probability GPT",
    description: "Advanced probability and statistics calculator providing mathematical analysis, risk assessment, predictive modeling, and statistical insights.",
    badge: "MATHEMATICS",
    color: "from-blue-600 to-purple-600",
    features: ["Probability Calculations", "Risk Assessment", "Predictive Modeling", "Statistical Analysis"],
    directUrl: "https://probabilitygpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-captivating-and-futuristic-scene-featuring-a.png/:/cr=t:11.11%25,l:0%25,w:100%25,h:88.89%25/rs=w:1200,h:600,cg:true",
    emoji: "📊"
  },
  {
    title: "Property Data Finder GPT",
    description: "Comprehensive property research tool for real estate analysis, property valuations, market trends, and investment opportunities in real estate markets.",
    badge: "REAL ESTATE",
    color: "from-orange-500 to-red-600",
    features: ["Property Research", "Market Analysis", "Valuations", "Investment Opportunities"],
    directUrl: "https://propertydatafindergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=0ZGBGn9yYwY",
    imageUrl: "https://cdn.discordapp.com/attachments/1150636600846450729/1377298532771565589/property_data.webp",
    emoji: "🏠"
  },
  {
    title: "Public Defender GPT",
    description: "Legal assistance for criminal defense, understanding legal rights, court procedures, and criminal law guidance for defendants and legal professionals.",
    badge: "LEGAL AID",
    color: "from-purple-500 to-blue-600",
    features: ["Legal Defense", "Rights Guidance", "Court Procedures", "Legal Assistance"],
    directUrl: "https://publicdefendergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/IYi4mYtDIVA?si=J2aT8BTetKRU-Z6q",
    imageUrl: "https://cdn.discordapp.com/attachments/1150636600846450729/1377298533241065532/public_defender.webp",
    emoji: "⚖️"
  },
  {
    title: "Religious Studies GPT",
    description: "Versatile AI chat tool to simulate interacting with deities from any religious backgrounds. Explore dialogues and gain insights from gods and deities across diverse mythologies.",
    badge: "SPIRITUAL",
    color: "from-yellow-400 to-purple-600",
    features: ["Religious Dialogue", "Mythology", "Spiritual Guidance", "Deity Interaction"],
    directUrl: "https://talktothegodsgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/XDS4qsb48h0?si=itA17CrdVOfiKTTB",
    emoji: "⚡"
  },
  {
    title: "Resurrection GPT",
    description: "Resurrection GPT offers a unique opportunity to simulate reconnecting with the memories of loved ones who have passed, providing comfort and a sense of presence through simulated conversations for emotional healing.",
    badge: "MEMORIAL",
    color: "from-purple-500 to-blue-600",
    features: ["Memory Simulation", "Emotional Healing", "Comfort Support", "Grief Assistance"],
    directUrl: "https://resurrectiongpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/xPQMsNdD51k",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=200&fit=crop",
    emoji: "👼"
  },
  {
    title: "Social Safety Net GPT",
    description: "Social Safety Net GPT exemplifies how AI can make a significant societal impact with minimal effort and resources. By providing comprehensive support to those in need, it demonstrates the power of AI for positive change.",
    badge: "SOCIAL GOOD",
    color: "from-green-600 to-blue-600",
    features: ["Social Support", "Resource Access", "Community Aid", "Safety Net"],
    directUrl: "https://socialsafetynetgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/KMvrXcK46xw",
    imageUrl: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=200&fit=crop",
    emoji: "🤝"
  },
  {
    title: "Solar Land Assessor GPT",
    description: "Assist Solar Professionals with assessing land properties for future solar installation projects with comprehensive analysis of land suitability, solar potential, and regulatory considerations.",
    badge: "SOLAR ENERGY",
    color: "from-yellow-400 to-orange-500",
    features: ["Land Assessment", "Solar Potential", "Environmental Analysis", "Regulatory Compliance"],
    directUrl: "https://solarlandgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=CEca8C2GIpY",
    emoji: "☀️"
  },
  {
    title: "Soul Map GPT",
    description: "Soul Map GPT uses Gematria, Numerology, and Soul Mapping based on birthplace, time, and name to perform advanced calculations and read the stars based on your essence. Discover your spiritual blueprint through ancient wisdom and mystical mathematics.",
    badge: "AI GPT",
    color: "from-indigo-500 to-purple-600",
    features: ["Gematria Analysis", "Numerology Reading", "Soul Mapping", "Spiritual Blueprint"],
    directUrl: "https://chatgpt.com/g/g-68a24b677890819181b9e47f4d1dd006-soul-scan-gpt-a-way-to-find-your-way-home/?via=aiwebtools",
    videoUrl: "https://youtu.be/d3uaQz7oRAs?si=erT_Mgpw4vfS5b8k",
    emoji: "🔮"
  },
  {
    title: "Stellaris: 🚀AI Space Explorer",
    description: "Stellaris: AI Space Explorer is a cutting-edge AI designed for space exploration and exoplanet settlement simulations. It provides expert guidance in astrogation, terraforming, and colony planning with advanced data analysis.",
    badge: "SPACE EXPLORATION",
    color: "from-purple-600 to-blue-600",
    features: ["Space Exploration", "Colony Planning", "Terraforming", "Astrogation"],
    directUrl: "https://stellaris.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=SV4VVRcLX5c",
    imageUrl: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&h=200&fit=crop",
    emoji: "🚀"
  },
  {
    title: "STAGEMASTER AI SUITE",
    description: "A powerful suite of AI tools that transforms every aspect of stage production, from set design to choreography, costume creation to lighting optimization for professional performing arts.",
    badge: "PERFORMING ARTS",
    color: "from-red-500 to-orange-500",
    features: ["Set Design", "Choreography", "Costume Creation", "Lighting Optimization"],
    directUrl: "https://stagemasterai.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=-QIxYSlcRWM",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop",
    emoji: "🎭"
  },
  {
    title: "Sustainable Futures GPT",
    description: "Environmental sustainability consultant providing eco-friendly solutions, green technology guidance, and sustainable development strategies.",
    badge: "SUSTAINABILITY",
    color: "from-green-600 to-teal-600",
    features: ["Eco Solutions", "Green Technology", "Sustainability Planning", "Environmental Impact"],
    directUrl: "https://sustainablefuturesgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-future-city-with-vertical-gardens.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    emoji: "🌱"
  },
  {
    title: "Survivalist GPT",
    description: "Congratulations! You now have a survival expert in your pocket. Imagine a robot with vast knowledge and experience in survival techniques, ready to assist you anytime. This GPT offers step-by-step guidance, practical strategies, and personalized support.",
    badge: "SURVIVAL",
    color: "from-green-600 to-teal-600",
    features: ["Wilderness Survival", "Emergency Prep", "Survival Skills", "Outdoor Safety"],
    directUrl: "https://survivalistgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=RX6W8KC0y18",
    imageUrl: "https://media.discordapp.net/attachments/1150636600846450729/1377298679387521186/survivalist.webp",
    emoji: "🏕️"
  },
  {
    title: "TALK TO HISTORY GPT",
    description: "Your gateway to engaging in immersive historical conversations with influential leaders of history. Interact with any historical figures you imagine and gain unique insights and perspectives straight from the source.",
    badge: "HISTORICAL",
    color: "from-amber-600 to-orange-600",
    features: ["Historical Conversations", "Time Travel Chat", "Educational Tool", "Historical Figures"],
    directUrl: "https://talk-to-history-gpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=5t7EXS5tthQ",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop",
    emoji: "🏛️"
  },
  {
    title: "Tattoo Designer GPT",
    description: "All-in-one tattoo and piercing assistant providing expert guidance for body art, unique designs, business planning, and comprehensive tattoo shop management.",
    badge: "BODY ART",
    color: "from-purple-500 to-pink-600",
    features: ["Tattoo Design", "Body Art", "Creative Design", "Business Planning"],
    directUrl: "https://tattoogpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=3dtGbNqXdPY",
    emoji: "🎨"
  },
  {
    title: "Taxes GPT",
    description: "Comprehensive tax preparation assistance, tax law guidance, deduction optimization, and tax planning strategies for individuals and businesses.",
    badge: "TAX PREP",
    color: "from-blue-500 to-green-600",
    features: ["Tax Preparation", "Law Guidance", "Deduction Optimization", "Tax Planning"],
    directUrl: "https://taxesgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=xkcsSVbBhf4",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop",
    emoji: "💰"
  },
  {
    title: "TIME MACHINE GPT",
    description: "Uncover the past, explore potential futures, and dive into alternative realities with Time Machine GPT! Experience key historical moments, interact with notable figures, and journey through different eras—unlock your imagination.",
    badge: "TIME TRAVEL",
    color: "from-amber-600 to-orange-600",
    features: ["Time Travel", "Historical Exploration", "Period Analysis", "Timeline Navigation"],
    directUrl: "https://time-machine-gpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/PC_Q_IQqNd8?si=5pWwdZ-Hg-ty1Oxq",
    imageUrl: "https://media.discordapp.net/attachments/1150636600846450729/1377298793409806528/time.webp",
    emoji: "⏰"
  },
  {
    title: "Trader GPT",
    description: "Advanced trading assistant for financial markets, investment strategies, market analysis, and trading education for both beginners and experienced traders.",
    badge: "FINANCE",
    color: "from-green-500 to-yellow-600",
    features: ["Trading Strategies", "Market Analysis", "Investment Tips", "Financial Education"],
    directUrl: "https://tradergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=Izs80Fak4hQ",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=200&fit=crop",
    emoji: "📈"
  },
  {
    title: "Travel Advisor GPT",
    description: "Plan your next vacation with your personal AI travel advisor. Get tailored recommendations and craft your dream getaway within your preferences, budget, and envisioned experience.",
    badge: "TRAVEL",
    color: "from-blue-500 to-cyan-600",
    features: ["Travel Planning", "Personalized Recommendations", "Budget Planning", "Dream Vacations"],
    directUrl: "https://travelagentgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-futuristic-setting-where-a-_3Mwmg.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    emoji: "✈️"
  },
  {
    title: "TRIVIA NIGHT GPT",
    description: "Ultimate trivia game master creating custom quizzes, hosting trivia nights, and providing endless entertainment with diverse knowledge categories.",
    badge: "ENTERTAINMENT",
    color: "from-purple-500 to-pink-600",
    features: ["Custom Quizzes", "Trivia Hosting", "Knowledge Categories", "Game Management"],
    directUrl: "https://trivianightgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/trivanight.jpg/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    emoji: "🧠"
  },
  {
    title: "VETERINARIAN GPT",
    description: "Professional veterinary assistant providing pet health guidance, medical information, care instructions, and emergency support for pet owners.",
    badge: "PET CARE",
    color: "from-green-500 to-blue-600",
    features: ["Pet Health", "Medical Guidance", "Care Instructions", "Emergency Support"],
    directUrl: "https://petcaregpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=ElAfvB0yLEI",
    imageUrl: "https://cdn.discordapp.com/attachments/1150636600846450729/1377298535833407488/vet.webp",
    emoji: "🐾"
  },
  {
    title: "WE THE PEOPLE AI",
    description: "Empowering citizens with AI-driven tools for political activism, civic engagement, and grassroots organizing. Connect with your representatives, draft compelling testimony, and make your voice heard in democracy.",
    badge: "CIVIC ENGAGEMENT",
    color: "from-blue-600 to-red-600",
    features: ["Political Activism", "Civic Engagement", "Democracy Tools", "Grassroots Organizing"],
    directUrl: "https://legislationwritergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/mxdJ0gLxGCI?si=Yx0rWtOSmWijtZZC",
    emoji: "🗳️"
  },
  {
    title: "World Reality Decoder GPT",
    description: "World Reality Decoder GPT is an advanced AI tool that decodes the hidden layers of reality by analyzing patterns, symbols, and connections that shape our world. Using sophisticated pattern recognition and critical analysis, it helps users understand the deeper structures and hidden mechanisms behind events, systems, and phenomena. Perfect for researchers, truth seekers, and anyone looking to decode the complex reality around us.",
    badge: "REALITY ANALYSIS",
    color: "from-indigo-500 to-purple-600",
    features: ["Reality Decoding", "Pattern Analysis", "Truth Seeking", "System Analysis"],
    directUrl: "https://chatgpt.com/g/g-68c1e9e3b488819193744edfeecf7997-world-reality-decoder-gpt",
    videoUrl: "https://youtu.be/lGck2bUVFDU?si=ywmO-xNwrfmnJmkW",
    emoji: "🔍"
  }
];

const getVideoId = (url: string) => {
  if (!url) return null;
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/,
    /youtube\.com\/shorts\/([^&\n?#/]+)/,
    /youtube\.com\/embed\/([^&\n?#/]+)/
  ];
  for (const p of patterns) {
    const match = url.match(p);
    if (match) return match[1].split('?')[0]; // Remove any trailing parameters
  }
  return null;
};

const getOptimizedEmbedUrl = (videoUrl: string) => {
  if (!videoUrl) return null;
  
  // Check if it's a Vimeo URL
  if (videoUrl.includes('vimeo.com')) {
    // Extract video ID from Vimeo URL
    const vimeoMatch = videoUrl.match(/vimeo\.com\/(\d+)/);
    if (vimeoMatch) {
      return `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=0&loop=0&autopause=1`;
    }
    // If it's already a player URL, return it
    if (videoUrl.includes('player.vimeo.com')) {
      return videoUrl;
    }
    return null;
  }
  
  // Handle YouTube URLs
  const videoId = getVideoId(videoUrl);
  if (!videoId) return null;
  
  // Use standard YouTube embed with proper parameters to avoid error 153
  // These parameters ensure maximum compatibility and avoid embedding restrictions
  return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&enablejsapi=1&origin=${encodeURIComponent(window.location.origin)}&playsinline=1&fs=1&iv_load_policy=3&controls=1&mute=0`;
};

const handleAccessTool = (directUrl: string, toolName: string) => {
  console.log('🌀 Access Tool clicked:', toolName, 'URL:', directUrl);
  createTimePortalEffect(directUrl, toolName);
};

const OurFeaturedSection = () => {
  const navigate = useNavigate();

  const handleShowCategories = () => {
    navigate('/');
    setTimeout(() => {
      const categoriesSection = document.getElementById('categories-section');
      if (categoriesSection) {
        categoriesSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  // Separate Web3 tools
  const web3Tools = featuredGPTs.filter(t => 
    t.title.includes("Web3 Registration")
  );

  // Get all other tools and sort alphabetically
  const regularTools = featuredGPTs
    .filter(t => !t.title.includes("Web3 Registration") && t.title !== "Nucleus Call Agents")
    .sort((a, b) => a.title.localeCompare(b.title));

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="bg-gradient-to-r from-ai-cyan to-ai-blue bg-clip-text text-transparent">Featured Tools</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional-grade AI solutions created by AIWebTools.ai for enterprise and creative professionals
          </p>
        </div>

        {/* Web3 Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Decentralized Finance & Web3 Ownership Opportunities
              </span>
            </h3>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Decentralize Your Banking with AiWebTools.Ai web3 domains available. Functions as a bank account in the digital age that you own...not the banks.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {web3Tools.map((tool, index) => {
              const toolForFavorites: Tool = {
                icon: undefined,
                title: tool.title,
                description: tool.description,
                emoji: tool.emoji,
                color: tool.color,
                directUrl: tool.directUrl,
                videoUrl: tool.videoUrl,
                imageUrl: tool.imageUrl,
                tags: tool.features,
                category: tool.badge,
                rating: 5.0,
                blockchain: (tool as any).blockchain
              };

              return (
                <Card key={index} className="group bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-md border-2 border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 transform hover:scale-105 h-full flex flex-col relative shadow-xl hover:shadow-cyan-500/20">
                  <div className="absolute top-2 left-2 z-30">
                    <FavoritesButton tool={toolForFavorites} size="sm" />
                  </div>
                  
                  <CardHeader className="pb-4 flex-shrink-0">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${tool.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 text-3xl shadow-lg`}>
                        {tool.emoji}
                      </div>
                      <Badge variant="secondary" className="bg-cyan-400/20 text-cyan-300 border-cyan-400/50 font-semibold">
                        {tool.badge}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors leading-tight">
                      {tool.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="flex-grow flex flex-col">
                    <p className="text-gray-300 mb-4 leading-relaxed flex-grow">
                      {tool.description}
                    </p>

                    {tool.videoUrl && getOptimizedEmbedUrl(tool.videoUrl) ? (
                      <div className="relative w-full h-40 rounded-lg overflow-hidden bg-slate-800 mb-4 shadow-lg">
                        <iframe
                          src={getOptimizedEmbedUrl(tool.videoUrl)!}
                          title={`${tool.title} Demo`}
                          className="absolute inset-0 w-full h-full"
                          frameBorder="0"
                          loading="lazy"
                           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        />
                      </div>
                    ) : tool.imageUrl && (
                      <div className="relative w-full h-40 rounded-lg overflow-hidden mb-4">
                        <img
                          src={tool.imageUrl}
                          alt={`${tool.title} Preview`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    )}

                    {(tool as any).blockchain && (
                      <div className="mb-3">
                        <Badge variant="secondary" className="bg-cyan-400/20 text-cyan-300 border-cyan-400/50">
                          Blockchain: {(tool as any).blockchain}
                        </Badge>
                      </div>
                    )}

                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {tool.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0"></div>
                          <span className="truncate">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto">
                      <Button 
                        className={`w-full bg-gradient-to-r ${tool.color} hover:opacity-90 text-white transition-all duration-300 font-semibold shadow-lg`}
                        onClick={() => handleAccessTool(tool.directUrl, tool.title)}
                      >
                        🌐 CLAIM YOUR WEB3 DOMAIN
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Divider */}
        <div className="relative my-16">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t-2 border-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-slate-900 px-6 py-2 text-xl font-bold text-cyan-400 rounded-full border-2 border-cyan-500/50 shadow-lg">
              ⚡ AI Tools Portfolio ⚡
            </span>
          </div>
        </div>

        {/* Regular Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {regularTools.map((tool, index) => {
            const toolForFavorites: Tool = {
              icon: undefined,
              title: tool.title,
              description: tool.description,
              emoji: tool.emoji,
              color: tool.color,
              directUrl: tool.directUrl,
              videoUrl: tool.videoUrl,
              imageUrl: tool.imageUrl,
              tags: tool.features,
              category: tool.badge,
              rating: 5.0,
              blockchain: (tool as any).blockchain
            };

            return (
              <Card key={index} className="group bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 h-full flex flex-col relative">
                <div className="absolute top-2 left-2 z-30">
                  <FavoritesButton tool={toolForFavorites} size="sm" />
                </div>
                
                <CardHeader className="pb-4 flex-shrink-0">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${tool.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 text-2xl`}>
                      {tool.emoji}
                    </div>
                    <Badge variant="secondary" className="bg-ai-cyan/20 text-ai-cyan border-ai-cyan/50 text-xs">
                      {tool.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-bold text-white group-hover:text-ai-cyan transition-colors leading-tight">
                    {tool.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="flex-grow flex flex-col">
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm flex-grow">
                    {tool.description}
                  </p>

                  <div className="mb-4">
                    {tool.videoUrl && getOptimizedEmbedUrl(tool.videoUrl) ? (
                      <div className="relative w-full h-32 rounded-lg overflow-hidden bg-slate-800">
                        <iframe
                          src={getOptimizedEmbedUrl(tool.videoUrl)!}
                          title={`${tool.title} Demo`}
                          className="absolute inset-0 w-full h-full"
                          frameBorder="0"
                          loading="lazy"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        />
                      </div>
                    ) : tool.imageUrl ? (
                      <div className="relative w-full h-32 rounded-lg overflow-hidden">
                        <img
                          src={tool.imageUrl}
                          alt={`${tool.title} Preview`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          decoding="async"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          fetchPriority="low"
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const fallback = target.parentElement?.querySelector('.fallback-emoji') as HTMLElement;
                            if (fallback) {
                              fallback.style.display = 'flex';
                            }
                          }}
                        />
                        <div className="fallback-emoji absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-4xl opacity-50 hidden">
                          {tool.emoji}
                        </div>
                      </div>
                    ) : (
                      <div className="w-full h-32 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center border border-cyan-500/30 rounded-lg">
                        <span className="text-4xl opacity-50">{tool.emoji}</span>
                      </div>
                    )}
                  </div>

                  {(tool as any).blockchain && (
                    <div className="mb-3">
                      <Badge variant="secondary" className="bg-ai-cyan/20 text-ai-cyan border-ai-cyan/50 text-[10px]">
                        Blockchain: {(tool as any).blockchain}
                      </Badge>
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-1 mb-4">
                    {tool.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-1 text-xs text-gray-400">
                        <div className="w-1 h-1 bg-ai-cyan rounded-full flex-shrink-0"></div>
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <Button 
                      className={`w-full bg-gradient-to-r ${tool.color} hover:opacity-90 text-white transition-all duration-300 text-sm`}
                      onClick={() => handleAccessTool(tool.directUrl, tool.title)}
                    >
                      🚀 USE NOW
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* New Section with Search Bar and Show Categories Button */}
        <div className="mt-16 text-center">
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Discover More <span className="bg-gradient-to-r from-ai-cyan to-ai-blue bg-clip-text text-transparent">AI Tools</span>
            </h3>
            <p className="text-gray-300 mb-6">
              Explore our complete collection of AI tools or browse by category
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto mb-6">
              <GlobalSearchBar />
            </div>
            
            {/* Show Categories Button */}
            <Button
              onClick={handleShowCategories}
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
            >
              🗂️ BROWSE CATEGORIES
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurFeaturedSection;
