const GUEST_KEY = "awt_guest_id";

/** Stable per-browser id used to give signed-out visitors a fair free allowance. */
export const getGuestId = (): string => {
  try {
    let id = localStorage.getItem(GUEST_KEY);
    if (!id) {
      id = crypto.randomUUID();
      localStorage.setItem(GUEST_KEY, id);
    }
    return id;
  } catch {
    return "guest-session-fallback-key";
  }
};
