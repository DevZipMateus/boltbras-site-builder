import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 gradient-hero">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom px-4 md:px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            {/* H1 - Company Name */}
            <h1 className="font-display text-white mb-6 text-shadow">
              Boltbras
            </h1>

            {/* H2 - Company Description */}
            <h2 className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 font-medium leading-relaxed">
              Distribuidor nacional de materiais para construção civil, fixadores, ferramentas, EPIs e soluções industriais
            </h2>

            <p className="text-lg md:text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Oferecemos soluções completas e acessíveis com qualidade, diversidade de marcas líderes e condições comerciais justas para apoiar o crescimento de empreendedores, construtores e indústrias.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent-light text-accent-foreground font-semibold px-8 py-6 text-lg group"
              >
                <a href="https://wa.me/5584987083206" target="_blank" rel="noopener noreferrer">
                  Solicite um orçamento
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 text-white border-white/60 hover:bg-white hover:text-primary font-semibold px-8 py-6 text-lg backdrop-blur-sm"
              >
                <a
                  href="#sobre"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#sobre")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Conheça nossa história
                </a>
              </Button>
            </div>
          </div>

          {/* Slogan */}
          <div className="mt-16 animate-fade-in">
            <p className="text-white/70 text-lg md:text-xl font-medium italic">
              "Desenvolver e solucionar é nossa missão"
            </p>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
