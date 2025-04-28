import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Location = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Nossa Localização</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Venha nos visitar! Estamos em um local de fácil acesso para melhor atendê-lo.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">Endereço</h2>
            <p className="text-muted-foreground">
              Av Leste Oeste, Loja 1-A
              <br />
              Cohatrac 1, São Luís - MA
            </p>
          </div>
          <Button asChild className="w-full md:w-auto">
            <a 
              href="https://maps.app.goo.gl/PVj9msaMT88HBuqu8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <MapPin className="w-4 h-4" />
              Ver no Google Maps
            </a>
          </Button>
        </div>
        <div className="aspect-video rounded-lg shadow-lg overflow-hidden">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7971.804411370986!2d-44.2094057!3d-2.5387755!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7f69101f8f83d87%3A0xb0215005050b3b3a!2zRW1wcsOpc3RpbW8gRsOhY2lsIEUgUsOhcGlkbw!5e0!3m2!1spt-BR!2sbr!4v1745797605635!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Location;
