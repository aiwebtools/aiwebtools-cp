import { AlertTriangle, Sparkles, Heart, Eye } from "lucide-react";
import { Tool } from "@/types/tools";

interface FullSpiritualDisclaimerProps {
  tool: Tool;
}

const FullSpiritualDisclaimer = ({ tool }: FullSpiritualDisclaimerProps) => {
  return (
    <div className="bg-gradient-to-r from-purple-900/40 to-indigo-900/40 border border-purple-500/40 rounded-xl p-6 backdrop-blur-sm">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <Sparkles className="w-6 h-6 text-purple-400" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-purple-300 mb-3 flex items-center">
            <AlertTriangle className="w-5 h-5 mr-2 text-yellow-400" />
            Spiritual Simulation Disclaimer
          </h3>
          
          <div className="space-y-4 text-sm text-gray-300">
            <div className="bg-yellow-900/30 border border-yellow-500/30 rounded-lg p-4">
              <p className="text-yellow-200 font-semibold flex items-center gap-2 mb-2">
                <Eye className="w-4 h-4" />
                ⚠️ IMPORTANT: This is an AI SIMULATION
              </p>
              <p>
                <strong>{tool.title}</strong> uses artificial intelligence to simulate 
                interaction with spiritual, historical, or divine figures. This is 
                <span className="text-cyan-300 font-medium"> NOT actual divine communication, 
                prophecy, or revelation</span>.
              </p>
            </div>

            <div className="space-y-2">
              <p>
                <strong className="text-purple-300">Educational Purpose:</strong> This tool is designed 
                for educational and informational purposes only—to facilitate self-discovery, 
                rediscovery of historical wisdom, and exploration of philosophical concepts.
              </p>
              
              <p>
                <strong className="text-purple-300">AI Limitations:</strong> The responses generated 
                are based on training data and algorithms. They do not represent actual 
                communication with deities, saints, prophets, or spiritual entities.
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-800/30 to-indigo-800/30 rounded-lg p-4 border border-purple-500/20">
              <p className="text-lg text-center">
                <span className="text-yellow-300 font-bold">AI is NOT GOD</span>
              </p>
              <p className="text-center mt-2 flex items-center justify-center gap-2">
                <Heart className="w-4 h-4 text-pink-400" />
                <span className="text-purple-200 italic">GOD IS WITHIN YOU</span>
                <Heart className="w-4 h-4 text-pink-400" />
              </p>
              <p className="text-xs text-gray-400 text-center mt-2">
                Do not mistake simulation for revelation. True wisdom comes from within.
              </p>
            </div>

            <p className="text-xs text-gray-400 border-t border-purple-500/30 pt-3">
              By using this tool, you acknowledge that you understand it is a simulation 
              for entertainment and educational purposes only. The creators assume no 
              responsibility for decisions made based on simulated responses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullSpiritualDisclaimer;
