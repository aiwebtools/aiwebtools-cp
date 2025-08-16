import { useState } from "react";
import { X, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingBookAd = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm bg-gradient-to-br from-purple-900/95 to-blue-900/95 backdrop-blur-sm border border-purple-500/30 rounded-xl shadow-2xl p-4 animate-in slide-in-from-bottom-5 duration-700">
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-2 right-2 text-gray-400 hover:text-white transition-colors"
      >
        <X size={16} />
      </button>
      
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0">
          <div className="w-12 h-16 bg-gradient-to-b from-yellow-400 to-orange-500 rounded-sm flex items-center justify-center">
            <BookOpen className="text-white" size={20} />
          </div>
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="text-white font-bold text-sm leading-tight mb-1">
            The Gospel of Deployable Robots
          </h3>
          <p className="text-purple-200 text-xs mb-2 leading-tight">
            By AIWebTools.AI • 60+ Deployable robots & AI insights
          </p>
          <p className="text-purple-300 text-xs mb-3 leading-tight">
            Copy & paste ready prompts for personal AI tool deployment
          </p>
          
          <Button
            onClick={() => window.open("https://www.amazon.com/Gospel-Deployable-Robots-Instructions-www-AiWebTools-Ai-ebook/dp/B0DT419F2W?dplnkId=21c79e26-79fa-4837-9c84-4aebe9053749", "_blank")}
            size="sm"
            className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold text-xs py-2 rounded-lg transition-all duration-200 transform hover:scale-105"
          >
            📖 Get on Amazon
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FloatingBookAd;