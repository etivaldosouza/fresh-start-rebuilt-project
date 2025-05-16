
import React from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center gap-8 text-center py-16" aria-labelledby="hero-heading">
      {/* Background circles para design moderno */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 space-y-10">
        <img 
          src="/lovable-uploads/bc0c7039-437a-45d4-91ec-5a887f5ed6ca.png" 
          alt="KF Empréstimos Logo" 
          className="h-24 md:h-36 mb-4 mx-auto" 
          width="144"
          height="144"
        />
        <h1 id="hero-heading" className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none heading-gradient max-w-3xl mx-auto">
          Empréstimo Consignado com as Melhores Taxas do Mercado
        </h1>
        <p className="max-w-[800px] text-gray-500 md:text-xl dark:text-gray-400 mx-auto">
          Soluções financeiras seguras e transparentes para aposentados, pensionistas e servidores públicos em São Luís e todo Maranhão.
          Atendimento personalizado e taxas competitivas para sua tranquilidade financeira.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button 
            asChild
            size="lg" 
            className="gap-2 text-base px-6 py-6 rounded-full shadow-lg hover:shadow-primary/20"
          >
            <a 
              href="https://wa.me/5598981878948" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Simular empréstimo pelo WhatsApp"
            >
              <MessageSquare className="w-5 h-5" aria-hidden="true" />
              Simular Agora
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
