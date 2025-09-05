import { useState, useRef } from "react";
import { Play, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { createRobotVoice } from "@/utils/effects/robotVoice";

interface VideoPlayButtonProps {
  videoSrc: string;
  onPlay?: () => void;
}

const VideoPlayButton = ({ videoSrc, onPlay }: VideoPlayButtonProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showVolumeHint, setShowVolumeHint] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handlePlay = async () => {
    console.log('🎮 User clicked play - starting video and voice...');
    
    // Start the video by replacing the iframe src with autoplay
    if (iframeRef.current) {
      const autoplaySrc = videoSrc.replace('autoplay=0', 'autoplay=1').replace('mute=1', 'mute=0');
      iframeRef.current.src = autoplaySrc;
    }
    
    // Brief delay to let video start
    setTimeout(() => {
      // Trigger welcome voice sequence
      console.log('🎤 Triggering welcome voice after user interaction...');
      // Create a new speech synthesis utterance for immediate playback
      const welcomeMsg = new SpeechSynthesisUtterance("WELCOME MASTER");
      welcomeMsg.rate = 0.4;
      welcomeMsg.pitch = 0.1;
      welcomeMsg.volume = 0.9;
      
      welcomeMsg.onend = () => {
        setTimeout(() => {
          const toolsMsg = new SpeechSynthesisUtterance("YOU'VE GOT TOOLS");
          toolsMsg.rate = 0.8;
          toolsMsg.pitch = 1.2;
          toolsMsg.volume = 0.95;
          speechSynthesis.speak(toolsMsg);
        }, 500);
      };
      
      speechSynthesis.speak(welcomeMsg);
      
      // Show volume hint briefly
      setShowVolumeHint(true);
      setTimeout(() => setShowVolumeHint(false), 3000);
      
    }, 800);

    setIsPlaying(true);
    onPlay?.();
  };

  if (isPlaying) {
    return (
      <>
        <iframe
          ref={iframeRef}
          className="absolute inset-0 w-full h-full rounded-xl border border-cyan-500/30 bg-slate-800"
          src={videoSrc}
          title="AI Web Tools Featured Video - 1080p HD"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
          allowFullScreen
          loading="eager"
        />
        {showVolumeHint && (
          <div className="absolute top-4 right-4 bg-black/80 text-white px-3 py-2 rounded-lg flex items-center gap-2 text-sm animate-fade-in">
            <Volume2 className="h-4 w-4" />
            <span>Audio is playing!</span>
          </div>
        )}
      </>
    );
  }

  return (
    <div className="relative w-full h-full rounded-xl border border-cyan-500/30 bg-gradient-to-br from-slate-800 via-slate-900 to-black overflow-hidden group">
      {/* Background preview */}
      <iframe
        className="absolute inset-0 w-full h-full opacity-60"
        src={videoSrc.replace('autoplay=1', 'autoplay=0').replace('mute=0', 'mute=1')}
        title="AI Web Tools Featured Video - Preview"
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        loading="eager"
      />
      
      {/* Play overlay */}
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <div className="text-center">
          <Button
            onClick={handlePlay}
            size="lg"
            className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500 text-white font-semibold px-8 py-4 rounded-full shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 group-hover:scale-105"
          >
            <Play className="h-6 w-6 mr-2" />
            <span>Play Video + Voice</span>
          </Button>
          
          <p className="text-white/80 text-sm mt-4 max-w-md">
            Click to start the video with audio and hear the AI voice introduction
          </p>
        </div>
      </div>

      {/* Glow effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 via-transparent to-purple-500/10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-radial from-center from-transparent via-transparent to-black/20 pointer-events-none" />
    </div>
  );
};

export default VideoPlayButton;