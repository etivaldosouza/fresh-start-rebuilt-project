
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SimulationRequestsTable } from "@/components/admin/SimulationRequestsTable";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const Admin = () => {
  return (
    <div className="container py-8">
      <Card>
        <CardHeader>
          <CardTitle>Painel Administrativo</CardTitle>
        </CardHeader>
        <CardContent>
          <QueryClientProvider client={queryClient}>
            <SimulationRequestsTable />
          </QueryClientProvider>
        </CardContent>
      </Card>
    </div>
  );
};

export default Admin;
