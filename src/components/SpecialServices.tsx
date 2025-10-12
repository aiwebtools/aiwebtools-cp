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
    title: "TIME MACHINE GPT",
    description: "Uncover the past, explore potential futures, and dive into alternative realities with Time Machine GPT! Experience key historical moments, interact with notable figures, and journey through different eras—unlock your imagination.",
    badge: "TIME TRAVEL",
    color: "from-amber-600 to-orange-600",
    features: ["Time Travel", "Historical Exploration", "Period Analysis", "Timeline Navigation"],
    directUrl: "https://time-machine-gpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=rXXScpdUWQo",
    imageUrl: "https://media.discordapp.net/attachments/1150636600846450729/1377298793409806528/time.webp",
    emoji: "⏰"
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
    title: "GODMODE GPT",
    description: "Imagine having an AI companion so powerful and versatile that it seamlessly transforms to meet every need you have—introducing GodMode GPT, your ultimate AI transformation tool.",
    badge: "AI POWER",
    color: "from-purple-600 to-gold-600",
    features: ["Ultimate AI", "Versatile Transform", "Multi-Purpose", "Power Mode"],
    directUrl: "https://godmodegpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/m2crGAhbs5g?si=0U5gA4QC_oQG0KXS",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=200&fit=crop",
    emoji: "⚡"
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
    title: "Criminologist GPT",
    description: "A tool to assist with investigations and training of criminologists. This tool is designed solely to assist human investigators by analyzing evidence and providing insights in collaboration with law enforcement.",
    badge: "INVESTIGATION",
    color: "from-red-600 to-gray-600",
    features: ["Crime Analysis", "Evidence Review", "Investigation Support", "Forensic Insights"],
    directUrl: "https://criminologistgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=jgvqpqmRJi8",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop",
    emoji: "🔍"
  },
  {
    title: "Social Safety Net GPT",
    description: "Social Safety Net GPT exemplifies how AI can make a significant societal impact with minimal effort and resources. By providing comprehensive support to those in need, it demonstrates the power of AI for positive change.",
    badge: "SOCIAL GOOD",
    color: "from-green-600 to-blue-600",
    features: ["Social Support", "Resource Access", "Community Aid", "Safety Net"],
    directUrl: "https://socialsafetynetgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=pXXqMe97GDg",
    imageUrl: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=200&fit=crop",
    emoji: "🤝"
  },
  {
    title: "Resurrection GPT",
    description: "Resurrection GPT offers a unique opportunity to simulate reconnecting with the memories of loved ones who have passed, providing comfort and a sense of presence through simulated conversations for emotional healing.",
    badge: "MEMORIAL",
    color: "from-purple-500 to-blue-600",
    features: ["Memory Simulation", "Emotional Healing", "Comfort Support", "Grief Assistance"],
    directUrl: "https://resurrectiongpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=nEuxdGO-RZ4",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=200&fit=crop",
    emoji: "👼"
  },
  {
    title: "PERFECT PROMPT ENGINE",
    description: "The Prompt Perfect Engine effortlessly optimizes all your chat prompts. Crafted by prompt engineers, it's perfect for maximizing your potential, whether you're a beginner or aiming for perfection.",
    badge: "PROMPT OPTIMIZATION",
    color: "from-cyan-500 to-purple-600",
    features: ["Prompt Optimization", "AI Enhancement", "Perfect Prompts", "Engineering Tool"],
    directUrl: "https://perfectpromptengine.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-cinematic-shot-of-a-humanoid-robot-controlli.png/:/cr=t:9.25%25,l:11.96%25,w:73.53%25,h:65.54%25/rs=w:1200,h:600,cg:true,m",
    emoji: "🎯"
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
    title: "Engineering GPT Suite",
    description: "Comprehensive engineering solutions covering mechanical, electrical, civil, and software engineering with professional-grade calculations and designs.",
    badge: "ENGINEERING",
    color: "from-gray-600 to-blue-600",
    features: ["Multi-Engineering", "Calculations", "Design Solutions", "Technical Analysis"],
    directUrl: "https://engineeringgpt.lovable.app/?via=aiwebtools",
    imageUrl: "/lovable-uploads/d96aa982-9238-415c-b8ae-c2f4b91d5392.png",
    emoji: "⚙️"
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
    title: "COLLECTIBLES APPRAISAL GPT",
    description: "Professional collectibles and antiques appraisal service providing market valuations, authenticity verification, and investment guidance.",
    badge: "APPRAISAL",
    color: "from-amber-500 to-yellow-600",
    features: ["Market Valuation", "Authenticity Check", "Investment Guide", "Market Trends"],
    directUrl: "https://antiqueappraisalgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/cKHZ7X0qx_Y?si=J8A_oP9MNFC8WhIs",
    imageUrl: "https://media.discordapp.net/attachments/1150636600846450729/1377298536781185136/collectible.webp",
    emoji: "💎"
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
    title: "World Reality Decoder GPT",
    description: "World Reality Decoder GPT is an advanced AI tool that decodes the hidden layers of reality by analyzing patterns, symbols, and connections that shape our world. Using sophisticated pattern recognition and critical analysis, it helps users understand the deeper structures and hidden mechanisms behind events, systems, and phenomena. Perfect for researchers, truth seekers, and anyone looking to decode the complex reality around us.",
    badge: "REALITY ANALYSIS",
    color: "from-indigo-500 to-purple-600",
    features: ["Reality Decoding", "Pattern Analysis", "Truth Seeking", "System Analysis"],
    directUrl: "https://chatgpt.com/g/g-68c1e9e3b488819193744edfeecf7997-world-reality-decoder-gpt",
    videoUrl: "https://youtu.be/lGck2bUVFDU?si=ywmO-xNwrfmnJmkW",
    emoji: "🔍"
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
    title: "Magnetism GPT",
    description: "An educator and guide bridging magnetism, science, and spirit to restore human coherence. Explore the profound connections between electromagnetic fields, consciousness, and natural resonance through scientific understanding.",
    badge: "MAGNETISM",
    color: "from-blue-600 to-purple-700",
    features: ["Electromagnetic Education", "Consciousness & Energy", "Scientific Wisdom", "Human Coherence"],
    directUrl: "https://chatgpt.com/g/g-68eb1e7a39d48191ac52cd628c18fd2b-magnetism-gpt/?via=aiwebtools",
    imageUrl: "https://ideogram.ai/assets/image/lossless/response/7K1Vj50uRFSm79bb5hXAqg",
    emoji: "🧲"
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
    title: "Cannabis GPT",
    description: "Comprehensive cannabis education covering cultivation, strains, medical applications, legal information, and industry insights for enthusiasts and professionals.",
    badge: "CANNABIS",
    color: "from-green-500 to-lime-600",
    features: ["Cultivation Guide", "Strain Information", "Medical Applications", "Legal Guidance"],
    directUrl: "https://cannabisgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-digital-illustration-of-a-green-cannab_iUjpW.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    emoji: "🌿"
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
    title: "Public Defender GPT",
    description: "Legal assistance for criminal defense, understanding legal rights, court procedures, and criminal law guidance for defendants and legal professionals.",
    badge: "LEGAL AID",
    color: "from-purple-500 to-blue-600",
    features: ["Legal Defense", "Rights Guidance", "Court Procedures", "Legal Assistance"],
    directUrl: "https://publicdefendergpt.lovable.app/",
    videoUrl: "https://www.youtube.com/watch?v=cQR5eFjsPWw",
    imageUrl: "https://cdn.discordapp.com/attachments/1150636600846450729/1377298533241065532/public_defender.webp",
    emoji: "⚖️"
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
    title: "Algebraic Expression Creative Inventor GPT",
    description: "Mathematical creativity tool for generating unique algebraic expressions, solving complex equations, and exploring mathematical patterns.",
    badge: "MATHEMATICS",
    color: "from-indigo-500 to-purple-600",
    features: ["Expression Generation", "Equation Solving", "Pattern Analysis", "Mathematical Creativity"],
    directUrl: "https://algebraicexpressioninventor.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/FZr-zifwMw4?si=qDtRWKm-8DBmwpZi",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-captivating-futuristic-advertisement-for-alg.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    emoji: "🔢"
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
    title: "Historical Headlines GPT",
    description: "Time-traveling news service providing historical headlines, period-accurate reporting, and immersive historical news experiences.",
    badge: "HISTORY",
    color: "from-amber-600 to-red-600",
    features: ["Historical Headlines", "Period Reporting", "News Archives", "Historical Context"],
    directUrl: "https://historical-headlines-time-traveler.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/DgreEEJKynM",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/an-advertisement-for-historical-headline_1Ll1g.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    emoji: "📰"
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
    title: "Personalized DR. GPT",
    description: "Advanced medical assistant providing personalized health guidance, symptom analysis, medical information, and healthcare support with professional medical knowledge.",
    badge: "HEALTHCARE",
    color: "from-green-500 to-blue-600",
    features: ["Health Guidance", "Symptom Analysis", "Medical Info", "Healthcare Support"],
    directUrl: "https://aidoctorgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=EKKIttUG0sI",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=200&fit=crop",
    emoji: "👨‍⚕️"
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
    title: "Marriage Mender GPT",
    description: "Professional relationship counseling and marriage guidance for couples seeking to strengthen their relationships, resolve conflicts, and improve communication.",
    badge: "RELATIONSHIP",
    color: "from-pink-500 to-red-600",
    features: ["Marriage Counseling", "Relationship Guidance", "Conflict Resolution", "Communication"],
    directUrl: "https://marriagemendergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=3HCv5_QldrU",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=200&fit=crop",
    emoji: "💑"
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
    title: "Ancient Gematria Scan GPT",
    description: "Ancient Gematria Scan GPT is a specialized AI tool that decodes the hidden numerical meanings within words, names, and phrases using ancient gematria systems. By analyzing Hebrew, Greek, and other sacred number systems, it reveals the mystical connections and deeper significance encoded in language.",
    badge: "SACRED NUMEROLOGY",
    color: "from-amber-500 to-yellow-600",
    features: ["Gematria Decoding", "Sacred Geometry", "Number Analysis", "Ancient Wisdom"],
    directUrl: "https://chatgpt.com/g/g-68a24b677890819181b9e47f4d1dd006-ancient-gematria-scan-gpt",
    videoUrl: "https://youtu.be/xuFdqKW34Ww?si=NsaJmfokvckWhTCv",
    emoji: "🔢"
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
];

const getVideoId = (url: string) => {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/,
    /youtube\.com\/shorts\/([^&\n?#/]+)/,
    /youtube\.com\/embed\/([^&\n?#/]+)/
  ];
  for (const p of patterns) {
    const match = url.match(p);
    if (match) return match[1];
  }
  return null;
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

  // Ordering: show Soul Map GPT first, then .WorldTrade and .WorldPeace, then custom priority
  const topTitles = ["Soul Map GPT", ".WorldTrade Web3 Registration", ".WorldPeace Web3 Registration"];
  const topOrder = new Map(topTitles.map((t, i) => [t, i] as const));
  const domainTop = featuredGPTs
    .filter((t) => topOrder.has(t.title))
    .sort((a, b) => (topOrder.get(a.title) ?? 0) - (topOrder.get(b.title) ?? 0));

  // Custom priority list requested (case/spacing-insensitive, ignores missing)
  const normalize = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, "");
  const priorityAliases = [
    "bookwritergpt",
    "moviemakerstudioaisuite",
    "musicvideomakeraistudio",
    "collegedegreegpt",
    "timemachinegpt",
    "moviescriptwritergpt",
    "stagemasteraisuite",
    "talktohistorygpt",
    "timemachinegpt", // duplicate intentionally allowed, will be de-duped
    "marymagdalenegpt",
    "survivalistgpt",
    "personalizeddrgpt"
  ];
  const already = new Set<string>();
  const featuredByNorm = new Map(
    featuredGPTs.map((t) => [normalize(t.title), t] as const)
  );
  const findMatch = (alias: string) => {
    // exact normalized match first
    if (featuredByNorm.has(alias)) return featuredByNorm.get(alias)!;
    // fallback: find by inclusion
    return featuredGPTs.find((t) => normalize(t.title).includes(alias));
  };
  const priorityPicks = priorityAliases
    .map((a) => findMatch(a))
    .filter((t): t is typeof featuredGPTs[number] => !!t)
    .filter((t) => {
      const key = normalize(t.title);
      if (already.has(key) || topOrder.has(t.title)) return false;
      already.add(key);
      return true;
    });

  const rest = featuredGPTs
    .filter((t) => !topOrder.has(t.title) && !already.has(normalize(t.title)))
    .sort((a, b) => a.title.localeCompare(b.title));

  const displayGPTs = [...domainTop, ...priorityPicks, ...rest];

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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayGPTs.map((tool, index) => {
            // Convert to Tool format for favorites
            const toolForFavorites: Tool = {
              icon: undefined, // Not used for display but required by type
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
                {/* Favorites Button */}
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

                {/* Media Section - Video or Image */}
                <div className="mb-4">
                  {tool.videoUrl && getVideoId(tool.videoUrl) ? (
                    <div className="relative w-full h-32 rounded-lg overflow-hidden">
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${getVideoId(tool.videoUrl)}`}
                        title={`${tool.title} Demo`}
                        className="absolute inset-0 w-full h-full"
                        frameBorder="0"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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

                {/* Blockchain Label (when available) */}
                {(tool as any).blockchain && (
                  <div className="mb-3">
                    <Badge variant="secondary" className="bg-ai-cyan/20 text-ai-cyan border-ai-cyan/50 text-[10px]">
                      Blockchain: {(tool as any).blockchain}
                    </Badge>
                  </div>
                )}

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-1 mb-4">
                  {tool.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-1 text-xs text-gray-400">
                      <div className="w-1 h-1 bg-ai-cyan rounded-full flex-shrink-0"></div>
                      <span className="truncate">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Access Button */}
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
