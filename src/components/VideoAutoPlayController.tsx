import { useEffect } from 'react';

const VideoAutoPlayController = () => {
  useEffect(() => {
    // Prevent any videos from auto-playing initially
    const preventAutoPlay = () => {
      const allVideos = document.querySelectorAll('.video-embed') as NodeListOf<HTMLIFrameElement>;
      allVideos.forEach((video) => {
        const videoId = video.dataset.videoId;
        if (videoId && !video.src.includes('autoplay=0')) {
          // Ensure all videos start without autoplay
          const newSrc = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=0&controls=1&rel=0&modestbranding=1&iv_load_policy=3&fs=1&cc_load_policy=0&playsinline=1&enablejsapi=1&origin=${window.location.origin}&vq=hd1080`;
          video.src = newSrc;
        }
      });
    };

    // Run immediately to prevent any auto-play
    preventAutoPlay();
    
    const handleVoiceSequenceComplete = () => {
      console.log('🎬 Voice sequence complete - starting main video only');
      
      // Stop all videos first
      stopAllVideos();
      
      // Only auto-play the main featured video (first one in the grid)
      const mainVideo = document.querySelector('.video-embed[data-main-video="true"]') as HTMLIFrameElement;
      
      if (mainVideo) {
        const videoId = mainVideo.dataset.videoId;
        const toolTitle = mainVideo.dataset.toolTitle;
        
        console.log(`🎥 Starting main video: ${toolTitle}`);
        
        // Start the main video with autoplay
        const newSrc = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=0&controls=1&rel=0&modestbranding=1&iv_load_policy=3&fs=1&cc_load_policy=0&playsinline=1&enablejsapi=1&origin=${window.location.origin}&vq=hd1080`;
        mainVideo.src = newSrc;
      }
    };

    const stopAllVideos = () => {
      const allVideos = document.querySelectorAll('.video-embed') as NodeListOf<HTMLIFrameElement>;
      allVideos.forEach((video) => {
        const videoId = video.dataset.videoId;
        if (videoId && video.src.includes('autoplay=1')) {
          // Reset to non-autoplay version
          const newSrc = `https://www.youtube-nocookie.com/embed/${videoId}?controls=1&rel=0&modestbranding=1&iv_load_policy=3&fs=1&cc_load_policy=0&playsinline=1&enablejsapi=1&origin=${window.location.origin}&vq=hd1080`;
          video.src = newSrc;
        }
      });
    };

    // Global event listener to stop other videos when one starts
    const handleVideoClick = (event: Event) => {
      const clickedVideo = event.target as HTMLIFrameElement;
      if (clickedVideo.classList.contains('video-embed')) {
        setTimeout(() => {
          const allVideos = document.querySelectorAll('.video-embed') as NodeListOf<HTMLIFrameElement>;
          allVideos.forEach((video) => {
            if (video !== clickedVideo) {
              const videoId = video.dataset.videoId;
              if (videoId) {
                const newSrc = `https://www.youtube-nocookie.com/embed/${videoId}?controls=1&rel=0&modestbranding=1&iv_load_policy=3&fs=1&cc_load_policy=0&playsinline=1&enablejsapi=1&origin=${window.location.origin}&vq=hd1080`;
                video.src = newSrc;
              }
            }
          });
        }, 100);
      }
    };

    // Listen for voice sequence completion and video interactions
    window.addEventListener('voiceSequenceComplete', handleVoiceSequenceComplete);
    document.addEventListener('click', handleVideoClick);

    return () => {
      window.removeEventListener('voiceSequenceComplete', handleVoiceSequenceComplete);
      document.removeEventListener('click', handleVideoClick);
    };
  }, []);

  return null;
};

export default VideoAutoPlayController;