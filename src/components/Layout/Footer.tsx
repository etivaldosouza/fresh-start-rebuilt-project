
import { Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-primary/10 py-6 md:py-0 bg-primary/90">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:h-16">
        <div className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/bc0c7039-437a-45d4-91ec-5a887f5ed6ca.png" 
            alt="KF Empréstimos" 
            className="h-8" 
          />
          <p className="text-sm text-white/90">
            © {new Date().getFullYear()} KF Empréstimos. Todos os direitos reservados.
          </p>
        </div>
        <div className="flex items-center space-x-6">
          <a
            href="tel:+5598981878948"
            className="text-sm text-white/80 hover:text-white transition-colors flex items-center gap-2 whitespace-nowrap"
          >
            <Phone className="w-4 h-4" />
            (98) 98187-8948
          </a>
          <a
            href="mailto:kfemprestimos@gmail.com"
            className="text-sm text-white/80 hover:text-white transition-colors flex items-center gap-2 whitespace-nowrap"
          >
            <Mail className="w-4 h-4" />
            kfemprestimos@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
