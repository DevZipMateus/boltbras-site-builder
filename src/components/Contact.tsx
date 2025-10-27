import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Instagram } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!nome || !email || !mensagem) {
      toast({
        title: "Erro",
        description: "Todos os campos são obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: { nome, email, mensagem }
      });

      if (error) throw error;

      toast({
        title: "Sucesso!",
        description: "Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.",
      });

      // Limpar formulário
      setNome("");
      setEmail("");
      setMensagem("");
    } catch (error: any) {
      console.error("Erro ao enviar email:", error);
      toast({
        title: "Erro ao enviar",
        description: "Não foi possível enviar sua mensagem. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

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
          {/* Contact Form */}
          <Card className="p-8 border-none bg-card">
            <h3 className="font-display text-2xl mb-6 text-card-foreground">
              Envie sua mensagem
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="nome">Nome *</Label>
                <Input
                  id="nome"
                  type="text"
                  placeholder="Seu nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  required
                  disabled={isLoading}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isLoading}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mensagem">Mensagem *</Label>
                <Textarea
                  id="mensagem"
                  placeholder="Descreva seu projeto ou dúvida..."
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                  required
                  disabled={isLoading}
                  rows={5}
                />
              </div>
              <Button
                type="submit"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? "Enviando..." : "Enviar Mensagem"}
              </Button>
            </form>
          </Card>

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

            {/* WhatsApp CTA Card */}
            <Card className="p-8 border-none gradient-accent text-accent-foreground animate-fade-in flex flex-col justify-center">
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
