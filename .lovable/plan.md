# Official Links and Reliable Chat Pictures

## What will change

- Rename launch buttons on pages with an embedded chat preview to **“USE THE OFFICIAL VERSION — CLICK HERE”**. Download and unavailable states will keep their existing labels.
- Strengthen picture generation so explicit picture requests always enter the image path, receive a bounded retry for temporary failures, and return a clear message rather than silently disappearing.
- Keep generated pictures inside the conversation, with stable responsive sizing and accessible descriptions on phones, tablets, and desktop screens.
- Add restrained, bot-colored glow accents to room borders, identity marks, and active controls. Effects will remain lightweight and turn off for reduced-motion users.
- Preserve the existing tool catalog, links, rankings, themes, and saved conversations.

## Reliability and verification

- Use the existing secure server-side picture pipeline and private storage links; no browser-exposed keys or new public storage access.
- Correct image-capability handling so the interface never promises picture generation where it is unavailable.
- Test representative historical, creative, medical, legal, and general assistants, including explicit image requests.
- Check mobile, tablet, desktop, long text, picture rendering, scrolling, and browser/build errors before completion.

## Technical details

- Update the shared tool action label only when an in-site preview exists.
- Make the chat function’s tool loop process image calls safely, retain successful partial responses, and surface gateway errors according to their status.
- Add semantic room-effect classes in the shared stylesheet, avoiding continuous expensive animation and respecting `prefers-reduced-motion`.