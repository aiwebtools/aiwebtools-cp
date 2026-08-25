import { lazy, Suspense } from "react";

const GlobalSearchBar = lazy(() => import("@/components/GlobalSearchBar"));

// Allows callers (e.g. the mobile hamburger menu) to warm the chunk on tap so the
// input is already in memory by the time the menu paints.
export const prefetchGlobalSearchBar = () => {
  void import("@/components/GlobalSearchBar");
};

interface LazyGlobalSearchBarProps {
  autoFocus?: boolean;
}

const LazyGlobalSearchBar = ({ autoFocus }: LazyGlobalSearchBarProps) => (
  <Suspense fallback={<div className="h-10 w-full rounded-lg border border-border bg-black/50" aria-hidden="true" />}>
    <GlobalSearchBar autoFocus={autoFocus} />
  </Suspense>
);

export default LazyGlobalSearchBar;
