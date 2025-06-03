
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

// LIGHTNING FAST search - NO debouncing at all for instant response
export function useSearchDebounce<T>(value: T, delay: number): T {
  // RETURN VALUE IMMEDIATELY for lightning fast search
  return value;
}

// INSTANT response hook for lightning fast typing
export function useInstantSearch<T>(value: T): T {
  return value; // NO delay whatsoever for lightning speed
}
