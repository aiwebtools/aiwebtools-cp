// Detect if we're in a limited browser and should defer animations for faster initial load
import { useState, useEffect } from 'react';

export const useReducedMotion = () => {
  // Always return false - we want to show effects to everyone
  return false;
};

// No delays - show animations immediately everywhere
export const useDeferredAnimation = () => {
  return true;
};

export default useReducedMotion;
