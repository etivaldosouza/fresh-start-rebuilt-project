
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ServicesSection = () => {
  return (
    <section className="grid md:grid-cols-2 gap-8">
      <Card className="bg-white/5 backdrop-blur border-primary/10">
        <CardContent className="pt-6">
          <h3 className="text-xl font-semibold mb-4">Aposentados e Pensionistas do INSS</h3>
          <ul className="space-y-2 text-gray-500">
            <li className="flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-primary" />
              Melhores taxas do mercado
            </li>
            <li className="flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-primary" />
              Até 120 meses para pagar
            </li>
            <li className="flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-primary" />
              Liberação rápida
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card className="bg-white/5 backdrop-blur border-primary/10">
        <CardContent className="pt-6">
          <h3 className="text-xl font-semibold mb-4">Servidores Públicos</h3>
          <ul className="space-y-2 text-gray-500">
            <li className="flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-primary" />
              Federais, Estaduais e Municipais
            </li>
            <li className="flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-primary" />
              Condições especiais
            </li>
            <li className="flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-primary" />
              Atendimento personalizado
            </li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
};

export default ServicesSection;
