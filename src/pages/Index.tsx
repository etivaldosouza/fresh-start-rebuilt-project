
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import PortabilitySection from "@/components/home/PortabilitySection";
import ContactForm from "@/components/home/ContactForm";

const Index = () => {
  return (
    <div className="flex flex-col gap-16">
      <HeroSection />
      <ServicesSection />
      <PortabilitySection />
      <ContactForm />
    </div>
  );
};

export default Index;
