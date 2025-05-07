
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import PortabilitySection from "@/components/home/PortabilitySection";
import ContactForm from "@/components/home/ContactForm";

const Index = () => {
  return (
    <div className="flex flex-col space-y-8 md:space-y-0">
      <HeroSection />
      <ServicesSection />
      <div className="bg-gradient-to-br from-accent/50 to-background py-12">
        <div className="container">
          <PortabilitySection />
        </div>
      </div>
      <div className="container">
        <ContactForm />
      </div>
    </div>
  );
};

export default Index;
