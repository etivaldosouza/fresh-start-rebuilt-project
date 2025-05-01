
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SimulationRequestsTable } from "@/components/admin/SimulationRequestsTable";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Create a new QueryClient instance that will be used exclusively for this component
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 30000,
    },
  },
});

const Admin = () => {
  return (
    <div className="container py-8">
      <Card>
        <CardHeader>
          <CardTitle>Painel Administrativo</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="simulacoes">
            <TabsList className="mb-4">
              <TabsTrigger value="simulacoes">Solicitações de Simulação</TabsTrigger>
            </TabsList>
            <TabsContent value="simulacoes">
              <QueryClientProvider client={queryClient}>
                <SimulationRequestsTable />
              </QueryClientProvider>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Admin;
