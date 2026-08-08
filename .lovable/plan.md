# Platform Automations — Proposed Suite

Right now the platform has zero scheduled automation: `pg_cron` is not enabled, so the weekly digest edge function only ever runs when triggered by hand, submissions wait for manual review, dead tool links are only found by users, and the analytics data collected in `tool_analytics` is never surfaced unless someone opens the admin dashboard.

Below are the automations recommended, ranked by value to the directory and to the business.

## Tier 1 — Highest value

**1. Weekly digest on a schedule**
The `send-weekly-digest` function already exists and is fully built. Enable scheduling so it fires every Sunday morning to confirmed subscribers, with the subject/body auto-composed from tools added in the last 7 days instead of static copy.

**2. Automated dead-link / link-rot sweep**
A nightly job walks a slice of the tool database (a few hundred per night, full rotation weekly), requests each destination URL, and records failures. Tools failing 3 consecutive checks get flagged in a report emailed to the admin addresses. Nothing is ever auto-removed from the database — flag only, you decide.

**3. Submission triage**
New rows in `tool_submissions` trigger an instant admin notification email plus an automatic first-pass screen (URL reachable, not a duplicate of an existing tool, safe-content check) so approved-ready submissions land pre-vetted rather than raw.

## Tier 2 — Growth and insight

**4. Weekly analytics report to admin**
Every Monday, a summary email from `tool_analytics`: top viewed/clicked tools, fastest risers, zero-traffic tools worth better imagery or tags, search terms returning nothing, and week-over-week traffic movement.

**5. Zero-result search capture → content gaps**
Log searches that return nothing, then roll them into the weekly report as a ranked "tools people want that we don't have" list — this directly feeds the next tool batch and drives SEO.

**6. Automatic sitemap + RSS refresh**
Regenerate `sitemap.xml`, `rss.xml`, and `atom.xml` on every deploy rather than only when the script is run by hand, so newly added tools are submitted to search engines immediately.

## Tier 3 — Maintenance hygiene

**7. Error-log digest and spike alert**
Daily rollup of `error_logs`; an immediate alert email if error volume spikes beyond normal so regressions are caught before users report them.

**8. Nightly duplicate audit**
Run the existing `scripts/audit-duplicates.ts` logic on a schedule and report any new exact duplicates introduced by a batch, rather than discovering them visually on a category page.

**9. Image-coverage audit**
Weekly list of tools still falling back to emoji instead of a custom hero image, so image batches always target real gaps.

## Technical notes

- Requires enabling `pg_cron` and `pg_net` on the project; cron jobs call the edge functions over HTTPS.
- New edge functions: `link-health-sweep`, `weekly-analytics-report`, `error-digest`, `content-gap-report`. Existing `send-weekly-digest` and `screen-tool-url` are reused as-is.
- New tables: `link_health` (tool title, url, last checked, consecutive failures, status) and `search_misses` (query, count, last seen), both with RLS restricting reads to admins and grants for `service_role`.
- Digest/report emails go through the existing Resend connector and the `ADMIN_EMAIL_PRIMARY` / `ADMIN_EMAIL_SECONDARY` secrets.
- No automation ever deletes or edits a tool record. Every destructive-looking finding is report-only and awaits your approval.

## Suggested build order

Start with Tier 1 (items 1–3) as one pass, verify the emails and the first sweep report land correctly, then move to Tier 2.
