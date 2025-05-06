
import React from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { AlertCircle, RefreshCcw } from "lucide-react";

type TableErrorProps = {
  onRetry: () => void;
};

export const TableError = ({ onRetry }: TableErrorProps) => {
  return (
    <div className="space-y-4">
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Erro ao carregar solicitações</AlertTitle>
        <AlertDescription>
          Não foi possível acessar os dados das solicitações de simulação.
          Isso pode ser devido à função RPC ainda não ter sido criada no banco de dados Supabase.
          Por favor, acesse o SQL Editor do Supabase e execute o seguinte código:
          <pre className="mt-2 p-2 bg-gray-100 rounded text-sm overflow-auto">
            {`CREATE OR REPLACE FUNCTION public.get_all_simulation_requests()
RETURNS SETOF public.simulation_requests
LANGUAGE sql
SECURITY DEFINER
AS $$
  SELECT * FROM public.simulation_requests ORDER BY created_at DESC;
$$;`}
          </pre>
        </AlertDescription>
      </Alert>
      <div className="flex flex-col sm:flex-row gap-3">
        <Button 
          onClick={onRetry} 
          variant="default" 
          className="flex items-center gap-2"
        >
          <RefreshCcw className="h-4 w-4" /> Tentar novamente agora
        </Button>
        <Button 
          onClick={() => window.location.reload()} 
          variant="outline" 
          className="flex items-center gap-2"
        >
          Recarregar página
        </Button>
      </div>
    </div>
  );
};
