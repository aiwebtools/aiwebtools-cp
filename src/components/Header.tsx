
import Logo from "./header/Logo";
import Navigation from "./header/Navigation";
import MobileMenu from "./header/MobileMenu";
import TabletMenu from "./header/TabletMenu";
import GlobalSearchBar from "./GlobalSearchBar";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 w-full z-[100] bg-black/95 border-b border-cyan-500/30 shadow-2xl backdrop-blur-md transition-all duration-200">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between min-h-[60px]">
          <Logo />
          
          <div className="flex items-center gap-3">
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
