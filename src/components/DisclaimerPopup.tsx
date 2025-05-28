
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AlertTriangle } from "lucide-react";

const DisclaimerPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasAcceptedDisclaimer = localStorage.getItem("disclaimerAccepted");
    if (!hasAcceptedDisclaimer) {
      setIsOpen(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("disclaimerAccepted", "true");
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogContent className="max-w-[95vw] sm:max-w-2xl max-h-[95vh] bg-gray-900 border-cyan-500/30 text-white p-4 sm:p-6">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-lg sm:text-xl text-cyan-400">
            <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6" />
            Important Legal Disclaimer
          </DialogTitle>
          <DialogDescription className="text-gray-300 text-sm sm:text-base">
            Please read and accept our terms before proceeding
          </DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="max-h-[60vh] sm:max-h-96 pr-2 sm:pr-4">
          <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-gray-300">
            <div>
              <h4 className="font-semibold text-cyan-400 mb-2">Terms of Use and Liability Disclaimer</h4>
              <p>
                By accessing and using this AI tools directory website, you acknowledge and agree to the following terms:
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-cyan-400 mb-2">Educational and Informational Purposes Only</h4>
              <p>
                All AI tools, information, and content provided on this website are strictly for educational, informational, and research purposes only. These tools are not intended for commercial use, professional advice, or critical decision-making without proper verification.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-cyan-400 mb-2">No Warranties or Guarantees</h4>
              <p>
                We make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the AI tools or information contained on this website. Any reliance you place on such information is strictly at your own risk.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-cyan-400 mb-2">Third-Party Tools and Services</h4>
              <p>
                This website provides links and access to third-party AI tools and services. We are not responsible for the content, functionality, privacy practices, or terms of service of these external tools. Users interact with third-party tools at their own risk and discretion.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-cyan-400 mb-2">Limitation of Liability</h4>
              <p>
                In no event shall we be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of your use of this website or any AI tools accessed through it, whether based on warranty, contract, tort, or any other legal theory.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-cyan-400 mb-2">User Responsibility</h4>
              <p>
                Users are solely responsible for evaluating the accuracy, completeness, and usefulness of any information or AI tool functionality. Always verify results independently and consult qualified professionals for important decisions.
              </p>
            </div>
          </div>
        </ScrollArea>

        <div className="flex justify-center pt-4 border-t border-cyan-500/30">
          <Button 
            onClick={handleAccept}
            className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 px-6 sm:px-8 text-sm sm:text-base"
          >
            I Understand and Agree
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DisclaimerPopup;
