# In-Site GPT Suite, Member Accounts & Weekly AI Digest

Turn the 150+ downloadable GPT instruction documents into working, in-site AI tools that members can use directly on aiwebtools.app — with free accounts, email updates, and a weekly AI news digest written by an automated research agent.

## What Master gets

1. A **"Try the in-site version"** button on every tool page that has official operational instructions.
2. A hosted chat version of each GPT — **one canonical version per GPT**, no duplicates.
3. **Free member accounts** (email + Google sign-in) that unlock the in-site tools.
4. **Email updates**: new tools added to the directory, exclusive news, and a weekly digest.
5. A **weekly AI research agent** that scans the web for AI news, industry trends, and trending tools, blends it with the tools we added that week, and emails it to subscribers every Friday.

## Phase 1 — Build the canonical GPT brain library

- The archive holds 280 documents, but many are older versions of the same GPT (three Automobile GPT files, two Agronomus, two Talk to History, and so on).
- A one-time script reads every document, groups them by GPT, and keeps **only the newest, most complete version of each** — landing at roughly 150 canonical GPTs. A review list is produced so Master can confirm each match before anything goes live.
- Each canonical GPT is stored privately in the database: display name, matching directory tool, greeting, four starter prompts, and its operational instructions.
- **The instructions never reach the browser.** They live server-side only, so our proprietary prompts cannot be copied from the page source. This is a hard requirement of the design.
- No directory tool is renamed, removed, or altered. The library only links to existing tools by title.

## Phase 2 — Member accounts

- New `/join` page: sign up / sign in with email + password and Google, in the Matrix-green house style.
- During sign-up, two opt-in checkboxes (both on by default): new tool alerts and the weekly AI digest. These feed the existing subscriber list, so nobody has to sign up for email twice.
- New `/account` page: change email preferences, see saved chats, unsubscribe in one click.
- Browsing the directory stays 100% open to everyone — an account is only needed to *run* an in-site GPT.

## Phase 3 — The in-site GPT runner

- Each canonical GPT gets its own page at `/app/<gpt-slug>` with:
  - a public, indexable intro section (what it does, who it is for, example prompts) so Google ranks it,
  - the chat window itself, which asks visitors to sign in before the first message.
- Chat is streamed, formatted, and remembers the whole conversation. Past conversations are saved to the member's account.
- The tool page button appears only where a canonical GPT exists, and links straight through with our existing portal effect and sound.
- **Cost control**: every message runs on our AI credits, so the runner ships with per-member daily and hourly caps, a total daily ceiling for the whole site, and a friendly "you have reached today's limit" message. Master can adjust the caps from the admin area.

## Phase 4 — Weekly AI research agent

- A scheduled job every Friday morning:
  1. pulls the tools we added to the directory in the last 7 days,
  2. scans reputable AI news sources for the week's biggest stories, industry trends, and trending tools,
  3. has the AI write the digest in our voice, with links (our own links carry the affiliate tag),
  4. emails it to every confirmed subscriber who opted into the weekly digest.
- Every issue is archived as a public page under `/digest/<date>` and added to the sitemap — that is 52 fresh, indexable pages a year feeding SEO.
- Master gets a preview email first and can approve or edit before the broadcast if preferred.

## Phase 5 — Verification

- Screenshot each new surface (join, account, an in-site GPT, digest page).
- Confirm every in-site GPT answers in character and follows its operational instructions.
- Confirm the directory still holds all 5,555 tools, all search bars still find them, and page speed is unchanged.
- Sitemap, robots, and schema updated for the new pages.

## Technical notes

- Instructions extracted from `public/downloads/gpt-instructions.zip` into a new `gpt_apps` table (slug, tool_title, display_name, greeting, starter_prompts, system_prompt, model, is_active). Row-level security: the public may read only the non-sensitive columns through a view; `system_prompt` is readable by the service role only and injected inside the edge function.
- Conversations in `gpt_conversations` / `gpt_messages`, scoped to `auth.uid()` with strict policies.
- Chat via a new `run-gpt-app` edge function using Lovable AI (`google/gemini-3.7-flash`, streamed) with the full message history each turn.
- Usage caps in `gpt_usage` (per user/day) enforced server-side before the model call; gateway 402/429 handled explicitly and surfaced in the UI.
- Weekly agent as `weekly-ai-digest` edge function on a Friday cron, reusing the existing Resend sending path and `email_subscribers` preferences; digests stored in `ai_digests`.
- Auth is Supabase email/password + Google; roles stay in the existing `user_roles` table — no role data on profiles.

## Suggested build order

1. Extraction + review list of the ~150 canonical GPTs (nothing user-visible yet).
2. Accounts and email preferences.
3. The GPT runner and tool-page buttons, launched with a first batch of 20 flagship GPTs, then the rest.
4. The weekly research agent and digest archive.

## Open questions for Master

- Should the in-site GPTs be free to all members, or limited to a set number of messages per day with more for a future paid tier?
- Do you want to approve each weekly digest before it sends, or let it broadcast automatically?
