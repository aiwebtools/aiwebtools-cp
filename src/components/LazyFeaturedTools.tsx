import React, { memo } from 'react';
import FeaturedToolsSection from '@/components/tools/FeaturedToolsSection';

interface LazyFeaturedToolsProps {
  onToolsLoaded?: (count: number) => void;
}

const LazyFeaturedTools = memo(({ onToolsLoaded }: LazyFeaturedToolsProps) => {
  return <FeaturedToolsSection onToolsLoaded={onToolsLoaded} />;
});

LazyFeaturedTools.displayName = 'LazyFeaturedTools';

export default LazyFeaturedTools;