
import Logo from "./header/Logo";
import Navigation from "./header/Navigation";
import MobileMenu from "./header/MobileMenu";
import DesktopMenu from "./header/DesktopMenu";
import TabletMenu from "./header/TabletMenu";
import GlobalSearchBar from "./GlobalSearchBar";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-[100] bg-black/95 border-b border-cyan-500/30 shadow-lg backdrop-blur-sm">
      {/* Cosmic scrolling marquee - top strip */}
      <div
        aria-label="Cosmic message"
        className="w-full overflow-hidden bg-black border-b border-matrix-green/30 py-1"
      >
        <div className="cosmic-marquee-track whitespace-nowrap text-[10px] md:text-[11px] font-mono tracking-[0.18em] text-matrix-green/90">
          <span className="mx-8 inline-block">
            ✦ THE COSMIC LIGHT IS WITHIN ✦
          </span>
        </div>
      </div>
      <div className="container mx-auto px-3 md:px-4 py-3 md:py-4">
        <div className="flex items-center justify-between min-h-[50px] md:min-h-[60px] gap-2">
          {/* Logo - smaller on mobile */}
          <div className="flex-shrink min-w-0">
            <Logo />
          </div>
          
          {/* Menu buttons - always visible */}
          <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
            <Navigation />
            <MobileMenu />
            <DesktopMenu />
            <TabletMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
