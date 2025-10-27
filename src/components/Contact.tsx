import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Instagram } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Telefone",
      value: "(84) 98708-3206",
      href: "https://wa.me/5584987083206",
    },
    {
      icon: Mail,
      label: "E-mail",
      value: "contato@boltbras.com",
      href: "mailto:contato@boltbras.com",
    },
    {
      icon: MapPin,
      label: "Endereço",
      value: "R Jeremias da Rocha",
      href: null,
    },
    {
      icon: Clock,
      label: "Horário",
      value: "Segunda - Sexta: 7:30 às 11:30, 13:30 às 17:30 | Sábado: 08:00 às 12:00",
      href: null,
    },
  ];

  return (
    <section id="contato" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-primary mb-4">
            Entre em contato
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para atender você e oferecer as melhores soluções para seu projeto
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const content = (
                <Card
                  className="p-6 hover:shadow-lg transition-all duration-300 animate-fade-in-up border-none bg-card group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                      <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        {info.label}
                      </p>
                      <p className="text-card-foreground font-medium">
                        {info.value}
                      </p>
                    </div>
                  </div>
                </Card>
              );

              return info.href ? (
                <a
                  key={index}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {content}
                </a>
              ) : (
                <div key={index}>{content}</div>
              );
            })}
          </div>

          {/* CTA Card */}
          <Card className="p-8 md:p-12 border-none gradient-accent text-accent-foreground animate-fade-in flex flex-col justify-center">
            <h3 className="font-display text-2xl mb-6">
              Solicite um orçamento
            </h3>
            <p className="mb-8 leading-relaxed opacity-95">
              Entre em contato conosco pelo WhatsApp e receba um atendimento personalizado. Nossa equipe está pronta para entender suas necessidades e oferecer as melhores soluções.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-accent hover:bg-white/90 font-semibold w-full sm:w-auto"
            >
              <a
                href="https://wa.me/5584987083206"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="mr-2" />
                Falar no WhatsApp
              </a>
            </Button>
          </Card>
        </div>

        {/* Social Media */}
        <div className="mt-16 text-center animate-fade-in">
          <p className="text-muted-foreground mb-4">Siga-nos nas redes sociais</p>
          <a
            href="https://instagram.com/boltbras"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-light transition-colors font-medium"
          >
            <Instagram className="w-5 h-5" />
            @boltbras
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
