import { allTools } from "@/data/toolsData";

/**
 * Collects all YouTube video URLs from AI Web Tools GPTs
 * Returns a shuffled array of video IDs for the main hero player
 */
export const getShuffledVideoPlaylist = (): string[] => {
  // Collect all unique video URLs from tools
  const videoUrls = allTools
    .filter(tool => tool.videoUrl && tool.directUrl?.includes('lovable.app'))
    .map(tool => tool.videoUrl!)
    .filter((url, index, self) => self.indexOf(url) === index); // Remove duplicates

  console.log(`🎬 Found ${videoUrls.length} unique AI Web Tools videos for playlist`);

  // Extract video IDs from YouTube URLs
  const videoIds = videoUrls
    .map(url => {
      // Handle both youtube.com and youtu.be formats
      const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&?]+)/);
      return match ? match[1] : null;
    })
    .filter((id): id is string => id !== null);

  // Shuffle the array using Fisher-Yates algorithm
  const shuffled = [...videoIds];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  console.log(`🎲 Shuffled ${shuffled.length} videos for random playback`);
  return shuffled;
};

/**
 * Creates a YouTube embed URL for the playlist
 */
export const createPlaylistEmbedUrl = (videoIds: string[], currentIndex: number = 0): string => {
  if (videoIds.length === 0) {
    // Fallback to original video if no videos found
    return "https://www.youtube.com/embed/4zflGSSuBcA?autoplay=1&mute=1&controls=1&rel=0&modestbranding=1&enablejsapi=1&playsinline=1&hd=1&vq=hd1080&quality=hd1080&loop=0&iv_load_policy=3&cc_load_policy=0&fs=1&color=red&theme=dark";
  }

  const currentVideoId = videoIds[currentIndex];
  
  // Only the first video (index 0) should start muted for autoplay policies
  // Subsequent videos will be unmuted by the unmute logic in Index.tsx
  const muteParam = currentIndex === 0 ? "mute=1" : "mute=0";
  
  return `https://www.youtube.com/embed/${currentVideoId}?autoplay=1&${muteParam}&controls=1&rel=0&modestbranding=1&enablejsapi=1&playsinline=1&hd=1&vq=hd1080&quality=hd1080&loop=0&iv_load_policy=3&cc_load_policy=0&fs=1&color=red&theme=dark`;
};
