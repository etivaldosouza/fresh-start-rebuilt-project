import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-8 text-center">
      <img 
        src="/lovable-uploads/bc0c7039-437a-45d4-91ec-5a887f5ed6ca.png" 
        alt="KF Empréstimos" 
        className="h-24 md:h-32 mb-4" 
      />
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
        Empréstimo Consignado Facilitado
      </h1>
      <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
        Soluções financeiras seguras e transparentes para sua tranquilidade.
        Taxas competitivas e atendimento personalizado.
      </p>
      <Button 
        asChild
        variant="outline" 
        size="lg" 
        className="gap-2"
      >
        <a 
          href="https://wa.me/5598981878948" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <MessageSquare className="w-4 h-4" />
          Simular Agora
        </a>
      </Button>
    </section>
  );
};

export default HeroSection;
