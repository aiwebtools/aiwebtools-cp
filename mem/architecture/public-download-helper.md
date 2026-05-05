---
name: Public download helper
description: Static file downloads must use triggerPublicDownload to avoid id-preview auth gate
type: preference
---
For any download from /downloads/* (or other public static asset), always use
`triggerPublicDownload(path, filename)` from `@/utils/downloads`.

**Why:** The Lovable id-preview--*.lovable.app sandbox auth-gates ALL static
file requests, redirecting users to a Lovable login screen. The helper detects
the preview hostname and rewrites the URL to `https://aiwebtools.lovable.app`
so downloads work without login. On production/custom domains the relative path
is used unchanged.

**How to apply:** Never write raw `link.href = '/downloads/...'` + `link.click()`
inline. Import and call `triggerPublicDownload` instead.
