import { ReactNode, useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import MatrixProgressBar from './MatrixProgressBar';

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [displayedChildren, setDisplayedChildren] = useState(children);
  const previousPathRef = useRef(location.pathname);
  const isFirstMount = useRef(true);

  // Detect if navigating to a tool detail page (single slug route like /tool-name)
  const isToolPage = (path: string) => {
    // Tool pages are direct slug routes that don't match other patterns
    const nonToolPatterns = [
      /^\/$/,                           // Home
      /^\/category\//,                  // Category pages
      /^\/main-category\//,             // Main category pages
      /^\/tool\//,                      // Old tool format
      /^\/similar-tools\//,             // Similar tools
      /^\/ai-tools-hub/,                // AI tools hub
      /^\/ai-agents-directory/,         // AI agents
      /^\/chatgpt-alternatives/,        // ChatGPT alternatives
      /^\/favorites/,                   // Favorites
      /^\/disclaimers/,                 // Disclaimers
      /^\/our-story/,                   // Our story
      /^\/submit-tool/,                 // Submit tool
    ];
    
    return !nonToolPatterns.some(pattern => pattern.test(path));
  };

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

    previousPathRef.current = location.pathname;
    
    // Determine transition duration based on page type
    const transitionDuration = navigatingToToolPage ? 200 : 150;
    
    // Start loading and fade out
    setIsLoading(true);
    setIsVisible(false);
    
    // After fade out, update content and fade in
    const timeout = setTimeout(() => {
      setDisplayedChildren(children);
      setIsVisible(true);
      setIsLoading(false);
    }, transitionDuration);

    return () => clearTimeout(timeout);
  }, [location.pathname, navigatingToToolPage]);

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
        duration={navigatingToToolPage ? 200 : 150}
        isToolPage={navigatingToToolPage}
      />
      <div
        className={`transition-all ease-out ${
          navigatingToToolPage ? 'duration-250' : 'duration-200'
        } ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-2'
        }`}
      >
        {displayedChildren}
      </div>
    </>
  );
};

export default PageTransition;
