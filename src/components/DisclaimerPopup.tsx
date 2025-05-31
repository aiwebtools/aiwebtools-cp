
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
            Privacy Notice & Terms
          </DialogTitle>
          <DialogDescription className="text-gray-300 text-sm">
            Please read and accept our privacy disclosures and terms
          </DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="max-h-[40vh] sm:max-h-60 pr-2">
          <div className="space-y-3 text-sm text-gray-300">
            <div>
              <h4 className="font-semibold text-cyan-400 mb-2">Data Collection & Google Analytics</h4>
              <p className="leading-relaxed mb-2">
                We use Google Analytics to understand how visitors interact with our website. This service collects information such as:
              </p>
              <ul className="list-disc list-inside ml-2 space-y-1 text-xs">
                <li>Pages you visit and time spent on each page</li>
                <li>Your general location (country/city level)</li>
                <li>Device type, browser, and screen resolution</li>
                <li>How you arrived at our website (referral source)</li>
                <li>Anonymous usage patterns and site interactions</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-cyan-400 mb-2">Your Privacy Rights</h4>
              <p className="leading-relaxed mb-2">You have the right to:</p>
              <ul className="list-disc list-inside ml-2 space-y-1 text-xs">
                <li>Access the personal data we collect about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of data collection at any time</li>
                <li>Data portability where technically feasible</li>
              </ul>
              <p className="text-xs mt-2">
                To exercise these rights, contact us at Contact@ai-webtools.com
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-cyan-400 mb-2">Cookie Usage</h4>
              <p className="leading-relaxed">
                We use cookies and similar technologies for analytics and to improve your experience. You can manage cookie preferences in your browser settings.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-cyan-400 mb-2">Terms of Use</h4>
              <p className="leading-relaxed">
                This AI tools directory is for educational purposes only. All tools are third-party services - we don't guarantee their accuracy or availability.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-cyan-400 mb-2">Limitation of Liability</h4>
              <p className="leading-relaxed">
                We're not liable for damages from using this website or linked tools. Users are responsible for evaluating tool accuracy and compliance with applicable laws.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-cyan-400 mb-2">Data Retention</h4>
              <p className="leading-relaxed">
                Analytics data is retained according to Google Analytics' standard retention periods (up to 26 months). You may request earlier deletion by contacting us.
              </p>
            </div>
          </div>
        </ScrollArea>

        <div className="flex justify-center pt-4 border-t border-cyan-500/30">
          <Button 
            onClick={handleAccept}
            className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 px-6 sm:px-8 text-sm sm:text-base transition-colors duration-200"
          >
            I Accept Privacy Terms & Analytics
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DisclaimerPopup;
