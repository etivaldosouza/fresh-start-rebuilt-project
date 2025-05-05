
import React from 'react';
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from 'react-router-dom';
import { toast } from "@/components/ui/sonner";

type AuthenticatedUserProps = {
  loading: boolean;
  onLogout: () => void;
};

const AuthenticatedUser = ({ loading, onLogout }: AuthenticatedUserProps) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      toast.success("Logout realizado com sucesso");
      onLogout();
    } catch (error: any) {
      toast.error(error.message || "Erro ao fazer logout");
    }
  };

  return (
    <div className="space-y-4">
      <p className="text-center text-sm text-muted-foreground mb-4">
        Você já está logado no sistema.
      </p>
      <div className="flex flex-col gap-2">
        <Button onClick={() => navigate('/admin')}>
          Ir para o Painel Admin
        </Button>
        <Button 
          variant="outline" 
          onClick={handleLogout}
          className="flex items-center gap-2"
          disabled={loading}
        >
          <LogOut className="h-4 w-4" />
          {loading ? "Saindo..." : "Sair do Sistema"}
        </Button>
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
        >
          Voltar para a Página Inicial
        </Button>
      </div>
    </div>
  );
};

export default AuthenticatedUser;
