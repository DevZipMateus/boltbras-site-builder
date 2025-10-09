import { Instagram as InstagramIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Instagram = () => {
  // Array de URLs de posts do Instagram (substitua pelos URLs reais)
  const instagramPosts = [
    "https://www.instagram.com/p/DLpRX0wx6Mx/",
    "https://www.instagram.com/p/exemplo2/",
    "https://www.instagram.com/p/exemplo3/",
    "https://www.instagram.com/p/exemplo4/",
    "https://www.instagram.com/p/exemplo5/",
    "https://www.instagram.com/p/exemplo6/",
  ];

  return (
    <section id="instagram" className="section-padding bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-purple-950 dark:via-pink-950 dark:to-orange-950">
      <div className="container-custom">
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <InstagramIcon className="w-12 h-12 text-pink-600" />
            <h2 className="text-4xl font-display font-bold text-foreground">
              Nossos Melhores Vídeos
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
            Acompanhe nosso dia a dia, produtos e soluções em ação no Instagram
          </p>
          <Button
            asChild
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg"
          >
            <a 
              href="https://instagram.com/boltbras" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <InstagramIcon className="w-5 h-5" />
              Seguir @boltbras
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {instagramPosts.map((postUrl, index) => (
            <Card 
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0 relative aspect-square bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900">
                <iframe
                  src={`${postUrl}embed/`}
                  className="w-full h-full"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency
                  allow="encrypted-media"
                  title={`Instagram post ${index + 1}`}
                />
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Para incorporar vídeos reais, substitua os URLs de exemplo pelos links dos seus posts do Instagram
          </p>
          <p className="text-sm text-muted-foreground">
            Formato: https://www.instagram.com/p/[CODIGO_DO_POST]/
          </p>
        </div>
      </div>
    </section>
  );
};

export default Instagram;
