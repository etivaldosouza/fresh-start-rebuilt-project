import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container flex flex-col items-center">
        <img 
          src="/lovable-uploads/bc0c7039-437a-45d4-91ec-5a887f5ed6ca.png" 
          alt="KF Empréstimos" 
          className="h-12 mb-4" 
        />
        <p className="text-sm text-white/80 text-center">
          © {new Date().getFullYear()} KF Empréstimos. Todos os direitos reservados.
        </p>
        {/* Admin access link - subtle at bottom */}
        <div className="mt-4 text-xs text-white/40 text-center">
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
