
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SimulationRequestsTable } from "@/components/admin/SimulationRequestsTable";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { InfoIcon } from "lucide-react";

// Create a new QueryClient instance that will be used exclusively for this component
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 3,
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
          <Alert className="mb-4">
            <InfoIcon className="h-4 w-4" />
            <AlertDescription>
              Este painel exibe todas as solicitações de simulação recebidas.
            </AlertDescription>
          </Alert>
          
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
