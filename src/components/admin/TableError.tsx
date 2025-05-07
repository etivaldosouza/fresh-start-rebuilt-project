
import React from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { AlertCircle, RefreshCcw, Database, ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

type TableErrorProps = {
  onRetry: () => void;
};

export const TableError = ({ onRetry }: TableErrorProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="space-y-6">
      <Alert variant="destructive" className="border-destructive/20 bg-destructive/5">
        <AlertCircle className="h-5 w-5" />
        <AlertTitle className="text-lg font-semibold">Erro ao carregar solicitações</AlertTitle>
        <AlertDescription className="mt-2">
          <p className="mb-4">
            Não foi possível acessar os dados das solicitações de simulação.
            Isso pode ser devido à função RPC ainda não ter sido criada no banco de dados Supabase.
          </p>
          
          <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
            <CollapsibleTrigger asChild>
              <Button 
                variant="outline" 
                size="sm" 
                className="flex items-center gap-2 w-full justify-between border-destructive/20 text-destructive hover:text-destructive"
              >
                <span className="flex items-center gap-2">
                  <Database className="h-4 w-4" /> Ver instruções de correção
                </span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-4">
              <div className="rounded-md overflow-hidden border border-destructive/20">
                <div className="bg-destructive/10 px-4 py-2 font-medium">
                  Execute o código SQL abaixo no Editor SQL do Supabase:
                </div>
                <pre className="p-4 bg-slate-950 text-white text-sm overflow-auto">
                  {`CREATE OR REPLACE FUNCTION public.get_all_simulation_requests()
RETURNS SETOF public.simulation_requests
LANGUAGE sql
SECURITY DEFINER
AS $$
  SELECT * FROM public.simulation_requests ORDER BY created_at DESC;
$$;`}
                </pre>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </AlertDescription>
      </Alert>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Button 
          onClick={onRetry} 
          variant="default" 
          size="lg"
          className="flex items-center gap-2"
        >
          <RefreshCcw className="h-4 w-4" /> Tentar novamente
        </Button>
        <Button 
          onClick={() => window.location.reload()} 
          variant="outline" 
          size="lg"
          className="flex items-center gap-2"
        >
          Recarregar página
        </Button>
      </div>
    </div>
  );
};
