
import React from "react";
import { useSimulationRequests } from "@/hooks/use-simulation-requests";
import { TableControls } from "./TableControls";
import { TableError } from "./TableError";
import { TableEmpty } from "./TableEmpty";
import { TableLoading } from "./TableLoading";
import { RequestsDataTable } from "./RequestsDataTable";
import { toast } from "@/components/ui/sonner";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { InfoIcon } from "lucide-react";

type SimulationRequest = {
  id: string;
  name: string;
  email: string;
  phone: string;
  created_at: string;
};

export const SimulationRequestsTable = () => {
  const {
    requests,
    isLoading,
    isError,
    handleManualRetry,
    autoRefresh,
    setAutoRefresh,
  } = useSimulationRequests();

  React.useEffect(() => {
    if (isError) {
      console.log("Error state detected in SimulationRequestsTable");
      toast.error("Erro ao carregar solicitações. Tente novamente.");
    }
  }, [isError]);

  if (isLoading) {
    return <TableLoading />;
  }

  if (isError) {
    return <TableError onRetry={handleManualRetry} />;
  }

  if (!requests || (Array.isArray(requests) && requests.length === 0)) {
    return (
      <>
        <Alert className="mb-4">
          <InfoIcon className="h-4 w-4" />
          <AlertDescription>
            Não há solicitações de simulação no momento. As novas solicitações aparecerão aqui automaticamente.
          </AlertDescription>
        </Alert>
        <TableEmpty
          onManualRefresh={handleManualRetry}
          autoRefresh={autoRefresh}
          setAutoRefresh={setAutoRefresh}
        />
      </>
    );
  }

  return (
    <div className="space-y-4">
      <TableControls
        onManualRefresh={handleManualRetry}
        autoRefresh={autoRefresh}
        setAutoRefresh={setAutoRefresh}
      />
      <RequestsDataTable requests={requests as SimulationRequest[]} />
    </div>
  );
};
