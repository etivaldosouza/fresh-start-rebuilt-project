
import { Badge } from "@/components/ui/badge";
import { ArrowRightLeft, CheckCircle2, Clock, Award, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const PortabilitySection = () => {
  const handleWhatsAppClick = () => {
    // Using the same phone number
    const phoneNumber = "5598981878948";
    const message = "Olá! Gostaria de informações sobre portabilidade bancária.";
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <Badge className="mb-4 px-3 py-1.5 text-sm font-medium">Novo</Badge>
        <h2 className="text-3xl font-bold mb-4 heading-gradient inline-block">Portabilidade Bancária</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Transfira seu empréstimo para outro banco com melhores condições de pagamento ou taxas de juros mais baixas.
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
          onClick={handleWhatsAppClick}
          className="gap-2 rounded-full"
        >
          <MessageSquare className="w-4 h-4" />
          Fazer Portabilidade
        </Button>
      </div>
    </section>
  );
};

export default PortabilitySection;
