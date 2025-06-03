
import { useState, useEffect, useRef } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  // INSTANT RESPONSE - NO DEBOUNCING FOR LIGHTNING SPEED ON MOBILE
  return value;
}

// LIGHTNING FAST search - NO debouncing at all for instant response on Apple devices
export function useSearchDebounce<T>(value: T, delay: number): T {
  // RETURN VALUE IMMEDIATELY for lightning fast search
  return value;
}

// INSTANT response hook for lightning fast typing on mobile
export function useInstantSearch<T>(value: T): T {
  return value; // NO delay whatsoever for lightning speed
}

// Mobile-optimized hook for Apple devices
export function useMobileOptimizedSearch<T>(value: T): T {
  return value; // Zero latency for iOS and mobile devices
}
