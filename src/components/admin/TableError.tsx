
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
          Isso pode ser devido a um problema com as permissões no banco de dados.
          Por favor, tente novamente ou contate o suporte se o problema persistir.
        </AlertDescription>
      </Alert>
      <Button onClick={onRetry} variant="outline" className="flex items-center gap-2">
        <RefreshCcw className="h-4 w-4" /> Tentar novamente
      </Button>
    </div>
  );
};
