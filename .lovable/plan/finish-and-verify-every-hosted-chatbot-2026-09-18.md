# Finish and verify every hosted chatbot

## Scope
- Preserve all 222 active bots and existing directory behavior.
- Give every bot a fitting room archetype plus a stable, per-bot visual signature shared by embedded and full-screen chat.
- Keep the Care Bot compact and clear of the pinned mobile video.
- Harden reply and image-generation failure handling, then verify the catalog systematically.

## Implementation
1. **Unify bot branding**
   - Use one theme resolver for both chat surfaces.
   - Retain meaningful room types such as clinic, chambers, time machine, studio, observatory, and field station.
   - Derive accent hue, secondary hue, visual pattern, console designation, and signature mark from each bot slug so bots in the same category no longer look identical.
   - Improve narrow-screen sizing, long names, transcript height, and typing controls.

2. **Harden chat behavior**
   - Detect empty or interrupted streams and show a useful retry message instead of an empty bubble.
   - Preserve disabled bots during future seed runs.
   - Correct the one unreachable directory mapping without deleting the bot.
   - Keep image support limited to the 174 bots configured for it.

3. **Validate functionality**
   - Add a zero-cost integrity test covering all hosted definitions, prompt links, unique slugs, and directory mappings.
   - Live-test representative bots across every room archetype.
   - Live-test image generation and confirm the generated image appears in chat.
   - Screenshot-check desktop and mobile layouts, including Time Machine and the floating Care Bot.

4. **Release**
   - Run the repository checks, publish the updated frontend and affected edge functions, and report exact pass counts.

## Technical details
- Dynamic presentation uses deterministic slug hashing and CSS variables; no runtime theme downloads are added.
- Existing server-side prompts remain private.
- No unrelated directory, SEO, or security findings are changed.
