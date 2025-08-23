import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import VideoGallery from '@/components/VideoGallery';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <VideoGallery />
      <Footer />
    </div>
  );
};

export default Index;
