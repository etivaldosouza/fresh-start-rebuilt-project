
import { Link } from "react-router-dom";
import { Home, Menu, Users, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/90 backdrop-blur-sm border-b border-primary/10">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center space-x-2 text-white">
          <img src="/mnt/data/logokf.png" alt="KF Empréstimos" className="h-8" />
        </Link>

        {/* Menu Mobile */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden text-white hover:text-white/90">
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4">
              <Link to="/" className="text-lg font-medium flex items-center gap-2">
                <Home className="w-4 h-4" />
                Início
              </Link>
              <Link to="/sobre" className="text-lg font-medium flex items-center gap-2">
                <Users className="w-4 h-4" />
                Sobre Nós
              </Link>
              <Link to="/localizacao" className="text-lg font-medium flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Localização
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-sm font-medium text-white hover:text-white/90 flex items-center gap-2">
            <Home className="w-4 h-4" />
            Início
          </Link>
          <Link to="/sobre" className="text-sm font-medium text-white hover:text-white/90 flex items-center gap-2">
            <Users className="w-4 h-4" />
            Sobre Nós
          </Link>
          <Link to="/localizacao" className="text-sm font-medium text-white hover:text-white/90 flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Localização
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
