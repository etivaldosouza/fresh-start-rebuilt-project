
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
          Por favor, tente novamente ou verifique sua autenticação.
        </AlertDescription>
      </Alert>
      <Button onClick={onRetry} variant="outline" className="flex items-center gap-2">
        <RefreshCcw className="h-4 w-4" /> Tentar novamente
      </Button>
    </div>
  );
};
