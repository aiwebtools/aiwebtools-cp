
import Logo from "./header/Logo";
import Navigation from "./header/Navigation";
import MobileMenu from "./header/MobileMenu";
import TabletMenu from "./header/TabletMenu";
import GlobalSearchBar from "./GlobalSearchBar";

const Header = () => {
  return (
    <header className="relative bg-black/95 backdrop-blur-md border-b border-cyan-500/30 fixed top-0 w-full z-50 shadow-lg shadow-cyan-500/10 overflow-hidden">
      {/* Matrix effect background - overlays nav */}
      <div className="absolute inset-0 opacity-10 z-20 pointer-events-none">
        <div className="matrix-rain absolute inset-0"></div>
      </div>
      
      {/* Moving background particles - overlays nav */}
      <div className="absolute inset-0 opacity-20 z-20 pointer-events-none">
        <div className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-bounce" style={{top: '20%', left: '10%', animationDelay: '0s', animationDuration: '3s'}}></div>
        <div className="absolute w-1 h-1 bg-cyan-300/40 rounded-full animate-bounce" style={{top: '60%', left: '30%', animationDelay: '1s', animationDuration: '4s'}}></div>
        <div className="absolute w-1 h-1 bg-cyan-500/30 rounded-full animate-bounce" style={{top: '40%', left: '70%', animationDelay: '2s', animationDuration: '3.5s'}}></div>
        <div className="absolute w-1 h-1 bg-cyan-400/35 rounded-full animate-bounce" style={{top: '80%', left: '85%', animationDelay: '1.5s', animationDuration: '2.8s'}}></div>
        <div className="absolute w-1 h-1 bg-cyan-300/25 rounded-full animate-bounce" style={{top: '30%', left: '50%', animationDelay: '0.5s', animationDuration: '3.2s'}}></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute w-2 h-2 border border-cyan-400/20 rotate-45 animate-pulse" style={{top: '25%', left: '20%', animationDelay: '2s'}}></div>
        <div className="absolute w-2 h-2 border border-cyan-300/25 rotate-12 animate-pulse" style={{top: '70%', left: '60%', animationDelay: '3s'}}></div>
        <div className="absolute w-1.5 h-1.5 bg-cyan-500/15 rotate-45 animate-pulse" style={{top: '50%', left: '90%', animationDelay: '1s'}}></div>
      </div>
      <div className="relative container mx-auto px-3 sm:px-4 py-1.5 sm:py-2 z-10">
        <div className="flex items-center justify-between gap-3 sm:gap-4">
          <Logo />
          
          {/* Desktop Search Bar - hidden on desktop but preserved for mobile functionality */}
          <div className="hidden">
            <GlobalSearchBar />
          </div>
          
          <div className="flex items-center gap-2">
            <Navigation />
            <MobileMenu />
            <TabletMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
