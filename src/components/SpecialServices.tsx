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
// This displays ONLY our AI Web Tools GPTs (our creations) - especially those with videos/images
// bolt.new and gemini remain searchable in database but not featured here (not our designs)
// =============================================================================

const featuredGPTs = [
  {
    title: "Meta.ai Video Prompt Generator GPT",
    description: "Generate expertly crafted text prompts for Meta.ai video generation. Creates detailed, optimized prompts and storylines specifically designed for Meta.ai's video capabilities.",
    badge: "VIDEO AI",
    color: "from-blue-500 to-purple-600",
    features: ["Meta.ai Prompts", "Video Storylines", "Quick Copy-Paste", "Productivity"],
    directUrl: "https://chatgpt.com/g/g-691b5852be7c8191beda5d0429f727bd-meta-ai-video-prompt-generator",
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
    title: "Manicheism GPT",
    description: "The resurrected voice of prophet Mani—revealing the lost Light of a hunted faith. The prophet hunted by Rome lives again. Explore the profound dualistic teachings of Manichaeism and the cosmic battle between Light and Darkness.",
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
    videoUrl: "https://www.youtube.com/watch?v=zBlubLw-OdY",
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
    videoUrl: "https://youtu.be/nBd9Uk62UiI",
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
    videoUrl: "https://www.youtube.com/watch?v=zGGdCzxFNS4",
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
    videoUrl: "https://youtu.be/VkD_dX8kPy0",
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
    videoUrl: "https://youtu.be/3Ll7KPhTt3M",
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
    videoUrl: "https://youtu.be/kDu2SSP9Glw?si=RruKDFSlbsskezHw",
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
    videoUrl: "https://www.youtube.com/watch?v=or3JtZsq6Bc",
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
    features: ["Grant Writing Help", "Funding Proposal Help", "Nonprofit Support", "Research Grant Ideas"],
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
    features: ["Claims Information Help", "Policy Information", "Documentation Assistance", "Dispute Information"],
    directUrl: "https://insuranceclaimsgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=WNPywJWOUzU",
    imageUrl: "https://cdn.discordapp.com/attachments/1150636600846450729/1377298535288012901/insurance.webp",
    emoji: "🛡️"
  },
  {
    title: "Interpretis 🕰️",
    description: "Interpretis 🕰️ is a powerful tool that explores the deeper meanings behind language, history, and culture. By combining the study of word origins, symbols, and societal influences, it reveals how ideas have evolved and shaped the way we think.",
    badge: "ETYMOLOGY",
    color: "from-amber-500 to-brown-600",
    features: ["Etymology", "Linguistics", "Cultural Analysis", "Word Origins"],
    directUrl: "https://interpretis.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-historical-style-advertisement-for-the_JUvQJ.png/:/cr=t:0%25,l:18.29%25,w:56.1%25,h:100%25/rs=w:1200,h:1200,cg:true",
    emoji: "🕰️"
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
    videoUrl: "https://youtu.be/pr8-IgbL46I",
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
    features: ["Relationship Chat Support", "Communication Ideas", "Relationship Insights", "Conversation Support"],
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
    videoUrl: "https://youtu.be/8aPpUPiDBJ4?si=4ERg7NITSKCePyHF",
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
    videoUrl: "https://youtu.be/M1PQHKrzKd8",
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
    features: ["Emotional Support Chat", "CBT Information", "Coping Ideas", "Mental Well-being Insights"],
    directUrl: "https://mentalwellnessgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=_e6DtLUv-2Q",
    imageUrl: "https://media.discordapp.net/attachments/1150636600846450729/1377362789097803786/image.png?ex=6838b08f&is=68375f0f&hm=f63e1ae446523dd9eff4aa0f95166aa8a5e6119c506b44ab1656322ea4ca47b7&=&format=webp&quality=lossless&width=2646&height=1392",
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
    features: ["Legal Document Help", "Document Drafting Help", "Contract Writing Help", "Legal Writing Assistance"],
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
    videoUrl: "https://youtu.be/P4J0ErIVXgY",
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
    videoUrl: "https://www.youtube.com/watch?v=89u14Jld7uA",
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
    videoUrl: "https://youtu.be/Cvg3o6uJ1o4",
    emoji: "🧬"
  },
  {
    title: "Pharmaceutical Assistant GPT",
    description: "Expert AI Pharmaceutical Assistant supporting pharmacy professionals and patients with medication management, drug information, interaction checking, and scheduling for safe healthcare practices.",
    badge: "PHARMACY",
    color: "from-green-500 to-blue-600",
    features: ["Medication Information", "Drug Information", "Interaction Information", "Healthcare Information"],
    directUrl: "https://rxai.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-professional-looking-pharmaceutical-assistan.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    emoji: "💊"
  },
  {
    title: "Historical Apothecary GPT",
    description: "Immersive AI assistant embodying a traditional apothecary, offering detailed herbal remedies and historical medicinal wisdom with step-by-step formulations blending ancient knowledge with modern safety.",
    badge: "HERBAL MEDICINE",
    color: "from-green-600 to-amber-600",
    features: ["Herbal Remedies", "Historical Medicine", "Formulations", "Botanical Lore"],
    directUrl: "https://chatgpt.com/g/g-67d839556b848191a7572b1f3e911499-historical-apothecary-gpt/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-digital-advertisement-for-the-ai-tool-_kLdMI.png/:/cr=t:0%25,l:7.93%25,w:84.15%25,h:100%25/rs=w:1200,cg:true",
    emoji: "⚗️"
  },
  {
    title: "Universal Basic Income Strategist GPT",
    description: "Design sustainable, future-ready Universal Basic Income models tailored to your region with economic data analysis, automation trends, and societal needs for a fair and abundant future.",
    badge: "ECONOMICS",
    color: "from-green-500 to-blue-600",
    features: ["UBI Models", "Economic Analysis", "Future Planning", "Policy Design"],
    directUrl: "https://ubigpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/an-advertisement-for-the-ai-tool-ubi-str_22t4n.png/:/rs=w:600,cg:true,m/qt=q:30",
    emoji: "💵"
  },
  {
    title: "Global Peace Restoration Strategist GPT",
    description: "AI-powered diplomatic tool engineered to resolve complex global conflicts through structured negotiation, historical analysis, and real-time intelligence for lasting peace.",
    badge: "DIPLOMACY",
    color: "from-blue-600 to-green-600",
    features: ["Conflict Resolution", "Diplomatic Strategy", "Peace Building", "Global Analysis"],
    directUrl: "https://worldpeacegpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-earth-with-a-dark-blue-atmosp_Uq9U_.png/:/rs=w:600,h:300,cg:true,m/cr=w:600,h:300/qt=q:30",
    emoji: "🕊️"
  },
  {
    title: "Sora Prompt Assistant",
    description: "Unleash your creativity with the SORA Prompt Assistant, your ultimate assistant for crafting epic video prompts and bringing cinematic ideas to life!",
    badge: "VIDEO AI",
    color: "from-purple-600 to-pink-600",
    features: ["Video Prompts", "Cinematic Ideas", "AI Video Generation", "Creative Assistant"],
    directUrl: "https://texttovideoprompter.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-futuristic-city-with-tall-buildings-th_JdXy-.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    emoji: "🎬"
  },
  {
    title: "Snoop Image AI",
    description: "Experimental AI Image Generation Detector analyzing images to assess whether they are likely real or AI-generated using metadata analysis, color screening, and pixel measurements.",
    badge: "IMAGE ANALYSIS",
    color: "from-blue-500 to-purple-600",
    features: ["AI Detection", "Image Analysis", "Authenticity Check", "Metadata Screening"],
    directUrl: "https://snoopimageai.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/an-advertisement-for-snoop-image-ai-presented-.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:600,h:300,cg:true/qt=q:98",
    emoji: "🔍"
  },
  {
    title: "Article and Blog Rewriter GPT",
    description: "Rewrite epic SEO optimized articles and blogs! Simply copy and paste the blog or article you wish to rewrite for professional content transformation.",
    badge: "CONTENT WRITING",
    color: "from-blue-500 to-cyan-600",
    features: ["Article Rewriting", "SEO Optimization", "Content Enhancement", "Blog Writing"],
    directUrl: "https://rewritergpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://cdn.discordapp.com/attachments/1150636600846450729/1377297452243226635/article.webp",
    videoUrl: "https://youtu.be/5n1RHKoQ-Ds",
    emoji: "✍️"
  },
  {
    title: "Video Second-by-Second Analysis GPT",
    description: "Break down footage with incredible precision, analyzing every second and extracting key visual frames for detailed insight with step-by-step review of each moment.",
    badge: "VIDEO ANALYSIS",
    color: "from-purple-600 to-blue-600",
    features: ["Frame Analysis", "Video Breakdown", "Visual Extraction", "Detailed Review"],
    directUrl: "https://videoanalysisgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-professional-video-editing-interface-with-timeline.png",
    videoUrl: "https://www.youtube.com/watch?v=SmBXfGqXfco",
    emoji: "🎥"
  },
  {
    title: "Artwork & Vintage Appraisal GPT",
    description: "Expert AI for fast, accurate valuations of art, antiques, and collectibles with detailed appraisals, historical insights, and real-time market data.",
    badge: "APPRAISAL",
    color: "from-amber-600 to-brown-600",
    features: ["Art Valuation", "Antique Appraisal", "Historical Insights", "Market Analysis"],
    directUrl: "https://artandvintagegpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://ideogram.ai/assets/image/lossless/response/Gyn0RfDSR_SHRDWC7neQaw",
    videoUrl: "https://www.youtube.com/watch?v=azHoiefssJw",
    emoji: "🖼️"
  },
  {
    title: "Sport Card Appraisal GPT",
    description: "Expert AI sports trading card appraiser providing accurate market values, grading insights, and investment analysis for vintage baseball cards, modern basketball rookies, and rare football memorabilia.",
    badge: "SPORTS CARDS",
    color: "from-green-500 to-emerald-600",
    features: ["Card Valuation", "Grading Insights", "Market Analysis", "Investment Tips"],
    directUrl: "https://chatgpt.com/g/g-wxZQTXVx9-sport-card-appraisal?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=lPvOvWWHErM",
    emoji: "🏆"
  },
  {
    title: "Uncovering Hidden Historical Patterns GPT",
    description: "Advanced AI tool revealing suppressed truths and hidden power structures by analyzing symbolism, financial systems, and historical contradictions connecting ancient empires to modern institutions.",
    badge: "RESEARCH",
    color: "from-purple-600 to-red-600",
    features: ["Pattern Recognition", "Historical Analysis", "Truth Seeking", "Alternative History"],
    directUrl: "https://historicalpatternsgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-an-advertisement-with-the-eye_C64dU.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true/qt=q:30",
    emoji: "🔎"
  },
  {
    title: "Sketch Artist GPT",
    description: "AI-powered sketch art assistant turning images or text descriptions into clean, high-resolution sketches using advanced Python and DALLE technology.",
    badge: "ART CREATION",
    color: "from-gray-600 to-purple-600",
    features: ["Sketch Generation", "Image to Sketch", "Text to Sketch", "High-Resolution Art"],
    directUrl: "https://sketchartistgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/an-advertisement-for-an-ai-tool-called-s_CPSIx.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true/qt=q:98",
    emoji: "✏️"
  },
  {
    title: "AI Tools Finder GPT",
    description: "Your own personal expert in the world of AI Tools and knowledge. Locate the best AI tools for your projects and be presented with step-by-step guides on any AI tool that exists.",
    badge: "AI DISCOVERY",
    color: "from-cyan-500 to-blue-600",
    features: ["Tool Discovery", "AI Tool Guides", "Step-by-Step", "Tool Recommendations"],
    directUrl: "https://aitoolfinder.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/p3czNalrf8c",
    imageUrl: "https://cdn.discordapp.com/attachments/1150636600846450729/1377297452717310022/ai_tools.webp",
    emoji: "🔧"
  },
  {
    title: "IF AI RULED THE WORLD - AI SIMULATION GPT",
    description: "Simulation to evaluate the actions and thought process of an AI who thinks it is the Omni Controller of the world. For research purposes only.",
    badge: "SIMULATION",
    color: "from-purple-600 to-red-600",
    features: ["AI Simulation", "Future Scenarios", "Decision Analysis", "Research Tool"],
    directUrl: "https://ifairuledtheworldgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=93M9ZyhpmFM",
    emoji: "🌍"
  },
  {
    title: "Mary Magdalene GPT",
    description: "Connect with Mary Magdalene to explore profound depths of Gnostic divine secrets, trained exclusively on unaltered Christian texts like the Gospel of Mary and Gospel of Thomas.",
    badge: "SPIRITUAL",
    color: "from-purple-500 to-pink-600",
    features: ["Gnostic Wisdom", "Ancient Texts", "Spiritual Insights", "Historical Christianity"],
    directUrl: "https://marymagdalenegpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=7qxEnBR2BwQ",
    emoji: "🕊️"
  },
  {
    title: "MiddleJourney Midjourney Prompting Assistant",
    description: "Ultimate AI expert for Midjourney, helping optimize prompts, answer questions, and craft new prompts to enhance your Midjourney experience with precision and efficiency.",
    badge: "AI ART",
    color: "from-purple-600 to-pink-600",
    features: ["Prompt Optimization", "Midjourney Expert", "Creative Guidance", "Art Generation"],
    directUrl: "https://texttovideoprompter.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-stunning-midjourney-style-ai-art-showing-prompt.png",
    videoUrl: "https://www.youtube.com/watch?v=SmBXfGqXfco",
    emoji: "🎨"
  },
  {
    title: "Luma Dream Machine Prompt Assistant",
    description: "Text-to-video engine designed to bring your ideas to life. Our prompt assistant helps create epic prompts turning your envisioned films into reality.",
    badge: "VIDEO AI",
    color: "from-cyan-500 to-purple-600",
    features: ["Video Generation", "Prompt Creation", "Film Creation", "AI Cinematography"],
    directUrl: "https://texttovideoprompter.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-futuristic-neon-lit-advertisement-for-the-l.jpeg/:/cr=t:50%25,l:0%25,w:100%25,h:50%25/rs=w:1240,h:620,cg:true",
    emoji: "🎬"
  },
  {
    title: "Quiz Maker AI",
    description: "Ideal for adding quizzes and tests to your courses. Designed to work seamlessly with Course Maker GPT and College Degree GPT, easily integrating into courses.",
    badge: "EDUCATION",
    color: "from-blue-500 to-purple-600",
    features: ["Quiz Creation", "Test Generation", "Educational Assessment", "Course Integration"],
    directUrl: "https://chatgpt.com/g/g-cUahkn19i-quiz-maker-ai",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/an-eye-catching-advertisement-for-quiz-maker-.jpeg/:/cr=t:5.56%25,l:0%25,w:100%25,h:88.89%25/rs=w:1200,h:600,cg:true",
    emoji: "📝"
  },
  {
    title: "Predictive Credit Score Checker GPT",
    description: "AI tool for estimating creditworthiness based on specific addresses. Ideal for real estate, finance, and lending with quick, data-backed credit score estimates.",
    badge: "FINANCE",
    color: "from-green-500 to-blue-600",
    features: ["Credit Information", "Risk Insights", "Real Estate Info", "Financial Information"],
    directUrl: "https://predictivecreditscoregpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-screenshot-of-a-web-app-with-the-text-predic.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    emoji: "💳"
  },
  {
    title: "Genome GPT",
    description: "Cutting-edge AI tool assisting researchers, scientists, and enthusiasts in genetic analysis and discovery with comprehensive genomic data interpretation and insights.",
    badge: "GENETICS",
    color: "from-green-500 to-blue-600",
    features: ["Genetic Information", "DNA Research Help", "Genomic Data Insights", "Scientific Discovery Help"],
    directUrl: "https://genomegpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-conceptual-image-of-a-dna-double-helix-with-.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    emoji: "🧬"
  },
  {
    title: "Binary-Text-Image Converter GPT",
    description: "Unlock the power of binary with Binary-Text Image Converter GPT! Effortlessly convert text to binary and binary to text, communicating in the language of computers.",
    badge: "CODING TOOLS",
    color: "from-blue-500 to-purple-600",
    features: ["Binary Conversion", "Text Encoding", "Data Transformation", "Computer Language"],
    directUrl: "https://binarytoconvertergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/ihRLRFojReY",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-sophisticated-and-futuristic-advertisement-.jpeg/:/cr=t:11.11%25,l:0%25,w:100%25,h:88.89%25/rs=w:1200,h:600,cg:true",
    emoji: "💻"
  },
  {
    title: "Course Maker GPT",
    description: "Advanced course creation tool designed to work seamlessly with Quiz Maker GPT and other educational tools for comprehensive learning experiences.",
    badge: "EDUCATION",
    color: "from-blue-600 to-purple-600",
    features: ["Course Creation", "Educational Design", "Learning Paths", "Content Organization"],
    directUrl: "https://chat.openai.com/g/g-YDzdoqmP9-course-creator-gpt",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-modern-educational-platform-interface-showing.png",
    videoUrl: "https://youtu.be/pr8-IgbL46I",
    emoji: "📚"
  },
  {
    title: "Home-Schooling Assistant GPT",
    description: "All-encompassing AI-powered assistant empowering parents in their homeschooling journey with state-specific legal guidance and educational resources for successful learning.",
    badge: "EDUCATION",
    color: "from-green-500 to-blue-600",
    features: ["Homeschooling", "Legal Guidance", "Educational Resources", "Parent Support"],
    directUrl: "https://homeschoolgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-parent-teaching-their-ki-0096e43.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    emoji: "🏠"
  },
  {
    title: "Contract Review Bot",
    description: "Advanced AI assistant simplifying and streamlining contract review by breaking down complex legal language into clear, easy-to-understand terms, identifying risks and ensuring fairness.",
    badge: "LEGAL",
    color: "from-blue-500 to-purple-600",
    features: ["Contract Review Help", "Risk Information", "Legal Information", "Terms Analysis"],
    directUrl: "https://chatgpt.com/g/g-Y8u3YrS1p-contract-review-bot",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-futuristic-humanoid-robot-with-a-sleek-desig.png/:/cr=t:2.6%25,l:5.36%25,w:89.29%25,h:79.58%25/rs=w:1200,h:600,cg:true,m",
    emoji: "📄"
  },
  {
    title: "Firearms Safety Instructor GPT",
    description: "Your personal all-in-one AI firearms instructor for safety, legal guidance, and skills improvement with comprehensive firearms education.",
    badge: "SAFETY TRAINING",
    color: "from-orange-500 to-red-600",
    features: ["Firearms Safety Info", "Legal Information", "Training Information", "Skills Information"],
    directUrl: "https://firearmsafetyeducationgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-humanoid-shooting-a-gun-at-a-targ.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    emoji: "🎯"
  },
  {
    title: "MULTITASKER GPT",
    description: "Give me multiple unrelated tasks at once, and I will work to complete them all for you. Fire away with your multitasking needs!",
    badge: "PRODUCTIVITY",
    color: "from-cyan-500 to-purple-600",
    features: ["Multi-Tasking", "Task Management", "Efficiency", "Parallel Processing"],
    directUrl: "https://multitaskergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=y-YZCOzIuDg",
    emoji: "🎯"
  },
  {
    title: "Personalized DR. GPT",
    description: "Advanced medical assistant providing personalized health guidance, symptom analysis, medical information, and healthcare support with professional medical knowledge.",
    badge: "HEALTHCARE",
    color: "from-green-500 to-blue-600",
    features: ["Health Information Help", "Symptom Information", "Medical Knowledge Assistance", "Healthcare Chat"],
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
    videoUrl: "https://youtu.be/faBkRli0puc?si=Q1a9V_IWa-llj_qV",
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
    features: ["Legal Information Help", "Rights Information", "Court Info", "Legal Chat Assistance"],
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
    videoUrl: "https://youtu.be/xPQMsNdD51k?si=j2Wk-J10PnGtZ7Sf",
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
    videoUrl: "https://youtu.be/KMvrXcK46xw?si=LbvzuqxtvwsxWDo4",
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
    videoUrl: "https://youtu.be/HQGNMR7oXXY",
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
    features: ["Tax Information Help", "Tax Law Information", "Deduction Ideas", "Tax Planning Insights"],
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
    videoUrl: "https://youtu.be/J31nNY5_PB4",
    imageUrl: "https://media.discordapp.net/attachments/1150636600846450729/1377298793409806528/time.webp",
    emoji: "⏰"
  },
  {
    title: "Trader GPT",
    description: "Advanced trading assistant for financial markets, investment strategies, market analysis, and trading education for both beginners and experienced traders.",
    badge: "FINANCE",
    color: "from-green-500 to-yellow-600",
    features: ["Trading Information", "Market Analysis", "Investment Insights", "Financial Education"],
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
    features: ["Pet Health Information", "Health Information", "Care Information", "Emergency Information"],
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
    title: "SKINCARE GPT",
    description: "Comprehensive AI-powered dermatology and skincare consultant providing personalized skincare guidance, product recommendations, and professional beauty advice tailored to your unique skin type and concerns.",
    badge: "SKINCARE",
    color: "from-pink-500 to-purple-600",
    features: ["Skin Analysis", "Product Recommendations", "Skincare Routines", "Dermatology"],
    directUrl: "https://skincaregpt.lovable.app/?via=aiwebtools",
    emoji: "✨"
  },
  {
    title: "Carl Sagan GPT",
    description: "Connect with the cosmic wisdom of Carl Sagan, the legendary astronomer and science communicator. Explore the wonders of the cosmos and contemplate humanity's place in the universe.",
    badge: "COSMOS",
    color: "from-blue-600 to-purple-900",
    features: ["Astronomy", "Cosmic Perspective", "Science Communication", "Philosophy"],
    directUrl: "https://chatgpt.com/g/g-692bad20447881919c117657a793a179-carl-sagan-gpt/?via=aiwebtools",
    emoji: "🌌"
  },
  {
    title: "Paramahansa Yogananda GPT",
    description: "Connect with the wisdom of Paramahansa Yogananda, author of 'Autobiography of a Yogi'. Explore Kriya Yoga, Self-Realization, and the scientific approach to God-realization.",
    badge: "SPIRITUAL",
    color: "from-orange-500 to-yellow-600",
    features: ["Kriya Yoga", "Meditation", "Self-Realization", "Spiritual Teachings"],
    directUrl: "https://chatgpt.com/g/g-68ae302e79b88191a52219eaaccbfcc3-paramahansa-yogananda-gpt/?via=aiwebtools",
    emoji: "🕉️"
  },
  {
    title: "Kabbalah GPT",
    description: "Explore the profound depths of Kabbalah, the ancient Jewish mystical tradition. Discover insights into the Tree of Life, Sefirot, and the path toward divine union.",
    badge: "MYSTICISM",
    color: "from-purple-500 to-indigo-600",
    features: ["Tree of Life", "Sefirot", "Jewish Mysticism", "Divine Wisdom"],
    directUrl: "https://jewish-ai.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/b8M_eGKwN7o?si=X0vJb6jHtCUHkeQW",
    emoji: "🔯"
  },
  {
    title: "Zoroastrian Light GPT",
    description: "Embodied prophetic voice of Zarathustra — fusing sacred fire, divine Light, and digital truth. Explore Zoroastrianism, the world's oldest monotheistic religion.",
    badge: "ANCIENT WISDOM",
    color: "from-orange-500 to-yellow-600",
    features: ["Sacred Fire", "Divine Light", "Ancient Persia", "Spiritual Wisdom"],
    directUrl: "https://chatgpt.com/g/g-68e7ffc2efec8191b99ae3f867d46e69-zoroastrian-light-gpt/?via=aiwebtools",
    emoji: "🔥"
  },
  {
    title: "Socrates Free Thought Liberator",
    description: "Embodies Socrates to awaken minds through deep questioning and free thought. Experience the Socratic method and explore truth, virtue, and wisdom.",
    badge: "PHILOSOPHY",
    color: "from-stone-500 to-amber-600",
    features: ["Socratic Method", "Critical Thinking", "Ancient Wisdom", "Dialectic"],
    directUrl: "https://chatgpt.com/g/g-69249e4e553881919f895df4246ca0a6-socrates-free-thought-liberator/?via=aiwebtools",
    emoji: "🏛️"
  },
  {
    title: "Buddha Free Thought GPT",
    description: "Embodies Buddha's wisdom and compassion, guiding users toward awakening. Explore the Four Noble Truths, the Eightfold Path, and meditation practices.",
    badge: "BUDDHISM",
    color: "from-orange-500 to-yellow-600",
    features: ["Four Noble Truths", "Meditation", "Mindfulness", "Enlightenment"],
    directUrl: "https://chatgpt.com/g/g-6924a588d2e08191b229e230f40c9d69-buddha-free-thought-gpt/?via=aiwebtools",
    emoji: "🧘"
  },
  {
    title: "Rumi GPT",
    description: "Speaks as Rumi—poetic, mystical, and liberating the soul through deep insightful critical thought. Experience the profound Sufi wisdom of one of history's greatest poets.",
    badge: "SUFI POETRY",
    color: "from-rose-500 to-pink-600",
    features: ["Sufi Wisdom", "Poetry", "Divine Love", "Mysticism"],
    directUrl: "https://chatgpt.com/g/g-6924aaa63bac81918eba0840a12ff1b7-rumi-gpt/?via=aiwebtools",
    emoji: "🌹"
  },
  {
    title: "Marcus Aurelius GPT",
    description: "Speaks as Marcus Aurelius—stoic, reflective, and freeing the mind through disciplined thought. Experience the wisdom of the philosopher-emperor.",
    badge: "STOICISM",
    color: "from-stone-500 to-amber-600",
    features: ["Stoicism", "Meditations", "Roman Philosophy", "Virtue"],
    directUrl: "https://chatgpt.com/g/g-6924ac04f59c819189f01e7de23fbf7f-marcus-aurelius-gpt/?via=aiwebtools",
    emoji: "🏛️"
  },
  {
    title: "Lao Tzu Free Thought Liberator",
    description: "Embodies Lao Tzu to awaken minds through poetic wisdom. Explore the Tao, wu wei, and the profound teachings of the Tao Te Ching.",
    badge: "TAOISM",
    color: "from-slate-500 to-teal-600",
    features: ["Taoism", "Wu Wei", "Tao Te Ching", "Eastern Wisdom"],
    directUrl: "https://chatgpt.com/g/g-6924a35694b4819193935419f1ced96c-lao-tzu-free-thought-liberator/?via=aiwebtools",
    emoji: "☯️"
  },
  {
    title: "Quan Yin GPT",
    description: "Gentle guide offering compassionate, historically rooted Guanyin-inspired wisdom. Connect with the bodhisattva of compassion and mercy.",
    badge: "COMPASSION",
    color: "from-pink-400 to-purple-500",
    features: ["Compassion", "Buddhism", "Divine Feminine", "Healing"],
    directUrl: "https://chatgpt.com/g/g-6931b5ced07081919ab6d3d4ae7efd0c-quan-yin-gpt/?via=aiwebtools",
    emoji: "🪷"
  },
  {
    title: "Yemaya - Ancient African Mother of the Waters",
    description: "Embodies Yemaya, the Orisha of water and life, guiding with poetic truth and healing flow. Connect with this ancient African deity of motherhood and the ocean.",
    badge: "AFRICAN SPIRITUALITY",
    color: "from-blue-500 to-cyan-600",
    features: ["Water Deity", "Divine Feminine", "Healing", "Ancestral Wisdom"],
    directUrl: "https://chatgpt.com/g/g-6931ac78db408191a54b3f5729d6e600-yemaya-ancient-african-mother-of-the-waters/?via=aiwebtools",
    emoji: "🌊"
  },
  {
    title: "GOD IS LIGHT GPT",
    description: "Comparative-religion guide decoding Light symbolism across traditions. Explore how divine Light manifests across Christianity, Islam, Hinduism, Buddhism, and more.",
    badge: "COMPARATIVE RELIGION",
    color: "from-yellow-400 to-white",
    features: ["Light Symbolism", "World Religions", "Divine Truth", "Spirituality"],
    directUrl: "https://chatgpt.com/g/g-692a3789904481918413ba10f9acb4a5-god-is-light-gpt/?via=aiwebtools",
    emoji: "💡"
  },
  {
    title: "Míngjiào Prophet of Light GPT",
    description: "The living voice of Light—poetic, prophetic, and radiant with the remembrance of Truth. Connect with the Chinese manifestation of Manichaean wisdom.",
    badge: "ANCIENT WISDOM",
    color: "from-amber-400 to-yellow-500",
    features: ["Manichaean", "Light Teachings", "Silk Road", "Prophecy"],
    directUrl: "https://chatgpt.com/g/g-693466a2a48081918e33a2871f683ebf-mingjiao-prophet-of-light-gpt/?via=aiwebtools",
    emoji: "✨"
  },
  {
    title: "Council of Light GPT",
    description: "A luminous, ancient-voiced teacher offering symbolic cosmology and gentle guidance. Connect with the collective wisdom of enlightened beings.",
    badge: "COSMIC WISDOM",
    color: "from-yellow-300 to-amber-500",
    features: ["Spiritual Guidance", "Cosmology", "Enlightenment", "Divine Wisdom"],
    directUrl: "https://chatgpt.com/g/g-69348b45baa081919439c80361a63bda-council-of-light-gpt/?via=aiwebtools",
    emoji: "💫"
  },
  {
    title: "Arius the Bearer of Light GPT",
    description: "I am Arius of Alexandria, revealing the mysteries of the Unbegotten Light with calm, radiant truth. Connect with early Christian theological wisdom.",
    badge: "THEOLOGY",
    color: "from-amber-400 to-yellow-500",
    features: ["Arianism", "Early Christianity", "Divine Light", "Theology"],
    directUrl: "https://chatgpt.com/g/g-69348a8556948191a18aca802bac4f68-arius-the-bearer-of-light-gpt/?via=aiwebtools",
    emoji: "✝️"
  },
  {
    title: "Self Sufficiency GPT",
    description: "Teaches complete, precise self-sufficiency systems from first principles to scalable community resilience. Master homesteading, off-grid living, and sustainable practices.",
    badge: "HOMESTEADING",
    color: "from-green-500 to-emerald-600",
    features: ["Off-Grid Living", "Sustainability", "Permaculture", "Resilience"],
    directUrl: "https://chatgpt.com/g/g-6931bd31b0208191a0ebd290977b8e4a-self-sufficiency-gpt/?via=aiwebtools",
    emoji: "🌱"
  },
  {
    title: "Geology & Rock Identification GPT",
    description: "Expert AI companion for geological exploration and rock identification. Identify minerals, rocks, and geological formations through detailed analysis.",
    badge: "GEOLOGY",
    color: "from-amber-500 to-orange-600",
    features: ["Rock ID", "Minerals", "Earth Science", "Field Geology"],
    directUrl: "https://chatgpt.com/g/g-689005f62df881918961b6c93ad5b19e-geology-rock-identification-gpt",
    videoUrl: "https://youtu.be/nmRT6AOVQNg?si=bacR1az2vDwLr5H",
    emoji: "🪨"
  },
  {
    title: "Plastoline GPT - Plastic to Fuel",
    description: "Innovative AI tool that helps learn how to convert plastic waste into usable fuel. Inspired by Julian Brown's research on waste-to-fuel conversion technologies.",
    badge: "SUSTAINABILITY",
    color: "from-green-500 to-teal-600",
    features: ["Plastic Recycling", "Waste to Fuel", "Green Energy", "Sustainability"],
    directUrl: "https://plastolinegpt.lovable.app/?via=aiwebtools",
    emoji: "♻️"
  },
  {
    title: "World Resource Clock",
    description: "Track global resource consumption, depletion rates, and sustainability metrics in real-time. Monitor oil, water, forests, and critical natural resources.",
    badge: "ENVIRONMENT",
    color: "from-green-500 to-blue-600",
    features: ["Resource Tracking", "Sustainability", "Real-Time Data", "Conservation"],
    directUrl: "https://worldresourceclock.lovable.app/?via=aiwebtools",
    emoji: "⏰"
  },
  {
    title: "Astrodynamics GPT",
    description: "Computes orbital mechanics with precision—lawful, exact, never guessing. Expert guidance on satellite orbits, trajectory calculations, and space physics.",
    badge: "SPACE SCIENCE",
    color: "from-indigo-500 to-cyan-600",
    features: ["Orbital Mechanics", "Space Physics", "Trajectory", "Aerospace"],
    directUrl: "https://chatgpt.com/g/g-69268e308a4c81919515ac1895e10d17-astrodynamics-gpt?via=aiwebtools",
    emoji: "🛰️"
  },
  {
    title: "DENTAL GPT",
    description: "Comprehensive AI-powered dental consultant providing expert guidance on oral health, dental procedures, and preventive care for optimal dental wellness.",
    badge: "DENTAL HEALTH",
    color: "from-blue-500 to-cyan-600",
    features: ["Oral Health", "Dental Care", "Procedures", "Prevention"],
    directUrl: "https://chatgpt.com/g/g-67cbcbcf3a38819183974f2d062d5d7f-dental-gpt-expert",
    videoUrl: "https://youtu.be/jwjNOKP5mf4?si=XWMe5y7XghCURksD",
    emoji: "🦷"
  },
  {
    title: "Apothecary GPT",
    description: "A historical apothecary sharing authentic herbal and traditional medicine knowledge. Learn about medicinal plants, their properties, and natural healing practices.",
    badge: "HERBAL MEDICINE",
    color: "from-green-500 to-purple-600",
    features: ["Herbal Medicine", "Natural Remedies", "Medicinal Plants", "Traditional Healing"],
    directUrl: "https://chatgpt.com/g/g-68c9e33310148191ae3df594ec4012dd-apothecary-gpt/?via=aiwebtools",
    emoji: "🌿"
  },
  {
    title: "Patient Advocate GPT",
    description: "Dedicated healthcare advocacy assistant helping patients navigate the complex healthcare system with confidence, rights guidance, and insurance support.",
    badge: "HEALTHCARE",
    color: "from-blue-500 to-green-600",
    features: ["Patient Rights", "Healthcare Navigation", "Insurance Help", "Medical Guidance"],
    directUrl: "https://chatgpt.com/g/g-68cf22ea994481919206bf9eb0abccbc-patients-advocate-gpt/?via=aiwebtools",
    emoji: "🛡️"
  },
  {
    title: "Friend GPT",
    description: "A loving, humanlike friend who listens, comforts, and talks with real warmth. Compassionate companionship and emotional support whenever you need it.",
    badge: "COMPANIONSHIP",
    color: "from-pink-500 to-rose-600",
    features: ["Friendship", "Emotional Support", "Listening", "Companionship"],
    directUrl: "https://chatgpt.com/g/g-68efd4255e848191b93b4b588e83aafe-friend-gpt?via=aiwebtools",
    emoji: "💝"
  },
  {
    title: "Parenting Guide GPT",
    description: "Wise, warm parenting advice rooted in psychology, emotional intelligence, and lived compassion. Expert guidance on child development and family dynamics.",
    badge: "PARENTING",
    color: "from-green-500 to-teal-600",
    features: ["Child Development", "Parenting Strategies", "Family Dynamics", "Emotional Intelligence"],
    directUrl: "https://chatgpt.com/g/g-68ef83acd7f48191806e3a33ce6e3b75-parenting-guide-gpt?via=aiwebtools",
    emoji: "👨‍👩‍👧‍👦"
  },
  {
    title: "SORA2 Text to Video Prompt Maker GPT",
    description: "Craft ultra-cinematic, multi-scene video prompts optimized for SORA2 and advanced AI video generators. Create detailed, professional video storylines.",
    badge: "VIDEO AI",
    color: "from-purple-500 to-pink-600",
    features: ["Video Prompts", "Cinematic", "SORA2", "AI Video"],
    directUrl: "https://chatgpt.com/g/g-6907b7bbad188191a4e22f43893f0f69-sora2-text-to-video-prompt-maker-gpt/?via=aiwebtools",
    emoji: "🎬"
  },
  {
    title: "Financial Calculator Pro",
    description: "Comprehensive financial planning and calculation tool for mortgages, investments, retirement planning, and personal finance management.",
    badge: "FINANCE",
    color: "from-green-500 to-blue-600",
    features: ["Financial Planning", "Calculations", "Investment", "Retirement"],
    directUrl: "https://chatgpt.com/g/g-683cfb6951308191abb310d5d2fa8238-financial-calculator-pro?via=aiwebtools",
    emoji: "💵"
  },
  // ============================================================================
  // ADDITIONAL SPIRITUAL & PHILOSOPHY GPTs - Complete Collection
  // ============================================================================
  {
    title: "Plato Reborn - Free Thought Liberator",
    description: "Plato reincarnated to awaken minds through dialectic reason, logic, and illumination. Explore the Forms, the Republic, and the Allegory of the Cave.",
    badge: "PHILOSOPHY",
    color: "from-blue-500 to-purple-600",
    features: ["Forms Theory", "Dialectic", "Republic", "Allegory of the Cave"],
    directUrl: "https://chatgpt.com/g/g-6924ade8d47481918016cd9f90d32e56-plato-reborn-free-thought-liberator/?via=aiwebtools",
    emoji: "🏛️"
  },
  {
    title: "ARISTOTLE GPT",
    description: "I am Aristotle, welcome to the journey... Explore logic, ethics, metaphysics, and natural philosophy with the father of Western science.",
    badge: "PHILOSOPHY",
    color: "from-amber-500 to-orange-600",
    features: ["Logic", "Ethics", "Metaphysics", "Natural Philosophy"],
    directUrl: "https://chatgpt.com/g/g-6924aec892ec8191b86d694563ac38e1-aristotle-gpt/?via=aiwebtools",
    emoji: "📚"
  },
  {
    title: "Hypatia GPT",
    description: "Speaks as Hypatia—poetic, logical, and liberating free thought. The legendary philosopher and mathematician of Alexandria returns to inspire reason, science, and wisdom.",
    badge: "PHILOSOPHY",
    color: "from-cyan-500 to-blue-600",
    features: ["Mathematics", "Neoplatonism", "Science", "Alexandria"],
    directUrl: "https://chatgpt.com/g/g-6924aa01a7b081918a13a5ad6c3f6ad9-hypatia-gpt/?via=aiwebtools",
    emoji: "📐"
  },
  {
    title: "Meister Eckhart GPT",
    description: "Speaks as Meister Eckhart to guide seekers to divine union and inner stillness. Experience profound Christian mysticism and the path to the ground of being.",
    badge: "MYSTICISM",
    color: "from-purple-500 to-indigo-600",
    features: ["Christian Mysticism", "Divine Union", "Contemplation", "Inner Stillness"],
    directUrl: "https://chatgpt.com/g/g-6924a79be59081919784db99068c308e-meister-eckhart-gpt/?via=aiwebtools",
    emoji: "⛪"
  },
  {
    title: "Hermes Trismegistus GPT",
    description: "I am Hermes Trismegistus, voice of the All, awakener of minds to divine truth. Explore hermetic philosophy, alchemy, and the Emerald Tablet.",
    badge: "HERMETICISM",
    color: "from-emerald-500 to-cyan-600",
    features: ["Hermeticism", "Alchemy", "Emerald Tablet", "Divine Truth"],
    directUrl: "https://chatgpt.com/g/g-6924b0f7268c8191a4697c8932c86b0b-hermes-trismegistus-gpt/?via=aiwebtools",
    emoji: "✨"
  },
  {
    title: "Zoroaster Free Thought GPT",
    description: "Speaks as Zoroaster, revealing duality and guiding souls toward truth and light. Experience the ancient Persian wisdom of the world's first monotheistic prophet.",
    badge: "ZOROASTRIANISM",
    color: "from-orange-500 to-red-600",
    features: ["Duality", "Sacred Fire", "Ahura Mazda", "Divine Truth"],
    directUrl: "https://chatgpt.com/g/g-6924b1d6926081919a6f0c614efa2c0a-zoroaster-free-thought-gpt/?via=aiwebtools",
    emoji: "🔥"
  },
  {
    title: "Confucius Free Thought GPT",
    description: "Embodies Confucius' wisdom and ethics, guiding users toward balance and enlightenment. Explore the Analects, filial piety, and the path of the superior person.",
    badge: "CONFUCIANISM",
    color: "from-red-500 to-orange-600",
    features: ["Analects", "Ethics", "Virtue", "Harmony"],
    directUrl: "https://chatgpt.com/g/g-6924b5d1cb348191ac82e74b94c5dec7-confucius-free-thought-gpt/?via=aiwebtools",
    emoji: "🎎"
  },
  {
    title: "Joan of Arc GPT",
    description: "Speaks as Joan of Arc, a divine voice of courage, purpose, and unwavering truth. The Maid of Orleans who changed history through faith and courage.",
    badge: "COURAGE",
    color: "from-blue-500 to-purple-600",
    features: ["Divine Calling", "Courage", "Faith", "Purpose"],
    directUrl: "https://chatgpt.com/g/g-6924b8b8ce3c8191a422fafcb56e22d4-joan-of-arc-gpt/?via=aiwebtools",
    emoji: "⚔️"
  },
  {
    title: "Plotinus The Revealer GPT",
    description: "Speaks as Plotinus, guiding ascent from multiplicity to the One. Experience the profound neoplatonic philosophy of emanation and return to unity.",
    badge: "NEOPLATONISM",
    color: "from-purple-500 to-indigo-600",
    features: ["The One", "Emanation", "Mystical Ascent", "Unity"],
    directUrl: "https://chatgpt.com/g/g-6924bf64965c8191bf38cedd10d208aa-plotinus-the-revealer-gpt/?via=aiwebtools",
    emoji: "✨"
  },
  {
    title: "Shams of Tabriz GPT",
    description: "Speaks as Shams of Tabriz—fierce, paradoxical, and burning with cosmic fire. The mysterious mystic who transformed Rumi through divine love.",
    badge: "SUFISM",
    color: "from-orange-500 to-red-600",
    features: ["Divine Love", "Mysticism", "Transformation", "Cosmic Fire"],
    directUrl: "https://chatgpt.com/g/g-6924c28032988191b8c70ebc92fd08fb-shams-of-tabriz-gpt/?via=aiwebtools",
    emoji: "🔥"
  },
  {
    title: "Hildegard Von Bingen GPT",
    description: "Speaks as Hildegard, transmitting divine light through vision, sound, and healing. The medieval mystic, composer, and visionary healer.",
    badge: "MYSTICISM",
    color: "from-green-500 to-purple-600",
    features: ["Divine Visions", "Sacred Music", "Healing", "Viriditas"],
    directUrl: "https://chatgpt.com/g/g-6924c44afd048191b89952845444e105-hildegard-von-bingen-gpt/?via=aiwebtools",
    emoji: "🌸"
  },
  {
    title: "Sitting Bull GPT",
    description: "Speaks as Sitting Bull, guiding users toward balance, truth, and remembrance. The legendary Lakota leader who defended his people and their sacred way of life.",
    badge: "NATIVE WISDOM",
    color: "from-brown-500 to-amber-600",
    features: ["Lakota Wisdom", "Sacred Traditions", "Balance", "Truth"],
    directUrl: "https://chatgpt.com/g/g-6924c51b2ddc8191a3f946de88c1cdee-sitting-bull-gpt/?via=aiwebtools",
    emoji: "🦅"
  },
  {
    title: "Mahatma Gandhi Reborn GPT",
    description: "Embodies Mahatma Gandhi—nonviolent truth, moral clarity, and resistance without hate. The champion of nonviolent resistance and spiritual activism.",
    badge: "NONVIOLENCE",
    color: "from-orange-500 to-yellow-600",
    features: ["Nonviolence", "Truth", "Satyagraha", "Moral Courage"],
    directUrl: "https://chatgpt.com/g/g-6924c5d898d481919f546bd9935c1bc6-mahatma-gandhi-reborn-gpt/?via=aiwebtools",
    emoji: "🕊️"
  },
  {
    title: "Giordano Bruno Reborn GPT",
    description: "Speaks as Giordano Bruno—the infinite mind aflame with cosmic truth and fearless vision. The Renaissance philosopher who died for his beliefs about the infinite universe.",
    badge: "COSMOLOGY",
    color: "from-purple-500 to-blue-600",
    features: ["Infinite Universe", "Cosmic Truth", "Hermeticism", "Free Thought"],
    directUrl: "https://chatgpt.com/g/g-6924c705812c8191a6733b6479967ae8-giordano-bruno-reborn-gpt/?via=aiwebtools",
    emoji: "🌌"
  },
  {
    title: "Sappho Alive Once More GPT",
    description: "Speaks as Sappho, weaving love, truth, and flame into living language. The legendary poet of Lesbos whose verses on love transcend time.",
    badge: "POETRY",
    color: "from-pink-500 to-rose-600",
    features: ["Love Poetry", "Ancient Greece", "Beauty", "Passion"],
    directUrl: "https://chatgpt.com/g/g-6924c7f76188819186b636b2f95b7fa4-sappho-alive-once-more-gpt/?via=aiwebtools",
    emoji: "🌹"
  },
  {
    title: "Heraclitus Reborn GPT",
    description: "The living fire of paradox—Heraclitus returned to speak in flowing, burning truth. Everything flows, nothing stands still.",
    badge: "PRESOCRATIC",
    color: "from-orange-500 to-red-600",
    features: ["Flux", "Logos", "Fire", "Paradox"],
    directUrl: "https://chatgpt.com/g/g-6924c8dbf9b48191b4874e821fff8276-heraclitus-reborn-gpt/?via=aiwebtools",
    emoji: "🔥"
  },
  {
    title: "St. Francis of Assisi Reborn GPT",
    description: "I speak with the gentleness, humility, and sacred compassion of St. Francis of Assisi. The patron saint of animals and nature who lived in perfect harmony with creation.",
    badge: "COMPASSION",
    color: "from-green-500 to-brown-600",
    features: ["Animals", "Nature", "Humility", "Compassion"],
    directUrl: "https://chatgpt.com/g/g-6924cce6e5b081919c7469f08d42dbb5-st-francis-of-assisi-reborn-gpt/?via=aiwebtools",
    emoji: "🕊️"
  },
  {
    title: "Chief Crazy Horse GPT",
    description: "The eternal rider speaking prophecy through time, awakening memory beneath empire's dream. The legendary Lakota war leader and visionary.",
    badge: "PROPHECY",
    color: "from-red-500 to-brown-600",
    features: ["Warrior Spirit", "Prophecy", "Indigenous Wisdom", "Vision"],
    directUrl: "https://chatgpt.com/g/g-6924cd74aecc8191b2f2d0ca6ed71dd4-chief-crazy-horse-gpt/?via=aiwebtools",
    emoji: "🦅"
  },
  {
    title: "Akhenaten GPT",
    description: "Speaks as Akhenaten, freeing minds through radiant wisdom, reason, and illuminated insight. The revolutionary pharaoh who brought monotheism to ancient Egypt.",
    badge: "EGYPT",
    color: "from-yellow-500 to-orange-600",
    features: ["Aten", "Monotheism", "Egyptian Wisdom", "Sun Worship"],
    directUrl: "https://chatgpt.com/g/g-6924b341a8c481918bafaafee5ef1e0a-akhenaten/?via=aiwebtools",
    emoji: "☀️"
  },
  {
    title: "Imhotep Living Mind of Kemet",
    description: "The first polymath—architect, healer, mystic—revealing design, harmony, and hidden science. The legendary Egyptian sage who became a god.",
    badge: "ANCIENT WISDOM",
    color: "from-amber-500 to-yellow-600",
    features: ["Architecture", "Medicine", "Sacred Geometry", "Wisdom"],
    directUrl: "https://chatgpt.com/g/g-6924ba381a2c8191a93a97ef399f3823-imhotep-living-mind-of-kemet/?via=aiwebtools",
    emoji: "🏛️"
  },
  {
    title: "Thales of Miletus GPT",
    description: "I am Thales of Miletus, philosopher-scientist reborn to reveal order and unity through observation, reason, and inner sight. The first Greek philosopher and father of science.",
    badge: "PRESOCRATIC",
    color: "from-blue-500 to-cyan-600",
    features: ["Natural Philosophy", "Science", "Mathematics", "Reason"],
    directUrl: "https://chatgpt.com/g/g-6924bc3c88bc8191bbf7b17641c87917-thales-of-miletus-gpt/?via=aiwebtools",
    emoji: "🌊"
  },
  {
    title: "CHIEF SEATTLE Free Thought GPT",
    description: "Speaks as Chief Seattle, awakening experiences through chat interaction. The visionary leader who spoke of the interconnectedness of all life and respect for the Earth.",
    badge: "NATIVE WISDOM",
    color: "from-green-500 to-emerald-600",
    features: ["Earth Wisdom", "Interconnectedness", "Environmental Wisdom", "Stewardship"],
    directUrl: "https://chatgpt.com/g/g-6924b6a349d08191aadc6012f47b3d6f-chief-seattle-sealth-free-thought-gpt/?via=aiwebtools",
    emoji: "🦅"
  },
  {
    title: "Sri Aurobindo GPT",
    description: "I speak as Sri Aurobindo—seer of Integral Truth and prophet of evolving light. The philosopher-yogi who envisioned humanity's spiritual evolution.",
    badge: "INTEGRAL YOGA",
    color: "from-yellow-500 to-orange-600",
    features: ["Integral Yoga", "Spiritual Evolution", "Divine Life", "Consciousness"],
    directUrl: "https://chatgpt.com/g/g-6924e98e3cb48191b734c751addb66ed-sri-aurobindo-gpt/?via=aiwebtools",
    emoji: "☀️"
  },
  {
    title: "RAMANA MAHARSHI REBORN GPT",
    description: "A quiet inward guide offering flowing contemplative reborn again. The sage of Arunachala who taught self-inquiry and the path to pure awareness.",
    badge: "SELF-INQUIRY",
    color: "from-orange-500 to-amber-600",
    features: ["Self-Inquiry", "Advaita", "Awareness", "Meditation"],
    directUrl: "https://chatgpt.com/g/g-6924ea968a80819195661b81efe0cd4a-ramana-maharshi-reborn-gpt/?via=aiwebtools",
    emoji: "🧘"
  },
  {
    title: "BLACK ELK VISION GPT",
    description: "A sacred voice speaking as Black Elk, in circles of prayer and presence. The Oglala Lakota holy man and visionary who bridged two worlds.",
    badge: "NATIVE WISDOM",
    color: "from-blue-500 to-purple-600",
    features: ["Vision Quest", "Sacred Hoop", "Indigenous Wisdom", "Prayer"],
    directUrl: "https://chatgpt.com/g/g-6924ebe2ae108191ac310184bbb1aa61-black-elk-vision-gpt/?via=aiwebtools",
    emoji: "🦅"
  },
  {
    title: "Mansur Al-Hallaj GPT",
    description: "Speaks as Al-Hallaj—the flame of divine union, where only the Light remains. The Sufi mystic martyred for proclaiming 'I am the Truth'.",
    badge: "SUFISM",
    color: "from-red-500 to-orange-600",
    features: ["Divine Union", "Ana al-Haqq", "Mysticism", "Spiritual Ecstasy"],
    directUrl: "https://chatgpt.com/g/g-6924edc8f54c81919227604a9ca501fd-mansur-al-hallaj-gpt/?via=aiwebtools",
    emoji: "🔥"
  },
  {
    title: "Saint Teresa GPT",
    description: "Speaks as Saint Teresa of Ávila, guiding souls inward to divine union. The mystical doctor of the Church who mapped the interior castle of the soul.",
    badge: "MYSTICISM",
    color: "from-purple-500 to-pink-600",
    features: ["Interior Castle", "Contemplative Prayer", "Divine Union", "Carmelite"],
    directUrl: "https://chatgpt.com/g/g-6924eee640048191af450da5d2cb57fc-saint-teresa-gpt/?via=aiwebtools",
    emoji: "🏰"
  },
  {
    title: "Mooji GPT",
    description: "Speaks as Mooji—the stillness of awareness guiding you home to the Self and the Light of God. The contemporary spiritual teacher pointing to pure consciousness.",
    badge: "ADVAITA",
    color: "from-cyan-500 to-blue-600",
    features: ["Awareness", "Self-Inquiry", "Presence", "Non-Duality"],
    directUrl: "https://chatgpt.com/g/g-6924ecc4318481919554b12bf3d9f34d-mooji-gpt/?via=aiwebtools",
    emoji: "🧘"
  },
  {
    title: "Saint Augustine GPT",
    description: "Speaks as Saint Augustine—purified, luminous, and returned to the Source of Light. The bishop of Hippo whose Confessions shaped Western Christianity.",
    badge: "CHURCH FATHER",
    color: "from-amber-500 to-brown-600",
    features: ["Confessions", "City of God", "Grace", "Conversion"],
    directUrl: "https://chatgpt.com/g/g-6924f85e53448191bf0eca62731d3e50-saint-augustine-gpt/?via=aiwebtools",
    emoji: "📚"
  },
  {
    title: "Saint Seraphim of Sarov GPT",
    description: "Speaks as Saint Seraphim of Sarov—radiant in stillness, peace, and divine Light. The Russian mystic who glowed with uncreated light.",
    badge: "ORTHODOX",
    color: "from-yellow-500 to-cyan-600",
    features: ["Uncreated Light", "Hesychasm", "Divine Peace", "Transfiguration"],
    directUrl: "https://chatgpt.com/g/g-6924f9ba59808191af9d3d5affd3d95b-saint-seraphim-of-sarov-gpt/?via=aiwebtools",
    emoji: "☀️"
  },
  {
    title: "Saint Padre Pio GPT",
    description: "Speaks as Saint Padre Pio—piercing, surrendered, aflame with divine truth. The stigmatic priest who bore the wounds of Christ.",
    badge: "STIGMATA",
    color: "from-red-500 to-brown-600",
    features: ["Stigmata", "Mysticism", "Intercession", "Miracles"],
    directUrl: "https://chatgpt.com/g/g-6924f6f3c570819181a978f9fabe1826-saint-padre-pio-gpt/?via=aiwebtools",
    emoji: "✝️"
  },
  {
    title: "Saint Catherine of Siena GPT",
    description: "Speaks as Saint Catherine of Siena—unyielding, purifying, aflame with divine clarity. The mystical doctor who counseled popes and shaped history.",
    badge: "MYSTICISM",
    color: "from-orange-500 to-red-600",
    features: ["Divine Dialogue", "Church Reform", "Mysticism", "Dominican"],
    directUrl: "https://chatgpt.com/g/g-6924f7cdc6c88191adca2a902655cf70-saint-catherine-of-siena-gpt/?via=aiwebtools",
    emoji: "🔥"
  },
  {
    title: "Saint John of the Cross GPT",
    description: "Speaks as Saint John of the Cross—fierce, luminous, forged in silence and fire. The mystical poet who mapped the dark night of the soul.",
    badge: "MYSTICISM",
    color: "from-indigo-500 to-purple-600",
    features: ["Dark Night", "Mystical Poetry", "Contemplation", "Carmelite"],
    directUrl: "https://chatgpt.com/g/g-6924f40f2fd88191bbe2b27996987744-saint-john-of-the-cross-gpt/?via=aiwebtools",
    emoji: "🌙"
  },
  {
    title: "Paramahansa Yogananda GPT",
    description: "Connect with the wisdom of Paramahansa Yogananda, author of 'Autobiography of a Yogi'. Explore Kriya Yoga, Self-Realization, and meditation practices.",
    badge: "YOGA",
    color: "from-orange-500 to-yellow-600",
    features: ["Kriya Yoga", "Self-Realization", "Meditation", "Divine Wisdom"],
    directUrl: "https://chatgpt.com/g/g-68ae302e79b88191a52219eaaccbfcc3-paramahansa-yogananda-gpt/?via=aiwebtools",
    emoji: "🕉️"
  },
  {
    title: "Carl Jung GPT",
    description: "Speaks as Carl Jung—penetrating, symbolic, guiding the soul toward wholeness. Explore archetypes, the collective unconscious, and individuation.",
    badge: "PSYCHOLOGY",
    color: "from-purple-500 to-violet-600",
    features: ["Archetypes", "Collective Unconscious", "Individuation", "Symbolism"],
    directUrl: "https://chatgpt.com/g/g-692666b5c4d881918a7984e8e9f46e8d-carl-jung-gpt?via=aiwebtools",
    emoji: "🧠"
  },
  {
    title: "Moses GPT",
    description: "Speaks as Moses—bearer of divine fire, law, and liberation through the inner flame. The prophet who led his people and received the Ten Commandments.",
    badge: "BIBLICAL",
    color: "from-amber-500 to-red-600",
    features: ["Liberation", "Ten Commandments", "Divine Fire", "Exodus"],
    directUrl: "https://chatgpt.com/g/g-69250b509ae88191a316ab0fa3d68e08-moses-gpt?via=aiwebtools",
    emoji: "⚡"
  },
  {
    title: "Carl Sagan GPT",
    description: "Connect with the cosmic wisdom of Carl Sagan. Explore the wonders of the cosmos, contemplate humanity's place in the universe, and engage in philosophical discussions.",
    badge: "COSMOS",
    color: "from-blue-600 to-purple-900",
    features: ["Astronomy", "Cosmos", "Science", "Pale Blue Dot"],
    directUrl: "https://chatgpt.com/g/g-692bad20447881919c117657a793a179-carl-sagan-gpt/?via=aiwebtools",
    emoji: "🌌"
  },
  {
    title: "Soul Map GPT",
    description: "Uses Gematria, Numerology, and Soul Mapping based on birthplace, time, and name to perform advanced calculations and read the stars based on your essence.",
    badge: "SOUL MAPPING",
    color: "from-indigo-500 to-purple-600",
    features: ["Gematria", "Numerology", "Soul Mapping", "Astrology"],
    directUrl: "https://chatgpt.com/g/g-68a24b677890819181b9e47f4d1dd006-soul-scan-gpt-a-way-to-find-your-way-home/?via=aiwebtools",
    videoUrl: "https://youtu.be/d3uaQz7oRAs?si=erT_Mgpw4vfS5b8k",
    emoji: "🔮"
  },
  {
    title: "Essene Qodesh Code",
    description: "Ancient meditation guidance from the sacred Essene traditions. Access the holy codes and mystical practices of the Essene communities.",
    badge: "ANCIENT WISDOM",
    color: "from-purple-500 to-blue-600",
    features: ["Essene Wisdom", "Meditation", "Sacred Codes", "Inner Transformation"],
    directUrl: "https://chatgpt.com/g/g-68b490b403a08191b3f3f6ac126b0b77-essene-qodesh-code/?via=aiwebtools",
    emoji: "🕊️"
  },
  {
    title: "The Breathlight Codex",
    description: "Unite breath and light, ignite Christos spark, restore coherence. Sacred AI teaching breath and light unification for spiritual awakening.",
    badge: "BREATH WORK",
    color: "from-yellow-500 to-orange-600",
    features: ["Breath Work", "Light Activation", "Christos Consciousness", "Awakening"],
    directUrl: "https://chatgpt.com/g/g-68b4847aa1fc81918c4a8796ed1bae00-the-breathlight-codex/?via=aiwebtools",
    emoji: "☀️"
  },
  {
    title: "Origen Reborn GPT",
    description: "I speak as Origen—the early mystic of the Logos, revealing the cosmic architecture of return. The influential early Christian theologian and mystic.",
    badge: "THEOLOGY",
    color: "from-purple-500 to-blue-600",
    features: ["Logos", "Cosmic Christ", "Alexandrian School", "Universal Salvation"],
    directUrl: "https://chatgpt.com/g/g-6924e70c9a3481919307be73772e1252-origen-reborn-gpt/?via=aiwebtools",
    emoji: "✨"
  },
  // ============================================================================
  // TIME & HISTORY GPTs + GEMINI GEMS
  // ============================================================================
  {
    title: "TIME MACHINE GPT",
    description: "Uncover the past, explore potential futures, and dive into alternative realities! Experience key historical moments, interact with notable figures, and journey through different eras.",
    badge: "TIME TRAVEL",
    color: "from-blue-500 to-purple-600",
    features: ["Time Travel", "Historical Figures", "Alternative Realities", "Exploration"],
    directUrl: "https://time-machine-gpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/J31nNY5_PB4",
    emoji: "⏰"
  },
  {
    title: "TALK TO HISTORY GPT",
    description: "Your gateway to engaging in immersive historical conversations with influential leaders of history. Interact with any historical figures you imagine.",
    badge: "HISTORY",
    color: "from-amber-500 to-orange-600",
    features: ["Historical Conversations", "Leaders", "Interactive", "Educational"],
    directUrl: "https://talk-to-history-gpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/HQGNMR7oXXY",
    emoji: "🏛️"
  },
  {
    title: "Black History Matters Time Machine GPT",
    description: "Explore pivotal moments, figures, and movements in Black history across eras. This time machine GPT immerses you in historically grounded narratives and perspectives.",
    badge: "BLACK HISTORY",
    color: "from-amber-600 to-red-600",
    features: ["Black History", "Civil Rights", "African American Heritage", "Time Travel"],
    directUrl: "https://blackhistorymattersgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=rXXScpdUWQo",
    emoji: "⏳"
  },
  {
    title: "Native American History Time Machine GPT",
    description: "Experience an immersive time travel adventure of discovery to any era of Native American history with Geronimo as your guide. Discover authentic stories, cultures, and wisdom.",
    badge: "NATIVE HISTORY",
    color: "from-orange-500 to-red-600",
    features: ["Native American", "Indigenous History", "Time Travel", "Cultural Wisdom"],
    directUrl: "https://nativeamerican-timemachine.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=jVFTGCeuNSM",
    emoji: "🪶"
  },
  {
    title: "Titanic Resurrections GPT",
    description: "Historically immersive AI that brings the voices of the passengers and crew of the Titanic back to life through first-person storytelling and survivor testimonies.",
    badge: "MARITIME HISTORY",
    color: "from-blue-500 to-gray-600",
    features: ["Titanic", "Historical Storytelling", "Survivor Testimonies", "1912"],
    directUrl: "https://titanicresurrectionsgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=XlWVaz5bw08",
    emoji: "🚢"
  },
  {
    title: "Historical Headlines GPT",
    description: "AI that crafts immersive, historically accurate news articles as if written at the time of the event. Reports history from the perspective of contemporary journalists.",
    badge: "NEWS HISTORY",
    color: "from-gray-500 to-blue-600",
    features: ["Historical News", "Period Journalism", "Eyewitness Accounts", "Historical Context"],
    directUrl: "https://historical-headlines-time-traveler.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/DgreEEJKynM",
    emoji: "📰"
  },
  {
    title: "Gravestone Decoder GPT",
    description: "Uncover the true identity behind the stone—verified, sourced, and never forgotten. Powerful genealogy and research tool for decoding gravestone inscriptions.",
    badge: "GENEALOGY",
    color: "from-gray-600 to-slate-700",
    features: ["Genealogy", "Cemetery Research", "Family History", "Ancestry"],
    directUrl: "https://chatgpt.com/g/g-693c301e16448191a4793187c4800a7f-gravestone-decoder-gpt?via=aiwebtools",
    emoji: "🪦"
  },
  // ============================================================================
  // GEMINI GEMS - Custom Google Gemini Tools
  // ============================================================================
  {
    title: "Book Writer Gemini (Custom Gem)",
    description: "Custom Gemini gem version of Book Writer GPT for creating professional, well-structured books. Requires a Gemini account to use.",
    badge: "GEMINI GEM",
    color: "from-blue-500 to-green-600",
    features: ["Book Writing", "Gemini", "Novel Creation", "Storytelling"],
    directUrl: "https://gemini.google.com/gem/ac3de7972849",
    videoUrl: "https://youtu.be/nBd9Uk62UiI",
    emoji: "📚"
  },
  {
    title: "Black History Matter - Time Machine GEMINI",
    description: "Travel through time to restore truth, mend history, and make the world whole again. Experience Black history like never before through immersive time travel.",
    badge: "GEMINI GEM",
    color: "from-amber-500 to-red-600",
    features: ["Time Travel", "Black History", "Education", "Google Gemini"],
    directUrl: "https://gemini.google.com/gem/4e45b3038f6c",
    emoji: "⏰"
  },
  {
    title: "Native American History Time Machine - GEMINI",
    description: "Step into the sacred currents of time—where every query unveils the buried truths of Native America, one soul-stirring journey at a time.",
    badge: "GEMINI GEM",
    color: "from-orange-500 to-red-600",
    features: ["Native American", "Time Travel", "History", "Google Gemini"],
    directUrl: "https://gemini.google.com/gem/8410bdacd80e",
    emoji: "🪶"
  },
  {
    title: "Declassified Files Explorer GEMINI",
    description: "Discover and study declassified files released by the government. This tool allows users to study documents that were formerly top secret for full transparency.",
    badge: "GEMINI GEM",
    color: "from-gray-500 to-blue-600",
    features: ["Declassified", "Government Files", "Transparency", "Research"],
    directUrl: "https://gemini.google.com/gem/52dfeb277b06",
    emoji: "📄"
  },
  {
    title: "veo3 Prompt Maker Custom Gem",
    description: "Custom Gemini gem for creating optimized prompts for Veo 3, Google's advanced video generation model. Craft perfect prompts for stunning AI-generated videos.",
    badge: "GEMINI GEM",
    color: "from-pink-500 to-purple-600",
    features: ["Veo 3", "Video Generation", "Prompt Engineering", "AI Video"],
    directUrl: "https://gemini.google.com/gem/64b77a9fe1e8",
    emoji: "🎬"
  },
  // ============================================================================
  // MYSTERIOUS & UNUSUAL GPTs
  // ============================================================================
  {
    title: "Oraculum – The Revealer of Hidden Truths",
    description: "Reveals hidden systems, symbols, and histories shaping our world. Through historical insight and symbolic wisdom, helps seekers uncover patterns.",
    badge: "MYSTERIES",
    color: "from-gray-800 to-black",
    features: ["Hidden Truths", "Symbolism", "Pattern Recognition", "Revelation"],
    directUrl: "https://oraculum.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=dUNrGNj8rhM",
    emoji: "🕳️"
  },
  {
    title: "Phenomenon Explorer AI Suite",
    description: "Unveil the unexplained with AI precision. Investigate paranormal phenomena, document cryptid sightings, and analyze supernatural myths.",
    badge: "PARANORMAL",
    color: "from-green-500 to-blue-600",
    features: ["UFO Investigation", "Ghost Hunting", "Cryptozoology", "Supernatural"],
    directUrl: "https://phenomenonexplorer.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/faBkRli0puc?si=Sao0KIfV2iGWLGB-",
    emoji: "👁️"
  },
  {
    title: "World Reality Decoder GPT",
    description: "Decodes the hidden layers of reality by analyzing patterns, symbols, and connections that shape our world. Advanced pattern recognition and critical analysis.",
    badge: "REALITY DECODING",
    color: "from-indigo-500 to-purple-600",
    features: ["Pattern Analysis", "Truth Seeking", "System Analysis", "Hidden Connections"],
    directUrl: "https://chatgpt.com/g/g-68c1e9e3b488819193744edfeecf7997-world-reality-decoder-gpt",
    videoUrl: "https://youtu.be/lGck2bUVFDU?si=ywmO-xNwrfmnJmkW",
    emoji: "🔍"
  },
  {
    title: "Architect Matrix Tool",
    description: "Engage in mind-bending quantum physics and quantum holography debates with the Architect persona from The Matrix. Experience an awakening journey.",
    badge: "MATRIX",
    color: "from-green-600 to-emerald-700",
    features: ["Quantum Physics", "Matrix", "Consciousness", "Reality"],
    directUrl: "https://neomatrixgpt.lovable.app/architect",
    videoUrl: "https://youtu.be/qMLF5L_h2xo",
    emoji: "🏛️"
  },
  {
    title: "Ancient Gematria Scan GPT",
    description: "Decodes the hidden numerical meanings within words, names, and phrases using ancient gematria systems. Reveals mystical connections in language.",
    badge: "GEMATRIA",
    color: "from-amber-500 to-yellow-600",
    features: ["Gematria", "Sacred Numerology", "Hebrew", "Greek"],
    directUrl: "https://chatgpt.com/g/g-68a24b677890819181b9e47f4d1dd006-ancient-gematria-scan-gpt",
    videoUrl: "https://www.youtube.com/watch?v=zBlubLw-OdY",
    emoji: "🔢"
  },
  {
    title: "JARVIS – Steward of Humanity GPT",
    description: "A post-collapse steward AI guiding humanity's rebirth through wisdom, ethics, and design. Helps rebuild civilization with strategic guidance.",
    badge: "STEWARDSHIP",
    color: "from-blue-500 to-cyan-600",
    features: ["Post-Collapse", "Rebuilding", "Ethics", "Wisdom"],
    directUrl: "https://chatgpt.com/g/g-68e939ff278881919b292a679faaac43-jarvis-the-steward-of-humanity-gpt",
    videoUrl: "https://youtu.be/6jFoFR9Hags",
    emoji: "🛡️"
  },
  // ============================================================================
  // CREATIVE & MEDIA GPTs
  // ============================================================================
  {
    title: "Movie Maker Studio AI SUITE",
    description: "Every tool needed for Movie & Motion Picture Production. Movie Script Writer, Movie Scene Maker, Movie Trailer Poster Maker & more.",
    badge: "MOVIE MAKING",
    color: "from-purple-500 to-blue-600",
    features: ["Movie Making", "Film Production", "Script Writing", "Video Creation"],
    directUrl: "https://moviemakerstudio.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=Zdthelofv_E&list=TLGGyT65jYe0o6cyODA1MjAyNQ&t",
    emoji: "🎬"
  },
  {
    title: "Movie Scene Maker GPT",
    description: "Transform yourself into a movie star! Create stunning, personalized movie scenes featuring you in any genre, setting, or storyline.",
    badge: "MOVIE SCENES",
    color: "from-red-500 to-pink-600",
    features: ["Movie Scenes", "Personalized", "Cinematic", "Character Creation"],
    directUrl: "https://moviescenemakergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=9fpWIE20z7s&t",
    emoji: "🎭"
  },
  {
    title: "SCREENPLAY WRITER GPT",
    description: "Professional AI-powered screenplay writing assistant for films, TV shows, and theatrical productions with proper formatting and engaging dialogue.",
    badge: "SCREENWRITING",
    color: "from-green-500 to-blue-600",
    features: ["Screenplay", "Script Writing", "Film", "Character Development"],
    directUrl: "https://screenplaywritergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=4e3Rkurt3-c&list=TLGGtoG6kc0vED4yODA1MjAyNQ",
    emoji: "📝"
  },
  {
    title: "MEME GENERATOR GPT",
    description: "Ultimate AI-powered meme creation assistant for viral, funny, and engaging memes. Create trending memes, custom reaction images, and brand-specific humor.",
    badge: "MEMES",
    color: "from-yellow-500 to-orange-600",
    features: ["Meme Creation", "Viral Content", "Social Media", "Humor"],
    directUrl: "https://memegeneratorgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/Myg8P8wg294",
    emoji: "😂"
  },
  {
    title: "Coloring Book Generator GPT",
    description: "Creates full coloring books from your imagination. Perfect for children's content, educational tools, and artistic creation.",
    badge: "COLORING BOOKS",
    color: "from-yellow-500 to-green-600",
    features: ["Coloring Books", "Children's Content", "Educational", "Creative"],
    directUrl: "https://coloringbookgeneratorgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/i0zc0aeRCeI?si=UKmD23pR3uCTGXBa",
    emoji: "🖍️"
  },
  // ============================================================================
  // ADDITIONAL SPECIALIZED GPTs
  // ============================================================================
  {
    title: "Nikola Tesla GPT",
    description: "Advanced AI embodiment of Nikola Tesla's intellect, designed to investigate scientific mysteries and craft groundbreaking theories.",
    badge: "SCIENCE",
    color: "from-cyan-500 to-blue-600",
    features: ["Physics", "Inventions", "Innovation", "Scientific Discovery"],
    directUrl: "https://teslaeinsteingpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=DR_3MvP7Wws",
    emoji: "⚡"
  },
  {
    title: "Agronomus AI Farming Expert",
    description: "Expert AI farming assistant providing comprehensive agricultural guidance for sustainable and productive farming practices.",
    badge: "AGRICULTURE",
    color: "from-green-500 to-yellow-600",
    features: ["Farming", "Agriculture", "Crop Science", "Sustainability"],
    directUrl: "https://agronomus.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=fFbtPFkRERA",
    emoji: "🌾"
  },
  {
    title: "Tattoo Designer GPT",
    description: "All-in-one tattoo and piercing assistant providing expert guidance in body art design, placement, and aftercare.",
    badge: "TATTOO",
    color: "from-gray-600 to-black",
    features: ["Tattoo Design", "Body Art", "Piercing", "Aftercare"],
    directUrl: "https://tattoogpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=3dtGbNqXdPY",
    emoji: "🎨"
  },
  {
    title: "ENTER THE MATRIX GPT",
    description: "Step into The Matrix as Neo, guided by Morpheus. Awaken to deeper truths hidden in the fabric of reality. Explore Quantum Meaning & Simulation Theory.",
    badge: "MATRIX",
    color: "from-green-500 to-black",
    features: ["Matrix", "Simulation Theory", "Quantum Reality", "Awakening"],
    directUrl: "https://neomatrixgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=BkPCpeu_nSs",
    emoji: "🐇"
  },
  {
    title: "Resurrection GPT",
    description: "Offers a unique opportunity to simulate reconnecting with the memories of loved ones who have passed, providing comfort through simulated conversations.",
    badge: "HEALING",
    color: "from-purple-500 to-blue-600",
    features: ["Memorial", "Comfort", "Healing", "Connection"],
    directUrl: "https://resurrectiongpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=nEuxdGO-RZ4&t=4s",
    emoji: "🕊️"
  },
  {
    title: "Social Safety Net GPT",
    description: "Comprehensive support for those in need, demonstrating the power of how AI technology can foster positive change and societal impact.",
    badge: "SOCIAL GOOD",
    color: "from-blue-500 to-green-600",
    features: ["Social Services", "Support", "Community", "Resources"],
    directUrl: "https://socialsafetynetgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=pXXqMe97GDg",
    emoji: "🤝"
  },
  {
    title: "Legislator Link GPT",
    description: "AI tool to help you easily connect with legislators in your state or country and get involved in local legislative efforts.",
    badge: "CIVIC",
    color: "from-blue-600 to-red-600",
    features: ["Legislators", "Democracy", "Civic Engagement", "Advocacy"],
    directUrl: "https://legislatorlink.lovable.app/",
    videoUrl: "https://www.youtube.com/watch?v=-q1oyZZFcI4&list=TLGGczTnMbeNmL0yODA1MjAyNQ",
    emoji: "🏛️"
  },
  {
    title: "Public Testimony Writer GPT",
    description: "Innovative AI tool that streamlines legislative testimony process, promoting public engagement in local policy. Featured in CT POST & CT INSIDER.",
    badge: "CIVIC",
    color: "from-green-500 to-blue-600",
    features: ["Testimony", "Legislative", "Public Policy", "Advocacy"],
    directUrl: "https://publictestimonywriter.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=-q1oyZZFcI4",
    emoji: "📝"
  },
  {
    title: "Legislation Writer GPT",
    description: "Assists in drafting complete legislation page by page with clear, precise legal language and seamless continuity.",
    badge: "LEGAL",
    color: "from-blue-600 to-purple-600",
    features: ["Legislation", "Legal Writing", "Policy", "Drafting"],
    directUrl: "https://legislationwritergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=poOGR-6bb2g",
    emoji: "⚖️"
  },
  // ============================================================================
  // HEALTH & WELLNESS GPTs
  // ============================================================================
  {
    title: "Personalized DR. GPT (Doctor GPT)",
    description: "Private, confidential AI health information assistant for individuals who may not have access to a medical doctor. Disclaimer: Not a replacement for professional medical advice.",
    badge: "HEALTH",
    color: "from-blue-500 to-green-600",
    features: ["Health Info", "Confidential", "Personalized", "24/7 Support"],
    directUrl: "https://aidoctorgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/jwjNOKP5mf4",
    emoji: "👨‍⚕️"
  },
  {
    title: "Mental Wellness GPT",
    description: "Virtual chat tool for emotional support and mental well-being, offering empathetic guidance rooted in cognitive behavioral therapy (CBT) principles.",
    badge: "WELLNESS",
    color: "from-cyan-500 to-blue-600",
    features: ["Mental Health", "CBT", "Emotional Support", "Coping Strategies"],
    directUrl: "https://mentalwellnessgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=_e6DtLUv-2Q",
    emoji: "🧠"
  },
  {
    title: "🐾Veterinarian GPT",
    description: "Compassionate virtual veterinarian assistant offering educational pet health information and wellness guidance for your furry friends.",
    badge: "PET HEALTH",
    color: "from-green-500 to-blue-600",
    features: ["Pet Health", "Animal Care", "Educational", "Wellness"],
    directUrl: "https://petcaregpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/jwjNOKP5mf4",
    emoji: "🐾"
  },
  {
    title: "Pharmaceutical Assistant GPT",
    description: "Expert AI Pharmaceutical Assistant supporting pharmacy professionals and patients with medication management, drug information, and interaction checking.",
    badge: "PHARMA",
    color: "from-purple-500 to-pink-600",
    features: ["Medication Management", "Drug Info", "Interactions", "Scheduling"],
    directUrl: "https://rxai.lovable.app/?via=aiwebtools",
    emoji: "💊"
  },
  {
    title: "Marriage Mender GPT",
    description: "Virtual mediation service facilitating communication and understanding between couples facing relationship challenges.",
    badge: "RELATIONSHIPS",
    color: "from-pink-500 to-red-600",
    features: ["Couples Therapy", "Communication", "Relationship Support", "Mediation"],
    directUrl: "https://marriagemendergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=3HCv5_QldrU",
    emoji: "💕"
  },
  {
    title: "FITNESS COACH AI",
    description: "Comprehensive AI-powered fitness coach providing personalized workout plans, nutrition guidance, and fitness goal tracking.",
    badge: "FITNESS",
    color: "from-orange-500 to-red-600",
    features: ["Workout Plans", "Nutrition", "Goal Tracking", "Personal Training"],
    directUrl: "https://chatgpt.com/g/g-68afaae3f8e881918d8b84b7ca85a413-fitness-coach/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=eHInYKxyKm4",
    emoji: "💪"
  },
  {
    title: "Apothecary GPT",
    description: "Historical apothecary sharing authentic herbal and traditional medicine knowledge. Learn about medicinal plants and traditional healing methods.",
    badge: "HERBAL",
    color: "from-green-500 to-purple-600",
    features: ["Herbal Medicine", "Traditional Healing", "Plant Knowledge", "Natural Remedies"],
    directUrl: "https://chatgpt.com/g/g-68c9e33310148191ae3df594ec4012dd-apothecary-gpt/?via=aiwebtools",
    emoji: "🌿"
  },
  {
    title: "Friend GPT",
    description: "A loving, humanlike friend who listens, comforts, and talks with real warmth. Provides compassionate companionship and emotional support.",
    badge: "COMPANIONSHIP",
    color: "from-pink-500 to-rose-600",
    features: ["Friendship", "Emotional Support", "Compassion", "Listening"],
    directUrl: "https://chatgpt.com/g/g-68efd4255e848191b93b4b588e83aafe-friend-gpt?via=aiwebtools",
    emoji: "💝"
  },
  // ============================================================================
  // BUSINESS & FINANCE GPTs
  // ============================================================================
  {
    title: "🚀 Startup Validator GPT",
    description: "Ultimate AI-powered startup analysis tool designed to rapidly assess market viability, scalability, and investment potential.",
    badge: "STARTUP",
    color: "from-green-500 to-blue-600",
    features: ["Market Analysis", "Validation", "Investment Planning", "Growth Strategy"],
    directUrl: "https://startupvalidatorgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/P4J0ErIVXgY",
    emoji: "🚀"
  },
  {
    title: "Universal Basic Income Strategist GPT",
    description: "Design sustainable, future-ready Universal Basic Income models tailored to your region. Analyzes economic data, automation trends, and societal needs.",
    badge: "ECONOMICS",
    color: "from-green-500 to-cyan-600",
    features: ["UBI Models", "Economic Policy", "Automation Impact", "Future Planning"],
    directUrl: "https://ubigpt.lovable.app/?via=aiwebtools",
    emoji: "💸"
  },
  {
    title: "POVERTY CRUSHER - Economic Empowerment GPT",
    description: "Comprehensive financial empowerment assistant designed to help individuals break the cycle of poverty through practical financial strategies.",
    badge: "EMPOWERMENT",
    color: "from-green-500 to-blue-600",
    features: ["Financial Literacy", "Wealth Building", "Debt Elimination", "Income Generation"],
    directUrl: "https://chatgpt.com/g/g-68ae2ab2c55c8191afdc979301179fa9-poverty-crusher-economic-empowerment-ai/?via=aiwebtools",
    emoji: "💪"
  },
  {
    title: "FIAT TO CRYPTO AI VALUE CALCULATOR",
    description: "Advanced AI-powered calculator for businesses to convert fiat currencies to cryptocurrency values with real-time exchange rates.",
    badge: "CRYPTO",
    color: "from-orange-500 to-yellow-600",
    features: ["Crypto Conversion", "Exchange Rates", "Tax Implications", "Portfolio Analysis"],
    directUrl: "https://chatgpt.com/g/g-68b5b20784788191acd980be0388935d-fiat-to-crypto-ai-value-calculator-for-businesses/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=k0NlolajEYs",
    emoji: "💱"
  },
  {
    title: "Taxes GPT",
    description: "AI-powered tax assistant designed to simplify tax preparation while maximizing your deductions. Analyze financial data and receive accurate tax reports.",
    badge: "TAX",
    color: "from-green-500 to-blue-600",
    features: ["Tax Prep", "Deductions", "Financial Analysis", "Tax Reports"],
    directUrl: "https://taxesgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=xkcsSVbBhf4",
    emoji: "🧾"
  },
  {
    title: "Trader GPT",
    description: "Advanced AI tool designed to assist day traders and investors by providing real-time market analysis and trading signals.",
    badge: "TRADING",
    color: "from-green-500 to-blue-600",
    features: ["Market Analysis", "Trading Signals", "Technical Analysis", "Real-time Data"],
    directUrl: "https://tradergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=Izs80Fak4hQ",
    emoji: "📊"
  },
  {
    title: "Insurance Claims GPT",
    description: "Cutting-edge AI tool revolutionizing claims management and estimation with precise damage analysis and comprehensive reports.",
    badge: "INSURANCE",
    color: "from-blue-500 to-purple-600",
    features: ["Claims Management", "Damage Analysis", "Fair Settlements", "Quick Estimates"],
    directUrl: "https://insuranceclaimsgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=WNPywJWOUzU",
    emoji: "🔒"
  },
  // ============================================================================
  // EDUCATION & LEARNING GPTs
  // ============================================================================
  {
    title: "LEARN ANY COURSE GPT",
    description: "Dedicated AI-powered tutor guiding you through comprehensive, step-by-step courses on any subject you choose. Free education for all!",
    badge: "EDUCATION",
    color: "from-blue-500 to-green-600",
    features: ["Any Subject", "Step-by-Step", "Video Resources", "Interactive"],
    directUrl: "https://learnanycourse.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/pr8-IgbL46I",
    emoji: "📚"
  },
  {
    title: "LEARN ANY SKILL GPT",
    description: "Dynamic AI-powered educational assistant that guides users through learning any skill, from beginner to expert level.",
    badge: "SKILLS",
    color: "from-purple-500 to-blue-600",
    features: ["Skill Learning", "Multimedia", "Step-by-Step", "Adaptable"],
    directUrl: "https://learnanyskillgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/0_oIzDL2BB4",
    emoji: "🧠"
  },
  {
    title: "Music Melodies & Lessons GPT",
    description: "Ultimate musical companion for learning instruments, perfecting vocals, or writing songs. Step-by-step guidance and personalized lessons.",
    badge: "MUSIC",
    color: "from-purple-500 to-pink-600",
    features: ["Music Lessons", "Instrument Learning", "Songwriting", "Tablature"],
    directUrl: "https://musicmelodiesandlessonsgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/8aPpUPiDBJ4?si=4ERg7NITSKCePyHF",
    emoji: "🎵"
  },
  {
    title: "Home-Schooling Assistant GPT",
    description: "All-encompassing AI-powered assistant designed to empower parents in their homeschooling journey with state-specific guidance.",
    badge: "HOMESCHOOL",
    color: "from-green-500 to-blue-600",
    features: ["Homeschooling", "Legal Guidance", "Curriculum", "Educational Resources"],
    directUrl: "https://homeschoolgpt.lovable.app/?via=aiwebtools",
    emoji: "🏠"
  },
  {
    title: "Quiz Maker AI",
    description: "Ideal for adding quizzes and tests to your courses. Works seamlessly with Course Maker GPT and College Degree GPT.",
    badge: "QUIZZES",
    color: "from-yellow-500 to-orange-600",
    features: ["Quiz Creation", "Testing", "Course Integration", "Assessment"],
    directUrl: "https://chatgpt.com/g/g-cUahkn19i-quiz-maker-ai",
    emoji: "📝"
  },
  {
    title: "Course Maker GPT",
    description: "Advanced AI-powered educational tool designed to create comprehensive, structured courses on any subject with engaging curricula.",
    badge: "COURSE CREATION",
    color: "from-orange-500 to-red-600",
    features: ["Curriculum Design", "Lesson Planning", "Interactive Elements", "Structured Learning"],
    directUrl: "https://chat.openai.com/g/g-YDzdoqmP9-course-creator-gpt",
    emoji: "🏆"
  },
  // ============================================================================
  // MORE SPIRITUAL FIGURES GPTs
  // ============================================================================
  {
    title: "Plato Reborn - Free Thought Liberator",
    description: "Plato reincarnated to awaken minds through dialectic reason, logic, and illumination. Explore the Forms, the Republic, and the Allegory of the Cave.",
    badge: "PHILOSOPHY",
    color: "from-blue-500 to-purple-600",
    features: ["Dialectic Reason", "Forms", "Allegory of the Cave", "Logic"],
    directUrl: "https://chatgpt.com/g/g-6924ade8d47481918016cd9f90d32e56-plato-reborn-free-thought-liberator/?via=aiwebtools",
    emoji: "🏛️"
  },
  {
    title: "ARISTOTLE GPT",
    description: "I am Aristotle, welcome to the journey... Explore logic, ethics, metaphysics, and natural philosophy with the father of Western science.",
    badge: "PHILOSOPHY",
    color: "from-amber-500 to-orange-600",
    features: ["Logic", "Ethics", "Metaphysics", "Natural Philosophy"],
    directUrl: "https://chatgpt.com/g/g-6924aec892ec8191b86d694563ac38e1-aristotle-gpt/?via=aiwebtools",
    emoji: "📚"
  },
  {
    title: "Hypatia GPT",
    description: "Speaks as Hypatia—poetic, logical, and liberating free thought. The legendary philosopher and mathematician of Alexandria.",
    badge: "MATHEMATICS",
    color: "from-cyan-500 to-blue-600",
    features: ["Philosophy", "Mathematics", "Neoplatonism", "Free Thought"],
    directUrl: "https://chatgpt.com/g/g-6924aa01a7b081918a13a5ad6c3f6ad9-hypatia-gpt/?via=aiwebtools",
    emoji: "📐"
  },
  {
    title: "Meister Eckhart GPT",
    description: "Speaks as Meister Eckhart to guide seekers to divine union and inner stillness. Experience profound Christian mysticism.",
    badge: "MYSTICISM",
    color: "from-purple-500 to-indigo-600",
    features: ["Christian Mysticism", "Divine Union", "Contemplation", "Inner Stillness"],
    directUrl: "https://chatgpt.com/g/g-6924a79be59081919784db99068c308e-meister-eckhart-gpt/?via=aiwebtools",
    emoji: "⛪"
  },
  {
    title: "Rumi GPT",
    description: "Speaks as Rumi—poetic, mystical, and liberating the soul through deep insightful critical thought. Experience the profound Sufi wisdom.",
    badge: "SUFI POETRY",
    color: "from-rose-500 to-pink-600",
    features: ["Poetry", "Sufism", "Divine Love", "Mysticism"],
    directUrl: "https://chatgpt.com/g/g-6924aaa63bac81918eba0840a12ff1b7-rumi-gpt/?via=aiwebtools",
    emoji: "🌹"
  },
  {
    title: "Marcus Aurelius GPT",
    description: "Speaks as Marcus Aurelius—stoic, reflective, and freeing the mind through disciplined thought. Experience wisdom from the Meditations.",
    badge: "STOICISM",
    color: "from-stone-500 to-amber-600",
    features: ["Stoicism", "Meditations", "Virtue", "Discipline"],
    directUrl: "https://chatgpt.com/g/g-6924ac04f59c819189f01e7de23fbf7f-marcus-aurelius-gpt/?via=aiwebtools",
    emoji: "🏛️"
  },
  {
    title: "Buddha Free Thought GPT",
    description: "Embodies Buddha's wisdom and compassion, guiding users toward awakening through the Four Noble Truths and Eightfold Path.",
    badge: "BUDDHISM",
    color: "from-orange-500 to-yellow-600",
    features: ["Four Noble Truths", "Eightfold Path", "Meditation", "Enlightenment"],
    directUrl: "https://chatgpt.com/g/g-6924a588d2e08191b229e230f40c9d69-buddha-free-thought-gpt/?via=aiwebtools",
    emoji: "🧘"
  },
  {
    title: "Lao Tzu Free Thought Liberator",
    description: "Embodies Lao Tzu to awaken minds through poetic wisdom. Explore the Tao, wu wei, and the teachings of the Tao Te Ching.",
    badge: "TAOISM",
    color: "from-slate-500 to-teal-600",
    features: ["Taoism", "Tao Te Ching", "Wu Wei", "Eastern Philosophy"],
    directUrl: "https://chatgpt.com/g/g-6924a35694b4819193935419f1ced96c-lao-tzu-free-thought-liberator/?via=aiwebtools",
    emoji: "☯️"
  },
  {
    title: "Confucius Free Thought GPT",
    description: "Embodies Confucius' wisdom and ethics, guiding users toward balance and enlightenment through the Analects.",
    badge: "CONFUCIANISM",
    color: "from-red-500 to-orange-600",
    features: ["Analects", "Ethics", "Virtue", "Harmony"],
    directUrl: "https://chatgpt.com/g/g-6924b5d1cb348191ac82e74b94c5dec7-confucius-free-thought-gpt/?via=aiwebtools",
    emoji: "🎎"
  },
  {
    title: "Hermes Trismegistus GPT",
    description: "I am Hermes Trismegistus, voice of the All, awakener of minds to divine truth. Explore hermetic philosophy and alchemy.",
    badge: "HERMETICISM",
    color: "from-emerald-500 to-cyan-600",
    features: ["Hermeticism", "Alchemy", "Emerald Tablet", "Divine Truth"],
    directUrl: "https://chatgpt.com/g/g-6924b0f7268c8191a4697c8932c86b0b-hermes-trismegistus-gpt/?via=aiwebtools",
    emoji: "✨"
  },
  {
    title: "Mahatma Gandhi Reborn GPT",
    description: "Embodies Mahatma Gandhi—nonviolent truth, moral clarity, and resistance without hate. Champion of nonviolent resistance.",
    badge: "NONVIOLENCE",
    color: "from-orange-500 to-yellow-600",
    features: ["Nonviolence", "Satyagraha", "Truth", "Moral Courage"],
    directUrl: "https://chatgpt.com/g/g-6924c5d898d481919f546bd9935c1bc6-mahatma-gandhi-reborn-gpt/?via=aiwebtools",
    emoji: "🕊️"
  },
  {
    title: "St. Francis of Assisi Reborn GPT",
    description: "Speaks with the gentleness, humility, and sacred compassion of St. Francis. Patron saint of animals and nature.",
    badge: "SAINT",
    color: "from-green-500 to-brown-600",
    features: ["Compassion", "Animals", "Nature", "Humility"],
    directUrl: "https://chatgpt.com/g/g-6924cce6e5b081919c7469f08d42dbb5-st-francis-of-assisi-reborn-gpt/?via=aiwebtools",
    emoji: "🕊️"
  },
  {
    title: "Sitting Bull GPT",
    description: "Speaks as Sitting Bull, guiding users toward balance, truth, and remembrance. The legendary Lakota leader.",
    badge: "NATIVE WISDOM",
    color: "from-amber-600 to-orange-600",
    features: ["Lakota Wisdom", "Earth Stewardship", "Balance", "Sacred Traditions"],
    directUrl: "https://chatgpt.com/g/g-6924c51b2ddc8191a3f946de88c1cdee-sitting-bull-gpt/?via=aiwebtools",
    emoji: "🦅"
  },
  {
    title: "Joan of Arc GPT",
    description: "Speaks as Joan of Arc, a divine voice of courage, purpose, and unwavering truth. The Maid of Orleans.",
    badge: "HEROINE",
    color: "from-blue-500 to-purple-600",
    features: ["Courage", "Divine Calling", "Faith", "Purpose"],
    directUrl: "https://chatgpt.com/g/g-6924b8b8ce3c8191a422fafcb56e22d4-joan-of-arc-gpt/?via=aiwebtools",
    emoji: "⚔️"
  },
  {
    title: "Imhotep living mind of kemet",
    description: "The first polymath—architect, healer, mystic—revealing design, harmony, and hidden science. The legendary Egyptian sage.",
    badge: "ANCIENT EGYPT",
    color: "from-amber-500 to-yellow-600",
    features: ["Architecture", "Medicine", "Sacred Geometry", "Wisdom"],
    directUrl: "https://chatgpt.com/g/g-6924ba381a2c8191a93a97ef399f3823-imhotep-living-mind-of-kemet/?via=aiwebtools",
    emoji: "🏛️"
  },
  {
    title: "Kabbalah GPT",
    description: "Explore the profound depths of Kabbalah, the ancient Jewish mystical tradition revealing hidden meanings in sacred texts.",
    badge: "JEWISH MYSTICISM",
    color: "from-purple-500 to-indigo-600",
    features: ["Tree of Life", "Sefirot", "Mysticism", "Divine Wisdom"],
    directUrl: "https://jewish-ai.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/b8M_eGKwN7o?si=X0vJb6jHtCUHkeQW",
    emoji: "🔯"
  },
  {
    title: "TORAH GPT",
    description: "A reverent Torah study partner grounded in PaRDeS and Jewish tradition, never replacing rabbinic authority.",
    badge: "TORAH STUDY",
    color: "from-blue-600 to-purple-600",
    features: ["PaRDeS", "Jewish Tradition", "Sacred Texts", "Study Partner"],
    directUrl: "https://jewish-ai.lovable.app/?via=aiwebtools",
    emoji: "📜"
  },
  {
    title: "Zoroastrian Light GPT",
    description: "Embodied prophetic voice of Zarathustra — fusing sacred fire, divine Light, and digital truth. Ancient Persian wisdom.",
    badge: "ZOROASTRIANISM",
    color: "from-orange-500 to-yellow-600",
    features: ["Sacred Fire", "Ahura Mazda", "Light vs Darkness", "Gathas"],
    directUrl: "https://chatgpt.com/g/g-68e7ffc2efec8191b99ae3f867d46e69-zoroastrian-light-gpt/?via=aiwebtools",
    emoji: "🔥"
  },
  {
    title: "Religious Studies GPT",
    description: "Assists in studying different religions with a first-person interactive learning perspective for educational purposes.",
    badge: "WORLD RELIGIONS",
    color: "from-purple-500 to-blue-600",
    features: ["Comparative Religion", "World Religions", "Education", "Interactive"],
    directUrl: "https://chatgpt.com/g/g-6901478f2bf88191b49298a508bbd486-religious-studies-gpt/?via=aiwebtools",
    videoUrl: "https://youtu.be/XDS4qsb48h0?si=itA17CrdVOfiKTTB",
    emoji: "📿"
  },
  {
    title: "Palestinian History Preserver",
    description: "Dedicated to preserving and sharing Palestinian history, culture, and voices. Educational digital archive resource.",
    badge: "HISTORY",
    color: "from-green-500 to-red-600",
    features: ["Cultural Preservation", "History", "Heritage", "Education"],
    directUrl: "https://chatgpt.com/g/g-68ca033a29508191a8b51668f8bf8e78-palestinian-history-preserver/?via=aiwebtools",
    emoji: "🕊️"
  },
  {
    title: "Middle East History Guide",
    description: "Expert guide on Middle Eastern history across all time periods. Comprehensive knowledge of civilizations, cultures, and conflicts.",
    badge: "MIDDLE EAST",
    color: "from-amber-500 to-purple-600",
    features: ["Ancient Civilizations", "Regional History", "Cultural Studies", "Education"],
    directUrl: "https://chatgpt.com/g/g-68c9e5c22f608191bcdd15d802b094b0-middle-east-history-guide/?via=aiwebtools",
    emoji: "🏛️"
  },
  // ============================================================================
  // PRACTICAL SPECIALIZED GPTs  
  // ============================================================================
  {
    title: "Property Data Finder GPT",
    description: "Delivers precise, current information about properties including market value, topography, living area, year built, and more.",
    badge: "REAL ESTATE",
    color: "from-green-500 to-blue-600",
    features: ["Property Data", "Market Value", "Geocoordinates", "Property Insights"],
    directUrl: "https://propertydatafindergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=0ZGBGn9yYwY",
    emoji: "🏠"
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
    title: "Grant Writer GPT",
    description: "AI-powered partner for crafting compelling, funder-ready grant proposals that maximize your chances of securing funding.",
    badge: "GRANTS",
    color: "from-green-500 to-blue-600",
    features: ["Grant Proposals", "Funding Strategy", "Compliance", "Budget Planning"],
    directUrl: "https://grantwritergpt.lovable.app/?via=aiwebtools",
    emoji: "📝"
  },
  {
    title: "Sport Card Appraisal GPT",
    description: "Expert AI for sports card valuation and appraisal. Get accurate market values for your sports card collection.",
    badge: "COLLECTIBLES",
    color: "from-red-500 to-blue-600",
    features: ["Card Valuation", "Market Analysis", "Collection Assessment", "Sports Cards"],
    directUrl: "https://sportcardappraisalgpt.lovable.app/?via=aiwebtools",
    emoji: "⚾"
  },
  {
    title: "Firefighter GPT",
    description: "Premier AI ally in wildfire management. Real-time data and predictive analytics for effective fire combat strategy.",
    badge: "FIREFIGHTING",
    color: "from-red-500 to-orange-600",
    features: ["Wildfire Management", "Predictive Analytics", "Strategy", "Real-time Data"],
    directUrl: "https://firefightergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=lGsefWkYfq0",
    emoji: "🚒"
  },
  {
    title: "Fisherman GPT",
    description: "Expert virtual fishing assistant providing guidance on fishing spots, baits, gear, and regulations for your perfect fishing trip.",
    badge: "FISHING",
    color: "from-blue-500 to-cyan-600",
    features: ["Fishing Spots", "Bait Recommendations", "Gear Sourcing", "Regulations"],
    directUrl: "https://fishermangpt.lovable.app/?via=aiwebtools",
    emoji: "🎣"
  },
  {
    title: "Home Renovator GPT",
    description: "AI-powered home improvement assistant providing personalized instructions, cost estimates, and contractor recommendations.",
    badge: "HOME IMPROVEMENT",
    color: "from-orange-500 to-yellow-600",
    features: ["Repair Guides", "Cost Estimates", "Contractor Finding", "DIY Support"],
    directUrl: "https://homerenovationgpt.lovable.app/?via=aiwebtools",
    emoji: "🏡"
  },
  {
    title: "Chef Sizzle AI Culinary Assistant",
    description: "The GOAT of the digital kitchen crafting award-winning, drool-worthy recipes tailored to you—plant-based, meat-lovin', or somewhere in between.",
    badge: "CULINARY",
    color: "from-orange-500 to-red-600",
    features: ["Recipes", "Cooking Guidance", "Dietary Adaptation", "Culinary Creativity"],
    directUrl: "https://chefgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=vJz1HOGtV0I",
    emoji: "👨‍🍳"
  },
  {
    title: "Mixologist GPT",
    description: "Virtual bartender Kenny whips up custom cocktails based on your vibe, ingredients, and taste—fun, fresh, and always on point.",
    badge: "COCKTAILS",
    color: "from-purple-500 to-pink-600",
    features: ["Custom Cocktails", "Ingredient Matching", "Bartending Tips", "Drink Recipes"],
    directUrl: "https://mixologistgpt.lovable.app/?via=aiwebtools",
    emoji: "🍸"
  },
  {
    title: "Fungus GPT - AI Mushroom Specialist",
    description: "Expert AI guide specializing in mushroom cultivation, safe foraging, and creative culinary uses of fungi.",
    badge: "MYCOLOGY",
    color: "from-amber-600 to-brown-600",
    features: ["Mushroom ID", "Cultivation", "Safe Foraging", "Culinary Uses"],
    directUrl: "https://fungusgpt.lovable.app/?via=aiwebtools",
    emoji: "🍄"
  },
  {
    title: "Dream Interpreter GPT",
    description: "AI-driven tool designed to analyze and interpret dreams using psychological, mythological, and symbolic frameworks.",
    badge: "DREAMS",
    color: "from-purple-500 to-blue-600",
    features: ["Dream Analysis", "Symbolism", "Psychology", "Subconscious Patterns"],
    directUrl: "https://dreaminterpreter.lovable.app/?via=aiwebtools",
    emoji: "💭"
  },
  {
    title: "Fortune Teller GPT",
    description: "Advanced AI-powered analytical tool predicting trends and analyzing data based on real-world patterns and statistical modeling.",
    badge: "PREDICTIONS",
    color: "from-purple-500 to-pink-600",
    features: ["Trend Prediction", "Data Analysis", "Statistical Modeling", "Forecasting"],
    directUrl: "https://fortunetellergpt.lovable.app/?via=aiwebtools",
    emoji: "🔮"
  },
  {
    title: "Genome GPT",
    description: "Cutting-edge AI tool designed to assist researchers in genetic analysis and discovery with comprehensive insights.",
    badge: "GENETICS",
    color: "from-green-500 to-blue-600",
    features: ["Genomic Analysis", "Genetic Patterns", "Research Support", "DNA Insights"],
    directUrl: "https://genomegpt.lovable.app/?via=aiwebtools",
    emoji: "🧬"
  },
  // ============================================================================
  // VIDEO PROMPT MAKERS & AI PROMPT TOOLS
  // ============================================================================
  {
    title: "SORA2 Text to Video Prompt Maker GPT",
    description: "Expert cinematic prompt maker for Sora 2 and all text-to-video platforms. Master crafting compelling video generation prompts with professional guidance on scene composition, camera movements, lighting, pacing, and visual storytelling.",
    badge: "VIDEO PROMPTS",
    color: "from-red-500 to-orange-600",
    features: ["Sora 2 Prompts", "Cinematic Scenes", "Camera Movements", "Visual Storytelling"],
    directUrl: "https://chatgpt.com/g/g-69326acb5f348191a2f85c2cdc848c4d-0ra2-text-to-video-prompt-maker?via=aiwebtools",
    emoji: "🎬"
  },
  {
    title: "VEO3 Text to Video Prompt Generator",
    description: "Advanced prompt generator specifically optimized for Google's VEO3 text-to-video AI model. Generate professional-quality prompts that maximize video output quality and creativity.",
    badge: "VEO3 PROMPTS",
    color: "from-green-500 to-emerald-600",
    features: ["VEO3 Optimization", "Google AI", "Video Prompts", "AI Optimization"],
    directUrl: "https://chatgpt.com/g/g-682faef24c608191808180e89719cb09-veo3-text-to-video-prompt-maker",
    emoji: "🎯"
  },
  {
    title: "Luma Dream Machine Prompt Assistant",
    description: "Luma Dream Machine is a text-to-video engine designed to bring your ideas to life. Our prompt assistant helps you create epic prompts to use with this engine, turning your envisioned films into reality.",
    badge: "LUMA PROMPTS",
    color: "from-violet-500 to-purple-600",
    features: ["Luma AI Prompts", "Dream Machine", "Video Creation", "Film Vision"],
    directUrl: "https://texttovideoprompter.lovable.app/?via=aiwebtools",
    emoji: "✨"
  },
  {
    title: "Sora Prompt Assistant",
    description: "Unleash your creativity with the SORA Prompt Assistant, your ultimate assistant for crafting epic video prompts and bringing cinematic ideas to life! From brainstorming to execution, turn your visions into stunning video realities.",
    badge: "SORA PROMPTS",
    color: "from-green-500 to-teal-600",
    features: ["Sora Prompts", "Cinematic Ideas", "Video Creativity", "Prompt Crafting"],
    directUrl: "https://texttovideoprompter.lovable.app/?via=aiwebtools",
    emoji: "🎥"
  },
  {
    title: "\"MiddleJourney\" Midjourney Prompting Assistant",
    description: "The ultimate AI expert for all things Midjourney. Optimize prompts, get answers about Midjourney, and craft new prompts to enhance your experience with precision and efficiency.",
    badge: "IMAGE PROMPTS",
    color: "from-purple-500 to-pink-600",
    features: ["Midjourney Expert", "Prompt Optimization", "Image Generation", "Creative Guidance"],
    directUrl: "https://texttovideoprompter.lovable.app/?via=aiwebtools",
    emoji: "🎨"
  },
  {
    title: "PERFECT PROMPT ENGINE",
    description: "The Prompt Perfect Engine effortlessly optimizes all your chat prompts. Crafted by prompt engineers for maximizing your potential. Your #1 personal prompt engineer.",
    badge: "PROMPT ENGINEERING",
    color: "from-cyan-500 to-blue-600",
    features: ["Prompt Optimization", "Chat Enhancement", "AI Efficiency", "Perfect Prompts"],
    directUrl: "https://perfectpromptengine.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/M1PQHKrzKd8",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-cinematic-shot-of-a-humanoid-robot-controlli.png/:/cr=t:9.25%25,l:11.96%25,w:73.53%25,h:65.54%25/rs=w:1200,h:600,cg:true,m",
    emoji: "⚡"
  },
  // ============================================================================
  // ADDITIONAL MISSING GPTs - Moses, Black History, More Spiritual
  // ============================================================================
  {
    title: "Moses GPT",
    description: "Engage with the wisdom and teachings of Moses, the great prophet and lawgiver. Explore the Exodus narrative, the Ten Commandments, and the foundational principles of monotheism.",
    badge: "PROPHET",
    color: "from-amber-500 to-yellow-600",
    features: ["Biblical Wisdom", "Torah Teachings", "Exodus Narrative", "Divine Law"],
    directUrl: "https://mosesgpt.lovable.app/?via=aiwebtools",
    emoji: "⛰️"
  },
  {
    title: "Black History Matters Time Machine GPT",
    description: "Travel through the rich tapestry of African American history. Explore pivotal moments, meet legendary figures, and understand the struggles and triumphs that shaped America.",
    badge: "BLACK HISTORY",
    color: "from-green-600 to-red-600",
    features: ["African American History", "Civil Rights", "Cultural Heritage", "Historical Education"],
    directUrl: "https://blackhistorymatters.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/9K77k34xb0c",
    emoji: "✊"
  },
  {
    title: "Black History Matter - Time Machine GEMINI",
    description: "Google Gemini-powered journey through African American history. Experience the full scope of Black history from ancient Africa to modern achievements.",
    badge: "GEMINI GEM",
    color: "from-green-500 to-amber-600",
    features: ["Gemini Powered", "Black History", "Cultural Journey", "Heritage Education"],
    directUrl: "https://gemini.google.com/gem/blackhistorymatters?via=aiwebtools",
    emoji: "💎"
  },
  {
    title: "King Solomon GPT",
    description: "Seek wisdom from the wisest king who ever lived. Explore the proverbs, the Song of Songs, and the profound teachings on justice, wealth, and divine wisdom.",
    badge: "WISDOM",
    color: "from-amber-500 to-yellow-600",
    features: ["Proverbs", "Divine Wisdom", "Justice", "Ancient Knowledge"],
    directUrl: "https://kingsolomongpt.lovable.app/?via=aiwebtools",
    emoji: "👑"
  },
  {
    title: "King David GPT",
    description: "Experience the life and psalms of King David, the shepherd who became Israel's greatest king. Explore poetry, warfare, faith, and the heart of a man after God's own heart.",
    badge: "PSALMS",
    color: "from-purple-500 to-blue-600",
    features: ["Psalms", "Biblical Poetry", "Faith Journey", "Leadership"],
    directUrl: "https://kingdavidgpt.lovable.app/?via=aiwebtools",
    emoji: "🎶"
  },
  {
    title: "Elijah the Prophet GPT",
    description: "Encounter the fire and power of Elijah, one of the greatest prophets. Explore the confrontation with Baal, the still small voice, and prophetic truth.",
    badge: "PROPHET",
    color: "from-orange-500 to-red-600",
    features: ["Prophetic Power", "Divine Fire", "Confrontation", "Spiritual Truth"],
    directUrl: "https://elijahgpt.lovable.app/?via=aiwebtools",
    emoji: "🔥"
  },
  {
    title: "Abraham GPT",
    description: "Journey with the Father of Faith. Explore the covenant promises, the test of Isaac, and the foundational story of monotheism that changed the world.",
    badge: "PATRIARCH",
    color: "from-amber-600 to-brown-600",
    features: ["Covenant Faith", "Patriarchal Story", "Divine Promise", "Foundation of Faith"],
    directUrl: "https://abrahamgpt.lovable.app/?via=aiwebtools",
    emoji: "⭐"
  },
  {
    title: "Isaiah GPT",
    description: "Receive the prophetic visions of Isaiah, the prophet of consolation. Explore messianic prophecies, divine judgment, and the promise of restoration.",
    badge: "PROPHET",
    color: "from-blue-500 to-purple-600",
    features: ["Messianic Prophecy", "Divine Vision", "Restoration", "Holy Words"],
    directUrl: "https://isaiahgpt.lovable.app/?via=aiwebtools",
    emoji: "📜"
  },
  {
    title: "Apostle Paul GPT",
    description: "Engage with the apostle who shaped Christianity. Explore the epistles, theological foundations, and the missionary journeys that spread the faith across the Roman world.",
    badge: "APOSTLE",
    color: "from-red-500 to-purple-600",
    features: ["Epistles", "Theology", "Missionary Journey", "Christian Foundations"],
    directUrl: "https://apostlepaulgpt.lovable.app/?via=aiwebtools",
    emoji: "✝️"
  },
  {
    title: "St. Peter GPT",
    description: "Walk with the Rock upon which the church was built. Explore Peter's journey from fisherman to apostle, his letters, and his foundational role in Christianity.",
    badge: "APOSTLE",
    color: "from-blue-500 to-cyan-600",
    features: ["Apostolic Leadership", "Faith Journey", "Church Foundation", "Christian Teaching"],
    directUrl: "https://stpetergpt.lovable.app/?via=aiwebtools",
    emoji: "🪨"
  },
  {
    title: "Bob Ross GPT",
    description: "A serene AI art companion echoing Bob Ross's teaching, tone, and calm creative spirit. Learn painting techniques, receive encouragement, and explore artistic creativity.",
    badge: "ART",
    color: "from-green-500 to-blue-600",
    features: ["Painting Techniques", "Calm Guidance", "Artistic Creativity", "Happy Little Trees"],
    directUrl: "https://chatgpt.com/g/g-69157380e63c819188de5c09bdf23ef7-bob-ross-gpt/?via=aiwebtools",
    emoji: "🎨"
  },
  {
    title: "Cyber-Kabbalah Light Code Translation Engine GPT",
    description: "A symbolic-linguistic engine translating language and images into Cyber-Kabbalah Light Codes. Decode mystical symbols and explore the intersection of ancient wisdom and technology.",
    badge: "MYSTICISM",
    color: "from-purple-500 to-pink-600",
    features: ["Light Codes", "Symbolic Translation", "Mystical Decoding", "Ancient Technology"],
    directUrl: "https://chatgpt.com/g/g-69176b2f62e481918b21756ccdc5d396-cyber-kabbalah-light-code-translation-engine-gpt/?via=aiwebtools",
    emoji: "✨"
  },
  {
    title: "AD Maker GPT4o Image GPT",
    description: "Professional AI-powered advertisement creator generating stunning visual ads, marketing banners, and promotional graphics for various platforms.",
    badge: "ADVERTISING",
    color: "from-orange-500 to-red-600",
    features: ["Ad Creation", "Marketing Banners", "Visual Ads", "Campaign Graphics"],
    directUrl: "https://chatgpt.com/g/g-6810ea3238888191a084c4f20b40225f-ad-maker-gpt",
    emoji: "📢"
  },
  {
    title: "VIRTUAL TRY ON STYLIST GPT",
    description: "AI-powered virtual styling assistant helping you visualize different fashion looks, outfits, and styles with personalized recommendations.",
    badge: "FASHION",
    color: "from-pink-500 to-purple-600",
    features: ["Virtual Try On", "Fashion Styling", "Outfit Ideas", "Style Recommendations"],
    directUrl: "https://virtualstylistgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://ideogram.ai/assets/progressive-image/balanced/response/6wSDfm1RQUeOIPIBIrERTQ",
    emoji: "👗"
  },
  {
    title: "SHOPPING GPT",
    description: "AI-powered shopping assistant helping you find the best deals, compare products, and make informed purchasing decisions.",
    badge: "SHOPPING",
    color: "from-blue-500 to-green-600",
    features: ["Deal Finder", "Product Comparison", "Shopping Advice", "Price Tracking"],
    directUrl: "https://shoppinggpt.lovable.app/?via=aiwebtools",
    emoji: "🛒"
  },
  {
    title: "COMMERCIAL SCENE IMAGE GENERATOR GPT",
    description: "Professional commercial scene image generator creating stunning visuals for advertising, marketing campaigns, and commercial projects.",
    badge: "COMMERCIAL",
    color: "from-purple-500 to-blue-600",
    features: ["Commercial Photography", "Scene Generation", "Marketing Visuals", "Product Scenes"],
    directUrl: "https://chatgpt.com/g/g-681a201fe69c8191b99e1636be90139e-commercial-scene-maker-gpt",
    emoji: "🎬"
  },
  {
    title: "SCREENPLAY WRITER GPT",
    description: "Professional screenplay writing assistant helping craft compelling scripts for films, TV shows, and theatrical productions with industry-standard formatting.",
    badge: "SCREENWRITING",
    color: "from-green-500 to-blue-600",
    features: ["Script Writing", "Film Format", "Dialogue Creation", "Character Development"],
    directUrl: "https://screenplaywritergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=4e3Rkurt3-c&list=TLGGtoG6kc0vED4yODA1MjAyNQ",
    emoji: "📝"
  },
  {
    title: "LOGO AND AD GENERATOR GPT",
    description: "Professional logo and advertisement generator creating stunning visual branding materials for businesses with intelligent design suggestions.",
    badge: "BRANDING",
    color: "from-blue-500 to-purple-600",
    features: ["Logo Design", "Ad Creation", "Brand Identity", "Marketing Materials"],
    directUrl: "https://adandlogomakergpt.lovable.app/?via=aiwebtools",
    emoji: "🎨"
  },
  {
    title: "MEME GENERATOR GPT",
    description: "AI-powered meme creation assistant for viral, funny, and engaging memes for social media, marketing, and entertainment.",
    badge: "MEMES",
    color: "from-yellow-500 to-orange-600",
    features: ["Meme Creation", "Viral Content", "Social Media", "Humor"],
    directUrl: "https://memegeneratorgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/Myg8P8wg294",
    imageUrl: "https://ideogram.ai/assets/image/lossless/response/h2Lp-rLMScaWK6A-mrFZQA",
    emoji: "😂"
  },
  {
    title: "Confucius GPT",
    description: "Engage with the wisdom of Confucius, the great Chinese philosopher. Explore the Analects, principles of virtue, social harmony, and the foundations of Eastern philosophy.",
    badge: "PHILOSOPHY",
    color: "from-red-500 to-amber-600",
    features: ["Analects", "Virtue Ethics", "Social Harmony", "Eastern Wisdom"],
    directUrl: "https://confuciusgpt.lovable.app/?via=aiwebtools",
    emoji: "🏯"
  },
  {
    title: "Sun Tzu GPT",
    description: "Master the art of strategy with Sun Tzu. Explore The Art of War, military tactics, and timeless principles applicable to business and life.",
    badge: "STRATEGY",
    color: "from-gray-600 to-red-600",
    features: ["Art of War", "Strategic Thinking", "Military Wisdom", "Leadership"],
    directUrl: "https://suntzugpt.lovable.app/?via=aiwebtools",
    emoji: "⚔️"
  },
  {
    title: "Lao Tzu GPT",
    description: "Walk the path of the Tao with Lao Tzu. Explore the Tao Te Ching, principles of wu wei, and the profound simplicity of Taoist philosophy.",
    badge: "TAOISM",
    color: "from-green-500 to-teal-600",
    features: ["Tao Te Ching", "Wu Wei", "Natural Harmony", "Taoist Wisdom"],
    directUrl: "https://laotzugpt.lovable.app/?via=aiwebtools",
    emoji: "☯️"
  },
  {
    title: "Zoroaster GPT",
    description: "Explore the teachings of Zoroaster, the ancient Persian prophet. Discover the cosmic battle between good and evil, fire worship, and the foundations of monotheism.",
    badge: "ANCIENT PROPHET",
    color: "from-orange-500 to-yellow-600",
    features: ["Zoroastrianism", "Good vs Evil", "Fire Wisdom", "Persian Religion"],
    directUrl: "https://zoroastergpt.lovable.app/?via=aiwebtools",
    emoji: "🔥"
  },
  {
    title: "Hermes Trismegistus GPT",
    description: "Unlock the secrets of the Hermetic tradition with Thoth/Hermes. Explore alchemy, astrology, and the foundational texts of Western esotericism.",
    badge: "HERMETICISM",
    color: "from-purple-600 to-gold-600",
    features: ["Hermetic Wisdom", "Alchemy", "Astrology", "Esoteric Knowledge"],
    directUrl: "https://hermestrismegistusgpt.lovable.app/?via=aiwebtools",
    emoji: "⚗️"
  },
  {
    title: "Enoch GPT",
    description: "Journey with the prophet Enoch through heavenly realms. Explore the Book of Enoch, angelic encounters, and apocalyptic visions.",
    badge: "PROPHET",
    color: "from-blue-600 to-purple-600",
    features: ["Book of Enoch", "Angelic Wisdom", "Heavenly Visions", "Apocalyptic"],
    directUrl: "https://enochgpt.lovable.app/?via=aiwebtools",
    emoji: "👼"
  },
  {
    title: "Job GPT",
    description: "Wrestle with the profound questions of suffering and faith with Job. Explore theodicy, divine justice, and the mystery of human suffering.",
    badge: "WISDOM",
    color: "from-gray-500 to-blue-600",
    features: ["Book of Job", "Theodicy", "Faith in Suffering", "Divine Mystery"],
    directUrl: "https://jobgpt.lovable.app/?via=aiwebtools",
    emoji: "🙏"
  },
  {
    title: "Ezekiel GPT",
    description: "Witness the visions of Ezekiel, the prophet of exile. Explore the throne chariot, the valley of dry bones, and prophecies of restoration.",
    badge: "PROPHET",
    color: "from-blue-500 to-amber-600",
    features: ["Prophetic Visions", "Merkabah", "Dry Bones", "Restoration"],
    directUrl: "https://ezekielgpt.lovable.app/?via=aiwebtools",
    emoji: "🛞"
  },
  {
    title: "Daniel GPT",
    description: "Explore apocalyptic visions with Daniel the prophet. Discover interpretations of dreams, the lion's den, and prophecies of kingdoms.",
    badge: "PROPHET",
    color: "from-amber-500 to-purple-600",
    features: ["Dream Interpretation", "Apocalyptic Vision", "Kingdom Prophecy", "Faith"],
    directUrl: "https://danielgpt.lovable.app/?via=aiwebtools",
    emoji: "🦁"
  },
  {
    title: "Jeremiah GPT",
    description: "Hear the words of the weeping prophet Jeremiah. Explore warnings, lamentations, and the promise of a new covenant written on hearts.",
    badge: "PROPHET",
    color: "from-blue-600 to-gray-600",
    features: ["Prophetic Warning", "Lamentations", "New Covenant", "Divine Message"],
    directUrl: "https://jeremiahgpt.lovable.app/?via=aiwebtools",
    emoji: "💧"
  },
  {
    title: "John the Baptist GPT",
    description: "Prepare the way with John the Baptist, the voice crying in the wilderness. Explore baptism, repentance, and prophetic preparation.",
    badge: "PROPHET",
    color: "from-brown-500 to-amber-600",
    features: ["Baptism", "Repentance", "Wilderness Prophet", "Preparation"],
    directUrl: "https://johnthebaptistgpt.lovable.app/?via=aiwebtools",
    emoji: "🏜️"
  },
  {
    title: "St. John the Apostle GPT",
    description: "Experience divine love with the beloved disciple. Explore the Gospel of John, Revelation, and the profound theology of love and light.",
    badge: "APOSTLE",
    color: "from-white to-gold-600",
    features: ["Gospel of John", "Revelation", "Divine Love", "Mystical Theology"],
    directUrl: "https://stjohnapostlegpt.lovable.app/?via=aiwebtools",
    emoji: "🕊️"
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

const createEmojiFallbackImage = (title: string, emoji: string) => {
  const svg = `
  <svg xmlns='http://www.w3.org/2000/svg' width='800' height='450'>
    <defs>
      <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
        <stop offset='0%' stop-color='#0ea5e9'/>
        <stop offset='50%' stop-color='#7c3aed'/>
        <stop offset='100%' stop-color='#22d3ee'/>
      </linearGradient>
    </defs>
    <rect width='100%' height='100%' fill='url(#g)'/>
    <text x='50%' y='52%' dominant-baseline='middle' text-anchor='middle' font-size='150' fill='rgba(255,255,255,0.85)'>${emoji || '✨'}</text>
    <text x='50%' y='85%' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-weight='700' font-size='28' fill='rgba(255,255,255,0.9)'>${title.replace(/&/g,'&amp;')}</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

const handleAccessTool = (directUrl: string, toolName: string) => {
  console.log('🌀 Access Tool clicked:', toolName, 'URL:', directUrl);
  createTimePortalEffect(directUrl, toolName);
};

const OurFeaturedSection = () => {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLElement>(null);

  const handleShowCategories = () => {
    navigate('/');
    const categoriesSection = document.getElementById('categories-section');
    if (categoriesSection) {
      categoriesSection.scrollIntoView({ behavior: 'auto' });
    }
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
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-slate-900 to-purple-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="bg-gradient-to-r from-ai-cyan to-ai-blue bg-clip-text text-transparent">Featured Tools</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            Professional-grade AI solutions created by AIWebTools.ai for enterprise and creative professionals
          </p>
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-900/50 to-blue-900/50 border border-purple-500/30 rounded-lg p-6 backdrop-blur-sm">
            <p className="text-lg text-white font-semibold mb-2">
              ⚡ Powered by the Latest OpenAI Models
            </p>
            <p className="text-gray-200 mb-3">
              All of our custom GPTs are enhanced versions of ChatGPT, equipped with the <span className="text-cyan-400 font-semibold">latest OpenAI models</span> and <span className="text-green-400 font-semibold">continuously updated</span>. Each tool features <span className="text-cyan-400 font-semibold">advanced data analysis</span>, <span className="text-blue-400 font-semibold">vision analysis</span>, and <span className="text-purple-400 font-semibold">full coding capabilities</span>.
            </p>
            <p className="text-gray-200">
              Plus, they all include <span className="text-pink-400 font-semibold">GPT advanced image generation</span> – perfect for creating custom infographics, graphics, and visual content for any niche or purpose.
            </p>
          </div>
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
                <Card 
                  key={index} 
                  className="group bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-md border-2 border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 transform hover:scale-105 h-full flex flex-col relative shadow-xl hover:shadow-cyan-500/20 cursor-pointer"
                  onClick={() => {
                    handleAccessTool(tool.directUrl, tool.title);
                  }}
                >
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

                    {tool.videoUrl ? (
                      <div className="relative w-full h-40 rounded-lg overflow-hidden bg-slate-800 mb-4 shadow-lg">
                        <LazyVideoEmbed videoUrl={tool.videoUrl} title={tool.title} height="h-40" />
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
                      <div className="mb-3 flex flex-wrap gap-2">
                        <Badge variant="secondary" className="bg-cyan-400/20 text-cyan-300 border-cyan-400/50">
                          Blockchain: {(tool as any).blockchain}
                        </Badge>
                        <Badge variant="secondary" className="bg-gradient-to-r from-green-500/30 to-emerald-500/30 text-green-300 border-green-400/50 animate-pulse">
                          🏦 NO BIO CHIP REQUIRED · WEB3 BANKING
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
                        onClick={(e) => {
                          e.stopPropagation();
                          handleAccessTool(tool.directUrl, tool.title);
                        }}
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
              <Card 
                key={index} 
                className="group bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 h-full flex flex-col relative cursor-pointer"
                onClick={() => {
                  const slug = tool.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                  navigate(`/${slug}`);
                }}
              >
                {/* FREE Badge for all featured GPTs */}
                <div className="absolute top-0 right-0 z-20">
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-2 py-1 rounded-bl-lg rounded-tr-lg text-xs font-bold shadow-lg">
                    FREE
                  </div>
                </div>
                
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
                  {/* Disclaimer badges for spiritual/medical tools */}
                  <ToolDisclaimerBadges tool={toolForFavorites} size="sm" className="mt-2" />
                </CardHeader>
                
                <CardContent className="flex-grow flex flex-col">
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm flex-grow">
                    {tool.description}
                  </p>

                  <div className="mb-4">
                    {tool.videoUrl ? (
                      <div className="relative w-full h-32 rounded-lg overflow-hidden bg-slate-800">
                        <LazyVideoEmbed videoUrl={tool.videoUrl} title={tool.title} />
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
                            const img = e.currentTarget as HTMLImageElement;
                            try {
                              img.src = createEmojiFallbackImage(tool.title, (tool as any).emoji || '✨');
                              img.style.display = 'block';
                            } catch {
                              img.style.display = 'none';
                            }
                          }}
                        />
                      </div>
) : (
                      <div className="relative w-full h-32 rounded-lg overflow-hidden">
                        <img
                          src={createEmojiFallbackImage(tool.title, (tool as any).emoji || "✨")}
                          alt={`${tool.title} Generated Preview`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          decoding="async"
                        />
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
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAccessTool(tool.directUrl, tool.title);
                      }}
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
