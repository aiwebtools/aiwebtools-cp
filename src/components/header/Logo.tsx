
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center space-x-2 group">
      <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center text-black font-bold text-xl transform group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-cyan-500/50">
        🤖
      </div>
      <div className="flex flex-col">
        <span className="divine-gold-radiance text-xl font-bold tracking-tight">
          AITOOLS.STUDIO
        </span>
        <span className="text-xs text-cyan-300 tracking-wider">
          DIVINE AI DIRECTORY
        </span>
      </div>
    </Link>
  );
};

export default Logo;
