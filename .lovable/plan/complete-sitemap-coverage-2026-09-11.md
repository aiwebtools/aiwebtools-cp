# Complete sitemap coverage

## Goal
Resolve the real sitemap coverage finding without changing the tool database or adding speculative pages.

## Steps
1. Expand the existing sitemap generator with every public, indexable static route.
2. Generate one sitemap URL for every real main category, category, blog post, tool, and spotlight.
3. Keep `https://aiwebtools.app` as the established canonical domain and omit private, admin, redirect-only, search-query, and obsolete ID routes.
4. Preserve the current sitemap mechanism and omit synthetic `<lastmod>` dates.
5. Regenerate the sitemap, validate its URLs and XML, check the build and preview, then mark only completely corrected findings fixed.

## Technical details
- Use `mainCategories`, actual tool category values, `blogPosts`, `allTools`, and `getSpotlights()` as authoritative data sources.
- Keep slug-based tool URLs as canonical; do not add `/tool/:toolId` aliases.
- Leave the optional AI-agent comparison content finding unchanged because it is not a defect and was not requested.
