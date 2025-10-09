import { Instagram as InstagramIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const Instagram = () => {
  return (
    <section id="instagram" className="section-padding bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-purple-950 dark:via-pink-950 dark:to-orange-950">
      <div className="container-custom">
        <div className="text-center animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <InstagramIcon className="w-12 h-12 text-pink-600" />
            <h2 className="text-4xl font-display font-bold text-foreground">
              Siga-nos no Instagram
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
            Acompanhe nosso dia a dia, produtos e soluções em ação
          </p>
          <Button
            asChild
            size="lg"
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
      </div>
    </section>
  );
};

export default Instagram;
