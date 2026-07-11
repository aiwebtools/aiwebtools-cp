# User Submitted Tools — Auto-Publishing Pipeline

Master, here's the full plan for turning your submission form into a self-publishing platform with AI safety screening. Approve and I'll build it in one pass.

## What users get

A "Submit Your AI Tool" flow that:
1. Accepts **name, description, URL, category, image upload (or URL), optional YouTube demo**
2. Sends the URL through an **AI safety screener** (Lovable AI Gateway, `google/gemini-2.5-flash`) that checks for malware/phishing/NSFW/scam patterns and cross-checks Google Safe Browsing-style heuristics
3. On PASS → tool goes **live instantly** in a new **"User Submitted Tools"** category, fully searchable, with its own individual tool page
4. On FAIL → held for manual admin review, submitter emailed the reason
5. Submitter gets a confirmation email either way

## Architecture

### 1. Database (Supabase)
Reuse existing `tool_submissions` table, add columns:
- `status` (`pending` / `approved` / `rejected` / `needs_review`) — default `pending`
- `ai_safety_score` (0-100), `ai_safety_verdict` (text), `ai_safety_reason` (text)
- `image_storage_path` (text) — for uploaded images in Storage
- `slug` (text, unique) — for auto-generated tool page URL
- `published_at` (timestamptz)

New public read policy: anyone can `SELECT` rows where `status='approved'` (so the frontend can list them without auth).

### 2. Storage
New public bucket `user-submitted-tool-images` for user-uploaded hero images. 5MB limit, jpg/png/webp only, validated server-side.

### 3. Edge function: `submit-tool` (upgrade existing)
- Validates input (Zod)
- Uploads image to Storage if provided as base64
- Calls **new** `screen-tool-url` internally (see below)
- Writes row with verdict + status
- Sends confirmation email via existing Resend integration
- Notifies admins if `needs_review`

### 4. Edge function: `screen-tool-url` (new)
- Fetches URL metadata (HEAD + partial GET, timeout 5s)
- Runs Lovable AI Gateway prompt: analyzes URL, domain reputation heuristics, page title/description for malware/phishing/NSFW/scam/non-AI content
- Returns `{ verdict: "safe" | "suspicious" | "blocked", score, reason }`
- Blocks: known bad TLDs w/ scam patterns, redirect chains to unrelated domains, obvious phishing keywords
- Auto-approves only `safe` with score ≥ 80 AND not on a manual blocklist

### 5. Frontend
- **`UserSubmittedToolsPage`** (`/category/user-submitted`) — matrix-themed category page listing all approved submissions, sorted newest first, with search
- **`ToolDetail`** — extended to hydrate from Supabase when slug matches a submission (no code file needed per tool)
- **`SubmitToolModal`** — add image file upload (drag-drop), preview, show "AI is screening your tool…" state with the safety verdict displayed after submit
- **Global search** — new hook `useUserSubmittedTools` fetches approved rows once and merges into the search corpus so submitted tools appear in all search bars
- **Category system** — register `User Submitted Tools` in category mapping w/ green matrix gradient + 🌐 emoji

### 6. Admin
- `AdminAnalytics` gets a new "Pending Submissions" panel: approve/reject/re-screen buttons, view AI verdict + submitter info

## Safety layers (defense in depth)

```text
User submits
   │
   ▼
Zod validation (URL format, length, mime type)
   │
   ▼
Image upload → Storage (mime sniff, size limit)
   │
   ▼
AI URL screener (Lovable AI Gateway)
   │
   ├── SAFE (score ≥ 80)  → auto-approve, publish live
   ├── SUSPICIOUS         → hold for admin review
   └── BLOCKED            → reject, email submitter
   │
   ▼
Admin override always available in AdminAnalytics
```

External links still get `rel="noopener noreferrer nofollow"` + `?via=aiwebtools` affiliate tag on outbound clicks.

## Non-goals for v1
- No user accounts required to submit (keeps friction low; email rate-limit already exists at DB layer — 5/hour)
- No edit-after-submit (submitter emails support if they need changes)
- No auto-generated hero image (user's uploaded image is used as-is; admin can regenerate via existing image tools)

## Rollout order
1. Migration: new columns + storage bucket + public read policy
2. Edge function: `screen-tool-url`
3. Edge function: `submit-tool` upgrade
4. Frontend: SubmitToolModal upgrade, UserSubmittedToolsPage, search integration
5. Admin panel additions
6. Test end-to-end via preview + Playwright

Approve and I ship it, Master.