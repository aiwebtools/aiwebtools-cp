/**
 * Per-bot branding for the in-site GPT rooms.
 * Every hosted GPT gets a stable accent, glow and emblem derived from its own
 * name, so each tool feels like its own product instead of a generic chat box.
 */

export interface GptAppTheme {
  /** Raw HSL triplet, used through inline CSS variables. */
  accent: string;
  accentSoft: string;
  emblem: string;
  vibe: string;
}

interface Palette {
  accent: string;
  accentSoft: string;
}

const PALETTES: Palette[] = [
  { accent: "142 76% 45%", accentSoft: "142 60% 12%" },
  { accent: "199 89% 55%", accentSoft: "199 70% 12%" },
  { accent: "271 76% 62%", accentSoft: "271 60% 14%" },
  { accent: "38 92% 55%", accentSoft: "38 70% 12%" },
  { accent: "0 79% 60%", accentSoft: "0 60% 13%" },
  { accent: "173 80% 42%", accentSoft: "173 60% 11%" },
  { accent: "326 78% 60%", accentSoft: "326 60% 14%" },
  { accent: "221 83% 62%", accentSoft: "221 65% 13%" },
];

interface Rule {
  test: RegExp;
  emblem: string;
  vibe: string;
  palette?: Palette;
}

const RULES: Rule[] = [
  { test: /image|photo|design|graphic|art|coloring|sketch|logo|restyle/i, emblem: "🎨", vibe: "Visual studio", palette: { accent: "326 78% 60%", accentSoft: "326 60% 14%" } },
  { test: /movie|video|scene|film|trailer|playwrit|script/i, emblem: "🎬", vibe: "Story room", palette: { accent: "271 76% 62%", accentSoft: "271 60% 14%" } },
  { test: /music|melod|song|podcast|audio/i, emblem: "🎵", vibe: "Sound room", palette: { accent: "199 89% 55%", accentSoft: "199 70% 12%" } },
  { test: /doctor|health|medic|pharma|vet|wellness|genome|dental/i, emblem: "🩺", vibe: "Care desk", palette: { accent: "173 80% 42%", accentSoft: "173 60% 11%" } },
  { test: /law|legal|defender|contract|legislat|testimony|court/i, emblem: "⚖️", vibe: "Chambers", palette: { accent: "221 83% 62%", accentSoft: "221 65% 13%" } },
  { test: /tax|trade|credit|finance|business|startup|money|invest|saas/i, emblem: "📈", vibe: "Boardroom", palette: { accent: "142 76% 45%", accentSoft: "142 60% 12%" } },
  { test: /history|time|ancient|archae|titanic|native|apothecary|alchem/i, emblem: "🕰️", vibe: "Archive", palette: { accent: "38 92% 55%", accentSoft: "38 70% 12%" } },
  { test: /space|stellar|science|einstein|tesla|physic|probab|genom/i, emblem: "🔭", vibe: "Laboratory", palette: { accent: "199 89% 55%", accentSoft: "199 70% 12%" } },
  { test: /god|spirit|oracle|magdalene|sophia|resurrect|watts|matrix|fortune|dream/i, emblem: "🕊️", vibe: "Sanctuary", palette: { accent: "48 96% 60%", accentSoft: "48 70% 12%" } },
  { test: /food|chef|recipe|menu|mixolog|cannabis|fungus|farm|agron|fish/i, emblem: "🌿", vibe: "Field kitchen", palette: { accent: "142 76% 45%", accentSoft: "142 60% 12%" } },
  { test: /code|engineer|develop|game|cyber|security|binary|prompt/i, emblem: "⚙️", vibe: "Workshop", palette: { accent: "142 76% 45%", accentSoft: "142 60% 12%" } },
  { test: /write|book|blog|article|resume|grant|course|learn|school|teach/i, emblem: "✍️", vibe: "Writing desk", palette: { accent: "221 83% 62%", accentSoft: "221 65% 13%" } },
  { test: /car|auto|home|renovat|solar|drill|firefight|survival|insur|property/i, emblem: "🛠️", vibe: "Field unit", palette: { accent: "20 90% 56%", accentSoft: "20 70% 12%" } },
];

const hash = (value: string) => {
  let h = 0;
  for (let i = 0; i < value.length; i += 1) h = (h * 31 + value.charCodeAt(i)) >>> 0;
  return h;
};

export const getGptAppTheme = (slug: string, displayName = ""): GptAppTheme => {
  const haystack = `${displayName} ${slug}`;
  const rule = RULES.find((r) => r.test.test(haystack));
  const palette = rule?.palette ?? PALETTES[hash(slug) % PALETTES.length];

  return {
    accent: palette.accent,
    accentSoft: palette.accentSoft,
    emblem: rule?.emblem ?? "✨",
    vibe: rule?.vibe ?? "Command room",
  };
};

export default getGptAppTheme;
