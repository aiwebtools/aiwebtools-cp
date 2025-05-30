
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { createTimePortalEffect } from "@/utils/timeEffects";

const featuredGPTs = [
  {
    title: "BOOK WRITER GPT",
    description: "Professional book writing assistant that helps authors create compelling novels, non-fiction books, and manuscripts with expert guidance on plot development, character creation, and writing techniques.",
    badge: "WRITING SUITE",
    color: "from-blue-600 to-purple-600",
    features: ["Plot Development", "Character Creation", "Writing Guidance", "Manuscript Support"],
    directUrl: "https://bookwritergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=example1",
    emoji: "📚"
  },
  {
    title: "AI Movie Maker Studio",
    description: "Complete movie & motion picture production suite with every tool needed for professional filmmaking from script to screen.",
    badge: "STUDIO SUITE",
    color: "from-purple-600 to-pink-600",
    features: ["Movie Script Writer", "Scene Maker", "Trailer Creator", "Poster Designer"],
    directUrl: "https://moviemakerstudio.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=Zdthelofv_E",
    emoji: "🎬"
  },
  {
    title: "StageMaster AI Suite",
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
    title: "AUTOMOBILE GPT",
    description: "Comprehensive automotive expertise covering car maintenance, repairs, diagnostics, buying guides, and automotive technology for car enthusiasts and professionals.",
    badge: "AUTOMOTIVE",
    color: "from-blue-500 to-cyan-600",
    features: ["Car Maintenance", "Repair Diagnostics", "Buying Guides", "Auto Technology"],
    directUrl: "https://automobilegpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=f_4aFnL-mk8",
    emoji: "🚗"
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
    title: "Public Defender GPT",
    description: "Legal assistance for criminal defense, understanding legal rights, court procedures, and criminal law guidance for defendants and legal professionals.",
    badge: "LEGAL AID",
    color: "from-purple-500 to-blue-600",
    features: ["Legal Defense", "Rights Guidance", "Court Procedures", "Legal Assistance"],
    directUrl: "https://publicdefendergpt.lovable.app/",
    videoUrl: "https://www.youtube.com/watch?v=cQR5eFjsPWw",
    emoji: "⚖️"
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
    title: "Insurance Claims GPT",
    description: "Expert guidance for insurance claims processing, policy understanding, claim documentation, and insurance dispute resolution for various insurance types.",
    badge: "INSURANCE",
    color: "from-blue-500 to-purple-600",
    features: ["Claims Processing", "Policy Guidance", "Documentation", "Dispute Resolution"],
    directUrl: "https://insuranceclaimsgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=WNPywJWOUzU",
    emoji: "🛡️"
  },
  {
    title: "Property Data Finder GPT",
    description: "Comprehensive property research tool for real estate analysis, property valuations, market trends, and investment opportunities in real estate markets.",
    badge: "REAL ESTATE",
    color: "from-orange-500 to-red-600",
    features: ["Property Research", "Market Analysis", "Valuations", "Investment Opportunities"],
    directUrl: "https://propertydatafindergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=0ZGBGn9yYwY",
    emoji: "🏠"
  },
  {
    title: "Home Renovator GPT",
    description: "Expert home renovation guidance covering project planning, material selection, cost estimation, and DIY renovation tips for homeowners and contractors.",
    badge: "HOME IMPROVEMENT",
    color: "from-yellow-500 to-orange-600",
    features: ["Project Planning", "Material Selection", "Cost Estimation", "DIY Tips"],
    directUrl: "https://homerenovationgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-humanoid-robot-fixing-a-bathroom-.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    emoji: "🔧"
  },
  {
    title: "Food Quality Inspector GPT",
    description: "Professional food safety and quality inspection guidance covering food safety standards, quality control, inspection procedures, and regulatory compliance.",
    badge: "FOOD SAFETY",
    color: "from-green-500 to-teal-600",
    features: ["Food Safety", "Quality Control", "Inspection Procedures", "Regulatory Compliance"],
    directUrl: "https://foodqualitygpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-man-inspecting-food-in-a-supermar.png/:/cr=t:4.65%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    emoji: "🥘"
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
                      />
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
