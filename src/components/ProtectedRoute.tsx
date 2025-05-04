
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { supabase } from "@/integrations/supabase/client";
import { Session } from '@supabase/supabase-js';
import { toast } from "@/components/ui/sonner";
import { Loader2 } from "lucide-react";

type ProtectedRouteProps = {
  children: React.ReactNode;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("ProtectedRoute: Checking authentication status");
    
    // Verificar sessão atual primeiro
    const checkSession = async () => {
      try {
        const { data, error } = await supabase.auth.getSession();
        
        if (error) {
          console.error("Error checking session:", error);
          toast.error("Erro ao verificar autenticação");
          setLoading(false);
          return;
        }
        
        console.log("Current session:", data.session ? "Active" : "None");
        setSession(data.session);
        setLoading(false);
      } catch (err) {
        console.error("Exception in checkSession:", err);
        setLoading(false);
      }
    };
    
    checkSession();
    
    // Configurar listener para mudanças no estado de autenticação
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        console.log("Auth state changed:", event, session ? "Session exists" : "No session");
        setSession(session);
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[50vh]">
        <div className="flex flex-col items-center gap-2">
          <Loader2 className="h-8 w-8 animate-spin" />
          <p className="text-lg">Verificando autenticação...</p>
        </div>
      </div>
    );
  }

  if (!session) {
    console.log("No active session, redirecting to login");
    toast.error("Você precisa estar logado para acessar esta página");
    return <Navigate to="/login" replace />;
  }

  console.log("Authentication verified, rendering protected content");
  return <>{children}</>;
};

export default ProtectedRoute;
