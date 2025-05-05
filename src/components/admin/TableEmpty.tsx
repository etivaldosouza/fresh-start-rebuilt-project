
import React from "react";
import { Button } from "@/components/ui/button";
import { RefreshCcw } from "lucide-react";

type TableEmptyProps = {
  onManualRefresh: () => void;
  autoRefresh: boolean;
  setAutoRefresh: (value: boolean) => void;
};

export const TableEmpty = ({
  onManualRefresh,
  autoRefresh,
  setAutoRefresh,
}: TableEmptyProps) => {
  return (
    <div className="text-center p-6">
      <p className="text-lg text-gray-500 mb-4">Nenhuma solicitação de simulação encontrada.</p>
      <div className="flex justify-center gap-4">
        <Button onClick={onManualRefresh} variant="outline" className="flex items-center gap-2">
          <RefreshCcw className="h-4 w-4" /> Atualizar dados
        </Button>
        <Button 
          onClick={() => setAutoRefresh(!autoRefresh)} 
          variant={autoRefresh ? "default" : "outline"}
        >
          {autoRefresh ? "Desativar" : "Ativar"} atualização automática
        </Button>
      </div>
    </div>
  );
};
