
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { ShieldCheck, MessageSquare, Badge, ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";

const Index = () => {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: ""
    }
  });

  const onSubmit = (data: any) => {
    console.log(data);
    // Here you can handle the form submission
  };

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

      {/* Services Section */}
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
                Até 84 meses para pagar
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

      {/* Portabilidade Section */}
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

      {/* Contact Form */}
      <section className="max-w-md mx-auto w-full">
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-4 text-center">Solicite uma Simulação</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome</FormLabel>
                      <FormControl>
                        <Input placeholder="Seu nome completo" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Telefone</FormLabel>
                      <FormControl>
                        <Input placeholder="(00) 00000-0000" type="tel" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-mail</FormLabel>
                      <FormControl>
                        <Input placeholder="seu@email.com" type="email" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">
                  Solicitar Simulação
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Index;
