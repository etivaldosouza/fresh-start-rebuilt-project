
import { Badge } from "@/components/ui/badge";

const PortabilitySection = () => {
  return (
    <section className="bg-primary/5 rounded-lg p-8">
      <div className="text-center mb-8">
        <Badge className="mb-4">Novo</Badge>
        <h2 className="text-3xl font-bold mb-4">Portabilidade Bancária</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Transfira seu empréstimo para a KF e aproveite taxas menores. 
          Processo simples e rápido, sem burocracia.
        </p>
      </div>
    </section>
  );
};

export default PortabilitySection;
