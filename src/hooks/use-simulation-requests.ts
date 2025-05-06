
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/components/ui/sonner";

type SimulationRequest = {
  id: string;
  name: string;
  email: string;
  phone: string;
  created_at: string;
};

export const useSimulationRequests = () => {
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
        
        // Verificar sessão do usuário 
        const { data: sessionData } = await supabase.auth.getSession();
        if (!sessionData.session) {
          console.log("No active session found");
          throw new Error("Acesso não autorizado. Faça login para visualizar os dados.");
        }

        // Usar o cliente direto para evitar políticas RLS problemáticas
        // Fazer uma consulta direta usando o token do usuário autenticado
        const { data, error } = await supabase
          .from("simulation_requests")
          .select("id, name, email, phone, created_at")
          .order("created_at", { ascending: false });

        if (error) {
          console.error("Error fetching simulation requests:", error);
          throw new Error(error.message || "Erro ao buscar dados");
        }
        
        console.log("Successfully fetched simulation requests:", data);
        return data as SimulationRequest[];
      } catch (err: any) {
        console.error("Error in query function:", err);
        throw new Error(err.message || "Erro ao acessar os dados");
      }
    },
    retry: 0, // Desativando tentativas automáticas para evitar problemas de recursão
    retryDelay: 1000,
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

  // Setup real-time listener for new simulation requests
  useEffect(() => {
    console.log("Setting up realtime listener for simulation_requests");
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
      console.log("Removing realtime listener");
      supabase.removeChannel(channel);
    };
  }, [refetch]);

  return {
    requests,
    isLoading,
    error,
    isError,
    handleManualRetry,
    autoRefresh,
    setAutoRefresh,
  };
};
