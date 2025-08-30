import React from 'react';
import { Heart } from 'lucide-react';
import { Tool } from '@/types/tools';
import { useFavorites } from '@/hooks/useFavorites';
import { Button } from '@/components/ui/button';

interface FavoriteButtonProps {
  tool: Tool;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ 
  tool, 
  className = '', 
  size = 'md' 
}) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const isToolFavorite = isFavorite(tool.title);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(tool);
  };

  const sizeClasses = {
    sm: 'w-6 h-6 p-1',
    md: 'w-8 h-8 p-1.5',
    lg: 'w-10 h-10 p-2'
  };

  const iconSizes = {
    sm: 12,
    md: 16,
    lg: 20
  };

  return (
    <Button
      onClick={handleFavoriteClick}
      variant="ghost"
      size="icon"
      className={`
        absolute top-2 right-2 z-10 rounded-full backdrop-blur-sm
        ${isToolFavorite 
          ? 'bg-red-500/90 hover:bg-red-600/90 text-white border border-red-400/50' 
          : 'bg-gray-800/90 hover:bg-gray-700/90 text-gray-300 hover:text-red-400 border border-gray-600/50'
        }
        transition-all duration-200 hover:scale-110 active:scale-95
        ${sizeClasses[size]}
        ${className}
      `}
      title={isToolFavorite ? 'Remove from favorites' : 'Add to favorites'}
      aria-label={isToolFavorite ? 'Remove from favorites' : 'Add to favorites'}
    >
      <Heart 
        size={iconSizes[size]}
        fill={isToolFavorite ? 'currentColor' : 'none'}
        className={`transition-colors duration-200 ${
          isToolFavorite ? 'text-white' : ''
        }`}
      />
    </Button>
  );
};

export default FavoriteButton;