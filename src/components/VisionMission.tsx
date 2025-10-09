import { Target, Eye, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";

const VisionMission = () => {
  const items = [
    {
      icon: Eye,
      title: "Visão",
      description:
        "Ser reconhecida como o maior e mais confiável distribuidor nacional de materiais para construção civil, fixadores, ferramentas, EPIs e soluções industriais, ampliando continuamente a presença da Boltbras no mercado e consolidando sua marca como referência em qualidade, inovação e credibilidade.",
      color: "primary",
    },
    {
      icon: Target,
      title: "Missão",
      description:
        "Oferecer aos clientes soluções completas e acessíveis em materiais de construção, ferramentas, fixadores, EPIs e máquinas, garantindo qualidade, diversidade de marcas líderes e condições comerciais justas. Nosso compromisso é apoiar o crescimento de empreendedores, construtores e indústrias, fornecendo não apenas produtos, mas também parceria, suporte e confiança para o desenvolvimento de cada projeto.",
      color: "secondary",
    },
    {
      icon: Heart,
      title: "Valores",
      description: "",
      color: "accent",
      values: [
        "Compromisso com o cliente: entender e atender cada necessidade com agilidade e dedicação",
        "Qualidade e confiança: trabalhar apenas com marcas reconhecidas e produtos de alto desempenho",
        "Inovação constante: buscar soluções modernas que fortaleçam a competitividade dos nossos clientes",
        "Ética e transparência: construir relações sólidas e de longo prazo com parceiros e clientes",
        "Valorização das pessoas: reconhecer o papel de cada colaborador e cliente na história da Boltbras",
        "Sustentabilidade: atuar com responsabilidade, buscando crescimento econômico aliado à preservação do meio ambiente",
      ],
    },
  ];

  return (
    <section id="visao" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-primary mb-4">
            Nossos pilares
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Os princípios que guiam cada decisão e ação da Boltbras
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => {
            const Icon = item.icon;
            const bgColor =
              item.color === "primary"
                ? "bg-primary"
                : item.color === "secondary"
                ? "bg-secondary"
                : "bg-accent";
            const textColor =
              item.color === "primary"
                ? "text-primary"
                : item.color === "secondary"
                ? "text-secondary"
                : "text-accent";

            return (
              <Card
                key={index}
                className="p-8 hover:shadow-lg transition-all duration-300 animate-fade-in-up border-none bg-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`${bgColor} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className={`font-display ${textColor} mb-4`}>
                  {item.title}
                </h3>
                {item.description && (
                  <p className="text-card-foreground/80 leading-relaxed">
                    {item.description}
                  </p>
                )}
                {item.values && (
                  <ul className="space-y-3">
                    {item.values.map((value, i) => (
                      <li
                        key={i}
                        className="text-card-foreground/80 leading-relaxed flex items-start"
                      >
                        <span className={`${textColor} mr-2 mt-1 flex-shrink-0`}>
                          •
                        </span>
                        <span>{value}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
