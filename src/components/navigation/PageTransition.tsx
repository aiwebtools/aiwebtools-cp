import { ReactNode, useEffect, useState, useRef, useCallback, memo } from 'react';
import { useLocation } from 'react-router-dom';
import MatrixProgressBar from './MatrixProgressBar';

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = memo(({ children }: PageTransitionProps) => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const previousPathRef = useRef(location.pathname);
  const isFirstMount = useRef(true);
  const transitionTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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
    if (isFirstMount.current) {
      isFirstMount.current = false;
      previousPathRef.current = location.pathname;
      return;
    }

    if (previousPathRef.current === location.pathname) {
      return;
    }

    // Just track the path change for potential future use; no loading state
    previousPathRef.current = location.pathname;
  }, [location.pathname]);

  return (
    <div
      style={{
        transform: 'translateZ(0)',
        willChange: 'auto',
      }}
    >
      {children}
    </div>
  );
});

PageTransition.displayName = 'PageTransition';

export default PageTransition;
