import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
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
  DialogTrigger,
} from "@/components/ui/dialog";
import Autoplay from "embla-carousel-autoplay";

const allImages = [
  "/galeria/Cliente_1_1_Serrote.png",
  "/galeria/Cliente_1_2_YUR01452.png",
  "/galeria/Cliente_1_3_YUR01472.png",
  "/galeria/Cliente_1_4_YUR01473.png",
  "/galeria/Cliente_1_5_YUR01480.png",
  "/galeria/Cliente_1_6_YUR01483.png",
  "/galeria/Cliente_1_7_YUR01491.png",
  "/galeria/Cliente_1_8_YUR01505.png",
  "/galeria/Cliente_1_9_YUR01626-Editar.png",
  "/galeria/Cliente_1_10_YUR01676.png",
  "/galeria/Cliente_1_11_YUR01689-Editar.png",
  "/galeria/Cliente_1_12_YUR01699.png",
  "/galeria/Cliente_1_13_YUR01700.png",
  "/galeria/Cliente_1_14_YUR01706.png",
  "/galeria/Cliente_1_15_YUR01709.png",
  "/galeria/Cliente_1_16_YUR01719.png",
  "/galeria/Cliente_1_17_YUR01724.png",
  "/galeria/Cliente_1_18_YUR01729.png",
  "/galeria/Cliente_1_19_YUR01733.png",
  "/galeria/Cliente_1_20_YUR01756.png",
  "/galeria/Cliente_1_21_YUR01759.png",
  "/galeria/Cliente_1_22_YUR01769.png",
  "/galeria/Cliente_1_23_YUR01788-Editar.png",
  "/galeria/Cliente_1_24_YUR01800.png",
  "/galeria/Cliente_1_25_YUR01804.png",
  "/galeria/Cliente_1_26_YUR01811.png",
  "/galeria/Cliente_1_27_YUR01828.png",
  "/galeria/Cliente_1_28_YUR01846.png",
  "/galeria/Cliente_1_29_YUR01859.png",
  "/galeria/Cliente_1_30_YUR01882.png",
  "/galeria/Cliente_1_31_YUR01905.png",
  "/galeria/Cliente_1_32_YUR01936.png",
  "/galeria/Cliente_1_33_YUR01944.png",
  "/galeria/Cliente_1_34_YUR01947.png",
  "/galeria/Cliente_1_35_YUR01951.png",
  "/galeria/Cliente_1_36_YUR01963.png",
  "/galeria/Cliente_1_37_YUR01968.png",
  "/galeria/Cliente_1_38_YUR01971.png",
  "/galeria/Cliente_1_39_YUR01978.png",
  "/galeria/Cliente_1_40_YUR01985.png",
  "/galeria/Cliente_1_41_YUR01987.png",
  "/galeria/Cliente_1_42_YUR01991.png",
  "/galeria/Cliente_1_43_YUR02010.png",
  "/galeria/Cliente_1_44_YUR02033.png",
  "/galeria/Cliente_1_45_YUR02037-Editar.png",
  "/galeria/Cliente_1_46_YUR02046.png",
  "/galeria/Cliente_1_47_YUR02083.png",
  "/galeria/Cliente_1_48_YUR02103-Editar.png",
  "/galeria/Cliente_1_49_YUR02108.png",
  "/galeria/Cliente_1_50_IMG_4028.jpg",
  "/galeria/Cliente_1_51_IMG_4031.jpg",
  "/galeria/Cliente_1_52_IMG_4035.jpg",
  "/galeria/Cliente_1_53_IMG_4041.jpg",
  "/galeria/Cliente_1_54_IMG_4048.jpg",
  "/galeria/Cliente_1_55_IMG_4062.jpg",
  "/galeria/Cliente_1_56_IMG_4068.jpg",
  "/galeria/Cliente_1_57_IMG_4070.jpg",
  "/galeria/Cliente_1_58_IMG_4080.jpg",
  "/galeria/Cliente_1_59_IMG_4102.jpg",
  "/galeria/Cliente_1_60_IMG_4110.jpg",
  "/galeria/Cliente_1_61_IMG_4113.jpg",
  "/galeria/Cliente_1_62_IMG_4127.jpg",
  "/galeria/Cliente_1_63_IMG_4131.jpg",
  "/galeria/Cliente_1_64_IMG_4133.jpg",
  "/galeria/Cliente_1_65_IMG_4135.jpg",
  "/galeria/Cliente_1_66_IMG_4147.jpg",
  "/galeria/Cliente_1_67_IMG_4148.jpg",
  "/galeria/Cliente_1_68_IMG_4161.jpg",
  "/galeria/Cliente_1_69_IMG_4164.jpg",
  "/galeria/Cliente_1_70_IMG_4171.jpg",
  "/galeria/Cliente_1_71_IMG_4178.jpg",
  "/galeria/Cliente_1_72_IMG_4214.jpg",
  "/galeria/Cliente_1_73_IMG_4275.jpg",
];

// Dividir imagens em 3 grupos
const imagesPerCarousel = Math.ceil(allImages.length / 3);
const carousel1Images = allImages.slice(0, imagesPerCarousel);
const carousel2Images = allImages.slice(imagesPerCarousel, imagesPerCarousel * 2);
const carousel3Images = allImages.slice(imagesPerCarousel * 2);

const GalleryCarousel = ({ images, title }: { images: string[]; title: string }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="w-full">
      <h3 className="text-2xl font-display font-bold text-foreground mb-6">{title}</h3>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
            stopOnInteraction: false,
            stopOnMouseEnter: false,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                      <CardContent className="p-0">
                        <img
                          src={image}
                          alt={`Galeria Boltbras ${index + 1}`}
                          className="w-full h-64 object-cover rounded-lg"
                          loading="lazy"
                        />
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl w-full">
                    <img
                      src={image}
                      alt={`Galeria Boltbras ${index + 1}`}
                      className="w-full h-auto"
                    />
                  </DialogContent>
                </Dialog>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

const Gallery = () => {
  return (
    <section id="galeria" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-display font-bold text-foreground mb-4">
            Nossa galeria
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça nossos produtos e soluções em ação
          </p>
        </div>

        <div className="space-y-12">
          <GalleryCarousel images={carousel1Images} title="Ferramentas e equipamentos" />
          <GalleryCarousel images={carousel2Images} title="Fixadores e materiais" />
          <GalleryCarousel images={carousel3Images} title="Soluções industriais" />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
