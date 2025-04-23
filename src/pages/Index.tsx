
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 text-center">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
        Bem-vindo ao seu novo projeto
      </h1>
      <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
        Este é um ponto de partida limpo e moderno para seu próximo projeto incrível.
        Personalize este template de acordo com suas necessidades.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Button size="lg">
          Começar
        </Button>
        <Button variant="outline" size="lg">
          Saiba mais
        </Button>
      </div>
    </div>
  );
};

export default Index;
