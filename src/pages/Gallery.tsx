import Header from "@/components/Header";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const GalleryPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="pt-20">
        <Gallery />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default GalleryPage;
