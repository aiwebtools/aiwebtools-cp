import academy from "@/assets/gpt-avatars/academy.png.asset.json";
import blueprint from "@/assets/gpt-avatars/blueprint.png.asset.json";
import chambers from "@/assets/gpt-avatars/chambers.png.asset.json";
import clinic from "@/assets/gpt-avatars/clinic.png.asset.json";
import field from "@/assets/gpt-avatars/field.png.asset.json";
import forge from "@/assets/gpt-avatars/forge.png.asset.json";
import ledger from "@/assets/gpt-avatars/ledger.png.asset.json";
import matrix from "@/assets/gpt-avatars/matrix.png.asset.json";
import observatory from "@/assets/gpt-avatars/observatory.png.asset.json";
import oracle from "@/assets/gpt-avatars/oracle.png.asset.json";
import sentinel from "@/assets/gpt-avatars/sentinel.png.asset.json";
import soundstage from "@/assets/gpt-avatars/soundstage.png.asset.json";
import studio from "@/assets/gpt-avatars/studio.png.asset.json";
import timeMachine from "@/assets/gpt-avatars/time-machine.png.asset.json";

const AVATARS: Record<string, string> = {
  academy,
  blueprint,
  chambers,
  clinic,
  field,
  forge,
  ledger,
  matrix,
  observatory,
  oracle,
  sentinel,
  soundstage,
  studio,
  "time-machine": timeMachine,
};

export const getGptAvatar = (themeKey: string): string => AVATARS[themeKey] ?? matrix;
