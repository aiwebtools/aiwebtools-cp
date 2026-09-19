import { Download } from "lucide-react";
import { getOpInstructionDoc } from "@/data/opInstructionDocs";

interface OpInstructionsButtonProps {
  slug?: string | null;
  name?: string | null;
  className?: string;
  compact?: boolean;
}

/**
 * Gold one-click download of the ORIGINAL operational instructions document,
 * exactly as authored by AIWebTools.ai. The file is served verbatim — never rewritten.
 */
const OpInstructionsButton = ({ slug, name, className = "", compact = false }: OpInstructionsButtonProps) => {
  const doc = getOpInstructionDoc(slug);
  if (!doc) return null;

  const label = compact ? "Operational Instructions" : "Download Full Operational Instructions";

  return (
    <a
      href={doc.href}
      download={doc.source}
      className={`op-gold-btn inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wide ${className}`}
      title={`Download the complete operational instructions for ${name || "this tool"} (original document, unedited)`}
      aria-label={`Download the full operational instructions for ${name || "this tool"}`}
    >
      <Download className="h-3.5 w-3.5" aria-hidden="true" />
      {label}
    </a>
  );
};

export default OpInstructionsButton;
