
import React from "react";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import PortabilitySection from "@/components/home/PortabilitySection";
import FgtsSection from "@/components/home/FgtsSection";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <main className="flex flex-col space-y-8 md:space-y-0">
      <Helmet>
        <title>KF Empréstimos - Empréstimo Consignado com as Melhores Taxas</title>
        <meta name="description" content="Empréstimo consignado para aposentados, pensionistas e servidores públicos com as melhores taxas do mercado. Portabilidade bancária com processo simplificado." />
      </Helmet>
      
      <article>
        <HeroSection />
      </article>
      
      <section id="servicos" className="py-4">
        <div className="container">
          <ServicesSection />
        </div>
      </section>
      
      <section id="portabilidade" className="bg-gradient-to-br from-accent/50 to-background py-12">
        <div className="container">
          <PortabilitySection />
        </div>
      </section>
      
      <section id="fgts" className="py-4">
        <div className="container">
          <FgtsSection />
        </div>
      </section>
    </main>
  );
};

export default Index;
