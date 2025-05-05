
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

type Request = {
  name: string;
  email: string;
  phone: string;
};

type LatestRequestsProps = {
  onSelectEmail: (email: string) => void;
  currentEmail: string;
};

const LatestRequests = ({ onSelectEmail, currentEmail }: LatestRequestsProps) => {
  const [requests, setRequests] = useState<Request[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Verificar se o usuário está autenticado
    const checkAuth = async () => {
      try {
        const { data } = await supabase.auth.getSession();
        const authenticated = !!data.session;
        setIsAuthenticated(authenticated);

        // Só carregar as solicitações se o usuário estiver autenticado
        if (authenticated) {
          fetchRequests();
        } else {
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Erro ao verificar autenticação:", error);
        setIsLoading(false);
        setIsError(true);
      }
    };

    checkAuth();

    // Listener para mudanças no estado de autenticação
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      const authenticated = !!session;
      setIsAuthenticated(authenticated);
      
      if (authenticated && (!requests.length || event === 'SIGNED_IN')) {
        fetchRequests();
      }
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const fetchRequests = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('simulation_requests')
        .select('name, email, phone')
        .order('created_at', { ascending: false })
        .limit(5);
        
      if (error) {
        console.error("Erro ao carregar solicitações recentes:", error);
        setIsError(true);
        return;
      }
      
      if (data) {
        setRequests(data);
      }
    } catch (error) {
      console.error("Erro ao buscar solicitações:", error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  // Se o usuário não estiver autenticado, não mostrar nada
  if (!isAuthenticated) {
    return null;
  }

  if (isLoading) {
    return (
      <Card className="flex-1 hidden md:block">
        <CardHeader>
          <CardTitle>Últimas Solicitações de Simulação</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[...Array(3)].map((_, index) => (
              <Skeleton key={index} className="h-24 w-full" />
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  if (isError) {
    return (
      <Card className="flex-1 hidden md:block">
        <CardHeader>
          <CardTitle>Últimas Solicitações de Simulação</CardTitle>
        </CardHeader>
        <CardContent>
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              Erro ao carregar as solicitações. Por favor, tente novamente mais tarde.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    );
  }

  if (requests.length === 0) {
    return (
      <Card className="flex-1 hidden md:block">
        <CardHeader>
          <CardTitle>Últimas Solicitações de Simulação</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-muted-foreground">
            Nenhuma solicitação encontrada.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="flex-1 hidden md:block">
      <CardHeader>
        <CardTitle>Últimas Solicitações de Simulação</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {requests.map((request, index) => (
            <div key={index} className="p-3 border rounded-md">
              <p><strong>Nome:</strong> {request.name}</p>
              <p><strong>Email:</strong> {request.email}</p>
              <p><strong>Telefone:</strong> {request.phone}</p>
              {currentEmail !== request.email && (
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="mt-2"
                  onClick={() => onSelectEmail(request.email)}
                >
                  Usar este email
                </Button>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default LatestRequests;
