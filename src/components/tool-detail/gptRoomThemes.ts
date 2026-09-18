/**
 * Branded "rooms" for the in-site GPT chat windows.
 *
 * Every hosted AIWebTools bot runs inside a themed console instead of a plain
 * box, so the chat window itself adds to the imagination: Time Machine gets a
 * brass-and-blue chronometer deck, the doctor gets a clean clinical bay with a
 * medical cross, the lawyers get oak-and-blue chambers, the mystics get
 * candlelit violet, and everything else falls back to the house matrix green.
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
  /** Emblem shown on the header plate, e.g. a medical cross for the doctor. */
  emblem: string;
  /** Flavour line printed along the bottom edge of the console. */
  motoText: string;
}

const room = (t: GptRoomTheme): GptRoomTheme => t;

const MATRIX = room({
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
  emblem: "⟨⟩",
  motoText: "◈ ENTER THE MATRIX ◈",
});

const TIME_MACHINE = room({
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
  emblem: "🕰️",
  motoText: "◈ THE TIMELINE AWAITS ◈",
});

const CLINIC = room({
  frame:
    "border-teal-300/50 bg-gradient-to-b from-[#04211f] via-[#04110f] to-black shadow-[0_0_55px_-14px_rgba(45,212,191,0.5)]",
  well: "border-teal-300/25 bg-[#04110f]/85",
  headline: "text-teal-200",
  accent: "text-teal-300 hover:text-teal-200",
  chip: "border-teal-300/35 bg-[#04211f]/80 text-teal-100/85 hover:border-teal-200 hover:text-white",
  userBubble: "bg-teal-300/15 text-teal-50",
  botBubble: "border-teal-300/25 bg-[#04110f]/80 text-teal-50",
  input: "border-teal-300/45 bg-[#04110f]/80 focus-visible:ring-teal-300/60",
  send: "bg-teal-300 text-black hover:bg-teal-200",
  motto: "text-teal-300/70",
  roomLabel: "CONSULTATION ROOM",
  placeholder: "Describe the symptoms, history and what worries you…",
  emblem: "⚕️",
  motoText: "✚ INFORMATION ONLY — NOT A REPLACEMENT FOR YOUR DOCTOR ✚",
});

const CHAMBERS = room({
  frame:
    "border-blue-400/45 bg-gradient-to-b from-[#0a1122] via-[#060a16] to-black shadow-[0_0_55px_-14px_rgba(96,165,250,0.5)]",
  well: "border-blue-400/25 bg-[#060a16]/85",
  headline: "text-blue-200",
  accent: "text-blue-300 hover:text-blue-200",
  chip: "border-blue-400/35 bg-[#0a1122]/80 text-blue-100/85 hover:border-blue-300 hover:text-white",
  userBubble: "bg-blue-400/15 text-blue-50",
  botBubble: "border-blue-400/25 bg-[#060a16]/80 text-blue-50",
  input: "border-blue-400/45 bg-[#060a16]/80 focus-visible:ring-blue-400/60",
  send: "bg-blue-400 text-black hover:bg-blue-300",
  motto: "text-blue-400/70",
  roomLabel: "THE CHAMBERS",
  placeholder: "State the matter, the parties and what outcome you need…",
  emblem: "⚖️",
  motoText: "◈ EVERY SIDE DESERVES A VOICE ◈",
});

const LEDGER = room({
  frame:
    "border-emerald-400/45 bg-gradient-to-b from-[#04170f] via-[#030c08] to-black shadow-[0_0_55px_-14px_rgba(52,211,153,0.5)]",
  well: "border-emerald-400/25 bg-[#030c08]/85",
  headline: "text-emerald-200",
  accent: "text-emerald-300 hover:text-emerald-200",
  chip: "border-emerald-400/35 bg-[#04170f]/80 text-emerald-100/85 hover:border-emerald-300 hover:text-white",
  userBubble: "bg-emerald-400/15 text-emerald-50",
  botBubble: "border-emerald-400/25 bg-[#030c08]/80 text-emerald-50",
  input: "border-emerald-400/45 bg-[#030c08]/80 focus-visible:ring-emerald-400/60",
  send: "bg-emerald-400 text-black hover:bg-emerald-300",
  motto: "text-emerald-400/70",
  roomLabel: "THE TRADING FLOOR",
  placeholder: "Share the numbers, the goal and the timeline…",
  emblem: "📈",
  motoText: "◈ NUMBERS NEVER LIE ◈",
});

const OBSERVATORY = room({
  frame:
    "border-indigo-400/45 bg-gradient-to-b from-[#0b0f2e] via-[#05071a] to-black shadow-[0_0_55px_-14px_rgba(129,140,248,0.5)]",
  well: "border-indigo-400/25 bg-[#05071a]/85",
  headline: "text-indigo-200",
  accent: "text-indigo-300 hover:text-indigo-200",
  chip: "border-indigo-400/35 bg-[#0b0f2e]/80 text-indigo-100/85 hover:border-indigo-300 hover:text-white",
  userBubble: "bg-indigo-400/15 text-indigo-50",
  botBubble: "border-indigo-400/25 bg-[#05071a]/80 text-indigo-50",
  input: "border-indigo-400/45 bg-[#05071a]/80 focus-visible:ring-indigo-400/60",
  send: "bg-indigo-400 text-black hover:bg-indigo-300",
  motto: "text-indigo-400/70",
  roomLabel: "THE OBSERVATORY",
  placeholder: "Pose the question and we will test it…",
  emblem: "🔭",
  motoText: "◈ QUESTION EVERYTHING ◈",
});

const ORACLE = room({
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
  emblem: "🕊️",
  motoText: "◈ SEEK AND IT SHALL BE REVEALED ◈",
});

const BLUEPRINT = room({
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
  roomLabel: "DRAFTING TABLE",
  placeholder: "Describe the project and I will draw it up…",
  emblem: "📐",
  motoText: "◈ FROM IDEA TO BLUEPRINT ◈",
});

const STUDIO = room({
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
  emblem: "🎨",
  motoText: "◈ IMAGINATION, RENDERED ◈",
});

const SOUNDSTAGE = room({
  frame:
    "border-pink-400/45 bg-gradient-to-b from-[#220617] via-[#0d0309] to-black shadow-[0_0_55px_-14px_rgba(244,114,182,0.5)]",
  well: "border-pink-400/25 bg-[#0d0309]/85",
  headline: "text-pink-200",
  accent: "text-pink-300 hover:text-pink-200",
  chip: "border-pink-400/35 bg-[#220617]/80 text-pink-100/85 hover:border-pink-300 hover:text-white",
  userBubble: "bg-pink-400/15 text-pink-50",
  botBubble: "border-pink-400/25 bg-[#0d0309]/80 text-pink-50",
  input: "border-pink-400/45 bg-[#0d0309]/80 focus-visible:ring-pink-400/60",
  send: "bg-pink-400 text-black hover:bg-pink-300",
  motto: "text-pink-400/70",
  roomLabel: "THE SOUNDSTAGE",
  placeholder: "Set the scene, the sound and the mood…",
  emblem: "🎬",
  motoText: "◈ ROLLING — TAKE ONE ◈",
});

const ACADEMY = room({
  frame:
    "border-sky-400/45 bg-gradient-to-b from-[#061527] via-[#030a14] to-black shadow-[0_0_55px_-14px_rgba(56,189,248,0.5)]",
  well: "border-sky-400/25 bg-[#030a14]/85",
  headline: "text-sky-200",
  accent: "text-sky-300 hover:text-sky-200",
  chip: "border-sky-400/35 bg-[#061527]/80 text-sky-100/85 hover:border-sky-300 hover:text-white",
  userBubble: "bg-sky-400/15 text-sky-50",
  botBubble: "border-sky-400/25 bg-[#030a14]/80 text-sky-50",
  input: "border-sky-400/45 bg-[#030a14]/80 focus-visible:ring-sky-400/60",
  send: "bg-sky-400 text-black hover:bg-sky-300",
  motto: "text-sky-400/70",
  roomLabel: "THE LEARNING HALL",
  placeholder: "Name the subject and how deep you want to go…",
  emblem: "📚",
  motoText: "◈ EDUCATION SHOULD BE FREE FOR ALL ◈",
});

const FIELD = room({
  frame:
    "border-lime-400/45 bg-gradient-to-b from-[#0d1704] via-[#060b02] to-black shadow-[0_0_55px_-14px_rgba(163,230,53,0.5)]",
  well: "border-lime-400/25 bg-[#060b02]/85",
  headline: "text-lime-200",
  accent: "text-lime-300 hover:text-lime-200",
  chip: "border-lime-400/35 bg-[#0d1704]/80 text-lime-100/85 hover:border-lime-300 hover:text-white",
  userBubble: "bg-lime-400/15 text-lime-50",
  botBubble: "border-lime-400/25 bg-[#060b02]/80 text-lime-50",
  input: "border-lime-400/45 bg-[#060b02]/80 focus-visible:ring-lime-400/60",
  send: "bg-lime-400 text-black hover:bg-lime-300",
  motto: "text-lime-400/70",
  roomLabel: "THE FIELD STATION",
  placeholder: "Tell me what you are growing, catching or cooking…",
  emblem: "🌿",
  motoText: "◈ WORK WITH THE EARTH, NOT AGAINST IT ◈",
});

const FORGE = room({
  frame:
    "border-orange-400/45 bg-gradient-to-b from-[#1e0c02] via-[#0c0501] to-black shadow-[0_0_55px_-14px_rgba(251,146,60,0.5)]",
  well: "border-orange-400/25 bg-[#0c0501]/85",
  headline: "text-orange-200",
  accent: "text-orange-300 hover:text-orange-200",
  chip: "border-orange-400/35 bg-[#1e0c02]/80 text-orange-100/85 hover:border-orange-300 hover:text-white",
  userBubble: "bg-orange-400/15 text-orange-50",
  botBubble: "border-orange-400/25 bg-[#0c0501]/80 text-orange-50",
  input: "border-orange-400/45 bg-[#0c0501]/80 focus-visible:ring-orange-400/60",
  send: "bg-orange-400 text-black hover:bg-orange-300",
  motto: "text-orange-400/70",
  roomLabel: "THE FIELD UNIT",
  placeholder: "Describe the job, the site and the gear you have…",
  emblem: "🛠️",
  motoText: "◈ MEASURE TWICE, CUT ONCE ◈",
});

const SENTINEL = room({
  frame:
    "border-red-400/45 bg-gradient-to-b from-[#1a0505] via-[#0a0202] to-black shadow-[0_0_55px_-14px_rgba(248,113,113,0.5)]",
  well: "border-red-400/25 bg-[#0a0202]/85",
  headline: "text-red-200",
  accent: "text-red-300 hover:text-red-200",
  chip: "border-red-400/35 bg-[#1a0505]/80 text-red-100/85 hover:border-red-300 hover:text-white",
  userBubble: "bg-red-400/15 text-red-50",
  botBubble: "border-red-400/25 bg-[#0a0202]/80 text-red-50",
  input: "border-red-400/45 bg-[#0a0202]/80 focus-visible:ring-red-400/60",
  send: "bg-red-400 text-black hover:bg-red-300",
  motto: "text-red-400/70",
  roomLabel: "THE WATCHTOWER",
  placeholder: "Describe the threat, the system and what is at stake…",
  emblem: "🛡️",
  motoText: "◈ VIGILANCE IS THE PRICE OF SAFETY ◈",
});

const THEMES = {
  matrix: MATRIX,
  "time-machine": TIME_MACHINE,
  clinic: CLINIC,
  chambers: CHAMBERS,
  ledger: LEDGER,
  observatory: OBSERVATORY,
  oracle: ORACLE,
  blueprint: BLUEPRINT,
  studio: STUDIO,
  soundstage: SOUNDSTAGE,
  academy: ACADEMY,
  field: FIELD,
  forge: FORGE,
  sentinel: SENTINEL,
} as const;

export type GptRoomThemeKey = keyof typeof THEMES;

/** Flavour line printed along the bottom edge of the console. */
export const ROOM_MOTTOS: Record<string, string> = Object.fromEntries(
  Object.entries(THEMES).map(([key, value]) => [key, value.motoText]),
);

/**
 * Slug fragments that pull a bot into a specific room. Order matters — the
 * most specific rooms are tested first so, for example, the pharmacist lands
 * in the consultation room rather than the laboratory.
 */
const SLUG_RULES: Array<[RegExp, GptRoomThemeKey]> = [
  [/doctor|medic|health|pharma|rx|vet|pet-care|dental|nurse|therap|wellness|mental|medicus|nutrition|genome|marriage/, "clinic"],
  [/law|legal|defender|attorney|contract|legislat|testimony|court|criminolog|insurance|policy|politic|public-defender/, "chambers"],
  [/tax|trade|credit|finance|money|invest|budget|business|startup|saas|grant|resume|job|valuation|appraisal|property|real-estate/, "ledger"],
  [/time-machine|history|historical|titanic|resurrect|ancient|apothecary|alchem|native-american|archaeolog|antique|interpretis/, "time-machine"],
  [/space|stellar|stellaris|astro|tesla|einstein|physic|probabil|science|scientist|quantum|data|research|analysis|fact-check/, "observatory"],
  [/oracul|god|dream|fortune|spirit|magdalene|sophia|prophe|tarot|mystic|matrix|alan-watts|angel|bible|meditat/, "oracle"],
  [/engineer|architect|blueprint|construct|develop|code|game|prompt|binary|solar|micro-saas|plan/, "blueprint"],
  [/cyber|security|hack|defend|firearm|survival|firefight|crime|safety|protect/, "sentinel"],
  [/movie|film|scene|trailer|video|podcast|playwrit|script|story|celebrity|music|melod|song|lyric/, "soundstage"],
  [/art|design|image|draw|sketch|logo|graphic|coloring|tattoo|photo|poster|restyle|book|writer|blog|article|menu/, "studio"],
  [/learn|course|school|teach|degree|college|study|quiz|training|tutor|education|skill|language/, "academy"],
  [/farm|agron|fish|chef|food|recipe|mixolog|cannabis|hemp|fungus|mushroom|garden|plant|animal|nature/, "field"],
  [/home|renovat|car|auto|automobile|drill|oil|gas|repair|tool|material|handyman|inspect/, "forge"],
];

const CATEGORY_RULES: Array<[RegExp, GptRoomThemeKey]> = [
  [/health|medic|wellness|fitness/, "clinic"],
  [/legal|law|government|politic/, "chambers"],
  [/business|finance|market|sales|productiv/, "ledger"],
  [/time|history/, "time-machine"],
  [/science|research|data|analytic/, "observatory"],
  [/spiritual|religion|mind/, "oracle"],
  [/develop|engineer|code|product/, "blueprint"],
  [/security|cyber/, "sentinel"],
  [/video|music|audio|film/, "soundstage"],
  [/art|design|image|writ|creative/, "studio"],
  [/education|learn|course/, "academy"],
  [/food|agricultur|nature|environment/, "field"],
  [/home|automotive|industr|construct/, "forge"],
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
export const getRoomMotto = (theme: GptRoomTheme): string => theme.motoText;
