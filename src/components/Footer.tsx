import logo from "@/assets/logo-black.png";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container-custom px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo e descrição */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logo} 
                alt="Boltbras Logo" 
                className="h-12 w-12 object-contain"
              />
              <span className="text-2xl font-display font-bold">Boltbras</span>
            </div>
            <p className="text-white/80 text-sm">
              Desenvolver e solucionar é nossa missão
            </p>
          </div>

          {/* Endereço */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Endereço</h3>
            <div className="flex items-start gap-2 text-white/80 text-sm">
              <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <span>R Jeremias da Rocha</span>
            </div>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Contato</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-white/80">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:84987083206" className="hover:text-white transition-colors">
                  (84) 98708-3206
                </a>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:evertonferreiradelima@gmail.com" className="hover:text-white transition-colors">
                  evertonferreiradelima@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Horário */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Horário</h3>
            <div className="flex items-start gap-2 text-white/80 text-sm">
              <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <div>
                <p>Seg-Sex: 7:30-11:30, 13:30-17:30</p>
                <p>Sábado: 08:00-12:00</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 text-center text-white/70 text-sm">
          <p>&copy; {new Date().getFullYear()} Boltbras. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
