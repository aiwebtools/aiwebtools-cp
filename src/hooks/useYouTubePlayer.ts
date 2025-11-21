import { useRef, useState, useEffect, useCallback } from 'react';

interface VideoConfig {
  id: string;
  start: number;
  title: string;
}

interface UseYouTubePlayerProps {
  videoSequence: VideoConfig[];
  onVideoEnd?: () => void;
}

export const useYouTubePlayer = ({ videoSequence, onVideoEnd }: UseYouTubePlayerProps) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [videoStarted, setVideoStarted] = useState(false);
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  const mainVideoRef = useRef<HTMLIFrameElement>(null);
  const interactionHandlersAttached = useRef(false);

  // Command helper to send messages to YouTube iframe
  const sendPlayerCommand = useCallback((command: string, args: any = '') => {
    const iframe = mainVideoRef.current;
    if (!iframe?.contentWindow) {
      console.log(`⚠️ Cannot send ${command} - iframe not ready`);
      return false;
    }

    try {
      iframe.contentWindow.postMessage(
        JSON.stringify({
          event: 'command',
          func: command,
          args: args
        }),
        '*'
      );
      console.log(`✅ Sent ${command} command to YouTube player`);
      return true;
    } catch (e) {
      console.error(`❌ Error sending ${command}:`, e);
      return false;
    }
  }, []);

  // Start video with unmuted audio
  const startVideo = useCallback(() => {
    if (videoStarted) {
      console.log('⚠️ Video already started, skipping...');
      return;
    }

    const iframe = mainVideoRef.current;
    if (!iframe) {
      console.log('⚠️ Iframe not ready, retrying in 300ms...');
      setTimeout(startVideo, 300);
      return;
    }

    setVideoStarted(true);
    console.log('🎥 Starting video playback (unmuted)...');

    // First, ensure unmute
    setTimeout(() => {
      sendPlayerCommand('unMute');
      
      // Then play
      setTimeout(() => {
        sendPlayerCommand('playVideo');
      }, 200);
    }, 100);
  }, [videoStarted, sendPlayerCommand]);

  // Force unmute (useful after welcome audio or other events)
  const forceUnmute = useCallback(() => {
    console.log('🔊 Forcing unmute on player...');
    sendPlayerCommand('unMute');
    
    // Also send volume command to ensure it's audible
    setTimeout(() => {
      sendPlayerCommand('setVolume', 100);
    }, 100);
  }, [sendPlayerCommand]);

  // Handle YouTube iframe messages
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      try {
        if (typeof event.data !== 'string') return;
        
        const data = JSON.parse(event.data);
        
        // Handle player ready event
        if (data.event === 'onReady') {
          console.log('✅ YouTube player is ready');
          setIsPlayerReady(true);
          
          // If video should be started and we haven't started yet, start now
          if (!videoStarted) {
            setTimeout(() => {
              startVideo();
            }, 500);
          }
        }
        
        // Handle state changes
        if (data.event === 'onStateChange') {
          const state = data.info;
          
          // State 0 = ended
          if (state === 0) {
            console.log('🎬 Video ended, checking for next video...');
            if (currentVideoIndex < videoSequence.length - 1) {
              console.log(`▶️ Transitioning to video ${currentVideoIndex + 2} of ${videoSequence.length}`);
              setCurrentVideoIndex(prev => prev + 1);
              setVideoStarted(false); // Reset for next video
              onVideoEnd?.();
            } else {
              console.log('✅ All videos completed');
            }
          }
          // State 1 = playing
          else if (state === 1) {
            console.log('▶️ Video is playing');
          }
          // State 2 = paused
          else if (state === 2) {
            console.log('⏸️ Video is paused');
          }
        }
      } catch (e) {
        // Ignore non-JSON messages
      }
    };

    window.addEventListener('message', handleMessage);
    
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [currentVideoIndex, videoSequence.length, videoStarted, startVideo, onVideoEnd]);

  // Handle welcome audio completion
  useEffect(() => {
    const handleWelcomeAudioComplete = () => {
      console.log('🎬 Welcome audio complete - starting main video with sound...');
      
      // Start video if not started
      if (!videoStarted) {
        startVideo();
      }
      
      // Force unmute to ensure audio is on
      setTimeout(() => {
        forceUnmute();
      }, 500);
    };

    window.addEventListener('welcomeAudioComplete', handleWelcomeAudioComplete, { once: true });

    return () => {
      window.removeEventListener('welcomeAudioComplete', handleWelcomeAudioComplete);
    };
  }, [videoStarted, startVideo, forceUnmute]);

  // Attach user interaction listeners for autoplay fallback
  useEffect(() => {
    if (interactionHandlersAttached.current) return;

    const handleInteraction = () => {
      if (!videoStarted) {
        console.log('👆 User interaction detected - starting video...');
        startVideo();
      }
    };

    document.addEventListener('click', handleInteraction, { once: true, passive: true });
    document.addEventListener('touchstart', handleInteraction, { once: true, passive: true });
    document.addEventListener('scroll', handleInteraction, { once: true, passive: true });

    interactionHandlersAttached.current = true;

    return () => {
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
      document.removeEventListener('scroll', handleInteraction);
    };
  }, [videoStarted, startVideo]);

  return {
    mainVideoRef,
    currentVideoIndex,
    videoStarted,
    isPlayerReady,
    currentVideo: videoSequence[currentVideoIndex],
    startVideo,
    forceUnmute,
    sendPlayerCommand
  };
};
