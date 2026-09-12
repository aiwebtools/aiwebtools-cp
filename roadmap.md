# AIWebTools Roadmap

1. [x] Tool submission form + public-submissions category (name, description, link, image upload, AI safety screen, auto-publish, `/user-submitted` category + detail pages). `/submit-tool` now uses the same upload-capable flow.
2. [x] Publish aiwebtools.app (GitHub entry + spotlight pages), verify property in Search Console, submit sitemap. Sitemap accepted by Google with 0 errors; 6,157 URLs pushed to Bing via IndexNow.
3. [x] Category ranking page — click tracking on tool cards, top-ranked tools first in each category. `/rankings` live; card clicks flow tool_analytics → sync_tool_popularity trigger → RankingsPage.
4. [x] Real pages for each custom GPT and Perplexity bot (description, use case, how-to-use). 487 spotlight pages: 300 custom GPTs/Gems + 187 Perplexity bots; all in sitemap (6,344 URLs).
5. [x] Reviews section on each tool page (seeded avatars, real ratings, comments). ToolReviews live on every tool page; tool_reviews table accepting submissions; AggregateRating + Review schema emitted.

## Next candidates
- Resubmit enlarged sitemap (6,344 URLs) to Google Search Console + IndexNow after publish.
- Live signed-in bot testing (chat + picture) for in-site GPT suite.
- Add remaining 60+ master-list GPTs with custom branded images and links.
