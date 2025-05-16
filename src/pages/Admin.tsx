
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SimulationRequestsTable } from "@/components/admin/SimulationRequestsTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { InfoIcon, LogOut } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/components/ui/sonner";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Admin = () => {
  const [loading, setLoading] = useState(true);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const navigate = useNavigate();

  // Verificar autenticação do usuário e obter dados
  useEffect(() => {
    const checkAuth = async () => {
      try {
        console.log("Admin: Checking authentication");
        const { data, error } = await supabase.auth.getSession();
        
        if (error) {
          console.error("Error getting session:", error);
          toast.error("Erro ao verificar sua autenticação");
          navigate("/login");
          return;
        }
        
        if (!data.session) {
          console.log("No active session found");
          toast.error("Você precisa estar logado para acessar esta página");
          navigate("/login");
          return;
        }
        
        console.log("User authenticated:", data.session.user.email);
        setUserEmail(data.session.user.email);
        setLoading(false);
      } catch (err) {
        console.error("Exception in checkAuth:", err);
        toast.error("Erro ao verificar autenticação");
        navigate("/login");
      }
    };
    
    checkAuth();

    // Configurar listener para mudanças no estado de autenticação
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      console.log("Auth state changed:", event);
      if (event === "SIGNED_OUT") {
        navigate("/login");
      }
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

  return (
    <div className="container py-8">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Painel Administrativo</CardTitle>
            {userEmail && (
              <p className="text-sm text-muted-foreground mt-1">
                Logado como: {userEmail}
              </p>
            )}
          </div>
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
              <SimulationRequestsTable />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Admin;
