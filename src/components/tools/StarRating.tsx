
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
  const [currentVoteCount, setCurrentVoteCount] = useState(totalVotes);

  // Check if user has already voted for this tool
  useEffect(() => {
    if (toolId) {
      const votedTools = JSON.parse(localStorage.getItem('votedTools') || '{}');
      const toolVoteData = votedTools[toolId];
      if (toolVoteData) {
        setUserRating(toolVoteData.rating);
        setHasVoted(true);
        setCurrentVoteCount(toolVoteData.voteCount);
      }
    }
  }, [toolId]);

  const handleRate = (newRating: number) => {
    if (hasVoted || !toolId) return;

    setUserRating(newRating);
    setHasVoted(true);
    const newVoteCount = currentVoteCount + 1;
    setCurrentVoteCount(newVoteCount);
    
    // Store vote in localStorage
    const votedTools = JSON.parse(localStorage.getItem('votedTools') || '{}');
    votedTools[toolId] = {
      rating: newRating,
      voteCount: newVoteCount,
      timestamp: Date.now()
    };
    localStorage.setItem('votedTools', JSON.stringify(votedTools));
    
    onRate?.(newRating);
  };

  const displayRating = userRating || rating;
  const displayVotes = currentVoteCount;

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
