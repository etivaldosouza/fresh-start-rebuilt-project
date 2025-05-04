
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from 'react-router-dom';
import { toast } from "@/components/ui/sonner";
import { ArrowLeft, LogOut } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [latestRequests, setLatestRequests] = useState<{ name: string, email: string, phone: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  
  // Verificar se o usuário já está logado ao carregar a página
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const { data } = await supabase.auth.getSession();
        if (data.session) {
          console.log("User is already logged in");
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.error("Error checking login status:", error);
      }
    };
    
    checkLoginStatus();
    
    // Carregar o último email usado na simulação
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
        setIsLoggedIn(true);
        navigate('/admin');
      }
    } catch (error: any) {
      toast.error(error.message || "Não foi possível completar a operação");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      setLoading(true);
      await supabase.auth.signOut();
      toast.success("Logout realizado com sucesso");
      setIsLoggedIn(false);
    } catch (error: any) {
      toast.error(error.message || "Erro ao fazer logout");
    } finally {
      setLoading(false);
    }
  };

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-4xl flex gap-6 px-4">
        <Card className="w-[350px]">
          <CardHeader className="relative">
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute left-2 top-2"
              onClick={handleGoBack}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <CardTitle className="text-center">
              {isLoggedIn ? 'Usuário Autenticado' : isRegistering ? 'Cadastro' : 'Login'} Administrativo
            </CardTitle>
          </CardHeader>
          <CardContent>
            {isLoggedIn ? (
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
                    onClick={handleGoBack}
                  >
                    Voltar para a Página Inicial
                  </Button>
                </div>
              </div>
            ) : (
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
            )}
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
