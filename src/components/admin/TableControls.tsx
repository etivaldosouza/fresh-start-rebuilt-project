
import React from "react";
import { Button } from "@/components/ui/button";
import { RefreshCcw } from "lucide-react";

type TableControlsProps = {
  onManualRefresh: () => void;
  autoRefresh: boolean;
  setAutoRefresh: (value: boolean) => void;
};

export const TableControls = ({
  onManualRefresh,
  autoRefresh,
  setAutoRefresh,
}: TableControlsProps) => {
  return (
    <div className="flex justify-end gap-4 mb-4">
      <Button 
        onClick={onManualRefresh} 
        variant="outline" 
        size="sm" 
        className="flex items-center gap-2"
      >
        <RefreshCcw className="h-4 w-4" /> Atualizar dados
      </Button>
      <Button 
        onClick={() => setAutoRefresh(!autoRefresh)} 
        variant={autoRefresh ? "default" : "outline"}
        size="sm"
      >
        {autoRefresh ? "Desativar" : "Ativar"} atualização automática
      </Button>
    </div>
  );
};
