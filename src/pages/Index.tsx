
import { Button } from "@/components/ui/button";
import { ShieldCheck, MessageSquare, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="flex flex-col gap-16">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center gap-8 text-center">
        <img src="/mnt/data/logokf.png" alt="KF Empréstimos" className="h-24 md:h-32 mb-4" />
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
          Empréstimo Consignado Facilitado
        </h1>
        <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
          Soluções financeiras seguras e transparentes para sua tranquilidade.
          Taxas competitivas e atendimento personalizado.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" className="gap-2">
            <Phone className="w-4 h-4" />
            Fale Conosco
          </Button>
          <Button variant="outline" size="lg" className="gap-2">
            <MessageSquare className="w-4 h-4" />
            Simular Agora
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-8">
        <Card className="bg-white/5 backdrop-blur border-primary/10">
          <CardContent className="pt-6 text-center">
            <div className="mb-4 flex justify-center">
              <ShieldCheck className="h-12 w-12 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Segurança Garantida</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Processo 100% seguro e transparente, com toda documentação necessária.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/5 backdrop-blur border-primary/10">
          <CardContent className="pt-6 text-center">
            <div className="mb-4 flex justify-center">
              <MessageSquare className="h-12 w-12 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Atendimento Personalizado</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Consultores especializados para encontrar a melhor solução para você.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/5 backdrop-blur border-primary/10">
          <CardContent className="pt-6 text-center">
            <div className="mb-4 flex justify-center">
              <Phone className="h-12 w-12 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Facilidade de Contato</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Entre em contato facilmente pelos nossos canais de atendimento.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Index;
