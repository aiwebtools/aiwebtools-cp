import { useEffect } from 'react';

const VideoAutoPlayController = () => {
  useEffect(() => {
    const handleVoiceSequenceComplete = () => {
      console.log('🎬 Voice sequence complete - starting controlled video playback');
      
      // Find all video embeds in the Special Services section
      const videoEmbeds = document.querySelectorAll('.video-embed');
      
      if (videoEmbeds.length > 0) {
        // Start with the first video only to avoid chaos
        const firstVideo = videoEmbeds[0] as HTMLIFrameElement;
        const videoId = firstVideo.dataset.videoId;
        const toolTitle = firstVideo.dataset.toolTitle;
        
        if (videoId) {
          console.log(`🎥 Starting video: ${toolTitle}`);
          
          // Update src with autoplay for just the first video
          const newSrc = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=0&controls=1&rel=0&modestbranding=1&iv_load_policy=3&fs=1&cc_load_policy=0&playsinline=1&enablejsapi=1&origin=${window.location.origin}&vq=hd1080`;
          firstVideo.src = newSrc;
        }
      }
    };

    // Listen for the voice sequence completion event
    window.addEventListener('voiceSequenceComplete', handleVoiceSequenceComplete);

    return () => {
      window.removeEventListener('voiceSequenceComplete', handleVoiceSequenceComplete);
    };
  }, []);

  return null; // This component only handles logic
};

export default VideoAutoPlayController;