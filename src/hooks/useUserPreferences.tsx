
import { useState, useEffect } from 'react';

interface UserPreferences {
  favorites: string[];
  history: string[];
  searchHistory: string[];
  preferences: {
    darkMode: boolean;
    compactView: boolean;
    autoLoadMore: boolean;
  };
}

const DEFAULT_PREFERENCES: UserPreferences = {
  favorites: [],
  history: [],
  searchHistory: [],
  preferences: {
    darkMode: true,
    compactView: false,
    autoLoadMore: true,
  }
};

export const useUserPreferences = () => {
  const [userPrefs, setUserPrefs] = useState<UserPreferences>(DEFAULT_PREFERENCES);

  useEffect(() => {
    const saved = localStorage.getItem('aiwebtools_preferences');
    if (saved) {
      try {
        setUserPrefs(JSON.parse(saved));
      } catch (error) {
        console.error('Error loading user preferences:', error);
      }
    }
  }, []);

  const savePreferences = (prefs: UserPreferences) => {
    setUserPrefs(prefs);
    localStorage.setItem('aiwebtools_preferences', JSON.stringify(prefs));
  };

  const addToFavorites = (toolTitle: string) => {
    const newPrefs = {
      ...userPrefs,
      favorites: [...userPrefs.favorites.filter(f => f !== toolTitle), toolTitle]
    };
    savePreferences(newPrefs);
  };

  const removeFromFavorites = (toolTitle: string) => {
    const newPrefs = {
      ...userPrefs,
      favorites: userPrefs.favorites.filter(f => f !== toolTitle)
    };
    savePreferences(newPrefs);
  };

  const addToHistory = (toolTitle: string) => {
    const newPrefs = {
      ...userPrefs,
      history: [toolTitle, ...userPrefs.history.filter(h => h !== toolTitle)].slice(0, 50)
    };
    savePreferences(newPrefs);
  };

  const addToSearchHistory = (searchTerm: string) => {
    if (!searchTerm.trim()) return;
    const newPrefs = {
      ...userPrefs,
      searchHistory: [searchTerm, ...userPrefs.searchHistory.filter(s => s !== searchTerm)].slice(0, 20)
    };
    savePreferences(newPrefs);
  };

  const isFavorite = (toolTitle: string) => {
    return userPrefs.favorites.includes(toolTitle);
  };

  return {
    userPrefs,
    addToFavorites,
    removeFromFavorites,
    addToHistory,
    addToSearchHistory,
    isFavorite,
    savePreferences,
  };
};
