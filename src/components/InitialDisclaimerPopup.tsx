import { useState, useEffect } from 'react';
import { AlertTriangle, X, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const InitialDisclaimerPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has already seen the disclaimer
    const hasSeenDisclaimer = localStorage.getItem('aiwebtools-disclaimer-seen');
    
    if (!hasSeenDisclaimer) {
      // Show disclaimer after a brief delay for better UX
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    // Mark disclaimer as seen
    localStorage.setItem('aiwebtools-disclaimer-seen', 'true');
    setIsOpen(false);
  };

  const handleClose = () => {
    // Don't mark as permanently seen if they just close it
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md bg-black/95 border border-yellow-500/30 text-white">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-yellow-400">
            <AlertTriangle className="w-5 h-5" />
            Important Notice
          </DialogTitle>
          <DialogDescription className="text-gray-300 text-sm leading-relaxed">
            <div className="space-y-3">
              <p>
                Welcome to <span className="text-cyan-400 font-semibold">AIWebTools.AI</span>! 
                Please understand that:
              </p>
              
              <div className="bg-gray-900/50 rounded-lg p-3 border border-gray-700">
                <ul className="space-y-1 text-xs">
                  <li>• All AI tools are for <span className="text-blue-300 font-medium">educational and informational purposes only</span></li>
                  <li>• Some tools are <span className="text-orange-300 font-medium">experimental in nature</span></li>
                  <li>• These do <span className="text-red-300 font-medium">NOT constitute real human or professional advice</span></li>
                  <li>• Always consult qualified professionals for important decisions</li>
                </ul>
              </div>

              <p className="text-xs text-gray-400">
                By using this platform, you acknowledge these limitations and use all tools at your own discretion.
              </p>
            </div>
          </DialogDescription>
        </DialogHeader>
        
        <DialogFooter className="flex gap-2 sm:gap-0">
          <Button
            variant="outline"
            size="sm"
            onClick={handleClose}
            className="border-gray-600 text-gray-300 hover:bg-gray-800"
          >
            <X className="w-3 h-3 mr-1" />
            Close
          </Button>
          <Button
            size="sm"
            onClick={handleAccept}
            className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white"
          >
            <Check className="w-3 h-3 mr-1" />
            I Understand
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default InitialDisclaimerPopup;