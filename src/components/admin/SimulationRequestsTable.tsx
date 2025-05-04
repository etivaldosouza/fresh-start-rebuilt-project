
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";
import { toast } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, RefreshCcw } from "lucide-react";

type SimulationRequest = {
  id: string;
  name: string;
  email: string;
  phone: string;
  created_at: string;
};

export const SimulationRequestsTable = () => {
  const [manualRetryCount, setManualRetryCount] = useState(0);
  const [autoRefresh, setAutoRefresh] = useState(false);

  const { 
    data: requests, 
    isLoading, 
    error, 
    refetch,
    isError
  } = useQuery({
    queryKey: ["simulation-requests", manualRetryCount],
    queryFn: async () => {
      try {
        console.log("Fetching simulation requests from Supabase");
        
        // Verificar se o usuário está autenticado
        const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
        
        if (sessionError || !sessionData.session) {
          console.error("User not authenticated:", sessionError);
          throw new Error("Usuário não autenticado");
        }
        
        // Buscar dados com retry interno
        let attempts = 0;
        const maxAttempts = 3;
        let lastError;
        
        while (attempts < maxAttempts) {
          try {
            const { data, error } = await supabase
              .from("simulation_requests")
              .select("id, name, email, phone, created_at")
              .order("created_at", { ascending: false });

            if (error) {
              console.error(`Attempt ${attempts + 1}: Error fetching simulation requests:`, error);
              lastError = error;
              attempts++;
              await new Promise(resolve => setTimeout(resolve, 1000)); // Wait before retry
              continue;
            }
            
            console.log("Simulation requests data:", data);
            return data as SimulationRequest[];
          } catch (err) {
            console.error(`Attempt ${attempts + 1}: Exception in fetch:`, err);
            lastError = err;
            attempts++;
            await new Promise(resolve => setTimeout(resolve, 1000)); // Wait before retry
          }
        }
        
        throw lastError || new Error("Falha ao buscar dados após múltiplas tentativas");
      } catch (err: any) {
        console.error("Error in simulation requests query:", err);
        throw err;
      }
    },
    retry: 3,
    retryDelay: 2000,
  });

  const handleManualRetry = () => {
    toast.info("Atualizando dados...");
    setManualRetryCount(prev => prev + 1);
  };

  // Auto-refresh a cada 30 segundos quando ativado
  useEffect(() => {
    let intervalId: number | undefined;
    
    if (autoRefresh) {
      intervalId = window.setInterval(() => {
        console.log("Auto-refreshing data...");
        refetch();
      }, 30000);
    }
    
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [autoRefresh, refetch]);

  useEffect(() => {
    if (error) {
      console.error("Error loading simulation requests:", error);
      toast.error("Erro ao carregar solicitações de simulação");
    }
  }, [error]);

  // Setup real-time listener for new simulation requests
  useEffect(() => {
    const channel = supabase
      .channel('public:simulation_requests')
      .on('postgres_changes', 
        { event: 'INSERT', schema: 'public', table: 'simulation_requests' }, 
        (payload) => {
          console.log('New simulation request received:', payload);
          refetch();
          toast.success("Nova solicitação de simulação recebida!");
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [refetch]);

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="flex items-center space-x-4">
            <Skeleton className="h-12 w-[15%]" />
            <Skeleton className="h-12 w-[25%]" />
            <Skeleton className="h-12 w-[30%]" />
            <Skeleton className="h-12 w-[20%]" />
          </div>
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="space-y-4">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Erro ao carregar solicitações</AlertTitle>
          <AlertDescription>
            Não foi possível acessar os dados das solicitações de simulação. 
            Por favor, tente novamente ou verifique sua conexão.
          </AlertDescription>
        </Alert>
        <Button onClick={handleManualRetry} variant="outline" className="flex items-center gap-2">
          <RefreshCcw className="h-4 w-4" /> Tentar novamente
        </Button>
      </div>
    );
  }

  if (!requests || requests.length === 0) {
    return (
      <div className="text-center p-6">
        <p className="text-lg text-gray-500 mb-4">Nenhuma solicitação de simulação encontrada.</p>
        <div className="flex justify-center gap-4">
          <Button onClick={handleManualRetry} variant="outline" className="flex items-center gap-2">
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
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-end gap-4 mb-4">
        <Button onClick={handleManualRetry} variant="outline" size="sm" className="flex items-center gap-2">
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
      
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Data</TableHead>
              <TableHead>Nome</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Telefone</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {requests.map((request) => (
              <TableRow key={request.id}>
                <TableCell>
                  {format(new Date(request.created_at), "dd/MM/yyyy HH:mm")}
                </TableCell>
                <TableCell>{request.name}</TableCell>
                <TableCell>{request.email}</TableCell>
                <TableCell>{request.phone}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
