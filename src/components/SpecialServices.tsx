
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Infinity, Music, Users } from "lucide-react";
import { createTimePortalEffect } from "@/utils/timeEffects";

const specialServices = [
  {
    icon: Music,
    title: "AI Movie Maker Studio",
    description: "Complete movie & motion picture production suite with every tool needed for professional filmmaking",
    badge: "STUDIO SUITE",
    color: "from-purple-600 to-pink-600",
    features: ["Movie Script Writer", "Scene Maker", "Trailer Creator", "Poster Designer"],
    directUrl: "https://moviemakerstudio.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=Zdthelofv_E"
  },
  {
    icon: Users,
    title: "StageMaster AI Suite",
    description: "Transform every aspect of stage production, from set design to choreography and lighting",
    badge: "PERFORMING ARTS",
    color: "from-red-500 to-orange-500",
    features: ["Set Design", "Choreography", "Costume Creation", "Lighting Optimization"],
    directUrl: "https://stagemasterai.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=-QIxYSlcRWM"
  },
  {
    icon: Infinity,
    title: "ImmortalizeMe™",
    description: "Create fully interactive digital clones with voice, personality, and life stories preserved forever",
    badge: "EXCLUSIVE",
    color: "from-cyan-500 to-blue-600",
    features: ["Voice Cloning", "Personality AI", "Memory Integration", "Real-time Conversations"],
    directUrl: "https://immortalizeme.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=JXLqPMfw49Y"
  }
];

const getVideoId = (url: string) => {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
  return match ? match[1] : null;
};

const handleAccessSuite = (directUrl: string, suiteName: string) => {
  console.log('🌀 Access Suite clicked:', suiteName, 'URL:', directUrl);
  createTimePortalEffect(directUrl, suiteName);
};

const SpecialServices = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Premium <span className="bg-gradient-to-r from-ai-cyan to-ai-blue bg-clip-text text-transparent">AI Suites</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional-grade AI solutions for enterprise and creative professionals
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {specialServices.map((service, index) => (
            <Card key={index} className="group bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                  <Badge variant="secondary" className="bg-ai-cyan/20 text-ai-cyan border-ai-cyan/50">
                    {service.badge}
                  </Badge>
                </div>
                <CardTitle className="text-2xl font-bold text-white group-hover:text-ai-cyan transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Embedded YouTube Video */}
                {service.videoUrl && getVideoId(service.videoUrl) && (
                  <div className="mb-6">
                    <div className="relative w-full h-48 rounded-lg overflow-hidden">
                      <iframe
                        src={`https://www.youtube.com/embed/${getVideoId(service.videoUrl)}`}
                        title={`${service.title} Demo`}
                        className="absolute inset-0 w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 bg-ai-cyan rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  className={`w-full bg-gradient-to-r ${service.color} hover:opacity-90 text-white transition-all duration-300`}
                  onClick={() => handleAccessSuite(service.directUrl, service.title)}
                >
                  Access Suite
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
