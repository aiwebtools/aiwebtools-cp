/**
 * Branded "rooms" for the in-site GPT chat windows.
 *
 * Every hosted AIWebTools bot runs inside a themed console instead of a plain
 * box, so the chat window itself adds to the imagination: Time Machine gets a
 * brass-and-blue chronometer deck, the mystics get candlelit violet, the
 * builders get blueprint cyan, and everything else falls back to the house
 * matrix green.
 *
 * Nothing here changes behaviour — it is presentation only.
 */

export interface GptRoomTheme {
  /** Outer console frame (border + background + glow). */
  frame: string;
  /** Transcript well inside the console. */
  well: string;
  /** Small header label above the transcript. */
  headline: string;
  /** Accent text colour for headings and links. */
  accent: string;
  /** Starter prompt chips. */
  chip: string;
  /** User message bubble. */
  userBubble: string;
  /** Assistant message bubble. */
  botBubble: string;
  /** Input frame. */
  input: string;
  /** Send button. */
  send: string;
  /** Strip of flavour text under the console. */
  motto: string;
  /** Header wording, e.g. "TIME MACHINE CONSOLE". */
  roomLabel: string;
  /** Placeholder inside the typing area. */
  placeholder: string;
}

const MATRIX: GptRoomTheme = {
  frame:
    "border-green-500/40 bg-gradient-to-b from-black via-black to-green-950/30 shadow-[0_0_40px_-12px_rgba(34,197,94,0.45)]",
  well: "border-green-500/20 bg-gray-950/70",
  headline: "text-green-300",
  accent: "text-green-400 hover:text-green-300",
  chip: "border-green-500/30 bg-black/50 text-gray-300 hover:border-green-400/70 hover:text-green-200",
  userBubble: "bg-green-500/15 text-gray-100",
  botBubble: "border-green-500/20 bg-black/50 text-gray-200",
  input: "border-green-500/40 bg-black/60 focus-visible:ring-green-500/50",
  send: "bg-green-500 text-black hover:bg-green-400",
  motto: "text-green-500/60",
  roomLabel: "LIVE CONSOLE",
  placeholder: "Type your request here…",
};

const TIME_MACHINE: GptRoomTheme = {
  frame:
    "border-amber-400/50 bg-gradient-to-b from-[#0a1230] via-[#070b1f] to-[#120c04] shadow-[0_0_60px_-14px_rgba(251,191,36,0.55)]",
  well: "border-amber-400/25 bg-[#050912]/85",
  headline: "text-amber-300",
  accent: "text-amber-300 hover:text-amber-200",
  chip: "border-amber-400/35 bg-[#0a1230]/80 text-amber-100/80 hover:border-amber-300 hover:text-amber-100",
  userBubble: "bg-amber-400/15 text-amber-50",
  botBubble: "border-sky-400/25 bg-[#050912]/80 text-sky-50",
  input: "border-amber-400/50 bg-[#050912]/80 focus-visible:ring-amber-400/60",
  send: "bg-amber-400 text-black hover:bg-amber-300",
  motto: "text-amber-400/70",
  roomLabel: "TIME MACHINE CONSOLE",
  placeholder: "Name a year and a place — 1555 Boston Harbor…",
};

const ORACLE: GptRoomTheme = {
  frame:
    "border-violet-400/45 bg-gradient-to-b from-[#150b2e] via-[#0b0618] to-black shadow-[0_0_55px_-14px_rgba(167,139,250,0.5)]",
  well: "border-violet-400/25 bg-[#0b0618]/85",
  headline: "text-violet-200",
  accent: "text-violet-300 hover:text-violet-200",
  chip: "border-violet-400/35 bg-[#150b2e]/80 text-violet-100/80 hover:border-violet-300 hover:text-violet-100",
  userBubble: "bg-violet-400/15 text-violet-50",
  botBubble: "border-violet-400/25 bg-[#0b0618]/80 text-violet-50",
  input: "border-violet-400/45 bg-[#0b0618]/80 focus-visible:ring-violet-400/60",
  send: "bg-violet-400 text-black hover:bg-violet-300",
  motto: "text-violet-400/70",
  roomLabel: "THE INNER TEMPLE",
  placeholder: "Ask what you truly wish to know…",
};

const BLUEPRINT: GptRoomTheme = {
  frame:
    "border-cyan-400/45 bg-gradient-to-b from-[#04141c] via-[#02090f] to-black shadow-[0_0_55px_-14px_rgba(34,211,238,0.5)]",
  well: "border-cyan-400/25 bg-[#02090f]/85",
  headline: "text-cyan-200",
  accent: "text-cyan-300 hover:text-cyan-200",
  chip: "border-cyan-400/35 bg-[#04141c]/80 text-cyan-100/80 hover:border-cyan-300 hover:text-cyan-100",
  userBubble: "bg-cyan-400/15 text-cyan-50",
  botBubble: "border-cyan-400/25 bg-[#02090f]/80 text-cyan-50",
  input: "border-cyan-400/45 bg-[#02090f]/80 focus-visible:ring-cyan-400/60",
  send: "bg-cyan-400 text-black hover:bg-cyan-300",
  motto: "text-cyan-400/70",
  roomLabel: "WORKSHOP CONSOLE",
  placeholder: "Describe the project and I will draw it up…",
};

const STUDIO: GptRoomTheme = {
  frame:
    "border-fuchsia-400/45 bg-gradient-to-b from-[#1b0722] via-[#0b0410] to-black shadow-[0_0_55px_-14px_rgba(232,121,249,0.5)]",
  well: "border-fuchsia-400/25 bg-[#0b0410]/85",
  headline: "text-fuchsia-200",
  accent: "text-fuchsia-300 hover:text-fuchsia-200",
  chip: "border-fuchsia-400/35 bg-[#1b0722]/80 text-fuchsia-100/80 hover:border-fuchsia-300 hover:text-fuchsia-100",
  userBubble: "bg-fuchsia-400/15 text-fuchsia-50",
  botBubble: "border-fuchsia-400/25 bg-[#0b0410]/80 text-fuchsia-50",
  input: "border-fuchsia-400/45 bg-[#0b0410]/80 focus-visible:ring-fuchsia-400/60",
  send: "bg-fuchsia-400 text-black hover:bg-fuchsia-300",
  motto: "text-fuchsia-400/70",
  roomLabel: "CREATIVE STUDIO",
  placeholder: "Tell me what you want to create…",
};

/** Flavour line printed along the bottom edge of the console. */
export const ROOM_MOTTOS: Record<string, string> = {
  "time-machine": "◈ THE TIMELINE AWAITS ◈",
  oracle: "◈ SEEK AND IT SHALL BE REVEALED ◈",
  blueprint: "◈ FROM IDEA TO BLUEPRINT ◈",
  studio: "◈ IMAGINATION, RENDERED ◈",
  matrix: "◈ ENTER THE MATRIX ◈",
};

const THEMES = {
  matrix: MATRIX,
  "time-machine": TIME_MACHINE,
  oracle: ORACLE,
  blueprint: BLUEPRINT,
  studio: STUDIO,
} as const;

export type GptRoomThemeKey = keyof typeof THEMES;

/** Slug fragments that pull a bot into a specific room. */
const SLUG_RULES: Array<[RegExp, GptRoomThemeKey]> = [
  [/time-machine|history|historical|titanic|resurrection|ancient|apothecary|alchem|native-american|tesla|einstein/, "time-machine"],
  [/oracul|god|dream|fortune|spirit|magdalene|sophia|prophe|tarot|astro|mystic|matrix|alan-watts|interpretis/, "oracle"],
  [/engineer|code|developer|business|legal|law|tax|finance|trade|data|research|analysis|report|resume|startup|saas|grant|contract/, "blueprint"],
  [/movie|music|video|art|design|image|draw|sketch|book|story|script|play|coloring|tattoo|photo|graphic|poster/, "studio"],
];

const CATEGORY_RULES: Array<[RegExp, GptRoomThemeKey]> = [
  [/time|history/, "time-machine"],
  [/spiritual|religion|wellness|mind/, "oracle"],
  [/business|legal|finance|develop|engineer|data|product/, "blueprint"],
  [/art|design|video|music|image|writ|creative/, "studio"],
];

/**
 * Picks the branded room for a bot from its slug first, then its category,
 * falling back to the house matrix console.
 */
export const getGptRoomTheme = (slug?: string | null, category?: string | null): GptRoomTheme => {
  const s = (slug ?? "").toLowerCase();
  for (const [pattern, key] of SLUG_RULES) if (pattern.test(s)) return THEMES[key];

  const c = (category ?? "").toLowerCase();
  for (const [pattern, key] of CATEGORY_RULES) if (pattern.test(c)) return THEMES[key];

  return MATRIX;
};

/** Matching motto for a resolved theme. */
export const getRoomMotto = (theme: GptRoomTheme): string => {
  const entry = (Object.entries(THEMES) as Array<[GptRoomThemeKey, GptRoomTheme]>).find(
    ([, value]) => value === theme,
  );
  return ROOM_MOTTOS[entry?.[0] ?? "matrix"];
};
