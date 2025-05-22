
import React from "react";
import { Button } from "@/components/ui/button";
import { WhatsApp } from "lucide-react";

const FgtsSection = () => {
  const handleWhatsAppClick = () => {
    // Replace with your actual WhatsApp number and pre-filled message
    const phoneNumber = "5500000000000"; // Format: country code + phone number without +
    const message = "Olá! Gostaria de mais informações sobre a antecipação do FGTS.";
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="py-16" id="fgts">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4 heading-gradient inline-block">FGTS</h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
          Não deixe seu saldo do FGTS parado! Antecipe até 5 parcelas e tenha dinheiro na conta 
          de forma rápida e segura, mesmo se estiver negativado!
        </p>
      </div>
      
      <div className="flex justify-center mt-8">
        <Button 
          onClick={handleWhatsAppClick}
          size="lg"
          className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-lg transition-all transform hover:scale-105 flex items-center gap-2 text-lg"
        >
          <WhatsApp className="h-5 w-5" />
          FGTS ANTECIPE AGORA
        </Button>
      </div>
    </section>
  );
};

export default FgtsSection;
