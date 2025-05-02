
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
import { AlertCircle } from "lucide-react";

type SimulationRequest = {
  id: string;
  name: string;
  email: string;
  phone: string;
  created_at: string;
};

export const SimulationRequestsTable = () => {
  const [manualRetryCount, setManualRetryCount] = useState(0);

  const { data: requests, isLoading, error, refetch } = useQuery({
    queryKey: ["simulation-requests", manualRetryCount],
    queryFn: async () => {
      try {
        console.log("Fetching simulation requests from Supabase");
        
        // Use a simpler direct approach for fetching
        const { data, error } = await supabase
          .from("simulation_requests")
          .select("id, name, email, phone, created_at")
          .order("created_at", { ascending: false });

        if (error) {
          console.error("Error fetching simulation requests:", error);
          throw error;
        }
        
        console.log("Simulation requests data:", data);
        return data as SimulationRequest[];
      } catch (err) {
        console.error("Error in simulation requests query:", err);
        throw err;
      }
    },
    retry: 2,
    retryDelay: 1000,
  });

  const handleManualRetry = () => {
    setManualRetryCount(prev => prev + 1);
  };

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

  if (error) {
    return (
      <div className="space-y-4">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Erro ao carregar solicitações</AlertTitle>
          <AlertDescription>
            Não foi possível acessar os dados das solicitações de simulação. 
            Isso pode ocorrer devido a um problema de permissão no banco de dados.
          </AlertDescription>
        </Alert>
        <Button onClick={handleManualRetry} variant="outline">
          Tentar novamente
        </Button>
      </div>
    );
  }

  if (!requests || requests.length === 0) {
    return <div>Nenhuma solicitação de simulação encontrada.</div>;
  }

  return (
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
  );
};
