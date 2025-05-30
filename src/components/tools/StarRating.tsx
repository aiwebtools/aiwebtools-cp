
import { useState, useEffect } from "react";
import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  totalVotes: number;
  onRate?: (rating: number) => void;
  showVoteCount?: boolean;
  toolId?: string; // Add toolId to track votes per tool
}

const StarRating = ({ rating, totalVotes, onRate, showVoteCount = true, toolId }: StarRatingProps) => {
  const [hoveredRating, setHoveredRating] = useState(0);
  const [userRating, setUserRating] = useState(0);
  const [hasVoted, setHasVoted] = useState(false);
  const [currentRating, setCurrentRating] = useState(rating || 4.1); // Provide default fallback
  const [currentVoteCount, setCurrentVoteCount] = useState(totalVotes || 1000); // Provide default fallback

  // Check if user has already voted for this tool
  useEffect(() => {
    if (toolId) {
      const votedTools = JSON.parse(localStorage.getItem('votedTools') || '{}');
      const toolVoteData = votedTools[toolId];
      if (toolVoteData) {
        setUserRating(toolVoteData.userRating);
        setHasVoted(true);
        setCurrentRating(toolVoteData.currentRating);
        setCurrentVoteCount(toolVoteData.voteCount);
      } else {
        // Initialize with provided props if no local data exists
        setCurrentRating(rating || 4.1);
        setCurrentVoteCount(totalVotes || 1000);
      }
    } else {
      // Initialize with provided props when no toolId
      setCurrentRating(rating || 4.1);
      setCurrentVoteCount(totalVotes || 1000);
    }
  }, [toolId, rating, totalVotes]);

  const handleRate = (newRating: number) => {
    if (hasVoted || !toolId) return;

    setUserRating(newRating);
    setHasVoted(true);
    
    // Calculate new average: (current_rating * current_votes + new_rating) / (current_votes + 1)
    const totalRatingPoints = currentRating * currentVoteCount;
    const newTotalRatingPoints = totalRatingPoints + newRating;
    const newVoteCount = currentVoteCount + 1;
    const newAverageRating = newTotalRatingPoints / newVoteCount;
    
    setCurrentRating(newAverageRating);
    setCurrentVoteCount(newVoteCount);
    
    // Store vote in localStorage
    const votedTools = JSON.parse(localStorage.getItem('votedTools') || '{}');
    votedTools[toolId] = {
      userRating: newRating,
      currentRating: newAverageRating,
      voteCount: newVoteCount,
      timestamp: Date.now()
    };
    localStorage.setItem('votedTools', JSON.stringify(votedTools));
    
    onRate?.(newRating);
  };

  // Ensure displayRating is always a valid number
  const displayRating = currentRating || rating || 4.1;
  const displayVotes = currentVoteCount || totalVotes || 1000;

  return (
    <div className="flex items-center space-x-2">
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => handleRate(star)}
            onMouseEnter={() => !hasVoted && setHoveredRating(star)}
            onMouseLeave={() => setHoveredRating(0)}
            className={`focus:outline-none transition-colors duration-200 ${
              hasVoted ? 'cursor-default' : 'cursor-pointer hover:scale-110'
            }`}
            disabled={hasVoted}
            title={hasVoted ? 'You have already voted' : 'Click to rate'}
          >
            <Star
              className={`w-4 h-4 ${
                star <= (hoveredRating || displayRating)
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-400"
              }`}
            />
          </button>
        ))}
      </div>
      <span className="text-sm text-cyan-300 font-medium">
        {displayRating.toFixed(1)}
      </span>
      {showVoteCount && (
        <span className="text-xs text-gray-400">
          ({displayVotes.toLocaleString()} votes)
        </span>
      )}
      {hasVoted && (
        <span className="text-xs text-green-400 font-medium">
          ✓ Voted
        </span>
      )}
    </div>
  );
};

export default StarRating;
