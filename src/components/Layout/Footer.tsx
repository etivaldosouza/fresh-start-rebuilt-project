
const Footer = () => {
  return (
    <footer className="border-t border-primary/10 py-6 md:py-0 bg-primary/90">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:h-16">
        <p className="text-sm text-white/90">
          © {new Date().getFullYear()} Meu App. Todos os direitos reservados.
        </p>
        <div className="flex items-center space-x-4">
          <a
            href="#"
            className="text-sm text-white/80 hover:text-white transition-colors"
          >
            Termos
          </a>
          <a
            href="#"
            className="text-sm text-white/80 hover:text-white transition-colors"
          >
            Privacidade
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
