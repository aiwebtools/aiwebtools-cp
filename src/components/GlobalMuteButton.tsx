import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Volume2, VolumeX } from "lucide-react";
import videoManager from "@/hooks/useVideoManager";

const GlobalMuteButton = () => {
  const [isMuted, setIsMuted] = useState(false);

  const toggleMute = () => {
    const newMutedState = !isMuted;
    setIsMuted(newMutedState);
    
    console.log('🎛️ Global mute button clicked - New state:', newMutedState ? 'MUTED' : 'UNMUTED');
    
    if (newMutedState) {
      videoManager.muteAll();
    } else {
      videoManager.unmuteAll();
    }
  };

  return (
    <Button
      onClick={toggleMute}
      className="fixed bottom-6 left-6 z-50 w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 active:bg-gray-900 text-white shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 p-0"
      size="sm"
      aria-label={isMuted ? "Unmute videos" : "Mute videos"}
      title={isMuted ? "Unmute" : "Mute"}
    >
      {isMuted ? (
        <VolumeX className="w-4 h-4" />
      ) : (
        <Volume2 className="w-4 h-4" />
      )}
    </Button>
  );
};

export default GlobalMuteButton;
