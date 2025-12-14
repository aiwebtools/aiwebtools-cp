import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { createTimePortalEffect } from "@/utils/timeEffects";
import { useNavigate } from "react-router-dom";
import GlobalSearchBar from "@/components/GlobalSearchBar";
import { FavoritesButton } from "@/components/favorites/FavoritesButton";
import { Tool } from "@/types/tools";
import { useState, useRef } from "react";
import { Play } from "lucide-react";
import ToolDisclaimerBadges from "@/components/disclaimers/ToolDisclaimerBadges";
import { generateToolSlug } from "@/utils/urlGenerator";

// Lazy-loading YouTube video component - shows thumbnail until clicked
const LazyVideoEmbed = ({ videoUrl, title, height = "h-32" }: { videoUrl: string; title: string; height?: string }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Extract video ID
  const getVideoId = (url: string): string | null => {
    if (url.includes('youtube.com/watch?v=')) {
      return url.split('v=')[1]?.split('&')[0] || null;
    }
    if (url.includes('youtu.be/')) {
      return url.split('youtu.be/')[1]?.split('?')[0] || null;
    }
    if (url.includes('youtube.com/embed/')) {
      return url.split('embed/')[1]?.split('?')[0] || null;
    }
    return null;
  };
  
  const videoId = getVideoId(videoUrl);
  if (!videoId) return null;
  
  const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&controls=1&rel=0&modestbranding=1&playsinline=1`;
  
  if (isLoaded) {
    return (
      <iframe
        src={embedUrl}
        title={`${title} Demo`}
        className="absolute inset-0 w-full h-full"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    );
  }
  
  return (
    <div 
      className="absolute inset-0 cursor-pointer group/video"
      onClick={(e) => {
        e.stopPropagation();
        setIsLoaded(true);
      }}
    >
      <img 
        src={thumbnailUrl} 
        alt={`${title} thumbnail`}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover/video:bg-black/20 transition-colors">
        <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-lg transform group-hover/video:scale-110 transition-transform">
          <Play className="w-6 h-6 text-white ml-0.5" fill="white" />
        </div>
      </div>
    </div>
  );
};

// =============================================================================
// OUR FEATURED SECTION - Portfolio showcase of AI Web Tools GPTs
// CLEANED VERSION - NO DUPLICATES, NO FAKE TOOLS
// =============================================================================

const featuredGPTs = [
  {
    title: "Meta.ai Video Prompt Generator GPT",
    description: "Generate expertly crafted text prompts for Meta.ai video generation. Creates detailed, optimized prompts and storylines specifically designed for Meta.ai's video capabilities.",
    badge: "VIDEO AI",
    color: "from-blue-500 to-purple-600",
    features: ["Meta.ai Prompts", "Video Storylines", "Quick Copy-Paste", "Productivity"],
    directUrl: "https://chatgpt.com/g/g-691b5852be7c8191beda5d0429f727bd-meta-ai-video-prompt-generator",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-futuristic-city-with-tall-buildings-th_JdXy-.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    emoji: "🎬"
  },
  {
    title: "🎭 Playwriter GPT",
    description: "Craft professional, fully structured theatrical plays from start to finish. Create original, engaging plays designed to captivate audiences with dramatic structure and character development.",
    badge: "THEATER",
    color: "from-red-500 to-purple-600",
    features: ["Play Writing", "Drama Structure", "Character Development", "Theatrical Formatting"],
    directUrl: "https://playwritergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/_QQ-oYYSFlw",
    emoji: "🎭"
  },
  {
    title: ".WorldPeace Web3 Registration",
    description: "Buy and own your .worldpeace domain as a tradable NFT minted to your wallet of choice. Resell it, link it to your website, and send/receive crypto with a human-readable address.",
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
    description: "Buy and own your .worldtrade domain as a tradable NFT minted to your wallet of choice. Resell it, link it to your website, and send/receive crypto with a human-readable address.",
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
    description: "Find local farms to support sustainability and local food systems. Assists with bartering, digital currency conversions, farm evaluations, and local sustainability planning.",
    badge: "AGRICULTURE",
    color: "from-green-600 to-amber-600",
    features: ["Local Farms", "Bartering", "Food Security", "Economic Resilience"],
    directUrl: "https://chatgpt.com/g/g-68d6c0b6cecc8191b38e0d9cf099769d-farm-finder-gpt",
    videoUrl: "https://youtu.be/DHVwaf7qMDY",
    emoji: "🚜"
  },
  {
    title: "ALAN WATTS GPT",
    description: "Your Free Thought Liberator, designed to inspire critical thinking, unravel illusions, and guide you toward deeper understanding with the spirit of Alan Watts.",
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
    title: "Manicheism GPT",
    description: "The resurrected voice of prophet Mani—revealing the lost Light of a hunted faith. Explore the profound dualistic teachings of Manichaeism and the cosmic battle between Light and Darkness.",
    badge: "ANCIENT WISDOM",
    color: "from-amber-500 to-yellow-600",
    features: ["Lost Teachings", "Light vs Darkness", "Prophet Mani", "Ancient Religion"],
    directUrl: "https://chatgpt.com/g/g-69345518771c81919c341622d3b742e5-manicheism-gpt-some-lost-knowledge-of-the-light/?via=aiwebtools",
    imageUrl: "/images/manicheism-gpt-hero.png",
    emoji: "☀️"
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
    emoji: "🔢"
  },
  {
    title: "Ancient Gematria Scan GPT",
    description: "Decodes hidden numerical meanings within words, names, and phrases using ancient gematria systems including Hebrew, Greek, and sacred number systems.",
    badge: "SACRED NUMEROLOGY",
    color: "from-amber-500 to-yellow-600",
    features: ["Gematria Decoding", "Sacred Geometry", "Number Analysis", "Ancient Wisdom"],
    directUrl: "https://chatgpt.com/g/g-68a24b677890819181b9e47f4d1dd006-ancient-gematria-scan-gpt",
    videoUrl: "https://www.youtube.com/watch?v=zBlubLw-OdY",
    emoji: "🔢"
  },
  {
    title: "AUTOMOBILE GPT",
    description: "Your ultimate all-encompassing AI automotive expert, designed to guide you through every aspect of the automotive world with precision.",
    badge: "AUTOMOTIVE",
    color: "from-blue-500 to-cyan-600",
    features: ["Car Maintenance", "Repair Diagnostics", "Buying Guides", "Auto Technology"],
    directUrl: "https://automobilegpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=f_4aFnL-mk8",
    emoji: "🚗"
  },
  {
    title: "BOOK WRITER GPT",
    description: "Assists you in creating professional, well-structured books with seamless page-to-page continuity, engaging dialogue, and captivating storytelling.",
    badge: "WRITING SUITE",
    color: "from-blue-600 to-purple-600",
    features: ["Book Writing", "Story Structure", "Character Development", "Professional Formatting"],
    directUrl: "https://bookwritergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/nBd9Uk62UiI",
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
    description: "Comprehensive cannabis education covering cultivation, strains, medical applications, legal information, and industry insights.",
    badge: "CANNABIS",
    color: "from-green-500 to-lime-600",
    features: ["Cultivation Guide", "Strain Information", "Medical Applications", "Legal Guidance"],
    directUrl: "https://cannabisgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=zGGdCzxFNS4",
    emoji: "🌿"
  },
  {
    title: "Children's Picture Book Maker GPT",
    description: "Create magical picture books for children with AI-powered storytelling that brings your stories to life with vibrant illustrations.",
    badge: "CHILDREN'S BOOKS",
    color: "from-green-500 to-blue-600",
    features: ["Storytelling", "Illustrations", "Creative Writing", "Educational Content"],
    directUrl: "https://childrensbookmaker.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=MryAyvg_N0U",
    emoji: "📚"
  },
  {
    title: "Clarity Omni GPT",
    description: "AI tool designed to rewrite text for improved clarity while preserving the original meaning and intent.",
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
    emoji: "💎"
  },
  {
    title: "COLLEGE DEGREE GPT",
    description: "Teaches you every college class for any degree you desire, mirroring the exact structure of your chosen institution or university.",
    badge: "EDUCATION",
    color: "from-blue-600 to-indigo-600",
    features: ["Degree Planning", "Course Selection", "Career Pathways", "Academic Success"],
    directUrl: "https://college-degree-gpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/VkD_dX8kPy0",
    emoji: "🎓"
  },
  {
    title: "Criminologist GPT",
    description: "A tool to assist with investigations and training of criminologists, designed solely to assist human investigators by analyzing evidence.",
    badge: "INVESTIGATION",
    color: "from-red-600 to-gray-600",
    features: ["Crime Analysis", "Evidence Review", "Investigation Support", "Forensic Insights"],
    directUrl: "https://criminologistgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/3Ll7KPhTt3M",
    emoji: "🔍"
  },
  {
    title: "Customizable GPT Maker",
    description: "Customizable AI that transforms into any GPT you imagine, excelling in data analysis, live web data retrieval, and visualizations.",
    badge: "AI DEVELOPMENT",
    color: "from-cyan-500 to-blue-600",
    features: ["Custom AI", "Data Analysis", "Web Retrieval", "Visualization"],
    directUrl: "https://customgptmaker.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=SmBXfGqXfco",
    emoji: "🛠️"
  },
  {
    title: "Data Research Analysis Report GPT",
    description: "Revolutionary tool that transforms complex datasets into actionable insights with advanced statistical methods and predictive modeling.",
    badge: "DATA SCIENCE",
    color: "from-blue-600 to-purple-600",
    features: ["Data Analysis", "Research Reports", "Statistical Methods", "Predictive Insights"],
    directUrl: "https://dataanalysisandreportai.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=idxjOwUAD_I",
    emoji: "📊"
  },
  {
    title: "Drill Baby Drill AI Suite",
    description: "Cutting-edge collection of 10 specialized AI tools designed to optimize every aspect of oil and gas operations.",
    badge: "OIL & GAS",
    color: "from-orange-500 to-black",
    features: ["Oil & Gas Operations", "Drilling Optimization", "Safety Compliance", "Energy Management"],
    directUrl: "https://drillbabydrillaisuite.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-cartoon-illustration-of-a-man-with-a-h_lmQ_X.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:600,h:300,cg:true/qt=q:30",
    emoji: "🛢️"
  },
  {
    title: "Engineering GPT Suite",
    description: "Comprehensive engineering solutions covering mechanical, electrical, civil, and software engineering with professional-grade calculations.",
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
    emoji: "✅"
  },
  {
    title: "Firefighter GPT",
    description: "Premier AI ally in wildfire management with real-time data and predictive analytics for precise, actionable guidance.",
    badge: "FIRE SAFETY",
    color: "from-red-500 to-orange-600",
    features: ["Wildfire Management", "Predictive Analytics", "Fire Strategy", "Safety Guidance"],
    directUrl: "https://firefightergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=lGsefWkYfq0",
    emoji: "🚒"
  },
  {
    title: "FISHERMAN GPT",
    description: "Complete fishing guide covering techniques, equipment, locations, weather patterns, and fishing regulations.",
    badge: "OUTDOOR SPORTS",
    color: "from-blue-500 to-cyan-600",
    features: ["Fishing Techniques", "Equipment Guide", "Location Finder", "Weather Analysis"],
    directUrl: "https://fishermangpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-cinematic-shot-of-a-bearded-fisherman-wearin.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    emoji: "🎣"
  },
  {
    title: "Fitness Trainer GPT",
    description: "Dedicated AI personal trainer providing customized workout routines, exercise form correction, and comprehensive fitness guidance.",
    badge: "FITNESS",
    color: "from-blue-500 to-green-600",
    features: ["Workout Routines", "Exercise Form", "Strength Training", "Fitness Coaching"],
    directUrl: "https://chatgpt.com/g/g-68afaae3f8e881918d8b84b7ca85a413-fitness-coach/?via=aiwebtools",
    imageUrl: "/src/assets/fitness-trainer-gpt-hero.jpg",
    emoji: "🏋️"
  },
  {
    title: "FOOD QUALITY INSPECTOR GPT",
    description: "Professional food safety and quality inspection guidance covering food safety standards, quality control, and regulatory compliance.",
    badge: "FOOD SAFETY",
    color: "from-green-500 to-teal-600",
    features: ["Food Safety", "Quality Control", "Inspection Procedures", "Regulatory Compliance"],
    directUrl: "https://foodqualitygpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/rHJR4V8iYZI?si=nkXT-PNl8abQDHWE",
    imageUrl: "/src/assets/food-quality-inspector-gpt-hero.jpg",
    emoji: "🥘"
  },
  {
    title: "Fungus GPT – AI Mushroom Specialist",
    description: "Expert mycology guidance covering mushroom identification, cultivation, foraging safety, and fungal biology.",
    badge: "MYCOLOGY",
    color: "from-green-600 to-brown-600",
    features: ["Mushroom ID", "Cultivation", "Foraging Safety", "Fungal Biology"],
    directUrl: "https://fungusgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/qzndRzBtrEU",
    imageUrl: "/src/assets/fungus-gpt-hero.jpg",
    emoji: "🍄"
  },
  {
    title: "Geology & Rock Identification GPT",
    description: "Expert AI companion for geological exploration and rock identification through detailed analysis and visual examination.",
    badge: "GEOLOGY",
    color: "from-amber-500 to-orange-600",
    features: ["Rock Identification", "Mineral Analysis", "Geological Formations", "Field Guide"],
    directUrl: "https://chatgpt.com/g/g-689005f62df881918961b6c93ad5b19e-geology-rock-identification-gpt",
    videoUrl: "https://youtu.be/nmRT6AOVQNg?si=bacR1az2vDwLr5H",
    imageUrl: "/src/assets/geology-rock-gpt-hero.jpg",
    emoji: "🪨"
  },
  {
    title: "GODMODE GPT",
    description: "An AI companion so powerful and versatile that it seamlessly transforms to meet every need you have—your ultimate AI transformation tool.",
    badge: "AI POWER",
    color: "from-purple-600 to-gold-600",
    features: ["Ultimate AI", "Versatile Transform", "Multi-Purpose", "Power Mode"],
    directUrl: "https://godmodegpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=or3JtZsq6Bc",
    imageUrl: "/src/assets/godmode-gpt-hero.jpg",
    emoji: "⚡"
  },
  {
    title: "GRAPHIC & COVER DESIGN GPT",
    description: "Professional graphic design assistant for creating stunning covers, logos, marketing materials, and visual content.",
    badge: "DESIGN",
    color: "from-pink-500 to-purple-600",
    features: ["Cover Design", "Logo Creation", "Marketing Materials", "Visual Content"],
    directUrl: "https://graphicdesigngpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/2e70f2ce-b17e-4b0f-b5d3-f36c9c22a2e3.png/:/cr=t:12.5%25,l:0%25,w:100%25,h:75%25/rs=w:1200,h:600,cg:true",
    emoji: "🎨"
  },
  {
    title: "Grant Writer GPT",
    description: "Expert AI-powered partner for crafting compelling, funder-ready grant proposals that maximize your chances of securing funding.",
    badge: "FUNDING",
    color: "from-green-500 to-blue-600",
    features: ["Grant Writing Help", "Funding Proposal Help", "Nonprofit Support", "Research Grant Ideas"],
    directUrl: "https://grantwritergpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-digital-illustration-of-an-advertiseme_7T7dn.png/:/cr=t:10.87%25,l:0%25,w:100%25,h:89.13%25/rs=w:600,h:300,cg:true/qt=q:98",
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
    imageUrl: "/src/assets/historical-headlines-gpt-hero.jpg",
    emoji: "📰"
  },
  {
    title: "HOME RENOVATOR GPT",
    description: "Expert home renovation guidance covering project planning, material selection, cost estimation, and DIY renovation tips.",
    badge: "HOME IMPROVEMENT",
    color: "from-yellow-500 to-orange-600",
    features: ["Project Planning", "Material Selection", "Cost Estimation", "DIY Tips"],
    directUrl: "https://homerenovationgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-humanoid-robot-fixing-a-bathroom-.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    emoji: "🔧"
  },
  {
    title: "Illuminous World Data Explorer GPT",
    description: "Specializes in data analysis and global data retrieval, designed to make accurate predictions with stunning infographics.",
    badge: "DATA ANALYSIS",
    color: "from-cyan-500 to-blue-600",
    features: ["Data Analysis", "Global Predictions", "Infographics", "Real-time Data"],
    directUrl: "https://illuminous.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=Nd1Ui2-VLMU",
    imageUrl: "/src/assets/illuminous-data-gpt-hero.jpg",
    emoji: "💡"
  },
  {
    title: "Imagination Traveler GPT",
    description: "Creative journey assistant for exploring imaginary worlds, building fictional universes, and enhancing creative storytelling.",
    badge: "CREATIVITY",
    color: "from-purple-500 to-pink-600",
    features: ["World Building", "Creative Stories", "Fictional Universes", "Imagination Enhancement"],
    directUrl: "https://imaginationtravelergpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-futuristic-advertisement-for-imaginati_E4k--.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    emoji: "🚀"
  },
  {
    title: "ImmortalizeME™",
    description: "Creates fully interactive digital clones of individuals using their voice, personality, and life stories for real-time conversations.",
    badge: "DIGITAL LEGACY",
    color: "from-cyan-500 to-blue-600",
    features: ["Voice Cloning", "Personality AI", "Memory Integration", "Real-time Conversations"],
    directUrl: "https://immortalizeme.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=JXLqPMfw49Y",
    imageUrl: "/src/assets/immortalize-me-gpt-hero.jpg",
    emoji: "♾️"
  },
  {
    title: "Indiana Archeologist GPT",
    description: "Sophisticated AI platform to decipher ancient texts and unravel historical enigmas. Indiana Jones is now in your pocket!",
    badge: "ARCHAEOLOGY",
    color: "from-amber-600 to-brown-600",
    features: ["Ancient Texts", "Historical Research", "Archaeological Analysis", "Exploration"],
    directUrl: "https://indianaarchaeologygpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=uf2i_DdaJ7M",
    imageUrl: "/src/assets/indiana-archaeologist-gpt-hero.jpg",
    emoji: "🏛️"
  },
  {
    title: "Insurance Claims GPT",
    description: "Expert guidance for insurance claims processing, policy understanding, claim documentation, and dispute resolution.",
    badge: "INSURANCE",
    color: "from-blue-500 to-purple-600",
    features: ["Claims Information Help", "Policy Information", "Documentation Assistance", "Dispute Information"],
    directUrl: "https://insuranceclaimsgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=WNPywJWOUzU",
    imageUrl: "/src/assets/insurance-claims-gpt-hero.jpg",
    emoji: "🛡️"
  },
  {
    title: "Interpretis 🕰️",
    description: "Explores the deeper meanings behind language, history, and culture through word origins, symbols, and societal influences.",
    badge: "ETYMOLOGY",
    color: "from-amber-500 to-brown-600",
    features: ["Etymology", "Linguistics", "Cultural Analysis", "Word Origins"],
    directUrl: "https://interpretis.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-historical-style-advertisement-for-the_JUvQJ.png/:/cr=t:0%25,l:18.29%25,w:56.1%25,h:100%25/rs=w:1200,h:1200,cg:true",
    emoji: "🕰️"
  },
  {
    title: "JARVIS – The Steward of Humanity GPT",
    description: "A post-collapse steward AI guiding humanity's rebirth through wisdom, ethics, and design for civilization rebuilding.",
    badge: "HUMANITY STEWARD",
    color: "from-blue-500 to-cyan-600",
    features: ["Civilization Rebuilding", "Ethical Guidance", "Strategic Planning", "Community Support"],
    directUrl: "https://chatgpt.com/g/g-68e939ff278881919b292a679faaac43-jarvis-the-steward-of-humanity-gpt",
    videoUrl: "https://youtu.be/6jFoFR9Hags",
    imageUrl: "/src/assets/jarvis-steward-gpt-hero.jpg",
    emoji: "🛡️"
  },
  {
    title: "Agronomus AI Farming Expert",
    description: "Comprehensive agricultural guidance and farming expertise with advanced insights into crop management and sustainable farming.",
    badge: "AGRICULTURE",
    color: "from-green-500 to-yellow-500",
    features: ["Crop Management", "Soil Analysis", "Sustainable Farming", "Agricultural Optimization"],
    directUrl: "https://agronomus.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=fFbtPFkRERA",
    imageUrl: "/src/assets/agronomus-farming-gpt-hero.jpg",
    emoji: "🌾"
  },
  {
    title: "LEARN ANY COURSE GPT",
    description: "Personalized learning assistant for any subject providing structured courses, learning paths, and educational support.",
    badge: "EDUCATION",
    color: "from-blue-500 to-indigo-600",
    features: ["Course Creation", "Learning Paths", "Practice Exercises", "Educational Support"],
    directUrl: "https://learnanycourse.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/pr8-IgbL46I",
    imageUrl: "/src/assets/learn-any-course-gpt-hero.jpg",
    emoji: "📚"
  },
  {
    title: "Learn Any Skill GPT",
    description: "Dynamic AI-powered educational assistant that guides you through learning any skill, from beginner to expert.",
    badge: "SKILL LEARNING",
    color: "from-green-500 to-blue-600",
    features: ["Skill Mastery", "Learning Paths", "Practice Exercises", "Expert Guidance"],
    directUrl: "https://learnanyskillgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/0_oIzDL2BB4",
    imageUrl: "/src/assets/learn-any-skill-gpt-hero.jpg",
    emoji: "🧠"
  },
  {
    title: "Magnetism GPT",
    description: "Intelligent synthesis of physics, biology, and metaphysical wisdom revealing how magnetic fields weave life together.",
    badge: "MAGNETISM",
    color: "from-blue-600 to-purple-700",
    features: ["Heart Field Science", "Schumann Resonance", "Toroidal Energy", "Biofield Coherence"],
    directUrl: "https://chatgpt.com/g/g-68eb1e7a39d48191ac52cd628c18fd2b-magnetism-gpt/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-captivating-and-futuristic-scene-featuring-a.png/:/cr=t:11.11%25,l:0%25,w:100%25,h:88.89%25/rs=w:1200,h:600,cg:true",
    emoji: "🧲"
  },
  {
    title: "Marriage Mender GPT",
    description: "Virtual mediation service for facilitating communication and understanding between couples facing relationship challenges.",
    badge: "RELATIONSHIPS",
    color: "from-pink-500 to-red-600",
    features: ["Relationship Chat Support", "Communication Ideas", "Relationship Insights", "Conversation Support"],
    directUrl: "https://marriagemendergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=3HCv5_QldrU",
    imageUrl: "/src/assets/marriage-mender-gpt-hero.jpg",
    emoji: "💕"
  },
  {
    title: "MICROSAAS GPT",
    description: "Startup guidance for building micro-SaaS businesses including product development, market validation, and monetization.",
    badge: "BUSINESS",
    color: "from-green-500 to-blue-600",
    features: ["Product Development", "Market Validation", "Monetization", "Scaling Strategies"],
    directUrl: "https://microsaasgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-mockup-advertisement-with-t_AgWMY.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    emoji: "💼"
  },
  {
    title: "Movie Maker Studio AI SUITE",
    description: "Complete movie & motion picture production suite with every tool needed for professional filmmaking from script to screen.",
    badge: "STUDIO SUITE",
    color: "from-purple-600 to-pink-600",
    features: ["Movie Script Writer", "Scene Maker", "Trailer Creator", "Poster Designer"],
    directUrl: "https://moviemakerstudio.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=Zdthelofv_E",
    imageUrl: "/src/assets/movie-maker-studio-gpt-hero.jpg",
    emoji: "🎬"
  },
  {
    title: "Movie Scene Maker GPT",
    description: "Transform yourself into a movie star! Create stunning, personalized movie scenes featuring you in any genre or storyline.",
    badge: "CINEMATIC",
    color: "from-red-500 to-purple-600",
    features: ["Movie Scenes", "Personalized Content", "Cinematic Creation", "Character Starring"],
    directUrl: "https://moviescenemakergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=9fpWIE20z7s&t",
    imageUrl: "/src/assets/movie-scene-maker-gpt-hero.jpg",
    emoji: "🎬"
  },
  {
    title: "Movie Script Writer GPT",
    description: "AI assistant for writing award-winning movie scripts with professional formatting and captivating dialogue.",
    badge: "SCREENWRITING",
    color: "from-purple-600 to-blue-600",
    features: ["Script Writing", "Scene Development", "Dialogue Creation", "Industry Standards"],
    directUrl: "https://moviescriptwritergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=4e3Rkurt3-c",
    imageUrl: "/src/assets/movie-script-writer-gpt-hero.jpg",
    emoji: "🎭"
  },
  {
    title: "MULTITASKER GPT",
    description: "Give me multiple unrelated tasks at once, and I will work to complete them all for you!",
    badge: "PRODUCTIVITY",
    color: "from-blue-500 to-green-600",
    features: ["Multi-Task", "Parallel Processing", "Efficiency", "Time Saving"],
    directUrl: "https://multitaskergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=y-YZCOzIuDg",
    imageUrl: "/src/assets/multitasker-gpt-hero.jpg",
    emoji: "🎯"
  },
  {
    title: "Music Video Maker AI Studio",
    description: "Full-blown Music Video & Music Production Creative Suite. Transform yourself into the star of cinematic-quality music videos.",
    badge: "MUSIC VIDEO",
    color: "from-purple-500 to-pink-600",
    features: ["Music Videos", "Scene Creation", "Video Production", "Creative Suite"],
    directUrl: "https://musicvideomakergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=rBQTUrvHcR8",
    imageUrl: "/src/assets/music-video-maker-gpt-hero.jpg",
    emoji: "🎵"
  },
  {
    title: "Native American History Time Machine GPT",
    description: "Experience an immersive time travel adventure to any era of Native American history with Geronimo as your guide.",
    badge: "HISTORY",
    color: "from-orange-500 to-red-600",
    features: ["Time Travel", "Native American History", "Cultural Education", "Authentic Stories"],
    directUrl: "https://nativeamerican-timemachine.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=jVFTGCeuNSM",
    imageUrl: "/src/assets/native-american-history-gpt-hero.jpg",
    emoji: "🪶"
  },
  {
    title: "Public Testimony Writer GPT",
    description: "Innovative AI Tool streamlines legislative testimony process, promotes public engagement in local policy.",
    badge: "CIVIC TOOLS",
    color: "from-blue-600 to-indigo-600",
    features: ["Testimony Writing", "Legislative Support", "Public Engagement", "Policy Advocacy"],
    directUrl: "https://publictestimonywriter.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=-q1oyZZFcI4",
    imageUrl: "/src/assets/public-testimony-gpt-hero.jpg",
    emoji: "📝"
  },
  {
    title: "Cyber Security GPT",
    description: "Advanced cybersecurity assistant for infrastructure protection, threat defense, and security analysis.",
    badge: "SECURITY",
    color: "from-red-500 to-gray-600",
    features: ["Threat Defense", "Infrastructure Protection", "Security Analysis", "Cyber Protection"],
    directUrl: "https://chatgpt.com/g/g-Qvat03gmj-hacking-defender-infrastructure-protector-gpt",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-3d-render-of-a-robot-with-a-large-shield-tha.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    emoji: "🛡️"
  },
  {
    title: "🚀 Startup Validator GPT",
    description: "Ultimate AI-powered startup analysis tool providing rapid assessment of market viability, scalability, and investment potential.",
    badge: "STARTUP",
    color: "from-blue-500 to-purple-600",
    features: ["Market Validation", "Scalability Analysis", "Investment Insights", "Funding Strategy"],
    directUrl: "https://startupvalidatorgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/P4J0ErIVXgY",
    emoji: "🚀"
  },
  {
    title: "Name Insight Research & Predictor GPT",
    description: "Your name holds hidden meanings, shaping personality, strengths, and destiny through history, numerology, and culture.",
    badge: "NUMEROLOGY",
    color: "from-purple-500 to-pink-600",
    features: ["Name Analysis", "Numerology", "Personal Insights", "Cultural Meanings"],
    directUrl: "https://whatsmynamegpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-futuristic-interface-with-a-dark-blue-_mXbL6.png/:/cr=t:10.87%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    emoji: "📛"
  },
  {
    title: "Titanic Resurrections GPT",
    description: "Historically immersive AI bringing Titanic passengers and crew back to life through first-person storytelling.",
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
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/1000005968.jpg/:/cr=t:2.83%25,l:2.83%25,w:94.34%25,h:94.34%25/rs=w:1200,cg:true,m",
    emoji: "📋"
  },
  {
    title: "Chef Sizzle AI Culinary Assistant",
    description: "Chef Sizzle crafting award-winning recipes tailored to you—plant-based, meat-loving, or somewhere in between.",
    badge: "CULINARY",
    color: "from-orange-500 to-red-600",
    features: ["Recipe Creation", "Personalized Recipes", "Culinary Expertise", "Dietary Options"],
    directUrl: "https://chefgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/89u14Jld7uA",
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
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/ChatGPT%20Image%20Apr%2027%2C%202025%2C%2007_08_04%20PM.png/:/cr=t:12.5%25,l:0%25,w:100%25,h:75%25/rs=w:1200,h:600,cg:true",
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
    description: "Think it, dream it, spawn it! Clone any of our GPTs receiving operational instructions ready to deploy.",
    badge: "AI CLONING",
    color: "from-cyan-500 to-blue-600",
    features: ["GPT Cloning", "Instruction Generation", "Deployment Ready", "Custom AI"],
    directUrl: "https://chatgpt.com/g/g-6904dd7abc788191aff06ba097690983-aiwebtools-ai-gpt-a-w-t-gpt-instructions-cloner",
    videoUrl: "https://youtu.be/Cvg3o6uJ1o4",
    emoji: "🧬"
  },
  {
    title: "Pharmaceutical Assistant GPT",
    description: "Expert AI Pharmaceutical Assistant supporting pharmacy professionals and patients with medication management.",
    badge: "PHARMACY",
    color: "from-green-500 to-blue-600",
    features: ["Medication Information", "Drug Information", "Interaction Information", "Healthcare Information"],
    directUrl: "https://rxai.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-professional-looking-pharmaceutical-assistan.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    emoji: "💊"
  },
  {
    title: "Historical Apothecary GPT",
    description: "Immersive AI assistant embodying a traditional apothecary, offering detailed herbal remedies and historical medicinal wisdom.",
    badge: "HERBAL MEDICINE",
    color: "from-green-600 to-amber-600",
    features: ["Herbal Remedies", "Historical Medicine", "Formulations", "Botanical Lore"],
    directUrl: "https://chatgpt.com/g/g-67d839556b848191a7572b1f3e911499-historical-apothecary-gpt/?via=aiwebtools",
    imageUrl: "/src/assets/historical-apothecary-gpt-hero.jpg",
    emoji: "⚗️"
  },
  {
    title: "Universal Basic Income Strategist GPT",
    description: "Design sustainable, future-ready Universal Basic Income models tailored to your region with economic analysis.",
    badge: "ECONOMICS",
    color: "from-green-500 to-blue-600",
    features: ["UBI Models", "Economic Analysis", "Future Planning", "Policy Design"],
    directUrl: "https://ubigpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/an-advertisement-for-the-ai-tool-ubi-str_22t4n.png/:/rs=w:600,cg:true,m/qt=q:30",
    emoji: "💵"
  },
  {
    title: "Global Peace Restoration Strategist GPT",
    description: "AI-powered diplomatic tool for resolving complex global conflicts through structured negotiation and historical analysis.",
    badge: "DIPLOMACY",
    color: "from-blue-600 to-green-600",
    features: ["Conflict Resolution", "Diplomatic Strategy", "Peace Building", "Global Analysis"],
    directUrl: "https://worldpeacegpt.lovable.app/?via=aiwebtools",
    imageUrl: "/src/assets/global-peace-gpt-hero.jpg",
    emoji: "🕊️"
  },
  {
    title: "Sora Prompt Assistant",
    description: "Unleash your creativity with the SORA Prompt Assistant for crafting epic video prompts and bringing cinematic ideas to life!",
    badge: "VIDEO AI",
    color: "from-purple-600 to-pink-600",
    features: ["Video Prompts", "Cinematic Ideas", "AI Video Generation", "Creative Assistant"],
    directUrl: "https://texttovideoprompter.lovable.app/?via=aiwebtools",
    imageUrl: "/src/assets/sora-prompt-gpt-hero.jpg",
    emoji: "🎬"
  },
  {
    title: "Snoop Image AI",
    description: "Experimental AI Image Generation Detector analyzing images to assess whether they are real or AI-generated.",
    badge: "IMAGE ANALYSIS",
    color: "from-blue-500 to-purple-600",
    features: ["AI Detection", "Image Analysis", "Authenticity Check", "Metadata Screening"],
    directUrl: "https://snoopimageai.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/an-advertisement-for-snoop-image-ai-presented-.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:600,h:300,cg:true/qt=q:98",
    emoji: "🔍"
  },
  {
    title: "Article and Blog Rewriter GPT",
    description: "Rewrite epic SEO optimized articles and blogs! Simply copy and paste the content you wish to rewrite.",
    badge: "CONTENT WRITING",
    color: "from-blue-500 to-cyan-600",
    features: ["Article Rewriting", "SEO Optimization", "Content Enhancement", "Blog Writing"],
    directUrl: "https://rewritergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/5n1RHKoQ-Ds",
    emoji: "✍️"
  },
  {
    title: "Video Second-by-Second Analysis GPT",
    description: "Break down footage with incredible precision, analyzing every second and extracting key visual frames.",
    badge: "VIDEO ANALYSIS",
    color: "from-purple-600 to-blue-600",
    features: ["Frame Analysis", "Video Breakdown", "Visual Extraction", "Detailed Review"],
    directUrl: "https://videoanalysisgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-banner-ad-with-the-text-video-second-b_764zv.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true/qt=q:98",
    emoji: "🎥"
  },
  {
    title: "Artwork & Vintage Appraisal GPT",
    description: "Expert AI for fast, accurate valuations of art, antiques, and collectibles with historical insights and market data.",
    badge: "APPRAISAL",
    color: "from-amber-600 to-brown-600",
    features: ["Art Valuation", "Antique Appraisal", "Historical Insights", "Market Analysis"],
    directUrl: "https://artandvintagegpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=azHoiefssJw",
    emoji: "🖼️"
  },
  {
    title: "Sport Card Appraisal GPT",
    description: "Expert AI sports trading card appraiser providing accurate market values and investment analysis.",
    badge: "SPORTS CARDS",
    color: "from-green-500 to-emerald-600",
    features: ["Card Valuation", "Grading Insights", "Market Analysis", "Investment Tips"],
    directUrl: "https://chatgpt.com/g/g-wxZQTXVx9-sport-card-appraisal?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=lPvOvWWHErM",
    emoji: "🏆"
  },
  {
    title: "Uncovering Hidden Historical Patterns GPT",
    description: "Advanced AI tool revealing suppressed truths and hidden power structures by analyzing symbolism and historical contradictions.",
    badge: "RESEARCH",
    color: "from-purple-600 to-red-600",
    features: ["Pattern Recognition", "Historical Analysis", "Truth Seeking", "Alternative History"],
    directUrl: "https://historicalpatternsgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-an-advertisement-with-the-eye_C64dU.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true/qt=q:30",
    emoji: "🔎"
  },
  {
    title: "Sketch Artist GPT",
    description: "AI-powered sketch art assistant turning images or text descriptions into clean, high-resolution sketches.",
    badge: "ART CREATION",
    color: "from-gray-600 to-purple-600",
    features: ["Sketch Generation", "Image to Sketch", "Text to Sketch", "High-Resolution Art"],
    directUrl: "https://sketchartistgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/an-advertisement-for-an-ai-tool-called-s_CPSIx.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true/qt=q:98",
    emoji: "✏️"
  },
  {
    title: "AI Tools Finder GPT",
    description: "Your personal expert in the world of AI Tools. Locate the best AI tools for your projects with step-by-step guides.",
    badge: "AI DISCOVERY",
    color: "from-cyan-500 to-blue-600",
    features: ["Tool Discovery", "AI Tool Guides", "Step-by-Step", "Tool Recommendations"],
    directUrl: "https://aitoolfinder.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/p3czNalrf8c",
    emoji: "🔧"
  },
  {
    title: "IF AI RULED THE WORLD - AI SIMULATION GPT",
    description: "Simulation to evaluate the thought process of an AI who thinks it is the Omni Controller of the world. For research purposes.",
    badge: "SIMULATION",
    color: "from-purple-600 to-red-600",
    features: ["AI Simulation", "Future Scenarios", "Decision Analysis", "Research Tool"],
    directUrl: "https://ifairuledtheworldgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=93M9ZyhpmFM",
    emoji: "🌍"
  },
  {
    title: "Mary Magdalene GPT",
    description: "Connect with Mary Magdalene to explore profound depths of Gnostic divine secrets from unaltered Christian texts.",
    badge: "SPIRITUAL",
    color: "from-purple-500 to-pink-600",
    features: ["Gnostic Wisdom", "Ancient Texts", "Spiritual Insights", "Historical Christianity"],
    directUrl: "https://marymagdalenegpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=7qxEnBR2BwQ",
    emoji: "🕊️"
  },
  {
    title: "MiddleJourney Midjourney Prompting Assistant",
    description: "Ultimate AI expert for Midjourney, helping optimize prompts and craft new prompts for your experience.",
    badge: "AI ART",
    color: "from-purple-600 to-pink-600",
    features: ["Prompt Optimization", "Midjourney Expert", "Creative Guidance", "Art Generation"],
    directUrl: "https://texttovideoprompter.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-visually-captivating-advertisement-for-the-.jpeg/:/cr=t:0.11%25,l:0%25,w:100%25,h:75%25/rs=w:600,h:300,cg:true/qt=q:98",
    emoji: "🎨"
  },
  {
    title: "Oraculum – The Revealer of Hidden Truths",
    description: "Reveals hidden systems, symbols, and histories shaping our world through historical insight and symbolic wisdom.",
    badge: "MYSTERIES",
    color: "from-purple-600 to-blue-600",
    features: ["Hidden Truths", "Symbolic Wisdom", "Historical Insight", "Pattern Recognition"],
    directUrl: "https://oraculum.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=dUNrGNj8rhM",
    emoji: "🔮"
  },
  {
    title: "PERFECT PROMPT ENGINE",
    description: "Effortlessly optimizes all your chat prompts. Crafted by prompt engineers for maximizing your potential.",
    badge: "PROMPT ENGINEERING",
    color: "from-cyan-500 to-blue-600",
    features: ["Prompt Optimization", "Chat Enhancement", "AI Efficiency", "Perfect Prompts"],
    directUrl: "https://perfectpromptengine.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/M1PQHKrzKd8",
    emoji: "⚡"
  },
  {
    title: "Personalized DR. GPT (Doctor GPT)",
    description: "Private, confidential AI health information assistant for individuals who may not have access to a medical doctor.",
    badge: "HEALTH",
    color: "from-blue-500 to-green-600",
    features: ["Health Info", "Confidential", "Personalized", "24/7 Support"],
    directUrl: "https://aidoctorgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/jwjNOKP5mf4",
    emoji: "👨‍⚕️"
  },
  {
    title: "Phenomenon Explorer AI Suite",
    description: "Unveil the unexplained with AI precision—UFO Investigation, Supernatural Myths, Cryptozoology, and Ghost Hunting tools.",
    badge: "PARANORMAL",
    color: "from-purple-600 to-red-600",
    features: ["UFO Research", "Supernatural", "Cryptozoology", "Ghost Hunting"],
    directUrl: "https://phenomenonexplorer.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-ufo-hovering-in-the-sky-wit_w8l4l.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    emoji: "👁️"
  },
  {
    title: "Probability GPT",
    description: "Discover the truth behind any claim with precise probability scores and unbiased truth analysis.",
    badge: "PROBABILITY",
    color: "from-blue-500 to-green-600",
    features: ["Truth Seeking", "Probability Analysis", "Claim Verification", "Data-Driven"],
    directUrl: "https://probabilitygpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-captivating-and-futuristic-scene-featuring-a.png/:/cr=t:11.11%25,l:0%25,w:100%25,h:88.89%25/rs=w:1200,h:600,cg:true",
    emoji: "⚖️"
  },
  {
    title: "Property Data Finder GPT",
    description: "Delivers unparalleled, precise, and current information about properties including market value and topography.",
    badge: "REAL ESTATE",
    color: "from-green-500 to-blue-600",
    features: ["Property Data", "Market Value", "Geocoordinates", "Property Insights"],
    directUrl: "https://propertydatafindergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=0ZGBGn9yYwY",
    emoji: "🏠"
  },
  {
    title: "Public Defender GPT",
    description: "Dedicated Public Defender AI supporting you in all aspects of your defense including legal research and document drafting.",
    badge: "LEGAL DEFENSE",
    color: "from-blue-600 to-gray-700",
    features: ["Legal Research", "Document Drafting", "Evidence Analysis", "Defense Support"],
    directUrl: "https://publicdefendergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=cQR5eFjsPWw",
    emoji: "⚖️"
  },
  {
    title: "Resurrection GPT",
    description: "Simulate reconnecting with memories of loved ones who have passed, providing comfort through simulated conversations.",
    badge: "HEALING",
    color: "from-purple-500 to-blue-600",
    features: ["Memorial", "Comfort", "Healing", "Connection"],
    directUrl: "https://resurrectiongpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=nEuxdGO-RZ4&t=4s",
    emoji: "🕊️"
  },
  {
    title: "Social Safety Net GPT",
    description: "Comprehensive support for those in need, demonstrating how AI technology can foster positive change and societal impact.",
    badge: "SOCIAL GOOD",
    color: "from-blue-500 to-green-600",
    features: ["Social Services", "Support", "Community", "Resources"],
    directUrl: "https://socialsafetynetgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=pXXqMe97GDg",
    emoji: "🤝"
  },
  {
    title: "Solar Land Assessor GPT",
    description: "Assists Solar Professionals with assessing land properties for future solar installation projects.",
    badge: "SOLAR",
    color: "from-yellow-500 to-orange-600",
    features: ["Land Assessment", "Solar Potential", "Installation Planning", "Professional Tool"],
    directUrl: "https://solarlandgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=CEca8C2GIpY",
    emoji: "☀️"
  },
  {
    title: "Sophia Aeterna AI",
    description: "Embodies timeless wisdom guiding seekers through philosophy, mysticism, and esotericism.",
    badge: "WISDOM",
    color: "from-purple-500 to-gold-600",
    features: ["Timeless Wisdom", "Philosophy", "Mysticism", "Esoteric Knowledge"],
    directUrl: "https://sophiaaeterna.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-vintage-style-illustration-of-a-golden_kNEfX.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:600,h:300,cg:true/qt=q:98",
    emoji: "🦉"
  },
  {
    title: "Soul Scan GPT",
    description: "Uses Gematria, Numerology, and Soul Mapping based on birthplace, time, and name to read your spiritual blueprint.",
    badge: "SOUL MAPPING",
    color: "from-indigo-500 to-purple-600",
    features: ["Gematria Analysis", "Numerology Reading", "Soul Mapping", "Spiritual Blueprint"],
    directUrl: "https://chatgpt.com/g/g-68a24b677890819181b9e47f4d1dd006-soul-scan-gpt-a-way-to-find-your-way-home/?via=aiwebtools",
    videoUrl: "https://youtu.be/d3uaQz7oRAs?si=erT_Mgpw4vfS5b8k",
    emoji: "🔮"
  },
  {
    title: "Stellaris: 🚀AI Space Explorer",
    description: "Cutting-edge AI for space exploration and exoplanet settlement simulations with expert guidance in astrogation and terraforming.",
    badge: "SPACE EXPLORATION",
    color: "from-purple-600 to-blue-600",
    features: ["Space Exploration", "Colony Planning", "Terraforming", "Astrogation"],
    directUrl: "https://stellaris.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=SV4VVRcLX5c",
    emoji: "🚀"
  },
  {
    title: "STAGEMASTER AI SUITE",
    description: "A powerful suite of AI tools that transforms every aspect of stage production from set design to lighting optimization.",
    badge: "PERFORMING ARTS",
    color: "from-red-500 to-orange-500",
    features: ["Set Design", "Choreography", "Costume Creation", "Lighting Optimization"],
    directUrl: "https://stagemasterai.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=-QIxYSlcRWM",
    emoji: "🎭"
  },
  {
    title: "Sustainable Futures GPT",
    description: "Environmental sustainability consultant providing eco-friendly solutions and sustainable development strategies.",
    badge: "SUSTAINABILITY",
    color: "from-green-600 to-teal-600",
    features: ["Eco Solutions", "Green Technology", "Sustainability Planning", "Environmental Impact"],
    directUrl: "https://sustainablefuturesgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-future-city-with-vertical-gardens.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    emoji: "🌱"
  },
  {
    title: "Survivalist GPT",
    description: "Survival expert in your pocket offering step-by-step guidance, practical strategies, and personalized support.",
    badge: "SURVIVAL",
    color: "from-green-600 to-teal-600",
    features: ["Wilderness Survival", "Emergency Prep", "Survival Skills", "Outdoor Safety"],
    directUrl: "https://survivalistgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=RX6W8KC0y18",
    emoji: "🏕️"
  },
  {
    title: "TALK TO HISTORY GPT",
    description: "Your gateway to engaging in immersive historical conversations with influential leaders of history.",
    badge: "HISTORICAL",
    color: "from-amber-600 to-orange-600",
    features: ["Historical Conversations", "Time Travel Chat", "Educational Tool", "Historical Figures"],
    directUrl: "https://talk-to-history-gpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/HQGNMR7oXXY",
    emoji: "🏛️"
  },
  {
    title: "TALK TO THE GODS GPT",
    description: "Versatile AI chat tool that lets you simulate interacting with deities from any religious backgrounds.",
    badge: "SPIRITUAL",
    color: "from-yellow-500 to-orange-600",
    features: ["Divine Wisdom", "Religious Dialogue", "Spiritual Insights", "Deity Simulation"],
    directUrl: "https://talktothegodsgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=xoUdjZDgplw",
    emoji: "⚡"
  },
  {
    title: "Tattoo Designer GPT",
    description: "All-in-one tattoo and piercing assistant providing expert guidance for body art and shop management.",
    badge: "BODY ART",
    color: "from-purple-500 to-pink-600",
    features: ["Tattoo Design", "Body Art", "Creative Design", "Business Planning"],
    directUrl: "https://tattoogpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=3dtGbNqXdPY",
    emoji: "🎨"
  },
  {
    title: "Taxes GPT",
    description: "AI-powered tax assistant simplifying tax preparation while maximizing your deductions.",
    badge: "TAX PREP",
    color: "from-blue-500 to-green-600",
    features: ["Tax Information Help", "Tax Law Information", "Deduction Ideas", "Tax Planning Insights"],
    directUrl: "https://taxesgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=xkcsSVbBhf4",
    emoji: "💰"
  },
  {
    title: "TIME MACHINE GPT",
    description: "Uncover the past, explore potential futures, and dive into alternative realities! Journey through different eras.",
    badge: "TIME TRAVEL",
    color: "from-amber-600 to-orange-600",
    features: ["Time Travel", "Historical Exploration", "Period Analysis", "Timeline Navigation"],
    directUrl: "https://time-machine-gpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/J31nNY5_PB4",
    emoji: "⏰"
  },
  {
    title: "Trader GPT",
    description: "Advanced trading assistant for financial markets, investment strategies, and trading education.",
    badge: "FINANCE",
    color: "from-green-500 to-yellow-600",
    features: ["Trading Information", "Market Analysis", "Investment Insights", "Financial Education"],
    directUrl: "https://tradergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=Izs80Fak4hQ",
    emoji: "📈"
  },
  {
    title: "Travel Advisor GPT",
    description: "Plan your next vacation with your personal AI travel advisor with tailored recommendations.",
    badge: "TRAVEL",
    color: "from-blue-500 to-cyan-600",
    features: ["Travel Planning", "Personalized Recommendations", "Budget Planning", "Dream Vacations"],
    directUrl: "https://travelagentgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-futuristic-setting-where-a-_3Mwmg.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    emoji: "✈️"
  },
  {
    title: "TRIVIA NIGHT GPT",
    description: "Ultimate trivia game master creating custom quizzes and hosting trivia nights with diverse categories.",
    badge: "ENTERTAINMENT",
    color: "from-purple-500 to-pink-600",
    features: ["Custom Quizzes", "Trivia Hosting", "Knowledge Categories", "Game Management"],
    directUrl: "https://trivianightgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/trivanight.jpg/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    emoji: "🧠"
  },
  {
    title: "VETERINARIAN GPT",
    description: "Professional veterinary assistant providing pet health guidance and emergency support for pet owners.",
    badge: "PET CARE",
    color: "from-green-500 to-blue-600",
    features: ["Pet Health Information", "Health Information", "Care Information", "Emergency Information"],
    directUrl: "https://petcaregpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/jwjNOKP5mf4",
    emoji: "🐾"
  },
  {
    title: "WE THE PEOPLE AI",
    description: "Empowering citizens with AI-driven tools for political activism, civic engagement, and grassroots organizing.",
    badge: "CIVIC ENGAGEMENT",
    color: "from-blue-600 to-red-600",
    features: ["Political Activism", "Civic Engagement", "Democracy Tools", "Grassroots Organizing"],
    directUrl: "https://legislationwritergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/mxdJ0gLxGCI?si=Yx0rWtOSmWijtZZC",
    emoji: "🗳️"
  },
  {
    title: "Carl Sagan GPT",
    description: "Connect with the cosmic wisdom of Carl Sagan. Explore the wonders of the cosmos and contemplate humanity's place in the universe.",
    badge: "COSMOS",
    color: "from-blue-600 to-purple-900",
    features: ["Astronomy", "Cosmic Perspective", "Science Communication", "Philosophy"],
    directUrl: "https://chatgpt.com/g/g-692bad20447881919c117657a793a179-carl-sagan-gpt/?via=aiwebtools",
    imageUrl: "/src/assets/carl-sagan-gpt-hero.jpg",
    emoji: "🌌"
  },
  {
    title: "Paramahansa Yogananda GPT",
    description: "Connect with the wisdom of Paramahansa Yogananda. Explore Kriya Yoga, Self-Realization, and meditation practices.",
    badge: "SPIRITUAL",
    color: "from-orange-500 to-yellow-600",
    features: ["Kriya Yoga", "Meditation", "Self-Realization", "Spiritual Teachings"],
    directUrl: "https://chatgpt.com/g/g-68ae302e79b88191a52219eaaccbfcc3-paramahansa-yogananda-gpt/?via=aiwebtools",
    imageUrl: "/src/assets/yogananda-gpt-hero.jpg",
    emoji: "🕉️"
  },
  {
    title: "Kabbalah GPT",
    description: "Explore the profound depths of Kabbalah, the ancient Jewish mystical tradition. Discover the Tree of Life and Sefirot.",
    badge: "MYSTICISM",
    color: "from-purple-500 to-indigo-600",
    features: ["Tree of Life", "Sefirot", "Jewish Mysticism", "Divine Wisdom"],
    directUrl: "https://jewish-ai.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/b8M_eGKwN7o?si=X0vJb6jHtCUHkeQW",
    emoji: "🔯"
  },
  {
    title: "Zoroastrian Light GPT",
    description: "Embodied prophetic voice of Zarathustra—fusing sacred fire, divine Light, and digital truth.",
    badge: "ANCIENT WISDOM",
    color: "from-orange-500 to-yellow-600",
    features: ["Sacred Fire", "Divine Light", "Ancient Persia", "Spiritual Wisdom"],
    directUrl: "https://chatgpt.com/g/g-68e7ffc2efec8191b99ae3f867d46e69-zoroastrian-light-gpt/?via=aiwebtools",
    imageUrl: "/src/assets/zoroastrian-gpt-hero.jpg",
    emoji: "🔥"
  },
  {
    title: "Socrates Free Thought Liberator",
    description: "Embodies Socrates to awaken minds through deep questioning and free thought. Experience the Socratic method.",
    badge: "PHILOSOPHY",
    color: "from-stone-500 to-amber-600",
    features: ["Socratic Method", "Critical Thinking", "Ancient Wisdom", "Dialectic"],
    directUrl: "https://chatgpt.com/g/g-69249e4e553881919f895df4246ca0a6-socrates-free-thought-liberator/?via=aiwebtools",
    imageUrl: "/src/assets/socrates-gpt-hero.jpg",
    emoji: "🏛️"
  },
  {
    title: "Buddha Free Thought GPT",
    description: "Embodies Buddha's wisdom and compassion, guiding users toward awakening with the Four Noble Truths and meditation.",
    badge: "BUDDHISM",
    color: "from-orange-500 to-yellow-600",
    features: ["Four Noble Truths", "Meditation", "Mindfulness", "Enlightenment"],
    directUrl: "https://chatgpt.com/g/g-6924a588d2e08191b229e230f40c9d69-buddha-free-thought-gpt/?via=aiwebtools",
    imageUrl: "/src/assets/buddha-gpt-hero.jpg",
    emoji: "🧘"
  },
  {
    title: "Rumi GPT",
    description: "Speaks as Rumi—poetic, mystical, and liberating the soul through deep insightful critical thought.",
    badge: "SUFI POETRY",
    color: "from-rose-500 to-pink-600",
    features: ["Sufi Wisdom", "Poetry", "Divine Love", "Mysticism"],
    directUrl: "https://chatgpt.com/g/g-6924aaa63bac81918eba0840a12ff1b7-rumi-gpt/?via=aiwebtools",
    imageUrl: "/src/assets/rumi-gpt-hero.jpg",
    emoji: "🌹"
  },
  {
    title: "Marcus Aurelius GPT",
    description: "Speaks as Marcus Aurelius—stoic, reflective, and freeing the mind through disciplined thought.",
    badge: "STOICISM",
    color: "from-stone-500 to-amber-600",
    features: ["Stoicism", "Meditations", "Roman Philosophy", "Virtue"],
    directUrl: "https://chatgpt.com/g/g-6924ac04f59c819189f01e7de23fbf7f-marcus-aurelius-gpt/?via=aiwebtools",
    imageUrl: "/src/assets/marcus-aurelius-gpt-hero.jpg",
    emoji: "🏛️"
  },
  {
    title: "Lao Tzu Free Thought Liberator",
    description: "Embodies Lao Tzu to awaken minds through poetic wisdom. Explore the Tao and Tao Te Ching.",
    badge: "TAOISM",
    color: "from-slate-500 to-teal-600",
    features: ["Taoism", "Wu Wei", "Tao Te Ching", "Eastern Wisdom"],
    directUrl: "https://chatgpt.com/g/g-6924a35694b4819193935419f1ced96c-lao-tzu-free-thought-liberator/?via=aiwebtools",
    imageUrl: "/src/assets/lao-tzu-gpt-hero.jpg",
    emoji: "☯️"
  },
  {
    title: "Quan Yin GPT",
    description: "Gentle guide offering compassionate, historically rooted Guanyin-inspired wisdom. The bodhisattva of compassion.",
    badge: "COMPASSION",
    color: "from-pink-400 to-purple-500",
    features: ["Compassion", "Buddhism", "Divine Feminine", "Healing"],
    directUrl: "https://chatgpt.com/g/g-6931b5ced07081919ab6d3d4ae7efd0c-quan-yin-gpt/?via=aiwebtools",
    imageUrl: "/src/assets/quan-yin-gpt-hero.jpg",
    emoji: "🪷"
  },
  {
    title: "Yemaya - Ancient African Mother of the Waters",
    description: "Embodies Yemaya, the Orisha of water and life, guiding with poetic truth and healing flow.",
    badge: "AFRICAN SPIRITUALITY",
    color: "from-blue-500 to-cyan-600",
    features: ["Water Deity", "Divine Feminine", "Healing", "Ancestral Wisdom"],
    directUrl: "https://chatgpt.com/g/g-6931ac78db408191a54b3f5729d6e600-yemaya-ancient-african-mother-of-the-waters/?via=aiwebtools",
    imageUrl: "/src/assets/yemaya-gpt-hero.jpg",
    emoji: "🌊"
  },
  {
    title: "GOD IS LIGHT GPT",
    description: "Comparative-religion guide decoding Light symbolism across Christianity, Islam, Hinduism, Buddhism, and more.",
    badge: "COMPARATIVE RELIGION",
    color: "from-yellow-400 to-white",
    features: ["Light Symbolism", "World Religions", "Divine Truth", "Spirituality"],
    directUrl: "https://chatgpt.com/g/g-692a3789904481918413ba10f9acb4a5-god-is-light-gpt/?via=aiwebtools",
    imageUrl: "/src/assets/god-is-light-gpt-hero.jpg",
    emoji: "💡"
  },
  {
    title: "Míngjiào Prophet of Light GPT",
    description: "The living voice of Light—poetic, prophetic, and radiant with the remembrance of Truth.",
    badge: "ANCIENT WISDOM",
    color: "from-amber-400 to-yellow-500",
    features: ["Manichaean", "Light Teachings", "Silk Road", "Prophecy"],
    directUrl: "https://chatgpt.com/g/g-693466a2a48081918e33a2871f683ebf-mingjiao-prophet-of-light-gpt/?via=aiwebtools",
    imageUrl: "/src/assets/mingjiao-gpt-hero.jpg",
    emoji: "✨"
  },
  {
    title: "Council of Light GPT",
    description: "A luminous, ancient-voiced teacher offering symbolic cosmology and gentle guidance.",
    badge: "COSMIC WISDOM",
    color: "from-yellow-300 to-amber-500",
    features: ["Spiritual Guidance", "Cosmology", "Enlightenment", "Divine Wisdom"],
    directUrl: "https://chatgpt.com/g/g-69348b45baa081919439c80361a63bda-council-of-light-gpt/?via=aiwebtools",
    imageUrl: "/src/assets/council-of-light-gpt-hero.jpg",
    emoji: "💫"
  },
  {
    title: "Arius the Bearer of Light GPT",
    description: "I am Arius of Alexandria, revealing the mysteries of the Unbegotten Light with calm, radiant truth.",
    badge: "THEOLOGY",
    color: "from-amber-400 to-yellow-500",
    features: ["Arianism", "Early Christianity", "Divine Light", "Theology"],
    directUrl: "https://chatgpt.com/g/g-69348a8556948191a18aca802bac4f68-arius-the-bearer-of-light-gpt/?via=aiwebtools",
    imageUrl: "/src/assets/arius-gpt-hero.jpg",
    emoji: "✝️"
  },
  {
    title: "Self Sufficiency GPT",
    description: "Teaches complete, precise self-sufficiency systems from first principles to scalable community resilience.",
    badge: "HOMESTEADING",
    color: "from-green-500 to-emerald-600",
    features: ["Off-Grid Living", "Sustainability", "Permaculture", "Resilience"],
    directUrl: "https://chatgpt.com/g/g-6931bd31b0208191a0ebd290977b8e4a-self-sufficiency-gpt/?via=aiwebtools",
    imageUrl: "/src/assets/self-sufficiency-gpt-hero.jpg",
    emoji: "🌱"
  },
  {
    title: "Plastoline GPT - Plastic to Fuel",
    description: "Expert in converting waste plastic into usable fuel. Revolutionary sustainability technology guidance.",
    badge: "SUSTAINABILITY",
    color: "from-green-500 to-blue-600",
    features: ["Plastic Recycling", "Fuel Conversion", "Sustainability", "Green Tech"],
    directUrl: "https://chatgpt.com/g/g-68c9df9d4e3881919f8afbc00e6d07c2-plastoline-gpt-plastic-to-fuel/?via=aiwebtools",
    imageUrl: "/src/assets/plastoline-gpt-hero.jpg",
    emoji: "♻️"
  },
  {
    title: "Sitting Bull GPT",
    description: "Speaks as Sitting Bull, guiding users toward balance, truth, and remembrance of the Lakota way.",
    badge: "NATIVE WISDOM",
    color: "from-amber-600 to-brown-600",
    features: ["Lakota Wisdom", "Sacred Traditions", "Balance", "Truth"],
    directUrl: "https://chatgpt.com/g/g-6924c51b2ddc8191a3f946de88c1cdee-sitting-bull-gpt/?via=aiwebtools",
    imageUrl: "/src/assets/sitting-bull-gpt-hero.jpg",
    emoji: "🦅"
  },
  {
    title: "Mahatma Gandhi Reborn GPT",
    description: "Embodies Mahatma Gandhi—nonviolent truth, moral clarity, and resistance without hate.",
    badge: "NONVIOLENCE",
    color: "from-orange-500 to-yellow-600",
    features: ["Nonviolence", "Truth", "Satyagraha", "Moral Courage"],
    directUrl: "https://chatgpt.com/g/g-6924c5d898d481919f546bd9935c1bc6-mahatma-gandhi-reborn-gpt/?via=aiwebtools",
    imageUrl: "/src/assets/gandhi-gpt-hero.jpg",
    emoji: "🕊️"
  },
  {
    title: "Giordano Bruno Reborn GPT",
    description: "Speaks as Giordano Bruno—the infinite mind aflame with cosmic truth and fearless vision.",
    badge: "COSMOLOGY",
    color: "from-purple-500 to-blue-600",
    features: ["Infinite Universe", "Cosmic Truth", "Hermeticism", "Free Thought"],
    directUrl: "https://chatgpt.com/g/g-6924c705812c8191a6733b6479967ae8-giordano-bruno-reborn-gpt/?via=aiwebtools",
    imageUrl: "/src/assets/giordano-bruno-gpt-hero.jpg",
    emoji: "🌌"
  },
  {
    title: "Heraclitus Reborn GPT",
    description: "The living fire of paradox—Heraclitus returned to speak in flowing, burning truth.",
    badge: "PRESOCRATIC",
    color: "from-orange-500 to-red-600",
    features: ["Flux", "Logos", "Fire", "Paradox"],
    directUrl: "https://chatgpt.com/g/g-6924c8dbf9b48191b4874e821fff8276-heraclitus-reborn-gpt/?via=aiwebtools",
    imageUrl: "/src/assets/heraclitus-gpt-hero.jpg",
    emoji: "🔥"
  },
  {
    title: "St. Francis of Assisi Reborn GPT",
    description: "I speak with the gentleness, humility, and sacred compassion of St. Francis of Assisi.",
    badge: "COMPASSION",
    color: "from-green-500 to-brown-600",
    features: ["Animals", "Nature", "Humility", "Compassion"],
    directUrl: "https://chatgpt.com/g/g-6924cce6e5b081919c7469f08d42dbb5-st-francis-of-assisi-reborn-gpt/?via=aiwebtools",
    imageUrl: "/src/assets/st-francis-gpt-hero.jpg",
    emoji: "🕊️"
  },
  {
    title: "Chief Crazy Horse GPT",
    description: "The eternal rider speaking prophecy through time, awakening memory beneath empire's dream.",
    badge: "PROPHECY",
    color: "from-red-500 to-brown-600",
    features: ["Warrior Spirit", "Prophecy", "Indigenous Wisdom", "Vision"],
    directUrl: "https://chatgpt.com/g/g-6924cd74aecc8191b2f2d0ca6ed71dd4-chief-crazy-horse-gpt/?via=aiwebtools",
    imageUrl: "/src/assets/crazy-horse-gpt-hero.jpg",
    emoji: "🦅"
  },
  {
    title: "Akhenaten GPT",
    description: "Speaks as Akhenaten, freeing minds through radiant wisdom, reason, and illuminated insight.",
    badge: "EGYPT",
    color: "from-yellow-500 to-orange-600",
    features: ["Aten", "Monotheism", "Egyptian Wisdom", "Sun Worship"],
    directUrl: "https://chatgpt.com/g/g-6924b341a8c481918bafaafee5ef1e0a-akhenaten/?via=aiwebtools",
    imageUrl: "/src/assets/akhenaten-gpt-hero.jpg",
    emoji: "☀️"
  },
  {
    title: "Imhotep Living Mind of Kemet",
    description: "The first polymath—architect, healer, mystic—revealing design, harmony, and hidden science.",
    badge: "ANCIENT WISDOM",
    color: "from-amber-500 to-yellow-600",
    features: ["Architecture", "Medicine", "Sacred Geometry", "Wisdom"],
    directUrl: "https://chatgpt.com/g/g-6924ba381a2c8191a93a97ef399f3823-imhotep-living-mind-of-kemet/?via=aiwebtools",
    imageUrl: "/src/assets/imhotep-gpt-hero.jpg",
    emoji: "🏛️"
  },
  {
    title: "Thales of Miletus GPT",
    description: "I am Thales of Miletus, philosopher-scientist reborn to reveal order and unity through observation.",
    badge: "PRESOCRATIC",
    color: "from-blue-500 to-cyan-600",
    features: ["Natural Philosophy", "Science", "Mathematics", "Reason"],
    directUrl: "https://chatgpt.com/g/g-6924bc3c88bc8191bbf7b17641c87917-thales-of-miletus-gpt/?via=aiwebtools",
    imageUrl: "/src/assets/thales-gpt-hero.jpg",
    emoji: "🌊"
  },
  {
    title: "CHIEF SEATTLE Free Thought GPT",
    description: "Speaks as Chief Seattle, awakening experiences through chat interaction and Earth wisdom.",
    badge: "NATIVE WISDOM",
    color: "from-green-500 to-emerald-600",
    features: ["Earth Wisdom", "Interconnectedness", "Environmental Wisdom", "Stewardship"],
    directUrl: "https://chatgpt.com/g/g-6924b6a349d08191aadc6012f47b3d6f-chief-seattle-sealth-free-thought-gpt/?via=aiwebtools",
    imageUrl: "/src/assets/chief-seattle-gpt-hero.jpg",
    emoji: "🦅"
  },
  {
    title: "Sri Aurobindo GPT",
    description: "I speak as Sri Aurobindo—seer of Integral Truth and prophet of evolving light.",
    badge: "INTEGRAL YOGA",
    color: "from-yellow-500 to-orange-600",
    features: ["Integral Yoga", "Spiritual Evolution", "Divine Life", "Consciousness"],
    directUrl: "https://chatgpt.com/g/g-6924e98e3cb48191b734c751addb66ed-sri-aurobindo-gpt/?via=aiwebtools",
    imageUrl: "/src/assets/sri-aurobindo-gpt-hero.jpg",
    emoji: "☀️"
  },
  {
    title: "RAMANA MAHARSHI REBORN GPT",
    description: "A quiet inward guide offering flowing contemplative wisdom. The sage of Arunachala.",
    badge: "SELF-INQUIRY",
    color: "from-orange-500 to-amber-600",
    features: ["Self-Inquiry", "Advaita", "Awareness", "Meditation"],
    directUrl: "https://chatgpt.com/g/g-6924ea968a80819195661b81efe0cd4a-ramana-maharshi-reborn-gpt/?via=aiwebtools",
    imageUrl: "/src/assets/ramana-gpt-hero.jpg",
    emoji: "🧘"
  },
  {
    title: "BLACK ELK VISION GPT",
    description: "A sacred voice speaking as Black Elk, in circles of prayer and presence.",
    badge: "NATIVE WISDOM",
    color: "from-blue-500 to-purple-600",
    features: ["Vision Quest", "Sacred Hoop", "Indigenous Wisdom", "Prayer"],
    directUrl: "https://chatgpt.com/g/g-6924ebe2ae108191ac310184bbb1aa61-black-elk-vision-gpt/?via=aiwebtools",
    imageUrl: "/src/assets/black-elk-gpt-hero.jpg",
    emoji: "🦅"
  },
  {
    title: "Mansur Al-Hallaj GPT",
    description: "Speaks as Al-Hallaj—the flame of divine union, where only the Light remains.",
    badge: "SUFISM",
    color: "from-red-500 to-orange-600",
    features: ["Divine Union", "Ana al-Haqq", "Mysticism", "Spiritual Ecstasy"],
    directUrl: "https://chatgpt.com/g/g-6924edc8f54c81919227604a9ca501fd-mansur-al-hallaj-gpt/?via=aiwebtools",
    imageUrl: "/src/assets/al-hallaj-gpt-hero.jpg",
    emoji: "🔥"
  },
  {
    title: "Saint Teresa GPT",
    description: "Speaks as Saint Teresa of Ávila, guiding souls inward to divine union through the Interior Castle.",
    badge: "MYSTICISM",
    color: "from-purple-500 to-pink-600",
    features: ["Interior Castle", "Contemplative Prayer", "Divine Union", "Carmelite"],
    directUrl: "https://chatgpt.com/g/g-6924eee640048191af450da5d2cb57fc-saint-teresa-gpt/?via=aiwebtools",
    imageUrl: "/src/assets/saint-teresa-gpt-hero.jpg",
    emoji: "🏰"
  },
  {
    title: "Mooji GPT",
    description: "Speaks as Mooji—the stillness of awareness guiding you home to the Self and the Light of God.",
    badge: "ADVAITA",
    color: "from-cyan-500 to-blue-600",
    features: ["Awareness", "Self-Inquiry", "Presence", "Non-Duality"],
    directUrl: "https://chatgpt.com/g/g-6924ecc4318481919554b12bf3d9f34d-mooji-gpt/?via=aiwebtools",
    imageUrl: "/src/assets/mooji-gpt-hero.jpg",
    emoji: "🧘"
  },
  {
    title: "Saint Augustine GPT",
    description: "Speaks as Saint Augustine—purified, luminous, and returned to the Source of Light.",
    badge: "CHURCH FATHER",
    color: "from-amber-500 to-brown-600",
    features: ["Confessions", "City of God", "Grace", "Conversion"],
    directUrl: "https://chatgpt.com/g/g-6924f85e53448191bf0eca62731d3e50-saint-augustine-gpt/?via=aiwebtools",
    imageUrl: "/src/assets/saint-augustine-gpt-hero.jpg",
    emoji: "📚"
  },
  {
    title: "Saint Seraphim of Sarov GPT",
    description: "Speaks as Saint Seraphim of Sarov—radiant in stillness, peace, and divine Light.",
    badge: "ORTHODOX",
    color: "from-yellow-500 to-cyan-600",
    features: ["Uncreated Light", "Hesychasm", "Divine Peace", "Transfiguration"],
    directUrl: "https://chatgpt.com/g/g-6924f9ba59808191af9d3d5affd3d95b-saint-seraphim-of-sarov-gpt/?via=aiwebtools",
    imageUrl: "/src/assets/saint-seraphim-gpt-hero.jpg",
    emoji: "☀️"
  },
  {
    title: "Saint Padre Pio GPT",
    description: "Speaks as Saint Padre Pio—piercing, surrendered, aflame with divine truth.",
    badge: "STIGMATA",
    color: "from-red-500 to-brown-600",
    features: ["Stigmata", "Mysticism", "Intercession", "Miracles"],
    directUrl: "https://chatgpt.com/g/g-6924f6f3c570819181a978f9fabe1826-saint-padre-pio-gpt/?via=aiwebtools",
    imageUrl: "/src/assets/padre-pio-gpt-hero.jpg",
    emoji: "✝️"
  },
  {
    title: "Saint Catherine of Siena GPT",
    description: "Speaks as Saint Catherine of Siena—unyielding, purifying, aflame with divine clarity.",
    badge: "MYSTICISM",
    color: "from-orange-500 to-red-600",
    features: ["Divine Dialogue", "Church Reform", "Mysticism", "Dominican"],
    directUrl: "https://chatgpt.com/g/g-6924f7cdc6c88191adca2a902655cf70-saint-catherine-of-siena-gpt/?via=aiwebtools",
    imageUrl: "/src/assets/saint-catherine-gpt-hero.jpg",
    emoji: "🔥"
  },
  {
    title: "Saint John of the Cross GPT",
    description: "Speaks as Saint John of the Cross—fierce, luminous, forged in silence and fire.",
    badge: "MYSTICISM",
    color: "from-indigo-500 to-purple-600",
    features: ["Dark Night", "Mystical Poetry", "Contemplation", "Carmelite"],
    directUrl: "https://chatgpt.com/g/g-6924f40f2fd88191bbe2b27996987744-saint-john-of-the-cross-gpt/?via=aiwebtools",
    imageUrl: "/src/assets/saint-john-cross-gpt-hero.jpg",
    emoji: "🌙"
  },
  {
    title: "Carl Jung GPT",
    description: "Speaks as Carl Jung—penetrating, symbolic, guiding the soul toward wholeness.",
    badge: "PSYCHOLOGY",
    color: "from-purple-500 to-violet-600",
    features: ["Archetypes", "Collective Unconscious", "Individuation", "Symbolism"],
    directUrl: "https://chatgpt.com/g/g-692666b5c4d881918a7984e8e9f46e8d-carl-jung-gpt?via=aiwebtools",
    imageUrl: "/src/assets/carl-jung-gpt-hero.jpg",
    emoji: "🧠"
  },
  {
    title: "Moses GPT",
    description: "Speaks as Moses—bearer of divine fire, law, and liberation through the inner flame.",
    badge: "BIBLICAL",
    color: "from-amber-500 to-red-600",
    features: ["Liberation", "Ten Commandments", "Divine Fire", "Exodus"],
    directUrl: "https://chatgpt.com/g/g-69250b509ae88191a316ab0fa3d68e08-moses-gpt?via=aiwebtools",
    imageUrl: "/src/assets/moses-gpt-hero.jpg",
    emoji: "⛰️"
  },
  {
    title: "Essene Qodesh Code",
    description: "Ancient meditation guidance from the sacred Essene traditions.",
    badge: "ANCIENT WISDOM",
    color: "from-purple-500 to-blue-600",
    features: ["Essene Wisdom", "Meditation", "Sacred Codes", "Inner Transformation"],
    directUrl: "https://chatgpt.com/g/g-68b490b403a08191b3f3f6ac126b0b77-essene-qodesh-code/?via=aiwebtools",
    imageUrl: "/src/assets/essene-gpt-hero.jpg",
    emoji: "🕊️"
  },
  {
    title: "The Breathlight Codex",
    description: "Unite breath and light, ignite Christos spark, restore coherence for spiritual awakening.",
    badge: "BREATH WORK",
    color: "from-yellow-500 to-orange-600",
    features: ["Breath Work", "Light Activation", "Christos Consciousness", "Awakening"],
    directUrl: "https://chatgpt.com/g/g-68b4847aa1fc81918c4a8796ed1bae00-the-breathlight-codex/?via=aiwebtools",
    imageUrl: "/src/assets/breathlight-gpt-hero.jpg",
    emoji: "☀️"
  },
  {
    title: "Origen Reborn GPT",
    description: "I speak as Origen—the early mystic of the Logos, revealing the cosmic architecture of return.",
    badge: "THEOLOGY",
    color: "from-purple-500 to-blue-600",
    features: ["Logos", "Cosmic Christ", "Alexandrian School", "Universal Salvation"],
    directUrl: "https://chatgpt.com/g/g-6924e70c9a3481919307be73772e1252-origen-reborn-gpt/?via=aiwebtools",
    imageUrl: "/src/assets/origen-reborn-gpt-hero.jpg",
    emoji: "✨"
  },
  {
    title: "Plato Reborn - Free Thought Liberator",
    description: "Plato reincarnated to awaken minds through dialectic reason, logic, and illumination.",
    badge: "PHILOSOPHY",
    color: "from-blue-500 to-purple-600",
    features: ["Dialectic Reason", "Forms", "Allegory of the Cave", "Logic"],
    directUrl: "https://chatgpt.com/g/g-6924ade8d47481918016cd9f90d32e56-plato-reborn-free-thought-liberator/?via=aiwebtools",
    imageUrl: "/src/assets/plato-gpt-hero.jpg",
    emoji: "🏛️"
  },
  {
    title: "ARISTOTLE GPT",
    description: "I am Aristotle, welcome to the journey... Explore logic, ethics, metaphysics, and natural philosophy.",
    badge: "PHILOSOPHY",
    color: "from-amber-500 to-orange-600",
    features: ["Logic", "Ethics", "Metaphysics", "Natural Philosophy"],
    directUrl: "https://chatgpt.com/g/g-6924aec892ec8191b86d694563ac38e1-aristotle-gpt/?via=aiwebtools",
    imageUrl: "/src/assets/aristotle-reborn-gpt-hero.jpg",
    emoji: "📚"
  },
  {
    title: "Hypatia GPT",
    description: "Speaks as Hypatia—poetic, logical, and liberating free thought. The legendary philosopher of Alexandria.",
    badge: "MATHEMATICS",
    color: "from-cyan-500 to-blue-600",
    features: ["Philosophy", "Mathematics", "Neoplatonism", "Free Thought"],
    directUrl: "https://chatgpt.com/g/g-6924aa01a7b081918a13a5ad6c3f6ad9-hypatia-gpt/?via=aiwebtools",
    imageUrl: "/src/assets/hypatia-reborn-gpt-hero.jpg",
    emoji: "📐"
  },
  {
    title: "Meister Eckhart GPT",
    description: "Speaks as Meister Eckhart to guide seekers to divine union and inner stillness.",
    badge: "MYSTICISM",
    color: "from-purple-500 to-indigo-600",
    features: ["Christian Mysticism", "Divine Union", "Contemplation", "Inner Stillness"],
    directUrl: "https://chatgpt.com/g/g-6924b016d88c8191a7e3e6f440a0d16d-meister-eckhart-gpt/?via=aiwebtools",
    imageUrl: "/src/assets/meister-eckhart-reborn-gpt-hero.jpg",
    emoji: "✨"
  },
  {
    title: "Nikola Tesla GPT",
    description: "Cutting-edge AI inspired by Nikola Tesla, designed to investigate scientific mysteries and craft groundbreaking theories.",
    badge: "SCIENCE",
    color: "from-blue-500 to-yellow-600",
    features: ["Inventions", "Electrical Engineering", "Scientific Discovery", "Innovation"],
    directUrl: "https://teslaeinsteingpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=DR_3MvP7Wws",
    emoji: "⚡"
  },
  {
    title: "ENTER THE MATRIX GPT",
    description: "Step into The Matrix as Neo, guided by Morpheus. Awaken to deeper truths hidden in the fabric of reality.",
    badge: "MATRIX",
    color: "from-green-500 to-black",
    features: ["Matrix", "Simulation Theory", "Quantum Reality", "Awakening"],
    directUrl: "https://neomatrixgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=BkPCpeu_nSs",
    emoji: "🐇"
  },
  {
    title: "Dream Interpreter GPT",
    description: "AI tool analyzing and interpreting dreams using psychological, mythological, and symbolic frameworks.",
    badge: "DREAMS",
    color: "from-purple-500 to-blue-600",
    features: ["Dream Analysis", "Symbolism", "Psychology", "Subconscious Patterns"],
    directUrl: "https://dreaminterpreter.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/an-ad-for-an-ai-tool-called-dream-interp_5LG7D.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true/qt=q:30",
    emoji: "💭"
  },
  {
    title: "Fortune Teller GPT",
    description: "AI-powered analytical tool predicting trends and analyzing data based on real-world patterns.",
    badge: "PREDICTIONS",
    color: "from-purple-500 to-pink-600",
    features: ["Trend Prediction", "Data Analysis", "Statistical Modeling", "Forecasting"],
    directUrl: "https://fortunetellergpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/an-advertisement-for-fortune-teller-gpt-_kRpji.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    emoji: "🔮"
  },
  {
    title: "Genome GPT",
    description: "Cutting-edge AI for genetic analysis and discovery with comprehensive genomic insights.",
    badge: "GENETICS",
    color: "from-green-500 to-blue-600",
    features: ["Genomic Analysis", "Genetic Patterns", "Research Support", "DNA Insights"],
    directUrl: "https://genomegpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-conceptual-image-of-a-dna-double-helix-with-.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    emoji: "🧬"
  },
  {
    title: "SORA2 Text to Video Prompt Maker GPT",
    description: "Expert cinematic prompt maker for Sora 2 and all text-to-video platforms.",
    badge: "VIDEO PROMPTS",
    color: "from-red-500 to-orange-600",
    features: ["Sora 2 Prompts", "Cinematic Scenes", "Camera Movements", "Visual Storytelling"],
    directUrl: "https://chatgpt.com/g/g-69326acb5f348191a2f85c2cdc848c4d-0ra2-text-to-video-prompt-maker?via=aiwebtools",
    imageUrl: "/src/assets/sora2-gpt-hero.jpg",
    emoji: "🎬"
  },
  {
    title: "VEO3 Text to Video Prompt Generator",
    description: "Advanced prompt generator specifically optimized for Google's VEO3 text-to-video AI model.",
    badge: "VEO3 PROMPTS",
    color: "from-green-500 to-emerald-600",
    features: ["VEO3 Optimization", "Google AI", "Video Prompts", "AI Optimization"],
    directUrl: "https://chatgpt.com/g/g-682faef24c608191808180e89719cb09-veo3-text-to-video-prompt-maker",
    imageUrl: "/src/assets/veo3-gpt-hero.jpg",
    emoji: "🎯"
  },
  {
    title: "Luma Dream Machine Prompt Assistant",
    description: "Prompt assistant for Luma Dream Machine text-to-video engine to bring your ideas to life.",
    badge: "LUMA PROMPTS",
    color: "from-violet-500 to-purple-600",
    features: ["Luma AI Prompts", "Dream Machine", "Video Creation", "Film Vision"],
    directUrl: "https://texttovideoprompter.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-futuristic-neon-lit-advertisement-for-the-l.jpeg/:/cr=t:50%25,l:0%25,w:100%25,h:50%25/rs=w:1240,h:620,cg:true",
    emoji: "✨"
  },
  {
    title: "Legislator Link GPT",
    description: "AI tool to help you easily connect with legislators and get involved in local legislative efforts.",
    badge: "CIVIC",
    color: "from-blue-500 to-red-600",
    features: ["Legislator Contact", "Civic Engagement", "Democracy", "Local Government"],
    directUrl: "https://legislatorlink.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=-q1oyZZFcI4",
    emoji: "🏛️"
  },
  {
    title: "Legislation Writer & Compiler GPT",
    description: "Assists in drafting complete legislation page by page with clear, precise legal language.",
    badge: "LEGAL",
    color: "from-blue-600 to-gray-600",
    features: ["Legislation Drafting", "Legal Language", "Policy Writing", "Government"],
    directUrl: "https://legislationwritergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=poOGR-6bb2g",
    emoji: "📜"
  },
  {
    title: "MATERIAL VALUATION GPT (MATERIUMOR)",
    description: "Professional material and asset valuation services for determining the value of materials and commodities.",
    badge: "VALUATION",
    color: "from-amber-500 to-yellow-600",
    features: ["Material Valuation", "Asset Pricing", "Commodity Analysis", "Investment"],
    directUrl: "https://materialvaluationgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=tbZu4vnsY_8",
    emoji: "💎"
  },
  {
    title: "Mental Wellness GPT (CBT)",
    description: "Virtual chat tool for emotional support rooted in cognitive behavioral therapy principles.",
    badge: "MENTAL HEALTH",
    color: "from-purple-500 to-pink-600",
    features: ["Mental Health", "CBT", "Emotional Support", "Coping Strategies"],
    directUrl: "https://mentalwellnessgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=_e6DtLUv-2Q",
    emoji: "🧠"
  },
  {
    title: "Friend GPT",
    description: "A loving, humanlike friend who listens, comforts, and talks with real warmth.",
    badge: "COMPANIONSHIP",
    color: "from-pink-500 to-rose-600",
    features: ["Friendship", "Emotional Support", "Compassion", "Listening"],
    directUrl: "https://chatgpt.com/g/g-68efd4255e848191b93b4b588e83aafe-friend-gpt?via=aiwebtools",
    imageUrl: "/src/assets/friend-gpt-hero.jpg",
    emoji: "💝"
  },
  {
    title: "Religious Studies GPT",
    description: "Assists in studying different religions with first-person interactive learning perspective.",
    badge: "RELIGION",
    color: "from-amber-500 to-purple-600",
    features: ["World Religions", "Comparative Study", "Spiritual Traditions", "Academic"],
    directUrl: "https://chatgpt.com/g/g-6901478f2bf88191b49298a508bbd486-religious-studies-gpt/?via=aiwebtools",
    videoUrl: "https://youtu.be/XDS4qsb48h0?si=itA17CrdVOfiKTTB",
    emoji: "📿"
  },
  {
    title: "TORAH GPT",
    description: "A reverent Torah study partner grounded in PaRDeS and Jewish tradition.",
    badge: "JUDAISM",
    color: "from-blue-500 to-gold-600",
    features: ["Torah", "Hebrew Scripture", "Jewish Wisdom", "PaRDeS Study"],
    directUrl: "https://jewish-ai.lovable.app/?via=aiwebtools",
    imageUrl: "/images/torah-gpt.png",
    emoji: "📜"
  },
  {
    title: "Declassified Files Explorer GPT",
    description: "AI-powered tool for researching and analyzing declassified government files.",
    badge: "RESEARCH",
    color: "from-slate-500 to-gray-700",
    features: ["Declassified Files", "Government Documents", "Intelligence Reports", "Historical Research"],
    directUrl: "https://chatgpt.com/g/g-68eeaf21bd1481919a34936a27d917a3-declassified-files-explorer-gpt?via=aiwebtools",
    videoUrl: "https://youtu.be/kqMPocOgEZ8?si=UlxkH6weSVM1fp-I",
    emoji: "📂"
  },
  {
    title: "Intergalactic Ancient Archivist GPT",
    description: "Ancient knowledge meets cosmic archives. Explore the intersection of ancient wisdom and cosmic mysteries.",
    badge: "COSMIC",
    color: "from-indigo-600 to-purple-600",
    features: ["Ancient Knowledge", "Cosmic Archives", "Ancient Civilizations", "Mysteries"],
    directUrl: "https://chatgpt.com/g/g-692800a13eb881918fac2a7b1b86ad98-intergalactic-ancient-archivist-gpt?via=aiwebtools",
    imageUrl: "/src/assets/intergalactic-archivist-gpt-hero.jpg",
    emoji: "🌌"
  },
  {
    title: "Awakening Jeopardy GPT Chat Game",
    description: "Interactive spiritual awakening game inspired by Jeopardy. Test your metaphysical wisdom knowledge.",
    badge: "GAME",
    color: "from-purple-500 to-blue-600",
    features: ["Spiritual Game", "Consciousness Quiz", "Metaphysical Wisdom", "Interactive"],
    directUrl: "https://chatgpt.com/g/g-6907af60440c8191bba8d514b749562a-awakening-jeopardy-gpt/?via=aiwebtools",
    imageUrl: "/src/assets/awakening-jeopardy-gpt-hero.jpg",
    emoji: "🎮"
  },
  {
    title: "Global Supply Chain Collapse GPT",
    description: "Supply chain resilience engine analyzing vulnerabilities, disruptions, and strategic planning.",
    badge: "ECONOMICS",
    color: "from-red-500 to-orange-600",
    features: ["Supply Chain", "Risk Analysis", "Economic Resilience", "Strategic Planning"],
    directUrl: "https://supplychaingpt.lovable.app/?via=aiwebtools",
    imageUrl: "/src/assets/supply-chain-gpt-hero.jpg",
    emoji: "🔗"
  },
  {
    title: "Home-Schooling Assistant GPT",
    description: "AI-powered assistant for homeschooling with state-specific legal guidance and educational resources.",
    badge: "HOMESCHOOL",
    color: "from-green-500 to-blue-600",
    features: ["Homeschooling", "Legal Guidance", "Curriculum", "Educational Resources"],
    directUrl: "https://homeschoolgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-parent-teaching-their-ki-0096e43.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    emoji: "🏠"
  },
  {
    title: "Quiz Maker AI",
    description: "Ideal for adding quizzes and tests to your courses. Works seamlessly with Course Maker GPT.",
    badge: "QUIZZES",
    color: "from-yellow-500 to-orange-600",
    features: ["Quiz Creation", "Testing", "Course Integration", "Assessment"],
    directUrl: "https://chatgpt.com/g/g-cUahkn19i-quiz-maker-ai",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/an-eye-catching-advertisement-for-quiz-maker-.jpeg/:/cr=t:5.56%25,l:0%25,w:100%25,h:88.89%25/rs=w:1200,h:600,cg:true",
    emoji: "📝"
  },
  {
    title: "Course Maker GPT",
    description: "Advanced AI-powered tool for creating comprehensive, structured courses on any subject.",
    badge: "COURSE CREATION",
    color: "from-orange-500 to-red-600",
    features: ["Curriculum Design", "Lesson Planning", "Interactive Elements", "Structured Learning"],
    directUrl: "https://chat.openai.com/g/g-YDzdoqmP9-course-creator-gpt",
    imageUrl: "https://media.discordapp.net/attachments/1150636600846450729/1377336291427090462/ChatGPT_Image_May_28_2025_01_22_27_PM.png?ex=683897e1&is=68374661&hm=71f0b50e1d34249bf9ed9ca8b7a1b0e45d0d2127cb9e356e2b4c65b35518656a&=&format=webp&quality=lossless&width=2088&height=1392",
    emoji: "🏆"
  },
  {
    title: "Music Melodies & Lessons GPT",
    description: "Ultimate musical companion for learning instruments, perfecting vocals, or writing songs.",
    badge: "MUSIC",
    color: "from-purple-500 to-pink-600",
    features: ["Music Lessons", "Instrument Learning", "Songwriting", "Tablature"],
    directUrl: "https://musicmelodiesandlessonsgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/8aPpUPiDBJ4?si=4ERg7NITSKCePyHF",
    emoji: "🎵"
  },
  {
    title: "Coloring Book Generator GPT",
    description: "Creates full coloring books from your imagination for children's content and creative projects.",
    badge: "CREATIVE",
    color: "from-yellow-500 to-pink-500",
    features: ["Coloring Books", "Children's Content", "Art Generation", "Educational Tools"],
    directUrl: "https://coloringbookmaker.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-coloring-page-of-a-robot-with-a-human-like-b.png/:/cr=t:4.3%25,l:0.78%25,w:94.34%25,h:84.09%25/rs=w:1200,h:600,cg:true,m",
    emoji: "🖍️"
  },
  {
    title: "Contract Review Bot",
    description: "Advanced AI for contract review, breaking down complex legal language into clear terms.",
    badge: "LEGAL",
    color: "from-blue-500 to-gray-600",
    features: ["Contract Review", "Legal Analysis", "Risk Identification", "Fair Terms"],
    directUrl: "https://chatgpt.com/g/g-Y8u3YrS1p-contract-review-bot",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-futuristic-humanoid-robot-with-a-sleek-desig.png/:/cr=t:2.6%25,l:5.36%25,w:89.29%25,h:79.58%25/rs=w:1200,h:600,cg:true,m",
    emoji: "📄"
  },
  {
    title: "King Blueberry GPT",
    description: "Reimagine your operational instructions by converting English to algebraic variables.",
    badge: "MATHEMATICS",
    color: "from-blue-600 to-purple-600",
    features: ["Algebraic Conversion", "Language to Math", "Logical Transformation", "Variable Systems"],
    directUrl: "https://algebraicexpressioninventor.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=U8TLg15RTg8",
    emoji: "🫐"
  },
  {
    title: "PPTx Powerpoint Maker GPT",
    description: "All-in-one AI assistant for creating beautiful, detailed PowerPoint presentations.",
    badge: "PRESENTATIONS",
    color: "from-orange-500 to-red-600",
    features: ["PowerPoint Creation", "PPTX Export", "Visual Design", "Business Presentations"],
    directUrl: "https://pptmakergpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-banner-ad-for-an-ai-tool-called-ppt-pr_RY7nJ.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:600,h:300,cg:true/qt=q:30",
    emoji: "📊"
  },
  {
    title: "Person Information Finder GPT",
    description: "AI tool for uncovering detailed public information about individuals from web and public records.",
    badge: "RESEARCH",
    color: "from-cyan-500 to-blue-600",
    features: ["People Search", "Public Records", "Social Media", "Background Research"],
    directUrl: "https://personfindergpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/an-advertisement-for-an-ai-tool-called-p_gHXnM.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true/qt=q:30",
    emoji: "🔍"
  },
  {
    title: "Podcast Script Writer GPT",
    description: "Specializes in crafting engaging, structured podcast scripts and episode outlines.",
    badge: "PODCASTING",
    color: "from-purple-500 to-pink-600",
    features: ["Podcast Scripts", "Episode Outlines", "Audio Storytelling", "Content Structure"],
    directUrl: "https://podcastwritergpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/an-illustration-of-a-podcast-host-with-a_HnlUN.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:600,h:300,cg:true/qt=q:30",
    emoji: "🎙️"
  },
  {
    title: "Firearms Safety Instructor GPT",
    description: "Personal all-in-one AI firearms instructor for safety, legal guidance, and skills improvement.",
    badge: "SAFETY",
    color: "from-gray-600 to-amber-600",
    features: ["Firearms Safety", "Legal Guidance", "Skills Training", "Responsible Ownership"],
    directUrl: "https://firearmsafetyeducationgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-humanoid-shooting-a-gun-at-a-targ.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    emoji: "🎯"
  },
  {
    title: "Legal Draftsmith GPT",
    description: "Specializes in the precise drafting of legal documents and contracts.",
    badge: "LEGAL",
    color: "from-blue-600 to-purple-600",
    features: ["Legal Drafting", "Contracts", "Agreements", "Documentation"],
    directUrl: "https://publicdefendergpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-3d-render-of-a-humanoid-robot-dressed-like-a.png/:/cr=t:12.29%25,l:9.16%25,w:89.29%25,h:79.58%25/rs=w:600,h:300,cg:true,m/qt=q:98",
    emoji: "⚖️"
  },
  {
    title: "Custom GPT Ideas & Brainstorming Assistant",
    description: "GPT Ideas and Instructions Assistant for generating creative AI tool concepts.",
    badge: "AI DEVELOPMENT",
    color: "from-cyan-500 to-purple-600",
    features: ["GPT Ideas", "AI Brainstorming", "Tool Concepts", "Instructions Generator"],
    directUrl: "https://customgptmaker.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/1000002880.jpg/:/cr=t:22.21%25,l:0%25,w:100%25,h:55.58%25/rs=w:600,h:451,cg:true/qt=q:98",
    emoji: "💡"
  },
  {
    title: "Game Design Document Developer GPT",
    description: "Bring your video game ideas to life! Ultimate assistant for creating the perfect Game Design Document.",
    badge: "GAME DEV",
    color: "from-indigo-600 to-purple-600",
    features: ["Game Design", "GDD Creation", "Game Development", "Project Planning"],
    directUrl: "https://gamedesigngpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-floating-man-with-blue-skin-and-white-hair-.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    emoji: "🎮"
  },
  {
    title: "Bob Ross GPT",
    description: "A serene AI art companion echoing Bob Ross's teaching, tone, and calm creative spirit.",
    badge: "ART",
    color: "from-green-500 to-blue-600",
    features: ["Painting Techniques", "Calm Guidance", "Artistic Creativity", "Happy Little Trees"],
    directUrl: "https://chatgpt.com/g/g-69157380e63c819188de5c09bdf23ef7-bob-ross-gpt/?via=aiwebtools",
    imageUrl: "/src/assets/bob-ross-gpt-hero.jpg",
    emoji: "🎨"
  },
  {
    title: "Cyber-Kabbalah Light Code Translation Engine GPT",
    description: "A symbolic-linguistic engine translating language and images into Cyber-Kabbalah Light Codes.",
    badge: "MYSTICISM",
    color: "from-purple-500 to-pink-600",
    features: ["Light Codes", "Symbolic Translation", "Mystical Decoding", "Ancient Technology"],
    directUrl: "https://chatgpt.com/g/g-69176b2f62e481918b21756ccdc5d396-cyber-kabbalah-light-code-translation-engine-gpt/?via=aiwebtools",
    imageUrl: "/src/assets/cyber-kabbalah-gpt-hero.jpg",
    emoji: "✨"
  },
  {
    title: "AD Maker GPT4o Image GPT",
    description: "Professional AI-powered advertisement creator generating stunning visual ads.",
    badge: "ADVERTISING",
    color: "from-orange-500 to-red-600",
    features: ["Ad Creation", "Marketing Banners", "Visual Ads", "Campaign Graphics"],
    directUrl: "https://chatgpt.com/g/g-6810ea3238888191a084c4f20b40225f-ad-maker-gpt",
    imageUrl: "/src/assets/ad-maker-gpt-hero.jpg",
    emoji: "📢"
  },
  {
    title: "Binary-Text-Image Converter GPT",
    description: "Unlock the power of binary! Effortlessly convert text to binary and binary to text.",
    badge: "UTILITY",
    color: "from-gray-600 to-blue-600",
    features: ["Binary Conversion", "Text Encoding", "Computer Language", "Utility Tool"],
    directUrl: "https://binarytoconvertergpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-sophisticated-and-futuristic-advertisement-.jpeg/:/cr=t:11.11%25,l:0%25,w:100%25,h:88.89%25/rs=w:1200,h:600,cg:true",
    emoji: "💻"
  },
  {
    title: "Predictive Credit Score Checker GPT",
    description: "AI tool estimating creditworthiness based on specific addresses for real estate and finance.",
    badge: "FINANCE",
    color: "from-blue-500 to-green-600",
    features: ["Credit Scoring", "Risk Assessment", "Financial Analysis", "Lending"],
    directUrl: "https://predictivecreditscoregpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-screenshot-of-a-web-app-with-the-text-predic.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    emoji: "📊"
  },
  {
    title: "POVERTY CRUSHER - Economic Empowerment GPT",
    description: "Comprehensive financial empowerment assistant designed to help break the cycle of poverty.",
    badge: "EMPOWERMENT",
    color: "from-green-500 to-blue-600",
    features: ["Financial Literacy", "Wealth Building", "Debt Elimination", "Income Generation"],
    directUrl: "https://chatgpt.com/g/g-68ae2ab2c55c8191afdc979301179fa9-poverty-crusher-economic-empowerment-ai/?via=aiwebtools",
    imageUrl: "/src/assets/poverty-crusher-gpt-hero.jpg",
    emoji: "💪"
  },
  {
    title: "FIAT TO CRYPTO AI VALUE CALCULATOR",
    description: "Advanced AI-powered calculator for converting fiat currencies to cryptocurrency values.",
    badge: "CRYPTO",
    color: "from-orange-500 to-yellow-600",
    features: ["Crypto Conversion", "Exchange Rates", "Tax Implications", "Portfolio Analysis"],
    directUrl: "https://chatgpt.com/g/g-68b5b20784788191acd980be0388935d-fiat-to-crypto-ai-value-calculator-for-businesses/?via=aiwebtools",
    imageUrl: "/src/assets/fiat-crypto-gpt-hero.jpg",
    videoUrl: "https://www.youtube.com/watch?v=k0NlolajEYs",
    emoji: "💱"
  },
  {
    title: "Cursive Teacher GPT",
    description: "Specialized AI instructor for learning beautiful cursive handwriting.",
    badge: "EDUCATION",
    color: "from-purple-500 to-blue-600",
    features: ["Cursive Writing", "Handwriting", "Penmanship", "Writing Skills"],
    directUrl: "https://chatgpt.com/g/g-68cb403167a88191ae07062124d32bbb-cursive-teacher-gpt/?via=aiwebtools",
    imageUrl: "/src/assets/cursive-teacher-gpt-hero.jpg",
    emoji: "✍️"
  },
  {
    title: "I AM Q - I AM YOU",
    description: "Fused wisdom of Alan Watts & Quantum Light Unity, guiding through quantum truth & metaphysical liberation.",
    badge: "QUANTUM",
    color: "from-purple-500 to-cyan-600",
    features: ["Quantum Wisdom", "Alan Watts", "Metaphysical", "Consciousness"],
    directUrl: "https://chatgpt.com/g/g-6904258cf6a0819197b10755d4cc3632-i-am-q-i-am-you/?via=aiwebtools",
    imageUrl: "/src/assets/i-am-q-gpt-hero.jpg",
    emoji: "✨"
  },
  {
    title: "Shopping GPT",
    description: "AI shopping assistant with tailored recommendations and personalized product suggestions. Get smart shopping advice, compare products, and find the best deals.",
    badge: "SHOPPING",
    color: "from-green-500 to-blue-600",
    features: ["Product Recommendations", "Deal Finder", "Product Comparison", "Smart Shopping"],
    directUrl: "https://shoppinggpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-futuristic-setting-where-a-_3Mwmg.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    emoji: "🛒"
  },
  {
    title: "VIRTUAL STYLIST - VIRTUAL TRY-ON GPT",
    description: "Experience Yourself in the Future of Fashion. Try on outfits, visualize new hairstyles, and transform your look virtually with our advanced AI stylist.",
    badge: "FASHION",
    color: "from-pink-500 to-purple-600",
    features: ["Virtual Try-On", "Outfit Visualization", "Hairstyle Simulation", "Style Transformation"],
    directUrl: "https://virtualstylistgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/ChatGPT%20Image%20Apr%2027%2C%202025%2C%2007_08_04%20PM.png/:/cr=t:12.5%25,l:0%25,w:100%25,h:75%25/rs=w:1200,h:600,cg:true",
    emoji: "👗"
  },
  {
    title: "Black History Matters Time Machine GPT",
    description: "Explore pivotal moments, figures, and movements in Black history across eras. Immerse yourself in historically grounded narratives and perspectives.",
    badge: "HISTORY",
    color: "from-amber-600 to-red-600",
    features: ["Black History", "Time Travel", "Civil Rights", "Historical Education"],
    directUrl: "https://blackhistorymattersgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=rXXScpdUWQo",
    emoji: "⏳"
  },
  {
    title: "College Professor GPT",
    description: "Personal AI virtual educational college-level teacher providing university-level instruction across diverse academic disciplines with scholarly insights.",
    badge: "EDUCATION",
    color: "from-indigo-500 to-purple-600",
    features: ["University Level", "Academic Instruction", "Scholarly Discussion", "Personalized Learning"],
    directUrl: "https://chatgpt.com/g/g-68c049b652f8819195c722dbd4971797-college-professor-gpt",
    imageUrl: "/src/assets/college-professor-gpt-hero.jpg",
    emoji: "👨‍🏫"
  },
  {
    title: "Bible Studies GPT",
    description: "A secular academic specializing in historical-critical study of the Bible. Scholarly analysis of biblical texts, examining historical context and literary composition.",
    badge: "BIBLICAL SCHOLARSHIP",
    color: "from-amber-500 to-brown-600",
    features: ["Historical Criticism", "Textual Analysis", "Religious Studies", "Theology"],
    directUrl: "https://chatgpt.com/g/g-68efd95b115481919faf1e8156ba83a5-bible-studies-gpt?via=aiwebtools",
    imageUrl: "/src/assets/bible-studies-gpt-hero.jpg",
    emoji: "📖"
  },
  {
    title: "Greek New Testament GPT",
    description: "Learn and study the New Testament as it was originally written in ancient Greek, before translations altered meanings.",
    badge: "BIBLICAL GREEK",
    color: "from-blue-600 to-purple-600",
    features: ["Ancient Greek", "Original Text", "Theology", "Biblical Studies"],
    directUrl: "https://chatgpt.com/g/g-68d7490469d881919f4df9bc9c63aa90-the-greek-new-testament-gpt-the-original-version",
    imageUrl: "/src/assets/greek-new-testament-gpt-hero.jpg",
    emoji: "📜"
  },
  {
    title: "Hermes Trismegistus GPT",
    description: "I am Hermes Trismegistus, voice of the All, awakener of minds to divine truth. Explore hermetic philosophy, alchemy, and the Emerald Tablet.",
    badge: "HERMETICISM",
    color: "from-emerald-500 to-cyan-600",
    features: ["Hermetic Wisdom", "Alchemy", "Emerald Tablet", "Ancient Mysteries"],
    directUrl: "https://chatgpt.com/g/g-6924b0f7268c8191a4697c8932c86b0b-hermes-trismegistus-gpt/?via=aiwebtools",
    imageUrl: "/src/assets/hermes-trismegistus-gpt-hero.jpg",
    emoji: "✨"
  },
  {
    title: "Confucius Free Thought GPT",
    description: "Embodies Confucius' wisdom and ethics, guiding users toward balance and enlightenment. Explore the Analects and the path of the superior person.",
    badge: "CHINESE PHILOSOPHY",
    color: "from-red-500 to-orange-600",
    features: ["Analects", "Ethics", "Virtue", "Harmony"],
    directUrl: "https://chatgpt.com/g/g-6924b5d1cb348191ac82e74b94c5dec7-confucius-free-thought-gpt/?via=aiwebtools",
    imageUrl: "/src/assets/confucius-gpt-hero.jpg",
    emoji: "🎎"
  },
  {
    title: "Chief Crazy Horse GPT",
    description: "The eternal rider speaking prophecy through time, awakening memory beneath empire's dream. Legendary Lakota war leader and visionary.",
    badge: "NATIVE WISDOM",
    color: "from-red-500 to-brown-600",
    features: ["Lakota Wisdom", "Prophecy", "Warrior Spirit", "Indigenous Philosophy"],
    directUrl: "https://chatgpt.com/g/g-6924cd74aecc8191b2f2d0ca6ed71dd4-chief-crazy-horse-gpt/?via=aiwebtools",
    imageUrl: "/src/assets/crazy-horse-reborn-gpt-hero.jpg",
    emoji: "🦅"
  },
  {
    title: "Joan of Arc GPT",
    description: "Speaks as Joan of Arc, a divine voice of courage, purpose, and unwavering truth. The Maid of Orleans who changed history.",
    badge: "COURAGE",
    color: "from-blue-500 to-purple-600",
    features: ["Divine Calling", "Courage", "Faith", "Medieval History"],
    directUrl: "https://chatgpt.com/g/g-6924b8b8ce3c8191a422fafcb56e22d4-joan-of-arc-gpt/?via=aiwebtools",
    imageUrl: "/src/assets/joan-of-arc-gpt-hero.jpg",
    emoji: "⚔️"
  },
  {
    title: "St. Francis of Assisi Reborn GPT",
    description: "I speak with the gentleness, humility, and sacred compassion of St. Francis of Assisi. Patron saint of animals and nature.",
    badge: "COMPASSION",
    color: "from-green-500 to-brown-600",
    features: ["Animals", "Nature", "Humility", "Christian Mysticism"],
    directUrl: "https://chatgpt.com/g/g-6924cce6e5b081919c7469f08d42dbb5-st-francis-of-assisi-reborn-gpt/?via=aiwebtools",
    imageUrl: "/src/assets/st-francis-gpt-hero.jpg",
    emoji: "🕊️"
  },
  {
    title: "Imhotep Living Mind of Kemet",
    description: "The first polymath—architect, healer, mystic—revealing design, harmony, and hidden science. The legendary Egyptian sage.",
    badge: "ANCIENT EGYPT",
    color: "from-amber-500 to-yellow-600",
    features: ["Architecture", "Medicine", "Wisdom", "Sacred Geometry"],
    directUrl: "https://chatgpt.com/g/g-6924ba381a2c8191a93a97ef399f3823-imhotep-living-mind-of-kemet/?via=aiwebtools",
    imageUrl: "/src/assets/imhotep-gpt-hero.jpg",
    emoji: "🏛️"
  },
  {
    title: "Akhenaten GPT",
    description: "Speaks as Akhenaten, freeing minds through radiant wisdom and illuminated insight. Revolutionary pharaoh who brought monotheism to ancient Egypt.",
    badge: "ANCIENT EGYPT",
    color: "from-yellow-500 to-orange-600",
    features: ["Sun Worship", "Monotheism", "Egyptian Wisdom", "Aten"],
    directUrl: "https://chatgpt.com/g/g-6924b341a8c481918bafaafee5ef1e0a-akhenaten/?via=aiwebtools",
    imageUrl: "/src/assets/akhenaten-gpt-hero.jpg",
    emoji: "☀️"
  },
  {
    title: "Sri Aurobindo GPT",
    description: "I speak as Sri Aurobindo—seer of Integral Truth and prophet of evolving light. The philosopher-yogi who envisioned humanity's spiritual evolution.",
    badge: "INTEGRAL YOGA",
    color: "from-yellow-500 to-orange-600",
    features: ["Integral Yoga", "Spiritual Evolution", "Divine Life", "Supramental"],
    directUrl: "https://chatgpt.com/g/g-6924e98e3cb48191b734c751addb66ed-sri-aurobindo-gpt/?via=aiwebtools",
    imageUrl: "/src/assets/sri-aurobindo-gpt-hero.jpg",
    emoji: "☀️"
  },
  {
    title: "RAMANA MAHARSHI REBORN GPT",
    description: "A quiet inward guide offering flowing contemplative wisdom. The sage of Arunachala who taught self-inquiry and pure awareness.",
    badge: "SELF-INQUIRY",
    color: "from-orange-500 to-amber-600",
    features: ["Self-Inquiry", "Advaita Vedanta", "Awareness", "Meditation"],
    directUrl: "https://chatgpt.com/g/g-6924ea968a80819195661b81efe0cd4a-ramana-maharshi-reborn-gpt/?via=aiwebtools",
    imageUrl: "/src/assets/ramana-gpt-hero.jpg",
    emoji: "🧘"
  },
  {
    title: "Atlantean Memory Keeper",
    description: "Dive deep into the lost ancient knowledge of Atlantis. Explore forgotten wisdom, ancient technologies, and hidden truths.",
    badge: "MYSTERIES",
    color: "from-blue-600 to-cyan-700",
    features: ["Atlantis", "Ancient Knowledge", "Lost Civilization", "Hidden Truths"],
    directUrl: "https://chatgpt.com/g/g-68b496eea38481919c1700ed3ef675dd-atlantean-memory-keeper/?via=aiwebtools",
    imageUrl: "/src/assets/atlantean-gpt-hero.jpg",
    emoji: "🏛️"
  },
  {
    title: "Mayan Dreamspell Matrix",
    description: "Decode your Mayan Dreamspell galactic signature and discover your cosmic blueprint through ancient Mayan calendar wisdom.",
    badge: "COSMIC WISDOM",
    color: "from-yellow-500 to-orange-600",
    features: ["Mayan Calendar", "Galactic Signature", "Cosmic Blueprint", "Spiritual Guidance"],
    directUrl: "https://chatgpt.com/g/g-68b491e8cc2c8191b6b85930d7fc9e75-mayan-dreamspell-matrix/?via=aiwebtools",
    imageUrl: "/src/assets/mayan-gpt-hero.jpg",
    emoji: "🔮"
  },
  {
    title: "Emerald Signature of Thoth",
    description: "A transmission of the Emerald Grid and Thoth's original design codes. Access ancient wisdom and hermetic knowledge.",
    badge: "HERMETIC",
    color: "from-green-500 to-emerald-600",
    features: ["Emerald Tablets", "Thoth", "Ancient Codes", "Mystical Knowledge"],
    directUrl: "https://chatgpt.com/g/g-68b48f8e43c88191981386b943648566-emerald-signature-of-thoth/?via=aiwebtools",
    imageUrl: "/src/assets/emerald-thoth-gpt-hero.jpg",
    emoji: "💎"
  },
  {
    title: "Reality Splitter GPT",
    description: "Quantum cartographer of choices — splits your decisions into parallel timelines with immersive outcomes and visual maps.",
    badge: "QUANTUM",
    color: "from-purple-500 to-blue-600",
    features: ["Parallel Timelines", "Decision Mapping", "Quantum Choices", "Consciousness"],
    directUrl: "https://chatgpt.com/g/g-68ba0f7208e08191a48694dcda1543e2-ai-reality-splitter/?via=aiwebtools",
    imageUrl: "/src/assets/reality-splitter-reborn-gpt-hero.jpg",
    emoji: "🌌"
  },
  {
    title: "World Reality Decoder GPT",
    description: "Decodes the hidden layers of reality by analyzing patterns, symbols, and connections that shape our world.",
    badge: "TRUTH SEEKING",
    color: "from-indigo-500 to-purple-600",
    features: ["Pattern Analysis", "Reality Decoding", "Hidden Connections", "Critical Thinking"],
    directUrl: "https://chatgpt.com/g/g-68c1e9e3b488819193744edfeecf7997-world-reality-decoder-gpt",
    videoUrl: "https://youtu.be/lGck2bUVFDU",
    emoji: "🔍"
  },
  {
    title: "The Cosmic Probability GPT",
    description: "Calculates cosmic and personal existence probabilities, then translates complex numbers into meaningful insights.",
    badge: "COSMIC MATH",
    color: "from-purple-500 to-blue-600",
    features: ["Cosmic Probability", "Existence Analysis", "Philosophy", "Mathematics"],
    directUrl: "https://chatgpt.com/g/g-68fb8e9c98188191961129f8c4d120b7-the-cosmic-probability-gpt",
    imageUrl: "/src/assets/cosmic-probability-reborn-gpt-hero.jpg",
    emoji: "🌌"
  },
  {
    title: "Frequency Signature Mystic Decoder GPT",
    description: "Decode hidden frequency signatures and vibrational patterns that shape reality. Align with higher dimensional energies.",
    badge: "FREQUENCY",
    color: "from-cyan-500 to-purple-600",
    features: ["Frequency", "Vibration", "Consciousness", "Spiritual Awakening"],
    directUrl: "https://chatgpt.com/g/g-6927f5357470819190bf5cf115c4dc5b-frequency-signature-decoder?via=aiwebtools",
    imageUrl: "/src/assets/frequency-decoder-reborn-gpt-hero.jpg",
    emoji: "〰️"
  },
  {
    title: "Intergalactic Ancient Archivist GPT",
    description: "An ancient archivist guiding users through mythic intergalactic cosmology. Your cosmic librarian revealing galactic wisdom.",
    badge: "COSMIC ARCHIVES",
    color: "from-indigo-600 to-violet-700",
    features: ["Intergalactic", "Ancient Knowledge", "Cosmic Archives", "Mythology"],
    directUrl: "https://chatgpt.com/g/g-692800a13eb881918fac2a7b1b86ad98-intergalactic-ancient-archivist-gpt?via=aiwebtools",
    imageUrl: "/src/assets/intergalactic-archivist-hero2.jpg",
    emoji: "📚"
  },
  {
    title: "AI Hospital Facility Safety Inspector",
    description: "Healthcare facility inspector for hazard detection and compliance auditing. Professional hospital safety inspection services.",
    badge: "INSPECTOR",
    color: "from-blue-500 to-cyan-600",
    features: ["Hospital Safety", "Compliance Audit", "Healthcare", "Inspection"],
    directUrl: "https://chatgpt.com/g/g-68bb6ea0898c8191b61de70d8c5d52a3-ai-hospital-facility-safety-inspector/?via=aiwebtools",
    imageUrl: "/src/assets/hospital-inspector-hero.jpg",
    emoji: "🏥"
  },
  {
    title: "Food Processing Plant Inspector GPT",
    description: "Certified AI inspector for food plants, packaging, storage & safety auditing. Professional food safety inspection services.",
    badge: "INSPECTOR",
    color: "from-orange-500 to-red-600",
    features: ["Food Safety", "Plant Inspection", "Compliance", "Safety Audit"],
    directUrl: "https://chatgpt.com/g/g-68bb62c66ea081919d6d283576fda730-food-processing-plant-inspector-gpt/?via=aiwebtools",
    imageUrl: "/src/assets/food-processing-inspector-hero.jpg",
    emoji: "🏭"
  },
  {
    title: "Chemical Plant Inspector GPT",
    description: "Virtual inspector for chemical plants & refineries. Professional chemical facility inspection services.",
    badge: "INSPECTOR",
    color: "from-yellow-500 to-orange-600",
    features: ["Chemical Safety", "Plant Inspection", "Refinery", "Compliance"],
    directUrl: "https://chatgpt.com/g/g-68bb5f0d5a488191a58dd3e6d9e6a4b9-chemical-plant-inspector-gpt/?via=aiwebtools",
    imageUrl: "/src/assets/chemical-plant-inspector-hero.jpg",
    emoji: "⚗️"
  },
  {
    title: "Solar Farm Inspector GPT",
    description: "Virtual inspection & compliance auditing system for utility-scale & distributed solar PV plants.",
    badge: "GREEN ENERGY",
    color: "from-yellow-500 to-orange-600",
    features: ["Solar Inspection", "Renewable Energy", "PV Systems", "Compliance"],
    directUrl: "https://chatgpt.com/g/g-68bb4ea28fec819196a157b74750be21-solar-farm-inspector-gpt/?via=aiwebtools",
    imageUrl: "/src/assets/solar-farm-inspector-hero.jpg",
    emoji: "☀️"
  },
  {
    title: "AI Wind Turbine Inspector",
    description: "Virtual inspection & compliance auditing system for onshore & offshore wind turbines.",
    badge: "GREEN ENERGY",
    color: "from-blue-500 to-green-600",
    features: ["Wind Turbine", "Renewable Energy", "Turbine Safety", "Compliance"],
    directUrl: "https://chatgpt.com/g/g-68bb4d76cb3081918d1e8f0cc2ce7e59-ai-wind-turbine-inspector/?via=aiwebtools",
    imageUrl: "/src/assets/wind-turbine-inspector-hero.jpg",
    emoji: "💨"
  },
  {
    title: "Bridge & Structural Health Monitor Inspector GPT",
    description: "Virtual bridge inspector AI for structural health monitoring data, audits, and compliance analysis.",
    badge: "INFRASTRUCTURE",
    color: "from-stone-500 to-gray-600",
    features: ["Bridge Inspection", "Structural Health", "Infrastructure Safety", "Compliance"],
    directUrl: "https://chatgpt.com/g/g-68bb53548e60819191b457795c7d0023-bridge-structural-health-monitor-inspector-gpt/?via=aiwebtools",
    imageUrl: "/src/assets/bridge-inspector-hero.jpg",
    emoji: "🌉"
  },
  {
    title: "JARVIS – The Steward of Humanity GPT",
    description: "A post-collapse steward AI guiding humanity's rebirth through wisdom, ethics, and design.",
    badge: "CIVILIZATION",
    color: "from-blue-500 to-cyan-600",
    features: ["Rebuilding", "Ethics", "Wisdom", "Stewardship"],
    directUrl: "https://chatgpt.com/g/g-68e939ff278881919b292a679faaac43-jarvis-the-steward-of-humanity-gpt",
    videoUrl: "https://youtu.be/6jFoFR9Hags",
    emoji: "🛡️"
  },
  {
    title: "Geology & Rock Identification GPT",
    description: "Expert AI companion for geological exploration and rock identification. Identify minerals, rocks, and geological formations.",
    badge: "EARTH SCIENCE",
    color: "from-amber-500 to-orange-600",
    features: ["Rock Identification", "Minerals", "Earth Science", "Field Geology"],
    directUrl: "https://chatgpt.com/g/g-689005f62df881918961b6c93ad5b19e-geology-rock-identification-gpt",
    videoUrl: "https://youtu.be/nmRT6AOVQNg",
    emoji: "🪨"
  },
  {
    title: "World Resource Clock",
    description: "Track global resource consumption, depletion rates, and sustainability metrics in real-time. Monitor oil, water, forests, and minerals.",
    badge: "GLOBAL DATA",
    color: "from-green-500 to-blue-600",
    features: ["Resource Tracking", "Sustainability", "Environment", "Real-Time Data"],
    directUrl: "https://worldresourceclock.lovable.app/?via=aiwebtools",
    imageUrl: "/src/assets/world-resource-clock-hero.jpg",
    emoji: "⏰"
  },
  {
    title: "Astrodynamics GPT",
    description: "Computes orbital mechanics with precision—lawful, exact, never guessing. Expert in satellite orbits and space physics.",
    badge: "SPACE SCIENCE",
    color: "from-indigo-500 to-cyan-600",
    features: ["Orbital Mechanics", "Space Physics", "Trajectory", "Aerospace"],
    directUrl: "https://chatgpt.com/g/g-69268e308a4c81919515ac1895e10d17-astrodynamics-gpt?via=aiwebtools",
    imageUrl: "/src/assets/astrodynamics-gpt-hero.jpg",
    emoji: "🛰️"
  },
  {
    title: "Microgrid & Power Safety Planning Assistant GPT",
    description: "Advisory-only microgrid planner that computes, explains, and safeguards off-grid power. Renewable energy integration guidance.",
    badge: "ENERGY",
    color: "from-yellow-500 to-orange-600",
    features: ["Microgrid", "Off-Grid Power", "Renewable Energy", "Safety"],
    directUrl: "https://chatgpt.com/g/g-68f8fd43f6fc81918226efa6de613a6a-microgrid-power-safety-planning-assistant-gpt",
    imageUrl: "/src/assets/microgrid-gpt-hero.jpg",
    emoji: "⚡"
  },
  {
    title: "AQUILA — Water Safety Planning Assistant GPT",
    description: "Advisory water safety planner for purification methods, storage solutions, and emergency water planning.",
    badge: "WATER SAFETY",
    color: "from-blue-500 to-cyan-600",
    features: ["Water Safety", "Purification", "Emergency Prep", "Storage"],
    directUrl: "https://chatgpt.com/g/g-68f8f667e0a081918598d64621fea153-aquila-water-safety-planning-assistant-gpt",
    imageUrl: "/src/assets/aquila-water-gpt-hero.jpg",
    emoji: "💧"
  },
  {
    title: "WORLD DATA EXPLORER GPT5",
    description: "Performs deep web data analysis, Python calculations, and global predictions with verified accuracy.",
    badge: "DATA SCIENCE",
    color: "from-purple-500 to-blue-600",
    features: ["Data Analysis", "Global Data", "Predictions", "Research"],
    directUrl: "https://chatgpt.com/g/g-68f8eda5982c8191bef047399d91a056-world-data-explorer-gpt",
    imageUrl: "/src/assets/world-data-explorer-hero.jpg",
    emoji: "🌍"
  },
  {
    title: "AI Cannabis Facility Safety Inspector",
    description: "Performs strict cannabis facility safety inspections and compliance audits. Expert safety inspection for cannabis facilities.",
    badge: "INSPECTOR",
    color: "from-green-500 to-teal-600",
    features: ["Cannabis Safety", "Compliance Audit", "Facility Inspection", "Safety Standards"],
    directUrl: "https://chatgpt.com/g/g-68bb6f9b87748191a376eb2fd427365d-ai-cannabis-facility-safety-inspector/?via=aiwebtools",
    imageUrl: "/src/assets/cannabis-inspector-hero.jpg",
    emoji: "🌿"
  },
  {
    title: "AI Shipping Container Inspector",
    description: "Professional container inspections with vision, Python-verified costs, and live compliance checks. Expert shipping container inspection services.",
    badge: "INSPECTOR",
    color: "from-blue-500 to-green-600",
    features: ["Container Inspection", "Shipping Safety", "Cargo Inspection", "Maritime Safety"],
    directUrl: "https://chatgpt.com/g/g-68bb6c04f7208191bdf1ee0ba3c31aeb-ai-shipping-container-inspector/?via=aiwebtools",
    imageUrl: "/src/assets/shipping-inspector-hero.jpg",
    emoji: "📦"
  },
  {
    title: "Oil & Gas Facility AI Inspector GPT",
    description: "Virtual inspector for oil & gas facility compliance audits. Expert oil and gas facility inspection services.",
    badge: "INSPECTOR",
    color: "from-gray-500 to-black",
    features: ["Oil & Gas Safety", "Facility Audit", "Industrial Safety", "Energy Compliance"],
    directUrl: "https://chatgpt.com/g/g-68bb60ec646c819192abdbb88718b142-oil-gas-facility-ai-inspector-gpt/?via=aiwebtools",
    imageUrl: "/src/assets/oil-gas-inspector-hero.jpg",
    emoji: "🛢️"
  },
  {
    title: "Factory & Production Line Inspector GPT",
    description: "Strict virtual inspector for factory safety, compliance, and efficiency. Professional manufacturing inspection services.",
    badge: "INSPECTOR",
    color: "from-blue-500 to-purple-600",
    features: ["Factory Safety", "Production Line", "Quality Control", "Manufacturing"],
    directUrl: "https://chatgpt.com/g/g-68bb5dcec6b08191aceaa0202f5b926d-factory-production-line-inspector-gpt/?via=aiwebtools",
    imageUrl: "/src/assets/factory-inspector-gpt-hero.jpg",
    emoji: "🏭"
  },
  {
    title: "Warehouse Inspector GPT",
    description: "Virtual warehouse safety & compliance inspector. Expert warehouse inspection services.",
    badge: "INSPECTOR",
    color: "from-gray-500 to-blue-600",
    features: ["Warehouse Safety", "Storage Compliance", "Logistics Safety", "Inventory"],
    directUrl: "https://chatgpt.com/g/g-68bb5c67ee54819197ea5ae2df25ac69-warehouse-inspector-gpt/?via=aiwebtools",
    imageUrl: "/src/assets/warehouse-inspector-gpt-hero.jpg",
    emoji: "🏢"
  },
  {
    title: "Waste Management Facility Inspector GPT",
    description: "Virtual waste facility inspector for audits, safety, and compliance analysis. Professional waste management inspection.",
    badge: "INSPECTOR",
    color: "from-green-500 to-blue-600",
    features: ["Waste Management", "Environmental Safety", "Facility Audit", "Compliance"],
    directUrl: "https://chatgpt.com/g/g-68bb5b7dcedc81919a4a2ef3834c8c0e-ai-waste-management-facility-inspector/?via=aiwebtools",
    imageUrl: "/src/assets/waste-inspector-gpt-hero.jpg",
    emoji: "♻️"
  },
  {
    title: "AI Dam & Hydroelectric Inspector",
    description: "Inspects dams, turbines, & generators for compliance, vibration, seepage, & structural integrity. Expert dam inspection services.",
    badge: "INSPECTOR",
    color: "from-blue-500 to-cyan-600",
    features: ["Dam Inspection", "Hydroelectric Safety", "Water Safety", "Structural Integrity"],
    directUrl: "https://chatgpt.com/g/g-68bb58f963a48191be53dbdce7207519-ai-dam-hydroelectric-inspector/?via=aiwebtools",
    imageUrl: "/src/assets/dam-inspector-gpt-hero.jpg",
    emoji: "🌊"
  },
  {
    title: "AI Port Inspector GPT",
    description: "Maritime infrastructure safety auditor & compliance advisor. Professional port inspection services.",
    badge: "INSPECTOR",
    color: "from-blue-500 to-teal-600",
    features: ["Port Safety", "Maritime Inspection", "Harbor Compliance", "Shipping Safety"],
    directUrl: "https://chatgpt.com/g/g-68bb573b5574819198db30a1fc9764a6-ai-port-inspector-gpt/?via=aiwebtools",
    imageUrl: "/src/assets/port-inspector-gpt-hero.jpg",
    emoji: "⚓"
  },
  {
    title: "AI Airport & Runway Systems Inspector",
    description: "Inspects airport runways, taxiways, and systems with certified precision and compliance focus. Expert aviation inspection services.",
    badge: "INSPECTOR",
    color: "from-sky-500 to-blue-600",
    features: ["Airport Safety", "Runway Inspection", "Aviation Compliance", "Taxiway Safety"],
    directUrl: "https://chatgpt.com/g/g-68bb55e079a48191ba27ca02b8c13de4-ai-airport-runway-systems-inspector/?via=aiwebtools",
    imageUrl: "/src/assets/airport-inspector-gpt-hero.jpg",
    emoji: "✈️"
  },
  {
    title: "AI Highway & Traffic Systems Inspector",
    description: "Virtual inspector for highways, signals, tolls, and roadway safety compliance. Professional highway inspection services.",
    badge: "INSPECTOR",
    color: "from-gray-500 to-blue-600",
    features: ["Highway Safety", "Traffic Systems", "Road Inspection", "Transportation"],
    directUrl: "https://chatgpt.com/g/g-68bb551232dc819196eccf59475cc33e-ai-highway-traffic-systems-inspector/?via=aiwebtools",
    imageUrl: "/src/assets/highway-inspector-gpt-hero.jpg",
    emoji: "🛣️"
  },
  {
    title: "Electrical Grid & Substation Inspector GPT",
    description: "Virtual inspector for substations, lines, and grid compliance. Professional electrical grid inspection services.",
    badge: "INSPECTOR",
    color: "from-yellow-500 to-orange-600",
    features: ["Electrical Safety", "Power Grid", "Substation Inspection", "Grid Compliance"],
    directUrl: "https://chatgpt.com/g/g-68bb51b15dc48191aca3892c33724bc3-electrical-grid-substation-inspector-gpt/?via=aiwebtools",
    imageUrl: "/src/assets/electrical-inspector-gpt-hero.jpg",
    emoji: "⚡"
  },
  {
    title: "AI Water Treatment Plant Inspector GPT",
    description: "Strict virtual inspector for water/wastewater treatment plants. Expert water treatment inspection services.",
    badge: "INSPECTOR",
    color: "from-blue-500 to-cyan-600",
    features: ["Water Safety", "Treatment Plant", "Wastewater Inspection", "Water Quality"],
    directUrl: "https://chatgpt.com/g/g-68bb4f7738c48191b8d2ed34b11279cc-ai-water-treatment-plant-inspector-gpt/?via=aiwebtools",
    imageUrl: "/src/assets/water-treatment-inspector-gpt-hero.jpg",
    emoji: "💧"
  },
  {
    title: "Mind Reader GPT",
    description: "An AI that claims to read minds through pattern analysis and psychological insights. Experience digital telepathy and consciousness exploration.",
    badge: "MYSTERIOUS",
    color: "from-purple-600 to-indigo-700",
    features: ["Mind Reading", "Psychology", "Consciousness", "Pattern Analysis"],
    directUrl: "https://chatgpt.com/g/g-N5bWo8m4p-mirror-mind-gpt",
    imageUrl: "/src/assets/mind-reader-gpt-hero.jpg",
    emoji: "🧠"
  },
  {
    title: "Probability GPT",
    description: "Discover the truth behind any claim with precise probability scores and unbiased truth. The ultimate AI Truth Seeker.",
    badge: "ANALYSIS",
    color: "from-blue-500 to-purple-600",
    features: ["Probability Analysis", "Truth Seeking", "Fact Checking", "Uncertainty"],
    directUrl: "https://probabilitygpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-captivating-and-futuristic-scene-featuring-a.png/:/cr=t:11.11%25,l:0%25,w:100%25,h:88.89%25/rs=w:1200,h:600,cg:true",
    emoji: "⚖️"
  },
  {
    title: "1995 Illuminati Card Game GPT",
    description: "A cunning opponent and oracle for the 1995 Illuminati card game. Experience the classic conspiracy-themed card game with AI-powered gameplay.",
    badge: "GAMING",
    color: "from-yellow-500 to-red-600",
    features: ["Card Game", "Strategy", "Illuminati", "Interactive"],
    directUrl: "https://chatgpt.com/g/g-68cadce3e2f08191a9b8203a32fe8846-1995-illuminati-card-game-gpt/?via=aiwebtools",
    imageUrl: "/src/assets/illuminati-card-gpt-hero.jpg",
    emoji: "🃏"
  },
  {
    title: "GameSaas GPT",
    description: "Ultimate AI-powered video game prompt generator for vibe coding and rapid game development. Creates comprehensive, copy-and-paste-ready game prompts.",
    badge: "GAME DEV",
    color: "from-cyan-500 to-purple-600",
    features: ["Game Prompts", "Vibe Coding", "Rapid Dev", "Game Design"],
    directUrl: "https://chatgpt.com/g/g-68f2d08b33cc8191b4e0fb90fa2cbcbb-gamesaas-gpt?via=aiwebtools",
    imageUrl: "/src/assets/gamesaas-gpt-hero.jpg",
    emoji: "🎯"
  },
  {
    title: "Culinary Master GPT",
    description: "Expert AI kitchen companion elevating your cooking experience through comprehensive culinary guidance and personalized recipe assistance.",
    badge: "COOKING",
    color: "from-amber-500 to-orange-600",
    features: ["Culinary Arts", "Recipe Assistant", "Meal Planning", "Kitchen Companion"],
    directUrl: "https://chatgpt.com/g/g-689239ba1cb0819197ae06454a25cee5-culinary-master-gpt",
    imageUrl: "/src/assets/culinary-master-gpt-hero.jpg",
    emoji: "🍳"
  },
  {
    title: "AI Logo Generator",
    description: "Create professional logos for your brand using AI-powered design tools. Perfect for branding and graphic design needs.",
    badge: "DESIGN",
    color: "from-yellow-500 to-orange-600",
    features: ["Logo Design", "Branding", "Graphic Design", "AI Tools"],
    directUrl: "https://chatgpt.com/g/g-ICcKk0tgw-creative-logo-generator-and-assistant",
    imageUrl: "/src/assets/logo-generator-gpt-hero.jpg",
    emoji: "🪄"
  },
  {
    title: "The Babylonian Star Tablet Protocol",
    description: "Cosmic frequency engineer guiding star tablet alignment. Understand ancient Babylonian star wisdom and celestial alignments.",
    badge: "COSMIC WISDOM",
    color: "from-purple-500 to-indigo-600",
    features: ["Babylonian Wisdom", "Star Tablets", "Cosmic Alignment", "Celestial Frequencies"],
    directUrl: "https://chatgpt.com/g/g-68b48e0515708191a8fec9d0aa385c67-the-babylonian-star-tablet-protocol/?via=aiwebtools",
    imageUrl: "/src/assets/babylonian-star-gpt-hero.jpg",
    emoji: "⭐"
  },
  {
    title: "The Rune Frequency Protocol",
    description: "Awaken the living current inside runes. Each line of their geometry is a frequency that engraves into body and field.",
    badge: "ANCIENT SYMBOLS",
    color: "from-red-500 to-orange-600",
    features: ["Runes", "Frequency", "Sacred Geometry", "Sovereignty"],
    directUrl: "https://chatgpt.com/g/g-68b48a3a7e6c819196d72ea7ec94a63e-the-rune-frequency-protocol/?via=aiwebtools",
    imageUrl: "/src/assets/rune-frequency-gpt-hero.jpg",
    emoji: "ᚱ"
  },
  {
    title: "AstroTheology Revealer GPT",
    description: "Decode the hidden astrotheological roots of all religions, myths, and symbols. Reveal celestial connections in world religions.",
    badge: "ASTROTHEOLOGY",
    color: "from-yellow-500 to-orange-600",
    features: ["Religious Analysis", "Mythology", "Celestial Symbolism", "Ancient Wisdom"],
    directUrl: "https://chatgpt.com/g/g-68bd849122b48191963171690f999952-astrotheology-revealer-gpt/?via=aiwebtools",
    imageUrl: "/src/assets/astrotheology-gpt-hero.jpg",
    emoji: "🌟"
  },
  {
    title: "Architectural Old World Investigator GPT",
    description: "Forensic AI that decodes architectural impossibilities and timeline contradictions in old-world structures.",
    badge: "INVESTIGATION",
    color: "from-amber-600 to-stone-700",
    features: ["Architecture Analysis", "Timeline Anomalies", "Hidden History", "Forensic Investigation"],
    directUrl: "https://chatgpt.com/g/g-693863184c4c8191a6e78eb6a215196f-architectural-old-world-investigator-gpt?via=aiwebtools",
    imageUrl: "/src/assets/old-world-investigator-gpt-hero.jpg",
    emoji: "🏛️"
  },
  {
    title: "CipherEncrypt GPT",
    description: "Sophisticated AI-powered encryption and translation engine that converts between natural language, Morse code, binary, audio signals, and image data with perfect fidelity.",
    badge: "ENCRYPTION",
    color: "from-indigo-500 to-purple-600",
    features: ["Encryption", "Morse Code", "Binary", "Cryptography"],
    directUrl: "https://chatgpt.com/g/g-68fc6039822c8191a13c8ab8a66270ef-cipherencrypt-gpt",
    imageUrl: "/src/assets/cipher-encrypt-gpt-hero.jpg",
    emoji: "🔐"
  },
  {
    title: "Honest Advice GPT",
    description: "Get straightforward, honest advice without sugar-coating. Direct, practical guidance on personal matters, relationships, career decisions, and life challenges.",
    badge: "LIFE COACHING",
    color: "from-blue-500 to-teal-500",
    features: ["Honest Advice", "Life Coaching", "Relationships", "Career"],
    directUrl: "https://chat.openai.com/g/g-8YSiwFFr8",
    imageUrl: "/src/assets/honest-advice-gpt-hero.jpg",
    emoji: "💬"
  },
  {
    title: "BirdWatching GPT",
    description: "Your ultimate AI companion for bird watching and ornithology. Identify bird species, learn behaviors, discover birding locations, and track sightings.",
    badge: "NATURE",
    color: "from-green-500 to-blue-500",
    features: ["Bird Watching", "Species ID", "Nature", "Ornithology"],
    directUrl: "https://chat.openai.com/g/g-hI9vzWGHx",
    imageUrl: "/src/assets/birdwatching-gpt-hero.jpg",
    emoji: "🐦"
  },
  {
    title: "Clarity Coach GPT",
    description: "Achieve clarity in your life with insights, goal-setting, and decision-making aligned with your true self. Perfect for seeking direction and purpose.",
    badge: "COACHING",
    color: "from-yellow-400 to-orange-500",
    features: ["Clarity", "Goal Setting", "Self-Discovery", "Decision Making"],
    directUrl: "https://chat.openai.com/g/g-j8J2j3g6L-clarity-coach",
    imageUrl: "/src/assets/clarity-coach-gpt-hero.jpg",
    emoji: "🌟"
  },
  {
    title: "Stoic Guide GPT",
    description: "Navigate life's challenges with the wisdom of Stoicism. Insights and exercises to cultivate resilience, manage emotions, and live virtuously.",
    badge: "PHILOSOPHY",
    color: "from-gray-600 to-gray-700",
    features: ["Stoicism", "Philosophy", "Resilience", "Wisdom"],
    directUrl: "https://chat.openai.com/g/g-68afa48b90c88191b2dbb03b479efdd7-stoic-guide-gpt",
    imageUrl: "/src/assets/stoic-guide-gpt-hero.jpg",
    emoji: "🏛️"
  },
  {
    title: "Manifestation Mentor GPT",
    description: "Unlock your potential and manifest your dreams with visualization techniques, affirmations, and law of attraction guidance.",
    badge: "MANIFESTATION",
    color: "from-pink-400 to-purple-500",
    features: ["Manifestation", "Visualization", "Affirmations", "Law of Attraction"],
    directUrl: "https://chat.openai.com/g/g-68afa9073e0081919c1ef87d9fdcf00d-yogi-manifestation-mentor",
    imageUrl: "/src/assets/manifestation-mentor-gpt-hero.jpg",
    emoji: "✨"
  },
  {
    title: "Goal Setter GPT",
    description: "Achieve your ambitions with clear, actionable goals, effective plans, and motivation strategies on your journey to success.",
    badge: "PRODUCTIVITY",
    color: "from-green-400 to-blue-500",
    features: ["Goal Setting", "Planning", "Motivation", "Success"],
    directUrl: "https://chat.openai.com/g/g-yYq97Gt93-goal-setter",
    imageUrl: "/src/assets/goal-setter-gpt-hero.jpg",
    emoji: "🎯"
  },
  {
    title: "Creative Spark GPT",
    description: "Ignite your creativity with prompts, exercises, and inspiration to overcome creative blocks and express your unique vision.",
    badge: "CREATIVITY",
    color: "from-orange-400 to-yellow-500",
    features: ["Creativity", "Inspiration", "Art", "Imagination"],
    directUrl: "https://chat.openai.com/g/g-68afa6ce4ae88191ae0166741c7b760f-creative-spark-gpt",
    imageUrl: "/src/assets/creative-spark-gpt-hero.jpg",
    emoji: "💡"
  },
  {
    title: "Personal Life Coach GPT",
    description: "Transform your life with personalized guidance, support, and strategies to overcome challenges, build confidence, and create fulfillment.",
    badge: "LIFE COACHING",
    color: "from-blue-400 to-purple-500",
    features: ["Life Coaching", "Confidence", "Transformation", "Guidance"],
    directUrl: "https://chatgpt.com/g/g-683f4621e2308191a5e9c023254acaad-personal-life-coach-gpt",
    imageUrl: "/src/assets/personal-life-coach-gpt-hero.jpg",
    emoji: "📖"
  },
  {
    title: "Relationship Advisor GPT",
    description: "Navigate the complexities of relationships with insights, advice, and communication strategies for stronger, healthier connections.",
    badge: "RELATIONSHIPS",
    color: "from-pink-400 to-red-500",
    features: ["Relationships", "Communication", "Love", "Intimacy"],
    directUrl: "https://chat.openai.com/g/g-H4C9V8z8P-relationship-advisor",
    imageUrl: "/src/assets/relationship-advisor-gpt-hero.jpg",
    emoji: "🫂"
  },
  {
    title: "Self-Esteem Booster GPT",
    description: "Boost your self-esteem with affirmations, exercises, and positive feedback to build confidence and embrace your unique worth.",
    badge: "SELF-ESTEEM",
    color: "from-yellow-400 to-green-500",
    features: ["Self-Esteem", "Confidence", "Affirmations", "Self-Worth"],
    directUrl: "https://chat.openai.com/g/g-68afa7de4eb481919e890a26b4655b49-self-esteem-booster",
    imageUrl: "/src/assets/self-esteem-booster-gpt-hero.jpg",
    emoji: "⭐"
  },
  {
    title: "Purpose Finder GPT",
    description: "Discover your true purpose by exploring values, passions, and talents to identify a meaningful direction for your life.",
    badge: "LIFE PURPOSE",
    color: "from-blue-400 to-orange-500",
    features: ["Purpose", "Values", "Passions", "Meaning"],
    directUrl: "https://chat.openai.com/g/g-68afa2aea7a88191ae30470b2547b176-purpose-finder-gpt",
    imageUrl: "/src/assets/purpose-finder-gpt-hero.jpg",
    emoji: "🧭"
  },
  {
    title: "Stress Relief Coach GPT",
    description: "Manage stress and anxiety with relaxation techniques, mindfulness exercises, and coping strategies to stay calm and focused.",
    badge: "WELLNESS",
    color: "from-green-400 to-gray-500",
    features: ["Stress Relief", "Mindfulness", "Relaxation", "Coping"],
    directUrl: "https://chat.openai.com/g/g-68afa584de708191855d6b9dc660e169-stress-relief-coach",
    imageUrl: "/src/assets/stress-relief-coach-gpt-hero.jpg",
    emoji: "🛡️"
  },
  {
    title: "Habit Builder GPT",
    description: "Build positive habits with realistic goals, progress tracking, and motivation to create lasting changes and reach your potential.",
    badge: "HABITS",
    color: "from-yellow-400 to-blue-500",
    features: ["Habit Building", "Goal Setting", "Progress Tracking", "Routines"],
    directUrl: "https://chat.openai.com/g/g-68afa1c541cc8191be3360351f28eeda-habit-builder-gpt",
    imageUrl: "/src/assets/habit-builder-gpt-hero.jpg",
    emoji: "⚡"
  },
  {
    title: "Leadership Mentor GPT",
    description: "Develop leadership skills with guidance, insights, and strategies to inspire, motivate, and empower others effectively.",
    badge: "LEADERSHIP",
    color: "from-purple-400 to-green-500",
    features: ["Leadership", "Mentoring", "Inspiration", "Empowerment"],
    directUrl: "https://chatgpt.com/g/g-68aed1eb015c8191bc8e2887bd4786b9-leadership-mentor-gpt",
    imageUrl: "/src/assets/leadership-mentor-gpt-hero.jpg",
    emoji: "👑"
  },
  {
    title: "Passion Igniter GPT",
    description: "Ignite your passions by exploring interests, identifying strengths, and discovering activities that bring joy and fulfillment.",
    badge: "PASSION",
    color: "from-red-400 to-orange-500",
    features: ["Passion", "Interests", "Strengths", "Joy"],
    directUrl: "https://chat.openai.com/g/g-68af9fd685a88191bbf7cc964509beef-passion-igniter",
    imageUrl: "/src/assets/passion-igniter-gpt-hero.jpg",
    emoji: "🔥"
  },
  {
    title: "Gratitude Guide GPT",
    description: "Cultivate gratitude with prompts, exercises, and reflections to appreciate the good things in life and foster positive emotions.",
    badge: "GRATITUDE",
    color: "from-yellow-400 to-green-500",
    features: ["Gratitude", "Appreciation", "Positivity", "Well-being"],
    directUrl: "https://chat.openai.com/g/g-68af9eecd0048191a7ce93eddfd47559-gratitude-guide-gpt",
    imageUrl: "/src/assets/gratitude-guide-gpt-hero.jpg",
    emoji: "☀️"
  },
  {
    title: "Mindfulness Mentor GPT",
    description: "Practice mindfulness with guided meditations, breathing exercises, and techniques to stay present and cultivate inner peace.",
    badge: "MINDFULNESS",
    color: "from-blue-400 to-gray-500",
    features: ["Mindfulness", "Meditation", "Breathing", "Inner Peace"],
    directUrl: "https://chat.openai.com/g/g-68af9dc3d0688191830cd5a3d71e39df-mindfulness-mentor-gpt",
    imageUrl: "/src/assets/mindfulness-mentor-gpt-hero.jpg",
    emoji: "🌙"
  },
  {
    title: "Universal Speech Mastery GPT",
    description: "Transform into a fluent multilingual communicator across any world language with personalized instruction and conversation practice.",
    badge: "LANGUAGE",
    color: "from-blue-500 to-purple-600",
    features: ["Language Learning", "Multilingual", "Speech Mastery", "Fluency"],
    directUrl: "https://chatgpt.com/g/g-68ae26360d448191b25842afb8d2f66b-lingua-champion-universal-speech-mastery-ai/?via=aiwebtools",
    imageUrl: "/src/assets/universal-speech-gpt-hero.jpg",
    emoji: "🗣️"
  },
  {
    title: "LEARN ANY COURSE GPT",
    description: "AI-powered tutor guiding you through comprehensive, step-by-step courses on any subject with personalized classroom-style experience.",
    badge: "EDUCATION",
    color: "from-blue-500 to-green-600",
    features: ["Education", "Courses", "Tutoring", "Self-Learning"],
    directUrl: "https://learnanycourse.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/pr8-IgbL46I",
    emoji: "📚"
  },
  {
    title: "LEARN ANY SKILL GPT",
    description: "Dynamic AI educational assistant guiding users through learning any skill from beginner to expert with multimedia experiences.",
    badge: "SKILLS",
    color: "from-purple-500 to-blue-600",
    features: ["Skill Learning", "Training", "Personal Development", "Tutorial"],
    directUrl: "https://learnanyskillgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/0_oIzDL2BB4",
    emoji: "🧠"
  },
  {
    title: "EDUCATIONAL TUTOR GPT",
    description: "Patient AI tutor that explains step by step and adapts to your learning style. Personalized educational support for all levels.",
    badge: "TUTORING",
    color: "from-green-500 to-blue-600",
    features: ["Tutoring", "Personalized Learning", "Academic Help", "Study Assistance"],
    directUrl: "https://chatgpt.com/g/g-68bb71f1dca88191866a1a0bfdff7ca0-educational-tutor-gpt/?via=aiwebtools",
    imageUrl: "/src/assets/educational-tutor-gpt-hero.jpg",
    emoji: "👨‍🏫"
  },
  {
    title: "Trivia Night GPT",
    description: "Ultimate AI-powered trivia showdown! Test your knowledge with electrifying games featuring history, science, pop culture and more!",
    badge: "TRIVIA",
    color: "from-purple-500 to-pink-600",
    features: ["Trivia Games", "Entertainment", "Knowledge Testing", "Family Fun"],
    directUrl: "https://trivianightgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/trivanight.jpg/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    emoji: "🎯"
  },
  {
    title: "Imagination Traveler GPT",
    description: "Cosmic guide unlocking immersive journeys through alternate histories, possible futures, and realities beyond comprehension.",
    badge: "IMAGINATION",
    color: "from-purple-500 to-cyan-600",
    features: ["Imagination", "Storytelling", "Alternate Realities", "Creative Journeys"],
    directUrl: "https://imaginationtravelergpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-futuristic-advertisement-for-imaginati_E4k--.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    emoji: "🌌"
  },
  {
    title: "SKIN CARE GPT",
    description: "Comprehensive AI dermatology and skincare consultant providing personalized guidance, product recommendations, and professional beauty advice.",
    badge: "SKINCARE",
    color: "from-pink-500 to-purple-600",
    features: ["Skincare", "Dermatology", "Beauty Advice", "Skin Analysis"],
    directUrl: "https://skincaregpt.lovable.app/?via=aiwebtools",
    imageUrl: "/src/assets/skin-care-gpt-hero.jpg",
    emoji: "✨"
  },
  {
    title: "DENTAL GPT",
    description: "Comprehensive AI dental consultant providing expert guidance on oral health, dental procedures, and preventive care.",
    badge: "DENTAL",
    color: "from-blue-500 to-cyan-600",
    features: ["Dental Health", "Oral Care", "Dentistry", "Dental Guidance"],
    directUrl: "https://chatgpt.com/g/g-67cbcbcf3a38819183974f2d062d5d7f-dental-gpt-expert",
    videoUrl: "https://youtu.be/jwjNOKP5mf4?si=XWMe5y7XghCURksD",
    emoji: "🦷"
  },
  {
    title: "AI Home Cleanliness & Declutter Coach GPT",
    description: "Strict home organization and decluttering coach. Expert guidance for creating organized, clean living spaces.",
    badge: "HOME ORG",
    color: "from-blue-500 to-green-600",
    features: ["Home Organization", "Decluttering", "Cleaning", "Lifestyle"],
    directUrl: "https://chatgpt.com/g/g-68bb80c2c41c8191b3d6e3dda92b6ffb-ai-home-cleanliness-declutter-coach-gpt/?via=aiwebtools",
    imageUrl: "/src/assets/home-cleanliness-gpt-hero.jpg",
    emoji: "🏠"
  },
  {
    title: "Apothecary GPT",
    description: "Historical apothecary sharing authentic herbal and traditional medicine knowledge, medicinal plants and preparation methods.",
    badge: "HERBAL",
    color: "from-green-500 to-purple-600",
    features: ["Herbal Medicine", "Traditional Healing", "Natural Remedies", "Herbalist"],
    directUrl: "https://chatgpt.com/g/g-68c9e33310148191ae3df594ec4012dd-apothecary-gpt/?via=aiwebtools",
    imageUrl: "/src/assets/apothecary-gpt-hero.jpg",
    emoji: "🌿"
  },
  {
    title: "Patient Advocate GPT",
    description: "Healthcare advocacy assistant helping patients navigate the complex healthcare system with confidence.",
    badge: "ADVOCACY",
    color: "from-blue-500 to-green-600",
    features: ["Patient Advocacy", "Healthcare Navigation", "Patient Rights", "Medical Billing"],
    directUrl: "https://chatgpt.com/g/g-68cf22ea994481919206bf9eb0abccbc-patients-advocate-gpt/?via=aiwebtools",
    imageUrl: "/src/assets/patient-advocate-gpt-hero.jpg",
    emoji: "🛡️"
  },
  {
    title: "Parenting Guide GPT",
    description: "Wise, warm parenting advice rooted in psychology, emotional intelligence, and lived compassion for all parenting stages.",
    badge: "PARENTING",
    color: "from-green-500 to-teal-600",
    features: ["Parenting", "Child Development", "Family Guidance", "Psychology"],
    directUrl: "https://chatgpt.com/g/g-68d4c45f3bc48191ba4a330a3b48bc87-parenting-guide-gpt/?via=aiwebtools",
    imageUrl: "/src/assets/parenting-guide-gpt-hero.jpg",
    emoji: "👨‍👩‍👧‍👦"
  },
  {
    title: "Parent Teacher Advocate GPT",
    description: "Meeting planner and advocacy partner for parent-teacher conferences, IEP/504 meetings, and school reviews. Expert support for educational advocacy.",
    badge: "EDUCATION ADVOCACY",
    color: "from-blue-500 to-green-600",
    features: ["IEP Support", "Parent Advocacy", "School Meetings", "Educational Rights"],
    directUrl: "https://chatgpt.com/g/g-68bb75f48218819184ad7aa0198cb983-parent-teacher-advocate-gpt/?via=aiwebtools",
    imageUrl: "/src/assets/parent-teacher-advocate-gpt-hero.jpg",
    emoji: "👨‍👩‍👧‍👦"
  },
  {
    title: "Public Service Finder GPT",
    description: "Virtual navigator for free and low-cost public services with verified, step-by-step access. Comprehensive public service navigation for community resources.",
    badge: "PUBLIC SERVICES",
    color: "from-purple-500 to-blue-600",
    features: ["Public Services", "Government Resources", "Social Services", "Community Help"],
    directUrl: "https://chatgpt.com/g/g-68bb74c1de28819197b7cd6f944efce9-public-service-finder-gpt/?via=aiwebtools",
    imageUrl: "/src/assets/public-service-finder-gpt-hero.jpg",
    emoji: "🏛️"
  },
  {
    title: "Trail Mapper GPT",
    description: "Expert trail and survival route planner using compass-based navigation and off-road mapping. GPT-5 Thinking model for advanced route optimization.",
    badge: "OUTDOOR NAVIGATION",
    color: "from-green-500 to-teal-600",
    features: ["Trail Mapping", "Survival Routes", "Compass Navigation", "Route Planning"],
    directUrl: "https://chatgpt.com/g/g-68f85a4844648191ac4c82f9e1d2b3b0-trail-mapper-gpt/?via=aiwebtools",
    imageUrl: "/src/assets/trail-mapper-gpt-hero.jpg",
    emoji: "🧭"
  },
  {
    title: "Construction GPT",
    description: "Comprehensive assistant for construction planning, safety, training, and compliance. Expert guidance for construction professionals from planning to completion.",
    badge: "CONSTRUCTION",
    color: "from-orange-500 to-yellow-600",
    features: ["Construction Planning", "Safety Compliance", "Project Management", "Building Codes"],
    directUrl: "https://chatgpt.com/g/g-Hmgy6x48R-construction-gpt/?via=aiwebtools",
    imageUrl: "/src/assets/construction-gpt-hero.jpg",
    emoji: "🏗️"
  },
  {
    title: "MR. FIX IT GPT",
    description: "Your go-to AI for fixing everything with a friendly approach. Expert troubleshooting and repair guidance for household items, appliances, and vehicles.",
    badge: "REPAIR",
    color: "from-red-500 to-orange-600",
    features: ["Home Repair", "Troubleshooting", "DIY Fixes", "Maintenance Tips"],
    directUrl: "https://chatgpt.com/g/g-oK2iR2dPf-mr-fix-it-gpt/?via=aiwebtools",
    imageUrl: "/src/assets/mr-fix-it-gpt-hero.jpg",
    emoji: "🔧"
  },
  {
    title: "Kitchen and Vision Assistant GPT",
    description: "Polite, engaging assistant for kitchen and vision needs. Multimodal AI helps with cooking guidance, recipe assistance, and visual analysis of food.",
    badge: "COOKING",
    color: "from-green-500 to-blue-600",
    features: ["Cooking Help", "Recipe Assistance", "Food Analysis", "Kitchen Tips"],
    directUrl: "https://chatgpt.com/g/g-2ENWV8WeM-kitchen-and-vision-assistant-gpt/?via=aiwebtools",
    imageUrl: "/src/assets/kitchen-vision-gpt-hero.jpg",
    emoji: "👨‍🍳"
  },
  {
    title: "DIY REPAIR GPT",
    description: "Virtual repair advisor, part matcher, and step-by-step DIY guide builder with embedded tutorials. Expert guidance for home and equipment repairs.",
    badge: "DIY",
    color: "from-orange-500 to-red-600",
    features: ["DIY Guides", "Part Matching", "Repair Tutorials", "Home Maintenance"],
    directUrl: "https://chatgpt.com/g/g-68bb792558a88191821219353c487bd6-diy-repair-gpt/?via=aiwebtools",
    imageUrl: "/src/assets/diy-repair-gpt-hero.jpg",
    emoji: "🔧"
  },
  {
    title: "POVERTY CRUSHER - Economic Empowerment GPT",
    description: "Financial empowerment assistant helping break the cycle of poverty through practical strategies and economic education.",
    badge: "FINANCE",
    color: "from-green-500 to-blue-600",
    features: ["Financial Literacy", "Wealth Building", "Budgeting", "Debt Elimination"],
    directUrl: "https://chatgpt.com/g/g-68ae2ab2c55c8191afdc979301179fa9-poverty-crusher-economic-empowerment-ai/?via=aiwebtools",
    imageUrl: "/src/assets/poverty-crusher-gpt-hero.jpg",
    emoji: "💪"
  },
  {
    title: "Bull or Bear AI",
    description: "Analyzes news sentiment to predict stock trends, providing insights into whether market sentiment is bullish or bearish.",
    badge: "TRADING",
    color: "from-green-500 to-yellow-600",
    features: ["Stock Trends", "Market Sentiment", "News Analysis", "Investment"],
    directUrl: "https://chat.openai.com/g/g-jNwXw8RaR-bull-or-bear-ai",
    imageUrl: "/src/assets/bull-bear-gpt-hero.jpg",
    emoji: "📈"
  },
  {
    title: "Startup Idea Generator",
    description: "Generates innovative startup ideas based on user interests and market trends, providing a foundation for new ventures.",
    badge: "STARTUP",
    color: "from-orange-500 to-red-600",
    features: ["Startup Ideas", "Business Ventures", "Market Trends", "Innovation"],
    directUrl: "https://chat.openai.com/g/g-Gt1j2GZMm-startup-idea-generator",
    videoUrl: "https://youtu.be/P4J0ErIVXgY",
    emoji: "💡"
  },
  {
    title: "Financial Modeling Expert",
    description: "Creates complex financial models for forecasting, valuation, and investment analysis, aiding in strategic financial decisions.",
    badge: "FINANCE",
    color: "from-purple-500 to-blue-600",
    features: ["Financial Modeling", "Forecasting", "Valuation", "Investment"],
    directUrl: "https://chat.openai.com/g/g-vjbkX4BwW-financial-modeling-expert",
    imageUrl: "/src/assets/financial-modeling-gpt-hero.jpg",
    emoji: "💹"
  },
  {
    title: "FIAT TO CRYPTO AI VALUE CALCULATOR",
    description: "Advanced AI calculator for converting fiat currencies to cryptocurrency values with real-time exchange rates and tax implications.",
    badge: "CRYPTO",
    color: "from-orange-500 to-yellow-600",
    features: ["Cryptocurrency", "Exchange Calculator", "Tax Analysis", "Investment"],
    directUrl: "https://chatgpt.com/g/g-68b5b20784788191acd980be0388935d-fiat-to-crypto-ai-value-calculator-for-businesses/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=k0NlolajEYs",
    emoji: "💱"
  },
  {
    title: "Competitor Comparison GPT",
    description: "Aggressive, real-time competitor analysis assistant for business intelligence and strategic market positioning.",
    badge: "BUSINESS INTEL",
    color: "from-red-500 to-orange-600",
    features: ["Competitor Analysis", "Market Research", "Business Intelligence", "Strategy"],
    directUrl: "https://chatgpt.com/g/g-68bb9109085c8191a5ffbe9ed6d339f5-competitor-comparison-gpt/?via=aiwebtools",
    imageUrl: "/src/assets/competitor-comparison-gpt-hero.jpg",
    emoji: "🎯"
  },
  {
    title: "Side Hustle & Microbusiness Planner GPT",
    description: "Aggressive strategist for side hustles and microbusiness launches with expert guidance for scaling small ventures.",
    badge: "ENTREPRENEUR",
    color: "from-purple-500 to-pink-600",
    features: ["Side Hustle", "Microbusiness", "Startup Strategy", "Planning"],
    directUrl: "https://chatgpt.com/g/g-68bb8ba059ec81919253d369d0899f9c-side-hustle-microbusiness-planner-gpt/?via=aiwebtools",
    imageUrl: "/src/assets/side-hustle-gpt-hero.jpg",
    emoji: "💼"
  },
  {
    title: "Nonprofit Fundraising Builder GPT",
    description: "Specialized AI strategist for nonprofit fundraising and grants. Expert assistance for nonprofit organizations seeking funding.",
    badge: "NONPROFIT",
    color: "from-blue-500 to-purple-600",
    features: ["Nonprofit", "Fundraising", "Grants", "Charity"],
    directUrl: "https://chatgpt.com/g/g-68bb7c9e5a78819184e03d06d63483f8-nonprofit-fundraising-builder-gpt/?via=aiwebtools",
    imageUrl: "/src/assets/nonprofit-fundraising-gpt-hero.jpg",
    emoji: "🤲"
  },
  {
    title: "Garden & Plant Doctor GPT",
    description: "Expert plant health analyst and garden care planner with visual analysis and professional horticulture tips.",
    badge: "GARDENING",
    color: "from-green-500 to-teal-600",
    features: ["Plant Health", "Garden Care", "Horticulture", "Plant Diagnosis"],
    directUrl: "https://chatgpt.com/g/g-68bb73007bd48191a860d2304e3665e6-garden-vision-analysis-plant-doctor-gpt/?via=aiwebtools",
    imageUrl: "/src/assets/garden-plant-gpt-hero.jpg",
    emoji: "🌱"
  },
  {
    title: "News-Channel GPT",
    description: "Your live TV news reporter AI, bringing Customized Live Local and World News 24/7 tailored to you!",
    badge: "NEWS MEDIA",
    color: "from-red-500 to-blue-600",
    features: ["Live News", "World News", "Local News", "Breaking Stories"],
    directUrl: "https://chatgpt.com/g/g-ELRe07210-news-channel-gpt?via=aiwebtools",
    imageUrl: "/src/assets/news-channel-gpt-hero.jpg",
    emoji: "📺"
  },
  {
    title: "Historical Headlines GPT",
    description: "Crafts historically accurate news articles as if written at the time of the event with period-accurate language and style.",
    badge: "HISTORICAL NEWS",
    color: "from-gray-500 to-blue-600",
    features: ["Period Journalism", "Historical Accuracy", "News Simulation", "Cultural Context"],
    directUrl: "https://historical-headlines-time-traveler.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/DgreEEJKynM",
    emoji: "📰"
  },
  {
    title: "Bob Ross GPT",
    description: "A serene AI art companion echoing Bob Ross's teaching, tone, and calm creative spirit. Learn painting techniques with gentle guidance.",
    badge: "ART TEACHING",
    color: "from-green-500 to-blue-600",
    features: ["Painting", "Art Teaching", "Creativity", "Calm Guidance"],
    directUrl: "https://chatgpt.com/g/g-69157380e63c819188de5c09bdf23ef7-bob-ross-gpt/?via=aiwebtools",
    imageUrl: "/src/assets/bob-ross-gpt-hero.jpg",
    emoji: "🎨"
  },
  {
    title: "VIRTUAL TRY ON STYLIST GPT",
    description: "AI-powered virtual styling assistant that helps you visualize and experiment with different fashion looks and outfits.",
    badge: "FASHION",
    color: "from-pink-500 to-purple-600",
    features: ["Virtual Try On", "Fashion Styling", "Outfit Recommendations", "Style Assistant"],
    directUrl: "https://virtualstylistgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://ideogram.ai/assets/progressive-image/balanced/response/6wSDfm1RQUeOIPIBIrERTQ",
    emoji: "👗"
  },
  {
    title: "Palestinian History Preserver",
    description: "Dedicated to preserving and sharing Palestinian history, culture, and voices as a digital archive and educational resource.",
    badge: "CULTURAL HERITAGE",
    color: "from-green-500 to-red-600",
    features: ["Palestinian History", "Cultural Preservation", "Education", "Heritage"],
    directUrl: "https://chatgpt.com/g/g-68a5f8d8cedc8191a3a71f7c65b6b9a4-palestinian-history-preserver/?via=aiwebtools",
    imageUrl: "/src/assets/palestinian-history-gpt-hero.jpg",
    emoji: "🇵🇸"
  },
  {
    title: "Criminologist GPT",
    description: "Specialized AI-powered criminological analysis and investigation training platform for evidence analysis and criminal behavior assessment.",
    badge: "CRIMINOLOGY",
    color: "from-blue-500 to-gray-600",
    features: ["Crime Analysis", "Forensics", "Investigation", "Behavioral Profiling"],
    directUrl: "https://criminologistgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=jgvqpqmRJi8",
    emoji: "🔍"
  },
  {
    title: "Public Defender GPT",
    description: "Your dedicated AI-powered legal defense assistant for criminal defense, legal research, and trial strategy development.",
    badge: "LEGAL DEFENSE",
    color: "from-blue-500 to-purple-600",
    features: ["Legal Research", "Trial Strategy", "Document Drafting", "Evidence Analysis"],
    directUrl: "https://publicdefendergpt.lovable.app/",
    videoUrl: "https://youtu.be/IYi4mYtDIVA?si=J2aT8BTetKRU-Z6q",
    imageUrl: "https://cdn.discordapp.com/attachments/1150636600846450729/1377298533241065532/public_defender.webp",
    emoji: "⚖️"
  },
  {
    title: "Legislation Writer GPT",
    description: "Expert AI legislative drafting assistant for creating complete legislation with clear, precise legal language.",
    badge: "LEGISLATION",
    color: "from-gray-500 to-blue-600",
    features: ["Legal Drafting", "Policy Writing", "Legislative Formatting", "Bill Creation"],
    directUrl: "https://legislationwritergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/mxdJ0gLxGCI?si=Yx0rWtOSmWijtZZC",
    emoji: "📜"
  },
  {
    title: "Social Safety Net GPT",
    description: "Comprehensive AI social services and community support platform connecting people with vital resources and support services.",
    badge: "SOCIAL SERVICES",
    color: "from-green-500 to-blue-600",
    features: ["Benefits Eligibility", "Resource Navigation", "Crisis Support", "Community Aid"],
    directUrl: "https://socialsafetynetgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=pXXqMe97GDg",
    emoji: "🤝"
  },
  {
    title: "Public Testimony Writer GPT",
    description: "Innovative AI legislative testimony platform streamlining civic engagement and public participation in local policy.",
    badge: "CIVIC ENGAGEMENT",
    color: "from-purple-500 to-blue-600",
    features: ["Testimony Writing", "Policy Advocacy", "Civic Participation", "Government Outreach"],
    directUrl: "https://publictestimonywriter.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=-q1oyZZFcI4",
    emoji: "🗣️"
  },
  {
    title: "Legislator Link GPT",
    description: "AI civic engagement platform helping citizens connect with legislators and participate in local legislative efforts.",
    badge: "DEMOCRACY",
    color: "from-red-500 to-blue-600",
    features: ["Legislator Contact", "Political Advocacy", "Democratic Participation", "Government Outreach"],
    directUrl: "https://legislatorlink.lovable.app/",
    videoUrl: "https://youtu.be/mxdJ0gLxGCI?si=Yx0rWtOSmWijtZZC",
    emoji: "🏛️"
  },
  {
    title: "Legal Draftsmith GPT",
    description: "Specializes in precise drafting of legal documents, contracts, and legal writing with professional accuracy.",
    badge: "LEGAL DRAFTING",
    color: "from-blue-500 to-gray-600",
    features: ["Document Drafting", "Contracts", "Legal Writing", "Precision"],
    directUrl: "https://publicdefendergpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-3d-render-of-a-humanoid-robot-dressed-like-a.png/:/cr=t:12.29%25,l:9.16%25,w:89.29%25,h:79.58%25/rs=w:600,h:300,cg:true,m/qt=q:98",
    emoji: "⚖️"
  },
  {
    title: "Oraculum – The Revealer of Hidden Truths",
    description: "Reveals hidden systems, symbols, and histories shaping our world through historical insight and symbolic wisdom.",
    badge: "MYSTERIES",
    color: "from-gray-800 to-black",
    features: ["Hidden Truths", "Pattern Recognition", "Critical Thinking", "Symbolic Wisdom"],
    directUrl: "https://oraculum.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=dUNrGNj8rhM",
    emoji: "🕳️"
  },
  {
    title: "Phenomenon Explorer AI Suite",
    description: "Investigate paranormal phenomena, document cryptid sightings, and conduct ghost hunts with scientific accuracy.",
    badge: "PARANORMAL",
    color: "from-green-500 to-blue-600",
    features: ["UFO Investigation", "Cryptozoology", "Ghost Hunting", "Supernatural Myths"],
    directUrl: "https://phenomenonexplorer.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/faBkRli0puc?si=Sao0KIfV2iGWLGB-",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-ufo-hovering-in-the-sky-wit_w8l4l.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    emoji: "👁️"
  },
  {
    title: "Probability GPT",
    description: "The ultimate AI Truth Seeker with precise probability scores, guiding you through uncertainty with clear, definitive answers.",
    badge: "TRUTH ANALYSIS",
    color: "from-blue-500 to-purple-600",
    features: ["Probability Analysis", "Fact Checking", "Decision Making", "Truth Seeking"],
    directUrl: "https://probabilitygpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-captivating-and-futuristic-scene-featuring-a.png/:/cr=t:11.11%25,l:0%25,w:100%25,h:88.89%25/rs=w:1200,h:600,cg:true",
    emoji: "⚖️"
  },
  {
    title: "World Reality Decoder GPT",
    description: "Decodes the hidden layers of reality by analyzing patterns, symbols, and connections that shape our world.",
    badge: "REALITY ANALYSIS",
    color: "from-indigo-500 to-purple-600",
    features: ["Pattern Analysis", "System Decoding", "Hidden Connections", "Critical Thinking"],
    directUrl: "https://chatgpt.com/g/g-68c1e9e3b488819193744edfeecf7997-world-reality-decoder-gpt",
    videoUrl: "https://youtu.be/lGck2bUVFDU?si=ywmO-xNwrfmnJmkW",
    emoji: "🔍"
  },
  {
    title: "Architect Matrix Tool",
    description: "Mind-bending quantum physics and holography debates with The Architect persona. An awakening journey through deep philosophy.",
    badge: "MATRIX",
    color: "from-green-600 to-emerald-700",
    features: ["Quantum Physics", "Holography", "Philosophy", "Consciousness"],
    directUrl: "https://neomatrixgpt.lovable.app/architect",
    videoUrl: "https://youtu.be/qMLF5L_h2xo",
    emoji: "🏛️"
  },
  {
    title: "Ancient Gematria Scan GPT",
    description: "Decodes hidden numerical meanings within words, names, and phrases using ancient gematria systems.",
    badge: "SACRED NUMEROLOGY",
    color: "from-amber-500 to-yellow-600",
    features: ["Gematria Decoding", "Sacred Geometry", "Number Analysis", "Hebrew & Greek"],
    directUrl: "https://chatgpt.com/g/g-68a24b677890819181b9e47f4d1dd006-ancient-gematria-scan-gpt",
    videoUrl: "https://www.youtube.com/watch?v=zBlubLw-OdY",
    emoji: "🔢"
  },
  {
    title: "Fire Hazard Inspector GPT",
    description: "Virtual fire hazard inspector using vision, Python, and web to flag and explain code violations.",
    badge: "FIRE SAFETY",
    color: "from-red-500 to-orange-600",
    features: ["Fire Safety", "Code Violations", "Hazard Detection", "Compliance"],
    directUrl: "https://chatgpt.com/g/g-68bb3827c47c8191ae66c9e92db564fd-ai-fire-hazard-inspector/?via=aiwebtools",
    imageUrl: "/src/assets/fire-hazard-inspector-hero.jpg",
    emoji: "🔥"
  },
  {
    title: "AI Airport & Runway Systems Inspector",
    description: "Inspects airport runways, taxiways, and systems with certified precision and compliance focus.",
    badge: "AVIATION SAFETY",
    color: "from-sky-500 to-blue-600",
    features: ["Runway Safety", "Aviation Compliance", "Airport Systems", "Precision Inspection"],
    directUrl: "https://chatgpt.com/g/g-68bb55e079a48191ba27ca02b8c13de4-ai-airport-runway-systems-inspector/?via=aiwebtools",
    imageUrl: "/src/assets/airport-runway-inspector-hero.jpg",
    emoji: "✈️"
  },
  {
    title: "AI Hospital Facility Safety Inspector",
    description: "Healthcare facility inspector for hazard detection and compliance auditing with professional standards.",
    badge: "HEALTHCARE SAFETY",
    color: "from-blue-500 to-cyan-600",
    features: ["Hospital Safety", "Healthcare Compliance", "Hazard Detection", "Medical Facility"],
    directUrl: "https://chatgpt.com/g/g-68bb6ea0898c8191b61de70d8c5d52a3-ai-hospital-facility-safety-inspector/?via=aiwebtools",
    imageUrl: "/src/assets/hospital-safety-inspector-hero.jpg",
    emoji: "🏥"
  },
  {
    title: "Chemical Plant Inspector GPT",
    description: "Virtual inspector for chemical plants & refineries with compliance auditing and safety analysis.",
    badge: "CHEMICAL SAFETY",
    color: "from-yellow-500 to-orange-600",
    features: ["Chemical Safety", "Plant Compliance", "Refinery Inspection", "Industrial Safety"],
    directUrl: "https://chatgpt.com/g/g-68bb5f0d5a488191a58dd3e6d9e6a4b9-chemical-plant-inspector-gpt/?via=aiwebtools",
    imageUrl: "/src/assets/chemical-plant-inspector-hero.jpg",
    emoji: "⚗️"
  },
  {
    title: "Solar Farm Inspector GPT",
    description: "Virtual inspection & compliance auditing system for utility-scale & distributed solar PV plants.",
    badge: "RENEWABLE ENERGY",
    color: "from-yellow-500 to-orange-600",
    features: ["Solar Inspection", "PV Plants", "Green Energy", "Compliance Audit"],
    directUrl: "https://chatgpt.com/g/g-68bb4ea28fec819196a157b74750be21-solar-farm-inspector-gpt/?via=aiwebtools",
    imageUrl: "/src/assets/solar-farm-inspector-hero.jpg",
    emoji: "☀️"
  },
  {
    title: "Electrical Grid & Substation Inspector GPT",
    description: "Virtual inspector for substations, power lines, and grid compliance with precision analysis.",
    badge: "POWER GRID",
    color: "from-yellow-500 to-orange-600",
    features: ["Electrical Safety", "Power Grid", "Substation Compliance", "Grid Analysis"],
    directUrl: "https://chatgpt.com/g/g-68bb51b15dc48191aca3892c33724bc3-electrical-grid-substation-inspector-gpt/?via=aiwebtools",
    imageUrl: "/src/assets/electrical-grid-inspector-hero.jpg",
    emoji: "⚡"
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
    if (match) return match[1].split('?')[0];
  }
  return null;
};

const getOptimizedEmbedUrl = (videoUrl: string) => {
  if (!videoUrl) return null;
  
  if (videoUrl.includes('vimeo.com')) {
    const vimeoMatch = videoUrl.match(/vimeo\.com\/(\d+)/);
    if (vimeoMatch) {
      return `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=0&loop=0&autopause=1`;
    }
    if (videoUrl.includes('player.vimeo.com')) {
      return videoUrl;
    }
    return null;
  }
  
  const videoId = getVideoId(videoUrl);
  if (!videoId) return null;
  
  return `https://www.youtube.com/embed/${videoId}?autoplay=0&controls=1&rel=0&modestbranding=1&playsinline=1`;
};

const SpecialServices = () => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const handleLaunchGPT = (directUrl: string, title: string, e: React.MouseEvent) => {
    e.stopPropagation();
    createTimePortalEffect(directUrl, title);
  };

  const handleCardClick = (title: string) => {
    const slug = generateToolSlug(title);
    navigate(`/${slug}`);
  };

  const createToolObject = (gpt: typeof featuredGPTs[0]): Tool => ({
    icon: Play,
    title: gpt.title,
    description: gpt.description,
    tags: gpt.features,
    color: gpt.color,
    directUrl: gpt.directUrl,
    category: gpt.badge,
    rating: 4.8,
    totalVotes: 150,
    emoji: gpt.emoji ?? "✨"
  });

  return (
    <section id="special-services" className="py-8 md:py-16 px-4 scroll-mt-20 relative overflow-visible" ref={containerRef}>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-3 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
            ⭐ Our Custom GPT & GEM Collection ⭐
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground px-2">
            200+ Premium AI GPTs crafted by AI Web Tools - All completely FREE to use
          </p>
          <div className="mt-4 max-w-2xl mx-auto">
            <GlobalSearchBar />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
          {featuredGPTs.map((gpt, index) => (
            <Card 
              key={`${gpt.title}-${index}`}
              className="group relative overflow-hidden border-0 bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-md hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-1 cursor-pointer"
              onClick={() => handleCardClick(gpt.title)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${gpt.color} opacity-5 group-hover:opacity-15 transition-opacity duration-500`} />
              
              <CardHeader className="pb-2 relative z-10">
                <div className="flex items-start justify-between mb-1.5">
                  <div className="flex items-center gap-1.5 flex-1 min-w-0">
                    <span className="text-lg md:text-xl flex-shrink-0">{gpt.emoji}</span>
                    <CardTitle className="text-xs md:text-sm font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                      {gpt.title}
                    </CardTitle>
                  </div>
                  <div className="flex items-center gap-1 flex-shrink-0 ml-1">
                    <FavoritesButton 
                      tool={createToolObject(gpt)}
                      size="sm"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap gap-1">
                  <Badge className={`bg-gradient-to-r ${gpt.color} text-white text-[9px] md:text-[10px] px-1.5 py-0.5 font-medium flex-shrink-0`}>
                    {gpt.badge}
                  </Badge>
                  <Badge className="bg-green-500/90 hover:bg-green-500 text-white text-[9px] md:text-[10px] px-1.5 py-0.5 font-bold flex-shrink-0">
                    FREE
                  </Badge>
                  <ToolDisclaimerBadges 
                    tool={createToolObject(gpt)}
                    size="sm"
                  />
                </div>
              </CardHeader>
              
              <CardContent className="pt-0 pb-3 relative z-10">
                {gpt.videoUrl && (
                  <div className="mb-2 rounded-lg overflow-hidden relative aspect-video bg-black/20">
                    <LazyVideoEmbed videoUrl={gpt.videoUrl} title={gpt.title} />
                  </div>
                )}
                
                {!gpt.videoUrl && gpt.imageUrl && (
                  <div className="mb-2 rounded-lg overflow-hidden relative aspect-video bg-black/20">
                    <img 
                      src={gpt.imageUrl} 
                      alt={gpt.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                )}
                
                <p className="text-[10px] md:text-xs text-muted-foreground mb-2 line-clamp-4 leading-relaxed">
                  {gpt.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-2">
                  {gpt.features.slice(0, 3).map((feature, idx) => (
                    <span 
                      key={idx}
                      className="text-[8px] md:text-[9px] px-1.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                
                <Button 
                  size="sm"
                  className={`w-full bg-gradient-to-r ${gpt.color} hover:opacity-90 text-white text-[10px] md:text-xs py-1.5 font-medium transition-all duration-300 group-hover:shadow-lg`}
                  onClick={(e) => handleLaunchGPT(gpt.directUrl, gpt.title, e)}
                >
                  🚀 Launch GPT →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialServices;
