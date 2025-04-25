
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
      const { data, error } = await supabase
        .from("simulation_requests")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data as SimulationRequest[];
    },
  });

  if (isLoading) {
    return <div>Carregando...</div>;
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
          {requests?.map((request) => (
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
