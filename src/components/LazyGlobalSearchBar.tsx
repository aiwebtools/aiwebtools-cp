import { lazy, Suspense } from "react";

const GlobalSearchBar = lazy(() => import("@/components/GlobalSearchBar"));

const LazyGlobalSearchBar = () => (
  <Suspense fallback={<div className="h-10 w-full rounded-lg border border-border bg-black/50" aria-hidden="true" />}>
    <GlobalSearchBar />
  </Suspense>
);

export default LazyGlobalSearchBar;