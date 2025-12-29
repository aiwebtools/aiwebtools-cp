# Memory: search/search-bar-optimized-settings-v36
Updated: 2025-12-29

## Search Bar Performance Settings (WORKING PERFECTLY)

The search bar is now optimized for instant results with smooth typing. DO NOT change these settings without careful consideration:

### useGlobalSearch.ts Critical Settings:
- **Cache Version**: `SEARCH_CACHE_VERSION = "v36"` - increment when search logic changes
- **Quick Search**: Uses `queueMicrotask()` for sub-millisecond response (NO setTimeout/debounce)
- **Full Search Debounce**: 50ms only - ultra fast refinement after quick search
- **NO requestIdleCallback**: Removed - was causing 3+ second delays
- **Synchronous Full Search**: `searchTools()` runs directly, not deferred

### GlobalSearchInput.tsx Critical Settings:
- **Instant Paint**: `setLocalValue(next)` called immediately on every keystroke
- **Search Trigger**: Uses `queueMicrotask()` - runs after React batch update but before paint
- **NO double-RAF**: Removed - was adding unnecessary frame delays
- **Cleanup**: RAF ref cleanup on unmount

### CSS Performance (performance.css):
- Search inputs have `transform: translateZ(0)` for GPU acceleration
- `transition: none !important` and `animation: none !important` on inputs
- `text-rendering: optimizeSpeed` for faster text display

### Key Architecture:
1. User types → LocalValue updates INSTANTLY (zero delay)
2. queueMicrotask → triggers search in same frame
3. Quick search (performOptimizedSearch) returns results immediately
4. Full search (searchTools) refines results after 50ms debounce
5. Results cached with LRU cache (50 entries max)

### What NOT to do:
- Do NOT add requestIdleCallback - causes multi-second delays
- Do NOT add debounce to quick search - must be instant
- Do NOT use double-RAF for search triggering - too slow
- Do NOT increase full search debounce above 100ms
