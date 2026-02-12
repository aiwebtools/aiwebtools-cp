import { Info } from "lucide-react";

interface UniversalDisclaimerProps {
  className?: string;
}

const UniversalDisclaimer = ({ className = "" }: UniversalDisclaimerProps) => {
  return (
    <div className={`bg-muted/30 border border-border/50 rounded-lg p-4 ${className}`}>
      <div className="flex items-start gap-3">
        <Info className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
        <div className="text-sm text-muted-foreground">
          <p className="font-medium mb-1">Purpose & Disclaimer</p>
          <p className="text-xs leading-relaxed">
            This AI tool is provided for <strong>informational, educational, and self-empowerment purposes only</strong>. 
            It is not intended to replace professional advice, services, or judgment. 
            Users should exercise their own discretion and consult qualified professionals for specific needs. 
            AI Web Tools assumes no liability for decisions made based on information provided by this tool.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UniversalDisclaimer;
