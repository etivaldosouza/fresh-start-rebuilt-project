
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.817744735612!2d-44.219770625547604!3d-2.5599657980430354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7f68ff920d7d033%3A0xe605eaa85bfff2be!2sAv.%20Leste%20Oeste%2C%201-A%20-%20Cohab%20Anil%20III%2C%20S%C3%A3o%20Lu%C3%ADs%20-%20MA%2C%2065051-480!5e0!3m2!1spt-BR!2sbr!4v1711394514975!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
};

export default Location;
