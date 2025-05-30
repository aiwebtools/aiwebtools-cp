
import Logo from "./header/Logo";
import Navigation from "./header/Navigation";
import MobileMenu from "./header/MobileMenu";
import TabletMenu from "./header/TabletMenu";

const Header = () => {
  return (
    <header className="bg-black/95 backdrop-blur-md border-b border-cyan-500/30 fixed top-0 w-full z-50 shadow-lg shadow-cyan-500/10">
      <div className="container mx-auto px-2 sm:px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          <Logo />
          <Navigation />
          <MobileMenu />
          <TabletMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
