
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
    </div>
  );
};

export default About;
