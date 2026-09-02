
import { useEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

interface UseScrollMemoryProps {
  displayedCount: number;
  selectedCategory: string | null;
  searchTerm: string;
  ready?: boolean;
  onRestoreDisplayedCount?: (count: number) => void;
}

export const useScrollMemory = ({
  displayedCount,
  selectedCategory,
  searchTerm,
  ready = true,
  onRestoreDisplayedCount,
}: UseScrollMemoryProps) => {
  const location = useLocation();
  const navigationType = useNavigationType();
  const stateRef = useRef({ displayedCount, selectedCategory, searchTerm });
  const restoredLocationRef = useRef<string | null>(null);
  stateRef.current = { displayedCount, selectedCategory, searchTerm };

  const storageKey = `aitools-scroll:${location.pathname}${location.search}`;

  // Save scroll position when navigating away
  useEffect(() => {
    const saveScrollPosition = () => {
      const current = stateRef.current;
      sessionStorage.setItem(storageKey, JSON.stringify({
        scrollY: window.scrollY,
        displayedCount: current.displayedCount,
        selectedCategory: current.selectedCategory || "",
        searchTerm: current.searchTerm,
      }));
    };

    // Save position before page unload or navigation
    window.addEventListener('beforeunload', saveScrollPosition);
    
    return () => {
      window.removeEventListener('beforeunload', saveScrollPosition);
      saveScrollPosition(); // Save when component unmounts
    };
  }, [storageKey]);

  // Restore scroll position and state when coming back
  useEffect(() => {
    // Restoration belongs only to browser back/forward navigation. Mark this
    // location before scheduling so it can never run twice for the same mount.
    if (!ready || navigationType !== "POP" || restoredLocationRef.current === location.key) return;
    restoredLocationRef.current = location.key;

    const raw = sessionStorage.getItem(storageKey);
    if (!raw) return;

    let scrollY = 0;
    try {
      const saved = JSON.parse(raw) as { scrollY?: number; displayedCount?: number };
      scrollY = Number.isFinite(saved.scrollY) ? Math.max(0, saved.scrollY || 0) : 0;
      if (Number.isFinite(saved.displayedCount) && saved.displayedCount) {
        onRestoreDisplayedCount?.(Math.max(1, saved.displayedCount));
      }
    } catch {
      return;
    }

    let secondFrame = 0;
    let cancelledByUser = false;
    const cancelRestore = () => {
      cancelledByUser = true;
      cancelAnimationFrame(firstFrame);
      if (secondFrame) cancelAnimationFrame(secondFrame);
    };
    const firstFrame = requestAnimationFrame(() => {
      secondFrame = requestAnimationFrame(() => {
        if (!cancelledByUser) window.scrollTo({ top: scrollY, behavior: "auto" });
      });
    });
    window.addEventListener("wheel", cancelRestore, { passive: true, once: true });
    window.addEventListener("touchmove", cancelRestore, { passive: true, once: true });
    window.addEventListener("pointerdown", cancelRestore, { passive: true, once: true });

    // Cancelling both frames is critical: an old page must never scroll a newly
    // mounted category after navigation.
    return () => {
      cancelAnimationFrame(firstFrame);
      if (secondFrame) cancelAnimationFrame(secondFrame);
      window.removeEventListener("wheel", cancelRestore);
      window.removeEventListener("touchmove", cancelRestore);
      window.removeEventListener("pointerdown", cancelRestore);
    };
  }, [location.key, navigationType, onRestoreDisplayedCount, ready, storageKey]);
};
