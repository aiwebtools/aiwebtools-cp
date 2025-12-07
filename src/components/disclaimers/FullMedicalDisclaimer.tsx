import { AlertTriangle, Heart, Stethoscope, ShieldAlert } from "lucide-react";
import { Tool } from "@/types/tools";

interface FullMedicalDisclaimerProps {
  tool: Tool;
}

const FullMedicalDisclaimer = ({ tool }: FullMedicalDisclaimerProps) => {
  return (
    <div className="bg-gradient-to-r from-red-900/40 to-orange-900/40 border border-red-500/40 rounded-xl p-6 backdrop-blur-sm">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <Stethoscope className="w-6 h-6 text-red-400" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-red-300 mb-3 flex items-center">
            <AlertTriangle className="w-5 h-5 mr-2 text-yellow-400" />
            Medical & Health Disclaimer
          </h3>
          
          <div className="space-y-4 text-sm text-gray-300">
            <div className="bg-red-900/40 border border-red-500/40 rounded-lg p-4">
              <p className="text-red-200 font-semibold flex items-center gap-2 mb-2">
                <ShieldAlert className="w-4 h-4" />
                ⚠️ NOT A REPLACEMENT FOR PROFESSIONAL MEDICAL ADVICE
              </p>
              <p>
                <strong>{tool.title}</strong> is an AI simulation tool for 
                <span className="text-cyan-300 font-medium"> educational and informational 
                purposes ONLY</span>. It is NOT a substitute for professional medical 
                advice, diagnosis, or treatment.
              </p>
            </div>

            <div className="space-y-2">
              <p>
                <strong className="text-red-300">Consult a Professional:</strong> Always seek 
                the advice of a qualified healthcare provider with any questions you may have 
                regarding a medical condition. Never disregard professional medical advice or 
                delay seeking it because of information from this AI tool.
              </p>
              
              <p>
                <strong className="text-red-300">Emergency Situations:</strong> If you think you 
                may have a medical emergency, call your doctor, emergency services, or go to 
                the nearest emergency room immediately.
              </p>

              <p>
                <strong className="text-red-300">AI Limitations:</strong> This tool uses artificial 
                intelligence which may provide inaccurate, incomplete, or outdated information. 
                AI cannot examine you, run tests, or understand your complete medical history.
              </p>
            </div>

            <div className="bg-gradient-to-r from-red-800/30 to-orange-800/30 rounded-lg p-4 border border-red-500/20">
              <p className="text-center flex items-center justify-center gap-2">
                <Heart className="w-5 h-5 text-red-400" />
                <span className="text-red-200 font-semibold">Your Health Matters</span>
                <Heart className="w-5 h-5 text-red-400" />
              </p>
              <p className="text-xs text-gray-400 text-center mt-2">
                This simulation cannot replace the expertise, judgment, and care of a licensed 
                healthcare professional who can evaluate your specific situation.
              </p>
            </div>

            <p className="text-xs text-gray-400 border-t border-red-500/30 pt-3">
              By using this tool, you acknowledge that you understand it is a simulation 
              for informational purposes only. The creators assume no liability for any 
              decisions made based on information provided by this AI tool.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullMedicalDisclaimer;
