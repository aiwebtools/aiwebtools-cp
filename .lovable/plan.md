## Master's Consolidated Plan

### 1. Remove rogue "Stabilizing Matrix Route" cube (regression)
- `src/App.tsx` `PageLoader`: strip the rotating 3D cube + "Stabilizing Matrix Route" label. Replace with a transparent `bg-background` shell (keeps `data-aiwt-route-fallback` marker for telemetry). Nothing else touched — the real Matrix boot loader in `main.tsx` stays.

### 2. NEW category: "AI TOOL DATABASES" (25 entries, AIWebTools first)
- **Category registration**
  - Add `AI TOOL DATABASES` (emoji `📚`, unity-themed description) to `src/utils/mainCategoryMapping/specializedCategories.ts` so it appears in filters, category pages, mobile menu, and main category selector.
  - Add matching color style (matrix-green gradient) to `src/utils/categoryStyles/index.ts`.
  - Add detection helper in `src/utils/categoryUtils/` so tools tagged `AI Tool Databases` filter into the category correctly.
- **Tools file:** create `src/data/tools/aiToolDatabases2026.ts` with 25 real, reputable directories, AIWebTools.ai always first:
  1. AIWebTools.ai (self — dominant, top slot, `?via=aiwebtools` self-link)
  2. Toolify.ai, 3. Futurepedia, 4. There's An AI For That, 5. AIToolGuru, 6. AI Tools Directory, 7. Insidr.ai, 8. AI Scout, 9. Future Tools, 10. Supertools, 11. TopAI.tools, 12. AI Tool Hunt, 13. AI Tool Report, 14. AI Valley, 15. Easy With AI, 16. AI Tools Arena, 17. AIToolMall, 18. Ainave, 19. AI Tools Marketer, 20. AI Finder, 21. GPTE.ai, 22. AI Tool Tracker, 23. AiToolsClub, 24. AllThingsAI, 25. AI Library.
  - Every entry: `category: "AI TOOL DATABASES"`, unity-themed description ("We are all one — this directory celebrates other AI databases as fellow guides on the same journey"), affiliate `?via=aiwebtools` where applicable, rich tags (`ai directory`, `ai tool database`, competitor names, `unity`, etc.) for full search indexability.
- **Custom hero images:** 25 unique matrix-green SVG heroes in `src/assets/tools/ai-tool-databases-2026/` — each showing the DB's name + AIWEBTOOLS.AI logo in bottom-right corner (small for 3rd-party, prominent for our own).
- **Wire-up:** append the batch to `src/data/toolsCollection.ts`, add search keywords in `src/data/keywords/` so queries like "ai directory", "toolify", "futurepedia" surface the whole category.

### 3. "Use AI for Good" line + Human Bill of Rights CTA
- Add a single Matrix-green tagline to `src/components/Footer.tsx` (visible site-wide): "Use AI for good — pass a Bill of Rights protecting humanity from self-aware machines. Remember your Light within. The choice is ours."
- Small link on that line to the existing AI Human Bill of Rights GPT page.

### 4. Fix social preview thumbnails (og:image not rendering)
Root cause: `tool.imageUrl` is often a bundled/imported asset URL (relative or hashed) which social scrapers (Facebook, X, Discord, iMessage) cannot fetch.
- Update `getOgImage()` in `src/components/ImprovedSEOHead.tsx` to:
  - Only return `tool.imageUrl` when it starts with `http://` or `https://`.
  - Otherwise, prefix with `https://aiwebtools.ai` when it starts with `/`.
  - Fall back to `/og-default.jpg` (verified 200 OK) for any bundled/local paths that would break scrapers.
- Same treatment in `src/components/SEOMetaTags.tsx` and any tool-page-level meta.
- Add a `og:image:secure_url` mirror and ensure absolute URL is used in `twitter:image` too.
- Verify with a curl of a tool page's rendered HTML that og:image is absolute.

### 5. Email signup + weekly digest (carried over, still pending approval)
- Approve migration for `public.email_subscribers` (email unique, per-topic prefs, unsubscribe_token, admin-only RLS, anon INSERT).
- Edge functions: `subscribe-email`, `notify-new-tool` (manual admin trigger), `send-weekly-digest` (pg_cron Sundays 9am ET via `pg_net`).
- Wire existing `EmailSignupModal` "Subscribe" button + header/footer/mobile-menu CTA to the edge function. Matrix-themed Resend template with unsubscribe link.

### 6. Verification
- Screenshot mobile viewport confirming cube loader gone.
- Curl a tool page + homepage: confirm `og:image` is a full `https://…` URL.
- Confirm new category shows in main menu, filters, and search returns all 25 DBs by name and by "ai directory".
- Send a test digest to Master's inbox.

**Reply "approved" and I ship the whole batch, Master.**