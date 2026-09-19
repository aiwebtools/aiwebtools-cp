# In-site chat rooms — full usability upgrade

A coordinated pass over all 222 in-site trial chat rooms so every one is instantly readable, clearly branded, obviously alive while it works, and never loses the thread in a long conversation.

## What is already in place
- 222 live rooms, each with its own colour pair, emblem, room name, motto and console number (14 environment archetypes: clinic, chambers, time machine, observatory, temple, drafting table, studio, soundstage, learning hall, field station, forge, watchtower, trading floor, matrix).
- Subject-specific opening prompts on all 222 (the generic filler is gone).
- Picture generation working, with an elapsed-seconds counter.
- Free-to-try for signed-out visitors, saved chats for members.

## What still needs doing

### 1. Avatar faces for every bot
- A picture avatar beside every reply, so you can see at a glance who is talking.
- 14 hand-crafted 4K avatar portraits, one per environment — robot doctor with a medical cross for the clinic, a professor at a chalkboard for the learning hall, a vet with a dog and a caduceus, a judge's bench for chambers, a clockwork traveller for the time machine, and so on. Each bot tints its portrait with its own colours, so no two rooms look identical.
- Hand-made one-off portraits for the 24 flagship bots (Doctor, Veterinarian, College Degree, Time Machine, Public Defender, Trader, Chef, Fisherman, Tattoo, Firefighter, Mixologist, Cannabis, Genome, Tesla, Einstein, Alan Watts, Fortune Teller, Survivalist, Criminologist, Movie Script Writer, Music Video Maker, Book Writer, Graphic Design, Home Renovator) so the best-known tools are unmistakable.
- Every portrait carries the AIWebTools mark, is named for search engines, and is stored as a fast CDN image.
- The same avatar appears in the small chat window on the tool page and in the full-screen room.

### 2. Tell my words apart from the bot's at a glance
- My messages: solid coloured bubble on the right, white-bright text, rounded, with a small "You" tag.
- Bot messages: dark panel on the left with a glowing coloured edge, avatar, and the bot's name above the text — a different typeface and a slightly larger, calmer reading size.
- Contrast checked against every room colour so text never blends into the background; links, lists, code and headings all get readable treatment.
- Pictures inside replies get a framed, tappable presentation.

### 3. Alive while it thinks
- "Thinking…" changes to a pulsing avatar plus a live status line that moves through "Reading your message" → "Thinking" → "Writing your reply", with a spinner.
- Picture generation shows a spinning ring, a preview placeholder, and the running seconds counter that is already there.
- If a reply stalls or comes back empty, an in-room retry button appears instead of a silent failure.

### 4. Plain-English controls
- Send button reads "Send message" with an arrow, not a bare icon.
- Hint under the box: "Press Enter to send · Shift+Enter for a new line".
- Clear "Ask for a picture" button on the rooms that can draw.
- Starter prompts get a "Try one of these" heading.
- All of it laid out to fit a phone screen without pinching or hidden buttons.

### 5. Never lose the thread in long chats
- The bot currently only sees the last 24 messages. Raising that to a much longer window, and once a chat grows past that, the room quietly keeps a running summary of everything earlier (who I am, what we decided, the facts I gave it) and feeds that back in every turn.
- Members' saved chats reload the full history, not the last 60 lines.

### 6. Learning log and watchdogs
- Every exchange (which bot, how long it took, whether a picture was made, whether it failed) is recorded in a private admin log so responses can be studied and the weaker bots tuned.
- Watchdogs: repeated failures, empty replies, picture errors and slow replies raise a flag on the admin dashboard, with a daily count per bot.
- Nothing personal is exposed publicly; only admins can read the log.

### 7. Final sweep
- Open every one of the 222 rooms automatically, send a real message, confirm a sensible reply arrives, and confirm the avatar, colours and controls render on phone, tablet and desktop.
- Generate one picture in each room that can draw, and record the results.
- Publish aiwebtools.app when the sweep is clean.

## Technical notes
- New `src/components/tool-detail/gptAvatars.ts`: archetype → CDN avatar pointer, with a flagship slug override map; used by both `InSiteGptRunner.tsx` and `GptAppPage.tsx`.
- Message styling moves into dedicated classes in `src/styles/components.css` (`.gpt-msg-user`, `.gpt-msg-bot`, `.gpt-msg-meta`) driven by the existing `--bot-accent` variables; no hardcoded colours.
- New `src/components/ai-elements/thinking-status.tsx` for the staged status line and spinner; `image-progress.tsx` gains the spinning ring.
- `supabase/functions/run-gpt-app/index.ts`: `MAX_HISTORY` 24 → 60, plus a rolling-summary turn when the transcript exceeds that; writes a row to a new `gpt_chat_logs` table on every call (bot, duration, token-ish size, image made, error, guest/member flag) with admin-only read access.
- New migration: `gpt_chat_logs` table with grants, RLS (admins read, service role writes) and an index on `(app_slug, created_at)`.
- Avatar images generated at 1024×1024, transparent-ready, stored via the CDN asset pipeline, imported as pointers.
