import { AlertTriangle, Heart, Users, Sparkles } from "lucide-react";
import { Tool } from "@/types/tools";

interface FullCompanionDisclaimerProps {
  tool: Tool;
}

const FullCompanionDisclaimer = ({ tool }: FullCompanionDisclaimerProps) => {
  return (
    <div className="bg-gradient-to-r from-rose-900/40 to-pink-900/40 border border-rose-500/40 rounded-xl p-6 backdrop-blur-sm">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <Heart className="w-6 h-6 text-rose-400" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-rose-300 mb-3 flex items-center">
            <AlertTriangle className="w-5 h-5 mr-2 text-yellow-400" />
            Real Human Connection Matters
          </h3>
          
          <div className="space-y-4 text-sm text-gray-300">
            <div className="bg-yellow-900/30 border border-yellow-500/30 rounded-lg p-4">
              <p className="text-yellow-200 font-semibold flex items-center gap-2 mb-2">
                <Users className="w-4 h-4" />
                💛 A Gentle Reminder
              </p>
              <p>
                <strong>{tool.title}</strong> provides AI-simulated companionship for 
                <span className="text-cyan-300 font-medium"> entertainment and practice</span>. 
                While it may offer enjoyable conversation, it cannot replace the depth, growth, 
                and fulfillment found in <span className="text-rose-300 font-medium">genuine human relationships</span>.
              </p>
            </div>

            <div className="space-y-2">
              <p>
                <strong className="text-rose-300">You Deserve Real Love:</strong> Human connection 
                provides empathy, shared experiences, and authentic emotional growth that no 
                algorithm can replicate.
              </p>
              
              <p>
                <strong className="text-rose-300">Healthy Balance:</strong> If you find yourself 
                spending more time with AI companions than with real people, consider reaching 
                out to friends, family, or community groups.
              </p>
            </div>

            <div className="bg-gradient-to-r from-rose-800/30 to-pink-800/30 rounded-lg p-4 border border-rose-500/20">
              <p className="text-lg text-center">
                <span className="text-rose-300 font-bold">Real Love is Worth Seeking</span>
              </p>
              <p className="text-center mt-2 flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4 text-pink-400" />
                <span className="text-pink-200 italic">You are worthy of authentic connection</span>
                <Sparkles className="w-4 h-4 text-pink-400" />
              </p>
              <p className="text-xs text-gray-400 text-center mt-2">
                Use AI as a tool for entertainment or practice—never as a replacement for 
                the beautiful complexity of human love and friendship.
              </p>
            </div>

            <p className="text-xs text-gray-400 border-t border-rose-500/30 pt-3">
              By using this tool, you acknowledge it is for entertainment purposes only. 
              Seek real human connection for your emotional and spiritual well-being.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullCompanionDisclaimer;
