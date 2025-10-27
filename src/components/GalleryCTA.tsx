import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Image } from "lucide-react";

const GalleryCTA = () => {
  return (
    <section id="galeria-cta" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Image className="w-8 h-8 text-primary" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Confira Nossa Galeria
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Explore nossos projetos concluídos e veja a qualidade do nosso trabalho em energia solar. 
            Cada instalação é única e personalizada para as necessidades de nossos clientes.
          </p>
          
          <Link to="/galeria">
            <Button size="lg" className="group">
              Ver Galeria Completa
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GalleryCTA;
