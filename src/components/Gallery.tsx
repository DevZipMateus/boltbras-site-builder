import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Autoplay from "embla-carousel-autoplay";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

  // Dividindo as 73 imagens em 3 grupos
  const gallery1 = Array.from({ length: 24 }, (_, i) => {
    const imageMap: { [key: number]: string } = {
      0: "Cliente_1_1_Serrote.png",
      1: "Cliente_1_2_YUR01452.png",
      2: "Cliente_1_3_YUR01472.png",
      3: "Cliente_1_4_YUR01473.png",
      4: "Cliente_1_5_YUR01480.png",
      5: "Cliente_1_6_YUR01483.png",
      6: "Cliente_1_7_YUR01491.png",
      7: "Cliente_1_8_YUR01505.png",
      8: "Cliente_1_9_YUR01626-Editar.png",
      9: "Cliente_1_10_YUR01676.png",
      10: "Cliente_1_11_YUR01689-Editar.png",
      11: "Cliente_1_12_YUR01699.png",
      12: "Cliente_1_13_YUR01700.png",
      13: "Cliente_1_14_YUR01706.png",
      14: "Cliente_1_15_YUR01709.png",
      15: "Cliente_1_16_YUR01719.png",
      16: "Cliente_1_17_YUR01724.png",
      17: "Cliente_1_18_YUR01729.png",
      18: "Cliente_1_19_YUR01733.png",
      19: "Cliente_1_20_YUR01756.png",
      20: "Cliente_1_21_YUR01759.png",
      21: "Cliente_1_22_YUR01769.png",
      22: "Cliente_1_23_YUR01788-Editar.png",
      23: "Cliente_1_24_YUR01800.png",
    };
    return `/galeria/${imageMap[i]}`;
  });

  const gallery2 = Array.from({ length: 25 }, (_, i) => {
    const num = i + 25;
    const imageMap: { [key: number]: string } = {
      25: "Cliente_1_25_YUR01804.png",
      26: "Cliente_1_26_YUR01811.png",
      27: "Cliente_1_27_YUR01828.png",
      28: "Cliente_1_28_YUR01846.png",
      29: "Cliente_1_29_YUR01859.png",
      30: "Cliente_1_30_YUR01882.png",
      31: "Cliente_1_31_YUR01905.png",
      32: "Cliente_1_32_YUR01936.png",
      33: "Cliente_1_33_YUR01944.png",
      34: "Cliente_1_34_YUR01947.png",
      35: "Cliente_1_35_YUR01951.png",
      36: "Cliente_1_36_YUR01963.png",
      37: "Cliente_1_37_YUR01968.png",
      38: "Cliente_1_38_YUR01971.png",
      39: "Cliente_1_39_YUR01978.png",
      40: "Cliente_1_40_YUR01985.png",
      41: "Cliente_1_41_YUR01987.png",
      42: "Cliente_1_42_YUR01991.png",
      43: "Cliente_1_43_YUR02010.png",
      44: "Cliente_1_44_YUR02033.png",
      45: "Cliente_1_45_YUR02037-Editar.png",
      46: "Cliente_1_46_YUR02046.png",
      47: "Cliente_1_47_YUR02083.png",
      48: "Cliente_1_48_YUR02103-Editar.png",
      49: "Cliente_1_49_YUR02108.png",
    };
    return `/galeria/${imageMap[num]}`;
  });

  const gallery3 = Array.from({ length: 24 }, (_, i) => {
    const num = i + 50;
    const imageMap: { [key: number]: string } = {
      50: "Cliente_1_50_IMG_4028.jpg",
      51: "Cliente_1_51_IMG_4031.jpg",
      52: "Cliente_1_52_IMG_4035.jpg",
      53: "Cliente_1_53_IMG_4041.jpg",
      54: "Cliente_1_54_IMG_4048.jpg",
      55: "Cliente_1_55_IMG_4062.jpg",
      56: "Cliente_1_56_IMG_4068.jpg",
      57: "Cliente_1_57_IMG_4070.jpg",
      58: "Cliente_1_58_IMG_4080.jpg",
      59: "Cliente_1_59_IMG_4102.jpg",
      60: "Cliente_1_60_IMG_4110.jpg",
      61: "Cliente_1_61_IMG_4113.jpg",
      62: "Cliente_1_62_IMG_4127.jpg",
      63: "Cliente_1_63_IMG_4131.jpg",
      64: "Cliente_1_64_IMG_4133.jpg",
      65: "Cliente_1_65_IMG_4135.jpg",
      66: "Cliente_1_66_IMG_4147.jpg",
      67: "Cliente_1_67_IMG_4148.jpg",
      68: "Cliente_1_68_IMG_4161.jpg",
      69: "Cliente_1_69_IMG_4164.jpg",
      70: "Cliente_1_70_IMG_4171.jpg",
      71: "Cliente_1_71_IMG_4178.jpg",
      72: "Cliente_1_72_IMG_4214.jpg",
      73: "Cliente_1_73_IMG_4275.jpg",
    };
    return `/galeria/${imageMap[num]}`;
  });

  const CarouselSection = ({ images, title }: { images: string[]; title: string }) => {
    const plugin = React.useRef(
      Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: false })
    );

    return (
      <div className="w-full">
        <h3 className="text-2xl font-display font-bold text-white mb-6">{title}</h3>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin.current]}
          className="w-full"
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card 
                    className="cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden"
                    onClick={() => setSelectedImage(image)}
                  >
                    <CardContent className="p-0">
                      <img
                        src={image}
                        alt={`Galeria ${title} - Imagem ${index + 1}`}
                        className="w-full h-64 object-cover"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </div>
    );
  };

  return (
    <section id="galeria" className="section-padding bg-black">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold text-white mb-4">
            Nossa Galeria
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Conheça nossos projetos e soluções
          </p>
        </div>

        <div className="space-y-12">
          <CarouselSection images={gallery1} title="Projetos em Destaque" />
          <CarouselSection images={gallery2} title="Soluções Implementadas" />
          <CarouselSection images={gallery3} title="Nosso Portfólio" />
        </div>

        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl p-0">
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Imagem expandida"
                className="w-full h-auto"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Gallery;
