import React, { memo } from 'react';
import SearchPortal from '@/components/SearchPortal';

const LazySearchPortal = memo(() => {
  return <SearchPortal />;
});

LazySearchPortal.displayName = 'LazySearchPortal';

export default LazySearchPortal;