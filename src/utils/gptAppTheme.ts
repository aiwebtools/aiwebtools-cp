/** Shared full-screen wrapper around the hosted GPT room identity system. */
import { getGptRoomTheme } from "@/components/tool-detail/gptRoomThemes";

export const getGptAppTheme = (slug: string, displayName = "") =>
  getGptRoomTheme(slug, "", displayName);

export default getGptAppTheme;
