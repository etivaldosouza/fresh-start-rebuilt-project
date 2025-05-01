
import React from "react";
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

type SimulationRequest = {
  id: string;
  name: string;
  email: string;
  phone: string;
  created_at: string;
};

export const SimulationRequestsTable = () => {
  const { data: requests, isLoading } = useQuery({
    queryKey: ["simulation-requests"],
    queryFn: async () => {
      // Log to help with debugging
      console.log("Fetching simulation requests from Supabase");
      
      const { data, error } = await supabase
        .from("simulation_requests")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching simulation requests:", error);
        throw error;
      }
      
      console.log("Simulation requests data:", data);
      return data as SimulationRequest[];
    },
  });

  if (isLoading) {
    return <div>Carregando...</div>;
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
