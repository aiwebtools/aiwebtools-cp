import { useEffect, useRef, useState, useCallback } from 'react';

interface UseIntersectionObserverOptions extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
  initialIsIntersecting?: boolean;
}

export const useIntersectionObserver = (
  options: UseIntersectionObserverOptions = {}
) => {
  const {
    threshold = 0,
    root = null,
    rootMargin = '0%',
    freezeOnceVisible = false,
    initialIsIntersecting = false,
  } = options;

  const [entry, setEntry] = useState<IntersectionObserverEntry>();
  const [isIntersecting, setIsIntersecting] = useState(initialIsIntersecting);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  const elementRef = useRef<Element>();

  const frozen = freezeOnceVisible && hasBeenVisible;

  const updateEntry = useCallback(([entry]: IntersectionObserverEntry[]): void => {
    const isIntersecting = entry.isIntersecting;
    
    setEntry(entry);
    setIsIntersecting(isIntersecting);
    
    if (isIntersecting && !hasBeenVisible) {
      setHasBeenVisible(true);
    }
  }, [hasBeenVisible]);

  useEffect(() => {
    const node = elementRef?.current;
    const hasIOSupport = !!window.IntersectionObserver;

    if (!hasIOSupport || frozen || !node) return;

    const observerParams = { threshold, root, rootMargin };
    const observer = new IntersectionObserver(updateEntry, observerParams);

    observer.observe(node);

    return () => observer.disconnect();
  }, [elementRef, JSON.stringify(threshold), root, rootMargin, frozen, updateEntry]);

  const setElementRef = useCallback((element: Element | null) => {
    elementRef.current = element || undefined;
  }, []);

  return {
    ref: setElementRef,
    entry,
    isIntersecting: frozen ? true : isIntersecting,
    hasBeenVisible,
  };
};