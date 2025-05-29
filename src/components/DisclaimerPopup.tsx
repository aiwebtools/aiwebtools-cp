
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
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Add a small delay to prevent flickering on slow browsers
    const timer = setTimeout(() => {
      const hasAcceptedDisclaimer = localStorage.getItem("disclaimerAccepted");
      if (!hasAcceptedDisclaimer) {
        setIsOpen(true);
      }
      setIsReady(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("disclaimerAccepted", "true");
    setIsOpen(false);
  };

  // Don't render anything until ready to prevent flickering
  if (!isReady) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogContent className="max-w-[95vw] sm:max-w-2xl max-h-[90vh] bg-gray-900 border-cyan-500/30 text-white p-3 sm:p-6 will-change-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-base sm:text-xl text-cyan-400">
            <AlertTriangle className="w-4 h-4 sm:w-6 sm:h-6 flex-shrink-0" />
            Important Legal Disclaimer
          </DialogTitle>
          <DialogDescription className="text-gray-300 text-xs sm:text-base">
            Please read and accept our terms before proceeding
          </DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="max-h-[50vh] sm:max-h-96 pr-1 sm:pr-4">
          <div className="space-y-2 sm:space-y-4 text-xs sm:text-sm text-gray-300">
            <div>
              <h4 className="font-semibold text-cyan-400 mb-1 sm:mb-2 text-xs sm:text-sm">Terms of Use and Liability Disclaimer</h4>
              <p className="leading-tight sm:leading-normal">
                By accessing and using this AI tools directory website, you acknowledge and agree to the following terms:
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-cyan-400 mb-1 sm:mb-2 text-xs sm:text-sm">Educational and Informational Purposes Only</h4>
              <p className="leading-tight sm:leading-normal">
                All AI tools, information, and content provided on this website are strictly for educational, informational, and research purposes only. These tools are not intended for commercial use, professional advice, or critical decision-making without proper verification.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-cyan-400 mb-1 sm:mb-2 text-xs sm:text-sm">No Warranties or Guarantees</h4>
              <p className="leading-tight sm:leading-normal">
                We make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the AI tools or information contained on this website. Any reliance you place on such information is strictly at your own risk.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-cyan-400 mb-1 sm:mb-2 text-xs sm:text-sm">Third-Party Tools and Services</h4>
              <p className="leading-tight sm:leading-normal">
                This website provides links and access to third-party AI tools and services. We are not responsible for the content, functionality, privacy practices, or terms of service of these external tools. Users interact with third-party tools at their own risk and discretion.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-cyan-400 mb-1 sm:mb-2 text-xs sm:text-sm">Limitation of Liability</h4>
              <p className="leading-tight sm:leading-normal">
                In no event shall we be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of your use of this website or any AI tools accessed through it, whether based on warranty, contract, tort, or any other legal theory.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-cyan-400 mb-1 sm:mb-2 text-xs sm:text-sm">User Responsibility</h4>
              <p className="leading-tight sm:leading-normal">
                Users are solely responsible for evaluating the accuracy, completeness, and usefulness of any information or AI tool functionality. Always verify results independently and consult qualified professionals for important decisions.
              </p>
            </div>
          </div>
        </ScrollArea>

        <div className="flex justify-center pt-3 sm:pt-4 border-t border-cyan-500/30">
          <Button 
            onClick={handleAccept}
            className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 px-4 sm:px-8 text-xs sm:text-base transition-colors duration-200"
          >
            I Understand and Agree
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DisclaimerPopup;
