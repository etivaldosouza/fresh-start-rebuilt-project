
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-primary/10 py-8 bg-primary text-white">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center md:items-start">
          <img 
            src="/lovable-uploads/bc0c7039-437a-45d4-91ec-5a887f5ed6ca.png" 
            alt="KF Empréstimos" 
            className="h-12 mb-4" 
          />
          <p className="text-sm text-white/80 max-w-xs text-center md:text-left">
            Soluções financeiras com transparência e segurança para sua tranquilidade.
          </p>
        </div>
        
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-4">Contato</h3>
          <div className="space-y-3">
            <a
              href="tel:+5598981878948"
              className="text-sm text-white/80 hover:text-white transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              (98) 98187-8948
            </a>
            <a
              href="mailto:kfemprestimos@gmail.com"
              className="text-sm text-white/80 hover:text-white transition-colors flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              kfemprestimos@gmail.com
            </a>
            <div className="text-sm text-white/80 flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              São Luís, MA
            </div>
          </div>
        </div>
        
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-4">Horário de Atendimento</h3>
          <div className="space-y-2">
            <div className="text-sm text-white/80 flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Segunda à Sexta: 8h às 18h
            </div>
            <div className="text-sm text-white/80 flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Sábado: 8h às 12h
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mt-8 pt-6 border-t border-white/10 flex flex-col items-center">
        <p className="text-sm text-white/80 text-center">
          © {new Date().getFullYear()} KF Empréstimos. Todos os direitos reservados.
        </p>
        {/* Admin access link - subtle at bottom */}
        <div className="mt-2 text-xs text-white/40 text-center">
          <Link 
            to="/login" 
            className="hover:text-white/60 transition-colors"
            aria-label="Área administrativa"
          >
            · Admin ·
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
