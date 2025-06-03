
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

// Ultra-fast debounce hook for search that responds immediately to typing
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

    // Use ultra-short delay for instant responsiveness - reduced from 50ms to 10ms
    timeoutRef.current = setTimeout(() => {
      setDebouncedValue(value);
    }, Math.min(delay, 10));

    // Cleanup function
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [value, delay]);

  return debouncedValue;
}

// Immediate response hook for typing feedback - no delay at all
export function useInstantSearch<T>(value: T): T {
  return value; // No debouncing for instant visual feedback
}
