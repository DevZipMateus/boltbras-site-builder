import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import VisionMission from "@/components/VisionMission";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <VisionMission />
        <Services />
        <Gallery />
        <Contact />
      </main>
      <WhatsAppButton />
    </div>
  );
};

export default Index;
