
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Request = {
  name: string;
  email: string;
  phone: string;
};

type LatestRequestsProps = {
  requests: Request[];
  onSelectEmail: (email: string) => void;
  currentEmail: string;
};

const LatestRequests = ({ requests, onSelectEmail, currentEmail }: LatestRequestsProps) => {
  if (requests.length === 0) return null;

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
