
import React from "react";
import { useSimulationRequests } from "@/hooks/use-simulation-requests";
import { TableControls } from "./TableControls";
import { TableError } from "./TableError";
import { TableEmpty } from "./TableEmpty";
import { TableLoading } from "./TableLoading";
import { RequestsDataTable } from "./RequestsDataTable";

export const SimulationRequestsTable = () => {
  const {
    requests,
    isLoading,
    isError,
    handleManualRetry,
    autoRefresh,
    setAutoRefresh,
  } = useSimulationRequests();

  if (isLoading) {
    return <TableLoading />;
  }

  if (isError) {
    return <TableError onRetry={handleManualRetry} />;
  }

  if (!requests || requests.length === 0) {
    return (
      <TableEmpty
        onManualRefresh={handleManualRetry}
        autoRefresh={autoRefresh}
        setAutoRefresh={setAutoRefresh}
      />
    );
  }

  return (
    <div className="space-y-4">
      <TableControls
        onManualRefresh={handleManualRetry}
        autoRefresh={autoRefresh}
        setAutoRefresh={setAutoRefresh}
      />
      <RequestsDataTable requests={requests} />
    </div>
  );
};
