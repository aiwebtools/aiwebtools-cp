import React, { useState, useEffect, useCallback, createContext, useContext, ReactNode } from 'react';
import { Tool } from '@/types/tools';

const FAVORITES_STORAGE_KEY = 'aiwebtools_favorites';

export interface FavoritesState {
  favorites: Tool[];
  isFavorite: (toolId: string) => boolean;
  addToFavorites: (tool: Tool) => void;
  removeFromFavorites: (toolId: string) => void;
  toggleFavorite: (tool: Tool) => void;
  clearFavorites: () => void;
  getFavoritesCount: () => number;
}

const FavoritesContext = createContext<FavoritesState | null>(null);

interface FavoritesProviderProps {
  children: ReactNode;
}

export const FavoritesProvider: React.FC<FavoritesProviderProps> = ({ children }) => {
  const [favorites, setFavorites] = useState<Tool[]>([]);

  // Load favorites from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(FAVORITES_STORAGE_KEY);
      if (stored) {
        const parsedFavorites = JSON.parse(stored);
        setFavorites(parsedFavorites);
      }
    } catch (error) {
      console.error('Error loading favorites from localStorage:', error);
    }
  }, []);

  // Save favorites to localStorage whenever favorites change
  useEffect(() => {
    try {
      localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites));
    } catch (error) {
      console.error('Error saving favorites to localStorage:', error);
    }
  }, [favorites]);

  const isFavorite = useCallback((toolId: string) => {
    return favorites.some(fav => fav.title === toolId);
  }, [favorites]);

  const addToFavorites = useCallback((tool: Tool) => {
    setFavorites(prev => {
      // Prevent duplicates
      if (prev.some(fav => fav.title === tool.title)) {
        return prev;
      }
      return [...prev, tool];
    });
  }, []);

  const removeFromFavorites = useCallback((toolId: string) => {
    setFavorites(prev => prev.filter(fav => fav.title !== toolId));
  }, []);

  const toggleFavorite = useCallback((tool: Tool) => {
    if (isFavorite(tool.title)) {
      removeFromFavorites(tool.title);
    } else {
      addToFavorites(tool);
    }
  }, [isFavorite, addToFavorites, removeFromFavorites]);

  const clearFavorites = useCallback(() => {
    setFavorites([]);
  }, []);

  const getFavoritesCount = useCallback(() => {
    return favorites.length;
  }, [favorites.length]);

  const value: FavoritesState = {
    favorites,
    isFavorite,
    addToFavorites,
    removeFromFavorites,
    toggleFavorite,
    clearFavorites,
    getFavoritesCount
  };

  return React.createElement(FavoritesContext.Provider, { value }, children);
};

export const useFavorites = (): FavoritesState => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};