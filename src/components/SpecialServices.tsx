
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { createTimePortalEffect } from "@/utils/timeEffects";

const featuredGPTs = [
  {
    title: "TIME MACHINE GPT",
    description: "Travel through time and explore different historical periods with advanced AI-powered time travel simulation and historical exploration.",
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
    description: "Complete academic guidance system for college students covering degree planning, course selection, career pathways, and academic success strategies.",
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
    description: "Comprehensive automotive expertise covering car maintenance, repairs, diagnostics, buying guides, and automotive technology for car enthusiasts and professionals.",
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
    description: "Complete movie & motion picture production suite with every tool needed for professional filmmaking from script to screen.",
    badge: "STUDIO SUITE",
    color: "from-purple-600 to-pink-600",
    features: ["Movie Script Writer", "Scene Maker", "Trailer Creator", "Poster Designer"],
    directUrl: "https://moviemakerstudio.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=Zdthelofv_E",
    emoji: "🎬"
  },
  {
    title: "Survivalist GPT",
    description: "Ultimate survival guidance system covering wilderness survival, emergency preparedness, survival skills, and outdoor safety techniques.",
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
    description: "Transform every aspect of stage production, from set design to choreography and lighting for professional performing arts.",
    badge: "PERFORMING ARTS",
    color: "from-red-500 to-orange-500",
    features: ["Set Design", "Choreography", "Costume Creation", "Lighting Optimization"],
    directUrl: "https://stagemasterai.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=-QIxYSlcRWM",
    emoji: "🎭"
  },
  {
    title: "ImmortalizeMe™",
    description: "Create fully interactive digital clones with voice, personality, and life stories preserved forever for lasting digital legacy.",
    badge: "EXCLUSIVE",
    color: "from-cyan-500 to-blue-600",
    features: ["Voice Cloning", "Personality AI", "Memory Integration", "Real-time Conversations"],
    directUrl: "https://immortalizeme.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=JXLqPMfw49Y",
    emoji: "♾️"
  },
  {
    title: "Clarity Omni GPT",
    description: "Advanced AI assistant providing crystal-clear insights and comprehensive analysis across multiple domains with enhanced cognitive abilities.",
    badge: "AI ASSISTANT",
    color: "from-purple-500 to-indigo-600",
    features: ["Clear Insights", "Multi-domain Analysis", "Cognitive Enhancement", "Decision Support"],
    directUrl: "https://clarityomni.lovable.app/?via=aiwebtools",
    imageUrl: "https://media.discordapp.net/attachments/1150636600846450729/1377298678930473072/clarity.webp",
    emoji: "🔮"
  },
  {
    title: "Engineering GPT Suite",
    description: "Comprehensive engineering solutions covering mechanical, electrical, civil, and software engineering with professional-grade calculations and designs.",
    badge: "ENGINEERING",
    color: "from-gray-600 to-blue-600",
    features: ["Multi-Engineering", "Calculations", "Design Solutions", "Technical Analysis"],
    directUrl: "https://engineeringgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://media.discordapp.net/attachments/1150636600846450729/1377298678326366271/engineering.webp",
    emoji: "⚙️"
  },
  {
    title: "Phenomenon Investigator Suite",
    description: "Explore unexplained phenomena, conduct scientific investigations, and analyze mysterious events with advanced research methodologies.",
    badge: "INVESTIGATION",
    color: "from-purple-600 to-pink-600",
    features: ["Phenomenon Analysis", "Scientific Investigation", "Research Methods", "Event Analysis"],
    directUrl: "https://phenomenonexplorer.lovable.app/?via=aiwebtools",
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
    imageUrl: "https://cdn.discordapp.com/attachments/1150636600846450729/1377298677336379464/graphic_design.webp",
    emoji: "🎨"
  },
  {
    title: "FACT CHECKER GPT",
    description: "Advanced fact-checking system for verifying information, analyzing claims, detecting misinformation, and providing evidence-based validation.",
    badge: "VERIFICATION",
    color: "from-green-500 to-blue-600",
    features: ["Fact Verification", "Claim Analysis", "Misinformation Detection", "Evidence Validation"],
    directUrl: "https://factcheckergpt.lovable.app/?via=aiwebtools",
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
    imageUrl: "https://cdn.discordapp.com/attachments/1150636600846450729/1377298675931418794/sustainablefuture.webp",
    emoji: "🌱"
  },
  {
    title: "FOOD QUALITY INSPECTOR GPT",
    description: "Professional food safety and quality inspection guidance covering food safety standards, quality control, inspection procedures, and regulatory compliance.",
    badge: "FOOD SAFETY",
    color: "from-green-500 to-teal-600",
    features: ["Food Safety", "Quality Control", "Inspection Procedures", "Regulatory Compliance"],
    directUrl: "https://foodqualitygpt.lovable.app/?via=aiwebtools",
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
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-captivating-futuristic-advertisement-for-alg.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    emoji: "🔢"
  },
  {
    title: "BOLT.NEW",
    description: "Revolutionary web development platform for creating full-stack applications instantly with AI-powered coding and deployment capabilities.",
    badge: "DEVELOPMENT",
    color: "from-yellow-500 to-orange-600",
    features: ["Instant Development", "Full-Stack Apps", "AI Coding", "Auto Deployment"],
    directUrl: "https://bolt.new/?rid=iewkqu",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-cinematic-shot-of-a-high-tech-office-with-mu.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    emoji: "⚡"
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
    title: "GEMINI",
    description: "Google's advanced AI language model providing multimodal capabilities, intelligent conversations, and comprehensive assistance across multiple domains.",
    badge: "AI PLATFORM",
    color: "from-blue-500 to-cyan-600",
    features: ["Multimodal AI", "Intelligent Chat", "Code Generation", "Content Creation"],
    directUrl: "http://g.co/g1referral/911Z9NTK",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/gemini_multimodal_live.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    emoji: "♊"
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
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-digital-advertisement-for-the-ai-tool-_C4irn.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    emoji: "⚗️"
  },
  {
    title: "BOOK WRITER GPT",
    description: "Professional book writing assistant that helps authors create compelling novels, non-fiction books, and manuscripts with expert guidance on plot development, character creation, and writing techniques.",
    badge: "WRITING SUITE",
    color: "from-blue-600 to-purple-600",
    features: ["Plot Development", "Character Creation", "Writing Guidance", "Manuscript Support"],
    directUrl: "https://bookwritergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=xNQi8wuM3DQ",
    emoji: "📚"
  },
  {
    title: "Personalized DR. GPT",
    description: "Advanced medical assistant providing personalized health guidance, symptom analysis, medical information, and healthcare support with professional medical knowledge.",
    badge: "HEALTHCARE",
    color: "from-green-500 to-blue-600",
    features: ["Health Guidance", "Symptom Analysis", "Medical Info", "Healthcare Support"],
    directUrl: "https://aidoctorgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=EKKIttUG0sI",
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
    emoji: "💑"
  }
];

const getVideoId = (url: string) => {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
  return match ? match[1] : null;
};

const handleAccessTool = (directUrl: string, toolName: string) => {
  console.log('🌀 Access Tool clicked:', toolName, 'URL:', directUrl);
  createTimePortalEffect(directUrl, toolName);
};

const SpecialServices = () => {
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
          {featuredGPTs.map((tool, index) => (
            <Card key={index} className="group bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 h-full flex flex-col">
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
                        src={`https://www.youtube.com/embed/${getVideoId(tool.videoUrl)}`}
                        title={`${tool.title} Demo`}
                        className="absolute inset-0 w-full h-full"
                        frameBorder="0"
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialServices;
