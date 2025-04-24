
const About = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Sobre Nós</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Somos uma empresa certificada pela FEBRABAN com mais de 15 anos atuando no 
          mercado de concessão de crédito consignado.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <img 
            src="/mnt/data/logokf.png" 
            alt="KF Empréstimos Logo" 
            className="h-24 mx-auto md:mx-0"
          />
          <h2 className="text-2xl font-semibold">Nossa Missão</h2>
          <p className="text-muted-foreground">
            Facilitar o acesso ao crédito consignado de forma segura e transparente, 
            proporcionando as melhores condições para nossos clientes.
          </p>
        </div>
        <div>
          <img 
            src="/lovable-uploads/5c85afc2-c1ba-43a0-9ff8-8165bd196e58.png"
            alt="Profissional KF Empréstimos"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
