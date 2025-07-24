import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Wifi, WifiOff, Zap, X } from "lucide-react";

interface PerformanceToastProps {
  onOptimize?: () => void;
}

const PerformanceToast = ({ onOptimize }: PerformanceToastProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [connectionSpeed, setConnectionSpeed] = useState<'slow' | 'fast' | 'unknown'>('unknown');

  useEffect(() => {
    // Detect connection speed
    const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
    
    if (connection) {
      const effectiveType = connection.effectiveType;
      if (effectiveType === '2g' || effectiveType === 'slow-2g') {
        setConnectionSpeed('slow');
        setIsVisible(true);
      } else {
        setConnectionSpeed('fast');
      }
    }

    // Auto-hide after 10 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleOptimize = () => {
    onOptimize?.();
    setIsVisible(false);
    
    // Show success message
    const successToast = document.createElement('div');
    successToast.className = 'fixed top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-fade-in';
    successToast.textContent = '⚡ Performance optimized!';
    document.body.appendChild(successToast);
    
    setTimeout(() => {
      document.body.removeChild(successToast);
    }, 3000);
  };

  if (!isVisible || connectionSpeed !== 'slow') return null;

  return (
    <div className="fixed top-4 left-4 right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 rounded-lg shadow-lg z-50 max-w-sm mx-auto animate-fade-in">
      <div className="flex items-start gap-3">
        <WifiOff className="w-5 h-5 mt-0.5 flex-shrink-0" />
        <div className="flex-1">
          <h4 className="font-semibold text-sm mb-1">Slow Connection Detected</h4>
          <p className="text-xs opacity-90 mb-3">Enable performance mode for faster loading?</p>
          <div className="flex gap-2">
            <Button
              onClick={handleOptimize}
              size="sm"
              className="bg-white/20 hover:bg-white/30 text-white border-white/30 text-xs px-3 py-1 h-auto"
            >
              <Zap className="w-3 h-3 mr-1" />
              Optimize
            </Button>
            <Button
              onClick={() => setIsVisible(false)}
              size="sm"
              variant="ghost"
              className="text-white hover:bg-white/10 text-xs px-2 py-1 h-auto"
            >
              <X className="w-3 h-3" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceToast;