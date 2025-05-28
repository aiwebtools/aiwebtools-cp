
import { useState } from "react";
import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  totalVotes: number;
  onRate?: (rating: number) => void;
  showVoteCount?: boolean;
}

const StarRating = ({ rating, totalVotes, onRate, showVoteCount = true }: StarRatingProps) => {
  const [hoveredRating, setHoveredRating] = useState(0);
  const [userRating, setUserRating] = useState(0);

  const handleRate = (newRating: number) => {
    setUserRating(newRating);
    onRate?.(newRating);
  };

  const displayRating = userRating || rating;
  const displayVotes = userRating ? totalVotes + 1 : totalVotes;

  return (
    <div className="flex items-center space-x-2">
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => handleRate(star)}
            onMouseEnter={() => setHoveredRating(star)}
            onMouseLeave={() => setHoveredRating(0)}
            className="focus:outline-none transition-colors duration-200"
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
    </div>
  );
};

export default StarRating;
