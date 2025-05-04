
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SimulationRequestsTable } from "@/components/admin/SimulationRequestsTable";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { InfoIcon, LogOut } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/components/ui/sonner";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Create a new QueryClient instance that will be used exclusively for this component
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 5,
      staleTime: 30000,
    },
  },
});

const Admin = () => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  // Verificar autenticação do usuário
  useEffect(() => {
    const checkAuth = async () => {
      const { data } = await supabase.auth.getSession();
      
      if (!data.session) {
        toast.error("Você precisa estar logado para acessar esta página");
        navigate("/login");
        return;
      }
      
      setAuthenticated(true);
      setLoading(false);
    };
    
    checkAuth();

    // Configurar listener para mudanças no estado de autenticação
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_OUT") {
        navigate("/login");
      }
      setAuthenticated(!!session);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      toast.success("Logout realizado com sucesso");
      navigate("/login");
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
      toast.error("Erro ao fazer logout");
    }
  };

  // Mostrar mensagem de carregamento enquanto verifica autenticação
  if (loading) {
    return (
      <div className="container py-8 flex items-center justify-center h-[50vh]">
        <p className="text-lg">Carregando painel administrativo...</p>
      </div>
    );
  }

  // Só mostrar o conteúdo se o usuário estiver autenticado
  if (!authenticated) {
    return null;
  }

  return (
    <div className="container py-8">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Painel Administrativo</CardTitle>
          <Button 
            variant="outline" 
            onClick={handleLogout}
            className="flex items-center gap-2"
          >
            <LogOut className="h-4 w-4" />
            Sair
          </Button>
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
