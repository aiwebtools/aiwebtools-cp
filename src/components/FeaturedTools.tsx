
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Film, Clock, Car, GraduationCap, Shield, Theater, Heart, Music, Beaker, Gavel, Palette, Search, Leaf } from "lucide-react";

const tools = [
  {
    icon: BookOpen,
    title: "Book Writer GPT",
    description: "Create professionally written full books about anything you dream",
    emoji: "✍️",
    color: "from-blue-500 to-purple-600"
  },
  {
    icon: Film,
    title: "Movie Script Writer GPT",
    description: "Your AI companion for full industry-standard movie scripts and storytelling",
    emoji: "🎬",
    color: "from-red-500 to-pink-600"
  },
  {
    icon: Clock,
    title: "Time Machine GPT",
    description: "Uncover the past, explore potential futures, and dive into alternative realities",
    emoji: "🌀",
    color: "from-cyan-500 to-blue-600"
  },
  {
    icon: Car,
    title: "Automobile GPT",
    description: "Your ultimate automotive expert for deals, repairs, and maintenance advice",
    emoji: "🏎️",
    color: "from-orange-500 to-red-600"
  },
  {
    icon: GraduationCap,
    title: "College Degree GPT",
    description: "Complete college education experience - access to education is a human right",
    emoji: "🎓",
    color: "from-green-500 to-teal-600"
  },
  {
    icon: Shield,
    title: "Survivalist GPT",
    description: "Your ultimate survival companion with vast knowledge and experience",
    emoji: "🛡️",
    color: "from-gray-500 to-slate-600"
  }
];

const FeaturedTools = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="bg-gradient-to-r from-ai-purple to-ai-blue bg-clip-text text-transparent">AI Tools</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our most popular AI-powered tools designed to revolutionize your creative process
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${tool.color} flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform duration-300`}>
                  {tool.emoji}
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-ai-purple transition-colors">
                  {tool.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-6 leading-relaxed">
                  {tool.description}
                </CardDescription>
                <Button className="w-full bg-gradient-to-r from-ai-purple to-ai-blue hover:from-ai-purple/80 hover:to-ai-blue/80 text-white transition-all duration-300">
                  Try Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-ai-purple text-ai-purple hover:bg-ai-purple hover:text-white px-8 py-4 rounded-xl transition-all duration-300"
          >
            View All 1111+ AI Tools
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTools;
