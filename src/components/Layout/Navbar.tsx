
import { Link } from "react-router-dom";
import { Home, Menu, Users, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Verificar se o usuário está autenticado
  useEffect(() => {
    // Verificar sessão atual
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      setIsLoggedIn(!!data.session);
    };
    
    checkSession();

    // Configurar listener para mudanças no estado de autenticação
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setIsLoggedIn(!!session);
    });

    // Adicionar efeito de scroll
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      authListener.subscription.unsubscribe();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-primary shadow-md py-2" 
        : "bg-primary/90 backdrop-blur-sm py-4"
    }`}>
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center space-x-2 text-white">
          <img 
            src="/lovable-uploads/bc0c7039-437a-45d4-91ec-5a887f5ed6ca.png" 
            alt="KF Empréstimos" 
            className="h-10 transition-transform hover:scale-105" 
          />
        </Link>

        {/* Menu Mobile */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-white/10">
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent 
            side="right" 
            className="border-l border-white/10 bg-primary/95 backdrop-blur-md text-white flex flex-col h-auto max-h-[300px] rounded-bl-lg"
          >
            <nav className="flex flex-col gap-4 mt-8">
              <Link to="/" className="text-lg font-medium flex items-center gap-2 p-2 hover:bg-white/10 rounded-md transition-colors">
                <Home className="w-5 h-5" />
                Início
              </Link>
              <Link to="/sobre" className="text-lg font-medium flex items-center gap-2 p-2 hover:bg-white/10 rounded-md transition-colors">
                <Users className="w-5 h-5" />
                Sobre Nós
              </Link>
              <Link to="/localizacao" className="text-lg font-medium flex items-center gap-2 p-2 hover:bg-white/10 rounded-md transition-colors">
                <MapPin className="w-5 h-5" />
                Localização
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-sm font-medium text-white hover:text-white/90 transition-colors flex items-center gap-2">
            <Home className="w-4 h-4" />
            Início
          </Link>
          <Link to="/sobre" className="text-sm font-medium text-white hover:text-white/90 transition-colors flex items-center gap-2">
            <Users className="w-4 h-4" />
            Sobre Nós
          </Link>
          <Link to="/localizacao" className="text-sm font-medium text-white hover:text-white/90 transition-colors flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Localização
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
