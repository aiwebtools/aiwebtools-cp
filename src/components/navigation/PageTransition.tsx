import { ReactNode, useEffect, useState, useRef, useCallback, memo } from 'react';
import { useLocation } from 'react-router-dom';
import MatrixProgressBar from './MatrixProgressBar';

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = memo(({ children }: PageTransitionProps) => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [displayedChildren, setDisplayedChildren] = useState(children);
  const previousPathRef = useRef(location.pathname);
  const isFirstMount = useRef(true);
  const transitionTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Detect if navigating to a tool detail page
  const isToolPage = useCallback((path: string) => {
    const nonToolPatterns = [
      /^\/$/,
      /^\/category\//,
      /^\/main-category\//,
      /^\/tool\//,
      /^\/similar-tools\//,
      /^\/ai-tools-hub/,
      /^\/ai-agents-directory/,
      /^\/chatgpt-alternatives/,
      /^\/favorites/,
      /^\/disclaimers/,
      /^\/our-story/,
      /^\/submit-tool/,
    ];
    return !nonToolPatterns.some(pattern => pattern.test(path));
  }, []);

  const navigatingToToolPage = isToolPage(location.pathname);

  useEffect(() => {
    // Skip animation on first mount
    if (isFirstMount.current) {
      isFirstMount.current = false;
      previousPathRef.current = location.pathname;
      return;
    }

    // Only animate if the path actually changed
    if (previousPathRef.current === location.pathname) {
      return;
    }

    // Clear any pending timeout
    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current);
    }

    previousPathRef.current = location.pathname;
    
    // FAST transition - minimal delay for snappy navigation
    const transitionDuration = 100;
    
    // Start loading and fade out
    setIsLoading(true);
    setIsVisible(false);
    
    // After QUICK fade out, update content and fade in
    transitionTimeoutRef.current = setTimeout(() => {
      setDisplayedChildren(children);
      setIsVisible(true);
      setIsLoading(false);
    }, transitionDuration);

    return () => {
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, [location.pathname, navigatingToToolPage, children]);

  // Update children immediately if they change without route change
  useEffect(() => {
    if (!isLoading) {
      setDisplayedChildren(children);
    }
  }, [children, isLoading]);

  return (
    <>
      <MatrixProgressBar 
        isLoading={isLoading} 
        duration={100}
        isToolPage={navigatingToToolPage}
      />
      <div
        className={`transition-opacity duration-100 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          // Hardware acceleration for smoother transitions
          transform: 'translateZ(0)',
          willChange: isLoading ? 'opacity' : 'auto',
        }}
      >
        {displayedChildren}
      </div>
    </>
  );
});

PageTransition.displayName = 'PageTransition';

export default PageTransition;
