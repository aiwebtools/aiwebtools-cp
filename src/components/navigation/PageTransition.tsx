import { ReactNode, useEffect, useState } from 'react';
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

  useEffect(() => {
    // Start loading and fade out
    setIsLoading(true);
    setIsVisible(false);
    
    // After fade out, update content and fade in
    const timeout = setTimeout(() => {
      setDisplayedChildren(children);
      setIsVisible(true);
      setIsLoading(false);
    }, 150);

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  // Update children immediately if they change without route change
  useEffect(() => {
    setDisplayedChildren(children);
  }, [children]);

  return (
    <>
      <MatrixProgressBar isLoading={isLoading} duration={150} />
      <div
        className={`transition-all duration-200 ease-out ${
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
