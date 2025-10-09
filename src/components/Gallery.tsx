import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

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

const IMAGES_PER_PAGE = 20;

const Gallery = () => {
  const [visibleCount, setVisibleCount] = useState(IMAGES_PER_PAGE);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const visibleImages = allImages.slice(0, visibleCount);
  const hasMore = visibleCount < allImages.length;

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + IMAGES_PER_PAGE, allImages.length));
  };

  return (
    <section id="galeria" className="section-padding bg-black">
      <div className="container-custom">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-display font-bold text-white mb-4">
            Galeria Boltbras
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Conheça nossos produtos, equipamentos e soluções em ação
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {visibleImages.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(image)}
              className="cursor-pointer group rounded-lg border border-white/20 hover:border-primary transition-all hover:shadow-lg animate-fade-in bg-black flex items-center justify-center p-2"
            >
              <img
                src={image}
                alt={`Produto Boltbras ${index + 1}`}
                className="max-w-full h-auto object-contain group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {hasMore && (
          <div className="text-center">
            <Button
              onClick={loadMore}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md"
            >
              Ver mais
            </Button>
          </div>
        )}

        {!hasMore && visibleCount > IMAGES_PER_PAGE && (
          <p className="text-center text-white/70">
            Você visualizou todas as {allImages.length} imagens
          </p>
        )}

        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl p-0 bg-black border-white/20">
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
