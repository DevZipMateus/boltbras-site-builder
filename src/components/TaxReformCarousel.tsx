import { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const slides = [
  { id: 1, src: "/tax-reform/slide-1.png", alt: "Split Payment - Slide 1" },
  { id: 2, src: "/tax-reform/slide-2.png", alt: "Split Payment - Slide 2" },
  { id: 3, src: "/tax-reform/slide-3.png", alt: "Split Payment - Slide 3" },
  { id: 4, src: "/tax-reform/slide-4.png", alt: "Split Payment - Slide 4" },
  { id: 5, src: "/tax-reform/slide-5.png", alt: "Split Payment - Slide 5" },
  { id: 6, src: "/tax-reform/slide-6.png", alt: "Split Payment - Slide 6" },
  { id: 7, src: "/tax-reform/slide-7.png", alt: "Split Payment - Slide 7" },
  { id: 8, src: "/tax-reform/slide-8.png", alt: "Split Payment - Slide 8" },
  { id: 9, src: "/tax-reform/slide-9.png", alt: "Split Payment - Slide 9" },
  { id: 10, src: "/tax-reform/slide-10.png", alt: "Split Payment - Slide 10" },
  { id: 11, src: "/tax-reform/slide-11.png", alt: "Split Payment - Slide 11" },
];

const TaxReformCarousel = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = useCallback((index: number) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedImageIndex(null);
  }, []);

  const nextImage = useCallback(() => {
    if (selectedImageIndex !== null && selectedImageIndex < slides.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  }, [selectedImageIndex]);

  const prevImage = useCallback(() => {
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  }, [selectedImageIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;
      
      if (e.key === "ArrowRight") {
        nextImage();
      } else if (e.key === "ArrowLeft") {
        prevImage();
      } else if (e.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, nextImage, prevImage, closeModal]);

  return (
    <>
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
              Reforma Tributária - Split Payment
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Entenda como funciona o novo modelo de Split Payment da Reforma Tributária. 
              Explore nosso material completo sobre as mudanças e impactos para o seu negócio.
            </p>
          </div>

          <div className="relative px-12">
            <Carousel
              opts={{
                align: "start",
                loop: false,
              }}
              className="w-full"
            >
              <CarouselContent>
                {slides.map((slide, index) => (
                  <CarouselItem key={slide.id} className="md:basis-1/2 lg:basis-1/3">
                    <button
                      onClick={() => openModal(index)}
                      className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 w-full"
                    >
                      <div className="aspect-[16/9] bg-muted">
                        <img
                          src={slide.src}
                          alt={slide.alt}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                      <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-sm font-semibold drop-shadow-lg">
                          Clique para expandir - Slide {index + 1}/{slides.length}
                        </p>
                      </div>
                    </button>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />
            </Carousel>
          </div>
        </div>
      </section>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] w-full h-full p-0 bg-black/95 border-none">
          <DialogClose className="absolute right-4 top-4 z-50 rounded-sm bg-white/10 p-2 opacity-70 ring-offset-background transition-opacity hover:opacity-100 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
            <X className="h-6 w-6 text-white" />
            <span className="sr-only">Fechar</span>
          </DialogClose>

          {selectedImageIndex !== null && (
            <div className="relative w-full h-full flex items-center justify-center p-4">
              <img
                src={slides[selectedImageIndex].src}
                alt={slides[selectedImageIndex].alt}
                className="max-w-full max-h-full object-contain"
              />

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">
                {selectedImageIndex + 1} / {slides.length}
              </div>

              <Button
                onClick={prevImage}
                disabled={selectedImageIndex === 0}
                variant="secondary"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30"
              >
                <ChevronLeft className="h-8 w-8 text-white" />
                <span className="sr-only">Anterior</span>
              </Button>

              <Button
                onClick={nextImage}
                disabled={selectedImageIndex === slides.length - 1}
                variant="secondary"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30"
              >
                <ChevronRight className="h-8 w-8 text-white" />
                <span className="sr-only">Próximo</span>
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default TaxReformCarousel;
