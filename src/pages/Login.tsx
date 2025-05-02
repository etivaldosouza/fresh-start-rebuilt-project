
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from 'react-router-dom';
import { toast } from "@/components/ui/sonner";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [latestRequests, setLatestRequests] = useState<{ name: string, email: string, phone: string }[]>([]);
  const navigate = useNavigate();
  
  // Carregar o último email usado na simulação
  useEffect(() => {
    const savedEmail = localStorage.getItem("lastSimulationEmail");
    if (savedEmail) {
      setEmail(savedEmail);
    }
    
    // Buscar as últimas simulações para exibir na página
    const fetchLatestRequests = async () => {
      try {
        const { data, error } = await supabase
          .from('simulation_requests')
          .select('name, email, phone')
          .order('created_at', { ascending: false })
          .limit(5);
          
        if (error) {
          console.error("Erro ao carregar solicitações recentes:", error);
          return;
        }
        
        if (data) {
          setLatestRequests(data);
        }
      } catch (error) {
        console.error("Erro ao buscar solicitações:", error);
      }
    };
    
    fetchLatestRequests();
  }, []);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
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
        navigate('/admin');
      }
    } catch (error: any) {
      toast.error(error.message || "Não foi possível completar a operação");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-4xl flex gap-6 px-4">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>{isRegistering ? 'Cadastro' : 'Login'} Administrativo</CardTitle>
          </CardHeader>
          <CardContent>
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
              <Button type="submit" className="w-full">
                {isRegistering ? 'Cadastrar' : 'Entrar'}
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
          </CardContent>
        </Card>
        
        {latestRequests.length > 0 && (
          <Card className="flex-1 hidden md:block">
            <CardHeader>
              <CardTitle>Últimas Solicitações de Simulação</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {latestRequests.map((request, index) => (
                  <div key={index} className="p-3 border rounded-md">
                    <p><strong>Nome:</strong> {request.name}</p>
                    <p><strong>Email:</strong> {request.email}</p>
                    <p><strong>Telefone:</strong> {request.phone}</p>
                    {email !== request.email && (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="mt-2"
                        onClick={() => setEmail(request.email)}
                      >
                        Usar este email
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Login;
