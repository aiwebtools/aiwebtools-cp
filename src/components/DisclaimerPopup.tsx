
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
import { createTimePortalEffect } from "@/utils/timeEffects";

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
    console.log('🌀 User agreeing to disclaimer - initiating portal entry...');
    
    // Create the time portal effect without a destination URL
    createTimePortalEffect('');
    
    // Store acceptance and close dialog after a short delay to let the effect start
    setTimeout(() => {
      localStorage.setItem("disclaimerAccepted", "true");
      setIsOpen(false);
    }, 300);
  };

  // Don't render anything until ready to prevent flickering
  if (!isReady) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogContent className="max-w-[90vw] sm:max-w-lg max-h-[85vh] bg-gray-900 border-cyan-500/30 text-white p-4 sm:p-6 will-change-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-lg sm:text-xl text-cyan-400">
            <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
            Important Disclaimer
          </DialogTitle>
          <DialogDescription className="text-gray-300 text-sm">
            Please read and accept before proceeding
          </DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="max-h-[40vh] sm:max-h-60 pr-2">
          <div className="space-y-3 text-sm text-gray-300">
            <div>
              <h4 className="font-semibold text-cyan-400 mb-2">Terms of Use</h4>
              <p className="leading-relaxed">
                This AI tools directory is for educational purposes only. All tools are third-party services - we don't guarantee their accuracy or availability.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-cyan-400 mb-2">No Warranties</h4>
              <p className="leading-relaxed">
                We provide no warranties about tool functionality. Use all AI tools at your own risk and verify results independently.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-cyan-400 mb-2">Limitation of Liability</h4>
              <p className="leading-relaxed">
                We're not liable for damages from using this website or linked tools. Users are responsible for evaluating tool accuracy.
              </p>
            </div>
          </div>
        </ScrollArea>

        <div className="flex justify-center pt-4 border-t border-cyan-500/30">
          <Button 
            onClick={handleAccept}
            className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 px-6 sm:px-8 text-sm sm:text-base transition-colors duration-200"
          >
            I Understand and Agree
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DisclaimerPopup;
