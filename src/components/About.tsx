import { Card } from "@/components/ui/card";
import { Building2, Users, TrendingUp, Award } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Building2, label: "Ano de fundação", value: "2013" },
    { icon: Award, label: "Clientes satisfeitos", value: "1000+" },
    { icon: Users, label: "Equipe dedicada", value: "50+" },
    { icon: TrendingUp, label: "Anos de crescimento", value: "11+" },
  ];

  return (
    <section id="sobre" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-primary mb-4">
            Nossa história
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Uma jornada de superação, determinação e compromisso com a excelência
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-all duration-300 animate-scale-in border-none"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon className="w-10 h-10 text-primary mx-auto mb-3" />
                <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </Card>
            );
          })}
        </div>

        {/* Story Content */}
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          <Card className="p-8 md:p-12 border-none bg-card">
            <h3 className="font-display text-primary mb-6">
              O começo
            </h3>
            <div className="space-y-4 text-card-foreground/80 leading-relaxed">
              <p>
                A história da Boltbras nasce em 2013, em meio a desafios e à busca por novas oportunidades. Seu fundador e atual CEO, Everton Ferreira, cresceu enfrentando grandes dificuldades desde a infância. Em 1999, aos apenas 5 anos de idade, Everton perdeu sua mãe e passou a dividir a vida com seus 7 irmãos. Essa experiência o marcou profundamente, moldando sua visão de mundo e sua determinação em transformar realidades.
              </p>
              <p>
                Com poucas condições financeiras e escassas oportunidades de emprego, o jovem Everton encontrou no empreendedorismo um caminho para mudar sua história e gerar impacto também na vida de outras pessoas. Ao atingir a maioridade, iniciou sua jornada em busca de conquistas, lucros e reconhecimento profissional.
              </p>
            </div>
          </Card>

          <Card className="p-8 md:p-12 border-none bg-primary text-primary-foreground">
            <h3 className="font-display mb-6">
              A conquista
            </h3>
            <div className="space-y-4 leading-relaxed opacity-95">
              <p>
                Foi nesse contexto que nasceu a ideia da Boltbras, uma empresa criada para oferecer soluções confiáveis, duradouras e de qualidade para o mercado industrial e da construção civil.
              </p>
              <p>
                O início foi marcado por grandes desafios, mas também por importantes conquistas: ainda muito jovem, Everton conquistou espaço como fornecedor da Petrobras, uma das maiores empresas do Brasil, consolidando a credibilidade da Boltbras logo nos primeiros anos de atuação.
              </p>
            </div>
          </Card>

          <Card className="p-8 md:p-12 border-none bg-card">
            <h3 className="font-display text-primary mb-6">
              Hoje
            </h3>
            <div className="space-y-4 text-card-foreground/80 leading-relaxed">
              <p>
                Desde então, a Boltbras vem crescendo de forma sólida e sustentável, expandindo suas áreas de atuação, fortalecendo parcerias e se tornando referência na distribuição de fixadores, ferramentas, máquinas, EPIs e soluções para a construção civil e a indústria.
              </p>
              <p>
                Hoje, a empresa carrega não apenas a marca de produtos e serviços de excelência, mas também a essência de sua origem: a coragem de superar as dificuldades, a determinação em buscar novos horizontes e o compromisso de transformar sonhos em realidade.
              </p>
            </div>
          </Card>

          {/* Dedication */}
          <Card className="p-8 md:p-12 border-l-4 border-l-accent bg-muted/50">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-accent w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-2xl text-accent-foreground">🌹</span>
              </div>
              <h3 className="font-display text-accent">
                Dedicatória especial
              </h3>
            </div>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                A história da Boltbras e a minha própria trajetória de vida só existem porque, em um dos momentos mais difíceis da nossa família, duas pessoas assumiram um papel de pais, guias e protetores: <strong className="text-accent">Helenita e Heliton</strong>.
              </p>
              <p>
                Quando nossa mãe partiu em 1999, eu tinha apenas 5 anos. Éramos oito irmãos, entre eles eu, Everton, Júlia e Lurdinha, além da nossa pequena Monalisa, a neta mais nova da época. Vocês carregaram sobre os ombros a responsabilidade de cuidar, educar e manter unida toda a família, mesmo diante de tantas dificuldades.
              </p>
              <p>
                Cada conquista da minha vida e cada passo da história da Boltbras têm a marca da força, do exemplo e do amor que vocês nos deram. Vocês foram muito mais do que irmãos: foram pais de coração, que nos ensinaram a superar a dor e a acreditar em um futuro melhor.
              </p>
              <p className="font-medium text-accent">
                Por isso, dedico a vocês não apenas esta história, mas cada vitória, cada sonho realizado e cada semente que plantamos ao longo dessa caminhada. Porque sem vocês, nada disso teria sido possível.
              </p>
              <p className="text-right italic mt-6">
                Com eterna gratidão,<br />
                <strong>Everton Ferreira</strong>
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
