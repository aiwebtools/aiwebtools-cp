
import Logo from "./header/Logo";
import Navigation from "./header/Navigation";
import MobileMenu from "./header/MobileMenu";
import TabletMenu from "./header/TabletMenu";
import GlobalSearchBar from "./GlobalSearchBar";

const Header = () => {
  return (
    <header className="bg-black/95 backdrop-blur-md border-b border-cyan-500/30 fixed top-0 w-full z-50 shadow-lg shadow-cyan-500/10">
      <div className="container mx-auto px-2 sm:px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          <Logo />
          
          {/* Global Search Bar - Enhanced for better visibility and responsiveness */}
          <div className="hidden md:flex flex-1 justify-center max-w-xl lg:max-w-2xl mx-2 sm:mx-4">
            <GlobalSearchBar />
          </div>
          
          <Navigation />
          <MobileMenu />
          <TabletMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
