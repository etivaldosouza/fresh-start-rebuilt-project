
import { Badge } from "@/components/ui/badge";
import { ArrowRightLeft, CheckCircle2, Clock, Award } from "lucide-react";

const PortabilitySection = () => {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <Badge className="mb-4 px-3 py-1.5 text-sm font-medium">Novo</Badge>
        <h2 className="text-3xl font-bold mb-4 heading-gradient inline-block">Portabilidade Bancária</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Transfira seu empréstimo para a KF e aproveite taxas menores. 
          Processo simples, rápido e sem burocracia.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div className="flex flex-col items-center text-center p-6 rounded-xl bg-gradient-to-br from-primary/5 to-blue-500/5 border border-primary/10 hover-card">
          <div className="bg-primary/10 p-3 rounded-full mb-4">
            <CheckCircle2 className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Processo Simplificado</h3>
          <p className="text-gray-500">
            Cuidamos de toda a burocracia para você. Processo fácil e rápido.
          </p>
        </div>
        
        <div className="flex flex-col items-center text-center p-6 rounded-xl bg-gradient-to-br from-primary/5 to-blue-500/5 border border-primary/10 hover-card">
          <div className="bg-primary/10 p-3 rounded-full mb-4">
            <Clock className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Aprovação Rápida</h3>
          <p className="text-gray-500">
            Análise ágil e liberação do valor em poucos dias úteis.
          </p>
        </div>
        
        <div className="flex flex-col items-center text-center p-6 rounded-xl bg-gradient-to-br from-primary/5 to-blue-500/5 border border-primary/10 hover-card">
          <div className="bg-primary/10 p-3 rounded-full mb-4">
            <Award className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Melhores Taxas</h3>
          <p className="text-gray-500">
            Economize com nossas taxas reduzidas e condições especiais.
          </p>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <Button 
          asChild
          className="gap-2 rounded-full"
        >
          <a 
            href="https://wa.me/5598981878948" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <ArrowRightLeft className="w-4 h-4" />
            Fazer Portabilidade
          </a>
        </Button>
      </div>
    </section>
  );
};

export default PortabilitySection;

// We need to import the Button component
import { Button } from "@/components/ui/button";
