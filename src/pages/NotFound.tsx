
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";
import DeferredMount from "@/components/DeferredMount";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-black relative">
      <DeferredMount delay={50}><AnimatedBackground /></DeferredMount>
      <div className="relative z-10 min-h-screen flex items-center justify-center cyber-grid">
        <div className="text-center p-8 bg-gray-900/80 backdrop-blur-md rounded-xl border border-purple-500/30 shadow-2xl shadow-purple-500/20 max-w-md mx-4">
          <div className="text-8xl mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent font-bold cyber-glow">
            404
          </div>
          <h1 className="text-3xl font-bold text-cyan-100 mb-4 cyber-glow">
            Page Not Found
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Oops! The page you're looking for has drifted into the digital void.
          </p>
          <div className="space-y-4">
            <Link to="/">
              <Button 
                size="lg" 
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white transition-all duration-300 transform hover:scale-105 interactive-button"
              >
                <Home className="w-5 h-5 mr-2" />
                Return to Home
              </Button>
            </Link>
            <Link to="/">
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full border-purple-500/30 bg-gray-900/80 text-cyan-100 hover:bg-purple-500/20 interactive-button"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Go Back
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
