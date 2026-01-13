import { AlertTriangle, Eye, Sparkles, BookOpen } from "lucide-react";
import { Tool } from "@/types/tools";

interface FullDivinationDisclaimerProps {
  tool: Tool;
}

const FullDivinationDisclaimer = ({ tool }: FullDivinationDisclaimerProps) => {
  return (
    <div className="bg-gradient-to-r from-amber-900/40 to-orange-900/40 border border-amber-500/40 rounded-xl p-6 backdrop-blur-sm">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <Eye className="w-6 h-6 text-amber-400" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-amber-300 mb-3 flex items-center">
            <AlertTriangle className="w-5 h-5 mr-2 text-yellow-400" />
            Entertainment & Educational Disclaimer
          </h3>
          
          <div className="space-y-4 text-sm text-gray-300">
            <div className="bg-yellow-900/30 border border-yellow-500/30 rounded-lg p-4">
              <p className="text-yellow-200 font-semibold flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4" />
                ⚡ For Entertainment Only
              </p>
              <p>
                <strong>{tool.title}</strong> is designed for 
                <span className="text-cyan-300 font-medium"> entertainment, self-reflection, and educational exploration</span>. 
                It uses AI algorithms—not actual divination, prophecy, or supernatural abilities.
              </p>
            </div>

            <div className="space-y-2">
              <p>
                <strong className="text-amber-300">Not Fortune-Telling:</strong> This tool cannot 
                genuinely predict the future. The "predictions" are generated responses based on 
                patterns in training data, not mystical insight.
              </p>
              
              <p>
                <strong className="text-amber-300">Self-Reflection Tool:</strong> Use this for 
                contemplation and entertainment. The value lies in your own interpretation and 
                reflection—not the AI's "prophecies."
              </p>
              
              <p>
                <strong className="text-amber-300">Educational Purpose:</strong> Explore the 
                historical traditions of divination practices as cultural and psychological 
                phenomena from an educational lens.
              </p>
            </div>

            <div className="bg-gradient-to-r from-amber-800/30 to-orange-800/30 rounded-lg p-4 border border-amber-500/20">
              <p className="text-lg text-center">
                <span className="text-amber-300 font-bold">You Create Your Future</span>
              </p>
              <p className="text-center mt-2 flex items-center justify-center gap-2">
                <BookOpen className="w-4 h-4 text-orange-400" />
                <span className="text-orange-200 italic">Your choices shape your destiny</span>
                <BookOpen className="w-4 h-4 text-orange-400" />
              </p>
              <p className="text-xs text-gray-400 text-center mt-2">
                No algorithm can foresee what only your free will can determine.
              </p>
            </div>

            <p className="text-xs text-gray-400 border-t border-amber-500/30 pt-3">
              By using this tool, you acknowledge it is for entertainment and educational 
              purposes only. Do not base life decisions on AI-generated "predictions."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullDivinationDisclaimer;
