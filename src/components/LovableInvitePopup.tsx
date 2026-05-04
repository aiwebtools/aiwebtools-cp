import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Heart, ExternalLink } from "lucide-react";
import { createTimePortalEffect } from "@/utils/timeEffects";

const INVITE_URL = "https://lovable.dev/invite/P0KP4RR";
const STORAGE_KEY = "lovableInviteShownCount";

/**
 * Shows a friendly popup at ~13 minutes asking visitors to sign up via the
 * Lovable invite link. Each successful signup credits AI Web Tools, helping
 * fund continued platform improvements.
 */
const LovableInvitePopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
      ) || window.innerWidth < 768;
    if (isMobile) return;

    const shown = parseInt(sessionStorage.getItem(STORAGE_KEY) || "0", 10);
    // Only show once per session — at the 13 minute mark
    if (shown >= 1) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
      sessionStorage.setItem(STORAGE_KEY, "1");
    }, 13 * 60 * 1000); // 13 minutes

    return () => clearTimeout(timer);
  }, []);

  const handleAccept = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    createTimePortalEffect(INVITE_URL, "Lovable Invite — Support AI Web Tools");
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md max-w-[95vw] bg-gray-900 border-2 border-pink-500/50 z-[9999] shadow-2xl shadow-pink-500/20 p-6">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl text-white">
            <Heart className="w-6 h-6 text-pink-400 animate-pulse" />
            Help Us Make Our Site Better
          </DialogTitle>
          <DialogDescription className="text-base pt-2 text-gray-300 leading-relaxed">
            Help us make our site better by using our invite link. By doing so,
            it will provide this website with more credits to make the platform
            even better for everyone.
            <br />
            <br />
            <span className="text-pink-300 font-semibold">
              One love and thank you for using AI Web Tools. 💚
            </span>
          </DialogDescription>
        </DialogHeader>

        <div className="flex gap-3 justify-center pt-2">
          <Button
            onClick={handleAccept}
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white font-semibold px-5 py-2 shadow-lg"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Use Invite Link
          </Button>
          <Button
            onClick={() => setIsOpen(false)}
            variant="outline"
            className="bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white border-gray-600"
          >
            Maybe Later
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LovableInvitePopup;