import React, { memo, useCallback, useState } from 'react';
import { useMobile } from '@/hooks/useMobile';
import { usePerformanceOptimization } from '@/hooks/usePerformanceOptimization';

interface TouchFeedbackProps {
  children: React.ReactNode;
  onTap?: () => void;
  className?: string;
  disabled?: boolean;
}

export const TouchFeedback = memo(({
  children,
  onTap,
  className = '',
  disabled = false
}: TouchFeedbackProps) => {
  const { isTouch, isMobile } = useMobile();
  const { enableReducedMotion } = usePerformanceOptimization();
  const [isPressed, setIsPressed] = useState(false);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (disabled || !isTouch) return;
    e.preventDefault();
    setIsPressed(true);
  }, [disabled, isTouch]);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (disabled || !isTouch) return;
    e.preventDefault();
    setIsPressed(false);
    onTap?.();
  }, [disabled, isTouch, onTap]);

  const handleTouchCancel = useCallback(() => {
    setIsPressed(false);
  }, []);

  if (!isTouch) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      className={`${className} ${
        isPressed ? 'opacity-70 scale-95' : ''
      } ${
        enableReducedMotion ? 'transition-none' : 'transition-all duration-150'
      } touch-manipulation select-none`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchCancel}
      style={{
        WebkitTapHighlightColor: 'transparent',
        transform: isMobile ? 'translateZ(0)' : undefined,
        willChange: isPressed ? 'transform, opacity' : 'auto'
      }}
    >
      {children}
    </div>
  );
});

TouchFeedback.displayName = 'TouchFeedback';