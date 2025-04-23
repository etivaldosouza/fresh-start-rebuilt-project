
import { Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-primary/10 py-6 md:py-0 bg-primary/90">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:h-16">
        <div className="flex items-center gap-2">
          <img src="/mnt/data/logokf.png" alt="KF Empréstimos" className="h-8" />
          <p className="text-sm text-white/90">
            © {new Date().getFullYear()} KF Empréstimos. Todos os direitos reservados.
          </p>
        </div>
        <div className="flex items-center space-x-6">
          <a
            href="tel:+5500000000000"
            className="text-sm text-white/80 hover:text-white transition-colors flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            (00) 0000-0000
          </a>
          <a
            href="mailto:contato@kfemprestimos.com.br"
            className="text-sm text-white/80 hover:text-white transition-colors flex items-center gap-2"
          >
            <Mail className="w-4 h-4" />
            contato@kfemprestimos.com.br
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
