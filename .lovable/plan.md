# Make AIWebTools Search-Visible, Instant, and Smarter

Three problems, one plan: search engines can't read our pages, the search bar stutters, and our best tools have no write-ups worth ranking.

---

## 1. Why Google sends us almost nobody

What I confirmed from Google Search Console today (property https://aiwebtools.app/):

- The homepage **is** indexed, crawled today, canonical correct, robots allowing everything.
- Last 28 days: **0 clicks, 4 impressions** across the whole site.
- Only two pages got any impression at all: the homepage and one tool page.

So we are not penalised or blocked. We are invisible. The cause is structural:

- The sitemap lists **6,344 URLs**, but the site is a single-page app with **no pre-rendering**. Google receives an almost empty HTML shell for every one of those URLs and has to run our JavaScript to see anything. At our page count, it renders a tiny fraction and treats the rest as thin or duplicate.
- The entry gate ("I Understand & Enter Portal") sits in front of the content, which weakens what a crawler does manage to read.
- Tool pages are short directory cards. There is nothing substantial for Google to rank.

### The fix

**A. Pre-render pages to real HTML at build time.** Every tool page, category page, spotlight and write-up ships with its full text, images, headings, and structured data already in the HTML. The live app still takes over instantly for visitors. This is the single change that unlocks the other 6,000 pages.

**B. Let crawlers past the gate.** Page content renders in the HTML regardless of the gate; the gate stays exactly as it is for human visitors.

**C. Trim the sitemap to pages worth ranking** and split it into themed files so Google processes them reliably.

**D. Resubmit and re-ping** Google and the IndexNow engines once the pre-rendered pages are live, then watch impressions weekly.

---

## 2. Award-winning write-up pages for our own GPTs

A new page type per AIWebTools GPT — magazine feature meets tool page:

- A headline with real hook: *"TIME MACHINE GPT — Has AI broken the time barrier? At least in our imaginations."*
- Opening story, what it does, how people use it, three example conversations, the maker's angle, an honest limits note.
- **The live in-site chat window embedded right in the page**, so a reader tries it without leaving.
- Custom 4K artwork (tool name in the image, AIWebTools logo bottom-right, as always), plus the tool's video when it has one.
- Buttons through to the tool page and to the official full version.
- Full Article + SoftwareApplication + FAQ + Breadcrumb structured data, unique title and description, internal links to sibling GPTs.

These become the pages that actually rank and pull strangers in, then hand them to the live chat.

**First batch: 12 flagship GPTs** (Time Machine, Doctor, Public Defender, Survivalist, College Degree, Book Writer, Movie Script Writer, Fact Checker, Trader, Talk to History, Perfect Prompt Engine, Custom GPT Maker). Once you approve the look of those, I roll the same template across the rest of the 222.

---

## 3. Instant search and smooth on every device

The freeze while typing: the search index and its scoring run on the main thread for part of the work, and the results list re-renders on every keystroke. Fixes:

- Move all matching and scoring into the background worker so typing never waits.
- Render the input's text immediately and update results separately, so the cursor never stalls.
- Virtualise long result lists and cap what paints per keystroke.
- Warm the index on first touch/hover instead of the first keystroke.

Then a full device pass: phone (small and large), tablet, desktop — search bar, menus, tool pages, chat rooms, category pages. Screenshots at each size, fixes where anything is cramped or slow.

---

## 4. Agent integrations — what we have and what's worth adding

Connected now: **Google Search Console** (linked to this project). Nothing else is linked.

Available in the workspace, already authorised, not yet linked:

| Integration | What it would give us |
| --- | --- |
| **Perplexity** | Live web answers inside our helper bots and daily tool-news research |
| **Google Maps** | Only useful if we add local features — skip for now |
| **Outlook** | Personal mail — not needed for the site |

Worth adding for growth (I'd recommend in this order):

1. **Google Analytics** — we're guessing about traffic sources right now.
2. **Semrush** — keyword research so write-ups target phrases people actually search.
3. **Resend or Brevo** — we already send digests; a proper email service improves delivery.
4. **Algolia** — optional; a hosted search index would make 5,500+ tools search instantly with zero main-thread cost.
5. **X / LinkedIn / Telegram** — auto-post each new write-up for backlinks and referral traffic.

Note: **agent integrations (MCP)** cannot be added to this app — that requires a Lovable-managed backend, and this site runs on your own Supabase.

---

## Order of work

1. Pre-rendering + crawler-visible content + sitemap split (the traffic unlock)
2. Search speed + all-device pass
3. The 12 flagship write-up pages with embedded chat and custom artwork
4. Resubmit sitemaps, ping the engines, report back
5. Connect the integrations you approve from section 4

## Technical notes

- Pre-render via a build-time static generation step over the route list; the SPA hydrates over it, so no behaviour changes for visitors.
- DisclaimerGate keeps its current behaviour; page content simply renders into the document instead of behind the gate.
- Write-ups: new `src/data/writeups/` content modules + a `WriteUpPage` route at `/gpt/:slug`, reusing `InSiteGptRunner` for the embedded chat.
- Search: move scoring fully into `global-search-worker.js`; decouple input state from results state; virtualise `GlobalSearchResults`.
- Sitemap split into `sitemap-tools.xml`, `sitemap-writeups.xml`, `sitemap-categories.xml`, `sitemap-pages.xml` behind a sitemap index.
- No tools removed, no existing images or videos replaced, no URL changes to existing pages.
