
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from "lucide-react";
import AuthForm from "@/components/auth/AuthForm";
import AuthenticatedUser from "@/components/auth/AuthenticatedUser";
import LatestRequests from "@/components/auth/LatestRequests";

const Login = () => {
  const [email, setEmail] = useState('');
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
  }, []);

  const handleGoBack = () => {
    navigate('/');
  };

  const handleLogout = async () => {
    setLoading(true);
    try {
      await supabase.auth.signOut();
      setIsLoggedIn(false);
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    navigate('/admin');
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
              {isLoggedIn ? 'Usuário Autenticado' : 'Login'} Administrativo
            </CardTitle>
          </CardHeader>
          <CardContent>
            {isLoggedIn ? (
              <AuthenticatedUser 
                loading={loading} 
                onLogout={handleLogout} 
              />
            ) : (
              <AuthForm onSuccess={handleLoginSuccess} />
            )}
          </CardContent>
        </Card>
        
        <LatestRequests 
          onSelectEmail={setEmail}
          currentEmail={email}
        />
      </div>
    </div>
  );
};

export default Login;
