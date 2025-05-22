
import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ServicesSection = () => {
  return (
    <section id="services" className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 heading-gradient inline-block">Nossos Serviços</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Oferecemos soluções financeiras personalizadas para atender às suas necessidades.
        </p>
      </div>
    
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="overflow-hidden hover-card border-primary/10 h-full">
          <div className="h-2 bg-gradient-to-r from-primary to-blue-400"></div>
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Aposentados e Pensionistas do INSS</h3>
                <ul className="space-y-3 text-gray-500">
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary" />
                    <span>Melhores taxas do mercado</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary" />
                    <span>Até 120 meses para pagar</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary" />
                    <span>Liberação rápida</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary" />
                    <span>Atendimento personalizado</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden hover-card border-primary/10 h-full">
          <div className="h-2 bg-gradient-to-r from-blue-400 to-primary"></div>
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Servidores Públicos</h3>
                <ul className="space-y-3 text-gray-500">
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary" />
                    <span>Federais, Estaduais e Municipais</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary" />
                    <span>Condições especiais</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary" />
                    <span>Atendimento personalizado</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary" />
                    <span>Prazos estendidos</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ServicesSection;
