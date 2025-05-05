
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/components/ui/sonner";

type AuthFormProps = {
  onSuccess: () => void;
};

const AuthForm = ({ onSuccess }: AuthFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setLoading(true);
      if (isRegistering) {
        const { data, error } = await supabase.auth.signUp({
          email,
          password
        });

        if (error) throw error;

        toast.success("Cadastro realizado com sucesso! Você já pode fazer login.");
        setIsRegistering(false);
      } else {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password
        });

        if (error) throw error;

        toast.success("Login realizado com sucesso");
        onSuccess();
      }
    } catch (error: any) {
      toast.error(error.message || "Não foi possível completar a operação");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleAuth} className="space-y-4">
      <div>
        <label htmlFor="email" className="block mb-2">E-mail</label>
        <Input 
          type="email" 
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required 
        />
      </div>
      <div>
        <label htmlFor="password" className="block mb-2">Senha</label>
        <Input 
          type="password" 
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required 
        />
      </div>
      <Button 
        type="submit" 
        className="w-full"
        disabled={loading}
      >
        {loading ? 'Processando...' : isRegistering ? 'Cadastrar' : 'Entrar'}
      </Button>
      <Button 
        type="button" 
        variant="outline" 
        className="w-full"
        onClick={() => setIsRegistering(!isRegistering)}
      >
        {isRegistering ? 'Já tem uma conta? Entre' : 'Não tem uma conta? Cadastre-se'}
      </Button>
    </form>
  );
};

export default AuthForm;
