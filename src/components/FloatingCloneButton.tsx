import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { Copy } from "lucide-react";
import { createTimePortalEffect } from "@/utils/timeEffects";

const CLONE_URL =
  "https://lovable.dev/projects/9c6610ab-51df-4741-b8a5-b53fc89d2b1c?via=aiwebtools";

const FloatingCloneButton = () => {
  const [mountNode, setMountNode] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const node = document.createElement("div");
    node.id = "floating-clone-button-root";
    document.body.appendChild(node);
    setMountNode(node);

    return () => {
      node.remove();
    };
  }, []);

  const content = useMemo(
    () => (
      <>
        {/* Ensures true viewport pinning on mobile - optimized for instant response */}
        <style>{`
          .floating-clone-btn {
            position: fixed !important;
            left: 8px;
            z-index: 9999;
            top: 100px;
            transform: translateZ(0);
            will-change: auto;
            contain: layout style;
          }
          @media (min-width: 768px) {
            .floating-clone-btn {
              top: 192px;
            }
          }
        `}</style>

        <div className="floating-clone-btn">
          <a
            href={CLONE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              createTimePortalEffect(CLONE_URL, "Clone AI Web Tools");
            }}
            className="clone-button-container bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 text-white 
              w-14 h-14 md:w-20 md:h-20 
              rounded-full shadow-lg flex flex-col items-center justify-center relative"
            style={{
              boxShadow: "0 4px 20px rgba(6, 182, 212, 0.4)",
              transform: "translateZ(0)",
            }}
            title="Clone This AI Tools Website"
          >
            {/* Static border glow - no animation */}
            <div className="absolute inset-0 rounded-full border-2 md:border-4 border-cyan-400/50" />

            <div className="relative flex flex-col items-center justify-center text-center">
              <Copy className="w-4 h-4 md:w-5 md:h-5 mb-0.5" />
              <div className="text-[7px] md:text-[9px] font-bold leading-tight tracking-wide">
                <div>CLONE</div>
                <div>SITE</div>
                <div className="text-yellow-300">FREE</div>
              </div>
            </div>
          </a>
        </div>
      </>
    ),
    []
  );

  if (!mountNode) return null;
  return createPortal(content, mountNode);
};

export default FloatingCloneButton;
