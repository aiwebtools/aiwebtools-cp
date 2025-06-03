
import { useState, useEffect, useRef } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Clear the previous timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Set a new timeout
    timeoutRef.current = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cleanup function
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [value, delay]);

  return debouncedValue;
}

// Mobile-optimized debounce - INSTANT for mobile
export function useSearchDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Clear the previous timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // If value is empty, update immediately for better UX
    if (!value || (typeof value === 'string' && value.trim() === '')) {
      setDebouncedValue(value);
      return;
    }

    // Detect mobile and use ZERO delay for mobile
    const isMobile = window.innerWidth < 768 || 'ontouchstart' in window;
    
    if (isMobile) {
      // INSTANT response on mobile - no debouncing at all
      setDebouncedValue(value);
      return;
    }
    
    // Desktop gets minimal delay
    timeoutRef.current = setTimeout(() => {
      setDebouncedValue(value);
    }, Math.min(delay, 1)); // Maximum 1ms delay on desktop

    // Cleanup function
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [value, delay]);

  return debouncedValue;
}

// Instant response hook for mobile typing feedback
export function useInstantSearch<T>(value: T): T {
  return value; // No debouncing for instant visual feedback
}
