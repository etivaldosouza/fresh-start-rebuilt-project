
const About = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Sobre Nós</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Somos uma empresa certificada pela FEBRABAN com mais de 15 anos atuando com concessão de crédito consignado.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <img 
            src="/lovable-uploads/bc0c7039-437a-45d4-91ec-5a887f5ed6ca.png" 
            alt="KF Empréstimos Logo" 
            className="h-24 mx-auto md:mx-0"
          />
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Nossa História</h2>
            <p className="text-muted-foreground">
              Sob a liderança da sócia proprietária Karine Torres, a KF Empréstimos se estabeleceu como 
              referência no mercado de crédito consignado. Nossa missão é facilitar o acesso ao crédito 
              consignado de forma segura e transparente, proporcionando as melhores condições para nossos clientes.
            </p>
            <p className="text-muted-foreground">
              Com uma equipe altamente qualificada e comprometida, oferecemos soluções personalizadas que 
              atendem às necessidades específicas de cada cliente, sempre prezando pela ética, transparência 
              e excelência no atendimento.
            </p>
          </div>
        </div>
        <div>
          <div className="aspect-auto h-full w-full rounded-lg shadow-lg overflow-hidden">
            <img 
              src="/lovable-uploads/fefa84c5-cb8b-41cd-9332-baf68fe36478.png"
              alt="Karine Torres - KF Empréstimos"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
