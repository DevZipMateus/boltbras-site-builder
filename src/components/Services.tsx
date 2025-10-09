import { Card } from "@/components/ui/card";
import {
  Wrench,
  HardHat,
  Hammer,
  Settings,
  Cog,
  Drill,
  Package,
  Shield,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Hammer,
      title: "Construção civil",
      description: "Materiais completos para obras de todos os portes",
    },
    {
      icon: Settings,
      title: "Fixadores",
      description: "Parafusos, porcas, arruelas e barras roscadas de qualidade",
    },
    {
      icon: Wrench,
      title: "Ferramentas",
      description: "Ferramentas manuais e elétricas das melhores marcas",
    },
    {
      icon: Shield,
      title: "EPIs",
      description: "Equipamentos de proteção individual certificados",
    },
    {
      icon: Cog,
      title: "Máquinas e geradores",
      description: "Equipamentos de grande porte para sua operação",
    },
    {
      icon: Drill,
      title: "Bombas",
      description: "Bombas para sucção e submersas de alta performance",
    },
    {
      icon: Package,
      title: "Correias e rolamentos",
      description: "Componentes industriais essenciais",
    },
    {
      icon: HardHat,
      title: "Soluções industriais",
      description: "Atendimento completo para indústria e agronegócio",
    },
  ];

  const sectors = [
    "Construção civil",
    "Indústria",
    "Agronegócio",
    "Manutenção",
    "Petroquímica",
    "Energia",
  ];

  return (
    <section id="servicos" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-primary mb-4">
            Soluções completas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos uma ampla gama de produtos e serviços para atender todas as suas necessidades
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up border-none bg-card group"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                  <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-display text-lg text-primary mb-2">
                  {service.title}
                </h3>
                <p className="text-card-foreground/70 text-sm leading-relaxed">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Market Section */}
        <Card className="p-8 md:p-12 border-none bg-primary text-primary-foreground animate-fade-in">
          <h3 className="font-display text-center mb-8">
            O mercado em que atuamos
          </h3>
          <div className="max-w-4xl mx-auto space-y-6 leading-relaxed opacity-95">
            <p>
              A Boltbras atua em um mercado amplo e estratégico, voltado para o fornecimento de insumos, materiais e soluções completas para os setores da construção civil, industrial, agrícola e de manutenção em geral.
            </p>
            <p>
              Este mercado exige não apenas variedade de produtos, mas também parcerias sólidas com marcas líderes, atendimento técnico especializado e condições comerciais competitivas. A Boltbras se destaca justamente por unir esses três pilares:
            </p>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start">
                <span className="mr-3 mt-1 flex-shrink-0">✓</span>
                <span>Ampla diversidade de soluções para cada tipo de projeto</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 flex-shrink-0">✓</span>
                <span>Qualidade e procedência garantida das principais marcas do mercado</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 flex-shrink-0">✓</span>
                <span>Suporte e agilidade para que clientes tenham a confiança necessária em cada fornecimento</span>
              </li>
            </ul>
          </div>
        </Card>

        {/* Sectors */}
        <div className="mt-12 text-center">
          <h3 className="font-display text-xl text-primary mb-6">
            Setores atendidos
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {sectors.map((sector, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-secondary text-secondary-foreground rounded-full font-medium hover:bg-secondary-light transition-colors duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {sector}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
