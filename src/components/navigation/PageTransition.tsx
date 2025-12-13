import { ReactNode, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [displayedChildren, setDisplayedChildren] = useState(children);

  useEffect(() => {
    // Start fade out
    setIsVisible(false);
    
    // After fade out, update content and fade in
    const timeout = setTimeout(() => {
      setDisplayedChildren(children);
      setIsVisible(true);
    }, 150);

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  // Update children immediately if they change without route change
  useEffect(() => {
    setDisplayedChildren(children);
  }, [children]);

  return (
    <div
      className={`transition-all duration-200 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-2'
      }`}
    >
      {displayedChildren}
    </div>
  );
};

export default PageTransition;
