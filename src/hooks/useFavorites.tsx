import { useState, useEffect, createContext, useContext, ReactNode } from 'react';
import { Tool } from '@/types/tools';

interface FavoritesContextType {
  favorites: Tool[];
  addFavorite: (tool: Tool) => void;
  removeFavorite: (toolTitle: string) => void;
  isFavorite: (toolTitle: string) => boolean;
  toggleFavorite: (tool: Tool) => void;
  getFavoritesCount: () => number;
  clearFavorites: () => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

const FAVORITES_STORAGE_KEY = 'aiwebtools-favorites';

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<Tool[]>([]);

  // Load favorites from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(FAVORITES_STORAGE_KEY);
      if (saved) {
        const parsedFavorites = JSON.parse(saved);
        setFavorites(parsedFavorites);
      }
    } catch (error) {
      console.error('Error loading favorites:', error);
    }
  }, []);

  // Save to localStorage whenever favorites change
  useEffect(() => {
    try {
      localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites));
    } catch (error) {
      console.error('Error saving favorites:', error);
    }
  }, [favorites]);

  const addFavorite = (tool: Tool) => {
    setFavorites(prev => {
      if (!prev.some(fav => fav.title === tool.title)) {
        return [...prev, tool];
      }
      return prev;
    });
  };

  const removeFavorite = (toolTitle: string) => {
    setFavorites(prev => prev.filter(fav => fav.title !== toolTitle));
  };

  const isFavorite = (toolTitle: string) => {
    return favorites.some(fav => fav.title === toolTitle);
  };

  const toggleFavorite = (tool: Tool) => {
    if (isFavorite(tool.title)) {
      removeFavorite(tool.title);
    } else {
      addFavorite(tool);
    }
  };

  const getFavoritesCount = () => favorites.length;

  const clearFavorites = () => {
    setFavorites([]);
  };

  return (
    <FavoritesContext.Provider value={{
      favorites,
      addFavorite,
      removeFavorite,
      isFavorite,
      toggleFavorite,
      getFavoritesCount,
      clearFavorites
    }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
}