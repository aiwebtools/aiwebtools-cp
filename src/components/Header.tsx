
import Logo from "./header/Logo";
import Navigation from "./header/Navigation";
import MobileMenu from "./header/MobileMenu";
import TabletMenu from "./header/TabletMenu";
import GlobalSearchBar from "./GlobalSearchBar";

const Header = () => {
  return (
    <header className="bg-black/95 backdrop-blur-md border-b border-cyan-500/30 fixed top-0 w-full z-50 shadow-lg shadow-cyan-500/10">
      <div className="container mx-auto px-2 sm:px-4 py-3 sm:py-4">
        {/* Mobile Layout - Stack vertically */}
        <div className="md:hidden">
          {/* Top row: Logo and Menu button */}
          <div className="flex items-center justify-between mb-3">
            <Logo />
            <MobileMenu />
          </div>
          {/* Bottom row: Full width search */}
          <div className="w-full">
            <GlobalSearchBar />
          </div>
        </div>

        {/* Desktop Layout - Single row */}
        <div className="hidden md:flex items-center justify-between gap-2 sm:gap-4">
          <Logo />
          
          {/* Global Search Bar - Enhanced for better visibility and responsiveness */}
          <div className="flex-1 justify-center max-w-xl lg:max-w-2xl mx-2 sm:mx-4">
            <GlobalSearchBar />
          </div>
          
          <Navigation />
          <TabletMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
