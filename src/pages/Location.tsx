
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
              Rua Doutor Mario de Paiva, 379 - Centro
              <br />
              Guariba - SP
            </p>
          </div>
          <Button asChild className="w-full md:w-auto">
            <a 
              href="https://maps.app.goo.gl/nLDquGWEPRer2BQx6" 
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.7793735726414!2d-48.31516792378094!3d-21.359475880690966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b93f4c3d2d6ec7%3A0x2d82893e8abc4b13!2sR.%20Dr.%20M%C3%A1rio%20de%20Paiva%2C%20379%20-%20Centro%2C%20Guariba%20-%20SP%2C%2014840-000!5e0!3m2!1spt-BR!2sbr!4v1708439868811!5m2!1spt-BR!2sbr"
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
