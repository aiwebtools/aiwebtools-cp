
import { Button } from "@/components/ui/button";
import { Sparkles, Zap, Globe } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-ai-purple/20 to-ai-blue/20 animate-pulse"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-ai-purple/30 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-ai-cyan/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="relative container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-screen text-center">
        <div className="mb-8 animate-glow">
          <Sparkles className="w-16 h-16 text-ai-cyan mx-auto mb-4" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-ai-cyan via-ai-purple to-ai-blue bg-clip-text text-transparent">
            AI Web Tools
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl">
          Launch your next idea with a <span className="text-ai-cyan font-semibold">.aiwebtools</span> or{" "}
          <span className="text-ai-purple font-semibold">.ai-tools</span> domain. The future starts here.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-ai-purple to-ai-blue hover:from-ai-purple/80 hover:to-ai-blue/80 text-white px-8 py-4 text-lg rounded-xl transition-all duration-300 transform hover:scale-105"
          >
            <Zap className="w-5 h-5 mr-2" />
            Explore AI Tools
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-ai-cyan text-ai-cyan hover:bg-ai-cyan hover:text-white px-8 py-4 text-lg rounded-xl transition-all duration-300"
          >
            <Globe className="w-5 h-5 mr-2" />
            Get Domain
          </Button>
        </div>
        
        <div className="text-center space-y-2">
          <p className="text-3xl font-bold text-white">🌐 Crafting the Future—🚀 Redefining the Game</p>
          <p className="text-gray-400">YOU'VE JUST BEEN GIFTED AI SUPERPOWERS...</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
