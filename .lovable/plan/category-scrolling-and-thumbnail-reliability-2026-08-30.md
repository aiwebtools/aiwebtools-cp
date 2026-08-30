# Category Scrolling and Thumbnail Reliability

## Goal
Make every category page scroll smoothly on mobile and desktop, continuously reveal unique tools, show each tool's correct thumbnail, and produce no category-page 404 requests or console errors.

## Changes
1. Make category scroll restoration route-specific and one-shot: restore only after the matching category grid is ready, then permanently disengage for that mount.
2. Remove competing category scroll resets and ensure pagination has one guarded loading path with stable ordering and no duplicate records.
3. Stabilize the virtual grid with deterministic row geometry and keys so mobile momentum scrolling cannot create black gaps, flicker, or recycled/repeated cards.
4. Harden thumbnail resolution: use valid local/bundled images and YouTube thumbnails, avoid known expired URLs, and use a request-free fallback when media is unavailable.
5. Trace and eliminate category-page 404 resource requests without changing or removing valid tools.

## Verification
- Run an automated mobile viewport test for every main category.
- Long-scroll each category through multiple pagination batches and verify newly revealed titles remain unique.
- Check visible cards for stable geometry, loaded images/fallbacks, no blank viewport, and no flicker indicators.
- Capture failed network requests, console errors, and runtime errors; finish with zero category-page 404s and no application errors.
- Recheck representative desktop category routes and the production build signal.
